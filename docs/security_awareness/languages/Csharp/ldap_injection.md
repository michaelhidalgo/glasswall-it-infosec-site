---
title: LDAP Injection
sidebar_label: LDAP Injection
---



**Introduction**
<p>
LDAP (Lightweight Directory Access Protocol) is a software protocol that you have to be used in colleges and startup for enabling anyone to locate organizations, individuals, and other resources such as files and devices in a network, whether on the public Internet or on a corporate intranet.
</p>
<p>
A common use of LDAP is to provide a central place to store usernames and passwords. This allows many different applications and services to connect to the LDAP server to validate users
</p>

 
Within LDAP names, the special characters ' ', '#', '"', '+', ',', ';', '<', '>', '\' and null must be escaped according to RFC 4514, for example by replacing them with the backslash character '\' followed by the two hex digits corresponding to the ASCII code of the character to be escaped. Similarly, LDAP search filters must escape a different set of special characters (including but not limited to '*', '(', ')', '\' and null) according to RFC 4515.
 

**Example1 of a vulnerable code**
```c
using System.DirectoryServices;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotNetCore.Controllers
{
    public class RSPEC2078LDAPInjectionNoncompliantController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public DirectorySearcher ds { get; set; }

        public IActionResult Authenticate(string user, string pass)
        {
            ds.Filter = "(&(uid=" + user + ")(userPassword=" + pass + "))"; // Noncompliant

            // If the special value "*)(uid=*))(|(uid=*" is passed as user, authentication is bypassed
            // Indeed, if it is passed as a user, the filter becomes:
            // (&(uid=*)(uid=*))(|(uid=*)(userPassword=...))
            // as uid=* match all users, it is equivalent to:
            // (|(uid=*)(userPassword=...))
            // again, as uid=* match all users, the filter becomes useless

            return Content(ds.FindOne() != null ? "success" : "fail");
        }
    }
}
```

**Example2 of a vulnerable code**

```c
using System;
using System.DirectoryServices;

public partial class WebForm : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string userName = Request.Params["user"];
        string filter = "(uid=" + userName + ")";  // searching for the user entry

        // In this example, if we send the * character in the user parameter which will
        // result in the filter variable in the code to be initialized with (uid=*).
        // The resulting LDAP statement will make the server return any object that
        // contains a uid attribute.
        DirectorySearcher searcher = new DirectorySearcher(filter);
        SearchResultCollection results = searcher.FindAll();

        // Iterate through each SearchResult in the SearchResultCollection.
        foreach (SearchResult searchResult in results)
        {
            // ...
        }
    }
}
```


**Remediation**

For the user-controlled portion of LDAP statements, consider one o:
<ul>
<li> <i><b>Allow only</b></i> a safe list of non-special characters.</li>
<li>Disallow special character</li>
<li>Escape special characters.</li>
</ul>

```c
using System.DirectoryServices;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotNetCore.Controllers
{
    public class RSPEC2078LDAPInjectionCompliantController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public DirectorySearcher ds { get; set; }

        public IActionResult Authenticate(string user, string pass)
        {
            // restrict the username and password to letters only
            if (!Regex.IsMatch(user, "^[a-zA-Z]+$") || !Regex.IsMatch(pass, "^[a-zA-Z]+$"))
            {
                return BadRequest();
            }

            ds.Filter = "(&(uid=" + user + ")(userPassword=" + pass + "))"; // Now safe
            return Content(ds.FindOne() != null ? "success" : "fail");
        }
    }
}
```

**Risk**
<ul>
	<li>Authentication bypass</li>
	<li>Sensitive information disclosure</li>
	<li>Privilege escalation</li>
</ul>

**References **


https://www.geeksforgeeks.org/ldap-ldap-injectionprevention/

https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca3005

https://owasp.org/www-project-top-ten/2017/A1_2017-Injection.html

https://cwe.mitre.org/data/definitions/90