__d("WAWebPipFullscreenToggleButton.react", [
    "fbt",
    "WDSButton.react",
    "WDSIconIcFullscreen.react",
    "WDSIconIcFullscreenExit.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        button: {
            position: "x10l6tqk",
            top: "xfr5jun",
            insetInlineStart: "x1r4y97",
            left: null,
            right: null,
            zIndex: "x11uqc5h",
            cursor: "x1ypdohk",
            $$css: true
        },
        static: {
            position: "x1uhb9sk",
            $$css: true
        },
        fullscreen: {
            top: "xjqd8mg",
            insetInlineStart: "xfwv6vp",
            left: null,
            right: null,
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(12);
        const { isFullscreenMode, isStatic, onClick, ref } = e;
        const d = r(isFullscreenMode ? "WDSIconIcFullscreenExit.react" : "WDSIconIcFullscreen.react");
        const m = isFullscreenMode ? "video-exit-fullscreen" : "video-fullscreen";
        let p;
        if (t[0] !== isFullscreenMode) {
            p = isFullscreenMode ? s._("Exit full screen") : s._("Full screen");
            t[0] = isFullscreenMode;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        const f = isFullscreenMode && c.fullscreen;
        const g = isStatic && c.static;
        let h;
        if (t[2] !== f || t[3] !== g) {
            h = [
                c.button,
                f,
                g
            ];
            t[2] = f;
            t[3] = g;
            t[4] = h;
        } else {
            h = t[4];
        }
        let y;
        if (t[5] !== d || t[6] !== _ || t[7] !== onClick || t[8] !== ref || t[9] !== h || t[10] !== m) {
            const Component = r("WDSButton.react");
            y = <Component ref={ref} variant="borderless" type="media" size="medium" xstyle={h} onPress={onClick} aria-label={_} Icon={d} testid={m}/>;
            t[5] = d;
            t[6] = _;
            t[7] = onClick;
            t[8] = ref;
            t[9] = h;
            t[10] = m;
            t[11] = y;
        } else {
            y = t[11];
        }
        return y;
    }
    l.default = d;
}, 226);