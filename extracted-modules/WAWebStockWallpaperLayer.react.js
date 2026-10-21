__d("WAWebStockWallpaperLayer.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    const m = new Set;
    function p(e) {
        const t = o("react-compiler-runtime").c(19);
        const { fullResUrl, thumbnailUrl } = e;
        let a;
        if (t[0] !== fullResUrl) {
            a = m.has(fullResUrl);
            t[0] = fullResUrl;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        const l = useState(i);
        const u = l[0];
        const p = l[1];
        const _ = useState(!i);
        const f = _[0];
        const g = _[1];
        let h;
        let y;
        if (t[2] !== fullResUrl) {
            h = function() {
                if (!m.has(fullResUrl)) {
                    let e = false;
                    const t = new Image;
                    t.src = fullResUrl;
                    const r = function() {
                        m.add(fullResUrl);
                        if (!e) {
                            p(true);
                        }
                    };
                    t.decode().then(r, ()=>{
                        if (t.complete && t.naturalWidth > 0) {
                            r();
                        }
                    });
                    return function() {
                        e = true;
                    };
                }
            };
            y = [
                fullResUrl
            ];
            t[2] = fullResUrl;
            t[3] = h;
            t[4] = y;
        } else {
            h = t[3];
            y = t[4];
        }
        useEffect(h, y);
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            C = function(t) {
                if (t.propertyName === "opacity") {
                    g(false);
                }
            };
            t[5] = C;
        } else {
            C = t[5];
        }
        const onTransitionEnd = C;
        let v;
        if (t[6] !== f || t[7] !== thumbnailUrl) {
            v = thumbnailUrl != null && f && <div className="x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x18d0r48 x1xsqp64 x1ja2u2z x1hedwgd x1bao77f" style={{
                backgroundImage: `url(${thumbnailUrl})`
            }} data-testid="stock-wallpaper-thumbnail"/>;
            t[6] = f;
            t[7] = thumbnailUrl;
            t[8] = v;
        } else {
            v = t[8];
        }
        let S;
        if (t[9] !== u) {
            S = ({
                0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x18d0r48 x1xsqp64 x1ja2u2z xg01cxk x1jtmdvd x9kvfbb",
                1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x18d0r48 x1xsqp64 x1ja2u2z x1jtmdvd x9kvfbb x1hc1fzr"
            })[!!u << 0];
            t[9] = u;
            t[10] = S;
        } else {
            S = t[10];
        }
        const backgroundImage = `url(${fullResUrl})`;
        let L;
        if (t[11] !== backgroundImage) {
            L = {
                backgroundImage
            };
            t[11] = backgroundImage;
            t[12] = L;
        } else {
            L = t[12];
        }
        let E;
        if (t[13] !== S || t[14] !== L) {
            E = <div className={S} style={L} onTransitionEnd={onTransitionEnd} data-testid="stock-wallpaper-image"/>;
            t[13] = S;
            t[14] = L;
            t[15] = E;
        } else {
            E = t[15];
        }
        let k;
        if (t[16] !== v || t[17] !== E) {
            k = <>{v}{E}</>;
            t[16] = v;
            t[17] = E;
            t[18] = k;
        } else {
            k = t[18];
        }
        return k;
    }
    l.default = p;
}, 98);