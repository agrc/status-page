+++
title = "Misconfigured Load Balancer"
date = 2022-04-20T17:00:00.000Z
severity = "partial-outage"
affectedsystems = ["web api"]
resolved = true
+++
Today at 5:00pm we migrated the infrastructure behind the UGRC API by updating the DNS to point to new infrastructure. This migration contained a misconfiguration in a load balancer that affected some API keys authorization; Specifically API keys using the `Desktop Application` style.

We will schedule this migration for a later date. Since we will no longer offer http traffic, an email communication explaining that all requests will require https and the date for when the change will be coming soon.

### Rollback

The migration was rolled back with a DNS change routing requests to the original system. {{< track "2022-04-21T11:34:00.000Z" >}}

### Certificate issues

The hosting group modified the certificate on the new load balancer to test the misconfiguration. This caused clients who had not had successful DNS propagating to receive insecure https warnings. {{< track "2022-04-21T11:56:00.000Z" >}}

### Resolutions

The correct certificate was placed back on the load balancer while the DNS finished propagating. {{< track "2022-04-21T12:23:00.000Z" >}}
