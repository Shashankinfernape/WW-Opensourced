__d("WAWebVoipDeviceAllowedWatcher.react", [
    "react",
    "react-compiler-runtime",
    "useWAWebVoipPermissionStatus"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useEffectEvent } = s;
    function d(e) {
        const t = o("react-compiler-runtime").c(5);
        const { device, onAllowed } = e;
        const i = r("useWAWebVoipPermissionStatus")(device === "camera");
        const { cameraPermission, micPermission } = i;
        const d = device === "camera" ? cameraPermission : micPermission;
        const m = useEffectEvent(onAllowed);
        let p;
        if (t[0] !== m || t[1] !== d) {
            p = function() {
                if (d === "granted") {
                    m();
                }
            };
            t[0] = m;
            t[1] = d;
            t[2] = p;
        } else {
            p = t[2];
        }
        let _;
        if (t[3] !== d) {
            _ = [
                d
            ];
            t[3] = d;
            t[4] = _;
        } else {
            _ = t[4];
        }
        useEffect(p, _);
        return null;
    }
    l.default = d;
}, 98);