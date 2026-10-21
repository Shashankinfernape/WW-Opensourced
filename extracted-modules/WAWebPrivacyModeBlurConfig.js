__d("WAWebPrivacyModeBlurConfig", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const s = n("$InternalEnum").Mirrored([
        "General",
        "Media"
    ]);
    const u = n("$InternalEnum").Mirrored([
        "Off",
        "Light",
        "Medium",
        "Strong"
    ]);
    const c = {
        [u.Off]: 0,
        [u.Light]: 4,
        [u.Medium]: 8,
        [u.Strong]: 20
    };
    const d = {
        [s.General]: u.Light,
        [s.Media]: u.Medium
    };
    function m(e) {
        return c[e];
    }
    function p(e) {
        return d[e];
    }
    i.BlurCategory = s;
    i.BlurPreset = u;
    i.blurValueForPreset = m;
    i.defaultPresetForCategory = p;
}, 66);