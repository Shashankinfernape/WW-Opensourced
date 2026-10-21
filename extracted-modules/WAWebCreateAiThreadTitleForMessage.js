__d("WAWebCreateAiThreadTitleForMessage", [
    "WALogger",
    "WAWebMsgType",
    "fbs"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        if (t.body != null && t.type !== o("WAWebMsgType").MSG_TYPE.IMAGE && t.type !== o("WAWebMsgType").MSG_TYPE.VIDEO && t.type !== o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
            return t.body;
        }
        if (t.caption != null) {
            return t.caption;
        }
        const t_type = t.type;
        switch(t_type){
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
                return r("fbs")._("New image").toString();
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
                return r("fbs")._("New video").toString();
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
                return r("fbs")._("New audio").toString();
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                return r("fbs")._("New document").toString();
            default:
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected message type: ",
                    ""
                ])), t_type).tags("ai-threads").sendLogs("createAiThreadTitleForMessage: unsupported message type");
                return;
        }
    }
    l.createAiThreadTitleForMessage = s;
}, 226);