__d("WAWebVideoAvatarContent.react", [
    "WAWebDetailImage.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useState } = c;
    const p = {
        media: {
            display: "x1lliihq",
            width: "xh8yej3",
            height: "x5yr21d",
            objectFit: "xl1xv1r",
            $$css: true
        },
        circle: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        squircle: {
            clipPath: "x1f2iure",
            $$css: true
        }
    };
    function _(shape) {
        if (shape === o("WAWebDetailImage.react").DetailImageShape.Square) {
            return null;
        }
        if (shape === o("WAWebDetailImage.react").DetailImageShape.Squircle) {
            return p.squircle;
        }
        return p.circle;
    }
    function f(t) {
        const n = o("react-compiler-runtime").c(21);
        const { alt, imageUrl, loop, onEnded, onError, onLoad, shape, videoUrl } = t;
        const loop_1 = loop === undefined ? true : loop;
        const y = useState(null);
        const C = y[0];
        const b = y[1];
        const v = C === videoUrl;
        let S;
        if (n[0] !== onError || n[1] !== videoUrl) {
            S = function() {
                b(videoUrl);
                onError?.();
            };
            n[0] = onError;
            n[1] = videoUrl;
            n[2] = S;
        } else {
            S = n[2];
        }
        const R = S;
        let L;
        if (n[3] !== onLoad) {
            L = function() {
                onLoad?.();
            };
            n[3] = onLoad;
            n[4] = L;
        } else {
            L = n[4];
        }
        const E = L;
        let k;
        let I;
        if (n[5] !== alt || n[6] !== E || n[7] !== imageUrl || n[8] !== shape || n[9] !== v || n[10] !== videoUrl) {
            I = Symbol.for("react.early_return_sentinel");
            e: {
                const T = _(shape);
                if (v || videoUrl === "") {
                    if (imageUrl == null) {
                        I = null;
                        break e;
                    }
                    I = <img {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.media, T), {
                        alt: alt ?? "",
                        draggable: false,
                        onLoad: E,
                        src: imageUrl
                    })}/>;
                    break e;
                }
                k = (e || (e = r("stylex"))).props(p.media, T);
            }
            n[5] = alt;
            n[6] = E;
            n[7] = imageUrl;
            n[8] = shape;
            n[9] = v;
            n[10] = videoUrl;
            n[11] = k;
            n[12] = I;
        } else {
            k = n[11];
            I = n[12];
        }
        if (I !== Symbol.for("react.early_return_sentinel")) {
            return I;
        }
        const D = imageUrl ?? undefined;
        let x;
        if (n[13] !== R || n[14] !== E || n[15] !== loop_1 || n[16] !== onEnded || n[17] !== k || n[18] !== D || n[19] !== videoUrl) {
            x = <video {...babelHelpers.extends({}, k, {
                "aria-hidden": "true",
                autoPlay: true,
                disablePictureInPicture: true,
                loop: loop_1,
                muted: true,
                onEnded,
                onError: R,
                onLoadedData: E,
                playsInline: true,
                poster: D,
                src: videoUrl
            })}/>;
            n[13] = R;
            n[14] = E;
            n[15] = loop_1;
            n[16] = onEnded;
            n[17] = k;
            n[18] = D;
            n[19] = videoUrl;
            n[20] = x;
        } else {
            x = n[20];
        }
        return x;
    }
    l.default = f;
}, 98);