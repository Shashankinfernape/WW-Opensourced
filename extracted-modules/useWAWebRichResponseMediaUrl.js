__d("useWAWebRichResponseMediaUrl", [
    "WALogger",
    "WAWebDownloadRichResponseMedia",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebInMemoryMediaBlobCache"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useEffectEvent, useState } = u;
    function useP(e, t) {
        const n = o("react-compiler-runtime").c(11);
        const a = e != null ? e.filehash : null;
        const i = r("useWAWebInMemoryMediaBlobCache")(a ?? "");
        const l = useState(null);
        const s = l[0];
        const u = l[1];
        let p;
        if (n[0] !== e || n[1] !== t) {
            p = function(r) {
                if (e != null) {
                    const n = e.filehash;
                    o("WAWebDownloadRichResponseMedia").downloadRichResponseMedia(e, t, r).catch(_).then(()=>{
                        if (!r.aborted) {
                            u(n);
                        }
                    });
                }
            };
            n[0] = e;
            n[1] = t;
            n[2] = p;
        } else {
            p = n[2];
        }
        const f = useEffectEvent(p);
        let g;
        if (n[3] !== a || n[4] !== f) {
            g = function() {
                if (a != null) {
                    const e = new AbortController;
                    f(e.signal);
                    return function() {
                        e.abort();
                    };
                }
            };
            n[3] = a;
            n[4] = f;
            n[5] = g;
        } else {
            g = n[5];
        }
        let h;
        if (n[6] !== a) {
            h = [
                a
            ];
            n[6] = a;
            n[7] = h;
        } else {
            h = n[7];
        }
        useEffect(g, h);
        const hasSettled = a == null || s === a;
        const C = a != null ? i : null;
        let b;
        if (n[8] !== hasSettled || n[9] !== C) {
            b = {
                hasSettled,
                url: C
            };
            n[8] = hasSettled;
            n[9] = C;
            n[10] = b;
        } else {
            b = n[10];
        }
        return b;
    }
    function _(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "rich response: media resolve failed"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("rich-response-media-resolve-failed");
    }
    l.default = useP;
}, 98);