__d("WAWebHDMediaUtils", [
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = Math.max(e, t);
        return n >= o("WAWebABProps").getABPropConfigValue("original_quality_image_min_edge");
    }
    function s(e, t) {
        const n = [
            Math.max(e, t),
            Math.min(e, t)
        ];
        const r = n[0];
        const a = n[1];
        if (a >= o("WAWebABProps").getABPropConfigValue("hd_video_definition_min_edge")) {
            return true;
        }
        return r > o("WAWebABProps").getABPropConfigValue("hd_video_definition_max_edge") && a >= o("WAWebABProps").getABPropConfigValue("hd_video_definition_min_edge_with_max_edge");
    }
    l.isHdPhoto = e;
    l.isHdVideo = s;
}, 98);