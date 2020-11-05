---
title: Command Injection
sidebar_label: Command Injection
---



**Introduction**
<p>Command Injection refers to a class of application vulnerabilities in which unvalidated and un-encoded untrusted input is integrated into a command that is then passed to the Operating System (OS) for execution.  Command Injection vulnerabilities can be devastating because maliciously crafted inputs can pervert the designer’s intent, and potentially lead to the complete compromise of the underlying platform.  Command Injection vulnerabilities appear with applications because programming languages, application development frameworks, and platforms such as databases provide facilities for command-execution by the operating system.  These facilities are embraced by application designers who find it a necessary or convenient way to accomplish work in the OS environment.</p>
<p>Command injection vulnerabilities typically occur when:</p>
<ol> 
<li>Data enters the application from an untrusted source.</li>
<li>The data is part of a string that is executed as a command by the application.</li>
<li>By executing the command, the application gives an attacker a privilege or capability that the attacker would not otherwise have..</li>
</ol>


**Example1 of a vulnerable code**

```c
using System;
using System.Diagnostics;

public partial class WebForm : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string input = Request.Form["in"];
        Process p = Process.Start(input);
    }
}
```

**Example2 of a vulnerable code**

```c
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotNetCore.Controllers
{
    public class RSPEC2076OSCommandInjectionNoncompliantController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Run(string binary)
        {
            // If the value "/sbin/shutdown" is passed as binary and the web server is running as root,
            // then the machine running the web server will be shut down and become unavailable for future requests

            Process p = new Process();
            p.StartInfo.FileName = binary; // Noncompliant
            p.StartInfo.RedirectStandardOutput = true;
            p.Start();
            string output = p.StandardOutput.ReadToEnd();
            p.Dispose();
            return Content(output);
        }
    }
}
```

**Example3 of a vulnerable code**

```c

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
      
    namespace propertyinjuction
    {  
        public interface Iset
        {
            void print();      
        }
        public class servic : Iset
        {
            public void print()
            {  
                Console.WriteLine("print........");          
            }      
        }
        public class client
        {
            private Iset _set;
            public void run(Iset serv)
            {  
                this._set = serv;
                Console.WriteLine("start");
                this._set.print();
            }      
        }
        class method
        {
            public static void Main()
            {
                client cn = new client();
                cn.run(new servic());
                Console.ReadKey();         
            }
        }
    }
```


**Remediation**

Avoid or fix violations by following the following practices:
<ul>
<li>If possible, avoid starting processes based on user input.</li>
<li>Validate input against a known safe set of characters and length.</li>
<li>Run time policy enforcement may be used in an allowlist fashion to prevent use of any non-sanctioned commands.</li>
<li>Assign permissions to the software system that prevents the user from accessing/opening privileged files.</li>
</ul>

```c
using System;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDotNetCore.Controllers
{
    public class RSPEC5145LogInjectionLog4NetCompliantController : Controller
    {
        private static readonly log4net.ILog _logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public IActionResult Index()
        {
            return View();
        }

        public void LogSomething(string id)
        {

            if (id != null)
            {
                // Replace pattern-breaking characters
                id = id.Replace('\n', '_').Replace('\r', '_').Replace('\t', '_');
                _logger.Info("ID: " + id);
            }
        }
    }
}
```

**Risk**
<ul>
	<li>Execute Unauthorized Code or Commands</li>
	<li>Inset an entirely new and unrelated command that was not intended to be executed.</li>
</ul>

**References **

https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca3006

https://rules.sonarsource.com/csharp/tag/injection/RSPEC-2076?search=command

https://www.c-sharpcorner.com/UploadFile/85ed7a/dependency-injection-in-C-Sharp/

https://owasp.org/www-community/attacks/Command_Injection

https://cwe.mitre.org/data/definitions/77.html
