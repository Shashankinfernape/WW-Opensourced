__d("WAWebChatContextMenuItemMute.react", [
    "WAWebCmd",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebMuteUtils",
    "WAWebStateUtils",
    "WAWebWamEnumMuteEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebMuteValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMuteGetters").getIsMuted
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMuteValues").useMuteValues(e_chat.id, a);
        const l = i[0];
        let u;
        if (t[1] !== e_chat) {
            u = function(t) {
                o("WAWebCmd").Cmd.muteChatFromEntryPoint(o("WAWebStateUtils").unproxy(e_chat), t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN);
            };
            t[1] = e_chat;
            t[2] = u;
        } else {
            u = t[2];
        }
        const onMute = u;
        if (o("WAWebMuteUtils").canMute(e_chat.mute) && !e_chat.archive) {
            let onMuteWithDuration;
            if (t[3] !== e_chat) {
                onMuteWithDuration = function(t) {
                    o("WAWebCmd").Cmd.muteChatWithDuration(o("WAWebStateUtils").unproxy(e_chat), t, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CHAT_LIST_SCREEN);
                };
                t[3] = e_chat;
                t[4] = onMuteWithDuration;
            } else {
                onMuteWithDuration = t[4];
            }
            let m;
            if (t[5] !== e_chat || t[6] !== onMute || t[7] !== l || t[8] !== onMuteWithDuration) {
                const Component = r("WAWebMuteMenuItem.react");
                m = <Component key="mute" onMute={onMute} onMuteWithDuration={onMuteWithDuration} isMuted={l} chat={e_chat}/>;
                t[5] = e_chat;
                t[6] = onMute;
                t[7] = l;
                t[8] = onMuteWithDuration;
                t[9] = m;
            } else {
                m = t[9];
            }
            return m;
        }
    }
    l.default = u;
}, 98);