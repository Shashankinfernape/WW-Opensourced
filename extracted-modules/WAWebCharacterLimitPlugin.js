__d("WAWebCharacterLimitPlugin", [
    "Lexical",
    "LexicalComposerContext",
    "LexicalUtils",
    "WAUnicodeUtils",
    "WAWebClipboardPlugin",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(12);
        const { maxCodeUnits, maxLength, maxLineCount, onMaxInputExceeded, onMaxPasteExceeded } = e;
        const u = o("LexicalComposerContext").useLexicalComposerContext();
        const p = u[0];
        let _;
        let f;
        if (t[0] !== p || t[1] !== maxCodeUnits || t[2] !== maxLength || t[3] !== maxLineCount || t[4] !== onMaxInputExceeded) {
            _ = function() {
                if (!(maxLength == null && maxCodeUnits == null)) {
                    return p.registerNodeTransform(o("Lexical").RootNode, function(e) {
                        const t = o("Lexical").$getSelection();
                        if (!(!o("Lexical").$isRangeSelection(t) || !t.isCollapsed())) {
                            const l = p.getEditorState();
                            const s = l.read(function() {
                                return e.getTextContent();
                            });
                            const u = e.getTextContent();
                            if (u !== s) {
                                const c = maxCodeUnits != null && d(u) > maxCodeUnits;
                                const _ = maxLength != null && o("WAUnicodeUtils").numCodepoints(u) > maxLength;
                                const f = maxLineCount != null && m(u) > maxLineCount;
                                if (c || _ || f) {
                                    if (onMaxInputExceeded != null) {
                                        onMaxInputExceeded();
                                    }
                                    o("LexicalUtils").$restoreEditorState(p, l);
                                }
                            }
                        }
                    });
                }
            };
            f = [
                p,
                maxLength,
                maxCodeUnits,
                maxLineCount,
                onMaxInputExceeded
            ];
            t[0] = p;
            t[1] = maxCodeUnits;
            t[2] = maxLength;
            t[3] = maxLineCount;
            t[4] = onMaxInputExceeded;
            t[5] = _;
            t[6] = f;
        } else {
            _ = t[5];
            f = t[6];
        }
        useEffect(_, f);
        let g;
        if (t[7] !== p || t[8] !== maxCodeUnits || t[9] !== maxLength || t[10] !== onMaxPasteExceeded) {
            g = function(t) {
                const e = p.getEditorState().read(o("WAWebLexicalUtils").$rootTextContent);
                const a = p.getEditorState().read(c);
                const i = o("WAUnicodeUtils").numCodepoints(e);
                const s = o("WAUnicodeUtils").numCodepoints(a);
                const u = o("WAUnicodeUtils").numCodepoints(t);
                const d = maxCodeUnits != null && e.length - a.length + t.length > maxCodeUnits;
                const m = maxLength != null && i - s + u > maxLength;
                const _ = d || m;
                if (_) {
                    onMaxPasteExceeded?.();
                    let f = Infinity;
                    let g = Infinity;
                    if (maxLength != null) {
                        f = maxLength - (i - s);
                    }
                    if (maxCodeUnits != null) {
                        g = maxCodeUnits - (e.length - a.length);
                    }
                    if (f > 0 || g > 0) {
                        let h = t;
                        if (f < Infinity && f > 0) {
                            h = o("WAUnicodeUtils").firstNCodepoints(h, f);
                        }
                        if (g < Infinity && h.length > g) {
                            h = h.slice(0, g);
                        }
                        if (h.length > 0) {
                            p.update(function() {
                                const e = o("WAWebLexicalUtils").$getRangeSelection();
                                if (e != null) {
                                    if (!e.isCollapsed()) {
                                        e.removeText();
                                    }
                                    e.insertText(h);
                                }
                            });
                        }
                    }
                    return true;
                }
                return false;
            };
            t[7] = p;
            t[8] = maxCodeUnits;
            t[9] = maxLength;
            t[10] = onMaxPasteExceeded;
            t[11] = g;
        } else {
            g = t[11];
        }
        o("useWAWebLexicalEvent").useLexicalCommandListener(p, o("WAWebClipboardPlugin").PASTE_TEXT_COMMAND, g, o("Lexical").COMMAND_PRIORITY_CRITICAL);
        return null;
    }
    function c() {
        return o("WAWebLexicalUtils").$getRangeSelection()?.getTextContent() ?? "";
    }
    function d(e) {
        return new Blob([
            e
        ], {
            type: "text/plain"
        }).size;
    }
    function m(e) {
        return e.split("\n\n").length;
    }
    l.CharacterLimitPlugin = u;
    l.numCodeUnits = d;
    l.getLineCount = m;
}, 98);