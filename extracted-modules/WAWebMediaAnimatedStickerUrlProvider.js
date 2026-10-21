__d("WAWebMediaAnimatedStickerUrlProvider", [
    "WAWebCreateMediaBlobUrl",
    "WAWebMediaDataGetters",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
    "err",
    "react",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebMediaDataValues",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useEffect, useImperativeHandle, useRef, useState } = u;
    function useF({ children, downloadMedia, mediaData, placeholderRenderer, ref }) {
        const s = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, [
            o("WAWebMediaDataGetters").getFilehash,
            o("WAWebMediaDataGetters").getMediaStage
        ]);
        const u = s[0];
        const f = s[1];
        const gRef = useRef(null);
        const h = r("useWAWebIsBlobInMemoryCache")(u);
        const y = useCallback(function(e) {
            const t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(e);
            if (!t) {
                throw r("err")("Cannot call createURL when the blob does not exist.");
            }
            gRef.current = t;
            const n = new Blob([
                t
            ], {
                type: t.type
            });
            const a = o("WAWebCreateMediaBlobUrl").createMediaBlobUrl(n);
            return a;
        }, []);
        const C = useState(function() {
            if (h) {
                return y(u);
            }
            return null;
        });
        const b = C[0];
        const v = C[1];
        const S = (t)=>{
            window.URL.revokeObjectURL(t);
        };
        useEffect(function() {
            if (!h && f === o("WAWebMediaTypes").MediaDataStage.RESOLVED && downloadMedia) {
                downloadMedia();
            }
        }, []);
        r("useWAWebOnUnmount")(function() {
            if (b != null) {
                S(b);
            }
        });
        const refreshBlob = function() {
            const gRef_current = gRef.current;
            if (!gRef_current) {
                throw r("err")("Cannot call refreshBlob when the blob does not exist.");
            }
            const t = new Blob([
                gRef_current
            ], {
                type: gRef_current.type
            });
            const n = o("WAWebCreateMediaBlobUrl").createMediaBlobUrl(t);
            if (b != null) {
                window.URL.revokeObjectURL(b);
            }
            v(n);
        };
        useEffect(function() {
            if (h && b == null) {
                v(y(u));
            }
        }, [
            h,
            u,
            b,
            y
        ]);
        useImperativeHandle(ref, function() {
            return {
                refreshBlob
            };
        });
        if (b == null) {
            return placeholderRenderer();
        }
        return children(b);
    }
    useF.displayName = `${useF.name} [from ${i.id}]`;
    l.default = useF;
}, 98);