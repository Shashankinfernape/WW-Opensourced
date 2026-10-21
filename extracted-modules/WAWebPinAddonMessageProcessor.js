__d("WAWebPinAddonMessageProcessor", [
    "Promise",
    "WAArrayGroupBy",
    "WATimeUtils",
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBProcessMessage",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPinMessageProcessor",
    "WAWebPinMsgParseWebMsgInfoPinInChat",
    "WAWebPinsDbSerialization",
    "WAWebProtobufsE2E.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 60 * o("WATimeUtils").DAY_SECONDS;
    const u = o("WAWebAddonCreateMsgProcessor").createAddonMsgProcessor({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
            fromHistorySyncMsg: function(r) {
                const t = o("WAWebPinMsgParseWebMsgInfoPinInChat").parseWebMsgInfoPinInChat(r.webMsgInfo, r.parsedWebMsgInfo);
                const a = t.map((e)=>o("WAWebPinsDbSerialization").deserializePinInChatMsgData(o("WAWebPinsDbSerialization").serializePinInChat(e)));
                return (e || (e = n("Promise"))).resolve(a);
            }
        },
        updateCollection: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.add;
                yield o("WAWebBackendApi").frontendSendAndReceive("updatePinCollection", {
                    msgs: t,
                    removeMsgs: e.remove
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        beforeUpsert: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { parents: n, processMode: r }) {
                return e.filter((e)=>{
                    const a = e.pinExpiryDuration ?? 0;
                    if (r !== o("WAWebAddonConstants").AddonProcessMode.HistorySync) {
                        const i = n.getForAddon(e);
                        if (i.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) {
                            return true;
                        }
                    }
                    return a <= s;
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        afterUpsert: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { processMode: i }) {
                if (!(i === o("WAWebAddonConstants").AddonProcessMode.HistorySync || i === o("WAWebAddonConstants").AddonProcessMode.ProcessGroupHistoryBundle)) {
                    const l = o("WAArrayGroupBy").groupBy(t, function(e) {
                        return e.id.remote.toString();
                    });
                    const s = [
                        o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(t.map((e)=>e.id.toString()))
                    ].concat(l.map((()=>{
                        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([a, i]) {
                            const l = o("WAWebWidFactory").createWid(a);
                            const s = yield (e || (e = n("Promise"))).all(r("compactMap")(i, function(e) {
                                const t = o("WAWebMsgGetters").getT(e);
                                if (!(e.pinMessageType !== o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL || t == null || o("WAWebMsgGetters").getIsFailed(e))) {
                                    return o("WAWebPinMessageProcessor").genSystemMessage(l, t, r("nullthrows")(o("WAWebMsgGetters").getSender(e)));
                                }
                            }));
                            const u = yield o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                                chatId: l,
                                msgObjs: s,
                                meta: {
                                    add: "after",
                                    isHistory: false
                                },
                                processMessagesOrigin: "pinMessage"
                            });
                            if (u) {
                                yield o("WAWebDBProcessMessage").storeMessages(s, l);
                            }
                        });
                        return function(e) {
                            return t.apply(this, arguments);
                        };
                    })()));
                    yield (e || (e = n("Promise"))).all(s);
                }
            });
            function a(e, n) {
                return t.apply(this, arguments);
            }
            return a;
        })(),
        manageNotifications: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })()
    });
    l.default = u;
}, 98);