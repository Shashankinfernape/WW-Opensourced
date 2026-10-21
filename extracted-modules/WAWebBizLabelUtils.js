__d("WAWebBizLabelUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebContactModel",
    "WAWebCustomerManagerGating",
    "WAWebLabelCollection",
    "WAWebLabelConstants",
    "WAWebListItemParentType",
    "WAWebSchemaLabel",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const t = y(e);
        const n = e.id.toString();
        e.labels = o("WAWebCustomerManagerGating").customerManagerEnabled() ? c(n, t) : o("WAWebLabelCollection").LabelCollection.getLabelsForModel(n, t);
    }
    function c(e, t) {
        const n = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(e, t);
        const r = p(e);
        if (r == null) {
            return n;
        }
        const a = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(r.toString(), t);
        if (a.length === 0) {
            return n;
        }
        return Array.from(new Set([].concat(n, a)));
    }
    function d(e) {
        const n = e.id.toString();
        const r = new Set(c(n, o("WAWebListItemParentType").LabelItemParentType.Chat));
        const a = p(n)?.toString();
        for (const i of c(n, o("WAWebListItemParentType").LabelItemParentType.Contact)){
            const d = o("WAWebLabelCollection").LabelCollection.get(i);
            if (!(d == null || r.has(i)) && !(d.type !== o("WAWebSchemaLabel").ListType.CUSTOM && d.type !== o("WAWebSchemaLabel").ListType.PREDEFINED && d.type !== o("WAWebSchemaLabel").ListType.LEAD)) {
                const m = d.labelItemCollection.get(C(n, i, o("WAWebListItemParentType").LabelItemParentType.Contact));
                const _ = a != null ? d.labelItemCollection.get(C(a, i, o("WAWebListItemParentType").LabelItemParentType.Contact)) : null;
                d.labelItemCollection.gadd({
                    id: C(n, i, o("WAWebListItemParentType").LabelItemParentType.Chat),
                    labelId: i,
                    parentId: n,
                    parentType: o("WAWebListItemParentType").LabelItemParentType.Chat,
                    detectedOutcomeOriginalLabelPredefinedId: m?.detectedOutcomeOriginalLabelPredefinedId ?? _?.detectedOutcomeOriginalLabelPredefinedId ?? null
                });
            }
        }
        u(e);
    }
    function m(e, t) {
        const n = h(t);
        const r = [];
        const a = n.get(e);
        if (a != null) {
            r.push(a);
        }
        const i = p(e);
        if (i == null) {
            return r;
        }
        const l = t === o("WAWebListItemParentType").LabelItemParentType.Chat && i.isLid() ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(i) : n.get(i);
        if (l != null && l !== a) {
            r.push(l);
        }
        return r;
    }
    function p(t) {
        let n;
        try {
            const r = o("WAWebWidFactory").createWid(t);
            if (!r.isUser()) {
                return null;
            }
            n = o("WAWebWidFactory").asUserWidOrThrow(r);
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebBizLabelUtils: label item parent is not a wid"
            ]))).sendLogs("label-item-parent-not-a-wid");
            return null;
        }
        if (n.isLid()) {
            return o("WAWebApiContact").getPnIfLidIsLatestMapping(n);
        }
        return o("WAWebApiContact").getCurrentLid(n);
    }
    function _(e, t, parentType) {
        if (t && t.length > 0) {
            t.forEach((t)=>{
                if (!o("WAWebLabelCollection").LabelCollection.isLegacyLeadListId(t)) {
                    let r = t;
                    let detectedOutcomeOriginalLabelPredefinedId = null;
                    if (o("WAWebLabelCollection").LabelCollection.getServerAssignedLabelIdMap().has(r)) {
                        detectedOutcomeOriginalLabelPredefinedId = o("WAWebLabelCollection").LabelCollection.getServerAssignedLabelIdMap().get(r);
                        const i = b(detectedOutcomeOriginalLabelPredefinedId);
                        if (i == null) {
                            return;
                        }
                        r = i;
                    }
                    const l = o("WAWebLabelCollection").LabelCollection.gadd({
                        id: r
                    });
                    const s = l.labelItemCollection.gadd({
                        id: C(e, r, parentType),
                        labelId: r,
                        parentId: e,
                        parentType,
                        detectedOutcomeOriginalLabelPredefinedId
                    });
                    if (detectedOutcomeOriginalLabelPredefinedId == null) {
                        s.hasManualAssociation = true;
                    }
                    if (parentType === o("WAWebListItemParentType").LabelItemParentType.Chat) {
                        l.labelItemCollection.gadd({
                            id: C(e, r, o("WAWebListItemParentType").LabelItemParentType.Contact),
                            labelId: r,
                            parentId: e,
                            parentType: o("WAWebListItemParentType").LabelItemParentType.Contact
                        });
                    }
                }
            });
        }
    }
    function f(e, t, n) {
        const r = o("WAWebLabelCollection").LabelCollection.get(t);
        const a = r?.labelItemCollection;
        if (!a) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "labelItemCollection does not exist for labelId ",
                ""
            ])), t);
            return;
        }
        const i = o("WAWebCustomerManagerGating").customerManagerEnabled() ? p(e) : null;
        const l = i != null ? [
            e,
            i.toString()
        ] : [
            e
        ];
        l.forEach((e)=>{
            a.remove(C(e, t, n));
            if (n === o("WAWebListItemParentType").LabelItemParentType.Chat) {
                a.remove(C(e, t, o("WAWebListItemParentType").LabelItemParentType.Contact));
            }
        });
    }
    function g(e, t, n) {
        const r = p(t);
        const o = r != null ? [
            t,
            r.toString()
        ] : [
            t
        ];
        return o.some((t)=>e.labelItemCollection.get(C(t, e.id, n))?.hasManualAssociation === true);
    }
    function h(e) {
        switch(e){
            case o("WAWebListItemParentType").LabelItemParentType.Chat:
                return o("WAWebChatCollection").ChatCollection;
            case o("WAWebListItemParentType").LabelItemParentType.Contact:
                return o("WAWebContactCollection").ContactCollection;
        }
    }
    function y(e) {
        if (e instanceof o("WAWebChatModel").Chat) {
            return o("WAWebListItemParentType").LabelItemParentType.Chat;
        }
        if (e instanceof r("WAWebContactModel")) {
            return o("WAWebListItemParentType").LabelItemParentType.Contact;
        }
        throw r("err")("getParentTypeFromModel: model is invalid");
    }
    function C(e, t, n) {
        return `${e}_${t}_${n}`;
    }
    function b(e) {
        if (e == null) {
            return null;
        }
        let t = null;
        switch(e){
            case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_NEW_ORDER:
                t = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.NEW_ORDER;
                break;
            case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_LEAD:
                t = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.LEAD;
                break;
            default:
                return null;
        }
        const n = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
            return e.predefinedId === t;
        });
        if (n != null) {
            return n.id;
        }
        return null;
    }
    function v(e) {
        const n = o("WAWebLabelCollection").LabelCollection.get(e)?.predefinedId;
        let r = null;
        switch(n){
            case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.NEW_ORDER:
                r = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_NEW_ORDER;
                break;
            case o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.LEAD:
                r = o("WAWebLabelConstants").PREDEFINED_LABEL_IDS.DO_LEAD;
                break;
            default:
                break;
        }
        const a = o("WAWebLabelCollection").LabelCollection.getServerAssignedLabelIdMap().entries().find(([t, n])=>n === r);
        if (r == null || a == null) {
            return null;
        }
        return a[0];
    }
    l.initializeLabels = u;
    l.getLabelsForModelAnyAddressingMode = c;
    l.projectContactLabelsToChat = d;
    l.getParentModelsAnyAddressingMode = m;
    l.addToLabelCollection = _;
    l.removeLabelFromCollection = f;
    l.hasManualLabelAssociation = g;
    l.getParentCollection = h;
    l.getParentTypeFromModel = y;
    l.createLabelItemId = C;
    l.mapDOLabelPredefinedIdToManualLabelId = b;
    l.mapManualLabelIdToDetectedOutcomeLabelId = v;
}, 98);