__d("WAWebMediaLinkPreviewImageLayout.react", [
    "WAWebDisplayType",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 90;
    const d = 240;
    const m = 330;
    const p = 480;
    const _ = 0.25;
    const f = 1;
    const g = 1;
    const h = 1.4;
    const y = {
        thumbnailContainer: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            $$css: true
        },
        highQualityLayoutThumbnailContainer: {
            width: "xh8yej3",
            $$css: true
        },
        blurred: {
            filter: "x1df5jli",
            $$css: true
        }
    };
    function C({ height, highQuality = false, width }) {
        const a = highQuality ? [
            f,
            _
        ] : [
            h,
            g
        ];
        const i = a[0];
        const l = a[1];
        return Math.min(Math.max(height / width, l), i);
    }
    function b({ displayType, isCompose, isLandscape }) {
        if (isCompose) {
            return m;
        }
        if (displayType === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || displayType === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER) {
            return p;
        }
        if (isLandscape) {
            return m;
        }
        return d;
    }
    function v(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, displayType, galleryView, height, isComposerHightQualityLayout, isHighQualityLayout, isStatus, thumbnailJpegDirectPath, thumbnailJpegHQ, width } = e;
        if ((thumbnailJpegDirectPath != null && thumbnailJpegDirectPath !== "" || thumbnailJpegHQ != null && thumbnailJpegHQ !== "") && height != null && width != null && !galleryView) {
            const _ = isHighQualityLayout || isComposerHightQualityLayout ? S : R;
            const hasHqThumbnail = thumbnailJpegHQ != null;
            let g;
            if (t[0] !== _ || t[1] !== children || t[2] !== displayType || t[3] !== height || t[4] !== isComposerHightQualityLayout || t[5] !== hasHqThumbnail || t[6] !== width) {
                g = <_ height={height} width={width} displayType={displayType} isCompose={isComposerHightQualityLayout} hasHqThumbnail={hasHqThumbnail}>{children}</_>;
                t[0] = _;
                t[1] = children;
                t[2] = displayType;
                t[3] = height;
                t[4] = isComposerHightQualityLayout;
                t[5] = hasHqThumbnail;
                t[6] = width;
                t[7] = g;
            } else {
                g = t[7];
            }
            return g;
        }
        if (isStatus && isHighQualityLayout) {
            let h;
            if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                h = {
                    className: "x78zum5 xs83m0k x6ikm8r x10wlt62 xmqja0k xh8yej3"
                };
                t[8] = h;
            } else {
                h = t[8];
            }
            let y;
            if (t[9] !== children) {
                y = <div {...babelHelpers.extends({}, h, {
                    children
                })}/>;
                t[9] = children;
                t[10] = y;
            } else {
                y = t[10];
            }
            return y;
        }
        return children;
    }
    function S(t) {
        const n = o("react-compiler-runtime").c(16);
        const { children, displayType, hasHqThumbnail, height, isCompose, width } = t;
        let m;
        if (n[0] !== height || n[1] !== width) {
            m = C({
                height,
                highQuality: true,
                width
            });
            n[0] = height;
            n[1] = width;
            n[2] = m;
        } else {
            m = n[2];
        }
        const p = m;
        const isLandscape = p < 1;
        let f;
        if (n[3] !== displayType || n[4] !== isCompose || n[5] !== isLandscape) {
            f = b({
                displayType,
                isCompose,
                isLandscape
            });
            n[3] = displayType;
            n[4] = isCompose;
            n[5] = isLandscape;
            n[6] = f;
        } else {
            f = n[6];
        }
        const h = f * p;
        let v;
        if (n[7] !== h) {
            v = {
                height: h
            };
            n[7] = h;
            n[8] = v;
        } else {
            v = n[8];
        }
        const S = v;
        let R;
        if (n[9] !== hasHqThumbnail || n[10] !== isCompose) {
            R = (e || (e = r("stylex")))([
                y.thumbnailContainer,
                !isCompose && y.highQualityLayoutThumbnailContainer,
                !hasHqThumbnail && y.blurred
            ]);
            n[9] = hasHqThumbnail;
            n[10] = isCompose;
            n[11] = R;
        } else {
            R = n[11];
        }
        let L;
        if (n[12] !== children || n[13] !== S || n[14] !== R) {
            L = <div data-testid="high-quality-layout" className={R} style={S}>{children}</div>;
            n[12] = children;
            n[13] = S;
            n[14] = R;
            n[15] = L;
        } else {
            L = n[15];
        }
        return L;
    }
    function R(t) {
        const n = o("react-compiler-runtime").c(12);
        const { children, hasHqThumbnail, height, width } = t;
        let d;
        if (n[0] !== height || n[1] !== width) {
            d = C({
                height,
                width
            });
            n[0] = height;
            n[1] = width;
            n[2] = d;
        } else {
            d = n[2];
        }
        const m = d;
        const p = c / m;
        const _ = c / m;
        let f;
        if (n[3] !== p || n[4] !== _) {
            f = {
                width: p,
                minWidth: _
            };
            n[3] = p;
            n[4] = _;
            n[5] = f;
        } else {
            f = n[5];
        }
        const g = f;
        let h;
        if (n[6] !== hasHqThumbnail) {
            h = (e || (e = r("stylex")))([
                y.thumbnailContainer,
                !hasHqThumbnail && y.blurred
            ]);
            n[6] = hasHqThumbnail;
            n[7] = h;
        } else {
            h = n[7];
        }
        let b;
        if (n[8] !== children || n[9] !== g || n[10] !== h) {
            b = <div data-testid="standard-quality-layout" className={h} style={g}>{children}</div>;
            n[8] = children;
            n[9] = g;
            n[10] = h;
            n[11] = b;
        } else {
            b = n[11];
        }
        return b;
    }
    l.default = v;
}, 98);