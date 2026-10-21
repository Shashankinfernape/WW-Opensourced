__d("WAWebStickerOverlayAnimation.react", [
    "WAWebInMemoryLottieStickerCache",
    "WAWebLottieAnimationLoadable",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useEffect } = c;
    const p = {
        position: "x10l6tqk",
        top: "xwa60dl",
        left: "x1nrll8i",
        insetInlineStart: "",
        insetInlineEnd: "",
        transform: "x11lhmoz",
        zIndex: "xfo81ep",
        pointerEvents: "x47corl",
        $$css: true
    };
    const _ = {
        overlayContainer: function(t) {
            return [
                p,
                {
                    width: t != null ? "x5lhr3w" : t,
                    height: t != null ? "x16ye13r" : t,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t)
                }
            ];
        },
        lottieFill: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(16);
        const { mediaData, onClose, sizePercent } = t;
        const s = sizePercent === undefined ? 400 : sizePercent;
        let c;
        if (n[0] !== mediaData.filehash) {
            c = o("WAWebInMemoryLottieStickerCache").InMemorySecondaryLottieStickerCache.get(mediaData.filehash);
            n[0] = mediaData.filehash;
            n[1] = c;
        } else {
            c = n[1];
        }
        const d = c;
        let p;
        let f;
        if (n[2] !== onClose || n[3] !== d) {
            p = function() {
                if (d == null) {
                    onClose();
                }
            };
            f = [
                d,
                onClose
            ];
            n[2] = onClose;
            n[3] = d;
            n[4] = p;
            n[5] = f;
        } else {
            p = n[4];
            f = n[5];
        }
        useEffect(p, f);
        let g;
        if (n[6] !== onClose) {
            g = function() {
                onClose();
            };
            n[6] = onClose;
            n[7] = g;
        } else {
            g = n[7];
        }
        const onComplete = g;
        if (d == null) {
            return null;
        }
        const y = `${s}%`;
        let C;
        if (n[8] !== y) {
            C = (e || (e = r("stylex"))).props(_.overlayContainer(y));
            n[8] = y;
            n[9] = C;
        } else {
            C = n[9];
        }
        let b;
        if (n[10] !== onComplete || n[11] !== d) {
            const Component = o("WAWebLottieAnimationLoadable").LottieAnimation;
            b = <Component data={d} autoplay loop={false} onComplete={onComplete} xstyle={_.lottieFill} wrapperXstyle={_.lottieFill}/>;
            n[10] = onComplete;
            n[11] = d;
            n[12] = b;
        } else {
            b = n[12];
        }
        let v;
        if (n[13] !== C || n[14] !== b) {
            v = <div {...babelHelpers.extends({}, C, {
                children: b
            })}/>;
            n[13] = C;
            n[14] = b;
            n[15] = v;
        } else {
            v = n[15];
        }
        return v;
    }
    l.default = f;
}, 98);