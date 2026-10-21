__d("WAWebPipButton.react", [
    "fbt",
    "WDSFocusStateStyles",
    "WDSIconWdsIcPipLeftBottomToTopRight.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        PLAYER: "PLAYER",
        PREVIEW: "PREVIEW"
    };
    const m = {
        pipBtn: {
            position: "x10l6tqk",
            zIndex: "x11uqc5h",
            cursor: "x1ypdohk",
            background: "x11g6tue",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            $$css: true
        },
        player: {
            top: "xfr5jun",
            insetInlineEnd: "x12em2mw",
            $$css: true
        },
        preview: {
            top: "x1atx4j1",
            insetInlineStart: "x5tdj20",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(10);
        const { onBlur, onClick, onFocus, ref, theme } = t;
        let f;
        if (n[0] !== theme) {
            f = (e || (e = r("stylex"))).props(m.pipBtn, theme === d.PLAYER && m.player, theme === d.PREVIEW && m.preview, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
            n[0] = theme;
            n[1] = f;
        } else {
            f = n[1];
        }
        let g;
        let h;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Picture-in-picture mode");
            h = c.jsx(r("WDSIconWdsIcPipLeftBottomToTopRight.react"), {
                height: 24,
                width: 24,
                colorName: "persistentAlwaysWhite",
                testid: "video-pip"
            });
            n[2] = g;
            n[3] = h;
        } else {
            g = n[2];
            h = n[3];
        }
        let y;
        if (n[4] !== onBlur || n[5] !== onClick || n[6] !== onFocus || n[7] !== ref || n[8] !== f) {
            y = <button {...babelHelpers.extends({
                ref
            }, f, {
                onBlur,
                onClick,
                onFocus,
                onKeyDown: _,
                "aria-label": g,
                children: h
            })}/>;
            n[4] = onBlur;
            n[5] = onClick;
            n[6] = onFocus;
            n[7] = ref;
            n[8] = f;
            n[9] = y;
        } else {
            y = n[9];
        }
        return y;
    }
    function _(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
        }
    }
    l.PIP_BUTTON_THEME = d;
    l.PiPButton = p;
}, 226);