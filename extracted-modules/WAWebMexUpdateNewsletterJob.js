__d("WAWebMexUpdateNewsletterJob", [
    "WAWebMexClient",
    "WAWebMexNewsletterUtils",
    "WAWebMexUpdateNewsletterJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ base64EncodedPic, description, name, newsletterID, reactionCodesSetting }) {
            const u = e !== undefined ? e : e = n("WAWebMexUpdateNewsletterJobMutation.graphql");
            const c = {
                newsletter_id: newsletterID,
                updates: {
                    name,
                    description,
                    picture: base64EncodedPic,
                    settings: reactionCodesSetting != null ? {
                        reaction_codes: {
                            value: o("WAWebMexNewsletterUtils").mapReactionCodesSettingToMexInput(reactionCodesSetting)
                        }
                    } : null
                }
            };
            const d = yield o("WAWebMexClient").fetchQuery(u, c);
            return d;
        });
        return u.apply(this, arguments);
    }
    l.mexUpdateNewsletter = s;
}, 98);