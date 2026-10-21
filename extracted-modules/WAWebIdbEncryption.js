__d("WAWebIdbEncryption", [
    "invariant",
    "WAWeb-dexie",
    "WAWebDbEncryptionKey",
    "WAWebDexieCastTypes",
    "WAWebIdbHelpers",
    "WAWebStorageSchema",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "poll-votes",
        "chat",
        "sync-keys",
        "orphan-tc-token"
    ];
    function u(e, t, n, r) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            if (!o("WAWebDbEncryptionKey").DbEncKeyStore) {
                throw r("err")("feature is not yet implemented");
            }
            const i = a ? o("WAWebDbEncryptionKey").DbEncKeyStore.getDbMsgEncKeys({
                tableName: t.tableName
            }) : o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys();
            const l = i[i.length - 1];
            const u = new Uint8Array(16);
            self.crypto.getRandomValues(u);
            let c;
            if (typeof e === "string") {
                if (n !== o("WAWebStorageSchema").EncryptedValueType.STRING) {
                    s(0, 87945, t.tableName, t.columnName, typeof e);
                }
                c = new TextEncoder().encode(e);
            } else {
                c = e;
            }
            try {
                const d = self.crypto.subtle.encrypt({
                    iv: u,
                    name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER
                }, l.key, c);
                const m = r("WAWeb-dexie").waitFor(d);
                const p = yield o("WAWebDexieCastTypes").dexieCastToPromise(m);
                return {
                    _data: p,
                    iv: u,
                    _keyId: l.id,
                    _scheme: a ? 1 : 0
                };
            } catch (e) {
                const _ = r("getErrorSafe")(e);
                o("WAWebIdbHelpers").logStorageError({
                    error: _,
                    operation: "encryptDbMaterial",
                    tableName: null
                });
                throw _;
            }
        });
        return c.apply(this, arguments);
    }
    function d({ _keyId: a, _scheme: i }, n, r) {
        const l = r && !e.includes(n);
        const s = e.includes(n) && i === 1;
        if (l || s) {
            return o("WAWebDbEncryptionKey").DbEncKeyStore.getDbMsgEncKeys({
                tableName: n
            }).filter((e)=>e.id === a)[0];
        }
        return o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys().filter((e)=>e.id === a)[0];
    }
    function m(e, t, n, r) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            if (!o("WAWebDbEncryptionKey").DbEncKeyStore) {
                throw r("err")("feature is not yet implemented");
            }
            const { _data: i, iv: l } = e;
            let u = null;
            u = d(e, t.tableName, a);
            if (u == null) {
                s(0, 56353);
            }
            if (i == null) {
                return i;
            }
            try {
                const c = self.crypto.subtle.decrypt({
                    iv: l,
                    name: o("WAWebDbEncryptionKey").DB_ENCRYPTION_CIPHER
                }, u.key, i);
                const m = r("WAWeb-dexie").waitFor(c);
                const p = yield o("WAWebDexieCastTypes").dexieCastToPromise(m);
                const _ = n === o("WAWebStorageSchema").EncryptedValueType.STRING ? new TextDecoder("utf-8").decode(p) : p;
                return _;
            } catch (e) {
                const f = r("getErrorSafe")(e);
                o("WAWebIdbHelpers").logStorageError({
                    error: f,
                    operation: "decryptDbMaterial",
                    tableName: null
                });
                throw f;
            }
        });
        return p.apply(this, arguments);
    }
    l.encryptDbMaterial = u;
    l.getDecryptionKey = d;
    l.decryptDbMaterial = m;
}, 98);