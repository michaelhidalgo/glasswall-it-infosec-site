(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return p}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),d=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},E=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),E=a,p=u["".concat(s,".").concat(E)]||u[E]||m[E]||r;return t?o.a.createElement(p,i(i({ref:n},c),{},{components:t})):o.a.createElement(p,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=E;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},149:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/sqljoke-0be20409d1c485cfe6935b2d2351b018.jpg"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t(3),o=t(8),r=(t(0),t(106)),s={title:"SQL Injection",sidebar_label:"SQL Injection"},i={unversionedId:"security_awareness/owasp/sqli",id:"security_awareness/owasp/sqli",isDocsHomePage:!1,title:"SQL Injection",description:"DROP TABLE",source:"@site/docs/security_awareness/owasp/sqli.md",slug:"/security_awareness/owasp/sqli",permalink:"/docs/security_awareness/owasp/sqli",version:"current",sidebar_label:"SQL Injection",sidebar:"someSidebar",previous:{title:"XML External Entities (XXE)",permalink:"/docs/security_awareness/languages/Python/XXE"}},l=[{value:"Example 1 - Basic Select",id:"example-1---basic-select",children:[]},{value:"Example 2 - UserName and Password",id:"example-2---username-and-password",children:[]},{value:"Example 3 - Selecting additional data",id:"example-3---selecting-additional-data",children:[]},{value:"Example 4 - Dropping Objects",id:"example-4---dropping-objects",children:[]},{value:"Best Practice",id:"best-practice",children:[]},{value:"Stored Procedures are not always free of vulnerabilities",id:"stored-procedures-are-not-always-free-of-vulnerabilities",children:[]},{value:"Database Permissions",id:"database-permissions",children:[]}],c={rightToc:l};function d(e){var n=e.components,s=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,s,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"DROP TABLE",src:t(149).default}),"\ncredit: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://xkcd.com/"}),"https://xkcd.com/")),Object(r.b)("p",null,"This notebook takes you through some of the techniques used to take advantage of SQLI vulnerabilities. You can either review the code blocks and their outputs, or you can follow along by running each code block. You will need access to SQL Server that has the OLTP DB WideWorldImporters which can be download for free from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/sql/samples/wide-world-importers-oltp-install-configure?view=sql-server-ver15"}),"Microsoft.")),Object(r.b)("p",null,"Some definitions of SQLi, taken from a number of different sources. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SQL injection is a code injection technique that might destroy your database."),Object(r.b)("li",{parentName:"ul"},"SQL injection is one of the most common web hacking techniques."),Object(r.b)("li",{parentName:"ul"},"SQL injection is the placement of malicious code in SQL statements, via web page input. ",Object(r.b)("br",null),Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.w3schools.com/sql/sql_injection.asp"}),"Reference")," ",Object(r.b)("br",null))),Object(r.b)("p",null,"It is currently the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://appcheck-ng.com/appcheck-vs-owasp-top-10/?gclid=Cj0KCQjwtsv7BRCmARIsANu-CQdJq-3ASHZFM59JI9RxhvRA0stiRwlGaPrpWKtJNXfb4FmrqLIFJuoaAn6IEALw_wcB"}),"OWASP")," No.1 vulnerability"),Object(r.b)("h2",{id:"example-1---basic-select"},"Example 1 - Basic Select"),Object(r.b)("p",null,"The below code looks like a very simple dynamic query which accepts a users name as an input. You could imagine a login screen that you enter you user name into before you login. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserId NVARCHAR(255)\n        ,@SQL NVARCHAR(1000)\n\nSET @UserId = 2\n\nSET @SQL = 'SELECT * \n            FROM Application.People AS P\n            WHERE P.PersonId = ' + @UserId\n\nPRINT @SQL\nEXEC(@SQL)\n\n")),Object(r.b)("p",null,"Now what happens if you change the input slightly."),Object(r.b)("p",null,"You can now see that the original logic of the query is no longer intact."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserId NVARCHAR(255)\n        ,@SQL NVARCHAR(1000)\n\nSET @UserId = '2 OR 1 = 1;'\n\nSET @SQL = 'SELECT * \n            FROM Application.People AS P\n            WHERE P.FullName = ' + @UserId\n\nPRINT @SQL\nEXEC(@SQL)\n")),Object(r.b)("h2",{id:"example-2---username-and-password"},"Example 2 - UserName and Password"),Object(r.b)("p",null,"Now lets look at a more realistic example, you have a user name and password fields in a login window."),Object(r.b)("p",null,"A quick change to the user name passed in '''Lily Code''--' and when you view the SQL Statement below you will see that the password section has been codded out. "),Object(r.b)("p",null,"In SQL Server the following commands can be used to comment out lines of sections of code. ",Object(r.b)("br",null),"\n-- This will comment out everything to the right ",Object(r.b)("br",null),"\n/",Object(r.b)("em",{parentName:"p"}," everything between these two points, marked with a slash and asterisk  will be commented out "),"/"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n        ,@SQL NVARCHAR(1000)\n\nSET @UserName = '''Lily Code''--'\nSET @Password = '''Doesnt matter'''\n\nSET @SQL = 'SELECT * \n            FROM Application.People AS P\n            WHERE P.FullName = ' + @UserName + ' AND P.Password = ' + @Password\n\nPRINT @SQL\nEXEC(@SQL)\n\nSELECT * FROM Application.People AS P WHERE P.FullName = 'Lily Code'-- AND P.Password = 'Doesnt matter'\n")),Object(r.b)("h2",{id:"example-3---selecting-additional-data"},"Example 3 - Selecting additional data"),Object(r.b)("p",null,"Now this is where an experienced hacker can really start to attack your SQL Server, or worse start changing things without you knowing, bank account details, extracting card details etc."),Object(r.b)("p",null,'In the below example as well as copying out the password section the hacker has inserted the following code "SELECT ',"*",' FROM sys.tables". This is a system table, which as you can see lists out all the tables in the current database.'),Object(r.b)("p",null,"Now think about what would happen if a hacker had access to your database, what information would they take, or should they just run DROP DATABASE."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n    ,@SQL NVARCHAR(1000)\n\nSET @UserName = '''Lily Code''SELECT * FROM sys.tables AS T INNER JOIN sys.schemas AS S ON T.Schema_Id = S.Schema_Id;--'\nSET @Password = '''Doesnt matter'''\n\nSET @SQL = 'SELECT * \n            FROM Application.People AS P\n            WHERE P.FullName = ' + @UserName + ' AND P.Password = ' + @Password\n\nPRINT @SQL\nEXEC(@SQL)\n")),Object(r.b)("p",null,"You can even use the same method to find out the version of SQL Server that is being used."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n        ,@SQL NVARCHAR(1000)\n\nSET @UserName = '''Lily Code'' SELECT @@Version AS SqlServerVersion; SELECT * FROM Sales.Customers;--'\nSET @Password = '''Doesnt matter'''\n\nSET @SQL = 'SELECT * \n            FROM Application.People AS P\n            WHERE P.FullName = ' + @UserName + ' AND P.Password = ' + @Password\n\nPRINT @SQL\nEXEC(@SQL)\n")),Object(r.b)("h2",{id:"example-4---dropping-objects"},"Example 4 - Dropping Objects"),Object(r.b)("p",null,"The exploits of the hacker so far have been focused on phishing style attacks, trying to retrieve data. It is however possible to cause a denial of service style attack by dropping tables or changing data. This could then make it impossible for the application to function or users to login."),Object(r.b)("p",null,"The first script below will setup a new customer table ","[","Sales","]",".","[","Customers","_","SQLI","_","Example","]"," which is just for testing the following command."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DROP TABLE IF EXISTS [Sales].[Customers_SQLI_Example]\nGO\n\nCREATE TABLE [Sales].[Customers_SQLI_Example](\n    [CustomerID] [int] NOT NULL,\n    [CustomerName] [nvarchar](100) NOT NULL,\n    [BillToCustomerID] [int] NOT NULL,\n    [CustomerCategoryID] [int] NOT NULL,\n    [BuyingGroupID] [int] NULL,\n    [PrimaryContactPersonID] [int] NOT NULL,\n    [AlternateContactPersonID] [int] NULL,\n    [DeliveryMethodID] [int] NOT NULL,\n    [DeliveryCityID] [int] NOT NULL,\n    [PostalCityID] [int] NOT NULL,\n    [CreditLimit] [decimal](18, 2) NULL,\n    [AccountOpenedDate] [date] NOT NULL,\n    [StandardDiscountPercentage] [decimal](18, 3) NOT NULL,\n    [IsStatementSent] [bit] NOT NULL,\n    [IsOnCreditHold] [bit] NOT NULL,\n    [PaymentDays] [int] NOT NULL,\n    [PhoneNumber] [nvarchar](20) NOT NULL,\n    [FaxNumber] [nvarchar](20) NOT NULL,\n    [DeliveryRun] [nvarchar](5) NULL,\n    [RunPosition] [nvarchar](5) NULL,\n    [WebsiteURL] [nvarchar](256) NOT NULL,\n    [DeliveryAddressLine1] [nvarchar](60) NOT NULL,\n    [DeliveryAddressLine2] [nvarchar](60) NULL,\n    [DeliveryPostalCode] [nvarchar](10) NOT NULL,\n    [DeliveryLocation] [geography] NULL,\n    [PostalAddressLine1] [nvarchar](60) NOT NULL,\n    [PostalAddressLine2] [nvarchar](60) NULL,\n    [PostalPostalCode] [nvarchar](10) NOT NULL,\n    [LastEditedBy] [int] NOT NULL,\n    [ValidFrom] [datetime2](7) NOT NULL,\n    [ValidTo] [datetime2](7) NOT NULL,\n CONSTRAINT [PK_Sales_Customers_SQLI_Example] PRIMARY KEY CLUSTERED \n(\n    [CustomerID] ASC\n)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [USERDATA],\n CONSTRAINT [UQ_Sales_Customers_SQLI_Example_CustomerName] UNIQUE NONCLUSTERED \n(\n    [CustomerName] ASC\n)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [USERDATA]\n) ON [USERDATA] TEXTIMAGE_ON [USERDATA]\nGO\n\nINSERT [Sales].[Customers_SQLI_Example] ([CustomerID], [CustomerName], [BillToCustomerID], [CustomerCategoryID], [BuyingGroupID], [PrimaryContactPersonID], [AlternateContactPersonID], [DeliveryMethodID], [DeliveryCityID], [PostalCityID], [CreditLimit], [AccountOpenedDate], [StandardDiscountPercentage], [IsStatementSent], [IsOnCreditHold], [PaymentDays], [PhoneNumber], [FaxNumber], [DeliveryRun], [RunPosition], [WebsiteURL], [DeliveryAddressLine1], [DeliveryAddressLine2], [DeliveryPostalCode], [DeliveryLocation], [PostalAddressLine1], [PostalAddressLine2], [PostalPostalCode], [LastEditedBy], [ValidFrom], [ValidTo]) VALUES (1, N'Tailspin Toys (Head Office)', 1, 7, 2, 47, 48, 7, 6863, 6863, CAST(3600.00 AS Decimal(18, 2)), CAST(N'2013-01-01' AS Date), CAST(0.000 AS Decimal(18, 3)), 0, 0, 30, N'(612) 555-2458', N'(612) 555-1723', N'', N'', N'http://www.tailspintoys.com/', N'8408 Sycamore Trail', N'8408 Sycamore Trail', N'57143', 0xE6100000010C47A00B34E9BA4640914F7E41C11B58C0, N'547 Eighth Alley', N'', N'28949', 1, CAST(N'2013-01-01T00:00:00.0000000' AS DateTime2), CAST(N'9999-12-31T23:59:59.9999999' AS DateTime2))\nGO\nINSERT [Sales].[Customers_SQLI_Example] ([CustomerID], [CustomerName], [BillToCustomerID], [CustomerCategoryID], [BuyingGroupID], [PrimaryContactPersonID], [AlternateContactPersonID], [DeliveryMethodID], [DeliveryCityID], [PostalCityID], [CreditLimit], [AccountOpenedDate], [StandardDiscountPercentage], [IsStatementSent], [IsOnCreditHold], [PaymentDays], [PhoneNumber], [FaxNumber], [DeliveryRun], [RunPosition], [WebsiteURL], [DeliveryAddressLine1], [DeliveryAddressLine2], [DeliveryPostalCode], [DeliveryLocation], [PostalAddressLine1], [PostalAddressLine2], [PostalPostalCode], [LastEditedBy], [ValidFrom], [ValidTo]) VALUES (2, N'Tailspin Toys (DeKalb, IL)', 1, 3, 2, 49, 47, 2, 8758, 8758, CAST(3500.00 AS Decimal(18, 2)), CAST(N'2013-01-01' AS Date), CAST(0.000 AS Decimal(18, 3)), 0, 0, 30, N'(217) 555-1687', N'(217) 555-9570', N'', N'', N'http://www.tailspintoys.com/', N'531 9th Way', N'531 9th Way', N'72436', 0xE6100000010C693FADFDF8F64440AAA4A9F9053056C0, N'2218 Walnut Highway', N'', N'76090', 1, CAST(N'2013-01-01T00:00:00.0000000' AS DateTime2), CAST(N'9999-12-31T23:59:59.9999999' AS DateTime2))\nGO\n\nSELECT * FROM Sales.Customers_SQLI_Example\n")),Object(r.b)("p",null,"You can see that the stored procedure has been created and two records have been inserted. Running the below code will now DROP this newly created table."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n        ,@SQL NVARCHAR(1000)\n\nSET @UserName = '''Lily Code'' DROP TABLE IF EXISTS Sales.Customers_SQLI_Example;--'\nSET @Password = '''Doesnt matter'''\n\nSET @SQL = 'SELECT * \n            FROM Application.People AS P\n            WHERE P.FullName = ' + @UserName + ' AND P.PersonID = ' + @Password\n\nPRINT @SQL\nEXEC(@SQL)\n\nSELECT * FROM Sales.Customers_SQLI_Example\n")),Object(r.b)("h2",{id:"best-practice"},"Best Practice"),Object(r.b)("p",null,"There are a few different ways you can execute a command against a SQL database. One such example is by using Stored Procedures."),Object(r.b)("p",null,"The example below if a very basic stored procedure which returns whether or not the user has entered a correct username and password."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DROP PROCEDURE IF EXISTS Application.CheckLogin\nGO\n\nCREATE PROCEDURE Application.CheckLogin\n    @ProvidedUserName NVARCHAR(50)\n    ,@ProvidedPassword NVARCHAR(20)\nAS\nBEGIN\n\n    DECLARE @IsPermittedToLogon NVARCHAR(10)\n    \n    SELECT  @IsPermittedToLogon = P.IsPermittedToLogon\n    FROM    Application.People AS P\n    WHERE   P.FullName = @ProvidedUserName\n    AND     P.HashedPassword IS NOT NULL\n\n    SELECT @IsPermittedToLogon AS IsPermittedToLogon\n\nEND\n")),Object(r.b)("p",null,"Use the SQL below to execute the stored procedure, it will return a 1 if the user credentials are correct."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n\nSET @UserName = 'Lily Code'\nSET @Password = '0xCDF7EE2DB6B94C9BCF2D003E37354081BCD53D7B983F1412729D3BC1E4F89876'\n\nEXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password\n")),Object(r.b)("p",null,"Now lets try one of the SQLi techniques used above to comment out the password."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n\nSET @UserName = '''Lily Code''--'\nSET @Password = 'Do not know'\n\nEXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password\n\n\n\nSET @UserName = '''Lily Code'' SELECT @@Version AS SqlServerVersion; SELECT * FROM Sales.Customers;--'\nEXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password\n")),Object(r.b)("p",null,"You will have noticed that the password field was not ignored, this is because each parameters it used individual and not used to build a dynamic SQL query."),Object(r.b)("h2",{id:"stored-procedures-are-not-always-free-of-vulnerabilities"},"Stored Procedures are not always free of vulnerabilities"),Object(r.b)("p",null,"This is an extract from an existing stored procedure which has potential vulnerabilities. This is because it is using dynamic T-SQL statements within the stored procedure."),Object(r.b)("p",null,"In the below example mitigating steps have been include to reduce the risk of a SQLi attack. The passed in variables are being used to build dynamic sql, which ideally should be avoided, but sometimes there is no other logical option. In this case the @Company variable is being checked and known malicious commands are removed. "),Object(r.b)("p",null,"DO NOT TRY AND RUN THE BELOW"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"-- This code should not be executed\nPROCEDURE NAME PROCEDURE [temp].[usp_SelectT]\n\n    @Company        NVARCHAR(100)\n    ,@FromDate      DATETIME2(7)\n    ,@ToDate        DATETIME2(7)\n    ,@EmailFrom     EmailFrom       READONLY    \n    ,@EmailTo       EmailTo         READONLY\n    ,@Trans         Trans           READONLY\n    ,@FileName      FileNames       READONLY\n    ,@FileOutCome   FileOutcome     READONLY\n    ,@EmailSubject  EmailSubject    READONLY\n    ,@BatchSize     INT = 10\n    ,@PageNumber    INT = 1\n    ,@OrderBy       INT = 2 -- 1 = Status, 2 = Event Time, 3 = From, 4 = To, 5= Subject, 6 = File Count\n    ,@OrderByDir    INT = 2 -- 1 = ASC, 2 = DESC\n    \n\nAS\nBEGIN\n\n\n    \n\n    -- Added to deal with SQL Injection for this variable.\n    SELECT @Company = REPLACE(@Company, '--','')\n    SELECT @Company = REPLACE(@Company, 'WAITFOR','')\n    SELECT @Company = REPLACE(@Company, '=','')\n    SELECT @Company = REPLACE(@Company, ';','')\n    SELECT @Company = REPLACE(@Company, '/*','')\n    SELECT @Company = REPLACE(@Company, '*/','')\n    SELECT @Company = REPLACE(@Company, ')','')\n\n    DECLARE @Sql VARCHAR(MAX)\n            ,@Offset INT\n\n    SET @Offset = (@PageNumber -1) * @BatchSize \n\n    SET @Sql = ' '\n\n    SET @Sql = @Sql + '\n\n        SELECT  \n                ET.TId\n                ,STRING_AGG ( ISNULL(ET.EmailTo,''N/A''), '';'') AS EmailTo\n                INTO #EmailToAgg\n        FROM        dbo.EmailTable      AS ET'\n\n    IF ((SELECT COUNT(*) FROM @EmailTo) > 0)\n    BEGIN\n        SELECT * INTO #EmailTo FROM @EmailTo\n        SET @Sql = @Sql + ' INNER JOIN  #EmailTo AS E   ON ET.EmailTo   = E.EmailAddress '\n    END\n\n    SET @Sql = @Sql + '\n\n        WHERE   ET.CompanyId = ''' + @Company + ''' '\n\n    IF ((SELECT COUNT(*) FROM @Transaction) > 0)\n    BEGIN\n        SELECT * INTO #Trans FROM @Trans\n        SET @Sql = @Sql + ' AND ET.SId IN (SELECT TId FROM #Trans)'\n    END\n\n    SET @Sql = @Sql + ' GROUP BY ET.TId\n                        OPTION  (RECOMPILE)\n                        '\n\n    SET @Sql = @Sql +  ' \n\n    SELECT  \n                -- Required for the main Transaction Page or for one of the filters. Could use a different one\n                RR.Id \n                ,RR.Company\n                ,RR.Date\n                ,RR.[From] \n                ,ET.EmailTo     \n                ,RR.SubjectTruncated \n                INTO #StagingResults\n\n    FROM        dbo.ReceiverR       AS RR \n    INNER JOIN  #EmailToAgg                 AS ET   ON SR.Id = ET.TSId\n    WHERE   RR.Company = ''' + @Tenant + '''\n    AND     RR.Date >= ''' + CAST(@FromDate AS VARCHAR) + ''' AND RR.Date <= ''' + CAST(@ToDate AS VARCHAR) + '''\n")),Object(r.b)("h2",{id:"database-permissions"},"Database Permissions"),Object(r.b)("p",null,"It is also very important to restrict the access permissions of the user that the application is using the execute the code. Several of the statements I have used above for retrieving data and altering the DB would not be possible if the correct user had been granted the required permissions."),Object(r.b)("p",null,"The below may need to be run in SQL Server Management Studio."),Object(r.b)("p",null,"If you are using a new install of SQL Server then by default SQL Logins will be disabled. "),Object(r.b)("p",null,"Steps to enable"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open SSMS and connect with AD user"),Object(r.b)("li",{parentName:"ol"},"Right click on the server and go to Security"),Object(r.b)("li",{parentName:"ol"},'Change the Server Authentication to "SQL Server and Windows Authentication mode"'),Object(r.b)("li",{parentName:"ol"},"Re-start the SQL Server service")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"USE WideWorldImporters\n\nDROP USER IF EXISTS TestAccount\n\nUSE MASTER\nGO\n\nDROP USER IF EXISTS TestAccount\n\nIF EXISTS (\n            SELECT  1\n            FROM    sys.sql_logins AS L\n            WHERE   l.name = 'TestAccount'\n        )\nBEGIN\n    DROP LOGIN TestAccount\nEND\nGO\n\n-- Code to create the new used and assign required permissions\n\nCREATE LOGIN TestAccount  WITH PASSWORD = 'ThisIsNotAGoodPasswordToUse123'\n\nCREATE USER TestAccount FROM LOGIN TestAccount\n\nGRANT CONNECT SQL TO TestAccount\n\nUSE WideWorldImporters\nGO\n\nCREATE USER TestAccount FROM LOGIN TestAccount\n\nGRANT EXECUTE ON Application.CheckLogin TO TestAccount \n")),Object(r.b)("p",null,"Now change the connection to login using the new user. This process should be run using Azure Data Studio notebooks. This is to test that the created user is able to execute the stored procedure, but even if SQLi is possible, the user can not select directly from any of the tables. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"USE WideWorldImporters\nGO\n\nDECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n\nSET @UserName = 'Lily Code'\nSET @Password = '0xCDF7EE2DB6B94C9BCF2D003E37354081BCD53D7B983F1412729D3BC1E4F89876'\n\nEXEC Application.CheckLogin @ProvidedUserName = @UserName, @ProvidedPassword = @Password\n")),Object(r.b)("p",null,"You can see from the above that user has permissions to run the stored procedure."),Object(r.b)("p",null,"Now run the below which is one of the SQLi statements we run above, it should return no data because the user does not have permissions to select from that table."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"DECLARE @UserName NVARCHAR(255)\n        ,@Password NVARCHAR(255)\n        ,@SQL NVARCHAR(1000)\n\nSET @UserName = '''Lily Code''SELECT * FROM sys.tables AS T INNER JOIN sys.schemas AS S ON T.Schema_Id = S.Schema_Id;--'\nSET @Password = '''Doesnt matter'''\n\nSET @SQL = 'SELECT * \n            FROM Application.People AS P\n            WHERE P.FullName = ' + @UserName + ' AND P.PersonID = ' + @Password\n\nPRINT @SQL\nEXEC(@SQL)\n")))}d.isMDXComponent=!0}}]);