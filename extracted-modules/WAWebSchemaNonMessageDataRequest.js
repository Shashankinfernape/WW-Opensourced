__d("WAWebSchemaNonMessageDataRequest", [
    "$InternalEnum",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "SEND_REQUEST",
        "MEDIA_UPLOAD"
    ]);
    function s() {
        const e = o("WAWebModelStorageUtils").getStorage();
        const t = o("WAWebStorageMutationBuilder").columnBuilder(e.config);
        const { addColumn: n, addUserDefinedPrimaryKey: r } = t;
        e.add("non-message-data-request").version(o("WAWebModelStorageVersions").nonMessageDataRequestCreateTable(), [
            r("id"),
            n("fileKey"),
            n("requestType"),
            n("operationType"),
            n("lastRequestTimeStampSec"),
            n("requestRetryCount"),
            n("responseError"),
            n("lastMediaUploadTimeStampSec"),
            n("lastMediaUploadSuccess"),
            n("mediaUploadFailureCount")
        ]).view(function(e) {
            return e;
        });
    }
    function u() {
        return o("WAWebModelStorageUtils").getStorage().table("non-message-data-request");
    }
    l.DataRequestUploadOperationType = e;
    l.addTable = s;
    l.getNonMessageDataRequestTable = u;
}, 98);