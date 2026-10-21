__d("WAWebWDSRichTextField.react", [
    "fbt",
    "LexicalComposerContext",
    "WAWebEmojiNode",
    "WAWebEmojiPickerPlugin",
    "WAWebEmojisPlugin.react",
    "WAWebL10N",
    "WDSRichTextField.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebTextFieldEmojiPicker"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    const u = [
        "children",
        "emoji",
        "nodes",
        "characterCountRenderer",
        "tabOrder"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useEffect, useMemo } = m;
    function f(e, t) {
        const n = r("WAWebL10N").n(e);
        const o = r("WAWebL10N").n(t);
        return s._("{current-count}\/{max-count}", [
            s._param("current-count", n),
            s._param("max-count", o)
        ]);
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function GComponent(t) {
        const c = o("react-compiler-runtime").c(39);
        let m;
        let p;
        if (c[0] !== t) {
            p = t.ref;
            m = babelHelpers.objectWithoutPropertiesLoose(t, e);
            c[0] = t;
            c[1] = m;
            c[2] = p;
        } else {
            m = c[1];
            p = c[2];
        }
        let _;
        let g;
        let y;
        let C;
        let b;
        let tabOrder;
        if (c[3] !== m) {
            const S = m;
            _ = S.children;
            g = S.emoji;
            y = S.nodes;
            b = S.characterCountRenderer;
            tabOrder = S.tabOrder;
            C = babelHelpers.objectWithoutPropertiesLoose(S, u);
            c[3] = m;
            c[4] = _;
            c[5] = g;
            c[6] = y;
            c[7] = C;
            c[8] = b;
            c[9] = tabOrder;
        } else {
            _ = c[4];
            g = c[5];
            y = c[6];
            C = c[7];
            b = c[8];
            tabOrder = c[9];
        }
        const characterCountRenderer = b === undefined ? f : b;
        const emojiPickerAriaLabel = g?.picker?.ariaLabel;
        let E;
        if (c[10] !== emojiPickerAriaLabel) {
            E = {
                emojiPickerAriaLabel
            };
            c[10] = emojiPickerAriaLabel;
            c[11] = E;
        } else {
            E = c[11];
        }
        const k = r("useWAWebTextFieldEmojiPicker")(E);
        const { emojiPicker, enableEmojiPicker, openEmojiPicker, richTextFieldRef } = k;
        const $ = r("useMergeRefs")(richTextFieldRef, p ?? null);
        const P = g != null && (g.display === true || g.picker != null || g.keyboardShortcut === true);
        let N;
        e: {
            if (!P) {
                N = y;
                break e;
            }
            let M;
            if (c[12] !== y) {
                M = y ?? [];
                c[12] = y;
                c[13] = M;
            } else {
                M = c[13];
            }
            const w = M;
            let A;
            if (c[14] !== w) {
                A = w.includes(o("WAWebEmojiNode").EmojiNode) ? w : [
                    o("WAWebEmojiNode").EmojiNode
                ].concat(w);
                c[14] = w;
                c[15] = A;
            } else {
                A = c[15];
            }
            N = A;
        }
        const nodes = N;
        let O;
        if (c[16] !== enableEmojiPicker || c[17] !== openEmojiPicker || c[18] !== emojiPickerAriaLabel) {
            O = emojiPickerAriaLabel != null ? {
                emojiPickerAriaLabel,
                isEmojiPickerOpen: enableEmojiPicker.isEmojiPickerOpen,
                onEmojiPress: openEmojiPicker
            } : undefined;
            c[16] = enableEmojiPicker;
            c[17] = openEmojiPicker;
            c[18] = emojiPickerAriaLabel;
            c[19] = O;
        } else {
            O = c[19];
        }
        const B = O;
        let W;
        if (c[20] !== g?.emojiSize || c[21] !== g?.keyboardShortcut || c[22] !== g?.transformTextEmoji || c[23] !== P) {
            W = P ? <>{d.jsx(r("WAWebEmojisPlugin.react"), {
                transformTextEmoji: g?.transformTextEmoji ?? true,
                emojiSize: g?.emojiSize
            })}{g?.keyboardShortcut === true ? d.jsx(r("WAWebEmojiPickerPlugin"), {}) : null}</> : null;
            c[20] = g?.emojiSize;
            c[21] = g?.keyboardShortcut;
            c[22] = g?.transformTextEmoji;
            c[23] = P;
            c[24] = W;
        } else {
            W = c[24];
        }
        const K = W;
        let Q;
        if (c[25] !== tabOrder) {
            Q = tabOrder != null ? <H2Component tabOrder={tabOrder}/> : null;
            c[25] = tabOrder;
            c[26] = Q;
        } else {
            Q = c[26];
        }
        let X;
        if (c[27] !== characterCountRenderer || c[28] !== _ || c[29] !== K || c[30] !== nodes || c[31] !== $ || c[32] !== B || c[33] !== C || c[34] !== Q) {
            X = d.jsxs(r("WDSRichTextField.react"), babelHelpers.extends({
                ref: $
            }, C, {
                characterCountRenderer,
                nodes,
                enableEmojiPicker: B,
                children: [
                    Q,
                    K,
                    _
                ]
            }));
            c[27] = characterCountRenderer;
            c[28] = _;
            c[29] = K;
            c[30] = nodes;
            c[31] = $;
            c[32] = B;
            c[33] = C;
            c[34] = Q;
            c[35] = X;
        } else {
            X = c[35];
        }
        const Y = g?.picker != null ? emojiPicker : null;
        let J;
        if (c[36] !== X || c[37] !== Y) {
            J = <>{X}{Y}</>;
            c[36] = X;
            c[37] = Y;
            c[38] = J;
        } else {
            J = c[38];
        }
        return J;
    }
    function H2Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_tabOrder = e.tabOrder;
        const r = o("LexicalComposerContext").useLexicalComposerContext();
        const a = r[0];
        let i;
        let l;
        if (t[0] !== a || t[1] !== e_tabOrder) {
            i = function() {
                return a.registerRootListener(function(e, t) {
                    t?.removeAttribute("data-tab");
                    e?.setAttribute("data-tab", String(e_tabOrder));
                });
            };
            l = [
                a,
                e_tabOrder
            ];
            t[0] = a;
            t[1] = e_tabOrder;
            t[2] = i;
            t[3] = l;
        } else {
            i = t[2];
            l = t[3];
        }
        useEffect(i, l);
        return null;
    }
    l.default = GComponent;
}, 226);