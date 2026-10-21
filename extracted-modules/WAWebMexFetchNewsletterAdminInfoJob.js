__d("WAWebMexFetchNewsletterAdminInfoJob", [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterAdminInfoJobQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexFetchNewsletterAdminInfoJobQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const i = {
                newsletter_id: e
            };
            const l = yield o("WAWebMexClient").fetchQuery(s, i);
            let adminProfile = null;
            if (l.xwa2_newsletter_admin?.admin_profile?.name != null) {
                adminProfile = {
                    id: l.xwa2_newsletter_admin.admin_profile.id,
                    name: l.xwa2_newsletter_admin.admin_profile.name,
                    pictureId: l.xwa2_newsletter_admin.admin_profile.picture?.id,
                    pictureDirectPath: l.xwa2_newsletter_admin?.admin_profile.picture?.direct_path
                };
            }
            return {
                adminCount: l.xwa2_newsletter_admin?.admin_count,
                adminProfile,
                adminProfilesSettingEnabled: l.xwa2_newsletter_admin?.admin_settings?.admin_profiles_enabled ?? false
            };
        });
        return c.apply(this, arguments);
    }
    l.mexFetchNewsletterAdminInfo = u;
}, 98);