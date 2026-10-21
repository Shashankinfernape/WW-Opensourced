__d("WAWebMusicQuotedMsgThumbnailIcon", [
    "WDSIconIcMusicNote.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useState = e.useState;
    const c = 24;
    const d = {
        fallbackIcon: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function m(e) {
        const n = o("react-compiler-runtime").c(2);
        const e_msg = e.msg;
        const a = e_msg.musicData?.artworkUri;
        let i;
        if (n[0] !== a) {
            i = <P3Component key={a} artworkUri={a}/>;
            n[0] = a;
            n[1] = i;
        } else {
            i = n[1];
        }
        return i;
    }
    function P3Component(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_artworkUri = e.artworkUri;
        const a = e_useState(false);
        const i = a[0];
        const l = a[1];
        if (e_artworkUri == null || i) {
            let m;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                m = {
                    className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x4wrhlh"
                };
                t[0] = m;
            } else {
                m = t[0];
            }
            let p;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                p = <div {...babelHelpers.extends({}, m, {
                    "data-testid": "music-quoted-cover-fallback",
                    children: s.jsx(r("WDSIconIcMusicNote.react"), {
                        height: c,
                        width: c,
                        iconXstyle: d.fallbackIcon
                    })
                })}/>;
                t[1] = p;
            } else {
                p = t[1];
            }
            return p;
        }
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = {
                className: "xh8yej3 x5yr21d xl1xv1r"
            };
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                return l(true);
            };
            t[3] = f;
        } else {
            f = t[3];
        }
        let g;
        if (t[4] !== e_artworkUri) {
            g = <img {...babelHelpers.extends({}, _, {
                alt: "",
                crossOrigin: "anonymous",
                "data-testid": "music-quoted-cover",
                src: e_artworkUri,
                onError: f
            })}/>;
            t[4] = e_artworkUri;
            t[5] = g;
        } else {
            g = t[5];
        }
        return g;
    }
    l.default = m;
}, 98);