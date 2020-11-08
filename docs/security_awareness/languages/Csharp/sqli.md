---
title: SQL Injection
sidebar_label: SQL Injection
---




**Introduction**
<p>
	SQL injection is an attack in which malicious code is inserted into strings that are later passed to an instance of SQL Server for parsing and execution. Any procedure that constructs SQL statements should be reviewed for injection vulnerabilities because SQL Server will execute all syntactically valid queries that it receives. Even parameterized data can be manipulated by a skilled and determined attacker.
</p>
 

**How it Works**
<p>
The primary form of SQL injection consists of direct insertion of code into user-input variables that are concatenated with SQL commands and executed. A less direct attack injects malicious code into strings that are destined for storage in a table or as metadata. When the stored strings are subsequently concatenated into a dynamic SQL command, the malicious code is executed.
</p>

<p>
The injection process works by prematurely terminating a text string and appending a new command. Because the inserted command may have additional strings appended to it before it is executed, the malefactor terminates the injected string with a comment mark "--". Subsequent text is ignored at execution time.
</p>

**Example1 **

<p>The following script shows a simple SQL injection. The script builds an SQL query by concatenating hard-coded strings together with a string entered by the user:</p>

```c
var Shipcity;  
ShipCity = Request.form ("ShipCity");  
var sql = "select * from OrdersTable where ShipCity = '" + ShipCity + "'";  

```
<p>The user is prompted to enter the name of a city. If she enters Redmond, the query assembled by the script looks similar to the following:</p>

```sql
SELECT * FROM OrdersTable WHERE ShipCity = 'Redmond'   
```

<p>However, assume that the user enters the following:</p>

```sql
SELECT * FROM OrdersTable WHERE ShipCity = 'Redmond';drop table OrdersTable--'  
```

<p>
	The semicolon (;) denotes the end of one query and the start of another. The double hyphen (--) indicates that the rest of the current line is a comment and should be ignored. If the modified code is syntactically correct, it will be executed by the server. When SQL Server processes this statement, SQL Server will first select all records in OrdersTable where ShipCity is Redmond. Then, SQL Server will drop OrdersTable.
</p>

<p>As long as injected SQL code is syntactically correct, tampering cannot be detected programmatically. Therefore, you must validate all user input and carefully review code that executes constructed SQL commands in the server that you are using. Coding best practices are described in the following sections in this topic.

</p>


**Remediation**

<p>Always validate user input by testing type, length, format, and range. When you are implementing precautions against malicious input, consider the architecture and deployment scenarios of your application. Remember that programs designed to run in a secure environment can be copied to an nonsecure environment. The following suggestions should be considered best practices:
</p>
<ul>
	


<li>Make no assumptions about the size, type, or content of the data that is received by your application. For example, you should make the following evaluation:</li>

<li>How will your application behave if an errant or malicious user enters a 10-megabyte MPEG file where your application expects a postal code?</li>

<li>How will your application behave if a DROP TABLE statement is embedded in a text field?</li>

<li>Test the size and data type of input and enforce appropriate limits. This can help prevent deliberate buffer overruns.</li>

<li>Test the content of string variables and accept only expected values. Reject entries that contain binary data, escape sequences, and comment characters. This can help prevent script injection and can protect against some buffer overrun exploits.</li>

<li>When you are working with XML documents, validate all data against its schema as it is entered.</li>

<li>Never build Transact-SQL statements directly from user input.</li>

<li>Use stored procedures to validate user input.</li>
<li>
In multitiered environments, all data should be validated before admission to the trusted zone. Data that does not pass the validation process should be rejected and an error should be returned to the previous tier.</li>

<li>Implement multiple layers of validation. Precautions you take against casually malicious users may be ineffective against determined attackers. A better practice is to validate input in the user interface and at all subsequent points where it crosses a trust boundary.
For example, data validation in a client-side application can prevent simple script injection. However, if the next tier assumes that its input has already been validated, any malicious user who can bypass a client can have unrestricted access to a system.</li>

<li>Never concatenate user input that is not validated. String concatenation is the primary point of entry for script injection.</li>

<il>Do not accept the following strings in fields from which file names can be constructed: AUX, CLOCK$, COM1 through COM8, CON, CONFIG$, LPT1 through LPT8, NUL, and PRN.</il>
</ul>

**Risk**
<ul>
	<li>Full access to the DB "Database"</li>
	<li>Remote Code Execution</li>
</ul> 

**References **
http://www.unixwiz.net/techtips/sql-injection.html

http://msdn.microsoft.com/en-us/library/ms998271.aspx

https://docs.microsoft.com/en-us/sql/relational-databases/security/sql-injection?view=sql-server-ver15

