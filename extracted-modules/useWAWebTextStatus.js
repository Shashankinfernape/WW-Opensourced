__d("useWAWebTextStatus", [
    "WAWebFrontendContactGetters",
    "WAWebTextStatusAction",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebAsync",
    "useWAWebContactValues",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const useState = (e || (e = o("react"))).useState;
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_contact = e.contact;
        const i = useState(null);
        const error = i[0];
        const u = i[1];
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime
            ];
            t[0] = c;
        } else {
            c = t[0];
        }
        const d = o("useWAWebContactValues").useContactValues(e_contact.id, c);
        const m = d[0];
        let p;
        if (t[1] !== e_contact.id || t[2] !== m) {
            p = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    u(null);
                    if (!!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() && o("WAWebTextStatusUtils").isTextStatusNotFetched(m)) {
                        try {
                            yield o("WAWebTextStatusAction").getTextStatus(e_contact.id);
                        } catch (err) {
                            u(r("getErrorSafe")(err));
                        }
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            t[1] = e_contact.id;
            t[2] = m;
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = r("useWAWebStableCallback")(p);
        let f;
        if (t[4] !== e_contact.id || t[5] !== m) {
            f = [
                e_contact.id,
                m
            ];
            t[4] = e_contact.id;
            t[5] = m;
            t[6] = f;
        } else {
            f = t[6];
        }
        r("useWAWebAsync")(_, f);
        let g;
        if (t[7] !== error) {
            g = {
                error
            };
            t[7] = error;
            t[8] = g;
        } else {
            g = t[8];
        }
        return g;
    }
    l.default = u;
}, 98);