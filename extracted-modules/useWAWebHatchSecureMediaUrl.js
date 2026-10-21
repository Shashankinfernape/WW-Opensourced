__d("useWAWebHatchSecureMediaUrl", [
    "WALogger",
    "WAWebHatchDownloadSecureAvatar",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebInMemoryMediaBlobCache"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useEffectEvent } = u;
    function m(e, t) {
        const a = o("react-compiler-runtime").c(8);
        const i = e?.filehash ?? null;
        const l = r("useWAWebInMemoryMediaBlobCache")(i ?? "");
        let s;
        if (a[0] !== e || a[1] !== t) {
            s = function(r) {
                if (e != null) {
                    o("WAWebHatchDownloadSecureAvatar").downloadHatchSecureMedia(e, r, t).catch(p);
                }
            };
            a[0] = e;
            a[1] = t;
            a[2] = s;
        } else {
            s = a[2];
        }
        const u = useEffectEvent(s);
        let m;
        if (a[3] !== i || a[4] !== u) {
            m = function() {
                if (i != null) {
                    const e = new AbortController;
                    u(e.signal);
                    return function() {
                        e.abort();
                    };
                }
            };
            a[3] = i;
            a[4] = u;
            a[5] = m;
        } else {
            m = a[5];
        }
        let _;
        if (a[6] !== i) {
            _ = [
                i
            ];
            a[6] = i;
            a[7] = _;
        } else {
            _ = a[7];
        }
        useEffect(m, _);
        if (i != null) {
            return l;
        }
        return null;
    }
    function p(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch: secure media resolve failed"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("hatch-secure-media-resolve-failed");
    }
    l.default = m;
}, 98);