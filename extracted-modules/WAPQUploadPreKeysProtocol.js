__d("WAPQUploadPreKeysProtocol", [
    "Promise",
    "WACryptoLibraryConfig",
    "WAPromiseRetryLoop",
    "WAResultOrError",
    "WARetryUtils",
    "WASmaxPreKeysAddRPC",
    "WASmaxPreKeysSetRPC",
    "WATagsLogger",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = o("WATagsLogger").TAGS([
        "pqUploadPreKeysProtocol"
    ]);
    const C = {
        category: "client-precondition",
        code: null
    };
    function b(t, r) {
        const a = o("WACryptoLibraryConfig").getCryptoLibraryConfig().isPqKeysUploadEnabled === true;
        if (!a) {
            return (h || (h = n("Promise"))).resolve(o("WAResultOrError").makeError("request-error"));
        }
        if (t.length === 0) {
            y.WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "No PQ prekeys to upload"
            ])));
            return (h || (h = n("Promise"))).resolve(o("WAResultOrError").makeError("request-error"));
        }
        const i = {
            identityKeyOrPQKeyBundleMixinGroupArgs: {
                pQKeyBundle: {
                    keyArgs: t.map(S),
                    keyIDMixinArgs: {
                        idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(r.id, 3)
                    },
                    pQKeyDataMixinArgs: {
                        anyElementValue: r.keyPair.publicKey
                    },
                    signatureElementValue: r.signature
                }
            }
        };
        const l = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "uploadPQKeys",
            timer: o("WARetryUtils").fibonacciBackoff(false),
            code: (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    y.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Attempt to upload PQ keys"
                    ])));
                    const t = yield o("WASmaxPreKeysSetRPC").sendSetRPC(i);
                    switch(t.name){
                        case "SetResponseSuccess":
                            {
                                y.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "PQ keys uploaded successfully"
                                ])));
                                e(o("WAResultOrError").makeResult(undefined));
                                return;
                            }
                        case "SetResponseRequestError":
                            {
                                y.WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "PQ upload request error"
                                ])));
                                e(o("WAResultOrError").makeError("request-error"));
                                return;
                            }
                        default:
                            t.name;
                            y.WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                "PQ upload error: ",
                                ", will retry"
                            ])), t.name);
                    }
                });
                function t(t) {
                    return e.apply(this, arguments);
                }
                return t;
            })()
        });
        l.start();
        return l.promise();
    }
    function v(e) {
        if (o("WACryptoLibraryConfig").getCryptoLibraryConfig().isPqKeysUploadEnabled !== true) {
            return (h || (h = n("Promise"))).resolve(o("WAResultOrError").makeError(C));
        }
        if (e.length === 0) {
            y.WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "No PQ prekeys to add"
            ])));
            return (h || (h = n("Promise"))).resolve(o("WAResultOrError").makeError(C));
        }
        const t = {
            pQPreKeyListMixinArgs: {
                keyArgs: e.map(S)
            }
        };
        const r = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "addPQKeys",
            timer: o("WARetryUtils").fibonacciBackoff(false),
            code: (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*(n) {
                    y.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Attempt to add PQ keys (batch of ",
                        ")"
                    ])), e.length);
                    const r = yield o("WASmaxPreKeysAddRPC").sendAddRPC(t);
                    switch(r.name){
                        case "AddResponseSuccess":
                            {
                                y.LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "PQ keys added successfully"
                                ])));
                                n(o("WAResultOrError").makeResult(undefined));
                                return;
                            }
                        case "AddResponseRequestError":
                            {
                                const a = r.value.errorRequestErrors;
                                const { name, value } = a;
                                y.WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "PQ add request error: ",
                                    " (",
                                    ")"
                                ])), name, value.code);
                                n(o("WAResultOrError").makeError({
                                    category: name,
                                    code: value.code
                                }));
                                return;
                            }
                        default:
                            r.name;
                            y.WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "PQ add error: ",
                                ", will retry"
                            ])), r.name);
                    }
                });
                function a(e) {
                    return r.apply(this, arguments);
                }
                return a;
            })()
        });
        r.start();
        return r.promise();
    }
    function S(e) {
        return {
            keyIDMixinArgs: {
                idElementValue: o("WAWap").BIG_ENDIAN_CONTENT(e.id, 3)
            },
            pQKeyDataMixinArgs: {
                anyElementValue: e.keyPair.publicKey
            },
            signatureElementValue: e.signature
        };
    }
    l.uploadPQPreKeysProtocol = b;
    l.addPQPreKeysProtocol = v;
}, 98);