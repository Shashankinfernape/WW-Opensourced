__d("WAWebMap.react", [
    "fbt",
    "WAWebBaseShimmerComponents.react",
    "WAWebExternalLink.react",
    "WAWebImageUtils",
    "WAWebImg.react",
    "WAWebMapPlaceholderIcon.react",
    "WAWebMapUtils",
    "WAWebThemeContext",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebDevicePixelRatio",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useContext, useEffect, useRef, useState } = d;
    const h = {
        container: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            height: "x5yr21d",
            justifyContent: "xl56j7k",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            boxSizing: "x9f619",
            ":focus-visible_borderStartStartRadius": "xtu1v1",
            ":focus-visible_borderStartEndRadius": "x1h22o6k",
            ":focus-visible_borderEndEndRadius": "x1ue6dqu",
            ":focus-visible_borderEndStartRadius": "xhq422q",
            ":focus-visible_borderTopWidth": "xbq6axl",
            ":focus-visible_borderInlineEndWidth": "xjajieo",
            ":focus-visible_borderBottomWidth": "xtnmogg",
            ":focus-visible_borderInlineStartWidth": "x1av0zpm",
            ":focus-visible_borderTopStyle": "xkosrqj",
            ":focus-visible_borderInlineEndStyle": "x17j0exz",
            ":focus-visible_borderBottomStyle": "xwr2l8c",
            ":focus-visible_borderInlineStartStyle": "xgn0dxz",
            ":focus-visible_borderTopColor": "x1878o1q",
            ":focus-visible_borderInlineEndColor": "xf2y0h5",
            ":focus-visible_borderBottomColor": "xnv9r3m",
            ":focus-visible_borderInlineStartColor": "xo81p9n",
            $$css: true
        },
        svg: {
            width: "xh8yej3",
            $$css: true
        },
        hidden: {
            display: "x1s85apg",
            $$css: true
        }
    };
    function YComponent(t) {
        const n = o("react-compiler-runtime").c(41);
        const { height, lat, linkify, lng, loadingVariant, name, onClick, onLoad, radiusMeters, showMarker, testid, width, xstyle, zoom } = t;
        const k = linkify === undefined ? true : linkify;
        const I = loadingVariant === undefined ? "placeholder" : loadingVariant;
        const showMarker_1 = showMarker === undefined ? true : showMarker;
        const D = r("useWAWebDevicePixelRatio")();
        const x = useState(null);
        const $ = x[0];
        const P = x[1];
        const N = useState(false);
        const M = N[0];
        const w = N[1];
        const A = useContext(o("WAWebThemeContext").ThemeContext);
        const A_theme = A.theme;
        const O = r("useWAWebUnmountSignal")();
        const BRef = useRef(null);
        let W;
        if (n[0] !== height || n[1] !== lat || n[2] !== lng || n[3] !== radiusMeters || n[4] !== showMarker_1 || n[5] !== A_theme || n[6] !== O || n[7] !== width || n[8] !== zoom) {
            W = function() {
                if (!(width <= 0 || height <= 0)) {
                    const e = o("WAWebMapUtils").getMapImgSrcUrl({
                        height,
                        lat,
                        lng,
                        isDarkTheme: A_theme === "dark",
                        radiusMeters,
                        showMarker: showMarker_1,
                        width,
                        zoom
                    });
                    if (BRef.current !== e) {
                        BRef.current = e;
                        const t = r("WAWebURLUtils").GSM_API_KEY_SECRET;
                        r("WAWebURLUtils").gsmURL(e, t).then((e)=>{
                            if (!O.aborted) {
                                P(e);
                                w(o("WAWebImageUtils").isCached(e));
                            }
                        });
                    }
                }
            };
            n[0] = height;
            n[1] = lat;
            n[2] = lng;
            n[3] = radiusMeters;
            n[4] = showMarker_1;
            n[5] = A_theme;
            n[6] = O;
            n[7] = width;
            n[8] = zoom;
            n[9] = W;
        } else {
            W = n[9];
        }
        const q = W;
        let U;
        if (n[10] !== q) {
            U = function() {
                q();
            };
            n[10] = q;
            n[11] = U;
        } else {
            U = n[11];
        }
        let V;
        if (n[12] !== D || n[13] !== q) {
            V = [
                D,
                q
            ];
            n[12] = D;
            n[13] = q;
            n[14] = V;
        } else {
            V = n[14];
        }
        useEffect(U, V);
        const H = M ? undefined : height;
        let G;
        if (n[15] !== H || n[16] !== width) {
            G = {
                pointerEvents: "none",
                width,
                height: H
            };
            n[15] = H;
            n[16] = width;
            n[17] = G;
        } else {
            G = n[17];
        }
        const z = G;
        let j;
        if (n[18] !== onLoad) {
            j = function(t) {
                w(true);
                onLoad?.();
            };
            n[18] = onLoad;
            n[19] = j;
        } else {
            j = n[19];
        }
        const K = j;
        let Q;
        if (n[20] !== height || n[21] !== I || n[22] !== width) {
            Q = I === "shimmer" ? c.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height,
                width
            }) : I === "placeholder" ? c.jsx(o("WAWebMapPlaceholderIcon.react").MapPlaceholderIcon, {
                displayInline: true,
                iconXstyle: h.svg
            }) : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${I}`);
            })();
            n[20] = height;
            n[21] = I;
            n[22] = width;
            n[23] = Q;
        } else {
            Q = n[23];
        }
        const Y = M ? null : Q;
        const J = $ || "";
        let Z;
        if (n[24] !== M || n[25] !== xstyle) {
            Z = (e || (e = r("stylex")))(xstyle, !M && h.hidden);
            n[24] = M;
            n[25] = xstyle;
            n[26] = Z;
        } else {
            Z = n[26];
        }
        let ee;
        if (n[27] !== K || n[28] !== z || n[29] !== J || n[30] !== Z) {
            const Component = r("WAWebImg.react");
            ee = <Component src={J} className={Z} style={z} hasPrivacyChecks={false} onLoad={K} noXHR testid="shared_location_map_image"/>;
            n[27] = K;
            n[28] = z;
            n[29] = J;
            n[30] = Z;
            n[31] = ee;
        } else {
            ee = n[31];
        }
        const te = ee;
        let ne;
        if (n[32] !== lat || n[33] !== k || n[34] !== lng || n[35] !== te || n[36] !== name || n[37] !== onClick || n[38] !== Y || n[39] !== testid) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            ne = k ? <Component href={o("WAWebMapUtils").getMapUrl({
                lat,
                lng,
                name
            })} xstyle={h.container} onClick={onClick} testid={testid} aria-label={s._("Open map location")}>{Y}{te}</Component> : <span className="x6s0dn4 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x9f619 xtu1v1 x1h22o6k x1ue6dqu xhq422q xbq6axl xjajieo xtnmogg x1av0zpm xkosrqj x17j0exz xwr2l8c xgn0dxz x1878o1q xf2y0h5 xnv9r3m xo81p9n">{Y}{te}</span>;
            n[32] = lat;
            n[33] = k;
            n[34] = lng;
            n[35] = te;
            n[36] = name;
            n[37] = onClick;
            n[38] = Y;
            n[39] = testid;
            n[40] = ne;
        } else {
            ne = n[40];
        }
        return ne;
    }
    l.default = YComponent;
}, 226);