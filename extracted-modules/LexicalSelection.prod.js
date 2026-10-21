__d("LexicalSelection.prod", [
    "Lexical"
], function $module_LexicalSelection_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function t(e, ...t_1) {
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
    function n(e) {
        return function() {};
    }
    function o(t, n, o) {
        const r = t.getElementByKey(n.getKey());
        if (r === null || require("Lexical").$isTextNode(n)) {
            return [
                require("Lexical").getDOMTextNode(r),
                o
            ];
        }
        const r_parentNode = r.parentNode;
        if (r_parentNode && r.nodeName === "BR") {
            return [
                r_parentNode,
                Array.from(r_parentNode.childNodes).indexOf(r)
            ];
        }
        return t.read("latest", function() {
            return require("Lexical").$getElementAndOffsetForPoint(t, n, o);
        });
    }
    function r(e) {
        let t = "";
        for(const _n in e){
            if (_n) {
                t += `${_n}: ${e[_n]};`;
            }
        }
        return t;
    }
    function i(t) {
        const n = require("Lexical").$getEditor().getElementByKey(t.getKey());
        if (n === null) {
            return null;
        }
        const defaultView = n.ownerDocument.defaultView;
        if (defaultView === null) {
            return null;
        }
        return defaultView.getComputedStyle(n);
    }
    function s(t) {
        const n = require("Lexical").$isRootNode(t) ? t : t.getParent();
        return n && i(n);
    }
    function l(t, n, o) {
        let r = n.getNode();
        let i = o;
        if (require("Lexical").$isElementNode(r)) {
            const _e2 = r.getDescendantByIndex(n.offset);
            if (_e2 !== null) {
                r = _e2;
            }
        }
        const _loop = function _loop() {
            if (require("Lexical").$isElementNode(r)) {
                const _e3 = r.getLastDescendant();
                if (_e3 !== null) {
                    r = _e3;
                }
            }
            let o = r.getPreviousSibling();
            let s = 0;
            if (o === null) {
                let _e4 = r.getParentOrThrow();
                let _t = _e4.getPreviousSibling();
                while(_t === null){
                    _e4 = _e4.getParent();
                    if (_e4 === null) {
                        o = null;
                        break;
                    }
                    _t = _e4.getPreviousSibling();
                }
                if (_e4 !== null) {
                    s = _e4.isInline() ? 0 : 2;
                    o = _t;
                }
            }
            let l = r.getTextContent();
            if (l === "" && require("Lexical").$isElementNode(r) && !r.isInline()) {
                l = "\n\n";
            }
            const l_length = l.length;
            if (!require("Lexical").$isTextNode(r) || i >= l_length) {
                const _t2 = r.getParent();
                r.remove();
                if (!(_t2 == null || _t2.getChildrenSize() !== 0 || require("Lexical").$isRootNode(_t2))) {
                    _t2.remove();
                }
                i -= l_length + s;
                r = o;
            } else {
                const _o = r.getKey();
                const _s = t.read("latest", function() {
                    const t = require("Lexical").$getNodeByKey(_o);
                    if (require("Lexical").$isTextNode(t) && t.isSimpleText()) {
                        return t.getTextContent();
                    }
                    return null;
                });
                const _d = l_length - i;
                const _a = l.slice(0, _d);
                if (_s !== null && _s !== l) {
                    const _t3 = require("Lexical").$getPreviousSelection();
                    let _n2 = r;
                    if (r.isSimpleText()) {
                        r.setTextContent(_s);
                    } else {
                        const _t4 = require("Lexical").$createTextNode(_s);
                        r.replace(_t4);
                        _n2 = _t4;
                    }
                    if (require("Lexical").$isRangeSelection(_t3) && _t3.isCollapsed()) {
                        const _e5 = _t3.anchor.offset;
                        _n2.select(_e5, _e5);
                    }
                } else if (r.isSimpleText()) {
                    const _e6 = n.key === _o;
                    let _t5 = n.offset;
                    if (_t5 < i) {
                        _t5 = l_length;
                    }
                    const _s2 = _e6 ? _t5 - i : 0;
                    const _l = _e6 ? _t5 : _d;
                    if (_e6 && _s2 === 0) {
                        const _r$splitText = r.splitText(_s2, _l);
                        const _e7 = _r$splitText[0];
                        _e7.remove();
                    } else {
                        const _r$splitText2 = r.splitText(_s2, _l);
                        const _e8 = _r$splitText2[1];
                        _e8.remove();
                    }
                } else {
                    const _t6 = require("Lexical").$createTextNode(_a);
                    r.replace(_t6);
                }
                i = 0;
            }
        };
        while(i > 0 && r !== null){
            _loop();
        }
    }
    const c = n();
    function d(n, o) {
        if (!(require("Lexical").$isRangeSelection(n) ? n.isCollapsed() : require("Lexical").$isTextNode(n) || require("Lexical").$isElementNode(n))) {
            t(280);
        }
        const i = require("Lexical").getStyleObjectFromCSS(require("Lexical").$isRangeSelection(n) ? n.style : require("Lexical").$isTextNode(n) ? n.getStyle() : n.getTextStyle());
        const s = r(Object.entries(o).reduce((acc, [t, o])=>{
            if (typeof o === "function") {
                acc[t] = o(i[t], n);
            } else if (o === null) {
                delete acc[t];
            } else {
                acc[t] = o;
            }
            return acc;
        }, babelHelpers.extends({}, i)));
        if (require("Lexical").$isRangeSelection(n) || require("Lexical").$isTextNode(n)) {
            n.setStyle(s);
        } else {
            n.setTextStyle(s);
        }
    }
    function a(t, n) {
        if (!t) {
            return;
        }
        const o = require("Lexical").$isRangeSelection(t) ? require("Lexical").$caretRangeFromSelection(t).getTextSlices() : [];
        for (const _r of t.getNodes()){
            if (!require("Lexical").$isTextNode(_r) || !_r.canHaveFormat()) {
                continue;
            }
            const _i = require("Lexical").$getTextPointCaretSliceForNode(o, _r);
            if (_i ? _i.distance !== 0 : _r.getTextContentSize() !== 0) {
                n(_i && !require("Lexical").$isTokenOrSegmented(_r) ? require("Lexical").$splitTextPointCaretSlice(_i, require("Lexical").$isRangeSelection(t) ? t : null) : _r);
            }
        }
        if (require("Lexical").$isRangeSelection(t) && t.anchor.type === "text" && t.focus.type === "text" && t.anchor.key === t.focus.key) {
            f(t);
        }
    }
    function f(e) {
        if (e.isBackward()) {
            const { anchor, focus } = e;
            const { key, offset, type } = anchor;
            anchor.set(focus.key, focus.offset, focus.type);
            focus.set(key, offset, type);
        }
    }
    function g(e, t) {
        const n = e.getFormatType();
        const o = e.getIndent();
        if (n !== t.getFormatType()) {
            t.setFormat(n);
        }
        if (o !== t.getIndent()) {
            t.setIndent(o);
        }
    }
    function u(t, n, o) {
        let r = require("Lexical").$caretFromPoint(t, o);
        if (require("Lexical").$isExtendableTextPointCaret(r)) {
            return false;
        }
        for(; r; r = r.getParentCaret()){
            const _e9 = r.getParentAtCaret();
            if (!_e9 || r.getNodeAtCaret()) {
                return false;
            }
            if (n.is(_e9)) {
                return true;
            }
        }
        return false;
    }
    function $(e) {
        return e.getNode().isAttached();
    }
    function p(t) {
        let n = t;
        while(n !== null && !require("Lexical").$isRootOrShadowRoot(n)){
            const _e0 = n.getLatest();
            const _t8 = n.getParent();
            if (_e0.getChildrenSize() === 0) {
                n.remove(true);
            }
            n = _t8;
        }
    }
    function S(n, o, r, i, s = null) {
        if (o.length === 0) {
            return;
        }
        const l = o[0];
        const c = new Map();
        const d = [];
        const a = require("Lexical").$isElementNode(l) ? l : l.getParentOrThrow();
        let f = a.isInline() ? a.getParentOrThrow() : a;
        let g = false;
        while(f !== null){
            const _t9 = f.getPreviousSibling();
            if (_t9 !== null) {
                f = _t9;
                g = true;
                break;
            }
            f = f.getParentOrThrow();
            if (require("Lexical").$isRootOrShadowRoot(f)) {
                break;
            }
        }
        const u = new Set();
        for(let _t0 = 0; _t0 < r; _t0++){
            const _n4 = o[_t0];
            if (require("Lexical").$isElementNode(_n4) && _n4.getChildrenSize() === 0) {
                u.add(_n4.getKey());
            }
        }
        const S = new Set();
        for(let _n5 = 0; _n5 < r; _n5++){
            const _r3 = o[_n5];
            let _s3 = _r3.getParent();
            if (_s3 !== null && _s3.isInline()) {
                _s3 = _s3.getParent();
            }
            if (_s3 !== null && require("Lexical").$isLeafNode(_r3) && !S.has(_r3.getKey())) {
                const _t1 = _s3.getKey();
                if (c.get(_t1) === undefined) {
                    const _n6 = i();
                    _n6.setFormat(_s3.getFormatType());
                    _n6.setIndent(_s3.getIndent());
                    d.push(_n6);
                    c.set(_t1, _n6);
                    const _o3 = _s3.getChildren();
                    _n6.splice(_n6.getChildrenSize(), 0, _o3);
                    for (const _t10 of _o3){
                        S.add(_t10.getKey());
                        if (require("Lexical").$isElementNode(_t10)) {
                            for (const _e1 of _t10.getChildrenKeys()){
                                S.add(_e1);
                            }
                        }
                    }
                    p(_s3);
                }
            } else if (u.has(_r3.getKey())) {
                if (!require("Lexical").$isElementNode(_r3)) {
                    t(179);
                }
                const _n7 = i();
                _n7.setFormat(_r3.getFormatType());
                _n7.setIndent(_r3.getIndent());
                d.push(_n7);
                _r3.remove(true);
            }
        }
        if (s !== null) {
            for (const _t11 of d){
                s.append(_t11);
            }
        }
        let m = null;
        if (require("Lexical").$isRootOrShadowRoot(f)) {
            if (g) {
                if (s !== null) {
                    f.insertAfter(s);
                } else {
                    for(let _e11 = d.length - 1; _e11 >= 0; _e11--){
                        const _t12 = d[_e11];
                        f.insertAfter(_t12);
                    }
                }
            } else {
                const _t13 = f;
                const _n8 = _t13.getFirstChild();
                if (require("Lexical").$isElementNode(_n8)) {
                    f = _n8;
                }
                if (_n8 === null) {
                    if (s) {
                        _t13.append(s);
                    } else {
                        for (const _n9 of d){
                            _t13.append(_n9);
                            m = _n9;
                        }
                    }
                } else if (s !== null) {
                    _n8.insertBefore(s);
                } else {
                    for (const _t14 of d){
                        _n8.insertBefore(_t14);
                        m = _t14;
                    }
                }
            }
        } else if (s) {
            f.insertAfter(s);
        } else {
            for(let _e14 = d.length - 1; _e14 >= 0; _e14--){
                const _t15 = d[_e14];
                f.insertAfter(_t15);
                m = _t15;
            }
        }
        const h = require("Lexical").$getPreviousSelection();
        if (require("Lexical").$isRangeSelection(h) && $(h.anchor) && $(h.focus)) {
            require("Lexical").$setSelection(h.clone());
        } else if (m !== null) {
            m.selectEnd();
        } else {
            n.dirty = true;
        }
    }
    function m(e) {
        const t = h(e);
        return t !== null && t.writingMode === "vertical-rl";
    }
    function h(t) {
        const n = t.anchor.getNode();
        if (require("Lexical").$isElementNode(n)) {
            return i(n);
        }
        return s(n);
    }
    function x(e, t, n, o) {
        e.modify(t ? "extend" : "move", n, o);
    }
    function N(e) {
        const t = h(e);
        return t !== null && t.direction === "rtl";
    }
    function y(t, n, o) {
        const r = t.getStyle();
        const i = require("Lexical").getStyleObjectFromCSS(r);
        return i !== null && i[n] || o;
    }
    const getStyleObjectFromCSS = require("Lexical").getStyleObjectFromCSS;
    const C = l;
    exports.$cloneWithProperties = require("Lexical").$cloneWithProperties;
    exports.$selectAll = require("Lexical").$selectAll;
    exports.$addNodeStyle = c;
    exports.$copyBlockFormatIndent = g;
    exports.$ensureForwardRangeSelection = f;
    exports.$forEachSelectedTextNode = function(t) {
        a(require("Lexical").$getSelection(), t);
    };
    exports.$getComputedStyleForElement = i;
    exports.$getComputedStyleForParent = s;
    exports.$getSelectionStyleValueForProperty = function(t, n, o = "") {
        let r = null;
        const i = t.getNodes();
        let s;
        let l;
        if (require("Lexical").$isRangeSelection(t)) {
            if (t.isCollapsed() && t.style !== "") {
                const _o4 = require("Lexical").getStyleObjectFromCSS(t.style);
                if (_o4 !== null && n in _o4) {
                    return _o4[n];
                }
            }
            const { anchor, focus } = t;
            const _i3 = t.isBackward();
            const _c = _i3 ? focus.getNode() : anchor.getNode();
            const _d2 = _i3 ? anchor.getNode() : focus.getNode();
            const _a2 = _i3 ? focus.offset : anchor.offset;
            const _f = _i3 ? anchor.offset : focus.offset;
            if (require("Lexical").$isTextNode(_c) && _a2 === _c.getTextContentSize()) {
                s = _c;
            }
            if (_f === 0) {
                l = _d2;
            }
        }
        for(let _t16 = 0; _t16 < i.length; _t16++){
            const _c2 = i[_t16];
            if (require("Lexical").$isTextNode(_c2) && !_c2.is(_t16 === 0 ? s : l)) {
                const _e15 = y(_c2, n, o);
                if (r === null) {
                    r = _e15;
                } else if (r !== _e15) {
                    r = "";
                    break;
                }
            }
        }
        if (r === null) {
            return o;
        }
        return r;
    };
    exports.$isAtEdgeOfElement = u;
    exports.$isAtNodeEnd = function(n) {
        if (n.type === "text") {
            return n.offset === n.getNode().getTextContentSize();
        }
        const o = n.getNode();
        if (!require("Lexical").$isElementNode(o)) {
            t(177);
        }
        return n.offset === o.getChildrenSize();
    };
    exports.$isParentElementRTL = N;
    exports.$isParentRTL = function(e) {
        const t = s(e);
        return t !== null && t.direction === "rtl";
    };
    exports.$moveCaretSelection = x;
    exports.$moveCharacter = function(e, t, n) {
        const o = N(e);
        let r;
        r = m(e) || o ? !n : n;
        x(e, t, r, "character");
    };
    exports.$patchStyleText = function(t, n) {
        const o = new Set();
        if (require("Lexical").$isRangeSelection(t) && t.isCollapsed()) {
            d(t, n);
            const _r5 = t.anchor.getNode();
            if (require("Lexical").$isElementNode(_r5) && _r5.isEmpty()) {
                o.add(_r5.getKey());
                d(_r5, n);
            }
        }
        a(t, (e)=>{
            d(e, n);
        });
        const r = t.getNodes();
        if (r.length > 0) {
            for (const _t17 of r){
                if (!require("Lexical").$isElementNode(_t17) || !_t17.canBeEmpty() || _t17.getChildrenSize() !== 0) {
                    continue;
                }
                const _r6 = _t17.getKey();
                if (!o.has(_r6)) {
                    o.add(_r6);
                    d(_t17, n);
                }
            }
        }
    };
    exports.$setBlocksType = function(t, n, o = g) {
        if (!t) {
            return;
        }
        const r = t.getStartEndPoints();
        let i = false;
        let s = null;
        const l = new Map();
        if (r) {
            let _require_Lexical;
            const _n0 = r[0];
            const _o6 = r[1];
            const _c3 = (_require_Lexical = require("Lexical")).$findMatchingParent(_n0.getNode(), _require_Lexical.INTERNAL_$isBlock);
            s = _require_Lexical.$findMatchingParent(_o6.getNode(), _require_Lexical.INTERNAL_$isBlock);
            const _d3 = t.isBackward() ? "previous" : "next";
            i = require("Lexical").$isElementNode(s) && !s.is(_c3) && ((_o6_1, n, o)=>{
                const r = _o6_1.getNode();
                return (!require("Lexical").$isElementNode(r) || !r.isEmpty()) && u(_o6_1, n, o);
            })(_o6, s, require("Lexical").flipDirection(_d3));
            if (require("Lexical").$isElementNode(_c3)) {
                l.set(_c3.getKey(), _c3);
            }
            if (require("Lexical").$isElementNode(s) && !i) {
                l.set(s.getKey(), s);
            }
        }
        for (const _n1 of t.getNodes()){
            if (require("Lexical").$isElementNode(_n1) && require("Lexical").INTERNAL_$isBlock(_n1)) {
                if (i && _n1.is(s)) {
                    continue;
                }
                l.set(_n1.getKey(), _n1);
            } else if (!r) {
                const _t18 = require("Lexical").$findMatchingParent(_n1, require("Lexical").INTERNAL_$isBlock);
                if (require("Lexical").$isElementNode(_t18)) {
                    l.set(_t18.getKey(), _t18);
                }
            }
        }
        for (const _t19 of l.values()){
            if (require("Lexical").$getSlotHost(_t19) !== null) {
                continue;
            }
            const _r7 = n();
            o(_t19, _r7);
            _t19.replace(_r7, true);
        }
    };
    exports.$shouldOverrideDefaultCharacterSelection = function(t, n) {
        let o = m(t) ? !n : n;
        if (N(t)) {
            o = !o;
        }
        const r = require("Lexical").$caretFromPoint(t.focus, o ? "previous" : "next");
        if (require("Lexical").$isExtendableTextPointCaret(r)) {
            return false;
        }
        if (require("Lexical").$isTextPointCaret(r) && !require("Lexical").$isTabNode(r.origin) && r.origin.isUnmergeable()) {
            const _t20 = r.getNodeAtCaret();
            if (require("Lexical").$isTextNode(_t20) && !require("Lexical").$isTabNode(_t20)) {
                return true;
            }
        }
        for (const _t21 of require("Lexical").$extendCaretToRange(r)){
            if (require("Lexical").$isChildCaret(_t21)) {
                return !_t21.origin.isInline();
            }
            if (!require("Lexical").$isElementNode(_t21.origin)) {
                if (require("Lexical").$isDecoratorNode(_t21.origin)) {
                    return true;
                }
                break;
            }
        }
        return false;
    };
    exports.$sliceSelectedTextNodeContent = function(t, n, o = "self") {
        const r = t.getStartEndPoints();
        if (r !== null && n.isSelected(t) && !require("Lexical").$isTokenOrSegmented(n)) {
            const _ref2 = t.isBackward() ? [
                r[1],
                r[0]
            ] : r;
            const _i4 = _ref2[0];
            const _s4 = _ref2[1];
            const _l2 = !require("Lexical").$isRangeSelection(t) || _i4.type !== "element" && _s4.type !== "element" ? undefined : require("Lexical").$getTextPointCaretSliceForNode(require("Lexical").$caretRangeFromSelection(t).getTextSlices(), n);
            const _ref3 = _l2 ? _l2.getSliceIndices() : [
                n.__key === _i4.key ? _i4.offset : 0,
                n.__key === _s4.key ? _s4.offset : undefined
            ];
            const _c4 = _ref3[0];
            const _d4 = _ref3[1];
            const _a3 = n.__text.slice(_c4, _d4);
            if (_a3 !== n.__text) {
                if (o === "clone") {
                    n = require("Lexical").$cloneWithPropertiesEphemeral(n);
                }
                n.__text = _a3;
            }
        }
        return n;
    };
    exports.$trimTextContentFromAnchor = l;
    exports.$wrapNodes = function(t, n, o = null) {
        const r = t.getStartEndPoints();
        const i = r ? r[0] : null;
        const s = t.getNodes();
        const s_length = s.length;
        if (i !== null) {
            const _t22 = require("Lexical").$getSlotFrame(i.getNode());
            if (_t22 !== null && !require("Lexical").$isRootOrShadowRoot(_t22)) {
                return;
            }
        }
        if (i !== null && (s_length === 0 || s_length === 1 && i.type === "element" && i.getNode().getChildrenSize() === 0)) {
            const _e16 = i.type === "text" ? i.getNode().getParentOrThrow() : i.getNode();
            const _t23 = _e16.getChildren();
            let _r8 = n();
            _r8.setFormat(_e16.getFormatType());
            _r8.setIndent(_e16.getIndent());
            _t23.forEach((e)=>_r8.append(e));
            if (o) {
                _r8 = o.append(_r8);
            }
            return void _e16.replace(_r8);
        }
        let c = null;
        let d = [];
        for(let _r9 = 0; _r9 < s_length; _r9++){
            const _i5 = s[_r9];
            if (require("Lexical").$isRootOrShadowRoot(_i5)) {
                S(t, d, d.length, n, o);
                d = [];
                c = _i5;
            } else if (c === null || c !== null && require("Lexical").$hasAncestor(_i5, c)) {
                d.push(_i5);
            } else {
                S(t, d, d.length, n, o);
                d = [
                    _i5
                ];
            }
        }
        S(t, d, d.length, n, o);
    };
    exports.createDOMRange = function(t, n, r, i, s) {
        const l = require("Lexical").getRootOwnerDocument(t.getRootElement()).createRange();
        const _o7 = o(t, n, r);
        const c = _o7[0];
        const d = _o7[1];
        const _o8 = o(t, i, s);
        const a = _o8[0];
        const f = _o8[1];
        let g = f;
        if (c === null || a === null) {
            return null;
        }
        const c_firstChild = c.firstChild;
        if (c === a && c_firstChild != null && c_firstChild.nodeName === "BR" && d === 0 && g === 0) {
            g = 1;
        }
        try {
            l.setStart(c, d);
            l.setEnd(a, g);
        } catch (e) {
            return null;
        }
        if (!(!l.collapsed || d === g && n.is(i))) {
            l.setStart(a, g);
            l.setEnd(c, d);
        }
        return l;
    };
    exports.createRectsFromDOMRange = function(e, t) {
        const n = e.getRootElement();
        if (n === null) {
            return [];
        }
        const o = n.getBoundingClientRect();
        const r = getComputedStyle(n);
        const i = parseFloat(r.paddingLeft) + parseFloat(r.paddingRight);
        const s = Array.from(t.getClientRects());
        let l;
        let s_length = s.length;
        s.sort((e, t)=>{
            const n = e.top - t.top;
            if (Math.abs(n) <= 3) {
                return e.left - t.left;
            }
            return n;
        });
        for(let _e17 = 0; _e17 < s_length; _e17++){
            const _t24 = s[_e17];
            const _n10 = l && l.top <= _t24.top && l.bottom >= _t24.bottom && l.left <= _t24.left && l.right >= _t24.right;
            const _r0 = _t24.width + i === o.width;
            if (_n10 || _r0) {
                s.splice(_e17--, 1);
                s_length--;
            } else {
                l = _t24;
            }
        }
        return s;
    };
    exports.getCSSFromStyleObject = r;
    exports.getStyleObjectFromCSS = getStyleObjectFromCSS;
    exports.trimTextContentFromAnchor = C;
}, null);