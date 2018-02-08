+++
title = "Api.Mapserv.Utah.Gov is returning status 503 for all requests"
date = 2018-02-08T08:07:57.000Z
severity = "major-outage"
affectedsystems = [
  "web api"
]
resolved = true
+++
The application pool is crashing and automatically stopping. This causes the api website to return 503 errors. 

**Update** Updating some IIS configurations have fixed the issue. {{< track "2018-02-08T09:04:00-06:00" >}}
