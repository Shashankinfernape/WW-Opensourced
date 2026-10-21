__d("WAWebPonyfillsMediaError", [], function(t, n, r, o, a, i) {
    const e = window.MediaError || {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    i.default = e;
}, 66);