__d("WAWebAccountLinkingCryptoUtils", [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebCryptoCurve25519CalculateSignature",
    "WAWebFeaturePkiRootCertificate",
    "WAWebRSAPkcs1v15",
    "WAWebRSAPublicKeyDer",
    "WAWebSignalProtocolStore",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = "2.5.4.3";
    const p = "Facebook Rootcanal Prod Root CA";
    const _ = 16;
    const f = 16;
    const g = 512;
    const h = "#PWD_WAFFLE";
    const y = 12;
    const C = 1;
    const b = 255;
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield self.crypto.subtle.generateKey({
                name: "RSA-OAEP",
                hash: "SHA-1",
                modulusLength: 2048,
                publicExponent: new Uint8Array([
                    1,
                    0,
                    1
                ])
            }, true, [
                "encrypt",
                "decrypt"
            ]);
            const { privateKey, publicKey } = e;
            return {
                privateKey,
                publicKey
            };
        });
        return S.apply(this, arguments);
    }
    function R() {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return self.crypto.subtle.generateKey({
                name: "AES-GCM",
                length: 256
            }, true, [
                "encrypt",
                "decrypt"
            ]);
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            try {
                return yield I(t);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Certificate Chain Validation Failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("waffle-cert-chain-validation-error");
                return null;
            }
        });
        return k.apply(this, arguments);
    }
    function I(e) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
            let a;
            let i;
            if (t.subject.isEqual(n.issuer)) {
                a = t;
                i = n;
            } else if (n.subject.isEqual(t.issuer)) {
                a = n;
                i = t;
            } else {
                throw r("err")("[WAFFLE] Certificates do not form a chain");
            }
            const l = yield $(a);
            const s = yield o("WAWebX509Utils").validateCertificates([
                a,
                i
            ], [
                l
            ]);
            if (!s.result) {
                throw r("err")(`[WAFFLE] Certificate chain validation failed (${s.resultCode}): ${s.resultMessage}`);
            }
            return i;
        });
        return T.apply(this, arguments);
    }
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = "SHA-1") {
            const n = yield o("WAWebX509Utils").extractCertificates(e);
            if (n.length !== 2) {
                throw r("err")("[WAFFLE] Payload encryption certificate chain is invalid");
            }
            const a = yield E(n);
            if (a == null) {
                throw r("err")("[WAFFLE] Payload encryption certificate validation failed");
            }
            return a.getPublicKey({
                algorithm: {
                    algorithm: {
                        name: "RSA-OAEP",
                        hash: {
                            name: t
                        }
                    },
                    usages: [
                        "encrypt"
                    ]
                }
            });
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = N(e.issuer);
            if (t === o("WAWebFeaturePkiRootCertificate").FeaturePkiRootCommonName) {
                const n = yield o("WAWebFeaturePkiRootCertificate").loadFeaturePkiRootCertificate();
                if (n == null) {
                    throw r("err")("[WAFFLE] Feature PKI root certificate failed extraction");
                }
                return n;
            }
            if (t !== p) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Intermediate issuer ",
                    " matches no known root, falling back to Rootcanal"
                ])), t ?? "missing").sendLogs("waffle-unknown-cert-issuer");
            }
            return M(o("WAWebAccountLinkingConstants").ProdRootCertificatePem);
        });
        return P.apply(this, arguments);
    }
    function N(issuer) {
        return issuer.typesAndValues.find(({ type })=>type === m)?.value.valueBlock.value;
    }
    function M(e) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = "-----BEGIN CERTIFICATE-----";
            const n = "-----END CERTIFICATE-----";
            const a = `${t}
${e}
${n}`;
            const i = yield o("WAWebX509Utils").extractCertificates(a);
            if (i.length !== 1) {
                throw r("err")("[WAFFLE] Root certificate failed extraction");
            }
            return i[0];
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new TextEncoder;
            const n = t.encode(e);
            const r = self.crypto.getRandomValues(new Uint8Array(12));
            const o = yield R();
            const a = yield self.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: r,
                length: 256
            }, o, n);
            const i = new Uint8Array(a);
            const l = i.slice(-16);
            const cipherText = i.slice(0, -16);
            return {
                key: o,
                cipherText,
                tag: l,
                iv: r
            };
        });
        return F.apply(this, arguments);
    }
    function O(e, t, n, r) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const o = new Uint8Array(t.length + r.length);
            o.set(t);
            o.set(r, t.length);
            const a = yield self.crypto.subtle.decrypt({
                name: "AES-GCM",
                iv: n,
                length: 256
            }, e, o);
            return a;
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return self.crypto.subtle.encrypt({
                name: "RSA-OAEP",
                padding: "OAEP"
            }, e, t);
        });
        return q.apply(this, arguments);
    }
    function U(e, t) {
        return V.apply(this, arguments);
    }
    function V() {
        V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return self.crypto.subtle.decrypt({
                name: "RSA-OAEP",
                padding: "OAEP"
            }, e, t);
        });
        return V.apply(this, arguments);
    }
    function H(e) {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield self.crypto.subtle.exportKey("spki", e);
            const n = new Uint8Array(t);
            const r = btoa(Array.from(n, function(e) {
                return String.fromCharCode(e);
            }).join(""));
            return `-----BEGIN PUBLIC KEY-----
${r}
-----END PUBLIC KEY-----
`;
        });
        return G.apply(this, arguments);
    }
    function z(e, t, n) {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false, n = [
            "encrypt",
            "decrypt"
        ]) {
            const a = t ? "-----BEGIN PRIVATE KEY-----" : "-----BEGIN PUBLIC KEY-----";
            const i = t ? "-----END PRIVATE KEY-----" : "-----END PUBLIC KEY-----";
            let l = e;
            if (e.includes(a)) {
                l = e.substring(e.indexOf(a) + a.length, e.indexOf(i));
            }
            l = l.replace(/\s/g, "");
            try {
                for(var s = atob(l), c = new Uint8Array(s.length), d = 0; d < s.length; d++){
                    c[d] = s.charCodeAt(d);
                }
                const m = t ? "pkcs8" : "spki";
                return self.crypto.subtle.importKey(m, c, {
                    name: "RSA-OAEP",
                    hash: "SHA-1"
                }, true, n);
            } catch (error) {
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Error converting PEM to CryptoKey"
                ]))).catching(error instanceof Error ? error : r("err")(String(error)));
                throw error;
            }
        });
        return j.apply(this, arguments);
    }
    function K(e, t) {
        return Q.apply(this, arguments);
    }
    function Q() {
        Q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const publicKey = yield z(e, false, [
                "encrypt"
            ]);
            const r = yield z(t, true, [
                "decrypt"
            ]);
            return {
                publicKey,
                privateKey: r
            };
        });
        return Q.apply(this, arguments);
    }
    function X(e) {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield self.crypto.subtle.exportKey("raw", e);
            return new Uint8Array(t);
        });
        return Y.apply(this, arguments);
    }
    function J(e, t, n, r, o) {
        return Z.apply(this, arguments);
    }
    function Z() {
        Z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a, i) {
            try {
                const l = yield ne({
                    data: n,
                    key: t,
                    nonce: a,
                    privateKey: e,
                    tag: i
                });
                return JSON.parse(l);
            } catch (error) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to decrypt RSA encrypted payload"
                ]))).catching(error instanceof Error ? error : r("err")(String(error)));
                throw error;
            }
        });
        return Z.apply(this, arguments);
    }
    function ee(e) {
        return te.apply(this, arguments);
    }
    function te() {
        te = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ data, key, nonce, privateKey, tag }) {
            try {
                return yield ne({
                    data,
                    key,
                    nonce,
                    privateKey,
                    tag
                });
            } catch (error) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to decrypt RSA encrypted data"
                ]))).catching(error instanceof Error ? error : r("err")(String(error)));
                throw error;
            }
        });
        return te.apply(this, arguments);
    }
    function ne(e) {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ data, key, nonce, privateKey, tag }) {
            const l = yield U(privateKey, key);
            const s = yield oe(l);
            const u = yield O(s, data, nonce, tag);
            const c = new TextDecoder("utf-8").decode(u);
            const d = JSON.parse(c);
            const d_data = d.data;
            if (typeof d_data !== "string") {
                throw r("err")("[WAFFLE] Decrypted RSA payload data is not a string");
            }
            return d_data;
        });
        return re.apply(this, arguments);
    }
    function oe(e) {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield self.crypto.subtle.importKey("raw", e, "AES-GCM", true, [
                "encrypt",
                "decrypt"
            ]);
            return t;
        });
        return ae.apply(this, arguments);
    }
    function ie(e, t) {
        return le.apply(this, arguments);
    }
    function le() {
        le = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n = t;
            if (n == null) {
                const a = yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
                if (a == null) {
                    throw r("err")("[WAFFLE] fetchValidCertificate failed");
                }
                n = a.encryptionKey;
            }
            const i = yield A(JSON.stringify(e));
            const { cipherText, iv, key, tag } = i;
            const d = yield X(key);
            const encryptedKey = yield W(n, d);
            return {
                tag,
                nonce: iv,
                cipherText,
                encryptedKey
            };
        });
        return le.apply(this, arguments);
    }
    function se(e, t, n) {
        return ue.apply(this, arguments);
    }
    function ue() {
        ue = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const a = yield o("WAWebRSAPublicKeyDer").getRSAPublicKeyDer(t);
            const i = new Uint8Array(f);
            const l = yield R();
            const s = yield self.crypto.subtle.encrypt({
                name: "AES-GCM",
                additionalData: a,
                iv: i,
                tagLength: _ * 8
            }, l, new TextEncoder().encode(JSON.stringify(e)));
            const u = new Uint8Array(s);
            const c = yield X(l);
            const encryptedKey = new Uint8Array((yield self.crypto.subtle.encrypt({
                name: "RSA-OAEP"
            }, t, c)));
            if (encryptedKey.length !== g) {
                throw r("err")(`[WAFFLE] PKI V2 needs a 4096-bit payload key, got a ${encryptedKey.length * 8}-bit wrap`);
            }
            return {
                cipherText: u.slice(0, -_),
                encryptedKey,
                keyId: n,
                tag: u.slice(-_)
            };
        });
        return ue.apply(this, arguments);
    }
    function ce(e, t) {
        return de.apply(this, arguments);
    }
    function de() {
        de = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = t ?? (yield o("WAWebAccountLinkingAPI").fetchValidCertificate());
            if (n == null) {
                throw r("err")("[WAFFLE] fetchValidCertificate failed");
            }
            const { encryptionKey, payloadEncryptionKeyV2, payloadKeyId } = n;
            if (payloadKeyId == null || payloadEncryptionKeyV2 == null) {
                return {
                    params: yield ie(e, encryptionKey),
                    version: 1
                };
            }
            return {
                params: yield se(e, payloadEncryptionKeyV2, payloadKeyId),
                version: 2
            };
        });
        return de.apply(this, arguments);
    }
    const me = 1;
    const pe = 2;
    const _e = "rsa2048";
    const fe = "rsa4096";
    function ge(e) {
        if (e.version === 2) {
            const t = e.params;
            return JSON.stringify({
                algorithm: fe,
                auth_tag: o("WABase64").encodeB64(t.tag),
                encrypted_data: o("WABase64").encodeB64(t.cipherText),
                encrypted_key: o("WABase64").encodeB64(t.encryptedKey),
                key_id: t.keyId,
                v: pe
            });
        }
        const e_params = e.params;
        return JSON.stringify({
            algorithm: _e,
            auth_tag: o("WABase64").encodeB64(e_params.tag),
            encrypted_data: o("WABase64").encodeB64(e_params.cipherText),
            encrypted_key: o("WABase64").encodeB64(e_params.encryptedKey),
            nonce: o("WABase64").encodeB64(e_params.nonce),
            v: me
        });
    }
    function he(e, t, n) {
        return ye.apply(this, arguments);
    }
    function ye() {
        ye = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = new TextEncoder;
            const a = r.encode(e);
            const i = self.crypto.getRandomValues(new Uint8Array(12));
            const l = yield R();
            const s = yield self.crypto.subtle.encrypt({
                name: "AES-GCM",
                iv: i,
                length: 256
            }, l, a);
            const u = new Uint8Array(s);
            const c = u.slice(-16);
            const d = u.slice(0, -16);
            const m = yield X(l);
            const p = yield o("WAWebRSAPkcs1v15").rsaPkcs1v15Encrypt(t, m);
            const p_length = p.length;
            const f = 16 + p_length + 16 + d.length;
            const g = new Uint8Array(f);
            let h = 0;
            const y = new DataView(g.buffer);
            g[h++] = 1;
            g[h++] = n % 256;
            g.set(i, h);
            h += 12;
            y.setUint16(h, p_length, true);
            h += 2;
            g.set(p, h);
            h += p_length;
            g.set(c, h);
            h += 16;
            g.set(d, h);
            const C = o("WABase64").encodeB64UrlSafe(g);
            const b = Math.floor(Date.now() / 1000);
            return `#PWD_WA:11:${b}:${C}`;
        });
        return ye.apply(this, arguments);
    }
    function Ce(e, t, n) {
        return be.apply(this, arguments);
    }
    function be() {
        be = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!Number.isInteger(n) || n < 0 || n > b) {
                throw r("err")(`[WAFFLE] password key_id ${n} does not fit the CSPE Format 1 single-byte field`);
            }
            const a = new TextEncoder;
            const i = Math.floor(Date.now() / 1000);
            const l = a.encode(String(i));
            const s = new Uint8Array(f);
            const u = yield R();
            const c = yield self.crypto.subtle.encrypt({
                name: "AES-GCM",
                additionalData: l,
                iv: s,
                tagLength: _ * 8
            }, u, a.encode(e));
            const d = new Uint8Array(c);
            const m = d.slice(-_);
            const p = d.slice(0, -_);
            const g = yield X(u);
            const C = new Uint8Array((yield self.crypto.subtle.encrypt({
                name: "RSA-OAEP"
            }, t, g)));
            const v = ve(n, C, m, p);
            return `${h}:${y}:${i}:${o("WABase64").encodeB64UrlSafe(v)}`;
        });
        return be.apply(this, arguments);
    }
    function ve(e, t, n, r) {
        const t_length = t.length;
        const a = new Uint8Array(4 + t_length + _ + r.length);
        const i = new DataView(a.buffer);
        let l = 0;
        a[l++] = C;
        a[l++] = e;
        i.setUint16(l, t_length, true);
        l += 2;
        a.set(t, l);
        l += t_length;
        a.set(n, l);
        l += _;
        a.set(r, l);
        return a;
    }
    function Se(e) {
        return Re.apply(this, arguments);
    }
    function Re() {
        Re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSignalProtocolStore").getSignalProtocolStore().getIdentityKeyPair();
            if (t == null) {
                throw r("err")("Identity key pair not found");
            }
            const n = {
                pubKey: t.pubKey.slice(1),
                privKey: t.privKey
            };
            const a = new TextEncoder().encode(`1539${e}`);
            const i = yield o("WAWebCryptoCurve25519CalculateSignature").calculateSignature(n, a.buffer);
            return new Uint8Array(i);
        });
        return Re.apply(this, arguments);
    }
    function Le(e, t) {
        return Ee.apply(this, arguments);
    }
    function Ee() {
        Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = "SHA-1") {
            if (e.length === 0) {
                throw r("err")("Empty PEM string");
            }
            const n = "-----BEGIN PUBLIC KEY-----";
            const o = "-----END PUBLIC KEY-----";
            let a = e;
            if (e.includes(n)) {
                a = e.substring(e.indexOf(n) + n.length, e.indexOf(o));
            }
            a = a.replace(/\s/g, "");
            for(var i = atob(a), l = new Uint8Array(i.length), s = 0; s < i.length; s++){
                l[s] = i.charCodeAt(s);
            }
            return self.crypto.subtle.importKey("spki", l, {
                name: "RSA-OAEP",
                hash: t
            }, true, [
                "encrypt"
            ]);
        });
        return Ee.apply(this, arguments);
    }
    l.generateRSAKeys = v;
    l.generateAESKey = R;
    l.validateCertificateChain = E;
    l.importPayloadEncryptionKey = D;
    l.cryptoKeyToPem = H;
    l.convertTestKeys = K;
    l.decryptRSAEncryptedPayload = J;
    l.decryptRSAEncryptedData = ee;
    l.wrapPayloadWithRSAAESEncryption = ie;
    l.wrapPayloadWithRSAAESEncryptionV2 = se;
    l.wrapWafflePayload = ce;
    l.WAFFLE_AUTH_ENVELOPE_VERSION_V1 = me;
    l.WAFFLE_AUTH_ENVELOPE_VERSION_V2 = pe;
    l.serializeWaffleEncryptedEnvelope = ge;
    l.encryptPassword = he;
    l.encryptPasswordWithOaep = Ce;
    l.computeIdSign = Se;
    l.importPasswordPublicKey = Le;
}, 98);