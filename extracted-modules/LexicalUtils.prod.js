__d("LexicalUtils.prod", [
    "Lexical",
    "LexicalSelection"
], function $module_LexicalUtils_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function n(e, ...t_1) {
        throw ((e, ...t)=>{
            const n = new URL("https://lexical.dev/docs/error");
            const o = new URLSearchParams();
            o.append("code", e);
            for (const _e of t){
                o.append("v", _e);
            }
            n.search = o.toString();
            return new Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
        })(...[
            e
        ].concat(Array.from(t_1)));
    }
    function o(e) {
        return `${e}px`;
    }
    const r = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
    };
    function i(i, s, l) {
        let a = null;
        let c = null;
        let u = null;
        let d = [];
        const f = require("Lexical").getRootOwnerDocument(i.getRootElement()).createElement("div");
        function g() {
            if (a === null) {
                n(182);
            }
            if (c === null) {
                n(183);
            }
            const _c$getBoundingClientR = c.getBoundingClientRect();
            const { left, top } = _c$getBoundingClientR;
            const g = ((e)=>{
                const t = [];
                const _loop = function _loop(_n) {
                    if (!(_n.width < 0.5 || _n.height < 0.5 || t.some((e)=>Math.abs(e.left - _n.left) <= 1 && Math.abs(e.top - _n.top) <= 1 && Math.abs(e.right - _n.right) <= 1 && Math.abs(e.bottom - _n.bottom) <= 1))) {
                        t.push(_n);
                    }
                };
                for (const _n of e){
                    _loop(_n);
                }
                return t;
            })(require("LexicalSelection").createRectsFromDOMRange(i, s));
            let p;
            let h;
            if (f.parentNode !== c) {
                h = f;
                (p = c).insertBefore(h, p.firstChild);
            }
            let $ = false;
            for(let _e2 = 0; _e2 < g.length; _e2++){
                const _n2 = g[_e2];
                const _i = d[_e2] || require("Lexical").getRootOwnerDocument(a).createElement("div");
                const _s = _i.style;
                if (_s.position !== "absolute") {
                    _s.position = "absolute";
                    $ = true;
                }
                const _l = o(_n2.left - left);
                if (_s.left !== _l) {
                    _s.left = _l;
                    $ = true;
                }
                const _c = o(_n2.top - top);
                if (_s.top !== _c) {
                    _i.style.top = _c;
                    $ = true;
                }
                const _p = o(_n2.width);
                if (_s.width !== _p) {
                    _i.style.width = _p;
                    $ = true;
                }
                const _h = o(_n2.height);
                if (_s.height !== _h) {
                    _i.style.height = _h;
                    $ = true;
                }
                if (_i.parentNode !== f) {
                    f.append(_i);
                    $ = true;
                }
                d[_e2] = _i;
            }
            while(d.length > g.length){
                const _e3 = d.pop();
                if (_e3 != null) {
                    _e3.remove();
                    $ = true;
                }
            }
            if ($) {
                l(d);
            }
        }
        function p() {
            c = null;
            a = null;
            if (u !== null) {
                u.disconnect();
            }
            u = null;
            f.remove();
            for (const _e4 of d){
                _e4.remove();
            }
            d = [];
        }
        function h() {
            const e = i.getRootElement();
            if (e === null) {
                return p();
            }
            const e_parentElement = e.parentElement;
            if (!require("Lexical").isHTMLElement(e_parentElement)) {
                return p();
            }
            p();
            a = e;
            c = e_parentElement;
            u = new MutationObserver(function(e) {
                const t = i.getRootElement();
                const n = t && t.parentElement;
                if (t !== a || n !== c) {
                    return h();
                }
                for (const _t of e){
                    if (!f.contains(_t.target)) {
                        return g();
                    }
                }
            });
            u.observe(e_parentElement, r);
            g();
        }
        f.style.position = "relative";
        const $ = i.registerRootListener(function() {
            h();
            return p;
        });
        return function() {
            $();
            p();
        };
    }
    function s(e, n, o, r) {
        if (n.type !== "text" && require("Lexical").$isElementNode(o)) {
            const _i2 = require("Lexical").$getDOMSlot(o, r, e);
            return [
                _i2.element,
                _i2.getFirstChildOffset() + n.offset
            ];
        }
        return [
            (require("Lexical").$isTextNode(o) ? require("Lexical").$getDOMTextNode(o, r, e) : require("Lexical").getDOMTextNode(r)) || r,
            n.offset
        ];
    }
    function l(e) {
        for (const _t2 of e){
            const _e5 = _t2.style;
            if (_e5.background !== "Highlight") {
                _e5.background = "Highlight";
            }
            if (_e5.color !== "HighlightText") {
                _e5.color = "HighlightText";
            }
            if (_e5.marginTop !== o(-1.5)) {
                _e5.marginTop = o(-1.5);
            }
            if (_e5.paddingTop !== o(4)) {
                _e5.paddingTop = o(4);
            }
            if (_e5.paddingBottom !== o(0)) {
                _e5.paddingBottom = o(0);
            }
        }
    }
    function a(e, n = l) {
        let o = null;
        let r = null;
        let a = null;
        let c = null;
        let u = null;
        let d = null;
        let f = function f() {};
        function g(l) {
            l.read(function() {
                const l = require("Lexical").$getSelection();
                if (!require("Lexical").$isRangeSelection(l)) {
                    o = null;
                    a = null;
                    c = null;
                    d = null;
                    f();
                    return void (f = function f() {});
                }
                const _ref = ((e)=>{
                    const t = e.getStartEndPoints();
                    if (e.isBackward()) {
                        return [
                            t[1],
                            t[0]
                        ];
                    }
                    return t;
                })(l);
                const g = _ref[0];
                const p = _ref[1];
                const h = g.getNode();
                const $ = h.getKey();
                const g_offset = g.offset;
                const S = p.getNode();
                const x = S.getKey();
                const p_offset = p.offset;
                const E = e.getElementByKey($);
                const N = e.getElementByKey(x);
                const y = o === null || E !== r || g_offset !== a || $ !== o.getKey();
                const R = c === null || N !== u || p_offset !== d || x !== c.getKey();
                if ((y || R) && E !== null && N !== null) {
                    const _t3 = ((e, t, n, o, r, i, l)=>{
                        const a = (e._window ? e._window.document : document).createRange();
                        a.setStart(...Array.from(s(e, t, n, o)));
                        a.setEnd(...Array.from(s(e, r, i, l)));
                        return a;
                    })(e, g, h, E, p, S, N);
                    f();
                    f = i(e, _t3, n);
                }
                o = h;
                r = E;
                a = g_offset;
                c = S;
                u = N;
                d = p_offset;
            }, {
                editor: e
            });
        }
        g(e.getEditorState());
        return require("Lexical").mergeRegister(e.registerUpdateListener(function({ editorState }) {
            return g(editorState);
        }), function() {
            f();
        });
    }
    function c(e, t) {
        for (const _n3 of t){
            if (e.type.startsWith(_n3)) {
                return true;
            }
        }
        return false;
    }
    function u(e, t) {
        return p("next", e, t);
    }
    function* d(e, n) {
        for (const _o of p("next", e, n)){
            yield _o;
            const { node, depth } = _o;
            if (require("Lexical").$isSlotHost(node) && !node.is(n)) {
                for (const _n4 of require("Lexical").$getSlotNames(node)){
                    const _o2 = require("Lexical").$getSlot(node, _n4);
                    if (_o2 !== null) {
                        yield* f(_o2, depth + 1);
                    }
                }
            }
        }
    }
    function* f(e, n) {
        yield {
            depth: n,
            node: e
        };
        const o = n + 1;
        if (require("Lexical").$isSlotHost(e)) {
            for (const _n5 of require("Lexical").$getSlotNames(e)){
                const _r2 = require("Lexical").$getSlot(e, _n5);
                if (_r2 !== null) {
                    yield* f(_r2, o);
                }
            }
        }
        if (require("Lexical").$isElementNode(e)) {
            for (const _t4 of e.getChildren()){
                yield* f(_t4, o);
            }
        }
    }
    function g(e, n) {
        const o = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(require("Lexical").$getSiblingCaret(e, n));
        return o && o[0];
    }
    function p(e, n, o) {
        const r = require("Lexical").$getRoot();
        const i = n || r;
        const initial = require("Lexical").$isElementNode(i) ? require("Lexical").$getChildCaret(i, e) : require("Lexical").$getSiblingCaret(i, e);
        const l = h(i);
        const a = o ? require("Lexical").$getAdjacentChildCaret(require("Lexical").$getChildCaretOrSelf(require("Lexical").$getSiblingCaret(o, e))) || g(o, e) : g(i, e);
        let c = l;
        return require("Lexical").makeStepwiseIterator({
            hasNext: function hasNext(e) {
                return e !== null;
            },
            initial,
            map: function map(e) {
                return {
                    depth: c,
                    node: e.origin
                };
            },
            step: function step(e) {
                if (e.isSameNodeCaret(a)) {
                    return null;
                }
                if (require("Lexical").$isChildCaret(e)) {
                    c++;
                }
                const n = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(e);
                if (!n || n[0].isSameNodeCaret(a)) {
                    return null;
                }
                c += n[1];
                return n[0];
            }
        });
    }
    function h(e) {
        let n = -1;
        for(let _o3 = e; _o3 !== null; _o3 = _o3.getParent() ?? require("Lexical").$getSlotHost(_o3)){
            n++;
        }
        return n;
    }
    function $(e, t) {
        return p("previous", e, t);
    }
    function* m(e, n) {
        const o = [];
        for (const _r3 of p("previous", e, n)){
            while(o.length > 0 && _r3.depth <= o[o.length - 1].depth){
                const _e7 = o.pop();
                yield* S(_e7.node, _e7.depth + 1);
            }
            yield _r3;
            const { node, depth } = _r3;
            if (require("Lexical").$isSlotHost(node) && require("Lexical").$getSlotNames(node).length > 0 && !node.is(n)) {
                o.push({
                    depth,
                    node
                });
            }
        }
        while(o.length > 0){
            const _e9 = o.pop();
            yield* S(_e9.node, _e9.depth + 1);
        }
    }
    function* S(e, n) {
        const o = require("Lexical").$getSlotNames(e);
        for(let _r4 = o.length - 1; _r4 >= 0; _r4--){
            const _i4 = require("Lexical").$getSlot(e, o[_r4]);
            if (_i4 !== null) {
                yield* x(_i4, n);
            }
        }
    }
    function* x(e, n) {
        yield {
            depth: n,
            node: e
        };
        const o = n + 1;
        if (require("Lexical").$isElementNode(e)) {
            const _t5 = e.getChildren();
            for(let _e0 = _t5.length - 1; _e0 >= 0; _e0--){
                yield* x(_t5[_e0], o);
            }
        }
        if (require("Lexical").$isSlotHost(e)) {
            yield* S(e, o);
        }
    }
    function C(e, t) {
        if (e == null) {
            return false;
        }
        const n = Object.getPrototypeOf(e);
        return n != null && n.constructor != null && n.constructor.name === t.name;
    }
    let E = !(require("Lexical").IS_FIREFOX || !require("Lexical").CAN_USE_DOM) && undefined;
    function N(e, n, o) {
        let r = false;
        const _loop2 = function _loop2(_i5) {
            if (n(_i5)) {
                if (o !== null) {
                    o(_i5);
                }
            } else {
                r = true;
                if (require("Lexical").$isElementNode(_i5)) {
                    N(_i5, n, o || function(e) {
                        return _i5.insertAfter(e);
                    });
                }
                _i5.remove();
            }
        };
        for (const _i5 of y(e)){
            _loop2(_i5);
        }
        return r;
    }
    function y(e) {
        return R(require("Lexical").$getChildCaret(e, "previous"));
    }
    function R(e) {
        return require("Lexical").makeStepwiseIterator({
            hasNext: require("Lexical").$isSiblingCaret,
            initial: e.getAdjacentCaret(),
            map: function map(e) {
                return e.origin.getLatest();
            },
            step: function step(e) {
                return e.getAdjacentCaret();
            }
        });
    }
    function b(t, n) {
        return require("LexicalSelection").$isAtEdgeOfElement(t, n, "previous");
    }
    function A(t, n) {
        return require("LexicalSelection").$isAtEdgeOfElement(t, n, "next");
    }
    exports.$findMatchingParent = require("Lexical").$findMatchingParent;
    exports.$getAdjacentSiblingOrParentSiblingCaret = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret;
    exports.$insertNodeToNearestRootAtCaret = require("Lexical").$insertNodeToNearestRootAtCaret;
    exports.$isBlockFullySelected = require("Lexical").$isBlockFullySelected;
    exports.$splitNode = require("Lexical").$splitNode;
    exports.CAN_USE_BEFORE_INPUT = require("Lexical").CAN_USE_BEFORE_INPUT;
    exports.CAN_USE_DOM = require("Lexical").CAN_USE_DOM;
    exports.IS_ANDROID = require("Lexical").IS_ANDROID;
    exports.IS_ANDROID_CHROME = require("Lexical").IS_ANDROID_CHROME;
    exports.IS_APPLE = require("Lexical").IS_APPLE;
    exports.IS_APPLE_WEBKIT = require("Lexical").IS_APPLE_WEBKIT;
    exports.IS_CHROME = require("Lexical").IS_CHROME;
    exports.IS_FIREFOX = require("Lexical").IS_FIREFOX;
    exports.IS_IOS = require("Lexical").IS_IOS;
    exports.IS_SAFARI = require("Lexical").IS_SAFARI;
    exports.addClassNamesToElement = require("Lexical").addClassNamesToElement;
    exports.isBlockDomNode = require("Lexical").isBlockDomNode;
    exports.isHTMLAnchorElement = require("Lexical").isHTMLAnchorElement;
    exports.isHTMLElement = require("Lexical").isHTMLElement;
    exports.isInlineDomNode = require("Lexical").isInlineDomNode;
    exports.mergeRegister = require("Lexical").mergeRegister;
    exports.removeClassNamesFromElement = require("Lexical").removeClassNamesFromElement;
    exports.$descendantsMatching = function(e, n) {
        const o = [];
        const r = Array.from(e).reverse();
        for(let _e1 = r.pop(); _e1 !== undefined; _e1 = r.pop()){
            if (n(_e1)) {
                o.push(_e1);
            } else if (require("Lexical").$isElementNode(_e1)) {
                for (const _t6 of y(_e1)){
                    r.push(_t6);
                }
            }
        }
        return o;
    };
    exports.$dfs = function(e, t) {
        return Array.from(u(e, t));
    };
    exports.$dfsIterator = u;
    exports.$dfsWithSlots = function(e, t) {
        return Array.from(d(e, t));
    };
    exports.$dfsWithSlotsIterator = d;
    exports.$filter = function(e, t) {
        const n = [];
        for(let _o4 = 0; _o4 < e.length; _o4++){
            const _r5 = t(e[_o4]);
            if (_r5 !== null) {
                n.push(_r5);
            }
        }
        return n;
    };
    exports.$firstToLastIterator = function(e) {
        return R(require("Lexical").$getChildCaret(e, "next"));
    };
    exports.$getAdjacentCaret = function(e) {
        if (e) {
            return e.getAdjacentCaret();
        }
        return null;
    };
    exports.$getDepth = h;
    exports.$getNearestBlockElementAncestorOrThrow = function(e) {
        const o = require("Lexical").$findMatchingParent(e, function(e) {
            return require("Lexical").$isElementNode(e) && !e.isInline();
        });
        if (!require("Lexical").$isElementNode(o)) {
            n(4, e.__key);
        }
        return o;
    };
    exports.$getNearestNodeOfType = function(e, t) {
        let n = e;
        while(n != null){
            if (n instanceof t) {
                return n;
            }
            n = n.getParent();
        }
        return null;
    };
    exports.$getNextRightPreorderNode = function(e) {
        const n = require("Lexical").$getChildCaretOrSelf(require("Lexical").$getSiblingCaret(e, "previous"));
        const o = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(n, "root");
        return o && o[0].origin;
    };
    exports.$getNextSiblingOrParentSibling = function(e) {
        const n = require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(require("Lexical").$getSiblingCaret(e, "next"));
        return n && [
            n[0].origin,
            n[1]
        ];
    };
    exports.$handleIndentAndOutdent = function(e) {
        const n = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(n)) {
            return false;
        }
        const o = new Set();
        const r = n.getNodes();
        for (const _i6 of r){
            const _s2 = _i6.getKey();
            if (o.has(_s2)) {
                continue;
            }
            const _l2 = require("Lexical").$findMatchingParent(_i6, function(e) {
                return require("Lexical").$isElementNode(e) && !e.isInline();
            });
            if (_l2 === null) {
                continue;
            }
            const _a = _l2.getKey();
            if (_l2.canIndent() && !o.has(_a)) {
                o.add(_a);
                e(_l2);
            }
        }
        return o.size > 0;
    };
    exports.$insertFirst = function(e, n) {
        require("Lexical").$getChildCaret(e, "next").insert(n);
    };
    exports.$insertNodeIntoLeaf = function(e) {
        const n = require("Lexical").$getSelection();
        if (!require("Lexical").$isRangeSelection(n)) {
            return void (n && n.insertNodes([
                e
            ]));
        }
        const o = require("Lexical").$caretRangeFromSelection(n);
        let anchor = require("Lexical").$getCaretRangeInDirection(require("Lexical").$removeTextFromCaretRange(o), "next").anchor;
        if (require("Lexical").$isTextPointCaret(anchor)) {
            const _e10 = require("Lexical").$splitAtPointCaretNext(anchor);
            if (!_e10) {
                return;
            }
            anchor = _e10;
        }
        const i = anchor.getFlipped();
        i.insert(e);
        require("Lexical").$setSelectionFromCaretRange(require("Lexical").$getCaretRange(i, i));
    };
    exports.$insertNodeToNearestRoot = function(e) {
        const n = require("Lexical").$getSelection() || require("Lexical").$getPreviousSelection();
        let o;
        if (require("Lexical").$isRangeSelection(n)) {
            o = require("Lexical").$caretFromPoint(n.focus, "next");
        } else {
            if (n != null) {
                const _e11 = n.getNodes();
                const _r6 = _e11[_e11.length - 1];
                if (_r6) {
                    o = require("Lexical").$getSiblingCaret(_r6, "next");
                }
            }
            o = o || require("Lexical").$getChildCaret(require("Lexical").$getRoot(), "previous").getFlipped().insert(require("Lexical").$createParagraphNode());
        }
        const r = require("Lexical").$insertNodeToNearestRootAtCaret(e, o, (i = o, require("Lexical").$isExtendableTextPointCaret(i) || require("Lexical").$getAdjacentSiblingOrParentSiblingCaret(require("Lexical").$isTextPointCaret(i) ? i.getSiblingCaret() : i, "shadowRoot") !== null ? {
            $shouldSplit: function $shouldSplit(e, t) {
                return t !== "last";
            }
        } : undefined));
        var i;
        const s = require("Lexical").$getAdjacentChildCaret(r);
        const l = require("Lexical").$isChildCaret(s) ? require("Lexical").$normalizeCaret(s) : r;
        require("Lexical").$setSelectionFromCaretRange(require("Lexical").$getCollapsedCaretRange(l));
        return e.getLatest();
    };
    exports.$isAtEndOfNode = A;
    exports.$isAtStartOfNode = b;
    exports.$isEditorIsNestedEditor = function(e) {
        return e._parentEditor !== null;
    };
    exports.$lastToFirstIterator = y;
    exports.$onEscapeDown = function(e, n) {
        const o = require("Lexical").$getSelection();
        if (require("Lexical").$isRangeSelection(o) && o.isCollapsed()) {
            const _r7 = require("Lexical").$findMatchingParent(o.anchor.getNode(), e);
            if (_r7) {
                const _e12 = _r7.getParent();
                if (_e12 !== null && _e12.getLastChild() === _r7 && A(o.anchor, _r7)) {
                    _r7.insertAfter(require("Lexical").$createParagraphNode()).selectEnd();
                    if (n) {
                        n.preventDefault();
                    }
                    return true;
                }
            }
        }
        return false;
    };
    exports.$onEscapeUp = function(e, n) {
        const o = require("Lexical").$getSelection();
        if (require("Lexical").$isRangeSelection(o) && o.isCollapsed()) {
            const _r8 = require("Lexical").$findMatchingParent(o.anchor.getNode(), e);
            if (_r8) {
                const _e13 = _r8.getParent();
                if (_e13 !== null && _e13.getFirstChild() === _r8 && b(o.anchor, _r8)) {
                    _r8.insertBefore(require("Lexical").$createParagraphNode()).selectEnd();
                    if (n) {
                        n.preventDefault();
                    }
                    return true;
                }
            }
        }
        return false;
    };
    exports.$restoreEditorState = function(e, n) {
        const o = new Map();
        const e__pendingEditorState = e._pendingEditorState;
        for (const [_e14, _r9] of n._nodeMap){
            o.set(_e14, require("Lexical").$cloneWithProperties(_r9));
        }
        if (e__pendingEditorState) {
            e__pendingEditorState._nodeMap = o;
        }
        require("Lexical").$fullReconcile();
        const n__selection = n._selection;
        require("Lexical").$setSelection(n__selection === null ? null : n__selection.clone());
    };
    exports.$reverseDfs = function(e, t) {
        return Array.from($(e, t));
    };
    exports.$reverseDfsIterator = $;
    exports.$reverseDfsWithSlots = function(e, t) {
        return Array.from(m(e, t));
    };
    exports.$reverseDfsWithSlotsIterator = m;
    exports.$unwrapAndFilterDescendants = function(e, t) {
        return N(e, t, null);
    };
    exports.$unwrapNode = function(e) {
        require("Lexical").$rewindSiblingCaret(require("Lexical").$getSiblingCaret(e, "next")).splice(1, e.getChildren());
    };
    exports.$wrapNodeInElement = function(e, t) {
        const n = t();
        e.replace(n);
        n.append(e);
        return n;
    };
    exports.calculateZoomLevel = function(e, n = false) {
        let o = 1;
        if ((()=>{
            if (E === undefined) {
                const _e15 = document.createElement("div");
                _e15.style.position = "absolute";
                _e15.style.opacity = "0";
                _e15.style.width = "100px";
                _e15.style.left = "-1000px";
                document.body.appendChild(_e15);
                const _t7 = _e15.getBoundingClientRect();
                _e15.style.setProperty("zoom", "2");
                E = _e15.getBoundingClientRect().width === _t7.width;
                document.body.removeChild(_e15);
            }
            return E;
        })() || n) {
            const _n7 = e && e.ownerDocument.defaultView || window;
            while(e){
                o *= Number(_n7.getComputedStyle(e).getPropertyValue("zoom"));
                e = require("Lexical").getParentElement(e);
            }
        }
        return o;
    };
    exports.dedupeSelectionRects = function(e) {
        const t = function t(e, _t8) {
            return _t8.left >= e.left - 1 && _t8.top >= e.top - 1 && _t8.right <= e.right + 1 && _t8.bottom <= e.bottom + 1;
        };
        const n = [];
        const _loop3 = function _loop3(_o5) {
            if (!(_o5.width < 0.5 || _o5.height < 0.5 || n.some((e)=>t(_o5, e)))) {
                for(let _e16 = n.length - 1; _e16 >= 0; _e16--){
                    if (t(n[_e16], _o5)) {
                        n.splice(_e16, 1);
                    }
                }
                n.push(_o5);
            }
        };
        for (const _o5 of Array.from(e)){
            _loop3(_o5);
        }
        return n;
    };
    exports.eventFiles = function(e) {
        let t = null;
        if (C(e, DragEvent)) {
            t = e.dataTransfer;
        } else if (C(e, ClipboardEvent)) {
            t = e.clipboardData;
        }
        if (t === null) {
            return [
                false,
                [],
                false
            ];
        }
        const t_types = t.types;
        const o = t_types.includes("Files");
        const r = t_types.includes("text/html") || t_types.includes("text/plain");
        return [
            o,
            Array.from(t.files),
            r
        ];
    };
    exports.getScrollParent = function(e, n) {
        const e_ownerDocument = e.ownerDocument;
        const r = e_ownerDocument.defaultView || window;
        let i = r.getComputedStyle(e);
        const s = i.position === "absolute";
        const l = n ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
        if (i.position === "fixed") {
            return e_ownerDocument.body;
        }
        for(let _n8 = e; _n8 = require("Lexical").getParentElement(_n8);){
            i = r.getComputedStyle(_n8);
            if ((!s || i.position !== "static") && l.test(i.overflow + i.overflowY + i.overflowX)) {
                return _n8;
            }
        }
        return e_ownerDocument.body;
    };
    exports.isMimeType = c;
    exports.makeStateWrapper = function(stateConfig) {
        const n = function n(_n9) {
            return require("Lexical").$getState(_n9, stateConfig);
        };
        const o = function o(n, _o6) {
            return require("Lexical").$setState(n, stateConfig, _o6);
        };
        return {
            $get: n,
            $set: o,
            accessors: [
                n,
                o
            ],
            makeGetterMethod: function makeGetterMethod() {
                return function() {
                    return n(this);
                };
            },
            makeSetterMethod: function makeSetterMethod() {
                return function(e) {
                    return o(this, e);
                };
            },
            stateConfig
        };
    };
    exports.markSelection = a;
    exports.mediaFileReader = function(e, t) {
        const n = e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        return new Promise((resolve, reject)=>{
            const r = [];
            const _i7 = function i() {
                const _n$next = n.next();
                const { done, value } = _n$next;
                if (done) {
                    return resolve(r);
                }
                const a = new FileReader();
                a.addEventListener("error", reject);
                a.addEventListener("load", function() {
                    const a_result = a.result;
                    if (typeof a_result === "string") {
                        r.push({
                            file: value,
                            result: a_result
                        });
                    }
                    _i7();
                });
                if (c(value, t)) {
                    a.readAsDataURL(value);
                } else {
                    _i7();
                }
            };
            _i7();
        });
    };
    exports.objectKlassEquals = C;
    exports.positionNodeOnRange = i;
    exports.registerNestedElementResolver = function(e, t, n, o) {
        const r = function r(e) {
            return e instanceof t;
        };
        return e.registerNodeTransform(t, function(e) {
            const t = ((e)=>{
                const t = e.getChildren();
                for (const _n0 of t){
                    if (r(_n0)) {
                        return null;
                    }
                }
                let parent = e;
                let child = e;
                while(parent !== null){
                    child = parent;
                    parent = parent.getParent();
                    if (r(parent)) {
                        return {
                            child,
                            parent
                        };
                    }
                }
                return null;
            })(e);
            if (t !== null) {
                const { child, parent } = t;
                if (child.is(e)) {
                    o(parent, e);
                    const _t9 = child.getNextSiblings();
                    const _s3 = _t9.length;
                    parent.insertAfter(child);
                    if (_s3 !== 0) {
                        const _e18 = n(parent);
                        child.insertAfter(_e18);
                        for(let _n1 = 0; _n1 < _s3; _n1++){
                            _e18.append(_t9[_n1]);
                        }
                    }
                    if (!(parent.canBeEmpty() || parent.getChildrenSize() !== 0)) {
                        parent.remove();
                    }
                }
            }
        });
    };
    exports.selectionAlwaysOnDisplay = function(e, n) {
        let o = null;
        const r = function r() {
            const r = e.getRootElement();
            const i = r !== null ? r.ownerDocument.defaultView : null;
            const s = i !== null ? i.getSelection() : null;
            const l = s !== null ? require("Lexical").getDOMSelectionPoints(s, r).anchorNode : null;
            if (l !== null && r !== null && r.contains(l)) {
                if (o !== null) {
                    o();
                    o = null;
                }
            } else if (o === null) {
                o = a(e, n);
            }
        };
        return e.registerRootListener(function(e) {
            if (e) {
                const _n10 = e.ownerDocument;
                const _i9 = require("Lexical").mergeRegister(require("Lexical").registerEventListener(_n10, "selectionchange", r), function() {
                    if (o !== null) {
                        o();
                    }
                });
                r();
                return _i9;
            }
        });
    };
}, null);