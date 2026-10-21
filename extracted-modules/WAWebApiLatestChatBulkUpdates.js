__d("WAWebApiLatestChatBulkUpdates", [
    "WALogger",
    "WAWebDBChatValidation",
    "WAWebSchemaChat"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "latestChatBulkUpdates: bulkCreateOrMerge"
        ]))).tags("missing-lid");
        o("WAWebDBChatValidation").validateAccountLidInChatRows(t, "latestChatBulkUpdates");
        return o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t);
    }
    l.latestChatBulkUpdates = s;
}, 98);