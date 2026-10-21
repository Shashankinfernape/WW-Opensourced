__d("WAWebChatlistUtils", [
    "fbt",
    "WALogger",
    "WAWebAdCreationLogger",
    "WAWebBizAdCreationEntryPointModal.react",
    "WAWebBizNativeAdsEntryTapLogger",
    "WAWebBizNativeAdsGatingUtils",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebBusinessAdCreationUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebOpenBizNativeAdsFlow",
    "WAWebOpenManageAdsInLwi",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsCTWA",
    "WAWebWamEnumLwiScreenAction",
    "WAWebWamEnumWebFlowType",
    "asyncToGeneratorRuntime",
    "gkx",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(e, t, n) {
        return _(o("WAWebFindChatAction").findExistingChat, e, o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist, t, n);
    }
    function m({ chatEntryPoint, id, msg, msgContext }) {
        return _(o("WAWebFindChatAction").findExistingChat, id, chatEntryPoint, msgContext, msg);
    }
    function p(e, t) {
        return _((e, t, n)=>o("WAWebFindChatAction").findOrCreateLatestChat(e, t, n).then(({ chat })=>chat), e, o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist, t);
    }
    function _(t, n, a, msgContext, mediaMsgToOpenInMediaViewer) {
        return t(n, "chatListUtils").then((t)=>{
            if (!r("gkx")("26258")) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "window.chat set to"
                ])));
                window.chat = t;
            }
            if (o("WAWebBotUtils").isMetaAiBot(n) && o("WAWebBotGating").isAiChatThreadsEnabled()) {
                if (msgContext != null && msgContext.msg) {
                    o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                        type: "MessageSearch",
                        msg: msgContext.msg
                    });
                } else {
                    o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                        type: "MetaAiChat"
                    });
                }
                return t;
            }
            if (msgContext) {
                return o("WAWebCmd").Cmd.openChatAt({
                    chat: t,
                    msgContext,
                    chatEntryPoint: a,
                    onSuccess: {
                        mediaMsgToOpenInMediaViewer
                    }
                }).then((e)=>{
                    if (e) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                    }
                    return t;
                });
            }
            if (t !== o("WAWebChatCollection").ChatCollection.getActive()) {
                return o("WAWebCmd").Cmd.openChatFromUnread({
                    chat: t,
                    chatEntryPoint: a
                }).then((e)=>{
                    if (e) {
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                    }
                    return t;
                });
            }
            o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
            return t;
        });
    }
    const f = ()=>{
        const e = r("WAWebFbtCommon")("OK");
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            action: {
                dismiss: true,
                actionText: e
            },
            msg: s._("Something went wrong. Please try again."),
            id: o("WAWebToast.react").genId()
        }));
    };
    function g(adCreationUrlInput) {
        if (adCreationUrlInput.sourceAdCreation === "whatsapp_smb_web_catalog" || adCreationUrlInput.sourceAdCreation === "whatsapp_smb_web_catalog_product") {
            return adCreationUrlInput.productId;
        }
        return null;
    }
    function h({ adCreationUrlInput, lwiEntryPoint, waCampaignId }) {
        const { activeAccountInfo, sourceAdCreation } = adCreationUrlInput;
        const u = activeAccountInfo !== "not-linked" && activeAccountInfo.hasFacebookPage;
        const d = sourceAdCreation === "whatsapp_smb_web_catalog" || sourceAdCreation === "whatsapp_smb_web_catalog_product";
        const m = (o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled() || o("WAWebBizNativeAdsGatingUtils").nativeAdsWebCreationEnabled()) && (!d || o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogBoostEnabled());
        let p;
        if (m) {
            p = r("WAWebPonyfillsCryptoRandomUUID")();
        } else {
            o("WAWebUserPrefsCTWA").resetAdCreationSequenceNumber();
            p = o("WAWebUserPrefsCTWA").generateAdCreationFlowId();
        }
        o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
            lwiEntryPoint,
            lwiExtras: JSON.stringify({
                uses_native_ads: m
            }),
            lwiFlowId: p,
            userHasLinkedFbPage: u,
            waCampaignId,
            webFlowType: m ? o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB : o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.EXTERNAL_WEB
        });
        o("WAWebBizNativeAdsEntryTapLogger").logRoutingDecision({
            lwiEntryPoint,
            lwiFlowId: p,
            usesNativeAds: m,
            hasFacebookPage: u,
            activeAccountInfoType: activeAccountInfo === "not-linked" ? "not-linked" : activeAccountInfo.type,
            hasCreatedAd: activeAccountInfo !== "not-linked" && activeAccountInfo.hasCreatedAd,
            sourceAdCreation
        });
        if (m) {
            r("WAWebOpenBizNativeAdsFlow")(sourceAdCreation, p, g(adCreationUrlInput));
            return;
        }
        const isPagelessAd = activeAccountInfo !== "not-linked" && activeAccountInfo.type === "whatsapp";
        const h = o("WAWebAdCreationLogger").getLwiAdsIdentityTypeFromActiveAccountInfo(activeAccountInfo);
        o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, h, u);
        const y = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_NUX_CONTINUE_TAPPED, h, u);
                try {
                    const e = yield o("WAWebBusinessAdCreationUtils").getWhatsappAdCreationUrl(babelHelpers.extends({}, adCreationUrlInput, {
                        flowId: p
                    }));
                    o("WAWebExternalLink.react").openExternalLink(e, {
                        allowReferrer: true
                    });
                } catch (e) {
                    f();
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const Component = r("WAWebBizAdCreationEntryPointModal.react");
        o("WAWebModalManager").ModalManager.open(<Component onOK={y} onClose={function() {
            return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CANCEL_DIALOG_BUTTON_TAPPED, h, u);
        }} onLearnMore={function() {
            return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_LEARN_MORE_TAPPED, h, u);
        }} isPagelessAd={isPagelessAd}/>);
    }
    function y({ activeAccountInfo, entryPoint, sourceManageAdsType }) {
        o("WAWebOpenManageAdsInLwi").openManageAdsInLwi(activeAccountInfo, sourceManageAdsType, entryPoint);
    }
    l.openExistingChat = d;
    l.openExistingChatWithEntryPoint = m;
    l.openOrCreateLatestChat = p;
    l.handleAdCreation = h;
    l.handleManageAds = y;
}, 226);