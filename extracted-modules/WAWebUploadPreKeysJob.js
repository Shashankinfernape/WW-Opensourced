__d("WAWebUploadPreKeysJob", [
    "Promise",
    "WAComms",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAWap",
    "WAWebSignalConst",
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
    let m;
    let p;
    let _;
    let f;
    const g = 812;
    const h = {
        error: false,
        result: true
    };
    const y = new (r("WADeprecatedWapParser"))("uploadPreKeyResParser", function(e) {
        e.assertTag("iq");
        e.assertFromServer();
        const n = e.attrEnum("type", h);
        if (n) {
            return {
                success: true
            };
        }
        const r = e.child("error");
        return {
            errorCode: r.attrInt("code"),
            errorText: r.maybeAttrString("text") ?? ""
        };
    });
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield (f || (f = n("Promise"))).all([
                o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey()
            ]);
            const t = e[0];
            const a = e[1];
            if (!t || !a) {
                throw r("err")("No signal info is available");
            }
            const { identityKeyPair: i, registrationId: l } = t;
            const s = yield o("WAWebSignalStoreApi").waSignalStore.getOrGenPreKeys(g, o("WAWebSignalKeyApi").generatePreKeyPair).then((e)=>{
                if (e.length === 0) {
                    throw r("err")("No preKey is available");
                }
                return [
                    o("WAWap").wap("iq", {
                        id: o("WAWap").generateId(),
                        xmlns: "encrypt",
                        type: "set",
                        to: o("WAWap").S_WHATSAPP_NET
                    }, o("WAWap").wap("registration", null, o("WAWap").BIG_ENDIAN_CONTENT(l)), o("WAWap").wap("type", null, o("WAWebSignalConst").KEY_BUNDLE_TYPE), o("WAWap").wap("identity", null, i.pubKey), o("WAWap").wap("list", null, e.map(o("WAWebSignalUtilsApi").xmppPreKey)), o("WAWebSignalUtilsApi").xmppSignedPreKey(a)),
                    e[e.length - 1].keyId,
                    e.length
                ];
            });
            const u = s[0];
            const h = s[1];
            const C = s[2];
            try {
                const b = yield o("WAComms").waitForConnection().then(()=>o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(h)).then(()=>o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry(u, y));
                if (b.success) {
                    o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(true);
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "_uploadPreKeys: ",
                        " keys uploaded, raw stanza size: ",
                        "b"
                    ])), C, u.toString().length);
                    return {
                        success: true
                    };
                }
                const v = b.errorCode;
                if (v >= 500) {
                    o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "_uploadPreKeys: server requested backoff ",
                        " (count: ",
                        ", size: ",
                        "b)"
                    ])), v, C, u.toString().length);
                } else if (v === 406) {
                    o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "_uploadPreKeys: uploaded invalid keys (count: ",
                        ", size: ",
                        "b)"
                    ])), C, u.toString().length);
                } else {
                    o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "_uploadPreKeys: unrecognized error ",
                        " (count: ",
                        ", size: ",
                        "b)"
                    ])), v, C, u.toString().length);
                }
                return {
                    errorCode: b.errorCode,
                    errorText: b.errorText
                };
            } catch (e) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "_uploadPreKeys: disconnected, server state unknown: ",
                    " cnt=",
                    " sz=",
                    "b"
                ])), e, C, u.toString().length);
                return;
            }
        });
        return b.apply(this, arguments);
    }
    const v = {
        algo: {
            type: "fibonacci",
            first: 1000,
            second: 2000
        },
        max: 610000
    };
    function S() {
        const t = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "uploadPreKeys",
            timer: v,
            code: (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "uploadPreKeys: running"
                    ])));
                    const n = yield C();
                    if (n?.success === true) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadPreKeys: done"
                        ])));
                        t();
                    } else {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "uploadPreKeys: retrying (after delay)"
                        ])));
                    }
                });
                function r(e) {
                    return t.apply(this, arguments);
                }
                return r;
            })()
        });
        t.start();
        return t.promise();
    }
    l.UPLOAD_KEYS_COUNT = g;
    l.uploadPreKeyResParser = y;
    l.uploadPreKeys = S;
}, 98);