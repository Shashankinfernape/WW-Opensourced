__d("useWAWebMetaAiWaffleTokenWarmup", [
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebMetaAiWaffleAuthTokenCache",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(3);
        const nRef = useRef(false);
        let r;
        let a;
        if (t[0] !== e.id) {
            r = function() {
                if (!(nRef.current || !o("WAWebBotUtils").isMetaAiBot(e.id) || !o("WAWebBotBaseGating").isAiAccountLinkingEnabled())) {
                    nRef.current = true;
                    o("WAWebMetaAiWaffleAuthTokenCache").refreshMetaAiWaffleAuthTokenBlob();
                }
            };
            a = [
                e.id
            ];
            t[0] = e.id;
            t[1] = r;
            t[2] = a;
        } else {
            r = t[1];
            a = t[2];
        }
        useEffect(r, a);
    }
    l.useWAWebMetaAiWaffleTokenWarmup = d;
}, 98);