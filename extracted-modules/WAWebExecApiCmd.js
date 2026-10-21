__d("WAWebExecApiCmd", [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebAboutWamLogger",
    "WAWebActiveAccountInfoContext.react",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddEditPixFeature",
    "WAWebApi",
    "WAWebBizAIOAuthCallbackEventBus",
    "WAWebBizBotLogging",
    "WAWebBizBotProfileUtils",
    "WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastsManageAudiencePanelLoadable",
    "WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizNativeAdsEntryPointUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotProfileAction",
    "WAWebBotUtils",
    "WAWebBrAddPixKeyDeepLinkGating",
    "WAWebBrSavePartnerPixKeyFeature",
    "WAWebBroadcastApiParse",
    "WAWebBusinessAdCreationUtils",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCTWATrackingPayloadUtils",
    "WAWebCallUserJourneyGating",
    "WAWebCatalogManagementFlowLoadable",
    "WAWebChatEntryPoint",
    "WAWebChatSearchFilters",
    "WAWebChatlistUtils",
    "WAWebCmd",
    "WAWebCommunityCreationFlowMetricUtils",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebCreateTextStatusFlowLoadable",
    "WAWebCustomUrlLogEvents",
    "WAWebDeepLinkMsgSentWamEvent",
    "WAWebDrawerManager",
    "WAWebExecApiCmdHelpers",
    "WAWebExecApiCmdNewCall",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFindChatAction",
    "WAWebGroupInviteLinkModalLoadable.react",
    "WAWebHatchFrontendGating",
    "WAWebHatchPairingUnavailableDialog.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebInfoFlowLoadable",
    "WAWebInjectSignupGreetingMessage",
    "WAWebKeyboardTabUtils",
    "WAWebMdLinkedDevicesWindowsXdrWamEvent",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebNewChatFlowLoadable",
    "WAWebNewCommunityInfoDrawerLoadable",
    "WAWebNewsletterExecApiCmd",
    "WAWebNoop",
    "WAWebOIDCCallbackEventBus",
    "WAWebOpenChatFlow.react",
    "WAWebOpenChatWithContactAction",
    "WAWebOpenNewsletterTab",
    "WAWebPrimaryFeaturesModel",
    "WAWebProfilePicThumbCollection",
    "WAWebReleaseToEventLoop",
    "WAWebSMBDataSharingDrawer.react",
    "WAWebSendBotRequestWelcomeAction",
    "WAWebSendMsgModalImplLoadable",
    "WAWebSendMsgMultiModalLoadable",
    "WAWebSendStickerToActiveChatStickersAction",
    "WAWebSignupGating",
    "WAWebSignupLoadingState",
    "WAWebStatusApiParse",
    "WAWebStatusAttachMediaFlowLoadable",
    "WAWebStatusNavigateTo",
    "WAWebStickerStoreFlowLoadable",
    "WAWebTextStatusCollection",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateUtmAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameManagementDrawerLoadable",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipOutgoingCallConsent",
    "WAWebVoipStartCall",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumCatalogEntryPoint",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumDeepLinkAction",
    "WAWebWamEnumDeepLinkType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumLobbyEntryPointType",
    "WAWebWamEnumLwiEntryPoint",
    "WAWebWamEnumMdLinkedDevicesWindowsXdrStage",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
    "WAWebWidFactory",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "cr:12407",
    "cr:17104",
    "cr:1923",
    "cr:2679",
    "cr:38809",
    "cr:9382",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
    "react"
], function(t, n, r, o, a, i, l, s) {
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
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    let A;
    const F = A || (A = o("react"));
    const O = n("cr:17104") ?? {};
    const O_handleClickCallLink = O.handleClickCallLink;
    const W = {
        callPopupTitle: {
            marginTop: "xw7yly9",
            marginBottom: "x1yztbdb",
            $$css: true
        }
    };
    const q = 1;
    function onReviewAudience(validContactsData, errorList) {
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(F.jsx(o("WAWebBizBroadcastsManageAudiencePanelLoadable").WAWebBizBroadcastsManageAudiencePanelLoadable, {
            entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
            validContactsData,
            errorList
        }), {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    function V(audiences, importLoggingContext) {
        const Component = o("WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastCoreSmartCSVImportAudiencesScreenLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(<Component audiences={audiences} entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER} importLoggingContext={importLoggingContext} onClose={function() {
            return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
        }} onCreateAudiencesSuccess={function() {
            return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
        }}/>, {
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    function H(e, importLoggingContext) {
        const n = e.length === q ? e[0] : null;
        if (n != null) {
            onReviewAudience(n.contacts, n.errorList ?? []);
            return;
        }
        V(e, importLoggingContext);
    }
    function onUploadSuccess(e, errorList, n, importLoggingContext, maxContactsPerAudience) {
        if (n != null) {
            o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
                contacts: e,
                context: n,
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER,
                errorList,
                importLoggingContext,
                maxContactsPerAudience,
                onReviewAudience,
                onReviewAudiences: function(t) {
                    return H(t, importLoggingContext);
                }
            });
            return;
        }
        onReviewAudience(e, errorList);
    }
    function z(isExternal, isCallLinkCreationJoin) {
        if (isCallLinkCreationJoin === true && o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()) {
            return o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_CREATE;
        }
        if (isExternal) {
            return o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_EXTERNAL;
        }
        return o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.CALL_LINK_INTERNAL;
    }
    function j(e, t) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n;
            try {
                n = o("WAWebWidFactory").createUserWidOrThrow(`${e}@c.us`);
            } catch (error) {
                o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: unusable phone number"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("calling-deep-link-bad-phone");
                return;
            }
            if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
                o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: redirecting self-call to self chat"
                ]))).sendLogs("calling-deep-links-self-call");
                yield Q(n);
                return;
            }
            if (o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(n, "before_ask") && (yield o("WAWebVoipOutgoingCallConsent").confirmDeepLinkCall(n, t)) && o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(n, "after_ask") && (yield Q(n)) && o("WAWebVoipOutgoingCallConsent").canStartDeepLinkCall(n, "after_ask")) {
                try {
                    yield o("WAWebVoipStartCall").startWAWebVoipCall(n, t, o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_PHONE_NUMBER_DEEPLINK : 0, 0, null, {
                        entryTrust: "user_gesture"
                    });
                } catch (error) {
                    o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                        "CALL_USER deep-link: startWAWebVoipCall failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("calling-deep-link-start-call-failed");
                }
            }
        });
        return K.apply(this, arguments);
    }
    function Q(e) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "callUserDeeplink");
                const n = t.chat;
                yield o("WAWebCmd").Cmd.openChatAt({
                    chat: n,
                    msgContext: null,
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
                });
                return true;
            } catch (error) {
                o("WALogger").ERROR(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                    "CALL_USER deep-link: failed to open chat"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("calling-deep-link-open-chat-failed");
                return false;
            }
        });
        return X.apply(this, arguments);
    }
    function Y({ cmdData, isCallLinkCreationJoin, isExternal, preserveAttribution, sessionId }) {
        switch(cmdData.resultType){
            case "GROUP_INVITE":
                {
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    const M = cmdData.data;
                    o("WAWebModalManager").ModalManager.open(F.jsx(o("WAWebGroupInviteLinkModalLoadable.react").WAWebGroupInviteLinkModalLoadable, {
                        groupCode: M.code,
                        source: "invite_link"
                    }));
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_GROUP_INVITE,
                        isExternal,
                        campaign: M.utm?.campaign
                    });
                    return true;
                }
            case "CATALOG":
                {
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    const w = cmdData.data;
                    const { catalogOwnerJid, partnertoken, utm } = w;
                    o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
                        chatId: o("WAWebWidFactory").createWid(catalogOwnerJid),
                        deepLinkType: cmdData.resultType,
                        isExternal,
                        partnerToken: partnertoken
                    });
                    o("WAWebExecApiCmdHelpers").openChatAndCatalog(catalogOwnerJid, utm);
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CATALOG,
                        isExternal
                    });
                    return true;
                }
            case "PRODUCT":
                {
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    const U = cmdData.data;
                    const { businessOwnerJid, partnertoken, productId, utm } = U;
                    o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
                        chatId: o("WAWebWidFactory").createWid(businessOwnerJid),
                        deepLinkType: cmdData.resultType,
                        isExternal,
                        partnerToken: partnertoken
                    });
                    o("WAWebExecApiCmdHelpers").openChatAndProduct(businessOwnerJid, productId, utm);
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_PRODUCT,
                        isExternal
                    });
                    return true;
                }
            case "MSG_SEND":
                {
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    const X = cmdData.data;
                    const { attachmentUris, conversionTuple, ctwaContextLinkData, customUrl, fromDefaultProtocol, lid, phone, text, type, username, utm } = X;
                    let se = null;
                    if (conversionTuple?.conversionSource === "sharesheet") {
                        se = lid;
                    }
                    const ue = customUrl != null || type === "business_profile";
                    const ce = username != null;
                    if (!r("isStringNullOrEmpty")(phone) || ue || ce) {
                        const de = function({ chat, widLookupMethod }) {
                            if (conversionTuple) {
                                o("WAWebCTWATrackingPayloadUtils").handleChatConversationOpenedWithNewMessage(chat, conversionTuple);
                            }
                            const a = widLookupMethod === "customUrl";
                            if (a) {
                                o("WAWebCustomUrlLogEvents").logClickOnCustomUrl(chat);
                                o("WAWebCustomUrlLogEvents").logMessageSentByCustomUrl(chat);
                            }
                            if (utm) {
                                o("WAWebUpdateUtmAction").addUtmToChat(chat.id, utm);
                            }
                            if (o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(chat.contact.businessProfile)) {
                                o("WAWebBizBotLogging").logBizBot3pDeepLinkClickEvent();
                            }
                            o("WAWebExecApiCmdHelpers").externalCtxAuthoriseWAChatIfEnabled({
                                chatId: chat.id,
                                deepLinkType: cmdData.resultType,
                                isExternal,
                                partnerToken: cmdData.data.partnertoken
                            });
                            if (text) {
                                chat.urlText = true;
                            }
                            chat.urlNumber = true;
                            if (a) {
                                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                                    descriptorType: "info_flow",
                                    chat,
                                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CUSTOM_URL_LINK
                                } : F.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                                    chat,
                                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CUSTOM_URL_LINK
                                }, `info-${chat.id.toString()}`), {
                                    transition: "slide-left",
                                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                                });
                            }
                            const X_signupId = X.signupId;
                            if (X_signupId != null && phone != null && o("WAWebSignupGating").isSignupAGMEnabled()) {
                                o("WAWebSignupLoadingState").setSignupLoading(chat.id.toString(), true);
                                o("WAWebInjectSignupGreetingMessage").injectSignupGreetingMessage(phone, X_signupId, X.conversionTuple?.conversionSource);
                            }
                            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, true);
                        };
                        const sendLogAttributes = sessionId != null ? {
                            handleOnce: function() {
                                new (o("WAWebDeepLinkMsgSentWamEvent")).DeepLinkMsgSentWamEvent({
                                    deepLinkAction: o("WAWebWamEnumDeepLinkAction").DEEP_LINK_ACTION.MSG_SENT,
                                    deepLinkSessionId: sessionId
                                }).commit();
                            }
                        } : undefined;
                        const deepLinkLoggingData = ce ? {
                            deepLinkHasPhoneNumber: !r("isStringNullOrEmpty")(phone),
                            deepLinkHasText: !r("isStringNullOrEmpty")(text),
                            deepLinkHasUsername: true,
                            deepLinkHasUsernamePin: !r("isStringNullOrEmpty")(X.usernameKey) || X.invalidUsernameKey === true,
                            deepLinkSessionId: sessionId
                        } : undefined;
                        const Component = o("WAWebOpenChatFlow.react").OpenChatFlow;
                        o("WAWebModalManager").ModalManager.open(<Component target={o("WAWebExecApiCmdHelpers").getOpenChatFlowProps(X)} msgText={text} onSuccess={de} onError={function() {
                            return o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                        }} ctwaContextLinkData={ctwaContextLinkData} sendLogAttributes={sendLogAttributes} deepLinkLoggingData={deepLinkLoggingData}/>, {
                            transition: "modal-flow"
                        });
                        o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                            deepLinkType: ctwaContextLinkData ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CTWA : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHAT,
                            isExternal,
                            deepLinkSessionId: sessionId,
                            campaign: utm?.campaign
                        });
                    } else {
                        const _e = (t)=>{
                            if (conversionTuple?.conversionSource === "sharesheet") {
                                const e = {
                                    msgText: text,
                                    urlText: true
                                };
                                if (t) {
                                    e.attachments = t;
                                }
                                if (se != null && se.length > 0) {
                                    e.preSelectedContactLid = se;
                                }
                                o("WAWebModalManager").ModalManager.open(F.jsx(o("WAWebSendMsgModalImplLoadable").SendMsgModalImplLoadable, babelHelpers.extends({}, e)), {
                                    transition: "modal-flow"
                                });
                            } else {
                                const n = {
                                    msgText: text,
                                    urlText: true
                                };
                                if (t) {
                                    n.attachments = t;
                                }
                                o("WAWebModalManager").ModalManager.open(F.jsx(o("WAWebSendMsgMultiModalLoadable").SendMsgMultiModalLoadable, babelHelpers.extends({}, n)), {
                                    transition: "modal-flow"
                                });
                            }
                        };
                        if (attachmentUris != null && attachmentUris.length > 0) {
                            o("WAWebExecApiCmdHelpers").downloadAttachments(attachmentUris).then((e)=>{
                                _e(e);
                            }).finally(r("WAWebNoop"));
                        } else {
                            _e();
                        }
                        const fe = conversionTuple?.conversionSource === "sharesheet" ? o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_SHARESHEET : o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_MSG_FORWARD;
                        o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                            deepLinkType: fe,
                            isExternal,
                            deepLinkSessionId: undefined,
                            campaign: utm?.campaign
                        });
                    }
                    return true;
                }
            case "PUSH_NOTIFICATION":
                return true;
            case "CREATE_COMMUNITY":
                {
                    if (!o("WAWebCommunityGatingUtils").communitiesCreationEnabled()) {
                        return false;
                    }
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(F.jsx(r("WAWebNewCommunityInfoDrawerLoadable"), {}), {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                    const ge = cmdData.data.entrypointType;
                    o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebCommunityCreationFlowMetricUtils").getDeeplinkEntrypointType(ge));
                    o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.DEEP_LINK);
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CREATE_COMMUNITY,
                        isExternal
                    });
                    return true;
                }
            case "NEWSLETTER":
                o("WAWebCmd").Cmd.closeStatusViewer();
                o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd(cmdData.data);
                o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                    deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHANNEL,
                    isExternal
                });
                return true;
            case "AVATAR_STICKERPACK":
                {
                    const he = o("WAWebFaqUrl").getAvatarFaqUrl();
                    window.location.replace(he);
                    return true;
                }
            case "ADVERTISE":
                {
                    if (!o("WAWebMobilePlatforms").isSMB()) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[API] ",
                            " command rejected: not SMB"
                        ])), cmdData.resultType).sendLogs("ads-api-command-rejected");
                        return false;
                    }
                    const ye = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo();
                    if (ye == null || ye === "not-linked") {
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[API] ",
                            " command rejected: active account state=",
                            ""
                        ])), cmdData.resultType, ye).sendLogs("ads-api-command-rejected");
                        return false;
                    }
                    const Ce = cmdData.data;
                    const { campaignId, campaignType } = Ce;
                    o("WAWebChatlistUtils").handleAdCreation({
                        adCreationUrlInput: {
                            activeAccountInfo: ye,
                            sourceAdCreation: o("WAWebBusinessAdCreationUtils").getAdCreationTypeFromCampaignType(campaignType)
                        },
                        lwiEntryPoint: o("WAWebBizNativeAdsEntryPointUtils").getLwiEntryPointFromCampaignType(campaignType),
                        waCampaignId: campaignId
                    });
                    return true;
                }
            case "MANAGE_ADS":
                {
                    if (!o("WAWebMobilePlatforms").isSMB()) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[API] ",
                            " command rejected: not SMB"
                        ])), cmdData.resultType).sendLogs("ads-api-command-rejected");
                        return false;
                    }
                    const Se = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo();
                    if (Se == null || Se === "not-linked") {
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[API] ",
                            " command rejected: active account state=",
                            ""
                        ])), cmdData.resultType, Se).sendLogs("ads-api-command-rejected");
                        return false;
                    }
                    switch(cmdData.trigger){
                        case "chatListBanner":
                            o("WAWebChatlistUtils").handleManageAds({
                                activeAccountInfo: Se,
                                entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_CHAT_LIST_BANNER_MANAGE_AD,
                                sourceManageAdsType: "whatsapp_smb_web_manage_ads_chat_list_banner"
                            });
                            break;
                        default:
                            cmdData.trigger;
                            o("WAWebChatlistUtils").handleManageAds({
                                activeAccountInfo: Se,
                                entryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_BUSINESS_HOME_MANAGE_AD,
                                sourceManageAdsType: "whatsapp_smb_web_manage_ads_native"
                            });
                            break;
                    }
                    return true;
                }
            case "MESSAGE_YOURSELF":
                {
                    try {
                        const Re = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                        o("WAWebOpenChatWithContactAction").openChatWithContact({
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink,
                            findChatOrigin: "newChatFlow",
                            targetId: Re
                        });
                    } catch (e) {
                        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "Opening self chat failed with exceptions"
                        ])));
                    }
                    return true;
                }
            case "BRAZIL_PAYMENTS":
                {
                    if (cmdData.data.subType !== o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING) {
                        return false;
                    }
                    const Le = cmdData.data.campaignType === "chatlist_banner" ? "chatlist_banner" : cmdData.data.campaignType === "aymt_email" ? "aymt_email" : cmdData.data.campaignType === "aymt_ads_manager_notification" ? "aymt_ads_manager_notification" : "chatlist_banner";
                    if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) {
                        o("WAWebAddEditPixFeature").openPixCredentialManagementModal(Le, Le);
                        return true;
                    }
                    o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:customPaymentMethodsSyncSupport", function() {
                        if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) {
                            o("WAWebAddEditPixFeature").openPixCredentialManagementModal(Le, Le);
                            return true;
                        }
                    });
                    return false;
                }
            case "BRAZIL_ADD_PIX_KEY":
                {
                    const Ee = cmdData.data;
                    const { campaignId, prefill, referralSlug } = Ee;
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_PAYMENT_BR_ADD_PIX_KEY,
                        isExternal
                    });
                    const De = ()=>{
                        if (o("WAWebBrAddPixKeyDeepLinkGating").isAddPixKeyDeepLinkEnabled()) {
                            o("WAWebBrSavePartnerPixKeyFeature").openAddPixKeyDeepLinkScreen("add_pix_key_deeplink", o("WAWebBrAddPixKeyDeepLinkGating").resolveAddPixKeyDeepLinkReferral(prefill, campaignId, referralSlug), prefill);
                            return true;
                        }
                        return false;
                    };
                    if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) {
                        return De();
                    }
                    const xe = function() {
                        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.off("change:customPaymentMethodsSyncSupport", xe);
                        if (o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled()) {
                            De();
                        }
                    };
                    o("WAWebPrimaryFeaturesModel").PrimaryFeatures.on("change:customPaymentMethodsSyncSupport", xe);
                    return false;
                }
            case "EDIT_PROFILE_PICTURE":
                {
                    try {
                        o("WAWebCmd").Cmd.closeStatusViewer();
                        const $e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                        const Pe = o("WAWebTextStatusCollection").TextStatusCollection.assertGet($e);
                        const Ne = o("WAWebContactCollection").ContactCollection.assertGet($e);
                        const Me = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet($e);
                        const Component = n("cr:1923");
                        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component status={Pe} profilePicThumb={Me} contact={Ne} conn={o("WAWebConnModel").Conn} onClose={o("WAWebDrawerManager").closeDrawerLeft} isInitialStep/>, {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                        });
                        o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                            deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_EDIT_PROFILE_PIC,
                            isExternal
                        });
                        return true;
                    } catch (e) {
                        o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "Opening profile drawer with exceptions"
                        ])));
                    }
                    return true;
                }
            case "PROFILE_USERNAME":
                {
                    if (!o("WAWebUsernameWorkerCompatibleGatingUtils").usernameCreationOrReservationEnabled()) {
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "PROFILE_USERNAME deep link - username feature disabled"
                        ])));
                        return false;
                    }
                    try {
                        o("WAWebCmd").Cmd.closeStatusViewer();
                        const we = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                        const Ae = o("WAWebContactCollection").ContactCollection.assertGet(we);
                        const Fe = o("WAWebUsernameTypes").serializeMaybeUsername(Ae.username);
                        if (r("isStringNullOrEmpty")(Fe)) {
                            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                            o("WAWebModalManager").ModalManager.open(<Component onOK={o("WAWebModalManager").closeModalManager}>{s._("You can set up your username from your primary device.")}</Component>);
                            o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                                "PROFILE_USERNAME deep link - use primary device alert"
                            ])));
                        } else {
                            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(F.jsx(r("WAWebUsernameManagementDrawerLoadable"), {
                                contactId: Ae.id,
                                username: Fe
                            }), {
                                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                            });
                            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "PROFILE_USERNAME deep link - opened username drawer"
                            ])));
                        }
                        return true;
                    } catch (e) {
                        o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                            "PROFILE_USERNAME deep link failed with exception"
                        ])));
                        return false;
                    }
                }
            case "BROADCAST":
                {
                    const Oe = cmdData.data.feature;
                    switch(Oe){
                        case o("WAWebBroadcastApiParse").BroadcastFeatureType.Newsletter:
                            o("WAWebOpenNewsletterTab").openNewsletterTab();
                            break;
                        case o("WAWebBroadcastApiParse").BroadcastFeatureType.Status:
                            o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Status);
                            o("WAWebStatusNavigateTo").navigateToStatus();
                    }
                    return true;
                }
            case "STATUS_POST":
                {
                    const Be = cmdData.data.postType;
                    switch(Be){
                        case o("WAWebStatusApiParse").StatusPostType.Text:
                            o("WAWebModalManager").ModalManager.openMedia(F.jsx(o("WAWebCreateTextStatusFlowLoadable").CreateTextStatusFlowLoadable, {}), {
                                transition: "status-modal"
                            });
                            break;
                        case o("WAWebStatusApiParse").StatusPostType.Media:
                            o("WAWebModalManager").ModalManager.open(F.jsx(o("WAWebStatusAttachMediaFlowLoadable").StatusAttachMediaFlowLoadable, {}));
                            break;
                    }
                    return true;
                }
            case "CALL_USER":
                {
                    const We = cmdData.data.phone;
                    const qe = cmdData.data.video === true;
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CALL,
                        isExternal
                    });
                    if (o("WAWebVoipGatingUtils").isCallingEnabled()) {
                        if (We == null) {
                            const Component = r("WDSText.react");
                            const Component_1 = r("WDSText.react");
                            const Component_2 = o("WAWebConfirmPopup.react").ConfirmPopup;
                            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                "CALL_USER deep-link missing phone"
                            ]))).sendLogs("calling-deep-link-missing-phone");
                            o("WAWebModalManager").ModalManager.open(<Component_2 onOK={o("WAWebModalManager").closeModalManager}><Component type="Headline2" colorName="contentDefault" textAlign="center" xstyle={W.callPopupTitle}>{s._("Couldn't place the call")}</Component><Component_1 type="Body2" colorName="contentDeemphasized" textAlign="center">{s._("The call link appears to be invalid. Please check it and try again.")}</Component_1></Component_2>);
                            return true;
                        }
                        j(We, qe);
                        return true;
                    }
                    const Component = r("WDSText.react");
                    const Component_1 = r("WDSText.react");
                    const Component_2 = o("WAWebConfirmPopup.react").ConfirmPopup;
                    o("WAWebModalManager").ModalManager.open(<Component_2 onOK={o("WAWebModalManager").closeModalManager}><Component type="Headline2" colorName="contentDefault" textAlign="center" xstyle={W.callPopupTitle}>{s._("Your call can't be completed")}</Component><Component_1 type="Body2" colorName="contentDeemphasized" textAlign="center">{s._("This feature isn't supported on your device. Log into WhatsApp on your phone and try again.")}</Component_1></Component_2>);
                    o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "Calling deep-links are not supported on WA Web Client"
                    ]))).sendLogs("calling-deep-links-not-supported");
                    return true;
                }
            case "PAYMENT_LINK":
                return true;
            case "FAVORITES":
                if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                    o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                    o("WAWebCmd").Cmd.setActiveFilter(o("WAWebChatSearchFilters").SearchFilters.FAVORITES);
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_FAVORITE_CHAT_FILTER,
                        isExternal
                    });
                    return true;
                }
                return false;
            case "OPEN_CATALOG":
                {
                    if (isExternal || !o("WAWebMobilePlatforms").isSMB()) {
                        return false;
                    }
                    const Ue = {
                        entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_DEEPLINK,
                        isInitialStep: true
                    };
                    if (cmdData.data.campaignType === "chat_psa" || cmdData.data.campaignType === "banner") {
                        Ue.promotionCampaign = "video-upload";
                    }
                    o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow(Ue);
                    return true;
                }
            case "CATALOG_LINKING_CHAT_PSA":
                {
                    const Ve = cmdData.data.deepLinkType;
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: Ve,
                        isExternal
                    });
                    o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsappUsePhoneFallbackUrl());
                    return true;
                }
            case "HATCH_LINK":
                {
                    if (!o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) {
                        return false;
                    }
                    if (!o("WAWebABProps").getABPropConfigValue("hatch_pairing_from_companion_enabled")) {
                        o("WAWebModalManager").ModalManager.open(F.jsx(r("WAWebHatchPairingUnavailableDialog.react"), {}));
                        o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                            "Hatch pairing deep-link not supported on companion device"
                        ]))).sendLogs("hatch-pairing-not-supported-on-companion");
                        return true;
                    }
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    const He = (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            o("WAWebBotProfileAction").queryBotProfile(o("WAWebBotUtils").HATCH_BOT_FBID_WID);
                            const t = yield o("WAWebFindChatAction").findOrCreateLatestChat(o("WAWebBotUtils").HATCH_BOT_FBID_WID, "hatchDeeplink");
                            const t_chat = t.chat;
                            yield o("WAWebCmd").Cmd.openChatAt({
                                chat: t_chat,
                                msgContext: null,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
                            });
                            if (e != null) {
                                o("WAWebSendBotRequestWelcomeAction").sendBotRequestWelcome(t_chat, e);
                                o("WAWebBotGenTypingIndicatorMsg").showBotTypingIndicator(t_chat);
                            }
                        });
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                    He(cmdData.data.token);
                    return true;
                }
            case "UGC_BOT":
                {
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    const Ge = (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const t = o("WAWebWidFactory").createUserWidOrThrow(`${e}@bot`);
                            const n = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "ugcBotDeeplink");
                            const n_chat = n.chat;
                            yield o("WAWebCmd").Cmd.openChatAt({
                                chat: n_chat,
                                msgContext: null,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
                            });
                        });
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })();
                    Ge(cmdData.data.fbid);
                    return true;
                }
            case "STICKER_PACK":
                {
                    const stickerPackId = cmdData.data.url;
                    const Component = r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable;
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component stickerPackId={stickerPackId} onSticker={r("WAWebSendStickerToActiveChatStickersAction")}/>, {
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                    return true;
                }
            case "CALL_LINK":
                {
                    if (!isExternal && isCallLinkCreationJoin !== true) {
                        r("JSResourceForInteraction")("WAWebPreCallUserJourneyLogger").__setRef("WAWebExecApiCmd").load().then((e)=>new e.PreCallUserJourneyLogger().clickCallLinkFromChat()).catch((e)=>{
                            o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: failed to log click_call_link for an in-app call link"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("voip-click-call-link-log-failed");
                        });
                    }
                    let je = O_handleClickCallLink;
                    if (je == null && n("cr:9382") != null) {
                        je = n("cr:9382").handleClickCallLink;
                    }
                    je?.(cmdData, z(isExternal, isCallLinkCreationJoin));
                    return true;
                }
            case "CTWA_ADS_DATA_SHARING":
                {
                    if (!o("WAWebMobilePlatforms").isSMB()) {
                        return false;
                    }
                    const Ke = cmdData.source;
                    let Qe;
                    switch(Ke){
                        case "ads_manager_3pd_guidance_card":
                            Qe = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint").SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_DEEP_LINK_ADS_MANAGER_3PD_GUIDANCE_CARD;
                            break;
                        default:
                            Qe = o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint").SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT.ENTRY_POINT_UNKNOWN;
                            break;
                    }
                    const Component = r("WAWebSMBDataSharingDrawer.react");
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component onClose={o("WAWebDrawerManager").closeDrawerLeft} entrypoint={Qe}/>);
                    return true;
                }
            case "BIZ_AGENTS_ONBOARDING":
                if (o("WAWebMobilePlatforms").isSMB()) {
                    o("WAWebExternalLink.react").openExternalLink("https://wa.me/biz-agents-onboarding");
                    return true;
                }
                return false;
            case "BIZ_BROADCAST_AUDIENCE_MODAL":
                if (o("WAWebMobilePlatforms").isSMB()) {
                    const Component = o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable;
                    o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER);
                    o("WAWebModalManager").ModalManager.open(<Component entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER} onCancel={function(t, n) {
                        o("WAWebModalManager").ModalManager.close();
                        if (n !== true) {
                            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER);
                        }
                    }} onUploadSuccess={onUploadSuccess}/>);
                    return true;
                }
                return false;
            case "BIZ_BROADCAST_HOME":
                {
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_MARKETING_MESSAGE,
                        isExternal
                    });
                    if (!o("WAWebMobilePlatforms").isSMB() || !o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastProEntrypointEnabledForStatus(o("WAWebBizBroadcastProOnboardingStatus").getBizBroadcastProNuxOnboardingStatus()) && !o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(false)) {
                        return false;
                    }
                    const Ye = cmdData.data.source;
                    let Je;
                    switch(Ye){
                        case "qp_chat_list_banner":
                            Je = o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_BANNER;
                            break;
                        default:
                            Je = o("WAWebWamEnumEntryPoint").ENTRY_POINT.DEEP_LINK;
                            break;
                    }
                    const Ze = preserveAttribution !== true;
                    if (Ze) {
                        o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.setDeeplinkAttribution(Je, cmdData.data.moment);
                    }
                    const et = Ze ? Je : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.getEntryPoint() ?? Je;
                    const TtComponent = function() {
                        const Component = o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable;
                        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(<Component entryPoint={et} onClose={function() {
                            return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
                        }}/>, {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                        });
                    };
                    if (isExternal) {
                        o("WAWebReleaseToEventLoop").releaseToEventLoop().then(TtComponent).catch((e)=>{
                            o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                                "BizBroadcastHome external deeplink drawer open failed"
                            ]))).catching(r("getErrorSafe")(e)).sendLogs("bb-home-deeplink-drawer-fail");
                        });
                    } else {
                        TtComponent();
                    }
                    return true;
                }
            case "WEB_REGISTRATION":
            case "WEB_REGISTRATION_CAMPAIGN":
                return false;
            case "CALL_ACTIVE":
                {
                    if (!o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled() || n("cr:38809") == null) {
                        return false;
                    }
                    const nt = n("cr:38809").WAWebVoipOngoingCallCollection;
                    const rt = nt.findOngoingCallActiveOnOtherSelfDevice();
                    if (rt == null) {
                        return true;
                    }
                    try {
                        o("WAWebVoipStartCall").joinOngoingCallByCallId(rt.id.id, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.XDR_CALL_TRANSFER).catch((e)=>{
                            o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                                "callActive joinOngoingCall failed"
                            ])));
                        });
                    } catch (e) {
                        o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                            "callActive joinOngoingCall failed"
                        ])));
                    }
                    return true;
                }
            case "CHAT_OPEN":
                {
                    const ot = cmdData.data;
                    const { fromDefaultProtocol, lid, session } = ot;
                    try {
                        o("WAWebCmd").Cmd.closeStatusViewer();
                        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                        o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                        const st = o("WAWebWidFactory").createWid(lid);
                        o("WAWebFindChatAction").findOrCreateLatestChat(st, "newChatFlow").then(({ chat })=>{
                            o("WAWebCmd").Cmd.openChatFromUnread({
                                chat,
                                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Deeplink
                            }).then((e)=>{
                                if (e) {
                                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
                                    o("WAWebCmd").Cmd.trigger("scroll_to_active_chat");
                                }
                                if (session != null) {
                                    new (o("WAWebMdLinkedDevicesWindowsXdrWamEvent")).MdLinkedDevicesWindowsXdrWamEvent({
                                        mdLinkedDevicesWindowsXdrStage: e ? o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage").MD_LINKED_DEVICES_WINDOWS_XDR_STAGE.DEEPLINK_NAVIGATION_SUCCESS : o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage").MD_LINKED_DEVICES_WINDOWS_XDR_STAGE.DEEPLINK_NAVIGATION_FAILURE,
                                        mdXdrSessionUuid: session
                                    }).commit();
                                }
                                o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, e);
                            });
                        }).catch((e)=>{
                            o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                                "Opening chat via chatOpen failed with async exception"
                            ])));
                            if (session != null) {
                                new (o("WAWebMdLinkedDevicesWindowsXdrWamEvent")).MdLinkedDevicesWindowsXdrWamEvent({
                                    mdLinkedDevicesWindowsXdrStage: o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage").MD_LINKED_DEVICES_WINDOWS_XDR_STAGE.DEEPLINK_NAVIGATION_FAILURE,
                                    mdXdrSessionUuid: session
                                }).commit();
                            }
                            o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                        });
                    } catch (e) {
                        o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                            "Opening chat via chatOpen failed with exceptions"
                        ])));
                        if (session != null) {
                            new (o("WAWebMdLinkedDevicesWindowsXdrWamEvent")).MdLinkedDevicesWindowsXdrWamEvent({
                                mdLinkedDevicesWindowsXdrStage: o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage").MD_LINKED_DEVICES_WINDOWS_XDR_STAGE.DEEPLINK_NAVIGATION_FAILURE,
                                mdXdrSessionUuid: session
                            }).commit();
                        }
                        o("WAWebExecApiCmdHelpers").logDefaultProtocolNavigation(fromDefaultProtocol, false);
                    }
                    return true;
                }
            case "APP_OPEN":
                {
                    const mdXdrSessionUuid = cmdData.data?.session;
                    try {
                        let dt;
                        o("WAWebCmd").Cmd.closeStatusViewer();
                        o("WAWebCmd").Cmd.closeActiveChat();
                        (dt = o("WAWebDrawerManager")).DrawerManager.closeDrawerLeft();
                        dt.DrawerManager.closeDrawerMid();
                        dt.DrawerManager.closeDrawerRight();
                        dt.DrawerManager.closeDrawerFullscreen();
                        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                        if (mdXdrSessionUuid != null) {
                            new (o("WAWebMdLinkedDevicesWindowsXdrWamEvent")).MdLinkedDevicesWindowsXdrWamEvent({
                                mdLinkedDevicesWindowsXdrStage: o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage").MD_LINKED_DEVICES_WINDOWS_XDR_STAGE.DEEPLINK_NAVIGATION_SUCCESS,
                                mdXdrSessionUuid
                            }).commit();
                        }
                    } catch (e) {
                        o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                            "Handling appOpen failed with exceptions"
                        ])));
                        if (mdXdrSessionUuid != null) {
                            new (o("WAWebMdLinkedDevicesWindowsXdrWamEvent")).MdLinkedDevicesWindowsXdrWamEvent({
                                mdLinkedDevicesWindowsXdrStage: o("WAWebWamEnumMdLinkedDevicesWindowsXdrStage").MD_LINKED_DEVICES_WINDOWS_XDR_STAGE.DEEPLINK_NAVIGATION_FAILURE,
                                mdXdrSessionUuid
                            }).commit();
                        }
                    }
                    return true;
                }
            case "NEW_CHAT":
                {
                    try {
                        o("WAWebCmd").Cmd.closeStatusViewer();
                        o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                        o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
                        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Chats);
                        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                            descriptorType: "new_chat"
                        } : F.jsx(o("WAWebNewChatFlowLoadable").NewChatFlowLoadable, {}), {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                        });
                    } catch (e) {
                        o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                            "Opening new chat flow failed with exceptions"
                        ])));
                    }
                    return true;
                }
            case "NEW_CALL":
                {
                    try {
                        o("WAWebCmd").Cmd.closeStatusViewer();
                        o("WAWebExecApiCmdNewCall").handleNewCallDeeplink(cmdData.data);
                    } catch (e) {
                        o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                            "Opening new call flow failed with exceptions"
                        ])));
                    }
                    return true;
                }
            case "WORK_CONTACT_SYNC":
                {
                    let mt;
                    if (r("gkx")("26258") || !((mt = cmdData.data) != null && mt.compressedData)) {
                        return false;
                    }
                    if (n("cr:2679") != null) {
                        n("cr:2679").handleWorkContactSync(cmdData.data.compressedData);
                    }
                    return true;
                }
            case "SEND_FILE":
                {
                    return (n("cr:12407") == null ? undefined : n("cr:12407")(cmdData.data)) ?? false;
                }
            case "NEWSLETTER_STATUS_DEEPLINK":
                r("JSResourceForInteraction")("WAWebNewsletterStatusExecApiCmd").__setRef("WAWebExecApiCmd").load().then((e)=>e.execNewsletterStatusDeeplinkCmd(cmdData.data)).catch(()=>{
                    o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to load or execute newsletter status deeplink handler"
                    ])));
                });
                o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                    deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_CHANNEL_STATUS,
                    isExternal
                });
                return true;
            case "OIDC_CALLBACK":
                o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.trigger(o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK, cmdData.data);
                return true;
            case "BIZ_AI_OAUTH_CALLBACK":
                o("WAWebBizAIOAuthCallbackEventBus").WAWebBizAIOAuthCallbackEventBus.trigger(o("WAWebBizAIOAuthCallbackEventBus").BizAIOAuthCallbackEvent.BIZ_AI_OAUTH_CALLBACK, cmdData.data);
                return true;
            case "SET_ABOUT":
                if (o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()) {
                    o("WAWebCmd").Cmd.closeStatusViewer();
                    o("WAWebModalManager").ModalManager.open(F.jsx(o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable, {
                        entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE.DEEP_LINK
                    }));
                    o("WAWebExecApiCmdHelpers").submitDeepLinkOpenWamEvent({
                        deepLinkType: o("WAWebWamEnumDeepLinkType").DEEP_LINK_TYPE.DEEP_LINK_SET_ABOUT,
                        isExternal
                    });
                    return true;
                }
                return false;
            default:
                cmdData.resultType;
                return false;
        }
    }
    l.default = Y;
}, 226);