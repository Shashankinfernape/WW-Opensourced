__d("WAWebDBUpdateChatTable", [
    "WALogger",
    "WAWebDBChatValidation",
    "WAWebDbErrors",
    "WAWebSchemaChat",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        o("WAWebDBChatValidation").validateAccountLidInChatRow(n, "updateChatTable");
        return o("WAWebSchemaChat").getChatTable().merge(t.toString(), n).catch((t)=>{
            throw t instanceof o("WAWebDbErrors").DbOnLogoutAbort ? t : (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateChatTable: failed to update in storage"
            ]))).verbose().sendLogs("updateChatTable failed"), r("err")("updateChatTable failed"));
        });
    }
    l.updateChatTable = s;
}, 98);