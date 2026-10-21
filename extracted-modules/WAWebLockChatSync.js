__d("WAWebLockChatSync", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebArchiveChatSync",
    "WAWebChatLockAction",
    "WAWebPinChatSync",
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
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
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
            return 7;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.LockChat;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                const i = [];
                let l = 0;
                const m = [];
                let p = 0;
                let _ = 0;
                const f = [];
                const g = yield (d || (d = n("Promise"))).all(t.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (e.operation !== "set") {
                            l++;
                            if (m.length < 3) {
                                m.push(e.operation);
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                            };
                        }
                        const n = e.indexParts[1];
                        const s = e.value.lockChatAction?.locked;
                        if (s == null) {
                            p++;
                            return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                        }
                        if (!r("WAWebWid").isWid(n)) {
                            _++;
                            if (f.length < 3) {
                                f.push(String(n));
                            }
                            return a.malformedActionIndex();
                        }
                        const u = yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(o("WAWebWidFactory").createWid(n));
                        if (!u.success) {
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                orphanModel: u.orphanModel
                            };
                        }
                        const c = o("WAWebWidFactory").createWid(u.chat.id);
                        i.push({
                            isLocked: s,
                            chatId: c
                        });
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        };
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                if (l > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "LockChatSync: ",
                        " operations not supported => ",
                        ""
                    ])), l, m);
                }
                if (p > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "LockChatSync: ",
                        " malformed mutations with locked is null"
                    ])), p);
                }
                if (_ > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "LockChatSync: ",
                        " malformed mutations with chatJid not wid => ",
                        ""
                    ])), _, f);
                }
                yield d.all(i.map((e)=>{
                    if (e.isLocked) {
                        return o("WAWebChatLockAction").setChatAsLocked(e.chatId, {
                            syncWithPrimaries: false
                        });
                    }
                    return o("WAWebChatLockAction").setChatAsUnlocked(e.chatId, {
                        syncWithPrimaries: false
                    });
                }));
                if (i.length > 0) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "LockChatSync: updated lock status for ",
                        " chats"
                    ])), i.length);
                }
                return g;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getChatLockMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, locked, n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                        (yield o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(n, o("WAWebSyncdConst").Actions.LockChat))
                    ],
                    value: {
                        lockChatAction: {
                            locked
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
        a_prototype.sendLockMutation = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { isLocked }) {
                const i = o("WATimeUtils").unixTimeMs();
                const l = [];
                if (isLocked) {
                    l.push(r("WAWebArchiveChatSync").getArchiveChatMutation(i, false, e), o("WAWebPinChatSync").PinChatSync.getPinMutation(i, false, e));
                }
                l.push(this.getChatLockMutation(i, isLocked, e));
                yield o("WAWebSyncdCoreApi").lockForSync([], (yield (d || (d = n("Promise"))).all(l)), function() {
                    return (d || (d = n("Promise"))).resolve();
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").ChatSyncdActionBase);
    const p = new m;
    l.default = p;
}, 98);