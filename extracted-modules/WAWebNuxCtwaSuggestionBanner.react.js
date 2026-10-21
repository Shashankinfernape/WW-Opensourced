__d("WAWebNuxCtwaSuggestionBanner.react", [
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCoolOffNuxBanner.react",
    "WAWebNewCTWASuggestionAction",
    "WAWebNuxCoolOff",
    "WAWebNuxCtwaSuggestionHelpers",
    "WAWebWamEnumBannerTypes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(17);
        const { onInteract, suggestion } = e;
        const { body, display, heading, highlight, id } = suggestion;
        let m;
        if (t[0] !== id || t[1] !== suggestion) {
            let logImpression;
            if (t[3] !== suggestion) {
                logImpression = function() {
                    o("WAWebNewCTWASuggestionAction").ctwaSuggestionShown(suggestion);
                };
                t[3] = suggestion;
                t[4] = logImpression;
            } else {
                logImpression = t[4];
            }
            const _ = babelHelpers.extends({}, o("WAWebNuxCtwaSuggestionHelpers").BANNER_CONFIG, {
                storageAccessors: o("WAWebNuxCtwaSuggestionHelpers").getStorageAccessors(id),
                bannerId: id,
                logImpression
            });
            if (o("WAWebBizSuggestionsGatingUtils").adsActionBannersLoggingEnabled()) {
                _.metricField = o("WAWebWamEnumBannerTypes").BANNER_TYPES.SMB_CTWA_AD_ACTION_BANNER;
            }
            m = new (o("WAWebNuxCoolOff")).CoolOffNux(o("WAWebNuxCtwaSuggestionHelpers").BANNER_TYPE, _);
            t[0] = id;
            t[1] = suggestion;
            t[2] = m;
        } else {
            m = t[2];
        }
        const f = m;
        let g;
        if (display === "info") {
            g = "adActionInfo";
        } else {
            g = "adActionWarning";
        }
        let h;
        let y;
        if (t[5] !== onInteract || t[6] !== suggestion) {
            h = function() {
                onInteract?.();
                o("WAWebNewCTWASuggestionAction").ctwaSuggestionInteracted(suggestion);
            };
            y = function() {
                onInteract?.();
                o("WAWebNewCTWASuggestionAction").ctwaSuggestionInteracted(suggestion, true);
            };
            t[5] = onInteract;
            t[6] = suggestion;
            t[7] = h;
            t[8] = y;
        } else {
            h = t[7];
            y = t[8];
        }
        let C;
        if (t[9] !== body || t[10] !== heading || t[11] !== highlight || t[12] !== f || t[13] !== g || t[14] !== h || t[15] !== y) {
            const Component = r("WAWebCoolOffNuxBanner.react");
            C = <Component title={heading} subtitle={body} actionText={highlight} onDismiss={h} onClick={y} nuxManager={f} theme={g}/>;
            t[9] = body;
            t[10] = heading;
            t[11] = highlight;
            t[12] = f;
            t[13] = g;
            t[14] = h;
            t[15] = y;
            t[16] = C;
        } else {
            C = t[16];
        }
        return C;
    }
    l.default = u;
}, 98);