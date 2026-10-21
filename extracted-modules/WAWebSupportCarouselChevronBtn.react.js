__d("WAWebSupportCarouselChevronBtn.react", [
    "WAWebChevronButton.react",
    "WAWebL10N",
    "WAWebRound.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        btnBase: {
            height: "x5yr21d",
            width: "x187nhsf",
            $$css: true
        },
        btnContainerBase: {
            position: "x1n2onr6",
            borderStartStartRadius: "xr9w4p7",
            borderStartEndRadius: "x7f0h72",
            borderEndEndRadius: "x1nug9m2",
            borderEndStartRadius: "x18qtlnh",
            $$css: true
        },
        backgroundImageGradientToLeft: {
            backgroundImage: "x4g7omz",
            $$css: true
        },
        backgroundImageGradientToRight: {
            backgroundImage: "x9bwfyp",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(15);
        const { onClick, type } = t;
        const l = type === o("WAWebChevronButton.react").ButtonType.Prev;
        const s = type === o("WAWebChevronButton.react").ButtonType.Next;
        let d;
        if (n[0] !== s || n[1] !== l) {
            d = ({
                0: {
                    className: "x5yr21d x187nhsf x10l6tqk x13vifvy"
                },
                2: {
                    className: "x5yr21d x187nhsf x10l6tqk x13vifvy x11uqc5h"
                },
                1: {
                    className: "x5yr21d x187nhsf x10l6tqk x13vifvy xtijo5x"
                },
                3: {
                    className: "x5yr21d x187nhsf x10l6tqk x13vifvy x11uqc5h xtijo5x"
                }
            })[!!l << 1 | !!s << 0];
            n[0] = s;
            n[1] = l;
            n[2] = d;
        } else {
            d = n[2];
        }
        let _;
        if (n[3] !== s || n[4] !== l) {
            _ = (e || (e = r("stylex"))).props(c.btnBase, c.btnContainerBase, l && m(), s && p());
            n[3] = s;
            n[4] = l;
            n[5] = _;
        } else {
            _ = n[5];
        }
        let f;
        if (n[6] !== onClick || n[7] !== type) {
            const Component = o("WAWebChevronButton.react").ChevronButton;
            f = <Component type={type} onClick={onClick} theme={o("WAWebRound.react").RoundTheme.XSmall}/>;
            n[6] = onClick;
            n[7] = type;
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] !== _ || n[10] !== f) {
            g = <div {...babelHelpers.extends({}, _, {
                children: f
            })}/>;
            n[9] = _;
            n[10] = f;
            n[11] = g;
        } else {
            g = n[11];
        }
        let h;
        if (n[12] !== d || n[13] !== g) {
            h = <div {...babelHelpers.extends({}, d, {
                children: g
            })}/>;
            n[12] = d;
            n[13] = g;
            n[14] = h;
        } else {
            h = n[14];
        }
        return h;
    }
    function m() {
        if (r("WAWebL10N").isRTL()) {
            return c.backgroundImageGradientToLeft;
        }
        return c.backgroundImageGradientToRight;
    }
    function p() {
        if (r("WAWebL10N").isRTL()) {
            return c.backgroundImageGradientToRight;
        }
        return c.backgroundImageGradientToLeft;
    }
    l.default = d;
}, 98);