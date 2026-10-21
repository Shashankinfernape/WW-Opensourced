__d("WAWebApiPrepareCtwaContextSend", [
    "WAWebLinkify",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        let n;
        if (t != null) {
            return babelHelpers.extends({}, t);
        }
        const a = e?.sourceUrl;
        if (!(a == null || a === "")) {
            const i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (i != null) {
                const l = o("WAWebLinkify").findLink({
                    httpOnly: false,
                    sender: i,
                    text: a
                });
                return {
                    sourceUrl: a,
                    sourceType: "",
                    sourceId: "",
                    mediaType: o("WAWebProtobufsE2E.pb").ContextInfo$ExternalAdReplyInfo$MediaType.NONE,
                    isSuspiciousLink: !!((n = l?.suspiciousCharacters?.size) != null && n)
                };
            }
        }
    }
    l.prepareCtwaContextSend = e;
}, 98);