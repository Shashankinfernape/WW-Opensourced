__d("WAWebNewsletterName.react", [
    "fbt",
    "WALogger",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebMiscGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebVerifiedBlueStyles.stylex",
    "WDSIconWdsIcVerifiedFilled.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebNewsletterMetadataValues"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        verified: {
            flexGrow: "x1c4vz4f",
            display: "x3nfvp2",
            overflowX: "xuce83p",
            overflowY: "x1bft6iq",
            textOverflow: "x1i7k8ik",
            whiteSpace: "xq9mrsl",
            alignItems: "x6s0dn4",
            $$css: true
        },
        newsletterIcon: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            marginInlineStart: "xwklpps",
            $$css: true
        }
    };
    function MComponent({ breakWord, chat, checkmarkLarge = false, className, element, ellipsify, emojiXstyle, highlightText, onClick, selectable, skipCheckMark = false, testid, titlify, xstyle }) {
        const S = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getNewsletterMetadata
        ]);
        const R = S[0];
        const L = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(R?.id, [
            o("WAWebNewsletterMetadataGetters").getVerified
        ], {
            isStrong: true
        }) ?? [
            false
        ];
        const E = L[0];
        const k = _(chat);
        const I = highlightText != null && highlightText !== "" ? o("WAWebFormatConfiguration").SearchName({
            terms: highlightText.split(/\s+/).filter(Boolean),
            emojiXstyle
        }) : undefined;
        const Component = o("WAWebEmojiText.react").EmojiText;
        const T = <Component text={k} element={element} className={className} xstyle={xstyle} emojiXstyle={emojiXstyle} formatters={I} titlify={titlify} ellipsify={ellipsify} breakWord={breakWord} direction="auto" inlineblock onClick={onClick} testid={testid} selectable={selectable}/>;
        return <P1Component verified={E === true} checkmarkLarge={checkmarkLarge} skipCheckMark={skipCheckMark}>{T}</P1Component>;
    }
    MComponent.displayName = `${MComponent.name} [from ${i.id}]`;
    function P1Component(e) {
        const t = o("react-compiler-runtime").c(11);
        const { checkmarkLarge, children, skipCheckMark, verified } = e;
        let u;
        if (verified && !skipCheckMark) {
            let d;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                d = s._("Verified channel");
                t[0] = d;
            } else {
                d = t[0];
            }
            const m = d;
            const p = checkmarkLarge ? 21 : 14;
            let _;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                _ = {
                    className: "x78zum5 x6s0dn4 xl56j7k xwklpps x2lah0s"
                };
                t[1] = _;
            } else {
                _ = t[1];
            }
            let f;
            if (t[2] !== p) {
                f = <div {...babelHelpers.extends({}, _, {
                    children: o("WAWebMiscGatingUtils").isBlueEnabled() ? c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                        "aria-label": m,
                        height: p,
                        testid: "psa-verified-blue",
                        width: p,
                        xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
                    }) : c.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                        "aria-label": m,
                        height: 18,
                        testid: "psa-verified",
                        width: 18,
                        xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
                    })
                })}/>;
                t[2] = p;
                t[3] = f;
            } else {
                f = t[3];
            }
            u = f;
        }
        let g;
        let h;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = {
                className: "x1c4vz4f x3nfvp2 x1i7k8ik xq9mrsl x6s0dn4 x6ikm8r x10wlt62 x193iq5w"
            };
            h = {
                className: "x78zum5 xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft"
            };
            t[4] = g;
            t[5] = h;
        } else {
            g = t[4];
            h = t[5];
        }
        let y;
        if (t[6] !== children) {
            y = <span {...babelHelpers.extends({}, h, {
                children
            })}/>;
            t[6] = children;
            t[7] = y;
        } else {
            y = t[7];
        }
        let C;
        if (t[8] !== u || t[9] !== y) {
            C = <span {...babelHelpers.extends({}, g, {
                children: [
                    y,
                    u
                ]
            })}/>;
            t[8] = u;
            t[9] = y;
            t[10] = C;
        } else {
            C = t[10];
        }
        return C;
    }
    function _(chat) {
        const a = o("useWAWebChatValues").useChatValues(chat.id, [
            o("WAWebFrontendChatGetters").getNewsletterMetadata,
            o("WAWebFrontendChatGetters").getFormattedTitle
        ]);
        const i = a[0];
        const l = a[1];
        const s = o("useWAWebNewsletterMetadataValues").useOptionalNewsletterMetadataValues(i?.id, [
            o("WAWebNewsletterMetadataGetters").getName,
            o("WAWebNewsletterMetadataGetters").getVerified
        ], {
            isStrong: true
        }) ?? [
            null,
            null
        ];
        const u = s[0];
        const c = s[1];
        return u ?? l ?? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletter][NewsletterName] undefined name"
        ]))).tags("newsletter").sendLogs("newsletter-undefined-name"), r("WAWebFbtCommon")("Untitled Channel"));
    }
    l.styles = d;
    l.NewsletterName = MComponent;
}, 226);