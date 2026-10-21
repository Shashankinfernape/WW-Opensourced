__d("WAWebNewsletterMultiSelectMuteUtils", [
    "Promise",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebWamEnumChannelEventSurface",
    "asyncToGeneratorRuntime",
    "useWAWebNewsletterMuteState"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = r ? o("WAWebNewsletterModelUtils").MUTED_STATE : o("WAWebNewsletterModelUtils").UNMUTED_STATE;
            yield (e || (e = n("Promise"))).all(t.filter((e)=>c(e, r)).map((e)=>o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(e.id, a, d(e, a), {
                    eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME,
                    fromMultiselect: true
                })));
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        const e_newsletterMetadata = e.newsletterMetadata;
        return e_newsletterMetadata != null && (o("WAWebNewsletterMetadataGetters").getCanBeMuted(e_newsletterMetadata) || o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(e_newsletterMetadata)) && d(e, t ? o("WAWebNewsletterModelUtils").MUTED_STATE : o("WAWebNewsletterModelUtils").UNMUTED_STATE).length > 0;
    }
    function d(e, targetState) {
        return o("useWAWebNewsletterMuteState").getNewsletterMuteSettingsToToggle({
            adminActivityMuteExpiration: e.muteExpiration,
            followerActivityMuteExpiration: e.newsletterMetadata?.followerActivityMuteExpiration,
            isFollowerActivityFeatureEnabled: o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(e.newsletterMetadata),
            targetState
        });
    }
    l.muteChannels = s;
    l.canToggleChannelMute = c;
}, 98);