__d("WAWebBizCtwaThumbnailImage.react", [
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WDSIconIcAlertWarning.react",
    "WDSIconIcWarning.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useState } = c;
    const p = {
        image: {
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            width: "xh8yej3",
            $$css: true
        },
        errorContainer: {
            height: "x5yr21d",
            backgroundColor: "x6egj2d",
            cursor: "x1ypdohk",
            $$css: true
        },
        errorIcon: {
            color: "x1iglcvg",
            $$css: true
        },
        imageBlur: {
            filter: "x1df5jli",
            $$css: true
        },
        errorInThumbnail: {
            backgroundColor: "xu10ooz",
            $$css: true
        },
        errorIconInThumbnailBubbleOut: {
            color: "xvhpnrs",
            $$css: true
        },
        errorIconInThumbnailBubbleIn: {
            color: "x1pse0pq",
            $$css: true
        }
    };
    function Component(t) {
        const n = o("react-compiler-runtime").c(25);
        const { alt, businessWid, context, fromMe, isThumbnail, xstyle } = t;
        const _ = isThumbnail === undefined ? false : isThumbnail;
        const f = useState(false);
        const g = f[0];
        const h = f[1];
        let y;
        if (_) {
            let C;
            if (n[0] !== context || n[1] !== g) {
                C = g ? o("WAWebBizCtwaContextThumbImage.react").generateThumbSrcFromData(context) : o("WAWebBizCtwaContextThumbImage.react").getInitialThumbSource(context);
                n[0] = context;
                n[1] = g;
                n[2] = C;
            } else {
                C = n[2];
            }
            y = C;
        }
        const b = _ ? y : context?.originalImageUrl;
        let v;
        if (n[3] !== businessWid || n[4] !== context || n[5] !== fromMe) {
            v = function() {
                if (context != null) {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_bottom_sheet_image_error,
                        fromBusiness: fromMe,
                        agmPayload: o("WAWebCtwaAGMUtils").extractAGMPayload(context),
                        businessWid,
                        adId: context?.sourceId
                    });
                }
                h(true);
            };
            n[3] = businessWid;
            n[4] = context;
            n[5] = fromMe;
            n[6] = v;
        } else {
            v = n[6];
        }
        const S = v;
        if (g || r("isStringNullOrEmpty")(b)) {
            let R;
            if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
                R = o("WAWebBizCtwaAGMUtils").getAdImgError();
                n[7] = R;
            } else {
                R = n[7];
            }
            const L = R;
            const E = fromMe ? p.errorIconInThumbnailBubbleOut : p.errorIconInThumbnailBubbleIn;
            const k = _ && p.errorInThumbnail;
            let I;
            if (n[8] !== k || n[9] !== xstyle) {
                I = [
                    p.errorContainer,
                    k,
                    xstyle
                ];
                n[8] = k;
                n[9] = xstyle;
                n[10] = I;
            } else {
                I = n[10];
            }
            let T;
            if (n[11] !== _ || n[12] !== E) {
                T = _ ? u.jsx(r("WDSIconIcWarning.react"), {
                    width: 24,
                    height: 24,
                    xstyle: E
                }) : <>{u.jsx(r("WDSIconIcAlertWarning.react"), {
                    xstyle: p.errorIcon
                })}<div className="x1iglcvg x1f6kntn x1fc57z9 xf4yft" title={L}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: L
                })}</div></>;
                n[11] = _;
                n[12] = E;
                n[13] = T;
            } else {
                T = n[13];
            }
            let D;
            if (n[14] !== I || n[15] !== T) {
                const Component = o("WAWebFlex.react").FlexColumn;
                D = <Component grow={1} shrink={0} basis="auto" align="center" justify="center" gap={8} xstyle={I}>{T}</Component>;
                n[14] = I;
                n[15] = T;
                n[16] = D;
            } else {
                D = n[16];
            }
            return D;
        }
        const alt_1 = alt ?? "";
        let $;
        if (n[17] !== context?.thumbnailUrl || n[18] !== xstyle) {
            $ = (e || (e = r("stylex"))).props(p.image, context?.thumbnailUrl == null && p.imageBlur, xstyle);
            n[17] = context?.thumbnailUrl;
            n[18] = xstyle;
            n[19] = $;
        } else {
            $ = n[19];
        }
        let P;
        if (n[20] !== S || n[21] !== b || n[22] !== alt_1 || n[23] !== $) {
            P = <img {...babelHelpers.extends({
                onError: S,
                alt: alt_1
            }, $, {
                src: b
            })}/>;
            n[20] = S;
            n[21] = b;
            n[22] = alt_1;
            n[23] = $;
            n[24] = P;
        } else {
            P = n[24];
        }
        return P;
    }
    l.default = Component;
}, 98);