__d("WDSBullet.react", [
    "WDSBulletConfig",
    "WDSText.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    function c({ description, icon, iconDirectional = false, testid, text }) {
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        return <div {...babelHelpers.extends({
            "data-testid": undefined,
            role: "listitem"
        }, (e || (e = r("stylex"))).props(o("WDSBulletConfig").bulletStyles.row), {
            children: [
                <div {...babelHelpers.extends({}, e.props(o("WDSBulletConfig").bulletStyles.iconBox), {
                    children: u.jsx(icon, {
                        colorName: "contentDefault",
                        directional: iconDirectional,
                        height: o("WDSBulletConfig").BULLET_ICON_SIZE,
                        width: o("WDSBulletConfig").BULLET_ICON_SIZE
                    })
                })}/>,
                <div {...babelHelpers.extends({}, e.props(o("WDSBulletConfig").bulletStyles.text), {
                    children: [
                        <Component type="Body1" colorName="contentDefault">{text}</Component>,
                        description != null && <Component_1 type="Body3" colorName="contentDeemphasized">{description}</Component_1>
                    ]
                })}/>
            ]
        })}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 98);