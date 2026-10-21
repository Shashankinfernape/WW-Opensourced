__d("WAWebNewsletterStatusApiParse", [
    "WAWebApiParseUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "channel_status";
    const s = new RegExp(`^whatsapp:\\/\\/${e}\\/(\\w+)(?:\\/(\\w+))?\\/?(\\?.*)?\$`, "i");
    const u = new RegExp(`^${o("WAWebApiParseUtils").ORIGIN}${o("WAWebApiParseUtils").OPTIONAL_PATH_PART}/${e}/(\\w+)(?:/(\\w+))?\\/?(\\?.*)?\$`, "i");
    function c(t) {
        try {
            const n = new URL(t);
            if (o("WAWebApiParseUtils").isWhatsappHost(n)) {
                const r = n.pathname;
                const a = r.split("/");
                const i = a[0];
                const l = a[1];
                const c = a[2];
                const m = a[3];
                const p = babelHelpers.arrayLikeToArray(a).slice(4);
                if (l === e && c != null && c !== "") {
                    if (p.length > 0 && !(p.length === 1 && p[0] === "")) {
                        return null;
                    }
                    return {
                        inviteCode: c,
                        statusId: d(m)
                    };
                }
            }
            const _ = t.match(u);
            if (_) {
                const f = _[2];
                const g = _[3];
                if (f != null && f !== "") {
                    return {
                        inviteCode: f,
                        statusId: d(g)
                    };
                }
            }
        } catch (e) {}
        const h = t.match(s);
        if (h) {
            const y = h[1];
            const C = h[2];
            if (y != null && y !== "") {
                return {
                    inviteCode: y,
                    statusId: d(C)
                };
            }
        }
        return null;
    }
    function d(e) {
        if (e == null || e === "" || !/^\d+$/.test(e)) {
            return null;
        }
        const t = parseInt(e, 10);
        if (Number.isNaN(t) || t <= 0) {
            return null;
        }
        return e;
    }
    l.parseNewsletterStatusDeeplink = c;
}, 98);