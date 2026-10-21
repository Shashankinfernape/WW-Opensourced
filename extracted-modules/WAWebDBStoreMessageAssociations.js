__d("WAWebDBStoreMessageAssociations", [
    "Promise",
    "WALogger",
    "WAWebSchemaMessageAssociation",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return o("WAWebSchemaMessageAssociation").getMessageAssociationTable().bulkCreate(e);
    }
    function c(t, a = false) {
        const i = r("compactMap")(t, function(e) {
            const { associationType, internalId, parentMsgKey } = e;
            if (parentMsgKey != null && associationType != null && internalId != null) {
                return {
                    msgKey: e.id.toString(),
                    parentMsgKey,
                    associationType,
                    msgKeyInternalId: internalId
                };
            }
            return null;
        });
        if (a) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "storeEncryptedDBMessages: ",
                " associations stored"
            ])), i.length);
        }
        if (i.length) {
            return u(i);
        }
        return (s || (s = n("Promise"))).resolve();
    }
    l.bulkStoreMessageAssociations = c;
}, 98);