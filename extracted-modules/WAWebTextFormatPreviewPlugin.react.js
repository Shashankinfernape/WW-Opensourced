__d("WAWebTextFormatPreviewPlugin.react", [
    "Lexical",
    "LexicalComposerContext",
    "WALogger",
    "WAWebBidiParagraphNode",
    "WAWebDelimiterNode",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebMentionNode",
    "WAWebQuoteLineNode",
    "WAWebRenumberNumberedLists",
    "WAWebTextFormatParser",
    "WDSVars.stylex",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    function useC(e) {
        const t = o("react-compiler-runtime").c(24);
        const { blockQuoteEnabled, bulletPointsEnabled, highlightedBotCommands, inlineCodeEnabled, internLinksEnabled, linksEnabled, numberedListEnabled, phoneNumbersEnabled, spoilerEnabled } = e;
        const _ = o("LexicalComposerContext").useLexicalComposerContext();
        const f = _[0];
        let g;
        let h;
        if (t[0] !== blockQuoteEnabled || t[1] !== bulletPointsEnabled || t[2] !== f || t[3] !== highlightedBotCommands || t[4] !== inlineCodeEnabled || t[5] !== internLinksEnabled || t[6] !== linksEnabled || t[7] !== numberedListEnabled || t[8] !== phoneNumbersEnabled || t[9] !== spoilerEnabled) {
            g = function() {
                let e = false;
                const t = function() {
                    d(f, {
                        bulletPointsEnabled,
                        numberedListEnabled,
                        inlineCodeEnabled,
                        blockQuoteEnabled,
                        internLinksEnabled,
                        phoneNumbersEnabled,
                        linksEnabled,
                        highlightedBotCommands,
                        spoilerEnabled
                    });
                };
                const u = f.registerTextContentListener(function() {
                    e = true;
                });
                const _ = f.registerUpdateListener(function() {
                    if (!(f.isComposing() || !e)) {
                        e = false;
                        t();
                    }
                });
                const g = f.registerMutationListener(o("Lexical").ParagraphNode, function(e) {
                    for (const n of e){
                        const r = n[1];
                        if (r === "created" || r === "destroyed") {
                            self.setTimeout(t, 0);
                            break;
                        }
                    }
                }, {
                    skipInitialization: true
                });
                return function() {
                    u();
                    g();
                    _();
                };
            };
            h = [
                f,
                bulletPointsEnabled,
                numberedListEnabled,
                inlineCodeEnabled,
                blockQuoteEnabled,
                highlightedBotCommands,
                internLinksEnabled,
                phoneNumbersEnabled,
                linksEnabled,
                spoilerEnabled
            ];
            t[0] = blockQuoteEnabled;
            t[1] = bulletPointsEnabled;
            t[2] = f;
            t[3] = highlightedBotCommands;
            t[4] = inlineCodeEnabled;
            t[5] = internLinksEnabled;
            t[6] = linksEnabled;
            t[7] = numberedListEnabled;
            t[8] = phoneNumbersEnabled;
            t[9] = spoilerEnabled;
            t[10] = g;
            t[11] = h;
        } else {
            g = t[10];
            h = t[11];
        }
        useEffect(g, h);
        let y;
        let C;
        if (t[12] !== blockQuoteEnabled || t[13] !== bulletPointsEnabled || t[14] !== f || t[15] !== highlightedBotCommands || t[16] !== inlineCodeEnabled || t[17] !== internLinksEnabled || t[18] !== linksEnabled || t[19] !== numberedListEnabled || t[20] !== phoneNumbersEnabled || t[21] !== spoilerEnabled) {
            y = function() {
                d(f, {
                    bulletPointsEnabled,
                    numberedListEnabled,
                    inlineCodeEnabled,
                    blockQuoteEnabled,
                    highlightedBotCommands,
                    internLinksEnabled,
                    phoneNumbersEnabled,
                    linksEnabled,
                    spoilerEnabled
                });
                return function() {
                    f.update(v);
                };
            };
            C = [
                f,
                bulletPointsEnabled,
                numberedListEnabled,
                inlineCodeEnabled,
                blockQuoteEnabled,
                highlightedBotCommands,
                internLinksEnabled,
                phoneNumbersEnabled,
                linksEnabled,
                spoilerEnabled
            ];
            t[12] = blockQuoteEnabled;
            t[13] = bulletPointsEnabled;
            t[14] = f;
            t[15] = highlightedBotCommands;
            t[16] = inlineCodeEnabled;
            t[17] = internLinksEnabled;
            t[18] = linksEnabled;
            t[19] = numberedListEnabled;
            t[20] = phoneNumbersEnabled;
            t[21] = spoilerEnabled;
            t[22] = y;
            t[23] = C;
        } else {
            y = t[22];
            C = t[23];
        }
        useEffect(y, C);
        return null;
    }
    function d(e, t) {
        e.update(function() {
            const e = R();
            if (!e) {
                v();
                return;
            }
            const n = o("WAWebTextFormatParser").parseText(e, t);
            if (!n) {
                v();
                return;
            }
            m(n);
            if (t.numberedListEnabled === true) {
                o("WAWebRenumberNumberedLists").$renumberNumberedLists();
            }
            y();
        }, {
            tag: "history-merge",
            skipTransforms: true
        });
    }
    function m(t) {
        try {
            const n = o("Lexical").$getRoot();
            if (!n.getFirstChild()) {
                return;
            }
            let a = b();
            if (!a) {
                return;
            }
            for (const i of t.children){
                if (!a) {
                    break;
                }
                a = p(i, a, []);
            }
        } catch (error) {
            if (error instanceof o("WAWebLexicalUtils").NodeTypeAssertionError) {
                if (!r("gkx")("26258")) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "lexical-text-input"
                    ]))).catching(error).sendLogs("lexical-text-input: text format error");
                }
                v();
            } else {
                throw error;
            }
        }
    }
    function p(e, t, formats) {
        if (e.text != null) {
            let node = t;
            const i = e.text.replace(/\n/g, "");
            if (!i) {
                return node;
            }
            for (node of _(node, i.length)){
                h({
                    formats,
                    node
                });
            }
            return f(node);
        } else if (o("WAWebTextFormatParser").BulletedListItemFormats.has(e.format) && e.children) {
            const l = o("WAWebListBulletNode").$transformToListBulletNode(g(t, e.symbol));
            const s = f(l);
            let u = s;
            for (const c of e.children){
                if (!u) {
                    break;
                }
                const d = p(c, u, formats);
                u = d;
            }
            return u;
        } else if (e.format === o("WAWebTextFormatParser").FormatType.NumberedListItem && e.children) {
            const m = o("WAWebListNumberNode").$transformToListNumberNode(g(t, e.symbol));
            const y = f(m);
            let C = y;
            for (const b of e.children){
                if (!C) {
                    break;
                }
                const v = p(b, C, formats);
                C = v;
            }
            return C;
        } else if (e.format === o("WAWebTextFormatParser").FormatType.BlockQuote && e.children) {
            const R = o("WAWebQuoteLineNode").$transformToQuoteLineNode(g(t, e.symbol));
            const L = f(R);
            let E = L;
            for (const k of e.children){
                if (!E) {
                    break;
                }
                const I = p(k, E, [
                    o("WAWebTextFormatParser").FormatType.BlockQuote
                ].concat(formats));
                E = I;
            }
            return E;
        } else if (e.format === o("WAWebTextFormatParser").FormatType.BotCommand && e.children) {
            let T = t;
            for (const D of e.children){
                if (!T) {
                    break;
                }
                const x = p(D, T, [
                    o("WAWebTextFormatParser").FormatType.BotCommand
                ].concat(formats));
                T = x;
            }
            return T;
        } else if (e.format === o("WAWebTextFormatParser").FormatType.Link && e.children) {
            let $ = t;
            for (const P of e.children){
                if (!$) {
                    break;
                }
                const N = p(P, $, [
                    o("WAWebTextFormatParser").FormatType.Link
                ].concat(formats));
                $ = N;
            }
            return $;
        } else if (e.children) {
            let M = o("WAWebLexicalUtils").assertTextNode(S(t), "text node starts with an opening symbol");
            const w = o("WAWebDelimiterNode").$transformToDelimiterNode(g(M, e.symbol), "open");
            const A = f(w);
            M = r("nullthrows")(A);
            for (const F of e.children){
                const O = p(F, M, [].concat(formats, [
                    e.format
                ]));
                M = r("nullthrows")(O);
            }
            const B = o("WAWebDelimiterNode").$transformToDelimiterNode(g(o("WAWebLexicalUtils").assertTextNode(M, "text node starts with a closing symbol"), e.symbol), "close");
            return f(B);
        }
    }
    function* _(node, t) {
        for(let n = node, r = 0; n && r < t;){
            n = S(n);
            const o = n.getTextContentSize();
            const a = t - r;
            if (a < o) {
                const i = n.splitText(0, a);
                n = i[0];
            }
            yield n;
            r += o;
            n = f(n);
        }
    }
    function f(e) {
        for(var t = e?.getNextSibling(); t != null && !o("Lexical").$isTextNode(t);){
            t = t.getNextSibling();
        }
        if (t != null) {
            return o("WAWebLexicalUtils").assertTextNode(t, "getNextTextNode: has next sibling");
        }
        const n = o("WAWebLexicalUtils").assertParagraphNode(e?.getParent());
        for(let r = n; r && !t && (r = r.getNextSibling(), !!r);){
            t = o("WAWebLexicalUtils").assertParagraphNode(r).getFirstChild();
        }
        return t && o("WAWebLexicalUtils").assertTextNode(t, "getNextTextNode: found next node");
    }
    function g(e, symbol) {
        const n = e.getTextContentSize();
        if (n === symbol.length) {
            return e;
        }
        if (n > symbol.length) {
            const o = e.splitText(0, symbol.length);
            const a = o[0];
            return a;
        }
        for(var i = e; i.getTextContentSize() < symbol.length;){
            const l = r("nullthrows")(f(i)).splitText(0, symbol.length - i.getTextContentSize());
            const s = l[0];
            i = i.mergeWithSibling(s);
        }
        return i;
    }
    function h({ formats, isSymbol = false, node }) {
        if (!(!o("Lexical").$isTextNode(node) || node.isToken())) {
            L(node);
            for (const i of formats){
                switch(i){
                    case o("WAWebTextFormatParser").FormatType.Bold:
                        node.toggleFormat("bold");
                        break;
                    case o("WAWebTextFormatParser").FormatType.Italic:
                        node.toggleFormat("italic");
                        break;
                    case o("WAWebTextFormatParser").FormatType.Strikethrough:
                        node.toggleFormat("strikethrough");
                        break;
                    case o("WAWebTextFormatParser").FormatType.Spoiler:
                        E(node, `background-color: ${o("WDSVars.stylex").WDSVars["--WDS-surface-highlight"]};`);
                        break;
                    case o("WAWebTextFormatParser").FormatType.Code:
                        node.toggleFormat("code");
                        break;
                    case o("WAWebTextFormatParser").FormatType.InlineCode:
                        node.toggleFormat("code");
                        E(node, `color: ${o("WDSVars.stylex").WDSVars["--WDS-content-deemphasized"]};`, "border-radius: 6px;", `background-color: ${o("WDSVars.stylex").WDSVars["--WDS-surface-highlight"]};`, "padding: 0 4px;");
                        break;
                    case o("WAWebTextFormatParser").FormatType.BlockQuote:
                        if (!isSymbol && !o("WAWebMentionNode").$isMentionNode(node)) {
                            E(node, "color: var(--block-quote-text);");
                        }
                        break;
                    case o("WAWebTextFormatParser").FormatType.BotCommand:
                        E(node, "color: var(--bot-command-text);");
                        break;
                    case o("WAWebTextFormatParser").FormatType.Link:
                        {
                            const l = o("WDSVars.stylex").WDSVars["--WDS-content-external-link"];
                            E(node, `color: ${l}`);
                            break;
                        }
                    case o("WAWebTextFormatParser").FormatType.BulletedListItem:
                    case o("WAWebTextFormatParser").FormatType.HyphenListItem:
                    case o("WAWebTextFormatParser").FormatType.NumberedListItem:
                        break;
                }
            }
        }
    }
    function y() {
        const e = o("Lexical").$getRoot();
        for(let t = e.getFirstChild(); t;){
            o("WAWebLexicalUtils").assertParagraphNode(t);
            C(t);
            t = t.getNextSibling();
        }
        o("WAWebBidiParagraphNode").$setQuoteDirections(e.getFirstChild());
    }
    function C(e) {
        e.setIndent(e.getTargetIndent());
    }
    function b() {
        for(var e = o("WAWebLexicalUtils").assertParagraphNode(o("Lexical").$getRoot().getFirstChild()); !e.getFirstChild();){
            if (!e.getNextSibling()) {
                return null;
            }
            e = o("WAWebLexicalUtils").assertParagraphNode(e.getNextSibling());
        }
        const t = e.getFirstChild();
        return t && o("WAWebLexicalUtils").assertTextNode(t, "get first text node");
    }
    function v() {
        const e = o("Lexical").$getRoot();
        e.getChildren().forEach((e)=>{
            e.setIndent(0);
            e.getChildren().forEach((e)=>{
                if (o("Lexical").$isTextNode(e)) {
                    const t = S(e);
                    t.setFormat(0);
                    t.setStyle("");
                }
            });
        });
    }
    function S(e) {
        if (!(e instanceof o("WAWebListBulletNode").ListBulletNode) && !(e instanceof o("WAWebListNumberNode").ListNumberNode) && !(e instanceof o("WAWebQuoteLineNode").QuoteLineNode) && !(e instanceof o("WAWebDelimiterNode").DelimiterNode)) {
            return e;
        }
        const t = new (o("Lexical")).TextNode(e.getTextContent());
        e.replace(t);
        return t;
    }
    function R() {
        const e = [];
        for (const t of o("Lexical").$getRoot().getChildren()){
            const n = [];
            for (const r of t.getChildren()){
                if (!o("Lexical").$isTextNode(r)) {
                    n.push(r.getTextContent());
                    continue;
                }
                let a = r.getTextContent();
                if (o("WAWebMentionNode").$isMentionNode(r)) {
                    a = a.replace(/[\*_~`|]/g, "=");
                }
                n.push(a);
            }
            e.push(n.join(""));
        }
        return e.join("\n");
    }
    function L(node) {
        node.setStyle("");
        node.setFormat(0);
    }
    function E(node, ...n) {
        node.setStyle(`${node.getStyle()} ${n.join("")}`);
    }
    l.default = useC;
}, 98);