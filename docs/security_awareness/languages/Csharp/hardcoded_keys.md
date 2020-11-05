---
title: Hard-coded Keys
sidebar_label: Hard-coded Keys
---

**Introduction**
<p>
Hard-coded credentials typically create a significant hole that allows an attacker to bypass the authentication that has been configured by the software administrator. This hole might be difficult for the system administrator to detect. Even if detected, it can be difficult to fix, so the administrator may be forced into disabling the product entirely. <br />
For a symmetric algorithm to be successful, the secret key must be known only to the sender and the receiver. When a key is hard-coded, it is easily discovered. Even with compiled binaries, it is easy for malicious users to extract it. Once the private key is compromised, the cipher text can be decrypted directly and is not protected anymore.</p>


**Example1 of a vulnerable code**
```c
using Microsoft.AspNet.Identity;
using System;
using System.Web;
using System.Web.Security;
 
public class HardCodedCredentialHandler : IHttpHandler
{
 
    public void ProcessRequest(HttpContext ctx)
    {
        string password = ctx.Request.QueryString["password"];
 
        // BAD: Inbound authentication made by comparison to string literal
        if (password == "myPa55word")
        {
            ctx.Response.Redirect("login");
        }
 
        // BAD: Set the password to a hardcoded string literal
        MembershipUser user = loadMembershipUser();
        user.ChangePassword(password, "myNewPa55word");
    }
}
```

**Example2 of a vulnerable code**

```c
using System.Text;
using System.Security.Cryptography;

class ExampleClass
{
    public void ExampleMethod(byte[] someOtherBytesForIV)
    {
        byte[] key = Encoding.ASCII.GetBytes("AAAAAaazaoensuth");
        SymmetricAlgorithm rijn = SymmetricAlgorithm.Create();
        rijn.CreateEncryptor(key, someOtherBytesForIV);
    }
}
```

**Example3 of a vulnerable code**

```c
string username = "admin";
string password = "Admin123"; // Sensitive
string usernamePassword  = "user=admin&password=Admin123"; // Sensitive
string url = "scheme://user:Admin123@domain.com"; // Sensitive

```


**Remediation**

Avoid or fix violations by following the following practices:
<ul>
    <li>Keep credentials and keys in a secure location separate from your source code.</li>
    <li>Store the credentials in a configuration file that is not pushed to the code repository.</li>
    <li>Store the credentials in a database.</li>
    <li>Consider redesigning your application to use a secure key management system.</li>
    <li>Use the secret management service of you cloud provider.</li>
</ul>

``` C#
using Microsoft.AspNet.Identity;
using System;
using System.Web;
using System.Web.Security;
 
public class HardCodedCredentialHandler : IHttpHandler
{
 
    public void ProcessRequest(HttpContext ctx)
    {
        string hashedPassword = loadPasswordFromSecretConfig();
 
        // GOOD: Inbound authentication made by comparing to a hash password from a config
        if (PasswordHasher.VerifyHashedPassword(hashedPassword, password))
        {
            ctx.Response.Redirect(VALID_REDIRECT);
        }
    }
}
```

**Risk**
<ul>
    <li>malicious users will gain access through the account in question.</li>
    <li>Exposure of resources or functionality to unintended actors</li>
    <li>provide attackers with sensitive information or even execute arbitrary code</li>
</ul>

**References **

https://help.semmle.com/wiki/display/CSHARP/Hard-coded+credentials

https://cwe.mitre.org/data/definitions/798.html

https://owasp.org/www-community/vulnerabilities/Use_of_hard-coded_password

https://rules.sonarsource.com/csharp/tag/sans-top25/RSPEC-2068
