__d("WAWebUnpairDeviceJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WADeprecatedWapParser"))("unpairResponse", function(e) {
        e.assertTag("iq");
        e.assertFromServer();
        const t = e.attrString("type");
        let n = 200;
        if (t === "error") {
            n = e.child("error").attrInt("code");
        }
        return {
            status: n
        };
    });
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let n;
            const r = (n = o("WAWap")).wap("iq", {
                to: n.S_WHATSAPP_NET,
                type: "set",
                id: n.generateId(),
                xmlns: "md"
            }, n.wap("remove-companion-device", {
                jid: o("WAWebCommsWapMd").DEVICE_JID(o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()),
                reason: n.CUSTOM_STRING(t)
            }));
            const a = yield o("WADeprecatedSendIq").deprecatedSendIq(r, e);
            if (a.success) {
                return {
                    status: a.result.status
                };
            }
            return {
                status: a.errorCode
            };
        });
        return u.apply(this, arguments);
    }
    l.unpairDevice = s;
}, 98);