__d("WAWebRetrieveOutOfWindowPinsForBundle", [
    "WALogger",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = new Set([
        (s = o("WAWebMsgType")).MSG_TYPE.IMAGE,
        s.MSG_TYPE.VIDEO,
        s.MSG_TYPE.AUDIO,
        s.MSG_TYPE.PTT,
        s.MSG_TYPE.PTV,
        s.MSG_TYPE.DOCUMENT,
        s.MSG_TYPE.STICKER
    ]);
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatId, inWindowMessageKeys, messagesNotOlderThanTimestamp, targetJoinTime }) {
            if (!o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(chatId)) {
                return [];
            }
            const c = chatId.toString();
            const d = [];
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "pinned-messages",
                "message"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                    const a = yield t.anyOf([
                        "chatId"
                    ], [
                        c
                    ]);
                    const m = a.filter((e)=>e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN).sort((e, t)=>t.senderTimestampMs - e.senderTimestampMs).slice(0, o("WAWebPinMsgGatingUtils").getMaxPins()).map((e)=>e.parentMsgKey).filter((e)=>!inWindowMessageKeys.has(e));
                    const p = yield n.bulkGet(m);
                    p.forEach((e)=>{
                        if (e != null) {
                            if (!(e.t == null || e.t >= messagesNotOlderThanTimestamp || targetJoinTime != null && e.t >= targetJoinTime)) {
                                if (r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type)) {
                                    if (!u.has(e.type)) {
                                        d.push(e);
                                    }
                                }
                            }
                        }
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Retrieved ",
                " out-of-window pinned messages"
            ])), d.length);
            return d;
        });
        return d.apply(this, arguments);
    }
    l.retrieveOutOfWindowPinsForBundle = c;
}, 98);