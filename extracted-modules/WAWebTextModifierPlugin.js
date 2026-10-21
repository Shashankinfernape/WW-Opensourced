__d("WAWebTextModifierPlugin", [
    "Lexical",
    "LexicalComposerContext",
    "WAWebClipboardPlugin",
    "WAWebLexicalUtils",
    "WAWebMultilinePlugin",
    "WAWebQuoteLineUtils",
    "react",
    "useWAWebLexicalEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    const useRef = (e || (e = o("react"))).useRef;
    function u({ autoToggleListBulletSymbol, autoToggleListNumberSymbol, autoToggleQuoteLine = false }) {
        const i = o("LexicalComposerContext").useLexicalComposerContext();
        const l = i[0];
        o("useWAWebLexicalEvent").useLexicalCommandListener(l, o("WAWebMultilinePlugin").NEW_PARAGRAPH_COMMAND, function() {
            if (!(autoToggleQuoteLine && m())) {
                if (autoToggleListBulletSymbol) {
                    c();
                }
                if (autoToggleListNumberSymbol) {
                    d();
                }
            }
            return false;
        }, o("Lexical").COMMAND_PRIORITY_NORMAL);
        const uRef = useRef(false);
        o("useWAWebLexicalEvent").useLexicalCommandListener(l, o("WAWebClipboardPlugin").PASTE_TEXT_COMMAND, function(e) {
            if (!autoToggleQuoteLine || uRef.current) {
                return false;
            }
            const t = g(e);
            if (t === e) {
                return false;
            }
            uRef.current = true;
            try {
                l.dispatchCommand(o("WAWebClipboardPlugin").PASTE_TEXT_COMMAND, t);
            } finally{
                uRef.current = false;
            }
            return true;
        }, o("Lexical").COMMAND_PRIORITY_CRITICAL);
        o("useWAWebLexicalEvent").useLexicalCommandListener(l, o("Lexical").DELETE_LINE_COMMAND, function(e) {
            const t = o("Lexical").$getSelection();
            if (o("Lexical").$isRangeSelection(t)) {
                if (t.isCollapsed() && t.anchor.type === "text") {
                    t.modify("extend", e, "lineboundary");
                }
                t.removeText();
                return true;
            }
            return false;
        }, o("Lexical").COMMAND_PRIORITY_HIGH);
        return null;
    }
    function c() {
        const e = o("WAWebLexicalUtils").$getSelectionParagraph();
        if (e) {
            const t = e.getPreviousSibling();
            const n = t?.getBulletNode();
            if (!(!t || !n)) {
                if (v(t)) {
                    t.remove();
                } else {
                    const r = n.getTextContent();
                    o("WAWebLexicalUtils").$insertText(`${r} `);
                }
            }
        }
    }
    function d() {
        const e = o("WAWebLexicalUtils").$getSelectionParagraph();
        if (e) {
            const t = e.getPreviousSibling();
            const n = t?.getNumberNode();
            if (!(!t || !n)) {
                if (v(t)) {
                    t.remove();
                } else {
                    const r = parseInt(n.getTextContent(), 10) + 1;
                    if (r <= 99) {
                        o("WAWebLexicalUtils").$insertText(`${r}. `);
                    }
                }
            }
        }
    }
    function m() {
        const e = o("WAWebLexicalUtils").$getSelectionParagraph();
        const t = e?.getPreviousSibling();
        if (!e || !t) {
            return false;
        }
        const n = t.getTextContent();
        if (t.getQuoteLineNode() == null || o("WAWebQuoteLineUtils").isInsideCodeBlock(`${_(t)}
${n}`)) {
            return false;
        }
        if (n === o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX && e.getTextContentSize() === 0 && !p(e)) {
            t.remove();
        } else {
            o("WAWebLexicalUtils").$insertText(o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX);
            f();
        }
        return true;
    }
    function p(e) {
        return e.getNextSibling()?.getQuoteLineNode() != null;
    }
    function _(e) {
        const t = [];
        for(let n = e.getPreviousSibling(); n != null;){
            t.push(n.getTextContent());
            n = n.getPreviousSibling();
        }
        return t.reverse().join("\n");
    }
    function f() {
        const e = o("Lexical").$getSelection();
        if (!(!o("Lexical").$isRangeSelection(e) || !e.isCollapsed())) {
            for(let t = e.anchor.getNode(), n = e.anchor.offset; o("Lexical").$isTextNode(t);){
                const r = t.getTextContent().slice(n);
                const a = r.replace(/^\s+/, "");
                const i = r.length - a.length;
                if (i > 0) {
                    t.spliceText(n, i, "", false);
                }
                if (a.length > 0) {
                    return;
                }
                t = t.getNextSibling();
                n = 0;
            }
        }
    }
    function g(e) {
        const t = h();
        if (t == null) {
            return e;
        }
        const { lineBeforeCursor, selection, textAfter } = t;
        const i = e.slice(o("WAWebQuoteLineUtils").firstLineWhitespaceLength(e, lineBeforeCursor));
        if (o("WAWebQuoteLineUtils").quotesTextAfter(i, textAfter)) {
            C(selection);
            return `${o("WAWebQuoteLineUtils").prefixPastedLines(i)}${o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX}`;
        }
        return o("WAWebQuoteLineUtils").prefixPastedLines(i);
    }
    function h() {
        const e = o("WAWebLexicalUtils").$getRangeSelection();
        const t = o("WAWebLexicalUtils").$getSelectionParagraph();
        if (e == null || t == null) {
            return null;
        }
        const n = e.isBackward() ? [
            e.focus,
            e.anchor
        ] : [
            e.anchor,
            e.focus
        ];
        const r = n[0];
        const a = n[1];
        if (r.type !== "text" || !o("WAWebQuoteLineUtils").isQuoteLine(t.getTextContent())) {
            return null;
        }
        const i = b(r);
        const lineBeforeCursor = t.getTextContent().slice(0, i);
        if (i < o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX.length || o("WAWebQuoteLineUtils").isInsideCodeBlock(`${_(t)}
${lineBeforeCursor}`)) {
            return null;
        }
        return {
            lineBeforeCursor,
            selection: e,
            textAfter: y(a)
        };
    }
    function y(e) {
        if (e.type !== "text") {
            return "";
        }
        const n = e.getNode().getTopLevelElement();
        return (n == null ? undefined : n.getTextContent().slice(b(e))) ?? "";
    }
    function C(selection) {
        const t = selection.isBackward() ? selection.anchor : selection.focus;
        if (t.type === "text") {
            let n = t.getNode();
            let r = t.offset;
            for(let a = n, i = r; o("Lexical").$isTextNode(a);){
                const l = a.getTextContent().slice(i);
                const s = l.length - l.replace(/^\s+/, "").length;
                n = a;
                r = i + s;
                if (s < l.length) {
                    break;
                }
                a = a.getNextSibling();
                i = 0;
            }
            t.set(n.getKey(), r, "text");
        }
    }
    function b(e) {
        let e_offset = e.offset;
        for(let n = e.getNode().getPreviousSibling(); n != null; n = n.getPreviousSibling()){
            e_offset += n.getTextContentSize();
        }
        return e_offset;
    }
    function v(e) {
        const t = o("WAWebLexicalUtils").assertTextNode(e.getBulletNode() || e.getNumberNode());
        return e.getTextContentSize() - t.getTextContentSize() === 1;
    }
    l.default = u;
}, 98);