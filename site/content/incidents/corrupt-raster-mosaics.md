+++
title = "Corrupt Raster Mosaics"
date = 2018-07-31T14:08:53.000Z
severity = "partial-outage"
affectedsystems = [
  "mapserv"
]
resolved = false
+++
Three raster mosaics have become corrupted on mapserv. The NAIP 2011, 2014, and 2016 services were accessed using a newer version of ArcGIS Desktop than they were created with. This is causing the ArcGIS Server services to return 500 http status codes. We are actively repairing the mosaics and we expect to have them all repaired later this evening.

## Update
All of the image services are up and running other than NAIP 2011. The overviews for it are currently rebuilding. NAIP 2016 is up and running but showing the checkerboard pattern. The overviews will be rebuilt tonight or tomorrow morning. {{< track "2018-07-31T16:08:53.000Z" >}}

## Update 2
NAIP 2011 is back online. NAIP 2016 is stopped and rebuilding to fix the checkerboard pattern. {{< track "2018-08-01T12:08:53.000Z" >}}

## Update 3
NAIP 2016 is back online. NAIP 2014 is stopped and rebuilding to fix the Band 4 overviews. {{< track "2018-08-02T06:55:53.000Z" >}}
