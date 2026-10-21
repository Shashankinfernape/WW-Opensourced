__d("WAWebSyncdMMSUpload", [
    "WABase64",
    "WABaseGlobals",
    "WAJids",
    "WAMediaCalculateFilehash",
    "WAWebSyncdGatingUtils",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdNetCallbacksApi",
    "WAWebSyncdRequestEncode",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 100;
    const s = 2000;
    const u = 10;
    const c = 100;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ activeSyncKeyId, mutationsBlob, patchMac, snapshotMac }) {
            const i = yield o("WAWebSyncdNetCallbacksApi").uploadSyncExternalPatch(mutationsBlob);
            const l = yield p(i, mutationsBlob);
            return f({
                externalMutations: l,
                keyId: activeSyncKeyId,
                patchMac,
                snapshotMac
            });
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, handle, mediaKey }, t) {
            const l = yield o("WAMediaCalculateFilehash").calculateFilehash(t);
            return {
                mediaKey,
                directPath,
                handle,
                fileSizeBytes: t.byteLength,
                fileSha256: o("WABase64").decodeB64(l),
                fileEncSha256: encFilehash
            };
        });
        return _.apply(this, arguments);
    }
    function f({ externalMutations, keyId, patchMac, snapshotMac }) {
        const i = o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid());
        return o("WAWebSyncdRequestEncode").encodeSyncdPatch({
            keyId: {
                id: o("WAWebSyncdKeyTypes").fromSyncKeyId(keyId)
            },
            externalMutations,
            snapshotMac,
            patchMac,
            deviceIndex: i
        });
    }
    function g(t) {
        const n = Math.min(s, Math.max(o("WAWebSyncdGatingUtils").getSyncdInlineMutationsMaxCount(), e));
        return t.length > n;
    }
    function h(e) {
        const t = Math.min(c, Math.max(o("WAWebSyncdGatingUtils").getSyncdPatchProtobufMaxSize(), u)) * 1000;
        return e.byteLength > t;
    }
    l.uploadPatch = d;
    l.exceedInlineMutationCount = g;
    l.exceedPatchProtobufSize = h;
}, 98);