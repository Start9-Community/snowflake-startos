FROM thetorproject/snowflake-proxy:v2.15.2 AS upstream

FROM alpine:3.22
# The base image's CA store is only as current as its last release.
RUN apk add --no-cache busybox-extras \
 && apk upgrade --no-cache ca-certificates-bundle \
 && if [ -f /etc/ssl/certs/ca-certificates.crt.apk-new ]; then mv /etc/ssl/certs/ca-certificates.crt.apk-new /etc/ssl/certs/ca-certificates.crt; fi \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt
COPY --from=upstream /bin/proxy /usr/bin/snowflake-proxy
COPY --from=upstream /usr/share/tor/ /usr/share/tor/
COPY --chmod=755 dashboard/index.cgi /www/cgi-bin/index.cgi
COPY dashboard/favicon.svg /www/favicon.svg
