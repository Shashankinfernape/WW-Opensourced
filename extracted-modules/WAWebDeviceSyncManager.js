__d("WAWebDeviceSyncManager", [
    "WALogger",
    "WAWebAdvSyncDeviceListApi",
    "WAWebApiDeviceList",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(t);
            const r = t.filter((e, t)=>n[t] == null || n[t]?.deleted);
            if (r.length > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "maybeSyncDeviceList: syncing ",
                    "/",
                    " wids"
                ])), r.length, t.length);
                yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                    wids: r,
                    context: "message",
                    phash: null
                });
            }
        });
        return u.apply(this, arguments);
    }
    l.maybeSyncDeviceList = s;
}, 98);