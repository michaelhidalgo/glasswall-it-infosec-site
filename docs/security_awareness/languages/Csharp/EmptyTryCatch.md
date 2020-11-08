---
title: Empty Try-Catch Block
sidebar_label: Empty Try-Catch Block
---




**Introduction**
<p>
	Empty catch statements can be just as bad, depending on the MSIL code that your language generates. C# turns an empty catch statement into catch(System.Object) which means you end up catching all exceptions—even non-CLS compliant exceptions, however, leaving a catch block means during the run-time the system won't be able to handle the expected exception and in some cases, the application may crash due to the generated exception, from a security perspective it's always preferred to handle the run time exceptions.
</p>
 



**Example1 **


```c
var addressCollection = new MailAddressCollection();
foreach (string address in addresses)
{
    try
    {
        addressCollection.Add(address);
    }
    catch (Exception)
    {
        // Do nothing - if an invalid email occurs continue and try to add the rest
    }
}

```

**Example2 **


```c

class EmptyCatchBlock
{
    public static void Main(string[] args)
    {
        // ...
        try
        {
            SecurityManager.dropPrivileges();
        }
        catch (PrivilegeDropFailedException e)
        {
 
        }
        // ...
    }
}
```


**Remediation**
<ul>
	<li>Try to always handle the exceptions in the catch block</li>
	<li>Don't just log the exception stack trace in the console while you are moving to the production environment</li>
</ul>


**Risk**

DOS "Denial-of-service"

**References **

https://help.semmle.com/wiki/display/CSHARP/Poor+error+handling%3A+empty+catch+block


