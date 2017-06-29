+++
# default attributes for an incident.
#
title = "Test Generation2"
date = 2017-06-29T11:04:07-06:00

# severity: represents the impact of
# your system due to the current incident.
# This is the list of supported severities:
#
# - under-maintenance
# - degraded-performance
# - partial-outage
# - major-outage
#
severity = "degraded-performance"

# affectedsystems: is a list of systems affected
# by the incident.
# Example:
# affectedsystems = ["API", "Build servers"]
#
affectedsystems = ["API", "Build servers"]

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = false
+++
