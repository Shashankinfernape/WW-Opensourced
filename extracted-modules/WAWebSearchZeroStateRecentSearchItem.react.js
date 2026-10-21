__d("WAWebSearchZeroStateRecentSearchItem.react", [
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataGetters",
    "WAWebParticipantListUtils",
    "WAWebPrivacyBlurWrapper.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useImperativeHandle, useRef } = c;
    const _ = {
        container: {
            display: "x78zum5",
            flexDirection: "xdt5ytf",
            alignItems: "x6s0dn4",
            rowGap: "x1qvou4u",
            width: "xh8yej3",
            maxWidth: "xazcve0",
            cursor: "x1ypdohk",
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            backgroundColor: "xjbqb8w",
            ":hover_backgroundColor": "x1ubxc9n",
            $$css: true
        },
        avatarImage: {
            width: "xh8yej3",
            height: "x5yr21d",
            $$css: true
        }
    };
    function f(t) {
        const n = o("react-compiler-runtime").c(29);
        const { chat, onClick, onFocus, ref, tabIndex } = t;
        const dRef = useRef(null);
        let f;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            f = function() {
                return {
                    focus: function() {
                        dRef.current?.focus({
                            focusVisible: true
                        });
                    }
                };
            };
            n[0] = f;
        } else {
            f = n[0];
        }
        useImperativeHandle(ref, f);
        let g;
        if (n[1] !== onClick) {
            g = function(t) {
                t.preventDefault();
                onClick();
            };
            n[1] = onClick;
            n[2] = g;
        } else {
            g = n[2];
        }
        const h = g;
        let y;
        if (n[3] !== onClick) {
            y = function(t) {
                if (t.key === "Enter" || t.key === " ") {
                    t.preventDefault();
                    onClick();
                }
            };
            n[3] = onClick;
            n[4] = y;
        } else {
            y = n[4];
        }
        const C = y;
        const { contact, groupMetadata } = chat;
        let S;
        if (groupMetadata != null && o("WAWebGroupMetadataGetters").getIsUnnamed(groupMetadata)) {
            let R;
            if (n[5] !== groupMetadata) {
                R = o("WAWebParticipantListUtils").calculateUnnamedGroupFullParticipantsList(groupMetadata, true);
                n[5] = groupMetadata;
                n[6] = R;
            } else {
                R = n[6];
            }
            S = R;
        } else if (contact != null) {
            let L;
            if (n[7] !== contact) {
                L = o("WAWebFrontendContactGetters").getFormattedName(contact);
                n[7] = contact;
                n[8] = L;
            } else {
                L = n[8];
            }
            S = L;
        } else {
            S = chat.name ?? "";
        }
        let k;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            k = (e || (e = r("stylex"))).props(_.container, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus);
            n[9] = k;
        } else {
            k = n[9];
        }
        let I;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "xh8yej3 x1nb3phe x1plog1 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 x1n2onr6"
            };
            n[10] = I;
        } else {
            I = n[10];
        }
        let T;
        if (n[11] !== chat.id) {
            T = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                customDimensionsStyle: true,
                id: chat.id,
                loadPicture: true,
                size: 48,
                waitIdle: false,
                xstyle: _.avatarImage
            });
            n[11] = chat.id;
            n[12] = T;
        } else {
            T = n[12];
        }
        let D;
        if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
            D = <div className="x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1c9tyrk xeusxvb x1pahc9y x1ertn4p xt8cgyo x128c8uf x1co6499 xc5fred x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x47corl"/>;
            n[13] = D;
        } else {
            D = n[13];
        }
        let x;
        if (n[14] !== T) {
            x = <div {...babelHelpers.extends({}, I, {
                children: [
                    T,
                    D
                ]
            })}/>;
            n[14] = T;
            n[15] = x;
        } else {
            x = n[15];
        }
        let $;
        if (n[16] === Symbol.for("react.memo_cache_sentinel")) {
            $ = {
                className: "x1pg5gke x1d3mw78 xhslqc4 x2b8uid xh8yej3 xazcve0 x6ikm8r x10wlt62 x104kibb x1h7i4cw x1ua5tub x13faqbe x21xpn4"
            };
            n[16] = $;
        } else {
            $ = n[16];
        }
        let P;
        if (n[17] !== S) {
            P = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: S
            });
            n[17] = S;
            n[18] = P;
        } else {
            P = n[18];
        }
        let N;
        if (n[19] !== S || n[20] !== P) {
            N = <span {...babelHelpers.extends({}, $, {
                title: S,
                children: P
            })}/>;
            n[19] = S;
            n[20] = P;
            n[21] = N;
        } else {
            N = n[21];
        }
        let M;
        if (n[22] !== C || n[23] !== h || n[24] !== onFocus || n[25] !== N || n[26] !== x || n[27] !== tabIndex) {
            const Component = r("WAWebPrivacyBlurWrapper.react");
            M = <Component containerRef={dRef}><button {...babelHelpers.extends({}, k, {
                ref: dRef,
                onMouseDown: h,
                onKeyDown: C,
                onFocus,
                tabIndex,
                "data-testid": "recent-search-item",
                children: [
                    x,
                    N
                ]
            })}/></Component>;
            n[22] = C;
            n[23] = h;
            n[24] = onFocus;
            n[25] = N;
            n[26] = x;
            n[27] = tabIndex;
            n[28] = M;
        } else {
            M = n[28];
        }
        return M;
    }
    l.default = f;
}, 98);