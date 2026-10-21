__d("WAWebSendTcTokenWhenDeviceIdentityChange", [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChatCommon",
    "WAWebGetChatRecordByAccountLid",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
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
            let n;
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()) {
                const r = o("WAWebLidMigrationUtils").toUserLid(t);
                if (r != null) {
                    n = (yield o("WAWebGetChatRecordByAccountLid").getChatRecordByAccountLid(r))[0];
                }
            } else {
                n = yield o("WAWebApiChatCommon").getChatRecord(t);
            }
            if (n != null) {
                const a = n.tcTokenSenderTimestamp;
                if (a != null && !o("WAWebTrustedContactsUtils").isTokenExpired(a, o("WAWebTrustedContactsUtils").TcTokenMode.Sender)) {
                    try {
                        let i;
                        if (o("WAWebABProps").getABPropConfigValue("lid_trusted_token_issue_to_lid")) {
                            i = o("WAWebLidMigrationUtils").toLid(t) ?? t;
                        } else {
                            i = o("WAWebLidMigrationUtils").toPn(t) ?? t;
                        }
                        yield o("WAWebSetPrivacyTokensJob").issuePrivacyToken(i, [
                            o("WAWebSetPrivacyTokensJob").TokenType.TrustedContact
                        ], o("WATimeUtils").castToUnixTime(a));
                    } catch (t) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "sendTcTokenWhenDeviceIdentityChange failed - ",
                            ""
                        ])), t).verbose().sendLogs("send-tc-token-device-identity-change-failed");
                    }
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.sendTcTokenWhenDeviceIdentityChange = s;
}, 98);