__d("WAWebBrAddPixKeyPartnerDirectory", [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = "@s.whatsapp.net";
    const c = "@c.us";
    function d(e) {
        const t = _(e);
        return f().some((e)=>p(e, t));
    }
    function m(e) {
        const t = _(e);
        for (const n of f()){
            if (n.catalogId != null && p(n, t)) {
                return n.catalogId;
            }
        }
        return null;
    }
    function p(e, t) {
        return e.jids.some((e)=>t.has(e));
    }
    function _(e) {
        const t = new Set;
        for (const n of e){
            if (!(n == null || !n.isUser())) {
                const r = o("WAWebWidFactory").asUserWidOrThrow(n);
                t.add(r.toString());
                const a = o("WAWebApiContact").getAlternateUserWid(r);
                if (a != null) {
                    t.add(a.toString());
                }
            }
        }
        return t;
    }
    function f() {
        try {
            return g(JSON.parse(o("WAWebABProps").getABPropConfigValue("br_payments_add_pix_key_deeplink_allowlist")));
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "br_add_pix_key_message: allow-list prop is not parseable"
            ]))).sendLogs("br-add-pix-key-allowlist-parse");
            return [];
        }
    }
    function g(e) {
        if (e == null || typeof e !== "object" || Array.isArray(e)) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "br_add_pix_key_message: allow-list prop is not an object"
            ]))).sendLogs("br-add-pix-key-allowlist-parse");
            return [];
        }
        const t = [];
        for (const n of Object.keys(e)){
            const r = e[n];
            if (!(r == null || typeof r !== "object" || Array.isArray(r))) {
                const jids = Array.isArray(r.jids) ? r.jids.filter((e)=>typeof e === "string").map(h) : [];
                const i = r.catalogId;
                t.push({
                    catalogId: typeof i === "string" && i !== "" ? i : null,
                    jids
                });
            }
        }
        return t;
    }
    function h(e) {
        if (e.endsWith(u)) {
            return e.slice(0, -u.length) + c;
        }
        return e;
    }
    l.isAddPixKeyPartnerSender = d;
    l.addPixKeyPartnerCatalogIdForSender = m;
}, 98);