__d("WAWebSetPushConfigJob", [
    "WABase64",
    "WALogger",
    "WASmaxPushConfigSetRPC",
    "WAWebBackendApi",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebBackendApi").frontendSendAndReceive("getDeviceInfo", void 0);
            const a = yield o("WASmaxPushConfigSetRPC").sendSetRPC({
                setSetConfigOrSetClearMixinGroupArgs: {
                    setSetConfig: {
                        configMixinsArgs: {
                            webClient: {
                                configEndpoint: t.endpoint,
                                configAuth: o("WABase64").encodeB64(r("nullthrows")(t.getKey("auth"))),
                                configP256dh: o("WABase64").encodeB64(r("nullthrows")(t.getKey("p256dh"))),
                                configLg: n.lg,
                                configLc: n.lc
                            }
                        }
                    }
                }
            });
            if (a.name === "SetResponseSuccess") {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "setPushConfig: success"
                ]))).tags("push-notification");
                return;
            }
            if (a.name === "SetResponseInternalServerError") {
                const i = a.value.errorIQErrorInternalServerErrorMixin;
                const { code: l, text: c } = i;
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "setPushConfig: server response with ",
                    ", ",
                    ""
                ])), l, c).tags("push-notification");
                return {
                    errorCode: l,
                    errorText: c
                };
            }
            if (a.name === "SetResponseConflict") {
                const d = a.value.errorIQErrorConflictMixin;
                const { code: m, text: p } = d;
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "setPushConfig: server response with ",
                    ", ",
                    ""
                ])), m, p).tags("push-notification");
                return {
                    errorCode: m,
                    errorText: p
                };
            }
        });
        return d.apply(this, arguments);
    }
    l.setPushConfig = c;
}, 98);