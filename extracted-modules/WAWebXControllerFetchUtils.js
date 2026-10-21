__d("WAWebXControllerFetchUtils", [
    "Promise",
    "URI",
    "WALogger",
    "WAWebPonyfillsFetch",
    "asyncToGeneratorRuntime",
    "getAsyncHeaders",
    "getAsyncParams"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { additionalHeaders: a = {}, additionalParams: l = {}, method: c, retry: m = false, retryDelayMs: _ = 2000 }) {
            const f = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const t = new (u || (u = r("URI")))(e);
                    const n = r("getAsyncParams")(c);
                    const o = r("getAsyncHeaders")(t);
                    const i = new URLSearchParams;
                    Object.entries(n).forEach(([t, n])=>{
                        if (n != null) {
                            i.append(t, String(n));
                        }
                    });
                    Object.entries(l).forEach(([t, n])=>{
                        i.append(t, n);
                    });
                    const s = babelHelpers.extends({}, o, a, {
                        "Content-Type": "application/x-www-form-urlencoded"
                    });
                    const d = c === "GET" ? `${e}?${i.toString()}` : e;
                    const m = c === "GET" ? void 0 : i.toString();
                    return yield r("WAWebPonyfillsFetch")(d, {
                        method: c,
                        headers: s,
                        body: m
                    });
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            if (!m) {
                return f();
            }
            try {
                const g = yield f();
                if (g.ok) {
                    return g;
                }
            } catch (e) {}
            yield new (s || (s = n("Promise")))(function(e) {
                return window.setTimeout(e, _);
            });
            return f();
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                const n = yield t.text();
                const r = n.replace(/^for\s*\(\s*;;\s*\)\s*;\s*/, "");
                return JSON.parse(r);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Failed to parse JSON response: ",
                    ""
                ])), t);
                return null;
            }
        });
        return p.apply(this, arguments);
    }
    l.fetchFromXController = c;
    l.extractJsonFromResponse = m;
}, 98);