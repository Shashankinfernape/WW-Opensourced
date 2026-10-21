__d("WAWebFilledIcon.react", [
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        background: {
            borderStartStartRadius: "xvs2etk",
            borderStartEndRadius: "xg3wpu6",
            borderEndEndRadius: "x1jwbhkm",
            borderEndStartRadius: "xgg4q86",
            $$css: true
        },
        defaultBackgroundColor: {
            backgroundColor: "xfn3atn",
            $$css: true
        },
        defaultIconColor: {
            color: "xk4n5i7",
            $$css: true
        }
    };
    const c = {
        small: {
            width: "x1useyqa",
            height: "xsdox4t",
            $$css: true
        },
        large: {
            width: "xj35x94",
            height: "x19swzb4",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(12);
        const { Icon, backgroundColor, iconColor, size } = e;
        const l = size === undefined ? "small" : size;
        let d;
        e: switch(l){
            case "small":
                {
                    d = 24;
                    break e;
                }
            case "large":
                d = 64;
        }
        const m = c[l];
        let p;
        if (t[0] !== backgroundColor || t[1] !== m) {
            p = [
                u.background,
                u.defaultBackgroundColor,
                backgroundColor,
                m
            ];
            t[0] = backgroundColor;
            t[1] = m;
            t[2] = p;
        } else {
            p = t[2];
        }
        let _;
        if (t[3] !== iconColor) {
            _ = [
                u.defaultIconColor,
                iconColor
            ];
            t[3] = iconColor;
            t[4] = _;
        } else {
            _ = t[4];
        }
        let f;
        if (t[5] !== Icon || t[6] !== d || t[7] !== _) {
            f = <Icon xstyle={_} width={d} height={d}/>;
            t[5] = Icon;
            t[6] = d;
            t[7] = _;
            t[8] = f;
        } else {
            f = t[8];
        }
        let g;
        if (t[9] !== p || t[10] !== f) {
            const Component = o("WAWebFlex.react").FlexColumn;
            g = <Component justify="center" align="center" xstyle={p}>{f}</Component>;
            t[9] = p;
            t[10] = f;
            t[11] = g;
        } else {
            g = t[11];
        }
        return g;
    }
    l.default = d;
}, 98);