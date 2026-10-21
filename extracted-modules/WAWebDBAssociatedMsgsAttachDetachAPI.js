__d("WAWebDBAssociatedMsgsAttachDetachAPI", [
    "$InternalEnum",
    "WALogger",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendApi",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum").Mirrored([
        "Attach",
        "Detach"
    ]);
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield d(e.map((e)=>e.id));
            const n = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(t.map((e)=>e.msgKey.toString()), false);
            const a = _(n.filter(Boolean), s.Attach).filter(Boolean);
            yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(a);
            const msgIdsViewModeMap = new Map;
            a.forEach((e)=>{
                const t = r("nullthrows")(e.viewMode);
                msgIdsViewModeMap.set(e.id, t);
            });
            o("WAWebBackendApi").frontendFireAndForget("updateViewModeForMsgs", {
                msgIdsViewModeMap
            });
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebDBGetAssociatedMsgsByParentMsgKey").bulkGetMessagesByParentMsgKey(t);
            if (n.length) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[viewModeUpdate] found associated msgs"
                ])));
            }
            return n;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        const n = [];
        e.map((e)=>{
            const r = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(e.associationType);
            if (r != null && (t !== s.Detach || g(r.processorType))) {
                n.push(e);
            }
        });
        return n;
    }
    function _(e, Attach) {
        return e.map((e)=>{
            if (!e.associationType) {
                return null;
            }
            const n = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(e.associationType);
            if (n == null || Attach === s.Detach && !g(n.processorType)) {
                return null;
            }
            return babelHelpers.extends({}, e, {
                viewMode: Attach === s.Detach ? o("WAWebViewMode.flow").ViewModeType.VISIBLE : n.viewMode
            });
        });
    }
    function f(e) {
        return e.map((e)=>{
            if (!e.associationType) {
                return null;
            }
            const t = o("WAWebAssociationProcessor").getAssociationProcessorByAssociationType(e.associationType);
            if (t == null || !g(t.processorType)) {
                return null;
            }
            return babelHelpers.extends({}, e, {
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                parentMsgKey: undefined,
                associationType: undefined
            });
        });
    }
    function g(processorType) {
        return processorType === o("WAWebAssociationProcessorConstants").AssociationProcessorType.WithDetachedMessages;
    }
    l.ViewModeUpdateType = s;
    l.processOrphansFromAssociationsTableForNewMsg = u;
    l.getAssociatedMsgsByParentMsgKeyFromAssociationTable = d;
    l.getValidAssociatedMsgs = p;
    l.getDetachedForeverAssociatedMsgs = f;
}, 98);