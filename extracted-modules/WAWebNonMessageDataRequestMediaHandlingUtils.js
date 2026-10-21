__d("WAWebNonMessageDataRequestMediaHandlingUtils", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WATimeUtils",
    "WAWebMediaMmsV4Upload",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaNonMessageDataRequest",
    "WAWebSendNonMessageDataRequest",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 15;
    const u = 15;
    const c = new Set;
    const d = new Map;
    const m = new Map;
    function p(e) {
        d.clear();
        e.forEach((e)=>{
            if (e.operationType === o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.MEDIA_UPLOAD) {
                d.set(e.id, e);
            }
        });
    }
    function _() {
        m.clear();
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("requestAllSyncdMissingKeys", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WATimeUtils").unixTime();
            const t = o("WAWebSchemaNonMessageDataRequest").getNonMessageDataRequestTable();
            const n = yield t.all();
            n.filter((t)=>!(t.operationType !== o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.MEDIA_UPLOAD || t.requestType !== o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER || t.lastRequestTimeStampSec != null && e - t.lastRequestTimeStampSec > 48 * o("WATimeUtils").HOUR_SECONDS || t.requestRetryCount != null && t.requestRetryCount >= 3));
            o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, {
                fileSha256Arr: n.map((e)=>e.fileKey)
            });
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW
        }).waitUntilCompleted();
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, requestType) {
            const a = o("WAWebSchemaNonMessageDataRequest").getNonMessageDataRequestTable();
            const i = Array.from(t.keys());
            const lastRequestTimeStampSec = o("WATimeUtils").unixTime();
            const s = [];
            yield (e || (e = n("Promise"))).all(i.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const i = b(e, requestType, o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.SEND_REQUEST);
                    const u = yield a.get(i);
                    s.push({
                        id: i,
                        fileKey: e,
                        requestType,
                        operationType: o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.SEND_REQUEST,
                        lastRequestTimeStampSec,
                        requestRetryCount: (u?.requestRetryCount ?? 0) + 1,
                        responseError: t.get(e)
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })())).then(()=>{
                a.bulkCreateOrReplace(s);
            });
        });
        return g.apply(this, arguments);
    }
    function h(e, t, n) {
        const r = b(e, t, o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.MEDIA_UPLOAD);
        const a = d.get(r);
        return a != null && a.lastMediaUploadSuccess === true && a.lastMediaUploadTimeStampSec != null && n - a.lastMediaUploadTimeStampSec <= o("WATimeUtils").DAY_SECONDS;
    }
    function y(e, t, n) {
        const r = b(e, t, o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.MEDIA_UPLOAD);
        const a = d.get(r);
        const i = v(n, a?.lastRequestTimeStampSec);
        return a != null && a.lastMediaUploadSuccess === false && i && a.mediaUploadFailureCount != null && a.mediaUploadFailureCount >= s;
    }
    function C(e, lastMediaUploadTimeStampSec) {
        const n = [];
        e.forEach((e, r)=>{
            const i = b(r, o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER, o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.MEDIA_UPLOAD);
            const l = d.get(i);
            const s = !v(lastMediaUploadTimeStampSec, l?.lastMediaUploadTimeStampSec);
            const lastMediaUploadSuccess = e === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS;
            const mediaUploadFailureCount = (s ? 0 : l?.mediaUploadFailureCount ?? 0) + (lastMediaUploadSuccess ? 0 : 1);
            const m = {
                id: i,
                fileKey: r,
                requestType: o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.UPLOAD_STICKER,
                operationType: o("WAWebSchemaNonMessageDataRequest").DataRequestUploadOperationType.MEDIA_UPLOAD,
                lastMediaUploadTimeStampSec,
                lastMediaUploadSuccess,
                mediaUploadFailureCount
            };
            d.set(i, m);
            n.push(m);
        });
        const r = o("WAWebSchemaNonMessageDataRequest").getNonMessageDataRequestTable();
        r.bulkCreateOrReplace(n);
    }
    function b(e, t, n) {
        return `${e}_${String(t)}_${String(n)}`;
    }
    function v(e, t) {
        const n = new Date(e * 1000).toDateString();
        const r = t != null ? new Date(t * 1000).toDateString() : n;
        return n === r;
    }
    l.MEDIA_REUPLOAD_REQUEST_LIMIT = u;
    l.inFlightStickerRequests = c;
    l.mediaReuploadRequestCountMap = m;
    l.initializeMediaUploadResultFromStorage = p;
    l.retryNonMessageDataRequestJob = _;
    l.insertResponseError = f;
    l.shouldSkipMediaUploadWithSuccess = h;
    l.shouldSkipMediaUploadWithCancellation = y;
    l.insertMediaUploadResult = C;
}, 98);