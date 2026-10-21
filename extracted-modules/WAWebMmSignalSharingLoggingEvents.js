__d("WAWebMmSignalSharingLoggingEvents", [
    "WAWebABProps",
    "WAWebBlockContants",
    "WAWebHandleMsgTypes.flow",
    "WAWebMmSignalSharingConversationCounters",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebWamEnumBlockEntryPoint",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumDisclosureInteraction",
    "WAWebWamEnumDisclosureSource",
    "WAWebWamEnumDisclosureSurface",
    "WAWebWamEnumMmDirectionFrom",
    "WAWebWamEnumMmSignalType",
    "WAWebWamEnumSignalCanceledReason",
    "WAWebWamEnumSignalOrigin",
    "WAWebWamEnumSignalSharingStatus",
    "WAWebWamEnumSignalSurface",
    "WAWebWamEnumSignalType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const mmConversionSchemaVersion = 2;
    const s = {
        type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.MM_CLICK,
        surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD
    };
    const u = {
        1: {
            fromUser: function(t) {
                return [
                    t.FIRST_CUSTOMER_MESSAGE,
                    t.FIRST_CUSTOMER_MESSAGE_CONTINUATION
                ];
            },
            fromBusiness: function(t) {
                return [
                    t.FIRST_BIZ_REPLY,
                    t.FIRST_BIZ_REPLY_CONTINUATION
                ];
            }
        },
        2: {
            fromUser: function(t) {
                return [
                    t.SECOND_CUSTOMER_MESSAGE,
                    t.SECOND_CUSTOMER_MESSAGE_CONTINUATION
                ];
            },
            fromBusiness: function(t) {
                return [
                    t.SECOND_BIZ_REPLY,
                    t.SECOND_BIZ_REPLY_CONTINUATION
                ];
            }
        },
        3: {
            fromUser: function(t) {
                return [
                    t.THIRD_CUSTOMER_MESSAGE,
                    t.THIRD_CUSTOMER_MESSAGE_CONTINUATION
                ];
            },
            fromBusiness: function(t) {
                return [
                    t.THIRD_BIZ_REPLY
                ];
            }
        }
    };
    function c({ chat, eventType, hasShownDisclosure = false, linkTypeIndex, mmCarouselCardIndex, msg }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat.id.toString())) {
            const linkOptions = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingUrls(eventType, msg.unsafe(), linkTypeIndex);
            let origin;
            let p;
            switch(eventType){
                case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK:
                    origin = o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_APP_CLICK;
                    p = o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.APP_CTA_CLICK;
                    break;
                case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK:
                    origin = o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.BODY_URL_CLICK;
                    p = o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.BODY_URL_CLICK;
                    break;
                default:
                    origin = o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_URL_CLICK;
                    p = o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.URL_CTA_CLICK;
                    break;
            }
            const _ = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
            if (linkOptions?.consentedUrl != null || linkOptions?.unconsentedUrl != null || linkOptions?.originalUrl != null) {
                o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingDisclosureStateEvent({
                    chat,
                    hasShownDisclosure,
                    msg,
                    signal: {
                        disclosureEventType: eventType,
                        disclosureSurface: o("WAWebWamEnumDisclosureSurface").DISCLOSURE_SURFACE.CHAT_THREAD,
                        disclosureInteraction: _ && hasShownDisclosure ? o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION.CONTINUE : undefined,
                        disclosureSource: _ && hasShownDisclosure ? o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE.NON_BLOCKING : undefined,
                        mmHasDisclosedUrl: o("WAWebMmSignalSharingModelUtils").existsMmSignalSharingConsentedUrl(msg),
                        mmHasShowDisclosureFlag: o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(msg),
                        userBecameDisclosed: _ && hasShownDisclosure
                    }
                });
                if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingReplacingShimmedLinksEnabled()) {
                    P({
                        chat,
                        mmSignalType: p,
                        mmCtaButtonIndex: eventType !== o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK ? linkTypeIndex : undefined,
                        mmCarouselCardIndex,
                        msgId: msg.id
                    });
                }
            }
            const f = o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && chat.contact?.isContactBlocked;
            let g;
            if (_ && linkOptions?.consentedUrl != null && !f) {
                g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.ONE_PD;
            } else if (!f && (linkOptions?.unconsentedUrl != null || o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
                chat,
                mmSignalType: p,
                msgId: msg.id,
                tokenPath: "undisclosed"
            }) != null)) {
                g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP;
            } else {
                g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.NOT_SHARED;
            }
            o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingVerificationEvent({
                chat,
                msg,
                linkOptions,
                signal: babelHelpers.extends({}, s, {
                    mmSignalType: p,
                    sharingStatus: g,
                    origin
                })
            });
        }
    }
    function d({ chat, eventType, isExplicitCancel, msg }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat.id.toString())) {
            const userBecameDisclosed = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
            const l = eventType === o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK ? {
                mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.BODY_URL_CLICK,
                origin: o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.BODY_URL_CLICK
            } : eventType === o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK ? {
                mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.APP_CTA_CLICK,
                origin: o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_APP_CLICK
            } : {
                mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.URL_CTA_CLICK,
                origin: o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_URL_CLICK
            };
            const { mmSignalType, origin } = l;
            o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingVerificationEvent({
                chat,
                msg,
                signal: babelHelpers.extends({}, s, {
                    mmSignalType,
                    canceledReason: o("WAWebWamEnumSignalCanceledReason").SIGNAL_CANCELED_REASON.DISCLOSURE_DISMISSED,
                    origin,
                    sharingStatus: o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.NOT_SHARED
                })
            });
            o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingDisclosureStateEvent({
                chat,
                msg,
                signal: {
                    disclosureEventType: eventType,
                    disclosureInteraction: isExplicitCancel ? o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION.CANCEL : o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION.DISMISSED,
                    disclosureSource: o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE.NON_BLOCKING,
                    disclosureSurface: o("WAWebWamEnumDisclosureSurface").DISCLOSURE_SURFACE.CHAT_THREAD,
                    mmHasDisclosedUrl: o("WAWebMmSignalSharingModelUtils").existsMmSignalSharingConsentedUrl(msg),
                    mmHasShowDisclosureFlag: o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(msg),
                    userBecameDisclosed
                }
            });
        }
    }
    function m({ chat, eventType }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat.id.toString())) {
            o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingDisclosureStateEvent({
                chat,
                signal: {
                    disclosureEventType: eventType,
                    disclosureInteraction: o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION.LEARN_MORE,
                    disclosureSource: o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE.INFO,
                    disclosureSurface: o("WAWebWamEnumDisclosureSurface").DISCLOSURE_SURFACE.BIZ_PROFILE_SCREEN
                }
            });
        }
    }
    function p({ chat, hasShownDisclosure = false, linkTypeIndex, msg }) {
        c({
            chat,
            eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK,
            hasShownDisclosure,
            linkTypeIndex,
            msg
        });
    }
    function _({ chat, spamFlow }) {
        h({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_REPORT,
            type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_REPORT,
            surface: spamFlow === "account_info_report" ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD
        });
    }
    function f({ blockEntryPoint, blockEntryPointMetric, chat, reason }) {
        h({
            blockEntryPoint,
            chat,
            mmSignalType: S(reason),
            type: v(reason),
            surface: blockEntryPointMetric === o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.PROFILE ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD
        });
    }
    function g({ chat }) {
        P({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_STOP_OFFERS
        });
        h({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_STOP_OFFERS,
            type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_STOP_OFFERS,
            surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
        });
    }
    function h({ blockEntryPoint, chat, mmSignalType, msg, type, surface = o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat?.id?.toString()) && chat && chat.contact?.privacyMode?.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook) {
            o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingVerificationEvent({
                chat,
                msg,
                signal: {
                    type,
                    mmSignalType,
                    surface,
                    signalTypeOrigin: blockEntryPoint,
                    sharingStatus: o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow) ? o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.ONE_PD : o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP
                }
            });
        }
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ contextInfo, msg }) {
            const chatWID = msg.id.remote.toString();
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chatWID)) {
                const i = o("WAWebMmSignalSharingExpirationWindowUtils").getMmSignalSharingExpirationTokens(contextInfo);
                o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingCollectionWindowStateEvent({
                    chatWID,
                    msg,
                    signal: {
                        mmDisclosureFlags: msg.mmSignalSharing?.dataSharingFlags,
                        mmHasDisclosedUrl: o("WAWebMmSignalSharingModelUtils").existsMmSignalSharingConsentedUrl(msg),
                        mmHasShowDisclosureFlag: o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(msg),
                        mmHasDisclosedToken: !!(i != null && i.disclosedToken),
                        mmHasUndisclosedToken: !!(i != null && i.undisclosedToken)
                    }
                });
            }
        });
        return C.apply(this, arguments);
    }
    function b({ blockEntryPointMetric, chat, reason }) {
        if (!(!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat?.id?.toString()) || !o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingBlockAndReportEntryPointsAllowlist().includes(blockEntryPointMetric))) {
            P({
                chat,
                mmSignalType: S(reason)
            });
        }
    }
    function v(reason) {
        if (reason == null) {
            return o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK;
        }
        const n = {
            [o("WAWebBlockContants").BizOptOutReason.NoLongerNeeded]: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK_REASON_NO_LONGER_NEEDED,
            [o("WAWebBlockContants").BizOptOutReason.NoSignUp]: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK_REASON_NO_SIGN_UP,
            [o("WAWebBlockContants").BizOptOutReason.OffensiveMessages]: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK_REASON_OFFENSIVE_MESSAGES,
            [o("WAWebBlockContants").BizOptOutReason.Spam]: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK_REASON_SPAM,
            [o("WAWebBlockContants").BizOptOutReason.Other]: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK_REASON_OTHER
        };
        return n[reason];
    }
    function S(reason) {
        if (reason == null) {
            return o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_BLOCK;
        }
        const n = {
            [o("WAWebBlockContants").BizOptOutReason.NoLongerNeeded]: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_BLOCK_REASON_NO_LONGER_NEEDED,
            [o("WAWebBlockContants").BizOptOutReason.NoSignUp]: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_BLOCK_REASON_NO_SIGN_UP,
            [o("WAWebBlockContants").BizOptOutReason.OffensiveMessages]: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_BLOCK_REASON_OFFENSIVE_MESSAGES,
            [o("WAWebBlockContants").BizOptOutReason.Spam]: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_BLOCK_REASON_SPAM,
            [o("WAWebBlockContants").BizOptOutReason.Other]: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_BLOCK_REASON_OTHER
        };
        return n[reason];
    }
    function R({ chat }) {
        P({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_MUTE
        });
    }
    function L({ blockEntryPointMetric, chat }) {
        if (!(!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat?.id?.toString()) || !o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingBlockAndReportEntryPointsAllowlist().includes(blockEntryPointMetric))) {
            P({
                chat,
                mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_REPORT
            });
        }
    }
    function E({ chat, msg }) {
        P({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_INTERESTED
        });
        h({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_INTERESTED,
            msg,
            type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_INTERESTED
        });
    }
    function k({ chat, msg }) {
        P({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_NOT_INTERESTED
        });
        h({
            chat,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_NOT_INTERESTED,
            msg,
            type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_NOT_INTERESTED
        });
    }
    function I({ chat, newMsg }) {
        if (!(chat.contact?.privacyMode?.hostStorage !== o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook || !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat.id.toString()))) {
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingPostDcOldSchemaEnabled()) {
                D({
                    chat,
                    newMsg
                });
            }
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingPostDcNewSchemaEnabled() && o("WAWebMmSignalSharingConversationCounters").isMmSignalSharingCountedMsg(newMsg)) {
                o("WAWebMmSignalSharingConversationCounters").advanceMmSignalSharingConversationCounters(chat, newMsg.id.fromMe);
                T(chat, newMsg);
            }
        }
    }
    function T(chat, newMsg) {
        const n_type = newMsg.type;
        const a = o("WAWebMmSignalSharingConversationCounters").getMmSignalSharingConversationCounters(chat);
        const { depth, lastMessageFromMe, repeat } = a;
        const mmDirectionFrom = lastMessageFromMe === true ? o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM.CUSTOMER : o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM.BUSINESS;
        if (!(mmDirectionFrom === o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM.BUSINESS && depth === 0)) {
            const c = o("WAWebABProps").getABPropConfigValue("mm_1pd_post_dc_depth_limit");
            if (!(c > 0 && depth > c)) {
                const postDcParams = {
                    mmConversationDepth: depth,
                    mmConversationRepeat: repeat,
                    mmDirectionFrom
                };
                P({
                    chat,
                    mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.MESSAGE,
                    postDcParams: babelHelpers.extends({}, postDcParams, {
                        mmConversionSchemaVersion
                    })
                });
                o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingVerificationEvent({
                    chat,
                    msg: newMsg,
                    signalNativeMessageType: n_type,
                    signal: {
                        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.MESSAGE,
                        postDcParams,
                        sharingStatus: o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow) ? o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.ONE_PD : o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP,
                        surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
                        type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.MESSAGE
                    }
                });
            }
        }
    }
    function D({ chat, newMsg }) {
        const fromMe = newMsg.id.fromMe;
        const a = o("WAWebMmSignalSharingModelUtils").getMmSignalSharingNewMessageParams({
            chat,
            fromMe
        });
        if (a) {
            const { isContinuation, messageOriginGroups } = a;
            const s = x({
                isContinuation,
                isNewMessagefromMe: fromMe,
                messageOriginGroupsCount: messageOriginGroups,
                source: o("WAWebWamEnumSignalType").SIGNAL_TYPE
            });
            const u = x({
                isContinuation,
                isNewMessagefromMe: fromMe,
                messageOriginGroupsCount: messageOriginGroups,
                source: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            });
            if (u != null) {
                P({
                    chat,
                    mmSignalType: u
                });
            }
            if (s != null && u != null) {
                const c = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
                o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingVerificationEvent({
                    chat,
                    msg: newMsg,
                    signal: babelHelpers.extends({
                        type: s,
                        mmSignalType: u,
                        surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD
                    }, c ? {
                        sharingStatus: o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.ONE_PD
                    } : {
                        sharingStatus: o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.NOT_SHARED
                    })
                });
            }
        }
    }
    function x({ isContinuation, isNewMessagefromMe, messageOriginGroupsCount, source }) {
        const signalConfig = u[String(messageOriginGroupsCount)];
        if (signalConfig) {
            return $({
                isContinuation,
                isNewMessagefromMe,
                signalConfig,
                source
            });
        }
        return null;
    }
    function $({ isContinuation, isNewMessagefromMe, signalConfig, source }) {
        const l = isNewMessagefromMe ? signalConfig.fromUser : signalConfig.fromBusiness;
        if (isContinuation) {
            return l(source)?.[1];
        }
        return l(source)?.[0];
    }
    function P({ chat, deepConversationParams, mmCarouselCardIndex, mmCtaButtonIndex, mmSignalType, msgId, postDcParams }) {
        if (!(!chat || !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat?.id?.toString()))) {
            if (o("WAWebMmSignalSharingLoggingUtils").isClickSignalType(mmSignalType) && o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingReplacingShimmedLinksEnabled()) {
                N({
                    chat,
                    mmSignalType,
                    mmCtaButtonIndex,
                    mmCarouselCardIndex,
                    deepConversationParams,
                    msgId
                });
                return;
            }
            const c = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
                chat,
                mmSignalType,
                deepConversationParams,
                msgId
            });
            if (chat && c != null && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow) && (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || !chat.contact.isContactBlocked)) {
                o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
                    chat,
                    signal: {
                        mmSignalType,
                        mmSignalData: c,
                        postDcParams
                    }
                });
            }
        }
    }
    function N({ chat, deepConversationParams, mmCarouselCardIndex, mmCtaButtonIndex, mmSignalType, msgId }) {
        const s = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
        const u = o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && chat.contact.isContactBlocked;
        const c = o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow);
        if (s && c && !u) {
            const d = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
                chat,
                mmSignalType,
                deepConversationParams,
                msgId,
                tokenPath: "disclosed"
            });
            if (d != null) {
                o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
                    chat,
                    signal: {
                        mmSignalType,
                        mmSignalData: d,
                        isDisclosed: true,
                        mmCtaButtonIndex,
                        mmCarouselCardIndex
                    }
                });
                return;
            }
        }
        if (o("WAWebMmSignalSharingGatingUtils").isSignalTypeAllowlisted(mmSignalType, false) && !u) {
            const m = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
                chat,
                mmSignalType,
                deepConversationParams,
                msgId,
                tokenPath: "undisclosed"
            });
            if (m != null) {
                o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
                    chat,
                    signal: {
                        mmSignalType,
                        mmSignalData: m,
                        isDisclosed: false,
                        mmCtaButtonIndex,
                        mmCarouselCardIndex
                    }
                });
                return;
            }
        }
    }
    l.logMmSignalSharingLinkClickEvent = c;
    l.logMmSignalSharingDisclosureCancelEvent = d;
    l.logMmSignalSharingDisclosureLearnMoreEvent = m;
    l.logMmSignalSharingAppCtaClickEvent = p;
    l.logMmSignalSharingReportVerificationEvent = _;
    l.logMmSignalSharingBlockVerificationEvent = f;
    l.logMmSignalSharingUserStopOffersVerificationEvent = g;
    l.logMmSignalSharingUpdateExpirationWindowEvent = y;
    l.logMmSignalSharingUserBlockWithReasonEvent = b;
    l.logMmSignalSharingUserMuteEvent = R;
    l.logMmSignalSharingUserReportEvent = L;
    l.logMmSignalSharingUserInterestedEvent = E;
    l.logMmSignalSharingUserNotInterestedEvent = k;
    l.logMmSignalSharingNewMessageEvent = I;
}, 98);