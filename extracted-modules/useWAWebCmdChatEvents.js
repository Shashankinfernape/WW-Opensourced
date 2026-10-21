__d("useWAWebCmdChatEvents", [
    "WALogger",
    "WAWebAIHatchIdentitySync",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBotDisclaimerManager",
    "WAWebBotFeatureNotAvailable.react",
    "WAWebBotFrontendGating",
    "WAWebBotGating",
    "WAWebBotLogging",
    "WAWebBotLoggingUtils",
    "WAWebBotTosIds",
    "WAWebBotUtils",
    "WAWebChatEntryPoint",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatLockCodeModal.react",
    "WAWebChatLockUtils",
    "WAWebChatLockWAMUtils",
    "WAWebChatOpenMetricsStore",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFrontendMsgGetters",
    "WAWebGetChatLockEntryPoint",
    "WAWebGetOrQueryUsyncInfoContactAction",
    "WAWebHatchFrontendGating",
    "WAWebKeyboardTabUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebLockedChatsDrawer.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebNoop",
    "WAWebPonyfillsIdleCallback",
    "WAWebPttComposerRecordingStopReason",
    "WAWebResetLastActiveSideNavStateAction",
    "WAWebThreadModelResolver",
    "WAWebUpdateEphemeralSettingChatAction",
    "WAWebWamEnumLandingSurface",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "useWAWebHatchChatOpen",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useCallback, useMemo, useRef, useState } = p;
    function useY(t = undefined) {
        const aRef = useRef();
        const iRef = useRef(0);
        const lRef = useRef(r("WAWebNoop"));
        const dRef = useRef(o("WAWebChatEntryPoint").ChatEntryPoint.Initialization);
        const pRef = useRef(r("WAWebNoop"));
        const y = useState(t);
        const C = y[0];
        const b = y[1];
        const v = useState();
        const msgCollection = v[0];
        const R = v[1];
        const L = useState();
        const focusContext = L[0];
        const k = L[1];
        const I = useState();
        const T = I[0];
        const D = I[1];
        const x = useMemo(function() {
            if (C != null && T != null) {
                return o("WAWebThreadModelResolver").resolveThreadOrChat(C, T);
            }
            return null;
        }, [
            C,
            T
        ]);
        const $ = useCallback(function(e, t, n, r) {
            b(e);
            R(t);
            k(n);
            D(r);
        }, []);
        const P = useCallback((()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, chatEntryPoint, isSuperseded, msgContext, onComplete, threadId }) {
                if (!o("WAWebChatLockUtils").chatIsAccessible(chat)) {
                    const v = o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(chatEntryPoint);
                    const unlockEntryPoint = o("WAWebChatLockWAMUtils").actionEntryPointToUnlockEntryPoint(o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(chatEntryPoint));
                    const R = yield o("WAWebChatLockCodeModal.react").waitForChatlockSecretCode({
                        unlockAppOnSuccess: true,
                        landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.THREAD,
                        unlockEntryPoint,
                        entryPoint: v
                    });
                    if (!R) {
                        return;
                    }
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(m.jsx(r("WAWebLockedChatsDrawer.react"), {
                        entryPoint: v,
                        unlockEntryPoint,
                        focusOnMount: false
                    }), {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                        transition: "flow-transition-drawer-pop"
                    });
                }
                if (chat.id.isBot()) {
                    if (o("WAWebBotFrontendGating").isBotChatUnavailable(chat.id)) {
                        o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBotFeatureNotAvailable.react"), {}));
                        return;
                    }
                    const L = o("WAWebBotUtils").isMetaAiBot(chat.id);
                    const botEntryPoint = o("WAWebBotLogging").getBotEntryPoint(chatEntryPoint);
                    const k = o("WAWebBotTosIds").getApplicableBotNoticeId(botEntryPoint);
                    if (!chat.id.isFbidBot() || L) {
                        try {
                            yield o("WAWebBotDisclaimerManager").enterBotTosFlow({
                                noticeId: String(k),
                                botEntryPoint,
                                chat,
                                wamEntryPoint: o("WAWebBotLoggingUtils").getBotEntryPoint(chatEntryPoint) ?? o("WAWebBotLogging").getWamBotEntryPoint(botEntryPoint)
                            });
                        } catch (error) {
                            if (error !== o("WAWebBotDisclaimerManager").TOS_ACCEPTANCE_NOT_SUPPORTED_ERROR) {
                                return;
                            }
                        }
                    }
                    if (!o("WAWebBotDisclaimerManager").canShowLegacyBotNux(String(k))) {
                        o("WAWebChatGroupUtils").updateCanSend(chat);
                    }
                    if (o("WAWebBotUtils").isHatchBot(chat.id) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
                        o("WAWebAIHatchIdentitySync").syncHatchContactIdentity({
                            contact: chat.contact,
                            wid: chat.id
                        });
                    }
                }
                if (isSuperseded?.() !== true) {
                    if (C !== chat && !o("WAWebBotGating").shouldSkipMetaAiChatlistHighlight(chat.id, threadId)) {
                        o("WAWebCmd").Cmd.updateChatlistSelection(chat);
                    }
                    const D = aRef.current;
                    const x = {};
                    aRef.current = x;
                    pRef.current = function(e) {
                        Object.assign(x, e);
                    };
                    if (!r("gkx")("26258")) {
                        if (msgContext) {
                            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "msgContext.collection length: ",
                                ""
                            ])), msgContext.collection?.length);
                        } else {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "chat.msgs length: ",
                                ""
                            ])), chat.msgs.length);
                        }
                    }
                    const N = msgContext ? msgContext.collection : o("WAWebThreadModelResolver").resolveThreadOrChat(chat, threadId).msgs;
                    iRef.current++;
                    const M = iRef.current;
                    const w = ()=>M === iRef.current;
                    dRef.current = chatEntryPoint;
                    let A = false;
                    const F = (t, msgContext)=>{
                        const e = msgContext ? msgContext.msg || msgContext.key && o("WAWebMsgCollection").MsgCollection.get(msgContext.key.toString()) : undefined;
                        if (msgContext && e && t) {
                            const { chat, renderedMsgsInfo, visibleMsgOrder } = t;
                            if (chat && renderedMsgsInfo && visibleMsgOrder && Object.keys(renderedMsgsInfo).length > 0 && visibleMsgOrder.length > 0) {
                                const l = renderedMsgsInfo[visibleMsgOrder[0].toString()];
                                const s = e.id.toString();
                                const u = Object.entries(renderedMsgsInfo).find(([t])=>t === s);
                                const c = u ? u[1] : null;
                                if (c) {
                                    return {
                                        wasVisible: true,
                                        offset: c.offset
                                    };
                                }
                                if (chat === o("WAWebFrontendMsgGetters").getChat(e)) {
                                    if (l && e.t < l.t) {
                                        return {
                                            wasVisible: false,
                                            alignAt: "top"
                                        };
                                    }
                                    return {
                                        wasVisible: false,
                                        alignAt: "bottom"
                                    };
                                }
                            }
                        }
                        return {
                            wasVisible: false,
                            alignAt: "center"
                        };
                    };
                    const O = ()=>{
                        if (w()) {
                            A = true;
                            onComplete(F(D, msgContext));
                        }
                    };
                    const B = msgContext?.msg?.id || msgContext?.key;
                    lRef.current = function(e) {
                        if (!(A || !w())) {
                            if (!B) {
                                O();
                                return;
                            }
                            const t = e.some((e)=>e.id.equals(B));
                            if (t) {
                                O();
                            }
                        }
                    };
                    if (chat === C && threadId !== T && chat.pttRecordingSession != null) {
                        o("WAWebPttComposerRecordingStopReason").cancelChatRecordingForThreadSwitch(chat);
                    }
                    o("WAWebChatOpenMetricsStore").startChatOpenMetrics(chat);
                    $(chat, N, msgContext, threadId);
                    if (chat.contact.isEnterprise == null && o("WAWebChatGetters").getIsUser(chat) && !r("WAWebWid").isPSA(chat.contact.id) && !chat.id.isBot()) {
                        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[usync] Getting usync info for contact while opening the chat"
                            ])));
                            o("WAWebGetOrQueryUsyncInfoContactAction").queryUsyncBusiness(chat.id);
                        });
                    }
                    if (chat.contact.isEnterprise && o("WAWebChatEphemerality").isEphemeralSettingOn(chat)) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[DM] auto-disabling DM due to chat being with CAPI account"
                        ])));
                        o("WAWebUpdateEphemeralSettingChatAction").setChatAsEphemeralityUnsupported(chat);
                    }
                    if (o("WAWebBizAiAgentGating").isAiAgentAutoReplyEnabled() && o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(chat)) {
                        chat.setForceDismissAiAgentBlockingBar(false);
                    }
                    o("WAWebLimitSharingUIUtils").maybeOpusProcessChatOnOpen(chat);
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })(), [
            C,
            $,
            T
        ]);
        const N = useCallback(function() {
            $(undefined, undefined, undefined, undefined);
        }, [
            $
        ]);
        const M = useCallback(function(e) {
            o("WAWebResetLastActiveSideNavStateAction").resetLastActiveSideNavStateForChat(e);
            if (e === C) {
                N();
                e.setForceDismissAiAgentBlockingBar(false);
            }
        }, [
            C,
            N
        ]);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", P);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", M);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_active_chat", N);
        const w = function({ cmc1, cmc2, cmcResult, newFocusCtx }) {
            const a = msgCollection;
            if (a === cmc1 || a === cmc2) {
                R(cmcResult);
                k(newFocusCtx && (newFocusCtx.msg || newFocusCtx.collection) ? newFocusCtx : focusContext);
            }
        };
        o("useWAWebListener").useListener(C, "change:cmc:merge", w);
        o("useWAWebListener").useListener(x !== C ? x : null, "change:cmc:merge", w);
        r("useWAWebHatchChatOpen")(C);
        return useMemo(function() {
            return {
                chat: C,
                msgCollection,
                focusContext,
                chatEntryPointRef: dRef,
                notifyChatRenderedRef: lRef,
                updateOpenedChatInfoRef: pRef,
                threadId: T
            };
        }, [
            C,
            msgCollection,
            focusContext,
            T
        ]);
    }
    l.useCmdChatEvents = useY;
}, 98);