__d("WAWebApplyLeadStageSublistAction", [
    "WAJids",
    "WALogger",
    "WAWebApiContact",
    "WAWebBizLabelUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFindChatAction",
    "WAWebLabelCollection",
    "WAWebLabelSublistSync",
    "WAWebLeadListConstants",
    "WAWebLeadSublistGating",
    "WAWebLidMigrationUtils",
    "WAWebListItemParentType",
    "WAWebListsActions",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n, r) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, i) {
            if (!(a != null && n === a)) {
                const u = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
                    return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
                });
                if (u == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[customer_manager] preset Lead list not found; skipping sub-list write"
                    ])));
                    return;
                }
                const c = o("WAWebChatCollection").ChatCollection.get(t) ?? (yield o("WAWebFindChatAction").findOrCreateLatestChat(o("WAWebWidFactory").createWid(t), "contactManager").then((e)=>e.chat).catch((e)=>{
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[customer_manager] failed to find/create chat: ",
                        ""
                    ])), String(e));
                    return null;
                }));
                if (c != null) {
                    if (!h(c, u)) {
                        o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([
                            {
                                id: u.id,
                                type: "add"
                            }
                        ], [
                            c
                        ], {
                            suppressSuccessToast: true
                        });
                        if (i?.logLeadSignal === true) {
                            o("WAWebListsActions").logCtwaSignalsForChats([
                                c
                            ], Number(u.id));
                        }
                    }
                    yield r("WAWebLabelSublistSync").sendLabelSublistUpdate(o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, t, n);
                }
            }
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n, r) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const a = y(e);
            if (a == null) {
                return p(e, t, n);
            }
            if (o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(a)) {
                yield u(o("WAJids").unsafeCoerceToChatJid(a.id.toString()), t, n, r);
                return true;
            }
            return false;
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
                return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
            });
            const i = g(e);
            if (a == null || i == null || !o("WAWebLeadSublistGating").isContactEligibleForLeadSublist(i) || !f(e, a)) {
                return false;
            }
            if (n == null || t !== n) {
                yield r("WAWebLabelSublistSync").sendLabelSublistUpdate(o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, e, t);
            }
            return true;
        });
        return _.apply(this, arguments);
    }
    function f(e, t) {
        return [
            o("WAWebListItemParentType").LabelItemParentType.Chat,
            o("WAWebListItemParentType").LabelItemParentType.Contact
        ].some((n)=>o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(e, n).includes(t.id));
    }
    function g(e) {
        const n = o("WAWebWidFactory").createWid(e);
        if (!n.isUser()) {
            return null;
        }
        const r = o("WAWebWidFactory").asUserWidOrThrow(n);
        const a = o("WAWebApiContact").getAlternateUserWid(r);
        return o("WAWebContactCollection").ContactCollection.get(r) ?? (a != null ? o("WAWebContactCollection").ContactCollection.get(a) : null);
    }
    function h(e, t) {
        return o("WAWebBizLabelUtils").hasManualLabelAssociation(t, e.id.toString(), o("WAWebListItemParentType").LabelItemParentType.Chat);
    }
    function y(e) {
        const t = o("WAWebWidFactory").createWid(e);
        if (!t.isUser()) {
            return null;
        }
        const n = o("WAWebLidMigrationUtils").toUserLid(t);
        if (n != null) {
            return o("WAWebChatCollection").ChatCollection.getChatByAccountLid(n);
        }
        return null;
    }
    l.applyLeadStageSublist = u;
    l.applyLeadStageSublistForProfile = d;
}, 98);