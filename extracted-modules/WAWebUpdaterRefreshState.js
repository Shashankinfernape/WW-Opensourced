__d("WAWebUpdaterRefreshState", [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebLocalStorage",
    "WAWebMsgKey",
    "WAWebTimedCache",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = 60000;
    let y = null;
    function C(e) {
        if (e.length === 0) {
            y = null;
            return;
        }
        const r = Math.floor(e.length / 2);
        y = e[r]?.toString() ?? null;
    }
    function b() {
        const t = o("WAWebChatCollection").ChatCollection.getActive();
        if (t == null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: No active chat to save before refresh"
            ])));
            return;
        }
        const n = t.id.toString();
        const messageId = y;
        const i = {
            chatId: n,
            messageId,
            chatEntryPoint: L(t.chatEntryPoint)
        };
        const l = o("WAWebTimedCache").createTimedCacheItem(i);
        if (r("WAWebLocalStorage") != null) {
            r("WAWebLocalStorage").setItem(o("WAWebUserPrefsKeys").KEYS.WA_WEB_REFRESH_STATE, JSON.stringify(l));
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[Updater] saved state chat=",
            " msg=",
            " ep=",
            ""
        ])), n, messageId ?? "none", i.chatEntryPoint);
    }
    function v() {
        const e = r("WAWebLocalStorage") == null ? undefined : r("WAWebLocalStorage").getItem(o("WAWebUserPrefsKeys").KEYS.WA_WEB_REFRESH_STATE);
        if (e == null) {
            return null;
        }
        if (r("WAWebLocalStorage") != null) {
            r("WAWebLocalStorage").removeItem(o("WAWebUserPrefsKeys").KEYS.WA_WEB_REFRESH_STATE);
        }
        let t;
        try {
            t = JSON.parse(e);
        } catch (e) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Failed to parse refresh state"
            ])));
            return null;
        }
        const n = o("WAWebTimedCache").getTimedCacheItemValue(t, h);
        if (n != null) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Retrieved refresh state for chat ",
                ""
            ])), n.chatId);
        } else {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Refresh state expired"
            ])));
        }
        return n;
    }
    function S(e) {
        try {
            const { chatId, messageId } = e;
            const a = o("WAWebChatCollection").ChatCollection.get(chatId);
            if (a == null || a.isLocked) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Updater: restore failed - chat not found/locked"
                ])));
                return;
            }
            const i = e.chatEntryPoint != null ? o("WAWebChatEntryPoint").ChatEntryPoint.cast(e.chatEntryPoint) : null;
            if (i == null) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[Updater] entry point ",
                    " -> RefreshRestore"
                ])), e.chatEntryPoint ?? "null").sendLogs("updater-refresh-restore-entry-point-fallback");
            }
            const chatEntryPoint = i ?? o("WAWebChatEntryPoint").ChatEntryPoint.RefreshRestore;
            if (messageId != null) {
                const msgKey = r("WAWebMsgKey").fromString(messageId);
                const msgContext = babelHelpers.extends({}, o("WAWebChatMessageSearch").getSearchContext({
                    chat: a,
                    msgKey
                }), {
                    highlightMsg: false
                });
                o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Updater: Restoring chat ",
                    " at message ",
                    " with entry point ",
                    ""
                ])), chatId, messageId, chatEntryPoint);
                o("WAWebCmd").Cmd.openChatAt({
                    chat: a,
                    msgContext,
                    chatEntryPoint
                });
                return;
            }
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Restoring chat ",
                " from unread with entry point ",
                ""
            ])), chatId, chatEntryPoint);
            o("WAWebCmd").Cmd.openChatFromUnread({
                chat: a,
                chatEntryPoint
            });
        } catch (error) {
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "Updater: Failed to restore refresh state: ",
                ""
            ])), String(error));
        }
    }
    function R() {
        const e = v();
        if (e != null) {
            S(e);
        }
    }
    function L(chatEntryPoint) {
        if (chatEntryPoint === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiHandoffFilter || chatEntryPoint === o("WAWebChatEntryPoint").ChatEntryPoint.ChatlistAiRespondingFilter) {
            return o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist;
        }
        return chatEntryPoint;
    }
    l.setCenterVisibleMsgId = C;
    l.saveRefreshState = b;
    l.getRefreshState = v;
    l.restoreRefreshState = R;
}, 98);