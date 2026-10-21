__d("WAWebUploadPrekeysForRegTask", [
    "Promise",
    "WAComms",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebSignalConst",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "WAWebUploadPreKeysJob",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = (()=>{
        function t() {}
        const a = t.prototype;
        a.startKeyGenerationStage = function() {
            if (!this.$1) {
                this.$1 = this.$3();
            }
            return this.$1;
        };
        a.startKeyUploadStage = function() {
            if (!this.$2) {
                this.$2 = this.$4();
            }
            return this.$2;
        };
        a.$3 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PrekeyUploadForRegistrationTask: start key generation"
                ])));
                const t = yield (f || (f = n("Promise"))).all([
                    o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                    o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey()
                ]);
                const a = t[0];
                const i = t[1];
                if (!a || !i) {
                    throw r("err")("No signal info is available");
                }
                const l = yield o("WAWebSignalStoreApi").waSignalStore.getOrGenPreKeys(o("WAWebUploadPreKeysJob").UPLOAD_KEYS_COUNT, o("WAWebSignalKeyApi").generatePreKeyPair);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "PrekeyUploadForRegistrationTask: generated ",
                    " keys"
                ])), l.length);
                return {
                    regInfo: a,
                    signedPreKey: i,
                    prekeys: l
                };
            });
            function a() {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a.$4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = this.$1 || this.startKeyGenerationStage();
                const t = yield e;
                const { prekeys: n, regInfo: a, signedPreKey: i } = t;
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "PrekeyUploadForRegistrationTask: start key upload"
                ])));
                const l = n.length;
                if (l === 0) {
                    throw r("err")("No preKey is available");
                }
                const s = n[n.length - 1].keyId;
                const { identityKeyPair: f, registrationId: g } = a;
                const h = o("WAWap").wap("iq", {
                    id: o("WAWap").generateId(),
                    xmlns: "encrypt",
                    type: "set",
                    to: o("WAWap").S_WHATSAPP_NET
                }, o("WAWap").wap("registration", null, o("WAWap").BIG_ENDIAN_CONTENT(g)), o("WAWap").wap("type", null, o("WAWebSignalConst").KEY_BUNDLE_TYPE), o("WAWap").wap("identity", null, f.pubKey), o("WAWap").wap("list", null, n.map(o("WAWebSignalUtilsApi").xmppPreKey)), o("WAWebSignalUtilsApi").xmppSignedPreKey(i));
                try {
                    yield o("WAComms").waitForConnection();
                    yield o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(s);
                    const y = yield o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry(h, o("WAWebUploadPreKeysJob").uploadPreKeyResParser);
                    if (y.success) {
                        o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(true);
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "_uploadPreKeys: ",
                            " keys uploaded, raw stanza size: ",
                            "b"
                        ])), n.length, h.toString().length);
                        return {
                            success: true
                        };
                    }
                    const C = y.errorCode;
                    if (C >= 500) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "_uploadPreKeys: server requested backoff ",
                            " (count: ",
                            ", size: ",
                            "b)"
                        ])), C, l, h.toString().length);
                    } else if (C === 406) {
                        o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "_uploadPreKeys: uploaded invalid keys (count: ",
                            ", size: ",
                            "b)"
                        ])), l, h.toString().length);
                    } else {
                        o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "_uploadPreKeys: unrecognized error ",
                            " (count: ",
                            ", size: ",
                            "b)"
                        ])), C, l, h.toString().length);
                    }
                    return {
                        errorCode: y.errorCode,
                        errorText: y.errorText
                    };
                } catch (e) {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "_uploadPreKeys: disconnected ",
                        " (cnt: ",
                        ", size: ",
                        "b)"
                    ])), e, l, h.toString().length);
                    return;
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    function h() {
        return new g;
    }
    l.default = h;
}, 98);