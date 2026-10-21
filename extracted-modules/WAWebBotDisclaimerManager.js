__d("WAWebBotDisclaimerManager", [
    "fbt",
    "Promise",
    "WAWebActionToast.react",
    "WAWebBoolFunc",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotJourneyLogger",
    "WAWebBotLogging",
    "WAWebBotNux.react",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebModalManager",
    "WAWebPDFNCommonUtils",
    "WAWebPDFNModal.react",
    "WAWebToastManager",
    "WAWebTosGating",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = [
        o("WAWebBotLogging").BotEntryPointType.Shortcut,
        o("WAWebBotLogging").BotEntryPointType.Search
    ];
    const m = "TOS_DID_NOT_ACCEPT";
    const p = "TOS_ACCEPTANCE_NOT_SUPPORTED";
    function _() {
        const t = s._("Something went wrong. Please try again.");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: null,
            pendingAction: (e || (e = n("Promise"))).reject({
                text: t
            })
        }));
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a) {
            const origin = o("WAWebBotFrontendUtils").getBotNuxOriginType(t);
            const l = a;
            return new (e || (e = n("Promise")))(function(e, t) {
                o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(l);
                const Component = r("WAWebBotNux.react");
                o("WAWebModalManager").ModalManager.open(<Component origin={origin} onOK={function() {
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(a);
                    e(true);
                }} onCancel={function() {
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logTosDismiss(a);
                    t(m);
                }}/>);
            });
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ botEntryPoint, chat, noticeId, wamEntryPoint }) {
            if (!o("WAWebBotUtils").isBotChannelFBID(chat.id)) {
                const g = o("WAWebBotTos").isMasterBotTosNotice(Number(noticeId));
                if (g) {
                    const h = v(botEntryPoint);
                    if (h.some((e)=>C(String(e)))) {
                        return;
                    }
                }
                const y = o("WAWebBotGating").getMasterBotNoticeId() ?? Number(noticeId);
                const b = o("WAWebBotTos").isNonBlockingBotNotice(Number(y));
                if (g || b) {
                    if (C(String(y))) {
                        return undefined;
                    }
                    o("WAWebBotJourneyLogger").BotJourneyLogger.logTosView(wamEntryPoint);
                    return new (e || (e = n("Promise")))(function(e, t) {
                        const Component = r("WAWebPDFNModal.react");
                        o("WAWebModalManager").ModalManager.open(<Component pdfnId={Number(y)} runIfTosAccepted={function() {
                            o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(wamEntryPoint);
                            e();
                        }} onCancel={b ? function() {
                            o("WAWebBotJourneyLogger").BotJourneyLogger.logTosAccept(wamEntryPoint);
                        } : function() {
                            o("WAWebBotJourneyLogger").BotJourneyLogger.logTosDismiss(wamEntryPoint);
                            t(m);
                        }} verifyTosAccepted={o("WAWebBoolFunc").returnFalse} theme={o("WAWebPDFNCommonUtils").PdfnTheme.Meta} noticeType={b ? o("WAWebPDFNCommonUtils").PdfnNoticeType.NonBlocking : o("WAWebPDFNCommonUtils").PdfnNoticeType.Blocking} onAcceptError={b ? _ : undefined}/>);
                    });
                }
                if (d.includes(botEntryPoint)) {
                    if (!o("WAWebTosGating").shouldBlockByBotTos(chat.contact)) {
                        return;
                    }
                    if (o("WAWebBotTosIds").supportedTosNoticeIds.has(noticeId)) {
                        yield f(botEntryPoint, wamEntryPoint);
                        return;
                    }
                }
                if (botEntryPoint === o("WAWebBotLogging").BotEntryPointType.Invoke) {
                    if (o("WAWebBotTos").hasSeenInvokeTos()) {
                        return;
                    }
                    yield f(botEntryPoint, wamEntryPoint);
                    return;
                }
                return (e || (e = n("Promise"))).reject(p);
            }
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return o("WAWebPDFNCommonUtils").hasAcceptedTos(e);
    }
    function b(e) {
        return o("WAWebBotTosIds").supportedTosNoticeIds.has(e);
    }
    function v(e) {
        const t = o("WAWebBotGating").getMasterBotNoticeId();
        const n = [];
        if (t != null) {
            n.push(t);
        }
        const r = o("WAWebBotTosIds").getBusinessAssistantLegacyNoticeId();
        if (r != null) {
            n.push(r);
        }
        switch(e){
            case o("WAWebBotLogging").BotEntryPointType.Shortcut:
            case o("WAWebBotLogging").BotEntryPointType.Search:
                n.push(Number(o("WAWebBotTosIds").getBotShortcutTosId()));
                n.push(Number(o("WAWebBotTosIds").getBotLegacyShortcutTosId()));
                break;
            case o("WAWebBotLogging").BotEntryPointType.Invoke:
                n.push(Number(o("WAWebBotTosIds").getBotInvokeTosId()));
                n.push(Number(o("WAWebBotTosIds").getBotLegacyInvokeTosId()));
                break;
        }
        if (o("WAWebBotGating").isMigrateAwayFromInlineBotTosEnabled()) {
            const a = o("WAWebBotGating").getInlineBotNoticeIds();
            return n.filter((e)=>!a.includes(Number(e)));
        }
        return n;
    }
    l.TOS_DID_NOT_ACCEPT_ERROR = m;
    l.TOS_ACCEPTANCE_NOT_SUPPORTED_ERROR = p;
    l.enterOldBotNuxFlow = f;
    l.enterBotTosFlow = h;
    l.hasAcceptedTos = C;
    l.canShowLegacyBotNux = b;
    l.getRelevantBotEntryPointNoticeIds = v;
}, 226);