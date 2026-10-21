__d("WAWebBadge.react", [
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            position: "x10l6tqk",
            top: "x13vifvy",
            insetInlineStart: "x1o0tod",
            left: null,
            right: null,
            zIndex: "xupqr0c",
            $$css: true
        },
        warningIcon: {
            top: "xnfr1j",
            insetInlineStart: "x14q0ukc",
            left: null,
            right: null,
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { Icon, theme } = e;
        let a;
        if (t[0] !== theme) {
            a = ({
                0: {
                    className: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly"
                },
                2: {
                    className: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly xotx74u"
                },
                1: {
                    className: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly x1kk9kun"
                },
                3: {
                    className: "x10l6tqk xs7f9wi x1o0tod x11uqc5h xvy4d1p xxk0z11 x1z00e4h x11lhmoz x1hmns74 xwwlq33 xy6poam xl88me8 x1fgarty xrdwrp9 xj3gwzc x10tli2e xy01wc4 x12sjv16 x9femuk x1jjcuvn xnvurfn x1v3rft4 x1opv7go x1rovbrg xj3w3j9 xhyyh4r xbg6tni x7yxrbz xn4w8fp x17issv1 xxslzl9 xwjlxly x1kk9kun"
                }
            })[(theme === "pending") << 1 | (theme === "warning") << 0];
            t[0] = theme;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        const l = theme === "warning";
        let c;
        if (t[2] !== Icon || t[3] !== l) {
            c = Icon ? <Icon height={l ? 22 : undefined} width={l ? 22 : undefined} testid={l ? "error" : undefined} xstyle={[
                u.icon,
                l && u.warningIcon
            ]}/> : null;
            t[2] = Icon;
            t[3] = l;
            t[4] = c;
        } else {
            c = t[4];
        }
        const d = c;
        let m;
        if (t[5] !== i || t[6] !== d) {
            m = <div {...babelHelpers.extends({}, i, {
                children: d
            })}/>;
            t[5] = i;
            t[6] = d;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    l.default = c;
}, 98);