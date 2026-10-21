__d("WAWebMediaLocalAvailability", [
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.mediaData == null) {
            return false;
        }
        const e_mediaData = e.mediaData;
        const { filehash, mediaBlob } = e_mediaData;
        if (mediaBlob instanceof r("WAWebMediaOpaqueData")) {
            return true;
        }
        if (filehash == null) {
            return false;
        }
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(filehash) != null;
    }
    l.isMsgMediaAvailableLocally = e;
}, 98);