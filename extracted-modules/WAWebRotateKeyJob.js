__d("WAWebRotateKeyJob", [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebCryptoCurve25519",
    "WAWebDefinePersistedJob",
    "WAWebDigestKeyJob",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new (r("WADeprecatedWapParser"))("rotateKeyResponseParser", function(e) {
        e.assertFromServer();
    });
    const p = o("WAWebDefinePersistedJob").defineWebPersistedJob().step("uploadKeys", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const t = yield o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo().then((e)=>{
            if (!e) {
                throw r("err")("No registration info is available");
            }
            return o("WAWebSignalStoreApi").waSignalStore.rotateSignedPreKey(o("WAWebCryptoCurve25519").toSignalCurveKeyPair(e.identityKeyPair), o("WAWebSignalKeyApi").generateSignedKeyPair);
        });
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "rotateKey: signedPreKey uploading"
        ])));
        const n = o("WAWap").wap("iq", {
            xmlns: "encrypt",
            type: "set",
            to: o("WAWap").S_WHATSAPP_NET,
            id: o("WAWap").generateId()
        }, o("WAWap").wap("rotate", null, o("WAWebSignalUtilsApi").xmppSignedPreKey(t)));
        const a = yield o("WADeprecatedSendIq").deprecatedSendIq(n, m);
        if (a.success) {
            return {
                shouldDigestKey: false
            };
        }
        let i = false;
        const l = a.errorCode;
        if (l === 406) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "rotateKey generated bad key"
            ])));
        } else if (l === 409) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "skey does not pass server validation"
            ])));
            i = true;
        } else if (l >= 500) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "rotateKey server error ",
                ", wait a day"
            ])), l);
        } else {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "rotateKey unrecognized error ",
                ""
            ])), l);
            i = true;
        }
        return {
            shouldDigestKey: i
        };
    })).finalStep("maybeDigestKey", function({ shouldDigestKey: t }) {
        if (t) {
            return o("WAWebDigestKeyJob").digestKey();
        }
    }).end();
    l.rotateKey = p;
}, 98);