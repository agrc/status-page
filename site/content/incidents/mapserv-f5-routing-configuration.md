+++
title = "mapserv f5 routing configuration issue"
date = 2019-03-26T11:26:25.000Z
severity = "partial-outage"
affectedsystems = ["mapserv"]
resolved = true
+++
AGRC is ready to replace the current ArcGIS servers. Using a network load balancer, AGRC shifted 10% of all network traffic to a new GIS server creating an A/B test. Testing of the map services was successful and all **direct** service access was not affected by this outage. Requests for web assets, (HTML, JavaScript, CSS, and images), were being routed to the GIS servers instead of the web server. The A/B test was rolled back and will be scheduled for another time.
