__d("WAWebAltDeviceLinkingIq", [
    "WASmaxMdCompanionFinishRPC",
    "WASmaxMdCompanionHelloRPC",
    "WAWebBrowserInfo",
    "WAWebCompanionRegClientUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t) || this;
            r.name = "CompanionHelloError";
            r.type = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "CompanionFinishError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ companionServerAuthKeyPub: n, linkCodePairingWrappedCompanionEphemeralPub: a, phone: i, shouldPush: l }) {
            const s = r("WAWebBrowserInfo")();
            const u = yield o("WASmaxMdCompanionHelloRPC").sendCompanionHelloRPC({
                linkCodePairingNonceArgs: {
                    linkCodePairingNonceElementValue: new Uint8Array(1)
                },
                linkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroupArgs: {
                    linkCodePrimaryByPhoneDeprecated: {
                        linkCodeCompanionRegJid: i
                    }
                },
                linkCodePairingWrappedCompanionEphemeralPubElementValue: new Uint8Array(a),
                companionServerAuthKeyPubElementValue: new Uint8Array(n),
                companionPlatformIdElMixinArgs: {
                    companionPlatformIdElementValue: o("WAWebCompanionRegClientUtils").DEVICE_PLATFORM
                },
                companionPlatformDisplayElMixinArgs: {
                    companionPlatformDisplayElementValue: `${s.name} (${s.os})`
                },
                linkCodeCompanionRegShouldShowPushNotification: l ? "true" : "false"
            });
            if (u.name === "CompanionHelloResponseNotifyCompanion") {
                return u.value.linkCodeCompanionRegLinkCodePairingRefElementValue;
            }
            throw u.name === "CompanionHelloResponseError" ? new e(`alt pairing: Got an error from alt paring: companion hello: ${u.value.errorIqMixinErrors.name}`, u.value.errorIqMixinErrors) : new e("alt pairing: Got an unknown error from alt paring: companion hello");
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ cachedRef: t, companionIdentityPublic: n, linkCodeCompanionRegJid: r, linkCodePairingWrappedKeyBundle: a }) {
            const i = yield o("WASmaxMdCompanionFinishRPC").sendCompanionFinishRPC({
                linkCodePrimaryByPhoneDeprecatedOrContactPointMixinGroupArgs: {
                    linkCodePrimaryByPhoneDeprecated: {
                        linkCodeCompanionRegJid: r
                    }
                },
                linkCodePairingWrappedKeyBundleElementValue: new Uint8Array(a),
                companionIdentityPublicElementValue: new Uint8Array(n),
                linkCodePairingRefElementValue: t
            });
            if (i.name !== "CompanionFinishResponseSuccess") {
                throw new s("alt pairing: Got an error from alt paring: companion finish");
            }
        });
        return m.apply(this, arguments);
    }
    l.CompanionHelloError = e;
    l.CompanionFinishError = s;
    l.sendCompanionHello = u;
    l.sendCompanionFinish = d;
}, 98);