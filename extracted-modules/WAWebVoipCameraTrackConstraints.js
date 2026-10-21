__d("WAWebVoipCameraTrackConstraints", [
    "WAGetMediaDevicesSupportedConstraints",
    "isEmptyObject"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = {
            width: {
                ideal: e.width
            },
            height: {
                ideal: e.height
            },
            frameRate: {
                ideal: e.maxFps
            }
        };
        const n = o("WAGetMediaDevicesSupportedConstraints").getMediaDevicesSupportedConstraints();
        const a = {};
        const i = {};
        if (n?.width === true) {
            a.width = {
                min: e.width
            };
            i.width = {
                max: e.width
            };
        }
        if (n?.height === true) {
            a.height = {
                min: e.height
            };
            i.height = {
                max: e.height
            };
        }
        if (!r("isEmptyObject")(a) && !r("isEmptyObject")(i)) {
            t.advanced = [
                a,
                i
            ];
        }
        return t;
    }
    l.default = e;
}, 98);