__d("WAWebExternalInjectedSources", [
    "WAWebFPUtils",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e.startsWith("data:");
    }
    function s(t) {
        if (t === "" || e(t)) {
            return false;
        }
        return !o("WAWebFPUtils").waUrlRegex.test(t);
    }
    function u(e) {
        const t = new Set;
        const n = new Set;
        e.forEach((e)=>{
            const r = e.match(/chrome-extension:\/\/([a-z0-9]+)\//i);
            if (r) {
                t.add(e);
            } else {
                n.add(e);
            }
        });
        return [
            Array.from(t),
            Array.from(n)
        ];
    }
    function c() {
        const e = Array.from(document.querySelectorAll("link"));
        const t = e.reduce((e, t)=>{
            if (t.href && s(t.href)) {
                e.push(t.href);
            }
            return e;
        }, []);
        return u(t);
    }
    function d() {
        const e = Array.from(document.querySelectorAll("script"));
        const t = e.reduce((e, t)=>{
            if (t.src && s(t.src)) {
                e.push(t.src);
            }
            return e;
        }, []);
        return u(t);
    }
    function m() {
        try {
            const e = d();
            const t = e[0];
            const n = e[1];
            const o = c();
            const a = o[0];
            const i = o[1];
            return {
                extensionIds: Array.from(new Set(t.concat(a))).join(","),
                externalSources: Array.from(new Set(n.concat(i))).join(",")
            };
        } catch (e) {
            return {
                extensionIds: "error",
                externalSources: Math.random() < 0.1 ? r("getErrorSafe")(e).stack : ""
            };
        }
    }
    l.default = m;
}, 98);