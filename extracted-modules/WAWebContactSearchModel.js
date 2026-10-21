__d("WAWebContactSearchModel", [
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebPhoneNumberSearch",
    "WAWebResolveBotProfile",
    "WAWebSearchModel",
    "WAWebSearchUtils"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = "ContactSearch";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.queryFn = function(t, n) {
            const e = o("WAWebSearchUtils").normalizeString(t);
            const number = o("WAWebPhoneNumberSearch").numberSearch(e);
            const a = o("WAWebContactCollection").ContactCollection.searchContacts({
                query: {
                    text: e,
                    number
                },
                filter: {
                    filterFn: function(t) {
                        return o("WAWebContactGetters").getIsUser(t) && !o("WAWebBotUtils").isHiddenBotWid(t.id) && !o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(t.id);
                    }
                }
            });
            const i = o("WAWebSearchUtils").filterPaginate(a.map(({ contact })=>contact), function(e) {
                return e;
            }, n?.pagination);
            const { pagination, results } = i;
            const results_1 = results.map((e)=>({
                    id: e.id.toString(),
                    type: "contact",
                    data: e
                }));
            return {
                type: "contact",
                results: results_1,
                pagination
            };
        };
        return t;
    })(o("WAWebSearchModel").Search);
    l.ContactSearch = e;
}, 98);