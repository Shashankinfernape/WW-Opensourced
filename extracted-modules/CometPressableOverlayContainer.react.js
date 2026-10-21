__d("CometPressableOverlayContainer.react", [
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children",
        "role",
        "style",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    function DComponent(t) {
        "use no forget";
        const { children, role, style, xstyle } = t;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return <div {...babelHelpers.extends({
            className: (s || (s = r("stylex")))(xstyle),
            role,
            style
        }, l, {
            children
        })}/>;
    }
    DComponent.displayName = `${DComponent.name} [from ${i.id}]`;
    l.default = DComponent;
}, 98);