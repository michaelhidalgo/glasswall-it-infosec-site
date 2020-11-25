---
title: Common Security Pitfalls
sidebar_label: Common Security Pitfalls
---

## Security Policies
We have our Glasswall Security Policies. If you are an employee, please read them and know them. Employee or not, we are open to feedback. They are open source and feel free to reach out to us or create a pull request. The policies are [here](https://github.com/filetrust/Glasswall-Security-Policies "Glasswall Security Policies") 

## Hardcoding
We all know hardcoding credentials is a big NO in information security. However every now and then a few keys go rogue and find themselves in GitHub, on the frontend of a webpage or on an innocent Terraform script. Just a gentle reminder - for parsing credentials please use a Secret Manager or reach out to our IT team. 

## AWS and Azure Resources
In infosec we are very posessive and stalky - we like to keep a tab on our resources. Therefore if you launch a resource on the cloud please make sure that it has tags:
- Scope (scope of the resource)
- Team (the team it belongs to)
- Owner (the creator of the resource)
This requirenment is in our policies and please don't breach them.

## Incident Reporting
see something dodgy, exposed credentials, too much traffic, our webpage down, or just suspicious behaviour on our resources? Please reach out to Glasswall InfoSec and we can trigger an incident if necessary. The prupose of every incident is to shame and blame the developers. We also have a wall of shame that we expose on our meetings :scream: Just kidding. It is to learn and improve our processes. No walls involved (besides firewalls :joy:).

## Sharing Credentials
If you need to share credentials with other fellow developers, please reach out to the IT team to enable you in using one of our password and secrets managers. Please don't share them on Slack, email or WhatsApp. 