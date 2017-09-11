+++
# default attributes for an incident.
#
title = "mapserv.utah.gov not serving applications"
date = 2017-09-11T09:00:23-06:00

# severity: represents the impact of
# your system due to the current incident.
# This is the list of supported severities:
#
# - under-maintenance
# - degraded-performance
# - partial-outage
# - major-outage
#
severity = "major-outage"

# affectedsystems: is a list of systems affected
# by the incident.
# Example:
# affectedsystems = ["discover", "SDE", "license manager", "gis.utah.gov", "web api", "mapserv"]
#
affectedsystems = ["mapserv"]

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = false
+++
IIS is not serving up websites on our production web server that hosts mapserv.utah.gov as well as a variety of other domains. We believe that this is caused by an outage with our security software. DTS is aware of the issue and is working to resolve it.
