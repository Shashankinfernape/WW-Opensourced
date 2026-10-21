__d("WAWebStickerPanelContentStickerPackStickersRecentMd.react", [
    "fbt",
    "WAWebAvatarStickerUtils",
    "WAWebEmojiPickerConstants",
    "WAWebMediaStickerUtils",
    "WAWebPanelsDisplayLocation",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerModel",
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
        const t = o("react-compiler-runtime").c(16);
        const { displayLocation, isAvatarStickers, onDownloadEnd, onDownloadStart, onFocusPrev, onScroll, onStickerClick, ref, resetScroll } = e;
        const isAvatarStickers_1 = isAvatarStickers === undefined ? false : isAvatarStickers;
        const CRef = useRef();
        let b;
        if (t[0] !== isAvatarStickers_1 || t[1] !== onDownloadEnd || t[2] !== onDownloadStart || t[3] !== resetScroll) {
            b = {
                isAvatarStickers: isAvatarStickers_1,
                onChange: resetScroll,
                onDownloadEnd,
                onDownloadStart
            };
            t[0] = isAvatarStickers_1;
            t[1] = onDownloadEnd;
            t[2] = onDownloadStart;
            t[3] = resetScroll;
            t[4] = b;
        } else {
            b = t[4];
        }
        const v = useG(b);
        const S = !isAvatarStickers_1 && (displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox || displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel);
        let R;
        if (t[5] !== v || t[6] !== S) {
            R = S ? [
                o("WAWebStickerModel").Sticker.getCreateButton()
            ].concat(v) : v;
            t[5] = v;
            t[6] = S;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = R;
        let E;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                return {
                    focus: function(t) {
                        CRef.current?.focus(t);
                    }
                };
            };
            t[8] = E;
        } else {
            E = t[8];
        }
        useImperativeHandle(ref, E);
        const k = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(displayLocation);
        if (!k) {
            return null;
        }
        if (L.length === 0) {
            let I;
            if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                I = u.jsx(r("WAWebStickerPanelContentEmpty.react"), {
                    text: s._("You haven't sent any stickers yet")
                });
                t[9] = I;
            } else {
                I = t[9];
            }
            return I;
        }
        let T;
        if (t[10] !== displayLocation || t[11] !== onFocusPrev || t[12] !== onScroll || t[13] !== onStickerClick || t[14] !== L) {
            const Component = o("WAWebStickerPanelContentStickersScrollGridPresentational.react").StickersScrollGridPresentational;
            T = <Component ref={CRef} onFocusPrev={onFocusPrev} onScroll={onScroll} onStickerClick={onStickerClick} onStickerEnter={onStickerClick} selectedTab={o("WAWebEmojiPickerConstants").StickerTabs.RECENTS} stickers={L} theme="searchable" displayLocation={displayLocation}/>;
            t[10] = displayLocation;
            t[11] = onFocusPrev;
            t[12] = onScroll;
            t[13] = onStickerClick;
            t[14] = L;
            t[15] = T;
        } else {
            T = t[15];
        }
        return T;
    }
    function useG({ isAvatarStickers = false, onChange, onDownloadEnd, onDownloadStart }) {
        const l = useState([]);
        const s = l[0];
        const u = l[1];
        const c = useState(0);
        const m = c[0];
        const p = c[1];
        const f = function() {
            const e = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map((e)=>e.sticker);
            o("WAWebMediaStickerUtils").handleStickerDownloadInStickerPanel({
                stickersArr: e,
                setStickersDownloaded: u,
                stickerReuploadRetryCount: m,
                setStickerReuploadRetryCount: p,
                onChange,
                onDownloadStart,
                onDownloadEnd,
                filterStickers: o("WAWebAvatarStickerUtils").filterAvatarStickers,
                isAvatarStickers
            });
        };
        useEffect(function() {
            f();
        }, []);
        o("useWAWebListener").useListener(o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd, [
            "add",
            "remove",
            "change",
            "sort"
        ], f);
        return s;
    }
    l.StickerPackStickersRecent = f;
}, 226);