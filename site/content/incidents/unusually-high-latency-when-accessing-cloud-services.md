+++
title = "Unusually high latency when accessing cloud services"
date = 2021-12-09T06:03:00-06:00
severity = "degraded-performance"
affectedsystems = ["web api"]
resolved = false
+++

The Web API is experiencing an unstable connection to cloud services. The high latency is causing timeouts when using the OpenSGID. This is affecting the consistency of the Web API. Hosting has been notified and will report on the findings.

**Update**: The issue has been identified and fixed by hosting. {{< track "2021-12-09T14:38:00-06:00" >}}

**Update**: The issue has reappeared and we are working with hosting on a permanent fix. {{< track "2021-12-10T11:00:00-06:00" >}}
