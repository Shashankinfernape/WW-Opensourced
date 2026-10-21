__d("WAWebGroupsPrivacyTokenUtils", [
    "WAWebSchemaChat",
    "WAWebTrustedContactsUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ tcToken, tcTokenTimestamp }) {
        if (tcToken == null || tcTokenTimestamp == null || o("WAWebTrustedContactsUtils").isTokenExpired(tcTokenTimestamp, o("WAWebTrustedContactsUtils").TcTokenMode.Receiver)) {
            return null;
        }
        return {
            anyElementValue: new Uint8Array(tcToken)
        };
    }
    function s(t, n) {
        const r = new Map;
        n.map((n)=>{
            const o = t.find((e)=>e?.id === n.toString());
            if (o != null) {
                r.set(n, e(o));
            }
        });
        return r;
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaChat").getChatTable().bulkGet(e.map((e)=>e.toString()), true);
            return s(t, e);
        });
        return c.apply(this, arguments);
    }
    l.getPermissionTokenMap = s;
    l.getPermissionTokenMapForChatIds = u;
}, 98);