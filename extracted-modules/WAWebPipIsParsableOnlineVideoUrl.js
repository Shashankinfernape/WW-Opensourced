__d("WAWebPipIsParsableOnlineVideoUrl", [
    "WAWebPipConst",
    "WAWebProtobufsE2E.pb",
    "WAWebURLUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Set([
        (e = o("WAWebPipConst")).HOSTNAME.INSTAGRAM,
        e.HOSTNAME.STREAMABLE,
        e.HOSTNAME.FACEBOOK,
        e.HOSTNAME.FBWATCH,
        e.HOSTNAME.FBWATCH_ALT,
        e.HOSTNAME.SHARECHAT
    ]);
    function u(e, t, n) {
        if (t == null || t === "" || n === true) {
            return false;
        }
        if (e === o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.VIDEO) {
            const a = r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(t));
            if (s.has(a)) {
                return true;
            }
        }
        const i = r("WAWebURLUtils").withoutWww(t);
        return Object.keys(o("WAWebPipConst").URL_PATTERNS.ONLINE_VIDEO_URL).some((e)=>{
            const n = o("WAWebPipConst").URL_PATTERNS.ONLINE_VIDEO_URL[e] ?? [];
            return n.some((e)=>e.test(i));
        });
    }
    function c(e, t, n) {
        if (t == null || t === "" || n === true || e !== o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.VIDEO) {
            return false;
        }
        const YOUTUBE = o("WAWebPipConst").URL_PATTERNS.ONLINE_VIDEO_URL.YOUTUBE;
        const i = r("WAWebURLUtils").withoutWww(t);
        return YOUTUBE.some((e)=>e.test(i));
    }
    l.isParsableOnlineVideoURL = u;
    l.isParsableYouTubeVideoUrl = c;
}, 98);