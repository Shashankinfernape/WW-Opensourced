__d("WAWebQueryGetSignedUserInfoJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebDefinePersistedJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return e?.maybeChild(t)?.contentString();
    }
    const s = new (r("WADeprecatedWapParser"))("getSignedUserInfoResponse", function(t) {
        t.assertTag("iq");
        t.assertFromServer();
        const n = t.maybeChild("signed_user_info");
        return {
            phoneNumber: e(n, "phone_number"),
            phoneNumberSignatureExpiration: e(n, "ttl_timestamp"),
            phoneNumberSignature: e(n, "phone_number_signature"),
            businessDomain: e(n, "business_domain")
        };
    });
    const u = o("WAWebDefinePersistedJob").defineWebPersistedJob().finalStep("sendStanza", (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const n = e.businessJid;
            const r = (t = o("WAWap")).wap("iq", {
                to: t.S_WHATSAPP_NET,
                type: "get",
                xmlns: "w:biz:catalog",
                id: t.generateId()
            }, t.wap("signed_user_info", {
                biz_jid: o("WAWebCommsWapMd").USER_JID(o("WAWebWidFactory").createWid(n))
            }));
            const a = yield o("WADeprecatedSendIq").deprecatedSendIq(r, s);
            if (!a.success) {
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(a.errorCode);
            }
            return a.result;
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })()).end();
    l.QueryGetSignedUserInfo = u;
}, 98);