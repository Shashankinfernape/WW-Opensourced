__d("WAWebMediaLinkPreviewImage.react", [
    "WAWebDisplayType",
    "WAWebMediaLinkPreviewImageLayout.react",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = "102px";
    const d = {
        fullPreviewNotHighQualityLayoutMediaWithoutDescription: {
            marginBottom: "xyorhqc",
            $$css: true
        },
        media: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            $$css: true
        },
        mediaLQ: {
            height: "xeghe2j",
            width: "x41jr8d",
            objectFit: "xl1xv1r",
            $$css: true
        },
        composeMediaHQ: {
            maxHeight: "x1vke2v8",
            $$css: true
        },
        composeMedia: {
            minHeight: "x1yyal6b",
            height: "xi9e97b",
            minWidth: "x1h16669",
            width: "x12i9s57",
            $$css: true
        },
        botPluginLinkMedia: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            height: "xm00f2n",
            width: "x1dk3rag",
            objectFit: "xl1xv1r",
            $$css: true
        },
        supportCitationsLinkMedia: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            marginTop: "xvijh9v",
            marginInlineEnd: "x1mpyi22",
            marginBottom: "x1ty9z65",
            marginInlineStart: "xm2jcoa",
            objectFit: "xl1xv1r",
            $$css: true
        },
        statusMedia: {
            height: "xwc1p85",
            width: "xpmtt7c",
            $$css: true
        },
        highQualityLayoutMedia: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        },
        fullPreviewNotHighQualityLayoutMedia: {
            marginTop: "x1anpbxc",
            marginInlineEnd: "x1sa5p1d",
            marginBottom: "xat24cr",
            marginInlineStart: "x1hm9lzh",
            borderStartStartRadius: "xrxyp3c",
            borderStartEndRadius: "xv0oops",
            borderEndEndRadius: "x1isl5vh",
            borderEndStartRadius: "xn8zj9a",
            float: "x1faq86j",
            height: "xxtgz2e",
            width: "xtw4mwf",
            $$css: true
        },
        isInviteMedia: {
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            marginTop: "x1xmf6yo",
            marginInlineEnd: "x14z9mp",
            marginBottom: "x1e56ztr",
            marginInlineStart: "x1hm9lzh",
            height: "x112a4uq",
            width: "x15jighw",
            $$css: true
        },
        noThumbIcon: {
            color: "x18cpw0e",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(31);
        const { displayType, isCallLink, isCompose, isFullPreview, isHighQualityLayout, isInvite, isStatus, theme, thumbnail, thumbnailJpeg, thumbnailJpegDirectPath, thumbnailJpegHeight, thumbnailJpegHQ, thumbnailJpegWidth, withoutDescription } = t;
        const isComposerHightQualityLayout = isCompose && thumbnailJpegHQ != null && thumbnailJpegWidth != null && thumbnailJpegWidth > 240;
        const R = theme === "bot_plugin_link";
        const L = theme === "support_citations_link";
        let E;
        if (n[0] !== R || n[1] !== isCompose || n[2] !== isFullPreview || n[3] !== isComposerHightQualityLayout || n[4] !== isHighQualityLayout || n[5] !== isInvite || n[6] !== isStatus || n[7] !== L || n[8] !== withoutDescription) {
            E = (e || (e = r("stylex")))([
                R && d.botPluginLinkMedia,
                L && d.supportCitationsLinkMedia,
                !R && d.media,
                !R && !L && (isComposerHightQualityLayout ? d.composeMediaHQ : d.mediaLQ),
                isStatus && d.statusMedia,
                isHighQualityLayout && d.highQualityLayoutMedia,
                isFullPreview && !isHighQualityLayout && d.fullPreviewNotHighQualityLayoutMedia,
                isFullPreview && !isHighQualityLayout && withoutDescription && d.fullPreviewNotHighQualityLayoutMediaWithoutDescription,
                isInvite && d.isInviteMedia,
                isCompose && !isComposerHightQualityLayout && d.composeMedia
            ]);
            n[0] = R;
            n[1] = isCompose;
            n[2] = isFullPreview;
            n[3] = isComposerHightQualityLayout;
            n[4] = isHighQualityLayout;
            n[5] = isInvite;
            n[6] = isStatus;
            n[7] = L;
            n[8] = withoutDescription;
            n[9] = E;
        } else {
            E = n[9];
        }
        const k = E;
        const galleryView = displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        if (thumbnail != null && thumbnail !== "") {
            let T;
            if (n[10] !== isCallLink || n[11] !== k) {
                T = isCallLink ? "x1c4vz4f x2lah0s xdl72j9 x1diwwjn x1vqgdyp x100vrsf" : k;
                n[10] = isCallLink;
                n[11] = k;
                n[12] = T;
            } else {
                T = n[12];
            }
            let D;
            if (n[13] !== T || n[14] !== thumbnail) {
                D = <div data-testid="link-preview-thumbnail" className={T}>{thumbnail}</div>;
                n[13] = T;
                n[14] = thumbnail;
                n[15] = D;
            } else {
                D = n[15];
            }
            return D;
        }
        if (thumbnailJpeg != null && thumbnailJpeg !== "" || thumbnailJpegHQ != null && thumbnailJpegHQ !== "") {
            const x = thumbnailJpegHQ != null && thumbnailJpegHQ !== "" && !galleryView ? thumbnailJpegHQ : thumbnailJpeg;
            if (x != null) {
                const $ = `data:image/jpeg;base64,${x}`;
                let P;
                if (n[16] !== k || n[17] !== $) {
                    P = <img data-testid="link-preview-thumbnail-jpeg" alt="" className={k} src={$}/>;
                    n[16] = k;
                    n[17] = $;
                    n[18] = P;
                } else {
                    P = n[18];
                }
                let N;
                if (n[19] !== displayType || n[20] !== galleryView || n[21] !== isComposerHightQualityLayout || n[22] !== isHighQualityLayout || n[23] !== isStatus || n[24] !== P || n[25] !== thumbnailJpegDirectPath || n[26] !== thumbnailJpegHQ || n[27] !== thumbnailJpegHeight || n[28] !== thumbnailJpegWidth) {
                    const Component = r("WAWebMediaLinkPreviewImageLayout.react");
                    N = <Component thumbnailJpegDirectPath={thumbnailJpegDirectPath} thumbnailJpegHQ={thumbnailJpegHQ} height={thumbnailJpegHeight} width={thumbnailJpegWidth} galleryView={galleryView} isStatus={isStatus} isComposerHightQualityLayout={isComposerHightQualityLayout} displayType={displayType} isHighQualityLayout={isHighQualityLayout}>{P}</Component>;
                    n[19] = displayType;
                    n[20] = galleryView;
                    n[21] = isComposerHightQualityLayout;
                    n[22] = isHighQualityLayout;
                    n[23] = isStatus;
                    n[24] = P;
                    n[25] = thumbnailJpegDirectPath;
                    n[26] = thumbnailJpegHQ;
                    n[27] = thumbnailJpegHeight;
                    n[28] = thumbnailJpegWidth;
                    n[29] = N;
                } else {
                    N = n[29];
                }
                return N;
            }
        }
        if (galleryView) {
            let M;
            if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
                M = <div data-testid="link-preview-no-thumb" className="x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x41jr8d xeghe2j x6ikm8r x10wlt62 x1280gxy">{u.jsx(r("WDSIconIcLink.react"), {
                    testid: "ic-link",
                    xstyle: d.noThumbIcon,
                    width: 32,
                    height: 32
                })}</div>;
                n[30] = M;
            } else {
                M = n[30];
            }
            return M;
        }
        return null;
    }
    l.default = m;
}, 98);