__d("WDSBadge.react", [
    "BaseBadge.react",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = "x1fal1dg-B";
    const c = {
        defaultColor: {
            backgroundColor: "xyp3urf",
            $$css: true
        },
        destructiveColor: {
            backgroundColor: "xk0ssx3",
            $$css: true
        },
        dotDefault: {
            height: "x1qx5ct2",
            width: "xw4jnvo",
            $$css: true
        },
        numberedChatList: {
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            height: "x1qx5ct2",
            minWidth: "xt4ypqs",
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        dotSmall: {
            height: "x1kpxq89",
            width: "xsmyaan",
            $$css: true
        },
        dotDefaultBorder: {
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "xamhcws",
            borderInlineEndWidth: "x1alpsbp",
            borderBottomWidth: "xlxy82",
            borderInlineStartWidth: "xyumdvf",
            height: "xxk0z11",
            width: "xvy4d1p",
            $$css: true
        },
        dotSmallBorder: {
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "xamhcws",
            borderInlineEndWidth: "x1alpsbp",
            borderBottomWidth: "xlxy82",
            borderInlineStartWidth: "xyumdvf",
            height: "x1kpxq89",
            width: "xsmyaan",
            $$css: true
        },
        numbered: {
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            height: "xxk0z11",
            minWidth: "xnei2rj",
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        numberedSmall: {
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            height: "xlup9mm",
            minWidth: "x15kz4h8",
            paddingInlineStart: "x181vq82",
            paddingInlineEnd: "x1uc92m",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        },
        numberedBorder: {
            height: "x1qx5ct2",
            minWidth: "xt4ypqs",
            boxSizing: "x1afcbsf",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x1ktv7sr",
            borderInlineEndWidth: "x142x0oa",
            borderBottomWidth: "xv7zg05",
            borderInlineStartWidth: "x12dgle5",
            paddingTop: "x1gxa6cn",
            paddingInlineEnd: "x1j8ymqv",
            paddingBottom: "xa0aww2",
            paddingInlineStart: "x4tra6z",
            $$css: true
        },
        numberedBorderSmall: {
            height: "xlup9mm",
            minWidth: "x15kz4h8",
            boxSizing: "x1afcbsf",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x1ktv7sr",
            borderInlineEndWidth: "x142x0oa",
            borderBottomWidth: "xv7zg05",
            borderInlineStartWidth: "x12dgle5",
            paddingTop: "x1gxa6cn",
            paddingInlineEnd: "x1j8ymqv",
            paddingBottom: "xa0aww2",
            paddingInlineStart: "x4tra6z",
            $$css: true
        },
        pulsingIndicator: {
            animationName: "xnyknk1",
            animationDuration: "x1c74tu6",
            animationIterationCount: "xa4qsjk",
            "@media (prefers-reduced-motion: reduce)_animationName": "x1aquc0h",
            $$css: true
        },
        pulsingBorderSmall: {
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            height: "xdk7pt",
            width: "x1xc55vz",
            $$css: true
        }
    };
    function d({ accessibilityText: t, border: o = false, count: a, pulse: l = false, size: d = "default", testid: m, type = "default" }) {
        const f = typeof a === "number" ? a : null;
        const g = a != null && (f == null || f > 0);
        const h = d === "small" && g ? o ? c.numberedBorderSmall : c.numberedSmall : d === "chatList" && g ? o ? c.numberedBorderSmall : c.numberedChatList : d === "default" && g ? o ? c.numberedBorder : c.numbered : d === "small" ? o ? c.dotSmallBorder : c.dotSmall : d === "default" || d === "chatList" ? o ? c.dotDefaultBorder : c.dotDefault : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${d}`);
        })();
        const y = type === "default" ? c.defaultColor : type === "destructive" ? c.destructiveColor : (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${type}`);
        })();
        let C = a;
        if (f != null && f <= 0) {
            C = null;
        } else if (f != null && f > 999) {
            C = "999+";
        } else if (f != null) {
            C = String(f);
        }
        const Component = r("WDSText.react");
        const Component_1 = r("BaseBadge.react");
        return <Component_1 accessibilityText={t} role="status" testid={void 0} xstyle={[
            y,
            h,
            l && c.pulsingIndicator,
            l && o && d === "small" && c.pulsingBorderSmall
        ]}>{C != null ? <Component type="Body3Emphasized" colorName="contentOnAccent">{C}</Component> : null}</Component_1>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);