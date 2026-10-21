__d("WAWebE2EProtoParserForCtwaContext", [
    "WAWebCTWAGatingUtils",
    "WAWebCtwaAGMUtils",
    "WAWebE2EProtoParserApi",
    "WAWebLinkify",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = {};
        const { alwaysShowAdAttribution, conversionData, conversionDelaySeconds, conversionSource, ctwaPayload, ctwaSignals } = t;
        if (alwaysShowAdAttribution != null) {
            n.alwaysShowAdAttribution = alwaysShowAdAttribution;
        }
        if (conversionSource != null) {
            n.conversionSource = conversionSource;
        }
        if (conversionDelaySeconds != null) {
            n.conversionDelaySeconds = conversionDelaySeconds;
        }
        if (ctwaSignals != null && ctwaPayload != null) {
            n.conversionData = ctwaPayload;
        } else if (conversionData != null) {
            n.conversionData = conversionData;
        }
        if (ctwaSignals != null) {
            n.ctwaSignals = ctwaSignals;
        }
        const t_externalAdReply = t.externalAdReply;
        if (t_externalAdReply != null) {
            n.sourceUrl = t_externalAdReply.sourceUrl;
            n.description = t_externalAdReply.body;
            n.title = t_externalAdReply.title;
            if (t_externalAdReply.thumbnail != null) {
                n.thumbnail = o("WAWebE2EProtoParserApi").decodeBytes(t_externalAdReply.thumbnail);
            }
            n.thumbnailUrl = t_externalAdReply.thumbnailUrl;
            n.mediaType = t_externalAdReply.mediaType;
            n.mediaUrl = t_externalAdReply.mediaUrl;
            const m = o("WAWebLinkify").findLink({
                httpOnly: false,
                sender: e.from,
                text: t_externalAdReply.sourceUrl || ""
            });
            if (m != null && m.suspiciousCharacters != null && m.suspiciousCharacters.size != null) {
                n.isSuspiciousLink = m.suspiciousCharacters.size > 0;
            }
            if (t_externalAdReply.adContextPreviewDismissed != null && o("WAWebCTWAGatingUtils").isHideAdContextIfSoftDismissed()) {
                n.adContextPreviewDismissed = t_externalAdReply.adContextPreviewDismissed;
            }
            if (t_externalAdReply.sourceApp != null) {
                n.sourceApp = t_externalAdReply.sourceApp;
            }
            const p = o("WAWebCtwaAGMUtils").isWamoAGMIntegrationEnabled(t_externalAdReply.sourceApp);
            if (p) {
                if (t_externalAdReply.greetingMessageBody != null) {
                    n.greetingMessageBody = t_externalAdReply.greetingMessageBody;
                }
                if (t_externalAdReply.automatedGreetingMessageShown != null) {
                    n.automatedGreetingMessageShown = t_externalAdReply.automatedGreetingMessageShown;
                }
                if (t_externalAdReply.ctaPayload != null) {
                    n.ctaPayload = t_externalAdReply.ctaPayload;
                }
                if (t_externalAdReply.sourceId != null) {
                    n.sourceId = t_externalAdReply.sourceId;
                }
                if (t_externalAdReply.originalImageUrl != null) {
                    n.originalImageUrl = t_externalAdReply.originalImageUrl;
                }
            }
        }
        if (!r("isEmptyObject")(n)) {
            e.ctwaContext = n;
        }
    }
    l.parseCtwaContextProto = e;
}, 98);