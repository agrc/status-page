---
title: SSL update
date: 2019-02-26T18:26:30.000Z
severity: under-maintenance
affectedSystems:
  - mapserv
resolved: true
---

The web server that hosts AGRC mapping websites will have its' SSL/TLS settings updated to be [more secure](https://www.ssllabs.com/ssltest/analyze.html?d=atlas.utah.gov). We will be dropping SSL 2 and 3 support as well as older ciphers.

The update is scheduled for Thursday, February 28th at 6:30AM MST. If there are any issues,

1. The changes will be rolled back
1. We will address the issues
1. The update will be rescheduled for a later date

The only interruption you should experience is a short outage of serving html, javascript, and css from our web server. Websites like gis.utah.gov, api.mapserv.utah.gov, discover, and the map services on mapserv.utah.gov will not be affected during the update.
