__d("WAWebCTWAParseSuggestion", [
    "WALogger",
    "WASmaxBizCtwaActionBannerSuggestionRPC",
    "WATimeUtils",
    "WAWebApiParse",
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCtwaActionBannerUnderstandWamEvent",
    "WAWebUpdaterVersion"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = "recreate_ad";
    const h = "manage_ads";
    const y = "parseCTWASuggestion: missing action link";
    function C(t) {
        if (o("WAWebBizSuggestionsGatingUtils").adsActionBannersLoggingEnabled()) {
            const n = new (o("WAWebCtwaActionBannerUnderstandWamEvent")).CtwaActionBannerUnderstandWamEvent;
            n.bannerIdentifier = t.bannerIdentifier;
            n.validNotification = t.validNotification;
            if (t.clientLocale != null) {
                n.clientLocale = t.clientLocale;
            }
            if (t.bannerLocale != null) {
                n.bannerLocale = t.bannerLocale;
            }
            if (t.validLocale != null) {
                n.validLocale = t.validLocale;
            }
            n.commitAndWaitForFlush().catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseCTWASuggestion: metric failed"
                ])));
            });
        }
    }
    function b(ctwaSuggestionTargetEntityId) {
        const t = ctwaSuggestionTargetEntityId.split("-");
        return t[1];
    }
    function v(e) {
        const t = o("WASmaxBizCtwaActionBannerSuggestionRPC").receiveBannerSuggestionRPC(e.node());
        const t_parsedRequest = t.parsedRequest;
        const { ctwaSuggestionBanner, ctwaSuggestionTargetEntityId, t: t_1 } = t_parsedRequest;
        const l = b(ctwaSuggestionTargetEntityId);
        if (ctwaSuggestionBanner == null) {
            C({
                bannerIdentifier: ctwaSuggestionTargetEntityId,
                validNotification: false
            });
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWASuggestion: missing banner data (",
                ")"
            ])), l);
            return;
        }
        if (ctwaSuggestionBanner.configRevoked === "true") {
            return {
                type: "revokedBanner",
                id: ctwaSuggestionTargetEntityId
            };
        }
        const { contentLocale, configDisplay, configExpiresAt, contentBodyElementValue, contentHeadingElementValue, contentHighlightElementValue, nativeAction } = ctwaSuggestionBanner;
        const T = nativeAction.filter((e)=>e.platform === "web");
        if (T.length === 0) {
            C({
                bannerIdentifier: ctwaSuggestionTargetEntityId,
                validNotification: false
            });
            if (ctwaSuggestionTargetEntityId.endsWith(g) || ctwaSuggestionTargetEntityId.includes(h)) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " (",
                    ")"
                ])), y, l).sendLogs("parseCTWASuggestion-missing-action-link-${bannerType}");
            } else {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " (",
                    ")"
                ])), y, l);
            }
            return;
        } else if (T.length > 1) {
            C({
                bannerIdentifier: ctwaSuggestionTargetEntityId,
                validNotification: false
            });
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWASuggestion: too many actions (",
                ")"
            ])), l).sendLogs("parseCTWASuggestion-too-many-actions-${bannerType}");
            return;
        }
        const D = T[0];
        const D_minAppVersion = D.minAppVersion;
        const $ = new (o("WAWebUpdaterVersion")).Version(D_minAppVersion);
        const P = new (o("WAWebUpdaterVersion")).Version(o("WAWebUpdaterVersion").SANITIZED_VERSION_STR);
        if (P.lt($)) {
            o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWASuggestion: app version too old (",
                ")"
            ])), l);
            return;
        }
        const D_localLink = D.localLink;
        const M = o("WAWebApiParse").parseAPICmd(D_localLink);
        if (M.resultType === "INVALID") {
            if (!D_localLink.startsWith("https://")) {
                C({
                    bannerIdentifier: ctwaSuggestionTargetEntityId,
                    validNotification: false
                });
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "parseCTWASuggestion: invalid link (",
                    ")"
                ])), l).sendLogs("parseCTWASuggestion-invalid-link-${bannerType}");
                return;
            }
        } else if (M.resultType === "MANAGE_ADS") {
            if (!o("WAWebBizSuggestionsGatingUtils").adsActionManageAdsBannerEnabled()) {
                C({
                    bannerIdentifier: ctwaSuggestionTargetEntityId,
                    validNotification: false
                });
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "parseCTWASuggestion: manage ads not enabled (",
                    ")"
                ])), l);
                return;
            }
        } else {
            M.resultType;
            C({
                bannerIdentifier: ctwaSuggestionTargetEntityId,
                validNotification: false
            });
            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWASuggestion: invalid deep link (",
                ", ",
                ")"
            ])), l, M.resultType).sendLogs("parseCTWASuggestion-invalid-deep-link-${bannerType}");
            return;
        }
        return {
            type: "banner",
            id: ctwaSuggestionTargetEntityId,
            expiresAt: o("WATimeUtils").castToUnixTime(configExpiresAt),
            heading: contentHeadingElementValue,
            body: contentBodyElementValue,
            highlight: contentHighlightElementValue,
            actionLink: D_localLink,
            display: configDisplay,
            ts: o("WATimeUtils").castToUnixTime(t_1),
            bannerLocale: contentLocale
        };
    }
    l.maybeReportMetric = C;
    l.parseCTWASuggestion = v;
}, 98);