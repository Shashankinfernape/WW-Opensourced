__d("WAWebEmojiPickerPlugin", [
    "LexicalComposerContext",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiKeywordToUnicode",
    "WAWebEmojiVariantCollection",
    "WAWebLexicalTypeAheadRow.react",
    "WAWebRecentEmojiCollection",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebLexicalTypeAhead"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useMemo = s.useMemo;
    const d = {
        marginInline5: {
            marginInlineStart: "xpcyujq",
            marginInlineEnd: "xf6vk7d",
            marginLeft: null,
            marginRight: null,
            $$css: true
        },
        padding5: {
            paddingTop: "x123j3cw",
            paddingInlineEnd: "x1gabggj",
            paddingBottom: "xs9asl8",
            paddingInlineStart: "xaso8d8",
            $$css: true
        }
    };
    const m = ":";
    const minQueryLength = 2;
    const maxQueryLength = 50;
    const itemHeight = 32;
    const g = 10;
    const itemWidth = itemHeight + g * 2;
    const y = {
        focused: {
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            boxShadow: "x1r02ubn",
            backgroundColor: "x1abdmlv",
            $$css: true
        }
    };
    function C(e) {
        if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
            return o("WAWebEmojiVariantCollection").EmojiVariantCollection.getVariant(e);
        }
        return null;
    }
    function BComponent() {
        const t = o("react-compiler-runtime").c(17);
        const n = o("LexicalComposerContext").useLexicalComposerContext();
        const a = n[0];
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                minQueryLength,
                maxQueryLength,
                boundary: true
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebLexicalTypeAhead").useTypeAhead(a, m, i);
        const { leadOffset, omitQuery, query, replaceQuery } = l;
        let v;
        e: {
            if (query == null) {
                let S;
                if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                    S = [];
                    t[1] = S;
                } else {
                    S = t[1];
                }
                v = S;
                break e;
            }
            let R;
            if (t[2] !== query) {
                R = o("WAWebEmojiKeywordToUnicode").emojiKeywordToUnicodeSearch(query);
                t[2] = query;
                t[3] = R;
            } else {
                R = t[3];
            }
            v = R;
        }
        const L = v;
        let E;
        if (t[4] !== replaceQuery) {
            E = function(t) {
                o("WAWebRecentEmojiCollection").RecentEmojiCollection.increment(t);
                replaceQuery(t);
            };
            t[4] = replaceQuery;
            t[5] = E;
        } else {
            E = t[5];
        }
        const k = E;
        let I;
        if (t[6] !== omitQuery) {
            I = function() {
                omitQuery();
            };
            t[6] = omitQuery;
            t[7] = I;
        } else {
            I = t[7];
        }
        const T = I;
        let D;
        if (t[8] !== L || t[9] !== k) {
            let x;
            if (t[11] !== k) {
                x = function(n, o) {
                    return {
                        renderFn: function(a) {
                            const t = C(n);
                            const i = [
                                d.marginInline5,
                                d.padding5
                            ];
                            if (a) {
                                i.push(y.focused);
                            }
                            return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(i), {
                                children: u.jsx(r("WAWebEmoji.react"), {
                                    element: "span",
                                    emoji: t ?? n,
                                    size: "large",
                                    "data-unicode": n,
                                    "data-variant": t,
                                    tabIndex: -1,
                                    "data-emoji-index": o
                                }, n)
                            })}/>;
                        },
                        onSelect: function() {
                            const e = C(n);
                            return k(e ?? n);
                        },
                        skipKeyboardNav: false,
                        ariaLabel: n
                    };
                };
                t[11] = k;
                t[12] = x;
            } else {
                x = t[12];
            }
            D = L.map(x);
            t[8] = L;
            t[9] = k;
            t[10] = D;
        } else {
            D = t[10];
        }
        const items = D;
        let P;
        if (t[13] !== T || t[14] !== items || t[15] !== leadOffset) {
            const Component = r("WAWebLexicalTypeAheadRow.react");
            P = <Component items={items} itemWidth={itemWidth} itemHeight={itemHeight} leadOffset={leadOffset} onCancel={T}/>;
            t[13] = T;
            t[14] = items;
            t[15] = leadOffset;
            t[16] = P;
        } else {
            P = t[16];
        }
        return P;
    }
    l.default = BComponent;
}, 98);