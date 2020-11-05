---
title: Open Redirect
sidebar_label: Open Redirect
---

**Introduction**
<p>
Open Redirect occurs when a vulnerable web page is redirected to a non-compliant page that may compromise the user.<br />
This vulnerability is often exists in web applications where the redirection is set with a "GET" parameter in the URL.</p>


**Example1 of a vulnerable code**
```c
[HttpPost]
public ActionResult LogOn(LogOnModel model, string returnUrl)
{
    if (ModelState.IsValid)
    {
        if (MembershipService.ValidateUser(model.UserName, model.Password))
        {
            FormsService.SignIn(model.UserName, model.RememberMe);
            if (!String.IsNullOrEmpty(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        else
        {
            ModelState.AddModelError("", "The user name or password provided is incorrect.");
        }
    }
 
    // If we got this far, something failed, redisplay form
    return View(model);
}
```

**Example2 of a vulnerable code**

```c
string url = request.QueryString["url"];
Response.Redirect(url);

```


**Remediation**

Avoid or fix violations by following the following practices:
<ul>
    <li>Assume all input is malicious. Use an "accept known good" input validation strategy.</li>
    <li>Understand all the potential areas where untrusted inputs can enter your software: parameters or arguments, cookies, anything read from the network, environment variables, reverse DNS lookups, query results, request headers, URL components, e-mail, files, filenames, databases, and any external systems that provide data to the application.</li>
    <li>Parameters of the application script/program must be validated before sending 302 HTTP code (redirect) to the client browser.</li>
    <li>Implement safe redirect functionality that only redirects to relative URI's, or a list of trusted domains.</li>
</ul>

```c
[HttpPost]
public ActionResult LogOn(LogOnModel model, string returnUrl)
{
    if (ModelState.IsValid)
    {
        if (MembershipService.ValidateUser(model.UserName, model.Password))
        {
            FormsService.SignIn(model.UserName, model.RememberMe);
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        else
        {
            ModelState.AddModelError("", 
        "The user name or password provided is incorrect.");
        }
    }
 
    // If we got this far, something failed, redisplay form
    return View(model);
}
```

**Risk**
<ul>
    <li>The user may be redirected to an untrusted page that contains malware which may then compromise the user's machine.</li>
    <li>The user may be subjected to phishing attacks by being redirected to an untrusted page.</li>
</ul>

**References **

https://www.httpcs.com/en/open-redirect-vulnerability

https://cwe.mitre.org/data/definitions/601.html

https://www.zaproxy.org/docs/alerts/10028/

https://docs.microsoft.com/en-us/aspnet/mvc/overview/security/preventing-open-redirection-attacks

