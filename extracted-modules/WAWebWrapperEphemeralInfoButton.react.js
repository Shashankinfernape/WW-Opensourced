__d("WAWebWrapperEphemeralInfoButton.react", [
    "fbt",
    "WAWebRound.react",
    "WDSIconIcInfo.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = 12;
    const d = "x1xeqro6-B";
    const m = {
        svgColor: {
            color: "x1bvqhpb",
            $$css: true
        },
        mountAnimation: {
            animationName: "x7u67sc",
            animationDuration: "x5hsz1j",
            animationTimingFunction: "x1debuo4",
            $$css: true
        }
    };
    function p(e) {
        const t = o("react-compiler-runtime").c(7);
        const { atBubbleCorner, onClick } = e;
        const i = atBubbleCorner === undefined ? false : atBubbleCorner;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Ephemeral info");
            t[0] = l;
        } else {
            l = t[0];
        }
        let d;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            d = u.jsx(r("WDSIconIcInfo.react"), {
                xstyle: m.svgColor,
                height: c,
                width: c,
                testid: "info-alt"
            });
            t[1] = d;
        } else {
            d = t[1];
        }
        let p;
        if (t[2] !== onClick) {
            const Component = o("WAWebRound.react").Round;
            p = <Component onClick={onClick} label={l} testid="msg_ephemeral_info_button" theme={o("WAWebRound.react").RoundTheme.QuickActionRefreshedOverlay} xstyle={m.mountAnimation}>{d}</Component>;
            t[2] = onClick;
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = p;
        if (i) {
            return _;
        }
        let f;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x78zum5 x6s0dn4 xl56j7k x23j0i4 xd7y6wv"
            };
            t[4] = f;
        } else {
            f = t[4];
        }
        let g;
        if (t[5] !== _) {
            g = <div {...babelHelpers.extends({}, f, {
                children: _
            })}/>;
            t[5] = _;
            t[6] = g;
        } else {
            g = t[6];
        }
        return g;
    }
    l.default = p;
}, 226);