__d("WAWebSendSignupResponseAction", [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBUpdateMessageTable",
    "WAWebInAppSignupInfoStore",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSignupCTAExperiment",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupQPLLogger",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWidToJid",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    const R = S || (S = o("react"));
    const L = 2000;
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = t.signupContext?.signupId) {
            if (n == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSignupResponse: missing signupId"
                ])));
                return false;
            }
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_CTA_CLICKED,
                signupId: n,
                businessWid: e.id,
                chatTimestamp: e.t
            });
            if (t.signupCtaTapped === true) {
                return false;
            }
            const i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (i == null) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSignupResponse: no meUser"
                ])));
                return false;
            }
            const l = i;
            const g = e.id;
            const h = {
                signup_id: n
            };
            let y;
            try {
                o("WAWebSignupQPLLogger").userRequestStart(n);
                y = {
                    type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                    kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                    ack: o("WAWebAck").ACK.CLOCK,
                    to: g,
                    from: l,
                    id: yield new (r("WAWebMsgKey"))({
                        id: yield r("WAWebMsgKey").newId(),
                        from: l,
                        to: g,
                        participant: undefined,
                        selfDir: "out"
                    }),
                    local: true,
                    isNewMsg: true,
                    t: o("WATimeUtils").unixTime(),
                    interactivePayload: {
                        type: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                        name: r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP,
                        paramsJson: JSON.stringify(h),
                        version: 1
                    },
                    nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP,
                    interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
                    viewMode: "VISIBLE",
                    body: (o("WAWebSignupCTAExperiment").getSignupCTAExperiment() === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("Get offers") : s._("Sign up")).toString()
                };
                t.set({
                    signupCtaTapped: true
                });
                o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
                    signupCtaTapped: true
                });
                o("WAWebSignupFlowLoggerLazy").logSignupOp({
                    operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_REQUEST_SENT,
                    signupId: n,
                    businessWid: e.id,
                    chatTimestamp: e.t
                });
                const C = o("WAWebWidToJid").widToUserJid(e.id);
                const b = yield r("JSResourceForInteraction")("WAWebOptOutUserJob").__setRef("WAWebSendSignupResponseAction").load();
                const v = b.signupUser;
                o("WAWebSignupQPLLogger").userRequestIqStart(n);
                const S = yield v(C, n);
                o("WAWebSignupQPLLogger").userRequestIqEnd(n);
                if (S && S.errorCode != null) {
                    t.set({
                        signupCtaTapped: false
                    });
                    o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
                        signupCtaTapped: false
                    });
                    P();
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:response] IQ error signupId=",
                        " errorCode=",
                        ""
                    ])), n, S.errorCode).sendLogs("signup-response-iq-error");
                    D(e, n);
                    o("WAWebSignupQPLLogger").userRequestFail(n, S.errorKind ?? "server_error");
                    return false;
                }
                yield o("WAWebUserPrefsMultiDevice").setOptOutlistHash(S.listDhash);
                yield o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("updateOptOutListModelInCollection", {
                    targetWid: e.id,
                    isBlocked: false
                });
                o("WAWebInAppSignupInfoStore").saveOptinDate(e.id.toString(), o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT.CHAT_THREAD_BUSINESS);
            } catch (error) {
                t.set({
                    signupCtaTapped: false
                });
                o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, {
                    signupCtaTapped: false
                });
                P();
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:response] IQ exception signupId=",
                    ""
                ])), n).catching(r("getErrorSafe")(error)).sendLogs("signup-response-iq-exception");
                D(e, n);
                o("WAWebSignupQPLLogger").userRequestFail(n, "delivery_failure");
                return false;
            }
            let L = false;
            try {
                const E = yield o("WAWebInAppSignupInfoStore").startPendingConfirmationTimer(e.id.toString(), n);
                if (E === "write_failed") {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:confirmation] timer start failed signupId=",
                        ""
                    ])), n).sendLogs("signup-start-pending-confirmation-failed");
                }
                const k = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, y)[1];
                if (k.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:response] send failed signupId=",
                        " result=",
                        ""
                    ])), n, k.messageSendResult).sendLogs("signup-response-send-failed");
                    D(e, n);
                    o("WAWebSignupQPLLogger").userRequestFail(n, "delivery_failure");
                    yield I(n);
                    return false;
                }
                L = true;
                x(o("WAWebStateUtils").unproxy(e));
                o("WAWebSignupQPLLogger").userRequestSuccess(n);
                o("WAWebSignupQPLLogger").confirmationStart(n);
                return true;
            } catch (error) {
                D(e, n);
                o("WAWebSignupQPLLogger").userRequestFail(n, "delivery_failure");
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSignupResponse: send failure: ",
                    ""
                ])), error);
                if (!L) {
                    yield I(n);
                }
                return false;
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebInAppSignupInfoStore").stopPendingConfirmationTimer(e);
            if (t === "write_failed") {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:confirmation] rollback failed signupId=",
                    ""
                ])), e).sendLogs("signup-rollback-pending-confirmation-failed");
            }
        });
        return T.apply(this, arguments);
    }
    function D(t, n) {
        try {
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_REQUEST_FAILED,
                signupId: n,
                businessWid: t.id,
                chatTimestamp: t.t
            });
        } catch (error) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[signup:response] failed to log request failure signupId=",
                ""
            ])), n).catching(r("getErrorSafe")(error)).sendLogs("signup-request-failed-log-failed");
        }
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                yield o("WAPromiseDelays").delayMs(L);
                if (e.msgs == null || e.contact == null) {
                    return;
                }
                const t = yield (v || (v = n("Promise"))).all([
                    r("JSResourceForInteraction")("WAWebPostSendOptOutSystemMsg").__setRef("WAWebSendSignupResponseAction").load(),
                    r("JSResourceForInteraction")("WAWebGetMessageCache").__setRef("WAWebSendSignupResponseAction").load(),
                    r("JSResourceForInteraction")("WAWebHandleSingleMsgWorkerCompatible").__setRef("WAWebSendSignupResponseAction").load()
                ]);
                const a = t[0].getPostSendOptOutSystemMsg;
                const i = t[1].getMessageCache;
                const l = t[2].handleSingleMsg;
                const s = e.contact.verifiedName || e.contact.pushname || "";
                const u = a(e.id, s);
                i().addMessages([
                    {
                        msg: u
                    }
                ], false).catch(()=>{
                    o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[injectPostSendOptOutSystemMsg] Failed to add to cache"
                    ])));
                });
                l({
                    chatId: u.from,
                    newMsg: u,
                    handleSingleMsgOrigin: "postSendOptOutSystemMsg"
                }).catch(()=>{
                    o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[injectPostSendOptOutSystemMsg] handle sys msg failed"
                    ])));
                });
                o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectPostSendOptOutSystemMsg] System message injected"
                ])));
            } catch (e) {
                o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectPostSendOptOutSystemMsg] Failed"
                ])));
            }
        });
        return $.apply(this, arguments);
    }
    function P() {
        o("WAWebToastManager").ToastManager.open(R.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Something went wrong. Try again.")
        }));
    }
    function N() {
        o("WAWebToastManager").ToastManager.open(R.jsx(o("WAWebToast.react").Toast, {
            msg: s._("This link is no longer valid.")
        }));
    }
    l.sendSignupResponse = E;
    l.showInvalidSignupLinkToast = N;
}, 226);