+++
# default attributes for an incident.
#
title = "Nevada Network Station Outage"
date = 2023-04-18T09:02:29

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
affectedsystems = ["gps network"]

# resolved: marks an incident as resolved.
# It can be either true or false.
#
resolved = false
+++
Five stations are down in the Reno, Nevada area which does not allow for a network solution.

- Incline Village
- Reno
- Yerington
- Geriach
- Fernley

Most users will have to use the MS_ or single base connections. A resolution time is unknown. We will post updates as they become available.

## Update

The Fernley station is back online. This is still below the threshold for a network solution. Yerington received a new part that requires an install before coming back online. {{< track "2023-04-18T13:30:00" >}}
