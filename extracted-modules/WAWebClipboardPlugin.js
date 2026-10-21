__d("WAWebClipboardPlugin", [
    "Lexical",
    "LexicalComposerContext",
    "Promise",
    "WAWebCopyPasteClipboard",
    "WAWebDataTransfer",
    "WAWebLexicalUtils",
    "asyncToGeneratorRuntime",
    "cr:6842",
    "react-compiler-runtime",
    "useWAWebLexicalEvent",
    "useWAWebStableCallback"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = o("Lexical").createCommand();
    const u = /\r?\n|\r/g;
    function c(t) {
        const a = o("react-compiler-runtime").c(14);
        const { ignoreLineBreakOnPaste, onFiles, onTextPaste, pasteFromHTML } = t;
        const _ = ignoreLineBreakOnPaste === undefined ? false : ignoreLineBreakOnPaste;
        const f = pasteFromHTML === undefined ? false : pasteFromHTML;
        const h = o("LexicalComposerContext").useLexicalComposerContext();
        const y = h[0];
        let C;
        if (a[0] !== y || a[1] !== onFiles || a[2] !== onTextPaste || a[3] !== f) {
            C = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    if (t.clipboardData) {
                        const a = new (r("WAWebDataTransfer"))(t.clipboardData);
                        if (g(a)) {
                            onFiles?.(a);
                            return;
                        }
                        const i = yield (e || (e = n("Promise"))).all([
                            a.getText([
                                o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE
                            ]),
                            a.getText([
                                "text/html"
                            ]),
                            a.getText([
                                "text/plain"
                            ])
                        ]);
                        const u = i[0];
                        const d = i[1];
                        const m = i[2];
                        let p;
                        if (u != null) {
                            p = u;
                        } else if (d != null && f && n("cr:6842")) {
                            p = n("cr:6842")(d);
                        } else if (m != null) {
                            p = m;
                        }
                        if (p != null && onTextPaste?.(p) !== true) {
                            y.dispatchCommand(s, p);
                        }
                    }
                });
                return function(n) {
                    return t.apply(this, arguments);
                };
            })();
            a[0] = y;
            a[1] = onFiles;
            a[2] = onTextPaste;
            a[3] = f;
            a[4] = C;
        } else {
            C = a[4];
        }
        const b = r("useWAWebStableCallback")(C);
        let v;
        if (a[5] !== y || a[6] !== _) {
            v = function(t) {
                let e;
                if (_) {
                    e = [
                        t.replace(u, "")
                    ];
                } else {
                    e = t.split(u);
                }
                y.update(function() {
                    const t = o("WAWebLexicalUtils").$getRangeSelection();
                    if (t) {
                        if (!t.isCollapsed()) {
                            t.removeText();
                        }
                        e.forEach((e, n)=>{
                            const r = n === 0;
                            if (!r) {
                                t.insertParagraph();
                            }
                            t.insertText(e);
                        });
                    }
                });
            };
            a[5] = y;
            a[6] = _;
            a[7] = v;
        } else {
            v = a[7];
        }
        const S = r("useWAWebStableCallback")(v);
        let R;
        if (a[8] !== y) {
            R = function(t) {
                if (t instanceof ClipboardEvent) {
                    t.preventDefault();
                    t.stopPropagation();
                    d(t);
                    m(y);
                    return true;
                }
                return false;
            };
            a[8] = y;
            a[9] = R;
        } else {
            R = a[9];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(y, o("Lexical").CUT_COMMAND, R);
        let L;
        if (a[10] !== b) {
            L = function(t) {
                b(t);
                return true;
            };
            a[10] = b;
            a[11] = L;
        } else {
            L = a[11];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(y, o("Lexical").PASTE_COMMAND, L);
        let E;
        if (a[12] !== S) {
            E = function(t) {
                S(t);
                return true;
            };
            a[12] = S;
            a[13] = E;
        } else {
            E = a[13];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(y, s, E);
        return null;
    }
    function d({ clipboardData, currentTarget }) {
        if (!(!(currentTarget instanceof HTMLElement) || !clipboardData)) {
            const r = o("WAWebCopyPasteClipboard").Clipboard.fromSelection(currentTarget, window.getSelection());
            clipboardData.setData("text/plain", r.toPlainString());
            try {
                clipboardData.setData(o("WAWebCopyPasteClipboard").APP_TEXT_MIMETYPE, r.toAppString());
            } catch (e) {}
        }
    }
    function m(e) {
        e.update(function(e) {
            const t = o("WAWebLexicalUtils").$getRangeSelection();
            if (t) {
                t.removeText();
            }
        });
    }
    const p = "urn:schemas-microsoft-com:office";
    const _ = "urn:schemas-microsoft-com:office:excel";
    const f = "<meta name=ProgId content=PowerPoint.Slide>";
    function g(e) {
        if (!e.hasFiles()) {
            return false;
        }
        if (e.hasType("text/html")) {
            const t = e.getData("text/html");
            if (t) {
                const n = t.includes(f);
                if (n) {
                    return false;
                }
                const r = t.includes(p);
                const o = t.includes(_);
                if (r && !o) {
                    return false;
                }
            }
        }
        return true;
    }
    l.PASTE_TEXT_COMMAND = s;
    l.ClipboardPlugin = c;
}, 98);