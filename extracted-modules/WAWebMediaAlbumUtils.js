__d("WAWebMediaAlbumUtils", [], function(t, n, r, o, a, i) {
    function e(e) {
        if (e == null || e.length !== 2) {
            return false;
        }
        return e.every((e)=>{
            const n = e.mediaData?.aspectRatio;
            return n != null && n < 1;
        });
    }
    i.isAlbumPortraitOriented = e;
}, 66);