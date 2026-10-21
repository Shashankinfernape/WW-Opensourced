__d("WAWebSendTcTokenChatAction", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSetPrivacyTokensJob",
    "WAWebTrustedContactsUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!(!t.isUserNotPSA() || t.isBot())) {
                const n = o("WAWebChatCollection").ChatCollection.get(t);
                if (n != null && o("WAWebTrustedContactsUtils").shouldSendNewToken(n.tcTokenSenderTimestamp)) {
                    try {
                        const tcTokenSenderTimestamp = o("WATimeUtils").unixTime();
                        let a;
                        if (o("WAWebABProps").getABPropConfigValue("lid_trusted_token_issue_to_lid")) {
                            a = o("WAWebLidMigrationUtils").toLid(t);
                        } else {
                            a = o("WAWebLidMigrationUtils").toPn(t);
                        }
                        if (a == null) {
                            return;
                        }
                        yield o("WAWebSetPrivacyTokensJob").issuePrivacyToken(a, [
                            o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact
                        ], tcTokenSenderTimestamp);
                        const i = {
                            tcTokenSenderTimestamp
                        };
                        n.set(i);
                        yield o("WAWebSchemaChat").getChatTable().merge(t.toString(), i);
                    } catch (error) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "sendTcToken failed - ",
                            ""
                        ])), error).verbose().sendLogs("send-tc-token-failed");
                    }
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.sendTcToken = s;
}, 98);