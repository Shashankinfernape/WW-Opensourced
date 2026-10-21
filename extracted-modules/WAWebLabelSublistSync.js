__d("WAWebLabelSublistSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLid1X1MigrationGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaLabelSublist",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 2;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return o("WAWebSyncdConst").LABEL_SUBLIST_SYNC_VERSION;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.LabelSublist;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                const l = yield (c || (c = n("Promise"))).all(t.map((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        const t_indexParts = t.indexParts;
                        const l = t_indexParts[1];
                        const s = t_indexParts[2];
                        try {
                            if (t.operation === "set") {
                                if (!l || !s) {
                                    return {
                                        result: r.malformedActionIndex(),
                                        add: null,
                                        remove: null
                                    };
                                }
                                const c = Number(l);
                                if (Number.isNaN(c)) {
                                    return {
                                        result: r.malformedActionIndex(),
                                        add: null,
                                        remove: null
                                    };
                                }
                                const subListId = t.value.labelSublistAction?.subListId;
                                if (subListId == null) {
                                    a++;
                                    return {
                                        result: o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName),
                                        add: null,
                                        remove: null
                                    };
                                }
                                const m = yield r.resolveChatJid(s);
                                if (m == null) {
                                    return {
                                        result: r.malformedActionIndex(),
                                        add: null,
                                        remove: null
                                    };
                                }
                                return {
                                    result: {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    },
                                    add: {
                                        predefinedId: c,
                                        chatJid: m,
                                        subListId
                                    },
                                    remove: null
                                };
                            } else if (t.operation === "remove") {
                                const p = Number(l);
                                if (l && s && !Number.isNaN(p)) {
                                    const _ = yield r.resolveChatJid(s);
                                    if (_ != null) {
                                        return {
                                            result: {
                                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                                            },
                                            add: null,
                                            remove: {
                                                pk: o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                                                    predefinedId: p,
                                                    chatJid: _
                                                }),
                                                predefinedId: p,
                                                chatJid: _
                                            }
                                        };
                                    }
                                }
                                return {
                                    result: {
                                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                                    },
                                    add: null,
                                    remove: null
                                };
                            }
                            i++;
                            return {
                                result: {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                },
                                add: null,
                                remove: null
                            };
                        } catch (t) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd][label-sublist]: mutation failed"
                            ])));
                            return {
                                result: {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Failed
                                },
                                add: null,
                                remove: null
                            };
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()));
                const d = [];
                const m = [];
                const p = [];
                const _ = [];
                for (const f of l){
                    const { add, remove } = f;
                    if (add != null) {
                        d.push(add);
                        p.push(add);
                    }
                    if (remove != null) {
                        m.push(remove.pk);
                        _.push({
                            predefinedId: remove.predefinedId,
                            chatJid: remove.chatJid
                        });
                    }
                }
                if (a > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][label-sublist]: ",
                        " malformed mutations"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][label-sublist]: ",
                        " unsupported operations"
                    ])), i);
                }
                yield c.all(m.map((e)=>o("WAWebDBLabelSublistDatabaseApi").removeLabelSublist(e)));
                yield c.all(d.map((e)=>o("WAWebDBLabelSublistDatabaseApi").addOrEditLabelSublist(e)));
                for (const y of p){
                    o("WAWebBackendApi").frontendFireAndForget("syncLeadSublist", y);
                }
                for (const C of _){
                    o("WAWebBackendApi").frontendFireAndForget("removeLeadSublistFromCollection", C);
                }
                return l.map((e)=>e.result);
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.resolveChatJid = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!r("WAWebWid").isWid(e)) {
                    return null;
                }
                let t = o("WAWebWidFactory").createWid(e);
                const n = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(t);
                if (n.success === true) {
                    t = o("WAWebWidFactory").createWid(n.chat.id);
                } else if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && t.isLid()) {
                    const a = o("WAWebApiContact").getPhoneNumber(t);
                    if (a != null) {
                        t = a;
                    }
                }
                return t.toString();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getLabelSublistMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatJid, predefinedId, subListId }) {
                const a = o("WATimeUtils").unixTimeMs();
                const i = yield o("WAWebSyncdGetChat").getWidMutationIndexForWid(o("WAWebWidFactory").createWid(chatJid));
                const l = {
                    labelSublistAction: {
                        subListId
                    }
                };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        String(predefinedId),
                        i
                    ],
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    version: this.getVersion(),
                    value: l,
                    timestamp: a,
                    action: this.getAction()
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getLabelSublistRemoveMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatJid, predefinedId }) {
                const r = o("WATimeUtils").unixTimeMs();
                const a = yield o("WAWebSyncdGetChat").getWidMutationIndexForWid(o("WAWebWidFactory").createWid(chatJid));
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        String(predefinedId),
                        a
                    ],
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
                    version: this.getVersion(),
                    value: {},
                    timestamp: r,
                    action: this.getAction()
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.sendLabelSublistUpdate = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, subListId) {
                const a = yield this.getLabelSublistMutation({
                    predefinedId: e,
                    chatJid: t,
                    subListId
                });
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "label_sublist"
                ], [
                    a
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebDBLabelSublistDatabaseApi").addOrEditLabelSublist({
                        predefinedId: e,
                        chatJid: t,
                        subListId
                    });
                }));
                o("WAWebBackendApi").frontendFireAndForget("syncLeadSublist", {
                    predefinedId: e,
                    chatJid: t,
                    subListId
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.sendLabelSublistRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = yield this.getLabelSublistRemoveMutation({
                    predefinedId: e,
                    chatJid: t
                });
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "label_sublist"
                ], [
                    r
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield o("WAWebDBLabelSublistDatabaseApi").removeLabelSublist(o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                        predefinedId: e,
                        chatJid: t
                    }));
                }));
                o("WAWebBackendApi").frontendFireAndForget("removeLeadSublistFromCollection", {
                    predefinedId: e,
                    chatJid: t
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase);
    const m = new d;
    l.default = m;
}, 98);