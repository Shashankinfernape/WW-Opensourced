__d("WAWebMediaGatingShouldClearDownloadedBlobs", [
    "WAWebMmsMediaTypes"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        try {
            return o("WAWebMmsMediaTypes").getMsgMediaType(e) === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT;
        } catch (e) {
            return false;
        }
    }
    l.default = e;
}, 98);