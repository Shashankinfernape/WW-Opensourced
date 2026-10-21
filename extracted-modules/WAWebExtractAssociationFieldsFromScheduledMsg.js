__d("WAWebExtractAssociationFieldsFromScheduledMsg", [
    "WAWebAssociationProtoUtils"
], function(t, n, r, o, a, i, l) {
    const e = "relay";
    function s(t, n) {
        const r = o("WAWebAssociationProtoUtils").validateMessageAssociationInMessageContextInfo(n, t.messageContextInfo, e);
        if (r == null) {
            return null;
        }
        const a = o("WAWebAssociationProtoUtils").getValidatedAssociationFieldsFromProto(r, n, e);
        return {
            associationType: a.associationType,
            parentMsgKey: a.associationParentMsgKey,
            viewMode: a.viewMode
        };
    }
    l.extractAssociationFieldsFromScheduledMsg = s;
}, 98);