__d("WAWebLexicalUtils", [
    "Lexical",
    "LexicalSelection",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = "text-send-clear";
    function s() {
        const e = u();
        if (e) {
            return e.node.getTextContent().slice(0, e.point.offset);
        }
        return null;
    }
    function u() {
        const e = y();
        if (!(e == null || !e.isCollapsed())) {
            const point = e.anchor;
            if (point.type === "text") {
                const n = point.getNode();
                if (o("Lexical").$isTextNode(n)) {
                    return {
                        point,
                        node: n
                    };
                }
            }
        }
    }
    function c(e) {
        return o("Lexical").$isTextNode(e) && e.getTextContent()[0] === " ";
    }
    function d(e) {
        const t = o("Lexical").$isTextNode(e) ? e.getTextContent() : "";
        return t[t.length - 1] === " ";
    }
    function m(e, t) {
        const { moveCaret = false } = t ?? {};
        if (!d(e)) {
            let i = e;
            do {
                i = i.getNextSibling();
            }while (i && !o("Lexical").$isTextNode(i))
            if (i && c(i)) {
                if (moveCaret) {
                    i.select(1, 1);
                }
                return;
            }
            const l = new (o("Lexical")).TextNode(" ");
            e.insertAfter(l);
            if (moveCaret) {
                l.select();
            }
        }
    }
    function p(e, t) {
        const { moveCaret = false } = t ?? {};
        if (!(c(e) || !e.getPreviousSibling())) {
            let i = e;
            do {
                i = i.getPreviousSibling();
            }while (i && !o("Lexical").$isTextNode(i))
            if (i && d(i)) {
                if (moveCaret) {
                    const l = i.getTextContent().length;
                    i.select(l - 1, l);
                }
                return;
            }
            const s = new (o("Lexical")).TextNode(" ");
            e.insertBefore(s);
            if (moveCaret) {
                s.select();
            }
        }
    }
    function _(e, t = new (o("Lexical")).TextNode("")) {
        e.replace(t);
        t.selectNext(0, 0);
    }
    function f() {
        const e = o("Lexical").$getRoot().getChildren();
        const t = [];
        for (const n of e){
            t.push(n.getTextContent());
        }
        return t.join("\n");
    }
    function g(e) {
        const t = new (o("Lexical")).TextNode(e.getTextContent());
        e.replace(t);
    }
    function h(e, t) {
        const { insertLeadingSpace = false } = t ?? {};
        const l = y() ?? o("Lexical").$getRoot().selectEnd();
        const s = o("Lexical").$createTextNode(e);
        l.insertNodes([
            s
        ]);
        if (insertLeadingSpace) {
            p(s);
        }
    }
    function y() {
        const e = o("Lexical").$getSelection();
        if (o("Lexical").$isRangeSelection(e)) {
            return e;
        }
        return null;
    }
    function C() {
        const e = o("Lexical").$getPreviousSelection();
        if (o("Lexical").$isRangeSelection(e)) {
            return e;
        }
        return null;
    }
    function b(e) {
        if (!e) {
            return false;
        }
        const t = e.getRootElement();
        if (t) {
            return t.ownerDocument.activeElement === t;
        }
        return false;
    }
    function v(e) {
        if (b(e)) {
            if (I(e).length === 0) {
                return true;
            }
            return e.getEditorState().read(function() {
                const e = u();
                if (e) {
                    return e.point.offset === 0 && e.node === o("Lexical").$getRoot().getFirstDescendant();
                }
                return false;
            });
        }
        return false;
    }
    function S(e) {
        if (b(e)) {
            if (I(e).length === 0) {
                return true;
            }
            return e.getEditorState().read(function() {
                const e = u();
                if (e) {
                    return e.point.offset === e.node.getTextContentSize() && e.node === o("Lexical").$getRoot().getLastDescendant();
                }
                return false;
            });
        }
        return false;
    }
    const R = ((e)=>{
        function t(t, n, r) {
            let a;
            const i = n?.getType() ?? "undefined node";
            let l = `Expect node to be a ${t}, but received ${i}`;
            if (r != null) {
                l += ` (context: ${r})`;
            }
            a = e.call(this, l) || this;
            a.name = "NodeTypeAssertionError";
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function L(e, t) {
        if (!o("Lexical").$isTextNode(e)) {
            throw new R("TextNode", e, t);
        }
        return e;
    }
    function E(e) {
        if (!o("Lexical").$isParagraphNode(e)) {
            throw new R("ParagraphNode", e);
        }
        return e;
    }
    function k(e) {
        e.focus();
        e.update(function() {
            const e = y();
            if (e) {
                if (o("LexicalSelection").$selectAll != null) {
                    o("LexicalSelection").$selectAll(e);
                }
            }
        });
    }
    function I(e) {
        return e.getEditorState().read(function() {
            return o("Lexical").$getRoot().getChildren().map((e)=>e.getTextContent()).join("\n");
        });
    }
    function T(e, t) {
        const n = o("Lexical").$getRoot();
        n.clear();
        for(let a = e.split(/\r?\n/), i = 0; i < a.length; i++){
            n.append(o("Lexical").$createParagraphNode());
            const l = r("nullthrows")(n.getLastChild());
            const s = new (o("Lexical")).TextNode(a[i]);
            l.append(s);
        }
        if (t) {
            n.selectEnd();
        } else {
            o("Lexical").$setSelection(null);
        }
    }
    function D(e, t, tag) {
        e.update(function() {
            return T(t, b(e));
        }, tag == null ? undefined : {
            tag
        });
    }
    function x() {
        const t = y();
        const n = t?.getNodes()?.[0];
        if (o("Lexical").$isParagraphNode(n)) {
            return n;
        }
        if (o("Lexical").$isTextNode(n)) {
            return n.getParent();
        }
        return null;
    }
    function* $(e) {
        for(let t = e.getFirstChild(); t;){
            if (o("Lexical").$isTextNode(t)) {
                yield t;
            } else {
                for (const r of $(t)){
                    yield r;
                }
            }
            t = t?.getNextSibling();
        }
    }
    function P(e) {
        if (e) {
            return e.getEditorState().read(function() {
                for (const e of $(o("Lexical").$getRoot())){
                    if (e.getStyle().includes("bot-command-text")) {
                        return true;
                    }
                }
                return false;
            });
        }
        return false;
    }
    function N(e, t) {
        const n = e.splitText(t);
        const r = n[0];
        const o = n[1];
        if (r && o) {
            return [
                r,
                o
            ];
        }
        if (t >= e.getTextContentSize()) {
            return [
                r,
                null
            ];
        }
        return [
            null,
            r
        ];
    }
    l.TEXT_SEND_CLEAR_UPDATE_TAG = e;
    l.$getTextUpToAnchor = s;
    l.$getTextAnchor = u;
    l.$insertTrailingSpace = m;
    l.$insertLeadingSpace = p;
    l.$replaceTextNode = _;
    l.$rootTextContent = f;
    l.$toTextNode = g;
    l.$insertText = h;
    l.$getRangeSelection = y;
    l.$getPreviousRangeSelection = C;
    l.isFocused = b;
    l.isCursorAtStart = v;
    l.isCursorAtEnd = S;
    l.NodeTypeAssertionError = R;
    l.assertTextNode = L;
    l.assertParagraphNode = E;
    l.selectAll = k;
    l.getTextContent = I;
    l.$setTextContent = T;
    l.setTextContent = D;
    l.$getSelectionParagraph = x;
    l.textNodesIterator = $;
    l.hasBotCommand = P;
    l.$splitText = N;
}, 98);