+++
# default attributes for an incident.
#
title = "{{ replace .TranslationBaseName "-" " " | title }}"
date = {{ .Date }}

# severity: represents the impact of
# your system due to the current incident.
# This is the list of supported severities:
#
# - under-maintenance
# - degraded-performance
# - partial-outage
# - major-outage
#
severity = "under-maintenance"

# affectedsystems: is a list of systems affected
# by the incident.
# Example:
# affectedsystems = ["discover", "SDE", "license manager", "gis.utah.gov", "web api", "mapserv"]
#
affectedsystems = []

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = false
+++
What happened?
