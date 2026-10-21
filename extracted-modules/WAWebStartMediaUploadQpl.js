__d("WAWebStartMediaUploadQpl", [
    "WAWebQplFlow",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(891428410, "3040");
    const s = 600 * 1000;
    function u({ byteLength, entryPoint, isEncrypted, isStreamingUpload, mediaType }) {
        const string = {
            entryPoint
        };
        if (mediaType != null) {
            string.media_type = mediaType;
        }
        const c = {};
        if (byteLength != null) {
            c.byte_length = byteLength;
        }
        const bool = {};
        if (isEncrypted != null) {
            bool.is_encrypted = isEncrypted;
        }
        if (isStreamingUpload != null) {
            bool.is_streaming_upload = isStreamingUpload;
        }
        return o("WAWebQplFlow").startQplFlow(e, {
            annotations: {
                string,
                int: c,
                bool
            },
            timeoutInMs: s
        });
    }
    l.startMediaUploadQpl = u;
}, 98);