---
title: Xpath Injection
sidebar_label: Xpath Injection
---



**Introduction**
<p>XPath Injection attacks occur when a web site uses user-supplied information to construct an XPath query for XML data. By sending intentionally malformed information into the web site, an attacker can find out how the XML data is structured, or access data that they may not normally have access to. They may even be able to elevate their privileges on the web site if the XML data is being used for authentication (such as an XML based user file).</p>


**Example1 of a vulnerable code**
```c
using System;
using System.Xml.XPath;

public partial class WebForm : System.Web.UI.Page
{
    public XPathNavigator AuthorizedOperations { get; set; }

    protected void Page_Load(object sender, EventArgs e)
    {
        string operation = Request.Form["operation"];

        // If an attacker uses this for input:
        //     ' or 'a' = 'a
        // Then the XPath query will be:
        //     authorizedOperation[@username = 'anonymous' and @operationName = '' or 'a' = 'a']
        // and it will return any authorizedOperation node.
        XPathNavigator node = AuthorizedOperations.SelectSingleNode(
            "//authorizedOperation[@username = 'anonymous' and @operationName = '" + operation + "']");
    }
}
```

**Example2 of a vulnerable code**

```c
 XmlDocument XmlDoc = new XmlDocument();
 XmlDoc.Load("...");
 
 XPathNavigator nav = XmlDoc.CreateNavigator();
 XPathExpression expr =
 nav.Compile("string(//user[name/text()='"+TextBox1.Text+"'
 and password/text()='"+TextBox2.Text+
 "']/account/text())");
 
 String account=Convert.ToString(nav.Evaluate(expr));
 if (account=="") {
        // name+password pair is not found in the XML document
 –
        // login failed.
 } else {
        // account found -> Login succeeded.
        // Proceed into the application.
 }
```


**Remediation**

Avoid or fix violations by following the following practices:
<ul>
<li>Use of parameterized XPath queries.</li>
<li>Don't construct XPath queries from user input</li>
<li>Validate that the input only contains a safe set of characters.</li>
<li>Escape quotation marks.</li>
<li>Assume all input is malicious. Use an "accept known good" input validation strategy</li>
</ul>

```c
using System;
using System.Text.RegularExpressions;
using System.Xml;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotNetCore.Controllers
{
    public class RSPEC2091XPathInjectionCompliant : Controller
    {
        public XmlDocument doc { get; set; }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Authenticate(string user, string pass)
        {
            // Restrict the username and password to letters only
            if (!Regex.IsMatch(user, "^[a-zA-Z]+$") || !Regex.IsMatch(pass, "^[a-zA-Z]+$"))
            {
                return BadRequest();
            }

            String expression = "/users/user[@name='" + user + "' and @pass='" + pass + "']"; // Compliant
            return Content(doc.SelectSingleNode(expression) != null ? "success" : "fail");
        }

    }
}
```

**Risk**
<ul>
	<li>An attacker can craft special user-controllable input consisting of XPath expressions to inject the XML database and bypass authentication or glean information that they normally would not be able to.</li>
	<li>XPath Injection enables an attacker to talk directly to the XML database, thus bypassing the application completely.</li>
</ul>

**References **

https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca3008

https://owasp.org/www-community/attacks/XPATH_Injection

https://rules.sonarsource.com/csharp/RSPEC-2091?search=XPATH%20INJ

http://capec.mitre.org/data/definitions/83.html

http://projects.webappsec.org/w/page/13247005/XPath%20Injection