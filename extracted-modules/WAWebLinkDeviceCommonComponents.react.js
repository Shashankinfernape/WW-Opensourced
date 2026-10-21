__d("WAWebLinkDeviceCommonComponents.react", [
    "WAWebClickable.react",
    "WAWebEnvironment",
    "WDSText.react",
    "WDSVars.stylex",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        position: "inherit",
        width: "unset",
        height: "unset",
        color: o("WDSVars.stylex").WDSBaseColor.blackAlpha60,
        fontSize: "16px",
        marginBottom: o("WDSVars.stylex").WDSVars.spacingQuad,
        lineHeight: "21px"
    };
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(5);
        const { theme, value } = e;
        if (theme === "wds" || r("WAWebEnvironment").isWindows) {
            let i;
            if (t[0] !== value) {
                const Component = r("WDSText.react");
                i = <Component colorName="contentDefault" type="LargeTitle2">{value}</Component>;
                t[0] = value;
                t[1] = i;
            } else {
                i = t[1];
            }
            return i;
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = ({
                0: {
                    className: "x579bpy xo1l8bm xggjnk3 xowvryd"
                },
                1: {
                    className: "x579bpy xggjnk3 xowvryd x1s688f"
                }
            })[!!r("WAWebEnvironment").isWindows << 0];
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== value) {
            u = <div {...babelHelpers.extends({}, l, {
                children: value
            })}/>;
            t[3] = value;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_value = e.value;
        if (e_value == null) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = <div className="x1fgtraw"/>;
                t[0] = a;
            } else {
                a = t[0];
            }
            return a;
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = ({
                0: {
                    className: "xowvryd x1c3i2sq xdod15v xg6s713"
                },
                1: {
                    className: "x1c3i2sq xdod15v xg6s713 x14ug900"
                }
            })[!!r("WAWebEnvironment").isWindows << 0];
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== e_value) {
            l = <div {...babelHelpers.extends({}, i, {
                children: e_value
            })}/>;
            t[2] = e_value;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_config = e.config;
        if (e_config == null) {
            return null;
        }
        const { onClick, shouldShow, testId, text } = e_config;
        if (!shouldShow) {
            return null;
        }
        let u;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = "xrwxeff x10l6tqk x80663w x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 x8o5u1m x162dhgo xm14bv4 x1p9y9v0 x1e1yudw x1ayw9wz xlsgc75 x2iotq7 x1kpoq75 xcjmxlc xvjdqlt x1wus5lo x1ip307p x1qoaid1 x19byxu8";
            c = {
                className: "x1v5yvga"
            };
            t[0] = u;
            t[1] = c;
        } else {
            u = t[0];
            c = t[1];
        }
        let d;
        if (t[2] !== text) {
            d = <div {...babelHelpers.extends({}, c, {
                children: text
            })}/>;
            t[2] = text;
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== onClick || t[5] !== d || t[6] !== testId) {
            const Component = o("WAWebClickable.react").Clickable;
            m = <Component dataTestId={testId} onClick={onClick} className={u}>{d}</Component>;
            t[4] = onClick;
            t[5] = d;
            t[6] = testId;
            t[7] = m;
        } else {
            m = t[7];
        }
        return m;
    }
    l.Title = CComponent;
    l.Subtitle = DComponent;
    l.ScreenReaderSubtitle = MComponent;
}, 98);