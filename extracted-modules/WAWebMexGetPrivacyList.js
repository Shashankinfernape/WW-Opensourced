__d("WAWebMexGetPrivacyList", [
    "WAWebMexClient",
    "WAWebMexGetPrivacyListsQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexGetPrivacyListsQuery.graphql");
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebMexClient").fetchQuery(s, {
                input: {
                    query_input: [
                        {
                            jid: e.jid,
                            privacy_contact_list_type: {
                                dhash: e.dhash,
                                category: e.category,
                                type: e.type
                            }
                        }
                    ]
                }
            });
            return t;
        });
        return c.apply(this, arguments);
    }
    l.fetchPrivacyList = u;
}, 98);