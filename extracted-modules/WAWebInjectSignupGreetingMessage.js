__d("WAWebInjectSignupGreetingMessage", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCmd",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebFindChatAction",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebInAppSignupInfoStore",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebSendMsgChatAction",
    "WAWebSendSignupResponseAction",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupGreetingActionShared",
    "WAWebSignupLoadingState",
    "WAWebSignupMetadataFetcher",
    "WAWebSignupQPLLogger",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, i) {
            let l;
            o("WAWebSignupQPLLogger").deepLinkStart(a);
            let businessWid;
            try {
                businessWid = o("WAWebWidFactory").createWid(t);
            } catch (error) {
                o("WAWebSignupQPLLogger").deepLinkFail(a, "invalid_phone");
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:greeting] invalid phone signupId=",
                    " phone=",
                    ""
                ])), a, t).catching(r("getErrorSafe")(error)).sendLogs("signup-greeting-invalid-phone");
                return;
            }
            const f = businessWid.toString();
            o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(f, a);
            try {
                o("WAWebSignupFlowLoggerLazy").logSignupOp({
                    operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.DEEP_LINK_PARSED,
                    signupId: a,
                    businessWid
                });
                const y = yield (p || (p = n("Promise"))).all([
                    o("WAWebFindChatAction").findOrCreateLatestChat(businessWid, "signupAGM"),
                    n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        o("WAWebSignupQPLLogger").deepLinkMetadataFetchStart(a);
                        try {
                            return yield o("WAWebSignupMetadataFetcher").fetchSignupMetadata(a, businessWid.user);
                        } finally{
                            o("WAWebSignupQPLLogger").deepLinkMetadataFetchEnd(a);
                        }
                    })().catch((e)=>{
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[signup:greeting] metadata step threw signupId=",
                            ""
                        ])), a).catching(r("getErrorSafe")(e)).sendLogs("signup-greeting-metadata-instrumentation-failed");
                        return {
                            metadata: null,
                            reason: "instrumentation_error"
                        };
                    })
                ]);
                const C = y[0].chat;
                const b = y[1];
                const v = b.metadata;
                l = C.id.toString();
                if (l !== f) {
                    o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(f);
                    o("WAWebSignupGreetingActionShared").inFlightDeepLinks.set(l, a);
                }
                const S = o("WAWebSignupGreetingActionShared").isChatSafeToDelete(C);
                if (v == null) {
                    o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(l);
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:greeting] metadata null signupId=",
                        " phone=",
                        ""
                    ])), a, t).sendLogs("signup-greeting-metadata-null");
                    if (S && (C.draftMessage == null || C.draftMessage.text === "")) {
                        o("WAWebCmd").Cmd.closeChat(C);
                        o("WAWebSignupGreetingActionShared").deleteSignupChat(C);
                    }
                    o("WAWebSendSignupResponseAction").showInvalidSignupLinkToast();
                    o("WAWebSignupLoadingState").setSignupLoading(l, false);
                    if (!o("WAWebSignupGreetingActionShared").cancelledSignups.delete(a)) {
                        o("WAWebSignupQPLLogger").deepLinkFail(a, b.reason ?? "invalid_response");
                    }
                    return;
                }
                o("WAWebSignupFlowLoggerLazy").logSignupOp({
                    operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.LAND_ON_CHAT_THREAD,
                    signupId: a,
                    businessWid: C.id,
                    chatTimestamp: C.t
                });
                if (!o("WAWebSignupGreetingActionShared").signupCardInjectedChats.has(l)) {
                    o("WAWebSignupGreetingActionShared").signupCardInjectedChats.add(l);
                    try {
                        const L = C.msgs.getModelsArray().some((e)=>e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard);
                        if (S && !L) {
                            const E = yield o("WAWebContactSystemMsg").genContactInfoCardMsg(C.id, {
                                isSmb: false,
                                isEnterprise: false,
                                iAmStartingChat: true,
                                isWASupportStartingChat: false,
                                isFromCTWA: false,
                                isFMXCtWA: false,
                                isSignupDeeplink: true
                            });
                            if (E != null) {
                                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                                    chatId: C.id,
                                    newMsg: E,
                                    handleSingleMsgOrigin: "signupAGM"
                                });
                                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "[injectSignupGreetingMessage] contact info card injected"
                                ])));
                            }
                        }
                    } catch (error) {
                        o("WAWebSignupGreetingActionShared").signupCardInjectedChats.delete(l);
                        throw error;
                    }
                }
                const k = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                const I = {
                    type: o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
                    kind: o("WAWebMsgType").MsgKind.AutomatedGreetingMessage,
                    subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                    ack: o("WAWebAck").ACK.READ,
                    from: C.id,
                    author: C.id,
                    id: new (r("WAWebMsgKey"))({
                        fromMe: false,
                        remote: C.id,
                        id: yield r("WAWebMsgKey").newId(),
                        participant: undefined
                    }),
                    local: false,
                    isNewMsg: true,
                    t: o("WATimeUtils").unixTime(),
                    to: k,
                    body: v.signupMessage,
                    signupContext: {
                        signupId: v.signupId,
                        privacyPolicyUrl: v.privacyPolicyUrl
                    }
                };
                yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(C, I)[1];
                o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(l);
                if (o("WAWebSignupGreetingActionShared").cancelledSignups.delete(a)) {
                    o("WAWebSignupLoadingState").setSignupLoading(l, false);
                    return;
                }
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[injectSignupGreetingMessage] AGM injected id=",
                    ""
                ])), a);
                o("WAWebSignupFlowLoggerLazy").logSignupOp({
                    operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_INJECTED,
                    signupId: a,
                    businessWid: C.id,
                    chatTimestamp: C.t
                });
                o("WAWebInAppSignupInfoStore").saveEntryPoint(C.id.toString(), g(i));
                o("WAWebSignupLoadingState").setSignupLoading(l, false);
                o("WAWebSignupQPLLogger").deepLinkSuccess(a);
            } catch (error) {
                if (l != null) {
                    o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(l);
                } else {
                    o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(f);
                }
                if (!o("WAWebSignupGreetingActionShared").cancelledSignups.delete(a)) {
                    o("WAWebSignupQPLLogger").deepLinkFail(a, h());
                }
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:greeting] injection failed signupId=",
                    " phone=",
                    ""
                ])), a, t).catching(r("getErrorSafe")(error)).sendLogs("signup-greeting-injection-failed");
                if (l != null) {
                    o("WAWebSignupLoadingState").setSignupLoading(l, false);
                } else {
                    o("WAWebSignupLoadingState").setSignupLoading(f, false);
                }
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        const n = new Map([
            [
                "ctwa_signup_agentic",
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT.CTWA_SIGNUP_AGENTIC
            ],
            [
                "ctwa_signup_manual",
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT.CTWA_SIGNUP_MANUAL
            ]
        ]);
        return n.get(e ?? "") ?? o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT.EXTERNAL;
    }
    function h() {
        if (r("WAWebNetworkStatus").online) {
            return "agm_injection_failed";
        }
        return "network_error";
    }
    l.injectSignupGreetingMessage = _;
}, 98);