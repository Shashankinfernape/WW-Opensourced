__d("WAWebMediaLinkPreview.react", [
    "WABidi",
    "WAWebDisplayType",
    "WAWebEmojiText.react",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLinkPreviewGroupUtils",
    "WAWebMediaLinkPreviewDescription.react",
    "WAWebMediaLinkPreviewImage.react",
    "WAWebMediaLinkPreviewTitle.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebPaymentLinkPreview.react",
    "WAWebPaymentLinkPreviewWithAmountFeature",
    "WDSIconIcBookmarkFilled.react",
    "WDSIconIcGradeFilled.react",
    "WDSIconIcLink.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 20;
    const d = "x1qak2s4-B";
    const m = "102px";
    const p = {
        preview: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            color: "x14ug900",
            cursor: "x1ypdohk",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            fontSize: "x1wl59ut",
            lineHeight: "x1o168i8",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            transition: "xnhwuio",
            $$css: true
        },
        noBorderRadius: {
            borderStartStartRadius: "x1bczwif",
            borderStartEndRadius: "x17un8ov",
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            $$css: true
        },
        compose: {
            backgroundColor: "xjbqb8w",
            cursor: "x1sqbtui",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            maxWidth: "x1x1rfll",
            width: "xh8yej3",
            $$css: true
        },
        composeWithSQMediaPreview: {
            height: "xi9e97b",
            maxHeight: "xygtw03",
            $$css: true
        },
        composeWithHQMediaPreview: {
            maxHeight: "x1tw48k3",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        boubbleOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        callLink: {
            height: "xr931m4",
            $$css: true
        },
        fullPreview: {
            display: "x1lliihq",
            $$css: true
        },
        extended: {
            borderEndEndRadius: "x1e7945m",
            borderEndStartRadius: "x11o6v7j",
            $$css: true
        },
        highQualityLayout: {
            flexDirection: "xdt5ytf",
            $$css: true
        },
        horizontalLayout: {
            flexDirection: "x1q0g3np",
            $$css: true
        },
        status: {
            backgroundColor: "x1p8t8ri",
            width: "xh8yej3",
            $$css: true
        },
        body: {
            boxSizing: "x9f619",
            display: "x78zum5",
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "xdl72j9",
            flexDirection: "xdt5ytf",
            justifyContent: "xl56j7k",
            lineHeight: "x17fgdl5",
            maxHeight: "x1vt2n86",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            paddingTop: "x1yrsyyn",
            paddingInlineEnd: "x2vl965",
            paddingBottom: "x10b6aqq",
            paddingInlineStart: "xe2zdcy",
            width: "xh8yej3",
            $$css: true
        },
        statusBody: {
            paddingTop: "xz9dl7a",
            paddingInlineEnd: "xpdmqnj",
            paddingBottom: "xsag5q8",
            paddingInlineStart: "x1g0dm76",
            maxHeight: "xi3n7jm",
            flexShrink: "x2lah0s",
            $$css: true
        },
        fullPreviewBody: {
            maxHeight: "x1a0yzc1",
            $$css: true
        },
        fullPreviewNotHighQualityLayoutBody: {
            display: "x1lliihq",
            overflowX: "x1plvlek",
            overflowY: "xryxfnj",
            $$css: true
        },
        notComposeBody: {
            alignSelf: "x1y8v6su",
            $$css: true
        },
        callLinkBody: {
            paddingTop: "xexx8yu",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1iw51ew",
            paddingInlineEnd: "xde1mab",
            rowGap: "x129bwdz",
            $$css: true
        },
        composeBody: {
            alignSelf: "xamitd3",
            boxSizing: "x9f619",
            paddingTop: "x1y1aw1k",
            paddingInlineEnd: "xpdmqnj",
            paddingBottom: "xdvlbce",
            paddingInlineStart: "x1iwz3mf",
            $$css: true
        },
        composeBodyLQ: {
            maxHeight: "xygtw03",
            $$css: true
        },
        composeBodyHQ: {
            maxHeight: "x1tw48k3",
            $$css: true
        },
        statusImageShrink: {
            display: "x78zum5",
            flexShrink: "xs83m0k",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            maxHeight: "xmqja0k",
            width: "xh8yej3",
            $$css: true
        },
        icon: {
            color: "x17t9dm2",
            pointerEvents: "x47corl",
            filter: "x1tqxd1j",
            $$css: true
        },
        placeholderImage: {
            color: "xy8hc96",
            $$css: true
        },
        paddingAll24: {
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            $$css: true
        }
    };
    function _(title) {
        if (title != null && title !== "") {
            return o("WABidi").bidiDir(title);
        }
    }
    function f(e) {
        const t = e === "rtl";
        return t !== r("WAWebL10N").isRTL();
    }
    function g({ descriptionFromMsg, inviteGrpType, matchedText }) {
        if (o("WAWebNewsletterApiParse").isNewsletterInviteCode(matchedText)) {
            if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
                return descriptionFromMsg;
            }
            return null;
        }
        if (inviteGrpType != null) {
            let a;
            if (inviteGrpType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && typeof descriptionFromMsg === "string") {
                a = descriptionFromMsg;
            }
            return o("WAWebLinkPreviewGroupUtils").getInviteLinkDescription(inviteGrpType, a);
        }
        return descriptionFromMsg;
    }
    const h = 240;
    const y = /^(www.)?twitter.com$/i;
    const C = /^(www.)?x.com$/i;
    const b = [
        y,
        C
    ];
    function v(matchedText) {
        if (matchedText == null || matchedText === "") {
            return false;
        }
        return b.some((t)=>t.test(matchedText));
    }
    function S(e) {
        const t = o("react-compiler-runtime").c(11);
        const { children, displayType, kept, star } = e;
        if (displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY) {
            return children;
        }
        let s;
        if (t[0] !== kept || t[1] !== star) {
            s = [];
            if (star === true) {
                let c;
                if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                    c = u.jsx(r("WDSIconIcGradeFilled.react"), {
                        testid: "star",
                        xstyle: p.icon,
                        width: 16,
                        height: 16
                    }, "star");
                    t[3] = c;
                } else {
                    c = t[3];
                }
                s.push(c);
            }
            if (kept === true) {
                let d;
                if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                    d = u.jsx(r("WDSIconIcBookmarkFilled.react"), {
                        xstyle: p.icon,
                        width: 15.64,
                        height: 14.67,
                        testid: "keep-in-chat"
                    }, "keep-in-chat");
                    t[4] = d;
                } else {
                    d = t[4];
                }
                s.push(d);
            }
            t[0] = kept;
            t[1] = star;
            t[2] = s;
        } else {
            s = t[2];
        }
        let m;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1280gxy"
            };
            t[5] = m;
        } else {
            m = t[5];
        }
        let _;
        if (t[6] !== s) {
            _ = s.length > 0 && <div className="x78zum5 x10l6tqk xmnqija xy1j3rs">{s}</div>;
            t[6] = s;
            t[7] = _;
        } else {
            _ = t[7];
        }
        let f;
        if (t[8] !== children || t[9] !== _) {
            f = <div {...babelHelpers.extends({
                "data-testid": "icon-star"
            }, m, {
                children: [
                    children,
                    _
                ]
            })}/>;
            t[8] = children;
            t[9] = _;
            t[10] = f;
        } else {
            f = t[10];
        }
        return f;
    }
    function R(t) {
        const n = o("react-compiler-runtime").c(115);
        const { botPluginReferenceIndex, compose, containerXstyle, description, displayType, horizontalLayout, inviteGrpType, isCallLink, isInvite, isLoading, isSentByMe, kept, linkPreviewData, links, matchedText, onClick, star, theme, thumbnail, thumbnailJpeg, thumbnailJpegDirectPath, thumbnailJpegHeight, thumbnailJpegHQ, thumbnailJpegWidth, title } = t;
        const isCompose = compose === undefined ? false : compose;
        const B = horizontalLayout === undefined ? false : horizontalLayout;
        const W = isCallLink === undefined ? false : isCallLink;
        const isBotPluginLink = theme === "bot_plugin_link";
        const U = displayType === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY;
        const isHighQualityLayout = (theme === "high-quality" || theme === "high-quality-extended") && !U;
        let H;
        let isComposeHQPreview;
        let isFullPreview;
        let isStatus;
        let K;
        let Q;
        let X;
        let Y;
        let J;
        let urlElement;
        if (n[0] !== containerXstyle || n[1] !== description || n[2] !== displayType || n[3] !== B || n[4] !== inviteGrpType || n[5] !== W || n[6] !== isCompose || n[7] !== U || n[8] !== isHighQualityLayout || n[9] !== isLoading || n[10] !== isSentByMe || n[11] !== linkPreviewData || n[12] !== links || n[13] !== matchedText || n[14] !== theme || n[15] !== thumbnailJpegHQ || n[16] !== thumbnailJpegWidth || n[17] !== title) {
            X = Symbol.for("react.early_return_sentinel");
            e: {
                isFullPreview = !isCompose && !U && v(matchedText);
                let ee;
                if (n[28] !== description || n[29] !== inviteGrpType || n[30] !== matchedText) {
                    ee = g({
                        descriptionFromMsg: description,
                        inviteGrpType,
                        matchedText
                    });
                    n[28] = description;
                    n[29] = inviteGrpType;
                    n[30] = matchedText;
                    n[31] = ee;
                } else {
                    ee = n[31];
                }
                H = ee;
                let te;
                if (n[32] !== title) {
                    Y = _(title);
                    te = f(Y);
                    n[32] = title;
                    n[33] = te;
                    n[34] = Y;
                } else {
                    te = n[33];
                    Y = n[34];
                }
                J = te;
                isStatus = displayType === o("WAWebDisplayType").DISPLAY_TYPE.STATUS;
                const ne = theme === "support_citations_link";
                let re;
                if (n[35] !== displayType || n[36] !== W || n[37] !== theme) {
                    re = W && o("WAWebMediaLinkPreviewUtils").supportsCallLinkCard(displayType, theme);
                    n[35] = displayType;
                    n[36] = W;
                    n[37] = theme;
                    n[38] = re;
                } else {
                    re = n[38];
                }
                K = re;
                let oe;
                if (n[39] !== isCompose || n[40] !== isStatus || n[41] !== ne || n[42] !== matchedText || n[43] !== Y || n[44] !== J) {
                    oe = matchedText != null && matchedText !== "" ? <div {...babelHelpers.extends({
                        "data-testid": "url-element"
                    }, {
                        0: {
                            className: "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij"
                        },
                        4: {
                            className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn"
                        },
                        2: {
                            className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn"
                        },
                        6: {
                            className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn"
                        },
                        1: {
                            className: "xhslqc4 x1c4vz4f x2lah0s xdl72j9 x1pg5gke x4p5aij xuxw1ft x6ikm8r x10wlt62 xlyipyv"
                        },
                        5: {
                            className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xa2ctma x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv"
                        },
                        3: {
                            className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv"
                        },
                        7: {
                            className: "x1c4vz4f x2lah0s xdl72j9 x4p5aij xhslqc4 x1f6kntn xuxw1ft x6ikm8r x10wlt62 xlyipyv"
                        }
                    }[!!isStatus << 2 | !!isCompose << 1 | !!ne << 0], {
                        children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: matchedText,
                            direction: Y,
                            dirMismatch: J
                        })
                    })}/> : null;
                    n[39] = isCompose;
                    n[40] = isStatus;
                    n[41] = ne;
                    n[42] = matchedText;
                    n[43] = Y;
                    n[44] = J;
                    n[45] = oe;
                } else {
                    oe = n[45];
                }
                urlElement = oe;
                const previewMetadata = linkPreviewData?.previewMetadata;
                if (isCompose && previewMetadata != null && o("WAWebPaymentLinkPreviewWithAmountFeature").isPaymentLinkPreviewWithAmountEnabled(linkPreviewData, links)) {
                    let ie;
                    if (n[46] !== isLoading || n[47] !== previewMetadata || n[48] !== title || n[49] !== urlElement) {
                        ie = u.jsx(r("WAWebPaymentLinkPreview.react"), {
                            title,
                            urlElement,
                            previewMetadata,
                            isLoading
                        });
                        n[46] = isLoading;
                        n[47] = previewMetadata;
                        n[48] = title;
                        n[49] = urlElement;
                        n[50] = ie;
                    } else {
                        ie = n[50];
                    }
                    X = ie;
                    break e;
                }
                isComposeHQPreview = isCompose && thumbnailJpegHQ != null && thumbnailJpegWidth != null && thumbnailJpegWidth > h;
                Q = (e || (e = r("stylex")))([
                    p.preview,
                    isCompose && p.noBorderRadius,
                    isCompose && p.compose,
                    isCompose && (thumbnailJpegHQ != null && isComposeHQPreview ? p.composeWithHQMediaPreview : p.composeWithSQMediaPreview),
                    isSentByMe === true ? p.boubbleOut : p.bubbleIn,
                    K && p.callLink,
                    isStatus && p.status,
                    isStatus && isHighQualityLayout && p.statusImageShrink,
                    theme === "extended" && p.extended,
                    isHighQualityLayout && p.highQualityLayout,
                    isFullPreview && !isHighQualityLayout && p.fullPreview,
                    B && p.horizontalLayout,
                    containerXstyle
                ]);
            }
            n[0] = containerXstyle;
            n[1] = description;
            n[2] = displayType;
            n[3] = B;
            n[4] = inviteGrpType;
            n[5] = W;
            n[6] = isCompose;
            n[7] = U;
            n[8] = isHighQualityLayout;
            n[9] = isLoading;
            n[10] = isSentByMe;
            n[11] = linkPreviewData;
            n[12] = links;
            n[13] = matchedText;
            n[14] = theme;
            n[15] = thumbnailJpegHQ;
            n[16] = thumbnailJpegWidth;
            n[17] = title;
            n[18] = H;
            n[19] = isComposeHQPreview;
            n[20] = isFullPreview;
            n[21] = isStatus;
            n[22] = K;
            n[23] = Q;
            n[24] = X;
            n[25] = Y;
            n[26] = J;
            n[27] = urlElement;
        } else {
            H = n[18];
            isComposeHQPreview = n[19];
            isFullPreview = n[20];
            isStatus = n[21];
            K = n[22];
            Q = n[23];
            X = n[24];
            Y = n[25];
            J = n[26];
            urlElement = n[27];
        }
        if (X !== Symbol.for("react.early_return_sentinel")) {
            return X;
        }
        const le = Q;
        const se = isLoading;
        let ue;
        if (n[51] !== H || n[52] !== displayType || n[53] !== isCompose || n[54] !== isFullPreview || n[55] !== isHighQualityLayout || n[56] !== isInvite || n[57] !== isStatus || n[58] !== K || n[59] !== se || n[60] !== theme || n[61] !== thumbnail || n[62] !== thumbnailJpeg || n[63] !== thumbnailJpegDirectPath || n[64] !== thumbnailJpegHQ || n[65] !== thumbnailJpegHeight || n[66] !== thumbnailJpegWidth) {
            ue = se ? u.jsx(r("WDSIconIcLink.react"), {
                testid: "ic-link",
                xstyle: [
                    p.paddingAll24,
                    p.placeholderImage
                ],
                width: 32,
                height: 32
            }) : u.jsx(r("WAWebMediaLinkPreviewImage.react"), {
                isCallLink: K,
                thumbnail,
                thumbnailJpeg,
                thumbnailJpegHQ,
                thumbnailJpegDirectPath,
                thumbnailJpegHeight,
                thumbnailJpegWidth,
                isHighQualityLayout,
                displayType,
                isStatus,
                isFullPreview,
                theme,
                withoutDescription: H == null,
                isInvite: displayType !== o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? !!isInvite : false,
                isCompose
            });
            n[51] = H;
            n[52] = displayType;
            n[53] = isCompose;
            n[54] = isFullPreview;
            n[55] = isHighQualityLayout;
            n[56] = isInvite;
            n[57] = isStatus;
            n[58] = K;
            n[59] = se;
            n[60] = theme;
            n[61] = thumbnail;
            n[62] = thumbnailJpeg;
            n[63] = thumbnailJpegDirectPath;
            n[64] = thumbnailJpegHQ;
            n[65] = thumbnailJpegHeight;
            n[66] = thumbnailJpegWidth;
            n[67] = ue;
        } else {
            ue = n[67];
        }
        const ce = ue;
        const useTextLimit = isFullPreview && !isHighQualityLayout;
        const me = inviteGrpType != null ? `link-description-${String(inviteGrpType)}` : "link-description";
        let pe;
        if (n[68] !== H || n[69] !== isCompose || n[70] !== isComposeHQPreview || n[71] !== isFullPreview || n[72] !== isHighQualityLayout || n[73] !== isStatus || n[74] !== K || n[75] !== useTextLimit || n[76] !== me) {
            const Component = r("WAWebMediaLinkPreviewDescription.react");
            pe = <Component useTextLimit={useTextLimit} isCallLink={K} isStatus={isStatus} isFullPreview={isFullPreview} isHighQualityLayout={isHighQualityLayout} isComposeHQPreview={isComposeHQPreview} isCompose={isCompose} testid={me}>{H}</Component>;
            n[68] = H;
            n[69] = isCompose;
            n[70] = isComposeHQPreview;
            n[71] = isFullPreview;
            n[72] = isHighQualityLayout;
            n[73] = isStatus;
            n[74] = K;
            n[75] = useTextLimit;
            n[76] = me;
            n[77] = pe;
        } else {
            pe = n[77];
        }
        const _e = pe;
        const fe = title != null && isBotPluginLink && botPluginReferenceIndex != null ? `${botPluginReferenceIndex}. ${title}` : title;
        let ge;
        if (n[78] !== isCompose) {
            ge = isCompose ? {
                ":empty": {
                    display: "none"
                }
            } : undefined;
            n[78] = isCompose;
            n[79] = ge;
        } else {
            ge = n[79];
        }
        let he;
        if (n[80] !== displayType || n[81] !== ce || n[82] !== kept || n[83] !== star) {
            he = <S star={star} kept={kept} displayType={displayType}>{ce}</S>;
            n[80] = displayType;
            n[81] = ce;
            n[82] = kept;
            n[83] = star;
            n[84] = he;
        } else {
            he = n[84];
        }
        let ye;
        if (n[85] !== isCompose || n[86] !== isComposeHQPreview || n[87] !== isFullPreview || n[88] !== isHighQualityLayout || n[89] !== isStatus || n[90] !== K) {
            ye = (e || (e = r("stylex"))).props(p.body, isStatus && p.statusBody, isFullPreview && p.fullPreviewBody, isFullPreview && !isHighQualityLayout && p.fullPreviewNotHighQualityLayoutBody, isCompose && p.composeBody, !isCompose && !K && p.notComposeBody, K && p.callLinkBody, isCompose && (isComposeHQPreview ? p.composeBodyHQ : p.composeBodyLQ));
            n[85] = isCompose;
            n[86] = isComposeHQPreview;
            n[87] = isFullPreview;
            n[88] = isHighQualityLayout;
            n[89] = isStatus;
            n[90] = K;
            n[91] = ye;
        } else {
            ye = n[91];
        }
        let Ce;
        if (n[92] !== isBotPluginLink || n[93] !== isCompose || n[94] !== isStatus || n[95] !== fe || n[96] !== K || n[97] !== se || n[98] !== Y || n[99] !== J) {
            Ce = !se && u.jsx(r("WAWebMediaLinkPreviewTitle.react"), {
                isBotPluginLink,
                isCallLink: K,
                isCompose,
                isStatus,
                title: fe,
                titleDir: Y,
                titleDirMismatch: J
            });
            n[92] = isBotPluginLink;
            n[93] = isCompose;
            n[94] = isStatus;
            n[95] = fe;
            n[96] = K;
            n[97] = se;
            n[98] = Y;
            n[99] = J;
            n[100] = Ce;
        } else {
            Ce = n[100];
        }
        const be = !isBotPluginLink && !se && _e;
        let ve;
        if (n[101] !== ye || n[102] !== Ce || n[103] !== be || n[104] !== urlElement) {
            ve = <div {...babelHelpers.extends({}, ye, {
                children: [
                    Ce,
                    be,
                    urlElement
                ]
            })}/>;
            n[101] = ye;
            n[102] = Ce;
            n[103] = be;
            n[104] = urlElement;
            n[105] = ve;
        } else {
            ve = n[105];
        }
        let Se;
        if (n[106] !== se) {
            Se = se && <div className="x1ji6iu3 x1ptvdk8 xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl"/>;
            n[106] = se;
            n[107] = Se;
        } else {
            Se = n[107];
        }
        let Re;
        if (n[108] !== le || n[109] !== onClick || n[110] !== ge || n[111] !== he || n[112] !== ve || n[113] !== Se) {
            Re = <div data-testid="link-preview-container" className={le} style={ge} onClick={onClick}>{he}{ve}{Se}</div>;
            n[108] = le;
            n[109] = onClick;
            n[110] = ge;
            n[111] = he;
            n[112] = ve;
            n[113] = Se;
            n[114] = Re;
        } else {
            Re = n[114];
        }
        return Re;
    }
    l.default = R;
}, 98);