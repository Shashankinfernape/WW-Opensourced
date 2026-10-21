__d("WAWebStickerPanelContentStickerPackStickersFavorite.react", [
    "fbt",
    "WAWebAvatarStickerUtils",
    "WAWebEmojiPickerConstants",
    "WAWebFavoriteStickerCollection",
    "WAWebMediaStickerUtils",
    "WAWebStickerPanelContentEmpty.react",
    "WAWebStickerPanelContentStickersScrollGridPresentational.react",
    "react",
    "react-compiler-runtime",
    "useWAWebIsReadyToShowStickers.react",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useImperativeHandle, useRef, useState } = c;
    function f(e) {
        const t = o("react-compiler-runtime").c(8);
        const { displayLocation, onDownloadEnd, onDownloadStart, onFocusPrev, onScroll, onStickerClick, ref, resetScroll } = e;
        const hRef = useRef();
        const y = useG(resetScroll, onDownloadStart, onDownloadEnd);
        let C;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            C = function() {
                return {
                    focus: function(t) {
                        hRef.current?.focus(t);
                    }
                };
            };
            t[0] = C;
        } else {
            C = t[0];
        }
        useImperativeHandle(ref, C);
        const b = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(displayLocation);
        if (!b) {
            return null;
        }
        if (y.length === 0) {
            let v;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                v = u.jsx(r("WAWebStickerPanelContentEmpty.react"), {
                    text: s._("You haven't favorited any stickers yet")
                });
                t[1] = v;
            } else {
                v = t[1];
            }
            return v;
        }
        let S;
        if (t[2] !== displayLocation || t[3] !== y || t[4] !== onFocusPrev || t[5] !== onScroll || t[6] !== onStickerClick) {
            const Component = o("WAWebStickerPanelContentStickersScrollGridPresentational.react").StickersScrollGridPresentational;
            S = <Component ref={hRef} onFocusPrev={onFocusPrev} onScroll={onScroll} onStickerClick={onStickerClick} onStickerEnter={onStickerClick} selectedTab={o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES} stickers={y} displayLocation={displayLocation} theme="searchable" loadOneRow/>;
            t[2] = displayLocation;
            t[3] = y;
            t[4] = onFocusPrev;
            t[5] = onScroll;
            t[6] = onStickerClick;
            t[7] = S;
        } else {
            S = t[7];
        }
        return S;
    }
    function useG(resetScroll, onDownloadStart, onDownloadEnd) {
        const r = useState([]);
        const a = r[0];
        const i = r[1];
        const l = useState(0);
        const s = l[0];
        const u = l[1];
        const c = function() {
            const r = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.map((e)=>e.sticker);
            o("WAWebMediaStickerUtils").handleStickerDownloadInStickerPanel({
                stickersArr: r,
                setStickersDownloaded: i,
                stickerReuploadRetryCount: s,
                setStickerReuploadRetryCount: u,
                onChange: resetScroll,
                onDownloadStart,
                onDownloadEnd,
                filterStickers: o("WAWebAvatarStickerUtils").filterAvatarStickers,
                isAvatarStickers: false
            });
        };
        useEffect(function() {
            c();
        }, []);
        o("useWAWebListener").useListener(o("WAWebFavoriteStickerCollection").FavoriteStickerCollection, [
            "add",
            "remove",
            "change",
            "sort"
        ], c);
        return a;
    }
    l.default = f;
}, 226);