__d("WAWebSendSpamChatAction", [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBlockContactAction",
    "WAWebBlocklistUtils",
    "WAWebChatGetters",
    "WAWebExitGroupAction",
    "WAWebFrontendMsgGetters",
    "WAWebMiscErrors",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebPrivateMessageComplianceUtils",
    "WAWebReportGatingUtils",
    "WAWebReportSpamJob",
    "WAWebSendClearChatAction",
    "WAWebSmb1pdConversionSignalAction",
    "WAWebSpamConstants",
    "WAWebSpamReportAttempt",
    "WAWebStateUtils",
    "WAWebToastManager",
    "gkx",
    "react",
    "requireDeferred"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = p || (p = o("react"));
    const f = r("requireDeferred")("WAWebComplianceReportTrigger").__setRef("WAWebSendSpamChatAction");
    function g({ chat, msg, msgType, skipCtwa1pdNbfSignal, spamFlow }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat?.id?.toString())) {
            o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingReportVerificationEvent({
                chat,
                spamFlow
            });
            const blockEntryPointMetric = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(spamFlow));
            o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingUserReportEvent({
                chat,
                blockEntryPointMetric
            });
        }
        return S({
            chat,
            spamFlow,
            msg,
            msgType,
            skipCtwa1pdNbfSignal
        });
    }
    function h(e, t = o("WAWebSpamConstants").SpamFlow.MessageMenu) {
        const n = o("WAWebStateUtils").unproxy(e);
        return S({
            chat: o("WAWebFrontendMsgGetters").getChat(n),
            spamFlow: t,
            msg: n
        });
    }
    function y(e, t = o("WAWebSpamConstants").SpamFlow.MessageMenu) {
        return I(o("WAWebStateUtils").unproxy(e), t);
    }
    function C({ chat, spamFlow }) {
        return E(o("WAWebStateUtils").unproxy(chat), spamFlow);
    }
    function b(e, t) {
        return k(o("WAWebStateUtils").unproxy(e), t);
    }
    function v() {
        return {
            couldNotSendReportMsg: s._("Couldn't send report"),
            sendingReportMsg: s._("Sending report"),
            reportSentMsg: s._("Report sent"),
            reportSentMsgV2: s._("Thank you for reporting."),
            reportNotSentMsg: s._("Report not sent"),
            tryAgainMsg: s._("Try again.")
        };
    }
    function S(t) {
        const { spamFlow, chat, msg, toastId } = t;
        const c = toastId === undefined ? o("WAWebActionToast.react").genId() : toastId;
        const { msgType, attemptCount } = t;
        const f = attemptCount === undefined ? 1 : attemptCount;
        const g = v();
        const { couldNotSendReportMsg, reportSentMsgV2, sendingReportMsg, tryAgainMsg } = g;
        const L = chat != null ? o("WAWebStateUtils").unproxy(chat) : chat;
        const E = L?.promises ?? null;
        if (E != null && E.sendSpamReport) {
            return E.sendSpamReport;
        }
        const k = R({
            spamFlow,
            msg,
            msgType,
            chat: L
        });
        if (k == null) {
            return new (m || (m = n("Promise")))(r("WAWebNoop"));
        }
        const I = o("WAWebSpamReportAttempt").sendWithSpamReportLogging(spamFlow, f, k);
        const T = L ?? (msg != null ? o("WAWebFrontendMsgGetters").getChat(msg) : null);
        if (t.skipCtwa1pdNbfSignal !== true && T != null) {
            I.then(()=>o("WAWebSmb1pdConversionSignalAction").log1pdReportConversionSignal(T)).catch(r("WAWebNoop"));
        }
        const D = new (o("WAWebActionToast.react")).ActionType(sendingReportMsg);
        const x = I.then((e)=>{
            if (e != null && msg != null && o("WAWebReportGatingUtils").isPostReportingAusOSAModalEnabled(L, msg)) {
                return null;
            }
            return new (o("WAWebActionToast.react")).ActionType(reportSentMsgV2);
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
            if (!r("gkx")("26258") && e.statusCode === 548) {
                return new (o("WAWebActionToast.react")).ActionType(e.message);
            }
            return new (o("WAWebActionToast.react")).ActionType(couldNotSendReportMsg);
        })).catch((n)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "reportSpam dropped"
            ])));
            return new (o("WAWebActionToast.react")).ActionType(couldNotSendReportMsg, {
                actionText: tryAgainMsg,
                actionHandler: function() {
                    return S({
                        chat: L,
                        spamFlow,
                        msg,
                        toastId: c,
                        msgType,
                        skipCtwa1pdNbfSignal: t.skipCtwa1pdNbfSignal,
                        attemptCount: f + 1
                    });
                }
            });
        });
        o("WAWebToastManager").ToastManager.open(_.jsx(o("WAWebActionToast.react").ActionToast, {
            id: c,
            initialAction: D,
            pendingAction: x
        }));
        return I.finally(()=>{
            if (E != null && E.sendSpamReport) {
                E.sendSpamReport = null;
            }
        });
    }
    function R({ chat, msg, msgType, spamFlow }) {
        if (msgType === o("WAWebMsgType").MSG_TYPE.STATUS && msg != null && !o("WAWebMsgGetters").getIsGroupStatus(msg)) {
            return function(e) {
                return o("WAWebReportSpamJob").reportStatus(spamFlow, msg, e).then(L);
            };
        }
        const i = chat?.promises;
        if (chat == null || i == null) {
            return null;
        }
        const l = msg != null ? o("WAWebFrontendMsgGetters").getChat(msg) : chat;
        return function(e) {
            const t = o("WAWebReportSpamJob").reportSpam(l, spamFlow, msg ?? undefined, e).then(L);
            i.sendSpamReport = t;
            return t;
        };
    }
    function L(e) {
        if (e?.errorCode != null) {
            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(e.errorCode, e.errorText);
        }
        if (e?.reportIdMixin?.reportId != null) {
            return e.reportIdMixin.reportId;
        }
    }
    function E(e, spamFlow) {
        const { contact, promises } = e;
        if (promises.reportSpamBlockClear) {
            return promises.reportSpamBlockClear;
        }
        if (o("WAWebChatGetters").getIsGroup(e)) {
            return (m || (m = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        const i = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(spamFlow);
        const l = S({
            chat: e,
            spamFlow,
            skipCtwa1pdNbfSignal: true
        });
        promises.reportSpamBlockClear = l.then(()=>o("WAWebBlockContactAction").blockContact({
                contact,
                blockEntryPoint: i,
                skipCtwa1pdNbfSignal: true
            })).then(()=>o("WAWebSmb1pdConversionSignalAction").log1pdBlockAndReportConversionSignal(e)).finally(()=>{
            promises.reportSpamBlockClear = null;
        });
        return promises.reportSpamBlockClear;
    }
    function k(e, t) {
        const { isReadOnly, promises } = e;
        if (promises.reportSpamExitClear) {
            return promises.reportSpamExitClear;
        }
        if (!o("WAWebChatGetters").getIsGroup(e)) {
            return (m || (m = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError);
        }
        let l;
        const s = S({
            chat: e,
            spamFlow: t
        });
        if (isReadOnly) {
            l = s;
        } else {
            const u = o("WAWebExitGroupAction").sendExitGroup(e);
            l = (m || (m = n("Promise"))).all([
                s,
                u
            ]);
        }
        promises.reportSpamExitClear = l.then(()=>o("WAWebSendClearChatAction").sendClear(e, false)).catch(r("WAWebNoop")).finally(()=>{
            promises.reportSpamExitClear = null;
        });
        return promises.reportSpamExitClear;
    }
    function I(e, t) {
        const e_senderObj = e.senderObj;
        const r = o("WAWebFrontendMsgGetters").getChat(e);
        const r_promises = r.promises;
        if (r_promises.reportMessageBlock) {
            return r_promises.reportMessageBlock;
        }
        const i = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(t);
        const l = S({
            chat: r,
            spamFlow: t,
            msg: e,
            skipCtwa1pdNbfSignal: true
        });
        r_promises.reportMessageBlock = l.then((reportId)=>{
            o("WAWebModalManager").ModalManager.close();
            const a = o("WAWebPrivateMessageComplianceUtils").getPrivateMessageReportComplianceConfig({
                reportId,
                msg: e
            });
            if (a != null) {
                f.load().then((e)=>e.WAWebComplianceReportTrigger(a)).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[reportMessageBlock] compliance modal err: ",
                        ""
                    ])), e).sendLogs("report-message-compliance-error");
                });
            }
            return o("WAWebBlockContactAction").blockContact({
                contact: e_senderObj,
                blockEntryPoint: i,
                skipCtwa1pdNbfSignal: true
            }).then(()=>o("WAWebSmb1pdConversionSignalAction").log1pdBlockAndReportConversionSignal(r)).catch((e)=>{
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Error in blocking while reporting a message: ",
                    ""
                ])), e).sendLogs("report-block-message-error");
            });
        }).catch((e)=>{
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "Error while reporting and blocking a message : ",
                ""
            ])), e).sendLogs("report-block-message-error");
        }).finally(()=>{
            r_promises.reportMessageBlock = null;
        });
        return r_promises.reportMessageBlock;
    }
    l.sendReport = g;
    l.sendMessageReport = h;
    l.sendMessageReportBlock = y;
    l.sendReportBlock = C;
    l.sendSpamExitClear = b;
}, 226);