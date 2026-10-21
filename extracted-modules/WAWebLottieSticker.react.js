__d("WAWebLottieSticker.react", [
    "fbt",
    "WAWebInMemoryLottieStickerCache",
    "WAWebLottieWrapper.react",
    "WAWebMediaBlobProvider",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaStateControlDownload.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useEffect, useRef, useState } = c;
    function f(e) {
        const t = o("react-compiler-runtime").c(23);
        const { className, downloadMedia, forcePlay, mediaData, onClick, placeholderRenderer } = e;
        const m = useState(false);
        const f = m[0];
        const h = m[1];
        let y;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            y = function() {
                h(true);
            };
            t[0] = y;
        } else {
            y = t[0];
        }
        const onExtractionFailed = y;
        let b;
        if (t[1] !== downloadMedia || t[2] !== mediaData.filehash) {
            b = function(t) {
                t.stopPropagation();
                h(false);
                o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(mediaData.filehash);
                o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.delete(mediaData.filehash);
                o("WAWebInMemoryLottieStickerCache").InMemorySecondaryLottieStickerCache.delete(mediaData.filehash);
                downloadMedia();
            };
            t[1] = downloadMedia;
            t[2] = mediaData.filehash;
            t[3] = b;
        } else {
            b = t[3];
        }
        const v = b;
        let S;
        if (t[4] !== f) {
            S = f ? s._("Sticker couldn't load, retry available") : s._("Sticker");
            t[4] = f;
            t[5] = S;
        } else {
            S = t[5];
        }
        const R = S;
        const LRef = useRef(null);
        const E = f ? undefined : onClick;
        let k;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            k = function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    t.preventDefault();
                    LRef.current?.click();
                }
            };
            t[6] = k;
        } else {
            k = t[6];
        }
        const I = k;
        let T;
        if (t[7] !== downloadMedia || t[8] !== f || t[9] !== forcePlay || t[10] !== v || t[11] !== mediaData || t[12] !== placeholderRenderer) {
            const Component = r("WAWebMediaStateControlDownload.react");
            T = f ? <Component onClick={v}/> : u.jsx(r("WAWebMediaBlobProvider"), {
                mediaData,
                downloadMedia,
                renderPlaceholder: placeholderRenderer,
                render: function(t) {
                    return <G1Component blob={t} forcePlay={forcePlay} mediaData={mediaData} onExtractionFailed={onExtractionFailed}/>;
                }
            });
            t[7] = downloadMedia;
            t[8] = f;
            t[9] = forcePlay;
            t[10] = v;
            t[11] = mediaData;
            t[12] = placeholderRenderer;
            t[13] = T;
        } else {
            T = t[13];
        }
        const D = T;
        if (E != null) {
            let x;
            if (t[14] !== R || t[15] !== className || t[16] !== D || t[17] !== E) {
                x = <div ref={LRef} className={className} onClick={E} onKeyDown={I} role="button" tabIndex={0} aria-label={R}>{D}</div>;
                t[14] = R;
                t[15] = className;
                t[16] = D;
                t[17] = E;
                t[18] = x;
            } else {
                x = t[18];
            }
            return x;
        }
        let $;
        if (t[19] !== R || t[20] !== className || t[21] !== D) {
            $ = <div ref={LRef} className={className} role="img" aria-label={R}>{D}</div>;
            t[19] = R;
            t[20] = className;
            t[21] = D;
            t[22] = $;
        } else {
            $ = t[22];
        }
        return $;
    }
    function G1Component(e) {
        const t = o("react-compiler-runtime").c(10);
        const { blob, forcePlay, mediaData, onExtractionFailed } = e;
        let s;
        if (t[0] !== mediaData.filehash) {
            s = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(mediaData.filehash);
            t[0] = mediaData.filehash;
            t[1] = s;
        } else {
            s = t[1];
        }
        const c = useState(s);
        const d = c[0];
        const p = c[1];
        let f;
        let g;
        if (t[2] !== blob || t[3] !== mediaData.filehash || t[4] !== onExtractionFailed) {
            f = function() {
                if (o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(mediaData.filehash) == null) {
                    o("WAWebInMemoryLottieStickerCache").extractAndSetBothLottieJSONInMemoryCache(mediaData.filehash, blob).then(()=>{
                        const e = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(mediaData.filehash);
                        if (e != null) {
                            p(e);
                        } else {
                            onExtractionFailed();
                        }
                    });
                }
            };
            g = [
                mediaData.filehash,
                blob,
                onExtractionFailed
            ];
            t[2] = blob;
            t[3] = mediaData.filehash;
            t[4] = onExtractionFailed;
            t[5] = f;
            t[6] = g;
        } else {
            f = t[5];
            g = t[6];
        }
        useEffect(f, g);
        let h;
        if (t[7] !== forcePlay || t[8] !== d) {
            h = d != null ? u.jsx(r("WAWebLottieWrapper.react"), {
                data: d,
                forcePlay
            }) : null;
            t[7] = forcePlay;
            t[8] = d;
            t[9] = h;
        } else {
            h = t[9];
        }
        return h;
    }
    l.default = f;
}, 226);