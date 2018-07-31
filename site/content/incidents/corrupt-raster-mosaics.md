+++
title = "Corrupt Raster Mosaics"
date = 2018-07-31T18:08:53.000Z
severity = "partial-outage"
affectedsystems = [
  "mapserv"
]
resolved = false
+++
Three raster mosaics have become corrupted on mapserv. The NAIP 2011, 2014, and 2016 services were accessed using a newer version of ArcGIS Desktop than they were created with. This is causing the ArcGIS Server services to return 500 http status codes. We are actively repairing the mosaics and we expect to have them all repaired later this evening. 