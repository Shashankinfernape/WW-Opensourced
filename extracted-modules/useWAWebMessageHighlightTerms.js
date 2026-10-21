__d("useWAWebMessageHighlightTerms", [
    "WAWebCmd",
    "WAWebSearchHighlightTermsContext.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useEffect, useRef, useState } = s;
    function useP(e) {
        const t = o("react-compiler-runtime").c(3);
        const n = useContext(r("WAWebSearchHighlightTermsContext.react"));
        const a = useState(null);
        const i = a[0];
        const l = a[1];
        const sRef = useRef(null);
        let p;
        let _;
        if (t[0] !== e) {
            p = function() {
                const t = function(n, r) {
                    if (e.equals(r) && n.length > 0) {
                        window.clearTimeout(sRef.current ?? undefined);
                        l(n);
                        sRef.current = window.setTimeout(function() {
                            l(null);
                        }, 5000);
                    }
                };
                o("WAWebCmd").Cmd.on("set_msg_highlight_terms", t);
                return function() {
                    window.clearTimeout(sRef.current ?? undefined);
                    o("WAWebCmd").Cmd.off("set_msg_highlight_terms", t);
                };
            };
            _ = [
                e
            ];
            t[0] = e;
            t[1] = p;
            t[2] = _;
        } else {
            p = t[1];
            _ = t[2];
        }
        useEffect(p, _);
        return n ?? i;
    }
    l.default = useP;
}, 98);