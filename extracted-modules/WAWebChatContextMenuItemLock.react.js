__d("WAWebChatContextMenuItemLock.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatLockCodeModal.react",
    "WAWebChatLockUtils",
    "WAWebStateUtils",
    "WAWebWamEnumActionEntryPoint",
    "WDSIconWdsIcChatlockOutline.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebChatGetters").getIsLocked
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e_chat.id, a);
        const l = i[0];
        let c;
        if (t[1] !== e_chat) {
            c = function() {
                o("WAWebChatLockCodeModal.react").promptAndLockChat(o("WAWebStateUtils").unproxy(e_chat), {
                    entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_CONTEXT_MENU
                });
            };
            t[1] = e_chat;
            t[2] = c;
        } else {
            c = t[2];
        }
        const d = c;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Lock chat");
            t[3] = m;
        } else {
            m = t[3];
        }
        if (o("WAWebChatLockUtils").hasChatlockSecretCode() && !l) {
            let _;
            if (t[4] !== d) {
                const Component = r("WDSMenuItem.react");
                _ = <Component key="ChatLockMenuItem" Icon={r("WDSIconWdsIcChatlockOutline.react")} title={m} onPress={d} testid="mi-chatlock"/>;
                t[4] = d;
                t[5] = _;
            } else {
                _ = t[5];
            }
            return _;
        }
        return null;
    }
    l.default = c;
}, 226);