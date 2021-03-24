---
title: Common Security Pitfalls
sidebar_label: Common Security Pitfalls
---

## Security Policies
We have our Glasswall Security Policies. If you are an employee, please read them and know them. Employee or not, we are open to feedback. They are open source and feel free to reach out to us or create a pull request. The policies are [here](https://github.com/filetrust/Glasswall-Security-Policies "Glasswall Security Policies") 

## Hardcoding Secrets
:dart: :heavy_exclamation_mark:[Watch here an informative video from Infosec team about hardcoding secrets](https://github.com/k8-proxy/Glasswall-InfoSec-Security-Training-and-Compliance)

The use of hardcoded secrets, including but not limited to API Keys, credentials, passwords, tokens, digital certificates, third-party secrets, has many negative implications for an organization. Threat actors periodically scan open repositories to look for those secrets to later use them to compromise an organization.

We all know that hardcoding credentials in the source code or in configuration files that are eventually pushed to public repositories is a big NO in information security.

However, every now and then a few secrets go rogue and find themselves in GitHub, on the frontend of a Web page, or in an innocent Terraform script. 

Just a gentle reminder - for parsing credentials please use a Secret Manager or reach out to our IT team. Embedding secrets in code should be avoided even on placeholders.

In the event that a secret is leaked or pushed to a public repository, the following steps are required:

1. Rotate the secret as soon as possible: This is not negotiable. If a secret has been leaked, we need to assume it will be used by an attacker. Rotating or invalidating that secret must be our first action step.
2. Use the Secret Management tool enabled and authorized by the organization or contact IT Team to get feedback on the business requirement and how to deal with the secrets within the current environment.
3. Override git commit history: It is recommended to override git history just when sensitive information has been leaked and it needs to be removed from the GitHub commit history.

## AWS and Azure Resources
In infosec we are very posessive and stalky - we like to keep a tab on our resources. Therefore if you launch a resource on the cloud please make sure that it has tags:
- Scope (scope of the resource)
- Team (the team it belongs to)
- Owner (the creator of the resource)

This requirenment is in our policies and please don't breach them.

## Incident Reporting
See something dodgy, exposed credentials, too much traffic, our webpage down, or just suspicious behaviour on our resources? Please reach out to Glasswall InfoSec and we can trigger an incident if necessary. The purpose of every incident is to shame and blame the developers. We also have a wall of shame that we expose on our meetings :scream: Just kidding. It is to learn and improve our processes. No walls involved (besides firewalls :joy:).

## Sharing Credentials
If you need to share credentials with other fellow developers, please reach out to the IT team to enable you in using one of our password and secrets managers. Please don't share them on Slack, email or WhatsApp. 