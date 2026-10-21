__d("WAWebIsOfficialClient", [
    "WALogger",
    "WAWebUA",
    "WAWebWamGlobals",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ()=>{
        const e = typeof self !== "undefined" ? self.navigator : null;
        return !!(e != null && e.webdriver);
    };
    const p = ()=>!(m() || o("WAWebUA").UA.isChrome && /HeadlessChrome/.test(window.navigator.userAgent));
    const _ = ()=>{
        try {
            const t = new Error;
            const n = t.stack;
            const a = n.split("\n").filter((e)=>!!e.trim()).pop();
            if (a == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "A caller is not found ",
                    ""
                ])), n).tags("uc");
                return true;
            }
            if (!a.includes(".whatsapp.com")) {
                if (r("gkx")("26258")) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Caller ",
                        ""
                    ])), a).tags("uc");
                } else {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Caller ",
                        ""
                    ])), a).tags("uc").sendLogs("Unexpectedly detected UC");
                }
                return false;
            }
        } catch (error) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Cannot analyze UC ",
                ""
            ])), r("getErrorSafe")(error).stack).tags("uc");
        }
        return true;
    };
    const f = "webpackChunkwhatsapp_web_client";
    if (!(f in window)) {
        window[f] = [];
    }
    const g = window[f];
    const h = p();
    let y = h;
    function C() {
        return y;
    }
    if (g != null) {
        Object.defineProperty(window, f, {
            get: function() {
                if (!_()) {
                    y = false;
                    try {
                        o("WAWebWamGlobals").Global.set({
                            ocVersion: 0
                        });
                    } catch (error) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Cannot set ocVersion ",
                            ""
                        ])), r("getErrorSafe")(error).stack).tags("uc");
                    }
                }
                return g;
            }
        });
    }
    function b(e) {
        return !!e.startsWith("BA");
    }
    l.isOfficialClient = h;
    l.getIsOfficialClient = C;
    l.isUnofficialStanzaId = b;
}, 98);