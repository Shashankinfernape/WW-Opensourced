__d("WAWebVoipVideoRendererInterface", [
    "$InternalEnum",
    "WAWebNoop",
    "WAWebVoipSelfPreviewJid"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum")({
        DEFAULT: 0,
        RASTER: 1,
        VIDEOFRAME: 2,
        WEBGL: 3,
        WEBCODECS_H264: 4,
        WEBGPU: 5
    });
    const s = n("$InternalEnum")({
        MAIN_THREAD: 1,
        SINGLE_WORKER: 2,
        WORKER_PER_CANVAS: 3,
        POOLED_WORKERS: 4
    });
    l.WAWebVoipVideoRendererType = e;
    l.WAWebVoipVideoRendererThreadingMode = s;
    l.selfPreviewJid = o("WAWebVoipSelfPreviewJid").selfPreviewJid;
    l.onRenderCallbackNoop = r("WAWebNoop");
}, 98);