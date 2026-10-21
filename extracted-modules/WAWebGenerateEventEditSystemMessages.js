__d("WAWebGenerateEventEditSystemMessages", [
    "Promise",
    "WAWebBackendApi",
    "WAWebDBProcessMessage",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            yield (e || (e = n("Promise"))).all(t.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([a, i]) {
                    const l = o("WAWebWidFactory").createWid(a);
                    const s = yield (e || (e = n("Promise"))).all(r("compactMap")(i, function(e) {
                        const t = e.protocolMsg.latestEditSenderTimestampMs;
                        if (!(t == null || o("WAWebMsgGetters").getIsFailed(e.protocolMsg))) {
                            return c(l, t, e);
                        }
                    }));
                    const u = yield o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                        chatId: l,
                        msgObjs: s,
                        meta: {
                            add: "after",
                            isHistory: false
                        },
                        processMessagesOrigin: "eventEditMessage"
                    });
                    if (u) {
                        yield o("WAWebDBProcessMessage").storeMessages(s, l);
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
        });
        return u.apply(this, arguments);
    }
    function c(e, t, n) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const { editedMsgData: u, protocolMsg: c } = n;
            const d = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            const m = r("nullthrows")(o("WAWebMsgGetters").getSender(c));
            const p = {
                eventName: r("nullthrows")(u?.eventName),
                eventStartTime: r("nullthrows")(u?.eventStartTime),
                eventEndTime: u?.eventEndTime,
                isEventCanceled: u?.isEventCanceled ?? false,
                eventLocation: u?.eventLocation ?? void 0,
                eventDescription: u?.eventDescription ?? void 0,
                eventJoinLink: u?.eventJoinLink ?? void 0
            };
            return babelHelpers.extends({
                id: new (r("WAWebMsgKey"))({
                    id: yield r("WAWebMsgKey").newId(),
                    fromMe: o("WAWebUserPrefsMeUser").isMeAccount(m),
                    remote: e,
                    participant: m
                }),
                author: m,
                from: e,
                to: d,
                t: c.t,
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                subtype: "event_edit_decrypted",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.ProtocolEventEdit,
                editMsgType: o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
                latestEditMsgKey: c.latestEditMsgKey,
                latestEditSenderTimestampMs: t,
                protocolMessageKey: n.parentMsg.id
            }, p);
        });
        return d.apply(this, arguments);
    }
    l.generateEventEditSystemMessages = s;
}, 98);