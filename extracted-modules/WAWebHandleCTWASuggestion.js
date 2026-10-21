__d("WAWebHandleCTWASuggestion", [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCTWAParseSuggestion",
    "WAWebSchemaCTWASuggestion",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = [
        "bannerLocale"
    ];
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type === "banner") {
                yield p(e);
            } else {
                e.type;
                yield f(e);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (o("WAWebBizSuggestionsGatingUtils").adsActionBannersEnabled()) {
                const n = t.bannerLocale;
                const r = babelHelpers.objectWithoutPropertiesLoose(t, c);
                const clientLocale = yield o("WAWebBackendApi").frontendSendAndReceive("getNormalizedLocale", undefined);
                const i = yield o("WAWebBackendApi").frontendSendAndReceive("normalizeLocaleToWajsLocale", {
                    locale: n
                });
                if (i !== clientLocale) {
                    o("WAWebCTWAParseSuggestion").maybeReportMetric({
                        bannerIdentifier: t.id,
                        validNotification: false,
                        clientLocale,
                        bannerLocale: n,
                        validLocale: false
                    });
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handleCTWASuggestion: locale mismatch"
                    ])));
                    return;
                }
                o("WAWebCTWAParseSuggestion").maybeReportMetric({
                    bannerIdentifier: t.id,
                    validNotification: true,
                    clientLocale,
                    bannerLocale: n,
                    validLocale: true
                });
                const l = r;
                if (!o("WATimeUtils").isInFuture(l.expiresAt)) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "handleCTWASuggestion: expired"
                    ])));
                    return;
                }
                try {
                    yield o("WAWebSchemaCTWASuggestion").getCTWASuggestionTable().create(l);
                } catch (e) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "handleCTWASuggestion: suggestion de-duped"
                    ])));
                    return;
                }
                o("WAWebBackendApi").frontendFireAndForget("newCTWASuggestion", {
                    suggestion: l
                });
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaCTWASuggestion").getCTWASuggestionTable().remove(e.id);
            o("WAWebBackendApi").frontendFireAndForget("revokeCTWASuggestion", {
                suggestion: e
            });
        });
        return g.apply(this, arguments);
    }
    l.handleCTWASuggestion = d;
}, 98);