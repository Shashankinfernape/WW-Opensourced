__d("WAWebSyncdSnapshotRecoveryGatingUtils", [
    "WAWebABProps",
    "WAWebSyncdConst",
    "WAWebSyncdError",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWamEnumRecoveryStatusEnum",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAPrimaryDeviceSupportsSyncdRecovery") === true;
    }
    function s() {
        return e();
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAPrimaryDeviceSupportsSyncdRecovery", e);
        });
        return c.apply(this, arguments);
    }
    function d(e, t, n) {
        if (!(n instanceof o("WAWebSyncdError").SyncdFatalError)) {
            return {
                shouldPerformRecovery: false,
                reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM.NOT_FATAL
            };
        }
        if (!s()) {
            return {
                shouldPerformRecovery: false,
                reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM.PRIMARY_UNSUPPORTED
            };
        }
        if (e === o("WAWebSyncdConst").CollectionName.CriticalBlock) {
            return {
                shouldPerformRecovery: false,
                reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM.COLLECTION_UNSUPPORTED
            };
        }
        const r = o("WAWebABProps").getABPropConfigValue("snapshot_recovery_max_mutations_count_allowed");
        if (t > r) {
            return {
                shouldPerformRecovery: false,
                reason: o("WAWebWamEnumRecoveryStatusEnum").RECOVERY_STATUS_ENUM.MUTATION_COUNT_TOO_HIGH
            };
        }
        return {
            shouldPerformRecovery: true
        };
    }
    l.syncdSnapshotRecoveryEnabled = s;
    l.updatePrimaryDeviceSupportsSyncdRecovery = u;
    l.shouldPreformSnapshotRecovery = d;
}, 98);