__d("WAWebAddonEncryptAddonMsgData", [
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessRevokeDataUtils",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e);
        if (e.type !== t) {
            if (e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke) {
                return o("WAWebAddonProcessRevokeDataUtils").protocolRevokeToRevokeMsgData(e);
            }
            return e;
        }
    }
    function s(t, n) {
        const r = e(t);
        if (r == null) {
            const a = o("WAWebAddonPluginProcessor").getAddonProcessor(t);
            const i = a.convert;
            const { toDualDecryptedMsgData, toDualEncryptedMsgData } = i;
            if (!(toDualEncryptedMsgData == null || toDualDecryptedMsgData == null)) {
                return {
                    decrypt: function() {
                        return toDualDecryptedMsgData(t, n);
                    },
                    encrypt: function() {
                        return toDualEncryptedMsgData(t, n);
                    }
                };
            }
        }
    }
    l.createDualEncryptionHelper = s;
}, 98);