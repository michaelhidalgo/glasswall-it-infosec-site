---
title: SQL Injection
sidebar_label: SQL Injection
---

#SQL Injection


This notebook takes you through some of the techniques used to take advantage of SQLI vulnerabilities. You can either review the code blocks and their outputs, or you can follow along by running each code block. You will need access to SQL Server that has the OLTP DB WideWorldImporters which can be download for free from [Microsoft.](https://docs.microsoft.com/en-us/sql/samples/wide-world-importers-oltp-install-configure?view=sql-server-ver15)

Some definitions of SQLi, taken from a number of different sources. 
- SQL injection is a code injection technique that might destroy your database.
- SQL injection is one of the most common web hacking techniques.
- SQL injection is the placement of malicious code in SQL statements, via web page input. <br/>
[Reference](https://www.w3schools.com/sql/sql_injection.asp) <br/>

It is currently the [OWASP](https://appcheck-ng.com/appcheck-vs-owasp-top-10/?gclid=Cj0KCQjwtsv7BRCmARIsANu-CQdJq-3ASHZFM59JI9RxhvRA0stiRwlGaPrpWKtJNXfb4FmrqLIFJuoaAn6IEALw_wcB) No.1 vulnerability

## Example 1 - Basic Select
The below code looks like a very simple dynamic query which accepts a users name as an input. You could imagine a login screen that you enter you user name into before you login. 

```SQL
DECLARE @UserId NVARCHAR(255)
		,@SQL NVARCHAR(1000)

SET @UserId = 2

SET @SQL = 'SELECT * 
			FROM Application.People AS P
			WHERE P.PersonId = ' + @UserId

PRINT @SQL
EXEC(@SQL)

```
Now what happens if you change the input slightly.

You can now see that the original logic of the query is no longer intact.

```SQL
DECLARE @UserId NVARCHAR(255)
		,@SQL NVARCHAR(1000)

SET @UserId = '2 OR 1 = 1;'

SET @SQL = 'SELECT * 
			FROM Application.People AS P
			WHERE P.FullName = ' + @UserId

PRINT @SQL
EXEC(@SQL)
```

## Example 2 - UserName and Password

Now lets look at a more realistic example, you have a user name and password fields in a login window.

A quick change to the user name passed in '''Lily Code''--' and when you view the SQL Statement below you will see that the password section has been codded out. 

In SQL Server the following commands can be used to comment out lines of sections of code. <br/>
-- This will comment out everything to the right <br/>
/* everything between these two points, marked with a slash and asterisk  will be commented out */

``` SQL
DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)
		,@SQL NVARCHAR(1000)

SET @UserName = '''Lily Code''--'
SET @Password = '''Doesnt matter'''

SET @SQL = 'SELECT * 
			FROM Application.People AS P
			WHERE P.FullName = ' + @UserName + ' AND P.Password = ' + @Password

PRINT @SQL
EXEC(@SQL)

SELECT * FROM Application.People AS P WHERE P.FullName = 'Lily Code'-- AND P.Password = 'Doesnt matter'
```
## Example 3 - Selecting additional data

Now this is where an experienced hacker can really start to attack your SQL Server, or worse start changing things without you knowing, bank account details, extracting card details etc.

In the below example as well as copying out the password section the hacker has inserted the following code "SELECT \* FROM sys.tables". This is a system table, which as you can see lists out all the tables in the current database.

Now think about what would happen if a hacker had access to your database, what information would they take, or should they just run DROP DATABASE.

```SQL
DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)
	,@SQL NVARCHAR(1000)

SET @UserName = '''Lily Code''SELECT * FROM sys.tables AS T INNER JOIN sys.schemas AS S ON T.Schema_Id = S.Schema_Id;--'
SET @Password = '''Doesnt matter'''

SET @SQL = 'SELECT * 
			FROM Application.People AS P
			WHERE P.FullName = ' + @UserName + ' AND P.Password = ' + @Password

PRINT @SQL
EXEC(@SQL)
```
You can even use the same method to find out the version of SQL Server that is being used.

```SQL
DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)
		,@SQL NVARCHAR(1000)

SET @UserName = '''Lily Code'' SELECT @@Version AS SqlServerVersion; SELECT * FROM Sales.Customers;--'
SET @Password = '''Doesnt matter'''

SET @SQL = 'SELECT * 
			FROM Application.People AS P
			WHERE P.FullName = ' + @UserName + ' AND P.Password = ' + @Password

PRINT @SQL
EXEC(@SQL)
```
## Example 4 - Dropping Objects

The exploits of the hacker so far have been focused on phishing style attacks, trying to retrieve data. It is however possible to cause a denial of service style attack by dropping tables or changing data. This could then make it impossible for the application to function or users to login.

The first script below will setup a new customer table \[Sales\].\[Customers\_SQLI\_Example\] which is just for testing the following command.

```SQL
DROP TABLE IF EXISTS [Sales].[Customers_SQLI_Example]
GO

CREATE TABLE [Sales].[Customers_SQLI_Example](
	[CustomerID] [int] NOT NULL,
	[CustomerName] [nvarchar](100) NOT NULL,
	[BillToCustomerID] [int] NOT NULL,
	[CustomerCategoryID] [int] NOT NULL,
	[BuyingGroupID] [int] NULL,
	[PrimaryContactPersonID] [int] NOT NULL,
	[AlternateContactPersonID] [int] NULL,
	[DeliveryMethodID] [int] NOT NULL,
	[DeliveryCityID] [int] NOT NULL,
	[PostalCityID] [int] NOT NULL,
	[CreditLimit] [decimal](18, 2) NULL,
	[AccountOpenedDate] [date] NOT NULL,
	[StandardDiscountPercentage] [decimal](18, 3) NOT NULL,
	[IsStatementSent] [bit] NOT NULL,
	[IsOnCreditHold] [bit] NOT NULL,
	[PaymentDays] [int] NOT NULL,
	[PhoneNumber] [nvarchar](20) NOT NULL,
	[FaxNumber] [nvarchar](20) NOT NULL,
	[DeliveryRun] [nvarchar](5) NULL,
	[RunPosition] [nvarchar](5) NULL,
	[WebsiteURL] [nvarchar](256) NOT NULL,
	[DeliveryAddressLine1] [nvarchar](60) NOT NULL,
	[DeliveryAddressLine2] [nvarchar](60) NULL,
	[DeliveryPostalCode] [nvarchar](10) NOT NULL,
	[DeliveryLocation] [geography] NULL,
	[PostalAddressLine1] [nvarchar](60) NOT NULL,
	[PostalAddressLine2] [nvarchar](60) NULL,
	[PostalPostalCode] [nvarchar](10) NOT NULL,
	[LastEditedBy] [int] NOT NULL,
	[ValidFrom] [datetime2](7) NOT NULL,
	[ValidTo] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Sales_Customers_SQLI_Example] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [USERDATA],
 CONSTRAINT [UQ_Sales_Customers_SQLI_Example_CustomerName] UNIQUE NONCLUSTERED 
(
	[CustomerName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [USERDATA]
) ON [USERDATA] TEXTIMAGE_ON [USERDATA]
GO

INSERT [Sales].[Customers_SQLI_Example] ([CustomerID], [CustomerName], [BillToCustomerID], [CustomerCategoryID], [BuyingGroupID], [PrimaryContactPersonID], [AlternateContactPersonID], [DeliveryMethodID], [DeliveryCityID], [PostalCityID], [CreditLimit], [AccountOpenedDate], [StandardDiscountPercentage], [IsStatementSent], [IsOnCreditHold], [PaymentDays], [PhoneNumber], [FaxNumber], [DeliveryRun], [RunPosition], [WebsiteURL], [DeliveryAddressLine1], [DeliveryAddressLine2], [DeliveryPostalCode], [DeliveryLocation], [PostalAddressLine1], [PostalAddressLine2], [PostalPostalCode], [LastEditedBy], [ValidFrom], [ValidTo]) VALUES (1, N'Tailspin Toys (Head Office)', 1, 7, 2, 47, 48, 7, 6863, 6863, CAST(3600.00 AS Decimal(18, 2)), CAST(N'2013-01-01' AS Date), CAST(0.000 AS Decimal(18, 3)), 0, 0, 30, N'(612) 555-2458', N'(612) 555-1723', N'', N'', N'http://www.tailspintoys.com/', N'8408 Sycamore Trail', N'8408 Sycamore Trail', N'57143', 0xE6100000010C47A00B34E9BA4640914F7E41C11B58C0, N'547 Eighth Alley', N'', N'28949', 1, CAST(N'2013-01-01T00:00:00.0000000' AS DateTime2), CAST(N'9999-12-31T23:59:59.9999999' AS DateTime2))
GO
INSERT [Sales].[Customers_SQLI_Example] ([CustomerID], [CustomerName], [BillToCustomerID], [CustomerCategoryID], [BuyingGroupID], [PrimaryContactPersonID], [AlternateContactPersonID], [DeliveryMethodID], [DeliveryCityID], [PostalCityID], [CreditLimit], [AccountOpenedDate], [StandardDiscountPercentage], [IsStatementSent], [IsOnCreditHold], [PaymentDays], [PhoneNumber], [FaxNumber], [DeliveryRun], [RunPosition], [WebsiteURL], [DeliveryAddressLine1], [DeliveryAddressLine2], [DeliveryPostalCode], [DeliveryLocation], [PostalAddressLine1], [PostalAddressLine2], [PostalPostalCode], [LastEditedBy], [ValidFrom], [ValidTo]) VALUES (2, N'Tailspin Toys (DeKalb, IL)', 1, 3, 2, 49, 47, 2, 8758, 8758, CAST(3500.00 AS Decimal(18, 2)), CAST(N'2013-01-01' AS Date), CAST(0.000 AS Decimal(18, 3)), 0, 0, 30, N'(217) 555-1687', N'(217) 555-9570', N'', N'', N'http://www.tailspintoys.com/', N'531 9th Way', N'531 9th Way', N'72436', 0xE6100000010C693FADFDF8F64440AAA4A9F9053056C0, N'2218 Walnut Highway', N'', N'76090', 1, CAST(N'2013-01-01T00:00:00.0000000' AS DateTime2), CAST(N'9999-12-31T23:59:59.9999999' AS DateTime2))
GO

SELECT * FROM Sales.Customers_SQLI_Example
```
You can see that the stored procedure has been created and two records have been inserted. Running the below code will now DROP this newly created table.

```SQL
DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)
		,@SQL NVARCHAR(1000)

SET @UserName = '''Lily Code'' DROP TABLE IF EXISTS Sales.Customers_SQLI_Example;--'
SET @Password = '''Doesnt matter'''

SET @SQL = 'SELECT * 
			FROM Application.People AS P
			WHERE P.FullName = ' + @UserName + ' AND P.PersonID = ' + @Password

PRINT @SQL
EXEC(@SQL)

SELECT * FROM Sales.Customers_SQLI_Example
```

## Best Practice

There are a few different ways you can execute a command against a SQL database. One such example is by using Stored Procedures.

The example below if a very basic stored procedure which returns whether or not the user has entered a correct username and password.

```SQL
DROP PROCEDURE IF EXISTS Application.CheckLogin
GO

CREATE PROCEDURE Application.CheckLogin
	@ProvidedUserName NVARCHAR(50)
	,@ProvidedPassword NVARCHAR(20)
AS
BEGIN

	DECLARE @IsPermittedToLogon NVARCHAR(10)
	
	SELECT	@IsPermittedToLogon = P.IsPermittedToLogon
	FROM	Application.People AS P
	WHERE	P.FullName = @ProvidedUserName
	AND		P.HashedPassword IS NOT NULL

	SELECT @IsPermittedToLogon AS IsPermittedToLogon

END
```

Use the SQL below to execute the stored procedure, it will return a 1 if the user credentials are correct.

```SQL
DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)

SET @UserName = 'Lily Code'
SET @Password = '0xCDF7EE2DB6B94C9BCF2D003E37354081BCD53D7B983F1412729D3BC1E4F89876'

EXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password
```
Now lets try one of the SQLi techniques used above to comment out the password.

```SQL
DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)

SET @UserName = '''Lily Code''--'
SET @Password = 'Do not know'

EXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password



SET @UserName = '''Lily Code'' SELECT @@Version AS SqlServerVersion; SELECT * FROM Sales.Customers;--'
EXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password
```
You will have noticed that the password field was not ignored, this is because each parameters it used individual and not used to build a dynamic SQL query.

## Stored Procedures are not always free of vulnerabilities

This is an extract from an existing stored procedure which has potential vulnerabilities. This is because it is using dynamic T-SQL statements within the stored procedure.

In the below example mitigating steps have been include to reduce the risk of a SQLi attack. The passed in variables are being used to build dynamic sql, which ideally should be avoided, but sometimes there is no other logical option. In this case the @Company variable is being checked and known malicious commands are removed. 

DO NOT TRY AND RUN THE BELOW

```SQL
-- This code should not be executed
PROCEDURE NAME PROCEDURE [temp].[usp_SelectT]

	@Company		NVARCHAR(100)
	,@FromDate		DATETIME2(7)
	,@ToDate		DATETIME2(7)
	,@EmailFrom		EmailFrom		READONLY	
	,@EmailTo		EmailTo			READONLY
	,@Trans			Trans			READONLY
	,@FileName		FileNames		READONLY
	,@FileOutCome	FileOutcome		READONLY
	,@EmailSubject	EmailSubject	READONLY
	,@BatchSize		INT = 10
	,@PageNumber	INT = 1
	,@OrderBy		INT = 2	-- 1 = Status, 2 = Event Time, 3 = From, 4 = To, 5= Subject, 6 = File Count
	,@OrderByDir	INT = 2 -- 1 = ASC, 2 = DESC
	

AS
BEGIN


	

	-- Added to deal with SQL Injection for this variable.
	SELECT @Company = REPLACE(@Company, '--','')
	SELECT @Company = REPLACE(@Company, 'WAITFOR','')
	SELECT @Company = REPLACE(@Company, '=','')
	SELECT @Company = REPLACE(@Company, ';','')
	SELECT @Company = REPLACE(@Company, '/*','')
	SELECT @Company = REPLACE(@Company, '*/','')
	SELECT @Company = REPLACE(@Company, ')','')

	DECLARE @Sql VARCHAR(MAX)
			,@Offset INT

	SET @Offset = (@PageNumber -1) * @BatchSize	

	SET @Sql = ' '

	SET @Sql = @Sql	+ '

		SELECT	
				ET.TId
				,STRING_AGG ( ISNULL(ET.EmailTo,''N/A''), '';'') AS EmailTo
				INTO #EmailToAgg
		FROM		dbo.EmailTable		AS ET'

	IF ((SELECT COUNT(*) FROM @EmailTo) > 0)
	BEGIN
		SELECT * INTO #EmailTo FROM @EmailTo
		SET @Sql = @Sql	+ ' INNER JOIN	#EmailTo AS E	ON ET.EmailTo	= E.EmailAddress '
	END

	SET @Sql = @Sql	+ '

		WHERE	ET.CompanyId = ''' + @Company + ''' '

	IF ((SELECT COUNT(*) FROM @Transaction) > 0)
	BEGIN
		SELECT * INTO #Trans FROM @Trans
		SET @Sql = @Sql	+ ' AND ET.SId IN (SELECT TId FROM #Trans)'
	END

	SET @Sql = @Sql	+ ' GROUP BY ET.TId
						OPTION  (RECOMPILE)
						'

	SET @Sql = @Sql	+  ' 

	SELECT	
				-- Required for the main Transaction Page or for one of the filters. Could use a different one
				RR.Id 
				,RR.Company
				,RR.Date
				,RR.[From] 
				,ET.EmailTo		
				,RR.SubjectTruncated 
				INTO #StagingResults

	FROM		dbo.ReceiverR		AS RR 
	INNER JOIN	#EmailToAgg					AS ET	ON SR.Id = ET.TSId
	WHERE	RR.Company = ''' + @Tenant + '''
	AND		RR.Date >= ''' + CAST(@FromDate AS VARCHAR) + ''' AND RR.Date <= ''' + CAST(@ToDate AS VARCHAR) + '''
```

## Database Permissions

It is also very important to restrict the access permissions of the user that the application is using the execute the code. Several of the statements I have used above for retrieving data and altering the DB would not be possible if the correct user had been granted the required permissions.

The below may need to be run in SQL Server Management Studio.

If you are using a new install of SQL Server then by default SQL Logins will be disabled. 

Steps to enable

1.  Open SSMS and connect with AD user
2.  Right click on the server and go to Security
3.  Change the Server Authentication to "SQL Server and Windows Authentication mode"
4.  Re-start the SQL Server service

```SQL
USE WideWorldImporters

DROP USER IF EXISTS TestAccount

USE MASTER
GO

DROP USER IF EXISTS TestAccount

IF EXISTS (
			SELECT	1
			FROM	sys.sql_logins AS L
			WHERE	l.name = 'TestAccount'
		)
BEGIN
	DROP LOGIN TestAccount
END
GO

-- Code to create the new used and assign required permissions

CREATE LOGIN TestAccount  WITH PASSWORD = 'ThisIsNotAGoodPasswordToUse123'

CREATE USER TestAccount FROM LOGIN TestAccount

GRANT CONNECT SQL TO TestAccount

USE WideWorldImporters
GO

CREATE USER TestAccount FROM LOGIN TestAccount

GRANT EXECUTE ON Application.CheckLogin TO TestAccount 
```
Now change the connection to login using the new user. This process should be run using Azure Data Studio notebooks. This is to test that the created user is able to execute the stored procedure, but even if SQLi is possible, the user can not select directly from any of the tables. 

```SQL
USE WideWorldImporters
GO

DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)

SET @UserName = 'Lily Code'
SET @Password = '0xCDF7EE2DB6B94C9BCF2D003E37354081BCD53D7B983F1412729D3BC1E4F89876'

EXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password
```
You can see from the above that user has permissions to run the stored procedure.

Now run the below which is one of the SQLi statements we run above, it should return no data because the user does not have permissions to select from that table.
```SQL
DECLARE @UserName NVARCHAR(255)
        ,@Password NVARCHAR(255)
		,@SQL NVARCHAR(1000)

SET @UserName = '''Lily Code''SELECT * FROM sys.tables AS T INNER JOIN sys.schemas AS S ON T.Schema_Id = S.Schema_Id;--'
SET @Password = '''Doesnt matter'''

SET @SQL = 'SELECT * 
			FROM Application.People AS P
			WHERE P.FullName = ' + @UserName + ' AND P.PersonID = ' + @Password

PRINT @SQL
EXEC(@SQL)
```