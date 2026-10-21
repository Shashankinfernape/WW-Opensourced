__d("WAWebDigestKeyJob", [
    "Promise",
    "WABase64",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebSignalStoreApi",
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
    const _ = 32;
    const f = new (r("WADeprecatedWapParser"))("digestResponseParser", function(e) {
        const t = e.child("digest");
        const n = t.child("skey");
        return {
            regId: t.child("registration").contentUint(4),
            type: t.child("type").contentUint(1),
            identity: t.child("identity").contentBytes(32),
            skey: {
                id: n.child("id").contentUint(3),
                pubkey: n.child("value").contentBytes(32),
                signature: n.child("signature").contentBytes(64)
            },
            keys: t.child("list").mapChildren(function(e) {
                return e.contentUint(3);
            }),
            hash: t.child("hash").contentBytes(20)
        };
    });
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t;
            const n = (t = o("WAWap")).wap("iq", {
                xmlns: "encrypt",
                type: "get",
                to: t.S_WHATSAPP_NET,
                id: t.generateId()
            }, t.wap("digest", null));
            const r = yield o("WADeprecatedSendIq").deprecatedSendIq(n, f);
            let a = null;
            if (r.success) {
                try {
                    yield y(r.result);
                    a = false;
                } catch (e) {
                    a = false;
                }
            } else {
                const i = r.errorCode;
                switch(i){
                    case 404:
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "digestKey: no record found for current user"
                        ])));
                        a = true;
                        break;
                    case 406:
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "digestKey: malformed request"
                        ])));
                        a = false;
                        break;
                    case 503:
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "digestKey: service unavailable"
                        ])));
                        a = false;
                        break;
                    default:
                        o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "digestKey: server error ",
                            ""
                        ])), i);
                        a = false;
                }
            }
            if (a != null && a) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "digestKey: validate key bundle failed, upload prekeys again"
                ])));
                return o("WAWebUploadPreKeysJob").uploadPreKeys();
            }
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield (p || (p = n("Promise"))).all([
                o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey()
            ]);
            const a = t[0];
            const i = t[1];
            if (!a || !i) {
                throw r("err")("validateLocalKeyBundle: No registration info is available");
            }
            if (e.regId !== a.registrationId) {
                throw r("err")("validateLocalKeyBundle: registation id mismatch");
            }
            const l = a.identityKeyPair.pubKey;
            const s = i.keyPair.pubKey;
            const u = l.byteLength + s.byteLength + i.signature.byteLength + e.keys.length * _;
            const c = new Uint8Array(u);
            let d = 0;
            [
                l,
                s,
                i.signature
            ].forEach((e)=>{
                c.set(new Uint8Array(e), d);
                d += e.byteLength;
            });
            const f = e.keys.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = yield o("WAWebSignalStoreApi").waSignalStore.getPreKeyById(e);
                    if (!t) {
                        throw r("err")(`validateLocalKeyBundle: missing prekey record for id ${e}`);
                    }
                    return t.keyPair.pubKey;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            const g = yield p.all(f);
            g.forEach((e)=>{
                c.set(new Uint8Array(e), d);
                d += e.byteLength;
            });
            const h = yield self.crypto.subtle.digest("SHA-1", c);
            const y = o("WABase64").encodeB64(h);
            const C = o("WABase64").encodeB64(e.hash);
            if (y !== C) {
                throw r("err")(`validateLocalKeyBundle: hash mismatch remote:${C} local:${y}`);
            }
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "validateLocalKeyBundle: success"
            ])));
        });
        return C.apply(this, arguments);
    }
    l.digestKey = g;
}, 98);