__d("WAWebHistorySyncStickers", [
    "WABase64",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebHistorySyncLogUtils",
    "WAWebMediaTypes",
    "WAWebRecentStickerCollectionMd",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsTypes",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(t, n) {
        if (t.recentStickers == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Recent Stickers: received empty recentStickers protobuf"
            ])));
            return;
        }
        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[Recent Stickers] processing ",
            " stickers"
        ])), t.recentStickers.length);
        let i = 0;
        const l = r("compactMap")(t.recentStickers, function(e) {
            const e_fileSha256 = e.fileSha256;
            if (e_fileSha256 == null) {
                i++;
                return null;
            }
            const { fileEncSha256, mediaKey } = e;
            return [
                {
                    id: o("WABase64").encodeB64(e_fileSha256),
                    directPath: e.directPath,
                    filehash: o("WABase64").encodeB64(e_fileSha256),
                    encFilehash: fileEncSha256 != null ? o("WABase64").encodeB64(fileEncSha256) : null,
                    mediaKey: mediaKey != null ? o("WABase64").encodeB64(mediaKey) : "",
                    mediaKeyTimestamp: o("WATimeUtils").unixTime(),
                    width: e.width,
                    height: e.height,
                    mimetype: e.mimetype,
                    type: o("WAWebMediaTypes").OUTWARD_TYPES.STICKER,
                    index: 0,
                    weight: e.weight
                },
                o("WALongInt").maybeNumberOrThrowIfTooLarge(e.lastStickerSentTs) ?? 0,
                null
            ];
        });
        if (i > 0) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Recent Stickers] ",
                " stickers with null fileSha256"
            ])), i);
        }
        const p = t.recentStickers.filter((e)=>e.fileSha256 != null && (e.fileEncSha256 == null || e.mediaKey == null));
        if (p.length > 0) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[Recent Stickers] ",
                " missing encSha256/mediaKey"
            ])), p.length);
        }
        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
            "[Recent Stickers] adding ",
            " stickers"
        ])), l.length);
        o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.replaceAndEnqueue(l, true);
        o("WAWebUserPrefsAppStateSync").setNonCriticalDataSyncStatus({
            [o("WAWebUserPrefsTypes").NonCriticalDataSyncStatusType.RECENT_STICKER_INITIALIZED]: o("WAWebUserPrefsTypes").RecentStickerInitializedStatusType.SUCCESS
        });
        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] Recent Stickers completed, ",
            ""
        ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(n));
    }
    l.processRecentStickers = p;
}, 98);