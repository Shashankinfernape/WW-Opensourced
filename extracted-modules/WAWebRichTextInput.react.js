__d("WAWebRichTextInput.react", [
    "Lexical",
    "LexicalClearEditorPlugin",
    "LexicalErrorBoundary",
    "LexicalExtensionComposer",
    "LexicalHistoryPlugin",
    "LexicalPlainTextPlugin",
    "WAWebBidiParagraphNode",
    "WAWebCharacterLimitPlugin",
    "WAWebClassnames",
    "WAWebClipboardPlugin",
    "WAWebCometRouterGating",
    "WAWebCopyPasteCopyable.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDebugRichTextInput",
    "WAWebDelimiterNode",
    "WAWebEditorInitialSelectionPlugin.react",
    "WAWebEditorInitialStatePlugin.react",
    "WAWebEditorRefPlugin",
    "WAWebEditorStatePlugin.react",
    "WAWebEmojiNode",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebMentionNode",
    "WAWebMultilinePlugin",
    "WAWebNonJidMentionNode",
    "WAWebNoop",
    "WAWebOnEnterPlugin",
    "WAWebOnKeyDownPlugin",
    "WAWebQuoteLineNode",
    "WAWebRichTextInputContentEditable.react",
    "cr:1009",
    "gkx",
    "one-trace",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebLexicalEvent",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ariaActiveDescendents",
        "children",
        "editorName",
        "enterIsNewLine",
        "initialText",
        "maxCodeUnits",
        "maxLength",
        "maxLineCount",
        "multiline",
        "onBlur",
        "onChange",
        "onClick",
        "onEnter",
        "onFiles",
        "onFocus",
        "onKeyDown",
        "onMaxInputExceeded",
        "onMaxPasteExceeded",
        "onTextPaste",
        "pasteFromHTML",
        "placeholder",
        "placeholderTextXStyle",
        "ref",
        "selectOnMount",
        "showDebugPanel",
        "textXstyle",
        "xstyle"
    ];
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useEffect, useImperativeHandle, useMemo, useRef, useState } = d;
    const h = {
        container: {
            position: "x1n2onr6",
            width: "xh8yej3",
            $$css: true
        }
    };
    const theme = {
        paragraph: o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS, {
            0: "x15bjb6t x1n2onr6",
            1: "x15bjb6t x1n2onr6 xdj266r x14z9mp xat24cr x1lziwak"
        }[!!o("WAWebCometRouterGating").isCometRouterIntegrationEnabled() << 0]),
        text: {
            base: o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, o("WAWebCopyPasteCopyable.react").COPYABLE_CSS_CLASS, "xkrh14z"),
            bold: "x117nqv4",
            italic: "x1k4tb9n",
            strikethrough: "xmqliwb x1t57i5m",
            code: "xldyu6s xgfl6pn x2fkcpg"
        }
    };
    function C(e, t) {
        if (r("gkx")("19206") && t != null && e != null) {
            r("one-trace").trackTypingPerf(t, "WAWebRichTextInput", null, {
                editor: e
            });
        }
    }
    function b(e) {
        if (r("gkx")("19206") && e) {
            r("one-trace").unregisterTypingPerf(e);
        }
    }
    function VComponent(t) {
        const a = o("react-compiler-runtime").c(107);
        let ariaActiveDescendant;
        let l;
        let u;
        let d;
        let initialText;
        let maxCodeUnits;
        let v;
        let maxLineCount;
        let L;
        let E;
        let k;
        let onEnter;
        let onFiles;
        let D;
        let x;
        let onMaxInputExceeded;
        let onMaxPasteExceeded;
        let N;
        let M;
        let w;
        let A;
        let showByDefault;
        let O;
        let B;
        let W;
        let q;
        let U;
        let V;
        if (a[0] !== t) {
            ariaActiveDescendant = t.ariaActiveDescendents;
            l = t.children;
            d = t.editorName;
            O = t.enterIsNewLine;
            initialText = t.initialText;
            maxCodeUnits = t.maxCodeUnits;
            v = t.maxLength;
            maxLineCount = t.maxLineCount;
            B = t.multiline;
            L = t.onBlur;
            E = t.onChange;
            k = t.onClick;
            onEnter = t.onEnter;
            onFiles = t.onFiles;
            D = t.onFocus;
            x = t.onKeyDown;
            onMaxInputExceeded = t.onMaxInputExceeded;
            onMaxPasteExceeded = t.onMaxPasteExceeded;
            N = t.onTextPaste;
            W = t.pasteFromHTML;
            M = t.placeholder;
            w = t.placeholderTextXStyle;
            A = t.ref;
            q = t.selectOnMount;
            showByDefault = t.showDebugPanel;
            U = t.textXstyle;
            V = t.xstyle;
            u = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = ariaActiveDescendant;
            a[2] = l;
            a[3] = u;
            a[4] = d;
            a[5] = initialText;
            a[6] = maxCodeUnits;
            a[7] = v;
            a[8] = maxLineCount;
            a[9] = L;
            a[10] = E;
            a[11] = k;
            a[12] = onEnter;
            a[13] = onFiles;
            a[14] = D;
            a[15] = x;
            a[16] = onMaxInputExceeded;
            a[17] = onMaxPasteExceeded;
            a[18] = N;
            a[19] = M;
            a[20] = w;
            a[21] = A;
            a[22] = showByDefault;
            a[23] = O;
            a[24] = B;
            a[25] = W;
            a[26] = q;
            a[27] = U;
            a[28] = V;
        } else {
            ariaActiveDescendant = a[1];
            l = a[2];
            u = a[3];
            d = a[4];
            initialText = a[5];
            maxCodeUnits = a[6];
            v = a[7];
            maxLineCount = a[8];
            L = a[9];
            E = a[10];
            k = a[11];
            onEnter = a[12];
            onFiles = a[13];
            D = a[14];
            x = a[15];
            onMaxInputExceeded = a[16];
            onMaxPasteExceeded = a[17];
            N = a[18];
            M = a[19];
            w = a[20];
            A = a[21];
            showByDefault = a[22];
            O = a[23];
            B = a[24];
            W = a[25];
            q = a[26];
            U = a[27];
            V = a[28];
        }
        const enterIsNewLine = O === undefined ? false : O;
        const multiline = B === undefined ? false : B;
        const z = W === undefined ? false : W;
        const selectAll = q === undefined ? false : q;
        let K;
        if (a[29] === Symbol.for("react.memo_cache_sentinel")) {
            K = o("LexicalHistoryPlugin").createEmptyHistoryState();
            a[29] = K;
        } else {
            K = a[29];
        }
        const externalHistoryState = K;
        const X = useState();
        const Y = X[0];
        const editorRef = X[1];
        const Z = r("useWAWebToggle")(z);
        const pasteFromHTML = Z[0];
        const onTogglePasteFromHTML = Z[1];
        const neRef = useRef(null);
        const reRef = useRef(null);
        let oe;
        if (a[30] !== N) {
            oe = function(t) {
                return !!(N != null && N(t));
            };
            a[30] = N;
            a[31] = oe;
        } else {
            oe = a[31];
        }
        const onTextPaste = oe;
        let ie;
        if (a[32] !== Y) {
            ie = function() {
                return {
                    focus: function() {
                        Y?.focus();
                    },
                    isFocused: function() {
                        return o("WAWebLexicalUtils").isFocused(Y);
                    },
                    blur: function() {
                        if (o("WAWebLexicalUtils").isFocused(Y)) {
                            if (Y != null) {
                                Y.blur();
                            }
                        }
                    },
                    selectAll: function() {
                        if (Y) {
                            o("WAWebLexicalUtils").selectAll(Y);
                        }
                    },
                    replaceSelection: function(t, n) {
                        Y?.update(function() {
                            return o("WAWebLexicalUtils").$insertText(t, n);
                        });
                    },
                    reset: function(t) {
                        if (Y) {
                            o("WAWebLexicalUtils").setTextContent(Y, "", t);
                        }
                    },
                    paste: function({ nativeEvent }) {
                        if (nativeEvent instanceof ClipboardEvent) {
                            if (Y != null) {
                                Y.dispatchCommand(o("Lexical").PASTE_COMMAND, nativeEvent);
                            }
                        }
                    },
                    editor: Y,
                    editorContent: function() {
                        return reRef.current;
                    },
                    isCursorAtStart: function() {
                        if (Y) {
                            return o("WAWebLexicalUtils").isCursorAtStart(Y);
                        }
                        return false;
                    },
                    isCursorAtEnd: function() {
                        if (Y) {
                            return o("WAWebLexicalUtils").isCursorAtEnd(Y);
                        }
                        return false;
                    },
                    getTextContent: function() {
                        if (Y) {
                            return o("WAWebLexicalUtils").getTextContent(Y);
                        }
                        return null;
                    },
                    setTextContent: function(t) {
                        if (!(!Y || o("WAWebLexicalUtils").getTextContent(Y) === t)) {
                            o("WAWebLexicalUtils").setTextContent(Y, t);
                        }
                    }
                };
            };
            a[32] = Y;
            a[33] = ie;
        } else {
            ie = a[33];
        }
        const le = ie;
        let se;
        if (a[34] !== Y) {
            se = [
                Y
            ];
            a[34] = Y;
            a[35] = se;
        } else {
            se = a[35];
        }
        useImperativeHandle(A, le, se);
        let ue;
        if (a[36] !== le) {
            ue = function() {
                if (r("gkx")("16539")) {
                    o("WAWebDebugRichTextInput").setActiveRichTextInputRef(le());
                }
                return false;
            };
            a[36] = le;
            a[37] = ue;
        } else {
            ue = a[37];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(Y, o("Lexical").FOCUS_COMMAND, ue);
        let ce;
        let de;
        if (a[38] !== d || a[39] !== Y) {
            ce = function() {
                const e = Y?.getRootElement();
                if (e != null) {
                    C(d, e);
                }
                return function() {
                    b(e);
                };
            };
            de = [
                Y,
                d
            ];
            a[38] = d;
            a[39] = Y;
            a[40] = ce;
            a[41] = de;
        } else {
            ce = a[40];
            de = a[41];
        }
        useEffect(ce, de);
        const me = useState(S);
        const extension = me[0];
        let _e;
        if (a[42] !== E) {
            _e = function(t, n, r, o) {
                reRef.current = t;
                if (!(r || E == null)) {
                    E(t, n, o);
                }
            };
            a[42] = E;
            a[43] = _e;
        } else {
            _e = a[43];
        }
        const fe = _e;
        let ge;
        if (a[44] !== V) {
            ge = (s || (s = r("stylex")))(h.container, V);
            a[44] = V;
            a[45] = ge;
        } else {
            ge = a[45];
        }
        const he = ge;
        const focusOnMount = selectAll === true ? false : u.focusOnMount;
        let placeholderXstyle;
        if (a[46] !== w || a[47] !== U) {
            placeholderXstyle = [
                U,
                w
            ];
            a[46] = w;
            a[47] = U;
            a[48] = placeholderXstyle;
        } else {
            placeholderXstyle = a[48];
        }
        let be;
        if (a[49] !== ariaActiveDescendant || a[50] !== u || a[51] !== k || a[52] !== M || a[53] !== focusOnMount || a[54] !== placeholderXstyle || a[55] !== U) {
            be = c.jsx(o("LexicalPlainTextPlugin").PlainTextPlugin, {
                contentEditable: c.jsx(o("WAWebRichTextInputContentEditable.react").InputContentEditable, babelHelpers.extends({}, u, {
                    ref: neRef,
                    xstyle: U,
                    focusOnMount,
                    onClick: k,
                    ariaActiveDescendant,
                    placeholder: M,
                    placeholderXstyle
                })),
                ErrorBoundary: o("LexicalErrorBoundary").LexicalErrorBoundary
            });
            a[49] = ariaActiveDescendant;
            a[50] = u;
            a[51] = k;
            a[52] = M;
            a[53] = focusOnMount;
            a[54] = placeholderXstyle;
            a[55] = U;
            a[56] = be;
        } else {
            be = a[56];
        }
        let ve;
        let Se;
        if (a[57] === Symbol.for("react.memo_cache_sentinel")) {
            ve = c.jsx(o("LexicalHistoryPlugin").HistoryPlugin, {
                externalHistoryState
            });
            Se = c.jsx(o("LexicalClearEditorPlugin").ClearEditorPlugin, {});
            a[57] = ve;
            a[58] = Se;
        } else {
            ve = a[57];
            Se = a[58];
        }
        let Re;
        if (a[59] !== pasteFromHTML || a[60] !== showByDefault || a[61] !== onTogglePasteFromHTML) {
            const Component = n("cr:1009");
            Re = n("cr:1009") != null && <Component showByDefault={showByDefault} textFormatEnabled={false} pasteFromHTML={pasteFromHTML} onToggleTextFormat={r("WAWebNoop")} onTogglePasteFromHTML={onTogglePasteFromHTML}/>;
            a[59] = pasteFromHTML;
            a[60] = showByDefault;
            a[61] = onTogglePasteFromHTML;
            a[62] = Re;
        } else {
            Re = a[62];
        }
        let Le;
        if (a[63] !== multiline) {
            Le = c.jsx(o("WAWebMultilinePlugin").MultilinePlugin, {
                multiline
            });
            a[63] = multiline;
            a[64] = Le;
        } else {
            Le = a[64];
        }
        let Ee;
        if (a[65] === Symbol.for("react.memo_cache_sentinel")) {
            Ee = c.jsx(r("WAWebEditorRefPlugin"), {
                editorRef
            });
            a[65] = Ee;
        } else {
            Ee = a[65];
        }
        const ignoreLineBreakOnPaste = !multiline;
        let Ie;
        if (a[66] !== onTextPaste || a[67] !== onFiles || a[68] !== pasteFromHTML || a[69] !== ignoreLineBreakOnPaste) {
            const Component = o("WAWebClipboardPlugin").ClipboardPlugin;
            Ie = <Component onFiles={onFiles} onTextPaste={onTextPaste} ignoreLineBreakOnPaste={ignoreLineBreakOnPaste} pasteFromHTML={pasteFromHTML}/>;
            a[66] = onTextPaste;
            a[67] = onFiles;
            a[68] = pasteFromHTML;
            a[69] = ignoreLineBreakOnPaste;
            a[70] = Ie;
        } else {
            Ie = a[70];
        }
        let Te;
        if (a[71] !== fe || a[72] !== L || a[73] !== D) {
            const Component = r("WAWebEditorStatePlugin.react");
            Te = <Component onChange={fe} onBlur={L} onFocus={D}/>;
            a[71] = fe;
            a[72] = L;
            a[73] = D;
            a[74] = Te;
        } else {
            Te = a[74];
        }
        const willReceiveFocus = !!u.focusOnMount || selectAll;
        let xe;
        if (a[75] !== initialText || a[76] !== willReceiveFocus) {
            xe = c.jsx(r("WAWebEditorInitialStatePlugin.react"), {
                initialText,
                willReceiveFocus
            });
            a[75] = initialText;
            a[76] = willReceiveFocus;
            a[77] = xe;
        } else {
            xe = a[77];
        }
        let $e;
        if (a[78] !== selectAll) {
            $e = c.jsx(r("WAWebEditorInitialSelectionPlugin.react"), {
                selectAll
            });
            a[78] = selectAll;
            a[79] = $e;
        } else {
            $e = a[79];
        }
        let Pe;
        if (a[80] !== maxCodeUnits || a[81] !== v || a[82] !== maxLineCount || a[83] !== onMaxInputExceeded || a[84] !== onMaxPasteExceeded) {
            const Component = o("WAWebCharacterLimitPlugin").CharacterLimitPlugin;
            Pe = (v != null || maxCodeUnits != null) && <Component maxLength={v} maxCodeUnits={maxCodeUnits} onMaxPasteExceeded={onMaxPasteExceeded} onMaxInputExceeded={onMaxInputExceeded} maxLineCount={maxLineCount}/>;
            a[80] = maxCodeUnits;
            a[81] = v;
            a[82] = maxLineCount;
            a[83] = onMaxInputExceeded;
            a[84] = onMaxPasteExceeded;
            a[85] = Pe;
        } else {
            Pe = a[85];
        }
        let Ne;
        if (a[86] !== x) {
            const Component = r("WAWebOnKeyDownPlugin");
            Ne = x && <Component onKeyDown={x}/>;
            a[86] = x;
            a[87] = Ne;
        } else {
            Ne = a[87];
        }
        let Me;
        if (a[88] !== enterIsNewLine || a[89] !== onEnter) {
            const Component = r("WAWebOnEnterPlugin");
            Me = onEnter && <Component onEnter={onEnter} enterIsNewLine={enterIsNewLine}/>;
            a[88] = enterIsNewLine;
            a[89] = onEnter;
            a[90] = Me;
        } else {
            Me = a[90];
        }
        let we;
        if (a[91] !== l || a[92] !== extension || a[93] !== be || a[94] !== Re || a[95] !== Le || a[96] !== Ie || a[97] !== Te || a[98] !== xe || a[99] !== $e || a[100] !== Pe || a[101] !== Ne || a[102] !== Me) {
            const Component = o("LexicalExtensionComposer").LexicalExtensionComposer;
            we = <Component contentEditable={null} extension={extension}>{be}{ve}{Se}{Re}{Le}{Ee}{Ie}{Te}{l}{xe}{$e}{Pe}{Ne}{Me}</Component>;
            a[91] = l;
            a[92] = extension;
            a[93] = be;
            a[94] = Re;
            a[95] = Le;
            a[96] = Ie;
            a[97] = Te;
            a[98] = xe;
            a[99] = $e;
            a[100] = Pe;
            a[101] = Ne;
            a[102] = Me;
            a[103] = we;
        } else {
            we = a[103];
        }
        let Ae;
        if (a[104] !== he || a[105] !== we) {
            Ae = <div className={he}>{we}</div>;
            a[104] = he;
            a[105] = we;
            a[106] = Ae;
        } else {
            Ae = a[106];
        }
        return Ae;
    }
    function S() {
        return o("Lexical").defineExtension({
            name: "[root]",
            namespace: "WAWebRichTextInput",
            nodes: [
                o("WAWebEmojiNode").EmojiNode,
                o("WAWebMentionNode").MentionNode,
                o("WAWebListBulletNode").ListBulletNode,
                o("WAWebListNumberNode").ListNumberNode,
                o("WAWebQuoteLineNode").QuoteLineNode,
                o("WAWebBidiParagraphNode").BidiParagraphNode,
                o("WAWebDelimiterNode").DelimiterNode,
                o("WAWebNonJidMentionNode").NonJidMentionNode,
                {
                    replace: o("Lexical").ParagraphNode,
                    with: R
                }
            ],
            onError: r("WAWebNoop"),
            theme
        });
    }
    function R() {
        return new (o("WAWebBidiParagraphNode")).BidiParagraphNode;
    }
    l.default = VComponent;
}, 98);