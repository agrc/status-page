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
severity = "degraded-performance"

# affectedsystems: is a list of systems affected
# by the incident.
# Example:
# affectedsystems = ["Web API", "mapserv", "discover", "SGID", "license manager", "gis.utah.gov"]
#
affectedsystems = []

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = false
+++
What happened?
