+++
# default attributes for an incident.
#
# Hugo adds `title` and `date` by default
# when running `hugo new incidents/new-incident.md`,
# so we don't have to specify them here.

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
affectedsystems = ["Discover"]

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = true
+++
The google cloud platform is having issues that is causing issues for discover. {{< track "2017-06-29T09:44:00.000Z" >}}
