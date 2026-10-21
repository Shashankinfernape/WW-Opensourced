__d("WAWebApplyServerLeadStage", [
    "WAWebBackendApi",
    "WAWebCustomerManagerGating",
    "WAWebDBLabelAssociationDatabaseApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebListItemParentType",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncBootstrap",
    "WAWebSyncdCoreApi",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebCustomerManagerGating").customerManagerEnabled()) {
                return "gate_off";
            }
            if (r("WAWebSyncBootstrap").isSyncDBootstrapInProcess()) {
                return "labels_syncing";
            }
            const n = u(t);
            if (n == null) {
                return "unknown_stage";
            }
            if (!r("WAWebWid").isWid(e) || !o("WAWebCustomerManagerGating").isWidEligibleForCustomerFields(o("WAWebWidFactory").createWid(e))) {
                return "ineligible";
            }
            const a = yield r("WAWebLabelSublistSync").resolveChatJid(e);
            if (a == null) {
                return "unresolved_chat";
            }
            const i = yield c();
            if (i == null) {
                return "no_lead_list";
            }
            const l = yield m(a, n, i);
            if (l == null) {
                return "unchanged";
            }
            yield _(a, e, i, l);
            return "applied";
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (/^\d+$/.test(e)) {
            return o("WAWebLeadStage").getLeadStageFromNumber(Number(e));
        }
        return null;
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return (yield o("WAWebSchemaLabel").getLabelTable().all()).find((e)=>e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID)?.id;
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, subListId, labelId) {
            let a = null;
            yield o("WAWebSyncdCoreApi").lockForSync([
                "label-association",
                "label_sublist",
                "label"
            ], [], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const i = yield o("WAWebDBLabelAssociationDatabaseApi").queryLocalLabelAssociations([
                    {
                        associationId: e,
                        type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                    }
                ]);
                const l = i.some((e)=>e.labelId === labelId);
                const s = yield o("WAWebDBLabelSublistDatabaseApi").getLabelSublistByChat(o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, e);
                if (!(l && (s?.subListId ?? o("WAWebLeadStage").LeadStage.LEAD) === subListId)) {
                    if (!l) {
                        yield o("WAWebDBLabelAssociationDatabaseApi").addOrEditLabelAssociations([
                            {
                                labelId,
                                associationId: e,
                                type: o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                            }
                        ]);
                    }
                    const u = {
                        predefinedId: o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID,
                        chatJid: e,
                        subListId
                    };
                    yield o("WAWebDBLabelSublistDatabaseApi").addOrEditLabelSublist(u);
                    a = {
                        addedMembership: !l
                    };
                }
            }));
            return a;
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n, r) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(parentId, profileChatJid, n, r) {
            if (r.addedMembership) {
                const a = (yield o("WAWebSchemaChat").getChatTable().get(parentId, false)) != null;
                o("WAWebBackendApi").frontendFireAndForget("applyLabelAssociationChanges", {
                    removals: [],
                    additions: [
                        {
                            parentId,
                            labels: [
                                n
                            ],
                            parentType: a ? o("WAWebListItemParentType").LabelItemParentType.Chat : o("WAWebListItemParentType").LabelItemParentType.Contact
                        }
                    ]
                });
            }
            o("WAWebBackendApi").frontendFireAndForget("serverLeadStageApplied", {
                profileChatJid
            });
        });
        return f.apply(this, arguments);
    }
    l.applyServerLeadStage = e;
}, 98);