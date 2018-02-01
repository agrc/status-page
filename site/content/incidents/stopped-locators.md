+++
title = "Stopped Locators"
date = 2018-02-01T04:02:33.000Z
severity = "partial-outage"
affectedsystems = [
  "web api"
]
resolved = true
+++
Forklift updated the geocoding api locators and they did not restart properly. All geocoding is returning not found.

**Update**: Restarting the server service removed the lock on the locators and they started up normally. {{< track "2018-02-01T09:28:33.000Z" >}}