__d("WAWebNuxCtwaSuggestionHelpers", [
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCTWASuggestionCollection",
    "WAWebNewCTWASuggestionAction",
    "WAWebNux",
    "WAWebNuxCoolOff"
], function(t, n, r, o, a, i, l) {
    const e = {
        COOL_OFF_START_STORAGE_KEY: o("WAWebNux").CoolOffPeriodKeys.CTWA_SUGGESTION,
        MAX_CLICKS: 1
    };
    function s(e) {
        return {
            getNuxOptions: function() {
                return o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.get(e)?.suggestion?.nuxData;
            },
            setNuxOptions: function(n, r) {
                o("WAWebNewCTWASuggestionAction").ctwaSuggestionNuxDataChanged(e, babelHelpers.extends({}, r, {
                    lastViewedDay: r.lastViewedDay.toISOString()
                }));
            },
            getCoolOffData: function() {
                return o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.get(e)?.suggestion?.coolOffData;
            },
            setCoolOffData: function(n, r) {
                o("WAWebNewCTWASuggestionAction").ctwaSuggestionCoolOffDataChanged(e, babelHelpers.extends({}, r, {
                    startDate: r.startDate.toISOString()
                }));
            }
        };
    }
    function u(bannerId) {
        const n = babelHelpers.extends({}, e, {
            storageAccessors: s(bannerId),
            bannerId
        });
        return o("WAWebBizSuggestionsGatingUtils").adsActionBannersEnabled() && o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.get(bannerId) != null && o("WAWebNuxCoolOff").shouldShowNUX(o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.CTWA_SUGGESTION, n);
    }
    l.BANNER_TYPE = o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.CTWA_SUGGESTION;
    l.BANNER_CONFIG = e;
    l.getStorageAccessors = s;
    l.shouldShowSuggestion = u;
}, 98);