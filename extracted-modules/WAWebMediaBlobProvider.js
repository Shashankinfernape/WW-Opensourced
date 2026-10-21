__d("WAWebMediaBlobProvider", [
    "WAWebMediaDataGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "react",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function d({ downloadMedia, mediaData, render, renderPlaceholder }) {
        const l = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, [
            o("WAWebMediaDataGetters").getFilehash,
            o("WAWebMediaDataGetters").getMediaStage
        ]);
        const s = l[0];
        const d = l[1];
        const m = r("useWAWebIsBlobInMemoryCache")(s);
        const p = useState(function() {
            return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(s);
        });
        const _ = p[0];
        const f = p[1];
        if (_ == null && m) {
            f(o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(s));
        }
        useEffect(function() {
            if (!_ && d === o("WAWebMediaTypes").MediaDataStage.RESOLVED) {
                downloadMedia();
            }
        }, []);
        if (_) {
            return render(_);
        }
        return renderPlaceholder();
    }
    l.default = d;
}, 98);