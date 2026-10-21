__d("WAWebPipConst", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = {
        YOUTUBE: "youtube.com",
        YOUTUBE_MOBILE: "m.youtube.com",
        YOUTUBE_SHORTENED: "youtu.be",
        INSTAGRAM: "instagram.com",
        STREAMABLE: "streamable.com",
        FACEBOOK: "facebook.com",
        FBWATCH: "fbwat.ch",
        FBWATCH_ALT: "fb.watch",
        SHARECHAT: "sharechat.com"
    };
    const l = n("$InternalEnum").Mirrored([
        "FLOATER",
        "OG_FLOATER",
        "OG_INLINE_PLAYER",
        "MEDIA_VIEWER"
    ]);
    const s = n("$InternalEnum").Mirrored([
        "YOUTUBE",
        "MSG",
        "VOIP"
    ]);
    const u = 16 / 9;
    const c = {
        ONLINE_VIDEO_URL: {
            YOUTUBE: [
                /^https?:\/\/youtu\.be\/(.{11})/,
                /^https?:\/\/(m\.)?youtube\.com\/watch\?v=(.{11})/,
                /^https?:\/\/(m\.)?youtube\.com\/shorts\/(.{11})/
            ]
        }
    };
    const d = "t";
    const m = /^(\d+h)?(\d+m)?(\d+s)?(\d+)?$/;
    i.HOSTNAME = e;
    i.PlayerType = l;
    i.PiPVideoType = s;
    i.YOUTUBE_VIDEO_DEFAULT_ASPECT_RATIO = u;
    i.URL_PATTERNS = c;
    i.YOUTUBE_URL_TIME_PARAM_NAME = d;
    i.YOUTUBE_URL_TIME_PARAM_PATTERN = m;
}, 66);