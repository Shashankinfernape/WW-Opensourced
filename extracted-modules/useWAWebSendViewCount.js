__d("useWAWebSendViewCount", [
    "WAWebABProps",
    "WAWebDisplayType",
    "WAWebMediaDataGetters",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebNewsletterSendViewReceiptAction",
    "react",
    "react-compiler-runtime",
    "useWAWebIntersection",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues",
    "useWAWebTimeout",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useEffect } = s;
    function d() {}
    function m({ caption, isGif, isIntersecting, mediaStage, mediaType, viewed }) {
        if (!isIntersecting || viewed) {
            return false;
        }
        if (mediaType == null || caption != null) {
            return true;
        }
        if (mediaType === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE || mediaType === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER || isGif === true || mediaType === o("WAWebMediaTypes").OUTWARD_TYPES.PTV) {
            return mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED;
        }
        return false;
    }
    function useP(e, t) {
        const a = o("react-compiler-runtime").c(22);
        const t_displayType = t.displayType;
        let l;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getViewed,
                o("WAWebMsgGetters").getIsNewsletterMsg,
                o("WAWebMsgGetters").getCaption
            ];
            a[0] = l;
        } else {
            l = a[0];
        }
        const s = o("useWAWebMsgValues").useMsgValues(e, l);
        const viewed = s[0];
        const d = s[1];
        const caption = s[2];
        const _ = o("useWAWebMediaDataValues").useOptionalMediaDataValues(t?.mediaData, [
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getType,
            o("WAWebMediaDataGetters").getIsGif
        ]) ?? [
            undefined,
            undefined,
            undefined
        ];
        const f = _[0];
        const g = _[1];
        const isGif = _[2];
        const y = !!(t != null && t.isIntersecting);
        let C;
        if (a[1] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                root: null,
                threshold: 0.99
            };
            a[1] = C;
        } else {
            C = a[1];
        }
        const b = r("useWAWebIntersection")(C);
        const v = b[0];
        const S = b[1];
        const S_isIntersecting = S.isIntersecting;
        const L = r("useWAWebUnmountSignal")();
        let E;
        if (a[2] !== e) {
            E = function() {
                o("WAWebNewsletterSendViewReceiptAction").sendViewReceipt({
                    id: e,
                    signal: new AbortController().signal
                });
            };
            a[2] = e;
            a[3] = E;
        } else {
            E = a[3];
        }
        let k;
        if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
            k = o("WAWebABProps").getABPropConfigValue("channel_views_duration_milliseconds");
            a[4] = k;
        } else {
            k = a[4];
        }
        const I = o("useWAWebTimeout").useTimeout(E, k);
        const T = I[0];
        const D = I[1];
        let x;
        let $;
        if (a[5] !== D || a[6] !== caption || a[7] !== t_displayType || a[8] !== isGif || a[9] !== S_isIntersecting || a[10] !== y || a[11] !== d || a[12] !== f || a[13] !== g || a[14] !== T || a[15] !== viewed) {
            x = function() {
                if (!(!d || t_displayType !== o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER)) {
                    if (m({
                        isIntersecting: S_isIntersecting || y,
                        viewed,
                        caption,
                        mediaStage: f,
                        mediaType: g,
                        isGif
                    })) {
                        T();
                    } else {
                        D();
                    }
                }
            };
            $ = [
                S_isIntersecting,
                y,
                T,
                D,
                viewed,
                caption,
                f,
                isGif,
                g,
                d,
                t_displayType
            ];
            a[5] = D;
            a[6] = caption;
            a[7] = t_displayType;
            a[8] = isGif;
            a[9] = S_isIntersecting;
            a[10] = y;
            a[11] = d;
            a[12] = f;
            a[13] = g;
            a[14] = T;
            a[15] = viewed;
            a[16] = x;
            a[17] = $;
        } else {
            x = a[16];
            $ = a[17];
        }
        useEffect(x, $);
        let P;
        let N;
        if (a[18] !== D || a[19] !== L.aborted) {
            P = function() {
                if (L.aborted) {
                    D();
                }
            };
            N = [
                L.aborted,
                D
            ];
            a[18] = D;
            a[19] = L.aborted;
            a[20] = P;
            a[21] = N;
        } else {
            P = a[20];
            N = a[21];
        }
        useEffect(P, N);
        if (d && t?.isIntersecting == null && t_displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) {
            return v;
        }
        return null;
    }
    function _(e, t) {
        const n = o("react-compiler-runtime").c(8);
        const a = r("useWAWebUnmountSignal")();
        let i;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMsgGetters").getViewed,
                o("WAWebMsgGetters").getIsNewsletterMsg
            ];
            n[0] = i;
        } else {
            i = n[0];
        }
        const l = o("useWAWebMsgValues").useMsgValues(e, i);
        const s = l[0];
        const u = l[1];
        let c;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebMediaDataGetters").getDuration
            ];
            n[1] = c;
        } else {
            c = n[1];
        }
        const m = o("useWAWebMediaDataValues").useMediaDataValues(t.mediaData, c);
        const p = m[0];
        let _;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = o("WAWebABProps").getABPropConfigValue("channel_playable_message_views_duration_milliseconds");
            n[2] = _;
        } else {
            _ = n[2];
        }
        const f = Math.min(_, parseInt(p, 10) * 1000);
        let g;
        if (n[3] !== e || n[4] !== f || n[5] !== a || n[6] !== s) {
            g = function(n) {
                if (!s && n * 1000 >= f) {
                    o("WAWebNewsletterSendViewReceiptAction").sendViewReceipt({
                        id: e,
                        signal: a
                    });
                }
            };
            n[3] = e;
            n[4] = f;
            n[5] = a;
            n[6] = s;
            n[7] = g;
        } else {
            g = n[7];
        }
        if (u) {
            return g;
        }
        return d;
    }
    l.useSendViewCount = useP;
    l.usePlaybackSendViewCount = _;
}, 98);