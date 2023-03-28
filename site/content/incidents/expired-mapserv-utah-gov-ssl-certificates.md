+++
title = "Expired mapserv.utah.gov SSL certificates"
date = 2023-03-24T01:00:00.000Z
severity = "major-outage"
affectedsystems = ["mapserv"]
resolved = true
+++
The SSL certificate for mapserv.utah.gov has expired and the Cloud team is having issues replacing it.

Any app that is hosted on or makes requests to `mapserv.utah.gov` is affected including:

- any services hosted on `mapserv.utah.gov/arcgis/rest`
- `addressediting.utah.gov`
- `biobase.utah.gov`
- `broadband.ugrc.utah.gov`
- `deqspills.ugrc.utah.gov`
- `enviro.deq.utah.gov`
- `health-facilities.ugrc.utah.gov`
- `locate.utah.gov`
- `mapserv.utah.gov/wvc/desktop`
- `raster.utah.gov`
- `vista-map.ugrc.utah.gov`
- `wq.deq.utah.gov`
- `wri.utah.gov`
- `sbilocate.ugrc.utah.gov`

## Update

Cloud hosting are still working with Google and VMWare support. They think they have identified the issue but don’t know if a resolution is close or not yet. {{< track "2023-03-27T12:22:00.000Z" >}}
