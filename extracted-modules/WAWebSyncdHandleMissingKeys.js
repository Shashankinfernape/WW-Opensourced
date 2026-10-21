__d("WAWebSyncdHandleMissingKeys", [
    "Promise",
    "WALogger",
    "WAWebGetMissingKey",
    "WAWebGetSyncKey",
    "WAWebOfflineHandler",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdError",
    "WAWebSyncdKeyCallbacksApi",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdStoreMissingKeys",
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
    const f = o("WAWebSyncdKeyTypes").toSyncKeyId(new ArrayBuffer(0));
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const r = new Set;
            const a = (yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId));
            n.records.forEach((e)=>{
                const t = e.keyId.id;
                if (o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(t, f)) {
                    throw new (o("WAWebSyncdError")).SyncdFatalError("snapshot has empty key");
                }
                const n = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(t);
                if (!a.includes(n)) {
                    r.add(n);
                }
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: collection ",
                "'s snapshot has missing keys ",
                ""
            ])), t, Array.from(r));
            yield b(r);
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = new Set;
            const r = (yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map((e)=>o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId));
            let a = 0;
            const i = [];
            t.forEach((e)=>{
                const t = [
                    e.keyId.id
                ];
                e.mutations.forEach((e)=>{
                    t.push(e.record.keyId.id);
                });
                t.forEach((t)=>{
                    if (o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(t, f)) {
                        throw new (o("WAWebSyncdError")).SyncdFatalError(`syncd: patch has empty key. patch device id: ${e.deviceIndex ?? "null"}`);
                    }
                    const s = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(t);
                    if (!r.includes(s) && !n.has(s)) {
                        a++;
                        if (i.length < 3) {
                            i.push({
                                id: s,
                                version: e.version.version,
                                deviceIndex: e.deviceIndex
                            });
                        }
                        n.add(s);
                    }
                });
            });
            if (a > 0) {
                const l = i.map((e)=>`keyId: ${e.id}, patch version: ${e.version}, patch device id: ${String(e.deviceIndex)}`);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: handleMissingKeysInPatches: ",
                    " missing keys => ",
                    ""
                ])), a, l);
            }
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: collection ",
                "'s patches has missing keys ",
                ""
            ])), e, Array.from(n));
            yield b(n);
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete() ? "idle" : "processing";
            if (t !== "idle") {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: _handleMissingKeys: skip, resume in progress"
                ])));
                return;
            }
            const r = Array.from(e);
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: _handleMissingKeys: missing keys [",
                "]"
            ])), r);
            const a = new Set((yield o("WAWebGetMissingKey").bulkGetMissingKeysInTransaction(r)).filter(Boolean).map((e)=>e.keyHex));
            const i = r.filter((e)=>!a.has(e));
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: _handleMissingKeys: missing keys after filter: [",
                "]"
            ])), i);
            if (i.length === 0) {
                return (_ || (_ = n("Promise"))).resolve();
            }
            const l = i.map((e)=>o("WAWebSyncdKeyTypes").toSyncKeyId(o("WAWebSyncdCryptoUtils").hexToUint8Array(e).buffer));
            const s = yield o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRequest(l);
            yield o("WAWebSyncdStoreMissingKeys").addMissingKeys(l, s);
        });
        return v.apply(this, arguments);
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: requestAllMissingKeys: missing keys: [",
                "]"
            ])), e.map((e)=>e.keyHex));
            if (e.length !== 0) {
                yield o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRequest(e.map((e)=>e.keyId));
            }
        });
        return R.apply(this, arguments);
    }
    l.handleMissingKeysInSnapshot = g;
    l.handleMissingKeysInPatches = y;
    l.handleMissingKeys = b;
    l.requestAllMissingKeys = S;
}, 98);