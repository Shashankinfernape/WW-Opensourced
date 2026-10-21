__d("WAMediaConnParser", [
    "WADeprecatedWapParser",
    "WAServerMediaType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (r("WADeprecatedWapParser"))("mediaConnParser", function(e) {
        const r = e.child("media_conn");
        const o = c(r);
        return {
            hosts: o,
            authToken: r.attrString("auth"),
            authTokenExpiryTs: r.attrFutureTime("auth_ttl"),
            routesExpiryTs: r.attrFutureTime("ttl"),
            maxBuckets: r.attrInt("max_buckets"),
            maxManualRetry: r.maybeAttrInt("max_manual_retry", 0, 4) ?? 3,
            maxAutoDownloadRetry: r.maybeAttrInt("max_auto_download_retry", 0, 4) ?? 3
        };
    });
    function s(e) {
        if (e.hasAttr("fallback_hostname")) {
            return {
                domain: e.attrString("fallback_hostname"),
                class: e.maybeAttrString("fallback_class"),
                ip4: e.maybeAttrString("fallback_ip4") ?? void 0,
                ip6: e.maybeAttrString("fallback_ip6") ?? void 0
            };
        }
    }
    function u(e) {
        return {
            domain: e.attrString("hostname"),
            fallback: s(e),
            uploadable: d(e, "upload"),
            downloadable: d(e, "download"),
            isFallback: e.maybeAttrString("type") === "fallback",
            downloadBuckets: e.maybeChild("download_buckets")?.mapChildren(function(e) {
                return parseInt(e.tag(), 10);
            }) ?? [],
            class: e.maybeAttrString("class"),
            ip4: e.maybeAttrString("ip4") ?? void 0,
            ip6: e.maybeAttrString("ip6") ?? void 0
        };
    }
    function c(e) {
        return e.mapChildrenWithTag("host", u);
    }
    function d(e, t) {
        if (e.hasChild(t)) {
            return e.child(t).mapChildren(function(e) {
                const t = e.tag();
                return o("WAServerMediaType").castToServerMediaType(t);
            }).filter(Boolean);
        }
        return o("WAServerMediaType").SERVER_MEDIA;
    }
    l.mediaConnParser = e;
}, 98);