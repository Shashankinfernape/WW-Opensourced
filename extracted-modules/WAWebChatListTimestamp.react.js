__d("WAWebChatListTimestamp.react", [
    "WAWebChatGetters",
    "WAWebChatTimestamp.react",
    "WAWebMuteGetters",
    "WAWebMutedChatDimming",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebMuteValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const { chat, hasUnreadStyle, mute, unreadCount } = e;
        let u;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = [
                o("WAWebMuteGetters").getIsMuted
            ];
            t[0] = u;
        } else {
            u = t[0];
        }
        const c = o("useWAWebMuteValues").useMuteValues(mute.id, u);
        const isMuted = c[0];
        let m;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = [
                o("WAWebChatGetters").getIsNewsletter
            ];
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = o("useWAWebChatValues").useChatValues(chat.id, m);
        const isNewsletter = p[0];
        const f = hasUnreadStyle && o("WAWebMutedChatDimming").shouldDimMutedChat({
            isMuted,
            isNewsletter,
            unreadCount
        });
        const g = f ? true : undefined;
        const timestampColor = hasUnreadStyle && !f ? "accent" : "contentDeemphasized";
        let y;
        if (t[2] !== chat || t[3] !== timestampColor) {
            y = s.jsx(r("WAWebChatTimestamp.react"), {
                chat,
                timestampColor
            });
            t[2] = chat;
            t[3] = timestampColor;
            t[4] = y;
        } else {
            y = t[4];
        }
        let C;
        if (t[5] !== g || t[6] !== y) {
            C = <span data-testid="chat-list-timestamp" data-dimmed={g}>{y}</span>;
            t[5] = g;
            t[6] = y;
            t[7] = C;
        } else {
            C = t[7];
        }
        return C;
    }
    l.default = u;
}, 98);