__d("WAWebSyncdDecode", [
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(t, n) {
        try {
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsServerSync.pb").ExternalBlobReferenceSpec, n);
        } catch (error) {
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED, {
                collection: t
            });
            const r = error instanceof Error ? error.message : String(error);
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] ext blob ref decode failed: ",
                ""
            ])), r);
            throw new (o("WAWebSyncdError")).SyncdFatalError(`syncd: external blob reference protobuf deserialization failed: ${r}`);
        }
    }
    function p(e, t) {
        try {
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsServerSync.pb").SyncdSnapshotSpec, t);
        } catch (error) {
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED, {
                collection: e
            });
            const n = error instanceof Error ? error.message : String(error);
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: snapshot protobuf deserialization failed: ",
                ""
            ])), n);
            throw new (o("WAWebSyncdError")).SyncdFatalError(`syncd: snapshot protobuf deserialization failed: ${n}`);
        }
    }
    function _(e, t) {
        try {
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsServerSync.pb").SyncdPatchSpec, t);
        } catch (error) {
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.PATCH_PROTOBUF_DESERIALIZATION_FAILED, {
                collection: e
            });
            const n = error instanceof Error ? error.message : String(error);
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: patch protobuf deserialization failed: ",
                ""
            ])), n);
            throw new (o("WAWebSyncdError")).SyncdFatalError(`syncd: patch protobuf deserialization failed: ${n}`);
        }
    }
    function f(e, t) {
        try {
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsServerSync.pb").SyncdMutationsSpec, t);
        } catch (error) {
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED, {
                collection: e
            });
            const n = error instanceof Error ? error.message : String(error);
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: mutations protobuf deserialization failed: ",
                ""
            ])), n);
            throw new (o("WAWebSyncdError")).SyncdFatalError(`syncd: mutations protobuf deserialization failed: ${n}`);
        }
    }
    function g(e, t) {
        try {
            return o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, t);
        } catch (error) {
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED, {
                collection: e
            });
            const n = error instanceof Error ? error.message : String(error);
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: data protobuf deserialization failed: ",
                ""
            ])), n);
            throw new (o("WAWebSyncdError")).SyncdFatalError(`syncd: data protobuf deserialization failed: ${n}`);
        }
    }
    l.decodeExternalBlobReference = m;
    l.decodeSyncdSnapshot = p;
    l.decodeSyncdPatch = _;
    l.decodeSyncdMutations = f;
    l.decodeSyncActionData = g;
}, 98);