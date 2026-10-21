__d("WAWebAddonPlaceholderMsgsUtils", [
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonInfraError",
    "WAWebMsgType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e({ addons, processor }) {
        if (processor.type !== o("WAWebAddonConstants").AddonProcessorType.DualEncryptedWithMessageTraits) {
            throw new (o("WAWebAddonInfraError")).AddonInfraError(o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature);
        }
        const r = [];
        for (const a of addons){
            if (a.kind === o("WAWebMsgType").MsgKind.PlaceholderAddon) {
                r.push(a.id);
            }
        }
        if (r.length === 0) {
            return null;
        }
        return r;
    }
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebAddonDBTable").addonInternalDBTable.bulkGetByMsgKey(e, t);
            const r = new Set;
            for (const a of n){
                if (a != null && a.kind === o("WAWebMsgType").MsgKind.PlaceholderAddon) {
                    r.add(a.id.toString());
                }
            }
            return r;
        });
        return u.apply(this, arguments);
    }
    l.getIncomingPlaceholderKeys = e;
    l.getPlaceholderMsgKeys = s;
}, 98);