__d("WASendPassiveModeProtocol", [
    "WALogger",
    "WASmaxPassiveModeActiveIQRPC",
    "WASmaxPassiveModePassiveIQRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t === "active") {
                yield o("WASmaxPassiveModeActiveIQRPC").sendActiveIQRPC();
            } else {
                yield o("WASmaxPassiveModePassiveIQRPC").sendPassiveIQRPC();
            }
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendPassiveModeIq: passive mode set to '",
                "'"
            ])), t);
        });
        return u.apply(this, arguments);
    }
    l.sendPassiveModeProtocol = s;
}, 98);