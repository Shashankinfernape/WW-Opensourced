__d("WAWebSyncdMMSDownload", [
    "WAWebSyncdDecode",
    "WAWebSyncdNetCallbacksApi",
    "WAWebSyncdValidateServerSyncProtobuf",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(t, "snapshot", e);
            const a = o("WAWebSyncdDecode").decodeSyncdSnapshot(e, n);
            return r("WAWebSyncdValidateServerSyncProtobuf").validateSnapshotProtobuf(e, a);
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(t, "patch", e);
            const mutations = o("WAWebSyncdDecode").decodeSyncdMutations(e, n).mutations;
            return mutations.map((t)=>r("WAWebSyncdValidateServerSyncProtobuf").validateMutationProtobuf(e, t));
        });
        return c.apply(this, arguments);
    }
    l.downloadSnapshot = e;
    l.downloadExternalPatch = u;
}, 98);