__d("WAWebHandleBotProfileNotification", [
    "WALogger",
    "WAWap",
    "WAWapJid",
    "WAWebHatchLinkedStatusManager",
    "WAWebInitializeBots",
    "WAWebReconcileBotSupportFields",
    "WAWebSyncBotSupportFields",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = "fb:update";
    const g = "update";
    const h = "bot_profile";
    const y = "link";
    function C(e, t, n) {
        return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(e),
            to: t instanceof o("WAWapJid").WapJid ? t : o("WAWap").CUSTOM_STRING(t),
            class: "notification",
            type: o("WAWap").CUSTOM_STRING(n)
        });
    }
    function b() {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] refreshing hatch linked status"
        ])));
        r("WAWebHatchLinkedStatusManager").fetchAndUpdateStatus();
    }
    function v(e) {
        if (e == null || e === "" || e === y) {
            b();
            return;
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[BotProfileNotification] ignoring category: ",
            ""
        ])), e);
    }
    function S(e) {
        try {
            const t = o("WAWebWidFactory").createWid(e);
            if (!t.isFbidBot()) {
                return;
            }
            o("WAWebSyncBotSupportFields").syncBotSupportFields(t).catch((e)=>{
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileNotification] bot support sync failed: ",
                    ""
                ])), String(e));
            });
        } catch (error) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[BotProfileNotification] invalid jid: ",
                " (",
                ")"
            ])), e, String(error));
        }
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const l = e.attrs.id?.toString() ?? "";
            const s = e.attrs.from ?? "";
            const u = e.attrs.type?.toString() ?? f;
            try {
                const c = e.content;
                let y = false;
                if (Array.isArray(c)) {
                    for (const b of c){
                        if (b.tag === g && b.attrs?.type?.toString() === h) {
                            const T = b.attrs.jid?.toString() ?? "";
                            const D = b.attrs.category?.toString() ?? null;
                            if (T !== "") {
                                v(D);
                                S(T);
                            } else {
                                y = true;
                                break;
                            }
                        }
                    }
                }
                if (y) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[BotProfileNotification] pruned update, full bot sync"
                    ])));
                    o("WAWebInitializeBots").initializeBots().catch((e)=>{
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[BotProfileNotification] full bot sync failed: ",
                            ""
                        ])), String(e));
                    });
                    o("WAWebReconcileBotSupportFields").reconcileBotSupportFields().catch((e)=>{
                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[BotProfileNotification] bot support reconcile failed: ",
                            ""
                        ])), String(e));
                    });
                }
            } catch (error) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotProfileNotification] error processing stanza: ",
                    ""
                ])), String(error));
            }
            return C(l, s, u);
        });
        return L.apply(this, arguments);
    }
    l.handleBotProfileNotification = R;
}, 98);