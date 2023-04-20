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
resolved = true
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

## Update Two

The stations in the Reno area are back online. The Yerington (YER1) station is going through some setup and it will be back online shortly. That leaves the Geriach (GERL) station which is pretty far north and will only have an effect for those who work in far north areas. {{< track "2023-04-20T09:20:00" >}}

## Update Three

With only two stations down, customers are able to get a solution. We have decided to close this issue but will continue to post updates as the Yerington and Geriach stations come back online. {{< track "2023-04-20T17:11:00" >}}
