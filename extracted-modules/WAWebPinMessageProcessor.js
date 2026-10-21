__d("WAWebPinMessageProcessor", [
    "Promise",
    "WAWebBackendApi",
    "WAWebDBCRUDOperationsPinInChat",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBStoreMessageOrphans",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinsDbSerialization",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("compactMap")(e, function(e) {
                return e.pinParentKey;
            });
            const n = t.map((e)=>e.toString());
            const a = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(n);
            const i = new Map(a.map((e)=>[
                    e.id.toString(),
                    e
                ]));
            return i;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(e, function(e) {
                return r("nullthrows")(e.pinParentKey);
            });
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const i = yield s(a);
            const l = [];
            const u = [];
            for (const d of a){
                const m = i.get(r("nullthrows")(d.pinParentKey).toString());
                if (m) {
                    u.push(d);
                } else {
                    l.push(d);
                }
            }
            yield (e || (e = n("Promise"))).all([
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (l.length !== 0) {
                        yield c(l);
                        yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(l.map((e)=>e.id.toString()));
                    }
                })(),
                n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (u.length !== 0) {
                        const a = yield o("WAWebBackendApi").frontendSendAndReceive("updatePinCollection", {
                            msgs: u,
                            removeMsgs: []
                        });
                        if (a) {
                            yield o("WAWebDBCRUDOperationsPinInChat").createOrUpdatePinInChat(t, a.map((e)=>o("WAWebPinsDbSerialization").serializePinInChat(e)));
                            yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(a.map((e)=>e.msgKey.toString()));
                        }
                        const msgObjs = yield (e || (e = n("Promise"))).all(r("compactMap")(u, function(e) {
                            if (e.pinMessageType === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL) {
                                return _(t, r("nullthrows")(e.t), r("nullthrows")(o("WAWebMsgGetters").getSender(e)));
                            }
                            return null;
                        }));
                        const l = yield o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                            chatId: t,
                            msgObjs,
                            meta: {
                                add: "after",
                                isHistory: false
                            },
                            processMessagesOrigin: "pinMessage"
                        });
                        if (l) {
                            yield o("WAWebDBProcessMessage").storeMessages(msgObjs, t);
                        }
                    }
                })()
            ]);
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const fromMe = o("WAWebUserPrefsMeUser").isMeAccount(n);
            return {
                id: new (r("WAWebMsgKey"))({
                    id: yield r("WAWebMsgKey").newId(),
                    fromMe,
                    remote: e,
                    participant: n
                }),
                author: n,
                from: e,
                to: a,
                recipients: [],
                t,
                type: o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE,
                kind: o("WAWebMsgType").MsgKind.PinnedMessage,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                templateParams: [
                    n
                ]
            };
        });
        return f.apply(this, arguments);
    }
    l.processPinMessages = m;
    l.genSystemMessage = _;
}, 98);