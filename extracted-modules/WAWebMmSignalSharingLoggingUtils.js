__d("WAWebMmSignalSharingLoggingUtils", [
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebLidMigrationUtils",
    "WAWebMmCollectionWindowStateEventWamEvent",
    "WAWebMmDisclosureStateEventWamEvent",
    "WAWebMmDisclosureStateFsEventWamEvent",
    "WAWebMmSignalRealtimeWebWamEvent",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebMmSignalSharingVerificationEventWamEvent",
    "WAWebMmSignalSharingVerificationFsEventWamEvent",
    "WAWebMmSignalSharingVerificationWithSignalDataEventWamEvent",
    "WAWebMmSignalUndisclosedWebWamEvent",
    "WAWebMmSignalWamEvent",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumDisclosureSuppressionReason",
    "WAWebWamEnumMmSignalType",
    "WAWebWamEnumOnePdSignalNotSharedReason",
    "WAWebWamEnumSignalMessageType",
    "WAWebWamEnumSignalOrigin",
    "WAWebWamEnumSignalSharingStatus",
    "WAWebWamEnumSignalType",
    "WAWebWamEnumSpSignalNotSharedReason",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, linkOptions, msg, signal, signalNativeMessageType }) {
            if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat.id.toString())) {
                return;
            }
            const d = o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingOptimizedDeliverySignalCollectionConfig();
            const { consented_types_allowlist, non_consented_types_allowlist } = d;
            const _ = o("WAWebMmSignalSharingModelUtils").getMmSignalSharingExpirationWindowItem({
                chat
            });
            if (!_ && !linkOptions && signal.canceledReason == null) {
                return;
            }
            const isUserDisclosed = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
            const isSignalAllowlisted = consented_types_allowlist.includes(signal.mmSignalType) || non_consented_types_allowlist.includes(signal.mmSignalType);
            const signalTypeOrigin = k(signal.signalTypeOrigin, signal.origin);
            const v = babelHelpers.extends({
                isCompanionDevice: true,
                isUserDisclosed,
                signalCanceledReason: signal.canceledReason,
                signalMessageState: signal.messageState,
                signalOrigin: signal.origin,
                signalTypeOrigin,
                signalSurface: signal.surface,
                signalType: signal.type,
                mmConversationDepth: signal.postDcParams?.mmConversationDepth,
                mmConversationRepeat: signal.postDcParams?.mmConversationRepeat,
                mmDirectionFrom: signal.postDcParams?.mmDirectionFrom
            }, msg && {
                signalMessageType: msg?.type === o("WAWebMsgType").MSG_TYPE.HSM ? o("WAWebWamEnumSignalMessageType").SIGNAL_MESSAGE_TYPE.HSM : o("WAWebWamEnumSignalMessageType").SIGNAL_MESSAGE_TYPE.NFM
            });
            const businessLidOrJid = g(chat.id.toString());
            const collectionWindowId = E(chat, linkOptions, _);
            const online = r("WAWebNetworkStatus").online;
            const threadIdHmac = (yield o("WAWebChatThreadLogging").getChatThreadIDHMAC(chat.id.toString())) || "";
            const mmSignalData = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
                chat,
                mmSignalType: signal.mmSignalType,
                deepConversationParams: {
                    isNewMessagefromMe: msg?.id.fromMe
                }
            });
            const isUserMatched = _?.disclosedToken != null || linkOptions?.consentedUrl != null;
            function x(isShimmingSignal, onePdSignalNotSharedReason, spSignalNotSharedReason, signalSharingStatus) {
                const a = babelHelpers.extends({}, v, {
                    onePdSignalNotSharedReason,
                    signalSharingStatus,
                    spSignalNotSharedReason
                });
                const i = new (o("WAWebMmSignalSharingVerificationEventWamEvent")).MmSignalSharingVerificationEventWamEvent(babelHelpers.extends({}, a, {
                    businessLidOrJid,
                    collectionWindowId,
                    isNetworkAvailable: online,
                    isShimmingSignal,
                    signalNativeMessageType: signal.type === o("WAWebWamEnumSignalType").SIGNAL_TYPE.MESSAGE && signal.postDcParams != null && o("WAWebMmSignalSharingGatingUtils").isNativeMessageTypeEnabled() ? signalNativeMessageType : undefined
                }, msg?.templateId != null ? {
                    templateId: msg.templateId
                } : {}));
                const l = new (o("WAWebMmSignalSharingVerificationFsEventWamEvent")).MmSignalSharingVerificationFsEventWamEvent(babelHelpers.extends({}, a, {
                    threadIdHmac,
                    isShimmingSignal
                }));
                const d = new (o("WAWebMmSignalSharingVerificationWithSignalDataEventWamEvent")).MmSignalSharingVerificationWithSignalDataEventWamEvent(babelHelpers.extends({}, a, {
                    isNetworkAvailable: online,
                    isShimmingSignal,
                    mmSignalData,
                    isUserMatched
                }));
                i.commit();
                l.commit();
                d.commit();
            }
            const $ = signal.type === o("WAWebWamEnumSignalType").SIGNAL_TYPE.MM_CLICK;
            if ($) {
                const P = b({
                    chat,
                    isUserDisclosed,
                    linkOptions,
                    signal
                });
                x(true, P.onePdReason, P.spReason, P.sharingStatus);
                if (signal.canceledReason == null && o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingReplacingShimmedLinksEnabled()) {
                    const N = C({
                        chat,
                        isSignalAllowlisted,
                        isUserDisclosed,
                        linkOptions,
                        mmSignalSharingExpirationWindowItem: _,
                        signal
                    });
                    x(false, N.onePdReason, N.spReason, N.sharingStatus);
                }
            } else {
                const M = C({
                    chat,
                    isSignalAllowlisted,
                    isUserDisclosed,
                    linkOptions,
                    mmSignalSharingExpirationWindowItem: _,
                    signal
                });
                x(false, M.onePdReason, M.spReason, M.sharingStatus);
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, hasShownDisclosure, msg, signal }) {
            if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat.id.toString())) {
                const i = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
                const disclosureSuppressionReason = h({
                    chat,
                    eventType: signal.disclosureEventType,
                    hasShownDisclosure,
                    isDisclosureTosAccepted: i,
                    msg
                });
                const s = {
                    disclosureEventType: signal.disclosureEventType,
                    disclosureInteraction: signal.disclosureInteraction,
                    disclosureSource: signal.disclosureSource,
                    disclosureSuppressionReason,
                    disclosureSurface: signal.disclosureSurface,
                    isCompanionDevice: true,
                    isUserDisclosed: i,
                    mmHasDisclosedUrl: signal.mmHasDisclosedUrl,
                    mmHasShowDisclosureFlag: signal.mmHasShowDisclosureFlag,
                    userBecameDisclosed: signal.userBecameDisclosed
                };
                const u = new (o("WAWebMmDisclosureStateEventWamEvent")).MmDisclosureStateEventWamEvent(babelHelpers.extends({}, s, {
                    businessLidOrJid: g(chat.id.toString())
                }, msg?.templateId != null ? {
                    templateId: msg.templateId
                } : {}));
                const c = new (o("WAWebMmDisclosureStateFsEventWamEvent")).MmDisclosureStateFsEventWamEvent(babelHelpers.extends({}, s, {
                    threadIdHmac: (yield o("WAWebChatThreadLogging").getChatThreadIDHMAC(chat.id.toString())) || ""
                }));
                u.commit();
                c.commit();
            }
        });
        return d.apply(this, arguments);
    }
    function m({ chatWID, msg, signal }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chatWID)) {
            const a = new (o("WAWebMmCollectionWindowStateEventWamEvent")).MmCollectionWindowStateEventWamEvent(babelHelpers.extends({
                businessLidOrJid: g(chatWID),
                isUserDisclosed: o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted(),
                mmDisclosureFlags: signal.mmDisclosureFlags,
                mmHasDisclosedToken: signal.mmHasDisclosedToken,
                mmHasDisclosedUrl: signal.mmHasDisclosedUrl,
                mmHasShowDisclosureFlag: signal.mmHasShowDisclosureFlag,
                mmHasUndisclosedToken: signal.mmHasUndisclosedToken
            }, msg?.templateId != null ? {
                templateId: msg.templateId
            } : {}));
            a.commit();
        }
    }
    function p(e) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return false;
        }
        const t = [
            o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.URL_CTA_CLICK,
            o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.APP_CTA_CLICK,
            o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.BODY_URL_CLICK
        ];
        return t.includes(e);
    }
    function _({ isDisclosed, mmCarouselCardIndex, mmCtaButtonIndex, mmSignalData, mmSignalType }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            if (isDisclosed) {
                new (o("WAWebMmSignalRealtimeWebWamEvent")).MmSignalRealtimeWebWamEvent({
                    mmSignalData,
                    mmSignalType,
                    mmCtaButtonIndex,
                    mmCarouselCardIndex
                }).commit();
            } else {
                new (o("WAWebMmSignalUndisclosedWebWamEvent")).MmSignalUndisclosedWebWamEvent({
                    mmSignalData,
                    mmSignalType,
                    mmCtaButtonIndex,
                    mmCarouselCardIndex
                }).commit();
            }
        }
    }
    function f({ chat, signal }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(chat.id.toString())) {
            if (p(signal.mmSignalType) && o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingReplacingShimmedLinksEnabled()) {
                _({
                    isDisclosed: signal.isDisclosed ?? false,
                    mmCarouselCardIndex: signal.mmCarouselCardIndex,
                    mmCtaButtonIndex: signal.mmCtaButtonIndex,
                    mmSignalData: signal.mmSignalData,
                    mmSignalType: signal.mmSignalType
                });
                return;
            }
            const a = new (o("WAWebMmSignalWamEvent")).MmSignalWamEvent(babelHelpers.extends({
                mmSignalData: signal.mmSignalData,
                mmSignalType: signal.mmSignalType,
                disclosed: o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted()
            }, signal.postDcParams));
            a.commit();
        }
    }
    function g(t) {
        if (!r("WAWebWid").isRegularUserNoImply(t)) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mmSignalSharing] chat ID type unknown: ",
                ""
            ])), t).sendLogs("wa-mm-signal-sharing-failed-to-determine-chat-id-type");
            return "";
        }
        const n = o("WAWebWidFactory").createUserWidOrThrow(t);
        const a = o("WAWebLidMigrationUtils").toPn(n);
        const i = o("WAWebLidMigrationUtils").toLid(n);
        if (o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingVerificationSystemLidEnabled() && i) {
            return i.toString();
        }
        if (a) {
            return a.toJid();
        }
        return n.toString();
    }
    function h({ chat, eventType, hasShownDisclosure, isDisclosureTosAccepted, msg }) {
        if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && chat.contact.isContactBlocked) {
            return o("WAWebWamEnumDisclosureSuppressionReason").DISCLOSURE_SUPPRESSION_REASON.BLOCKED;
        }
        if (!msg || !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(msg)) {
            return o("WAWebWamEnumDisclosureSuppressionReason").DISCLOSURE_SUPPRESSION_REASON.NO_SHOW_MM_DISCLOSURE_FLAG;
        }
        if (eventType === o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK && !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled()) {
            return o("WAWebWamEnumDisclosureSuppressionReason").DISCLOSURE_SUPPRESSION_REASON.BODY_LINK_DISCLOSURE_AB_PROP_DISABLED;
        }
        if (isDisclosureTosAccepted && hasShownDisclosure !== true) {
            return o("WAWebWamEnumDisclosureSuppressionReason").DISCLOSURE_SUPPRESSION_REASON.DISCLOSED;
        }
    }
    function y(chat, mmSignalSharingExpirationWindowItem, linkOptions, isUserDisclosed, isSignalAllowlisted) {
        if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && chat.contact.isContactBlocked) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.BLOCKED;
        }
        if (!isUserDisclosed) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.USER_UNDISCLOSED_OR_NOT_ELIGIBLE_FOR_DISCLOSURE;
        }
        if (!o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow)) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.WINDOW_EXPIRED;
        }
        if (linkOptions && linkOptions?.consentedUrl == null) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
        }
        if (!isSignalAllowlisted) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.SIGNAL_NOT_ALLOWLISTED;
        }
        const i = o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingOptimizedDeliverySignalCollectionConfig();
        const i_consented_collection_window_in_hours = i.consented_collection_window_in_hours;
        if (mmSignalSharingExpirationWindowItem && o("WAWebMmSignalSharingExpirationWindowUtils").hasMmSignalSharingTokenExpired(mmSignalSharingExpirationWindowItem, i_consented_collection_window_in_hours)) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.TOKEN_EXPIRED;
        }
    }
    function C({ chat, isSignalAllowlisted, isUserDisclosed, linkOptions, mmSignalSharingExpirationWindowItem, signal }) {
        const l = signal.canceledReason != null ? undefined : y(chat, mmSignalSharingExpirationWindowItem, linkOptions, isUserDisclosed, isSignalAllowlisted);
        const s = l == null || signal.canceledReason != null ? undefined : R(mmSignalSharingExpirationWindowItem, isSignalAllowlisted);
        const u = L(signal.sharingStatus, isSignalAllowlisted, l, s);
        return {
            onePdReason: l,
            spReason: s,
            sharingStatus: u
        };
    }
    function b({ chat, isUserDisclosed, linkOptions, signal }) {
        const a = signal.canceledReason != null ? undefined : v(chat, linkOptions, isUserDisclosed);
        const i = a == null || signal.canceledReason != null ? undefined : S(linkOptions);
        const l = L(signal.sharingStatus, true, a, i);
        return {
            onePdReason: a,
            spReason: i,
            sharingStatus: l
        };
    }
    function v(chat, linkOptions, isUserDisclosed) {
        if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && chat.contact.isContactBlocked) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.BLOCKED;
        }
        if (!isUserDisclosed) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.USER_UNDISCLOSED_OR_NOT_ELIGIBLE_FOR_DISCLOSURE;
        }
        if (!o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow)) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.WINDOW_EXPIRED;
        }
        if (linkOptions && linkOptions?.consentedUrl == null) {
            return o("WAWebWamEnumOnePdSignalNotSharedReason").ONE_PD_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
        }
    }
    function S(linkOptions) {
        if (linkOptions && linkOptions?.unconsentedUrl == null) {
            return o("WAWebWamEnumSpSignalNotSharedReason").SP_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
        }
    }
    function R(mmSignalSharingExpirationWindowItem, isSignalAllowlisted) {
        if (mmSignalSharingExpirationWindowItem?.undisclosedToken == null) {
            return o("WAWebWamEnumSpSignalNotSharedReason").SP_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
        }
        if (!isSignalAllowlisted) {
            return o("WAWebWamEnumSpSignalNotSharedReason").SP_SIGNAL_NOT_SHARED_REASON.SIGNAL_NOT_ALLOWLISTED;
        }
        const n = o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingOptimizedDeliverySignalCollectionConfig();
        const n_consented_collection_window_in_hours = n.consented_collection_window_in_hours;
        if (mmSignalSharingExpirationWindowItem && o("WAWebMmSignalSharingExpirationWindowUtils").hasMmSignalSharingTokenExpired(mmSignalSharingExpirationWindowItem, n_consented_collection_window_in_hours)) {
            return o("WAWebWamEnumSpSignalNotSharedReason").SP_SIGNAL_NOT_SHARED_REASON.TOKEN_EXPIRED;
        }
    }
    function L(sharingStatus, t, n, r) {
        if (!t) {
            return o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.NOT_SHARED;
        }
        let a = sharingStatus;
        if (a === o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.ONE_PD && n != null) {
            a = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP;
        }
        if (a === o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP && r != null) {
            a = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.NOT_SHARED;
        }
        return a;
    }
    function E(chat, linkOptions, n) {
        if (!(chat.mmSignalSharingExpirationWindow == null || n?.unixTime == null)) {
            const r = linkOptions ? n.unixTime.server : n.unixTime.client;
            return btoa(String(r * 1000));
        }
    }
    function k(signalTypeOrigin, origin) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingVerificationNewSignalTypeOriginEnabled()) {
            return signalTypeOrigin ?? I(origin);
        }
    }
    function I(origin) {
        if (origin != null) {
            const t = Object.keys(o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN).find((t)=>o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN[t] === origin);
            return t?.toLowerCase();
        }
    }
    l.logMmSignalSharingVerificationEvent = s;
    l.logMmSignalSharingDisclosureStateEvent = c;
    l.logMmSignalSharingCollectionWindowStateEvent = m;
    l.isClickSignalType = p;
    l.logMmSignalSharingClickEvent = _;
    l.logMmSignalSharingEvent = f;
}, 98);