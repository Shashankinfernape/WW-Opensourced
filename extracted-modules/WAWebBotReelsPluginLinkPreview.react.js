__d("WAWebBotReelsPluginLinkPreview.react", [
    "WABidi",
    "WAWebBaseShimmerComponents.react",
    "WAWebEmojiText.react",
    "WDSHoverStateStyles",
    "WDSIconWdsIcReels.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        reelPluginPreview: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            height: "xe7z42g",
            position: "x1n2onr6",
            cursor: "x1ypdohk",
            borderTopWidth: "xt8cgyo",
            borderInlineEndWidth: "x128c8uf",
            borderBottomWidth: "x1co6499",
            borderInlineStartWidth: "xc5fred",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            $$css: true
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(24);
        const { botReelPluginThumbnailUrl, reelProfilePictureUrl, title } = t;
        let s;
        if (n[0] !== title) {
            s = m(title);
            n[0] = title;
            n[1] = s;
        } else {
            s = n[1];
        }
        const d = s;
        if (botReelPluginThumbnailUrl == null) {
            let p;
            if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
                p = <div className="xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 xe7z42g x1n2onr6 x1ypdohk xt8cgyo x128c8uf x1co6499 xc5fred x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xnj1f2r x2uibgs xkveyfu x12llq9">{u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                    height: 300,
                    width: 170
                })}</div>;
                n[2] = p;
            } else {
                p = n[2];
            }
            return p;
        }
        let _;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = (e || (e = r("stylex"))).props(c.reelPluginPreview, o("WDSHoverStateStyles").WDSHoverStateStyles.genericHover);
            n[3] = _;
        } else {
            _ = n[3];
        }
        const t_handleClick = t.handleClick;
        const g = `data:image/jpeg;base64,${botReelPluginThumbnailUrl}`;
        let h;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "xh8yej3 x5yr21d xl1xv1r"
            };
            n[4] = h;
        } else {
            h = n[4];
        }
        let y;
        if (n[5] !== g) {
            y = <img {...babelHelpers.extends({
                "data-testid": "bot-reel-plugin-preview-thumbnail-jpeg",
                alt: "",
                src: g
            }, h)}/>;
            n[5] = g;
            n[6] = y;
        } else {
            y = n[6];
        }
        let C;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            C = <div className="x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x18k6ek x47corl x1ja2u2z xbyyjgo"/>;
            n[7] = C;
        } else {
            C = n[7];
        }
        let b;
        if (n[8] !== reelProfilePictureUrl) {
            b = ({
                0: {
                    className: "x10l6tqk xfr5jun xrotz4w x1awj2ng x1s688f x7yx35o x78zum5 x6s0dn4 x1vjfegm"
                },
                1: {
                    className: "x10l6tqk xfr5jun xrotz4w x1awj2ng x1s688f x7yx35o x6s0dn4 x1vjfegm x1lliihq"
                }
            })[(reelProfilePictureUrl == null) << 0];
            n[8] = reelProfilePictureUrl;
            n[9] = b;
        } else {
            b = n[9];
        }
        let v;
        if (n[10] !== reelProfilePictureUrl) {
            v = reelProfilePictureUrl != null && <img data-testid="bot-reel-profile-picture" alt="" src={`data:image/jpeg;base64,${reelProfilePictureUrl}`} className="xvy4d1p xxk0z11 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xqf2s3x"/>;
            n[10] = reelProfilePictureUrl;
            n[11] = v;
        } else {
            v = n[11];
        }
        let S;
        if (n[12] !== title || n[13] !== d) {
            S = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: title,
                ellipsify: true,
                breakWord: true,
                direction: d,
                testid: "link-preview-title",
                multiline: true
            });
            n[12] = title;
            n[13] = d;
            n[14] = S;
        } else {
            S = n[14];
        }
        let R;
        if (n[15] !== b || n[16] !== v || n[17] !== S) {
            R = <div {...babelHelpers.extends({}, b, {
                children: [
                    v,
                    S
                ]
            })}/>;
            n[15] = b;
            n[16] = v;
            n[17] = S;
            n[18] = R;
        } else {
            R = n[18];
        }
        let L;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            L = <div className="x10l6tqk xrb244j xrr41r3 x1vjfegm">{u.jsx(r("WDSIconWdsIcReels.react"), {
                colorName: "persistentAlwaysWhite",
                width: 26,
                height: 26
            })}</div>;
            n[19] = L;
        } else {
            L = n[19];
        }
        let E;
        if (n[20] !== t.handleClick || n[21] !== R || n[22] !== y) {
            E = <div {...babelHelpers.extends({}, _, {
                onClick: t_handleClick,
                children: [
                    y,
                    C,
                    R,
                    L
                ]
            })}/>;
            n[20] = t.handleClick;
            n[21] = R;
            n[22] = y;
            n[23] = E;
        } else {
            E = n[23];
        }
        return E;
    }
    function m(title) {
        if (title != null && title !== "") {
            return o("WABidi").bidiDir(title);
        }
    }
    l.default = d;
}, 98);