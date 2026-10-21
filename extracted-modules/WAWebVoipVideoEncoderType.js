__d("WAWebVoipVideoEncoderType", [
    "$InternalEnum",
    "WAWebVoipWebCodecsEncoderState"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = n("$InternalEnum")({
        WEBCODECS_H264: "webcodecs_h264",
        OPENH264: "openh264"
    });
    function s() {
        const t = o("WAWebVoipWebCodecsEncoderState").getAllWebCodecsEncodeParams().size > 0;
        const n = o("WAWebVoipWebCodecsEncoderState").isWebCodecsEncoderEnabled();
        if (t || n) {
            return e.WEBCODECS_H264;
        }
        return null;
    }
    l.VideoEncoderType = e;
    l.getActiveVideoEncoderType = s;
}, 98);