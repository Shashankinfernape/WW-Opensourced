__d("WAWebApiBulkUpdateChatLastAddOnPreview", [
    "WALogger",
    "WAWebSchemaChat"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "bulkUpdateChatLastAddOnPreview: bulkCreateOrMerge"
        ]))).tags("missing-lid");
        const n = Array.from(t).map(([t, chatlistPreview])=>({
                id: t,
                chatlistPreview,
                lastReactionPreview: undefined
            }));
        return o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(n);
    }
    l.bulkUpdateChatLastAddOnPreview = s;
}, 98);