__d("WAWebMessageCropping", [
    "WAWebDisplayType",
    "WAWebMessageListAlbums",
    "WAWebMsgType",
    "WAWebTypesMedia"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 330;
    const u = 246;
    const c = 330;
    const d = 240;
    const m = 463;
    const p = 463;
    const bubbleWidth = 336;
    const g = {
        bubbleWidth,
        bubbleHeight: 146
    };
    function h(e, t, n, r = false) {
        let a = n / 2;
        let i = n / 2;
        switch(t){
            case 1:
                a = n - o("WAWebMessageListAlbums").ALBUM_PADDING;
                i = n + o("WAWebMessageListAlbums").ALBUM_PADDING;
                break;
            case 2:
                if (r) {
                    if (e === 0) {
                        a -= o("WAWebMessageListAlbums").ALBUM_PADDING;
                    }
                    i = n + o("WAWebMessageListAlbums").ALBUM_PADDING;
                } else {
                    if (e === 0) {
                        i -= o("WAWebMessageListAlbums").ALBUM_PADDING;
                    } else {
                        i += o("WAWebMessageListAlbums").ALBUM_PADDING;
                    }
                    a = n - o("WAWebMessageListAlbums").ALBUM_PADDING;
                }
                break;
            case 3:
                if (e === 0) {
                    a = n - o("WAWebMessageListAlbums").ALBUM_PADDING;
                }
                if (e === 1) {
                    a -= o("WAWebMessageListAlbums").ALBUM_PADDING;
                }
                break;
            default:
                if (e === 0 || e === 2) {
                    a -= o("WAWebMessageListAlbums").ALBUM_PADDING;
                }
                break;
        }
        return {
            width: a - o("WAWebMessageListAlbums").ALBUM_PADDING,
            height: i
        };
    }
    const y = {
        width: s,
        portraitWidth: s,
        minAspectRatio: 1,
        maxAspectRatio: 2.4
    };
    const C = {
        width: m,
        portraitWidth: m,
        minAspectRatio: 1,
        maxAspectRatio: 2.4
    };
    const b = babelHelpers.extends({}, y, {
        portraitWidth: 240,
        minAspectRatio: 0.71,
        maxAspectRatio: 4
    });
    const v = babelHelpers.extends({}, b, {
        width: 480,
        portraitWidth: 480
    });
    const S = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.VIDEO
    ]);
    const R = new Set([
        (e = o("WAWebDisplayType")).DISPLAY_TYPE.CONVERSATION,
        e.DISPLAY_TYPE.MSG_INFO,
        e.DISPLAY_TYPE.STARRED_MSGS,
        e.DISPLAY_TYPE.ANNOUNCEMENT,
        e.DISPLAY_TYPE.NEWSLETTER,
        e.DISPLAY_TYPE.CHANNEL_ALERTS_MSGS
    ]);
    function L(msgType, isFromTemplate, n, r, a, i, l, s, u, c, d) {
        if (n) {
            return g;
        }
        const p = r < 1;
        const aspectRatio = u && p ? 1 : r;
        const croppingSettings = E(msgType, l, s, c);
        let bubbleWidth_1;
        let bubbleHeight;
        if (s === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER_PREVIEW) {
            return {
                bubbleWidth: c ?? 56,
                bubbleHeight: c ?? 56
            };
        }
        if (l === o("WAWebTypesMedia").DisplayTheme.Album || l === o("WAWebTypesMedia").DisplayTheme.AlbumV2) {
            const b = s === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || s === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ? o("WAWebMessageListAlbums").ALBUM_ANNOUNCEMENT_MAX_HEIGHT : o("WAWebMessageListAlbums").ALBUM_MAX_HEIGHT;
            const v = h(a, i, b * 2, d ?? false);
            const { height, width } = v;
            bubbleWidth_1 = width;
            bubbleHeight = height;
        } else {
            const L = aspectRatio < 1 ? croppingSettings.portraitWidth : croppingSettings.width;
            bubbleWidth_1 = l === o("WAWebTypesMedia").DisplayTheme.PhotoPoll ? m : L;
            bubbleHeight = k({
                aspectRatio,
                croppingSettings,
                isFromTemplate,
                msgType,
                theme: l
            });
        }
        return {
            bubbleWidth: bubbleWidth_1,
            bubbleHeight
        };
    }
    function E(msgType, t, displayType, r) {
        let a;
        if (D({
            displayType,
            msgType,
            theme: t
        })) {
            if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER || displayType === o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS) {
                a = v;
            } else {
                a = b;
            }
        } else if (t === o("WAWebTypesMedia").DisplayTheme.PhotoPoll) {
            a = C;
        } else {
            a = y;
        }
        return babelHelpers.extends({}, a, {
            width: r != null && r <= a.width ? r : a.width
        });
    }
    function k({ aspectRatio, croppingSettings, isFromTemplate, msgType, theme }) {
        const i = 1.91;
        let l;
        if (isFromTemplate && aspectRatio <= i) {
            l = I(i, croppingSettings, msgType);
        }
        l = I(aspectRatio, croppingSettings, msgType, theme);
        return l;
    }
    function I(e, croppingSettings, msgType, r) {
        if (e == null) {
            if (r === o("WAWebTypesMedia").DisplayTheme.PhotoPoll) {
                return p;
            }
            if (msgType === o("WAWebMsgType").MSG_TYPE.VIDEO) {
                return d;
            }
            return c;
        }
        let a;
        if (e < croppingSettings.minAspectRatio) {
            a = croppingSettings.portraitWidth / croppingSettings.minAspectRatio;
        } else if (e < 1) {
            a = croppingSettings.portraitWidth / e;
        } else if (e <= croppingSettings.maxAspectRatio) {
            a = croppingSettings.width / e;
        } else {
            a = croppingSettings.width / croppingSettings.maxAspectRatio;
        }
        return a;
    }
    function T(e, t, n, r) {
        if (e == null || e === 0 || t == null || t === 0 || n == null || n === 0 || r == null || r === 0) {
            return {
                width: "100%",
                height: "100%"
            };
        }
        if (e / t > n / r) {
            return {
                height: "100%"
            };
        }
        return {
            width: "100%"
        };
    }
    function D({ displayType, msgType, theme }) {
        return S.has(msgType) && R.has(displayType) && theme !== o("WAWebTypesMedia").DisplayTheme.Album && theme !== o("WAWebTypesMedia").DisplayTheme.AlbumV2 || msgType === o("WAWebMsgType").MSG_TYPE.PRODUCT && displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT;
    }
    l.DEFAULT_WIDTH = s;
    l.IMAGINE_UR_WIDTH = u;
    l.DEFAULT_HEIGHT_PICTURE = c;
    l.DEFAULT_HEIGHT_VIDEO = d;
    l.CAROUSEL_MEDIA_DIMS = g;
    l.getBubbleDimension = L;
    l.getImgStyle = T;
    l.canUseCustomCropping = D;
}, 98);