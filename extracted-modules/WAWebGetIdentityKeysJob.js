__d("WAWebGetIdentityKeysJob", [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebCryptoCurve25519",
    "WAWebJidToWid",
    "WAWebProcessKeyBundle",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "cr:475",
    "cr:510",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new (r("WADeprecatedWapParser"))("identityKeysParser", function(e) {
        return e.child("list").mapChildren(function(e) {
            if (e.hasChild("error")) {
                const t = e.child("error");
                const a = t.attrInt("code");
                const i = t.attrString("text");
                throw r("err")(`identityKeysParser bad response: ${a} ${i}`);
            } else {
                return {
                    aeaEvidence: (n("cr:475") == null ? undefined : n("cr:475").parseAeaEvidenceFromIdentity(e)) ?? null,
                    type: e.child("type").contentBytes(1),
                    identity: e.child("identity").contentBytes(32),
                    user: o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("jid"))
                };
            }
        });
    });
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkLoadIdentityKey(t.map((e)=>String(o("WAWebSignalCommonUtils").createSignalAddress(e))));
            const r = t.filter((e, t)=>n[t] == null);
            if (r.length === 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getAndStoreIdentityKeys: got 0 missing keys"
                ])));
                return;
            }
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "getAndStoreIdentityKeys: query ",
                " missing keys for ",
                " contacts"
            ])), r.length, t.length);
            const a = yield f(r);
            const i = a.map((e)=>{
                const e_identity = e.identity;
                const n = o("WAWebCryptoCurve25519").toSignalCurvePubKey(e_identity.buffer.slice(e_identity.byteOffset, e_identity.byteLength + e_identity.byteOffset));
                const identityKey = o("WAWebSignalCommonUtils").bufferToStr(n);
                const a = o("WAWebSignalCommonUtils").createSignalAddress(e.user);
                return {
                    identityKey,
                    identifier: a.toString()
                };
            });
            const l = yield o("WAWebProcessKeyBundle").prepareAeaKeyResponses(a.map(({ aeaEvidence, identity, user })=>({
                    aeaEvidence,
                    identity,
                    wid: user
                })));
            yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkCreateIdentity(i);
            yield h(l);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            const n = e.map((e)=>o("WAWap").wap("user", {
                    jid: o("WAWebCommsWapMd").DEVICE_JID(e)
                }));
            const a = (t = o("WAWap")).wap("iq", {
                xmlns: "encrypt",
                type: "get",
                to: t.S_WHATSAPP_NET,
                id: t.generateId()
            }, t.wap("identity", null, n));
            const i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, m);
            if (!i.success) {
                throw r("err")(`getIdentityKeys bad response ${String(i)}`);
            }
            return i.result;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = n("cr:510");
            if (!(t == null || e.every((e)=>e == null))) {
                yield (d || (d = n("Promise"))).all(e.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (e != null) {
                            try {
                                yield t.commitAeaKeyResponse(e);
                            } catch (error) {
                                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "[aea] failed to store identity response result"
                                ]))).catching(r("getErrorSafe")(error)).sendLogs("aea-get-identities-commit-fail");
                            }
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                try {
                    yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
                } catch (error) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea] failed to flush identity response results"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("aea-get-identities-flush-fail");
                }
            }
        });
        return y.apply(this, arguments);
    }
    l.getAndStoreIdentityKeys = p;
}, 98);