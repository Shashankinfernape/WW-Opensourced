__d("WAWebAlbumMessageUtils", [
    "fbt",
    "WAWebFrontendMsgGetters"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        const t = e.reduce((acc, item)=>{
            if (o("WAWebFrontendMsgGetters").getAsImage(item)) {
                acc.photoCount += 1;
            } else if (o("WAWebFrontendMsgGetters").getAsVideo(item)) {
                acc.videoCount += 1;
            }
            return acc;
        }, {
            photoCount: 0,
            videoCount: 0
        });
        const { photoCount, videoCount } = t;
        const a = photoCount > 0 ? s._("_j{\"*\":\"{photo-count} photos\",\"_1\":\"1 photo\"}", [
            s._plural(photoCount, "photo-count")
        ]) : null;
        const i = videoCount > 0 ? s._("_j{\"*\":\"{video-count} videos\",\"_1\":\"1 video\"}", [
            s._plural(videoCount, "video-count")
        ]) : null;
        return [
            a,
            i
        ].filter(Boolean);
    }
    l.getAlbumPhotoAndVideoCountText = e;
}, 226);