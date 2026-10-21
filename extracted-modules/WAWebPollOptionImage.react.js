__d("WAWebPollOptionImage.react", [
    "Promise",
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebImg.react",
    "WAWebMediaDataUtils",
    "WAWebMediaUrlProvider",
    "WAWebMsgCollection",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        thumbContainer: {
            borderStartStartRadius: "xr9w4p7",
            borderStartEndRadius: "x7f0h72",
            borderEndEndRadius: "x1nug9m2",
            borderEndStartRadius: "x18qtlnh",
            $$css: true
        },
        small: {
            width: "x100vrsf",
            height: "x1vqgdyp",
            $$css: true
        },
        large: {
            width: "x15yg21f",
            height: "xnnlda6",
            $$css: true
        },
        thumb: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            backgroundRepeat: "xiy17q3",
            backgroundPosition: "x1xsqp64",
            backgroundSize: "x18d0r48",
            objectFit: "xl1xv1r",
            $$css: true
        },
        placeholderIcon: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        }
    };
    function P3Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { src, xstyle } = e;
        let i;
        if (t[0] !== xstyle) {
            i = (u || (u = r("stylex")))(xstyle);
            t[0] = xstyle;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== src || t[3] !== i) {
            const Component = r("WAWebImg.react");
            l = <Component className={i} src={src} disableContextMenu/>;
            t[2] = src;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(7);
        const { mediaData, xstyle } = e;
        let i;
        if (t[0] !== xstyle) {
            i = (u || (u = r("stylex")))(xstyle);
            t[0] = xstyle;
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== mediaData) {
            l = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(mediaData) ?? "";
            t[2] = mediaData;
            t[3] = l;
        } else {
            l = t[3];
        }
        let c;
        if (t[4] !== i || t[5] !== l) {
            const Component = r("WAWebImg.react");
            c = <Component className={i} src={l}/>;
            t[4] = i;
            t[5] = l;
            t[6] = c;
        } else {
            c = t[6];
        }
        return c;
    }
    function f(t) {
        const a = o("react-compiler-runtime").c(17);
        const { msgKey, onClick, size } = t;
        let c;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = [
                o("WAWebFrontendMsgGetters").getMediaData
            ];
            a[0] = c;
        } else {
            c = a[0];
        }
        const f = o("useWAWebMsgValues").useMsgValues(msgKey, c);
        const g = f[0];
        const h = size === "small" ? m.small : m.large;
        let y;
        if (a[1] !== msgKey) {
            y = function() {
                const t = o("WAWebMsgCollection").MsgCollection.get(msgKey);
                if (t == null) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[polls] option image download skipped, message left the collection"
                    ])));
                    return (s || (s = n("Promise"))).resolve();
                }
                return t.downloadMedia({
                    downloadEvenIfExpensive: true,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                    isUserInitiated: true
                });
            };
            a[1] = msgKey;
            a[2] = y;
        } else {
            y = a[2];
        }
        const C = y;
        let placeholderRenderer;
        if (a[3] !== g || a[4] !== h) {
            placeholderRenderer = function() {
                return <_ xstyle={[
                    m.thumbContainer,
                    h,
                    m.thumb,
                    m.placeholderIcon
                ]} mediaData={g}/>;
            };
            a[3] = g;
            a[4] = h;
            a[5] = placeholderRenderer;
        } else {
            placeholderRenderer = a[5];
        }
        let v;
        if (a[6] !== h) {
            v = function(t) {
                return <P3Component xstyle={[
                    m.thumbContainer,
                    h,
                    m.thumb
                ]} src={t}/>;
            };
            a[6] = h;
            a[7] = v;
        } else {
            v = a[7];
        }
        let S;
        if (a[8] !== C || a[9] !== g || a[10] !== placeholderRenderer || a[11] !== v) {
            const Component = r("WAWebMediaUrlProvider");
            S = <Component mediaData={g} placeholderRenderer={placeholderRenderer} downloadMedia={C} renderProgressively>{v}</Component>;
            a[8] = C;
            a[9] = g;
            a[10] = placeholderRenderer;
            a[11] = v;
            a[12] = S;
        } else {
            S = a[12];
        }
        let R;
        if (a[13] !== onClick || a[14] !== h || a[15] !== S) {
            const Component = r("WAWebUnstyledButton.react");
            R = <Component xstyle={h} onClick={onClick}>{S}</Component>;
            a[13] = onClick;
            a[14] = h;
            a[15] = S;
            a[16] = R;
        } else {
            R = a[16];
        }
        return R;
    }
    l.default = f;
}, 98);