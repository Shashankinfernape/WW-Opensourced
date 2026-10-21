__d("WAWebCTWASuggestionInitFromStorage", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebSchemaCTWASuggestion"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        if (!o("WAWebBizSuggestionsGatingUtils").adsActionBannersEnabledOnStartup()) {
            o("WAWebBackendApi").frontendFireAndForget("loadedCTWASuggestions", {
                suggestions: []
            });
            return (s || (s = n("Promise"))).resolve();
        }
        const t = o("WAWebSchemaCTWASuggestion").getCTWASuggestionTable();
        return t.all().then((n)=>{
            const suggestions = [];
            const a = [];
            n.forEach((e)=>{
                if (o("WATimeUtils").isInFuture(e.expiresAt)) {
                    suggestions.push(e);
                } else {
                    a.push(e.id);
                }
            });
            o("WAWebBackendApi").frontendFireAndForget("loadedCTWASuggestions", {
                suggestions
            });
            if (a.length > 0) {
                return t.bulkRemove(a).catch(()=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "restoreCTWASuggestions: could not remove expired suggestions"
                    ])));
                });
            }
        });
    }
    l.restoreCTWASuggestions = u;
}, 98);