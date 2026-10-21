__d("WAWebSystemMessagePluginRenderPreviewIcon", [
    "WAWebPluginCreateRegistryLookup",
    "WAWebSystemMessagePluginRenderPreviewIconRegistry",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebSystemMessagePluginRenderPreviewIconRegistry"));
    function c({ msg }) {
        const n = u(msg.type, msg.subtype);
        return n?.renderPreviewIcon;
    }
    function d({ msg }) {
        const N = c({
            msg
        });
        if (N == null) {
            return null;
        }
        return <N msg={msg}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.renderPreviewIcon = d;
}, 98);