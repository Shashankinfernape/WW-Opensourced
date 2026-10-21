__d("WAWebMusicMessageArtwork.react", [
    "WDSIconIcMusicNote.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = 40;
    const d = {
        fallbackIcon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_artworkUri = e.artworkUri;
        const a = e_useState(false);
        const i = a[0];
        const l = a[1];
        if (e_artworkUri == null || i) {
            let m;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                m = s.jsx(r("WDSIconIcMusicNote.react"), {
                    height: c,
                    width: c,
                    iconXstyle: d.fallbackIcon,
                    testid: "music-message-artwork-fallback"
                });
                t[0] = m;
            } else {
                m = t[0];
            }
            return m;
        }
        let p;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xh8yej3 x5yr21d xl1xv1r"
            };
            t[1] = p;
        } else {
            p = t[1];
        }
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function() {
                return l(true);
            };
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] !== e_artworkUri) {
            f = <img {...babelHelpers.extends({}, p, {
                alt: "",
                crossOrigin: "anonymous",
                "data-testid": "music-message-artwork",
                src: e_artworkUri,
                onError: _
            })}/>;
            t[3] = e_artworkUri;
            t[4] = f;
        } else {
            f = t[4];
        }
        return f;
    }
    l.default = m;
}, 98);