__d("WAWebTextFormatUtils", [
    "$InternalEnum",
    "Lexical",
    "WAWebABProps",
    "WAWebDelimiterNode",
    "WAWebLexicalUtils",
    "WAWebListBulletNode",
    "WAWebListNumberNode",
    "WAWebQuoteLineUtils",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "Bold",
        "Italic",
        "Strikethrough",
        "Spoiler",
        "Code",
        "InlineCode",
        "BulletedList",
        "NumberedList",
        "Quote"
    ]);
    const s = [
        e.BulletedList,
        e.NumberedList,
        e.Quote
    ];
    const u = 99;
    const c = n("$InternalEnum").Mirrored([
        "Remove",
        "Add",
        "Skip"
    ]);
    function d() {
        const e = o("WAWebLexicalUtils").$getRangeSelection();
        if (!e || !e.isCollapsed()) {
            return null;
        }
        const t = o("Lexical").$createTextNode("");
        e.insertNodes([
            t
        ]);
        let n = [
            t
        ];
        for(let a = t.getPreviousSibling(), i = t.getNextSibling(); a && i;){
            let l = null;
            for (const s of x){
                if (a.getTextContent().endsWith(s) && i.getTextContent().startsWith(s)) {
                    l = s;
                    break;
                }
            }
            if (l == null) {
                break;
            }
            let u;
            let c;
            const d = o("WAWebLexicalUtils").$splitText(a, a.getTextContentSize() - l.length);
            a = d[0];
            u = d[1];
            const m = o("WAWebLexicalUtils").$splitText(i, l.length);
            c = m[0];
            i = m[1];
            if (u && c) {
                const g = o("WAWebDelimiterNode").$createDelimiterNode(l, "open");
                const h = o("WAWebDelimiterNode").$createDelimiterNode(l, "close");
                u?.replace(g);
                c?.replace(h);
                n = [
                    g
                ].concat(n, [
                    h
                ]);
            }
        }
        if (n.length === 1) {
            return {
                startNode: t,
                startOffset: -1,
                endNode: t,
                endOffset: -1,
                selectedNodes: [
                    t
                ],
                isCollapsed: true,
                selection: e,
                isMultiLines: false
            };
        }
        const y = _(n, 0, r("nullthrows")(n[n.length - 1]).getTextContentSize() - 1);
        if (y) {
            return babelHelpers.extends({}, y, {
                startNode: r("nullthrows")(y.selectedNodes[0]),
                endNode: r("nullthrows")(y.selectedNodes[y.selectedNodes.length - 1]),
                isCollapsed: true,
                selection: e,
                isMultiLines: false
            });
        }
        return null;
    }
    function m() {
        const e = o("WAWebLexicalUtils").$getRangeSelection();
        if (!e) {
            return null;
        }
        if (e.isCollapsed()) {
            return d();
        }
        const t = e.getNodes().filter(o("Lexical").$isTextNode);
        if (t.length === 0) {
            return null;
        }
        let offset = e.anchor.offset;
        let offset_1 = e.focus.offset;
        if (e.isBackward()) {
            const i = [
                offset_1,
                offset
            ];
            offset = i[0];
            offset_1 = i[1];
        }
        offset_1--;
        const l = t[0];
        const s = t[t.length - 1];
        const isMultiLines = l.getParent() !== s.getParent();
        const c = _(t, offset, offset_1);
        if (c) {
            return babelHelpers.extends({}, c, {
                startNode: r("nullthrows")(c.selectedNodes[0]),
                endNode: r("nullthrows")(c.selectedNodes[c.selectedNodes.length - 1]),
                isCollapsed: false,
                selection: e,
                isMultiLines
            });
        }
        return null;
    }
    function p(e, t, n, r, endOffset, i, l) {
        let startNodeIndex = t;
        let u = n;
        while(true){
            const c = e[startNodeIndex];
            if (c == null || c === e[r] && u > endOffset) {
                return null;
            }
            if (o("WAWebDelimiterNode").$isDelimiterNode(c) && !c.isOpen() || o("WAWebDelimiterNode").$isDelimiterNode(c) && !i[l(c, "close")] || u === c.getTextContentSize()) {
                startNodeIndex++;
                u = 0;
                continue;
            }
            if (c.getTextContent()[u] === " ") {
                u++;
                continue;
            }
            break;
        }
        return {
            startNodeIndex,
            startOffset: u
        };
    }
    function _(e, t, n) {
        const r = [].concat(e);
        let a = t;
        let endOffset = n;
        let l = 0;
        let s = r.length - 1;
        if (o("WAWebDelimiterNode").$isDelimiterNode(r[l])) {
            a = 0;
        }
        if (o("WAWebDelimiterNode").$isDelimiterNode(r[s])) {
            endOffset = r[s].getTextContentSize() - 1;
        }
        if (a === 0) {
            for(let u; (u = r[l].getPreviousSibling()) && o("WAWebDelimiterNode").$isDelimiterNode(u);){
                r.unshift(u);
                a = 0;
                s++;
            }
        }
        if (endOffset === r[s].getTextContentSize() - 1) {
            for(let c; (c = r[s].getNextSibling()) && o("WAWebDelimiterNode").$isDelimiterNode(c);){
                r.push(c);
                s++;
                endOffset = c.getTextContentSize() - 1;
            }
        }
        const d = function(t, n) {
            return `${t.getTextContent()}-${n}`;
        };
        const m = {};
        r.forEach((e)=>{
            if (o("WAWebDelimiterNode").$isDelimiterNode(e)) {
                const n = d(e, e.getPosition());
                m[n] = (m[n] ?? 0) + 1;
            }
        });
        const _ = p(r, l, a, s, endOffset, m, d);
        if (_ == null) {
            return null;
        }
        l = _.startNodeIndex;
        for(a = _.startOffset;;){
            const f = r[s];
            if (f == null || f === r[l] && a > endOffset) {
                return null;
            }
            if (o("WAWebDelimiterNode").$isDelimiterNode(f) && f.isOpen() || o("WAWebDelimiterNode").$isDelimiterNode(f) && !m[d(f, "open")] || endOffset === -1) {
                s--;
                endOffset = r[s]?.getTextContentSize() - 1;
                continue;
            }
            if (f.getTextContent()[endOffset] === " ") {
                endOffset--;
                continue;
            }
            break;
        }
        return {
            selectedNodes: r.slice(l, s + 1),
            startOffset: a,
            endOffset
        };
    }
    function f({ endOffset, isCollapsed, selection, startOffset, startNode, endNode }, n) {
        if (!isCollapsed && (startOffset !== 0 || endOffset !== endNode.getTextContentSize() - 1)) {
            if (startNode === endNode) {
                const c = startNode.splitText(startOffset, endOffset + 1);
                startNode = startOffset === 0 ? c[0] : c[1];
                endNode = startNode;
            } else {
                if (startOffset !== 0) {
                    const d = startNode.splitText(startOffset);
                    startNode = d[1];
                }
                const m = endNode.splitText(endOffset + 1);
                endNode = m[0];
            }
        }
        const p = $(n);
        const _ = o("WAWebDelimiterNode").$createDelimiterNode(p, "open");
        const f = o("WAWebDelimiterNode").$createDelimiterNode(p, "close");
        startNode.insertBefore(_);
        endNode.insertAfter(f);
        const g = _.getPreviousSibling();
        const h = g?.getTextContent();
        if (h != null && h[h.length - 1] !== " " && !o("WAWebDelimiterNode").$isDelimiterNode(g)) {
            _.insertBefore(o("Lexical").$createTextNode(" "));
        }
        const y = f.getNextSibling();
        const C = y?.getTextContent();
        if (C != null && C[0] !== " " && !o("WAWebDelimiterNode").$isDelimiterNode(y)) {
            f.insertAfter(o("Lexical").$createTextNode(" "));
        }
        const b = n !== e.InlineCode && n !== e.Code;
        P(selection, startNode, endNode, b);
    }
    function g({ endNode, startNode }, { keepNumberedList: t_keepNumberedList } = {
        keepNumberedList: false
    }) {
        for(let s = r("nullthrows")(startNode.getParent()), u = endNode.getParent()?.getNextSibling(); s;){
            const c = t_keepNumberedList && !!s.getNumberNode();
            if (!c) {
                const p = s.getBulletNode() ?? s.getNumberNode() ?? s.getQuoteLineNode();
                if (p) {
                    const _ = p.getNextSibling();
                    p.remove();
                    if (_) {
                        const f = _.splitText(1);
                        const g = f[0];
                        g.remove();
                    }
                }
            }
            s = s.getNextSibling();
            if (s === u) {
                break;
            }
        }
    }
    function h(t, n) {
        const { endNode, startNode } = t;
        let s = r("nullthrows")(startNode.getParent());
        const c = endNode.getParent()?.getNextSibling();
        let d = 1;
        if (n === e.NumberedList) {
            const p = parseInt(s?.getNumberNode()?.getTextContent(), 10);
            if (p) {
                d = p;
            } else {
                const h = s?.getPreviousSibling();
                const y = parseInt(h?.getNumberNode()?.getTextContent(), 10);
                if (y) {
                    d = Math.min(y + 1, u);
                }
            }
        }
        g(t, {
            keepNumberedList: n === e.NumberedList
        });
        while(s){
            N(s.getFirstChild());
            let C = s.getFirstChild();
            if (!C && !t.isMultiLines) {
                C = o("Lexical").$createTextNode("");
                s.append(C);
            }
            if (C) {
                if (n === e.BulletedList) {
                    C.insertBefore(o("WAWebListBulletNode").$createListBulletNode("* "));
                } else if (n === e.NumberedList) {
                    if (o("WAWebListNumberNode").$isListNumberNode(C)) {
                        d = parseInt(C.getTextContent(), 10);
                    } else {
                        C.insertBefore(o("WAWebListNumberNode").$createListNumberNode(`${d}. `));
                    }
                    d++;
                    if (d > u) {
                        break;
                    }
                } else {
                    if (n === e.Quote) {
                        C.insertBefore(o("WAWebListNumberNode").$createListNumberNode("> "));
                    }
                }
            }
            s = s.getNextSibling();
            if (s === c) {
                break;
            }
        }
    }
    function y(t) {
        return t === e.Quote && o("WAWebABProps").getABPropConfigValue("expanded_formatting_menu_items_enabled");
    }
    function C({ endNode, startNode }) {
        const a = r("nullthrows")(startNode.getParent());
        for(var i = r("nullthrows")(endNode.getParent()).getNextSibling(), l = b(a), s = [], u = a; u && u !== i;){
            const c = u.getTextContent();
            const d = o("WAWebQuoteLineUtils").isInsideCodeBlock(c);
            if (!l && !d && c.trim() !== "") {
                s.push(u);
            }
            if (d) {
                l = !l;
            }
            u = u.getNextSibling();
        }
        return s;
    }
    function b(e) {
        const t = [];
        for(let n = e.getPreviousSibling(); n;){
            t.push(n.getTextContent());
            n = n.getPreviousSibling();
        }
        return o("WAWebQuoteLineUtils").isInsideCodeBlock(t.join("\n"));
    }
    function v(t) {
        const n = C(t);
        if (n.length === 0) {
            h(t, e.Quote);
            return;
        }
        for (const r of n){
            if (r.getQuoteLineNode() == null) {
                N(r.getFirstChild());
                r.getFirstChild()?.insertBefore(o("WAWebListNumberNode").$createListNumberNode(o("WAWebQuoteLineUtils").QUOTE_LINE_PREFIX));
            }
        }
    }
    function S(e) {
        for (const t of C(e)){
            const n = t.getQuoteLineNode();
            if (n) {
                const r = n.getNextSibling();
                n.remove();
                if (r) {
                    const o = r.splitText(1);
                    const a = o[0];
                    a.remove();
                }
            }
        }
    }
    function R({ endOffset, selectedNodes, selection, startOffset }, t) {
        const l = r("nullthrows")(k(selectedNodes, startOffset, t));
        const s = r("nullthrows")(I({
            format: t,
            nodes: selectedNodes,
            offset: endOffset
        }));
        P(selection, l, s);
        l.remove();
        s.remove();
    }
    function L(t, n) {
        const { endNode, endOffset, isCollapsed, isMultiLines, selectedNodes, startNode, startOffset } = t;
        const p = s.includes(n);
        const _ = n === e.Code;
        if (isMultiLines && !p && !_) {
            return c.Skip;
        }
        if (p) {
            const f = r("nullthrows")(startNode.getParent());
            const g = r("nullthrows")(endNode.getParent()).getNextSibling();
            if (!isMultiLines && f.getTextContentSize() === 0) {
                return E(f, n);
            }
            if (y(n)) {
                const h = C(t);
                if (h.length === 0) {
                    return c.Skip;
                }
                if (h.every((e)=>e.getQuoteLineNode() != null)) {
                    return c.Remove;
                }
                return c.Add;
            }
            let b = true;
            for(let v = f; v;){
                if (v.getTextContentSize() !== 0 && (n === e.BulletedList && v.getBulletNode() == null || n === e.NumberedList && v.getNumberNode() == null || n === e.Quote && v.getQuoteLineNode() == null)) {
                    b = false;
                    break;
                }
                v = v.getNextSibling();
                if (v === g) {
                    break;
                }
            }
            if (b) {
                return c.Remove;
            }
            return c.Add;
        }
        if (startNode !== endNode && (startOffset !== 0 && T([
            startNode
        ]).length !== 0 || endOffset + 1 !== endNode.getTextContentSize() && T([
            endNode
        ]).length !== 0)) {
            return c.Skip;
        }
        const S = k(selectedNodes, startOffset, n);
        const R = I({
            format: n,
            nodes: selectedNodes,
            offset: endOffset
        });
        const L = !!(S && R);
        if (!L) {
            const D = T(isCollapsed ? [
                selectedNodes[0].getPreviousSibling(),
                selectedNodes[0].getNextSibling()
            ] : selectedNodes);
            if (!D.some((e)=>e === n) && !D.some((t)=>t === e.Code || t === e.InlineCode)) {
                return c.Add;
            }
        }
        if (L) {
            return c.Remove;
        }
        return c.Skip;
    }
    function E(e, t) {
        if (y(t) && b(e)) {
            return c.Skip;
        }
        return c.Add;
    }
    function k(selectedNodes, startOffset, n) {
        if (startOffset !== 0) {
            return null;
        }
        for (const r of selectedNodes){
            if (!o("WAWebDelimiterNode").$isDelimiterNode(r)) {
                break;
            }
            if (r.getTextContent() === $(n)) {
                return r;
            }
        }
        return null;
    }
    function I({ format, nodes, offset }) {
        if (offset + 1 !== nodes[nodes.length - 1]?.getTextContentSize()) {
            return null;
        }
        for(let i = nodes.length - 1; i >= 0; i--){
            const l = nodes[i];
            if (!o("WAWebDelimiterNode").$isDelimiterNode(l)) {
                break;
            }
            if (l.getTextContent() === $(format)) {
                return l;
            }
        }
        return null;
    }
    function T(t) {
        const n = [];
        t.forEach((t)=>{
            if (o("Lexical").$isTextNode(t)) {
                const a = [
                    [
                        "Bold",
                        "bold"
                    ],
                    [
                        "Italic",
                        "italic"
                    ],
                    [
                        "Strikethrough",
                        "strikethrough"
                    ]
                ];
                a.forEach(([a, i])=>{
                    if (t.hasFormat(i)) {
                        n.push(r("nullthrows")(e.cast(a)));
                    }
                });
                if (t.hasFormat("code")) {
                    const i = t.getStyle().includes("border-radius");
                    n.push(i ? e.InlineCode : e.Code);
                }
            }
        });
        return n;
    }
    const D = {};
    D[e.Bold] = "*";
    D[e.Italic] = "_";
    D[e.Strikethrough] = "~";
    D[e.Spoiler] = "||";
    D[e.Code] = "```";
    D[e.InlineCode] = "`";
    var x = Array.from(Object.values(D));
    function $(e) {
        return r("nullthrows")(D[e]);
    }
    function P(selection, t, n, a = true) {
        for(var i = t, l = n; a && o("WAWebDelimiterNode").$isDelimiterNode(i) && o("WAWebDelimiterNode").$isDelimiterNode(l) && i.getTextContent() === l.getTextContent();){
            i = r("nullthrows")(i.getNextSibling());
            l = r("nullthrows")(l.getPreviousSibling());
        }
        selection.setTextNodeRange(i, 0, l, l.getTextContentSize());
    }
    function N(e) {
        if (e) {
            const t = e.getTextContent();
            const n = t.trimStart();
            if (n.length === 0) {
                e.remove();
                return;
            }
            const r = t.length - n.length;
            if (r !== 0) {
                const o = e.splitText(r);
                const a = o[0];
                a.remove();
            }
        }
    }
    function M(e) {
        const t = m();
        if (!t) {
            return false;
        }
        const n = L(t, e);
        if (s.includes(e)) {
            switch(n){
                case c.Add:
                    if (y(e)) {
                        v(t);
                    } else {
                        h(t, e);
                    }
                    return true;
                case c.Remove:
                    if (y(e)) {
                        S(t);
                    } else {
                        g(t);
                    }
                    return true;
                case c.Skip:
                    return false;
            }
        }
        switch(L(t, e)){
            case c.Add:
                f(t, e);
                return true;
            case c.Remove:
                R(t, e);
                return true;
            case c.Skip:
                return false;
        }
    }
    l.TextFormatType = e;
    l.TextFormatActionType = c;
    l.$normalizeTextSelection = m;
    l.$getTextFormatAction = L;
    l.$toggleTextFormat = M;
}, 98);