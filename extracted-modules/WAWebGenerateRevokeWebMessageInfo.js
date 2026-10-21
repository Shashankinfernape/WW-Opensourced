__d("WAWebGenerateRevokeWebMessageInfo", [
    "WAWebCommonMsgSubtypeTypes",
    "WAWebProtobufsWeb.pb",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const a = r("nullthrows")(e.protocolMessageKey?.id, "revoke message must have an associated message key");
        return babelHelpers.extends({}, t, {
            messageStubType: e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Admin ? o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType.ADMIN_REVOKE : o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType.REVOKE,
            messageStubParameters: [
                a
            ]
        });
    }
    l.default = e;
}, 98);