__d("WAWebMarkUnreadMenuItem.react", [
    "fbt",
    "WAWebChatGetters",
    "WDSIconIcUnread.react",
    "WDSIconWdsIcChat.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_disabled = e.disabled;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebChatGetters").getUnreadCount
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e.chat.id, a);
        const l = i[0];
        let c;
        if (t[1] !== e.onMarkUnread || t[2] !== l) {
            c = e.onMarkUnread.bind(null, !l);
            t[1] = e.onMarkUnread;
            t[2] = l;
            t[3] = c;
        } else {
            c = t[3];
        }
        const d = c;
        const m = r(l ? "WDSIconWdsIcChat.react" : "WDSIconIcUnread.react");
        let p;
        if (t[4] !== l) {
            p = l ? s._("Mark as read") : s._("Mark as unread");
            t[4] = l;
            t[5] = p;
        } else {
            p = t[5];
        }
        let _;
        if (t[6] !== e_disabled || t[7] !== d || t[8] !== m || t[9] !== p) {
            const Component = r("WDSMenuItem.react");
            _ = <Component key="MarkUnreadMenuItem" Icon={m} title={p} onPress={d} testid="mi-mark-as" disabled={e_disabled}/>;
            t[6] = e_disabled;
            t[7] = d;
            t[8] = m;
            t[9] = p;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return _;
    }
    l.default = c;
}, 226);