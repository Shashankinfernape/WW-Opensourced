__d("WAWebApiPeerMessageStore", [
    "WAWebOutgoingPeerMsgKey",
    "WAWebSchemaPeerMessage"
], function(t, n, r, o, a, i, l) {
    const e = [
        "kind"
    ];
    function s(t) {
        const n = t.map((t)=>{
            const n = t.kind;
            const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
            return babelHelpers.extends({}, r, {
                id: String(t.id),
                to: String(t.to),
                subtype: String(t.subtype)
            });
        });
        return o("WAWebSchemaPeerMessage").getPeerMessageTable().bulkCreate(n);
    }
    function u(e) {
        return o("WAWebSchemaPeerMessage").getPeerMessageTable().remove(o("WAWebOutgoingPeerMsgKey").buildOutgoingPeerMsgKey(e).toString());
    }
    l.storePeerMessages = s;
    l.deletePeerMessage = u;
}, 98);