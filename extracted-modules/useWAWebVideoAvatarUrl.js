__d("useWAWebVideoAvatarUrl", [
    "WAWebWamEnumDownloadOriginType",
    "useWAWebHatchSecureMediaUrl",
    "useWAWebVideoAvatarVariants"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "idle";
    function s(t) {
        const a = r("useWAWebVideoAvatarVariants")(t);
        return r("useWAWebHatchSecureMediaUrl")(a?.[e] ?? null, o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.PROFILE_PICTURE);
    }
    l.default = s;
}, 98);