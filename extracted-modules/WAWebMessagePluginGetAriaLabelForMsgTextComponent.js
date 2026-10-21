__d("WAWebMessagePluginGetAriaLabelForMsgTextComponent", [
    "WAWebMessagePluginGetAriaLabelForMsgTextComponentRegistry",
    "WAWebPluginCreateRegistryLookup"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(r("WAWebMessagePluginGetAriaLabelForMsgTextComponentRegistry"));
    function s(t) {
        const { subtype, type } = t;
        const o = e(type, subtype);
        if (o == null || o.getAriaLabelForMsgTextComponent == null) {
            return null;
        }
        return o.getAriaLabelForMsgTextComponent(t);
    }
    l.getAriaLabelForMsgTextComponent = s;
}, 98);