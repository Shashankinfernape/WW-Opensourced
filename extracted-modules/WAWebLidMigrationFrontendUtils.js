__d("WAWebLidMigrationFrontendUtils", [
    "WALogger",
    "WAWebCurrentUser",
    "WAWebLidMigrationLogging",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            try {
                if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(t.id)) {
                    const f = yield o("WAWebSchemaChat").getChatTable().get(t.id.toString());
                    const g = o("WAWebLidMigrationUtils").toLid(t.id);
                    o("WAWebLidMigrationLogging").logLidMetadata();
                    const h = `isEmployee? ${o("WAWebCurrentUser").isEmployee().toString()}, source: ${r},
      input chat.id: ${t.id.toLogString()}. input chat.account_lid: ${t.accountLid?.toLogString() ?? ""},
chat exist in db: ${(f != null).toString()}, db chat account lid: ${f?.accountLid == null ? "null" : o("WAWebWidFactory").createWid(f?.accountLid).toLogString()}
chat.id lid mapping: ${g?.toLogString() ?? ""},
msg kind: ${n?.kind ?? ""} ${n?.type ?? ""} ${n?.subtype ?? ""}`;
                    if (t.accountLid == null) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "validateMissingAccountLid: no account_lid. ",
                            ""
                        ])), h).sendLogs("no-account-lid-for-send").tags("missing-lid");
                    } else if (f == null) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "validateMissingAccountLid: chat does not exist in DB. ",
                            ""
                        ])), h).sendLogs("chat-not-in-db-for-new-message").tags("missing-lid");
                    } else if (f.accountLid == null) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "validateMissingAccountLid: DB does not have account_lid. ",
                            ""
                        ])), h).sendLogs("db-chat-has-empty-accountlid-for-new-message").tags("missing-lid");
                    } else {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "validateMissingAccountLid: chat in DB + lid=",
                            " accountLid=",
                            " ",
                            ""
                        ])), t.id.toLogString(), t.accountLid?.toLogString(), r);
                    }
                }
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "validateMissingAccountLid: unexpected error. ",
                    ""
                ])), error);
            }
        });
        return p.apply(this, arguments);
    }
    l.validateMissingAccountLid = m;
}, 98);