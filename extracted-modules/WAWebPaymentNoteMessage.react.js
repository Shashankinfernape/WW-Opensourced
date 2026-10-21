__d("WAWebPaymentNoteMessage.react", [
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStickerModel",
    "WAWebStickerPanelContentStickerItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(14);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMsgGetters").getPaymentNoteMsg
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msgKey, a);
        const l = i[0];
        if (l == null || l.type !== o("WAWebMsgType").MSG_TYPE.STICKER) {
            return null;
        }
        let u;
        if (t[1] !== l.deprecatedMms3Url || t[2] !== l.directPath || t[3] !== l.encFilehash || t[4] !== l.filehash || t[5] !== l.height || t[6] !== l.mediaKey || t[7] !== l.mediaKeyTimestamp || t[8] !== l.mimetype || t[9] !== l.width) {
            u = new (o("WAWebStickerModel")).StickerModel({
                id: l.filehash,
                mimetype: l.mimetype,
                width: l.width,
                height: l.height,
                filehash: l.filehash,
                encFilehash: l.encFilehash,
                directPath: l.directPath,
                mediaKey: l.mediaKey,
                mediaKeyTimestamp: l.mediaKeyTimestamp,
                deprecatedMms3Url: l.deprecatedMms3Url
            });
            t[1] = l.deprecatedMms3Url;
            t[2] = l.directPath;
            t[3] = l.encFilehash;
            t[4] = l.filehash;
            t[5] = l.height;
            t[6] = l.mediaKey;
            t[7] = l.mediaKeyTimestamp;
            t[8] = l.mimetype;
            t[9] = l.width;
            t[10] = u;
        } else {
            u = t[10];
        }
        const sticker = u;
        let d;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "xamitd3 x2b8uid"
            };
            t[11] = d;
        } else {
            d = t[11];
        }
        let m;
        if (t[12] !== sticker) {
            m = <div {...babelHelpers.extends({}, d, {
                children: s.jsx(r("WAWebStickerPanelContentStickerItem.react"), {
                    sticker
                })
            })}/>;
            t[12] = sticker;
            t[13] = m;
        } else {
            m = t[13];
        }
        return m;
    }
    l.default = u;
}, 98);