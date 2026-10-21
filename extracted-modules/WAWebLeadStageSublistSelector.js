__d("WAWebLeadStageSublistSelector", [
    "Promise",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(associationId) {
            const a = yield o("WAWebDBLabelAssociationDatabaseApi").queryLocalLabelAssociations([
                {
                    associationId,
                    type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                }
            ]);
            const i = yield (e || (e = n("Promise"))).all(a.map((e)=>o("WAWebSchemaLabel").getLabelTable().get(e.labelId)));
            const l = i.some((e)=>o("WAWebLeadListConstants").isLeadListPredefinedId(e?.predefinedId));
            if (!l) {
                return null;
            }
            const s = yield o("WAWebDBLabelSublistDatabaseApi").getLabelSublistByChat(o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, associationId);
            return s?.subListId ?? null;
        });
        return u.apply(this, arguments);
    }
    l.getLeadStageForChatFromSublist = s;
}, 98);