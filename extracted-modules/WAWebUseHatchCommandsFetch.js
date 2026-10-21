__d("WAWebUseHatchCommandsFetch", [
    "WALogger",
    "WAWebBotUtils",
    "WAWebCanonicalHatchCommandGetQuery",
    "WAWebHatchCommandCache",
    "WAWebHatchGating",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    function c(t) {
        const n = t.toJid();
        const r = o("WAWebHatchGating").isHatchCommandsEnabled() && o("WAWebBotUtils").isHatchBot(t);
        useEffect(function() {
            if (r && o("WAWebHatchCommandCache").getHatchCommands(n) == null) {
                o("WAWebCanonicalHatchCommandGetQuery").fetchHatchCommandGet().then((e)=>{
                    o("WAWebHatchCommandCache").setHatchCommands(n, e);
                }).catch((t)=>{
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "useHatchCommandsFetch: failed to fetch commands for ",
                        ""
                    ])), n);
                });
            }
        }, [
            r,
            n
        ]);
    }
    l.useHatchCommandsFetch = c;
}, 98);