__d("WAWebNewsletterModelUtils", [
    "WAFilterObjectNullishProps",
    "WALogger",
    "WATimeUtils",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterGatingUtils",
    "WAWebWidFactory",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 1;
    const c = -1;
    const d = 0;
    function m(e) {
        if (e == null) {
            return null;
        }
        const t = Number(e);
        if (Number.isNaN(t)) {
            return null;
        }
        return t;
    }
    function p(e, t) {
        if (e == null && t == null) {
            return null;
        }
        return {
            lastStatusServerId: m(e),
            lastStatusSentTime: m(t)
        };
    }
    const _ = "admin";
    const f = "follower";
    function g(e) {
        return e === "verified";
    }
    function h(e) {
        const t = R(e);
        y(t);
        return C(t);
    }
    function y(t) {
        const r = t.newsletterMembershipMetadataMixin?.membershipType;
        const a = r == null || r === "guest";
        if (!a) {
            const i = "Trying to map an already subscribed newsletter";
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][throwIfNewsletterNotPreview] ",
                ""
            ])), i).tags("newsletter").sendLogs("newsletter-converting-already-subscribed-newsletter");
        }
    }
    function C(e) {
        const t = v(e);
        t.muteExpiration = c;
        t.isReadOnly = true;
        return t;
    }
    function b(e) {
        return e === "admin" || e === "owner";
    }
    function v(e) {
        const a = e.newsletterNameMetadataMixin?.nameElementValue;
        const i = e.newsletterMembershipMetadataMixin?.membershipType;
        const l = e.newsletterCreationTimeMetadataMixin?.creationTimeValue;
        const s = k(e, "MUTE_ADMIN_ACTIVITY");
        return babelHelpers.extends({
            id: o("WAWebWidFactory").createWid(e.idJid),
            name: a ?? undefined,
            isReadOnly: i != null ? !b(i) : undefined,
            t: l != null ? o("WATimeUtils").castToUnixTime(l) : undefined
        }, s != null && {
            muteExpiration: s
        });
    }
    function S(e) {
        const t = E(e);
        t.membershipType = o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
        return t;
    }
    function R(e) {
        return {
            idJid: e.idJid,
            newsletterCreationTimeMetadataMixin: e.newsletterCreationTimeMetadataMixin,
            newsletterNameMetadataMixin: e.newsletterNameMetadataMixin,
            newsletterPictureMetadataMixin: e.newsletterPictureMetadataMixin,
            newsletterDescriptionMetadataMixin: e.newsletterDescriptionMetadataMixin,
            newsletterInviteLinkMetadataMixin: e.newsletterInviteLinkMetadataMixin,
            newsletterSubscribersMetadataMixin: e.newsletterSubscribersMetadataMixin,
            newsletterPrivacyMetadataMixin: e.newsletterPrivacyMetadataMixin,
            newsletterVerificationMetadataMixin: e.newsletterVerificationMetadataMixin,
            hasNewsletterLinkedAccountsMetadataMixin: false,
            newsletterMembershipMetadataMixin: null,
            newsletterUserSettingsMetadataMixin: [],
            newsletterStateMetadataMixin: null,
            newsletterStatusMetadata: e.newsletterStatusMetadata
        };
    }
    function L(e) {
        const t = R(e);
        y(t);
        return S(t);
    }
    function E(e) {
        const f = e.newsletterVerificationMetadataMixin?.verificationState;
        const h = e.newsletterStateMetadataMixin?.stateType;
        const y = e.newsletterMembershipMetadataMixin?.membershipType;
        const C = e.newsletterPrivacyMetadataMixin?.privacyType;
        const b = babelHelpers.extends({
            creationTime: e.newsletterCreationTimeMetadataMixin?.creationTimeValue,
            name: e.newsletterNameMetadataMixin?.nameElementValue,
            nameUpdateTime: e.newsletterNameMetadataMixin?.nameUpdateTime,
            description: e.newsletterDescriptionMetadataMixin?.descriptionQueryDescriptionResponseMixin?.elementValue,
            descriptionUpdateTime: e.newsletterDescriptionMetadataMixin?.descriptionQueryDescriptionResponseMixin?.updateTime,
            inviteCode: e.newsletterInviteLinkMetadataMixin?.inviteCode,
            size: e.newsletterSubscribersMetadataMixin?.subscribersCount,
            verified: f != null ? g(f) : undefined,
            membershipType: y != null ? o("WAWebCommonNewsletterEnums").NewsletterMembershipType.cast(y) : undefined,
            reactionCodesSetting: Object.prototype.hasOwnProperty.call(e, "newsletterReactionCodesSettingMetadataMixin") ? e?.newsletterReactionCodesSettingMetadataMixin ?? o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All : undefined,
            privacy: C != null ? o("WAWebCommonNewsletterEnums").NewsletterPrivacy.cast(C) : undefined,
            website: undefined,
            followerActivityMuteExpiration: k(e, "MUTE_FOLLOWER_ACTIVITY"),
            suspended: h != null ? o("WAWebCommonNewsletterEnums").NewsletterState.cast(h) === o("WAWebCommonNewsletterEnums").NewsletterState.Suspended || o("WAWebCommonNewsletterEnums").NewsletterState.cast(h) === o("WAWebCommonNewsletterEnums").NewsletterState.GeoSuspended : undefined,
            geosuspended: h != null ? o("WAWebCommonNewsletterEnums").NewsletterState.cast(h) === o("WAWebCommonNewsletterEnums").NewsletterState.GeoSuspended : undefined
        }, o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled() && {
            wamoSubPlanId: e.newsletterWamoSubPlanIdMetadataMixin,
            wamoSubStatus: e.newsletterWamoSubStatusMetadataMixin
        }, {
            statusMetadata: e.newsletterStatusMetadata != null && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled() ? e.newsletterStatusMetadata : undefined,
            pinnedMessages: Object.prototype.hasOwnProperty.call(e, "newsletterPinnedMessagesMetadataMixin") ? e.newsletterPinnedMessagesMetadataMixin ?? [] : undefined
        });
        return babelHelpers.extends({
            id: o("WAWebWidFactory").createWid(e.idJid)
        }, o("WAFilterObjectNullishProps").filterObjectNullishProps(b));
    }
    function k(e, t) {
        const r = e.newsletterUserSettingsMetadataMixin?.find(function(e) {
            return e.type === t;
        });
        return ((e)=>{
            if (e === "ON") {
                return c;
            }
            if (e === "OFF") {
                return d;
            }
        })(r?.value);
    }
    const I = "https://pps.whatsapp.net";
    function T(e) {
        if (e == null || e === "") {
            return null;
        }
        const t = new URL(e, I);
        return t.href;
    }
    function D(e, t) {
        const c = o("WAWebWidFactory").createWid(e);
        if (t.length === 0) {
            return {
                id: c
            };
        }
        let d;
        let m;
        for (const p of t){
            const _ = p.queryPictureDirectPathOrEmptyResponseMixinGroup;
            if (_.name === "QueryPictureDirectPathResponse") {
                if (_.value.type === "preview") {
                    m = _.value;
                } else if (_.value.type === "image") {
                    d = _.value;
                }
            } else if (_.name === "QueryPictureEmptyResponse") {
                return {
                    id: c,
                    timestamp: Date.now(),
                    eurl: null,
                    previewEurl: null,
                    eurlStale: false,
                    stale: false
                };
            }
        }
        const f = {
            timestamp: Date.now(),
            tag: d?.id ?? m?.id,
            eurl: T(d?.directPath ?? m?.directPath),
            previewEurl: T(m?.directPath),
            eurlStale: false,
            stale: false
        };
        return babelHelpers.extends({
            id: c
        }, o("WAFilterObjectNullishProps").filterObjectNullishProps(f));
    }
    function x(e) {
        return {
            chat: v(e),
            metadata: E(e),
            pic: D(e.idJid, e.newsletterPictureMetadataMixin?.picture ?? [])
        };
    }
    function $(e) {
        return e === c;
    }
    function P(e) {
        switch(e){
            case "INSIGHTS":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights;
            case "PHOTO_POLLS":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.PhotoPolls;
            case "QUESTIONS":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS;
            case "INVITE_ADMINS_BUTTON":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.INVITE_ADMINS_BUTTON;
            case "INVITE_FOLLOWERS":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.INVITE_FOLLOWERS;
            case "ADMIN_NOTIFICATIONS":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_NOTIFICATIONS;
            case "QUIZ":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.QUIZ;
            case "ADMIN_CONTEXT_CARD_1":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_CONTEXT_CARD_1;
            case "ADMIN_CONTEXT_CARD_2":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_CONTEXT_CARD_2;
            case "ADMIN_CONTEXT_CARD_3":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_CONTEXT_CARD_3;
            case "SHARE_STICKER_PACKS":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.SHARE_STICKER_PACKS;
            case "ADMIN_ONBOARDING":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_ONBOARDING;
            case "ADMIN_ONBOARDING_2":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_ONBOARDING_2;
            case "MUSIC":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.MUSIC;
            case "NEW_MESSAGE_TYPES_TOOLTIP":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.NEW_MESSAGE_TYPES_TOOLTIP;
            case "PINNING_NUDGE":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.PINNING_NUDGE;
            case "THREAD_MENU":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.THREAD_MENU;
            case "ADMIN_PROFILE":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_PROFILE;
            case "CHANNEL_STATUS_PRODUCER":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_PRODUCER;
            case "QUESTIONS_M2":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS_M2;
            case "JARVIS_INTEGRATION_ENABLED":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.JARVIS_INTEGRATION_ENABLED;
            case "PINNED_MESSAGES":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.PINNED_MESSAGES;
            case "CHANNEL_STATUS_MUSIC":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_MUSIC;
            case "QUESTIONS_STARRING":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS_STARRING;
            case "SCHEDULED_UPDATES":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.SCHEDULED_UPDATES;
            case "CHANNEL_STATUS_API":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_API;
            case "CHANNEL_STATUS_ADMIN_INSIGHTS":
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_ADMIN_INSIGHTS;
            default:
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected newsletter capability: ",
                    ""
                ])), e).tags("newsletter-capabilities").sendLogs("Unexpected newsletter capability");
                return o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights;
        }
    }
    l.DEFAULT_NEWSLETTER_ADMIN_COUNT = u;
    l.MUTED_STATE = c;
    l.UNMUTED_STATE = d;
    l.toStatusMetadata = p;
    l.ADMIN_NOTIFICATIONS = _;
    l.FOLLOWER_NOTIFICATIONS = f;
    l.mapDirectoryNewsletterToChat = h;
    l.mapPreviewNewsletterToChat = C;
    l.isMembershipAdminOrOwner = b;
    l.mapNewsletterToChat = v;
    l.mapPreviewNewsletterToMetadata = S;
    l.convertDirectoryNewsletterMetadataToNewsletterMetadata = R;
    l.mapDirectoryNewsletterToMetadata = L;
    l.mapNewsletterToMetadata = E;
    l.formatProfilePictureURL = T;
    l.mapPicturesToProfilePicThumb = D;
    l.mapNewsletterToModels = x;
    l.isMuted = $;
    l.getNewsletterCapabilityFromValue = P;
}, 98);