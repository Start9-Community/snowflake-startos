# Snowflake

## Documentation

- [Snowflake](https://snowflake.torproject.org/) — the Tor Project's page on what Snowflake is and who it helps.
- [Running a Snowflake proxy](https://community.torproject.org/relay/setup/snowflake/) — the Tor Project's guide for proxy operators.

## What you get on StartOS

A Snowflake proxy that starts relaying for censored Tor users the moment the service is running, and a **Dashboard** interface showing what it has done: the NAT type it detected and how long the proxy has been up, bandwidth relayed in the last 24 hours, the last 7 days and all-time with the daily average (each split into down and up), which countries its clients connect from, and a weekday-by-hour heatmap of when your proxy is busiest.

There is nothing to configure and no account to make. The proxy never learns what anyone is browsing, and the traffic it carries leaves the Tor network from a Tor bridge — not from your address. Forwarding a port range on your router (see NAT type below) is optional and only improves how many clients the proxy can help; the service runs and relays clients without it.

## Getting set up

1. Start the service.
2. Open the **Dashboard** from the Dashboard tab.

The NAT type appears a minute or so after each start. Bandwidth and connection figures are added once an hour, so the first ones show up after the first full hour; the page refreshes itself every five minutes.

## Using Snowflake

### NAT type

**open** means clients behind strict NATs can reach your proxy, which is the most useful kind of proxy to run. **moderate** means only clients behind more permissive NATs can; the proxy still helps, just fewer people. **strict** means neither of the proxy's two test connections got through, so it can serve only the clients with the most permissive NATs. Proxies older than Snowflake 2.15 reported **unrestricted** and **restricted** instead; older log entries on the dashboard may still use those words.

To turn a moderate or strict proxy into an open one, open this service's **Proxy Relay Ports** interface and enable the public IP address of the gateway this server's internet traffic leaves through. If that gateway is your router, forward UDP 30000–30249 to this server there. Then restart the service; the NAT type in the status line should read **open** a minute or so later.

### Reading the figures

Everything on the dashboard comes from the proxy's own hourly summaries, so a figure is up to an hour behind and "0 connections" in the first hour is normal. The history lives on this server and survives restarts and updates.

The 24-hour and 7-day figures are rolling windows ending now, and the arrow next to each compares it with the window before; it appears once the history covers both. The seven-day sparkline uses the same rolling window, with a bucket for each 24 hours even if no summaries were logged. The daily average and its sparkline use logged hours, not elapsed calendar days. The country list ranks the clients the proxy has served since it last started — it starts over when the service restarts — and counts clients whose location could not be determined as **Unknown**. The heatmap groups summaries by the weekday and hour in which they end, in UTC, rather than the hour in which traffic occurred; empty cells have no summaries yet. The status line at the top shows the NAT type and live uptime, and turns amber if no hourly summary has arrived for two hours.
