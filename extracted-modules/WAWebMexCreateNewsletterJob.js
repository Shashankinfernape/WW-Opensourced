__d("WAWebMexCreateNewsletterJob", [
    "WAWebMexClient",
    "WAWebMexCreateNewsletterJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            const i = e !== undefined ? e : e = n("WAWebMexCreateNewsletterJobMutation.graphql");
            const l = {
                input: {
                    name: t,
                    description: r,
                    picture: a
                }
            };
            const s = yield o("WAWebMexClient").fetchQuery(i, l);
            return s;
        });
        return u.apply(this, arguments);
    }
    l.mexCreateNewsletter = s;
}, 98);