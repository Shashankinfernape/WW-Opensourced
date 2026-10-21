__d("WAWebSelfPrimaryIdentityChangeAction", [
    "WALogger",
    "WAWebLogoutReasonConstants",
    "WAWebSocketModel",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "handleNewIdentity: self primary id change ignored"
        ]))).sendLogs("self-identity-change");
        if (r("gkx")("26258")) {
            o("WAWebSocketModel").Socket.logout(o("WAWebLogoutReasonConstants").LogoutReason.PrimaryIdentityKeyChange);
        } else {
            self.setTimeout(function() {
                o("WAWebSocketModel").Socket.logout(o("WAWebLogoutReasonConstants").LogoutReason.PrimaryIdentityKeyChange);
            }, 10000);
        }
    }
    l.handleSelfPrimaryIdentityChange = s;
}, 98);