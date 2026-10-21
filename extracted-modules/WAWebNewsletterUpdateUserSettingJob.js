__d("WAWebNewsletterUpdateUserSettingJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDbErrors",
    "WAWebMexUpdateNewsletterUserSetting",
    "WAWebNewsletterModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateNewsletterUserSetting", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield m(e);
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ muteExpirationValue, newsletterJid, type }) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "newsletter setMuteState"
            ])));
            const a = muteExpirationValue === o("WAWebNewsletterModelUtils").MUTED_STATE ? "mute" : "unmute";
            const i = yield o("WAWebMexUpdateNewsletterUserSetting").mexUpdateNewsletterUserSetting({
                newsletter_id: newsletterJid,
                type: type === o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS ? "MUTE_ADMIN_ACTIVITY" : "MUTE_FOLLOWER_ACTIVITY",
                value: muteExpirationValue === o("WAWebNewsletterModelUtils").MUTED_STATE ? "ON" : "OFF"
            });
            const l = i.filter((e)=>e.subscriberNotFoundMixin == null).map((e)=>e.jid);
            try {
                return yield _(l, type, muteExpirationValue);
            } catch (error) {
                if (!(error instanceof o("WAWebDbErrors").DbOnLogoutAbort)) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][",
                        "Newsletter] db persist failed"
                    ])), a).tags("newsletter").sendLogs(`newsletter-${a}-db-fail`);
                }
                throw error;
            }
        });
        return p.apply(this, arguments);
    }
    function _(t, type, muteExpirationValue) {
        switch(type){
            case o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS:
                return o("WAWebSchemaChat").getChatTable().bulkMergeOnly(t.map((e)=>({
                        id: e,
                        muteExpiration: muteExpirationValue
                    })));
            case o("WAWebNewsletterModelUtils").FOLLOWER_NOTIFICATIONS:
                return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().bulkMergeOnly(t.map((e)=>({
                        id: e,
                        followerActivityMuteExpiration: muteExpirationValue
                    })));
            default:
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][updateNewsletterUserSetting] invalid type ",
                    ""
                ])), type).tags("newsletter");
                return (c || (c = n("Promise"))).resolve();
        }
    }
    l.updateNewsletterUserSetting = d;
}, 98);