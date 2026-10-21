__d("WAWebWallpaperSyncOffset", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 100;
    function l(t) {
        if (t >= e) {
            return t - e;
        }
        return t;
    }
    i.SOLID_PALETTE_WALLPAPER_ID_OFFSET = e;
    i.stripWallpaperSyncOffset = l;
}, 66);