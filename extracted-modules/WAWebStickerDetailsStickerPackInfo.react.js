__d("WAWebStickerDetailsStickerPackInfo.react", [
    "fbt",
    "$InternalEnum",
    "WAWebAuraGating",
    "WAWebButton.react",
    "WAWebEmojiText.react",
    "WAWebFavoriteStickerAction",
    "WAWebFavoriteStickerCollection",
    "WAWebMediaDataGetters",
    "WAWebMiscGatingUtils",
    "WDSIconWdsIcAuraFill.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        stickerStore: {
            marginBottom: "xui9b5u",
            $$css: true
        },
        mediaViewer: {
            marginBottom: "x1iymm2a",
            $$css: true
        }
    };
    const d = n("$InternalEnum").Mirrored([
        "StickerStore",
        "MediaViewer"
    ]);
    function m(e) {
        const t = o("react-compiler-runtime").c(27);
        const { isPremium, name, publisher, sticker, theme } = e;
        let p;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            p = [
                o("WAWebMediaDataGetters").getStickerPremiumStatus
            ];
            t[0] = p;
        } else {
            p = t[0];
        }
        o("useWAWebMediaDataValues").useOptionalMediaDataValues(sticker?.mediaData, p);
        let _;
        if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && sticker != null) {
            let f;
            if (t[1] !== sticker.mediaData.stickerPremiumStatus) {
                f = r("WAWebAuraGating").canUsePremiumSticker(sticker.mediaData.stickerPremiumStatus);
                t[1] = sticker.mediaData.stickerPremiumStatus;
                t[2] = f;
            } else {
                f = t[2];
            }
            const g = f;
            let h;
            if (t[3] !== g || t[4] !== sticker) {
                const Component = o("WAWebButton.react").Button;
                const Component_1 = o("WAWebButton.react").Button;
                const Component_2 = r("WDSTooltip.react");
                h = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(sticker.filehash) ? <Component onClick={function() {
                    return o("WAWebFavoriteStickerAction").removeStickerFromFavorites(sticker);
                }} type="secondary">{s._("Remove From Favourites")}</Component> : <Component_2 disabled={g} label={s._("View this sticker on your phone to learn how to access and use it.")}><Component_1 disabled={!g} onClick={function() {
                    return o("WAWebFavoriteStickerAction").addStickerToFavorites(sticker);
                }} type="secondary">{s._("Add to Favourites")}</Component_1></Component_2>;
                t[3] = g;
                t[4] = sticker;
                t[5] = h;
            } else {
                h = t[5];
            }
            _ = h;
        }
        const y = theme === d.StickerStore && c.stickerStore;
        const C = theme === d.MediaViewer && c.mediaViewer;
        let b;
        if (t[6] !== y || t[7] !== C) {
            b = [
                y,
                C
            ];
            t[6] = y;
            t[7] = C;
            t[8] = b;
        } else {
            b = t[8];
        }
        let v;
        if (t[9] !== isPremium) {
            v = isPremium === true && <span data-testid="sticker-details-pack-info-premium-icon" className="x3nfvp2 x1n8ftqi x7g7pl8 x14ug900">{u.jsx(r("WDSIconWdsIcAuraFill.react"), {
                height: 16,
                width: 16
            })}</span>;
            t[9] = isPremium;
            t[10] = v;
        } else {
            v = t[10];
        }
        let S;
        if (t[11] !== name) {
            const Component = r("WDSText.react");
            S = name != null && name !== "" && <Component type="Body1" colorName="contentDefault" testid="sticker-details-pack-info-name">{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: name
            })}</Component>;
            t[11] = name;
            t[12] = S;
        } else {
            S = t[12];
        }
        let R;
        if (t[13] !== name || t[14] !== publisher) {
            R = !!name && !!publisher && u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: "\xA0•\xA0"
            });
            t[13] = name;
            t[14] = publisher;
            t[15] = R;
        } else {
            R = t[15];
        }
        let L;
        if (t[16] !== publisher) {
            L = publisher != null && publisher !== "" && u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: publisher
            });
            t[16] = publisher;
            t[17] = L;
        } else {
            L = t[17];
        }
        let E;
        if (t[18] !== b || t[19] !== v || t[20] !== S || t[21] !== R || t[22] !== L) {
            const Component = r("WDSText.react");
            E = <Component type="Body2" colorName="contentDeemphasized" textAlign="center" testid="sticker-details-pack-info" xstyle={b}>{v}{S}{R}{L}</Component>;
            t[18] = b;
            t[19] = v;
            t[20] = S;
            t[21] = R;
            t[22] = L;
            t[23] = E;
        } else {
            E = t[23];
        }
        let k;
        if (t[24] !== _ || t[25] !== E) {
            k = <>{E}{_}</>;
            t[24] = _;
            t[25] = E;
            t[26] = k;
        } else {
            k = t[26];
        }
        return k;
    }
    l.Theme = d;
    l.StickerDetailsStickerPackInfo = m;
}, 226);