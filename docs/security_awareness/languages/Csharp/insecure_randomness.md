---
title: Insecure Randomness
sidebar_label: Insecure Randomness
---

**Introduction**
<p>
Using a cryptographically weak pseudo-random number generator may allow an attacker to predict what security-sensitive value will be generated.<br />
Insecure randomness errors occur when a function that can produce predictable values is used as a source of randomness in security-sensitive context.</p>


**Example1 of a vulnerable code**
```c
using System;

class ExampleClass
{
    public void ExampleMethod(Random random)
    {
        var sensitiveVariable = random.Next();
    }
}
```

**Example2 of a vulnerable code**

```c

var random = new Random(); // Sensitive use of Random
byte[] data = new byte[16];
random.NextBytes(data);
return BitConverter.ToString(data); // Check if this value is used for hashing or encryption

```


**Remediation**

Avoid or fix violations by following the following practices:
<ul>
    <li>use a cryptographically strong random number generator.</li>
    <li>Only use random number generators which are recommended by OWASP or any other trusted organization. </li>
    <li>Use the generated random values only once.</li>
    <li>Don't expose the generated random value. If you have to store it, make sure that the database or file is secure.</li>
</ul>

```c
using System;
using System.Security.Cryptography;

class ExampleClass
{
    public void ExampleMethod(RandomNumberGenerator randomNumberGenerator, int toExclusive)
    {
        var sensitiveVariable = randomNumberGenerator.GetInt32(toExclusive);
    }
}
```

**Risk**
<ul>
    <li>An attacker might be able to guess an ID for a resource that is owned by another user.</li>
    <li>An attacker may access the restricted functionality by guessing the ID or key.</li>
    <li>provide attackers with sensitive information or even execute arbitrary code</li>
</ul>

**References **

https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca5394

https://rules.sonarsource.com/csharp/RSPEC-2245

https://owasp.org/www-community/vulnerabilities/Insecure_Randomness
