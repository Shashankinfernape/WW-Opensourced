__d("WAWebApiPendingDeviceSync", [
    "WALogger",
    "WAWebBizBroadcastDeviceRemovalCleanup",
    "WAWebOffdStorageUtils",
    "WAWebSchemaPendingDeviceSync",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!o("WAWebOffdStorageUtils").isStorageCreated()) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "doPendingDeviceSync skipped: offline storage not created"
                ])));
                return;
            }
            try {
                const t = yield o("WAWebSchemaPendingDeviceSync").getTable().all();
                yield o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(t.map((e)=>o("WAWebWidFactory").createWid(e.id)), null, null);
                yield o("WAWebSchemaPendingDeviceSync").getTable().bulkRemove(t.map((e)=>e.id));
                yield o("WAWebBizBroadcastDeviceRemovalCleanup").cleanupCampaignsWithInvalidDevices();
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "doPendingDeviceSync failed"
                ]))).catching(r("getErrorSafe")(error)).verbose().sendLogs("pending-device-sync-failed");
            }
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return o("WAWebSchemaPendingDeviceSync").getTable().bulkCreateOrMerge(e.map((e)=>({
                id: e
            })));
    }
    l.doPendingDeviceSync = u;
    l.addUserToPendingDeviceSync = d;
}, 98);