__d("LexicalHtml.prod", [
    "Lexical",
    "LexicalExtensionConfig",
    "LexicalExtensionGetExtensionDependency",
    "LexicalExtensionGetPeerDependencyFromEditor",
    "LexicalExtensionHorizontalRuleExtension",
    "LexicalSelection",
    "LexicalUtils"
], function $module_LexicalHtml_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    let _require_Lexical;
    function c(e, ...t_1) {
        throw ((e, ...t)=>{
            const n = new URL("https://lexical.dev/docs/error");
            const o = new URLSearchParams();
            o.append("code", e);
            for (const _e2 of t){
                o.append("v", _e2);
            }
            n.search = o.toString();
            return new Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
        })(...[
            e
        ].concat(Array.from(t_1)));
    }
    let l;
    function u(e, t) {
        const t_key = t.key;
        if (e && t_key in e) {
            return e[t_key];
        }
        return t.defaultValue;
    }
    function a(e) {
        if (l && l.editor === e) {
            return l;
        }
    }
    function f(e, t) {
        const n = a(t);
        return n && n[e];
    }
    function d(e, t) {
        if ("cfg" in t) {
            const { cfg, updater } = t;
            return [
                cfg,
                updater(u(e, cfg))
            ];
        }
        return t;
    }
    function p(e, t) {
        let n = t;
        for (const _o2 of e){
            const _d = d(n, _o2);
            const _e3 = _d[0];
            const _r = _d[1];
            const _s = _e3.key;
            if (n === t && u(n, _e3) === _r) {
                continue;
            }
            const _i = n === t || n === undefined ? h(t) : n;
            _i[_s] = _r;
            n = _i;
        }
        return n;
    }
    function h(e) {
        return Object.create(e || null);
    }
    function m(e, t) {
        return [
            e,
            t
        ];
    }
    function g(e, n, o, r = require("Lexical").$getEditor()) {
        const s = l;
        const i = a(r);
        try {
            l = babelHelpers.extends({}, i, {
                editor: r,
                [e]: n
            });
            return o();
        } finally{
            l = s;
        }
    }
    function x(e, n = function n() {}) {
        return function(o, r = require("Lexical").$getEditor()) {
            return function(t) {
                const s = a(r);
                const i = s && s[e];
                const c = p(o, i || n(r));
                if (c && c !== i) {
                    return g(e, c, t, r);
                }
                return t();
            };
        };
    }
    function $(e, n, parse, isEqual) {
        return Object.assign(require("Lexical").createState(Symbol(n), {
            isEqual,
            parse
        }), {
            [e]: true
        });
    }
    const y = function y(e, t, n) {
        T(e);
        n();
    };
    function T(e) {
        if (!require("Lexical").isDOMDocumentNode(e)) {
            return;
        }
        const o = e;
        if (o.querySelector("style") === null) {
            return;
        }
        const r = new Map();
        function s(e) {
            let t = r.get(e);
            if (t === undefined) {
                t = new Set();
                for(let _n2 = 0; _n2 < e.style.length; _n2++){
                    t.add(e.style[_n2]);
                }
                r.set(e, t);
            }
            return t;
        }
        try {
            for (const _e4 of Array.from(o.styleSheets)){
                let _r2;
                try {
                    _r2 = _e4.cssRules;
                } catch (_unused) {
                    continue;
                }
                for (const _e5 of Array.from(_r2)){
                    if (!require("LexicalUtils").objectKlassEquals(_e5, CSSStyleRule)) {
                        continue;
                    }
                    let _r3;
                    try {
                        _r3 = o.querySelectorAll(_e5.selectorText);
                    } catch (_unused2) {
                        continue;
                    }
                    for (const _n3 of Array.from(_r3)){
                        if (!require("Lexical").isHTMLElement(_n3)) {
                            continue;
                        }
                        const _o3 = s(_n3);
                        for(let _t = 0; _t < _e5.style.length; _t++){
                            const _r4 = _e5.style[_t];
                            if (!_o3.has(_r4)) {
                                _n3.style.setProperty(_r4, _e5.style.getPropertyValue(_r4), _e5.style.getPropertyPriority(_r4));
                            }
                        }
                    }
                }
            }
        } catch (_unused3) {}
    }
    const S = "@lexical/html/DOM";
    const SYMBOL_LEXICALHTMLDOM_EXPORT_CONTEXT = Symbol.for("@lexical/html/DOMExportContext");
    const O = "@lexical/html/DOMImport";
    const SYMBOL_LEXICALHTMLDOM_IMPORT_CONTEXT = Symbol.for("@lexical/html/DOMImportContext");
    const C = function C() {
        return true;
    };
    function N(e, t, n) {
        return $(SYMBOL_LEXICALHTMLDOM_EXPORT_CONTEXT, e, t, n);
    }
    const M = N("root", Boolean);
    const I = N("isExport", Boolean);
    function R(e) {
        const t = require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(e, S);
        if (t) {
            return t.output.defaults;
        }
    }
    function _(e) {
        const t = require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(e, S);
        if (t) {
            return t.output.runtime;
        }
    }
    function v(e = require("Lexical").$getEditor()) {
        const n = _(e);
        if (n) {
            return n.getSessionConfig();
        }
        return require("Lexical").$getEditorDOMRenderConfig(e);
    }
    const k = x(SYMBOL_LEXICALHTMLDOM_EXPORT_CONTEXT, R);
    function b(e) {
        return function(t) {
            return t instanceof e;
        };
    }
    function w(e, { nodes }) {
        if (nodes === "*") {
            return C;
        }
        let n = {};
        const o = [];
        for (const _r5 of nodes){
            if ("getType" in _r5) {
                const _t2 = _r5.getType();
                if (n) {
                    const _o4 = e.get(_t2);
                    if (_o4 === undefined) {
                        c(339, _r5.name, _t2);
                    }
                    for (const _e6 of _o4){
                        n[_e6] = true;
                    }
                }
                o.push(b(_r5));
            } else {
                n = undefined;
                o.push(_r5);
            }
        }
        return n || (o.length === 1 ? o[0] : function(e) {
            for (const _t3 of o){
                if (_t3(e)) {
                    return true;
                }
            }
            return false;
        });
    }
    function A(e) {
        return function(t, n, o) {
            return e(t, o);
        };
    }
    function F(e) {
        return function(t, n, o, r) {
            return e(t, n, r);
        };
    }
    function L(e) {
        return function(t, n, o, r, s) {
            return e(t, n, o, s);
        };
    }
    function P(e) {
        return function(t, n, o, r, s, i) {
            return e(t, n, o, r, i);
        };
    }
    function B(e, t) {
        return function(n, o) {
            const r = function r() {
                return e(n, o);
            };
            const s = t(n);
            if (s) {
                return s(n, r, o);
            }
            return r();
        };
    }
    function H(e, t) {
        return function(n, o, r) {
            const s = function s() {
                return e(n, o, r);
            };
            const i = t(n);
            if (i) {
                return i(n, o, s, r);
            }
            return s();
        };
    }
    const W = H;
    const U = F;
    function z(e, t) {
        return function(n, o, r, s) {
            const i = function i() {
                return e(n, o, r, s);
            };
            const c = t(n);
            if (c) {
                return c(n, o, r, i, s);
            }
            return i();
        };
    }
    function j(e, t) {
        return function(n, o, r, s, i) {
            const c = function c() {
                return e(n, o, r, s, i);
            };
            const l = t(n);
            if (l) {
                return l(n, o, r, s, c, i);
            }
            return c();
        };
    }
    function V(e, t) {
        return function(n, o, r, s) {
            e(n, o, r, s);
            const i = t(n);
            if (i) {
                i(n, o, r, s);
            }
        };
    }
    function Y(e, t, n, o, r) {
        let s = n[t];
        const _loop = function _loop() {
            if (typeof _n4[0] === "function") {
                const _e7 = _n4[0];
                const _t4 = _n4[1];
                s = o(s, function(n) {
                    return _e7(n) && _t4 || undefined;
                });
            } else {
                const _e8 = _n4[1];
                const _t5 = {};
                for(const _n5 in _e8){
                    const _r6 = _e8[_n5];
                    if (_r6) {
                        _t5[_n5] = _r6.reduce((acc, item)=>o(acc, function() {
                                return item;
                            }), s);
                    }
                }
                s = o(s, function(e) {
                    const n = _t5[e.getType()];
                    return n && r(n);
                });
            }
        };
        for (var _n4 of e[t]){
            _loop();
        }
        n[t] = s;
    }
    function q(e, t, n, o) {
        if (!o) {
            return;
        }
        const r = e[t];
        if (typeof n === "function") {
            r.push([
                n,
                o
            ]);
        } else {
            const _e9 = r[r.length - 1];
            let _t6;
            if (_e9 && _e9[0] === "types") {
                _t6 = _e9[1];
            } else {
                _t6 = {};
                r.push([
                    "types",
                    _t6
                ]);
            }
            for(const _e0 in n){
                const _n6 = _t6[_e0] || [];
                _t6[_e0] = _n6;
                _n6.push(o);
            }
        }
    }
    function G(e) {
        return e.nodes === "*";
    }
    function X(e) {
        return e;
    }
    function K(e, { overrides }) {
        const o = ((e, overrides_1)=>{
            const o = require("Lexical").getRegisteredSubtypeMap(require("LexicalExtensionConfig").getKnownTypesAndNodes(e).nodes);
            const s = {
                $createDOM: [],
                $decorateDOM: [],
                $exportDOM: [],
                $extractWithChild: [],
                $getDOMSlot: [],
                $getSlotTargetElement: [],
                $shouldExclude: [],
                $shouldInclude: [],
                $updateDOM: []
            };
            for (const _e1 of ((overrides_1_1)=>{
                const n = [];
                const o = [];
                const r = [];
                for (const _s2 of overrides_1_1){
                    if (G(_s2)) {
                        n.push(_s2);
                    } else if (Array.isArray(_s2.nodes)) {
                        for (const _e10 of _s2.nodes){
                            if (require("Lexical").$isLexicalNode(_e10.prototype)) {
                                r.push(_s2.nodes.length === 1 ? _s2 : babelHelpers.extends({}, _s2, {
                                    nodes: [
                                        _e10
                                    ]
                                }));
                            } else {
                                o.push(_s2.nodes.length === 1 ? _s2 : babelHelpers.extends({}, _s2, {
                                    nodes: [
                                        _e10
                                    ]
                                }));
                            }
                        }
                    }
                }
                const s = new Map();
                const i = function i(e) {
                    let n = s.get(e);
                    if (n === undefined) {
                        n = -1;
                        for (const _o5 of require("Lexical").iterStaticNodeConfigChain(e)){
                            n++;
                        }
                        s.set(e, n);
                    }
                    return n;
                };
                r.sort((e, t)=>i(e.nodes[0]) - i(t.nodes[0]));
                return [].concat(Array.from(r), Array.from(o), Array.from(n));
            })(overrides_1)){
                const _t7 = w(o, _e1);
                for(const _n7 in s){
                    q(s, _n7, _t7, _e1[_n7]);
                }
            }
            return s;
        })(e, overrides);
        const s = babelHelpers.extends({}, require("Lexical").DEFAULT_EDITOR_DOM_CONFIG, e.dom);
        Y(o, "$createDOM", s, B, A);
        Y(o, "$exportDOM", s, B, A);
        Y(o, "$extractWithChild", s, j, P);
        Y(o, "$getDOMSlot", s, W, U);
        Y(o, "$shouldExclude", s, H, F);
        Y(o, "$shouldInclude", s, H, F);
        Y(o, "$getSlotTargetElement", s, z, L);
        Y(o, "$updateDOM", s, z, L);
        Y(o, "$decorateDOM", s, V, X);
        return s;
    }
    function J(e) {
        return {
            get: function get(t) {
                return u(e, t);
            }
        };
    }
    function Q(contextDefaults) {
        const t = Object.create(null);
        return p(contextDefaults, t) || t;
    }
    function Z(e, t) {
        const n = J(t);
        return e.filter((e)=>!(e.disabledForEditor && e.disabledForEditor(n)));
    }
    function ee(e) {
        if (e.nodes === "*") {
            return function() {
                return true;
            };
        }
        const n = e.nodes.map((e)=>{
            const n = e;
            if (require("Lexical").$isLexicalNode(n.prototype)) {
                return function(e) {
                    return e instanceof n;
                };
            }
            return e;
        });
        return function(e) {
            return n.some((t)=>t(e));
        };
    }
    class _te {
        constructor(e, t, n, o){
            this.sessionCache = new Map();
            this.editor = e;
            this.initialEditorConfig = t;
            this.overrides = n;
            this.editorContext = o;
            this.installed = Z(n, o);
            this.hasSessionGates = n.some((e)=>e.disabledForSession);
        }
        setContextValue(e, n) {
            const installed = this.installed;
            this.editorContext[e.key] = n;
            const r = Z(this.overrides, this.editorContext);
            if (((installed_1, t)=>{
                if (installed_1.length !== t.length) {
                    return false;
                }
                for(let _n8 = 0; _n8 < installed_1.length; _n8++){
                    if (installed_1[_n8] !== t[_n8]) {
                        return false;
                    }
                }
                return true;
            })(installed, r)) {
                return;
            }
            const s = ((installed_1, t)=>{
                const n = new Set(installed_1);
                const o = new Set(t);
                const r = [];
                for (const _t8 of installed_1){
                    if (!o.has(_t8)) {
                        r.push(_t8);
                    }
                }
                for (const _e11 of t){
                    if (!n.has(_e11)) {
                        r.push(_e11);
                    }
                }
                return r;
            })(installed, r);
            this.installed = r;
            this.sessionCache.clear();
            const i = K(this.initialEditorConfig, {
                overrides: r
            });
            this.editor._config.dom = i;
            const c = ((e)=>{
                const t = [];
                for (const _n9 of e){
                    if (_n9.$createDOM || _n9.$getDOMSlot || _n9.$decorateDOM) {
                        t.push(ee(_n9));
                    }
                }
                if (t.length === 0) {
                    return null;
                }
                return function(e) {
                    return t.some((t)=>t(e));
                };
            })(s);
            if (!c) {
                return;
            }
            const i_$updateDOM = i.$updateDOM;
            i.$updateDOM = function(e, t, n, o) {
                return !!c(e) || i_$updateDOM(e, t, n, o);
            };
            this.editor.update(require("Lexical").$fullReconcile, {
                discrete: true
            });
            i.$updateDOM = i_$updateDOM;
        }
        getSessionConfig() {
            const e = this.editor._config.dom || require("Lexical").DEFAULT_EDITOR_DOM_CONFIG;
            if (!this.hasSessionGates) {
                return e;
            }
            const n = J(f(SYMBOL_LEXICALHTMLDOM_EXPORT_CONTEXT, this.editor) || this.editorContext);
            const o = [];
            const r = [];
            this.installed.forEach((e, t)=>{
                if (e.disabledForSession && e.disabledForSession(n)) {
                    o.push(String(t));
                } else {
                    r.push(e);
                }
            });
            if (o.length === 0) {
                return e;
            }
            const s = o.join(",");
            let i = this.sessionCache.get(s);
            if (!i) {
                i = K(this.initialEditorConfig, {
                    overrides: r
                });
                this.sessionCache.set(s, i);
            }
            return i;
        }
    }
    const ne = {
        build: function build(e, t, n) {
            const _n$getInitResult = n.getInitResult();
            const _n$getInitResult_initialEditorConfig = _n$getInitResult.initialEditorConfig;
            const r = Q(t.contextDefaults);
            return {
                defaults: r,
                runtime: new _te(e, _n$getInitResult_initialEditorConfig, t.overrides, r)
            };
        },
        config: {
            contextDefaults: [],
            overrides: []
        },
        html: {
            export: new Map([
                [
                    (_require_Lexical = require("Lexical")).RootNode,
                    function() {
                        const e = require("Lexical").$getDocument().createElement("div");
                        e.role = "textbox";
                        return {
                            element: e
                        };
                    }
                ]
            ])
        },
        init: function init(e, t) {
            const initialEditorConfig = {
                dom: e.dom,
                nodes: e.nodes
            };
            const o = Q(t.contextDefaults);
            const overrides = Z(t.overrides, o);
            e.dom = K(e, {
                overrides
            });
            return {
                initialEditorConfig
            };
        },
        mergeConfig: function mergeConfig(e, n) {
            const o = require("Lexical").shallowMergeConfig(e, n);
            for (const _t9 of [
                "overrides",
                "contextDefaults"
            ]){
                if (n[_t9]) {
                    o[_t9] = [].concat(Array.from(e[_t9]), Array.from(n[_t9]));
                }
            }
            return o;
        },
        name: S
    };
    const SYMBOL_LEXICALHTMLSELECTOR_IMPL = Symbol.for("@lexical/html/SelectorImpl");
    function re(e, n) {
        const o = {
            kind: "element",
            predicate: (r = n, r.length === 0 ? require("Lexical").isHTMLElement : r.length === 1 ? r[0] : function(e, t) {
                for (const _n0 of r){
                    if (!_n0(e, t)) {
                        return false;
                    }
                }
                return true;
            }),
            tags: e
        };
        var r;
        const s = function s(t) {
            return re(e, [].concat(Array.from(n), [
                t
            ]));
        };
        return {
            [SYMBOL_LEXICALHTMLSELECTOR_IMPL]: o,
            attr: function attr(e, t, n) {
                return s(ce(e, t, n));
            },
            classAll: function classAll(...e) {
                return s(ie(e));
            },
            classAny: function classAny(...e_1) {
                return s(((e_1_1)=>{
                    const n = se(e_1_1);
                    if (n.length === 0) {
                        return function() {
                            return false;
                        };
                    }
                    return function(e) {
                        if (!require("Lexical").isHTMLElement(e)) {
                            return false;
                        }
                        const e_classList = e.classList;
                        for (const _e12 of n){
                            if (e_classList.contains(_e12)) {
                                return true;
                            }
                        }
                        return false;
                    };
                })(e_1));
            },
            styleAny: function styleAny(e, n, o) {
                return s(((e, n, o)=>{
                    if (typeof n === "string") {
                        return function(o) {
                            return require("Lexical").isHTMLElement(o) && o.style.getPropertyValue(e) === n;
                        };
                    }
                    if (n instanceof RegExp) {
                        const _r7 = o && o.capture;
                        const _s3 = n;
                        return function(n, o) {
                            if (!require("Lexical").isHTMLElement(n)) {
                                return false;
                            }
                            const i = n.style.getPropertyValue(e);
                            if (!i) {
                                return false;
                            }
                            const c = i.match(_s3);
                            return c !== null && (_r7 !== undefined && (o[_r7] = c), true);
                        };
                    }
                    c(362, JSON.stringify(e));
                })(e, n, o));
            }
        };
    }
    function se(e) {
        const t = [];
        for (const _n1 of e){
            if (_n1) {
                t.push(_n1);
            }
        }
        return t;
    }
    function ie(e) {
        const n = se(e);
        if (n.length === 0) {
            return function() {
                return true;
            };
        }
        return function(e) {
            if (!require("Lexical").isHTMLElement(e)) {
                return false;
            }
            const e_classList = e.classList;
            for (const _e13 of n){
                if (!e_classList.contains(_e13)) {
                    return false;
                }
            }
            return true;
        };
    }
    function ce(e, n, o) {
        if (n === true) {
            return function(n) {
                return require("Lexical").isHTMLElement(n) && n.hasAttribute(e);
            };
        }
        if (typeof n === "string") {
            return function(o) {
                return require("Lexical").isHTMLElement(o) && o.getAttribute(e) === n;
            };
        }
        if (n instanceof RegExp) {
            const _r8 = o && o.capture;
            const _s4 = n;
            return function(n, o) {
                if (!require("Lexical").isHTMLElement(n)) {
                    return false;
                }
                const i = n.getAttribute(e);
                if (i == null) {
                    return false;
                }
                const c = i.match(_s4);
                return c !== null && (_r8 !== undefined && (o[_r8] = c), true);
            };
        }
        c(361, JSON.stringify(e));
    }
    function le(e) {
        return {
            [SYMBOL_LEXICALHTMLSELECTOR_IMPL]: e
        };
    }
    const ue = le({
        kind: "text",
        predicate: _require_Lexical.isDOMTextNode,
        tags: new Set()
    });
    const ae = le({
        kind: "comment",
        predicate: function predicate(e) {
            return e.nodeType === 8;
        },
        tags: new Set()
    });
    function any() {
        return re(new Set(), []);
    }
    function comment() {
        return ae;
    }
    function tag(...e) {
        if (!(e.length > 0)) {
            c(363);
        }
        const t = new Set();
        for (const _n10 of e){
            t.add(_n10.toUpperCase());
        }
        return re(t, []);
    }
    function he() {
        return ue;
    }
    const me = {
        any,
        comment,
        tag,
        text: he
    };
    const ge = /[A-Za-z0-9_-]/;
    class _xe {
        constructor(e, t){
            this.source = e;
            this.pos = t;
        }
        peek(e = 0) {
            return this.source[this.pos + e] || "";
        }
        consume() {
            return this.source[this.pos++] || "";
        }
        eof() {
            return this.pos >= this.source.length;
        }
        skipWhitespace() {
            while(!this.eof() && /\s/.test(this.peek())){
                this.pos++;
            }
        }
        readIdent() {
            const pos = this.pos;
            while(!this.eof() && ge.test(this.peek())){
                this.pos++;
            }
            return this.source.slice(pos, this.pos);
        }
        readQuoted() {
            const e = this.consume();
            this.assert(e === '"' || e === "'", "expected quote");
            const pos = this.pos;
            while(!this.eof() && this.peek() !== e){
                if (this.peek() === "\\") {
                    this.pos += 2;
                } else {
                    this.pos++;
                }
            }
            this.assert(!this.eof(), "unterminated string");
            const n = this.source.slice(pos, this.pos);
            this.pos++;
            return n.replace(/\\(.)/g, "$1");
        }
        assert(e, t) {
            if (!e) {
                c(364, String(this.pos + 1), t, this.source);
            }
        }
    }
    function $e(e) {
        const t = new Set();
        const predicates = [];
        const o = [];
        let r = false;
        e.skipWhitespace();
        if (e.peek() === "*") {
            e.consume();
            r = true;
        } else if (ge.test(e.peek())) {
            const _n11 = e.readIdent();
            if (_n11) {
                t.add(_n11.toUpperCase());
            }
        }
        while(!e.eof()){
            const _t0 = e.peek();
            if (_t0 === ".") {
                e.consume();
                const _t1 = e.readIdent();
                e.assert(_t1 !== "", 'expected class name after "."');
                o.push(_t1);
            } else if (_t0 === "#") {
                e.consume();
                const _t10 = e.readIdent();
                e.assert(_t10 !== "", 'expected id after "#"');
                predicates.push(ce("id", _t10));
            } else {
                if (_t0 !== "[") {
                    break;
                }
                {
                    e.consume();
                    e.skipWhitespace();
                    const _t11 = e.readIdent();
                    e.assert(_t11 !== "", 'expected attribute name after "["');
                    e.skipWhitespace();
                    let _o6 = true;
                    if (e.peek() === "=") {
                        e.consume();
                        e.skipWhitespace();
                        const _t12 = e.peek();
                        if (_t12 === '"' || _t12 === "'") {
                            _o6 = e.readQuoted();
                        } else {
                            _o6 = e.readIdent();
                            e.assert(_o6 !== "", "expected attribute value");
                        }
                        e.skipWhitespace();
                    }
                    e.assert(e.peek() === "]", 'expected "]"');
                    e.consume();
                    predicates.push(ce(_t11, _o6));
                }
            }
        }
        if (o.length > 0) {
            predicates.push(ie(o));
        }
        e.assert(r || t.size > 0 || predicates.length > 0, "expected a selector");
        return {
            predicates,
            tags: t
        };
    }
    function css(e) {
        const t = new _xe(e, 0);
        const n = [];
        while(n.push($e(t)), t.skipWhitespace(), !t.eof()){
            t.assert(t.peek() === ",", 'expected "," (selector lists are the only supported combinator)');
            t.consume();
            t.skipWhitespace();
        }
        if (n.length === 1) {
            return re(n[0].tags, n[0].predicates);
        }
        const o = new Set();
        if (n.every((e)=>e.tags.size > 0)) {
            for (const _e14 of n){
                for (const _t13 of _e14.tags){
                    o.add(_t13);
                }
            }
        }
        return re(o, [
            function(e, t) {
                for (const _o7 of n){
                    const _n12 = e.nodeName;
                    if (_o7.tags.size > 0 && !_o7.tags.has(_n12)) {
                        continue;
                    }
                    let _r9 = true;
                    for (const _n13 of _o7.predicates){
                        if (!_n13(e, t)) {
                            _r9 = false;
                            break;
                        }
                    }
                    if (_r9) {
                        return true;
                    }
                }
                return false;
            }
        ]);
    }
    function Te(e, t, n) {
        return $(SYMBOL_LEXICALHTMLDOM_IMPORT_CONTEXT, e, t, n);
    }
    const Se = Te("importSource", function() {
        return "unknown";
    });
    const Ee = Te("importSourceDataTransfer", function() {
        return null;
    });
    const Oe = Te("textFormat", function() {
        return 0;
    });
    const De = Te("textStyle", function() {
        return {};
    });
    function preservesWhitespace(e) {
        if (!require("Lexical").isHTMLElement(e)) {
            return false;
        }
        if (e.nodeName === "PRE") {
            return true;
        }
        const whiteSpace = e.style.whiteSpace;
        return typeof whiteSpace === "string" && whiteSpace.startsWith("pre");
    }
    function isInline(e) {
        if (require("Lexical").isDOMTextNode(e)) {
            return true;
        }
        if (!require("Lexical").isHTMLElement(e)) {
            return false;
        }
        const display = e.style.display;
        if (display) {
            return display.startsWith("inline");
        }
        return !require("Lexical").isBlockDomNode(e) && require("Lexical").isInlineDomNode(e);
    }
    const Me = Te("whitespaceConfig", function() {
        return {
            isInline,
            preservesWhitespace
        };
    });
    const Ie = Te("importOverlays", function() {
        return [];
    });
    class _Re {
        constructor(e){
            this.record = e;
        }
        get(e) {
            return u(this.record, e);
        }
        set(e, t) {
            this.record[e.key] = t;
        }
        update(e, t) {
            this.record[e.key] = t(u(this.record, e));
        }
        has(e) {
            return Object.prototype.hasOwnProperty.call(this.record, e.key);
        }
    }
    function _e(e) {
        const t = require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(e, O);
        if (t) {
            return t.output.defaults;
        }
    }
    function ve(e, n = require("Lexical").$getEditor()) {
        return u(((e)=>f(SYMBOL_LEXICALHTMLDOM_IMPORT_CONTEXT, e) || _e(e))(n), e);
    }
    const ke = x(SYMBOL_LEXICALHTMLDOM_IMPORT_CONTEXT, _e);
    function be(e) {
        return require("Lexical").$isBlockElementNode(e) || require("Lexical").$isDecoratorNode(e) && !e.isInline();
    }
    function we(e, n) {
        if (!require("Lexical").isHTMLElement(n)) {
            return e;
        }
        const textAlign = n.style.textAlign;
        if (!Ue(textAlign)) {
            return e;
        }
        for (const _n14 of e){
            if (require("Lexical").$isBlockElementNode(_n14) && _n14.getFormatType() === "") {
                _n14.setFormat(textAlign);
            }
        }
        return e;
    }
    function $packageRun(e, n, o) {
        if (e.length === 1 && require("Lexical").$isLineBreakNode(e[0])) {
            e = [];
        }
        const r = require("Lexical").$createParagraphNode();
        if (require("Lexical").isHTMLElement(o)) {
            const _e15 = o.style.textAlign;
            if (Ue(_e15)) {
                r.setFormat(_e15);
            }
        }
        return [
            r.splice(0, 0, e)
        ];
    }
    const Fe = {
        $accepts: be,
        $packageRun,
        name: "BlockSchema"
    };
    const Le = {
        $accepts: function $accepts(e) {
            return !be(e);
        },
        name: "InlineSchema"
    };
    const Pe = {
        $accepts: be,
        $packageRun: function $packageRun(e) {
            return e;
        },
        name: "NestedBlockSchema"
    };
    const Be = {
        $accepts: be,
        $packageRun,
        name: "RootSchema"
    };
    const He = me;
    var We = new Set([
        "center",
        "end",
        "justify",
        "left",
        "right",
        "start"
    ]);
    function Ue(e) {
        return We.has(e);
    }
    const ze = {
        B: {
            fontWeight: "bold"
        },
        EM: {
            fontStyle: "italic"
        },
        I: {
            fontStyle: "italic"
        },
        S: {
            textDecoration: "line-through"
        },
        STRONG: {
            fontWeight: "bold"
        },
        SUB: {
            verticalAlign: "sub"
        },
        SUP: {
            verticalAlign: "super"
        },
        U: {
            textDecoration: "underline"
        }
    };
    const je = {
        CODE: _require_Lexical.IS_CODE,
        MARK: _require_Lexical.IS_HIGHLIGHT
    };
    const Ve = new Set([
        "font-weight",
        "font-style",
        "text-decoration",
        "text-transform",
        "vertical-align"
    ]);
    const Ye = {
        $import: function $import(e, n) {
            const o = e.get(Oe);
            const r = ze[n.nodeName];
            const s = ((e)=>({
                    fontStyle: e.style.fontStyle,
                    fontWeight: e.style.fontWeight,
                    textDecoration: e.style.textDecoration,
                    textTransform: e.style.textTransform,
                    verticalAlign: e.style.verticalAlign
                }))(n);
            let i;
            let c;
            let l = o & ~(u = ((e)=>{
                let n = 0;
                let clear = 0;
                const { fontWeight, fontStyle, textDecoration, textTransform, verticalAlign } = e;
                if (fontWeight === "700" || fontWeight === "bold") {
                    n |= require("Lexical").IS_BOLD;
                } else if (!(fontWeight !== "normal" && fontWeight !== "400")) {
                    clear |= require("Lexical").IS_BOLD;
                }
                if (fontStyle === "italic") {
                    n |= require("Lexical").IS_ITALIC;
                } else if (fontStyle === "normal") {
                    clear |= require("Lexical").IS_ITALIC;
                }
                if (textDecoration) {
                    const _e16 = textDecoration.split(" ");
                    if (_e16.includes("underline")) {
                        n |= require("Lexical").IS_UNDERLINE;
                    }
                    if (_e16.includes("line-through")) {
                        n |= require("Lexical").IS_STRIKETHROUGH;
                    }
                    if (_e16.includes("none")) {
                        clear |= require("Lexical").IS_UNDERLINE | require("Lexical").IS_STRIKETHROUGH;
                    }
                }
                switch(textTransform){
                    case "lowercase":
                        n |= require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase;
                        clear |= require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase | require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize;
                        break;
                    case "uppercase":
                        n |= require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase;
                        clear |= require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase | require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize;
                        break;
                    case "capitalize":
                        n |= require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize;
                        clear |= require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase | require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase;
                        break;
                    default:
                        if (textTransform === "none") {
                            clear |= require("Lexical").TEXT_TYPE_TO_FORMAT.lowercase | require("Lexical").TEXT_TYPE_TO_FORMAT.uppercase | require("Lexical").TEXT_TYPE_TO_FORMAT.capitalize;
                        }
                }
                switch(verticalAlign){
                    case "sub":
                        n |= require("Lexical").IS_SUBSCRIPT;
                        clear |= require("Lexical").IS_SUPERSCRIPT;
                        break;
                    case "super":
                        n |= require("Lexical").IS_SUPERSCRIPT;
                        clear |= require("Lexical").IS_SUBSCRIPT;
                        break;
                    default:
                        if (verticalAlign === "baseline") {
                            clear |= require("Lexical").IS_SUBSCRIPT | require("Lexical").IS_SUPERSCRIPT;
                        }
                }
                return {
                    clear,
                    set: n
                };
            })(r ? (i = r, {
                fontStyle: (c = s).fontStyle || i.fontStyle,
                fontWeight: c.fontWeight || i.fontWeight,
                textDecoration: c.textDecoration || i.textDecoration,
                textTransform: c.textTransform || i.textTransform,
                verticalAlign: c.verticalAlign || i.verticalAlign
            }) : s)).clear | u.set;
            var u;
            const a = je[n.nodeName];
            if (a) {
                l |= a;
            }
            if (l === o) {
                return e.$importChildren(n);
            }
            return e.$importChildren(n, {
                context: [
                    m(Oe, l)
                ]
            });
        },
        match: He.tag("b", "strong", "em", "i", "code", "mark", "s", "sub", "sup", "u", "span"),
        name: "@lexical/html/inline-format"
    };
    function qe(e, n, o) {
        let r = e;
        while(true){
            let _e17 = null;
            while((_e17 = n ? r.nextSibling : r.previousSibling) === null){
                const _e18 = r.parentNode;
                if (_e18 === null) {
                    return null;
                }
                r = _e18;
            }
            r = _e17;
            if (!o.isInline(r)) {
                return null;
            }
            let _s5 = r;
            while((_s5 = n ? r.firstChild : r.lastChild) !== null){
                r = _s5;
            }
            if (require("Lexical").isDOMTextNode(r)) {
                return r;
            }
            if (r.nodeName === "BR") {
                return null;
            }
        }
    }
    function Ge(e, n) {
        if (n !== 0 && require("Lexical").$isTextNode(e)) {
            return e.setFormat(n);
        }
        return e;
    }
    function Xe(e, n) {
        if (require("Lexical").$isTextNode(e)) {
            const _t14 = ((e)=>{
                let t = "";
                for(const _n15 in e){
                    if (!Ve.has(_n15)) {
                        t += `${_n15}: ${e[_n15]}; `;
                    }
                }
                return t.trimEnd();
            })(n);
            if (_t14 !== "") {
                e.setStyle(_t14);
            }
        }
        return e;
    }
    const Ke = {
        $import: function $import(e, n) {
            const o = e.get(Oe);
            const r = e.get(De);
            const s = e.get(Me);
            if ((({ parentNode }, t)=>{
                while(parentNode !== null){
                    if (t.preservesWhitespace(parentNode)) {
                        return true;
                    }
                    parentNode = parentNode.parentNode;
                }
                return false;
            })(n, s)) {
                const _e19 = require("Lexical").$generateNodesFromRawText(n.textContent || "");
                for (const _t15 of _e19){
                    Ge(_t15, o);
                    Xe(_t15, r);
                }
                return _e19;
            }
            const i = ((e, t)=>{
                let n = (e.textContent || "").replace(/\r/g, "").replace(/[ \t\n]+/g, " ");
                if (n.length === 0) {
                    return "";
                }
                if (n[0] === " ") {
                    let _o8 = e;
                    let _r0 = true;
                    while(_o8 !== null && (_o8 = qe(_o8, false, t)) !== null){
                        const _e20 = _o8.textContent || "";
                        if (_e20.length > 0) {
                            if (/[ \t\n]$/.test(_e20)) {
                                n = n.slice(1);
                            }
                            _r0 = false;
                            break;
                        }
                    }
                    if (_r0) {
                        n = n.slice(1);
                    }
                }
                if (n.length > 0 && n[n.length - 1] === " ") {
                    let _o9 = e;
                    let _r1 = true;
                    while(_o9 !== null && (_o9 = qe(_o9, true, t)) !== null){
                        if ((_o9.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
                            _r1 = false;
                            break;
                        }
                    }
                    if (_r1) {
                        n = n.slice(0, -1);
                    }
                }
                return n;
            })(n, s);
            if (i === "") {
                return [];
            }
            const c = require("Lexical").$createTextNode(i);
            Ge(c, o);
            Xe(c, r);
            return [
                c
            ];
        },
        match: He.text(),
        name: "@lexical/html/#text"
    };
    const Je = {
        $import: function $import() {
            return [];
        },
        match: He.tag("script", "style"),
        name: "@lexical/html/script-style-ignore"
    };
    const Qe = {
        $import: function $import(e, n) {
            if (require("Lexical").isOnlyChildInBlockNode(n) || require("Lexical").isLastChildInBlockNode(n)) {
                return [];
            }
            return [
                require("Lexical").$createLineBreakNode()
            ];
        },
        match: He.tag("br"),
        name: "@lexical/html/br"
    };
    const Ze = {
        $import: function $import(e, n) {
            const o = require("Lexical").$createParagraphNode();
            require("Lexical").$setFormatFromDOM(o, n);
            require("Lexical").setNodeIndentFromDOM(n, o);
            if (o.getFormatType() === "") {
                const _e21 = n.getAttribute("align");
                if (_e21 && Ue(_e21)) {
                    o.setFormat(_e21);
                }
            }
            require("Lexical").$setDirectionFromDOM(o, n);
            return [
                o.splice(0, 0, e.$importChildren(n))
            ];
        },
        match: He.tag("p"),
        name: "@lexical/html/p"
    };
    const et = {
        $import: function $import(e, n, o) {
            if (require("Lexical").$getEditor().hasNode(require("LexicalExtensionHorizontalRuleExtension").HorizontalRuleNode)) {
                return [
                    require("LexicalExtensionHorizontalRuleExtension").$createHorizontalRuleNode()
                ];
            }
            return o();
        },
        match: He.tag("hr"),
        name: "@lexical/html/hr"
    };
    const tt = [
        Je,
        Ze,
        et,
        {
            $import: function $import(e, n, o) {
                if (require("Lexical").isBlockDomNode(n)) {
                    return we(e.$importChildren(n, {
                        schema: Fe
                    }), n);
                }
                return o();
            },
            match: He.any(),
            name: "@lexical/html/transparent-block"
        },
        Ke,
        Qe,
        Ye
    ];
    function nt(e, wildcardIndices) {
        const n = [];
        let o = 0;
        let r = 0;
        while(o < e.length && r < wildcardIndices.length){
            if (e[o] <= wildcardIndices[r]) {
                n.push(e[o++]);
            } else {
                n.push(wildcardIndices[r++]);
            }
        }
        while(o < e.length){
            n.push(e[o++]);
        }
        while(r < wildcardIndices.length){
            n.push(wildcardIndices[r++]);
        }
        return n;
    }
    function ot(e) {
        const t = [];
        const n = new Map();
        const wildcardIndices = [];
        const textIndices = [];
        const commentIndices = [];
        const i = new Set();
        e.forEach((e, l)=>{
            const u = ((e)=>{
                const t = e[SYMBOL_LEXICALHTMLSELECTOR_IMPL];
                if (t === undefined) {
                    c(360);
                }
                return t;
            })(e.match);
            const a = e.name || ((e, t)=>{
                if (e.kind === "text") {
                    return `#text@${t}`;
                }
                if (e.kind === "comment") {
                    return `#comment@${t}`;
                }
                if (e.tags.size === 0) {
                    return `*@${t}`;
                }
                return `${Array.from(e.tags).join(",").toLowerCase()}@${t}`;
            })(u, l);
            if (e.name) {
                i.add(e.name);
            }
            t.push({
                $import: e.$import,
                name: a,
                predicate: u.predicate
            });
            if (u.kind === "text") {
                textIndices.push(l);
            } else if (u.kind === "comment") {
                commentIndices.push(l);
            } else if (u.tags.size === 0) {
                wildcardIndices.push(l);
            } else {
                for (const _e22 of u.tags){
                    let _t16 = n.get(_e22);
                    if (!_t16) {
                        _t16 = [];
                        n.set(_e22, _t16);
                    }
                    _t16.push(l);
                }
            }
        });
        const byTag = new Map();
        if (wildcardIndices.length === 0) {
            for (const [_e23, _t17] of n){
                byTag.set(_e23, _t17);
            }
        } else {
            for (const [_e24, _t18] of n){
                byTag.set(_e24, nt(_t18, wildcardIndices));
            }
        }
        return {
            byTag,
            commentIndices,
            rules: t,
            textIndices,
            wildcardIndices
        };
    }
    function rt(dispatch, n) {
        if (require("Lexical").isDOMTextNode(n)) {
            return dispatch.textIndices;
        }
        if (n.nodeType === 8) {
            return dispatch.commentIndices;
        }
        if (require("Lexical").isHTMLElement(n)) {
            return dispatch.byTag.get(n.nodeName) || dispatch.wildcardIndices;
        }
        return st;
    }
    var st = Object.freeze([]);
    function it(e) {
        const t = [];
        for (const _n16 of e){
            if (ct(_n16)) {
                for (const _e25 of _n16.rules){
                    t.push(_e25);
                }
            } else {
                t.push(_n16);
            }
        }
        return t;
    }
    function ct(e) {
        return typeof e === "object" && e !== null && "__type" in e && e.__type === "CompiledOverlayRules";
    }
    const lt = Object.freeze({});
    function ut(e, captures) {
        const n = {
            $importChildren: function $importChildren(t, n) {
                return ((e, t, n)=>{
                    const o = n && n.rules ? n.rules.dispatch : undefined;
                    if (o) {
                        e.overlays.push(o);
                    }
                    try {
                        const _o0 = function _o0() {
                            return at(e, t, n);
                        };
                        if (n && n.context) {
                            return ke(n.context, e.editor)(_o0);
                        }
                        return _o0();
                    } finally{
                        if (o) {
                            e.overlays.pop();
                        }
                    }
                })(e, t, n);
            },
            $importOne: function $importOne(t, n) {
                return ft(e, t, n);
            },
            captures,
            get: function get(t) {
                return ve(t, e.editor);
            },
            session: e.session
        };
        return n;
    }
    function at(e, t, n) {
        const o = n && n.$onChild;
        const r = [];
        for (const _n17 of Array.from(t.childNodes)){
            const _t19 = ft(e, _n17, undefined);
            for (const _e26 of _t19){
                const _t20 = o ? o(_e26) : _e26;
                if (_t20 != null) {
                    r.push(_t20);
                }
            }
        }
        const s = n && n.$after ? n.$after(r) : r;
        const i = n && n.schema;
        if (i) {
            return ((e, t, o)=>{
                const n = null;
                const r = [];
                let s = null;
                const i = function i() {
                    if (s === null) {
                        return;
                    }
                    const t = s;
                    s = null;
                    if (e.$packageRun) {
                        const _s6 = e.$packageRun(t, n, o);
                        if (_s6.length > 0) {
                            for (const _e27 of _s6){
                                r.push(_e27);
                            }
                            return;
                        }
                    }
                    if (e.onReject === "hoist") {
                        for (const _e28 of t){
                            r.push(_e28);
                        }
                    }
                };
                for (const _o1 of t){
                    if (e.$accepts(_o1, n)) {
                        i();
                        r.push(_o1);
                    } else {
                        if (s === null) {
                            s = [];
                        }
                        s.push(_o1);
                    }
                }
                i();
                if (e.$finalize) {
                    return e.$finalize(r, n);
                }
                return r;
            })(i, s, t);
        }
        return s;
    }
    function ft(e, t, n) {
        const o = function o() {
            return ((e, t)=>{
                const n = ((e, t)=>{
                    const n = [];
                    for(let _o10 = e.overlays.length - 1; _o10 >= 0; _o10--){
                        const dispatch = e.overlays[_o10];
                        const _s7 = rt(dispatch, t);
                        if (_s7.length > 0) {
                            n.push({
                                dispatch,
                                indices: _s7
                            });
                        }
                    }
                    const o = rt(e.dispatch, t);
                    if (o.length > 0) {
                        n.push({
                            dispatch: e.dispatch,
                            indices: o
                        });
                    }
                    return n;
                })(e, t);
                if (n.length === 0) {
                    return dt(e, t);
                }
                let o = 0;
                let r = 0;
                const _s8 = function s() {
                    while(o < n.length){
                        const _n$o = n[o];
                        const { dispatch, indices } = _n$o;
                        while(r < indices.length){
                            const _n18 = indices[r++];
                            const _o11 = dispatch.rules[_n18];
                            const _l = {};
                            if (_o11.predicate(t, _l)) {
                                const _n19 = ut(e, Object.keys(_l).length === 0 ? lt : _l);
                                try {
                                    return _o11.$import(_n19, t, _s8);
                                } catch (error) {
                                    throw error;
                                }
                            }
                        }
                        o++;
                        r = 0;
                    }
                    return dt(e, t);
                };
                return _s8();
            })(e, t);
        };
        if (n && n.context) {
            return ke(n.context, e.editor)(o);
        }
        return o();
    }
    function dt(e, t) {
        if (t.childNodes.length === 0) {
            return [];
        }
        const n = [];
        for (const _o12 of Array.from(t.childNodes)){
            const _t21 = ft(e, _o12, undefined);
            for (const _e29 of _t21){
                n.push(_e29);
            }
        }
        return n;
    }
    const pt = {
        $import: function $import(e, t) {
            return e.$importChildren(t);
        },
        match: me.any(),
        name: "@lexical/html/default-hoist"
    };
    const ht = {
        build: function build(e, n) {
            const o = ot(it(n.rules));
            const r = p(n.contextDefaults, undefined);
            const n_preprocess = n.preprocess;
            return {
                $generateNodesFromDOM: function $generateNodesFromDOM(n, i) {
                    const c = f(SYMBOL_LEXICALHTMLDOM_IMPORT_CONTEXT, e) || r;
                    const l = i && i.context ? p(i.context, c) : c;
                    const u = l !== undefined && l !== c ? l : Object.create(c || null);
                    const a = new _Re(u);
                    const d = {
                        session: a
                    };
                    ((e, t, n)=>{
                        let o = e.length - 1;
                        const _r11 = function r() {
                            while(o >= 0){
                                return void e[o--](t, n, _r11);
                            }
                        };
                        _r11();
                    })(i && i.preprocess ? [].concat(Array.from(n_preprocess), Array.from(i.preprocess)) : n_preprocess, n, d);
                    return g(SYMBOL_LEXICALHTMLDOM_IMPORT_CONTEXT, u, ()=>((dispatch, editor, o, r)=>at({
                                dispatch,
                                editor,
                                overlays: r.get(Ie).map((e)=>e.dispatch),
                                session: r
                            }, require("Lexical").isDOMDocumentNode(o) ? o.body : o, {
                                schema: Be
                            }))(o, e, n, a), e);
                },
                defaults: r
            };
        },
        config: {
            contextDefaults: [],
            preprocess: [
                y
            ],
            rules: [
                pt
            ]
        },
        mergeConfig: function mergeConfig(e, n) {
            return require("Lexical").shallowMergeConfig(e, babelHelpers.extends({}, n, n.contextDefaults && {
                contextDefaults: [].concat(Array.from(e.contextDefaults), Array.from(n.contextDefaults))
            }, n.preprocess && {
                preprocess: [].concat(Array.from(e.preprocess), Array.from(n.preprocess))
            }, n.rules && {
                rules: [].concat(Array.from(n.rules), Array.from(e.rules))
            }));
        },
        name: O
    };
    const mt = {
        dependencies: [
            [
                ht,
                {
                    rules: tt
                }
            ]
        ],
        name: "@lexical/html/CoreImport"
    };
    const gt = [
        et
    ];
    const xt = {
        any,
        comment,
        css,
        tag,
        text: he
    };
    const $t = new Set([
        "STYLE",
        "SCRIPT"
    ]);
    function yt(e, n = null, o = require("Lexical").$getEditor()) {
        return k([
            m(I, true)
        ], o)(function() {
            const r = require("Lexical").$getRoot();
            const s = v(o);
            const i = require("Lexical").$getSelectionSlotFrame(n);
            const c = e.append.bind(e);
            for (const _e30 of (require("Lexical").$isElementNode(i) ? i : r).getChildren()){
                Tt(o, _e30, c, n, s);
            }
            return e;
        });
    }
    function Tt(n, o, r, s = null, i = require("Lexical").$getEditorDOMRenderConfig(n)) {
        let c = i.$shouldInclude(o, s, n);
        const l = i.$shouldExclude(o, s, n);
        let u = o;
        if (s !== null && require("Lexical").$isTextNode(o)) {
            u = require("LexicalSelection").$sliceSelectedTextNodeContent(s, o, "clone");
        }
        const a = i.$exportDOM(u, n);
        const { element, after, append, $getChildNodes } = a;
        if (!element) {
            return false;
        }
        const m = require("Lexical").$getDocument().createDocumentFragment();
        const g = $getChildNodes ? $getChildNodes() : require("Lexical").$isElementNode(u) ? u.getChildren() : [];
        const x = c && require("Lexical").$isNodeSelection(s) && require("Lexical").$isElementNode(o) ? null : s;
        const $ = m.append.bind(m);
        let y = null;
        for (const _e31 of g){
            const _t22 = Tt(n, _e31, $, x, i);
            if (_t22) {
                y = _e31;
            }
            if (!c && _t22 && i.$extractWithChild(o, _e31, s, "html", n)) {
                c = true;
            }
        }
        if (c && !l) {
            if (require("Lexical").isHTMLElement(element) || require("Lexical").isDocumentFragment(element)) {
                if (append) {
                    append(m);
                } else {
                    element.append(m);
                }
                ((element_1, n)=>{
                    const e_lastChild = element_1.lastChild;
                    if (require("Lexical").$isLineBreakNode(n) && require("Lexical").isHTMLElement(element_1) && require("Lexical").isBlockDomNode(element_1) && e_lastChild !== null && e_lastChild.nodeName === "BR") {
                        const _n20 = require("Lexical").$getDocument().createElement("br");
                        _n20.setAttribute("data-lexical-managed-linebreak", "true");
                        element_1.append(_n20);
                    }
                })(element, y);
            }
            if (require("Lexical").isDocumentFragment(element)) {
                if (after) {
                    const _e32 = after.call(u, element);
                    if (_e32) {
                        element.replaceChildren(_e32);
                    }
                }
                r(element);
            } else {
                r(element);
                if (after) {
                    const _e33 = after.call(u, element);
                    if (_e33) {
                        element.replaceWith(_e33);
                    }
                }
            }
        } else {
            r(m);
        }
        return c;
    }
    function St(e, n, o, r, s = new Map(), i) {
        const c = [];
        if ($t.has(e.nodeName)) {
            return c;
        }
        let l = null;
        const u = ((e, t)=>{
            const e_nodeName = e.nodeName;
            const o = t._htmlConversions.get(e_nodeName.toLowerCase());
            let r = null;
            if (o !== undefined) {
                for (const _t23 of o){
                    const _n21 = _t23(e);
                    if (_n21 !== null && (r === null || (r.priority || 0) <= (_n21.priority || 0))) {
                        r = _n21;
                    }
                }
            }
            if (r !== null) {
                return r.conversion;
            }
            return null;
        })(e, n);
        const a = u ? u(e) : null;
        let f = null;
        if (a !== null) {
            f = a.after;
            const _t24 = a.node;
            l = Array.isArray(_t24) ? _t24[_t24.length - 1] : _t24;
            if (l !== null) {
                for (const _ref0 of s){
                    const _e34 = _ref0[1];
                    l = _e34(l, i);
                    if (!l) {
                        break;
                    }
                }
                if (l) {
                    c.push(...Array.from(Array.isArray(_t24) ? _t24 : [
                        l
                    ]));
                }
            }
            if (a.forChild != null) {
                s.set(e.nodeName, a.forChild);
            }
        }
        const e_childNodes = e.childNodes;
        let p = [];
        const h = (l == null || !require("Lexical").$isRootOrShadowRoot(l)) && (l != null && require("Lexical").$isBlockElementNode(l) || r);
        for(let _e35 = 0; _e35 < e_childNodes.length; _e35++){
            p.push(...Array.from(St(e_childNodes[_e35], n, o, h, new Map(s), l)));
        }
        if (f != null) {
            p = f(p);
        }
        if (require("Lexical").isBlockDomNode(e)) {
            p = ((e, n, o)=>{
                const textAlign = e.style.textAlign;
                const s = [];
                let i = [];
                for(let _e36 = 0; _e36 < n.length; _e36++){
                    const _c2 = n[_e36];
                    if (require("Lexical").$isBlockElementNode(_c2)) {
                        if (textAlign && !_c2.getFormat()) {
                            _c2.setFormat(textAlign);
                        }
                        s.push(_c2);
                    } else {
                        i.push(_c2);
                        if (_e36 === n.length - 1 || _e36 < n.length - 1 && require("Lexical").$isBlockElementNode(n[_e36 + 1])) {
                            const _e37 = o();
                            _e37.setFormat(textAlign);
                            _e37.append(...Array.from(i));
                            s.push(_e37);
                            i = [];
                        }
                    }
                }
                return s;
            })(e, p, h ? ()=>{
                const e = new (require("Lexical")).ArtificialNode__DO_NOT_USE();
                o.push(e);
                return e;
            } : require("Lexical").$createParagraphNode);
        }
        if (l == null) {
            if (p.length > 0) {
                for (const _e38 of p){
                    c.push(_e38);
                }
            } else {
                if (require("Lexical").isBlockDomNode(e) && ((e)=>e.nextSibling != null && e.previousSibling != null && require("Lexical").isInlineDomNode(e.nextSibling) && require("Lexical").isInlineDomNode(e.previousSibling))(e)) {
                    c.push(require("Lexical").$createLineBreakNode());
                }
            }
        } else {
            if (require("Lexical").$isElementNode(l)) {
                l.append(...Array.from(p));
            }
        }
        return c;
    }
    exports.$appendNodeToHTML = function(e, t, n, o = null) {
        return Tt(e, t, n.append.bind(n), o, v(e));
    };
    exports.$distributeInlineWrapper = function e(n, o) {
        const r = [];
        let s = [];
        const i = function i() {
            if (s.length !== 0) {
                r.push(o().splice(0, 0, s));
                s = [];
            }
        };
        for (const _c3 of n){
            if (be(_c3)) {
                i();
                if (require("Lexical").$isElementNode(_c3)) {
                    const _t25 = e(_c3.getChildren(), o);
                    _c3.splice(0, _c3.getChildrenSize(), _t25);
                }
                r.push(_c3);
            } else {
                s.push(_c3);
            }
        }
        i();
        return r;
    };
    exports.$generateDOMFromNodes = yt;
    exports.$generateDOMFromRoot = function(e, n = require("Lexical").$getRoot()) {
        const o = require("Lexical").$getEditor();
        return k([
            m(I, true),
            m(M, true)
        ], o)(function() {
            const t = v(o);
            const r = e.append.bind(e);
            Tt(o, n, r, null, t);
            return e;
        });
    };
    exports.$generateHtmlFromNodes = function(e, n = null) {
        if (typeof document === "undefined" || typeof window === "undefined" && global.window === undefined) {
            c(338);
        }
        require("Lexical").$assumeActiveEditor(e);
        return yt(require("Lexical").$getDocument().createElement("div"), n, e).innerHTML;
    };
    exports.$generateNodesFromDOM = function(e, n) {
        T(n);
        const o = require("Lexical").isDOMDocumentNode(n) ? n.body.childNodes : n.childNodes;
        const r = [];
        const s = [];
        for (const _t26 of o){
            if (!$t.has(_t26.nodeName)) {
                const _n22 = St(_t26, e, s, false);
                if (_n22 !== null) {
                    for (const _e39 of _n22){
                        r.push(_e39);
                    }
                }
            }
        }
        ((e)=>{
            for (const _n23 of e){
                if (_n23.getParent() && _n23.getNextSibling() instanceof require("Lexical").ArtificialNode__DO_NOT_USE) {
                    _n23.insertAfter(require("Lexical").$createLineBreakNode());
                }
            }
            for (const _t27 of e){
                const _e40 = _t27.getParent();
                if (_e40) {
                    _e40.splice(_t27.getIndexWithinParent(), 1, _t27.getChildren());
                }
            }
        })(s);
        return r;
    };
    exports.$generateNodesFromDOMViaExtension = function(e, t) {
        return require("LexicalExtensionGetExtensionDependency").$getExtensionOutput(ht).$generateNodesFromDOM(e, t);
    };
    exports.$getImportContextValue = ve;
    exports.$getRenderContextValue = function(e, n = require("Lexical").$getEditor()) {
        return u(((e)=>f(SYMBOL_LEXICALHTMLDOM_EXPORT_CONTEXT, e) || R(e))(n), e);
    };
    exports.$getSessionDOMRenderConfig = v;
    exports.$inlineStylesFromStyleSheets = y;
    exports.$isBlockLevel = be;
    exports.$propagateTextAlignToBlockChildren = we;
    exports.$setRenderContextValue = function(e, n, o = require("Lexical").$getEditor()) {
        const r = _(o);
        if (r) {
            r.setContextValue(e, n);
        }
    };
    exports.$updateRenderContextValue = function(e, n, o = require("Lexical").$getEditor()) {
        const r = _(o);
        if (r) {
            r.setContextValue(e, n(u(r.editorContext, e)));
        }
    };
    exports.$withImportContext = ke;
    exports.$withRenderContext = k;
    exports.BlockSchema = Fe;
    exports.CoreImportExtension = mt;
    exports.CoreImportRules = tt;
    exports.DOMImportExtension = ht;
    exports.DOMRenderExtension = ne;
    exports.HorizontalRuleImportRules = gt;
    exports.ImportOverlays = Ie;
    exports.ImportSource = Se;
    exports.ImportSourceDataTransfer = Ee;
    exports.ImportTextFormat = Oe;
    exports.ImportTextStyle = De;
    exports.ImportWhitespaceConfig = Me;
    exports.InlineSchema = Le;
    exports.NestedBlockSchema = Pe;
    exports.RenderContextExport = I;
    exports.RenderContextRoot = M;
    exports.RootSchema = Be;
    exports.contextUpdater = function(cfg, updater) {
        return {
            cfg,
            updater
        };
    };
    exports.contextValue = m;
    exports.createImportState = Te;
    exports.createRenderState = N;
    exports.defaultIsInline = isInline;
    exports.defaultPreservesWhitespace = preservesWhitespace;
    exports.defineImportRule = function(e) {
        return e;
    };
    exports.defineOverlayRules = function(e) {
        const t = it(e);
        return {
            __type: "CompiledOverlayRules",
            dispatch: ot(t),
            rules: t
        };
    };
    exports.domOverride = function(nodes, t, n) {
        return babelHelpers.extends({}, t, n, {
            nodes
        });
    };
    exports.isElementOfTag = function(e, n) {
        return require("Lexical").isHTMLElement(e) && e.nodeName === n.toUpperCase();
    };
    exports.parseSelector = css;
    exports.sel = xt;
}, null);