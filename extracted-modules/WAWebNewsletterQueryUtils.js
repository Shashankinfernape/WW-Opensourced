__d("WAWebNewsletterQueryUtils", [
    "WAJids",
    "WAWebCommonNewsletterEnums",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = [
        "hasNewsletterMembershipField",
        "hasNewsletterMutedField",
        "newsletterPictureFieldMixinArgs"
    ];
    function s(e) {
        if (e == null) {
            return "guest";
        }
        switch(e){
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
                return "admin";
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
                return "owner";
            case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber:
                return "subscriber";
            default:
                return "guest";
        }
    }
    function u(t, n, a) {
        const allNewsletterMetadataIQRequestPayloadArgs = d(a);
        if (r("WAWebWid").isNewsletter(t)) {
            return {
                queryPayloadsArgs: {
                    jidQueryIQPayload: {
                        anyJid: o("WAJids").toNewsletterJid(t),
                        anyViewRole: s(n),
                        allNewsletterMetadataIQRequestPayloadArgs
                    }
                }
            };
        }
        const { hasNewsletterMembershipField, hasNewsletterMutedField, newsletterPictureFieldMixinArgs } = allNewsletterMetadataIQRequestPayloadArgs;
        const m = babelHelpers.objectWithoutPropertiesLoose(allNewsletterMetadataIQRequestPayloadArgs, e);
        return {
            queryPayloadsArgs: {
                inviteQueryIQPayload: babelHelpers.extends({
                    anyKey: t,
                    anyViewRole: s(n)
                }, m, {
                    newsletterPreviewTypePictureFieldMixinArgs: {
                        baseNewsletterPictureFieldMixinArgs: {}
                    }
                })
            }
        };
    }
    function c() {
        return {
            pictureArgs: [
                {
                    pictureType: "image"
                },
                {
                    pictureType: "preview"
                }
            ]
        };
    }
    function d(e) {
        if (e == null) {
            return {
                hasNewsletterCreationTimeField: true,
                hasNewsletterNameField: true,
                newsletterPictureFieldMixinArgs: c(),
                hasNewsletterDescriptionField: true,
                hasNewsletterInviteLinkField: true,
                hasNewsletterHandleField: true,
                hasNewsletterSubscribersField: true,
                hasNewsletterPrivacyField: true,
                hasNewsletterVerificationField: true,
                hasNewsletterLinkedAccountsField: true,
                hasNewsletterMembershipField: true,
                hasNewsletterMutedField: true,
                hasNewsletterStateField: true
            };
        }
        return {
            hasNewsletterCreationTimeField: e.creationTime,
            hasNewsletterNameField: e.name,
            newsletterPictureFieldMixinArgs: e.picture === true ? c() : undefined,
            hasNewsletterDescriptionField: e.description,
            hasNewsletterInviteLinkField: e.inviteLink,
            hasNewsletterHandleField: e.handle,
            hasNewsletterSubscribersField: e.subscribers,
            hasNewsletterPrivacyField: e.privacy,
            hasNewsletterVerificationField: e.verification,
            hasNewsletterLinkedAccountsField: e.linkedAccounts,
            hasNewsletterMembershipField: e.membership,
            hasNewsletterMutedField: e.membership,
            hasNewsletterStateField: e.state
        };
    }
    function m(e) {
        if (r("WAWebWid").isNewsletter(e)) {
            return {
                queryNewsletterJIDParams: {
                    anyJid: o("WAJids").toNewsletterJid(e)
                }
            };
        }
        return {
            queryNewsletterInviteParams: {
                anyKey: e
            }
        };
    }
    function p(e) {
        switch(e){
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.Insights:
                return "INSIGHTS";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.PhotoPolls:
                return "PHOTO_POLLS";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS:
                return "QUESTIONS";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.INVITE_ADMINS_BUTTON:
                return "INVITE_ADMINS_BUTTON";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.INVITE_FOLLOWERS:
                return "INVITE_FOLLOWERS";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_NOTIFICATIONS:
                return "ADMIN_NOTIFICATIONS";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.QUIZ:
                return "QUIZ";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_CONTEXT_CARD_1:
                return "ADMIN_CONTEXT_CARD_1";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_CONTEXT_CARD_2:
                return "ADMIN_CONTEXT_CARD_2";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_CONTEXT_CARD_3:
                return "ADMIN_CONTEXT_CARD_3";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.SHARE_STICKER_PACKS:
                return "SHARE_STICKER_PACKS";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_ONBOARDING:
                return "ADMIN_ONBOARDING";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_ONBOARDING_2:
                return "ADMIN_ONBOARDING_2";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.MUSIC:
                return "MUSIC";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.NEW_MESSAGE_TYPES_TOOLTIP:
                return "NEW_MESSAGE_TYPES_TOOLTIP";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.PINNING_NUDGE:
                return "PINNING_NUDGE";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.THREAD_MENU:
                return "THREAD_MENU";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.ADMIN_PROFILE:
                return "ADMIN_PROFILE";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_PRODUCER:
                return "CHANNEL_STATUS_PRODUCER";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS_M2:
                return "QUESTIONS_M2";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.JARVIS_INTEGRATION_ENABLED:
                return "JARVIS_INTEGRATION_ENABLED";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.PINNED_MESSAGES:
                return "PINNED_MESSAGES";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_MUSIC:
                return "CHANNEL_STATUS_MUSIC";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.QUESTIONS_STARRING:
                return "QUESTIONS_STARRING";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.SCHEDULED_UPDATES:
                return "SCHEDULED_UPDATES";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_API:
                return "CHANNEL_STATUS_API";
            case o("WAWebCommonNewsletterEnums").NewsletterCapability.CHANNEL_STATUS_ADMIN_INSIGHTS:
                return "CHANNEL_STATUS_ADMIN_INSIGHTS";
        }
    }
    l.mapMembershipTypeToViewRole = s;
    l.getNewsletterMetadataQueryParamArgs = u;
    l.getNewsletterMetadataArgs = d;
    l.getNewsletterMessagesQueryParams = m;
    l.getNewsletterCapabilityFromEnum = p;
}, 98);