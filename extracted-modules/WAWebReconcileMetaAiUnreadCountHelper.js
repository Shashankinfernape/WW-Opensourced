__d("WAWebReconcileMetaAiUnreadCountHelper", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebReconcileUnreadCountsForBotJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebReconcileUnreadCountsForBotJob").reconcileForBot(e);
            if (t != null) {
                o("WAWebBackendApi").frontendFireAndForget("updateChatUnreadCount", {
                    chatId: e,
                    unreadCount: t.unreadCount
                });
            }
        });
        return c.apply(this, arguments);
    }
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebBotGating").isAiChatThreadsEnabled()) {
                const t = [
                    o("WAWebBotUtils").META_BOT_PN_WID,
                    o("WAWebBotUtils").META_BOT_FBID_WID
                ];
                for(let r = yield (s || (s = n("Promise"))).allSettled(t.map((e)=>u(e))), a = 0; a < r.length; a++){
                    const i = r[a];
                    if (i.status === "rejected") {
                        const l = t[a].toString();
                        const c = String(i.reason);
                        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[reconcile-unread] reconcileForBotAndNotifyFrontend failed ",
                            " ",
                            ""
                        ])), l, c);
                    }
                }
            }
        });
        return m.apply(this, arguments);
    }
    l.reconcileMetaAiUnreadCounts = d;
}, 98);