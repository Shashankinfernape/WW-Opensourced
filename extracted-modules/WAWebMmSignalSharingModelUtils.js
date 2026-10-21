__d("WAWebMmSignalSharingModelUtils", [
    "WAWebABProps",
    "WAWebHandleMsgTypes.flow",
    "WAWebMmSignalSharingContextInfo",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebURLUtils",
    "WAWebWamEnumDisclosureEventType"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        DISCLOSURE_ON_CLICK: 1,
        DISCLOSURE_ON_READ: 2,
        DISCLOSURE_ON_CLICK_AND_READ: 3
    };
    function s(e, t) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return e.contact?.privacyMode?.hostStorage === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook && o("WAWebMsgGetters").getIsMarketingTemplateTag(t) || u(t) === true && o("WAWebABProps").getABPropConfigValue("mm_data_sharing_disclosure_enabled_companion_history_sync");
        }
        return false;
    }
    function u(t) {
        return Object.values(e).includes(t.mmSignalSharing?.dataSharingFlags);
    }
    function c({ btnIndex, chat, defaultUrl, isMmSignalSharingDisclosureTosAccepted, msg }) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return defaultUrl;
        }
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingReplacingShimmedLinksEnabled()) {
            const c = E(msg, btnIndex) ?? {};
            const { consentedUrl, originalUrl, unconsentedUrl } = c;
            if (isMmSignalSharingDisclosureTosAccepted) {
                let _;
                if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && (_ = chat.contact) != null && _.isContactBlocked) {
                    return unconsentedUrl ?? originalUrl ?? defaultUrl;
                }
                return consentedUrl ?? unconsentedUrl ?? originalUrl ?? defaultUrl;
            }
            return unconsentedUrl ?? originalUrl ?? defaultUrl;
        }
        if (s(chat, msg) && isMmSignalSharingDisclosureTosAccepted) {
            const C = E(msg, btnIndex) ?? {};
            const { consentedUrl, originalUrl, unconsentedUrl } = C;
            return v({
                chat,
                consentedUrl,
                defaultUrl,
                originalUrl,
                unconsentedUrl
            });
        }
        return defaultUrl;
    }
    function d({ chat, defaultUrl, isMmSignalSharingDisclosureTosAccepted, msg }) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return {
                link: defaultUrl,
                index: 0
            };
        }
        const urlTrackingMapElements = o("WAWebMmSignalSharingContextInfo").getCappedMmSignalSharingURLTrackingMapElements(msg.mmSignalSharing?.urlTrackingMapElements) ?? [];
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingReplacingShimmedLinksEnabled()) {
            return R({
                chat,
                defaultUrl,
                isMmSignalSharingDisclosureTosAccepted,
                msg,
                urlTrackingMapElements
            });
        }
        if (s(chat, msg) && isMmSignalSharingDisclosureTosAccepted) {
            let c = 0;
            for (const d of urlTrackingMapElements){
                const { consentedUsersUrl, originalUrl, unconsentedUsersUrl } = d;
                if (S(originalUrl) === S(defaultUrl)) {
                    return L({
                        defaultUrl,
                        index: c,
                        link: v({
                            chat,
                            consentedUrl: consentedUsersUrl,
                            defaultUrl,
                            originalUrl,
                            unconsentedUrl: unconsentedUsersUrl
                        })
                    });
                }
                c++;
            }
        }
        return {
            link: defaultUrl,
            index: undefined
        };
    }
    function m(e, t, n) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            switch(e){
                case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_URL_CLICK:
                    return E(t, n);
                case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.CTA_APP_CLICK:
                    return E(t, n);
                case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK:
                    return k(t, n);
                default:
                    return null;
            }
        }
    }
    function p(e) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return false;
        }
        for(let r = 0; r < (e.interactivePayload?.buttons?.length ?? 0); r++){
            const s = E(e, r) ?? {};
            const u = s.consentedUrl;
            if (u != null) {
                return true;
            }
        }
        for(let c = o("WAWebMmSignalSharingContextInfo").getCappedMmSignalSharingURLTrackingMapElements(e.mmSignalSharing?.urlTrackingMapElements) ?? [], d = 0; d < c.length; d++){
            if (c[d].consentedUsersUrl != null) {
                return true;
            }
        }
        return false;
    }
    const _ = new Set([
        o("WAWebMsgType").MSG_TYPE.CHAT,
        o("WAWebMsgType").MSG_TYPE.INTERACTIVE
    ]);
    function f({ chat, fromMe }) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return null;
        }
        const i = new Map(chat.mmSignalSharingExpirationWindow?.map(function(e) {
            return [
                e.messageId.id,
                e
            ];
        }));
        const l = chat.msgs.getModelsArray().filter((e)=>_.has(e.type));
        let s;
        let u = false;
        let messageOriginGroups = 0;
        let d;
        for(d = l.length - 1; d >= 0; d--){
            if (b(l[d]) && l[d].id.fromMe === fromMe && !C(l, d)) {
                messageOriginGroups++;
            }
            if (!u) {
                u = l[d].id.fromMe;
            }
            s = i.get(l[d].id.id);
            if (s?.disclosedToken != null || s?.undisclosedToken != null) {
                break;
            }
        }
        if (fromMe === false && l[d + 1]?.id.fromMe === false) {
            messageOriginGroups--;
        }
        return {
            mmSignalSharingExpirationWindowItem: s,
            messageOriginGroups,
            isContinuation: C(l, l.length - 1)
        };
    }
    function g({ chat, deepConversationParams, mmSignalType, msgId, tokenPath }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            const expirationWindowItem = h({
                chat,
                deepConversationParams,
                msgId
            });
            const s = o("WAWebMmSignalSharingGatingUtils").getMmSignalSharingOptimizedDeliverySignalCollectionConfig();
            const { consented_collection_window_in_hours, consented_types_allowlist, non_consented_collection_window_in_hours, non_consented_types_allowlist } = s;
            if (expirationWindowItem) {
                switch(tokenPath){
                    case "disclosed":
                        return y({
                            allowlist: consented_types_allowlist,
                            expirationTimeInHours: consented_collection_window_in_hours,
                            expirationWindowItem,
                            mmSignalType,
                            token: expirationWindowItem.disclosedToken
                        });
                    case "undisclosed":
                        return y({
                            allowlist: non_consented_types_allowlist,
                            expirationTimeInHours: non_consented_collection_window_in_hours,
                            expirationWindowItem,
                            mmSignalType,
                            token: expirationWindowItem.undisclosedToken
                        });
                    default:
                        return y({
                            allowlist: consented_types_allowlist,
                            expirationTimeInHours: consented_collection_window_in_hours,
                            expirationWindowItem,
                            mmSignalType,
                            token: expirationWindowItem.disclosedToken
                        }) ?? y({
                            allowlist: non_consented_types_allowlist,
                            expirationTimeInHours: non_consented_collection_window_in_hours,
                            expirationWindowItem,
                            mmSignalType,
                            token: expirationWindowItem.undisclosedToken
                        });
                }
            }
        }
    }
    function h({ chat, deepConversationParams, msgId }) {
        if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            if (deepConversationParams) {
                const i = f({
                    chat,
                    fromMe: deepConversationParams.isNewMessagefromMe
                });
                const l = i ?? {};
                const s = l.mmSignalSharingExpirationWindowItem;
                return s;
            }
            if (msgId) {
                const c = chat.mmSignalSharingExpirationWindow?.find(function(e) {
                    return e.messageId.id === msgId.id && (e.disclosedToken != null || e.undisclosedToken != null);
                });
                if (c) {
                    return c;
                }
            }
            return chat.mmSignalSharingExpirationWindow?.findLast(function(e) {
                return e.disclosedToken != null || e.undisclosedToken != null;
            });
        }
    }
    function y({ allowlist, expirationTimeInHours, expirationWindowItem, mmSignalType, token }) {
        if (mmSignalType != null && allowlist.includes(mmSignalType) && !o("WAWebMmSignalSharingExpirationWindowUtils").hasMmSignalSharingWindowExpired(expirationWindowItem) && !o("WAWebMmSignalSharingExpirationWindowUtils").hasMmSignalSharingTokenExpired(expirationWindowItem, expirationTimeInHours)) {
            return token;
        }
    }
    function C(e, t) {
        return e.length > 1 && t >= 1 && b(e[t]) && b(e[t - 1]) && e[t].id.fromMe === e[t - 1].id.fromMe;
    }
    function b(e) {
        return e.mmSignalSharing?.existsDisclosedToken !== true && e.mmSignalSharing?.existsUndisclosedToken !== true;
    }
    function v({ chat, consentedUrl, defaultUrl, originalUrl, unconsentedUrl }) {
        if (!o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
            return null;
        }
        if (o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(chat.mmSignalSharingExpirationWindow)) {
            let s;
            if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && (s = chat.contact) != null && s.isContactBlocked) {
                return unconsentedUrl ?? originalUrl ?? defaultUrl;
            }
            return consentedUrl ?? unconsentedUrl ?? originalUrl ?? defaultUrl;
        }
        return unconsentedUrl ?? originalUrl ?? defaultUrl;
    }
    function S(e) {
        if (e == null) {
            return "";
        }
        return e.replace(/\/$/, "");
    }
    function R({ chat, defaultUrl, isMmSignalSharingDisclosureTosAccepted, msg, urlTrackingMapElements }) {
        if (!s(chat, msg)) {
            return {
                link: defaultUrl,
                index: undefined
            };
        }
        let l = 0;
        for (const u of urlTrackingMapElements){
            const { consentedUsersUrl, originalUrl, unconsentedUsersUrl } = u;
            if (S(originalUrl) === S(defaultUrl)) {
                let link;
                if (isMmSignalSharingDisclosureTosAccepted) {
                    let _;
                    if (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() && (_ = chat.contact) != null && _.isContactBlocked) {
                        link = unconsentedUsersUrl ?? originalUrl ?? defaultUrl;
                    } else {
                        link = consentedUsersUrl ?? unconsentedUsersUrl ?? originalUrl ?? defaultUrl;
                    }
                } else {
                    link = unconsentedUsersUrl ?? originalUrl ?? defaultUrl;
                }
                return L({
                    defaultUrl,
                    index: l,
                    link
                });
            }
            l++;
        }
        return {
            link: defaultUrl,
            index: undefined
        };
    }
    function L({ defaultUrl, index, link }) {
        if (link == null || !r("WAWebURLUtils").isHttp(link.trim())) {
            return {
                link: defaultUrl,
                index: undefined
            };
        }
        return {
            link,
            index
        };
    }
    function E(e, t) {
        if (t != null) {
            const o = e.interactivePayload?.buttons?.[t] ?? {};
            const a = o.buttonParamsJson;
            if (a != null) {
                const i = JSON.parse(a);
                const { consented_users_url, unconsented_users_url, url } = i;
                return {
                    originalUrl: url,
                    consentedUrl: consented_users_url,
                    unconsentedUrl: unconsented_users_url
                };
            }
        }
    }
    function k(e, t) {
        if (t != null) {
            const i = o("WAWebMmSignalSharingContextInfo").getCappedMmSignalSharingURLTrackingMapElements(e.mmSignalSharing?.urlTrackingMapElements)?.[t] ?? {};
            const { consentedUsersUrl, originalUrl, unconsentedUsersUrl } = i;
            return {
                consentedUrl: consentedUsersUrl,
                unconsentedUrl: unconsentedUsersUrl,
                originalUrl
            };
        }
    }
    l.isDisclosureEnabledForMm = s;
    l.isDisclosureEnabledForMsg = u;
    l.getCTALinkForMmSignalSharing = c;
    l.getBodyLinkForMmSignalSharing = d;
    l.getMMSignalSharingUrls = m;
    l.existsMmSignalSharingConsentedUrl = p;
    l.MM_SIGNAL_SHARING_COUNTED_MSG_TYPES = _;
    l.getMmSignalSharingNewMessageParams = f;
    l.getMMSignalSharingData = g;
    l.getMmSignalSharingExpirationWindowItem = h;
    l.isMmSignalSharingNewMessageParamsEligible = b;
}, 98);