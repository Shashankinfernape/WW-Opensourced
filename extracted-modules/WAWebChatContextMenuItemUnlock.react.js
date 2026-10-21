__d("WAWebChatContextMenuItemUnlock.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatLockCodeModal.react",
    "WAWebWamEnumActionEntryPoint",
    "WDSIconWdsIcChatlockUnlockedOutline.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebUIM"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
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
        const c = r("useWAWebUIM")();
        let d;
        if (t[1] !== e_chat || t[2] !== c) {
            d = function() {
                o("WAWebChatLockCodeModal.react").promptAndUnlockChat(e_chat, {
                    entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_CONTEXT_MENU
                });
                c?.requestDismiss();
            };
            t[1] = e_chat;
            t[2] = c;
            t[3] = d;
        } else {
            d = t[3];
        }
        const m = d;
        if (!l) {
            return null;
        }
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Unlock chat");
            t[4] = p;
        } else {
            p = t[4];
        }
        const _ = p;
        let f;
        if (t[5] !== m) {
            const Component = r("WDSMenuItem.react");
            f = <Component key="ChatUnlockMenuItem" Icon={r("WDSIconWdsIcChatlockUnlockedOutline.react")} title={_} onPress={m} testid="mi-chatunlock" closeMenuOnPress={false}/>;
            t[5] = m;
            t[6] = f;
        } else {
            f = t[6];
        }
        return f;
    }
    l.default = c;
}, 226);