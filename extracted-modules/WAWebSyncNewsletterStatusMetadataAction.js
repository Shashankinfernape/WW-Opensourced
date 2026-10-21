__d("WAWebSyncNewsletterStatusMetadataAction", [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSyntheticStatusUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a = true) {
            const s = yield o("WAWebNewsletterMetadataJob").getNewsletterMetadata(t, o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest, {
                verification: true
            });
            if (s != null) {
                const u = o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(s);
                const c = u.statusMetadata;
                if (c != null) {
                    const lastStatusServerId = c.lastStatusServerId ?? null;
                    const lastStatusSentTime = c.lastStatusSentTime ?? null;
                    if (r("WAWebNewsletterMetadataCollection") != null) {
                        r("WAWebNewsletterMetadataCollection").add({
                            id: n,
                            statusMetadata: {
                                lastStatusServerId,
                                lastStatusSentTime
                            }
                        }, {
                            merge: true
                        });
                    }
                    if (a) {
                        o("WAWebNewsletterSyntheticStatusUtils").maybeCreateOrCleanupSynthetic(n, lastStatusServerId, lastStatusSentTime);
                    }
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status][guest] refreshed metadata for ",
                        ""
                    ])), t);
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.syncNewsletterStatusMetadata = s;
}, 98);