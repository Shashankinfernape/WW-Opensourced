__d("WAWebMediaVideoStreaming", [], function(t, n, r, o, a, i) {
    function e(e) {
        const e_mediaObject = e.mediaObject;
        if (e_mediaObject) {
            return e_mediaObject.videoStreamingInfo(e.id.toString());
        }
        return null;
    }
    i.videoStreamingInfo = e;
}, 66);