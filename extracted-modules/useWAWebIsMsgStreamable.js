__d("useWAWebIsMsgStreamable", [
    "WAWebMediaDataGetters",
    "WAWebMediaStreamability",
    "WAWebVideoUtils",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebStreamingSupported"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = o("react-compiler-runtime").c(11);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let i;
            a = [
                (i = o("WAWebMediaDataGetters")).getType,
                i.getIsGif,
                i.getMediaStage,
                i.getSidecar,
                i.getIsViewOnce,
                i.getFullWidth,
                i.getFullHeight
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        const l = o("useWAWebMediaDataValues").useMediaDataValues(t, a);
        const s = l[0];
        const isGif = l[1];
        const mediaStage = l[2];
        const sidecar = l[3];
        const isViewOnce = l[4];
        const fullWidth = l[5];
        const fullHeight = l[6];
        const f = r("useWAWebStreamingSupported")();
        let g;
        if (n[1] !== fullHeight || n[2] !== fullWidth || n[3] !== isGif || n[4] !== isViewOnce || n[5] !== mediaStage || n[6] !== e || n[7] !== sidecar || n[8] !== f || n[9] !== s) {
            g = o("WAWebMediaStreamability").isStreamableMedia({
                type: s,
                isGif,
                mediaStage,
                sidecar,
                isViewOnce,
                fullWidth,
                fullHeight
            }, f) && o("WAWebVideoUtils").canMsgStream(e);
            n[1] = fullHeight;
            n[2] = fullWidth;
            n[3] = isGif;
            n[4] = isViewOnce;
            n[5] = mediaStage;
            n[6] = e;
            n[7] = sidecar;
            n[8] = f;
            n[9] = s;
            n[10] = g;
        } else {
            g = n[10];
        }
        return g;
    }
    l.default = e;
}, 98);