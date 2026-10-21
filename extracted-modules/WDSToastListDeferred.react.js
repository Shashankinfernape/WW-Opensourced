__d("WDSToastListDeferred.react", [
    "CometPlaceholder.react",
    "deferredLoadComponentBase",
    "react",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const C1 = r("deferredLoadComponentBase")(r("requireDeferred")("WDSToastElements.react").__setRef("WDSToastListDeferred.react"), function(e) {
        return e.WDSToastList;
    });
    function d(t) {
        const t_ref = t.ref;
        const o = babelHelpers.objectWithoutPropertiesLoose(t, e);
        const Component = r("CometPlaceholder.react");
        return <Component fallback={null} name={i.id}><C1 {...babelHelpers.extends({
            ref: t_ref
        }, o)}/></Component>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);