__d("WAWebQuickRepliesSync", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaQuickReply",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 2;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.QuickReply;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                const l = yield (u || (u = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        try {
                            if (e.operation === "set") {
                                const { indexParts, value } = e;
                                const l = indexParts[1];
                                if (!l) {
                                    return r.malformedActionIndex();
                                }
                                const s = value.quickReplyAction;
                                if (!s) {
                                    a++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                if (s.deleted === true) {
                                    yield o("WAWebSchemaQuickReply").getQuickReplyTable().remove(l);
                                    o("WAWebBackendApi").frontendFireAndForget("removeQuickReplyFromCollection", {
                                        id: l
                                    });
                                    return {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    };
                                }
                                const { message, shortcut } = s;
                                if (shortcut == null || shortcut === "" || message == null || message === "") {
                                    a++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                const keywords = s.keywords || [];
                                const count = s.count || 0;
                                const p = {
                                    id: l,
                                    shortcut,
                                    count,
                                    message,
                                    keywords
                                };
                                yield o("WAWebSchemaQuickReply").getQuickReplyTable().createOrReplace(p);
                                o("WAWebBackendApi").frontendFireAndForget("updateQuickReplyCollection", {
                                    count,
                                    id: l,
                                    keywords,
                                    message,
                                    shortcut
                                });
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                                };
                            }
                            i++;
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        } catch (e) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "quick replies sync: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "quick replies sync: ",
                        " operations not supported"
                    ])), i);
                }
                return l;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.getQuickReplyDeleteMutation = function(t, n) {
            const e = {
                quickReplyAction: {
                    deleted: true,
                    keywords: [],
                    shortcut: "",
                    message: "",
                    count: 0,
                    associatedLabelIds: []
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    t
                ],
                value: e,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: n,
                action: this.getAction()
            });
        };
        r_prototype.getQuickReplyAddOrEditMutation = function({ count, id, keywords, message, shortcut, timestamp }) {
            const s = {
                quickReplyAction: {
                    deleted: false,
                    keywords,
                    shortcut,
                    message,
                    count,
                    associatedLabelIds: []
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    id
                ],
                value: s,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp,
                action: this.getAction()
            });
        };
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);