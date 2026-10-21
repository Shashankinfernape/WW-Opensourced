__d("WAWebFormatDocumentMsgText", [
    "fbt",
    "WAWebFormatMsgTextUtils",
    "fbs"
], function(t, n, r, o, a, i, l, s) {
    function e({ msg, options }) {
        if (msg.isFromTemplate || msg.isDynamicReplyButtonsMsg) {
            const a = msg.pageCount > 0 ? s._("_j{\"*\":\"{count} pages\",\"_1\":\"1 page\"}", [
                s._plural(msg.pageCount, "count")
            ]).toString() : null;
            const i = o("WAWebFormatMsgTextUtils").maybeAddFooter(msg.caption, msg);
            if (i != null) {
                if (options.unformat !== true) {
                    return i;
                }
                return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(msg, i, options);
            }
            return [
                r("fbs")._("Document").toString(),
                a
            ].filter(Boolean).join(" • ");
        }
        if (msg.isVcardOverMmsDocument && msg.mediaData.parsedVcards) {
            return o("WAWebFormatMsgTextUtils").formatParsedVcardsDisplayText(msg.mediaData.parsedVcards);
        }
        const l = o("WAWebFormatMsgTextUtils").maybeAddFooter(msg.caption, msg);
        if (l != null && l !== "" && msg.isCaptionByUser) {
            return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(l, options);
        }
        const u = msg.pageCount > 0 ? s._("_j{\"*\":\"{count} pages\",\"_1\":\"1 page\"}", [
            s._plural(msg.pageCount, "count")
        ]).toString() : null;
        return [
            msg.mediaData.filename || r("fbs")._("Document").toString(),
            u
        ].filter(Boolean).join(" • ");
    }
    l.default = e;
}, 226);