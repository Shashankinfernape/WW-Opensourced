__d("WAWebNewsletterAdminNotificationJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ countryCodes, newsletterJid, priority = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW, toAdd }) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateGeosuspendedCountry", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().get(newsletterJid);
            if (t == null) {
                return (e || (e = n("Promise"))).resolve();
            }
            const t_geosuspendedCountries = t.geosuspendedCountries;
            const l = t_geosuspendedCountries === undefined ? new Map : t_geosuspendedCountries;
            if (toAdd) {
                countryCodes.forEach((e)=>{
                    l?.set(e, {
                        geosuspended: true
                    });
                });
            } else {
                countryCodes.forEach((e)=>{
                    l?.delete(e);
                });
            }
            t.geosuspendedCountries = l;
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().merge(newsletterJid, t);
        }), {
            priority
        }).waitUntilCompleted();
    }
    function u(e, adminProfile) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateNewsletterAdminProfile", function() {
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().merge(e, {
                id: e,
                adminProfile
            });
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH
        }).waitUntilCompleted();
    }
    function c(e, adminProfilesSettingEnabled) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateNewsletterAdminProfile", function() {
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().merge(e, {
                id: e,
                adminProfilesSettingEnabled
            });
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH
        }).waitUntilCompleted();
    }
    function d(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateProfilePictureDeletion", function() {
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().merge(e, {
                id: e,
                hasProfilePictureDeletionAlerts: true
            });
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH
        }).waitUntilCompleted();
    }
    l.updateGeosuspendedCountry = s;
    l.updateNewsletterAdminProfile = u;
    l.updateNewsletterAdminProfileSettings = c;
    l.updateProfilePictureDeletionAlertState = d;
}, 98);