__d("WAWebGetInteractiveActionsFromButtons", [
    "fbt",
    "WALogger",
    "WAWebApiVerifiedBusinessName",
    "WAWebBizAiAgentGating",
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebBizAiHubReplyButtonUtils",
    "WAWebBizAiKnowledgeReviewDrawerLoadable.react",
    "WAWebBizAiPaymentRequestWamLogger",
    "WAWebBizInteractiveMessageQuickReplyAction",
    "WAWebBizMessageOpenCallModal",
    "WAWebBizOpenBookingConfirmationDrawer.react",
    "WAWebBizOpenOrderStatusDrawer.react",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebBrLastUsedPaymentMethodStoreLazy",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebCarouselMsgUtils",
    "WAWebChatGetters",
    "WAWebCloudApiSignalLogger",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebCopyTextWithToast",
    "WAWebCouponCodeHelper",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebExternalLinkPopup.react",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebGetGalaxyFlowsActionFromButton",
    "WAWebInAppSignupConfirmation",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMAIBAPrimaryRedirectPopup.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingShowDisclosureModal",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUIUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebMuseCtaLinkOverride",
    "WAWebOpenBizAiHubDeeplink",
    "WAWebOrderStatus",
    "WAWebPaymentRequestWamLogger",
    "WAWebPremiumMessagesGatingUtils",
    "WAWebQbmMessageClickLogEvent",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebRichOrderStatusLogger",
    "WAWebSendNativeFlowMenuOptionsResponse",
    "WAWebSendSignupResponseAction",
    "WAWebSendTextMsgChatAction",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSmbPaidMessagesButtonLoggerWamEvent",
    "WAWebWamEnumCloudApiSignalCtaAction",
    "WAWebWamEnumCloudApiSignalTemplateType",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumPmButtonEventType",
    "WAWebWamEnumPmButtonType",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WDSIconIcCall.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcOpenInNew.react",
    "WDSIconIcReply.react",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    function g(e, t, n, a = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface.INLINE_CTA) {
        const i = [];
        for (const l of e){
            let s;
            const u = o("WAWebBizTemplateAndInteractiveMessagesUtils").getNativeFlowNameByButtonName(l.name);
            if (u != null) {
                switch(u){
                    case r("WAWebInteractiveMessagesNativeFlowName").CTA_URL:
                        s = y(l, t, n);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").CTA_CALL:
                        s = k(l, t);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").QUICK_REPLY:
                        s = E(l, t, n);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").CTA_CATALOG:
                        s = I(l, t);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").CATALOG_MESSAGE:
                        s = I(l, t);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").CTA_COPY_CODE:
                        s = T(l, t);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").CTA_APP:
                        s = b(l, t);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW:
                        s = o("WAWebGetGalaxyFlowsActionFromButton").getCtaFlowInteractiveActionFor(l, t, {
                            chat: n.chat,
                            galaxyFlowDisabled: n.galaxyFlowDisabled,
                            isFlowDisabledForSender: n.isSentByMe
                        });
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS:
                        s = D(l, t);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER:
                        s = w(l);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").BOOKING_CONFIRMATION:
                        s = A(l, t);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST:
                        s = F(l, t, n, a);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP:
                        s = L(l, t, n);
                        break;
                    case r("WAWebInteractiveMessagesNativeFlowName").OFFER_PAYMENT_ACCOUNT:
                    case r("WAWebInteractiveMessagesNativeFlowName").FORM_MESSAGE:
                    case r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS:
                    case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS:
                    case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD:
                    case r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK:
                    case r("WAWebInteractiveMessagesNativeFlowName").MESSAGE_WITH_LINK_STATUS:
                    case r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO:
                    case r("WAWebInteractiveMessagesNativeFlowName").BR_PAYMENT_STATE:
                    case r("WAWebInteractiveMessagesNativeFlowName").MIXED:
                    case r("WAWebInteractiveMessagesNativeFlowName").CALL_PERMISSION_REQUEST:
                    case r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP:
                    case r("WAWebInteractiveMessagesNativeFlowName").MENU_OPTIONS:
                    case r("WAWebInteractiveMessagesNativeFlowName").A2UI_REPLY_ACTION:
                        break;
                }
                if (s != null) {
                    i.push(s);
                }
            }
        }
        return i;
    }
    function h(t) {
        const r = o("WAWebMsgCollection").MsgCollection.get(t)?.safe();
        if (r != null && r.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
            return r;
        }
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[interactive-actions] button click skipped, message left the collection"
        ])));
        return null;
    }
    function y(e, t, { chat }) {
        const url = e.data.url;
        if (url != null) {
            const l = url.startsWith(o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME);
            const s = url.startsWith("whatsapp-smb://") && o("WAWebContactGetters").getIsAiHub(chat.contact);
            const u = url.startsWith(o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_REVIEW_KNOWLEDGE_DEEPLINK);
            if (u && o("WAWebBizAiAgentGating").isAiAgentAutoSaveEnabled()) {
                return {
                    label: e.data.label,
                    onClick: function() {
                        o("WAWebDrawerManager").DrawerManager.openDrawerRight(f.jsx(o("WAWebBizAiKnowledgeReviewDrawerLoadable.react").WAWebBizAiKnowledgeReviewDrawerLoadable, {
                            url
                        }));
                    },
                    testid: "biz-ai-review-knowledge-cta"
                };
            }
            if (l || s) {
                return {
                    label: e.data.label,
                    onClick: function() {
                        if (!(l && o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(url))) {
                            if (s) {
                                o("WAWebModalManager").ModalManager.open(f.jsx(r("WAWebMAIBAPrimaryRedirectPopup.react"), {}));
                                return;
                            }
                            const n = h(t);
                            if (n != null) {
                                v({
                                    btn: e,
                                    msg: n,
                                    eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                                    defaultUrl: url,
                                    onLinkReady: function(r, o, a) {
                                        S({
                                            btn: e,
                                            chat: r,
                                            ctaLink: o,
                                            hasShownDisclosure: a,
                                            msg: n
                                        });
                                    }
                                });
                            }
                        }
                    },
                    Icon: r("WDSIconIcOpenInNew.react"),
                    testid: "cta-url-button"
                };
            }
            return {
                label: e.data.label,
                onClick: function() {
                    const n = h(t);
                    if (n != null) {
                        C(n);
                        v({
                            btn: e,
                            msg: n,
                            eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                            defaultUrl: e.data.url,
                            onLinkReady: function(r, o, a) {
                                S({
                                    btn: e,
                                    chat: r,
                                    ctaLink: o,
                                    hasShownDisclosure: a,
                                    msg: n
                                });
                            }
                        });
                    }
                },
                Icon: r("WDSIconIcOpenInNew.react"),
                testid: "cta-url-button"
            };
        }
    }
    function C(e) {
        if (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP) {
            const t = o("WAWebInAppSignupConfirmation").getInAppSignupConfirmationInfo(e);
            if (t != null) {
                const n = o("WAWebFrontendMsgGetters").getChat(e.unsafe());
                o("WAWebSignupFlowLoggerLazy").logWebsiteCtaClicked({
                    signupId: t.signupId,
                    businessWid: n.id,
                    chatTimestamp: n.t
                });
            }
        }
    }
    function b(e, t) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingAppCtaEnabled()) {
            let defaultUrl;
            try {
                const l = JSON.parse(e.data.buttonParamsJson ?? "{}");
                defaultUrl = l.url ?? e.data.url;
            } catch (t) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getCtaAppInteractiveAction: buttonParamsJson parse failed"
                ])));
                defaultUrl = e.data.url;
            }
            if (defaultUrl != null) {
                return {
                    label: e.data.label,
                    onClick: function() {
                        const r = h(t);
                        if (r != null) {
                            v({
                                btn: e,
                                msg: r,
                                eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK,
                                defaultUrl,
                                skipUrlRewrite: true,
                                onLinkReady: function(n, a, i) {
                                    o("WAWebExternalLink.react").openExternalLink(a);
                                    x(e, r);
                                    o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingLinkClickEvent({
                                        eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK,
                                        linkTypeIndex: e.index,
                                        msg: r.unsafe(),
                                        chat: n,
                                        hasShownDisclosure: i,
                                        mmCarouselCardIndex: P(r.unsafe())
                                    });
                                }
                            });
                        }
                    },
                    Icon: r("WDSIconIcOpenInNew.react"),
                    testid: "cta-app-button"
                };
            }
        }
    }
    function v({ btn, defaultUrl, eventType, msg, onLinkReady, skipUrlRewrite = false }) {
        const u = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
        o("WAWebMmSignalSharingShowDisclosureModal").showDisclosureModalForMm(u, msg.unsafe(), eventType).then((e)=>{
            const l = ()=>{
                if (skipUrlRewrite) {
                    return defaultUrl;
                }
                return o("WAWebMmSignalSharingModelUtils").getCTALinkForMmSignalSharing({
                    chat: u,
                    msg: msg.unsafe(),
                    btnIndex: btn.index,
                    isMmSignalSharingDisclosureTosAccepted: o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted(),
                    defaultUrl
                });
            };
            const c = l();
            if (c != null) {
                if (e) {
                    o("WAWebMmSignalSharingUIUtils").openMmSignalSharingDisclosureModal({
                        eventType,
                        chat: u,
                        onOk: function() {
                            const e = l();
                            if (e != null) {
                                onLinkReady(u, e, true);
                            }
                        },
                        onCancel: function(isExplicitCancel) {
                            return o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingDisclosureCancelEvent({
                                eventType,
                                chat: u,
                                msg: msg.unsafe(),
                                isExplicitCancel
                            });
                        },
                        onDismissed: function() {
                            const e = l();
                            if (e != null) {
                                onLinkReady(u, e, false);
                            }
                        }
                    });
                } else {
                    onLinkReady(u, c, false);
                }
            }
        });
    }
    function S({ btn, chat, ctaLink, hasShownDisclosure = false, msg }) {
        if (o("WAWebPremiumMessagesGatingUtils").isPremiumMessagesUrlCtaDialogEnabled() && !hasShownDisclosure) {
            RComponent({
                btn,
                chat,
                ctaLink,
                hasShownDisclosure,
                msg
            });
        } else {
            if (ctaLink == null) {
                return;
            }
            o("WAWebExternalLink.react").openExternalLink(ctaLink);
            x(btn, msg);
            const s = msg.unsafe();
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                msg: s,
                chat,
                buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
                nativeFlowName: btn.name
            });
            o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingLinkClickEvent({
                eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                linkTypeIndex: btn.index,
                msg: s,
                chat,
                hasShownDisclosure,
                mmCarouselCardIndex: P(s)
            });
            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                msg: s,
                chat,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
            });
        }
    }
    function RComponent({ btn, chat, ctaLink, hasShownDisclosure, msg }) {
        const Component = r("WAWebExternalLinkPopup.react");
        o("WAWebModalManager").ModalManager.open(<Component url={o("WAWebMuseCtaLinkOverride").overrideCtaUrlIfNeeded(ctaLink)} merchantUrl={btn.data.merchantUrl ?? btn.data.url ?? ""} verifyTrackableLink={o("WAWebMsgGetters").getIsMarketingMessage(msg)} onOkClick={function() {
            x(btn, msg);
            const e = msg.unsafe();
            o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                msg: e,
                chat,
                buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.URL,
                nativeFlowName: btn.name
            });
            o("WAWebMmSignalSharingLoggingEvents").logMmSignalSharingLinkClickEvent({
                eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK,
                linkTypeIndex: btn.index,
                msg: e,
                chat,
                hasShownDisclosure,
                mmCarouselCardIndex: P(e)
            });
            o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                msg: e,
                chat,
                messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
            });
        }}/>, {
            transition: "modal-flow"
        });
    }
    function L(e, t, { chat, signupCtaTapped }) {
        const signupId = e.data.signupId;
        if (signupId == null) {
            return null;
        }
        return {
            label: e.data.label,
            Icon: r("WDSIconIcReply.react"),
            disabled: signupCtaTapped === true,
            onClick: function() {
                const e = h(t);
                if (e != null) {
                    o("WAWebSendSignupResponseAction").sendSignupResponse(chat, e, signupId);
                }
            },
            testid: "signup-prompt-cta"
        };
    }
    function E(e, t, { chat, isOutgoingBizBot, nativeFlowName }) {
        const u = e.data.disabled === true || isOutgoingBizBot;
        const d = o("WAWebSendNativeFlowMenuOptionsResponse").shouldUseNativeFlowMenuOptionsResponse(chat.id, nativeFlowName);
        const m = e.data.selectionId != null && o("WAWebBizAiHubReplyButtonUtils").isPrimaryOnlyBizAiHubReplyButton(e.data.selectionId);
        return {
            label: e.data.label,
            Icon: d ? undefined : r("WDSIconIcReply.react"),
            disabled: u,
            onClick: function() {
                const n = h(t);
                if (n != null) {
                    const i = n.unsafe();
                    if (i.id.fromMe && o("WAWebChatGetters").getIsBroadcast(chat)) {
                        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                        o("WAWebModalManager").ModalManager.openAlert(<Component okText={r("WAWebFbtCommon")("OK")} onOK={function() {
                            return o("WAWebModalManager").ModalManager.closeAlert();
                        }} testid="broadcast_quick_reply_info_alert">{s._("When your receiver taps this button, they'll send you a reply message with the same text.")}</Component>);
                        return;
                    }
                    if (m && o("WAWebContactGetters").getIsAiHub(chat.contact)) {
                        o("WAWebModalManager").ModalManager.open(f.jsx(r("WAWebMAIBAPrimaryRedirectPopup.react"), {}));
                        return;
                    }
                    if (n.isCarouselCard) {
                        N(e, i);
                    } else if (d) {
                        o("WAWebSendNativeFlowMenuOptionsResponse").sendNativeFlowMenuOptionsResponse(chat, i, {
                            label: e.data?.label,
                            selectionId: e.data?.selectionId
                        });
                    } else {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "getQuickReplyInteractiveAction called"
                        ])));
                        o("WAWebSendTextMsgChatAction").sendTextMsgToChat(chat, e.data?.label, {
                            quotedMsg: i,
                            selectedIndex: e.index,
                            selectedId: e.data?.selectionId
                        });
                    }
                    x(e, n);
                    o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                        msg: i,
                        chat,
                        buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.QUICK_REPLY,
                        nativeFlowName: e.name
                    });
                    o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                        msg: i,
                        chat,
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                        messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                    });
                    o("WAWebBizInteractiveMessageQuickReplyAction").markInteractiveButtonClicked(i, e.index);
                }
            }
        };
    }
    function k(e, t) {
        return {
            label: e.data?.label,
            onClick: function() {
                r("WAWebBizMessageOpenCallModal")();
                const n = h(t);
                if (n != null) {
                    x(e, n);
                    const a = n.unsafe();
                    const i = o("WAWebFrontendMsgGetters").getChat(a);
                    o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                        msg: a,
                        chat: i,
                        buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.PHONE_NUMBER,
                        nativeFlowName: e.name
                    });
                    o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                        msg: a,
                        chat: i,
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                        messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                    });
                }
            },
            Icon: r("WDSIconIcCall.react")
        };
    }
    function I(e, t) {
        return {
            label: e.data.label,
            onClick: function() {
                if (e.data.catalogUrl != null) {
                    o("WAWebExternalLink.react").openExternalLink(e.data.catalogUrl);
                    const n = h(t);
                    if (n != null) {
                        const r = n.unsafe();
                        const a = o("WAWebFrontendMsgGetters").getChat(r);
                        o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                            msg: r,
                            chat: a,
                            buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.CATALOG,
                            nativeFlowName: e.name
                        });
                        o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                            msg: r,
                            chat: a,
                            messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.BUTTON_CLICK,
                            messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                        });
                    }
                }
            }
        };
    }
    function T(e, t) {
        return {
            label: e.data.label,
            onClick: function() {
                o("WAWebCouponCodeHelper").copyCouponCodeGivenCode(e.data.copyCode);
                const n = h(t);
                if (n != null) {
                    const r = n.unsafe();
                    const a = o("WAWebFrontendMsgGetters").getChat(r);
                    o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                        msg: r,
                        chat: a,
                        buttonClickedType: o("WAWebWamEnumQbmMessageClickButtonClickedType").QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.COPY_CODE,
                        nativeFlowName: e.name
                    });
                    o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                        msg: r,
                        chat: a,
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION.COPY,
                        messageActionEntryPoint: o("WAWebWamEnumMessageActionEntryPoint").MESSAGE_ACTION_ENTRY_POINT.CHATLIST
                    });
                }
            },
            Icon: r("WDSIconIcContentCopy.react")
        };
    }
    function D({ data }, t) {
        const { label, orderStatusButton } = data;
        if (orderStatusButton != null) {
            const l = orderStatusButton.order.tracking;
            if (l == null || !o("WAWebOrderStatus").shouldShowTrackingInfo(orderStatusButton)) {
                return {
                    label,
                    onClick: function() {
                        const e = h(t);
                        if (e != null) {
                            const n = e.unsafe();
                            const r = o("WAWebFrontendMsgGetters").getChat(n);
                            o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(n, o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.MESSAGE_CTA_CLICK);
                            o("WAWebBizOpenOrderStatusDrawer.react").openOrderStatusDrawer(orderStatusButton, r, e);
                        }
                    }
                };
            }
            return {
                label,
                Icon: function(t) {
                    return f.jsx(r("WDSIconIcOpenInNew.react"), babelHelpers.extends({}, t, {
                        height: 18
                    }));
                },
                onClick: function() {
                    const e = h(t);
                    if (e != null) {
                        o("WAWebRichOrderStatusLogger").logRichOrderStatusInteraction(e.unsafe(), o("WAWebRichOrderStatusLogger").RichOrderStatusActionType.MESSAGE_CTA_CLICK);
                    }
                    o("WAWebExternalLink.react").openExternalLink(l.tracking_url);
                }
            };
        }
    }
    function x(e, t) {
        if (o("WAWebMsgGetters").getIsMarketingMessage(t)) {
            new (o("WAWebSmbPaidMessagesButtonLoggerWamEvent")).SmbPaidMessagesButtonLoggerWamEvent({
                businessPhoneNumber: Number(t.from.user),
                pmButtonCount: t.buttons?.length,
                pmButtonEventType: o("WAWebWamEnumPmButtonEventType").PM_BUTTON_EVENT_TYPE.CLICK,
                pmButtonIndex: e.index,
                pmButtonType: $(e),
                pmServerCampaignId: t.pmCampaignId
            }).commit();
        }
    }
    function $(e) {
        switch(e.name){
            case "cta_url":
                return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_URL;
            case "cta_call":
                return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_CALL;
            case "quick_reply":
                return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.QUICK_REPLY;
            case "cta_catalog":
                return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_CATALOG;
            case "cta_app":
                return o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE.CTA_URL;
            case "cta_copy":
                throw r("err")("CTA_COPY is not supported for Paid Messaging logging yet");
            case "galaxy_message":
                throw r("err")("GALAXY_MESSAGE is not supported for WA Web logging yet");
            case "order_status":
                throw r("err")("ORDER_STATUS is not supported for WA Web logging yet");
            case "payment_reminder":
                throw r("err")("PAYMENT_REMINDER is not supported for WA Web logging yet");
            case "booking_confirmation":
                throw r("err")("BOOKING_CONFIRMATION is not supported for WA Web logging yet");
            case "payment_request":
                throw r("err")("PAYMENT_REQUEST is not supported for WA Web logging yet");
            case "api_signup":
                throw r("err")("API_SIGNUP is not supported for WA Web logging yet");
        }
    }
    function P(e) {
        if (e.isCarouselCard) {
            const t = o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e);
            if (t != null) {
                const n = t.carouselCards;
                if (n != null) {
                    const r = n.indexOf(e);
                    if (r === -1) {
                        return undefined;
                    }
                    return r;
                }
            }
        }
    }
    function N(e, t) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const i = r("nullthrows")(o("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(t));
            const l = o("WAWebFrontendMsgGetters").getChat(i);
            const s = r("nullthrows")(i.carouselCards, "Parent of carousel card does not have carouselCards field.").slice();
            const selectedCarouselCardIndex = s.indexOf(t);
            if (selectedCarouselCardIndex === -1) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sendTextMsgToChatForReplyToCarouselCard: card not found"
                ])));
                return;
            }
            const c = new (o("WAWebMsgModel")).Msg(t);
            c.id = i.id;
            return o("WAWebSendTextMsgChatAction").sendTextMsgToChat(l, e.data?.label, {
                quotedMsg: c,
                selectedIndex: e.index,
                selectedId: e.data?.selectionId,
                selectedCarouselCardIndex
            });
        });
        return M.apply(this, arguments);
    }
    function w({ data }) {
        const { label, paymentReminderInfo } = data;
        if (paymentReminderInfo == null || paymentReminderInfo.url == null) {
            return null;
        }
        return {
            label,
            Icon: function(t) {
                return f.jsx(r("WDSIconIcOpenInNew.react"), babelHelpers.extends({}, t, {
                    height: 18
                }));
            },
            onClick: function() {
                o("WAWebExternalLink.react").openExternalLink(paymentReminderInfo.url);
            }
        };
    }
    function A({ data }, t) {
        const { bookingInfo, label } = data;
        if (bookingInfo == null) {
            return null;
        }
        return {
            label,
            onClick: function() {
                const e = h(t);
                if (e != null) {
                    o("WAWebBizOpenBookingConfirmationDrawer.react").openBookingConfirmationDrawer(bookingInfo, e);
                }
            },
            testid: "booking-confirmation-view-details-button"
        };
    }
    function F(e, t, { isFromTemplate }, a) {
        if (!o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(isFromTemplate === true)) {
            return null;
        }
        const paymentRequestInfo = e.data.paymentRequestInfo;
        if (paymentRequestInfo == null) {
            return null;
        }
        switch(paymentRequestInfo.paymentType){
            case o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO:
                {
                    const u = paymentRequestInfo.digitableLine;
                    if (u == null) {
                        return null;
                    }
                    return {
                        label: s._("Copy boleto code"),
                        onClick: function() {
                            const n = h(t);
                            if (n != null) {
                                o("WAWebCopyTextWithToast").copyTextWithToast({
                                    failureMsg: s._("Couldn't copy boleto code"),
                                    onSuccess: function() {
                                        O(n, o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO, a);
                                        o("WAWebBrLastUsedPaymentMethodStoreLazy").recordLastUsedBrPaymentMethodLazy(n, o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.BOLETO);
                                        q(e, n, o("WAWebWamEnumCloudApiSignalCtaAction").CLOUD_API_SIGNAL_CTA_ACTION.COPY_BOLETO_CODE);
                                    },
                                    successMsg: s._("Boleto code copied"),
                                    text: u
                                });
                            }
                        },
                        Icon: r("WDSIconIcContentCopy.react")
                    };
                }
            case o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE:
                {
                    const { code, pixFlowType } = paymentRequestInfo;
                    if (code == null) {
                        return null;
                    }
                    return {
                        label: s._("Copy Pix code"),
                        onClick: function() {
                            const n = h(t);
                            if (n != null) {
                                o("WAWebCopyTextWithToast").copyTextWithToast({
                                    failureMsg: s._("Couldn't copy Pix Code"),
                                    onSuccess: function() {
                                        O(n, o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE, a);
                                        o("WAWebBrLastUsedPaymentMethodStoreLazy").recordLastUsedBrPaymentMethodLazy(n, o("WAWebBrPaymentMethodKey").getPixMethodKeyForServerOrdering(pixFlowType));
                                        q(e, n, o("WAWebWamEnumCloudApiSignalCtaAction").CLOUD_API_SIGNAL_CTA_ACTION.COPY_PIX_CODE);
                                    },
                                    successMsg: s._("Pix Code copied"),
                                    text: code
                                });
                            }
                        },
                        Icon: r("WDSIconIcContentCopy.react")
                    };
                }
            case o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK:
                {
                    const { psp, uri } = paymentRequestInfo;
                    if (uri == null) {
                        return null;
                    }
                    return {
                        label: psp === "mercadopago" ? s._("Open in Mercado Pago") : s._("Open payment link"),
                        onClick: function() {
                            o("WAWebExternalLink.react").openExternalLink(uri);
                            const n = h(t);
                            if (n != null) {
                                O(n, o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK, a);
                                o("WAWebBrLastUsedPaymentMethodStoreLazy").recordLastUsedBrPaymentMethodLazy(n, o("WAWebBrPaymentMethodKey").BrPaymentMethodKey.PAYMENT_LINK);
                                q(e, n, o("WAWebWamEnumCloudApiSignalCtaAction").CLOUD_API_SIGNAL_CTA_ACTION.OPEN_PAYMENT_LINK);
                            }
                        },
                        Icon: r("WDSIconIcOpenInNew.react")
                    };
                }
            case o("WAWebBrPaymentRequest").PaymentRequestCtaType.OFFSITE_CARD_PAY:
                return null;
        }
    }
    function O(e, t, n) {
        B(e).then((r)=>{
            if (r) {
                if (t === o("WAWebBrPaymentRequest").PaymentRequestCtaType.PIX_DYNAMIC_CODE) {
                    o("WAWebBizAiPaymentRequestWamLogger").logBizAiPaymentRequestPixCopyWAMEvent(e);
                }
            } else {
                o("WAWebPaymentRequestWamLogger").logPaymentRequestInteractionWAMEvent(e, t, n);
            }
        }).catch((e)=>{
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[WAM:PAYMENT_REQUEST] tap log err"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("payment-request-tap-log-failed");
        });
    }
    function B(e) {
        return W.apply(this, arguments);
    }
    function W() {
        W = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebBizAiPaymentRequestWamLogger").hasBizAiPixPaymentRequestMarkers(e)) {
                return false;
            }
            const t = o("WAWebMsgGetters").getSender(e.unsafe());
            if (t == null) {
                return false;
            }
            try {
                const n = yield o("WAWebApiVerifiedBusinessName").getVerifiedBusinessNameRecordLidAware(t);
                return o("WAWebBizAiPaymentRequestWamLogger").isBizAiPixPaymentRequestMsg(e, n);
            } catch (error) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAM:BIZ_AI_PAYMENT_REQUEST] sender lookup err"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("biz-ai-payment-request-sender-lookup-failed");
                return false;
            }
        });
        return W.apply(this, arguments);
    }
    function q(e, t, ctaAction) {
        const r = t.unsafe();
        o("WAWebCloudApiSignalLogger").logCloudApiPaymentTemplateClick({
            carouselCardIndex: P(r),
            chat: o("WAWebFrontendMsgGetters").getChat(r),
            ctaAction,
            ctaButtonIndex: e.index,
            msg: r,
            templateType: o("WAWebWamEnumCloudApiSignalTemplateType").CLOUD_API_SIGNAL_TEMPLATE_TYPE.PAYMENT_REQUEST
        });
    }
    l.default = g;
}, 226);