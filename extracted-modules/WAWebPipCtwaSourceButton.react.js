__d("WAWebPipCtwaSourceButton.react", [
    "WAWebLogoFacebookIcon.react",
    "WAWebLogoInstagramIcon.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = 34;
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const { iconSize, isFullscreenMode, isInstagram, onClick } = e;
        const l = iconSize ?? (isFullscreenMode ? u : undefined);
        let c;
        if (t[0] !== isInstagram || t[1] !== l) {
            c = isInstagram ? s.jsx(o("WAWebLogoInstagramIcon.react").LogoInstagramIcon, {
                width: l,
                height: l
            }) : s.jsx(o("WAWebLogoFacebookIcon.react").LogoFacebookIcon, {
                width: l,
                height: l
            });
            t[0] = isInstagram;
            t[1] = l;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = c;
        let m;
        if (t[3] !== isFullscreenMode) {
            m = ({
                0: {
                    className: "xconrdv x1ypdohk x10l6tqk x12em2mw x11uqc5h"
                },
                1: {
                    className: "x1ypdohk x10l6tqk x11uqc5h xh07jou x1gkdisy"
                }
            })[!!isFullscreenMode << 0];
            t[3] = isFullscreenMode;
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] !== d || t[6] !== onClick || t[7] !== m) {
            p = <div {...babelHelpers.extends({}, m, {
                onClick,
                children: d
            })}/>;
            t[5] = d;
            t[6] = onClick;
            t[7] = m;
            t[8] = p;
        } else {
            p = t[8];
        }
        return p;
    }
    l.default = c;
}, 98);