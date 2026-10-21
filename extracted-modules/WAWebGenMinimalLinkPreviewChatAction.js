__d("WAWebGenMinimalLinkPreviewChatAction", [
    "WALogger",
    "WAWebLinkPreviewUtils",
    "WAWebUserPrefsGeneral"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, richPreviewType, isLoading = false, paymentLinkDetails = null) {
        if (!t || !t.url) {
            return null;
        }
        const i = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
        const i_disableLinkPreviews = i.disableLinkPreviews;
        if (i_disableLinkPreviews === true) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "genMinimalLinkPreview: disabled due to user settings"
            ])));
            return null;
        }
        return o("WAWebLinkPreviewUtils").genLinkPreview({
            url: t.url,
            linkDetails: {
                title: t.domain,
                description: t.url,
                richPreviewType,
                doNotPlayInline: true,
                isLoading
            },
            paymentLinkDetails
        });
    }
    l.genMinimalLinkPreview = s;
}, 98);