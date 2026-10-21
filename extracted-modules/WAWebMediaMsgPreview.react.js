__d("WAWebMediaMsgPreview.react", [
    "WAWebMediaDataGetters",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebMsgType",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = new Set([
        o("WAWebMsgType").MSG_TYPE.IMAGE,
        o("WAWebMsgType").MSG_TYPE.PRODUCT
    ]);
    function c(e) {
        return u.has(e);
    }
    function D4Component(e) {
        const t = o("react-compiler-runtime").c(7);
        const { type, url } = e;
        let a;
        if (t[0] !== type) {
            a = ({
                0: "x10l6tqk xh8yej3 x5yr21d x1xsqp64 x18d0r48",
                1: "x10l6tqk xh8yej3 x5yr21d x1xsqp64 x18d0r48 xvs2etk xg3wpu6 x1jwbhkm xgg4q86"
            })[(type === o("WAWebMediaTypes").OUTWARD_TYPES.PTV) << 0];
            t[0] = type;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = `url(${url})`;
        let l;
        if (t[2] !== i) {
            l = {
                backgroundImage: i
            };
            t[2] = i;
            t[3] = l;
        } else {
            l = t[3];
        }
        let u;
        if (t[4] !== a || t[5] !== l) {
            u = <div className={a} style={l}/>;
            t[4] = a;
            t[5] = l;
            t[6] = u;
        } else {
            u = t[6];
        }
        return u;
    }
    function M5(e) {
        const t = o("react-compiler-runtime").c(6);
        const { fallbackPreview, fullPreviewData, preview, type } = e;
        let u;
        if (t[0] !== fullPreviewData || t[1] !== preview || t[2] !== type) {
            let c;
            if (t[4] !== type) {
                c = function([e, n]) {
                    if (e != null) {
                        return <D4Component key={n} url={e} type={type}/>;
                    }
                    return null;
                };
                t[4] = type;
                t[5] = c;
            } else {
                c = t[5];
            }
            u = r("compactMap")([
                [
                    preview instanceof r("WAWebMediaOpaqueData") ? preview.url() : null,
                    "preview"
                ],
                [
                    fullPreviewData?.url(),
                    "fullPreview"
                ]
            ], c);
            t[0] = fullPreviewData;
            t[1] = preview;
            t[2] = type;
            t[3] = u;
        } else {
            u = t[3];
        }
        const m = u;
        if (m.length > 0) {
            return m;
        }
        if (fallbackPreview != null) {
            return fallbackPreview;
        }
    }
    function p(e) {
        const t = o("react-compiler-runtime").c(17);
        const { fallbackPreview, mediaData } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMediaDataGetters")).getFilehash,
                l.getFullPreviewData,
                l.getMediaStage,
                l.getPreview,
                l.getType
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const u = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, i);
        const p = u[0];
        const fullPreviewData = u[1];
        const f = u[3];
        const g = u[4];
        if (!c(g)) {
            let h;
            if (t[1] !== fullPreviewData || t[2] !== f || t[3] !== g) {
                h = <M5 fullPreviewData={fullPreviewData} preview={f} type={g}/>;
                t[1] = fullPreviewData;
                t[2] = f;
                t[3] = g;
                t[4] = h;
            } else {
                h = t[4];
            }
            return h;
        }
        let y;
        if (t[5] !== fallbackPreview || t[6] !== fullPreviewData || t[7] !== f || t[8] !== g) {
            y = function() {
                return <M5 fallbackPreview={fallbackPreview} fullPreviewData={fullPreviewData} preview={f} type={g}/>;
            };
            t[5] = fallbackPreview;
            t[6] = fullPreviewData;
            t[7] = f;
            t[8] = g;
            t[9] = y;
        } else {
            y = t[9];
        }
        let C;
        if (t[10] !== g) {
            C = function(t) {
                return <D4Component url={t} type={g}/>;
            };
            t[10] = g;
            t[11] = C;
        } else {
            C = t[11];
        }
        let b;
        if (t[12] !== p || t[13] !== mediaData || t[14] !== y || t[15] !== C) {
            const Component = r("WAWebMediaUrlProvider");
            b = <Component key={p} mediaData={mediaData} placeholderRenderer={y} renderProgressively>{C}</Component>;
            t[12] = p;
            t[13] = mediaData;
            t[14] = y;
            t[15] = C;
            t[16] = b;
        } else {
            b = t[16];
        }
        return b;
    }
    l.isMediaTypeWithImage = c;
    l.MediaMsgPreview = p;
}, 98);