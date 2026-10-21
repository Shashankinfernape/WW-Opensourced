__d("WAWebAlbumsFormatAlbumMessageText", [
    "fbt",
    "WAWebAlbumMessageUtils",
    "WAWebFbtIntlList",
    "WAWebMessageAssociationUIUtils"
], function(t, n, r, o, a, i, l, s) {
    function e({ associatedMessages, msg }) {
        const a = o("WAWebAlbumMessageUtils").getAlbumPhotoAndVideoCountText(associatedMessages ?? o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(msg.id));
        if (a.length === 0) {
            return s._("Album");
        }
        return r("WAWebFbtIntlList")(a, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA).toString();
    }
    l.default = e;
}, 226);