__d("jsRouteBuilder", [
    "ConstUriUtils",
    "FBLogger",
    "routeBuilderUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "#";
    function s(t, n, a, i, l = false) {
        const s = o("routeBuilderUtils").getPathParts(t);
        function u(u) {
            try {
                const c = i != null ? babelHelpers.extends({}, i, u) : u ?? {};
                const d = {};
                let m = "";
                let p = false;
                m = s.reduce((acc, item)=>{
                    if (item.isToken) {
                        const { optional, prefix, suffix, token } = item;
                        if (optional && p) {
                            return acc;
                        }
                        const s = c[token] ?? n[token];
                        if (s == null && optional) {
                            p = true;
                            return acc;
                        }
                        if (s == null) {
                            const u = new Error(`Missing required template parameter: ${token}`);
                            u.stack;
                            throw u;
                        }
                        if (s === "") {
                            const m = new Error(`Required template parameter is an empty string: ${token}`);
                            m.stack;
                            throw m;
                        }
                        d[token] = true;
                        return `${acc}/${prefix}${s}${suffix}`;
                    } else {
                        p = false;
                        return `${acc}/${item.part}`;
                    }
                }, "");
                if (t.slice(-1) === "/") {
                    m += "/";
                }
                if (m === "") {
                    m = "/";
                }
                let _ = o("ConstUriUtils").getUri(m);
                for(const g in c){
                    const h = c[g];
                    if (!d[g] && h != null && _ != null) {
                        if (a != null && a.has(g)) {
                            if (h !== false) {
                                _ = _.addQueryParam(g, null);
                            }
                        } else {
                            _ = _.addQueryParam(g, h);
                        }
                    }
                }
                return [
                    _,
                    m
                ];
            } catch (error) {
                const y = error instanceof Error ? error.message : String(error);
                let C = r("FBLogger")("JSRouteBuilder").blameToPreviousFrame().blameToPreviousFrame();
                if (l) {
                    C = C.blameToPreviousFrame();
                }
                C.mustfix("Failed building URI for base path: %s message: %s", t, y);
                return [
                    null,
                    e
                ];
            }
        }
        return {
            buildUri: function(n) {
                const r = u(n)[0] ?? o("ConstUriUtils").getUri(e);
                if (r == null) {
                    const a = new Error("Not even the fallback URL parsed validly!");
                    a.stack;
                    throw a;
                }
                return r;
            },
            buildUriNullable: function(t) {
                return u(t)[0];
            },
            buildURL: function(t) {
                const n = u(t);
                const r = n[0];
                const o = n[1];
                return r?.toString() ?? o;
            },
            buildURLStringDEPRECATED: function(t) {
                const n = u(t);
                const r = n[0];
                const o = n[1];
                return r?.toString() ?? o;
            },
            getPath: function() {
                return t;
            }
        };
    }
    l.default = s;
}, 98);