__d("WAWebBotCardImageUtils", [
    "WAWebMediaDataUtils",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function useD(e) {
        const t = o("react-compiler-runtime").c(6);
        const { height, imageUrl, width } = e;
        const s = useState(null);
        const d = s[0];
        const m = s[1];
        const p = useState(imageUrl);
        const _ = p[0];
        const f = p[1];
        if (imageUrl !== _) {
            f(imageUrl);
            if (!r("isStringNotNullAndNotWhitespaceOnly")(imageUrl)) {
                m(null);
            }
        }
        const g = r("useWAWebUnmountSignal")();
        let h;
        let y;
        if (t[0] !== height || t[1] !== imageUrl || t[2] !== g || t[3] !== width) {
            h = function() {
                if (r("isStringNotNullAndNotWhitespaceOnly")(imageUrl)) {
                    let e = false;
                    const t = (()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            const t = [
                                {
                                    width,
                                    height,
                                    imageFormat: "image/jpeg",
                                    imageFormatOptions: 1
                                }
                            ];
                            const n = yield o("WAWebMediaDataUtils").getResizedThumbData(imageUrl, t);
                            const r = n[0];
                            if (!e && !g.aborted) {
                                m(r?.dataUrl);
                            }
                        });
                        return function() {
                            return t.apply(this, arguments);
                        };
                    })();
                    t();
                    return function() {
                        e = true;
                    };
                }
            };
            y = [
                imageUrl,
                width,
                height,
                g
            ];
            t[0] = height;
            t[1] = imageUrl;
            t[2] = g;
            t[3] = width;
            t[4] = h;
            t[5] = y;
        } else {
            h = t[4];
            y = t[5];
        }
        useEffect(h, y);
        return d;
    }
    function m(e) {
        return `data:image/jpeg;base64,${e}`;
    }
    l.useResizedImage = useD;
    l.toJpegDataUrl = m;
}, 98);