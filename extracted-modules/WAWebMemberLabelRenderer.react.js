__d("WAWebMemberLabelRenderer.react", [
    "WAWebClickable.react",
    "WAWebMemberLabelHooks",
    "WAWebMemberLabelsFrontendUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        clickable: {
            ":hover_textDecoration": "xt0b8zv",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const { colorName, memberLabelArgs, onClick, type } = e;
        const c = colorName === undefined ? "contentDeemphasized" : colorName;
        const d = type === undefined ? "Body3" : type;
        let m;
        if (t[0] !== memberLabelArgs) {
            m = o("WAWebMemberLabelsFrontendUtils").memberLabelKeyFrom(memberLabelArgs);
            t[0] = memberLabelArgs;
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = o("WAWebMemberLabelHooks").useMemberLabelValue(m);
        if (p == null) {
            return null;
        }
        const memberLabelArgs_from = memberLabelArgs.from;
        const f = memberLabelArgs_from === "message" && onClick != null;
        const g = f ? u.clickable : undefined;
        let h;
        if (t[2] !== c || t[3] !== g || t[4] !== d || t[5] !== p) {
            const Component = r("WDSText.react");
            h = <Component type={d} colorName={c} selectable xstyle={g}>{p}</Component>;
            t[2] = c;
            t[3] = g;
            t[4] = d;
            t[5] = p;
            t[6] = h;
        } else {
            h = t[6];
        }
        const y = h;
        let C;
        if (t[7] !== f || t[8] !== onClick || t[9] !== y) {
            const Component = o("WAWebClickable.react").Clickable;
            C = f ? <Component onClick={onClick}>{y}</Component> : y;
            t[7] = f;
            t[8] = onClick;
            t[9] = y;
            t[10] = C;
        } else {
            C = t[10];
        }
        return C;
    }
    l.default = c;
}, 98);