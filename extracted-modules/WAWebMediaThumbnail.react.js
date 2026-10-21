__d("WAWebMediaThumbnail.react", [
    "WAWebClassnames",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDataGetters",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "msgKey",
        "thumbnailPlaceholder",
        "thumbnailRef"
    ];
    let s;
    const u = s || (s = o("react"));
    const s_useEffect = s.useEffect;
    function d(t) {
        const n = o("react-compiler-runtime").c(7);
        const { msgKey, thumbnailPlaceholder, thumbnailRef } = t;
        const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
        let s;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = [
                o("WAWebFrontendMsgGetters").getMediaData,
                o("WAWebMsgGetters").getType
            ];
            n[0] = s;
        } else {
            s = n[0];
        }
        const c = o("useWAWebMsgValues").useMsgValues(msgKey, s);
        const mediaData = c[0];
        const _ = c[1];
        if (mediaData == null) {
            const f = thumbnailPlaceholder != null ? <P10 className={l.containerClassName}><div className={o("WAWebClassnames").classnamesConvertMeToStylexPlease("x10l6tqk", l.childClassName)}>{thumbnailPlaceholder}</div></P10> : null;
            return f;
        }
        let g;
        if (n[1] !== mediaData || n[2] !== l || n[3] !== thumbnailPlaceholder || n[4] !== thumbnailRef || n[5] !== _) {
            g = <M23 {...babelHelpers.extends({
                mediaData,
                thumbnailPlaceholder,
                type: _,
                thumbnailRef
            }, l)}/>;
            n[1] = mediaData;
            n[2] = l;
            n[3] = thumbnailPlaceholder;
            n[4] = thumbnailRef;
            n[5] = _;
            n[6] = g;
        } else {
            g = n[6];
        }
        return g;
    }
    function M23(e) {
        const t = o("react-compiler-runtime").c(25);
        const { childClassName, containerClassName, mediaData, thumbnailPlaceholder, thumbnailRef, type } = e;
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebMediaDataGetters").getPreview,
                o("WAWebMediaDataGetters").getFullPreviewData
            ];
            t[0] = d;
        } else {
            d = t[0];
        }
        const m = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, d);
        const f = m[0];
        const g = m[1];
        let h;
        let y;
        let C;
        let b;
        if (t[1] !== childClassName || t[2] !== containerClassName || t[3] !== g || t[4] !== f || t[5] !== thumbnailPlaceholder || t[6] !== thumbnailRef || t[7] !== type) {
            b = Symbol.for("react.early_return_sentinel");
            e: {
                const v = [];
                if (f != null) {
                    v.push({
                        opaque: f,
                        key: "preview"
                    });
                }
                if (g != null) {
                    v.push({
                        opaque: g,
                        key: "fullPreviewData"
                    });
                }
                if (v.length === 0) {
                    let S;
                    if (t[12] !== childClassName || t[13] !== containerClassName || t[14] !== thumbnailPlaceholder || t[15] !== type) {
                        S = thumbnailPlaceholder != null ? <P10 className={containerClassName} type={type}><div className={o("WAWebClassnames").classnamesConvertMeToStylexPlease("x10l6tqk", childClassName)}>{thumbnailPlaceholder}</div></P10> : null;
                        t[12] = childClassName;
                        t[13] = containerClassName;
                        t[14] = thumbnailPlaceholder;
                        t[15] = type;
                        t[16] = S;
                    } else {
                        S = t[16];
                    }
                    b = S;
                    break e;
                }
                h = P10;
                y = containerClassName;
                let L;
                if (t[17] !== childClassName || t[18] !== thumbnailRef || t[19] !== type) {
                    L = function({ key, opaque }, o) {
                        if (opaque instanceof r("WAWebMediaOpaqueData")) {
                            return <_ key={key} className={childClassName} opaque={opaque} type={type} ref={o === 0 ? thumbnailRef : undefined}/>;
                        }
                        return null;
                    };
                    t[17] = childClassName;
                    t[18] = thumbnailRef;
                    t[19] = type;
                    t[20] = L;
                } else {
                    L = t[20];
                }
                C = r("compactMap")(v, L);
            }
            t[1] = childClassName;
            t[2] = containerClassName;
            t[3] = g;
            t[4] = f;
            t[5] = thumbnailPlaceholder;
            t[6] = thumbnailRef;
            t[7] = type;
            t[8] = h;
            t[9] = y;
            t[10] = C;
            t[11] = b;
        } else {
            h = t[8];
            y = t[9];
            C = t[10];
            b = t[11];
        }
        if (b !== Symbol.for("react.early_return_sentinel")) {
            return b;
        }
        let E;
        if (t[21] !== h || t[22] !== y || t[23] !== C) {
            E = u.jsx(h, {
                className: y,
                children: C
            });
            t[21] = h;
            t[22] = y;
            t[23] = C;
            t[24] = E;
        } else {
            E = t[24];
        }
        return E;
    }
    function P10(e) {
        const t = o("react-compiler-runtime").c(6);
        const { children, className, type } = e;
        let i;
        if (t[0] !== className || t[1] !== type) {
            i = o("WAWebClassnames").classnamesConvertMeToStylexPlease(type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? "x1n2onr6 x78zum5 xl56j7k x6s0dn4" : "x1n2onr6", className);
            t[0] = className;
            t[1] = type;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== children || t[4] !== i) {
            l = <div className={i}>{children}</div>;
            t[3] = children;
            t[4] = i;
            t[5] = l;
        } else {
            l = t[5];
        }
        return l;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(12);
        const { className, opaque, ref, type } = e;
        let l;
        let s;
        if (t[0] !== opaque) {
            l = function() {
                if (opaque != null) {
                    opaque.retain();
                    return function() {
                        opaque.autorelease();
                    };
                }
            };
            s = [
                opaque
            ];
            t[0] = opaque;
            t[1] = l;
            t[2] = s;
        } else {
            l = t[1];
            s = t[2];
        }
        s_useEffect(l, s);
        let d;
        if (t[3] !== className || t[4] !== type) {
            d = o("WAWebClassnames").classnamesConvertMeToStylexPlease("x10l6tqk", className, type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? "x5yr21d xh8yej3 x18d0r48" : null);
            t[3] = className;
            t[4] = type;
            t[5] = d;
        } else {
            d = t[5];
        }
        let m;
        if (t[6] !== opaque) {
            m = opaque ? {
                backgroundImage: `url("${opaque.url()}")`
            } : null;
            t[6] = opaque;
            t[7] = m;
        } else {
            m = t[7];
        }
        let p;
        if (t[8] !== ref || t[9] !== d || t[10] !== m) {
            p = <div ref={ref} className={d} style={m}/>;
            t[8] = ref;
            t[9] = d;
            t[10] = m;
            t[11] = p;
        } else {
            p = t[11];
        }
        return p;
    }
    l.default = d;
}, 98);