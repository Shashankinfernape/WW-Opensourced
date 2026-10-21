__d("WAWebLinkPreviewEligibility", [
    "WAWebCodeFormatMutator",
    "WAWebLinkify",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerNotificationMask"
], function(t, n, r, o, a, i, l) {
    function e({ getShouldHideSpoilers, sender, text }) {
        return o("WAWebLinkify").findLinks(s({
            getShouldHideSpoilers,
            text
        }), true, sender)[0];
    }
    function s({ getShouldHideSpoilers, text }) {
        const r = o("WAWebCodeFormatMutator").removeCodeBlocks(text);
        if (o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(r) && getShouldHideSpoilers()) {
            return o("WAWebSpoilerFormatRegex").maskSpoilers(r, " ");
        }
        return r;
    }
    function u({ matchedText, text }) {
        if (matchedText == null || matchedText === "" || text == null) {
            return false;
        }
        if (!o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(text)) {
            return true;
        }
        const r = o("WAWebSpoilerNotificationMask").maskSpoilersPreservingLength(text, {
            parseBlockCode: true,
            parseInlineCode: true
        });
        return o("WAWebLinkify").findLinks(r).some((e)=>{
            const n = r.slice(e.index, e.index + e.url.length);
            return n === matchedText;
        });
    }
    l.findFirstPreviewEligibleWebLink = e;
    l.isLinkPreviewEligible = u;
}, 98);