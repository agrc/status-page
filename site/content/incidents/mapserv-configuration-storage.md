+++
# default attributes for an incident.
#
title = "mapserv configuration storage"
date = 2017-08-28T11:08:01-06:00

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
# affectedsystems = ["API", "Build servers"]
#
affectedsystems = ["mapserv"]

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = true
+++
The storage volume for the mapserv configuration was renamed. This has caused a slow degradation until a full outage has been notified.

**Update**: Capitol hosting has repaired the volume name. {{< track "2017-08-28T12:35:33-06:00" >}}
