__d("WAWebNewsletterRepairMsgHistoryAction", [
    "WAPromiseDelays",
    "WARaceSignal",
    "WAWebCommonNewsletterEnums",
    "WAWebMsgDataFromModel",
    "WAWebMsgModelFromData",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgHistoryUtils",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterValidationUtils",
    "WAWebNewsletterViewModeUIUtils",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = "[news-msg-history][repairMsgHistory]";
    const s = 1000;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = o("WAWebStateUtils").unproxy(e.chat);
            if (r("WAWebWid").isNewsletter(n.id) && o("WAWebNewsletterGatingUtils").isProactiveGapFillingEnabled()) {
                const a = e.msgCollection ?? n.msgs;
                if (a === n.msgs) {
                    if (a.repairMsgHistoryPromise != null) {
                        return a.repairMsgHistoryPromise;
                    }
                    const i = n.newsletterMetadata;
                    if (!(i == null || i.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest)) {
                        const serverIdsToSkip = o("WAWebNewsletterViewModeUIUtils").getHiddenMessageServerIdsForChat(n.id);
                        const u = a.sort().last();
                        if (!(u == null || u.serverId == null)) {
                            const c = new AbortController;
                            try {
                                r("WARaceSignal")([
                                    c.signal,
                                    e.unmountSignal
                                ], function() {
                                    return o("WAPromiseDelays").delayMs(s, c.signal).then(()=>{
                                        a.msgLoadState.isRepairingMsgHistory = true;
                                    }).catch(r("WAWebNoop"));
                                });
                                if (e.fetchLastMessage) {
                                    const m = yield o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(n, {
                                        messageCount: 1,
                                        resetUnreadCount: true,
                                        shouldUpdateMsg: function(t) {
                                            return t.serverId != null && t.serverId !== u.serverId && !serverIdsToSkip.has(t.serverId);
                                        }
                                    });
                                    const p = m[0];
                                    if (p == null) {
                                        return;
                                    }
                                }
                                a.repairMsgHistoryPromise = o("WAWebNewsletterMsgHistoryUtils").fillMsgHistoryGaps({
                                    jid: o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(n.id.toJid()),
                                    msgs: a.toArray().map(o("WAWebMsgDataFromModel").msgDataFromMsgModel),
                                    serverIdsToSkip
                                }).then((e)=>e.map(o("WAWebMsgModelFromData").msgModelFromMsgData));
                                const _ = (yield n.msgs.repairMsgHistoryPromise) ?? [];
                                if (a.length === _.length) {
                                    return;
                                }
                                a.add(_, {
                                    silent: true
                                });
                                a.sort({
                                    silent: true
                                });
                                n.trigger("msgs:history_repaired");
                            } finally{
                                c.abort();
                                a.msgLoadState.isRepairingMsgHistory = false;
                                a.repairMsgHistoryPromise = null;
                            }
                        }
                    }
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.repairNewsletterMsgHistory = u;
}, 98);