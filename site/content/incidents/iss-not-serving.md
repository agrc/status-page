+++
# default attributes for an incident.
#
title = "mapserv.utah.gov not serving static files"
date = 2017-09-11T08:00:23-06:00

# severity: represents the impact of
# your system due to the current incident.
# This is the list of supported severities:
#
# - under-maintenance
# - degraded-performance
# - partial-outage
# - major-outage
#
severity = "partial-outage"

# affectedsystems: is a list of systems affected
# by the incident.
# Example:
# affectedsystems = ["discover", "SDE", "license manager", "gis.utah.gov", "web api", "mapserv"]
#
affectedsystems = ["mapserv"]

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = true
+++
The mapserv web server is not serving static content items (html, css, images, javascript) as well as a variety of other domains. This is caused by an outage with our hosting companies security software (OpenAM). They are aware of the issue and is working to resolve it.

**Update**: OpenAM (the cause of the outage) has come back online and everything is operating normally. {{< track "2017-09-11T09:40:00-06:00" >}}
