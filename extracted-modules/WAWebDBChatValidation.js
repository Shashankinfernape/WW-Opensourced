__d("WAWebDBChatValidation", [
    "WALogger",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        if (t.accountLid != null && !r("WAWebWid").isStringLid(t.accountLid)) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ": accountLid is not a valid Lid. chatId: ",
                ", accountLid: ",
                ""
            ])), n, t.id ?? "unknown", t.accountLid).sendLogs("chat-table-invalid-account-lid");
        }
    }
    function u(e, t) {
        for (const n of e){
            s(n, t);
        }
    }
    l.validateAccountLidInChatRow = s;
    l.validateAccountLidInChatRows = u;
}, 98);