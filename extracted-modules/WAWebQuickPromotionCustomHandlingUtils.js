__d("WAWebQuickPromotionCustomHandlingUtils", [
    "WALogger",
    "WAWebActiveAccountInfoContext.react",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebBannerEventWamEvent",
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastNewBroadcastFlowLoadable",
    "WAWebBizNativeAdsEntryPointUtils",
    "WAWebBizNativeAdsWamLogger",
    "WAWebBizToolsFlowLoadable",
    "WAWebBizToolsFlowSteps",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCTWAConstants",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebExecApiCmd",
    "WAWebExternalLink.react",
    "WAWebKeyboardTabUtils",
    "WAWebMobilePlatforms",
    "WAWebNavBarTypes",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSurfaceType",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    function d(e) {
        const r = e.data.primaryAction?.deepLink;
        if (r != null && r.startsWith("https://")) {
            return {
                type: "universalLink",
                onPrimaryClick: function() {
                    o("WAWebExternalLink.react").openExternalLink(r);
                }
            };
        }
        if (r == null) {
            const a = e.data.primaryAction?.universalLink;
            if (a != null) {
                return {
                    type: "universalLink",
                    onPrimaryClick: function() {
                        o("WAWebExternalLink.react").openExternalLink(a);
                    }
                };
            }
        }
    }
    function m(e) {
        const e_surfaceId = e.surfaceId;
        if (!(e_surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP && e_surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD)) {
            const a = e.data.primaryAction?.deepLink;
            if (a != null) {
                const i = o("WAWebApiParse").parseAPICmd(a);
                if (i.resultType === "ADVERTISE") {
                    const l = (t)=>{
                        new (o("WAWebBannerEventWamEvent")).BannerEventWamEvent({
                            bannerType: o("WAWebBizNativeAdsEntryPointUtils").getBannerTypeFromSurfaceId(e_surfaceId),
                            bannerOperation: t,
                            bannerId: i.data.campaignId
                        }).commit();
                    };
                    return {
                        type: "adCreateBanner",
                        onPrimaryClick: function() {
                            i.resultType;
                            r("WAWebExecApiCmd")({
                                cmdData: i,
                                isExternal: false
                            });
                            l(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK);
                        },
                        onImpression: function() {
                            const e = o("WAWebActiveAccountInfoContext.react").getActiveAccountInfo();
                            if (e != null) {
                                o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(o("WAWebBizNativeAdsEntryPointUtils").getLwiEntryPointFromSurfaceId(e_surfaceId), e !== "not-linked" && e.hasFacebookPage);
                            }
                            l(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN);
                        },
                        onDismiss: function() {
                            l(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS);
                        }
                    };
                }
            }
        }
    }
    function p(e) {
        const e_surfaceId = e.surfaceId;
        if (e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
            const a = e.data.primaryAction?.deepLink;
            if (a != null) {
                const i = o("WAWebApiParse").parseAPICmd(a);
                i.resultType;
                if (i.resultType === "MANAGE_ADS") {
                    return {
                        type: "manageAdsBanner",
                        onPrimaryClick: function() {
                            r("WAWebExecApiCmd")({
                                cmdData: i,
                                isExternal: false
                            });
                        }
                    };
                }
            }
        }
    }
    function _(e) {
        const e_surfaceId = e.surfaceId;
        if (e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
            const a = e.data.primaryAction?.deepLink;
            if (a != null) {
                const i = o("WAWebApiParse").parseAPICmd(a);
                i.resultType;
                if (i.resultType === "OPEN_CATALOG") {
                    return {
                        type: "openCatalogBanner",
                        onPrimaryClick: function() {
                            r("WAWebExecApiCmd")({
                                cmdData: i,
                                isExternal: false
                            });
                            S(e_surfaceId, i.data.campaignId, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK);
                        },
                        onImpression: function() {
                            S(e_surfaceId, i.data.campaignId, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN);
                        },
                        onDismiss: function() {
                            S(e_surfaceId, i.data.campaignId, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS);
                        }
                    };
                }
            }
        }
    }
    function f(e) {
        const e_surfaceId = e.surfaceId;
        if (e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
            const a = e.data.primaryAction?.deepLink;
            if (a != null) {
                const i = o("WAWebApiParse").parseAPICmd(a);
                if (i.resultType === "BRAZIL_PAYMENTS") {
                    return {
                        type: "paymentsBanner",
                        onPrimaryClick: function() {
                            if (i.data.subType === o("WAWebApi").BrazilPaymentResultSubtype.PIX_ONBOARDING) {
                                r("WAWebExecApiCmd")({
                                    cmdData: i,
                                    isExternal: false
                                });
                            } else {
                                o("WAWebExternalLink.react").openExternalLink(a);
                            }
                            S(e_surfaceId, i.data.campaignId, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK);
                        },
                        onImpression: function() {
                            S(e_surfaceId, i.data.campaignId, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN);
                        },
                        onDismiss: function() {
                            S(e_surfaceId, i.data.campaignId, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS);
                        }
                    };
                }
            }
        }
    }
    function g(e) {
        const e_surfaceId = e.surfaceId;
        if (e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP) {
            const a = e.data.primaryAction?.deepLink;
            if (a != null) {
                const i = o("WAWebApiParse").parseAPICmd(a);
                if (i.resultType === "BIZ_BROADCAST_AUDIENCE_MODAL") {
                    return {
                        type: "bizBroadcastAudienceModal",
                        onPrimaryClick: function() {
                            r("WAWebExecApiCmd")({
                                cmdData: i,
                                isExternal: false
                            });
                        }
                    };
                }
            }
        }
    }
    function h(e) {
        const e_surfaceId = e.surfaceId;
        if (!(e_surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP && e_surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME && e_surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD)) {
            const a = e.data.primaryAction?.deepLink;
            if (a != null) {
                const i = o("WAWebApiParse").parseAPICmd(a);
                if (i.resultType === "BIZ_BROADCAST_HOME") {
                    const l = e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD;
                    const s = l ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME : undefined;
                    const u = l ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BUSINESS_HOME_PAGE : undefined;
                    return {
                        type: "bizBroadcastHome",
                        onPrimaryClick: function() {
                            r("WAWebExecApiCmd")({
                                cmdData: i,
                                isExternal: false,
                                preserveAttribution: e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME
                            });
                            if (e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME) {
                                S(e_surfaceId, e.id, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK);
                            }
                        },
                        onImpression: function() {
                            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.qpBannerViewed(undefined, s, u);
                            if (e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME) {
                                S(e_surfaceId, e.id, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN);
                            }
                        },
                        onDismiss: function() {
                            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.qpBannerDismissed(undefined, s, u);
                            if (e_surfaceId === o("WAWebCTWAConstants").QP_SURFACE_ID_BB_HOME) {
                                S(e_surfaceId, e.id, o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS);
                            }
                        }
                    };
                }
            }
        }
    }
    const y = /^whatsapp-smb:\/\/biz-broadcast-create\/?(?:\?.*)?$/i;
    function C(t) {
        if (o("WAWebMobilePlatforms").isSMB() && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(false)) {
            const r = t.surfaceId;
            if (r === o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD) {
                const a = t.data.primaryAction?.deepLink;
                if (!(a == null || !a.match(y))) {
                    const i = new URL(a);
                    const l = i.searchParams.get("source");
                    if (l == null) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[QP] biz-broadcast-create: missing source ",
                            ""
                        ])), a).sendLogs("qp-biz-broadcast-create-missing-source");
                    }
                    return {
                        type: "bizBroadcastCreate",
                        onPrimaryClick: function() {
                            o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.setEntryPoint(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS, o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_BROADCAST);
                            if (l != null) {
                                o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.setEntryPointDetails(l, o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM.BUSINESS_BROADCAST);
                            }
                            const Component = o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable;
                            o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(<Component entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS} onBack={function() {
                                return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
                            }}/>, {
                                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                            });
                        }
                    };
                }
            }
        }
    }
    function b(e) {
        const { id: bizAiQrHandoffQpId, surfaceId } = e;
        if (!(surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP && surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_BUSINESS_HOME_TOP_CARD)) {
            const a = e.data.primaryAction?.deepLink;
            if (!(a == null || !a.startsWith(o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME))) {
                return {
                    type: "bizAi",
                    onPrimaryClick: function() {
                        o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.BizTools);
                        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
                            entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_DEEPLINK,
                            autoSelectStep: o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI,
                            bizAiQrHandoffQpId
                        }), {
                            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                            transition: "pop-drawer-fast"
                        });
                    }
                };
            }
        }
    }
    function v(e) {
        const t = [];
        const n = d(e);
        if (n) {
            t.push(n);
        }
        const r = m(e);
        if (r) {
            t.push(r);
        }
        const o = p(e);
        if (o) {
            t.push(o);
        }
        const a = _(e);
        if (a) {
            t.push(a);
        }
        const i = f(e);
        if (i) {
            t.push(i);
        }
        const l = g(e);
        if (l) {
            t.push(l);
        }
        const s = h(e);
        if (s) {
            t.push(s);
        }
        const u = C(e);
        if (u) {
            t.push(u);
        }
        const c = b(e);
        if (c) {
            t.push(c);
        }
        return t;
    }
    function S(e, bannerId, n) {
        new (o("WAWebBannerEventWamEvent")).BannerEventWamEvent({
            bannerType: o("WAWebBizNativeAdsEntryPointUtils").getBannerTypeFromSurfaceId(e),
            bannerOperation: n,
            bannerId
        }).commit();
    }
    function R(e, t) {
        const n = v(e);
        L(e, t, n);
        n.forEach((e)=>{
            switch(t){
                case "primaryActionClick":
                    if (e.onPrimaryClick != null) {
                        e.onPrimaryClick();
                    }
                    break;
                case "dismiss":
                    if (e.onDismiss != null) {
                        e.onDismiss();
                    }
                    break;
                default:
                    if (e.onImpression != null) {
                        e.onImpression();
                    }
            }
        });
    }
    function L(e, t, n) {
        if (!(t !== "primaryActionClick" || e.surfaceId !== o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP || n.length !== 0)) {
            const a = e.data.primaryAction ?? {};
            const i = a.deepLink;
            const l = i == null ? null : o("WAWebApiParse").parseAPICmd(i).resultType;
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[QP] primary action has no handler promotionId=",
                " resultType=",
                ""
            ])), e.id, l).sendLogs("quick-promotion-primary-action-unhandled");
        }
    }
    l.maybeExecuteQuickPromotionCustomHandlingSpec = R;
}, 98);