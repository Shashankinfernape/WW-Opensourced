__d("WAWebSyncdMetrics", [
    "$InternalEnum",
    "WAWebAppTracker",
    "WAWebCollectionHandlerWamMutation",
    "WAWebCollectionHandlerWamSyncUtil",
    "WAWebMdAppStateKeyRotationWamEvent",
    "WAWebMdCriticalEventWamEvent",
    "WAWebSyncdConst",
    "WAWebSyncdQpl",
    "WAWebWamEnumCollection",
    "WAWebWamEnumMdAppStateKeyRotationReasonCode",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum").Mirrored([
        "SNAPSHOT_USED",
        "SNAPSHOT_NOT_USED"
    ]);
    const s = n("$InternalEnum").Mirrored([
        "APP_STATE_SYNC_KEY_EXPIRY",
        "DEVICE_DEREGISTERATION",
        "NO_KEYS"
    ]);
    function u(e) {
        o("WAWebCollectionHandlerWamSyncUtil").commitBootstrapAppStateDownloadMetric({
            collectionName: e.collection,
            downloadSize: e.downloadSize,
            downloadStartTs: e.downloadStartTs,
            failureReason: e.failureReason,
            isSuccess: e.isSuccess
        });
    }
    function c(e, t, n) {
        o("WAWebCollectionHandlerWamMutation").logMetricsForDataApplied(e, t, n);
    }
    function d(e) {
        if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock) {
            return o("WAWebWamEnumCollection").COLLECTION.CRITICAL_BLOCK;
        }
        if (e === o("WAWebSyncdConst").CollectionName.CriticalUnblockLow) {
            return o("WAWebWamEnumCollection").COLLECTION.CRITICAL_UNBLOCK_LOW;
        }
        if (e === o("WAWebSyncdConst").CollectionName.Regular) {
            return o("WAWebWamEnumCollection").COLLECTION.REGULAR;
        }
        if (e === o("WAWebSyncdConst").CollectionName.RegularHigh) {
            return o("WAWebWamEnumCollection").COLLECTION.REGULAR_HIGH;
        }
        if (e === o("WAWebSyncdConst").CollectionName.RegularLow) {
            return o("WAWebWamEnumCollection").COLLECTION.REGULAR_LOW;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function m(mdCriticalEventCode, t, n) {
        const r = new (o("WAWebMdCriticalEventWamEvent")).MdCriticalEventWamEvent({
            mdCriticalEventCode
        });
        if (t != null) {
            r.collection = d(t);
        }
        if (n != null) {
            r.mutationActionName = n;
        }
        r.commit();
    }
    function p(e) {
        new (o("WAWebMdAppStateKeyRotationWamEvent")).MdAppStateKeyRotationWamEvent({
            mdAppStateKeyRotationReason: _(e)
        }).commit();
    }
    function _(e) {
        if (e === s.APP_STATE_SYNC_KEY_EXPIRY) {
            return o("WAWebWamEnumMdAppStateKeyRotationReasonCode").MD_APP_STATE_KEY_ROTATION_REASON_CODE.APP_STATE_SYNC_KEY_EXPIRY;
        }
        if (e === s.DEVICE_DEREGISTERATION) {
            return o("WAWebWamEnumMdAppStateKeyRotationReasonCode").MD_APP_STATE_KEY_ROTATION_REASON_CODE.DEVICE_DEREGISTERATION;
        }
        if (e === s.NO_KEYS) {
            return o("WAWebWamEnumMdAppStateKeyRotationReasonCode").MD_APP_STATE_KEY_ROTATION_REASON_CODE.NO_KEYS;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function f(e) {
        const t = {};
        Object.entries(e).forEach(([n, r])=>{
            if (typeof r === "number") {
                if (t.int == null) {
                    t.int = {};
                }
                t.int[n] = r;
            } else if (typeof r === "string") {
                if (t.string == null) {
                    t.string = {};
                }
                t.string[n] = r;
            }
        });
        if (r("isEmptyObject")(t)) {
            return undefined;
        }
        return t;
    }
    class g {
        constructor(){
            this.syncdQpl = new (o("WAWebSyncdQpl")).SyncdQPL;
            this.syncdQpl.start();
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.SyncD);
        }
        end(t = false) {
            this.syncdQpl.end(t);
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.SyncD);
        }
        mark(t, n) {
            this.syncdQpl.markAnnotations(t, f(n));
        }
    }
    l.SyncdBootstrapDataAppliedSnapshotUsed = e;
    l.SyncdKeyRotationEventType = s;
    l.reportSyncdBootstrapAppStateDownloadMetric = u;
    l.reportSyncdBootstrapDataApplied = c;
    l.collectionNameToMetric = d;
    l.uploadMdCriticalEventMetric = m;
    l.reportSyncdKeyRotationEvent = p;
    l.constructAnnotationsFromContext = f;
    l.SyncdEventFlow = g;
}, 98);