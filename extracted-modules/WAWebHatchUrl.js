__d("WAWebHatchUrl", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = /^https:\/\/[^/\\\s?#]/i;
    const s = /^https?:\/\/[^/\\\s?#]/i;
    const u = /[\s\\]/;
    const c = "agent.meta.ai";
    const d = /^\/connectors\/connect\/([A-Za-z0-9_-]+)\/?$/;
    function m() {
        return p(o("WAWebABProps").getABPropConfigValue("wa_hatch_companion_onboarding_url"));
    }
    function p(t) {
        return g(t, e);
    }
    function _(e) {
        return g(e, s);
    }
    function f(e) {
        let t;
        const r = p(e);
        if (r == null) {
            return null;
        }
        const o = new URL(r);
        const { host: a, pathname: i } = o;
        if (a === c && (t = d.exec(i)?.[1]) != null) {
            return t;
        }
        return null;
    }
    function g(e, t) {
        const n = e?.trim();
        if (n == null || !t.test(n) || u.test(n)) {
            return null;
        }
        let r;
        try {
            r = new URL(n);
        } catch (e) {
            return null;
        }
        if (r.hostname !== "" && r.username === "" && r.password === "") {
            return n;
        }
        return null;
    }
    l.getHatchJoinUrl = m;
    l.toHttpsUrl = p;
    l.toWebUrl = _;
    l.getHatchConnectLinkConnectorId = f;
}, 98);