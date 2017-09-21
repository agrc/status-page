+++
title = "rebuilding address locator"
date = 2017-09-21T14:10:10-06:00
severity = "partial-outage"
affectedsystems = [
  "web api"
]
resolved = true
+++
**Cause** One of the locators used for geocoding hung during the publish step of an update. This could have caused a reduction in geocoding matches and scoring.

**Resolution** The service was restarted and the republished.  {{<track "2017-09-21T14:12:10-06:00">}}
