__d("WDSBulletList.react", [
    "WDSBullet.react",
    "WDSBulletConfig",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c({ bullets, children, testid }) {
        return <div {...babelHelpers.extends({
            "data-testid": undefined,
            role: "list"
        }, (e || (e = r("stylex"))).props(o("WDSBulletConfig").bulletStyles.list), {
            children: bullets != null ? bullets.map((e, t)=>u.jsx(r("WDSBullet.react"), {
                    description: e.description,
                    icon: e.icon,
                    iconDirectional: e.iconDirectional,
                    text: e.text
                }, t)) : children
        })}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);