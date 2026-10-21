__d("WAWebMessagePluginRenderPreviewIcon", [
    "WAWebMessagePluginRenderPreviewIconRegistry",
    "WAWebPluginCreateRegistryLookup",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginRenderPreviewIconRegistry"));
    function c(e, t) {
        const n = u(e, t);
        return n?.renderPreviewIcon;
    }
    function d(e, t, n) {
        const R = c(e, t);
        if (R == null) {
            return null;
        }
        return <R {...babelHelpers.extends({}, n)}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.renderPreviewIcon = d;
}, 98);