__d("WAWebGroupHistoryToggleSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryToggleModeStore",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
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
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.chatJidIndex = 1;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 1;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.GroupHistoryToggle;
        };
        a_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                if (o("WAWebGroupHistoryGating").isGroupHistoryPerGroupToggleMdSyncEnabled()) {
                    return (m || (m = n("Promise"))).all(e.map((e)=>t.applyMutation(e)));
                }
                return e.map(()=>({
                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                    }));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.applyMutation = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (t.operation !== "set") {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "GroupHistoryToggleSync: unsupported operation ",
                        ""
                    ])), t.operation);
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                    };
                }
                const a = _(t.value.groupHistoryToggleAction?.groupHistoryToggleMode);
                if (a == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "GroupHistoryToggleSync: mutation carries no readable toggle mode"
                    ])));
                    return o("WAWebSyncdIndexUtils").malformedActionValue(this.collectionName);
                }
                const i = t.indexParts[this.chatJidIndex];
                if (!r("WAWebWid").isWid(i)) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "GroupHistoryToggleSync: index chat jid is not a wid"
                    ])));
                    return this.malformedActionIndex();
                }
                const l = o("WAWebWidFactory").createWid(i);
                if (!l.isGroup()) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "GroupHistoryToggleSync: index chat jid is not a group"
                    ])));
                    return this.malformedActionIndex();
                }
                const m = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(l);
                if (!m.success) {
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                        orphanModel: m.orphanModel
                    };
                }
                const group = o("WAWebWidFactory").createWid(m.chat.id);
                const f = yield o("WAWebGroupHistoryToggleModeStore").setGroupHistoryToggleMode(group, a);
                if (f) {
                    o("WAWebBackendApi").frontendFireAndForget("updateGroupMetadataModelForShareHistoryDefault", {
                        group,
                        shouldDefaultGroupHistoryShareOn: a
                    });
                    o("WAWebBackendApi").frontendFireAndForget("logGroupHistoryToggleModeMdSyncReceived", {
                        isToggleOn: a
                    });
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "GroupHistoryToggleSync: applied incoming toggle, on=",
                        ""
                    ])), String(a));
                }
                return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Success
                };
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getGroupHistoryToggleMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        (yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(n, o("WAWebSyncdConst").Actions.GroupHistoryToggle))
                    ],
                    value: {
                        groupHistoryToggleAction: {
                            groupHistoryToggleMode: t ? o("WAWebProtobufSyncAction.pb").SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode.GROUP_HISTORY_TOGGLE_MODE_ON : o("WAWebProtobufSyncAction.pb").SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode.GROUP_HISTORY_TOGGLE_MODE_OFF
                        }
                    },
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: e,
                    action: this.getAction()
                });
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.sendGroupHistoryToggleMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = yield this.getGroupHistoryToggleMutation(o("WATimeUtils").unixTimeMs(), t, e);
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    r
                ], function() {
                    return (m || (m = n("Promise"))).resolve();
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    function _(e) {
        if (e === o("WAWebProtobufSyncAction.pb").SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode.GROUP_HISTORY_TOGGLE_MODE_ON) {
            return true;
        }
        if (e === o("WAWebProtobufSyncAction.pb").SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode.GROUP_HISTORY_TOGGLE_MODE_OFF) {
            return false;
        }
        return null;
    }
    const f = new p;
    l.default = f;
}, 98);