__d("WAWebBotPostCard.react", [
    "WAWebBotCardImageUtils",
    "WAWebExternalLink.react",
    "WAWebImg.react",
    "WAWebVerifiedBlueStyles.stylex",
    "WDSFlex.stylex",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSIconWdsIcLogoInstagram.react",
    "WDSIconWdsIcLogoThreads.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSText.react",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 300;
    const d = 40;
    const m = 300;
    const p = 24;
    const _ = 12;
    const f = 14;
    const g = 24;
    const h = 3;
    const y = 10;
    const C = {
        withImage: {
            usernameType: "Body2Emphasized",
            usernameColor: "persistentAlwaysWhite",
            captionColor: "persistentAlwaysWhite",
            captionMaxLines: h,
            sourceAppIconStyle: "footerSourceAppIconOnImage"
        },
        withoutImage: {
            usernameType: "Body2",
            usernameColor: "contentDefault",
            captionColor: "contentDefault",
            captionMaxLines: y,
            sourceAppIconStyle: "footerSourceAppIcon"
        }
    };
    const b = {
        height: p,
        width: p
    };
    const v = {
        content: {
            flexGrow: "x1iyjqo2",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x1iw51ew",
            $$css: true
        },
        footerSourceAppIcon: {
            color: "x14ug900",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        },
        footerSourceAppIconOnImage: {
            color: "x17t9dm2",
            position: "x1n2onr6",
            zIndex: "x1vjfegm",
            $$css: true
        }
    };
    function S(e) {
        const t = o("react-compiler-runtime").c(6);
        const { sourceApp, xstyle } = e;
        const i = sourceApp != null ? String(sourceApp) : null;
        if (i === "INSTAGRAM") {
            let l;
            if (t[0] !== xstyle) {
                l = u.jsx(r("WDSIconWdsIcLogoInstagram.react"), babelHelpers.extends({}, b, {
                    iconXstyle: xstyle
                }));
                t[0] = xstyle;
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        if (i === "FACEBOOK") {
            let s;
            if (t[2] !== xstyle) {
                s = u.jsx(r("WDSIconWdsIcLogoFacebook.react"), babelHelpers.extends({}, b, {
                    iconXstyle: xstyle
                }));
                t[2] = xstyle;
                t[3] = s;
            } else {
                s = t[3];
            }
            return s;
        }
        if (i === "THREADS") {
            let c;
            if (t[4] !== xstyle) {
                c = u.jsx(r("WDSIconWdsIcLogoThreads.react"), babelHelpers.extends({}, b, {
                    iconXstyle: xstyle
                }));
                t[4] = xstyle;
                t[5] = c;
            } else {
                c = t[5];
            }
            return c;
        }
        return null;
    }
    function RComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const { caption, colorName, maxLines } = e;
        if (!r("isStringNotNullAndNotWhitespaceOnly")(caption)) {
            return null;
        }
        let l;
        if (t[0] !== caption || t[1] !== colorName || t[2] !== maxLines) {
            const Component = r("WDSText.react");
            l = <Component type="Body2" colorName={colorName} maxLines={maxLines}>{caption}</Component>;
            t[0] = caption;
            t[1] = colorName;
            t[2] = maxLines;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    function LComponent(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_hasImage = e.hasImage;
        if (e_hasImage) {
            let a;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                a = {
                    className: "x17t9dm2 x78zum5"
                };
                t[0] = a;
            } else {
                a = t[0];
            }
            let i;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                i = <span {...babelHelpers.extends({}, a, {
                    children: u.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                        height: _,
                        width: _,
                        viewBox: {
                            x: 0,
                            y: 0,
                            width: g,
                            height: g
                        }
                    })
                })}/>;
                t[1] = i;
            } else {
                i = t[1];
            }
            return i;
        }
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = u.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                height: f,
                testid: "psa-verified-blue",
                width: f,
                xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
            });
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    function EComponent(e) {
        const t = o("react-compiler-runtime").c(22);
        const { hasImage, isVerified, profilePicDataUrl, username, variantConfig } = e;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x6s0dn4 x1s70e7g x78zum5 x1q0g3np x2lah0s x1xrf6ya xde1mab xscbp6u x1iw51ew x1n2onr6 x1vjfegm"
            };
            t[0] = c;
        } else {
            c = t[0];
        }
        let d;
        if (t[1] !== hasImage) {
            d = hasImage && <div className="x12hflea x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy x1ja2u2z"/>;
            t[1] = hasImage;
            t[2] = d;
        } else {
            d = t[2];
        }
        let m;
        if (t[3] !== profilePicDataUrl || t[4] !== username) {
            const Component = r("WAWebImg.react");
            m = profilePicDataUrl != null && <Component alt={username} src={o("WAWebBotCardImageUtils").toJpegDataUrl(profilePicDataUrl)} className="x1c7u0tx x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x1vqgdyp xl1xv1r x1n2onr6 x100vrsf x1vjfegm"/>;
            t[3] = profilePicDataUrl;
            t[4] = username;
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        let _;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                className: "x78zum5 xdt5ytf x1iyjqo2 xeuugli x1n2onr6 x1b73lln x1vjfegm"
            };
            _ = {
                className: "x6s0dn4 x1trrmfo x78zum5"
            };
            t[6] = p;
            t[7] = _;
        } else {
            p = t[6];
            _ = t[7];
        }
        let f;
        if (t[8] !== username || t[9] !== variantConfig.usernameColor || t[10] !== variantConfig.usernameType) {
            const Component = r("WDSText.react");
            f = <Component type={variantConfig.usernameType} colorName={variantConfig.usernameColor} maxLines={1}>{username}</Component>;
            t[8] = username;
            t[9] = variantConfig.usernameColor;
            t[10] = variantConfig.usernameType;
            t[11] = f;
        } else {
            f = t[11];
        }
        let g;
        if (t[12] !== hasImage || t[13] !== isVerified) {
            g = isVerified === true && <LComponent hasImage={hasImage}/>;
            t[12] = hasImage;
            t[13] = isVerified;
            t[14] = g;
        } else {
            g = t[14];
        }
        let h;
        if (t[15] !== f || t[16] !== g) {
            h = <div {...babelHelpers.extends({}, p, {
                children: <div {...babelHelpers.extends({}, _, {
                    children: [
                        f,
                        g
                    ]
                })}/>
            })}/>;
            t[15] = f;
            t[16] = g;
            t[17] = h;
        } else {
            h = t[17];
        }
        let y;
        if (t[18] !== d || t[19] !== m || t[20] !== h) {
            y = <div {...babelHelpers.extends({}, c, {
                children: [
                    d,
                    m,
                    h
                ]
            })}/>;
            t[18] = d;
            t[19] = m;
            t[20] = h;
            t[21] = y;
        } else {
            y = t[21];
        }
        return y;
    }
    function K1Component(e) {
        const t = o("react-compiler-runtime").c(14);
        const { hasImage, postCaption, sourceApp, variantConfig } = e;
        const l = variantConfig.sourceAppIconStyle === "footerSourceAppIconOnImage" ? v.footerSourceAppIconOnImage : v.footerSourceAppIcon;
        let s;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "x78zum5 xdt5ytf x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1n2onr6 x1qvou4u x1vjfegm"
            };
            t[0] = s;
        } else {
            s = t[0];
        }
        let c;
        if (t[1] !== hasImage) {
            c = hasImage && <div className="x1ue4b2t x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy x1ja2u2z"/>;
            t[1] = hasImage;
            t[2] = c;
        } else {
            c = t[2];
        }
        let d;
        if (t[3] !== postCaption || t[4] !== variantConfig.captionColor || t[5] !== variantConfig.captionMaxLines) {
            d = <RComponent caption={postCaption} colorName={variantConfig.captionColor} maxLines={variantConfig.captionMaxLines}/>;
            t[3] = postCaption;
            t[4] = variantConfig.captionColor;
            t[5] = variantConfig.captionMaxLines;
            t[6] = d;
        } else {
            d = t[6];
        }
        let m;
        if (t[7] !== l || t[8] !== sourceApp) {
            m = sourceApp != null && <S sourceApp={sourceApp} xstyle={l}/>;
            t[7] = l;
            t[8] = sourceApp;
            t[9] = m;
        } else {
            m = t[9];
        }
        let p;
        if (t[10] !== c || t[11] !== d || t[12] !== m) {
            p = <div {...babelHelpers.extends({}, s, {
                children: [
                    c,
                    d,
                    m
                ]
            })}/>;
            t[10] = c;
            t[11] = d;
            t[12] = m;
            t[13] = p;
        } else {
            p = t[13];
        }
        return p;
    }
    function IComponent(t) {
        const n = o("react-compiler-runtime").c(5);
        const { postCaption, variantConfig } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignStart, o("WDSFlex.stylex").wdsFlex.justifyStart, v.content);
            n[0] = l;
        } else {
            l = n[0];
        }
        let s;
        if (n[1] !== postCaption || n[2] !== variantConfig.captionColor || n[3] !== variantConfig.captionMaxLines) {
            s = <div {...babelHelpers.extends({}, l, {
                children: <RComponent caption={postCaption} colorName={variantConfig.captionColor} maxLines={variantConfig.captionMaxLines}/>
            })}/>;
            n[1] = postCaption;
            n[2] = variantConfig.captionColor;
            n[3] = variantConfig.captionMaxLines;
            n[4] = s;
        } else {
            s = n[4];
        }
        return s;
    }
    function TComponent(e) {
        const t = o("react-compiler-runtime").c(30);
        const { isVerified, postCaption, postUrl, profilePictureUrl, sourceApp, thumbnailUrl, username } = e;
        let _;
        if (t[0] !== thumbnailUrl) {
            _ = {
                imageUrl: thumbnailUrl,
                width: c,
                height: c
            };
            t[0] = thumbnailUrl;
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = o("WAWebBotCardImageUtils").useResizedImage(_);
        let g;
        if (t[2] !== profilePictureUrl) {
            g = {
                imageUrl: profilePictureUrl,
                width: d,
                height: d
            };
            t[2] = profilePictureUrl;
            t[3] = g;
        } else {
            g = t[3];
        }
        const profilePicDataUrl = o("WAWebBotCardImageUtils").useResizedImage(g);
        let y;
        if (t[4] !== thumbnailUrl) {
            y = r("isStringNotNullAndNotWhitespaceOnly")(thumbnailUrl);
            t[4] = thumbnailUrl;
            t[5] = y;
        } else {
            y = t[5];
        }
        const hasImage = y;
        const variantConfig = hasImage ? C.withImage : C.withoutImage;
        let S;
        if (t[6] !== postUrl) {
            S = function() {
                o("WAWebExternalLink.react").openExternalLink(postUrl);
            };
            t[6] = postUrl;
            t[7] = S;
        } else {
            S = t[7];
        }
        const R = S;
        let L;
        if (t[8] !== hasImage) {
            L = ({
                0: {
                    className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x1ypdohk x78zum5 xdt5ytf x1qughib x6ikm8r x10wlt62 x1n2onr6 x1hl2dhg xdzyupr x1plog1"
                },
                1: {
                    className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x1ypdohk x78zum5 xdt5ytf x1qughib x6ikm8r x10wlt62 x1n2onr6 x1hl2dhg xdzyupr x1plog1 xx42vgk xbogo7e x120ee7l x1vb5itz x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4"
                }
            })[!hasImage << 0];
            t[8] = hasImage;
            t[9] = L;
        } else {
            L = t[9];
        }
        let T;
        if (t[10] !== hasImage || t[11] !== f) {
            const Component = r("WAWebImg.react");
            T = hasImage && f != null && <Component alt="" src={o("WAWebBotCardImageUtils").toJpegDataUrl(f)} className="x5yr21d x1o0tod xl1xv1r x10l6tqk x13vifvy xh8yej3 x1ja2u2z"/>;
            t[10] = hasImage;
            t[11] = f;
            t[12] = T;
        } else {
            T = t[12];
        }
        let D;
        if (t[13] !== hasImage || t[14] !== isVerified || t[15] !== profilePicDataUrl || t[16] !== username || t[17] !== variantConfig) {
            D = <EComponent hasImage={hasImage} isVerified={isVerified} profilePicDataUrl={profilePicDataUrl} username={username} variantConfig={variantConfig}/>;
            t[13] = hasImage;
            t[14] = isVerified;
            t[15] = profilePicDataUrl;
            t[16] = username;
            t[17] = variantConfig;
            t[18] = D;
        } else {
            D = t[18];
        }
        let x;
        if (t[19] !== hasImage || t[20] !== postCaption || t[21] !== sourceApp || t[22] !== variantConfig) {
            x = hasImage ? <K1Component hasImage={hasImage} postCaption={postCaption} sourceApp={sourceApp} variantConfig={variantConfig}/> : <><IComponent postCaption={postCaption} variantConfig={variantConfig}/>{sourceApp != null && <K1Component hasImage={hasImage} postCaption={null} sourceApp={sourceApp} variantConfig={variantConfig}/>}</>;
            t[19] = hasImage;
            t[20] = postCaption;
            t[21] = sourceApp;
            t[22] = variantConfig;
            t[23] = x;
        } else {
            x = t[23];
        }
        let $;
        if (t[24] !== R || t[25] !== L || t[26] !== T || t[27] !== D || t[28] !== x) {
            $ = <div {...babelHelpers.extends({
                onClick: R
            }, L, {
                children: [
                    T,
                    D,
                    x
                ]
            })}/>;
            t[24] = R;
            t[25] = L;
            t[26] = T;
            t[27] = D;
            t[28] = x;
            t[29] = $;
        } else {
            $ = t[29];
        }
        return $;
    }
    l.default = TComponent;
}, 98);