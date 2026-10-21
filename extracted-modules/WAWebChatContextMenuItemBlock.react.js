__d("WAWebChatContextMenuItemBlock.react", [
    "fbt",
    "WAWebApiContact",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBlocklistCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebWidFactory",
    "WDSIconIcBlock.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_chat = e.chat;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebChatGetters").getIsUser
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e_chat.id, a);
        const l = i[0];
        if (l && !o("WAWebContactGetters").getIsMe(e_chat.contact) && !e_chat.contact.isEnterprise) {
            const c = o("WAWebBlocklistCollection").BlocklistCollection.get(e_chat.id) != null;
            let d = c;
            if (!d && o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                const m = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e_chat.id));
                const p = m ? o("WAWebBlocklistCollection").BlocklistCollection.get(m) != null : false;
                d = p;
            }
            if (d) {
                let _;
                if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                    _ = s._("Unblock");
                    t[1] = _;
                } else {
                    _ = t[1];
                }
                const f = _;
                let g;
                if (t[2] !== e_chat) {
                    const Component = r("WDSMenuItem.react");
                    g = <Component key="UnBlock" Icon={r("WDSIconIcBlock.react")} title={f} onPress={function() {
                        return o("WAWebBlockContactUtils").handleUnblock(e_chat.contact, e_chat.isTrusted() ? o("WAWebBlockContants").BlockEntryPoint.ChatListBlock : o("WAWebBlockContants").BlockEntryPoint.ChatListNoInsubBlock);
                    }} testid="mi-unblock-contact"/>;
                    t[2] = e_chat;
                    t[3] = g;
                } else {
                    g = t[3];
                }
                return g;
            }
            let h;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                h = s._("Block");
                t[4] = h;
            } else {
                h = t[4];
            }
            const y = h;
            let C;
            if (t[5] !== e_chat) {
                const Component = r("WDSMenuItem.react");
                C = <Component key="Block" Icon={r("WDSIconIcBlock.react")} title={y} onPress={function() {
                    return o("WAWebBlockContactUtils").handleBlock(e_chat, e_chat.isTrusted() ? o("WAWebBlockContants").BlockEntryPoint.ChatListBlock : o("WAWebBlockContants").BlockEntryPoint.ChatListNoInsubBlock);
                }} testid="mi-block-contact" destructive/>;
                t[5] = e_chat;
                t[6] = C;
            } else {
                C = t[6];
            }
            return C;
        }
    }
    l.default = c;
}, 226);