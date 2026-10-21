__d("WAWebVoipActionSurfaceCallLogChat", [
    "WALogger",
    "WAWebDBUpdateChatTable",
    "WAWebDbErrors",
    "WAWebFindChatAction",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (!(n.viewMode !== o("WAWebViewMode.flow").ViewModeType.VISIBLE && n.viewMode !== o("WAWebViewMode.flow").ViewModeType.CALL_LOG_OFFLINE_RESUME_PROMOTED)) {
                try {
                    const a = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "voipCallLog");
                    const i = a.chat;
                    i.set({
                        createdLocally: false
                    });
                    yield o("WAWebDBUpdateChatTable").updateChatTable(i.id, {
                        createdLocally: false
                    });
                } catch (error) {
                    if (error instanceof o("WAWebDbErrors").DbOnLogoutAbort) {
                        throw error;
                    }
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip] failed to surface call log chat in chat list"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-surface-callog-chat-failed");
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.maybeSurfaceCallLogChatInChatList = s;
}, 98);