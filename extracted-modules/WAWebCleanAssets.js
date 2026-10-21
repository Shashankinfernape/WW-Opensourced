__d("WAWebCleanAssets", [
    "Promise",
    "WAStorageEstimator",
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebFeatureDetectionSwSupport",
    "WAWebLoadAssetUrl",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebWebcStorageStatWamEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        if (r("WAWebFeatureDetectionSwSupport").supported) {
            const a = t.estimateStorage === true;
            const i = navigator.serviceWorker;
            (e || (e = n("Promise"))).all(t.keep.flatMap((e)=>[
                    e[r("WAWebAssetLoaderDpiChangeDispatch").RES.LOW],
                    e[r("WAWebAssetLoaderDpiChangeDispatch").RES.HIGH]
                ]).map(o("WAWebLoadAssetUrl").getSupportedFormatUrl)).then((e)=>{
                const t = e.map((e)=>{
                    const t = e?.split("/");
                    if (t != null) {
                        return t[t.length - 1];
                    }
                    return null;
                });
                if (i != null && i.controller) {
                    r("WAWebSWBus").request(i.controller, r("WAWebSWBusActions").CLEAN_ASSETS, t).catch(r("WAWebNoop"));
                }
            }).then(()=>{
                if (a) {
                    return o("WAStorageEstimator").estimateStorage();
                }
                return null;
            }).then((e)=>{
                if (e != null && e.success) {
                    const t = e.value;
                    const { quota, usage } = t;
                    new (o("WAWebWebcStorageStatWamEvent")).WebcStorageStatWamEvent({
                        webcStorageUsage: usage,
                        webcStorageQuota: quota
                    }).commit();
                }
            });
        }
    }
    l.default = s;
}, 98);