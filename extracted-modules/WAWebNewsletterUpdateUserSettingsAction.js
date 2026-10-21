__d("WAWebNewsletterUpdateUserSettingsAction", [
    "$InternalEnum",
    "Promise",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterToggleAdminActivityMuteStateAction",
    "WAWebNewsletterToggleFollowerActivityMuteStateAction",
    "WAWebWamEnumChannelEventType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = n("$InternalEnum")({
        AdminActivity: "admin_activity",
        FollowerActivity: "follower_activity"
    });
    function u(e, t, n, r) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(cid, r, a, { eventSurface, fromMultiselect = false }) {
            const channelCoreEventType = r === o("WAWebNewsletterModelUtils").MUTED_STATE ? o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.MUTE : o("WAWebWamEnumChannelEventType").CHANNEL_EVENT_TYPE.UNMUTE;
            o("WAWebNewsletterAttributionLogging").NewsletterCoreEventLogger.log({
                eventSurface,
                cid,
                channelCoreEventType,
                channelRequestMetadata: JSON.stringify(a.map((e)=>`${r === o("WAWebNewsletterModelUtils").MUTED_STATE ? "mute" : "unmute"}_${e}`))
            });
            const m = [];
            if (a.includes(s.AdminActivity)) {
                m.push(o("WAWebNewsletterToggleAdminActivityMuteStateAction").toggleNewsletterAdminActivityMuteStateAction(cid, r, fromMultiselect));
            }
            if (a.includes(s.FollowerActivity)) {
                m.push(o("WAWebNewsletterToggleFollowerActivityMuteStateAction").toggleNewsletterFollowerActivityMuteStateAction(cid, r));
            }
            yield (e || (e = n("Promise"))).all(m);
        });
        return c.apply(this, arguments);
    }
    l.NewsletterUserSetting = s;
    l.updateNewsletterUserSettingsAction = u;
}, 98);