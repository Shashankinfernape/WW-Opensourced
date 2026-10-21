__d("WAWebBroadcastStatusLabel.react", [
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        label: {
            marginInlineEnd: "x7g7pl8",
            marginInlineStart: "x1sbwfh8",
            $$css: true
        }
    };
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const { label, light, testid } = e;
        const l = light === true ? "persistentAlwaysWhite" : "contentDeemphasized";
        let c;
        if (t[0] !== label || t[1] !== l || t[2] !== testid) {
            const Component = r("WDSText.react");
            c = <Component colorName={l} testid={testid} type="Body3" xstyle={u.label}>{label}</Component>;
            t[0] = label;
            t[1] = l;
            t[2] = testid;
            t[3] = c;
        } else {
            c = t[3];
        }
        return c;
    }
    l.default = CComponent;
}, 98);