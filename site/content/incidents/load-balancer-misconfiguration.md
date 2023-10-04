+++
title = "load balancer misconfiguration"
date = 2023-10-04T09:42:25.000Z
severity = "major-outage"
affectedsystems = ["web api"]
resolved =true
+++

The operations team has deleted configuration allowing the API to route to the backend. We are waiting for the configuration to be restored to bring the API back online.

## Update

Ops have migrated the rules to the correct load balancer {{< track "2023-10-04T10:02:53.000Z" >}}
