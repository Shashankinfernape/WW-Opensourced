__d("WAWebChatLastMsgMediaThumb.react", [
    "WAWebABProps",
    "WAWebMediaDataGetters",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMsgType",
    "WDSIconIcPlayArrowFilled.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 20;
    const d = 18;
    const m = {
        thumb: {
            alignItems: "x6s0dn4",
            backgroundPosition: "x1xsqp64",
            backgroundRepeat: "xiy17q3",
            borderStartStartRadius: "xbrszos",
            borderStartEndRadius: "xea3l6g",
            borderEndEndRadius: "x18isctg",
            borderEndStartRadius: "x2q3nzr",
            display: "x3nfvp2",
            flexBasis: "xdl72j9",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            height: "x1qx5ct2",
            justifyContent: "xl56j7k",
            marginInlineEnd: "x1p8j9ns",
            verticalAlign: "x16dsc37",
            width: "xw4jnvo",
            $$css: true
        },
        cover: {
            backgroundSize: "x18d0r48",
            $$css: true
        },
        contain: {
            backgroundSize: "x1tbiz1a",
            $$css: true
        },
        circle: {
            backgroundSize: "x18d0r48",
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        playOverlay: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(17);
        const { fallback, hasPaymentQr, isChatListRow, mediaData, mediaPngThumbnail, type } = t;
        const f = isChatListRow && mediaData != null && C(type) ? mediaData : null;
        let h;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let y;
            h = [
                (y = o("WAWebMediaDataGetters")).getIsGif,
                y.getIsViewOnce,
                y.getMediaStage,
                y.getPreview
            ];
            n[0] = h;
        } else {
            h = n[0];
        }
        const b = o("useWAWebMediaDataValues").useOptionalMediaDataValues(f, h);
        const isGif = b?.[0] === true;
        let R;
        if (n[1] !== hasPaymentQr || n[2] !== b || n[3] !== mediaPngThumbnail || n[4] !== type) {
            R = b == null ? null : g({
                hasPaymentQr,
                isGif: b[0],
                isViewOnce: b[1],
                mediaPngThumbnail,
                mediaStage: b[2],
                preview: b[3],
                type
            });
            n[1] = hasPaymentQr;
            n[2] = b;
            n[3] = mediaPngThumbnail;
            n[4] = type;
            n[5] = R;
        } else {
            R = n[5];
        }
        const L = R;
        if (L == null) {
            return fallback;
        }
        let E;
        if (n[6] !== type) {
            E = (e || (e = r("stylex")))(m.thumb, v(type));
            n[6] = type;
            n[7] = E;
        } else {
            E = n[7];
        }
        const backgroundImage = `url(${L})`;
        let style;
        if (n[8] !== backgroundImage) {
            style = {
                backgroundImage
            };
            n[8] = backgroundImage;
            n[9] = style;
        } else {
            style = n[9];
        }
        let T;
        if (n[10] !== isGif || n[11] !== type) {
            T = _({
                isGif,
                type
            }) ? u.jsx(r("WDSIconIcPlayArrowFilled.react"), {
                "aria-hidden": true,
                height: d,
                iconXstyle: m.playOverlay,
                testid: "media-play",
                width: d
            }) : null;
            n[10] = isGif;
            n[11] = type;
            n[12] = T;
        } else {
            T = n[12];
        }
        let D;
        if (n[13] !== E || n[14] !== style || n[15] !== T) {
            D = <div className={E} style={style} data-testid="chat_list_last_msg_media_thumb">{T}</div>;
            n[13] = E;
            n[14] = style;
            n[15] = T;
            n[16] = D;
        } else {
            D = n[16];
        }
        return D;
    }
    function _({ isGif, type }) {
        if (type === o("WAWebMsgType").MSG_TYPE.PTV) {
            return true;
        }
        return type === o("WAWebMsgType").MSG_TYPE.VIDEO && !isGif;
    }
    const f = [
        o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE,
        o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN,
        o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING,
        o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE,
        o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED
    ];
    function g({ hasPaymentQr, isGif, isViewOnce, mediaPngThumbnail, mediaStage, preview, type }) {
        if (isViewOnce || f.includes(mediaStage) || hasPaymentQr) {
            return null;
        }
        const u = type === o("WAWebMsgType").MSG_TYPE.STICKER ? h(mediaPngThumbnail) : y(preview);
        if (u == null) {
            return null;
        }
        if (b({
            isGif,
            type
        })) {
            return u;
        }
        return null;
    }
    function h(mediaPngThumbnail) {
        if (mediaPngThumbnail != null && mediaPngThumbnail !== "") {
            return `data:image/png;base64,${mediaPngThumbnail}`;
        }
        return null;
    }
    function y(preview) {
        if (preview instanceof r("WAWebMediaOpaqueData")) {
            return preview.url();
        }
        return null;
    }
    function C(type) {
        return type === o("WAWebMsgType").MSG_TYPE.IMAGE || type === o("WAWebMsgType").MSG_TYPE.PTV || type === o("WAWebMsgType").MSG_TYPE.STICKER || type === o("WAWebMsgType").MSG_TYPE.VIDEO;
    }
    function b({ isGif, type }) {
        if (type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            return o("WAWebABProps").getABPropConfigValue("enable_photo_thumbnails_in_chat_list");
        }
        if (type === o("WAWebMsgType").MSG_TYPE.PTV) {
            return o("WAWebABProps").getABPropConfigValue("enable_video_thumbnails_in_chat_list");
        }
        if (type === o("WAWebMsgType").MSG_TYPE.STICKER) {
            return o("WAWebABProps").getABPropConfigValue("enable_sticker_thumbnails_in_chat_list");
        }
        if (type !== o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return false;
        }
        if (isGif) {
            return o("WAWebABProps").getABPropConfigValue("enable_photo_thumbnails_in_chat_list");
        }
        return o("WAWebABProps").getABPropConfigValue("enable_video_thumbnails_in_chat_list");
    }
    function v(type) {
        if (type === o("WAWebMsgType").MSG_TYPE.STICKER) {
            return m.contain;
        }
        if (type === o("WAWebMsgType").MSG_TYPE.PTV) {
            return m.circle;
        }
        return m.cover;
    }
    l.default = p;
}, 98);