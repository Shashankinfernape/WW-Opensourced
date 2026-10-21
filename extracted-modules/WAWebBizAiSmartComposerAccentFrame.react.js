__d("WAWebBizAiSmartComposerAccentFrame.react", [
    "WAWebBizAiSmartComposerStyles.stylex",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 240;
    function d(t) {
        const n = o("react-compiler-runtime").c(9);
        const t_isActive = t.isActive;
        let i;
        if (n[0] !== t_isActive) {
            i = ({
                0: {
                    className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1ja2u2z x6ikm8r x10wlt62 x1fmog5m xu25z0z x140muxe xo1y3bh x47corl xg01cxk x1g55bwk x9kvfbb"
                },
                1: {
                    className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1ja2u2z x6ikm8r x10wlt62 x1fmog5m xu25z0z x140muxe xo1y3bh x47corl x1g55bwk x9kvfbb x1hc1fzr"
                }
            })[!!t_isActive << 0];
            n[0] = t_isActive;
            n[1] = i;
        } else {
            i = n[1];
        }
        let l;
        if (n[2] !== t_isActive) {
            l = (e || (e = r("stylex"))).props(o("WAWebBizAiSmartComposerStyles.stylex").smartComposerStyles.accentSweep, !t_isActive && o("WAWebBizAiSmartComposerStyles.stylex").smartComposerStyles.accentSweepPaused);
            n[2] = t_isActive;
            n[3] = l;
        } else {
            l = n[3];
        }
        let s;
        if (n[4] !== l) {
            s = <div {...babelHelpers.extends({}, l, {
                "data-testid": "biz_ai_smart_composer_accent_sweep"
            })}/>;
            n[4] = l;
            n[5] = s;
        } else {
            s = n[5];
        }
        let c;
        if (n[6] !== i || n[7] !== s) {
            c = <div {...babelHelpers.extends({}, i, {
                "aria-hidden": true,
                "data-testid": "composer_accent_frame",
                children: s
            })}/>;
            n[6] = i;
            n[7] = s;
            n[8] = c;
        } else {
            c = n[8];
        }
        return c;
    }
    l.default = d;
}, 98);