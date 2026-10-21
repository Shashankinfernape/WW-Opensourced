__d("LexicalClipboard.prod", [
    "Lexical",
    "LexicalExtensionGetExtensionDependency",
    "LexicalExtensionGetPeerDependencyFromEditor",
    "LexicalHtml",
    "LexicalSelection",
    "LexicalUtils"
], function $module_LexicalClipboard_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function l(t, n, o = null) {
        const r = require("Lexical").getRootOwnerDocument(o);
        const shadowRoots = o ? require("Lexical").getDOMShadowRoots(o) : [];
        const l = o !== null && shadowRoots.length > 0;
        if (l && typeof r.caretPositionFromPoint === "function") {
            const _l = r.caretPositionFromPoint(t, n, {
                shadowRoots
            });
            if (_l !== null && ((t, n)=>{
                for(let _o = t; _o !== null;){
                    if (_o === n) {
                        return true;
                    }
                    _o = require("Lexical").getParentElement(_o);
                }
                return false;
            })(_l.offsetNode, o)) {
                return {
                    node: _l.offsetNode,
                    offset: _l.offset
                };
            }
        }
        if (l) {
            const _i = o.getRootNode();
            if (require("Lexical").isDOMShadowRoot(_i)) {
                const _e = _i.elementFromPoint(t, n);
                if (_e !== null && o.contains(_e)) {
                    const _o2 = ((e, t, n, o)=>{
                        const r = o.createRange();
                        const i = function i(e) {
                            if (t < e.top) {
                                return e.top - t;
                            }
                            if (t > e.bottom) {
                                return t - e.bottom;
                            }
                            return 0;
                        };
                        const l = function l(t) {
                            if (e < t.left) {
                                return t.left - e;
                            }
                            if (e > t.right) {
                                return e - t.right;
                            }
                            return 0;
                        };
                        const s = o.createTreeWalker(n, NodeFilter.SHOW_TEXT);
                        let c = null;
                        let a = Infinity;
                        let u = Infinity;
                        for(let _e2 = s.nextNode(); _e2; _e2 = s.nextNode()){
                            r.selectNodeContents(_e2);
                            for (const _t of r.getClientRects()){
                                const _n = i(_t);
                                const _o3 = l(_t);
                                if (_n < a || _n === a && _o3 < u) {
                                    a = _n;
                                    u = _o3;
                                    c = _e2;
                                }
                            }
                        }
                        if (c === null) {
                            return null;
                        }
                        let f = 0;
                        let p = Infinity;
                        let d = Infinity;
                        for(let _t2 = 0; _t2 <= c.length; _t2++){
                            r.setStart(c, _t2);
                            r.collapse(true);
                            const _n2 = r.getBoundingClientRect();
                            const _o4 = i(_n2);
                            const _l2 = Math.abs(e - _n2.left);
                            if (_o4 < p || _o4 === p && _l2 < d) {
                                p = _o4;
                                d = _l2;
                                f = _t2;
                            }
                        }
                        return {
                            node: c,
                            offset: f
                        };
                    })(t, n, _e, r);
                    if (_o2 !== null) {
                        return _o2;
                    }
                }
            }
        }
        if (typeof r.caretRangeFromPoint === "function") {
            const _e3 = r.caretRangeFromPoint(t, n);
            if (_e3 === null) {
                return null;
            }
            return {
                node: _e3.startContainer,
                offset: _e3.startOffset
            };
        }
        if (typeof r.caretPositionFromPoint === "function") {
            const _e4 = r.caretPositionFromPoint(t, n);
            if (_e4 === null) {
                return null;
            }
            return {
                node: _e4.offsetNode,
                offset: _e4.offset
            };
        }
        return null;
    }
    function s(e, ...t_1) {
        throw ((e, ...t)=>{
            const n = new URL("https://lexical.dev/docs/error");
            const o = new URLSearchParams();
            o.append("code", e);
            for (const _e5 of t){
                o.append("v", _e5);
            }
            n.search = o.toString();
            return new Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
        })(...[
            e
        ].concat(Array.from(t_1)));
    }
    const c = {
        "application/x-lexical-editor": 0,
        "text/html": 10,
        "text/plain": 20,
        "text/uri-list": 30
    };
    function a(e) {
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            return window.trustedTypes.createPolicy("Lexical", {
                createHTML: function createHTML(e) {
                    return e;
                }
            }).createHTML(e);
        }
        return e;
    }
    const u = function u(t, n) {
        if (!require("Lexical").$isRangeSelection(n)) {
            n.insertRawText(t);
            return true;
        }
        if (n !== require("Lexical").$getSelection()) {
            require("Lexical").$setSelection(n);
        }
        const o = function o(t) {
            const n = require("Lexical").$getSelection();
            if (require("Lexical").$isRangeSelection(n)) {
                t(n);
            }
        };
        require("Lexical").tokenizeRawText(t, {
            linebreak: function linebreak() {
                return o((e)=>e.insertParagraph());
            },
            tab: function tab() {
                return o((t)=>t.insertNodes([
                        require("Lexical").$createTabNode()
                    ]));
            },
            text: function text(e) {
                return o((t)=>t.insertText(e));
            }
        });
        return true;
    };
    const f = {
        "application/x-lexical-editor": [
            function(t, n, o) {
                try {
                    const _o5 = require("Lexical").$getEditor();
                    const _r = JSON.parse(t);
                    if (_r && _r.namespace === _o5._config.namespace && Array.isArray(_r.nodes)) {
                        D(_o5, R(_r.nodes), n);
                        return true;
                    }
                } catch (error) {
                    console.error(error);
                }
                return o();
            }
        ],
        "text/html": [
            function(t, o, r) {
                try {
                    const _r2 = require("Lexical").$getEditor();
                    const _i2 = new DOMParser().parseFromString(a(t), "text/html");
                    D(_r2, require("LexicalHtml").$generateNodesFromDOM(_r2, _i2), o);
                    return true;
                } catch (error) {
                    console.error(error);
                    return r();
                }
            }
        ],
        "text/plain": [
            u
        ],
        "text/uri-list": [
            u
        ]
    };
    function p(e, t, n, o) {
        if (!e) {
            return false;
        }
        const _r3 = function r(t, n, i) {
            return !!e[t] && e[t](n, i, function(e = n, o = i) {
                return _r3(t - 1, e, o);
            }, o);
        };
        return _r3(e.length - 1, t, n);
    }
    function d(e, t, n) {
        const o = t.getData("text/plain");
        for (const _r4 of ((e)=>Object.keys(e.$importMimeType).filter((t)=>e.$importMimeType[t] !== undefined).sort((t, n)=>{
                const o = e.priority[t];
                const r = e.priority[n];
                if (o === undefined && r === undefined) {
                    if (t < n) {
                        return -1;
                    }
                    if (t > n) {
                        return 1;
                    }
                    return 0;
                }
                if (o === undefined) {
                    return 1;
                }
                if (r === undefined) {
                    return -1;
                }
                return o - r;
            }))(e)){
            const _i3 = t.getData(_r4);
            if (_i3 && (_r4 !== "text/html" || _i3 !== o) && p(e.$importMimeType[_r4], _i3, n, t)) {
                return true;
            }
        }
        return false;
    }
    const g = {
        $importMimeType: f,
        $insertDataTransfer: function $insertDataTransfer(e, t) {
            return d({
                $importMimeType: f,
                priority: c
            }, e, t);
        },
        priority: c
    };
    const m = {
        build: function build(e, t) {
            return {
                $importMimeType: t.$importMimeType,
                $insertDataTransfer: function $insertDataTransfer(e, n) {
                    return d(t, e, n);
                },
                priority: t.priority
            };
        },
        config: {
            $importMimeType: f,
            priority: c
        },
        mergeConfig: function mergeConfig(t, n) {
            const o = require("Lexical").shallowMergeConfig(t, n);
            if (n.$importMimeType) {
                const _e6 = babelHelpers.extends({}, t.$importMimeType);
                for (const [_t3, _o6] of Object.entries(n.$importMimeType)){
                    if (_o6) {
                        const _n3 = _e6[_t3];
                        _e6[_t3] = _n3 ? [].concat(Array.from(_n3), Array.from(_o6)) : _o6;
                    }
                }
                o.$importMimeType = _e6;
            }
            if (n.priority) {
                o.priority = babelHelpers.extends({}, t.priority, n.priority);
            }
            return o;
        },
        name: "@lexical/clipboard/Import"
    };
    const x = {
        dependencies: [
            require("LexicalHtml").CoreImportExtension,
            [
                m,
                {
                    $importMimeType: {
                        "text/html": [
                            function(t, o, r, i) {
                                let _require_LexicalHtml;
                                const l = new DOMParser().parseFromString(a(t), "text/html");
                                const s = (_require_LexicalHtml = require("LexicalHtml")).$generateNodesFromDOMViaExtension(l, {
                                    context: [
                                        _require_LexicalHtml.contextValue(_require_LexicalHtml.ImportSource, "paste"),
                                        _require_LexicalHtml.contextValue(_require_LexicalHtml.ImportSourceDataTransfer, i)
                                    ]
                                });
                                D(require("Lexical").$getEditor(), s, o);
                                return true;
                            }
                        ]
                    }
                }
            ]
        ],
        name: "@lexical/clipboard/DOMImport"
    };
    function $(t, o = require("Lexical").$getSelection()) {
        if (o == null) {
            s(166);
        }
        if (require("Lexical").$isRangeSelection(o) && o.isCollapsed() || o.getNodes().length === 0) {
            return "";
        }
        return require("LexicalHtml").$generateHtmlFromNodes(t, o);
    }
    function y(t, n = require("Lexical").$getSelection()) {
        if (n == null) {
            s(166);
        }
        if (require("Lexical").$isRangeSelection(n) && n.isCollapsed() || n.getNodes().length === 0) {
            return null;
        }
        return JSON.stringify(M(t, n));
    }
    function T(e, t) {
        const n = e.getData("text/plain") || e.getData("text/uri-list");
        if (n != null) {
            t.insertRawText(n);
        }
    }
    function C(e, t, n) {
        (()=>{
            const e = require("LexicalExtensionGetExtensionDependency").$getPeerDependency(m.name);
            if (e) {
                return e.output;
            }
            return g;
        })().$insertDataTransfer(e, t);
    }
    const S = "application/x-lexical-drag";
    function h(t) {
        let n = t;
        if (require("Lexical").$isTextPointCaret(n)) {
            if (n.offset === 0) {
                n = require("Lexical").$rewindSiblingCaret(n.getSiblingCaret());
            } else {
                if (n.offset !== n.origin.getTextContentSize()) {
                    return n;
                }
                n = n.getSiblingCaret();
            }
        }
        while(true){
            const _t4 = n.getParentAtCaret();
            if (_t4 === null || !_t4.isInline() || _t4.isShadowRoot()) {
                return n;
            }
            if (require("Lexical").$isChildCaret(n)) {
                n = require("Lexical").$rewindSiblingCaret(require("Lexical").$getSiblingCaret(_t4, "next"));
            } else {
                if (n.getNodeAtCaret() !== null) {
                    return n;
                }
                n = require("Lexical").$getSiblingCaret(_t4, "next");
            }
        }
    }
    function N(t, n, o) {
        const t_dataTransfer = t.dataTransfer;
        if (t_dataTransfer === null) {
            return false;
        }
        const i = ((t_dataTransfer_1)=>{
            const t = t_dataTransfer_1.getData(S);
            if (!t) {
                return null;
            }
            let n;
            try {
                n = JSON.parse(t);
            } catch (_unused) {
                return null;
            }
            if ((o = n) !== null && typeof o === "object" && "editorKey" in o && typeof o.editorKey === "string") {
                return n;
            }
            return null;
            var o;
        })(t_dataTransfer);
        if (i === null) {
            return false;
        }
        const c = ((t, n)=>{
            const o = l(t.clientX, t.clientY, n.getRootElement());
            if (o === null) {
                return null;
            }
            const r = require("Lexical").$getNearestNodeFromDOMNode(o.node);
            if (r === null) {
                return null;
            }
            if (require("Lexical").$isTextNode(r)) {
                return require("Lexical").$getTextPointCaret(r, "next", o.offset);
            }
            const i = r.getParent();
            if (require("Lexical").$isElementNode(r)) {
                const _t5 = n.getElementByKey(r.getKey());
                if (_t5 === null) {
                    return null;
                }
                const _l3 = require("Lexical").$getDOMSlot(r, _t5, n);
                if (o.node === _l3.element || i) {
                    return require("Lexical").$getChildCaretAtIndex.apply(require("Lexical"), Array.from(_l3.resolveChildIndex(r, _t5, o.node, o.offset)).concat([
                        "next"
                    ]));
                }
                return null;
            }
            return i && require("Lexical").$getChildCaretAtIndex(i, r.getIndexWithinParent() + 1, "next");
        })(t, n);
        if (c === null) {
            return false;
        }
        const a = i.editorKey === n.getKey();
        const u = require("Lexical").$getSelection();
        if (a) {
            if (!require("Lexical").$isRangeSelection(u) || u.isCollapsed()) {
                return false;
            }
            if (((t, n)=>{
                const _e$$getCaretRangeInDi = require("Lexical").$getCaretRangeInDirection(require("Lexical").$caretRangeFromSelection(n), "next");
                const { anchor, focus } = _e$$getCaretRangeInDi;
                const i = h(t);
                return require("Lexical").$comparePointCaretNext(h(anchor), i) <= 0 && require("Lexical").$comparePointCaretNext(i, h(focus)) <= 0;
            })(c, u)) {
                t.preventDefault();
                return true;
            }
        }
        const f = require("Lexical").$normalizeCaret(c);
        const p = require("Lexical").$isTextPointCaret(f) ? require("Lexical").$splitAtPointCaretNext(f) : f;
        if (p === null) {
            return false;
        }
        const d = p.getFlipped();
        if (a && require("Lexical").$isRangeSelection(u)) {
            u.removeText();
        }
        const g = p.origin.isAttached() ? p : d;
        if (!g.origin.isAttached()) {
            s(438);
        }
        o(t_dataTransfer, require("Lexical").$setSelectionFromCaretRange(require("Lexical").$getCollapsedCaretRange(g)), n);
        if (!a) {
            const _t6 = n.getRootElement();
            const _o7 = _t6 ? _t6.ownerDocument : null;
            const _r5 = _o7 ? ((t, _o7_1)=>{
                for (const _o8 of require("Lexical").findAllLexicalElementsDeep(_o7_1)){
                    const _n4 = require("Lexical").getEditorPropertyFromDOMNode(_o8);
                    if (require("Lexical").isLexicalEditor(_n4) && _n4.getKey() === t && require("Lexical").isHTMLElement(_o8)) {
                        return _o8;
                    }
                }
                return null;
            })(i.editorKey, _o7) : null;
            if (_r5 !== null) {
                _r5.dispatchEvent(new InputEvent("beforeinput", {
                    bubbles: true,
                    cancelable: true,
                    inputType: "deleteByDrag"
                }));
            }
        }
        t.preventDefault();
        return true;
    }
    function D(t, n, selection) {
        if (!t.dispatchCommand(require("Lexical").SELECTION_INSERT_CLIPBOARD_NODES_COMMAND, {
            nodes: n,
            selection
        })) {
            selection.insertNodes(n);
            ((selection_1)=>{
                if (require("Lexical").$isRangeSelection(selection_1) && selection_1.isCollapsed()) {
                    const _n5 = selection_1.anchor;
                    let _o9 = null;
                    const _r6 = require("Lexical").$caretFromPoint(_n5, "previous");
                    if (_r6) {
                        if (require("Lexical").$isTextPointCaret(_r6)) {
                            _o9 = _r6.origin;
                        } else {
                            const _t7 = require("Lexical").$getCaretRange(_r6, require("Lexical").$getChildCaret(require("Lexical").$getRoot(), "next").getFlipped());
                            for (const _n6 of _t7){
                                if (require("Lexical").$isTextNode(_n6.origin)) {
                                    _o9 = _n6.origin;
                                    break;
                                }
                                if (require("Lexical").$isElementNode(_n6.origin) && !_n6.origin.isInline()) {
                                    break;
                                }
                            }
                        }
                    }
                    if (_o9 && require("Lexical").$isTextNode(_o9)) {
                        const _e7 = _o9.getFormat();
                        const _n7 = _o9.getStyle();
                        if (!(selection_1.format === _e7 && selection_1.style === _n7)) {
                            selection_1.format = _e7;
                            selection_1.style = _n7;
                            selection_1.dirty = true;
                        }
                    }
                }
            })(selection);
        }
    }
    function E(t, n, r, i = []) {
        let l = n === null || r.isSelected(n);
        const c = require("Lexical").$isElementNode(r) && r.excludeFromCopy("clone");
        let a = r;
        if (n !== null && require("Lexical").$isTextNode(a)) {
            a = require("LexicalSelection").$sliceSelectedTextNodeContent(n, a, "clone");
        }
        const u = require("Lexical").$exportNodeJSON(a);
        const f = require("Lexical").$isElementNode(a) ? a.getChildren() : [];
        const p = u.children || [];
        if (require("Lexical").$isTextNode(a) && a.getTextContentSize() === 0) {
            l = false;
        }
        const d = l && require("Lexical").$isNodeSelection(n) && require("Lexical").$isElementNode(r) ? null : n;
        for (const _i4 of f){
            const _s = E(t, d, _i4, p);
            if (!l && require("Lexical").$isElementNode(r) && _s && r.extractWithChild(_i4, n, "clone")) {
                l = true;
            }
        }
        if (l && !c) {
            const _n8 = require("Lexical").$getSlotNames(a);
            if (_n8.length > 0) {
                const _o1 = {};
                for (const _r7 of _n8){
                    const _n9 = require("Lexical").$getSlot(a, _r7);
                    if (_n9 === null) {
                        s(366, a.constructor.name, _r7);
                    }
                    const _i5 = [];
                    E(t, null, _n9, _i5);
                    if (_i5.length !== 1 || require("Lexical").$isElementNode(_n9) && _n9.excludeFromCopy("clone")) {
                        s(435, _r7, a.constructor.name, String(_i5.length));
                    }
                    _o1[_r7] = _i5[0];
                }
                u.$slots = _o1;
            }
        }
        if (l && !c) {
            i.push(u);
        } else {
            for(let _e8 = 0; _e8 < p.length; _e8++){
                i.push(p[_e8]);
            }
        }
        return l;
    }
    function M(t, n) {
        const o = [];
        const r = require("Lexical").$getRoot();
        const i = require("Lexical").$getSelectionSlotFrame(n);
        const l = (require("Lexical").$isElementNode(i) ? i : r).getChildren();
        for(let _e9 = 0; _e9 < l.length; _e9++){
            E(t, n, l[_e9], o);
        }
        return {
            namespace: t._config.namespace,
            nodes: o
        };
    }
    function R(t) {
        const n = [];
        for (const _o10 of t){
            n.push(require("Lexical").$parseSerializedNode(_o10));
        }
        return n;
    }
    let P = null;
    function b(t, n, o) {
        if (o === undefined) {
            const _n0 = require("Lexical").getDOMSelection(t._window);
            const _r8 = require("Lexical").$getSelection();
            if (!_r8 || _r8.isCollapsed()) {
                return false;
            }
            if (!_n0) {
                return false;
            }
            const _i6 = require("Lexical").getDOMSelectionPoints(_n0, t.getRootElement());
            const { anchorNode, focusNode } = _i6;
            if (anchorNode !== null && focusNode !== null && !require("Lexical").isSelectionWithinEditor(t, anchorNode, focusNode)) {
                return false;
            }
            o = w(_r8);
        }
        n.preventDefault();
        const n_clipboardData = n.clipboardData;
        return n_clipboardData !== null && (F(n_clipboardData, o), true);
    }
    const O = [
        [
            "text/html",
            $
        ],
        [
            "application/x-lexical-editor",
            y
        ]
    ];
    function w(t = require("Lexical").$getSelection()) {
        return ((e, t)=>{
            const n = {
                "text/plain": ""
            };
            for (const [_o11, _r9] of Object.entries(e)){
                if (_r9) {
                    const _e0 = L(_r9, t);
                    if (_e0 !== null) {
                        n[_o11] = _e0;
                    }
                }
            }
            return n;
        })(I(), t);
    }
    function F(e, t) {
        for (const [_n1] of O){
            if (t[_n1] === undefined) {
                e.setData(_n1, "");
            }
        }
        for(const _n10 in t){
            const _o12 = t[_n10];
            if (_o12 !== undefined) {
                e.setData(_n10, _o12);
            }
        }
    }
    function I(n = require("Lexical").$getEditor()) {
        const o = require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(n, _.name);
        if (o) {
            return o.output;
        }
        return v;
    }
    var v = {
        "application/x-lexical-editor": [
            function(t, n) {
                if (t) {
                    return y(require("Lexical").$getEditor(), t);
                }
                return n();
            }
        ],
        "text/html": [
            function(t, n) {
                if (t) {
                    return $(require("Lexical").$getEditor(), t);
                }
                return n();
            }
        ],
        "text/plain": [
            function(e, t) {
                if (e) {
                    return e.getTextContent();
                }
                return t();
            }
        ]
    };
    function L(e, t) {
        const _n11 = function n(o) {
            if (e[o]) {
                return e[o](t, _n11.bind(null, o - 1));
            }
            return null;
        };
        return _n11(e.length - 1);
    }
    var _ = {
        build: function build(e, t, n) {
            return t.$exportMimeType;
        },
        config: {
            $exportMimeType: v
        },
        mergeConfig: function mergeConfig(t, n) {
            const o = require("Lexical").shallowMergeConfig(t, n);
            if (n.$exportMimeType) {
                const _e1 = babelHelpers.extends({}, t.$exportMimeType);
                for (const [_t8, _o13] of Object.entries(n.$exportMimeType)){
                    if (_o13) {
                        const _n12 = _e1[_t8];
                        _e1[_t8] = _n12 ? [].concat(Array.from(_n12), Array.from(_o13)) : _o13;
                    }
                }
                o.$exportMimeType = _e1;
            }
            return o;
        },
        name: "@lexical/clipboard/GetClipboardData"
    };
    exports.$exportMimeTypeFromSelection = function(t, n = require("Lexical").$getSelection()) {
        return L(I()[t] || [], n);
    };
    exports.$generateJSONFromSelectedNodes = M;
    exports.$generateNodesFromSerializedNodes = R;
    exports.$getClipboardDataFromSelection = w;
    exports.$getHtmlContent = $;
    exports.$getLexicalContent = y;
    exports.$handlePlainTextDrop = function(e, t) {
        return N(e, t, (e, t)=>T(e, t));
    };
    exports.$handleRichTextDrop = function(e, t) {
        return N(e, t, C);
    };
    exports.$insertDataTransferForPlainText = T;
    exports.$insertDataTransferForRichText = C;
    exports.$insertGeneratedNodes = D;
    exports.$writeDragSourceToDataTransfer = function(e, t) {
        const n = {
            editorKey: t.getKey()
        };
        e.setData(S, JSON.stringify(n));
    };
    exports.ClipboardDOMImportExtension = x;
    exports.ClipboardImportExtension = m;
    exports.DEFAULT_IMPORT_MIME_TYPE = f;
    exports.DEFAULT_IMPORT_MIME_TYPE_PRIORITY = c;
    exports.GetClipboardDataExtension = _;
    exports.caretFromPoint = l;
    exports.copyToClipboard = async (t, n, o)=>{
        if (P !== null) {
            return false;
        }
        if (n !== null) {
            return new Promise((resolve, reject)=>{
                t.update(function() {
                    resolve(b(t, n, o));
                });
            });
        }
        const i = t.getRootElement();
        const l = t._window || window;
        const l_document = l.document;
        const c = require("Lexical").getDOMSelection(l);
        if (i === null || c === null) {
            return false;
        }
        const a = l_document.createElement("span");
        a.style.position = "fixed";
        a.style.top = "-1000px";
        a.append(l_document.createTextNode("#"));
        i.append(a);
        const u = l_document.createRange();
        u.setStart(a, 0);
        u.setEnd(a, 1);
        c.removeAllRanges();
        c.addRange(u);
        return new Promise((resolve, reject)=>{
            var c = t.registerCommand(require("Lexical").COPY_COMMAND, function(e) {
                if (require("LexicalUtils").objectKlassEquals(e, ClipboardEvent)) {
                    c();
                    if (P !== null) {
                        l.clearTimeout(P);
                        P = null;
                    }
                    resolve(b(t, e, o));
                }
                return true;
            }, require("Lexical").COMMAND_PRIORITY_CRITICAL);
            P = l.setTimeout(function() {
                c();
                P = null;
                resolve(false);
            }, 50);
            l_document.execCommand("copy");
            a.remove();
        });
    };
    exports.setLexicalClipboardDataTransfer = F;
}, null);