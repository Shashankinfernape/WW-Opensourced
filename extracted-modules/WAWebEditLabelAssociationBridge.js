__d("WAWebEditLabelAssociationBridge", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCustomerManagerGating",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelJidSync",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSchemaLabelSublist",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e, t) {
        const n = m(e, t.map((e)=>({
                labelAssociationType: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid,
                modelId: e.id.toString(),
                mutationIndexSegments: [
                    e.id.toString({
                        legacy: true
                    })
                ]
            })));
        return n;
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = yield r("WAWebLabelJidSync").createLabelAssociationMutations(t, a);
            const l = o("WAWebCustomerManagerGating").customerManagerEnabled() ? yield _(t, a) : {
                sublistLocalRemoves: [],
                sublistMutations: []
            };
            const { sublistLocalRemoves, sublistMutations } = l;
            const d = sublistMutations.length > 0 ? [
                "label-association",
                "chat",
                "label_sublist"
            ] : [
                "label-association",
                "chat"
            ];
            yield o("WAWebSyncdCoreApi").lockForSync(d, [].concat(i, sublistMutations), n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield g(t, a);
                yield (c || (c = n("Promise"))).all(sublistLocalRemoves.map((t)=>o("WAWebDBLabelSublistDatabaseApi").removeLabelSublist(t).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "removeLabelSublist: clear lead sub-list on Lead removal failed"
                        ]))).verbose().sendLogs("edit-label-association-remove-lead-sublist-failed");
                        throw r("err")("removeLabelSublist for lead sub-list cleanup failed");
                    })));
            }));
            for (const m of sublistLocalRemoves){
                const p = o("WAWebSchemaLabelSublist").getChatJidFromPrimaryKey(m);
                o("WAWebBackendApi").frontendFireAndForget("removeLeadSublistFromCollection", {
                    chatJid: p,
                    predefinedId: o("WAWebSchemaLabelSublist").getPredefinedIdFromPrimaryKey(m)
                });
                o("WAWebBackendApi").frontendFireAndForget("leadRemovedFromChat", {
                    chatJid: p
                });
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = yield (c || (c = n("Promise"))).all(e.map(({ id })=>o("WAWebSchemaLabel").getLabelTable().get(id)));
            const i = e.some(({ type }, t)=>type === "remove" && o("WAWebLeadListConstants").isLeadListPredefinedId(a[t]?.predefinedId));
            if (!i) {
                return {
                    sublistLocalRemoves: [],
                    sublistMutations: []
                };
            }
            const sublistLocalRemoves = t.map(({ modelId })=>o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                    predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                    chatJid: modelId
                }));
            const sublistMutations = yield c.all(t.map(({ modelId })=>r("WAWebLabelSublistSync").getLabelSublistRemoveMutation({
                    predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                    chatJid: modelId
                })));
            return {
                sublistLocalRemoves,
                sublistMutations
            };
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = [];
            const i = [];
            e.forEach(({ id, type })=>{
                t.map(({ labelAssociationType, modelId })=>{
                    if (type === "add") {
                        a.push({
                            labelId: id,
                            associationId: modelId,
                            type: labelAssociationType
                        });
                    } else {
                        i.push(o("WAWebSchemaLabelAssociation").createLabelAssociationPrimaryKey({
                            labelId: id,
                            associationId: modelId,
                            type: labelAssociationType
                        }));
                    }
                });
            });
            yield (c || (c = n("Promise"))).all([
                o("WAWebDBLabelAssociationDatabaseApi").addOrEditLabelAssociations(a).catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "addOrEditLabelAssociations: label assoc table failed"
                    ]))).verbose().sendLogs("editLocalLabelAssociationMD-add-or-edit-label-associations-failed");
                    throw r("err")("addOrEditLabelAssociations into label association table failed");
                }),
                o("WAWebDBLabelAssociationDatabaseApi").removeLabelAssociations(i).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "removeLabelAssociations from label association table failed"
                    ]))).verbose().sendLogs("editLocalLabelAssociationMD-remove-label-associations-failed");
                    throw r("err")("removeLabelAssociations form label association table failed");
                })
            ]);
        });
        return h.apply(this, arguments);
    }
    l.editLabelAssociation = d;
    l.editLocalLabelAssociationMD = g;
}, 98);