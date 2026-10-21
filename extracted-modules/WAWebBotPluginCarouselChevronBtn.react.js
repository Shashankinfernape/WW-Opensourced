__d("WAWebBotPluginCarouselChevronBtn.react", [
    "WAWebChevronButton.react",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        btnContainer: {
            position: "x1n2onr6",
            height: "xvt47uu",
            width: "x187nhsf",
            borderStartStartRadius: "xr9w4p7",
            borderStartEndRadius: "x7f0h72",
            borderEndEndRadius: "x1nug9m2",
            borderEndStartRadius: "x18qtlnh",
            $$css: true
        },
        btnContainerBackgroundPrev: {
            backgroundImage: "x9bwfyp",
            $$css: true
        },
        btnContainerBackgroundNext: {
            backgroundImage: "x4g7omz",
            $$css: true
        },
        btnContainerBackgroundPrevRTL: {
            backgroundImage: "x4g7omz",
            $$css: true
        },
        btnContainerBackgroundNextRTL: {
            backgroundImage: "x9bwfyp",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(17);
        const { displayType, onClick, theme, type } = t;
        const d = displayType === o("WAWebChevronButton.react").ChevronButtonDisplayType.BotPluginCarousel;
        const _ = type === o("WAWebChevronButton.react").ButtonType.Prev && d;
        const f = type === o("WAWebChevronButton.react").ButtonType.Next && d;
        let g;
        if (n[0] !== f || n[1] !== _) {
            g = ({
                0: {},
                2: {
                    className: "x10l6tqk x13vifvy xvt47uu x187nhsf x11uqc5h"
                },
                1: {
                    className: "x10l6tqk x13vifvy xtijo5x xvt47uu x187nhsf"
                },
                3: {
                    className: "x11uqc5h x10l6tqk x13vifvy xtijo5x xvt47uu x187nhsf"
                }
            })[!!_ << 1 | !!f << 0];
            n[0] = f;
            n[1] = _;
            n[2] = g;
        } else {
            g = n[2];
        }
        let h;
        if (n[3] !== d || n[4] !== f || n[5] !== _) {
            h = (e || (e = r("stylex"))).props(d && c.btnContainer, _ && m(), f && p());
            n[3] = d;
            n[4] = f;
            n[5] = _;
            n[6] = h;
        } else {
            h = n[6];
        }
        let y;
        if (n[7] !== onClick || n[8] !== theme || n[9] !== type) {
            const Component = o("WAWebChevronButton.react").ChevronButton;
            y = <Component type={type} onClick={onClick} theme={theme}/>;
            n[7] = onClick;
            n[8] = theme;
            n[9] = type;
            n[10] = y;
        } else {
            y = n[10];
        }
        let C;
        if (n[11] !== h || n[12] !== y) {
            C = <div {...babelHelpers.extends({}, h, {
                children: y
            })}/>;
            n[11] = h;
            n[12] = y;
            n[13] = C;
        } else {
            C = n[13];
        }
        let b;
        if (n[14] !== g || n[15] !== C) {
            b = <div {...babelHelpers.extends({}, g, {
                children: C
            })}/>;
            n[14] = g;
            n[15] = C;
            n[16] = b;
        } else {
            b = n[16];
        }
        return b;
    }
    function m() {
        if (r("WAWebL10N").isRTL()) {
            return c.btnContainerBackgroundPrevRTL;
        }
        return c.btnContainerBackgroundPrev;
    }
    function p() {
        if (r("WAWebL10N").isRTL()) {
            return c.btnContainerBackgroundNextRTL;
        }
        return c.btnContainerBackgroundNext;
    }
    l.default = d;
}, 98);