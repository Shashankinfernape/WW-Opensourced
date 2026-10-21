__d("WAWebAddBotTransparencyNotice", [
    "WAWebBotSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const newMsg = o("WAWebBotSystemMsg").genBotSessionTransparencyNoticeSystemMsg(e, t);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: e,
                newMsg,
                handleSingleMsgOrigin: "limitSharing"
            });
        });
        return s.apply(this, arguments);
    }
    l.addBotSessionTransparencyNotice = e;
}, 98);