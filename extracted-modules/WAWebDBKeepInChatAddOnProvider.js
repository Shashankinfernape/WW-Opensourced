__d("WAWebDBKeepInChatAddOnProvider", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebMessageAddOnType",
    "WAWebMsgDataFromModel",
    "WAWebMsgType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.KeepInChat,
        matches: function(t) {
            return t.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
        },
        matchesFutureproof: function(t) {
            return t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && t.futureproofType === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
        },
        canRenderInUi: function() {
            return true;
        },
        processOrphansForNewMsg: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                const r = n.map((e)=>e.parsedMsgPayload);
                const a = o("WAWebEphemeralKeepInChatUtils").runKeepInChatTieBreaker(r);
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "keepInChatAddOnProvider: found orphan"
                ])));
                if (a != null) {
                    const keepInChatMessage = o("WAWebMsgDataFromModel").msgDataFromMsgModel(a);
                    yield o("WAWebBackendApi").frontendSendAndReceive("processKeepInChatMessage", {
                        keepInChatMessage,
                        allowNotification: false
                    });
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })()
    };
    l.keepInChatAddOnProvider = s;
}, 98);