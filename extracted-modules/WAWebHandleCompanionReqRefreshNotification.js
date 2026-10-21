__d("WAWebHandleCompanionReqRefreshNotification", [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebQrDeviceLinkingQpl",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new (r("WADeprecatedWapParser"))("serverNotifyCompanionRefresh", function(t) {
        t.assertTag("notification");
        t.assertAttr("type", "companion_reg_refresh");
        if (!t.hasChild("companion_reg_refresh") && !t.hasChild("pair-device-rotate-qr")) {
            throw t.createParseError("Server companion_reg_refresh notification should contain pair-device-rotate-qr or companion_reg_refresh");
        }
        const n = t.attrString("id");
        const r = t.attrString("from");
        if (r !== o("WAWap").S_WHATSAPP_NET.toString()) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                '[handleServerSyncNotification] "from" != s.whatsapp.net'
            ])));
        }
        return {
            type: "companion_reg_refresh",
            stanzaId: n
        };
    });
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type === "companion_reg_refresh") {
                o("WAWebQrDeviceLinkingQpl").companionDeviceLinkingScreenQpl.regRefreshNotificationReceived();
                yield o("WAWebAdvSignatureApi").generateADVSecretKey();
                o("WAWebUserPrefsMultiDevice").advSecretEventEmitter.trigger("change");
            }
            return o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(e.stanzaId),
                class: "notification",
                type: "companion_reg_refresh",
                to: o("WAWap").S_WHATSAPP_NET
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        const t = c.parse(e);
        if (t.error) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), t.error.toString());
            return (u || (u = n("Promise"))).reject(t.error);
        }
        return d(t.success);
    }
    l.handleCompanionReqRefreshNotification = p;
}, 98);