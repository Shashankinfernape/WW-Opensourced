__d("useWAWebAudienceImportIsFeatureSupported", [
    "WAWebBizBroadcastsDeviceCapability",
    "WAWebBusinessBroadcastsGatingUtils",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d() {
        const e = o("react-compiler-runtime").c(3);
        const t = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastContactImportEnabled();
        const r = useState(t ? null : false);
        const a = r[0];
        const i = r[1];
        let l;
        let s;
        if (e[0] !== a) {
            l = function() {
                if (a == null) {
                    n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        i((yield o("WAWebBizBroadcastsDeviceCapability").getPrimarySupportsBusinessBroadcastListImport()));
                    })();
                }
            };
            s = [
                a
            ];
            e[0] = a;
            e[1] = l;
            e[2] = s;
        } else {
            l = e[1];
            s = e[2];
        }
        useEffect(l, s);
        return a;
    }
    l.useWAWebAudienceImportIsFeatureSupported = d;
}, 98);