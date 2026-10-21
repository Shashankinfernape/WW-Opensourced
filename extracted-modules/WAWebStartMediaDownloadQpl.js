__d("WAWebStartMediaDownloadQpl", [
    "WAWebQplFlow",
    "gkx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891429592, "538");
    const s = 600 * 1000;
    function u({ entryPoint }) {
        return o("WAWebQplFlow").startQplFlow(e, {
            annotations: {
                bool: {
                    wa_web_media_wasm_worker_split: r("gkx")("24042")
                },
                string: {
                    entryPoint
                }
            },
            timeoutInMs: s
        });
    }
    l.startMediaDownloadQpl = u;
}, 98);