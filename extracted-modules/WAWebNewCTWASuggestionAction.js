__d("WAWebNewCTWASuggestionAction", [
    "WALogger",
    "WAWebApiParse",
    "WAWebBizNativeAdsWamLogger",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCTWASuggestionCollection",
    "WAWebCTWASuggestionModel",
    "WAWebExecApiCmd",
    "WAWebExternalLink.react",
    "WAWebRemoveInteractedCTWASuggestion",
    "WAWebUpdateCTWASuggestionTrackingCoolOffData",
    "WAWebUpdateCTWASuggestionTrackingNuxData",
    "WAWebWamEnumManageAdsEntryPoint"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        const t = e.id;
        const n = new (o("WAWebCTWASuggestionModel")).CTWASuggestionModel({
            id: t,
            suggestion: e
        });
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.add(n);
    }
    function m(e) {
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.removeInteracted(e.id);
    }
    function p(t, n) {
        const a = t.id;
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.removeInteracted(a);
        if (n) {
            const i = t.actionLink;
            const l = o("WAWebApiParse").parseAPICmd(i);
            if (l.resultType === "INVALID") {
                o("WAWebExternalLink.react").openExternalLink(i);
            } else if (l.resultType === "MANAGE_ADS") {
                r("WAWebExecApiCmd")({
                    cmdData: l,
                    isExternal: false
                });
            } else {
                l.resultType;
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ctwaSuggestionInteracted: unsupported deep link command ",
                    ""
                ])), l.resultType);
            }
        }
        o("WAWebRemoveInteractedCTWASuggestion").removeInteractedCTWASuggestion(a).catch((e)=>{
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "ctwaSuggestionInteracted: remove failed"
            ])));
        });
    }
    function _(e) {
        if (o("WAWebBizSuggestionsGatingUtils").adsActionBannersLoggingEnabled()) {
            const t = o("WAWebApiParse").parseAPICmd(e.actionLink);
            if (t.resultType === "MANAGE_ADS") {
                o("WAWebBizNativeAdsWamLogger").logManageAdsEntryPointImpression(o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT.SMB_CHAT_LIST_CTWA_BANNER);
            } else {
                t.resultType;
            }
        }
    }
    function f(e) {
        const t = Array.from(e).sort((e, t)=>e.ts - t.ts);
        const n = t.map((e)=>new (o("WAWebCTWASuggestionModel")).CTWASuggestionModel({
                id: e.id,
                suggestion: e
            }));
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.initializeFromCache(n);
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.markLoadedFromStorage();
    }
    function g(e, t) {
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.updateTrackingNuxData(e, t);
        o("WAWebUpdateCTWASuggestionTrackingNuxData").updateCTWASuggestionTrackingNuxData(e, t).catch((e)=>{
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "ctwaSuggestionNuxDataChanged: update failed"
            ])));
        });
    }
    function h(e, t) {
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.updateTrackingCoolOffData(e, t);
        o("WAWebUpdateCTWASuggestionTrackingCoolOffData").updateCTWASuggestionTrackingCoolOffData(e, t).catch((e)=>{
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "ctwaSuggestionCoolOffDataChanged: update failed"
            ])));
        });
    }
    l.newCTWASuggestion = d;
    l.revokeCTWASuggestion = m;
    l.ctwaSuggestionInteracted = p;
    l.ctwaSuggestionShown = _;
    l.loadedCTWASuggestions = f;
    l.ctwaSuggestionNuxDataChanged = g;
    l.ctwaSuggestionCoolOffDataChanged = h;
}, 98);