__d("WAWebArchiveMenuItem.react", [
    "fbt",
    "WAWebChatGetters",
    "WDSIconIcArchive.react",
    "WDSIconIcUnarchive.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(14);
        const { chat, disabled, onArchive } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebChatGetters").getArchive
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = o("useWAWebChatValues").useChatValues(chat.id, l);
        const m = c[0];
        let p;
        if (t[1] !== m || t[2] !== onArchive) {
            p = onArchive.bind(null, !m);
            t[1] = m;
            t[2] = onArchive;
            t[3] = p;
        } else {
            p = t[3];
        }
        const _ = p;
        let f;
        if (t[4] !== m) {
            f = m ? s._("Unarchive chat") : s._("Archive chat");
            t[4] = m;
            t[5] = f;
        } else {
            f = t[5];
        }
        const g = f;
        let h;
        if (t[6] !== m || t[7] !== chat) {
            h = o("WAWebChatGetters").getIsNewsletter(chat) ? d(m) : null;
            t[6] = m;
            t[7] = chat;
            t[8] = h;
        } else {
            h = t[8];
        }
        const y = h;
        const C = r(m ? "WDSIconIcUnarchive.react" : "WDSIconIcArchive.react");
        const b = y ?? g;
        let v;
        if (t[9] !== disabled || t[10] !== _ || t[11] !== C || t[12] !== b) {
            const Component = r("WDSMenuItem.react");
            v = <Component key="ArchiveMenuItem" Icon={C} title={b} testid="mi-archive" onPress={_} disabled={disabled}/>;
            t[9] = disabled;
            t[10] = _;
            t[11] = C;
            t[12] = b;
            t[13] = v;
        } else {
            v = t[13];
        }
        return v;
    }
    function d(e) {
        if (e) {
            return s._("Unarchive channel");
        }
        return s._("Archive channel");
    }
    l.default = CComponent;
}, 226);