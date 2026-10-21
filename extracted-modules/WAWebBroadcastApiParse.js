__d("WAWebBroadcastApiParse", [
    "$InternalEnum",
    "WAWebApiParseUtils"
], function(t, n, r, o, a, i, l) {
    const e = new RegExp(`^${o("WAWebApiParseUtils").ORIGIN}${o("WAWebApiParseUtils").OPTIONAL_PATH_PART}/accept/?\\?channel_invite_code=(?:&.*)?\$`, "i");
    const s = n("$InternalEnum").Mirrored([
        "Newsletter",
        "Status"
    ]);
    function u(e) {
        return e.length === 0 || e.length === 1 && e[0] === "";
    }
    function c(t) {
        try {
            const n = new URL(t);
            const r = n.pathname;
            const a = r.split("/");
            const i = a[0];
            const l = a[1];
            const c = babelHelpers.arrayLikeToArray(a).slice(2);
            if (o("WAWebApiParseUtils").isWhatsappHost(n)) {
                if (!u(c)) {
                    return null;
                }
                e: {
                    if (l === "channels" || l === "channel") {
                        return {
                            feature: s.Newsletter,
                            url: n.href
                        };
                    }
                    if (l === "status") {
                        return {
                            feature: s.Status,
                            url: n.href
                        };
                    }
                    if (l === "updates") {
                        return {
                            feature: s.Status,
                            url: n.href
                        };
                    }
                    break e;
                }
            }
            const d = t.match(e);
            if (d) {
                return {
                    feature: s.Newsletter,
                    url: t
                };
            }
        } catch (e) {}
        return null;
    }
    l.BroadcastFeatureType = s;
    l.parseBroadcastFeatureLink = c;
}, 98);