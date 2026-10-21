__d("useWAWebNewsletterMuteState", [
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebWamEnumChannelEventSurface",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u({ adminActivityMuteExpiration, followerActivityMuteExpiration, getIsFollowerActivityFeatureEnabled }) {
        return o("WAWebNewsletterModelUtils").isMuted(adminActivityMuteExpiration) && (o("WAWebNewsletterModelUtils").isMuted(followerActivityMuteExpiration) || !getIsFollowerActivityFeatureEnabled());
    }
    function c(e) {
        const r = o("react-compiler-runtime").c(15);
        let a;
        if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebChatGetters").getMuteExpiration,
                o("WAWebFrontendChatGetters").getNewsletterMetadata
            ];
            r[0] = a;
        } else {
            a = r[0];
        }
        const i = o("useWAWebChatValues").useChatValues(e.id, a);
        const l = i[0];
        const s = i[1];
        const c = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(s?.id, [
            o("WAWebNewsletterMetadataGetters").getFollowerActivityMuteExpiration
        ], {
            isStrong: true
        }) ?? [
            0
        ];
        const followerActivityMuteExpiration = c[0];
        let isFollowerActivityFeatureEnabled;
        let _;
        if (r[1] !== l || r[2] !== e.newsletterMetadata || r[3] !== followerActivityMuteExpiration) {
            isFollowerActivityFeatureEnabled = o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(e.newsletterMetadata);
            _ = u({
                adminActivityMuteExpiration: l,
                followerActivityMuteExpiration,
                getIsFollowerActivityFeatureEnabled: function() {
                    return isFollowerActivityFeatureEnabled;
                }
            });
            r[1] = l;
            r[2] = e.newsletterMetadata;
            r[3] = followerActivityMuteExpiration;
            r[4] = isFollowerActivityFeatureEnabled;
            r[5] = _;
        } else {
            isFollowerActivityFeatureEnabled = r[4];
            _ = r[5];
        }
        const f = _;
        let g;
        if (r[6] !== l || r[7] !== e.id || r[8] !== followerActivityMuteExpiration || r[9] !== isFollowerActivityFeatureEnabled || r[10] !== f) {
            g = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const targetState = f ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE;
                    yield o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(e.id, targetState, d({
                        adminActivityMuteExpiration: l,
                        followerActivityMuteExpiration,
                        isFollowerActivityFeatureEnabled,
                        targetState
                    }), {
                        eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_UPDATES_HOME
                    });
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            r[6] = l;
            r[7] = e.id;
            r[8] = followerActivityMuteExpiration;
            r[9] = isFollowerActivityFeatureEnabled;
            r[10] = f;
            r[11] = g;
        } else {
            g = r[11];
        }
        const toggleMuteState = g;
        let y;
        if (r[12] !== f || r[13] !== toggleMuteState) {
            y = {
                isMuted: f,
                toggleMuteState
            };
            r[12] = f;
            r[13] = toggleMuteState;
            r[14] = y;
        } else {
            y = r[14];
        }
        return y;
    }
    function d({ adminActivityMuteExpiration, followerActivityMuteExpiration, isFollowerActivityFeatureEnabled, targetState }) {
        const i = [];
        if (targetState !== adminActivityMuteExpiration) {
            i.push(o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity);
        }
        if (isFollowerActivityFeatureEnabled && targetState !== followerActivityMuteExpiration) {
            i.push(o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.FollowerActivity);
        }
        return i;
    }
    l.getIsNewsletterMuted = u;
    l.getNewsletterMuteSettingsToToggle = d;
    l.useNewsletterMuteState = c;
}, 98);