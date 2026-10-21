__d("WAWebFloatingToolbarPlugin.react", [
    "fbt",
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "ReactDOM",
    "WALogger",
    "WAWebABProps",
    "WAWebActions",
    "WAWebL10N",
    "WAWebLexicalUtils",
    "WAWebPopover.react",
    "WAWebPortalThemeWrapper.react",
    "WAWebTextFormatUtils",
    "WDSIconIcCode.react",
    "WDSIconIcFormatBold.react",
    "WDSIconIcFormatItalic.react",
    "WDSIconIcFormatListBulleted.react",
    "WDSIconIcFormatListNumbered.react",
    "WDSIconIcFormatQuote.react",
    "WDSIconIcFormatStrikethrough.react",
    "WDSIconIcHidden.react",
    "WDSMenu.react",
    "WDSMenuBarItem.react",
    "clamp",
    "react",
    "react-compiler-runtime",
    "useLexicalEditable"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = [
        "isText"
    ];
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useEffect, useRef, useState } = m;
    const h = 8;
    const y = 10;
    function C(e, rootElem) {
        const n = e.getRangeAt(0);
        let r;
        if (e.anchorNode === rootElem) {
            for(var o = rootElem; o.firstElementChild instanceof HTMLElement;){
                o = o.firstElementChild;
            }
            r = o.getBoundingClientRect();
        } else {
            r = n.getBoundingClientRect();
        }
        return r;
    }
    function b({ anchorElem, floatingElem, rootElem, targetRect }) {
        const anchorElem_parentElement = anchorElem.parentElement;
        if (targetRect == null || !anchorElem_parentElement) {
            floatingElem.style.opacity = "0";
            floatingElem.style.transform = "translate(-10000px, -10000px)";
            return;
        }
        const l = floatingElem.getBoundingClientRect();
        const s = anchorElem.getBoundingClientRect();
        const u = rootElem.getBoundingClientRect();
        const c = anchorElem_parentElement.getBoundingClientRect();
        let d = targetRect.top - l.height - y;
        d -= s.top;
        const m = u.top - l.height - y;
        const p = u.bottom - l.height;
        d = r("clamp")(d, m, p);
        let _ = 0;
        if (r("WAWebL10N").isRTL()) {
            const g = -(window.innerWidth - l.width - h * 2);
            const C = 0;
            _ = -(window.innerWidth - targetRect.right - h * 2);
            _ = r("clamp")(_, g, C);
        } else {
            _ = targetRect.left - h;
            const f = c.right - l.width - h;
            _ = Math.min(f, _);
            _ -= s.left;
        }
        floatingElem.style.opacity = "1";
        floatingElem.style.transform = `translate(${_}px, ${d}px)`;
    }
    function useV(RRef) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        let r;
        if (t[0] !== RRef) {
            n = function() {
                if (RRef.current != null) {
                    const t = function(n) {
                        const e_current = RRef.current;
                        if (e_current != null && (n.buttons === 1 || n.buttons === 3) && e_current.style.pointerEvents !== "none") {
                            const r = document.elementFromPoint(n.clientX, n.clientY);
                            if (!e_current.contains(r)) {
                                e_current.style.pointerEvents = "none";
                            }
                        }
                    };
                    const n = function() {
                        const e_current = RRef.current;
                        if (e_current != null && e_current.style.pointerEvents !== "auto") {
                            e_current.style.pointerEvents = "auto";
                        }
                    };
                    document.addEventListener("mousemove", t);
                    document.addEventListener("mouseup", n);
                    return function() {
                        document.removeEventListener("mousemove", t);
                        document.removeEventListener("mouseup", n);
                    };
                }
            };
            r = [
                RRef
            ];
            t[0] = RRef;
            t[1] = n;
            t[2] = r;
        } else {
            n = t[1];
            r = t[2];
        }
        useEffect(n, r);
    }
    function SComponent(e) {
        const n = o("react-compiler-runtime").c(37);
        const { anchorElem, blockQuoteAction, boldAction, bulletedListAction, codeAction, editor, inlineCodeAction, italicAction, numberedListAction, spoilerAction, strikethroughAction } = e;
        const RRef = useRef(null);
        const LRef = useRef(true);
        let E;
        if (n[0] !== editor) {
            E = editor.getRootElement();
            n[0] = editor;
            n[1] = E;
        } else {
            E = n[1];
        }
        const rootElem = E;
        useV(RRef);
        let I;
        if (n[2] !== anchorElem || n[3] !== rootElem) {
            I = function() {
                const e = o("Lexical").$getSelection();
                const RRef_current = RRef.current;
                const n = window.getSelection();
                if (RRef_current != null && e != null && n != null && !n.isCollapsed && rootElem != null && rootElem.contains(n.anchorNode)) {
                    const targetRect = C(n, rootElem);
                    b({
                        anchorElem,
                        floatingElem: RRef_current,
                        rootElem,
                        targetRect
                    });
                }
            };
            n[2] = anchorElem;
            n[3] = rootElem;
            n[4] = I;
        } else {
            I = n[4];
        }
        const T = I;
        let D;
        if (n[5] !== T || n[6] !== anchorElem.parentElement || n[7] !== editor || n[8] !== rootElem) {
            D = function() {
                const anchorElem_parentElement = anchorElem.parentElement;
                const t = function() {
                    editor.update(function() {
                        T();
                    });
                };
                window.addEventListener("resize", t);
                anchorElem_parentElement?.addEventListener("scroll", t);
                rootElem?.addEventListener("scroll", t);
                return function() {
                    window.removeEventListener("resize", t);
                    anchorElem_parentElement?.removeEventListener("scroll", t);
                    rootElem?.removeEventListener("scroll", t);
                };
            };
            n[5] = T;
            n[6] = anchorElem.parentElement;
            n[7] = editor;
            n[8] = rootElem;
            n[9] = D;
        } else {
            D = n[9];
        }
        let x;
        if (n[10] !== T || n[11] !== anchorElem || n[12] !== editor || n[13] !== rootElem) {
            x = [
                editor,
                T,
                anchorElem,
                rootElem
            ];
            n[10] = T;
            n[11] = anchorElem;
            n[12] = editor;
            n[13] = rootElem;
            n[14] = x;
        } else {
            x = n[14];
        }
        useEffect(D, x);
        let $;
        let P;
        if (n[15] !== T || n[16] !== editor) {
            $ = function() {
                editor.getEditorState().read(function() {
                    T();
                });
                return editor.registerCommand(o("Lexical").SELECTION_CHANGE_COMMAND, function() {
                    if (LRef.current) {
                        T();
                    }
                    return false;
                }, o("Lexical").COMMAND_PRIORITY_LOW);
            };
            P = [
                editor,
                T
            ];
            n[15] = T;
            n[16] = editor;
            n[17] = $;
            n[18] = P;
        } else {
            $ = n[17];
            P = n[18];
        }
        useEffect($, P);
        let N;
        if (n[19] !== editor) {
            N = function(n) {
                editor.update(function() {
                    LRef.current = false;
                    o("WAWebTextFormatUtils").$toggleTextFormat(n);
                    t.setTimeout(function() {
                        LRef.current = true;
                    }, 50);
                });
            };
            n[19] = editor;
            n[20] = N;
        } else {
            N = n[20];
        }
        const M = N;
        const w = inlineCodeAction == null || inlineCodeAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip && codeAction !== o("WAWebTextFormatUtils").TextFormatActionType.Skip;
        const A = o("useLexicalEditable").useLexicalEditable();
        let F;
        if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
            F = {
                className: "x10l6tqk x13vifvy x1o0tod xg01cxk x19991ni x1wsgiic x1so62im x1oy9qf3"
            };
            n[21] = F;
        } else {
            F = n[21];
        }
        let O;
        if (n[22] !== blockQuoteAction || n[23] !== boldAction || n[24] !== bulletedListAction || n[25] !== codeAction || n[26] !== M || n[27] !== inlineCodeAction || n[28] !== A || n[29] !== italicAction || n[30] !== numberedListAction || n[31] !== w || n[32] !== spoilerAction || n[33] !== strikethroughAction) {
            const Component = r("WDSMenuBarItem.react");
            const Component_1 = r("WDSMenuBarItem.react");
            const Component_2 = r("WDSMenuBarItem.react");
            const Component_3 = r("WDSMenuBarItem.react");
            const Component_4 = r("WDSMenuBarItem.react");
            const Component_5 = r("WDSMenuBarItem.react");
            const Component_6 = r("WDSMenuBarItem.react");
            const Component_7 = r("WDSMenuBarItem.react");
            const Component_8 = r("WDSMenuBarItem.react");
            const Component_9 = r("WDSMenu.react");
            O = A && <Component_9 isHorizontalMenu><div className="x78zum5 x1q0g3np x6s0dn4 x46w9ns"><Component icon={r("WDSIconIcFormatBold.react")} disabled={boldAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={boldAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.Bold);
            }} title={s._("Bold")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_BOLD}/><Component_1 icon={r("WDSIconIcFormatItalic.react")} disabled={italicAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={italicAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.Italic);
            }} title={s._("Italic")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_ITALIC}/><Component_2 icon={r("WDSIconIcFormatStrikethrough.react")} disabled={strikethroughAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={strikethroughAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.Strikethrough);
            }} title={s._("Strikethrough")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_STRIKETHROUGH}/>{spoilerAction != null && <Component_3 icon={r("WDSIconIcHidden.react")} disabled={spoilerAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={spoilerAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.Spoiler);
            }} title={s._("Spoiler")}/>}{w && <Component_4 icon={r("WDSIconIcCode.react")} disabled={codeAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={codeAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.Code);
            }} title={s._("Monospace")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_CODE}/>}{inlineCodeAction != null && !w && <Component_5 icon={r("WDSIconIcCode.react")} disabled={inlineCodeAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={inlineCodeAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.InlineCode);
            }} title={s._("Inline code")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_INLINE_CODE}/>}{numberedListAction != null && <Component_6 icon={r("WDSIconIcFormatListNumbered.react")} disabled={numberedListAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={numberedListAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.NumberedList);
            }} title={s._("Numbered list")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_NUMBERED_LIST}/>}{bulletedListAction != null && <Component_7 icon={r("WDSIconIcFormatListBulleted.react")} disabled={bulletedListAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={bulletedListAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.BulletedList);
            }} title={s._("Bulleted list")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_BULLETED_LIST}/>}{blockQuoteAction != null && <Component_8 icon={r("WDSIconIcFormatQuote.react")} disabled={blockQuoteAction === o("WAWebTextFormatUtils").TextFormatActionType.Skip} buttonVariant={blockQuoteAction === o("WAWebTextFormatUtils").TextFormatActionType.Remove ? "tonal" : "borderless"} buttonSize="small" onClick={function() {
                return M(o("WAWebTextFormatUtils").TextFormatType.Quote);
            }} title={s._("Quote")} keyboardShortcutAction={o("WAWebActions").Action.TOGGLE_QUOTE}/>}</div></Component_9>;
            n[22] = blockQuoteAction;
            n[23] = boldAction;
            n[24] = bulletedListAction;
            n[25] = codeAction;
            n[26] = M;
            n[27] = inlineCodeAction;
            n[28] = A;
            n[29] = italicAction;
            n[30] = numberedListAction;
            n[31] = w;
            n[32] = spoilerAction;
            n[33] = strikethroughAction;
            n[34] = O;
        } else {
            O = n[34];
        }
        let B;
        if (n[35] !== O) {
            B = <div {...babelHelpers.extends({
                ref: RRef
            }, F, {
                children: O
            })}/>;
            n[35] = O;
            n[36] = B;
        } else {
            B = n[36];
        }
        return B;
    }
    function useR(editor, n) {
        let r;
        const a = o("react-compiler-runtime").c(28);
        const { blockQuoteEnabled, bulletPointsEnabled, inlineCodeEnabled, numberedListEnabled } = n;
        const c = useState(false);
        const isText = c[0];
        const m = c[1];
        const p = useState((r = o("WAWebTextFormatUtils")).TextFormatActionType.Skip);
        const f = p[0];
        const h = p[1];
        const y = useState(r.TextFormatActionType.Skip);
        const C = y[0];
        const b = y[1];
        const v = useState(r.TextFormatActionType.Skip);
        const S = v[0];
        const R = v[1];
        const L = useState(r.TextFormatActionType.Skip);
        const E = L[0];
        const k = L[1];
        const I = useState(r.TextFormatActionType.Skip);
        const T = I[0];
        const D = I[1];
        const x = useState(r.TextFormatActionType.Skip);
        const $ = x[0];
        const P = x[1];
        const N = useState(r.TextFormatActionType.Skip);
        const M = N[0];
        const w = N[1];
        const A = useState(r.TextFormatActionType.Skip);
        const F = A[0];
        const O = A[1];
        const B = useState(r.TextFormatActionType.Skip);
        const W = B[0];
        const q = B[1];
        let U;
        if (a[0] !== blockQuoteEnabled || a[1] !== bulletPointsEnabled || a[2] !== editor || a[3] !== inlineCodeEnabled || a[4] !== numberedListEnabled) {
            U = function() {
                if (editor) {
                    editor.getEditorState().read(function() {
                        if (editor.isComposing()) {
                            m(false);
                            return;
                        }
                        const t = o("WAWebLexicalUtils").$getRangeSelection();
                        const n = window.getSelection();
                        const r = editor.getRootElement();
                        if (n != null && (!t || t.isCollapsed() || r == null || !r.contains(n.anchorNode) || t.getTextContent() === "\n")) {
                            m(false);
                            return;
                        }
                        if (!o("Lexical").$isRangeSelection(t)) {
                            m(false);
                            return;
                        }
                        m(true);
                        const a = o("WAWebTextFormatUtils").$normalizeTextSelection();
                        [
                            [
                                o("WAWebTextFormatUtils").TextFormatType.Bold,
                                h
                            ],
                            [
                                o("WAWebTextFormatUtils").TextFormatType.Italic,
                                b
                            ],
                            [
                                o("WAWebTextFormatUtils").TextFormatType.Strikethrough,
                                R
                            ],
                            [
                                o("WAWebTextFormatUtils").TextFormatType.Spoiler,
                                k
                            ],
                            [
                                o("WAWebTextFormatUtils").TextFormatType.Code,
                                D
                            ],
                            inlineCodeEnabled ? [
                                o("WAWebTextFormatUtils").TextFormatType.InlineCode,
                                P
                            ] : null,
                            numberedListEnabled ? [
                                o("WAWebTextFormatUtils").TextFormatType.NumberedList,
                                w
                            ] : null,
                            bulletPointsEnabled ? [
                                o("WAWebTextFormatUtils").TextFormatType.BulletedList,
                                O
                            ] : null,
                            blockQuoteEnabled ? [
                                o("WAWebTextFormatUtils").TextFormatType.Quote,
                                q
                            ] : null
                        ].filter(Boolean).forEach(([t, n])=>{
                            n(a ? o("WAWebTextFormatUtils").$getTextFormatAction(a, t) : o("WAWebTextFormatUtils").TextFormatActionType.Skip);
                        });
                    });
                }
            };
            a[0] = blockQuoteEnabled;
            a[1] = bulletPointsEnabled;
            a[2] = editor;
            a[3] = inlineCodeEnabled;
            a[4] = numberedListEnabled;
            a[5] = U;
        } else {
            U = a[5];
        }
        const V = U;
        let H;
        let G;
        if (a[6] !== V) {
            H = function() {
                document.addEventListener("selectionchange", V);
                return function() {
                    document.removeEventListener("selectionchange", V);
                };
            };
            G = [
                V
            ];
            a[6] = V;
            a[7] = H;
            a[8] = G;
        } else {
            H = a[7];
            G = a[8];
        }
        useEffect(H, G);
        let z;
        let j;
        if (a[9] !== editor || a[10] !== V) {
            z = function() {
                if (editor) {
                    return o("LexicalUtils").mergeRegister(editor.registerRootListener(function() {
                        if (editor.getRootElement() == null) {
                            m(false);
                        }
                    }), editor.registerUpdateListener(function() {
                        t.setTimeout(V, 0);
                    }));
                }
            };
            j = [
                editor,
                V
            ];
            a[9] = editor;
            a[10] = V;
            a[11] = z;
            a[12] = j;
        } else {
            z = a[11];
            j = a[12];
        }
        useEffect(z, j);
        const boldAction = isText ? f : o("WAWebTextFormatUtils").TextFormatActionType.Skip;
        const italicAction = isText ? C : o("WAWebTextFormatUtils").TextFormatActionType.Skip;
        const strikethroughAction = isText ? S : o("WAWebTextFormatUtils").TextFormatActionType.Skip;
        const spoilerAction = isText ? E : o("WAWebTextFormatUtils").TextFormatActionType.Skip;
        const codeAction = isText ? T : o("WAWebTextFormatUtils").TextFormatActionType.Skip;
        let Z;
        if (a[13] !== W || a[14] !== blockQuoteEnabled || a[15] !== bulletPointsEnabled || a[16] !== F || a[17] !== $ || a[18] !== inlineCodeEnabled || a[19] !== isText || a[20] !== M || a[21] !== numberedListEnabled || a[22] !== codeAction || a[23] !== boldAction || a[24] !== italicAction || a[25] !== strikethroughAction || a[26] !== spoilerAction) {
            Z = {
                isText,
                boldAction,
                italicAction,
                strikethroughAction,
                spoilerAction,
                codeAction,
                inlineCodeAction: null,
                numberedListAction: null,
                bulletedListAction: null,
                blockQuoteAction: null
            };
            if (inlineCodeEnabled) {
                Z.inlineCodeAction = isText ? $ : o("WAWebTextFormatUtils").TextFormatActionType.Skip;
            }
            if (numberedListEnabled) {
                Z.numberedListAction = M;
            }
            if (bulletPointsEnabled) {
                Z.bulletedListAction = F;
            }
            if (blockQuoteEnabled) {
                Z.blockQuoteAction = W;
            }
            a[13] = W;
            a[14] = blockQuoteEnabled;
            a[15] = bulletPointsEnabled;
            a[16] = F;
            a[17] = $;
            a[18] = inlineCodeEnabled;
            a[19] = isText;
            a[20] = M;
            a[21] = numberedListEnabled;
            a[22] = codeAction;
            a[23] = boldAction;
            a[24] = italicAction;
            a[25] = strikethroughAction;
            a[26] = spoilerAction;
            a[27] = Z;
        } else {
            Z = a[27];
        }
        return Z;
    }
    function LComponent(t) {
        const n = o("react-compiler-runtime").c(17);
        const { blockQuoteEnabled, bulletPointsEnabled, inlineCodeEnabled, numberedListEnabled } = t;
        const c = o("LexicalComposerContext").useLexicalComposerContext();
        const editor = c[0];
        let p;
        if (n[0] !== blockQuoteEnabled || n[1] !== bulletPointsEnabled || n[2] !== inlineCodeEnabled || n[3] !== numberedListEnabled) {
            p = {
                bulletPointsEnabled,
                numberedListEnabled,
                inlineCodeEnabled,
                blockQuoteEnabled
            };
            n[0] = blockQuoteEnabled;
            n[1] = bulletPointsEnabled;
            n[2] = inlineCodeEnabled;
            n[3] = numberedListEnabled;
            n[4] = p;
        } else {
            p = n[4];
        }
        const _ = useR(editor, p);
        let f;
        let anchorElem;
        let h;
        if (n[5] !== _) {
            h = Symbol.for("react.early_return_sentinel");
            e: {
                const y = _.isText;
                const C = babelHelpers.objectWithoutPropertiesLoose(_, u);
                f = C;
                let b;
                if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
                    b = document.getElementById(o("WAWebPopover.react").ANCHOR_PORTAL_ID);
                    n[9] = b;
                } else {
                    b = n[9];
                }
                anchorElem = b;
                if (anchorElem == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[FloatingToolbarPlugin] anchor elem not found"
                    ])));
                    h = null;
                    break e;
                }
                if (!y) {
                    h = null;
                    break e;
                }
                if (!o("WAWebABProps").getABPropConfigValue("is_spoiler_rich_format_sender_enabled")) {
                    f.spoilerAction = null;
                }
            }
            n[5] = _;
            n[6] = f;
            n[7] = anchorElem;
            n[8] = h;
        } else {
            f = n[6];
            anchorElem = n[7];
            h = n[8];
        }
        if (h !== Symbol.for("react.early_return_sentinel")) {
            return h;
        }
        let v;
        if (n[10] !== f || n[11] !== anchorElem || n[12] !== editor) {
            const Component = r("WAWebPortalThemeWrapper.react");
            v = <Component><SComponent {...babelHelpers.extends({
                editor,
                anchorElem
            }, f)}/></Component>;
            n[10] = f;
            n[11] = anchorElem;
            n[12] = editor;
            n[13] = v;
        } else {
            v = n[13];
        }
        let L;
        if (n[14] !== anchorElem || n[15] !== v) {
            L = o("ReactDOM").createPortal(v, anchorElem);
            n[14] = anchorElem;
            n[15] = v;
            n[16] = L;
        } else {
            L = n[16];
        }
        return L;
    }
    l.FloatingToolbarPlugin = LComponent;
}, 226);