__d("WAWebOpenLastActiveChatAction", [
    "Promise",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebSideNavButtonsActivityModel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = 0;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = o("WAWebSideNavButtonsActivityModel").getLastActiveChat();
            try {
                const r = t != null ? o("WAWebChatCollection").ChatCollection.get(t) : null;
                o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                if (r != null && !r.isLocked) {
                    if (o("WAWebBotUtils").isMetaAiBot(r.id) && o("WAWebBotGating").isAiChatThreadsEnabled()) {
                        return false;
                    }
                    const a = ++s;
                    return o("WAWebCmd").Cmd.openChatFromUnread({
                        chat: r,
                        chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ChatsTab,
                        isSuperseded: function() {
                            return a !== s;
                        }
                    });
                }
                return (e || (e = n("Promise"))).resolve(false);
            } catch (t) {
                return (e || (e = n("Promise"))).resolve(false);
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        s++;
    }
    l.openLastActiveChatIfNotLocked = u;
    l.cancelPendingLastActiveChatRestore = d;
}, 98);