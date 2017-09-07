+++
# default attributes for an incident.
#
title = "Web Api Email Sending"
date = 2017-09-07T17:05:25-06:00

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
affectedsystems = ['web api']

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = false
+++
It has been brought to our attention that emails are not being sent since August 23rd when signing up for new accounts etc. An incident has been created with our hosting provider and should be resolved soon.
