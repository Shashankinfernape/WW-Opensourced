__d("Lexical.prod", [], function $module_Lexical_prod(global, require, requireDynamic, requireLazy, module, exports) {
    "use strict";
    function t(t, ...e) {
        const n = new URL("https://lexical.dev/docs/error");
        const o = new URLSearchParams();
        o.append("code", t);
        for (const _t2 of e){
            o.append("v", _t2);
        }
        n.search = o.toString();
        return new Error(`Minified Lexical error #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
    }
    function e(e, ...n) {
        throw t(...[
            e
        ].concat(Array.from(n)));
    }
    function n(t, ...e) {
        const n = new URL("https://lexical.dev/docs/error");
        const o = new URLSearchParams();
        o.append("code", t);
        for (const _t3 of e){
            o.append("v", _t3);
        }
        n.search = o.toString();
        console.warn(`Minified Lexical warning #${t}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
    }
    function o() {
        return typeof window !== "undefined" && window.document !== undefined && window.document.createElement !== undefined;
    }
    const r = o();
    function i() {
        if (r && "documentMode" in document) {
            return document.documentMode;
        }
        return null;
    }
    const s = i();
    function l(t) {
        return r && t.test(navigator.platform);
    }
    function c(t) {
        return r && t.test(navigator.userAgent);
    }
    const a = l(/Mac|iPod|iPhone|iPad/);
    const u = c(/^(?!.*Seamonkey)(?=.*Firefox).*/i);
    function f() {
        return !(!r || !("InputEvent" in window) || s) && "getTargetRanges" in new window.InputEvent("input");
    }
    const d = f();
    function h() {
        return r && !window.MSStream && (/iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
    }
    const g = h();
    const p = c(/Android/);
    const _ = c(/Version\/[\d.]+.*Safari/) && !p;
    const m = c(/^(?=.*Chrome).*/i);
    const y = r && p && m;
    const x = c(/AppleWebKit\/[\d.]+/) && a && !m;
    function S() {
        return 2047;
    }
    const C = S();
    const T = _ || g || x ? "\xa0" : "\u200b";
    const v = "\n\n";
    const N = u ? "\xa0" : T;
    const b = "֑-߿יִ-﷽ﹰ-ﻼ";
    const k = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿\u200eⰀ-﬜\ufe00-﹯﻽-\uffff";
    function E(t, e) {
        return new RegExp(`^[^${t}]*[${e}]`);
    }
    const O = E(k, b);
    const M = E(b, k);
    const w = {
        bold: 1,
        capitalize: 1024,
        code: 16,
        highlight: 128,
        italic: 2,
        lowercase: 256,
        strikethrough: 4,
        subscript: 32,
        superscript: 64,
        underline: 8,
        uppercase: 512
    };
    const A = {
        directionless: 1,
        unmergeable: 2
    };
    const D = {
        center: 2,
        end: 6,
        justify: 4,
        left: 1,
        right: 3,
        start: 5
    };
    function I(t) {
        const e = {};
        for (const _n2 of Object.keys(t)){
            e[t[_n2]] = _n2;
        }
        return e;
    }
    const F = I(D);
    const setterTable_1 = {
        normal: 0,
        segmented: 2,
        token: 1
    };
    const getterTable_1 = I(setterTable_1);
    const L = "$";
    const SYMBOL_LEXICALCTRL_OR_OTHER_KEY = Symbol.for("@lexical/ctrlOrOtherKey");
    const B = "$config";
    function $(t) {
        return function() {};
    }
    function z(t) {
        return {
            type: t
        };
    }
    const W = z("SELECTION_CHANGE_COMMAND");
    const U = z("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND");
    const j = z("CLICK_COMMAND");
    const H = z("BEFORE_INPUT_COMMAND");
    const V = z("INPUT_COMMAND");
    const Y = z("COMPOSITION_START_COMMAND");
    const J = z("COMPOSITION_END_COMMAND");
    const G = z("DELETE_CHARACTER_COMMAND");
    const q = z("INSERT_LINE_BREAK_COMMAND");
    const X = z("INSERT_PARAGRAPH_COMMAND");
    const Q = z("CONTROLLED_TEXT_INSERTION_COMMAND");
    const paste = z("PASTE_COMMAND");
    const tt = z("REMOVE_TEXT_COMMAND");
    const et = z("DELETE_WORD_COMMAND");
    const nt = z("DELETE_LINE_COMMAND");
    const ot = z("FORMAT_TEXT_COMMAND");
    const rt = z("SET_TEXT_FORMAT_COMMAND");
    const it = z("UNDO_COMMAND");
    const st = z("REDO_COMMAND");
    const lt = z("KEYDOWN_COMMAND");
    const ct = z("KEY_ARROW_RIGHT_COMMAND");
    const at = z("MOVE_TO_END");
    const ut = z("KEY_ARROW_LEFT_COMMAND");
    const ft = z("MOVE_TO_START");
    const dt = z("KEY_ARROW_UP_COMMAND");
    const ht = z("KEY_ARROW_DOWN_COMMAND");
    const gt = z("KEY_ENTER_COMMAND");
    const pt = z("KEY_SPACE_COMMAND");
    const _t = z("KEY_BACKSPACE_COMMAND");
    const mt = z("KEY_ESCAPE_COMMAND");
    const yt = z("KEY_DELETE_COMMAND");
    const xt = z("KEY_TAB_COMMAND");
    const St = z("INSERT_TAB_COMMAND");
    const Ct = z("INDENT_CONTENT_COMMAND");
    const Tt = z("OUTDENT_CONTENT_COMMAND");
    const drop = z("DROP_COMMAND");
    const Nt = z("FORMAT_ELEMENT_COMMAND");
    const dragstart = z("DRAGSTART_COMMAND");
    const dragover = z("DRAGOVER_COMMAND");
    const dragend = z("DRAGEND_COMMAND");
    const copy = z("COPY_COMMAND");
    const cut = z("CUT_COMMAND");
    const wt = z("SELECT_ALL_COMMAND");
    const At = z("CLEAR_EDITOR_COMMAND");
    const Dt = z("CLEAR_HISTORY_COMMAND");
    const It = z("CAN_REDO_COMMAND");
    const Ft = z("CAN_UNDO_COMMAND");
    const focus = z("FOCUS_COMMAND");
    const blur = z("BLUR_COMMAND");
    const Lt = z("KEY_MODIFIER_COMMAND");
    function Kt(t, e) {
        return babelHelpers.extends({}, e, {
            [SYMBOL_LEXICALCTRL_OR_OTHER_KEY]: t
        });
    }
    const Bt = Kt("metaKey", {
        ctrlKey: !a,
        metaKey: a
    });
    const $t = Kt("altKey", {
        altKey: a,
        ctrlKey: !a
    });
    const zt = [
        [
            "altKey",
            1
        ],
        [
            "ctrlKey",
            2
        ],
        [
            "metaKey",
            4
        ],
        [
            "shiftKey",
            8
        ]
    ];
    function Wt(t, e, n) {
        const o = t.get(e);
        if (o) {
            o.push(n);
        } else {
            t.set(e, [
                n
            ]);
        }
    }
    class _Ut {
        constructor(){
            this.byKey = new Map();
            this.byCode = new Map();
        }
        add(t) {
            const { key, modifiers: _t$modifiers } = t;
            const o = _t$modifiers === undefined ? {} : _t$modifiers;
            if (!(key.length > 0)) {
                e(399);
            }
            const r = key.toLowerCase();
            for (const _e2 of ((t)=>{
                let e = [
                    0
                ];
                const _loop = function _loop() {
                    const n = _ref2[0];
                    const o = _ref2[1];
                    {
                        const _r2 = t[n] || false;
                        if (_r2 === "any") {
                            e = e.concat(e.map((t)=>t | o));
                        } else if (_r2) {
                            e = e.map((t)=>t | o);
                        }
                    }
                };
                for (var _ref2 of zt){
                    _loop();
                }
                return e;
            })(o)){
                Wt(this.byKey, `${_e2}:${r}`, t);
                if (key.length === 1) {
                    if (/[0-9]/.test(key)) {
                        Wt(this.byCode, `${_e2}:Digit${key}`, t);
                    } else if (/[a-z]/.test(r)) {
                        Wt(this.byCode, `${_e2}:Key${r.toUpperCase()}`, t);
                    }
                }
            }
            return this;
        }
        matches(t) {
            const t_key = t.key;
            if (!t_key) {
                return [];
            }
            const n = ((t)=>{
                let e = 0;
                for (const [_n3, _o2] of zt){
                    if (t[_n3]) {
                        e |= _o2;
                    }
                }
                return e;
            })(t);
            const o = this.byKey.get(`${n}:${t_key.toLowerCase()}`);
            const r = o ? o.slice() : [];
            if (this.byCode.size > 0 && !(t_key.length === 1 && t_key.charCodeAt(0) <= 127)) {
                const _e3 = this.byCode.get(`${n}:${t.code}`);
                if (_e3) {
                    r.push(...Array.from(_e3));
                }
            }
            return r;
        }
        match(t) {
            return this.matches(t)[0];
        }
    }
    function jt(t) {
        const e = new _Ut();
        for (const _n4 of t){
            e.add(_n4);
        }
        return e;
    }
    function Ht(t) {
        const e = new Map();
        return {
            dispose: function dispose() {
                for (const _t4 of e.values()){
                    _t4.dispose();
                }
                e.clear();
            },
            register: function register(n, o) {
                let r = e.get(n);
                if (r === undefined) {
                    r = {
                        dispose: t(n, o),
                        holders: new Set()
                    };
                    e.set(n, r);
                }
                const _i2 = function i() {
                    const t = e.get(n);
                    if (t && t.holders.delete(_i2) && t.holders.size === 0) {
                        e.delete(n);
                        t.dispose();
                    }
                };
                r.holders.add(_i2);
                return _i2;
            }
        };
    }
    function Vt() {
        let t;
        try {
            t = "0.52.0+prod.cjs";
        } catch (_unused) {}
        return t ?? '"<unknown>+source"';
    }
    const Yt = Vt();
    const _Jt = (()=>{
        function Jt() {
            this._front = new Set();
            this._back = new Set();
        }
        const _proto2 = Jt.prototype;
        _proto2.addBack = function addBack(t) {
            delete this._cache;
            if (!this._front.has(t)) {
                this._back.add(t);
            }
            return this;
        };
        _proto2.addFront = function addFront(t) {
            delete this._cache;
            if (!this._back.has(t)) {
                this._front.add(t);
            }
            return this;
        };
        _proto2.delete = function _delete(t) {
            delete this._cache;
            return this._front.delete(t) || this._back.delete(t);
        };
        _proto2.toArray = function toArray() {
            const t = Array.from(this._front).reverse();
            for (const _e4 of this._back){
                t.push(_e4);
            }
            return t;
        };
        _proto2.toReadonlyArray = function toReadonlyArray() {
            this._cache = this._cache || this.toArray();
            return this._cache;
        };
        _proto2[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
            return this.toReadonlyArray()[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        };
        return babelHelpers.createClass(Jt, [
            {
                key: "size",
                get: function get() {
                    return this._front.size + this._back.size;
                }
            }
        ]);
    })();
    const Gt = null;
    function qt(t, e = 1000) {
        if (t instanceof _Xt) {
            return t.clone();
        }
        if (t.size < e) {
            return new Map(t);
        }
        return new _Xt().init(new Map(t), undefined, t.size);
    }
    var _Xt = (()=>{
        function Xt() {
            this._mutable = false;
            this._old = undefined;
            this._nursery = undefined;
            this._size = 0;
        }
        const _proto3 = Xt.prototype;
        _proto3.clone = function clone() {
            this._mutable = false;
            return new Xt().init(this._old, this._nursery, this._size);
        };
        _proto3.init = function init(t, e, n) {
            this._old = t;
            this._nursery = e;
            this._size = n;
            return this;
        };
        _proto3.has = function has(t) {
            return this.get(t) !== undefined;
        };
        _proto3.getWithTombstone = function getWithTombstone(t) {
            const e = this._nursery && this._nursery.get(t);
            if (e !== undefined) {
                return e;
            }
            return this._old && this._old.get(t);
        };
        _proto3.get = function get(t) {
            const e = this.getWithTombstone(t);
            if (e === Gt) {
                return undefined;
            }
            return e;
        };
        _proto3.shouldCompact = function shouldCompact() {
            return this._nursery !== undefined && 2 * this._nursery.size > this._size;
        };
        _proto3.getNursery = function getNursery() {
            if (!(this._mutable && this._nursery)) {
                this.compact();
                this._nursery = new Map(this._nursery);
                this._mutable = true;
            }
            return this._nursery;
        };
        _proto3.compact = function compact(t = false) {
            if (this._nursery && this._nursery.size > 0 && (t || this.shouldCompact())) {
                const _t5 = new Map(this._old);
                for (const [_e5, _n5] of this._nursery){
                    if (_n5 !== Gt) {
                        _t5.set(_e5, _n5);
                    } else {
                        _t5.delete(_e5);
                    }
                }
                this._old = _t5;
                this._nursery = undefined;
            }
            this._mutable = false;
            return this;
        };
        _proto3.set = function set(t, e) {
            const n = this.getWithTombstone(t);
            if (n === e) {
                return this;
            }
            const o = this.getNursery();
            if (!(n !== Gt && n !== undefined)) {
                this._size++;
                if (n === Gt) {
                    o.delete(t);
                }
            }
            o.set(t, e);
            return this;
        };
        _proto3.delete = function _delete(t) {
            const e = this.has(t);
            if (e) {
                this.getNursery().set(t, Gt);
                this._size--;
            }
            return e;
        };
        _proto3.getOrInsert = function getOrInsert(t, e) {
            const n = this.get(t);
            if (n !== undefined) {
                return n;
            }
            this.set(t, e);
            return e;
        };
        _proto3.getOrInsertComputed = function getOrInsertComputed(t, e) {
            const n = this.get(t);
            if (n !== undefined) {
                return n;
            }
            const o = e(t);
            this.set(t, o);
            return o;
        };
        _proto3.clear = function clear() {
            this._mutable = false;
            this._old = undefined;
            this._nursery = undefined;
            this._size = 0;
        };
        _proto3.keys = function* keys() {
            for (const _t6 of this.entries()){
                yield _t6[0];
            }
        };
        _proto3.values = function* values() {
            for (const _t7 of this.entries()){
                yield _t7[1];
            }
        };
        _proto3.entries = function* entries() {
            const _nursery = this._nursery;
            const _old = this._old;
            if (_nursery) {
                if (_old) {
                    for (const _n6 of _old){
                        const _e6 = _n6[0];
                        const _o3 = _nursery.get(_e6);
                        if (_o3 !== Gt) {
                            if (_o3 !== undefined) {
                                _n6[1] = _o3;
                            }
                            yield _n6;
                        }
                    }
                }
                for (const _n7 of _nursery){
                    if (!(_n7[1] === Gt || _old && _old.has(_n7[0]))) {
                        yield _n7;
                    }
                }
            } else {
                if (_old) {
                    yield* _old;
                }
            }
        };
        _proto3.forEach = function forEach(t, e) {
            if (e !== undefined) {
                t = t.bind(e);
            }
            for (const [_e7, _n8] of this.entries()){
                t(_n8, _e7, this);
            }
        };
        _proto3[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
            return this.entries();
        };
        return babelHelpers.createClass(Xt, [
            {
                key: "size",
                get: function get() {
                    return this._size;
                }
            },
            {
                key: typeof Symbol === "function" ? Symbol.toStringTag : "@@toStringTag",
                get: function get() {
                    return "GenMap";
                }
            }
        ]);
    })();
    let Qt = false;
    function Zt(t, n) {
        const r = Qt;
        let i;
        try {
            Qt = t;
            i = n();
        } finally{
            Qt = r;
        }
        let s;
        if (!((s = i) === null || typeof s !== "object" && typeof s !== "function" || typeof s.then !== "function")) {
            e(421);
        }
        return i;
    }
    function te() {
        return Qt;
    }
    function ee(t) {
        const n = t.exportJSON(Qt);
        const t_constructor = t.constructor;
        if (n.type !== t_constructor.getType()) {
            e(130, t_constructor.name);
        }
        if (Vo(t) && !Array.isArray(n.children)) {
            e(59, t_constructor.name);
        }
        return n;
    }
    function ne() {
        return js()._blockCursorElement;
    }
    function oe(t) {
        return t !== null && t.nodeType === 1 && t.hasAttribute("data-lexical-slot");
    }
    const re = x || g || _;
    function ie() {
        const t = ks().createElement("img");
        t.setAttribute("data-lexical-decorator-boundary", "true");
        t.alt = "";
        for (const [_e8, _n9] of [
            [
                "position",
                "absolute"
            ],
            [
                "width",
                "0px"
            ],
            [
                "height",
                "0px"
            ],
            [
                "border",
                "0px"
            ],
            [
                "margin",
                "0px"
            ],
            [
                "padding",
                "0px"
            ]
        ]){
            t.style.setProperty(_e8, _n9, "important");
        }
        return t;
    }
    function se(t) {
        return t !== null && t.nodeType === 1 && t.hasAttribute("data-lexical-decorator-boundary");
    }
    const _le2 = (()=>{
        function le(t, e, n) {
            this.element = t;
            this.before = e || null;
            this.after = n || null;
        }
        const _proto4 = le.prototype;
        _proto4.withBefore = function withBefore(t) {
            return new le(this.element, t, this.after);
        };
        _proto4.withAfter = function withAfter(t) {
            return new le(this.element, this.before, t);
        };
        _proto4.withElement = function withElement(t) {
            if (this.element === t) {
                return this;
            }
            return new le(t, this.before, this.after);
        };
        _proto4.insertChild = function insertChild(t) {
            const n = this.getInsertionAnchor();
            if (n !== null && n.parentElement !== this.element) {
                e(357);
            }
            this.element.insertBefore(t, n);
            return this;
        };
        _proto4.removeChild = function removeChild(t) {
            if (t.parentElement !== this.element) {
                e(358);
            }
            this.element.removeChild(t);
            return this;
        };
        _proto4.replaceChild = function replaceChild(t, n) {
            if (n.parentElement !== this.element) {
                e(359);
            }
            this.element.replaceChild(t, n);
            return this;
        };
        _proto4.getFirstChild = function getFirstChild() {
            const t = this.getFirstChildAnchor();
            const e = t ? t.nextSibling : this.element.firstChild;
            if (e === this.getInsertionAnchor()) {
                return null;
            }
            return e;
        };
        _proto4.getFirstChildAnchor = function getFirstChildAnchor() {
            return this.after;
        };
        _proto4.resolveLeafPosition = function resolveLeafPosition(t, e, n) {
            if (this.element === t) {
                if (e === t && n === 0) {
                    return "before";
                }
                return "after";
            }
            const o = ce(t, this.element);
            if (o === null) {
                return "after";
            }
            const r = Array.prototype.indexOf.call(t.childNodes, o);
            if (r < 0) {
                return "after";
            }
            if (e === t) {
                if (n <= r) {
                    return "before";
                }
                return "after";
            }
            const i = ce(t, e);
            if (i === null) {
                return "after";
            }
            const s = Array.prototype.indexOf.call(t.childNodes, i);
            if (s >= 0 && s <= r) {
                return "before";
            }
            return "after";
        };
        _proto4.getInsertionAnchor = function getInsertionAnchor() {
            return this.before;
        };
        return le;
    })();
    function ce(t, e) {
        let n = e;
        while(n !== null && n.parentNode !== t){
            n = n.parentNode;
        }
        return n;
    }
    const _ae = ((_le)=>{
        function ae() {
            return _le.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(ae, _le);
        const _proto5 = ae.prototype;
        _proto5.withBefore = function withBefore(t) {
            return new ae(this.element, t, this.after);
        };
        _proto5.withAfter = function withAfter(t) {
            return new ae(this.element, this.before, t);
        };
        _proto5.withElement = function withElement(t) {
            if (this.element === t) {
                return this;
            }
            return new ae(t, this.before, this.after);
        };
        _proto5.getInsertionAnchor = function getInsertionAnchor() {
            return _le.prototype.getInsertionAnchor.call(this) || this.getManagedLineBreak() || this.getDecoratorBoundaryAnchor("trailing");
        };
        _proto5.getFirstChildAnchor = function getFirstChildAnchor() {
            let t = _le.prototype.getFirstChildAnchor.call(this);
            let e = t ? t.nextSibling : this.element.firstChild;
            while(oe(e)){
                t = e;
                e = e.nextSibling;
            }
            if (se(e)) {
                t = e;
                e = e.nextSibling;
            }
            const n = t ? t.nextSibling : this.element.firstChild;
            if (n !== null && n === ne()) {
                return n;
            }
            return t;
        };
        _proto5.getDecoratorBoundaryAnchor = function getDecoratorBoundaryAnchor(t) {
            let e;
            if (t === "leading") {
                const _t8 = _le.prototype.getFirstChildAnchor.call(this);
                for(e = _t8 ? _t8.nextSibling : this.element.firstChild; oe(e);){
                    e = e.nextSibling;
                }
            } else {
                e = this.before ? this.before.previousSibling : this.element.lastChild;
                if (e !== null && e === ne()) {
                    e = e.previousSibling;
                }
            }
            if (se(e)) {
                return e;
            }
            return null;
        };
        _proto5.setDecoratorBoundaryAnchor = function setDecoratorBoundaryAnchor(t, e) {
            const n = this.getDecoratorBoundaryAnchor(t);
            if (e !== (n !== null)) {
                if (n !== null) {
                    this.element.removeChild(n);
                } else if (t === "leading") {
                    const _t9 = this.getFirstChildAnchor();
                    this.element.insertBefore(ie(), _t9 ? _t9.nextSibling : this.element.firstChild);
                } else {
                    this.element.insertBefore(ie(), this.before);
                }
            }
        };
        _proto5.getManagedLineBreak = function getManagedLineBreak() {
            return this.element.__lexicalLineBreak || null;
        };
        _proto5.setManagedLineBreak = function setManagedLineBreak(t) {
            const element = this.element;
            const n = this.after === null ? element.firstChild : this.after.nextSibling;
            const o = t === "empty" && oe(n) ? null : t;
            if (element.__lexicalLastChildKind !== o) {
                element.__lexicalLastChildKind = o;
                if (o === null) {
                    this.removeManagedLineBreak();
                } else {
                    const _t0 = o === "decorator" && re;
                    this.insertManagedLineBreak(_t0);
                }
            }
        };
        _proto5.removeManagedLineBreak = function removeManagedLineBreak() {
            const element = this.element;
            const e = this.getManagedLineBreak();
            if (e) {
                e.remove();
                for (const _e9 of element.querySelectorAll(":scope > [data-lexical-managed-linebreak]")){
                    _e9.remove();
                }
                element.__lexicalLineBreak = undefined;
            }
        };
        _proto5.insertManagedLineBreak = function insertManagedLineBreak(t) {
            const element = this.element;
            const n = this.getManagedLineBreak();
            if (n) {
                const _o4 = t ? n.nextSibling : n;
                if (_o4 && _o4 === element.querySelector(":scope > br[data-lexical-managed-linebreak]")) {
                    return;
                }
                this.removeManagedLineBreak();
            }
            const o = this.before || this.getDecoratorBoundaryAnchor("trailing");
            const r = ks().createElement("br");
            r.setAttribute("data-lexical-managed-linebreak", "true");
            element.insertBefore(r, o);
            if (t) {
                const _t1 = ks().createElement("img");
                _t1.setAttribute("data-lexical-managed-linebreak", "true");
                _t1.style.setProperty("display", "inline", "important");
                _t1.style.setProperty("border", "0px", "important");
                _t1.style.setProperty("margin", "0px", "important");
                _t1.alt = "";
                element.insertBefore(_t1, r);
                element.__lexicalLineBreak = _t1;
            } else {
                element.__lexicalLineBreak = r;
            }
        };
        _proto5.getFirstChildOffset = function getFirstChildOffset() {
            const t = this.getFirstChild();
            const e = this.getInsertionAnchor();
            let n = 0;
            for(let _o5 = this.element.firstChild; _o5 !== null && _o5 !== t && _o5 !== e; _o5 = _o5.nextSibling){
                n++;
            }
            return n;
        };
        _proto5.resolveChildIndex = function resolveChildIndex(t, e, n, o) {
            if (n === this.element) {
                const _e0 = this.getFirstChildOffset();
                const _n0 = ne();
                const _r3 = this.element.childNodes;
                const _i3 = Math.min(o, _r3.length);
                let _s2 = 0;
                for(let _t10 = _e0; _t10 < _i3; _t10++){
                    if (_r3[_t10] !== _n0) {
                        _s2++;
                    }
                }
                return [
                    t,
                    Math.min(_s2, t.getChildrenSize())
                ];
            }
            const r = ue(e, n);
            r.push(o);
            const i = ue(e, this.element);
            let s = t.getIndexWithinParent();
            for(let _t11 = 0; _t11 < i.length; _t11++){
                const _e1 = r[_t11];
                const _n1 = i[_t11];
                if (_e1 === undefined || _e1 < _n1) {
                    break;
                }
                if (_e1 > _n1) {
                    s += 1;
                    break;
                }
            }
            return [
                t.getParentOrThrow(),
                s
            ];
        };
        return ae;
    })(_le2);
    function ue(t, n) {
        const o = [];
        let r = n;
        for(; r !== t && r !== null; r = r.parentNode){
            let _t12 = 0;
            for(let _e10 = r.previousSibling; _e10 !== null; _e10 = _e10.previousSibling){
                _t12++;
            }
            o.push(_t12);
        }
        if (r !== t) {
            e(225);
        }
        return o.reverse();
    }
    let fe = false;
    let de = 0;
    function he() {
        de = performance.now();
    }
    function ge(t) {
        return Rs(t) && t.hasAttribute("data-lexical-managed-linebreak");
    }
    function pe(target, e, n) {
        const o = xs(cs(n));
        const r = o && Ms(o, n._rootElement);
        let i = null;
        let s = null;
        if (r !== null && r.anchorNode === target) {
            i = r.anchorOffset;
            s = r.focusOffset;
        }
        const t_nodeValue = target.nodeValue;
        if (t_nodeValue !== null) {
            $i(e, t_nodeValue, i, s, false);
        }
    }
    function _e(t, target, n) {
        if (Ha(t)) {
            const _e11 = t.anchor.getNode();
            if (_e11.is(n) && t.format !== _e11.getFormat()) {
                return false;
            }
        }
        return di(target) && n.isAttached();
    }
    function me(target, e, _editorState) {
        for(let _o6 = target; _o6 && !ol(_o6); _o6 = ts(_o6)){
            const _t13 = bi(_o6, e);
            if (_t13 !== undefined) {
                const _e12 = Ti(_t13, _editorState);
                if (_e12) {
                    if (Go(_e12) || !Rs(_o6)) {
                        return undefined;
                    }
                    return [
                        _o6,
                        _e12
                    ];
                }
            }
        }
    }
    function ye(t, e, n, o) {
        fe = true;
        const r = t._inputState.unprocessedBeforeInputData === null && performance.now() - de > 100;
        try {
            Bc(t, function() {
                const i = Su() || ((t)=>t.read("latest", function() {
                        const t = Su();
                        if (t !== null) {
                            return t.clone();
                        }
                        return null;
                    }))(t);
                const s = new Map();
                const { _editorState, _blockCursorElement } = t;
                let a = false;
                let f = "";
                for (const _n10 of e){
                    const { type, target } = _n10;
                    const _h = me(target, t, _editorState);
                    if (!_h) {
                        continue;
                    }
                    const _g = _h[0];
                    const _p = _h[1];
                    if (type === "characterData") {
                        if (o) {
                            if (Sr(_p) && _p.isAttached()) {
                                _p.markDirty();
                            }
                        } else if (r && Sr(_p) && di(target) && _e(i, target, _p)) {
                            pe(target, _p, t);
                        }
                    } else {
                        a = true;
                        for (const _e14 of _n10.addedNodes){
                            const _n11 = bi(_e14, t);
                            if (_e14 !== _blockCursorElement && _e14.parentNode === target && (_n11 ? t.getElementByKey(_n11) !== _e14 : !(t._slotsUsed && Rs(_e14) && _e14.hasAttribute("data-lexical-slot") || ol(_e14)))) {
                                if (u) {
                                    const _t14 = (Rs(_e14) ? _e14.innerText : null) || _e14.nodeValue;
                                    if (_t14) {
                                        f += _t14;
                                    }
                                }
                                target.removeChild(_e14);
                            }
                        }
                        for (const _t15 of _n10.removedNodes){
                            const _e15 = _blockCursorElement === _t15;
                            if (_e15 || se(_t15) || ge(_t15)) {
                                const { nextSibling, previousSibling } = _n10;
                                target.insertBefore(_t15, nextSibling && nextSibling.parentNode !== target ? previousSibling ? previousSibling.parentNode === target ? previousSibling.nextSibling : null : target.firstChild : nextSibling);
                            }
                            if (!_e15) {
                                s.set(_g, _p);
                            }
                        }
                    }
                }
                for (const [_e17, _n12] of s){
                    _n12.reconcileObservedMutation(_e17, t);
                }
                const d = n.takeRecords();
                for (const _e18 of d){
                    for (const _n13 of _e18.addedNodes){
                        if (!(_n13.nodeName !== "BR" || bi(_n13, t) || ge(_n13))) {
                            _n13.remove();
                        }
                    }
                }
                n.takeRecords();
                if (i !== null) {
                    if (a) {
                        Ai(i);
                    }
                    if (u && Xi(t)) {
                        i.insertRawText(f);
                    }
                }
            });
        } finally{
            fe = false;
        }
    }
    function xe(t, e, n) {
        const t__observer = t._observer;
        if (t__observer !== null) {
            const _r4 = t__observer.takeRecords();
            if (!n || _r4.length > 0) {
                ye(t, _r4, t__observer, e);
            }
        }
    }
    function Se(t) {
        ((t)=>{
            cs(t).addEventListener("textInput", he, true);
        })(t);
        t._observer = new MutationObserver(function(e, n) {
            ye(t, e, n);
        });
    }
    function Ce(t) {
        throw new Error(t);
    }
    function Te({ isEqual }, e, n) {
        return e === n || isEqual !== undefined && isEqual(e, n);
    }
    function ve(t, e) {
        return Te(t, e, t.defaultValue);
    }
    function Ne(t) {
        return typeof t === "object" && t !== null;
    }
    function be(t, n) {
        const getter = we(t, n).getter;
        if (!(Ne(getter) && getter.getterTable !== undefined)) {
            e(405, n);
        }
        return Me(getter.getterTable);
    }
    function ke(t, n) {
        const setter = we(t, n).setter;
        if (!(Ne(setter) && setter.setterTable !== undefined)) {
            e(406, n);
        }
        return Me(setter.setterTable);
    }
    function Ee(t, n, o) {
        const _we = we(t, n);
        let _we_meta = _we.meta;
        let _t16 = 0;
        while(true){
            if (_we_meta.kind === "aliased") {
                if (_t16 === o) {
                    return Me(_we_meta.aliases);
                }
                _t16++;
                _we_meta = _we_meta.inner.meta;
            } else {
                if (_we_meta.kind === "nullable" || _we_meta.kind === "optional") {
                    _we_meta = _we_meta.inner.meta;
                } else if (_we_meta.kind === "array") {
                    _we_meta = _we_meta.item.meta;
                } else {
                    e(407, n, String(o));
                }
            }
        }
    }
    function Oe(t, n) {
        const o = we(t, n);
        const o_setter = o.setter;
        if (!(Ne(o_setter) && o_setter.setterTable !== undefined)) {
            e(408, n);
        }
        const i = String(o.defaultValue);
        if (!je(o_setter.setterTable, i)) {
            e(409, n, i);
        }
        return o_setter.setterTable[i];
    }
    function Me(t) {
        return Object.assign(Object.create(null), t);
    }
    function we(t, n) {
        const o = t.get(n);
        if (o === undefined) {
            e(410, n);
        }
        return o;
    }
    function Ae(t, e, n, isEqual, accepts) {
        if (accepts !== undefined) {
            De.add(accepts);
        }
        const i = n === undefined;
        const defaultValue = i ? t(undefined) : n;
        if (i) {
            Re(defaultValue);
        }
        return Object.assign(t, {
            accepts,
            defaultValue,
            isEqual,
            meta: e
        });
    }
    var De = new WeakSet();
    function Ie({ accepts }) {
        if (accepts === undefined || De.has(accepts)) {
            return undefined;
        }
        return accepts;
    }
    const Fe = new WeakSet();
    function Pe(t) {
        if (t !== null && typeof t === "object") {
            Fe.add(t);
        }
        return t;
    }
    function Re(t) {
        if (t !== null && typeof t === "object" && !Object.isFrozen(t) && !Fe.has(t)) {
            Object.freeze(t);
            for (const _e19 of Object.values(t)){
                Re(_e19);
            }
        }
    }
    function Le({ isEqual }) {
        if (isEqual === undefined) {
            return undefined;
        }
        return function(t, n) {
            if (t == null || n == null) {
                return t === n;
            }
            return isEqual(t, n);
        };
    }
    function Ke(t, e) {
        return function(n) {
            return e(n) || Be(t, n);
        };
    }
    function Be(t, e) {
        const t_accepts = t.accepts;
        if (t_accepts !== undefined) {
            return t_accepts.call(t, e);
        }
        return ((t, e)=>{
            const t_accepts = t.accepts;
            if (t_accepts !== undefined) {
                if (Be(t, e)) {
                    return {
                        parsed: t(e)
                    };
                }
                return undefined;
            }
            const parsed = t(e);
            if (ve(t, parsed) && e !== t.defaultValue) {
                return undefined;
            }
            return {
                parsed
            };
        })(t, e) !== undefined;
    }
    const $e = new WeakMap();
    function ze(t) {
        const e = $e.get(t);
        if (e !== undefined) {
            return e;
        }
        const n = ((t)=>{
            const t_meta = t.meta;
            if (t_meta == null) {
                return false;
            }
            if (Ie(t) !== undefined) {
                return false;
            }
            switch(t_meta.kind){
                case "raw":
                    return true;
                case "union":
                    return t_meta.members != null && t_meta.members.length > 0 && t_meta.members.every((t)=>ze(t));
                case "nullable":
                case "optional":
                case "transform":
                case "aliased":
                    return t_meta.inner != null && ze(t_meta.inner);
                default:
                    return false;
            }
        })(t);
        $e.set(t, n);
        return n;
    }
    function We(t, e) {
        const t_meta = t.meta;
        if (t_meta == null) {
            if (Be(t, e)) {
                return 1;
            }
            return 4;
        }
        const o = Ie(t);
        const r = o !== undefined;
        if (r && !o.call(t, e)) {
            return 4;
        }
        const i = ((t, t_meta_1, n, o)=>{
            switch(t_meta_1.kind){
                case "raw":
                    if (o) {
                        return 1;
                    }
                    return 2;
                case "array":
                    {
                        if (!Array.isArray(n)) {
                            return 4;
                        }
                        if (t_meta_1.item == null) {
                            return 1;
                        }
                        let _t17 = 1;
                        for(let _o8 = 0; _o8 < n.length; _o8++){
                            if (n[_o8] !== undefined) {
                                const _r5 = We(t_meta_1.item, n[_o8]);
                                if (_r5 > _t17) {
                                    _t17 = _r5;
                                }
                            }
                        }
                        if (_t17 >= 3) {
                            return 3;
                        }
                        return _t17;
                    }
                case "object":
                    {
                        const _t18 = t_meta_1.fields;
                        if (!He(n)) {
                            return 4;
                        }
                        if (_t18 == null) {
                            return 1;
                        }
                        if (!o && Ve(n, _t18)) {
                            return 4;
                        }
                        let _r6 = 1;
                        for (const _e20 of Object.keys(n)){
                            if (je(_t18, _e20)) {
                                const _o9 = We(_t18[_e20], n[_e20]);
                                if (_o9 > _r6) {
                                    _r6 = _o9;
                                }
                            }
                        }
                        if (_r6 >= 3) {
                            return 3;
                        }
                        return _r6;
                    }
                case "union":
                    if (t_meta_1.members == null) {
                        return 1;
                    }
                    return Ue(t_meta_1.members, n).fit;
                case "aliased":
                case "nullable":
                case "optional":
                case "transform":
                    if ((t_meta_1.kind === "aliased" ? typeof n === "string" && t_meta_1.aliases != null && je(t_meta_1.aliases, n) : t_meta_1.kind === "nullable" ? n == null : t_meta_1.kind === "optional" && n === undefined) || t_meta_1.inner == null) {
                        return 1;
                    }
                    return We(t_meta_1.inner, n);
                default:
                    if (o || Be(t, n)) {
                        return 1;
                    }
                    return 4;
            }
        })(t, t_meta, e, r);
        if (r && i === 4) {
            return 3;
        }
        return i;
    }
    function Ue(t, e) {
        let n;
        let o = 4;
        let fit = 4;
        for (const _s3 of t){
            const _l2 = We(_s3, e);
            const _c2 = _l2 < 3 && ze(_s3) ? 3 : _l2;
            if (_c2 < o && (n = _s3, o = _c2, fit = _l2, _c2 === 1)) {
                break;
            }
        }
        return {
            fit,
            member: n
        };
    }
    function je(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }
    function He(t) {
        if (!((t)=>((t)=>typeof t === "object" && t !== null)(t) && !Array.isArray(t))(t)) {
            return false;
        }
        const e = Object.getPrototypeOf(t);
        return e === Object.prototype || e === null;
    }
    function Ve(t, e) {
        for (const _n14 of Object.keys(t)){
            if (!je(e, _n14)) {
                return true;
            }
        }
        return false;
    }
    function Ye(t = "") {
        return Ae(function(e) {
            if (typeof e === "string") {
                return e;
            }
            return t;
        }, {
            kind: "string"
        }, undefined, undefined, function(t) {
            return typeof t === "string";
        });
    }
    const Je = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Ge(t = 0, e = {}) {
        const _e21 = e;
        const { integer, clamp } = _e21;
        const min = integer && e.min !== undefined ? Math.ceil(e.min) : e.min;
        const i = integer && e.max !== undefined ? Math.floor(e.max) : e.max;
        const s = function s(t) {
            if (typeof t === "string" && Je.test(t)) {
                return Number(t);
            }
            return t;
        };
        const l = function l(t) {
            return typeof t === "number" && Number.isFinite(t) && (!integer || Number.isInteger(t));
        };
        const c = function c(t) {
            return l(t) && (min === undefined || t >= min) && (i === undefined || t <= i);
        };
        return Ae(function(e) {
            const n = s(e);
            if (clamp && l(n)) {
                if (min !== undefined && n < min) {
                    return min;
                }
                if (i !== undefined && n > i) {
                    return i;
                }
                return n;
            }
            if (c(n)) {
                return n;
            }
            return t;
        }, {
            clamp,
            integer,
            kind: "number",
            max: i,
            min
        }, undefined, undefined, function(t) {
            if (clamp) {
                return l(s(t));
            }
            return c(s(t));
        });
    }
    function qe(values) {
        const n = Pe((arguments.length <= 1 ? 0 : arguments.length - 1) !== 0 ? arguments.length <= 1 ? undefined : arguments[1] : values[0]);
        const o = new Set(values);
        return Ae(function(t) {
            if (t !== undefined && o.has(t)) {
                return t;
            }
            return n;
        }, {
            kind: "enum",
            values
        }, n, undefined, function(t) {
            return o.has(t) && (t !== undefined || n === undefined);
        });
    }
    function Xe(t, e) {
        if (t === e) {
            return true;
        }
        if (Array.isArray(t) || Array.isArray(e)) {
            if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length) {
                return false;
            }
            for(let _n15 = 0; _n15 < t.length; _n15++){
                if (!Xe(t[_n15], e[_n15])) {
                    return false;
                }
            }
            return true;
        }
        if (!He(t) || !He(e)) {
            return false;
        }
        const n = Object.keys(t);
        return n.length === Object.keys(e).length && n.every((n)=>je(e, n) && Xe(t[n], e[n]));
    }
    function Qe() {
        return function(t) {
            return ((fields)=>({
                    meta: {
                        fields,
                        kind: "node"
                    }
                }))(t);
        };
    }
    function Ze(t, aliases) {
        const n = function n(t) {
            return typeof t === "string" && je(aliases, t);
        };
        return Ae(function(o) {
            if (n(o)) {
                return aliases[o];
            }
            return t(o);
        }, {
            aliases,
            inner: t,
            kind: "aliased"
        }, t.defaultValue, t.isEqual, function(e) {
            return n(e) || Be(t, e);
        });
    }
    function tn(t, e) {
        return nn(0, t, {
            getter: {
                field: e.field,
                getterTable: e.getterTable,
                method: e.getter,
                when: e.when
            },
            setter: {
                field: e.field,
                method: e.setter,
                setterTable: e.setterTable
            }
        });
    }
    function en(t, e) {
        return nn(0, t, e);
    }
    function nn(t, e, n) {
        return Object.assign(function(t) {
            return e(t);
        }, {
            accepts: e.accepts,
            defaultValue: e.defaultValue,
            getter: n.getter,
            isEqual: e.isEqual,
            meta: e.meta,
            setter: n.setter
        });
    }
    const on = "direct";
    const rn = "latest";
    const sn = function sn(t, e) {
        this.key = t;
        const n = "meta" in (o = e.parse) && typeof o.meta === "object" && o.meta !== null && "kind" in o.meta && typeof o.meta.kind === "string" && "defaultValue" in o ? e.parse : undefined;
        var o;
        this.schema = n;
        this.parse = e.parse.bind(e);
        this.unparse = (e.unparse || pn).bind(e);
        this.isEqual = e.isEqual ? e.isEqual.bind(e) : n !== undefined && n.isEqual !== undefined ? function(t, e) {
            return Te(n, t, e);
        } : Object.is;
        this.defaultValue = n !== undefined ? n.defaultValue : this.parse(undefined);
        this.resetOnCopyNode = e.resetOnCopyNode || false;
    };
    function ln(t, e, n = rn) {
        const __state = (n === rn ? t.getLatest() : t).__state;
        if (__state) {
            return __state.getValue(e);
        }
        return e.defaultValue;
    }
    function cn(t, e, n) {
        let o;
        Sc();
        if (typeof n === "function") {
            const _r7 = t.getLatest();
            const _i5 = ln(_r7, e);
            o = n(_i5);
            if (e.isEqual(_i5, o)) {
                return _r7;
            }
        } else {
            o = n;
        }
        const r = t.getWritable();
        dn(r).updateFromKnown(e, o);
        return r;
    }
    function an(t) {
        const sharedConfigMap = new Map();
        const flatKeys = new Set();
        for (const _ref12 of Al(typeof t === "function" ? t : t.replace)){
            const _o0 = _ref12.ownNodeConfig;
            if (_o0 && _o0.stateConfigs) {
                for (const _t19 of _o0.stateConfigs){
                    let _o1;
                    if ("stateConfig" in _t19) {
                        _o1 = _t19.stateConfig;
                        if (_t19.flat) {
                            flatKeys.add(_o1.key);
                        }
                    } else {
                        _o1 = _t19;
                    }
                    sharedConfigMap.set(_o1.key, _o1);
                }
            }
        }
        return {
            flatKeys,
            sharedConfigMap
        };
    }
    const un = new Set([
        "__proto__",
        "constructor",
        "prototype"
    ]);
    const _fn = (()=>{
        function fn(t, e, n = undefined, o = new Map(), r = undefined) {
            this.node = t;
            this.sharedNodeState = e;
            this.unknownState = n;
            this.knownState = o;
            const sharedConfigMap = this.sharedNodeState.sharedConfigMap;
            const s = r !== undefined ? r : ((sharedConfigMap_1, e, n)=>{
                let n_size = n.size;
                if (e) {
                    for(const _r8 in e){
                        const _e22 = sharedConfigMap_1.get(_r8);
                        if (!(_e22 && n.has(_e22))) {
                            n_size++;
                        }
                    }
                }
                return n_size;
            })(sharedConfigMap, n, o);
            this.size = s;
        }
        const _proto6 = fn.prototype;
        _proto6.getValue = function getValue(t) {
            const e = this.knownState.get(t);
            if (e !== undefined) {
                return e;
            }
            this.sharedNodeState.sharedConfigMap.set(t.key, t);
            let t_defaultValue = t.defaultValue;
            if (this.unknownState && t.key in this.unknownState) {
                const _e23 = this.unknownState[t.key];
                if (_e23 !== undefined) {
                    t_defaultValue = t.parse(_e23);
                }
                this.updateFromKnown(t, t_defaultValue);
            }
            return t_defaultValue;
        };
        _proto6.getInternalState = function getInternalState() {
            return [
                this.unknownState,
                this.knownState
            ];
        };
        _proto6.toJSON = function toJSON() {
            const t = babelHelpers.extends({}, this.unknownState);
            const e = {};
            for (const [_e24, _n16] of this.knownState){
                if (_e24.isEqual(_n16, _e24.defaultValue)) {
                    delete t[_e24.key];
                } else {
                    t[_e24.key] = _e24.unparse(_n16);
                }
            }
            for (const _n17 of this.sharedNodeState.flatKeys){
                if (_n17 in t) {
                    e[_n17] = t[_n17];
                    delete t[_n17];
                }
            }
            if (gn(t)) {
                e[L] = t;
            }
            return e;
        };
        _proto6.getWritable = function getWritable(t) {
            if (this.node === t) {
                return this;
            }
            const sharedNodeState = this.sharedNodeState;
            const unknownState = this.unknownState;
            const o = new Map(this.knownState);
            return new fn(t, sharedNodeState, ((t, e, unknownState_1)=>{
                let o;
                if (unknownState_1) {
                    for (const [_r9, _i6] of Object.entries(unknownState_1)){
                        {
                            if (un.has(_r9)) {
                                continue;
                            }
                            const _n18 = t.get(_r9);
                            if (_n18) {
                                if (!e.has(_n18)) {
                                    e.set(_n18, _n18.parse(_i6));
                                }
                            } else {
                                o = o || {};
                                o[_r9] = _i6;
                            }
                        }
                    }
                }
                return o;
            })(sharedNodeState.sharedConfigMap, o, unknownState), o, this.size);
        };
        _proto6.resetOnCopyNode = function resetOnCopyNode() {
            for (const _t20 of this.knownState.keys()){
                if (_t20.resetOnCopyNode) {
                    this.knownState.set(_t20, _t20.defaultValue);
                }
            }
            return this;
        };
        _proto6.updateFromKnown = function updateFromKnown(t, e) {
            const t_key = t.key;
            this.sharedNodeState.sharedConfigMap.set(t_key, t);
            const knownState = this.knownState;
            const unknownState = this.unknownState;
            if (!(knownState.has(t) || unknownState && t_key in unknownState)) {
                if (unknownState) {
                    delete unknownState[t_key];
                    this.unknownState = gn(unknownState);
                }
                this.size++;
            }
            knownState.set(t, e);
        };
        _proto6.updateFromUnknown = function updateFromUnknown(t, e) {
            if (un.has(t)) {
                return;
            }
            const n = this.sharedNodeState.sharedConfigMap.get(t);
            if (n) {
                this.updateFromKnown(n, n.parse(e));
            } else {
                this.unknownState = this.unknownState || {};
                if (!(t in this.unknownState)) {
                    this.size++;
                }
                this.unknownState[t] = e;
            }
        };
        _proto6.updateFromJSON = function updateFromJSON(t) {
            const knownState = this.knownState;
            for (const _t21 of knownState.keys()){
                knownState.set(_t21, _t21.defaultValue);
            }
            this.size = knownState.size;
            this.unknownState = undefined;
            if (t) {
                for (const [_e25, _n19] of Object.entries(t)){
                    this.updateFromUnknown(_e25, _n19);
                }
            }
        };
        return fn;
    })();
    function dn(t) {
        const e = t.getWritable();
        const n = e.__state ? e.__state.getWritable(e) : new _fn(e, ((t)=>{
            if (t.__state) {
                return t.__state.sharedNodeState;
            }
            return ei(js(), t.getType()).sharedNodeState;
        })(e));
        e.__state = n;
        return n;
    }
    function hn(t, e) {
        const n = t.getWritable();
        const o = e[L];
        if (n.__state || o) {
            dn(t).updateFromJSON(o);
        }
        return n;
    }
    function gn(t) {
        if (t) {
            for(const _e26 in t){
                return t;
            }
        }
    }
    function pn(t) {
        return t;
    }
    function _n(t, e, n) {
        for (const [_o10, _r0] of e.knownState){
            {
                if (t.has(_o10.key)) {
                    continue;
                }
                t.add(_o10.key);
                const _e27 = n ? n.getValue(_o10) : _o10.defaultValue;
                if (_e27 !== _r0 && !_o10.isEqual(_e27, _r0)) {
                    return true;
                }
            }
        }
        return false;
    }
    function mn(t, { unknownState }, n) {
        const r = n ? n.unknownState : undefined;
        if (unknownState) {
            for (const [_e28, _n20] of Object.entries(unknownState)){
                if (!t.has(_e28) && (t.add(_e28), _n20 !== (r ? r[_e28] : undefined))) {
                    return true;
                }
            }
        }
        return false;
    }
    function yn(t, e) {
        const t___state = t.__state;
        if (t___state && t___state.node === t) {
            return t___state.getWritable(e);
        }
        return t___state;
    }
    function xn(t) {
        return !root(t) && t.getTextContent !== _Ho4.prototype.getTextContent;
    }
    const SYMBOL_LEXICALCACHED_TEXT_SIZE = Symbol.for("@lexical/CachedTextSize");
    function Cn(t, n) {
        return Kn.read(function() {
            let o = 0;
            let r = t;
            for(let _t22 = 0; _t22 < n && r !== null; _t22++){
                const _i7 = Ln.get(r);
                if (_i7 === undefined) {
                    e(345, r);
                }
                if (Vo(_i7)) {
                    const _s4 = Bn.get(r);
                    if (_s4 !== undefined && Vo(_s4) && _s4.__parent !== _i7.__parent) {
                        o += _i7.getTextContentSize();
                    } else {
                        const _t23 = $n.get(r);
                        const _n21 = _t23 && _t23.__lexicalTextContent;
                        if (typeof _n21 !== "string") {
                            e(346, _i7.getType());
                        }
                        o += _n21.length;
                    }
                    if (_t22 < n - 1 && !_i7.isInline()) {
                        o += 2;
                    }
                } else if (no(_i7).size > 0) {
                    o += _i7.getTextContentSize();
                } else {
                    const _t24 = _i7[SYMBOL_LEXICALCACHED_TEXT_SIZE];
                    if (_t24 === undefined) {
                        e(347, _i7.getType(), r);
                    }
                    o += _t24;
                }
                r = _i7.__next;
            }
            return o;
        }, {
            editor: bn
        });
    }
    function Tn(t) {
        if (!(Vo(t) || no(t).size > 0)) {
            if (t[SYMBOL_LEXICALCACHED_TEXT_SIZE] === undefined) {
                t[SYMBOL_LEXICALCACHED_TEXT_SIZE] = Sr(t) ? t.__text.length : t.getTextContentSize();
            }
        }
    }
    const vn = 4;
    let Nn;
    var bn;
    let kn;
    let En = "";
    let On = null;
    let Mn = null;
    let firstTextKey = null;
    function An() {
        return {
            firstTextKey,
            format: On,
            style: Mn
        };
    }
    function Dn(t) {
        if (t.firstTextKey !== null) {
            On = t.format;
            Mn = t.style;
            firstTextKey = t.firstTextKey;
        }
    }
    function In(t) {
        if (firstTextKey !== null) {
            return;
        }
        const t___lexicalFirstTextKey = t.__lexicalFirstTextKey;
        if (t___lexicalFirstTextKey === undefined) {
            e(348);
        }
        if (t___lexicalFirstTextKey === null) {
            return;
        }
        const o = Bn.get(t___lexicalFirstTextKey);
        if (Sr(o)) {
            On = o.getFormat();
            Mn = o.getStyle();
            firstTextKey = t___lexicalFirstTextKey;
        }
    }
    let Fn;
    let Pn;
    let Rn;
    var Ln;
    var Kn;
    var Bn;
    var $n;
    let zn;
    let Wn;
    let Un;
    let jn = false;
    let Hn = false;
    function Vn(t, e) {
        const n = Ln.get(t);
        const o = Bn.has(t);
        if (e !== null) {
            const _n22 = yo(t);
            if (_n22.parentNode === e) {
                e.removeChild(_n22);
            }
        }
        if (!o) {
            bn._keyToDOMMap.delete(t);
            if (Vo(n)) {
                const _t25 = Fl(n, Ln);
                Yn(_t25, 0, _t25.length - 1, null);
            }
            if (n !== undefined) {
                for (const _t26 of no(n).values()){
                    const _e29 = ro(_t26);
                    Vn(_t26, null);
                    if (_e29 !== null) {
                        _e29.remove();
                    }
                }
                Ji(Wn, kn, Fn, n, "destroyed");
            }
        }
    }
    function Yn(t, e, n, o) {
        for(let _r1 = e; _r1 <= n; ++_r1){
            const _e30 = t[_r1];
            if (_e30 !== undefined) {
                Vn(_e30, o);
            }
        }
    }
    function Jn(t, e) {
        t.setProperty("text-align", e);
    }
    const Gn = "40px";
    function qn(t, e) {
        const indent = Nn.theme.indent;
        if (typeof indent === "string") {
            const _o11 = t.classList.contains(indent);
            if (e > 0 && !_o11) {
                t.classList.add(indent);
            } else if (e < 1 && _o11) {
                t.classList.remove(indent);
            }
        }
        t.style.setProperty("padding-inline-start", e === 0 ? "" : `calc(${e} * var(--lexical-indent-base-value, ${Gn}))`);
        Vi(t, "class");
        Vi(t, "style");
    }
    function Xn(t, e) {
        const t_style = t.style;
        switch(e){
            case 0:
                Jn(t_style, "");
                break;
            case 1:
                Jn(t_style, "left");
                break;
            case 2:
                Jn(t_style, "center");
                break;
            case 3:
                Jn(t_style, "right");
                break;
            case 4:
                Jn(t_style, "justify");
                break;
            case 5:
                Jn(t_style, "start");
                break;
            default:
                if (e === 6) {
                    Jn(t_style, "end");
                }
        }
        Vi(t, "style");
    }
    function Qn(t, e) {
        const n = ((t)=>{
            const t___dir = t.__dir;
            if (t___dir !== null) {
                return t___dir;
            }
            if (root(t)) {
                return null;
            }
            const n = t.getParent();
            if (n === null || shadowRoot(n) && n.__dir === null) {
                return "auto";
            }
            return null;
        })(e);
        if (n !== null) {
            t.dir = n;
        } else {
            t.removeAttribute("dir");
        }
    }
    function Zn(t) {
        const e = ks().createElement("div");
        e.setAttribute("data-lexical-slot", t);
        e.style.display = "none";
        return e;
    }
    function to(t, e, n) {
        if (e || t.contentEditable === "false") {
            rl(n, bn);
        } else {
            n.removeAttribute("contenteditable");
        }
    }
    function eo(t, e, n) {
        const o = En;
        const r = An();
        En = "";
        let i = "";
        const s = Go(t);
        for (const [_o12, _r10] of n){
            {
                const _n23 = Zn(_o12);
                to(e, s, _n23);
                e.appendChild(_n23);
                En = "";
                const _l3 = An();
                so(_r10, Vs(t, _n23, bn));
                Dn(_l3);
                oo(t, _o12, e, _n23);
                i += En;
            }
        }
        Dn(r);
        En = o;
        return i;
    }
    function no(t) {
        if (Vu(t) && t.__slots !== null) {
            return t.__slots;
        }
        return Hu;
    }
    function oo(t, e, n, o) {
        const r = Un.$getSlotTargetElement(t, e, n, bn);
        if (r !== null) {
            if (o.parentElement !== r) {
                r.appendChild(o);
            }
            o.style.display = "";
        }
    }
    function ro(t) {
        const e = $n.get(t);
        if (e !== undefined) {
            return e.parentElement;
        }
        return null;
    }
    function io(t, e, n) {
        const o = no(t);
        const r = no(e);
        for (const [_t27, _e31] of o){
            if (!r.has(_t27)) {
                const _t28 = ro(_e31);
                Vn(_e31, null);
                if (_t28 !== null) {
                    _t28.remove();
                }
            }
        }
        const i = En;
        const s = An();
        let l = "";
        let c = null;
        const a = Go(e);
        for (const [_t29, _i8] of r){
            {
                const _r11 = o.get(_t29);
                let _s5 = _r11 !== undefined ? ro(_r11) : null;
                En = "";
                const _u2 = An();
                if (_s5 === null) {
                    _s5 = Zn(_t29);
                    let _o13 = null;
                    for (const _t30 of n.children){
                        if (!_t30.hasAttribute("data-lexical-slot")) {
                            _o13 = _t30;
                            break;
                        }
                    }
                    n.insertBefore(_s5, _o13);
                    so(_i8, Vs(e, _s5, bn));
                } else {
                    if (_r11 === _i8) {
                        ho(_i8, _s5);
                    } else {
                        if (_r11 !== undefined) {
                            Vn(_r11, _s5);
                        }
                        so(_i8, Vs(e, _s5, bn));
                    }
                }
                Dn(_u2);
                to(n, a, _s5);
                oo(e, _t29, n, _s5);
                l += En;
                if (_s5.parentElement === n) {
                    const _t31 = c === null ? n.firstChild : c.nextSibling;
                    if (_t31 !== _s5) {
                        n.insertBefore(_s5, _t31);
                    }
                    c = _s5;
                }
            }
        }
        Dn(s);
        En = i;
        return l;
    }
    function so(t, n) {
        const o = Bn.get(t);
        if (o === undefined) {
            e(60);
        }
        if (n !== null) {
            const _e32 = Ln.get(t);
            if (_e32 !== undefined) {
                const _r12 = $n.get(t);
                if (_r12 !== undefined) {
                    const _i9 = Yu(_e32) ? _e32.__slotHost : null;
                    const _s6 = Yu(o) ? o.__slotHost : null;
                    const _l4 = _e32.__parent !== o.__parent || _i9 !== _s6;
                    const _c3 = _s6 !== null && _r12.parentElement !== n.element;
                    if (_l4 || _c3) {
                        n.insertChild(_r12);
                        return ho(t, n.element);
                    }
                }
            }
        }
        const r = Un.$createDOM(o, bn);
        ((t, e, n)=>{
            const n__keyToDOMMap = n._keyToDOMMap;
            Ni(e, n, t);
            n__keyToDOMMap.set(t, e);
        })(t, r, bn);
        if (Sr(o)) {
            r.setAttribute("data-lexical-text", "true");
        } else if (Go(o)) {
            r.setAttribute("data-lexical-decorator", "true");
            nl(r, {
                captureSelection: true
            });
        }
        if (Vo(o)) {
            const _t32 = En;
            const { __indent, __size } = o;
            Qn(r, o);
            if (__indent !== 0) {
                qn(r, __indent);
            }
            const _i0 = no(o);
            const _s7 = _i0.size > 0 ? eo(o, r, _i0) : "";
            if (__size === 0) {
                r.__lexicalTextContent = _s7;
                r.__lexicalFirstTextKey = null;
                En += _s7;
                if (_i0.size > 0) {
                    r.__lexicalSlotTextLength = _s7.length;
                }
            } else {
                const _e34 = __size - 1;
                lo(Fl(o, Bn), o, 0, _e34, Vs(o, r, bn));
                if (_s7 !== "") {
                    const _e35 = r.__lexicalTextContent || "";
                    r.__lexicalTextContent = _s7 + _e35;
                    En = _t32 + _s7 + _e35;
                }
                if (_i0.size > 0) {
                    r.__lexicalSlotTextLength = _s7.length;
                }
            }
            if (xn(o)) {
                const _e36 = o.getTextContent();
                r.__lexicalTextContent = _e36;
                En = _t32 + _e36;
            }
            const _l5 = o.__format;
            if (_l5 !== 0) {
                Xn(r, _l5);
            }
            if (!o.isInline()) {
                uo(0, o, r);
                ao(o, r);
            }
        } else {
            const _e37 = o.getTextContent();
            if (Go(o)) {
                const _e38 = o.decorate(bn, Nn);
                if (_e38 !== null) {
                    go(t, _e38);
                }
                r.contentEditable = "false";
                const _n25 = no(o);
                if (_n25.size > 0) {
                    eo(o, r, _n25);
                }
            }
            En += _e37;
        }
        if (n !== null) {
            n.insertChild(r);
        }
        Un.$decorateDOM(o, null, r, bn);
        Tn(o);
        Ji(Wn, kn, Fn, o, "created");
        return r;
    }
    function lo(t, n, o, r, i) {
        const s = En;
        const l = An();
        En = "";
        On = null;
        Mn = null;
        firstTextKey = null;
        let c = o;
        for(; c <= r; ++c){
            const _e39 = An();
            so(t[c], i);
            const _n26 = Bn.get(t[c]);
            if (_n26 !== null && Sr(_n26)) {
                if (On === null) {
                    On = _n26.getFormat();
                    Mn = _n26.getStyle();
                    firstTextKey = _n26.__key;
                }
            } else if (Vo(_n26) && c < r && !_n26.isInline()) {
                En += v;
            }
            Dn(_e39);
        }
        const a = bn._keyToDOMMap.get(n.__key);
        if (a === undefined) {
            e(349, n.__key);
        }
        a.__lexicalTextContent = En;
        a.__lexicalFirstTextKey = firstTextKey;
        En = s + En;
        Dn(l);
    }
    function co(t) {
        return Go(t) && !t.isInline();
    }
    function ao(t, e, n = Vs(t, e, bn)) {
        n.setDecoratorBoundaryAnchor("leading", co(t.getFirstChild()));
        n.setDecoratorBoundaryAnchor("trailing", co(t.getLastChild()));
    }
    function uo(t, e, n) {
        const o = Vs(e, n, bn);
        const r = ((t, e)=>{
            if (t) {
                const _n27 = t.__last;
                if (_n27) {
                    const _t33 = e.get(_n27);
                    if (_t33) {
                        if (Xl(_t33)) {
                            return "line-break";
                        }
                        if (Go(_t33) && _t33.isInline()) {
                            return "decorator";
                        }
                        return null;
                    }
                }
                return "empty";
            }
            return null;
        })(e, Bn);
        o.setManagedLineBreak(r);
    }
    function fo(t, e, n) {
        const e___lexicalFirstTextKey = e.__lexicalFirstTextKey;
        if (e___lexicalFirstTextKey != null) {
            const _e40 = t.__key;
            let _r13 = e___lexicalFirstTextKey;
            while(_r13 !== null){
                const _t34 = Bn.get(_r13);
                if (_t34 === undefined) {
                    _r13 = null;
                    break;
                }
                if (_t34.__parent === _e40) {
                    break;
                }
                _r13 = _t34.__parent;
            }
            if (_r13 !== null && !n.has(_r13)) {
                const _t35 = Bn.get(e___lexicalFirstTextKey);
                if (Sr(_t35)) {
                    On = _t35.getFormat();
                    return void (Mn = _t35.getStyle());
                }
            }
        }
        e.__lexicalFirstTextKey = firstTextKey;
    }
    function ho(t, n) {
        const o = Ln.get(t);
        let r = Bn.get(t);
        if (!(o !== undefined && r !== undefined)) {
            e(61);
        }
        const i = jn || Rn.has(t) || Pn.has(t);
        const s = Zi(bn, t);
        if (o === r && !i) {
            let _t36;
            if (Vo(o)) {
                const _n28 = s.__lexicalTextContent;
                if (typeof _n28 !== "string") {
                    e(355, o.getType());
                }
                _t36 = _n28;
                In(s);
            } else {
                _t36 = o.getTextContent();
            }
            En += _t36;
            return s;
        }
        if (o !== r && i) {
            Ji(Wn, kn, Fn, r, "updated");
        }
        if (Un.$updateDOM(r, o, s, bn)) {
            const _o14 = so(t, null);
            if (n === null) {
                e(62);
            }
            n.replaceChild(_o14, s);
            Vn(t, null);
            return _o14;
        }
        if (Vo(o)) {
            if (!Vo(r)) {
                e(334, t);
            }
            const _n29 = r.__indent;
            if (jn || _n29 !== o.__indent) {
                qn(s, _n29);
            }
            const _l6 = r.__format;
            if (jn || _l6 !== o.__format) {
                Xn(s, _l6);
            }
            const _c4 = i && (no(r).size > 0 || no(o).size > 0) ? io(o, r, s) : "";
            if (i) {
                const _t37 = En;
                ((t, n, o)=>{
                    let r;
                    On = null;
                    Mn = null;
                    firstTextKey = null;
                    ((t, n, o)=>{
                        const r = En;
                        const t___size = t.__size;
                        const n___size = n.__size;
                        En = "";
                        const o_element = o.element;
                        const c = bn._keyToDOMMap.get(n.__key);
                        if (c === undefined) {
                            e(351, n.__key);
                        }
                        const a = n___size - t___size;
                        if (!jn && Math.abs(a) <= 1 && t___size >= vn && t.__first === n.__first && (a !== 0 || !bn._cloneNotNeeded.has(t.__key))) {
                            const _i1 = c.__lexicalTextContent;
                            const _u3 = zn.get(t.__key);
                            if (!jn && !xn(n) && typeof _i1 === "string" && _u3 !== undefined) {
                                const _s8 = ((t, _u3_1)=>{
                                    const _u3_1_size = _u3_1.size;
                                    if (_u3_1_size === 0 || _u3_1_size >= t.__size) {
                                        return null;
                                    }
                                    let t___last = t.__last;
                                    let r = null;
                                    let i = 0;
                                    while(t___last !== null && i < _u3_1_size){
                                        if (!_u3_1.has(t___last)) {
                                            return null;
                                        }
                                        r = t___last;
                                        const _t38 = Bn.get(t___last);
                                        if (_t38 === undefined) {
                                            return null;
                                        }
                                        t___last = _t38.__prev;
                                        i++;
                                    }
                                    if (i !== _u3_1_size || t___last !== null && _u3_1.has(t___last)) {
                                        return null;
                                    }
                                    return r;
                                })(n, _u3);
                                if (_s8 !== null) {
                                    const _f2 = _u3.size;
                                    if (a === 0) {
                                        const _t39 = Cn(_s8, _f2);
                                        let _o15 = _s8;
                                        let _a2 = 0;
                                        while(_o15 !== null && _a2 < _f2){
                                            const _t40 = Bn.get(_o15);
                                            if (_t40 === undefined) {
                                                break;
                                            }
                                            const _e41 = An();
                                            ho(_o15, o_element);
                                            if (Sr(_t40) && On === null) {
                                                On = _t40.getFormat();
                                                Mn = _t40.getStyle();
                                                firstTextKey = _t40.__key;
                                            }
                                            Dn(_e41);
                                            _o15 = _t40.__next;
                                            _a2++;
                                        }
                                        let _d2 = "";
                                        _o15 = _s8;
                                        for(_a2 = 0; _o15 !== null && _a2 < _f2;){
                                            const _t41 = Bn.get(_o15);
                                            if (_t41 === undefined) {
                                                break;
                                            }
                                            let _n30;
                                            if (Vo(_t41)) {
                                                const _r14 = bn._keyToDOMMap.get(_o15);
                                                const _i10 = _r14 && _r14.__lexicalTextContent;
                                                if (typeof _i10 !== "string") {
                                                    e(352, _t41.getType());
                                                }
                                                _n30 = _i10;
                                            } else {
                                                _n30 = _t41.getTextContent();
                                            }
                                            _d2 += _n30;
                                            if (_a2 < _f2 - 1 && Vo(_t41) && !_t41.isInline()) {
                                                _d2 += v;
                                            }
                                            _o15 = _t41.__next;
                                            _a2++;
                                        }
                                        const _h2 = c.__lexicalSlotTextLength || 0;
                                        const _g2 = _h2 > 0 ? _i1.slice(_h2) : _i1;
                                        const _p2 = _g2.slice(0, _g2.length - _t39) + _d2;
                                        c.__lexicalTextContent = _p2;
                                        En = r + _p2;
                                        return void fo(n, c, _u3);
                                    }
                                    if (((t, o, r, _i1_1, _s8_1, _f2_1, c)=>{
                                        const n = 0;
                                        if (c !== 1 && c !== -1) {
                                            return false;
                                        }
                                        if (_f2_1 !== (c === 1 ? 2 : 1)) {
                                            return false;
                                        }
                                        const a = _f2_1 - c;
                                        let t___last = t.__last;
                                        for(let _t42 = 0; _t42 < a - 1; _t42++){
                                            if (t___last === null) {
                                                return false;
                                            }
                                            const _t43 = Ln.get(t___last);
                                            if (_t43 === undefined) {
                                                return false;
                                            }
                                            t___last = _t43.__prev;
                                        }
                                        if (t___last === null) {
                                            return false;
                                        }
                                        const f = Bn.get(_s8_1);
                                        const d = Ln.get(t___last);
                                        if (f === undefined || d === undefined) {
                                            return false;
                                        }
                                        if (f.__prev !== d.__prev) {
                                            return false;
                                        }
                                        const h = [];
                                        let g = _s8_1;
                                        for(let _t44 = 0; _t44 < _f2_1; _t44++){
                                            if (g === null) {
                                                return false;
                                            }
                                            h.push(g);
                                            const _t45 = Bn.get(g);
                                            g = _t45 ? _t45.__next : null;
                                        }
                                        const p = [];
                                        g = t___last;
                                        for(let _t46 = 0; _t46 < a; _t46++){
                                            if (g === null) {
                                                return false;
                                            }
                                            p.push(g);
                                            const _t47 = Ln.get(g);
                                            g = _t47 ? _t47.__next : null;
                                        }
                                        const _ = new Set(p);
                                        const m = new Set(h);
                                        const y = [];
                                        let x = 0;
                                        let nextIndex = 0;
                                        while(x < a && nextIndex < _f2_1){
                                            if (h[nextIndex] === p[x]) {
                                                y.push({
                                                    key: h[nextIndex],
                                                    kind: "reconcile"
                                                });
                                                x++;
                                                nextIndex++;
                                            } else if (m.has(p[x])) {
                                                if (_.has(h[nextIndex])) {
                                                    return false;
                                                }
                                                y.push({
                                                    key: h[nextIndex],
                                                    kind: "create",
                                                    nextIndex
                                                });
                                                nextIndex++;
                                            } else {
                                                y.push({
                                                    key: p[x],
                                                    kind: "destroy"
                                                });
                                                x++;
                                            }
                                        }
                                        while(x < a){
                                            y.push({
                                                key: p[x++],
                                                kind: "destroy"
                                            });
                                        }
                                        while(nextIndex < _f2_1){
                                            y.push({
                                                key: h[nextIndex],
                                                kind: "create",
                                                nextIndex
                                            });
                                            nextIndex++;
                                        }
                                        const C = Cn(t___last, a);
                                        for (const _t48 of y){
                                            const _e42 = An();
                                            if (_t48.kind === "reconcile") {
                                                ho(_t48.key, o.element);
                                            } else if (_t48.kind === "destroy") {
                                                Vn(_t48.key, o.element);
                                            } else {
                                                let _e43 = null;
                                                for(let _n31 = _t48.nextIndex + 1; _n31 < _f2_1; _n31++){
                                                    const _t49 = bn._keyToDOMMap.get(h[_n31]);
                                                    if (_t49 !== undefined) {
                                                        _e43 = _t49;
                                                        break;
                                                    }
                                                }
                                                so(_t48.key, o.withBefore(_e43 ?? o.before));
                                            }
                                            if (_t48.kind !== "destroy") {
                                                const _e44 = Bn.get(_t48.key);
                                                if (_e44 && Sr(_e44) && On === null) {
                                                    On = _e44.getFormat();
                                                    Mn = _e44.getStyle();
                                                    firstTextKey = _e44.__key;
                                                }
                                            }
                                            Dn(_e42);
                                        }
                                        let T = "";
                                        for(let _t50 = 0; _t50 < _f2_1; _t50++){
                                            const _n32 = Bn.get(h[_t50]);
                                            if (_n32 === undefined) {
                                                return false;
                                            }
                                            let _o16;
                                            if (Vo(_n32)) {
                                                const _r15 = bn._keyToDOMMap.get(h[_t50]);
                                                const _i11 = _r15 && _r15.__lexicalTextContent;
                                                if (typeof _i11 !== "string") {
                                                    e(350, _n32.getType());
                                                }
                                                _o16 = _i11;
                                            } else {
                                                _o16 = _n32.getTextContent();
                                            }
                                            T += _o16;
                                            if (_t50 < _f2_1 - 1 && Vo(_n32) && !_n32.isInline()) {
                                                T += v;
                                            }
                                        }
                                        const N = r.__lexicalSlotTextLength || 0;
                                        const b = N > 0 ? _i1_1.slice(N) : _i1_1;
                                        r.__lexicalTextContent = b.slice(0, b.length - C) + T;
                                        return true;
                                    })(t, o, c, _i1, _s8, _f2, a)) {
                                        const _t51 = c.__lexicalTextContent;
                                        if (typeof _t51 !== "string") {
                                            e(353);
                                        }
                                        En = r + _t51;
                                        return void fo(n, c, _u3);
                                    }
                                }
                            }
                            if (a === 0) {
                                let _n33 = t.__first;
                                let _o17 = 0;
                                while(_n33 !== null){
                                    const _t52 = Bn.get(_n33);
                                    if (_t52 === undefined) {
                                        break;
                                    }
                                    const _r16 = jn || Rn.has(_n33) || Pn.has(_n33);
                                    const _i12 = An();
                                    if (_r16) {
                                        ho(_n33, o_element);
                                    } else {
                                        let _o18;
                                        let _r17;
                                        if (Vo(_t52)) {
                                            _r17 = $n.get(_n33);
                                            const _i13 = _r17 && _r17.__lexicalTextContent;
                                            if (typeof _i13 !== "string") {
                                                e(354, _t52.getType());
                                            }
                                            _o18 = _i13;
                                        } else {
                                            _o18 = _t52.getTextContent();
                                        }
                                        En += _o18;
                                        if (_r17 !== undefined) {
                                            In(_r17);
                                        }
                                    }
                                    if (Sr(_t52)) {
                                        if (On === null) {
                                            On = _t52.getFormat();
                                            Mn = _t52.getStyle();
                                            firstTextKey = _t52.__key;
                                        }
                                    } else if (Vo(_t52) && _o17 < n___size - 1 && !_t52.isInline()) {
                                        En += v;
                                    }
                                    Dn(_i12);
                                    _n33 = _t52.__next;
                                    _o17++;
                                }
                                c.__lexicalTextContent = En;
                                c.__lexicalFirstTextKey = firstTextKey;
                                return void (En = r + En);
                            }
                        }
                        if (t___size === 1 && n___size === 1) {
                            const _e45 = t.__first;
                            const _r18 = n.__first;
                            if (_e45 === _r18) {
                                ho(_e45, o_element);
                            } else {
                                const _t53 = yo(_e45);
                                const _n34 = so(_r18, null);
                                try {
                                    if (_t53.parentNode === o_element) {
                                        o_element.replaceChild(_n34, _t53);
                                    } else {
                                        o.insertChild(_n34);
                                    }
                                } catch (error) {
                                    if (typeof error === "object" && error != null) {
                                        const _i14 = `${error.toString()} Parent: ${o_element.tagName}, new child: {tag: ${_n34.tagName} key: ${_r18}}, old child: {tag: ${_t53.tagName}, key: ${_e45}}.`;
                                        throw new Error(_i14);
                                    }
                                    throw error;
                                }
                                Vn(_e45, null);
                            }
                            const _i15 = Bn.get(_r18);
                            if (Sr(_i15) && On === null) {
                                On = _i15.getFormat();
                                Mn = _i15.getStyle();
                                firstTextKey = _i15.__key;
                            }
                        } else {
                            const _r19 = Fl(t, Ln);
                            const _c5 = Fl(n, Bn);
                            if (_r19.length !== t___size) {
                                e(227);
                            }
                            if (_c5.length !== n___size) {
                                e(228);
                            }
                            if (t___size === 0) {
                                if (n___size !== 0) {
                                    lo(_c5, n, 0, n___size - 1, o);
                                }
                            } else if (n___size === 0) {
                                if (t___size !== 0) {
                                    const _t54 = o.after == null && o.before == null && no(n).size === 0 && o.element.__lexicalLineBreak == null;
                                    Yn(_r19, 0, t___size - 1, _t54 ? null : o_element);
                                    if (_t54) {
                                        o_element.textContent = "";
                                    }
                                }
                            } else {
                                ((t, _r19_1, _c5_1, t___size_1, n___size_1, i)=>{
                                    const s = t___size_1 - 1;
                                    const l = n___size_1 - 1;
                                    let c;
                                    let a;
                                    let u = i.getFirstChild();
                                    let f = 0;
                                    let d = 0;
                                    while(f <= s && d <= l){
                                        const _t55 = _r19_1[f];
                                        const _o19 = _c5_1[d];
                                        const _r20 = An();
                                        if (_t55 === _o19) {
                                            u = po(ho(_o19, i.element));
                                            f++;
                                            d++;
                                        } else {
                                            if (a === undefined) {
                                                a = _o(_c5_1, d);
                                            }
                                            if (c === undefined) {
                                                c = _o(_r19_1, f);
                                            } else if (!c.has(_t55)) {
                                                f++;
                                                Dn(_r20);
                                                continue;
                                            }
                                            if (!a.has(_t55)) {
                                                const _e46 = yo(_t55);
                                                if (_e46.parentNode === i.element) {
                                                    u = po(_e46);
                                                }
                                                Vn(_t55, i.element);
                                                f++;
                                                c.delete(_t55);
                                                Dn(_r20);
                                                continue;
                                            }
                                            if (c.has(_o19)) {
                                                const _t56 = Zi(bn, _o19);
                                                if (_t56 !== u) {
                                                    i.withBefore(u ?? i.before).insertChild(_t56);
                                                }
                                                u = po(ho(_o19, i.element));
                                                f++;
                                                d++;
                                            } else {
                                                so(_o19, i.withBefore(u ?? i.before));
                                                d++;
                                            }
                                        }
                                        const _s9 = Bn.get(_o19);
                                        if (_s9 !== null && Sr(_s9)) {
                                            if (On === null) {
                                                On = _s9.getFormat();
                                                Mn = _s9.getStyle();
                                                firstTextKey = _s9.__key;
                                            }
                                        } else if (Vo(_s9) && d <= l && !_s9.isInline()) {
                                            En += v;
                                        }
                                        Dn(_r20);
                                    }
                                    const h = f > s;
                                    const g = d > l;
                                    if (h && !g) {
                                        const _e47 = _c5_1[l + 1];
                                        const _o20 = _e47 === undefined ? null : bn.getElementByKey(_e47);
                                        lo(_c5_1, t, d, l, i.withBefore(_o20 ?? i.before));
                                    } else {
                                        if (g && !h) {
                                            Yn(_r19_1, f, s, i.element);
                                        }
                                    }
                                })(n, _r19, _c5, t___size, n___size, o);
                            }
                        }
                        c.__lexicalTextContent = En;
                        c.__lexicalFirstTextKey = firstTextKey;
                        En = r + En;
                    })(t, n, Vs(n, o, bn));
                    if (!shadowRoot(n)) {
                        r = n;
                        if (!(On == null || On === r.__textFormat || Hn)) {
                            r.setTextFormat(On);
                        }
                        ((t)=>{
                            if (!(Mn == null || Mn === t.__textStyle || Hn)) {
                                t.setTextStyle(Mn);
                            }
                        })(n);
                    }
                })(o, r, s);
                if (!r.isInline()) {
                    if (!root(r)) {
                        uo(0, r, s);
                    }
                    ao(r, s);
                }
                if (_c4 !== "") {
                    const _e48 = s.__lexicalTextContent || "";
                    s.__lexicalTextContent = _c4 + _e48;
                    En = _t37 + _c4 + _e48;
                    s.__lexicalSlotTextLength = _c4.length;
                } else {
                    if (no(r).size > 0 || no(o).size > 0) {
                        s.__lexicalSlotTextLength = 0;
                    }
                }
                if (xn(r)) {
                    const _e49 = r.getTextContent();
                    s.__lexicalTextContent = _e49;
                    En = _t37 + _e49;
                }
            } else {
                const _t57 = s.__lexicalTextContent;
                if (typeof _t57 !== "string") {
                    e(356, o.getType());
                }
                En += _t57;
                In(s);
            }
            if ((jn || r.__dir !== o.__dir || r.__parent !== o.__parent) && (Qn(s, r), root(r) && !jn)) {
                for (const _t58 of r.getChildren()){
                    if (Vo(_t58)) {
                        Qn(Zi(bn, _t58.getKey()), _t58);
                    }
                }
            }
        } else {
            const _e50 = r.getTextContent();
            if (Go(r)) {
                const _e51 = r.decorate(bn, Nn);
                if (_e51 !== null) {
                    go(t, _e51);
                }
                if (i && (no(r).size > 0 || no(o).size > 0)) {
                    io(o, r, s);
                }
            }
            En += _e50;
        }
        if (!Hn && root(r)) {
            const _t59 = r.getLatest();
            if (_t59.__cachedText !== En) {
                const _e52 = _t59.getWritable();
                _e52.__cachedText = En;
                r = _e52;
            }
        }
        Un.$decorateDOM(r, o, s, bn);
        Tn(r);
        return s;
    }
    function go(t, e) {
        let bn__pendingDecorators = bn._pendingDecorators;
        const bn__decorators = bn._decorators;
        if (bn__pendingDecorators === null) {
            if (bn__decorators[t] === e) {
                return;
            }
            bn__pendingDecorators = Ei(bn);
        }
        bn__pendingDecorators[t] = e;
    }
    function po({ nextSibling }) {
        if (nextSibling !== null && nextSibling === bn._blockCursorElement) {
            nextSibling = nextSibling.nextSibling;
        }
        return nextSibling;
    }
    function _o(t, e) {
        const n = new Set();
        for(let _o21 = e; _o21 < t.length; _o21++){
            n.add(t[_o21]);
        }
        return n;
    }
    function mo(e__editorState, _pendingEditorState, n, _dirtyType, _dirtyElements, _dirtyLeaves) {
        En = "";
        On = null;
        Mn = null;
        firstTextKey = null;
        jn = _dirtyType === 2;
        bn = n;
        Nn = n._config;
        Un = n._config.dom || rc;
        kn = n._nodes;
        Fn = bn._listeners.mutation;
        Pn = _dirtyElements;
        Rn = _dirtyLeaves;
        Ln = e__editorState._nodeMap;
        Kn = e__editorState;
        Bn = _pendingEditorState._nodeMap;
        Hn = _pendingEditorState._readOnly;
        $n = qt(n._keyToDOMMap);
        zn = (()=>{
            const t = new Map();
            const e = function e(_e54) {
                for (const _n35 of _e54){
                    const _e53 = Bn.get(_n35);
                    if (_e53 === undefined) {
                        continue;
                    }
                    const _o22 = _e53.__parent;
                    if (_o22 === null) {
                        continue;
                    }
                    let _r21 = t.get(_o22);
                    if (_r21 === undefined) {
                        _r21 = new Set();
                        t.set(_o22, _r21);
                    }
                    _r21.add(_n35);
                }
            };
            e(Pn.keys());
            e(Rn);
            return t;
        })();
        const s = new Map();
        Wn = s;
        ho("root", null);
        bn = undefined;
        kn = undefined;
        Pn = undefined;
        Rn = undefined;
        Ln = undefined;
        Kn = undefined;
        Bn = undefined;
        Nn = undefined;
        $n = undefined;
        zn = undefined;
        Wn = undefined;
        Un = rc;
        return s;
    }
    function yo(t) {
        const n = $n.get(t);
        if (n === undefined) {
            e(75, t);
        }
        return n;
    }
    function xo(t, n, o) {
        Sc();
        const t___key = t.__key;
        const i = t.getParent();
        if (i === null) {
            return void (Ju(t) !== null && e(367, t___key, String(Ju(t))));
        }
        const s = ((t)=>{
            const e = Su();
            if (!Ha(e) || !Vo(t)) {
                return e;
            }
            const { anchor, focus } = e;
            const r = anchor.getNode();
            const i = focus.getNode();
            if (ss(r, t)) {
                anchor.set(t.__key, 0, "element");
            }
            if (ss(i, t)) {
                focus.set(t.__key, 0, "element");
            }
            return e;
        })(t);
        let l = false;
        if (Ha(s) && n) {
            const { anchor, focus } = s;
            if (anchor.key === t___key) {
                Nu(anchor, t, i, t.getPreviousSibling(), t.getNextSibling());
                l = true;
            }
            if (focus.key === t___key) {
                Nu(focus, t, i, t.getPreviousSibling(), t.getNextSibling());
                l = true;
            }
        } else {
            if (Ya(s) && n && t.isSelected()) {
                t.selectPrevious();
            }
        }
        zu(t.getWritable(), n && !l && Ha(s) ? s : null);
        if (!(o || shadowRoot(i) || i.canBeEmpty() || !i.isEmpty())) {
            xo(i, n);
        }
        if (n && s && root(i) && i.isEmpty()) {
            i.selectEnd();
        }
    }
    const SYMBOL_EPHEMERAL = Symbol.for("ephemeral");
    function Co(t) {
        return t[SYMBOL_EPHEMERAL] || false;
    }
    const To = {
        configurable: true,
        enumerable: false,
        value: undefined,
        writable: true
    };
    var _vo5 = (()=>{
        function vo(t) {
            this.__type = this.constructor.getType();
            this.__parent = null;
            this.__prev = null;
            this.__next = null;
            Object.defineProperty(this, "__state", To);
            Object.defineProperty(this, SYMBOL_LEXICALCACHED_TEXT_SIZE, To);
            _i(this, t);
        }
        vo.getType = function getType() {
            const _kl = kl(this);
            const _kl_ownNodeType = _kl.ownNodeType;
            if (_kl_ownNodeType === undefined) {
                e(64, this.name);
            }
            return _kl_ownNodeType;
        };
        vo.clone = function clone(t) {
            e(65, this.name);
        };
        const _proto7 = vo.prototype;
        _proto7.$config = function $config() {
            return {};
        };
        _proto7.config = function config(t, e) {
            const n = e.extends || Pl(this.constructor);
            Object.assign(e, {
                extends: n
            });
            if (typeof t === "string") {
                Object.assign(e, {
                    type: t
                });
            }
            return {
                [t]: e
            };
        };
        _proto7.afterCloneFrom = function afterCloneFrom(t) {
            if (this.__key === t.__key) {
                this.__parent = t.__parent;
                this.__next = t.__next;
                this.__prev = t.__prev;
                this.__state = t.__state;
            } else if (t.__state) {
                this.__state = t.__state.getWritable(this);
            }
        };
        _proto7.resetOnCopyNodeFrom = function resetOnCopyNodeFrom(t) {
            if (this.__state) {
                this.__state = this.__state.getWritable(this).resetOnCopyNode();
            }
        };
        _proto7.getType = function getType() {
            return this.__type;
        };
        _proto7.isInline = function isInline() {
            e(137, this.constructor.name);
        };
        _proto7.isAttached = function isAttached() {
            let __key = this.__key;
            while(__key !== null){
                if (__key === "root") {
                    return true;
                }
                const _e56 = Ti(__key);
                if (_e56 === null) {
                    break;
                }
                __key = _e56.__parent !== null ? _e56.__parent : Ju(_e56);
            }
            return false;
        };
        _proto7.isSelected = function isSelected(t) {
            const _this13 = this;
            const e = t || Su();
            if (e == null) {
                return false;
            }
            const n = e.getNodes().some((t)=>t.__key === _this13.__key);
            if (Sr(this)) {
                return n;
            }
            if (Ha(e) && e.anchor.type === "element" && e.focus.type === "element") {
                if (e.isCollapsed()) {
                    return false;
                }
                const _t60 = this.getParent();
                if (Go(this) && this.isInline() && _t60) {
                    const _n37 = e.isBackward() ? e.focus : e.anchor;
                    if (_t60.is(_n37.getNode()) && _n37.offset === _t60.getChildrenSize() && this.is(_t60.getLastChild())) {
                        return false;
                    }
                }
            }
            return n;
        };
        _proto7.getKey = function getKey() {
            return this.__key;
        };
        _proto7.getIndexWithinParent = function getIndexWithinParent() {
            const t = this.getParent();
            if (t === null) {
                return -1;
            }
            let e = t.getFirstChild();
            let n = 0;
            while(e !== null){
                if (this.is(e)) {
                    return n;
                }
                n++;
                e = e.getNextSibling();
            }
            return -1;
        };
        _proto7.getParent = function getParent() {
            const __parent = this.getLatest().__parent;
            if (__parent === null) {
                return null;
            }
            return Ti(__parent);
        };
        _proto7.getParentOrThrow = function getParentOrThrow() {
            const t = this.getParent();
            if (t === null) {
                e(66, this.__key);
            }
            return t;
        };
        _proto7.getTopLevelElement = function getTopLevelElement() {
            let t = this;
            while(t !== null){
                const _n38 = t.getParent();
                if (shadowRoot(_n38) || Ju(t) !== null) {
                    if (!(Vo(t) || t === this && Go(t))) {
                        e(194);
                    }
                    return t;
                }
                t = _n38;
            }
            return null;
        };
        _proto7.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
            const t = this.getTopLevelElement();
            if (t === null) {
                e(67, this.__key);
            }
            return t;
        };
        _proto7.getParents = function getParents() {
            const t = [];
            let e = this.getParent();
            while(e !== null){
                t.push(e);
                e = e.getParent();
            }
            return t;
        };
        _proto7.getParentKeys = function getParentKeys() {
            const t = [];
            let e = this.getParent();
            while(e !== null){
                t.push(e.__key);
                e = e.getParent();
            }
            return t;
        };
        _proto7.getPreviousSibling = function getPreviousSibling() {
            const __prev = this.getLatest().__prev;
            if (__prev === null) {
                return null;
            }
            return Ti(__prev);
        };
        _proto7.getPreviousSiblings = function getPreviousSiblings() {
            return ju(this.getPreviousSibling(), "previous").reverse();
        };
        _proto7.getNextSibling = function getNextSibling() {
            const __next = this.getLatest().__next;
            if (__next === null) {
                return null;
            }
            return Ti(__next);
        };
        _proto7.getNextSiblings = function getNextSiblings() {
            return ju(this.getNextSibling(), "next");
        };
        _proto7.is = function is(t) {
            return t != null && this.__key === t.__key;
        };
        _proto7.isBefore = function isBefore(t) {
            const n = Vf(this, t);
            return n !== null && (n.type === "descendant" || (n.type === "branch" ? Uf(n) === -1 : (n.type !== "same" && n.type !== "ancestor" && e(279), false)));
        };
        _proto7.isParentOf = function isParentOf(t) {
            return ss(t, this);
        };
        _proto7.getNodesBetween = function getNodesBetween(t) {
            const e = this.isBefore(t);
            const n = [];
            let o = this;
            let r = true;
            let i = 0;
            while(o !== null && ((r || i === 0) && n.push(o), !o.is(t))){
                if (!r && i > 0) {
                    i--;
                }
                const _t61 = r && Vo(o) ? e ? o.getFirstChild() : o.getLastChild() : null;
                if (_t61 !== null) {
                    i++;
                }
                const _n39 = _t61 || (e ? o.getNextSibling() : o.getPreviousSibling());
                r = _n39 !== null;
                o = _n39 || o.getParent();
            }
            if (e) {
                return n;
            }
            return n.reverse();
        };
        _proto7.isDirty = function isDirty() {
            const _dirtyLeaves = vc()._dirtyLeaves;
            return _dirtyLeaves !== null && _dirtyLeaves.has(this.__key);
        };
        _proto7.getLatest = function getLatest() {
            if (Co(this)) {
                return this;
            }
            const t = Ti(this.__key);
            if (t === null) {
                Ce(`Lexical node does not exist in active editor state (key ${this.__key}, type ${this.__type}). The reference was probably kept from another read or update, for example in a closure, event handler or component state, and the node has since been removed or is not part of this editor state. Before using a node reference that may be stale, check node.isAttached() or look the node up again with \$getNodeByKey(node.getKey()), inside the read or update where it is used.`);
            }
            return t;
        };
        _proto7.getWritable = function getWritable() {
            if (Co(this)) {
                return this;
            }
            Sc();
            const t = Tc();
            const e = vc();
            const __key = this.__key;
            const e__cloneNotNeeded = e._cloneNotNeeded;
            const r = e__cloneNotNeeded.get(__key);
            const t__selection = t._selection;
            if (t__selection !== null) {
                t__selection.setCachedNodes(null);
            }
            if (r !== undefined) {
                xi(r);
                return r;
            }
            const t__nodeMap = t._nodeMap;
            const l = t__nodeMap.get(__key);
            if (l === undefined) {
                Ce(`Lexical node does not exist in active editor state (key ${__key}, type ${this.__type}). The reference was probably kept from another read or update, for example in a closure, event handler or component state, and the node has since been removed or is not part of this editor state. Before using a node reference that may be stale, check node.isAttached() or look the node up again with \$getNodeByKey(node.getKey()), inside the read or update where it is used.`);
            }
            const c = Qs(l);
            e__cloneNotNeeded.set(__key, c);
            t__nodeMap.set(__key, c);
            xi(c);
            return c;
        };
        _proto7.getTextContent = function getTextContent() {
            return af(this);
        };
        _proto7.getTextContentSize = function getTextContentSize() {
            return this.getTextContent().length;
        };
        _proto7.createDOM = function createDOM(t, n) {
            e(70);
        };
        _proto7.updateDOM = function updateDOM(t, n, o) {
            e(71);
        };
        _proto7.getDOMSlot = function getDOMSlot(t) {
            return new _le2(t);
        };
        _proto7.exportDOM = function exportDOM(t) {
            return {
                element: Hs(t).$createDOM(this, t)
            };
        };
        _proto7.exportJSON = function exportJSON(t = false) {
            const e = ((t, e)=>{
                const n = al(cl(t.constructor));
                const { generated, isCompactDefault } = n;
                const i = generated === null ? undefined : e ? generated.exportCompactJSON : generated.exportJSON;
                if (i === undefined) {
                    return ((t, e, n)=>{
                        const o = n ? {
                            type: t.__type
                        } : {};
                        if (Vo(t)) {
                            o.children = [];
                        }
                        ((t, e, n, o)=>{
                            for (const _i16 of e){
                                if (o && _i16.derived) {
                                    continue;
                                }
                                let _s0;
                                if (_i16.kind === "ownField") {
                                    const _e57 = Cl(t)[_i16.field];
                                    _s0 = _i16.getterTable === undefined ? _e57 : je(_i16.getterTable, _e57) ? _i16.getterTable[_e57] : undefined;
                                } else {
                                    _s0 = _i16.getter.call(t);
                                }
                                if (_i16.kind === "ownField" && _i16.when !== undefined) {
                                    if (!(!Tl(_i16, _s0) && _i16.when.call(t))) {
                                        _s0 = undefined;
                                    }
                                }
                                if (!(o && Tl(_i16, _s0))) {
                                    n[_i16.key] = _s0;
                                }
                            }
                        })(t, e, o, n);
                        if (!n) {
                            o.type = t.__type;
                            o.version = 1;
                        }
                        return o;
                    })(t, n.getters, e);
                }
                if (e) {
                    return i(t, isCompactDefault);
                }
                return i(t);
            })(this, t);
            const n = this.__state ? this.__state.toJSON() : undefined;
            if (n !== undefined) {
                Object.assign(e, n);
            }
            return e;
        };
        vo.importJSON = function importJSON(t) {
            e(18, this.name);
        };
        _proto7.updateFromJSON = function updateFromJSON(t) {
            return bl(hn(this, t), t);
        };
        vo.transform = function transform() {
            return null;
        };
        _proto7.remove = function remove(t) {
            xo(this, true, t);
        };
        _proto7.replace = function replace(t, n) {
            Sc();
            let o = Su();
            if (o !== null) {
                o = o.clone();
            }
            ps(this, t);
            const r = this.getLatest();
            const __key = this.__key;
            const s = Gu(r);
            if (s !== null) {
                e(400, __key, r.getType(), s.getKey(), s.getType());
            }
            const t___key = t.__key;
            const c = t.getWritable();
            const a = this.getParentOrThrow().getWritable();
            const a___size = a.__size;
            const f = c.getParent();
            zu(c, Ha(o) ? o : null);
            const d = r.getPreviousSibling();
            const h = r.getNextSibling();
            xo(r, false, true);
            Bu(a, c, d && d.getWritable(), h && h.getWritable());
            a.__size = f !== null && f.is(a) ? a___size - 1 : a___size;
            let g = 0;
            if (n) {
                if (!(Vo(this) && Vo(c))) {
                    e(139);
                }
                g = c.getChildrenSize();
                c.splice(g, 0, this.getChildren());
            }
            if (Ha(o)) {
                Ai(o);
                for (const _t62 of [
                    o.anchor,
                    o.focus
                ]){
                    if (_t62.key === __key) {
                        if (n && _t62.type === "element") {
                            _t62.set(c.__key, g + _t62.offset, "element");
                        } else {
                            $a(_t62, c);
                        }
                    }
                }
            }
            if (Ci() === __key) {
                Si(t___key);
            }
            return c;
        };
        _proto7.insertAfter = function insertAfter(t, e = true) {
            return Wu(this, "next", t, e);
        };
        _proto7.insertBefore = function insertBefore(t, e = true) {
            return Wu(this, "previous", t, e);
        };
        _proto7.isParentRequired = function isParentRequired() {
            return false;
        };
        _proto7.createParentElementNode = function createParentElementNode() {
            return Hr();
        };
        _proto7.selectStart = function selectStart() {
            return this.selectPrevious();
        };
        _proto7.selectEnd = function selectEnd() {
            return this.selectNext(0, 0);
        };
        _proto7.selectPrevious = function selectPrevious(t, e) {
            return Uu(Ef(this, "previous"), t, e);
        };
        _proto7.selectNext = function selectNext(t, e) {
            return Uu(Ef(this, "next"), t, e);
        };
        _proto7.markDirty = function markDirty() {
            this.getWritable();
        };
        _proto7.reconcileObservedMutation = function reconcileObservedMutation(t, e) {
            this.markDirty();
        };
        return vo;
    })();
    function No(t) {
        return t instanceof _vo5;
    }
    function bo(t, e) {
        const { __mode, __format, __style } = t;
        const { __mode: __mode_1, __format: __format_1, __style: __style_1 } = e;
        const t___state = t.__state;
        const e___state = e.__state;
        return (__mode === null || __mode === __mode_1) && (__format === null || __format === __format_1) && (__style === null || __style === __style_1) && (t.__state === null || t___state === e___state || ((t___state_1, e___state_1)=>{
            if (t___state_1 === e___state_1) {
                return true;
            }
            const n = new Set();
            return !(t___state_1 && _n(n, t___state_1, e___state_1) || e___state_1 && _n(n, e___state_1, t___state_1) || t___state_1 && mn(n, t___state_1, e___state_1) || e___state_1 && mn(n, e___state_1, t___state_1));
        })(t___state, e___state));
    }
    function ko(t, e) {
        const n = t.mergeWithSibling(e);
        const _normalizedNodes = vc()._normalizedNodes;
        _normalizedNodes.add(t.__key);
        _normalizedNodes.add(e.__key);
        return n;
    }
    function Eo(t) {
        let e;
        let n;
        let o = t;
        if (o.__text !== "" || !o.isSimpleText() || o.isUnmergeable()) {
            while((e = o.getPreviousSibling()) !== null && Sr(e) && e.isSimpleText() && !e.isUnmergeable()){
                if (e.__text !== "") {
                    if (bo(e, o)) {
                        o = ko(e, o);
                        break;
                    }
                    break;
                }
                e.remove();
            }
            while((n = o.getNextSibling()) !== null && Sr(n) && n.isSimpleText() && !n.isUnmergeable()){
                if (n.__text !== "") {
                    if (bo(o, n)) {
                        o = ko(o, n);
                        break;
                    }
                    break;
                }
                n.remove();
            }
        } else {
            o.remove();
        }
    }
    function Oo(t) {
        Mo(t.anchor);
        Mo(t.focus);
        return t;
    }
    function Mo(t) {
        while(t.type === "element"){
            const _e58 = t.getNode();
            const _n40 = t.offset;
            let _o23;
            let _r23;
            if (_n40 === _e58.getChildrenSize()) {
                _o23 = _e58.getChildAtIndex(_n40 - 1);
                _r23 = true;
            } else {
                _o23 = _e58.getChildAtIndex(_n40);
                _r23 = false;
            }
            if (Sr(_o23)) {
                t.set(_o23.__key, _r23 ? _o23.getTextContentSize() : 0, "text", true);
                break;
            }
            if (!Vo(_o23)) {
                break;
            }
            t.set(_o23.__key, _r23 ? _o23.getChildrenSize() : 0, "element", true);
        }
    }
    const wo = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
    function Ao(t, e) {
        if (typeof t === "number") {
            if (Number.isFinite(t)) {
                return t;
            }
            return e;
        }
        if (typeof t !== "string" || !wo.test(t)) {
            return e;
        }
        const n = Number(t);
        if (Number.isFinite(n)) {
            return n;
        }
        return e;
    }
    function Do(indent, e, n, Infinity, r) {
        const i = Ao(indent, e);
        if (i >= n && i <= Infinity && Number.isInteger(i)) {
            return i;
        }
        return e;
    }
    const Io = function Io(t) {
        const e = be(t, "format");
        const n = ke(t, "format");
        const o = Oe(t, "format");
        return {
            exportJSON: function exportJSON(t) {
                const { __textFormat, __textStyle } = t;
                const r = (__textFormat !== 0 || __textStyle !== "") && t.shouldSerializeTextStyles();
                return {
                    children: [],
                    direction: t.__dir,
                    format: e[t.__format],
                    indent: t.__indent,
                    textFormat: __textFormat !== 0 && r ? __textFormat : undefined,
                    textStyle: __textStyle !== "" && r ? __textStyle : undefined,
                    type: t.__type,
                    version: 1
                };
            },
            exportCompactJSON: function exportCompactJSON(t) {
                const { __textFormat, __textStyle } = t;
                const r = (__textFormat !== 0 || __textStyle !== "") && t.shouldSerializeTextStyles();
                const i = {
                    type: t.__type,
                    children: []
                };
                const t___dir = t.__dir;
                if (t___dir != null) {
                    i.direction = t___dir;
                }
                const l = e[t.__format];
                if (l !== undefined && l !== "") {
                    i.format = l;
                }
                const t___indent = t.__indent;
                if (t___indent !== undefined && t___indent !== 0) {
                    i.indent = t___indent;
                }
                if (__textFormat !== undefined && __textFormat !== 0 && r) {
                    i.textFormat = __textFormat;
                }
                if (__textStyle !== undefined && __textStyle !== "" && r) {
                    i.textStyle = __textStyle;
                }
                return i;
            },
            updateFromJSON: function updateFromJSON(t, e) {
                const e_direction = e.direction;
                t.__dir = e_direction === null || e_direction === "ltr" || e_direction === "rtl" ? e_direction : null;
                const e_format = e.format;
                t.__format = typeof e_format === "string" && e_format in n ? n[e_format] : o;
                t.__indent = Do(e.indent, 0, 0, Infinity);
                t.__textFormat = Ao(e.textFormat, 0);
                const e_textStyle = e.textStyle;
                t.__textStyle = typeof e_textStyle === "string" ? e_textStyle : "";
                return t;
            }
        };
    };
    function afterCloneFrom(t, e) {
        t.__detail = e.__detail;
        t.__format = e.__format;
        t.__mode = e.__mode;
        t.__style = e.__style;
        t.__text = e.__text;
    }
    const Po = function Po(t) {
        const e = be(t, "mode");
        const n = Ee(t, "detail", 0);
        const o = Ee(t, "format", 0);
        const r = ke(t, "mode");
        const i = Oe(t, "mode");
        return {
            exportJSON: function exportJSON(t) {
                return {
                    detail: t.__detail,
                    format: t.__format,
                    mode: e[t.__mode],
                    style: t.__style,
                    text: t.__text,
                    type: t.__type,
                    version: 1
                };
            },
            exportCompactJSON: function exportCompactJSON(t) {
                const n = {
                    type: t.__type
                };
                const t___detail = t.__detail;
                if (t___detail !== undefined && t___detail !== 0) {
                    n.detail = t___detail;
                }
                const t___format = t.__format;
                if (t___format !== undefined && t___format !== 0) {
                    n.format = t___format;
                }
                const i = e[t.__mode];
                if (i !== undefined && i !== "normal") {
                    n.mode = i;
                }
                const t___style = t.__style;
                if (t___style !== undefined && t___style !== "") {
                    n.style = t___style;
                }
                const t___text = t.__text;
                if (t___text !== undefined && t___text !== "") {
                    n.text = t___text;
                }
                return n;
            },
            updateFromJSON: function updateFromJSON(t, e) {
                const e_detail = e.detail;
                t.__detail = typeof e_detail === "string" && e_detail in n ? n[e_detail] : Ao(e_detail, 0);
                const e_format = e.format;
                t.__format = typeof e_format === "string" && e_format in o ? o[e_format] : Ao(e_format, 0);
                const e_mode = e.mode;
                t.__mode = typeof e_mode === "string" && e_mode in r ? r[e_mode] : i;
                const e_style = e.style;
                t.__style = typeof e_style === "string" ? e_style : "";
                const e_text = e.text;
                t.__text = typeof e_text === "string" ? e_text : "";
                return t;
            },
            afterCloneFrom
        };
    };
    const Ro = function Ro(t) {
        const e = be(t, "format");
        const n = ke(t, "format");
        const o = Oe(t, "format");
        return {
            exportJSON: function exportJSON(t) {
                const { __textFormat, __textStyle } = t;
                const r = (__textFormat !== 0 || __textStyle !== "") && t.shouldSerializeTextStyles();
                return {
                    children: [],
                    direction: t.__dir,
                    format: e[t.__format],
                    indent: t.__indent,
                    textFormat: __textFormat !== 0 && r ? __textFormat : undefined,
                    textStyle: __textStyle !== "" && r ? __textStyle : undefined,
                    type: t.__type,
                    version: 1
                };
            },
            exportCompactJSON: function exportCompactJSON(t) {
                const { __textFormat, __textStyle } = t;
                const r = (__textFormat !== 0 || __textStyle !== "") && t.shouldSerializeTextStyles();
                const i = {
                    type: t.__type,
                    children: []
                };
                const t___dir = t.__dir;
                if (t___dir != null) {
                    i.direction = t___dir;
                }
                const l = e[t.__format];
                if (l !== undefined && l !== "") {
                    i.format = l;
                }
                const t___indent = t.__indent;
                if (t___indent !== undefined && t___indent !== 0) {
                    i.indent = t___indent;
                }
                if (__textFormat !== undefined && __textFormat !== 0 && r) {
                    i.textFormat = __textFormat;
                }
                if (__textStyle !== undefined && __textStyle !== "" && r) {
                    i.textStyle = __textStyle;
                }
                return i;
            },
            updateFromJSON: function updateFromJSON(t, e) {
                const e_direction = e.direction;
                t.__dir = e_direction === null || e_direction === "ltr" || e_direction === "rtl" ? e_direction : null;
                const e_format = e.format;
                t.__format = typeof e_format === "string" && e_format in n ? n[e_format] : o;
                t.__indent = Do(e.indent, 0, 0, Infinity);
                t.__textFormat = Ao(e.textFormat, 0);
                const e_textStyle = e.textStyle;
                t.__textStyle = typeof e_textStyle === "string" ? e_textStyle : "";
                return t;
            }
        };
    };
    const Lo = function Lo() {
        return {
            exportJSON: function exportJSON(t) {
                return {
                    type: t.__type,
                    version: 1
                };
            },
            exportCompactJSON: function exportCompactJSON(t) {
                return {
                    type: t.__type
                };
            }
        };
    };
    const Ko = function Ko(t) {
        const e = be(t, "mode");
        const n = Ee(t, "format", 0);
        return {
            exportJSON: function exportJSON(t) {
                return {
                    detail: t.__detail,
                    mode: e[t.__mode],
                    text: t.__text,
                    format: t.__format,
                    style: t.__style,
                    type: t.__type,
                    version: 1
                };
            },
            exportCompactJSON: function exportCompactJSON(t) {
                const e = {
                    type: t.__type
                };
                const t___format = t.__format;
                if (t___format !== undefined && t___format !== 0) {
                    e.format = t___format;
                }
                const t___style = t.__style;
                if (t___style !== undefined && t___style !== "") {
                    e.style = t___style;
                }
                return e;
            },
            updateFromJSON: function updateFromJSON(t, e) {
                const e_format = e.format;
                t.__format = typeof e_format === "string" && e_format in n ? n[e_format] : Ao(e_format, 0);
                const e_style = e.style;
                t.__style = typeof e_style === "string" ? e_style : "";
                return t;
            }
        };
    };
    function Bo() {
        return babelHelpers.extends({}, F, {
            0: ""
        });
    }
    function $o() {
        return babelHelpers.extends({}, D, {
            "": 0
        });
    }
    const getterTable = Bo();
    const setterTable = $o();
    const Uo = Qe()({
        direction: tn(qe([
            null,
            "ltr",
            "rtl"
        ]), {
            field: "__dir"
        }),
        format: tn(qe([
            "",
            "left",
            "start",
            "center",
            "right",
            "end",
            "justify"
        ]), {
            field: "__format",
            getter: "getFormatType",
            getterTable,
            setter: "setFormat",
            setterTable
        }),
        indent: tn(Ge(0, {
            integer: true,
            min: 0
        }), {
            field: "__indent"
        }),
        textFormat: en(Ge(), {
            getter: {
                field: "__textFormat",
                method: "getSerializedTextFormat",
                when: "shouldSerializeTextStyles"
            },
            setter: {
                field: "__textFormat"
            }
        }),
        textStyle: en(Ye(), {
            getter: {
                field: "__textStyle",
                method: "getSerializedTextStyle",
                when: "shouldSerializeTextStyles"
            },
            setter: {
                field: "__textStyle"
            }
        })
    });
    function $transform(t) {
        if (shadowRoot(t)) {
            let _e59 = null;
            for (const _n41 of t.getChildren()){
                _e59 = _n41.isInline() ? (_e59 || _n41.replace(_n41.createParentElementNode())).append(_n41) : null;
            }
        }
    }
    var _Ho4 = ((_vo)=>{
        function Ho(t) {
            let _this;
            _this = _vo.call(this, t) || this;
            _this.__first = null;
            _this.__last = null;
            _this.__size = 0;
            _this.__format = 0;
            _this.__style = "";
            _this.__indent = 0;
            _this.__dir = null;
            _this.__textFormat = 0;
            _this.__textStyle = "";
            _this.__slotHost = null;
            _this.__slots = null;
            return _this;
        }
        babelHelpers.inheritsLoose(Ho, _vo);
        const _proto8 = Ho.prototype;
        _proto8.$config = function $config() {
            return this.config(Symbol.for("ElementNode"), {
                $transform,
                extends: _vo5,
                generated: Io,
                json: Uo
            });
        };
        _proto8.afterCloneFrom = function afterCloneFrom(t) {
            _vo.prototype.afterCloneFrom.call(this, t);
            if (this.__key === t.__key) {
                this.__first = t.__first;
                this.__last = t.__last;
                this.__size = t.__size;
                this.__slotHost = t.__slotHost;
                if (this.__slotHost !== null && this.__parent !== null) {
                    e(384, this.__key, String(this.__slotHost), String(this.__parent));
                }
                this.__slots = t.__slots;
            }
            this.__style = t.__style;
            ((t, e)=>{
                t.__dir = e.__dir;
                t.__format = e.__format;
                t.__indent = e.__indent;
                t.__textFormat = e.__textFormat;
                t.__textStyle = e.__textStyle;
            })(this, t);
        };
        _proto8.getFormat = function getFormat() {
            return this.getLatest().__format;
        };
        _proto8.getFormatType = function getFormatType() {
            const t = this.getFormat();
            return F[t] || "";
        };
        _proto8.getStyle = function getStyle() {
            return this.getLatest().__style;
        };
        _proto8.getIndent = function getIndent() {
            return this.getLatest().__indent;
        };
        _proto8.getChildren = function getChildren() {
            return ju(this.getFirstChild(), "next");
        };
        _proto8.getChildrenKeys = function getChildrenKeys() {
            const t = [];
            let e = this.getFirstChild();
            while(e !== null){
                t.push(e.__key);
                e = e.getNextSibling();
            }
            return t;
        };
        _proto8.getChildrenSize = function getChildrenSize() {
            return this.getLatest().__size;
        };
        _proto8.isEmpty = function isEmpty() {
            return this.getChildrenSize() === 0 && tf(this).length === 0;
        };
        _proto8.isDirty = function isDirty() {
            const _dirtyElements = vc()._dirtyElements;
            return _dirtyElements !== null && _dirtyElements.has(this.__key);
        };
        _proto8.isLastChild = function isLastChild() {
            const t = this.getLatest();
            const e = this.getParentOrThrow().getLastChild();
            return e !== null && e.is(t);
        };
        _proto8.getAllTextNodes = function getAllTextNodes() {
            const t = [];
            for (const _e60 of tf(this)){
                const _n42 = ef(this, _e60);
                if (Vo(_n42)) {
                    for (const _e61 of _n42.getAllTextNodes()){
                        t.push(_e61);
                    }
                }
            }
            let e = this.getFirstChild();
            while(e !== null){
                if (Sr(e)) {
                    t.push(e);
                }
                if (Vo(e)) {
                    for (const _n43 of e.getAllTextNodes()){
                        t.push(_n43);
                    }
                }
                e = e.getNextSibling();
            }
            return t;
        };
        _proto8.getFirstDescendant = function getFirstDescendant() {
            let t = this.getFirstChild();
            while(Vo(t)){
                const _e62 = t.getFirstChild();
                if (_e62 === null) {
                    break;
                }
                t = _e62;
            }
            return t;
        };
        _proto8.getLastDescendant = function getLastDescendant() {
            let t = this.getLastChild();
            while(Vo(t)){
                const _e63 = t.getLastChild();
                if (_e63 === null) {
                    break;
                }
                t = _e63;
            }
            return t;
        };
        _proto8.getDescendantByIndex = function getDescendantByIndex(t) {
            const e = t >= this.getChildrenSize();
            const n = e ? this.getLastChild() : this.getChildAtIndex(t);
            return Vo(n) && (e ? n.getLastDescendant() : n.getFirstDescendant()) || n;
        };
        _proto8.getFirstChild = function getFirstChild() {
            const __first = this.getLatest().__first;
            if (__first === null) {
                return null;
            }
            return Ti(__first);
        };
        _proto8.getFirstChildOrThrow = function getFirstChildOrThrow() {
            const t = this.getFirstChild();
            if (t === null) {
                e(45, this.__key);
            }
            return t;
        };
        _proto8.getLastChild = function getLastChild() {
            const __last = this.getLatest().__last;
            if (__last === null) {
                return null;
            }
            return Ti(__last);
        };
        _proto8.getLastChildOrThrow = function getLastChildOrThrow() {
            const t = this.getLastChild();
            if (t === null) {
                e(96, this.__key);
            }
            return t;
        };
        _proto8.getChildAtIndex = function getChildAtIndex(t) {
            const e = this.getChildrenSize();
            let n;
            let o;
            if (t < e / 2) {
                n = this.getFirstChild();
                for(o = 0; n !== null && o <= t;){
                    if (o === t) {
                        return n;
                    }
                    n = n.getNextSibling();
                    o++;
                }
                return null;
            }
            n = this.getLastChild();
            for(o = e - 1; n !== null && o >= t;){
                if (o === t) {
                    return n;
                }
                n = n.getPreviousSibling();
                o--;
            }
            return null;
        };
        _proto8.getTextContent = function getTextContent() {
            let t = af(this);
            const e = this.getChildren();
            const e_length = e.length;
            for(let _o24 = 0; _o24 < e_length; _o24++){
                const _r24 = e[_o24];
                t += _r24.getTextContent();
                if (Vo(_r24) && _o24 !== e_length - 1 && !_r24.isInline()) {
                    t += v;
                }
            }
            return t;
        };
        _proto8.getTextContentSize = function getTextContentSize() {
            let t = ((t)=>{
                let e = 0;
                for (const _n44 of Zu(t).values()){
                    const _t63 = Ti(_n44);
                    if (_t63 !== null) {
                        e += _t63.getTextContentSize();
                    }
                }
                return e;
            })(this);
            const e = this.getChildren();
            const e_length = e.length;
            for(let _o25 = 0; _o25 < e_length; _o25++){
                const _r25 = e[_o25];
                t += _r25.getTextContentSize();
                if (Vo(_r25) && _o25 !== e_length - 1 && !_r25.isInline()) {
                    t += 2;
                }
            }
            return t;
        };
        _proto8.getDirection = function getDirection() {
            return this.getLatest().__dir;
        };
        _proto8.getTextFormat = function getTextFormat() {
            return this.getLatest().__textFormat;
        };
        _proto8.hasFormat = function hasFormat(t) {
            if (t !== "") {
                const _e64 = D[t];
                return (this.getFormat() & _e64) !== 0;
            }
            return false;
        };
        _proto8.hasTextFormat = function hasTextFormat(t) {
            const e = w[t];
            return (this.getTextFormat() & e) !== 0;
        };
        _proto8.getFormatFlags = function getFormatFlags(t, e) {
            return pi(this.getLatest().__textFormat, t, e);
        };
        _proto8.getTextStyle = function getTextStyle() {
            return this.getLatest().__textStyle;
        };
        _proto8.select = function select(t, e) {
            Sc();
            const n = Su();
            let o = t;
            let r = e;
            const i = this.getChildrenSize();
            if (!this.canBeEmpty()) {
                if (t === 0 && e === 0) {
                    const _t64 = this.getFirstChild();
                    if (Sr(_t64) || Vo(_t64)) {
                        return _t64.select(0, 0);
                    }
                } else if (!(t !== undefined && t !== i || e !== undefined && e !== i)) {
                    const _t65 = this.getLastChild();
                    if (Sr(_t65) || Vo(_t65)) {
                        return _t65.select();
                    }
                }
            }
            if (o === undefined) {
                o = i;
            }
            if (r === undefined) {
                r = i;
            }
            const __key = this.__key;
            if (Ha(n)) {
                n.anchor.set(__key, o, "element");
                n.focus.set(__key, r, "element");
                n.dirty = true;
                return n;
            }
            return hu(__key, o, __key, r, "element", "element");
        };
        _proto8.selectStart = function selectStart() {
            const t = this.getFirstDescendant();
            if (t) {
                return t.selectStart();
            }
            return this.select();
        };
        _proto8.selectEnd = function selectEnd() {
            const t = this.getLastDescendant();
            if (t) {
                return t.selectEnd();
            }
            return this.select();
        };
        _proto8.clear = function clear() {
            const t = this.getWritable();
            this.getChildren().forEach((t)=>t.remove());
            return t;
        };
        _proto8.append = function append(...t) {
            return this.splice(this.getChildrenSize(), 0, t);
        };
        _proto8.setDirection = function setDirection(t) {
            const e = this.getWritable();
            e.__dir = t;
            return e;
        };
        _proto8.setFormat = function setFormat(t) {
            const e = this.getWritable();
            e.__format = t !== "" && D[t] || 0;
            return e;
        };
        _proto8.setStyle = function setStyle(t) {
            const e = this.getWritable();
            e.__style = t || "";
            return e;
        };
        _proto8.setTextFormat = function setTextFormat(t) {
            const e = this.getWritable();
            e.__textFormat = t;
            return e;
        };
        _proto8.setTextStyle = function setTextStyle(t) {
            const e = this.getWritable();
            e.__textStyle = t;
            return e;
        };
        _proto8.setIndent = function setIndent(t) {
            const e = this.getWritable();
            e.__indent = t;
            return e;
        };
        _proto8.splice = function splice(t, n, o) {
            if (Co(this)) {
                e(324, this.__key, this.__type);
            }
            const r = this.getChildrenSize();
            const i = this.getWritable();
            if (!(t + n <= r)) {
                e(226, String(t), String(n), String(r));
            }
            for (const _t66 of o);
            const i___key = i.__key;
            const l = [];
            let c = [];
            let a = this.getChildAtIndex(t + n);
            let u = null;
            let f = r - n + o.length;
            if (t !== 0) {
                if (t === r) {
                    u = this.getLastChild();
                } else {
                    const _e65 = this.getChildAtIndex(t);
                    if (_e65 !== null) {
                        u = _e65.getPreviousSibling();
                    }
                }
            }
            if (n > 0) {
                c = ((t, n, o, r)=>{
                    const i = [];
                    let s = n;
                    for(let _t67 = 0; _t67 < o; _t67++){
                        if (s === null) {
                            e(100);
                        }
                        const _t68 = s.getNextSibling();
                        i.push(s.getWritable());
                        s = _t68;
                    }
                    Lu(t, r && r.getWritable(), s && s.getWritable());
                    t.__size -= i.length;
                    return i.map((t)=>{
                        Ku(t);
                        t.__prev = null;
                        t.__next = null;
                        t.__parent = null;
                        return t.__key;
                    });
                })(i, u === null ? this.getFirstChild() : u.getNextSibling(), n, u);
            }
            let d = o.length > 0 && u !== null ? u.getWritable() : null;
            for (const _t69 of o){
                if (d !== null && _t69.is(d)) {
                    u = d.getPreviousSibling();
                    d = u && u.getWritable();
                }
                if (a !== null && _t69.is(a)) {
                    a = a.getNextSibling();
                }
                const _n45 = _t69.getWritable();
                if (_n45.__parent === i___key) {
                    f--;
                }
                $u(_n45);
                const _o26 = _t69.__key;
                Bu(i, _n45, d, a && a.getWritable());
                if (_t69.__key === i___key) {
                    e(76);
                }
                l.push(_o26);
                d = _n45;
            }
            i.__size = f;
            if (c.length) {
                const _t70 = Su();
                if (Ha(_t70)) {
                    const _e66 = new Set(c);
                    const _n46 = new Set(l);
                    for (const _o27 of [
                        _t70.anchor,
                        _t70.focus
                    ]){
                        if (Yo(_o27, _e66, _n46)) {
                            Nu(_o27, _o27.getNode(), this, u, a);
                        }
                    }
                    if (!(f !== 0 || this.canBeEmpty() || shadowRoot(this))) {
                        this.remove();
                    }
                }
            }
            return i;
        };
        _proto8.getDOMSlot = function getDOMSlot(t) {
            return new _ae(t);
        };
        _proto8.exportDOM = function exportDOM(t) {
            const _vo$prototype$exportD = _vo.prototype.exportDOM.call(this, t);
            const _vo$prototype$exportD_element = _vo$prototype$exportD.element;
            if (Rs(_vo$prototype$exportD_element)) {
                const _t71 = this.getIndent();
                if (_t71 > 0) {
                    _vo$prototype$exportD_element.style.paddingInlineStart = `${40 * _t71}px`;
                    _vo$prototype$exportD_element.setAttribute("data-lexical-indent", String(_t71));
                }
                const _n47 = this.getDirection();
                if (_n47) {
                    _vo$prototype$exportD_element.dir = _n47;
                }
            }
            return {
                element: _vo$prototype$exportD_element
            };
        };
        _proto8.shouldSerializeTextStyles = function shouldSerializeTextStyles() {
            if (shadowRoot(this)) {
                return false;
            }
            for(let _t72 = this.getFirstChild(); _t72 !== null; _t72 = _t72.getNextSibling()){
                if (Sr(_t72)) {
                    return false;
                }
            }
            return true;
        };
        _proto8.getSerializedTextFormat = function getSerializedTextFormat() {
            const t = this.getTextFormat();
            if (t !== 0 && this.shouldSerializeTextStyles()) {
                return t;
            }
        };
        _proto8.getSerializedTextStyle = function getSerializedTextStyle() {
            const t = this.getTextStyle();
            if (t !== "" && this.shouldSerializeTextStyles()) {
                return t;
            }
        };
        _proto8.insertNewAfter = function insertNewAfter(t, e) {
            return null;
        };
        _proto8.canIndent = function canIndent() {
            return true;
        };
        _proto8.collapseAtStart = function collapseAtStart(t) {
            return false;
        };
        _proto8.excludeFromCopy = function excludeFromCopy(t) {
            return false;
        };
        _proto8.canReplaceWith = function canReplaceWith(t) {
            return true;
        };
        _proto8.canInsertAfter = function canInsertAfter(t) {
            return true;
        };
        _proto8.canBeEmpty = function canBeEmpty() {
            return true;
        };
        _proto8.canInsertTextBefore = function canInsertTextBefore() {
            return true;
        };
        _proto8.canInsertTextAfter = function canInsertTextAfter() {
            return true;
        };
        _proto8.isInline = function isInline() {
            return false;
        };
        _proto8.isShadowRoot = function isShadowRoot() {
            return false;
        };
        _proto8.canMergeWith = function canMergeWith(t) {
            return false;
        };
        _proto8.extractWithChild = function extractWithChild(t, e, n) {
            return false;
        };
        _proto8.canMergeWhenEmpty = function canMergeWhenEmpty() {
            return false;
        };
        _proto8.reconcileObservedMutation = function reconcileObservedMutation(t, e) {
            const _this14 = this;
            e.read("latest", function() {
                let n = Vs(_this14, t, e);
                const n_element = n.element;
                if (n.after && n.after.parentNode !== n_element) {
                    n = n.withAfter(null);
                }
                if (n.before && n.before.parentNode !== n_element) {
                    n = n.withBefore(null);
                }
                const r = n.getManagedLineBreak();
                if (r) {
                    n.insertManagedLineBreak(r.nodeName === "IMG");
                }
                let i = n.getFirstChild();
                for (const _t73 of _this14.getChildrenKeys()){
                    const _r26 = e.getElementByKey(_t73);
                    if (!_r26) {
                        continue;
                    }
                    let _s1;
                    let _l7 = i;
                    while(_l7 && !(_s1 = bi(_l7, e)) && ol(_l7)){
                        _l7 = _l7.nextSibling;
                    }
                    if (_l7 !== _r26) {
                        n_element.insertBefore(_r26, _s1 ? _l7 : i || n.getInsertionAnchor());
                    }
                    i = _r26.nextSibling;
                }
                ao(_this14, t, n);
            });
        };
        return Ho;
    })(_vo5);
    function Vo(t) {
        return t instanceof _Ho4;
    }
    function Yo(t, e, n) {
        let o = t.getNode();
        while(o){
            const _t74 = o.__key;
            if (e.has(_t74) && !n.has(_t74)) {
                return true;
            }
            o = o.getParent();
        }
        return false;
    }
    var _Jo = ((_vo2)=>{
        function Jo(t) {
            let _this2;
            _this2 = _vo2.call(this, t) || this;
            _this2.__slotHost = null;
            _this2.__slots = null;
            return _this2;
        }
        babelHelpers.inheritsLoose(Jo, _vo2);
        const _proto9 = Jo.prototype;
        _proto9.afterCloneFrom = function afterCloneFrom(t) {
            _vo2.prototype.afterCloneFrom.call(this, t);
            if (this.__key === t.__key) {
                this.__slotHost = t.__slotHost;
                if (this.__slotHost !== null && this.__parent !== null) {
                    e(383, this.__key, String(this.__slotHost), String(this.__parent));
                }
                this.__slots = t.__slots;
            }
        };
        _proto9.decorate = function decorate(t, e) {
            return null;
        };
        _proto9.isIsolated = function isIsolated() {
            return false;
        };
        _proto9.isInline = function isInline() {
            return true;
        };
        _proto9.isKeyboardSelectable = function isKeyboardSelectable() {
            return true;
        };
        return Jo;
    })(_vo5);
    function Go(t) {
        return t instanceof _Jo;
    }
    function qo(t) {
        const __cachedText = t.getLatest().__cachedText;
        if (__cachedText === null || !xc() && vc()._dirtyType !== 0) {
            return null;
        }
        return __cachedText;
    }
    var _Xo = ((_Ho)=>{
        function Xo() {
            let _this3;
            _this3 = _Ho.call(this, "root") || this;
            _this3.__cachedText = null;
            return _this3;
        }
        babelHelpers.inheritsLoose(Xo, _Ho);
        const _proto0 = Xo.prototype;
        _proto0.$config = function $config() {
            return this.config("root", {
                extends: _Ho4
            });
        };
        _proto0.getTopLevelElementOrThrow = function getTopLevelElementOrThrow() {
            e(51);
        };
        _proto0.getTextContent = function getTextContent() {
            const t = qo(this);
            if (t !== null) {
                return t;
            }
            return _Ho.prototype.getTextContent.call(this);
        };
        _proto0.getTextContentSize = function getTextContentSize() {
            const t = qo(this);
            if (t !== null) {
                return t.length;
            }
            return _Ho.prototype.getTextContentSize.call(this);
        };
        _proto0.remove = function remove() {
            e(52);
        };
        _proto0.replace = function replace(t) {
            e(53);
        };
        _proto0.insertBefore = function insertBefore(t) {
            e(54);
        };
        _proto0.insertAfter = function insertAfter(t) {
            e(55);
        };
        _proto0.updateDOM = function updateDOM(t, e) {
            return false;
        };
        _proto0.splice = function splice(t, n, o) {
            for (const _t75 of o){
                if (!(Vo(_t75) || Go(_t75))) {
                    e(282);
                }
            }
            return _Ho.prototype.splice.call(this, t, n, o);
        };
        Xo.importJSON = function importJSON(t) {
            return Mi().updateFromJSON(t);
        };
        _proto0.collapseAtStart = function collapseAtStart() {
            return true;
        };
        return Xo;
    })(_Ho4);
    function root(t) {
        return t instanceof _Xo;
    }
    function Zo(t) {
        const e = {};
        if (!t) {
            return e;
        }
        let n = "";
        let o = "";
        let r = null;
        let i = false;
        let s = false;
        let l = false;
        let c = 0;
        const t_length = t.length;
        let u = -1;
        for(let _f3 = 0; _f3 < t_length; _f3++){
            const _a3 = t[_f3];
            if (i) {
                if (_a3 === "*" && t[_f3 + 1] === "/") {
                    i = false;
                    _f3++;
                }
            } else if (s) {
                if (u === -1) {
                    u = _f3;
                }
                s = false;
            } else if (r === null) {
                if (_a3 !== "/" || t[_f3 + 1] !== "*") {
                    if (_a3 !== '"' && _a3 !== "'") {
                        if (_a3 !== "(") {
                            if (_a3 !== ")") {
                                if (l || _a3 !== ":" || c !== 0) {
                                    if (_a3 === ";" && c === 0) {
                                        if (u !== -1) {
                                            if (l) {
                                                o += t.slice(u, _f3);
                                            } else {
                                                n += t.slice(u, _f3);
                                            }
                                            u = -1;
                                        }
                                        const _r27 = n.trim();
                                        const _i17 = o.trim();
                                        if (_r27 !== "" && _i17 !== "") {
                                            e[_r27] = _i17;
                                        }
                                        n = "";
                                        o = "";
                                        l = false;
                                        continue;
                                    }
                                    if (u === -1) {
                                        u = _f3;
                                    }
                                } else {
                                    if (u !== -1) {
                                        n += t.slice(u, _f3);
                                        u = -1;
                                    }
                                    l = true;
                                }
                            } else {
                                if (u === -1) {
                                    u = _f3;
                                }
                                c = Math.max(0, c - 1);
                            }
                        } else {
                            if (u === -1) {
                                u = _f3;
                            }
                            c++;
                        }
                    } else {
                        if (u === -1) {
                            u = _f3;
                        }
                        r = _a3;
                    }
                } else {
                    if (u !== -1) {
                        if (l) {
                            o += t.slice(u, _f3);
                        } else {
                            n += t.slice(u, _f3);
                        }
                        u = -1;
                    }
                    i = true;
                    _f3++;
                }
            } else {
                if (u === -1) {
                    u = _f3;
                }
                if (_a3 === "\\") {
                    s = true;
                } else if (_a3 === r) {
                    r = null;
                }
            }
        }
        if (u !== -1) {
            if (l) {
                o += t.slice(u, t_length);
            } else {
                n += t.slice(u, t_length);
            }
        }
        const f = n.trim();
        const d = o.trim();
        if (f !== "" && d !== "") {
            e[f] = d;
        }
        return e;
    }
    function tr(t, e, n) {
        const o = n.trimEnd();
        const r = o.length - 10;
        if (r >= 0 && o.slice(r).toLowerCase() === "!important") {
            t.setProperty(e, o.slice(0, r).trim(), "important");
        } else {
            t.setProperty(e, n, "");
        }
    }
    function er(t, e, n = "") {
        if (e === n) {
            return;
        }
        const o = Zo(n);
        const r = Zo(e);
        for(const _e67 in r){
            delete o[_e67];
            tr(t, _e67, r[_e67]);
        }
        for(const _e68 in o){
            t.removeProperty(_e68);
        }
    }
    const nr = Qe()({
        detail: tn(Ze(Ge(), A), {
            field: "__detail"
        }),
        format: tn(Ze(Ge(), w), {
            field: "__format"
        }),
        mode: tn(qe([
            "normal",
            "token",
            "segmented"
        ]), {
            field: "__mode",
            getterTable: getterTable_1,
            setterTable: setterTable_1
        }),
        style: tn(Ye(), {
            field: "__style"
        }),
        text: tn(Ye(), {
            field: "__text",
            getter: "getTextContent",
            setter: "setTextContent"
        })
    });
    function or(t, e) {
        if (16 & e) {
            return "code";
        }
        if (128 & e) {
            return "mark";
        }
        if (32 & e) {
            return "sub";
        }
        if (64 & e) {
            return "sup";
        }
        return null;
    }
    function rr(t, e) {
        if (1 & e) {
            return "strong";
        }
        if (2 & e) {
            return "em";
        }
        return "span";
    }
    function ir(t, e, __format, o, text) {
        const o_classList = o.classList;
        let s = Yi(text, "base");
        if (s !== undefined) {
            o_classList.add(...Array.from(s));
        }
        s = Yi(text, "underlineStrikethrough");
        let l = false;
        const c = 8 & e && 4 & e;
        if (s !== undefined) {
            if (8 & __format && 4 & __format) {
                l = true;
                if (!c) {
                    o_classList.add(...Array.from(s));
                }
            } else if (c) {
                o_classList.remove(...Array.from(s));
            }
        }
        for(const _t76 in w){
            const _o28 = w[_t76];
            s = Yi(text, _t76);
            if (s !== undefined) {
                if (__format & _o28) {
                    if (l && (_t76 === "underline" || _t76 === "strikethrough")) {
                        if (e & _o28) {
                            o_classList.remove(...Array.from(s));
                        }
                        continue;
                    }
                    if ((e & _o28) === 0 || c && _t76 === "underline" || _t76 === "strikethrough") {
                        o_classList.add(...Array.from(s));
                    }
                } else {
                    if (e & _o28) {
                        o_classList.remove(...Array.from(s));
                    }
                }
            }
        }
        Vi(o, "class");
    }
    function sr(__text, e, n) {
        const o = n.isComposing();
        const r = __text + (o ? T : "");
        const i = js();
        const s = Hs(i).$getDOMSlot(n, e, i);
        const l = s.getFirstChild();
        if (l === null || l.nodeType !== Node.TEXT_NODE) {
            return void s.insertChild(ks().createTextNode(r));
        }
        const c = l;
        const c_nodeValue = c.nodeValue;
        if (c_nodeValue !== r) {
            if (o || u || m) {
                const _ref30 = ((c_nodeValue_1, e)=>{
                    const t_length = c_nodeValue_1.length;
                    const e_length = e.length;
                    let r = 0;
                    let i = 0;
                    while(r < t_length && r < e_length && c_nodeValue_1[r] === e[r]){
                        r++;
                    }
                    while(i + r < t_length && i + r < e_length && c_nodeValue_1[t_length - i - 1] === e[e_length - i - 1]){
                        i++;
                    }
                    return [
                        r,
                        t_length - r - i,
                        e.slice(r, e_length - i)
                    ];
                })(c_nodeValue, r);
                const _t77 = _ref30[0];
                const _e69 = _ref30[1];
                const _n48 = _ref30[2];
                c.replaceData(_t77, _e69, _n48);
            } else {
                c.nodeValue = r;
            }
        }
    }
    function lr(t, e, n, __format, __text, i) {
        sr(__text, t, e);
        const text = i.theme.text;
        if (text !== undefined) {
            ir(0, 0, __format, t, text);
        }
    }
    function cr(_vo3$prototype$export_element, e) {
        const n = ks().createElement(e);
        n.appendChild(_vo3$prototype$export_element);
        return n;
    }
    function ar(t) {
        return t != null && t.__isInlineFormattable === true;
    }
    var _ur2 = ((_vo3)=>{
        function ur(t = "", e) {
            let _this4;
            _this4 = _vo3.call(this, e) || this;
            _this4.__text = t;
            _this4.__format = 0;
            _this4.__style = "";
            _this4.__mode = 0;
            _this4.__detail = 0;
            return _this4;
        }
        babelHelpers.inheritsLoose(ur, _vo3);
        const _proto1 = ur.prototype;
        _proto1.$config = function $config() {
            return this.config("text", {
                extends: _vo5,
                generated: Po,
                importDOM: {
                    "#text": function text() {
                        return {
                            conversion: pr,
                            priority: 0
                        };
                    },
                    b: function b() {
                        return {
                            conversion: dr,
                            priority: 0
                        };
                    },
                    code: function code() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    em: function em() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    i: function i() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    mark: function mark() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    s: function s() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    span: function span() {
                        return {
                            conversion: fr,
                            priority: 0
                        };
                    },
                    strong: function strong() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    sub: function sub() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    sup: function sup() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    },
                    u: function u() {
                        return {
                            conversion: yr,
                            priority: 0
                        };
                    }
                },
                json: nr
            });
        };
        _proto1.getFormat = function getFormat() {
            return this.getLatest().__format;
        };
        _proto1.getDetail = function getDetail() {
            return this.getLatest().__detail;
        };
        _proto1.getMode = function getMode() {
            const t = this.getLatest();
            return getterTable_1[t.__mode];
        };
        _proto1.getStyle = function getStyle() {
            return this.getLatest().__style;
        };
        _proto1.isToken = function isToken() {
            return this.getLatest().__mode === 1;
        };
        _proto1.isComposing = function isComposing() {
            return this.__key === Ci();
        };
        _proto1.isSegmented = function isSegmented() {
            return this.getLatest().__mode === 2;
        };
        _proto1.isDirectionless = function isDirectionless() {
            return !!(1 & this.getLatest().__detail);
        };
        _proto1.isUnmergeable = function isUnmergeable() {
            return !!(2 & this.getLatest().__detail);
        };
        _proto1.hasFormat = function hasFormat(t) {
            const e = w[t];
            return (this.getFormat() & e) !== 0;
        };
        _proto1.isSimpleText = function isSimpleText() {
            const t = this.getLatest();
            return t.__type === "text" && t.__mode === 0;
        };
        _proto1.getTextContent = function getTextContent() {
            return this.getLatest().__text;
        };
        _proto1.getFormatFlags = function getFormatFlags(t, e) {
            return pi(this.getLatest().__format, t, e);
        };
        _proto1.canHaveFormat = function canHaveFormat() {
            return true;
        };
        _proto1.isInline = function isInline() {
            return true;
        };
        _proto1.createDOM = function createDOM(t, e) {
            const __format = this.__format;
            const o = or(0, __format);
            const r = rr(0, __format);
            const i = o === null ? r : o;
            const s = ks().createElement(i);
            let l = s;
            if (this.hasFormat("code")) {
                s.setAttribute("spellcheck", "false");
            }
            if (o !== null) {
                l = ks().createElement(r);
                s.appendChild(l);
            }
            lr(l, this, 0, __format, this.__text, t);
            const __style = this.__style;
            if (__style !== "") {
                er(s.style, __style);
            }
            return s;
        };
        _proto1.updateDOM = function updateDOM(t, n, o) {
            const __text = this.__text;
            const t___format = t.__format;
            const __format = this.__format;
            const l = or(0, t___format);
            const c = or(0, __format);
            const a = rr(0, t___format);
            const u = rr(0, __format);
            if ((l === null ? a : l) !== (c === null ? u : c)) {
                return true;
            }
            if (l === c && a !== u) {
                const _t78 = n.firstChild;
                if (_t78 == null) {
                    e(48);
                }
                const _i18 = ks().createElement(u);
                lr(_i18, this, 0, __format, __text, o);
                n.replaceChild(_i18, _t78);
                return false;
            }
            let f = n;
            if (c !== null && l !== null) {
                f = n.firstChild;
                if (f == null) {
                    e(49);
                }
            }
            sr(__text, f, this);
            const text = o.theme.text;
            if (text !== undefined && t___format !== __format) {
                ir(0, t___format, __format, f, text);
            }
            const t___style = t.__style;
            const __style = this.__style;
            if (t___style !== __style) {
                er(n.style, __style, t___style);
                Vi(n, "style");
            }
            return false;
        };
        _proto1.exportDOM = function exportDOM(t) {
            const _vo3$prototype$export = _vo3.prototype.exportDOM.call(this, t);
            let _vo3$prototype$export_element = _vo3$prototype$export.element;
            if (!Rs(_vo3$prototype$export_element)) {
                e(132);
            }
            _vo3$prototype$export_element.style.whiteSpace = "pre-wrap";
            if (this.hasFormat("lowercase")) {
                _vo3$prototype$export_element.style.textTransform = "lowercase";
            } else if (this.hasFormat("uppercase")) {
                _vo3$prototype$export_element.style.textTransform = "uppercase";
            } else if (this.hasFormat("capitalize")) {
                _vo3$prototype$export_element.style.textTransform = "capitalize";
            }
            if (this.hasFormat("bold")) {
                _vo3$prototype$export_element = cr(_vo3$prototype$export_element, "b");
            }
            if (this.hasFormat("italic")) {
                _vo3$prototype$export_element = cr(_vo3$prototype$export_element, "i");
            }
            if (this.hasFormat("strikethrough")) {
                _vo3$prototype$export_element = cr(_vo3$prototype$export_element, "s");
            }
            if (this.hasFormat("underline")) {
                _vo3$prototype$export_element = cr(_vo3$prototype$export_element, "u");
            }
            return {
                element: _vo3$prototype$export_element
            };
        };
        _proto1.selectionTransform = function selectionTransform(t, e) {};
        _proto1.setFormat = function setFormat(t) {
            const e = this.getWritable();
            e.__format = typeof t === "string" ? w[t] : t;
            return e;
        };
        _proto1.setDetail = function setDetail(t) {
            const e = this.getWritable();
            e.__detail = typeof t === "string" ? A[t] : t;
            return e;
        };
        _proto1.setStyle = function setStyle(t) {
            const e = this.getWritable();
            e.__style = t;
            return e;
        };
        _proto1.toggleFormat = function toggleFormat(t) {
            const e = pi(this.getFormat(), t, null);
            return this.setFormat(e);
        };
        _proto1.toggleDirectionless = function toggleDirectionless() {
            const t = this.getWritable();
            t.__detail ^= 1;
            return t;
        };
        _proto1.toggleUnmergeable = function toggleUnmergeable() {
            const t = this.getWritable();
            t.__detail ^= 2;
            return t;
        };
        _proto1.setMode = function setMode(t) {
            const e = setterTable_1[t];
            if (this.getLatest().__mode === e) {
                return this;
            }
            const n = this.getWritable();
            n.__mode = e;
            return n;
        };
        _proto1.setTextContent = function setTextContent(t) {
            if (this.getLatest().__text === t) {
                return this;
            }
            const e = this.getWritable();
            e.__text = t;
            return e;
        };
        _proto1.select = function select(t, e) {
            Sc();
            let n = t;
            let o = e;
            const r = Su();
            const i = this.getTextContent();
            const __key = this.__key;
            if (typeof i === "string") {
                const _t79 = i.length;
                if (n === undefined) {
                    n = _t79;
                }
                if (o === undefined) {
                    o = _t79;
                }
            } else {
                n = 0;
                o = 0;
            }
            if (!Ha(r)) {
                return hu(__key, n, __key, o, "text", "text");
            }
            {
                const _t80 = Ci();
                if (!(_t80 !== r.anchor.key && _t80 !== r.focus.key)) {
                    Si(__key);
                }
                r.setTextNodeRange(this, n, this, o);
            }
            return r;
        };
        _proto1.selectStart = function selectStart() {
            return this.select(0, 0);
        };
        _proto1.selectEnd = function selectEnd() {
            const t = this.getTextContentSize();
            return this.select(t, t);
        };
        _proto1.spliceText = function spliceText(t, e, n, o) {
            const r = this.getWritable();
            const r___text = r.__text;
            const n_length = n.length;
            let l = t;
            if (l < 0) {
                l = n_length + l;
                if (l < 0) {
                    l = 0;
                }
            }
            const c = Su();
            if (o && Ha(c)) {
                const _e70 = t + n_length;
                c.setTextNodeRange(r, _e70, r, _e70);
            }
            const a = r___text.slice(0, l) + n + r___text.slice(l + e);
            r.__text = a;
            return r;
        };
        _proto1.canInsertTextBefore = function canInsertTextBefore() {
            return true;
        };
        _proto1.canInsertTextAfter = function canInsertTextAfter() {
            return true;
        };
        _proto1.splitText = function splitText(...t_1) {
            Sc();
            const e = this.getLatest();
            const n = e.getTextContent();
            if (n === "") {
                return [];
            }
            const e___key = e.__key;
            const r = Ci();
            const n_length = n.length;
            t_1.sort((t, e)=>t - e);
            t_1.push(n_length);
            const s = [];
            const t_1_length = t_1.length;
            for(let _e71 = 0, _o29 = 0; _e71 < n_length && _o29 <= t_1_length; _o29++){
                const _r28 = t_1[_o29];
                if (_r28 > _e71) {
                    s.push(n.slice(_e71, _r28));
                    _e71 = _r28;
                }
            }
            const s_length = s.length;
            if (s_length === 1) {
                return [
                    e
                ];
            }
            const a = s[0];
            const u = e.getParent();
            let f;
            const d = e.getFormat();
            const h = e.getStyle();
            const e___detail = e.__detail;
            let p = false;
            let _ = null;
            let m = null;
            const y = Su();
            if (Ha(y)) {
                const _ref31 = y.isBackward() ? [
                    y.focus,
                    y.anchor
                ] : [
                    y.anchor,
                    y.focus
                ];
                const _t81 = _ref31[0];
                const _e72 = _ref31[1];
                if (_t81.type === "text" && _t81.key === e___key) {
                    _ = _t81;
                }
                if (_e72.type === "text" && _e72.key === e___key) {
                    m = _e72;
                }
            }
            if (e.isSegmented()) {
                f = xr(a);
                f.__format = d;
                f.__style = h;
                f.__detail = e___detail;
                f.__state = yn(e, f);
                p = true;
            } else {
                f = e.setTextContent(a);
            }
            const x = [
                f
            ];
            for(let _t82 = 1; _t82 < s_length; _t82++){
                const _n49 = xr(s[_t82]);
                _n49.__format = d;
                _n49.__style = h;
                _n49.__detail = e___detail;
                _n49.__state = yn(e, _n49);
                const _i19 = _n49.__key;
                if (r === e___key) {
                    Si(_i19);
                }
                x.push(_n49);
            }
            const S = _ ? _.offset : null;
            const C = m ? m.offset : null;
            let T = 0;
            for (const _t83 of x){
                if (!_ && !m) {
                    break;
                }
                const _e73 = T + _t83.getTextContentSize();
                if (_ !== null && S !== null && S <= _e73 && S >= T) {
                    _.set(_t83.getKey(), S - T, "text");
                    if (S < _e73) {
                        _ = null;
                    }
                }
                if (m !== null && C !== null && C <= _e73 && C >= T) {
                    m.set(_t83.getKey(), C - T, "text");
                    break;
                }
                T = _e73;
            }
            if (u !== null) {
                ((t)=>{
                    const e = t.getPreviousSibling();
                    const n = t.getNextSibling();
                    if (e !== null) {
                        xi(e);
                    }
                    if (n !== null) {
                        xi(n);
                    }
                })(this);
                const _t84 = u.getWritable();
                const _e74 = this.getIndexWithinParent();
                if (p) {
                    _t84.splice(_e74, 0, x);
                    this.remove();
                } else {
                    _t84.splice(_e74, 1, x);
                }
                if (Ha(y)) {
                    vu(y, u, _e74, s_length - 1);
                }
            }
            return x;
        };
        _proto1.mergeWithSibling = function mergeWithSibling(t) {
            const n = t === this.getPreviousSibling();
            if (!(n || t === this.getNextSibling())) {
                e(50);
            }
            const __key = this.__key;
            const t___key = t.__key;
            const __text = this.__text;
            const i_length = __text.length;
            if (Ci() === t___key) {
                Si(__key);
            }
            const l = Su();
            if (Ha(l)) {
                const { anchor, focus } = l;
                if (anchor !== null && anchor.key === t___key) {
                    bu(anchor, n, __key, t, i_length);
                }
                if (focus !== null && focus.key === t___key) {
                    bu(focus, n, __key, t, i_length);
                }
            }
            const t___text = t.__text;
            const a = n ? t___text + __text : __text + t___text;
            this.setTextContent(a);
            const u = this.getWritable();
            t.remove();
            return u;
        };
        _proto1.isTextEntity = function isTextEntity() {
            return false;
        };
        return babelHelpers.createClass(ur, [
            {
                key: "__isInlineFormattable",
                get: function get() {
                    return true;
                }
            }
        ]);
    })(_vo5);
    function fr(t) {
        return {
            forChild: Cr(t.style),
            node: null
        };
    }
    function dr(t) {
        const e = t;
        const n = e.style.fontWeight === "normal";
        return {
            forChild: Cr(e.style, n ? undefined : "bold"),
            node: null
        };
    }
    var hr = new WeakMap();
    function gr(t) {
        if (!Rs(t)) {
            return false;
        }
        if (t.nodeName === "PRE") {
            return true;
        }
        const whiteSpace = t.style.whiteSpace;
        return typeof whiteSpace === "string" && whiteSpace.startsWith("pre");
    }
    function pr(t) {
        const n = t;
        if (t.parentElement === null) {
            e(129);
        }
        let o = n.textContent || "";
        if (((t)=>{
            let e;
            let t_parentNode = t.parentNode;
            const o = [
                t
            ];
            while(t_parentNode !== null && (e = hr.get(t_parentNode)) === undefined && !gr(t_parentNode)){
                o.push(t_parentNode);
                t_parentNode = t_parentNode.parentNode;
            }
            const r = e === undefined ? t_parentNode : e;
            for(let _t85 = 0; _t85 < o.length; _t85++){
                hr.set(o[_t85], r);
            }
            return r;
        })(n) !== null) {
            return {
                node: wu(o)
            };
        }
        o = o.replace(/\r/g, "").replace(/[ \t\n]+/g, " ");
        if (o === "") {
            return {
                node: null
            };
        }
        if (o[0] === " ") {
            let _t86 = n;
            let _e76 = true;
            while(_t86 !== null && (_t86 = _r(_t86, false)) !== null){
                const _n50 = _t86.textContent || "";
                if (_n50.length > 0) {
                    if (/[ \t\n]$/.test(_n50)) {
                        o = o.slice(1);
                    }
                    _e76 = false;
                    break;
                }
            }
            if (_e76) {
                o = o.slice(1);
            }
        }
        if (o[o.length - 1] === " ") {
            let _t87 = n;
            let _e77 = true;
            while(_t87 !== null && (_t87 = _r(_t87, true)) !== null){
                if ((_t87.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
                    _e77 = false;
                    break;
                }
            }
            if (_e77) {
                o = o.slice(0, o.length - 1);
            }
        }
        if (o === "") {
            return {
                node: null
            };
        }
        return {
            node: xr(o)
        };
    }
    function _r(t, e) {
        let n = t;
        while(true){
            let _t88;
            while((_t88 = e ? n.nextSibling : n.previousSibling) === null){
                const _t89 = n.parentElement;
                if (_t89 === null) {
                    return null;
                }
                n = _t89;
            }
            n = _t88;
            if (Rs(n)) {
                const _t90 = n.style.display;
                if (_t90 === "" && !$s(n) || _t90 !== "" && !_t90.startsWith("inline")) {
                    return null;
                }
            }
            let _o30 = n;
            while((_o30 = e ? n.firstChild : n.lastChild) !== null){
                n = _o30;
            }
            if (di(n)) {
                return n;
            }
            if (n.nodeName === "BR") {
                return null;
            }
        }
    }
    var mr = {
        code: "code",
        em: "italic",
        i: "italic",
        mark: "highlight",
        s: "strikethrough",
        strong: "bold",
        sub: "subscript",
        sup: "superscript",
        u: "underline"
    };
    function yr(t) {
        const e = mr[t.nodeName.toLowerCase()];
        if (e === undefined) {
            return {
                node: null
            };
        }
        return {
            forChild: Cr(t.style, e),
            node: null
        };
    }
    function xr(t = "") {
        return gs(new _ur2(t));
    }
    function Sr(t) {
        return t instanceof _ur2;
    }
    function Cr(style, e) {
        const t_fontWeight = style.fontWeight;
        const o = style.textDecoration.split(" ");
        const r = t_fontWeight === "700" || t_fontWeight === "bold";
        const i = o.includes("line-through");
        const s = style.fontStyle === "italic";
        const l = o.includes("underline");
        const { verticalAlign, textTransform } = style;
        return function(t) {
            if (Sr(t) || ar(t)) {
                if (r && !t.hasFormat("bold")) {
                    t.toggleFormat("bold");
                }
                if (i && !t.hasFormat("strikethrough")) {
                    t.toggleFormat("strikethrough");
                }
                if (s && !t.hasFormat("italic")) {
                    t.toggleFormat("italic");
                }
                if (l && !t.hasFormat("underline")) {
                    t.toggleFormat("underline");
                }
                if (!(verticalAlign !== "sub" || t.hasFormat("subscript"))) {
                    t.toggleFormat("subscript");
                }
                if (!(verticalAlign !== "super" || t.hasFormat("superscript"))) {
                    t.toggleFormat("superscript");
                }
                if (!(textTransform !== "lowercase" && textTransform !== "uppercase" && textTransform !== "capitalize" || t.hasFormat(textTransform))) {
                    t.toggleFormat(textTransform);
                }
                if (e && !t.hasFormat(e)) {
                    t.toggleFormat(e);
                }
                return t;
            }
            return t;
        };
    }
    function Tr(t, n) {
        const { type, key, offset } = t;
        const s = _s(t.key);
        if (type === "text") {
            if (!Sr(s)) {
                e(266, s.getType(), key);
            }
            return Of(s, n, offset);
        }
        if (!Vo(s)) {
            e(267, s.getType(), key);
        }
        return Pr(s, t.offset, n);
    }
    function vr(t, n) {
        const { origin, direction } = n;
        const i = direction === "next";
        if (Cf(n)) {
            t.set(origin.getKey(), n.offset, "text");
        } else if (hasNext(n)) {
            if (Sr(origin)) {
                t.set(origin.getKey(), Mf(origin, direction), "text");
            } else {
                t.set(origin.getParentOrThrow().getKey(), origin.getIndexWithinParent() + (i ? 1 : 0), "element");
            }
        } else {
            if (!(vf(n) && Vo(origin))) {
                e(268);
            }
            t.set(origin.getKey(), i ? 0 : origin.getChildrenSize(), "element");
        }
    }
    function Nr(t) {
        const e = Su();
        const n = Ha(e) ? e : gu();
        br(n, t);
        Ai(n);
        return n;
    }
    function br(t, e) {
        vr(t.anchor, e.anchor);
        vr(t.focus, e.focus);
    }
    function kr({ anchor, focus }) {
        const o = Tr(anchor, "next");
        const r = Tr(focus, "next");
        const i = Wf(o, r) <= 0 ? "next" : "previous";
        return $f(Lf(o, i), Lf(r, i));
    }
    function Er({ direction, origin }) {
        const o = Ef(origin, mf(direction)).getNodeAtCaret();
        if (o) {
            return Ef(o, direction);
        }
        return Af(origin.getParentOrThrow(), direction);
    }
    function Or(t, e = "root") {
        const n = [
            t
        ];
        for(let _o31 = vf(t) ? t.getParentCaret(e) : t.getSiblingCaret(); _o31 !== null; _o31 = _o31.getParentCaret(e)){
            n.push(Er(_o31));
        }
        return n;
    }
    function Mr(t) {
        return !!t && t.origin.isAttached();
    }
    function wr(t, n = "removeEmptySlices") {
        if (t.isCollapsed()) {
            return t;
        }
        const o = "root";
        const r = "next";
        let i = n;
        const s = Fr(t, r);
        let origin = s.anchor.origin;
        while(origin !== null && !shadowRoot(origin)){
            origin = origin.getParent();
        }
        const c = Vo(origin) ? origin.getFirstChild() : null;
        const a = Or(s.anchor, o);
        const u = Or(s.focus.getFlipped(), o);
        const f = new Set();
        const d = [];
        for (const _t91 of s.iterNodeCarets(o)){
            if (vf(_t91)) {
                f.add(_t91.origin.getKey());
            } else if (hasNext(_t91)) {
                const _e78 = _t91.origin;
                if (!(Vo(_e78) && !f.has(_e78.getKey()))) {
                    d.push(_e78);
                }
            }
        }
        const h = new Set();
        for (const _t92 of d){
            const _e79 = _t92.getParent();
            if (!(_e79 === null || f.has(_e79.getKey()))) {
                h.add(_e79);
            }
            mi(_t92);
        }
        for (const _t93 of h){
            if (!_t93.canBeEmpty() && !shadowRoot(_t93) && _t93.isEmpty() && _t93.isAttached()) {
                _t93.remove();
            }
        }
        for (const _t94 of s.getTextSlices()){
            if (!_t94) {
                continue;
            }
            const _e80 = _t94.caret.origin;
            const _n51 = _e80.getTextContentSize();
            const _o32 = Er(Ef(_e80, r));
            const _s10 = _e80.getMode();
            if (Math.abs(_t94.distance) === _n51 && i === "removeEmptySlices" || _s10 === "token" && _t94.distance !== 0) {
                _o32.remove();
            } else if (_t94.distance !== 0) {
                i = "removeEmptySlices";
                let _e81 = _t94.removeTextSlice();
                const _n52 = _t94.caret.origin;
                if (_s10 === "segmented") {
                    const _t95 = _e81.origin;
                    const _n53 = xr(_t95.getTextContent()).setStyle(_t95.getStyle()).setFormat(_t95.getFormat());
                    _o32.replaceOrInsert(_n53);
                    _e81 = Of(_n53, r, _e81.offset);
                }
                if (_n52.is(a[0].origin)) {
                    a[0] = _e81;
                }
                if (_n52.is(u[0].origin)) {
                    u[0] = _e81.getFlipped();
                }
            }
        }
        const g = Ar(a);
        const p = Ar(u);
        const _ = ((t, e, n)=>{
            const o = t && t.getParentAtCaret();
            const r = e && e.getParentAtCaret();
            const i = o && r && Vf(o, r);
            if (!i || i.type !== "branch") {
                return null;
            }
            const s = function s(t, e) {
                let o;
                for(let _r29 = t; _r29 && !_r29.is(i.commonAncestor); _r29 = _r29.getParent()){
                    if (shadowRoot(_r29)) {
                        return;
                    }
                    if (!(e && !n.has(_r29.__key) || !Us(_r29))) {
                        o = _r29;
                    }
                }
                return o;
            };
            const l = s(o, false);
            const c = l && s(r, true);
            if (l && c && tf(c).length === 0) {
                return [
                    l,
                    c
                ];
            }
            return null;
        })(g, p, f);
        if (_) {
            const _t96 = _[0];
            const _e82 = _[1];
            Af(_t96, "previous").splice(0, _e82.getChildren());
            let _n54 = _e82.getParent();
            for(_e82.remove(true); _n54 && _n54.isEmpty();){
                const _t97 = _n54;
                _n54 = _n54.getParent();
                _t97.remove(true);
            }
        } else if (p) {
            const _t98 = ((t)=>{
                if (vf(t)) {
                    const _e84 = t.origin;
                    if (Us(_e84)) {
                        return _e84;
                    }
                } else {
                    const _e85 = t.getParentAtCaret();
                    if (_e85 && Us(_e85)) {
                        return _e85;
                    }
                }
                return null;
            })(p);
            const _e83 = _t98 && _t98.getParent();
            const _n55 = _t98 && _t98.getParents().findLast(fs);
            if (_t98 && _e83 && !root(_e83) && _t98.isEmpty() && f.has(_t98.getKey()) && tf(_t98).length === 0 && (!_n55 || f.has(_n55.getKey()))) {
                _t98.remove(true);
                let _n56 = _e83;
                while(_n56 && !root(_n56) && _n56.isEmpty()){
                    const _t99 = _n56.getParent();
                    if (_t99 && root(_t99) && _t99.getChildrenSize() <= 1 && _n56.canBeEmpty()) {
                        break;
                    }
                    const _e86 = _n56;
                    _n56 = _t99;
                    _e86.remove(true);
                }
            }
        }
        if (!(wi(origin, c) !== null || origin === null || origin.isAttached())) {
            wi(Mi(), null);
        }
        const m = Ar([
            g,
            p
        ].concat(Array.from(a), Array.from(u)));
        if (m) {
            return Bf(Lf(m, t.direction));
        }
        e(269, JSON.stringify(a.map((t)=>t.origin.__key)));
    }
    function Ar(t) {
        const e = t.find(Mr);
        return e && Dr(e);
    }
    function Dr(t) {
        const e = ((t)=>{
            let e = t;
            while(vf(e)){
                const _t100 = If(e);
                if (!vf(_t100)) {
                    break;
                }
                e = _t100;
            }
            return e;
        })(t.getLatest());
        const e_direction = e.direction;
        if (Sr(e.origin)) {
            if (Cf(e)) {
                return e;
            }
            return Of(e.origin, e_direction, e_direction);
        }
        const o = e.getAdjacentCaret();
        if (hasNext(o) && Sr(o.origin)) {
            return Of(o.origin, e_direction, mf(e_direction));
        }
        return e;
    }
    function Ir(t) {
        return Cf(t) && t.offset !== Mf(t.origin, t.direction);
    }
    function Fr(t, e) {
        if (t.direction === e) {
            return t;
        }
        return $f(Lf(t.focus, e), Lf(t.anchor, e));
    }
    function Pr(t, e, n) {
        const o = t.getChildrenSize();
        const r = (e > 0 ? Math.min(Math.ceil(e), o) : 0) - (n === "next" ? 1 : 0);
        const i = r < 0 || r >= o ? null : t.getChildAtIndex(r);
        if (i === null) {
            return Af(t, n);
        }
        return Ef(i, n);
    }
    function Rr(t) {
        const { origin, offset, direction } = t;
        if (offset === Mf(origin, direction)) {
            return t.getSiblingCaret();
        }
        if (offset === Mf(origin, mf(direction))) {
            return Er(t.getSiblingCaret());
        }
        const _n$splitText = origin.splitText(offset);
        const i = _n$splitText[0];
        if (!Sr(i)) {
            e(281);
        }
        return Lf(Ef(i, "next"), direction);
    }
    function Lr(t, e) {
        for (const _n57 of t){
            if (_n57 !== null && _n57.caret.origin.is(e)) {
                return _n57;
            }
        }
    }
    function Kr(t, e = null) {
        const origin = t.caret.origin;
        const _t$getSliceIndices = t.getSliceIndices();
        const o = _t$getSliceIndices[0];
        const r = _t$getSliceIndices[1];
        if (o === r) {
            return null;
        }
        if (o === 0 && r === origin.getTextContentSize()) {
            return origin;
        }
        const i = origin.getParent();
        const s = e && i && Tu(e, i) ? origin.getIndexWithinParent() : -1;
        const l = e ? [
            e.anchor,
            e.focus
        ].map((t)=>[
                t,
                t.key === origin.__key && t.type === "text" ? t.offset - o : i !== null && t.key === i.__key && t.offset === s ? 0 : null
            ]) : [];
        const c = origin.splitText(o, r);
        const a = c[o === 0 ? 0 : 1];
        if (i && e && e !== Su()) {
            vu(e, i, s, c.length - 1);
        }
        for (const [_t101, _e87] of l){
            if (_e87 !== null) {
                _t101.set(a.__key, _e87, "text");
            }
        }
        return a;
    }
    function Br(t, e) {
        return true;
    }
    function $r(t, { $copyElementNode = hs, $splitTextPointCaretNext = Rr, rootMode = "shadowRoot", $shouldSplit = Br, removeEmptyDestination = false } = {}) {
        if (Cf(t)) {
            return $splitTextPointCaretNext(t);
        }
        const s = t.getParentCaret(rootMode);
        if (s) {
            const _n58 = s.origin;
            if (vf(t)) {
                const _t102 = Er(s);
                if (removeEmptyDestination && _n58.isEmpty()) {
                    _n58.remove();
                    return _t102;
                }
                if (!_n58.canBeEmpty() || !$shouldSplit(_n58, "first")) {
                    return _t102;
                }
            }
            const _o33 = ju((l = t).getNodeAtCaret(), l.direction);
            if (_o33.length > 0 || !removeEmptyDestination && _n58.canBeEmpty() && $shouldSplit(_n58, "last")) {
                s.insert($copyElementNode(_n58).splice(0, 0, _o33));
            }
        }
        var l;
        return s;
    }
    function zr(t, n, o) {
        let r = Lf(n, "next");
        if (Cf(r)) {
            if (r.offset === 0) {
                r = Ef(r.origin, "previous").getFlipped();
            } else if (r.offset === r.origin.getTextContentSize()) {
                r = Ef(r.origin, "next");
            }
        }
        if (r.origin.is(t)) {
            if (!hasNext(r)) {
                e(342, t.getKey(), t.getType());
            }
            r = Er(r);
        }
        if (t.is(r.getNodeAtCaret()) || t.is(r.getFlipped().getNodeAtCaret())) {
            t.remove(true);
        }
        for(let _t103 = r; _t103; _t103 = $r(_t103, o)){
            r = _t103;
        }
        if (Cf(r)) {
            e(283);
        }
        r.insert(t.isInline() ? Hr().append(t) : t);
        return Lf(Ef(t.getLatest(), "next"), n.direction);
    }
    function Wr(t, e) {
        const n = Fr(Ha(e) ? kr(e) : e, "next");
        const o = Xu(n.anchor.origin);
        const r = Xu(t.getLatest());
        if (o === null ? r !== null : !o.is(r)) {
            return false;
        }
        const i = Dr(Af(t, "next"));
        const s = Lf(Dr(Af(t, "previous")), "next");
        return Wf(n.anchor, i) <= 0 && Wf(n.focus, s) >= 0;
    }
    var _Ur = ((_Ho2)=>{
        function Ur() {
            return _Ho2.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(Ur, _Ho2);
        const _proto10 = Ur.prototype;
        _proto10.$config = function $config() {
            return this.config("paragraph", {
                extends: _Ho4,
                generated: Ro,
                importDOM: {
                    p: function p() {
                        return {
                            conversion: jr,
                            priority: 0
                        };
                    }
                }
            });
        };
        _proto10.createDOM = function createDOM(t) {
            const e = ks().createElement("p");
            const n = Yi(t.theme, "paragraph");
            if (n !== undefined) {
                e.classList.add(...Array.from(n));
            }
            return e;
        };
        _proto10.updateDOM = function updateDOM(t, e, n) {
            return false;
        };
        _proto10.exportDOM = function exportDOM(t) {
            const _Ho2$prototype$export = _Ho2.prototype.exportDOM.call(this, t);
            const _Ho2$prototype$export_element = _Ho2$prototype$export.element;
            if (Rs(_Ho2$prototype$export_element)) {
                if (this.isEmpty()) {
                    _Ho2$prototype$export_element.append(ks().createElement("br"));
                }
                const _t104 = this.getFormatType();
                if (_t104) {
                    _Ho2$prototype$export_element.style.textAlign = _t104;
                }
            }
            return {
                element: _Ho2$prototype$export_element
            };
        };
        _proto10.exportJSON = function exportJSON(t = false) {
            const e = _Ho2.prototype.exportJSON.call(this, t);
            if (e.textFormat === undefined || e.textStyle === undefined) {
                const _n59 = this.getChildren().find(Sr);
                const _o34 = _n59 ? _n59.getFormat() : this.getTextFormat();
                const _r30 = _n59 ? _n59.getStyle() : this.getTextStyle();
                if (!(t && _o34 === 0)) {
                    e.textFormat = _o34;
                }
                if (!(t && _r30 === "")) {
                    e.textStyle = _r30;
                }
            }
            return e;
        };
        _proto10.extractWithChild = function extractWithChild(t, e, n) {
            if (!Ha(e)) {
                return false;
            }
            if (this.getFormatType() === "" && this.getIndent() === 0 && this.getStyle() === "") {
                return false;
            }
            if (Wr(this, e)) {
                const _t105 = this.getTextContent();
                return _t105 !== "" && e.getTextContent() === _t105;
            }
            return false;
        };
        _proto10.insertNewAfter = function insertNewAfter(t, e) {
            const n = Hr();
            n.setTextFormat(t.format);
            n.setTextStyle(t.style);
            const o = this.getDirection();
            n.setDirection(o);
            n.setFormat(this.getFormatType());
            n.setStyle(this.getStyle());
            this.insertAfter(n, e);
            return n;
        };
        _proto10.collapseAtStart = function collapseAtStart() {
            if (this.getChildren().every((t)=>Sr(t) && !/\S/.test(t.getTextContent()))) {
                if (this.getNextSibling() !== null) {
                    this.selectNext();
                    this.remove();
                    return true;
                }
                if (this.getPreviousSibling() !== null) {
                    this.selectPrevious();
                    this.remove();
                    return true;
                }
            }
            return false;
        };
        return Ur;
    })(_Ho4);
    function jr(t) {
        const e = Hr();
        el(e, t);
        Zs(t, e);
        if (e.getFormatType() === "") {
            const _n60 = t.getAttribute("align");
            if (_n60 && _n60 && _n60 in D) {
                e.setFormat(_n60);
            }
        }
        tl(e, t);
        return {
            node: e
        };
    }
    function Hr() {
        return gs(new _Ur());
    }
    function Vr(t) {
        return t instanceof _Ur;
    }
    const Yr = Qe()({
        detail: en(Ge(2), {
            getter: {
                field: "__detail"
            },
            setter: null
        }),
        mode: en(qe([
            "normal"
        ]), {
            getter: {
                field: "__mode",
                getterTable: {
                    0: "normal"
                }
            },
            setter: null
        }),
        text: en(Ye("\t"), {
            getter: {
                field: "__text",
                method: "getTextContent"
            },
            setter: null
        })
    });
    var _Jr = ((_ur)=>{
        function Jr(t = undefined) {
            let _this5;
            _this5 = _ur.call(this, "\t", t) || this;
            _this5.__detail = 2;
            return _this5;
        }
        babelHelpers.inheritsLoose(Jr, _ur);
        const _proto11 = Jr.prototype;
        _proto11.$config = function $config() {
            return this.config("tab", {
                extends: _ur2,
                generated: Ko,
                json: Yr
            });
        };
        _proto11.createDOM = function createDOM(t) {
            const e = _ur.prototype.createDOM.call(this, t);
            const n = Yi(t.theme, "tab");
            if (n !== undefined) {
                e.classList.add(...Array.from(n));
            }
            return e;
        };
        _proto11.setTextContent = function setTextContent(t) {
            return _ur.prototype.setTextContent.call(this, "\t");
        };
        _proto11.spliceText = function spliceText(t, n, o, r) {
            if (!(o === "" && n === 0 || o === "\t" && n === 1)) {
                e(286);
            }
            return this;
        };
        _proto11.setDetail = function setDetail(t) {
            if (t !== 2) {
                e(127);
            }
            return this;
        };
        _proto11.setMode = function setMode(t) {
            if (t !== "normal") {
                e(128);
            }
            return this;
        };
        _proto11.canInsertTextBefore = function canInsertTextBefore() {
            return false;
        };
        _proto11.canInsertTextAfter = function canInsertTextAfter() {
            return false;
        };
        return Jr;
    })(_ur2);
    function Gr() {
        return gs(new _Jr());
    }
    function qr(t) {
        return t instanceof _Jr;
    }
    var Xr = null;
    function Qr(t) {
        Xr = t;
    }
    var Zr = Symbol("INTERNAL_SKIP_AFTER_CLONE_FROM");
    var ti = 1;
    function ei(t, n) {
        const o = ni(t, n);
        if (o === undefined) {
            e(30, n);
        }
        return o;
    }
    function ni(t, e) {
        return t._nodes.get(e);
    }
    const oi = typeof queueMicrotask === "function" ? queueMicrotask : (t)=>{
        Promise.resolve().then(t);
    };
    function ri(t, e) {
        const n = e !== undefined ? e : (()=>{
            const e = t.getRootNode();
            if (hi(e) || Cs(e)) {
                return Fs(e);
            }
            return null;
        })();
        if (!Rs(n)) {
            return false;
        }
        if (n.hasAttribute("data-lexical-slot")) {
            return false;
        }
        const o = ki(n);
        const n_nodeName = n.nodeName;
        return No(o) && (n_nodeName === "INPUT" || n_nodeName === "TEXTAREA" || n.contentEditable === "true" && ai(n) == null);
    }
    const ii = ri;
    function si(t, e, n) {
        const o = t.getRootElement();
        if (!o) {
            return false;
        }
        try {
            if (!e || !o.contains(e) || !o.contains(n)) {
                return false;
            }
        } catch (t) {
            return false;
        }
        return ci(e) === t && t.read("latest", function() {
            return !ri(e);
        });
    }
    function li(t) {
        return t instanceof _lc;
    }
    function ci(t) {
        let e = t;
        while(e != null){
            const _t106 = ai(e);
            if (li(_t106)) {
                return _t106;
            }
            e = ts(e);
        }
        return null;
    }
    function ai(t) {
        if (t) {
            return t.__lexicalEditor;
        }
        return null;
    }
    function ui(t) {
        return qr(t) || t.isToken();
    }
    function fi(t) {
        return ui(t) || t.isSegmented();
    }
    function di(t) {
        return Ls(t) && t.nodeType === 3;
    }
    function hi(t) {
        return Ls(t) && t.nodeType === 9;
    }
    function gi(t) {
        let e = t;
        while(e != null){
            if (di(e)) {
                return e;
            }
            e = e.firstChild;
        }
        return null;
    }
    function pi(t, e, n) {
        const o = w[e];
        if (n !== null && (t & o) === (n & o)) {
            return t;
        }
        let r = t ^ o;
        switch(e){
            case "subscript":
                r &= ~w.superscript;
                break;
            case "superscript":
                r &= ~w.subscript;
                break;
            case "lowercase":
                r &= ~w.uppercase;
                r &= ~w.capitalize;
                break;
            case "uppercase":
                r &= ~w.lowercase;
                r &= ~w.capitalize;
                break;
            default:
                if (e === "capitalize") {
                    r &= ~w.lowercase;
                    r &= ~w.uppercase;
                }
        }
        return r;
    }
    function _i(t, e) {
        const n = (()=>{
            const t = Xr;
            Xr = null;
            return t;
        })();
        if ((e = e || n && n.__key) != null) {
            return void (t.__key = e);
        }
        Sc();
        Cc();
        const o = vc();
        const r = Tc();
        const i = `${ti++}`;
        r._nodeMap.set(i, t);
        if (Vo(t)) {
            o._dirtyElements.set(i, true);
        } else {
            o._dirtyLeaves.add(i);
        }
        o._cloneNotNeeded.set(i, t);
        if (o._dirtyType === 0) {
            o._dirtyType = 1;
        }
        t.__key = i;
    }
    function mi(t) {
        $u(t.getParent() === null ? t : t.getWritable());
    }
    const yi = mi;
    function xi(t) {
        Cc();
        if (Co(t)) {
            e(323, t.__key, t.__type);
        }
        const n = t.__parent !== null ? t.__parent : Yu(t) ? t.__slotHost : null;
        const o = Tc();
        const r = vc();
        const o__nodeMap = o._nodeMap;
        const r__dirtyElements = r._dirtyElements;
        if (n !== null) {
            ((t, o__nodeMap_1, r__dirtyElements_1)=>{
                let o = t;
                while(o !== null){
                    if (r__dirtyElements_1.has(o)) {
                        return;
                    }
                    const _t107 = o__nodeMap_1.get(o);
                    if (_t107 === undefined) {
                        break;
                    }
                    r__dirtyElements_1.set(o, false);
                    o = _t107.__parent !== null ? _t107.__parent : Yu(_t107) ? _t107.__slotHost : null;
                }
            })(n, o__nodeMap, r__dirtyElements);
        }
        const t___key = t.__key;
        if (r._dirtyType === 0) {
            r._dirtyType = 1;
        }
        if (Vo(t)) {
            r__dirtyElements.set(t___key, true);
        } else {
            r._dirtyLeaves.add(t___key);
        }
    }
    function Si(t) {
        Sc();
        const e = vc();
        const e__compositionKey = e._compositionKey;
        if (t !== e__compositionKey) {
            e._compositionKey = t;
            if (e__compositionKey !== null) {
                const _t108 = Ti(e__compositionKey);
                if (_t108 !== null) {
                    _t108.getWritable();
                }
            }
            if (t !== null) {
                const _e88 = Ti(t);
                if (_e88 !== null) {
                    _e88.getWritable();
                }
            }
        }
    }
    function Ci() {
        if (xc()) {
            return null;
        }
        return vc()._compositionKey;
    }
    function Ti(t, e) {
        const n = (e || Tc())._nodeMap.get(t);
        if (n === undefined) {
            return null;
        }
        return n;
    }
    function vi(t, e) {
        const n = bi(t, vc());
        if (n !== undefined) {
            return Ti(n, e);
        }
        return null;
    }
    function Ni(t, e, n) {
        t[`__lexicalKey_${e._key}`] = n;
    }
    function bi(t, e) {
        return t[`__lexicalKey_${e._key}`];
    }
    function ki(t, e) {
        let n = t;
        while(n != null){
            const _t109 = vi(n, e);
            if (_t109 !== null) {
                return _t109;
            }
            n = ts(n);
        }
        return null;
    }
    function Ei(t) {
        const t__decorators = t._decorators;
        const n = {
            ...t__decorators
        };
        t._pendingDecorators = n;
        return n;
    }
    function Oi(t) {
        return t.read(function() {
            return Mi().getTextContent();
        });
    }
    function Mi() {
        return Tc()._nodeMap.get("root");
    }
    function wi(t, e) {
        if (!(shadowRoot(t) && t.isAttached() && (root(t) ? t.getChildrenSize() === 0 : t.isEmpty()) && (root(t) || e !== null && Us(e)))) {
            return null;
        }
        const n = Hr();
        t.append(n);
        return n;
    }
    function Ai(t) {
        Sc();
        const e = Tc();
        if (t !== null) {
            t.dirty = true;
            t.setCachedNodes(null);
            if (Ha(t) && vc()._slotsUsed) {
                uu(t);
            }
        }
        e._selection = t;
    }
    function Di(t) {
        Sc();
        xe(vc(), t);
    }
    function Ii(t) {
        const e = ((t, e)=>{
            let n = t;
            while(n != null){
                const _t110 = bi(n, e);
                if (_t110 !== undefined) {
                    return _t110;
                }
                n = ts(n);
            }
            return null;
        })(t, vc());
        if (e === null) {
            return null;
        }
        return Ti(e);
    }
    function Fi(t) {
        return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(t);
    }
    function Pi(t) {
        const e = [];
        for(let _n61 = t; _n61 !== null; _n61 = _n61._parentEditor){
            e.push(_n61);
        }
        return e;
    }
    let Ri = 0;
    function Li() {
        if (r) {
            return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
        }
        return `s${(++Ri).toString(36)}`;
    }
    function Ki(t) {
        if (di(t)) {
            return t.nodeValue;
        }
        return null;
    }
    function Bi(t, e, n) {
        const o = xs(cs(e));
        if (o === null) {
            return;
        }
        const r = Ms(o, e._rootElement);
        const r_anchorNode = r.anchorNode;
        let r_anchorOffset = r.anchorOffset;
        let r_focusOffset = r.focusOffset;
        if (r_anchorNode !== null) {
            let _e89 = Ki(r_anchorNode);
            const _o35 = ki(r_anchorNode);
            if (_e89 !== null && Sr(_o35)) {
                if ((_e89 === T || _e89 === N) && n) {
                    const _t111 = n.length;
                    _e89 = n;
                    r_anchorOffset = _t111;
                    r_focusOffset = _t111;
                }
                if (_e89 !== null) {
                    $i(_o35, _e89, r_anchorOffset, r_focusOffset, t);
                }
            }
        }
    }
    function $i(t, e, n, o, r) {
        let i = t;
        if (i.isAttached() && (r || !i.isDirty())) {
            const _s11 = i.isComposing();
            if (i.isToken() && _s11) {
                return;
            }
            let _l8 = e;
            if ((_s11 || r) && (e.endsWith(T) && (_l8 = e.slice(0, -T.length)), r)) {
                const _t112 = N;
                let _e90;
                while((_e90 = _l8.indexOf(_t112)) !== -1){
                    _l8 = _l8.slice(0, _e90) + _l8.slice(_e90 + _t112.length);
                    if (n !== null && n > _e90) {
                        n = Math.max(_e90, n - _t112.length);
                    }
                    if (o !== null && o > _e90) {
                        o = Math.max(_e90, o - _t112.length);
                    }
                }
            }
            const _c6 = i.getTextContent();
            if (r || _l8 !== _c6) {
                const _e91 = Su();
                if (_l8 === "") {
                    Si(null);
                    if (_ || g || x) {
                        i.remove();
                    } else {
                        const _t113 = vc();
                        zi(i, "", _e91);
                        setTimeout(()=>{
                            _t113.update(function() {
                                if (i.isAttached() && i.getTextContent() === "") {
                                    i.remove();
                                }
                            });
                        }, 20);
                    }
                    return;
                }
                const _r31 = i.getParent();
                const _c7 = Cu();
                const _a4 = i.getTextContentSize();
                const _u4 = Ci();
                const _f4 = i.getKey();
                if (i.isToken() && !_s11 || _u4 !== null && _f4 === _u4 && !_s11 || Ha(_c7) && (_r31 !== null && !_r31.canInsertTextBefore() && _c7.anchor.offset === 0 || _c7.anchor.key === t.__key && _c7.anchor.offset === 0 && !i.canInsertTextBefore() && !_s11 || _c7.focus.key === t.__key && _c7.focus.offset === _a4 && !i.canInsertTextAfter() && !_s11)) {
                    return void i.markDirty();
                }
                if (!Ha(_e91) || n === null || o === null) {
                    return void zi(i, _l8, _e91);
                }
                _e91.setTextNodeRange(i, n, i, o);
                if (i.isSegmented()) {
                    const _t114 = xr(i.getTextContent());
                    i.replace(_t114);
                    i = _t114;
                }
                zi(i, _l8, _e91);
            }
        }
    }
    function zi(t, e, n) {
        t.setTextContent(e);
        if (Ha(n)) {
            const _e92 = t.getKey();
            let _o36 = false;
            for (const _r32 of [
                "anchor",
                "focus"
            ]){
                const _i21 = n[_r32];
                if (_i21.type === "text" && _i21.key === _e92) {
                    _i21.offset = Mf(t, _i21.offset, "clamp");
                    _o36 = true;
                }
            }
            if (_o36) {
                n._cachedNodes = null;
                n._cachedIsBackward = null;
            }
        }
    }
    function Wi(t, e, n) {
        const o = e[n] || false;
        return o === "any" || o === t[n];
    }
    function Ui(t, e) {
        return Wi(t, e, "altKey") && Wi(t, e, "ctrlKey") && Wi(t, e, "shiftKey") && Wi(t, e, "metaKey");
    }
    function ji(t) {
        let e = t;
        while(e !== null){
            const _t115 = e.getParent();
            if (_t115 === null) {
                return null;
            }
            if (root(_t115)) {
                return e;
            }
            e = _t115;
        }
        return null;
    }
    function Hi(t, e) {
        const { anchor, focus } = t;
        const { key, offset, type } = anchor;
        const { key: key_1, offset: offset_1, type: type_1 } = focus;
        Oo(t);
        if (!root(e)) {
            return t;
        }
        const u = ji(anchor.getNode());
        if (Vo(u) && u.isShadowRoot() && u.is(ji(focus.getNode()))) {
            anchor.set(key, offset, type);
            focus.set(key_1, offset_1, type_1);
        }
        return t;
    }
    function Vi(t, e) {
        if (t.getAttribute(e) === "") {
            t.removeAttribute(e);
        }
    }
    function Yi(t, e) {
        if (t.__lexicalClassNameCache === undefined) {
            t.__lexicalClassNameCache = {};
        }
        const t___lexicalClassNameCache = t.__lexicalClassNameCache;
        const o = t___lexicalClassNameCache[e];
        if (o !== undefined) {
            return o;
        }
        const r = t[e];
        if (typeof r === "string") {
            const _t116 = Yf(r);
            t___lexicalClassNameCache[e] = _t116;
            return _t116;
        }
        return r;
    }
    function Ji(t, n, o, r, i) {
        if (o.size === 0) {
            return;
        }
        const { __type, __key } = r;
        const c = n.get(__type);
        if (c === undefined) {
            e(33, __type);
        }
        const c_klass = c.klass;
        let u = t.get(c_klass);
        if (u === undefined) {
            u = new Map();
            t.set(c_klass, u);
        }
        const f = u.get(__key);
        const d = f === "destroyed" && i === "created";
        if (f === undefined || d) {
            u.set(__key, d ? "updated" : i);
        }
    }
    function Gi(t, e, n) {
        const o = t.getParent();
        let r = n;
        let i = t;
        if (o !== null) {
            if (e && n === 0) {
                r = i.getIndexWithinParent();
                i = o;
            } else if (!(e || n !== i.getChildrenSize())) {
                r = i.getIndexWithinParent() + 1;
                i = o;
            }
        }
        return i.getChildAtIndex(e ? r - 1 : r);
    }
    function qi(t, e) {
        const t_offset = t.offset;
        if (t.type === "element") {
            return Gi(t.getNode(), e, t_offset);
        }
        {
            const _o37 = t.getNode();
            if (e && t_offset === 0 || !e && t_offset === _o37.getTextContentSize()) {
                const _t117 = e ? _o37.getPreviousSibling() : _o37.getNextSibling();
                if (_t117 === null) {
                    return Gi(_o37.getParentOrThrow(), e, _o37.getIndexWithinParent() + (e ? 0 : 1));
                }
                return _t117;
            }
        }
        return null;
    }
    function Xi(t) {
        const event = cs(t).event;
        const n = event && event.inputType;
        return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
    }
    function Qi(t, e) {
        return Pc(t, e, arguments.length <= 2 ? undefined : arguments[2], t);
    }
    function Zi(t, n) {
        const o = t._keyToDOMMap.get(n);
        if (o === undefined) {
            e(75, n);
        }
        return o;
    }
    function ts(t) {
        const e = t.assignedSlot || t.parentElement;
        if (e !== null) {
            return e;
        }
        const t_parentNode = t.parentNode;
        if (Cs(t_parentNode)) {
            return t_parentNode.host;
        }
        return null;
    }
    function es(t) {
        if (hi(t)) {
            return t;
        }
        if (Rs(t)) {
            return t.ownerDocument;
        }
        return null;
    }
    function ns(t, e) {
        const n = parseFloat(t);
        if (isFinite(n)) {
            if (t.endsWith("%")) {
                return n * e / 100;
            }
            return n;
        }
        return 0;
    }
    function os(t, e, n, o) {
        const e_clientWidth = e.clientWidth;
        const i = e.scrollWidth - e_clientWidth;
        if (i <= 0) {
            return 0;
        }
        const s = t.getComputedStyle(e);
        if (s.overflowX !== "auto" && s.overflowX !== "scroll") {
            return 0;
        }
        const l = e.getBoundingClientRect();
        const e_offsetWidth = e.offsetWidth;
        const a = e_offsetWidth > 0 && Math.abs(l.width - e_offsetWidth) > 1 ? l.width / e_offsetWidth : 1;
        const u = s.direction === "rtl";
        const f = l.left + e.clientLeft * a;
        const d = f + ns(s.scrollPaddingLeft, e_clientWidth) * a;
        const h = f + (e_clientWidth - ns(s.scrollPaddingRight, e_clientWidth)) * a;
        let g = n;
        let p = Math.max(o, n + 1);
        if (p - g > h - d) {
            if (u) {
                g = p - 1;
            } else {
                p = g + 1;
            }
        }
        let _ = 0;
        if (g < d) {
            _ = g - d;
        } else if (p > h) {
            _ = p - h;
        }
        if (_ === 0) {
            return 0;
        }
        const e_scrollLeft = e.scrollLeft;
        const y = e_scrollLeft + _ / a;
        const x = _ > 0 ? Math.ceil(y) : Math.floor(y);
        let S = u ? Math.min(0, Math.max(-i, x)) : Math.max(0, Math.min(i, x));
        const C = e_scrollLeft * a;
        if (Math.abs(S) < Math.abs(e_scrollLeft) && g + C >= d && p + C <= h) {
            S = 0;
        }
        if (S === e_scrollLeft) {
            return 0;
        }
        e.scrollLeft = S;
        return (e.scrollLeft - e_scrollLeft) * a;
    }
    function rs(t) {
        Sc();
        vc()._updateTags.add(t);
    }
    function is(t) {
        Sc();
        vc()._deferred.push(t);
    }
    function ss(t, e) {
        let n = t.getParent();
        while(n !== null){
            if (n.is(e)) {
                return true;
            }
            n = n.getParent();
        }
        return false;
    }
    function ls(t) {
        const e = es(t);
        if (e) {
            return e.defaultView;
        }
        return null;
    }
    function cs({ _window }) {
        if (_window === null) {
            e(78);
        }
        return _window;
    }
    function as(t) {
        return Vo(t) && t.isInline() || Go(t) && t.isInline();
    }
    function us(t) {
        let e = t.getLatest();
        while(e !== null){
            if (Ju(e) !== null && Vo(e)) {
                return e;
            }
            const _t118 = e.getParentOrThrow();
            if (shadowRoot(_t118)) {
                return _t118;
            }
            e = _t118;
        }
        return e;
    }
    function fs(t) {
        return Vo(t) && t.isShadowRoot();
    }
    function shadowRoot(t) {
        return root(t) || fs(t);
    }
    function hs(t, e = false) {
        const n = t.constructor.clone(t, Zr);
        _i(n, null);
        n.afterCloneFrom(t);
        if (!e) {
            n.resetOnCopyNodeFrom(t);
        }
        return n;
    }
    function gs(t) {
        const n = vc();
        const o = t.getType();
        const r = ni(n, o);
        if (r === undefined) {
            e(200, t.constructor.name, o);
        }
        const { replace, replaceWithKlass } = r;
        if (replace !== null) {
            const _n62 = replace(t);
            const _r33 = _n62.constructor;
            if (replaceWithKlass !== null) {
                if (!(_n62 instanceof replaceWithKlass)) {
                    e(201, replaceWithKlass.name, replaceWithKlass.getType(), _r33.name, _r33.getType(), t.constructor.name, o);
                }
            } else if (!(_n62 instanceof t.constructor && _r33 !== t.constructor)) {
                e(202, _r33.name, _r33.getType(), t.constructor.name, o);
            }
            if (_n62.__key === t.__key) {
                e(203, t.constructor.name, o, _r33.name, _r33.getType());
            }
            return _n62;
        }
        return t;
    }
    function ps(t, n) {
        if (!(!root(t.getParent()) || Vo(n) || Go(n))) {
            e(99);
        }
    }
    function _s(t) {
        const n = Ti(t);
        if (n === null) {
            e(63, t);
        }
        return n;
    }
    function ms(t) {
        if (!t || t.isInline()) {
            return false;
        }
        if (Go(t)) {
            return true;
        }
        if (Vo(t)) {
            if (t.isShadowRoot()) {
                const _e93 = t.getParent();
                return !(Vo(_e93) && _e93.isShadowRoot());
            }
            return !t.canBeEmpty();
        }
        return false;
    }
    function ys(t, e, _rootElement) {
        _rootElement.style.removeProperty("caret-color");
        e._blockCursorElement = null;
        const t_parentElement = t.parentElement;
        if (t_parentElement !== null) {
            t_parentElement.removeChild(t);
        }
    }
    function xs(t) {
        if (r) {
            return (t || window).getSelection();
        }
        return null;
    }
    function Ss(t) {
        const e = ls(t);
        if (e) {
            return e.getSelection();
        }
        return null;
    }
    function Cs(t) {
        return Ks(t) && "host" in t;
    }
    const Ts = [];
    function vs(t) {
        const e = t.getRootNode();
        if (e === t || !Cs(e)) {
            return Ts;
        }
        const n = [
            e
        ];
        let e_host = e.host;
        while(true){
            const _t119 = e_host.getRootNode();
            if (_t119 === e_host || !Cs(_t119)) {
                break;
            }
            n.push(_t119);
            e_host = _t119.host;
        }
        return n;
    }
    function* Ns(t) {
        const e = [
            t
        ];
        let n;
        while(n = e.pop()){
            yield* n.querySelectorAll('[data-lexical-editor="true"]');
            const _t120 = (hi(n) ? n : n.ownerDocument).createTreeWalker(n, NodeFilter.SHOW_ELEMENT);
            let _o38;
            while(_o38 = _t120.nextNode()){
                if (_o38.shadowRoot) {
                    e.push(_o38.shadowRoot);
                }
            }
        }
    }
    function bs(t) {
        if (t !== null) {
            return t.ownerDocument;
        }
        return document;
    }
    function ks() {
        const t = kc();
        return bs(t !== null ? t._rootElement : null);
    }
    function Es(t, e) {
        if (e === null || typeof t.getComposedRanges !== "function") {
            return null;
        }
        const shadowRoots = vs(e);
        if (shadowRoots.length === 0) {
            return null;
        }
        const t_getComposedRanges = t.getComposedRanges;
        try {
            const _e94 = t_getComposedRanges.call(t, {
                shadowRoots
            })[0];
            if (_e94 !== undefined) {
                return _e94;
            }
        } catch (t) {}
        try {
            const _e95 = t_getComposedRanges.apply(t, shadowRoots)[0];
            if (_e95 !== undefined) {
                return _e95;
            }
        } catch (t) {}
        return null;
    }
    function Os(t, e) {
        const n = Es(t, e);
        if (n !== null) {
            const _t121 = ws(n);
            if (_t121 !== null) {
                return _t121;
            }
        }
        if (t.rangeCount > 0) {
            return t.getRangeAt(0);
        }
        return null;
    }
    function Ms(t, e) {
        const n = Es(t, e);
        if (n === null) {
            return t;
        }
        return As(n, Ds(t));
    }
    function ws(t) {
        const ownerDocument = t.startContainer.ownerDocument;
        if (ownerDocument === null) {
            return null;
        }
        const n = ownerDocument.createRange();
        try {
            n.setStart(t.startContainer, t.startOffset);
            n.setEnd(t.endContainer, t.endOffset);
            return n;
        } catch (t) {
            return null;
        }
    }
    function As({ startContainer, startOffset, endContainer, endOffset }, e) {
        if (e === "backward") {
            return {
                anchorNode: endContainer,
                anchorOffset: endOffset,
                direction: e,
                focusNode: startContainer,
                focusOffset: startOffset
            };
        }
        return {
            anchorNode: startContainer,
            anchorOffset: startOffset,
            direction: e,
            focusNode: endContainer,
            focusOffset: endOffset
        };
    }
    function Ds(t) {
        return t.direction;
    }
    function Is(t) {
        const e = t.getRootNode();
        if (hi(e) || Cs(e)) {
            return e.activeElement;
        }
        return null;
    }
    function Fs({ activeElement }) {
        while(activeElement !== null && activeElement.shadowRoot !== null){
            const _t122 = activeElement.shadowRoot.activeElement;
            if (_t122 === null) {
                break;
            }
            activeElement = _t122;
        }
        return activeElement;
    }
    function Ps(t) {
        const t_target = t.target;
        if (t_target !== null && Rs(t_target) && t_target.shadowRoot !== null && typeof t.composedPath === "function") {
            const _e96 = t.composedPath();
            if (_e96.length > 0) {
                return _e96[0];
            }
        }
        return t_target;
    }
    function Rs(t) {
        return Ls(t) && t.nodeType === 1;
    }
    function Ls(t) {
        return typeof t === "object" && t !== null && "nodeType" in t && typeof t.nodeType === "number";
    }
    function Ks(t) {
        return Ls(t) && t.nodeType === 11;
    }
    var Bs = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/i;
    function $s(t) {
        return !(!Rs(t) || !t.style.display.startsWith("inline")) || Bs.test(t.nodeName);
    }
    const zs = /^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/i;
    function Ws(t) {
        return (!Rs(t) || !t.style.display.startsWith("inline")) && zs.test(t.nodeName);
    }
    function Us(t) {
        if (Go(t) && !t.isInline()) {
            return true;
        }
        if (!Vo(t) || shadowRoot(t)) {
            return false;
        }
        const e = t.getFirstChild();
        const n = e === null || Xl(e) || Sr(e) || e.isInline();
        return !t.isInline() && t.canBeEmpty() !== false && n;
    }
    function js() {
        return vc();
    }
    function Hs(t = js()) {
        return t._config.dom || rc;
    }
    function Vs(t, n, o = js()) {
        const r = Hs(o).$getDOMSlot(t, n, o);
        if (Vo(t)) {
            if (!Ys(r)) {
                e(344, t.getKey(), t.getType());
            }
        }
        return r;
    }
    function Ys(t) {
        return t instanceof _ae;
    }
    function Js(t, e, n = js()) {
        return gi(Vs(t, e, n).element);
    }
    const Gs = new WeakMap();
    const qs = new Map();
    function Xs(t) {
        if (!t._readOnly && t.isEmpty()) {
            return qs;
        }
        if (!t._readOnly) {
            e(192);
        }
        let n = Gs.get(t);
        if (!n) {
            n = ((t)=>{
                const e = new Map();
                for (const [_n63, _o39] of t._nodeMap){
                    {
                        const _t123 = _o39.__type;
                        let _r34 = e.get(_t123);
                        if (!_r34) {
                            _r34 = new Map();
                            e.set(_t123, _r34);
                        }
                        _r34.set(_n63, _o39);
                    }
                }
                return e;
            })(t);
            Gs.set(t, n);
        }
        return n;
    }
    function Qs(t) {
        const e = t.constructor.clone(t, Zr);
        e.afterCloneFrom(t);
        return e;
    }
    function Zs(t, e) {
        const n = t.getAttribute("data-lexical-indent");
        if (n !== null) {
            const _t124 = parseInt(n, 10);
            if (Number.isFinite(_t124) && _t124 >= 0) {
                return void e.setIndent(_t124);
            }
        }
        const o = parseInt(t.style.paddingInlineStart, 10) || 0;
        const r = Math.round(o / 40);
        e.setIndent(r);
    }
    function tl(t, e) {
        const n = e.getAttribute("dir");
        if (n === "ltr" || n === "rtl") {
            return t.setDirection(n);
        }
        return t;
    }
    function el(t, e) {
        const textAlign = e.style.textAlign;
        if (textAlign && textAlign in D) {
            return t.setFormat(textAlign);
        }
        return t;
    }
    function nl(t, e) {
        t.__lexicalUnmanaged = true;
        if (e && e.captureSelection !== undefined) {
            t.__lexicalCapturedSelection = e.captureSelection;
        }
    }
    function ol(t) {
        return t.__lexicalUnmanaged === true;
    }
    function rl(t, e = js()) {
        const n = e.isEditable();
        t.contentEditable = n ? "true" : "false";
        if (n) {
            t.__lexicalEditor = e;
        } else {
            delete t.__lexicalEditor;
        }
    }
    function il(t, e) {
        let n = t;
        while(n != null){
            if (n.__lexicalCapturedSelection === true) {
                return true;
            }
            if (Rs(n) && n.hasAttribute("data-lexical-slot")) {
                return false;
            }
            if (bi(n, e) !== undefined) {
                return false;
            }
            n = ts(n);
        }
        return false;
    }
    function sl(t, e) {
        return je(t, e) && t[e] !== _vo5[e];
    }
    var ll = new WeakMap();
    function cl(t) {
        const n = ll.get(t);
        if (n !== undefined) {
            return n;
        }
        return ((t)=>{
            const n = t.prototype != null && B in t.prototype ? t.prototype[B]() : undefined;
            const o = ((t)=>{
                if (!(t === _vo5 || t.prototype instanceof _vo5)) {
                    let _n64 = "<unknown>";
                    let _o40 = "<unknown>";
                    try {
                        _n64 = t.getType();
                    } catch (t) {}
                    try {
                        if (_lc.version) {
                            _o40 = JSON.parse(_lc.version);
                        }
                    } catch (t) {}
                    e(290, t.name, _n64, _o40);
                }
                return t === _Jo || t === _Ho4 || t === _vo5;
            })(t);
            const r = !o && sl(t, "getType") ? t.getType : undefined;
            const i = r && !(ul in r) ? r.call(t) : undefined;
            let ownNodeConfig;
            let ownNodeType = i;
            if (n) {
                if (i) {
                    ownNodeConfig = n[i];
                } else {
                    for (const [_t125, _e97] of Object.entries(n)){
                        ownNodeType = _t125;
                        ownNodeConfig = _e97;
                    }
                    if (!ownNodeConfig) {
                        for (const _t126 of Object.getOwnPropertySymbols(n)){
                            const _e98 = n[_t126];
                            if (_e98) {
                                ownNodeConfig = _e98;
                                break;
                            }
                        }
                    }
                }
            }
            const c = {
                compiled: undefined,
                composed: undefined,
                config: {
                    declaresOwnConfig: je(t.prototype, B),
                    klass: t,
                    ownNodeConfig,
                    ownNodeType
                },
                ownFieldsValidated: false
            };
            ll.set(t, c);
            try {
                const setters = ((t)=>{
                    const t_prototype = t.prototype;
                    const o = new Map();
                    const _ml = ml(t);
                    const _ml_fieldsBaseFirst = _ml.fieldsBaseFirst;
                    for (const [_i23, _s12] of _ml_fieldsBaseFirst){
                        {
                            const _r36 = Sl(t, _i23, _s12);
                            if (_r36 === null) {
                                continue;
                            }
                            if (Ne(_r36)) {
                                const _n66 = _r36.field;
                                if (_n66 === "__proto__") {
                                    e(430, t.name, _i23);
                                }
                                if (_r36.setterTable !== undefined) {
                                    const _n67 = _r36.setterTable;
                                    const _o41 = _s12.meta;
                                    for (const _r37 of _o41.kind === "enum" ? _o41.values : [
                                        _s12.defaultValue
                                    ]){
                                        if (!je(_n67, String(_r37))) {
                                            e(431, t.name, _i23, JSON.stringify(_r37));
                                        }
                                    }
                                }
                                o.set(_i23, {
                                    field: _n66,
                                    key: _i23,
                                    kind: "ownField",
                                    schema: _s12,
                                    setterTable: _r36.setterTable
                                });
                                continue;
                            }
                            const setter = t_prototype[_r36];
                            if (typeof setter !== "function") {
                                e(432, t.name, _i23, _r36);
                            }
                            o.set(_i23, {
                                key: _i23,
                                kind: "field",
                                schema: _s12,
                                setter
                            });
                        }
                    }
                    if (o.size === 0) {
                        return fl;
                    }
                    return [].concat(Array.from(o.values()));
                })(t);
                const getters = ((t)=>{
                    const t_prototype = t.prototype;
                    const o = new Map();
                    for (const [_r38, _i24] of ml(t).fieldsDerivedFirst){
                        {
                            const _s13 = xl(t, _r38, _i24);
                            if (_s13 === null) {
                                continue;
                            }
                            if (Ne(_s13)) {
                                const _l0 = _s13.field;
                                if (_l0 === "__proto__") {
                                    e(426, t.name, _r38);
                                }
                                const _c8 = _s13.when;
                                let when;
                                if (_c8 !== undefined) {
                                    const _o42 = t_prototype[_c8];
                                    if (typeof _o42 !== "function") {
                                        e(427, t.name, _r38, _c8);
                                    }
                                    when = _o42;
                                }
                                o.set(_r38, {
                                    defaultValue: _i24.defaultValue,
                                    derived: _i24.setter === null,
                                    field: _l0,
                                    getterTable: _s13.getterTable,
                                    isEqual: _i24.isEqual,
                                    key: _r38,
                                    kind: "ownField",
                                    schema: _i24,
                                    when
                                });
                                continue;
                            }
                            const getter = t_prototype[_s13];
                            if (typeof getter !== "function") {
                                e(428, t.name, _r38, _s13);
                            }
                            o.set(_r38, {
                                defaultValue: _i24.defaultValue,
                                derived: _i24.setter === null,
                                getter,
                                isEqual: _i24.isEqual,
                                key: _r38,
                                kind: "method",
                                schema: _i24
                            });
                        }
                    }
                    if (o.size === 0) {
                        return yl;
                    }
                    return [].concat(Array.from(o.values()));
                })(t);
                const _i22 = ml(t);
                const _a5 = ((t, n)=>{
                    const e = 0;
                    let o;
                    let r = t;
                    for (const _ref44 of Al(t)){
                        const { klass, ownNodeConfig } = _ref44;
                        if (ownNodeConfig && ownNodeConfig.generated !== undefined) {
                            if (o === undefined) {
                                o = ownNodeConfig.generated;
                                r = klass;
                            } else if (ownNodeConfig.generated === o) {
                                r = klass;
                            }
                        }
                    }
                    if (o === undefined) {
                        return null;
                    }
                    if (r === t || ((t, e)=>{
                        if (t.getters.length !== e.getters.length || t.setters.length !== e.setters.length) {
                            return false;
                        }
                        for(let _n69 = 0; _n69 < t.getters.length; _n69++){
                            const getter = t.getters[_n69];
                            const _r39 = e.getters[_n69];
                            if (getter.kind !== _r39.kind || getter.key !== _r39.key || getter.schema !== _r39.schema || getter.derived !== _r39.derived || getter.isEqual !== _r39.isEqual || !Object.is(getter.defaultValue, _r39.defaultValue) || getter.kind === "ownField" && _r39.kind === "ownField" && (getter.field !== _r39.field || getter.getterTable === undefined != (_r39.getterTable === undefined))) {
                                return false;
                            }
                        }
                        for(let _n70 = 0; _n70 < t.setters.length; _n70++){
                            const setter = t.setters[_n70];
                            const _r40 = e.setters[_n70];
                            if (setter.kind !== _r40.kind || setter.key !== _r40.key || setter.schema !== _r40.schema || setter.kind === "ownField" && _r40.kind === "ownField" && (setter.field !== _r40.field || setter.setterTable === undefined != (_r40.setterTable === undefined))) {
                                return false;
                            }
                        }
                        return true;
                    })(n, al(cl(r)))) {
                        return o;
                    }
                    return null;
                })(t, {
                    getters,
                    setters
                });
                c.compiled = {
                    flatStates: _i22.flatStates,
                    generated: _a5 === null ? null : _a5(_i22.fields),
                    getters,
                    isCompactDefault: vl(getters),
                    setters
                };
                ((t, e, ownNodeType_1, ownNodeConfig_1)=>{
                    if (!e && ownNodeType_1) {
                        if (!sl(t, "getType")) {
                            const _e100 = t;
                            const _o45 = function _o45() {
                                if (this !== _e100) {
                                    return _vo5.getType.call(this);
                                }
                                return ownNodeType_1;
                            };
                            _o45[ul] = true;
                            t.getType = _o45;
                        }
                        if (!sl(t, "clone")) {
                            t.clone = function(e, n) {
                                Qr(e);
                                const o = new t();
                                if (n !== Zr) {
                                    o.afterCloneFrom(e);
                                }
                                return o;
                            };
                        }
                        if (!sl(t, "importJSON")) {
                            t.importJSON = ownNodeConfig_1 && ownNodeConfig_1.$importJSON || ((t)=>function(e) {
                                    const n = Dl(t);
                                    if (n.updateFromJSON === _vo5.prototype.updateFromJSON) {
                                        return ((t, e)=>bl(t.__state || e[L] !== undefined ? hn(t, e) : t, e))(n, e);
                                    }
                                    return n.updateFromJSON(e);
                                })(t);
                        }
                        if (!sl(t, "importDOM") && ownNodeConfig_1) {
                            const _e101 = ownNodeConfig_1.importDOM;
                            if (_e101) {
                                t.importDOM = function() {
                                    return _e101;
                                };
                            }
                        }
                        const _e102 = t.prototype;
                        if (je(_e102, "getTextContent") && !je(_e102, "getTextContentSize")) {
                            t.prototype.getTextContentSize = _vo5.prototype.getTextContentSize;
                        }
                    }
                })(t, o, ownNodeType, ownNodeConfig);
                ((t)=>{
                    const _loop2 = function _loop2() {
                        const { klass, ownNodeConfig } = _ref46;
                        {
                            const _t127 = klass.prototype;
                            if (je(_t127, "afterCloneFrom")) {
                                return 0;
                            }
                            const _o46 = wl(klass);
                            if (_o46.length === 0) {
                                return 0;
                            }
                            const _r41 = Object.getPrototypeOf(_t127);
                            const _i25 = ownNodeConfig && ownNodeConfig.generated !== undefined ? al(cl(klass)).generated : null;
                            const _s14 = _i25 !== null && _i25.afterCloneFrom || ((t, e)=>{
                                const n = t;
                                for (const _e103 of _o46){
                                    n[_e103] = e[_e103];
                                }
                            });
                            _t127.afterCloneFrom = function(t) {
                                _r41.afterCloneFrom.call(this, t);
                                _s14(this, t);
                            };
                            _t127.afterCloneFrom[Ol] = true;
                        }
                    };
                    let _ret;
                    for (var _ref46 of Al(t)){
                        _ret = _loop2();
                        if (_ret === 0) {
                            continue;
                        }
                    }
                })(t);
            } catch (error) {
                ll.delete(t);
                throw error;
            }
            return c;
        })(t);
    }
    function al(t) {
        const t_compiled = t.compiled;
        if (t_compiled === undefined) {
            e(422, t.config.klass.name);
        }
        return t_compiled;
    }
    var ul = Symbol("lexical.synthesizedGetType");
    var fl = [];
    function dl(t, e, n, o) {
        const r = n.method === undefined ? o : n.method;
        const i = ml(t).declaredBy.get(e);
        if (i === undefined) {
            return n;
        }
        const t_prototype = t.prototype;
        const i_prototype = i.prototype;
        if (hl(t_prototype, i_prototype, r) && hl(t_prototype, i_prototype, o)) {
            return n;
        }
        return r;
    }
    function hl(t, e, n) {
        return t[n] === e[n];
    }
    function gl(t) {
        return `set${t.charAt(0).toUpperCase()}${t.slice(1)}`;
    }
    function pl(t) {
        return `get${t.charAt(0).toUpperCase()}${t.slice(1)}`;
    }
    var _l = {
        declaredBy: new Map(),
        fields: new Map(),
        fieldsBaseFirst: [],
        fieldsDerivedFirst: [],
        flatStates: []
    };
    function ml(t) {
        const e = cl(t);
        if (e.composed === undefined) {
            e.composed = ((t)=>{
                const e = [];
                const n = [];
                const o = [];
                for (const _ref48 of Al(t)){
                    const { klass, ownNodeConfig } = _ref48;
                    {
                        const _t129 = ownNodeConfig && ownNodeConfig.json;
                        n.push(klass);
                        e.push(_t129 && _t129.meta.kind === "node" ? Object.entries(_t129.meta.fields) : []);
                        const _s15 = [];
                        if (ownNodeConfig && ownNodeConfig.stateConfigs) {
                            for (const _t130 of ownNodeConfig.stateConfigs){
                                if ("stateConfig" in _t130 && _t130.flat) {
                                    _s15.push(_t130.stateConfig);
                                }
                            }
                        }
                        o.push(_s15);
                    }
                }
                const r = new Map();
                for(let _t131 = 0; _t131 < e.length; _t131++){
                    for (const [_n71, _o47] of e[_t131]){
                        if (!r.has(_n71)) {
                            r.set(_n71, _o47);
                        }
                    }
                }
                const i = new Map();
                const declaredBy = new Map();
                const l = new Map();
                for(let _t132 = e.length - 1; _t132 >= 0; _t132--){
                    for (const [_o48, _l10] of e[_t132]){
                        {
                            const _e104 = r.get(_o48);
                            if (!(_e104 === undefined || i.has(_o48))) {
                                i.set(_o48, _e104);
                            }
                            if (!(_e104 === undefined || _l10 !== _e104 || declaredBy.has(_o48))) {
                                declaredBy.set(_o48, n[_t132]);
                            }
                        }
                    }
                    for (const _e105 of o[_t132]){
                        if (!l.has(_e105.key)) {
                            l.set(_e105.key, _e105);
                        }
                    }
                }
                if (r.size === 0 && l.size === 0) {
                    return _l;
                }
                return {
                    declaredBy,
                    fields: i,
                    fieldsBaseFirst: [].concat(Array.from(i)),
                    fieldsDerivedFirst: [].concat(Array.from(r)),
                    flatStates: [].concat(Array.from(l.values()))
                };
            })(t);
        }
        return e.composed;
    }
    var yl = [];
    function xl(t, e, { getter }) {
        if (getter === null) {
            return null;
        }
        const r = getter === undefined ? pl(e) : getter;
        if (Ne(r)) {
            return dl(t, e, r, pl(e));
        }
        return r;
    }
    function Sl(t, e, { setter }) {
        if (setter === null) {
            return null;
        }
        const r = setter === undefined ? gl(e) : setter;
        if (Ne(r)) {
            return dl(t, e, r, gl(e));
        }
        return r;
    }
    function Cl(t) {
        return t;
    }
    function Tl({ defaultValue, isEqual }, e) {
        return e === undefined || e === defaultValue || isEqual !== undefined && isEqual(e, defaultValue);
    }
    function vl(getters) {
        let e;
        return function(n, o) {
            if (e === undefined) {
                e = new Map(getters.map((t)=>[
                        t.key,
                        t
                    ]));
            }
            const r = e.get(n);
            return r !== undefined && Tl(r, o);
        };
    }
    function Nl({ setterTable, schema }) {
        const schema_defaultValue = schema.defaultValue;
        if (setterTable === undefined) {
            return schema_defaultValue;
        }
        return setterTable[String(schema_defaultValue)];
    }
    function bl(t, e) {
        const n = cl(t.constructor);
        const _al = al(n);
        const { flatStates, generated, setters } = _al;
        const s = ((t, e, flatStates_1)=>{
            let o = t;
            const _loop3 = function _loop3() {
                const r = flatStates_1[_t133];
                const i = e[r.key];
                if (i !== undefined) {
                    const _t134 = r.parse(i);
                    o = cn(o, r, function() {
                        return _t134;
                    });
                }
            };
            for(var _t133 = 0; _t133 < flatStates_1.length; _t133++){
                _loop3();
            }
            return o;
        })(t, e, flatStates);
        if (generated !== null && generated.updateFromJSON !== undefined) {
            return generated.updateFromJSON(s, e);
        }
        return ((t, e, setters_1)=>{
            for (const _r43 of setters_1){
                const _i27 = _r43.schema(e[_r43.key]);
                if (_r43.kind === "ownField") {
                    Cl(t)[_r43.field] = _r43.setterTable === undefined ? _i27 : je(_r43.setterTable, _i27) ? _r43.setterTable[_i27] : Nl(_r43);
                } else {
                    _r43.setter.call(t, _i27);
                }
            }
            return t;
        })(s, e, setters);
    }
    function kl(t) {
        return cl(t).config;
    }
    function El(t) {
        const e = [];
        for (const _n72 of [
            t.getter,
            t.setter
        ]){
            if (Ne(_n72) && _n72.field !== "__proto__" && !e.includes(_n72.field)) {
                e.push(_n72.field);
            }
        }
        return e;
    }
    var Ol = "__lexicalSynthesizedAfterCloneFrom";
    function Ml(t) {
        const _ml2 = ml(t);
        const { declaredBy, fieldsBaseFirst } = _ml2;
        const o = [];
        for (const [_r44, _i28] of fieldsBaseFirst){
            if (declaredBy.get(_r44) === t) {
                for (const _t135 of El(_i28)){
                    if (!o.includes(_t135)) {
                        o.push(_t135);
                    }
                }
            }
        }
        return o;
    }
    function wl(klass) {
        const e = Ml(klass);
        if (e.length === 0) {
            return e;
        }
        const n = new Set();
        for (const _ref56 of Al(klass)){
            const _e106 = _ref56.klass;
            if (_e106 !== klass) {
                for (const _t136 of Ml(_e106)){
                    n.add(_t136);
                }
            }
        }
        if (n.size === 0) {
            return e;
        }
        return e.filter((t)=>!n.has(t));
    }
    function* Al(t) {
        for(let _e107 = t; _e107 && (_e107 === _vo5 || No(_e107.prototype));){
            const _t137 = kl(_e107);
            const _n73 = _t137.declaresOwnConfig;
            yield _n73 ? _t137 : babelHelpers.extends({}, _t137, {
                ownNodeConfig: undefined
            });
            _e107 = _n73 && _t137.ownNodeConfig && _t137.ownNodeConfig.extends || Pl(_e107);
        }
    }
    function Dl(t) {
        const e = js();
        Sc();
        const n = e.resolveRegisteredNodeAfterReplacements(e.getRegisteredNode(t));
        const o = new n.klass();
        if (n.replace === null) {
            return o;
        }
        return gs(o);
    }
    const Il = function Il(t, e) {
        let n = t;
        while(n != null && !root(n)){
            if (e(n)) {
                return n;
            }
            n = n.getParent();
        }
        return null;
    };
    function Fl(t, n) {
        const o = [];
        let t___first = t.__first;
        while(t___first !== null){
            const _t138 = n === null ? Ti(t___first) : n.get(t___first);
            if (_t138 == null) {
                e(174);
            }
            o.push(t___first);
            t___first = _t138.__next;
        }
        return o;
    }
    function Pl(t) {
        const e = Object.getPrototypeOf(t);
        if (typeof e === "function" && e !== Function.prototype) {
            return e;
        }
        const n = t.prototype && Object.getPrototypeOf(t.prototype);
        if (n) {
            return n.constructor;
        }
        return null;
    }
    function Rl(t) {
        return new _Bl(qt(t._nodeMap), null, t._slotsUsed);
    }
    function Ll() {
        return new _Bl(new Map([
            [
                "root",
                new _Xo()
            ]
        ]), null, false);
    }
    function Kl(t) {
        const t_constructor = t.constructor;
        const o = ee(t);
        if (Vo(t)) {
            const _e108 = o.children;
            const _n74 = t.getChildren();
            for(let _t139 = 0; _t139 < _n74.length; _t139++){
                _e108.push(Kl(_n74[_t139]));
            }
        }
        const r = tf(t);
        if (r.length > 0) {
            const _i29 = {};
            for (const _o50 of r){
                const _r45 = ef(t, _o50);
                if (_r45 === null) {
                    e(366, t_constructor.name, _o50);
                }
                _i29[_o50] = Kl(_r45);
            }
            o.$slots = _i29;
        }
        return o;
    }
    var _Bl = (()=>{
        function Bl(t, e = null, n = false) {
            this._nodeMap = t;
            this._movedNodes = null;
            this._selection = e || null;
            this._flushSync = false;
            this._readOnly = false;
            this._parsed = false;
            this._slotsUsed = n;
        }
        const _proto12 = Bl.prototype;
        _proto12.isEmpty = function isEmpty() {
            return this._nodeMap.size <= 1 && this._selection === null;
        };
        _proto12.read = function read(t, e) {
            return Ac(e && e.editor || null, this, t);
        };
        _proto12.clone = function clone(t) {
            const e = new Bl(this._nodeMap, t === undefined ? this._selection : t, this._slotsUsed);
            e._readOnly = true;
            e._parsed = this._parsed;
            return e;
        };
        _proto12.toJSON = function toJSON(t) {
            const _this15 = this;
            return Zt(typeof t === "boolean" && t, ()=>Ac(null, _this15, ()=>({
                        root: Kl(Mi())
                    })));
        };
        return Bl;
    })();
    const tag = "history-merge";
    const zl = "collaboration";
    const Wl = "skip-scroll-into-view";
    const Ul = "skip-dom-selection";
    const jl = "skip-selection-focus";
    const Hl = "composition-start";
    const Vl = "composition-end";
    const _Yl = ((_Ho3)=>{
        function Yl() {
            return _Ho3.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(Yl, _Ho3);
        const _proto13 = Yl.prototype;
        _proto13.$config = function $config() {
            return this.config("artificial", {
                extends: _Ho4
            });
        };
        _proto13.createDOM = function createDOM(t) {
            return ks().createElement("div");
        };
        return Yl;
    })(_Ho4);
    var _Jl = ((_vo4)=>{
        function Jl() {
            return _vo4.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(Jl, _vo4);
        const _proto14 = Jl.prototype;
        _proto14.$config = function $config() {
            return this.config("linebreak", {
                extends: _vo5,
                generated: Lo,
                importDOM: {
                    br: function br(t) {
                        if (Ql(t) || Zl(t)) {
                            return null;
                        }
                        return {
                            conversion: Gl,
                            priority: 0
                        };
                    }
                }
            });
        };
        _proto14.getTextContent = function getTextContent() {
            return "\n";
        };
        _proto14.createDOM = function createDOM() {
            return ks().createElement("br");
        };
        _proto14.updateDOM = function updateDOM() {
            return false;
        };
        _proto14.isInline = function isInline() {
            return true;
        };
        return Jl;
    })(_vo5);
    function Gl(t) {
        return {
            node: ql()
        };
    }
    function ql() {
        return gs(new _Jl());
    }
    function Xl(t) {
        return t instanceof _Jl;
    }
    function Ql(t) {
        const t_parentElement = t.parentElement;
        if (t_parentElement !== null && Ws(t_parentElement)) {
            const _n75 = t_parentElement.firstChild;
            if (_n75 === t || _n75.nextSibling === t && tc(_n75)) {
                const _n76 = t_parentElement.lastChild;
                if (_n76 === t || _n76.previousSibling === t && tc(_n76)) {
                    return true;
                }
            }
        }
        return false;
    }
    function Zl(t) {
        const t_parentElement = t.parentElement;
        if (t_parentElement !== null && Ws(t_parentElement)) {
            const _n77 = t_parentElement.firstChild;
            if (_n77 === t || _n77.nextSibling === t && tc(_n77)) {
                return false;
            }
            const _o51 = t_parentElement.lastChild;
            if (_o51 === t || _o51.previousSibling === t && tc(_o51)) {
                return true;
            }
        }
        return false;
    }
    function tc(t) {
        return di(t) && /^( |\t|\r?\n)+$/.test(t.textContent || "");
    }
    function ec(t) {
        console.warn(t);
    }
    function nc(t, e, n, o, r) {
        const t__keyToDOMMap = t._keyToDOMMap;
        t__keyToDOMMap.clear();
        t._editorState = Ll();
        t._pendingEditorState = o;
        t._compositionKey = null;
        t._dirtyType = 0;
        t._cloneNotNeeded.clear();
        t._dirtyLeaves = new Set();
        t._dirtyElements.clear();
        t._normalizedNodes = new Set();
        if (!(r && r.preserveUpdateQueue)) {
            t._updateTags = new Set();
            t._updates = [];
            t._cascadeCount = 0;
        }
        t._blockCursorElement = null;
        if (t._inputState.handledSelectionCommandTimeoutId !== null) {
            clearTimeout(t._inputState.handledSelectionCommandTimeoutId);
        }
        if (e !== null) {
            oa(t, e);
        }
        t._inputState = {
            collapsedSelectionFormat: {
                format: 0,
                key: "root",
                offset: 0,
                style: "",
                timeStamp: 0
            },
            composedSegmentedKey: null,
            compositionEndData: "",
            compositionPhase: "idle",
            hadOrphanedCompositionEvents: false,
            handledSelectionCommandTimeoutId: null,
            isInsertLineBreak: false,
            isInsertTextAfterHandledSelectionCommand: false,
            isSelectionChangeFromDOMUpdate: false,
            isSelectionChangeFromMouseDown: false,
            isShiftKeyDown: false,
            lastBeforeInputInsertTextTimeStamp: 0,
            lastKeyCode: null,
            lastKeyDownTimeStamp: 0,
            lastPointerType: "",
            mouseDrag: null,
            postDeleteSelectionToRestore: null,
            savedInputMode: undefined,
            selectionChangeFromDOMUpdatePoints: null,
            unprocessedBeforeInputData: null
        };
        const t__observer = t._observer;
        if (t__observer !== null) {
            t__observer.disconnect();
            t._observer = null;
        }
        if (e !== null) {
            e.textContent = "";
            ((t, e)=>{
                delete t[`__lexicalKey_${e._key}`];
            })(e, t);
        }
        if (n !== null) {
            n.textContent = "";
            t__keyToDOMMap.set("root", n);
            Ni(n, t, "root");
        }
    }
    function oc(t) {
        const e = new Set();
        const n = new Set();
        for (const _ref58 of Al(t)){
            const { klass, ownNodeConfig } = _ref58;
            {
                const _t140 = klass.transform;
                if (!n.has(_t140)) {
                    n.add(_t140);
                    const _r47 = klass.transform();
                    if (_r47) {
                        e.add(_r47);
                    }
                }
                if (ownNodeConfig) {
                    const _t141 = ownNodeConfig.$transform;
                    if (_t141) {
                        e.add(_t141);
                    }
                }
            }
        }
        return e;
    }
    var rc = {
        $createDOM: function $createDOM(t, e) {
            return t.createDOM(e._config, e);
        },
        $decorateDOM: function $decorateDOM(t, e, n, o) {},
        $exportDOM: function $exportDOM(t, e) {
            const n = ni(e, t.getType());
            if (n && n.exportDOM !== undefined) {
                return n.exportDOM(e, t);
            }
            return t.exportDOM(e);
        },
        $extractWithChild: function $extractWithChild(t, e, n, o, r) {
            return Vo(t) && t.extractWithChild(e, n, o);
        },
        $getDOMSlot: function $getDOMSlot(t, e, n) {
            return t.getDOMSlot(e);
        },
        $getSlotTargetElement: function $getSlotTargetElement(t, e, n, o) {
            return null;
        },
        $shouldExclude: function $shouldExclude(t, e, n) {
            return Vo(t) && t.excludeFromCopy("html");
        },
        $shouldInclude: function $shouldInclude(t, e, n) {
            return !e || t.isSelected(e);
        },
        $updateDOM: function $updateDOM(t, e, n, o) {
            return t.updateDOM(e, n, o._config);
        }
    };
    function ic(t, e) {
        const n = t.get(e);
        t.delete(e);
        if (n) {
            n();
        }
    }
    function sc(t, e, n) {
        t.set(e, n);
        return ic.bind(null, t, e);
    }
    class _lc {
        constructor(t, e, n, o, r, i, s, l, c){
            this._createEditorArgs = c;
            this._parentEditor = e;
            this._rootElement = null;
            this._editorState = t;
            this._pendingEditorState = null;
            this._compositionKey = null;
            this._deferred = [];
            this._keyToDOMMap = new _Xt();
            this._updates = [];
            this._updating = false;
            this._cascadeCount = 0;
            this._listeners = {
                decorator: new Map(),
                editable: new Map(),
                mutation: new Map(),
                root: new Map(),
                textcontent: new Map(),
                update: new Map()
            };
            this._commands = new Map();
            this._config = o;
            this._nodes = n;
            this._decorators = {};
            this._pendingDecorators = null;
            this._dirtyType = 0;
            this._cloneNotNeeded = new Map();
            this._dirtyLeaves = new Set();
            this._dirtyElements = new Map();
            this._normalizedNodes = new Set();
            this._updateTags = new Set();
            this._observer = null;
            this._key = Li();
            this._onError = r;
            this._onWarn = i;
            this._htmlConversions = s;
            this._editable = l;
            this._headless = e !== null && e._headless;
            this._recordNodeMoves = false;
            this._window = null;
            this._blockCursorElement = null;
            this._slotsUsed = false;
            this._keyDownShortcuts = null;
            this._inputState = {
                collapsedSelectionFormat: {
                    format: 0,
                    key: "root",
                    offset: 0,
                    style: "",
                    timeStamp: 0
                },
                composedSegmentedKey: null,
                compositionEndData: "",
                compositionPhase: "idle",
                hadOrphanedCompositionEvents: false,
                handledSelectionCommandTimeoutId: null,
                isInsertLineBreak: false,
                isInsertTextAfterHandledSelectionCommand: false,
                isSelectionChangeFromDOMUpdate: false,
                isSelectionChangeFromMouseDown: false,
                isShiftKeyDown: false,
                lastBeforeInputInsertTextTimeStamp: 0,
                lastKeyCode: null,
                lastKeyDownTimeStamp: 0,
                lastPointerType: "",
                mouseDrag: null,
                postDeleteSelectionToRestore: null,
                savedInputMode: undefined,
                selectionChangeFromDOMUpdatePoints: null,
                unprocessedBeforeInputData: null
            };
            this._lastNotifiedSelection = null;
        }
        isComposing() {
            return this._compositionKey != null;
        }
        registerUpdateListener(t) {
            return sc(this._listeners.update, t);
        }
        registerEditableListener(t) {
            return sc(this._listeners.editable, t);
        }
        registerDecoratorListener(t) {
            return sc(this._listeners.decorator, t);
        }
        registerTextContentListener(t) {
            return sc(this._listeners.textcontent, t);
        }
        registerRootListener(t) {
            const _this16 = this;
            const root = this._listeners.root;
            return $c(sc(root, t, t(this._rootElement, null) || undefined), function() {
                return ((root_1, e, n)=>{
                    const o = root_1.get(e);
                    if (o) {
                        o();
                    }
                    root_1.set(e, e(...Array.from(n)) || undefined);
                })(root, t, [
                    null,
                    _this16._rootElement
                ]);
            });
        }
        registerCommand(t, n, o) {
            if (o === undefined) {
                e(35);
            }
            const _commands = this._commands;
            if (!_commands.has(t)) {
                _commands.set(t, [
                    new _Jt(),
                    new _Jt(),
                    new _Jt(),
                    new _Jt(),
                    new _Jt()
                ]);
            }
            const i = _commands.get(t);
            if (i === undefined) {
                e(36, String(t));
            }
            const s = ((t)=>7 & t)(o);
            const l = i[s];
            if (s !== o) {
                l.addFront(n);
            } else {
                l.addBack(n);
            }
            return function() {
                l.delete(n);
                if (i.every((t)=>t.size === 0)) {
                    _commands.delete(t);
                }
            };
        }
        registerMutationListener(t, e, n) {
            const klass = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(t)).klass;
            const mutation = this._listeners.mutation;
            let i = mutation.get(e);
            if (i === undefined) {
                i = new Set();
                mutation.set(e, i);
            }
            i.add(klass);
            const s = n && n.skipInitialization;
            if (!(s !== undefined && s)) {
                this.initializeMutationListener(e, klass);
            }
            return function() {
                i.delete(klass);
                if (i.size === 0) {
                    mutation.delete(e);
                }
            };
        }
        getRegisteredNode(t) {
            const n = this._nodes.get(t.getType());
            if (n === undefined) {
                e(37, t.name);
            }
            return n;
        }
        resolveRegisteredNodeAfterReplacements(t) {
            while(t.replaceWithKlass){
                t = this.getRegisteredNode(t.replaceWithKlass);
            }
            return t;
        }
        initializeMutationListener(t, e) {
            const _editorState = this._editorState;
            const o = Xs(_editorState).get(e.getType());
            if (!o) {
                return;
            }
            const r = new Map();
            for (const _t142 of o.keys()){
                r.set(_t142, "created");
            }
            if (r.size > 0) {
                t(r, {
                    dirtyLeaves: new Set(),
                    prevEditorState: _editorState,
                    updateTags: new Set([
                        "registerMutationListener"
                    ])
                });
            }
        }
        registerNodeTransformToKlass(t, e) {
            const n = this.getRegisteredNode(t);
            n.transforms.add(e);
            return n;
        }
        registerNodeTransform(t, e) {
            const n = this.registerNodeTransformToKlass(t, e);
            const o = [
                n
            ];
            const n_replaceWithKlass = n.replaceWithKlass;
            if (n_replaceWithKlass != null) {
                const _t143 = this.registerNodeTransformToKlass(n_replaceWithKlass, e);
                o.push(_t143);
            }
            ((t, e)=>{
                const n = Xs(t.getEditorState());
                const o = [];
                for (const _t144 of e){
                    const _e109 = n.get(_t144);
                    if (_e109) {
                        o.push(_e109);
                    }
                }
                if (o.length !== 0) {
                    t.update(function() {
                        for (const _t145 of o){
                            for (const _e110 of _t145.keys()){
                                const _t146 = Ti(_e110);
                                if (_t146) {
                                    _t146.markDirty();
                                }
                            }
                        }
                    }, t._pendingEditorState === null ? {
                        tag
                    } : undefined);
                }
            })(this, o.map((t)=>t.klass.getType()));
            return function() {
                o.forEach((t)=>t.transforms.delete(e));
            };
        }
        hasNode(t) {
            return this._nodes.has(t.getType());
        }
        hasNodes(t) {
            return t.every(this.hasNode.bind(this));
        }
        dispatchCommand(t, ...e) {
            return Qi(...[
                this,
                t
            ].concat(Array.from(e)));
        }
        getDecorators() {
            return this._decorators;
        }
        getRootElement() {
            return this._rootElement;
        }
        getKey() {
            return this._key;
        }
        setRootElement(t) {
            const _rootElement = this._rootElement;
            if (t !== _rootElement) {
                const _o53 = Yi(this._config.theme, "root");
                const _r48 = this._pendingEditorState || this._editorState;
                this._rootElement = t;
                nc(this, _rootElement, t, _r48, {
                    preserveUpdateQueue: true
                });
                if (_rootElement !== null) {
                    if (!this._config.disableEvents) {
                        ((_rootElement_1)=>{
                            const n = Uc.get(_rootElement_1);
                            if (n === undefined) {
                                return void Ra();
                            }
                            const o = jc.get(n);
                            if (o === undefined) {
                                return void Ra();
                            }
                            Uc.delete(_rootElement_1);
                            const r = ai(_rootElement_1);
                            if (li(r)) {
                                ((t)=>{
                                    if (t._parentEditor !== null) {
                                        const _e111 = Pi(t);
                                        const _n78 = _e111[_e111.length - 1]._key;
                                        if (Da.get(_n78) === t) {
                                            Da.delete(_n78);
                                        }
                                    } else {
                                        Da.delete(t._key);
                                    }
                                })(r);
                                o.editors.delete(r);
                                o.hasShadowEditor = undefined;
                                _rootElement_1.__lexicalEditor = null;
                            } else if (r) {
                                e(198);
                            }
                            const i = wa(_rootElement_1);
                            for(let _t147 = 0; _t147 < i.length; _t147++){
                                i[_t147]();
                            }
                            _rootElement_1.__lexicalEventHandles = [];
                        })(_rootElement);
                    }
                    if (_o53 != null) {
                        _rootElement.classList.remove(...Array.from(_o53));
                    }
                }
                if (t !== null) {
                    const _e112 = ls(t);
                    const _n79 = t.style;
                    _n79.userSelect = "text";
                    _n79.whiteSpace = "pre-wrap";
                    _n79.wordBreak = "break-word";
                    t.setAttribute("data-lexical-editor", "true");
                    this._window = _e112;
                    this._dirtyType = 2;
                    Se(this);
                    this._updateTags.add(tag);
                    Dc(this);
                    if (!this._config.disableEvents) {
                        ((t, e)=>{
                            const t_ownerDocument = t.ownerDocument;
                            Uc.set(t, t_ownerDocument);
                            let o = jc.get(t_ownerDocument);
                            if (o === undefined) {
                                o = {
                                    editors: new Set(),
                                    hasShadowEditor: undefined
                                };
                                jc.set(t_ownerDocument, o);
                            }
                            o.editors.add(e);
                            o.hasShadowEditor = undefined;
                            t.__lexicalEditor = e;
                            const r = wa(t);
                            r.push(Hc.register(t_ownerDocument));
                            const i = babelHelpers.extends({
                                blur,
                                click,
                                compositionend,
                                compositionstart,
                                copy,
                                cut,
                                dragend,
                                dragover,
                                dragstart,
                                drop,
                                focus,
                                input: ga,
                                keydown,
                                paste,
                                pointerdown
                            }, d && {
                                beforeinput
                            }, g && {
                                keyup,
                                mousedown
                            });
                            const _loop4 = function _loop4() {
                                const n = _ref60[0];
                                const o = _ref60[1];
                                {
                                    const _i30 = function _i30(r) {
                                        if (!Pa(r)) {
                                            Fa(r);
                                            if (n === "blur") {
                                                oa(e, t);
                                                e._inputState.isShiftKeyDown = false;
                                                e._inputState.isInsertLineBreak = false;
                                            }
                                            if (e.isEditable() || n === "click" || n === "copy") {
                                                if (typeof o === "function") {
                                                    o(r, e);
                                                } else {
                                                    Qi(e, o, r);
                                                }
                                            }
                                        }
                                    };
                                    r.push(zc(t, n, _i30));
                                }
                            };
                            for (var _ref60 of Object.entries(i)){
                                _loop4();
                            }
                            let s;
                            const l = function l() {
                                e._inputState.mouseDrag = null;
                            };
                            const c = function c(n) {
                                const e__inputState = e._inputState;
                                const r_mouseDrag = e__inputState.mouseDrag;
                                if (s && s.defaultPrevented && !n.buttons) {
                                    e__inputState.isSelectionChangeFromMouseDown = false;
                                }
                                if (!r_mouseDrag || n.pointerType !== "mouse") {
                                    return;
                                }
                                const c = n.type === "pointerup";
                                if (n.type === "pointercancel" || !c && n.buttons !== 1) {
                                    return l();
                                }
                                e__inputState.mouseDrag = c ? null : n;
                                Bc(e, function() {
                                    const s = xs(cs(e));
                                    if (r_mouseDrag.type !== "mousedown") {
                                        const _o54 = c && s && Ha(Su()) && yu(Cu(), s, e, new Event("selectionchange"));
                                        if (_o54) {
                                            Ai(_o54);
                                        }
                                        return sa(e, n, c && s ? Ms(s, t).focusNode : null);
                                    }
                                    const a = _u(s, e);
                                    if (r_mouseDrag.defaultPrevented || !r_mouseDrag.shiftKey && a && !a.isCollapsed()) {
                                        l();
                                    } else if (s && e__inputState.isSelectionChangeFromMouseDown) {
                                        Aa(e, s, new Event("selectionchange"), o);
                                        sa(e, r_mouseDrag, Ms(s, t).focusNode);
                                        const _n80 = Su();
                                        if (Ha(_n80) && _n80.isCollapsed() && !_n80.is(Cu())) {
                                            Xc(e, _n80);
                                        }
                                    }
                                });
                            };
                            r.push(Wc(t_ownerDocument, {
                                pointercancel: c,
                                pointermove: c,
                                pointerup: c
                            }, true), zc(cs(e), "blur", l), e.registerEditableListener(l), Wc(t, {
                                contextmenu: l,
                                dragstart: l,
                                keydown: function keydown(t) {
                                    return t.getModifierState && t.getModifierState(t.key) || l();
                                },
                                mousedown: function mousedown(t) {
                                    const e__inputState = e._inputState;
                                    e__inputState.mouseDrag = t.button !== 0 || t.detail !== 1 || t.defaultPrevented || e__inputState.lastPointerType !== "mouse" || !e.isEditable() || e.isComposing() || il(Ps(t), e) ? null : t;
                                }
                            }), zc(t, "pointerdown", function(t) {
                                s = t;
                                e._inputState.lastPointerType = t.pointerType;
                            }, true));
                            if (g) {
                                r.push(((t, e)=>{
                                    let n = null;
                                    const o = {
                                        capture: true,
                                        passive: true
                                    };
                                    return $c(zc(t, "touchstart", function(t) {
                                        const e = t.touches.length === 1 ? t.touches[0] : null;
                                        n = e ? {
                                            x: e.clientX,
                                            y: e.clientY
                                        } : null;
                                    }, o), zc(t, "touchend", function(t) {
                                        const o = t.changedTouches[0];
                                        if (n !== null && o && t.touches.length === 0 && Math.abs(o.clientX - n.x) <= Zc && Math.abs(o.clientY - n.y) <= Zc) {
                                            e(t);
                                        }
                                        n = null;
                                    }, o));
                                })(t, (n)=>((t, e, n)=>{
                                        if (e._inputState.savedInputMode !== undefined) {
                                            if (!na(t, e, n)) {
                                                if (Fs(n.ownerDocument) === n) {
                                                    n.blur();
                                                }
                                                oa(e, n);
                                            }
                                        }
                                    })(n, e, t)));
                            }
                        })(t, this);
                    }
                    if (_o53 != null) {
                        t.classList.add(...Array.from(_o53));
                    }
                } else {
                    this._window = null;
                    this._updateTags.add(tag);
                    Dc(this);
                }
                Ic("root", this, false, t, _rootElement);
            }
        }
        getElementByKey(t) {
            return this._keyToDOMMap.get(t) || null;
        }
        getEditorState() {
            return this._editorState;
        }
        setEditorState(t, e) {
            const _this17 = this;
            const o = t.isEmpty();
            let r = t;
            if (r._readOnly) {
                r = Rl(t);
                r._selection = t._selection ? t._selection.clone() : null;
            }
            xe(this);
            const _pendingEditorState = this._pendingEditorState;
            const s = e !== undefined ? e.tag : null;
            if (!(_pendingEditorState === null || _pendingEditorState.isEmpty())) {
                if (s != null) {
                    this._updateTags.add(s);
                }
                Dc(this);
            }
            this._pendingEditorState = r;
            this._dirtyType = 2;
            this._dirtyElements.set("root", false);
            this._compositionKey = null;
            this._slotsUsed = this._slotsUsed || t._slotsUsed;
            Bc(this, function() {
                if (s) {
                    _this17._updateTags.add(s);
                }
                if (o) {
                    n(38);
                    Mi().append(Hr());
                }
                if (t._parsed) {
                    for (const [_t148, _e113] of r._nodeMap.entries()){
                        if (Vo(_e113)) {
                            _this17._dirtyElements.set(_t148, true);
                        } else {
                            _this17._dirtyLeaves.add(_t148);
                        }
                    }
                }
            }, {
                discrete: !this._updating || undefined
            });
        }
        parseEditorState(t, e) {
            return ((t, e, n)=>{
                const o = Ll();
                const r = ac;
                const i = fc;
                const s = uc;
                const { _dirtyElements, _dirtyLeaves, _cloneNotNeeded, _dirtyType } = e;
                e._dirtyElements = new Map();
                e._dirtyLeaves = new Set();
                e._cloneNotNeeded = new Map();
                e._dirtyType = 0;
                ac = o;
                fc = false;
                uc = e;
                Qr(null);
                try {
                    const _r49 = e._nodes;
                    wc(t.root, _r49);
                    if (n) {
                        n();
                    }
                    o._readOnly = true;
                    o._parsed = true;
                } catch (error) {
                    if (error instanceof Error) {
                        e._onError(error);
                    }
                } finally{
                    e._dirtyElements = _dirtyElements;
                    e._dirtyLeaves = _dirtyLeaves;
                    e._cloneNotNeeded = _cloneNotNeeded;
                    e._dirtyType = _dirtyType;
                    ac = r;
                    fc = i;
                    uc = s;
                }
                return o;
            })(typeof t === "string" ? JSON.parse(t) : t, this, e);
        }
        read(...t) {
            const _ref63 = t.length === 1 ? [
                "force-commit",
                t[0]
            ] : t;
            const e = _ref63[0];
            const n = _ref63[1];
            if (e === "force-commit") {
                if (!_c.has(this)) {
                    Dc(this);
                }
            }
            return (e === "pending" ? this._pendingEditorState || this._editorState : this.getEditorState()).read(n, {
                editor: this
            });
        }
        update(t, e) {
            ((t, e, n)=>{
                if (t._updating) {
                    t._updates.push([
                        e,
                        n
                    ]);
                } else {
                    Kc(t, e, n);
                }
            })(this, t, e);
        }
        focus(t, e = {}) {
            const _rootElement = this._rootElement;
            if (_rootElement !== null) {
                _rootElement.setAttribute("autocapitalize", "off");
                Bc(this, function() {
                    const o = Su();
                    const r = Mi();
                    if (o !== null) {
                        if (!o.dirty) {
                            Ai(o.clone());
                        }
                    } else if (r.getChildrenSize() !== 0) {
                        if (e.defaultSelection === "rootStart") {
                            r.selectStart();
                        } else {
                            r.selectEnd();
                        }
                    }
                    rs("focus");
                    is(function() {
                        _rootElement.removeAttribute("autocapitalize");
                        if (t) {
                            t();
                        }
                    });
                });
                if (this._pendingEditorState === null) {
                    _rootElement.removeAttribute("autocapitalize");
                }
            }
        }
        blur() {
            const _rootElement = this._rootElement;
            if (_rootElement !== null) {
                _rootElement.blur();
            }
            const e = xs(this._window);
            if (e !== null) {
                e.removeAllRanges();
            }
        }
        isEditable() {
            return this._editable;
        }
        setEditable(t) {
            if (this._editable !== t) {
                this._editable = t;
                Ic("editable", this, true, t);
                if (this._slotsUsed) {
                    this.update(function() {
                        return Nc();
                    });
                }
            }
        }
        toJSON() {
            return {
                editorState: this._editorState.toJSON(te())
            };
        }
    }
    _lc.version = Yt;
    function cc(t, e, n, o, r, i) {
        if (Vo(t)) {
            let _s16 = t.__first;
            while(_s16 !== null){
                const _t149 = o.get(_s16);
                if (_t149 === undefined) {
                    break;
                }
                const _l11 = Vo(_t149);
                if (!(_t149.__parent !== e || _l11 && i.has(_s16))) {
                    if (_l11 || Vu(_t149) && _t149.__slots !== null) {
                        cc(_t149, _s16, n, o, r, i);
                    }
                    if (!n.has(_s16)) {
                        i.delete(_s16);
                    }
                    r.push(_s16);
                }
                _s16 = _t149.__next;
            }
        }
        for (const _s17 of Vu(t) && t.__slots !== null ? t.__slots.values() : []){
            const _t150 = o.get(_s17);
            if (_t150 !== undefined && Yu(_t150) && _t150.__slotHost === e) {
                if (Vo(_t150) || Vu(_t150) && _t150.__slots !== null) {
                    cc(_t150, _s17, n, o, r, i);
                }
                if (!n.has(_s17)) {
                    i.delete(_s17);
                }
                r.push(_s17);
            }
        }
    }
    var ac = null;
    var uc = null;
    var fc = false;
    var dc = false;
    var hc = false;
    var gc = new Set();
    var pc = new Set();
    var _c = new Set();
    var mc = 0;
    var yc = {
        characterData: true,
        childList: true,
        subtree: true
    };
    function xc() {
        return fc || ac !== null && ac._readOnly;
    }
    function Sc() {
        if (fc) {
            e(13);
        }
    }
    function Cc() {
        if (mc > 99) {
            e(14);
        }
    }
    function Tc() {
        if (ac === null) {
            e(195, bc());
        }
        return ac;
    }
    function vc() {
        if (uc === null) {
            e(337, bc());
        }
        return uc;
    }
    function Nc() {
        vc()._dirtyType = 2;
    }
    function bc() {
        let t = 0;
        const e = new Set();
        const _lc_version = _lc.version;
        if (typeof window !== "undefined") {
            for (const _o55 of Ns(document)){
                const _r50 = ai(_o55);
                if (li(_r50)) {
                    t++;
                } else if (_r50) {
                    let _t151 = String(_r50.constructor.version || "<0.17.1");
                    if (_t151 === _lc_version) {
                        _t151 += " (separately built, likely a bundler configuration issue)";
                    }
                    e.add(_t151);
                }
            }
        }
        let o = ` Detected on the page: ${t} compatible editor(s) with version ${_lc_version}`;
        if (e.size) {
            o += ` and incompatible editors with versions ${Array.from(e).join(", ")}`;
        }
        return o;
    }
    function kc() {
        return uc;
    }
    function Ec(t, e, n) {
        const e___type = e.__type;
        const r = ei(t, e___type);
        let i = n.get(e___type);
        if (i === undefined) {
            i = Array.from(r.transforms);
            n.set(e___type, i);
        }
        const i_length = i.length;
        for(let _t152 = 0; _t152 < i_length && (i[_t152](e), e.isAttached()); _t152++);
    }
    function Oc(t, e) {
        return t !== undefined && t.__key !== e && t.isAttached();
    }
    function Mc(t, tag) {
        if (!tag) {
            return;
        }
        const t__updateTags = t._updateTags;
        let o = tag;
        if (!Array.isArray(tag)) {
            o = [
                tag
            ];
        }
        for (const _t153 of o){
            t__updateTags.add(_t153);
        }
    }
    function wc(t, n) {
        const t_type = t.type;
        const r = n.get(t_type);
        if (r === undefined) {
            e(17, t_type);
        }
        const r_klass = r.klass;
        if (t.type !== r_klass.getType()) {
            e(18, r_klass.name);
        }
        const s = r_klass.importJSON(t);
        const t_children = t.children;
        if (Vo(s) && Array.isArray(t_children)) {
            for(let _t154 = 0; _t154 < t_children.length; _t154++){
                const _e114 = wc(t_children[_t154], n);
                s.append(_e114);
            }
        }
        const t_$slots = t.$slots;
        if (t_$slots) {
            if (!Vu(s)) {
                e(379, r_klass.name);
            }
            for(const _t155 in t_$slots){
                ff(s, _t155, wc(t_$slots[_t155], n));
            }
        }
        return s;
    }
    function Ac(t, e, n) {
        const o = ac;
        const r = fc;
        const i = uc;
        ac = e;
        fc = true;
        uc = t;
        try {
            return n();
        } finally{
            ac = o;
            fc = r;
            uc = i;
        }
    }
    function Dc(e, n) {
        if (e._pendingEditorState !== null && uc !== e) {
            xe(e, false, true);
        }
        const o = hc;
        hc = true;
        try {
            const _o56 = ((t)=>{
                if (pc.has(t)) {
                    return false;
                }
                pc.add(t);
                try {
                    for(let _e115 = 0; t._pendingEditorState !== null; _e115++){
                        const _n81 = t._pendingEditorState._selection;
                        const _o57 = t._rootElement;
                        if (!Fc(t, _n81)) {
                            return false;
                        }
                        const _r51 = (_n81 === null || Ha(_n81)) && (t._headless || _o57 === null || !_o57.isConnected);
                        if (_r51 || _e115 === 100) {
                            t._lastNotifiedSelection = _n81 === null ? null : _n81.clone();
                            return !_r51;
                        }
                        Kc(t, ()=>t.dispatchCommand(W), undefined, true);
                    }
                    return false;
                } finally{
                    pc.delete(t);
                }
            })(e);
            ((e, n)=>{
                const { _pendingEditorState, _rootElement } = e;
                const i = e._headless || _rootElement === null;
                if (_pendingEditorState === null) {
                    return void (!e._updating && e._deferred.length > 0 && Rc(e, e._deferred));
                }
                const e__editorState = e._editorState;
                const s__selection = e__editorState._selection;
                const _pendingEditorState__selection = _pendingEditorState._selection;
                const a = e._dirtyType !== 0;
                const u = ac;
                const f = fc;
                const d = uc;
                const { _updating, _observer } = e;
                let mutatedNodes = null;
                e._pendingEditorState = null;
                e._editorState = _pendingEditorState;
                if (!i && a && _observer !== null) {
                    uc = e;
                    ac = _pendingEditorState;
                    fc = false;
                    e._updating = true;
                    try {
                        const { _dirtyType, _dirtyElements: _dirtyElements_1, _dirtyLeaves: _dirtyLeaves_1 } = e;
                        _observer.disconnect();
                        mutatedNodes = mo(e__editorState, _pendingEditorState, e, _dirtyType, _dirtyElements_1, _dirtyLeaves_1);
                    } catch (error) {
                        if (error instanceof Error) {
                            e._onError(error);
                        }
                        if (dc) {
                            throw error;
                        }
                        nc(e, null, _rootElement, _pendingEditorState);
                        Se(e);
                        e._dirtyType = 2;
                        dc = true;
                        Dc(e, e__editorState);
                        return void (dc = false);
                    } finally{
                        _observer.observe(_rootElement, yc);
                        e._updating = _updating;
                        ac = u;
                        fc = f;
                        uc = d;
                    }
                }
                if (!_pendingEditorState._readOnly) {
                    _pendingEditorState._readOnly = true;
                }
                const { _dirtyLeaves, _dirtyElements, _normalizedNodes, _updateTags } = e;
                if (a) {
                    e._dirtyType = 0;
                    e._cloneNotNeeded.clear();
                    e._dirtyLeaves = new Set();
                    e._dirtyElements = new Map();
                    e._normalizedNodes = new Set();
                }
                e._updateTags = new Set();
                const e__deferred = e._deferred;
                if (!_updating) {
                    e._deferred = [];
                }
                ((t, _pendingEditorState_1)=>{
                    const t__decorators = t._decorators;
                    let o = t._pendingDecorators || t__decorators;
                    const e__nodeMap = _pendingEditorState_1._nodeMap;
                    let i;
                    for(i in o){
                        if (!e__nodeMap.has(i)) {
                            if (o === t__decorators) {
                                o = Ei(t);
                            }
                            delete o[i];
                        }
                    }
                })(e, _pendingEditorState);
                const C = i ? null : xs(cs(e));
                if (e._editable && C !== null && (a || _pendingEditorState__selection === null || _pendingEditorState__selection.dirty || !_pendingEditorState__selection.is(s__selection)) && _rootElement !== null && !_updateTags.has(Ul)) {
                    uc = e;
                    ac = _pendingEditorState;
                    try {
                        if (_observer !== null) {
                            _observer.disconnect();
                        }
                        if (a || _pendingEditorState__selection === null || _pendingEditorState__selection.dirty) {
                            const _t157 = e._blockCursorElement;
                            if (_t157 !== null) {
                                ys(_t157, e, _rootElement);
                            }
                            Ou(s__selection, _pendingEditorState__selection, e, C, _updateTags, _rootElement);
                        }
                        ((t, _rootElement_1, _pendingEditorState__selection_1)=>{
                            let t__blockCursorElement = t._blockCursorElement;
                            if (Ha(_pendingEditorState__selection_1) && _pendingEditorState__selection_1.isCollapsed() && _pendingEditorState__selection_1.anchor.type === "element" && _rootElement_1.contains(Is(_rootElement_1))) {
                                const _r53 = _pendingEditorState__selection_1.anchor;
                                const _i31 = _r53.getNode();
                                const _s18 = _r53.offset;
                                let _l12 = false;
                                let _c9 = null;
                                if (_s18 === _i31.getChildrenSize()) {
                                    if (ms(_i31.getChildAtIndex(_s18 - 1))) {
                                        _l12 = true;
                                    }
                                } else {
                                    const _e116 = _i31.getChildAtIndex(_s18);
                                    if (_e116 !== null && ms(_e116)) {
                                        _l12 = true;
                                        _c9 = t.getElementByKey(_e116.__key);
                                    }
                                }
                                if (_l12) {
                                    const _n83 = Vs(_i31, t.getElementByKey(_i31.__key), t).element;
                                    if (t__blockCursorElement === null) {
                                        t._blockCursorElement = t__blockCursorElement = (({ theme })=>{
                                            const n = ks().createElement("div");
                                            n.contentEditable = "false";
                                            n.setAttribute("data-lexical-cursor", "true");
                                            let theme_blockCursor = theme.blockCursor;
                                            if (theme_blockCursor !== undefined) {
                                                if (typeof theme_blockCursor === "string") {
                                                    const _t158 = Yf(theme_blockCursor);
                                                    theme_blockCursor = theme.blockCursor = _t158;
                                                }
                                                if (theme_blockCursor !== undefined) {
                                                    n.classList.add(...Array.from(theme_blockCursor));
                                                }
                                            }
                                            return n;
                                        })(t._config);
                                    }
                                    _rootElement_1.style.caretColor = "transparent";
                                    return void (_c9 === null ? _n83.appendChild(t__blockCursorElement) : _n83.insertBefore(t__blockCursorElement, _c9));
                                }
                            }
                            if (t__blockCursorElement !== null) {
                                ys(t__blockCursorElement, t, _rootElement_1);
                            }
                        })(e, _rootElement, _pendingEditorState__selection);
                    } finally{
                        if (_observer !== null) {
                            _observer.observe(_rootElement, yc);
                        }
                        uc = d;
                        ac = u;
                    }
                }
                const T = _c.has(e);
                _c.add(e);
                try {
                    if (mutatedNodes !== null) {
                        ((t, mutatedNodes_1, updateTags, dirtyLeaves, prevEditorState)=>{
                            const i = Array.from(t._listeners.mutation);
                            const i_length = i.length;
                            for(let _t159 = 0; _t159 < i_length; _t159++){
                                const _i$_t = i[_t159];
                                const _s19 = _i$_t[0];
                                const _l13 = _i$_t[1];
                                for (const _t160 of _l13){
                                    const _i32 = mutatedNodes_1.get(_t160);
                                    if (_i32 !== undefined) {
                                        _s19(_i32, {
                                            dirtyLeaves,
                                            prevEditorState,
                                            updateTags
                                        });
                                    }
                                }
                            }
                        })(e, mutatedNodes, _updateTags, _dirtyLeaves, e__editorState);
                    }
                    const _t161 = e._pendingDecorators;
                    if (_t161 !== null) {
                        e._decorators = _t161;
                        e._pendingDecorators = null;
                        Ic("decorator", e, true, _t161);
                    }
                    ((t, e, _pendingEditorState_1)=>{
                        const o = Oi(e);
                        const r = Oi(_pendingEditorState_1);
                        if (o !== r) {
                            Ic("textcontent", t, true, r);
                        }
                    })(e, n || e__editorState, _pendingEditorState);
                    Ic("update", e, true, {
                        dirtyElements: _dirtyElements,
                        dirtyLeaves: _dirtyLeaves,
                        editorState: _pendingEditorState,
                        mutatedNodes,
                        normalizedNodes: _normalizedNodes,
                        prevEditorState: n || e__editorState,
                        tags: _updateTags
                    });
                } finally{
                    if (!T) {
                        _c.delete(e);
                    }
                }
                if (!_updating) {
                    Rc(e, e__deferred);
                }
                ((e)=>{
                    const e__updates = e._updates;
                    if (e__updates.length === 0) {
                        return void (e._cascadeCount = 0);
                    }
                    ((t)=>{
                        if (!gc.has(t)) {
                            gc.add(t);
                            setTimeout(()=>{
                                gc.delete(t);
                                t._cascadeCount = 0;
                            }, 0);
                        }
                    })(e);
                    if (e._cascadeCount++ > 99) {
                        e._updates = [];
                        e._cascadeCount = 0;
                        return void e._onWarn(t(437, e._config.namespace));
                    }
                    const o = e__updates.shift();
                    if (o) {
                        const _t162 = o[0];
                        const _n84 = o[1];
                        Kc(e, _t162, _n84);
                    }
                })(e);
            })(e, n);
            if (_o56) {
                e._onWarn(t(436));
            }
        } finally{
            hc = o;
        }
    }
    function Ic(t, e, n, ...args) {
        const e__updating = e._updating;
        e._updating = n;
        try {
            const _n85 = e._listeners[t];
            const _r54 = Array.from(_n85);
            for(var _len8 = arguments.length, o = new Array(_len8 > 3 ? _len8 - 3 : 0), _key8 = 3; _key8 < _len8; _key8++){
                o[_key8 - 3] = arguments[_key8];
            }
            for (const [_t163, _e117] of _r54){
                {
                    if (_e117) {
                        _e117();
                    }
                    const _r55 = _t163(...Array.from(o));
                    const _i33 = typeof _r55 === "function" ? _r55 : undefined;
                    if (_n85.has(_t163)) {
                        _n85.set(_t163, _i33);
                    } else if (_i33) {
                        _i33();
                    }
                }
            }
        } finally{
            e._updating = e__updating;
        }
    }
    function Fc({ _lastNotifiedSelection }, e) {
        if (e === null) {
            return _lastNotifiedSelection !== null;
        }
        return !e.is(_lastNotifiedSelection);
    }
    function Pc(t, e, n, o) {
        const r = Pi(t);
        let i;
        if (!hc) {
            for(let _t164 = 0; _t164 < r.length; _t164++){
                if (!r[_t164]._updating) {
                    r[_t164]._cascadeCount = 0;
                }
            }
        }
        if (e === W) {
            if (uc !== t || fc) {
                let _r56 = false;
                Bc(t, function() {
                    _r56 = Pc(t, e, n, o);
                });
                return _r56;
            }
            const _r57 = Tc()._selection;
            t._lastNotifiedSelection = _r57 === null ? null : _r57.clone();
        }
        for(var _t165 = 4; _t165 >= 0; _t165--){
            const _loop5 = function _loop5() {
                const l = r[_s20];
                if (_s20 > 0 && l._updating) {
                    i = l;
                    return 0;
                }
                const c = l._commands.get(e);
                if (c !== undefined) {
                    const _e118 = c[_t165];
                    if (_e118.size > 0) {
                        let _t166 = false;
                        Bc(l, function() {
                            for (const _r58 of _e118){
                                if (_r58(n, o)) {
                                    return void (_t166 = true);
                                }
                            }
                        });
                        if (_t166) {
                            return {
                                v: _t166
                            };
                        }
                    }
                }
            };
            let _ret2;
            for(var _s20 = 0; _s20 < r.length; _s20++){
                _ret2 = _loop5();
                if (_ret2 === 0) {
                    break;
                }
                if (_ret2) {
                    return _ret2.v;
                }
            }
        }
        if (i) {
            i.update(function() {
                Pc(i, e, n, o);
            });
        }
        return false;
    }
    function Rc(t, e) {
        if (t._deferred === e) {
            t._deferred = [];
        }
        if (e.length !== 0) {
            const _n86 = t._updating;
            t._updating = true;
            try {
                for(let _t167 = 0; _t167 < e.length; _t167++){
                    e[_t167]();
                }
            } finally{
                t._updating = _n86;
            }
        }
    }
    function Lc(t, n) {
        const t__updates = t._updates;
        let r = n || false;
        while(t__updates.length !== 0){
            const _n87 = t__updates.shift();
            if (_n87) {
                const _o58 = _n87[0];
                const _i34 = _n87[1];
                const _s21 = t._pendingEditorState;
                let _l14;
                if (_i34 !== undefined) {
                    _l14 = _i34.onUpdate;
                    if (_i34.skipTransforms) {
                        r = true;
                    }
                    if (_i34.discrete) {
                        if (_s21 === null) {
                            e(191);
                        }
                        _s21._flushSync = true;
                    }
                    if (_l14) {
                        t._deferred.push(_l14);
                    }
                    Mc(t, _i34.tag);
                }
                if (_s21 == null) {
                    Kc(t, _o58, _i34);
                } else {
                    _o58();
                }
            }
        }
        return r;
    }
    function Kc(t, n, o, r = false) {
        const t__updateTags = t._updateTags;
        let s;
        let l = false;
        let c = false;
        if (o !== undefined) {
            s = o.onUpdate;
            Mc(t, o.tag);
            l = o.skipTransforms || false;
            c = o.discrete || false;
        }
        if (s) {
            t._deferred.push(s);
        }
        const t__editorState = t._editorState;
        let t__pendingEditorState = t._pendingEditorState;
        let f = false;
        if (t__pendingEditorState === null || t__pendingEditorState._readOnly) {
            t__pendingEditorState = t._pendingEditorState = Rl(t__pendingEditorState || t__editorState);
            f = true;
        }
        t__pendingEditorState._flushSync = c;
        const d = ac;
        const h = fc;
        const g = uc;
        const { _updating, _lastNotifiedSelection } = t;
        ac = t__pendingEditorState;
        fc = false;
        t._updating = true;
        uc = t;
        const m = t._headless || t.getRootElement() === null;
        Qr(null);
        try {
            if (f) {
                if (m) {
                    if (t__editorState._selection !== null) {
                        t__pendingEditorState._selection = t__editorState._selection.clone();
                    }
                } else {
                    t__pendingEditorState._selection = ((t, e)=>{
                        const _selection = t.getEditorState()._selection;
                        const o = xs(cs(t));
                        if (Ha(_selection) || _selection == null) {
                            return yu(_selection, o, t, e);
                        }
                        return _selection.clone();
                    })(t, o && o.event || null);
                }
            }
            const _r59 = t._compositionKey;
            n();
            l = Lc(t, l);
            ((t__pendingEditorState_1, e)=>{
                const _selection = e.getEditorState()._selection;
                const t__selection = t__pendingEditorState_1._selection;
                if (Ha(t__selection)) {
                    const { anchor, focus } = t__selection;
                    let _r60;
                    if (anchor.type === "text") {
                        _r60 = anchor.getNode();
                        _r60.selectionTransform(_selection, t__selection);
                    }
                    if (focus.type === "text") {
                        const _t169 = focus.getNode();
                        if (_r60 !== _t169) {
                            _t169.selectionTransform(_selection, t__selection);
                        }
                    }
                }
            })(t__pendingEditorState, t);
            if (t._dirtyType !== 0) {
                if (l) {
                    (({ _nodeMap }, { _dirtyLeaves })=>{
                        for (const _t170 of _dirtyLeaves){
                            const _e120 = _nodeMap.get(_t170);
                            if (Sr(_e120) && _e120.isAttached() && _e120.isSimpleText() && !_e120.isUnmergeable()) {
                                Eo(_e120);
                            }
                        }
                    })(t__pendingEditorState, t);
                } else {
                    ((t__pendingEditorState_1, e)=>{
                        const { _dirtyLeaves, _dirtyElements } = e;
                        const t__nodeMap = t__pendingEditorState_1._nodeMap;
                        const i = Ci();
                        const s = new Map();
                        let l = _dirtyLeaves;
                        let l_size = l.size;
                        let a = _dirtyElements;
                        let a_size = a.size;
                        while(l_size > 0 || a_size > 0){
                            if (l_size > 0) {
                                e._dirtyLeaves = new Set();
                                for (const _t171 of l){
                                    const _o59 = t__nodeMap.get(_t171);
                                    if (Sr(_o59) && _o59.isAttached() && _o59.isSimpleText() && !_o59.isUnmergeable()) {
                                        Eo(_o59);
                                    }
                                    if (_o59 !== undefined && Oc(_o59, i)) {
                                        Ec(e, _o59, s);
                                    }
                                    _dirtyLeaves.add(_t171);
                                }
                                l = e._dirtyLeaves;
                                l_size = l.size;
                                if (l_size > 0) {
                                    mc++;
                                    continue;
                                }
                            }
                            e._dirtyLeaves = new Set();
                            e._dirtyElements = new Map();
                            if (a.delete("root")) {
                                a.set("root", true);
                            }
                            for (const [_n88, _l15] of a){
                                _dirtyElements.set(_n88, _l15);
                                if (!_l15) {
                                    continue;
                                }
                                const _c0 = t__nodeMap.get(_n88);
                                if (_c0 !== undefined && Oc(_c0, i)) {
                                    Ec(e, _c0, s);
                                }
                            }
                            l = e._dirtyLeaves;
                            l_size = l.size;
                            a = e._dirtyElements;
                            a_size = a.size;
                            mc++;
                        }
                        e._dirtyLeaves = _dirtyLeaves;
                        e._dirtyElements = _dirtyElements;
                    })(t__pendingEditorState, t);
                }
                Lc(t);
                (({ _nodeMap }, t__pendingEditorState_1, n, o)=>{
                    const e__nodeMap = t__pendingEditorState_1._nodeMap;
                    const s = [];
                    for (const [_t173] of o){
                        {
                            const _e121 = e__nodeMap.get(_t173);
                            if (_e121 !== undefined) {
                                if (!_e121.isAttached()) {
                                    if (Vo(_e121)) {
                                        cc(_e121, _t173, _nodeMap, e__nodeMap, s, o);
                                    }
                                    if (!_nodeMap.has(_t173)) {
                                        o.delete(_t173);
                                    }
                                    s.push(_t173);
                                }
                            }
                        }
                    }
                    for (const _t174 of n){
                        const _e122 = e__nodeMap.get(_t174);
                        if (!(_e122 === undefined || _e122.isAttached())) {
                            if (Vu(_e122) && _e122.__slots !== null) {
                                cc(_e122, _t174, _nodeMap, e__nodeMap, s, n);
                            }
                            if (!_nodeMap.has(_t174)) {
                                n.delete(_t174);
                            }
                            s.push(_t174);
                        }
                    }
                    const l = vc();
                    const l__cloneNotNeeded = l._cloneNotNeeded;
                    for (const _t175 of s){
                        e__nodeMap.delete(_t175);
                        l__cloneNotNeeded.delete(_t175);
                    }
                    const l__compositionKey = l._compositionKey;
                    if (!(l__compositionKey === null || e__nodeMap.has(l__compositionKey))) {
                        l._compositionKey = null;
                    }
                })(t__editorState, t__pendingEditorState, t._dirtyLeaves, t._dirtyElements);
            }
            if (_r59 !== t._compositionKey) {
                t__pendingEditorState._flushSync = true;
            }
            const _i35 = t__pendingEditorState._selection;
            if (Ha(_i35)) {
                if (t._slotsUsed) {
                    uu(_i35);
                }
                const _n89 = t__pendingEditorState._nodeMap;
                const _o60 = _i35.anchor.key;
                const _r61 = _i35.focus.key;
                if (!(_n89.get(_o60) !== undefined && _n89.get(_r61) !== undefined)) {
                    e(19);
                }
            } else {
                if (Ya(_i35) && _i35._nodes.size === 0) {
                    t__pendingEditorState._selection = null;
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                t._onError(error);
            }
            t._pendingEditorState = t__editorState;
            const _n90 = t__editorState._selection;
            t._lastNotifiedSelection = _n90 === null ? null : _n90.clone();
            t._dirtyType = 2;
            t._cloneNotNeeded.clear();
            t._dirtyLeaves = new Set();
            t._dirtyElements.clear();
            return void Dc(t);
        } finally{
            ac = d;
            fc = h;
            uc = g;
            t._updating = _updating;
            mc = 0;
        }
        if (r) {
            return;
        }
        const y = t._dirtyType !== 0 || t._deferred.length > 0 || ((t__pendingEditorState_1, e)=>{
            const _selection = e.getEditorState()._selection;
            const t__selection = t__pendingEditorState_1._selection;
            if (t__selection !== null) {
                if (t__selection.dirty || !t__selection.is(_selection)) {
                    return true;
                }
            } else if (_selection !== null) {
                return true;
            }
            return false;
        })(t__pendingEditorState, t);
        if (y) {
            if (t__pendingEditorState._flushSync) {
                t__pendingEditorState._flushSync = false;
                Dc(t);
            } else if (f) {
                oi(function() {
                    Dc(t);
                });
            }
        } else {
            t__pendingEditorState._flushSync = false;
            if (f) {
                t__updateTags.clear();
                t._deferred = [];
                t._pendingEditorState = null;
                t._lastNotifiedSelection = _lastNotifiedSelection;
            }
        }
    }
    function Bc(t, e, n) {
        if (uc === t && n === undefined) {
            if (xc()) {
                Kc(t, e, n);
            } else {
                e();
            }
        } else {
            Kc(t, e, n);
        }
    }
    function $c(...t) {
        return function() {
            for(let _e123 = t.length - 1; _e123 >= 0; _e123--){
                t[_e123]();
            }
            t.length = 0;
        };
    }
    function zc(t, e, n, o) {
        t.addEventListener(e, n, o);
        return t.removeEventListener.bind(t, e, n, o);
    }
    function Wc(t, e, n) {
        return $c(...Array.from(Object.entries(e).map(([e, o])=>zc(t, e, o, n))));
    }
    var Uc = new WeakMap();
    var jc = new WeakMap();
    var Hc = Ht((t)=>{
        t.addEventListener("selectionchange", Ia);
        return function() {
            return t.removeEventListener("selectionchange", Ia);
        };
    });
    function Vc(t, e, n, timeStamp, r, i) {
        const { anchor, focus } = t;
        const c = anchor.getNode();
        const a = vc();
        let u;
        if (i !== undefined) {
            u = i;
        } else {
            const _t176 = xs(cs(a));
            u = _t176 !== null ? Ms(_t176, a._rootElement) : null;
        }
        const f = u !== null ? u.anchorNode : null;
        const anchor_key = anchor.key;
        const g = a.getElementByKey(anchor_key);
        const n_length = n.length;
        return anchor_key !== focus.key || !Sr(c) || (!r && (!d || a._inputState.lastBeforeInputInsertTextTimeStamp < timeStamp + 50) || c.isDirty() && n_length < 2 || Fi(n)) && anchor.offset !== focus.offset && !c.isComposing() || fi(c) || c.isDirty() && n_length > 1 || (r || !d) && g !== null && !c.isComposing() && f !== Js(c, g, a) || u !== null && e !== null && (!e.collapsed || e.startContainer !== u.anchorNode || e.startOffset !== u.anchorOffset) || !c.isComposing() && (c.getFormat() !== t.format || c.getStyle() !== t.style) || ((t, e)=>{
            if (e.isSegmented()) {
                return true;
            }
            if (!t.isCollapsed()) {
                return false;
            }
            const offset = t.anchor.offset;
            const o = e.getParentOrThrow();
            const r = ui(e);
            if (offset === 0) {
                return !e.canInsertTextBefore() || !o.canInsertTextBefore() && !e.isComposing() || r || ((t)=>{
                    const e = t.getPreviousSibling();
                    return (Sr(e) || Vo(e) && e.isInline()) && !e.canInsertTextAfter();
                })(e);
            }
            return offset === e.getTextContentSize() && (!e.canInsertTextAfter() || !o.canInsertTextAfter() && !e.isComposing() || r);
        })(t, c);
    }
    function Yc(t, e) {
        return di(t) && t.nodeValue !== null && e !== 0 && e !== t.nodeValue.length;
    }
    function Jc(t, e, n) {
        const _Ms = Ms(t, e._rootElement);
        const { anchorNode, anchorOffset, focusNode, focusOffset } = _Ms;
        const e__inputState = e._inputState;
        if (e__inputState.isSelectionChangeFromDOMUpdate) {
            e__inputState.isSelectionChangeFromDOMUpdate = false;
            const _t177 = e__inputState.selectionChangeFromDOMUpdatePoints;
            e__inputState.selectionChangeFromDOMUpdatePoints = null;
            if (Yc(anchorNode, anchorOffset) && Yc(focusNode, focusOffset) && !e__inputState.postDeleteSelectionToRestore && (_t177 === null || _t177.anchorNode === anchorNode && _t177.anchorOffset === anchorOffset && _t177.focusNode === focusNode && _t177.focusOffset === focusOffset)) {
                return;
            }
        }
        Bc(e, function() {
            if (!n) {
                return void Ai(null);
            }
            if (!si(e, anchorNode, focusNode)) {
                return;
            }
            const e__inputState_mouseDrag = e__inputState.mouseDrag;
            if (!(!e__inputState_mouseDrag || e__inputState_mouseDrag.type === "mousedown" && e__inputState_mouseDrag.defaultPrevented)) {
                sa(e, e__inputState_mouseDrag, focusNode);
            }
            const a = ia.has(e__inputState_mouseDrag);
            let u = Su();
            if (e__inputState.postDeleteSelectionToRestore && Ha(u) && u.isCollapsed()) {
                const _t178 = u.anchor;
                const _e124 = e__inputState.postDeleteSelectionToRestore.anchor;
                if (_t178.key === _e124.key && _t178.offset === _e124.offset + 1 || _t178.offset === 1 && _e124.getNode().is(_t178.getNode().getPreviousSibling())) {
                    u = e__inputState.postDeleteSelectionToRestore.clone();
                    Ai(u);
                }
            }
            e__inputState.postDeleteSelectionToRestore = null;
            if (Ha(u)) {
                const _n91 = u.anchor;
                if (u.isCollapsed()) {
                    if (t.type === "Range" && anchorNode === focusNode) {
                        u.dirty = true;
                    }
                    Xc(e, u);
                } else {
                    const _t179 = _n91.key;
                    const _e125 = u.focus;
                    const _o61 = _e125.key;
                    const _i36 = u.getNodes();
                    const _l16 = _i36.length;
                    const _c1 = u.isBackward();
                    const _ref69 = a ? [
                        _n91.offset,
                        _e125.offset
                    ] : [
                        anchorOffset,
                        focusOffset
                    ];
                    const _f5 = _ref69[0];
                    const _d3 = _ref69[1];
                    const _h3 = _c1 ? _d3 : _f5;
                    const _g3 = _c1 ? _f5 : _d3;
                    const _p3 = _c1 ? _o61 : _t179;
                    const _2 = _c1 ? _t179 : _o61;
                    let _m = C;
                    let _y = false;
                    for(let _t180 = 0; _t180 < _l16; _t180++){
                        const _e126 = _i36[_t180];
                        const _n92 = _e126.getTextContentSize();
                        if (Sr(_e126) && _n92 !== 0 && !(_t180 === 0 && _e126.__key === _p3 && _h3 === _n92 || _t180 === _l16 - 1 && _e126.__key === _2 && _g3 === 0) && (_y = true, _m &= _e126.getFormat(), _m === 0)) {
                            break;
                        }
                    }
                    u.format = _y ? _m : 0;
                }
            }
            ((t, e, n = false)=>{
                if (n || Fc(t, e)) {
                    t.dispatchCommand(W);
                }
            })(e, u, u !== null && (u.dirty && !a || !Ha(u)));
        });
    }
    function Gc(t, e, n) {
        if (!(t.format === e && t.style === n)) {
            t.format = e;
            t.style = n;
            t.dirty = true;
        }
    }
    function qc(t, e) {
        Gc(t, e.getFormat(), e.getStyle());
    }
    function Xc(t, n) {
        const n_anchor = n.anchor;
        const r = n_anchor.getNode();
        const event = cs(t).event;
        const s = event ? event.timeStamp : performance.now();
        const _t$_inputState$collap = t._inputState.collapsedSelectionFormat;
        const { format, style, offset, key, timeStamp } = _t$_inputState$collap;
        if (s < timeStamp + 200 && n_anchor.offset === offset && n_anchor.key === key) {
            Gc(n, format, style);
        } else if (n_anchor.type === "text") {
            if (!Sr(r)) {
                e(141);
            }
            qc(n, r);
        } else {
            if (t.isComposing() || Mi().getTextContent() !== "") {
                if (!Vo(r)) {
                    e(259);
                }
                if (r.isEmpty()) {
                    xu(n, "");
                } else {
                    Gc(n, n.format, "");
                }
            }
        }
    }
    function click(t, e) {
        Bc(e, function() {
            const n = Su();
            const o = xs(cs(e));
            const r = Cu();
            if (o) {
                if (Ha(n)) {
                    const _t181 = n.anchor;
                    const _e127 = _t181.getNode();
                    if (_t181.type === "element" && _t181.offset === 0 && n.isCollapsed() && !root(_e127) && Mi().getChildrenSize() === 1 && _e127.getTopLevelElementOrThrow().isEmpty() && r !== null && n.is(r)) {
                        o.removeAllRanges();
                        n.dirty = true;
                    }
                } else if (t.pointerType === "touch" || t.pointerType === "pen" || g && e._inputState.lastPointerType !== "mouse") {
                    const _n93 = Ms(o, e._rootElement).anchorNode;
                    if (Rs(_n93) || di(_n93)) {
                        Ai(yu(r, o, e, t));
                    }
                }
            }
            if (u && o !== null && o.rangeCount === 0) {
                const _n94 = e._rootElement;
                if (_n94 !== null && t.target === _n94) {
                    const _i37 = t.clientY;
                    let _s22 = _n94.childNodes.length;
                    for(let _t182 = 0; _t182 < _n94.childNodes.length; _t182++){
                        const childNode = _n94.childNodes[_t182];
                        if (Rs(childNode)) {
                            const _n95 = childNode.getBoundingClientRect();
                            if (_i37 <= (_n95.top + _n95.bottom) / 2) {
                                _s22 = _t182;
                                break;
                            }
                        }
                    }
                    o.setBaseAndExtent(_n94, _s22, _n94, _s22);
                    const _l17 = yu(r, o, e, t);
                    if (_l17 !== null) {
                        Ai(_l17);
                    } else {
                        o.removeAllRanges();
                    }
                }
            }
            Qi(e, j, t);
        });
    }
    var Zc = 10;
    var ta = 'input:not(:disabled),textarea:not(:disabled),select:not(:disabled),button:not(:disabled),a[href],area[href],label,summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable]:not([contenteditable="false"])';
    function mousedown(t, e) {
        const n = e.getRootElement();
        if (n !== null) {
            if (na(t, e, n)) {
                t.preventDefault();
                if (Fs(n.ownerDocument) !== n) {
                    if (e._inputState.savedInputMode === undefined) {
                        e._inputState.savedInputMode = n.getAttribute("inputmode");
                    }
                    n.setAttribute("inputmode", "none");
                    n.focus({
                        preventScroll: true
                    });
                }
            } else {
                oa(e, n);
            }
        }
    }
    function na(t, e, n) {
        if (e._inputState.lastPointerType === "mouse") {
            return false;
        }
        const o = Ps(t);
        if (!Ls(o)) {
            return false;
        }
        let r = false;
        for(let _t183 = o; _t183 !== null; _t183 = ts(_t183)){
            if (_t183 === n) {
                return r;
            }
            if (_t183.nodeType === 1) {
                const _e129 = _t183;
                if (_e129.matches(ta)) {
                    return false;
                }
                if (_e129.getAttribute("data-lexical-decorator") === "true") {
                    r = true;
                }
            }
        }
        return false;
    }
    function oa(t, e) {
        const savedInputMode = t._inputState.savedInputMode;
        if (savedInputMode !== undefined) {
            t._inputState.savedInputMode = undefined;
            if (savedInputMode === null) {
                e.removeAttribute("inputmode");
            } else {
                e.setAttribute("inputmode", savedInputMode);
            }
        }
    }
    function pointerdown(t, e) {
        const n = Ps(t);
        const t_pointerType = t.pointerType;
        if (Ls(n) && t_pointerType !== "touch" && t_pointerType !== "pen" && t.button === 0) {
            Bc(e, function() {
                if (!il(n, e)) {
                    e._inputState.isSelectionChangeFromMouseDown = true;
                }
            });
        }
    }
    var ia = new WeakSet();
    function sa(t, e, n = null) {
        const o = Su();
        const r = o && o.clone();
        ((t, e, n)=>{
            const o = Cu();
            const r = e.type === "mousedown";
            const i = r && !e.shiftKey;
            const s = n && ki(n);
            if (Go(s)) {
                if (r) {
                    if (i && s.isInline()) {
                        s.selectPrevious();
                    }
                } else if (Ha(o)) {
                    Ai(o.clone());
                }
            }
            const l = Su();
            const c = l || (i ? gu() : Ha(o) ? o.clone() : null);
            const a = t.getRootElement();
            const u = a && a.getRootNode();
            if (!Ha(c) || i && !c.isCollapsed() || !hi(u) && !Cs(u)) {
                return;
            }
            const { anchor, focus } = c;
            if (!r && Ha(o)) {
                const _o$anchor = o.anchor;
                const { key, offset, type } = _o$anchor;
                anchor.set(key, offset, type, true);
            }
            const { clientX, clientY } = e;
            const p = u.elementFromPoint && u.elementFromPoint(clientX, clientY);
            const _ = p && ki(p);
            const m = function m(t, e) {
                if (Vo(t)) {
                    if (e === "next") {
                        return t.getLastDescendant();
                    }
                    return t.getFirstDescendant();
                }
                return t;
            };
            const y = [
                null
            ];
            const x = Vo(_) && !_.isInline() && (root(_) ? Il(focus.getNode(), du) : _);
            for (const _t185 of x ? Af(x, "next") : []){
                y.push(Ef(_t185.origin, "previous"), _t185);
            }
            const S = cs(t);
            const C = S.document.createRange();
            let T = null;
            for (const _e131 of y){
                const _n97 = _e131 ? m(_e131.origin, _e131.direction) : _;
                if (!Go(_n97) || !_n97.isInline() || _n97 === T) {
                    continue;
                }
                const _o62 = t.getElementByKey(_n97.getKey());
                if (!_o62) {
                    continue;
                }
                C.selectNodeContents(_o62);
                const _r62 = C.getBoundingClientRect();
                const _s23 = _o62.getBoundingClientRect();
                const _ref70 = _r62.height > _s23.height ? _r62 : _s23;
                const { bottom, left, right, top } = _ref70;
                if (_e131 && (clientY < top || clientY > bottom)) {
                    T = _n97;
                    continue;
                }
                const _x = S.getComputedStyle(ts(_o62) || _o62).direction === "rtl";
                const _v = 2 * clientX > left + right !== _x;
                const _N = _v ? "next" : "previous";
                const _b = _e131 && _e131.getNodeAtCaret();
                const _k = _b && t.getElementByKey(_b.getKey());
                const _E = _k ? _k.getClientRects() : [];
                const _O = _E[_v ? 0 : _E.length - 1];
                if (!_e131 || _e131.direction === _N && S.getComputedStyle(_o62).cssFloat === "none" && (!_b || Xl(_b) || _O && (_v === _x ? 2 * _O.right > left + right : 2 * _O.left < left + right))) {
                    if (!_n97.is(m(qi(focus, _v), _N))) {
                        const _t186 = Ef(_n97, _N);
                        vr(focus, _t186);
                        if (i) {
                            vr(anchor, _t186);
                        }
                    }
                    return void (l || Ai(c));
                }
            }
            if (Go(s) && !r) {
                const _e132 = S.document;
                const _n98 = _e132.caretPositionFromPoint && _e132.caretPositionFromPoint(clientX, clientY, {
                    shadowRoots: Cs(u) ? [
                        u
                    ] : []
                });
                const _o63 = _n98 && su(_n98.offsetNode, _n98.offset, null, t);
                if (_o63) {
                    const _o63$ = _o63[0];
                    const { key, offset, type } = _o63$;
                    focus.set(key, offset, type);
                }
            }
        })(t, e, n);
        const i = Su();
        const mouseDrag = t._inputState.mouseDrag;
        if (mouseDrag && i && !i.is(r)) {
            ia.add(mouseDrag);
        }
        if (e.type === "mousedown" && Ha(i)) {
            xu(i, Ha(r) ? r.anchor.key : "");
        }
    }
    function la(t) {
        if (!t.getTargetRanges) {
            return null;
        }
        const e = t.getTargetRanges();
        if (e.length === 0) {
            return null;
        }
        return e[0];
    }
    function ca(t) {
        const lastKeyCode = vc()._inputState.lastKeyCode;
        if (t == null || t.length <= 1 || lastKeyCode == null) {
            return;
        }
        const n = lastKeyCode.length === 1 ? lastKeyCode : lastKeyCode === "Enter" ? "\n" : lastKeyCode === "Tab" ? "\t" : null;
        if (!n) {
            return;
        }
        const o = Su();
        if (!Ha(o) || !o.isCollapsed()) {
            return;
        }
        const r = o.anchor.getNode();
        if (!Sr(r)) {
            return;
        }
        const offset = o.anchor.offset;
        if (r.getTextContentSize() === offset) {
            const _t188 = r.getNextSibling();
            if (n === "\n") {
                if (g) {
                    return;
                }
                if (Xl(_t188)) {
                    _t188.selectEnd();
                } else if (!_t188) {
                    const _t189 = Il(r, du);
                    const _e134 = _t189 && _t189.getNextSibling();
                    if (Vo(_e134)) {
                        _e134.selectStart();
                    }
                }
            } else {
                if (n === "\t") {
                    if (qr(_t188)) {
                        _t188.selectEnd();
                    }
                } else if (Sr(_t188) && _t188.getTextContent()[0] === n) {
                    _t188.select(1, 1);
                }
            }
        } else {
            if (r.getTextContent()[offset] === n) {
                r.select(offset + 1, offset + 1);
            }
        }
    }
    function aa(t) {
        t.isInsertTextAfterHandledSelectionCommand = false;
        if (t.handledSelectionCommandTimeoutId !== null) {
            clearTimeout(t.handledSelectionCommandTimeoutId);
            t.handledSelectionCommandTimeoutId = null;
        }
    }
    function ua(_inputState) {
        if (a && !g && m) {
            aa(_inputState);
            _inputState.isInsertTextAfterHandledSelectionCommand = true;
            _inputState.handledSelectionCommandTimeoutId = setTimeout(()=>aa(_inputState), 0);
        }
    }
    function fa(t, e) {
        const n = Ps(t);
        if (Rs(n) && il(n, e)) {
            return true;
        }
        const o = e.getRootElement();
        if (o === null) {
            return false;
        }
        const r = Fs(o.ownerDocument);
        return r !== null && o.contains(r) && il(r, e);
    }
    function beforeinput(t, e) {
        const t_inputType = t.inputType;
        if (!(t_inputType === "deleteCompositionText" || u && Xi(e))) {
            if (t_inputType !== "insertCompositionText") {
                Bc(e, function() {
                    if (!fa(t, e)) {
                        Qi(e, H, t);
                    }
                }, {
                    event: t
                });
            }
        }
    }
    function ha(t) {
        const t_inputType = t.inputType;
        const o = la(t);
        const r = vc();
        const r__inputState = r._inputState;
        const s = Su();
        if (t_inputType === "insertText" && t.data && r__inputState.isInsertTextAfterHandledSelectionCommand) {
            aa(r__inputState);
            t.preventDefault();
            if (Ha(s) && !s.isCollapsed()) {
                const _t190 = s.isBackward() ? s.anchor : s.focus;
                s.anchor.set(_t190.key, _t190.offset, _t190.type);
                s.focus.set(_t190.key, _t190.offset, _t190.type);
            }
            return true;
        }
        if (t_inputType === "deleteContentBackward") {
            if (s === null) {
                const _t191 = Cu();
                if (!Ha(_t191)) {
                    return true;
                }
                Ai(_t191.clone());
            }
            if (Ha(s)) {
                const _n100 = s.anchor.key === s.focus.key;
                if (((t, e)=>t.lastKeyCode === "MediaLast" && e < t.lastKeyDownTimeStamp + 30)(r__inputState, t.timeStamp) && r.isComposing() && _n100) {
                    Si(null);
                    r__inputState.lastKeyDownTimeStamp = 0;
                    setTimeout(()=>{
                        Bc(r, function() {
                            Si(null);
                        });
                    }, 30);
                    if (Ha(s)) {
                        const _t192 = s.anchor.getNode();
                        _t192.markDirty();
                        if (!Sr(_t192)) {
                            e(142);
                        }
                        qc(s, _t192);
                    }
                } else {
                    Si(null);
                    if (g && o !== null && !o.collapsed && (s.applyDOMRange(o), !s.isCollapsed())) {
                        t.preventDefault();
                        s.removeText();
                        return true;
                    }
                    t.preventDefault();
                    const _e135 = s.anchor.getNode();
                    const _l18 = _e135.getTextContent();
                    const _c10 = _e135.canInsertTextAfter();
                    const _a8 = s.anchor.offset === 0 && s.focus.offset === _l18.length;
                    let _u6 = y && _n100 && !_a8 && _c10;
                    if (_u6 && s.isCollapsed()) {
                        _u6 = !Go(qi(s.anchor, true));
                    }
                    if (!_u6) {
                        Qi(r, G, true);
                        const _t193 = Su();
                        if (y && Ha(_t193) && _t193.isCollapsed()) {
                            r__inputState.postDeleteSelectionToRestore = _t193;
                            setTimeout(()=>r__inputState.postDeleteSelectionToRestore = null);
                        }
                    }
                }
                return true;
            }
        }
        if (!Ha(s)) {
            if (!(t_inputType !== "historyUndo" && t_inputType !== "historyRedo")) {
                t.preventDefault();
                Qi(r, t_inputType === "historyUndo" ? it : st);
            }
            return true;
        }
        const t_data = t.data;
        if (r__inputState.unprocessedBeforeInputData !== null) {
            Bi(false, r, r__inputState.unprocessedBeforeInputData);
        }
        if (!(s.dirty && r__inputState.unprocessedBeforeInputData === null || !s.isCollapsed() || root(s.anchor.getNode()) || o === null)) {
            s.applyDOMRange(o);
        }
        r__inputState.unprocessedBeforeInputData = null;
        const { anchor, focus } = s;
        const u = anchor.getNode();
        const f = focus.getNode();
        if (t_inputType === "insertText" || t_inputType === "insertTranspose") {
            if (t_data === "\n") {
                t.preventDefault();
                Qi(r, q, false);
            } else if (t_data === v) {
                t.preventDefault();
                Qi(r, X);
            } else if (t_data == null && t.dataTransfer) {
                const _e136 = t.dataTransfer.getData("text/plain");
                t.preventDefault();
                s.insertRawText(_e136);
            } else {
                if (t_data != null && Vc(s, o, t_data, t.timeStamp, true)) {
                    t.preventDefault();
                    Qi(r, Q, t_data);
                    ca(t_data);
                } else {
                    r__inputState.unprocessedBeforeInputData = t_data;
                }
            }
            r__inputState.lastBeforeInputInsertTextTimeStamp = t.timeStamp;
            return true;
        }
        t.preventDefault();
        switch(t_inputType){
            case "insertFromYank":
            case "insertFromDrop":
            case "insertReplacementText":
                Qi(r, Q, t);
                ca((t.dataTransfer ? t.dataTransfer.getData("text/plain") : null) ?? t.data);
                break;
            case "insertFromComposition":
                {
                    const _e137 = r__inputState.hadOrphanedCompositionEvents;
                    r__inputState.hadOrphanedCompositionEvents = false;
                    const _n101 = r._compositionKey;
                    Si(null);
                    if (!_e137) {
                        Qi(r, Q, t);
                    }
                    xa(_n101);
                    break;
                }
            case "insertLineBreak":
                Si(null);
                r__inputState.isInsertLineBreak = false;
                Qi(r, q, false);
                break;
            case "insertParagraph":
                Si(null);
                if (r__inputState.isInsertLineBreak) {
                    r__inputState.isInsertLineBreak = false;
                    Qi(r, q, false);
                } else {
                    Qi(r, X);
                }
                break;
            case "insertFromPaste":
            case "insertFromPasteAsQuotation":
                Qi(r, paste, t);
                break;
            case "deleteByComposition":
                if (((t, e)=>t !== e || Vo(t) || Vo(e) || !ui(t) || !ui(e))(u, f)) {
                    Qi(r, tt, t);
                }
                break;
            case "deleteByDrag":
                rs(jl);
                Qi(r, tt, t);
                break;
            case "deleteByCut":
                Qi(r, tt, t);
                break;
            case "deleteContent":
                Qi(r, G, false);
                break;
            case "deleteWordBackward":
                Qi(r, et, true);
                break;
            case "deleteWordForward":
                Qi(r, et, false);
                break;
            case "deleteHardLineBackward":
            case "deleteSoftLineBackward":
                Qi(r, nt, true);
                break;
            case "deleteContentForward":
            case "deleteHardLineForward":
            case "deleteSoftLineForward":
                Qi(r, nt, false);
                break;
            case "formatStrikeThrough":
                Qi(r, ot, "strikethrough");
                break;
            case "formatBold":
                Qi(r, ot, "bold");
                break;
            case "formatItalic":
                Qi(r, ot, "italic");
                break;
            case "formatUnderline":
                Qi(r, ot, "underline");
                break;
            case "historyUndo":
                Qi(r, it);
                break;
            case "historyRedo":
                Qi(r, st);
        }
        return true;
    }
    function ga(t, e) {
        t.stopPropagation();
        const e__inputState = e._inputState;
        aa(e__inputState);
        Bc(e, function() {
            if (!fa(t, e)) {
                e.dispatchCommand(V, t);
            }
        }, {
            event: t
        });
        e__inputState.unprocessedBeforeInputData = null;
    }
    function pa(t) {
        const e = vc();
        const e__inputState = e._inputState;
        const o = Su();
        const t_data = t.data;
        const i = la(t);
        let s = false;
        let l = false;
        if (t_data != null && Ha(o)) {
            const _c11 = xs(cs(e));
            const _a9 = _c11 !== null ? Ms(_c11, e._rootElement) : null;
            const _f6 = t.inputType === "insertCompositionText" && e__inputState.compositionPhase !== "ending-firefox" && !e.isComposing();
            if (_f6) {
                e__inputState.hadOrphanedCompositionEvents = true;
            }
            const _h4 = o.anchor.getNode();
            const _g4 = t.inputType === "insertCompositionText" && e__inputState.compositionPhase !== "ending-firefox" && e.isComposing() && Sr(_h4) && fi(_h4);
            if (!_f6 && !_g4 && Vc(o, i, t_data, t.timeStamp, false, _a9)) {
                s = true;
                if (e__inputState.compositionPhase === "ending-firefox") {
                    const _t194 = Sa(e, t_data);
                    e__inputState.compositionPhase = "idle";
                    if (_t194) {
                        rs(Vl);
                        Di();
                        return true;
                    }
                }
                const _i38 = o.anchor.getNode();
                if (_c11 === null || _a9 === null) {
                    return true;
                }
                const _f7 = o.isBackward();
                const _h5 = _f7 ? o.anchor.offset : o.focus.offset;
                const _g5 = _f7 ? o.focus.offset : o.anchor.offset;
                if (!(d && !o.isCollapsed() && Sr(_i38) && _a9.anchorNode !== null && _i38.getTextContent().slice(0, _h5) + t_data + _i38.getTextContent().slice(_h5 + _g5) === Ki(_a9.anchorNode))) {
                    Qi(e, Q, t_data);
                    l = t.inputType === "insertText";
                }
                const _p5 = t_data.length;
                if (u && _p5 > 1 && t.inputType === "insertCompositionText" && !e.isComposing()) {
                    o.anchor.offset -= _p5;
                    o._cachedNodes = null;
                    o._cachedIsBackward = null;
                }
                if (y && e.isComposing()) {
                    e__inputState.lastKeyDownTimeStamp = 0;
                    Si(null);
                }
            }
        }
        if (!s) {
            Bi(false, e, t_data !== null ? t_data : undefined);
            if (e__inputState.compositionPhase === "ending-firefox") {
                Sa(e, t_data || undefined);
                rs(Vl);
                e__inputState.compositionPhase = "idle";
            }
        }
        Di(l);
        return true;
    }
    function compositionstart(t, e) {
        Qi(e, Y, t);
    }
    function ma(t) {
        const e = vc();
        const e__inputState = e._inputState;
        const o = Su();
        if (Ha(o) && !e.isComposing()) {
            e__inputState.compositionPhase = "composing";
            e__inputState.hadOrphanedCompositionEvents = false;
            const _r63 = o.anchor;
            const _i39 = o.anchor.getNode();
            Si(_r63.key);
            rs(Hl);
            if (t.timeStamp < e__inputState.lastKeyDownTimeStamp + 30 || _r63.type === "element" || !o.isCollapsed() || !y && (_i39.getFormat() !== o.format || Sr(_i39) && _i39.getStyle() !== o.style) || Sr(_i39) && (fi(_i39) || _r63.offset === 0 && !_i39.canInsertTextBefore() || _r63.offset === _i39.getTextContentSize() && !_i39.canInsertTextAfter())) {
                Qi(e, Q, N);
                const _t195 = Su();
                if (Ha(_t195)) {
                    Si(_t195.anchor.key);
                }
            }
        }
        return true;
    }
    function ya(t) {
        const e = vc();
        e._inputState.compositionPhase = "idle";
        Sa(e, t.data);
        rs(Vl);
        return true;
    }
    function xa(t) {
        const _inputState = vc()._inputState;
        const e_composedSegmentedKey = _inputState.composedSegmentedKey;
        _inputState.composedSegmentedKey = null;
        if (t === null || t !== e_composedSegmentedKey) {
            return;
        }
        const o = Ti(t);
        if (!Sr(o) || o.getType() === "text" || fi(o) || !o.isAttached()) {
            return;
        }
        const r = Su();
        const i = Ha(r) && r.anchor.key === t ? r.anchor.offset : null;
        const s = xr(o.getTextContent());
        s.setFormat(o.getFormat());
        s.setStyle(o.getStyle());
        o.replace(s);
        if (i !== null) {
            const _t196 = Math.min(i, s.getTextContentSize());
            s.select(_t196, _t196);
        }
    }
    function Sa(t, e) {
        const t__compositionKey = t._compositionKey;
        Si(null);
        if (t__compositionKey !== null && e != null) {
            if (e === "") {
                const _e138 = Ti(t__compositionKey);
                const _o64 = t.getElementByKey(t__compositionKey);
                const _r64 = _o64 !== null && Sr(_e138) ? Js(_e138, _o64, t) : null;
                if (_r64 !== null && _r64.nodeValue !== null && Sr(_e138)) {
                    const _n102 = xs(cs(t));
                    const _o65 = _n102 && Ms(_n102, t._rootElement);
                    let _i40 = null;
                    let _s24 = null;
                    if (_o65 !== null && _o65.anchorNode === _r64) {
                        _i40 = _o65.anchorOffset;
                        _s24 = _o65.focusOffset;
                    }
                    $i(_e138, _r64.nodeValue, _i40, _s24, true);
                }
                xa(t__compositionKey);
                return false;
            }
            if (e[e.length - 1] === "\n") {
                const _e139 = Su();
                if (Ha(_e139) || Ya(_e139)) {
                    if (Ha(_e139)) {
                        const _t197 = _e139.focus;
                        _e139.anchor.set(_t197.key, _t197.offset, _t197.type);
                    }
                    Qi(t, gt, null);
                    xa(t__compositionKey);
                    return false;
                }
            }
            const _o66 = Ti(t__compositionKey);
            if (_o66 !== null && Sr(_o66) && fi(_o66)) {
                _o66.markDirty();
                const _t198 = Su();
                const _r65 = _o66.getTextContentSize();
                const _i41 = Ha(_t198) && _t198.anchor.key === t__compositionKey ? _t198.anchor.offset : _r65;
                _o66.select(_i41, _i41).insertText(e);
                return true;
            }
        }
        Bi(true, t, e);
        xa(t__compositionKey);
        return false;
    }
    function compositionend(t, e) {
        const e__inputState = e._inputState;
        if (u) {
            e__inputState.compositionPhase = "ending-firefox";
        } else if (g || !_ && !x) {
            Qi(e, J, t);
        } else {
            e__inputState.compositionPhase = "ending-safari";
            e__inputState.compositionEndData = t.data;
        }
    }
    function keydown(t, e) {
        const e__inputState = e._inputState;
        if (g) {
            e__inputState.isShiftKeyDown = t.key === "Shift" || e__inputState.isShiftKeyDown && t.shiftKey && t.key !== "CapsLock";
        }
        e__inputState.lastKeyDownTimeStamp = t.timeStamp;
        e__inputState.lastKeyCode = t.key;
        if (t.key !== "Backspace") {
            aa(e__inputState);
        }
        if (!e.isComposing()) {
            Qi(e, lt, t);
        }
    }
    function keyup(t, e) {
        if (!(t.shiftKey && t.key !== "CapsLock")) {
            e._inputState.isShiftKeyDown = false;
        }
    }
    const Na = {
        altKey: "any",
        ctrlKey: "any",
        metaKey: "any",
        shiftKey: "any"
    };
    const ba = {
        ctrlKey: true
    };
    const ka = {
        metaKey: true
    };
    const Ea = {
        shiftKey: "any"
    };
    const Oa = {
        altKey: "any",
        shiftKey: "any"
    };
    function Ma(t) {
        const e = vc();
        const e__inputState = e._inputState;
        if (t.key == null) {
            return true;
        }
        if (e__inputState.compositionPhase === "ending-safari") {
            const _o67 = ((t)=>t.key === "Backspace")(t);
            if (_o67) {
                Bc(e, function() {
                    Sa(e, e__inputState.compositionEndData);
                });
            }
            e__inputState.compositionPhase = "idle";
            e__inputState.compositionEndData = "";
            if (_o67) {
                return true;
            }
        }
        let e__keyDownShortcuts = e._keyDownShortcuts;
        if (e__keyDownShortcuts === null) {
            e__keyDownShortcuts = jt((()=>{
                const t = function t(_t199, e, n) {
                    return {
                        key: _t199,
                        modifiers: e,
                        onMatch: function onMatch(t, e) {
                            Qi(e, n, t);
                        }
                    };
                };
                const e = function e(t, _e140, n, o) {
                    return {
                        key: t,
                        modifiers: _e140,
                        onMatch: function onMatch(t, e) {
                            t.preventDefault();
                            Qi(e, n, o);
                        }
                    };
                };
                const n = function n(t, e) {
                    return {
                        key: "Enter",
                        modifiers: t,
                        onMatch: function onMatch(t, n) {
                            const n__inputState = n._inputState;
                            n__inputState.isInsertLineBreak = e && (!g || n__inputState.isShiftKeyDown);
                            Qi(n, gt, t);
                            if (t.defaultPrevented) {
                                n__inputState.isInsertLineBreak = false;
                            }
                        }
                    };
                };
                const o = function o(t, e) {
                    return {
                        key: t,
                        modifiers: Bt,
                        onMatch: function onMatch(t, n) {
                            const _selection = n._editorState._selection;
                            if (!(_selection === null || Ha(_selection))) {
                                t.preventDefault();
                                Qi(n, e, t);
                            }
                        }
                    };
                };
                return [
                    t("ArrowRight", Ea, ct),
                    t("ArrowLeft", Ea, ut),
                    t("ArrowUp", Oa, dt),
                    t("ArrowDown", Oa, ht),
                    n(babelHelpers.extends({}, Na, {
                        shiftKey: true
                    }), true),
                    n(babelHelpers.extends({}, Na, {
                        shiftKey: false
                    }), false),
                    t(" ", Na, pt),
                    {
                        key: "Backspace",
                        modifiers: Ea,
                        onMatch: function onMatch(t, e) {
                            if (Qi(e, _t, t)) {
                                ua(e._inputState);
                            }
                        }
                    },
                    t("Escape", Na, mt),
                    t("Delete", {}, yt),
                    e("Backspace", $t, et, true),
                    e("Delete", $t, et, false),
                    e("b", Bt, ot, "bold"),
                    e("u", Bt, ot, "underline"),
                    e("i", Bt, ot, "italic"),
                    t("Tab", Ea, xt),
                    e("z", Bt, it, undefined),
                    e("z", babelHelpers.extends({}, Bt, {
                        shiftKey: true
                    }), st, undefined)
                ].concat(Array.from(a ? [
                    {
                        key: "o",
                        modifiers: ba,
                        onMatch: function onMatch(t, e) {
                            t.preventDefault();
                            Qi(e, q, true);
                        }
                    },
                    t("ArrowLeft", babelHelpers.extends({
                        metaKey: true
                    }, Ea), ft),
                    t("ArrowRight", babelHelpers.extends({
                        metaKey: true
                    }, Ea), at),
                    e("h", ba, G, true),
                    e("d", ba, G, false),
                    e("Backspace", ka, nt, true),
                    e("Delete", ka, nt, false),
                    e("k", ba, nt, false)
                ] : [
                    t("Home", Ea, ft),
                    t("End", Ea, at),
                    e("y", ba, st, undefined)
                ]), [
                    {
                        key: "a",
                        modifiers: Bt,
                        onMatch: function onMatch(t, e) {
                            t.preventDefault();
                            if (Qi(e, wt, t)) {
                                ua(e._inputState);
                            }
                        }
                    },
                    o("c", copy),
                    o("x", cut)
                ]);
            })());
            e._keyDownShortcuts = e__keyDownShortcuts;
        }
        const r = e__keyDownShortcuts.match(t);
        if (r) {
            r.onMatch(t, e);
        }
        if (((t)=>t.ctrlKey || t.shiftKey || t.altKey || t.metaKey)(t)) {
            e.dispatchCommand(Lt, t);
        }
        return true;
    }
    function wa(t) {
        let t___lexicalEventHandles = t.__lexicalEventHandles;
        if (t___lexicalEventHandles === undefined) {
            t___lexicalEventHandles = [];
            t.__lexicalEventHandles = t___lexicalEventHandles;
        }
        return t___lexicalEventHandles;
    }
    function Aa(t, e, n, o) {
        if (o !== undefined) {
            for (const _t200 of o.editors){
                _t200._inputState.isSelectionChangeFromMouseDown = false;
            }
        }
        const anchorNode = Ms(e, t._rootElement).anchorNode;
        if (Rs(anchorNode) || di(anchorNode)) {
            Ai(yu(Cu(), e, t, n));
        }
    }
    var Da = new Map();
    function Ia(t) {
        const e = Ss(t.target);
        if (e === null) {
            return;
        }
        const n = es(t.target);
        let o = null;
        const r = n !== null ? jc.get(n) : undefined;
        if (n !== null) {
            if (r !== undefined) {
                const _t201 = r.editors;
                let _n103 = r.hasShadowEditor;
                if (_n103 === undefined) {
                    _n103 = false;
                    for (const _e141 of _t201){
                        if (_e141._rootElement !== null && Cs(_e141._rootElement.getRootNode())) {
                            _n103 = true;
                            break;
                        }
                    }
                    r.hasShadowEditor = _n103;
                }
                if (_n103) {
                    let _n104 = null;
                    for (const _r66 of _t201){
                        const _t202 = _r66._rootElement;
                        if (_t202 === null) {
                            continue;
                        }
                        const _i42 = Ms(e, _t202).anchorNode;
                        if (_i42 !== null && ci(_i42) === _r66) {
                            if (Cs(_t202.getRootNode())) {
                                o = _r66;
                                break;
                            }
                            if (_n104 === null) {
                                _n104 = _r66;
                            }
                        }
                    }
                    if (o === null && _n104 !== null) {
                        o = _n104;
                    }
                } else {
                    const _t203 = e.anchorNode;
                    if (!(_t203 === null || Rs(_t203) && _t203.shadowRoot !== null)) {
                        o = ci(_t203);
                    }
                }
            }
            if (o === null) {
                const _t204 = Fs(n);
                o = _t204 !== null ? ci(_t204) : null;
            }
        }
        if (o === null) {
            return;
        }
        if (o._inputState.isSelectionChangeFromMouseDown) {
            Bc(o, function() {
                return Aa(o, e, t, r);
            });
        }
        const i = Pi(o);
        const s = i[i.length - 1];
        const s__key = s._key;
        const c = Da.get(s__key);
        const a = c || s;
        if (a !== o) {
            Jc(e, a, false);
        }
        Jc(e, o, true);
        if (o !== s) {
            Da.set(s__key, o);
        } else if (c) {
            Da.delete(s__key);
        }
    }
    function Fa(t) {
        t._lexicalHandled = true;
    }
    function Pa(t) {
        return t._lexicalHandled === true;
    }
    var Ra = $();
    class _La {
        constructor(t, e, n){
            this._selection = null;
            this.key = t;
            this.offset = e;
            this.type = n;
        }
        is(t) {
            return this.key === t.key && this.offset === t.offset && this.type === t.type;
        }
        isBefore(t) {
            if (this.key === t.key) {
                return this.offset < t.offset;
            }
            return Wf(Dr(Tr(this, "next")), Dr(Tr(t, "next"))) < 0;
        }
        getNode() {
            const t = Ti(this.key);
            if (t === null) {
                e(20);
            }
            return t;
        }
        set(t, e, n, o) {
            const _selection = this._selection;
            const key = this.key;
            if (!(o && this.key === t && this.offset === e && this.type === n)) {
                this.key = t;
                this.offset = e;
                this.type = n;
                if (!xc()) {
                    if (Ci() === key) {
                        Si(t);
                    }
                    if (_selection !== null) {
                        _selection.setCachedNodes(null);
                        if (Ha(_selection)) {
                            _selection._cachedIsBackward = null;
                        }
                        _selection.dirty = true;
                    }
                }
            }
        }
    }
    function Ka(t, e, n) {
        return new _La(t, e, n);
    }
    function Ba(t, e) {
        let e___key = e.__key;
        let t_offset = t.offset;
        let r = "element";
        if (Sr(e)) {
            r = "text";
            const _t205 = e.getTextContentSize();
            if (t_offset > _t205) {
                t_offset = _t205;
            }
        } else if (!Vo(e)) {
            const _t206 = e.getNextSibling();
            if (Sr(_t206)) {
                e___key = _t206.__key;
                t_offset = 0;
                r = "text";
            } else {
                const _t207 = e.getParent();
                if (_t207) {
                    e___key = _t207.__key;
                    t_offset = e.getIndexWithinParent() + 1;
                }
            }
        }
        t.set(e___key, t_offset, r);
    }
    function $a(t, e) {
        if (Vo(e)) {
            const _n105 = e.getLastDescendant();
            if (Vo(_n105) || Sr(_n105)) {
                Ba(t, _n105);
            } else {
                Ba(t, e);
            }
        } else {
            Ba(t, e);
        }
    }
    function za(anchor, focus, format, style) {
        const r = anchor.getNode();
        const i = r.getChildAtIndex(anchor.offset);
        const s = xr();
        s.setFormat(format);
        s.setStyle(style);
        if (Vr(i)) {
            i.splice(0, 0, [
                s
            ]);
        } else if (i !== null) {
            const _t208 = shadowRoot(r) ? Hr().append(s) : s;
            i.insertBefore(_t208);
        } else if (shadowRoot(r)) {
            const _t209 = r.getLastChild();
            if (Vo(_t209) && !_t209.isInline() && _t209.isEmpty()) {
                _t209.append(s);
            } else {
                r.append(Hr().append(s));
            }
        } else {
            r.append(s);
        }
        if (anchor.is(focus)) {
            focus.set(s.__key, 0, "text");
        }
        anchor.set(s.__key, 0, "text");
    }
    function Wa(t, n, format, style) {
        const i = t.anchor.getNode();
        if (!Sr(i)) {
            e(398);
        }
        const offset = t.anchor.offset;
        const l = xr(n).setFormat(format).setStyle(style);
        const c = i.getParentOrThrow();
        const a = offset === 0;
        const u = a || offset === i.getTextContentSize();
        if (u && c.isInline() && !(a ? i.__prev : i.__next)) {
            Ef(c, a ? "previous" : "next").insert(l);
        } else {
            const _t210 = u ? i : i.splitText(offset)[0];
            if (a) {
                _t210.insertBefore(l, false);
            } else {
                _t210.insertAfter(l, false);
            }
        }
        if (i.getTextContent() === "" && i.isAttached()) {
            i.remove();
        }
        l.selectEnd();
        if (l.isComposing() && t.anchor.type === "text") {
            t.anchor.set(t.anchor.key, t.anchor.offset - n.length, t.anchor.type);
        }
    }
    var _Ua = (()=>{
        function Ua(t) {
            this._cachedNodes = null;
            this._nodes = t;
            this.dirty = false;
        }
        const _proto17 = Ua.prototype;
        _proto17.getCachedNodes = function getCachedNodes() {
            return this._cachedNodes;
        };
        _proto17.setCachedNodes = function setCachedNodes(t) {
            this._cachedNodes = t;
        };
        _proto17.is = function is(t) {
            if (!Ya(t)) {
                return false;
            }
            const _nodes = this._nodes;
            const t__nodes = t._nodes;
            return _nodes.size === t__nodes.size && Array.from(_nodes).every((t)=>t__nodes.has(t));
        };
        _proto17.isCollapsed = function isCollapsed() {
            return false;
        };
        _proto17.isBackward = function isBackward() {
            return false;
        };
        _proto17.getStartEndPoints = function getStartEndPoints() {
            return null;
        };
        _proto17.add = function add(t) {
            this.dirty = true;
            this._nodes.add(t);
            this._cachedNodes = null;
        };
        _proto17.delete = function _delete(t) {
            this.dirty = true;
            this._nodes.delete(t);
            this._cachedNodes = null;
        };
        _proto17.clear = function clear() {
            this.dirty = true;
            this._nodes.clear();
            this._cachedNodes = null;
        };
        _proto17.has = function has(t) {
            return this._nodes.has(t);
        };
        _proto17.clone = function clone() {
            return new Ua(new Set(this._nodes));
        };
        _proto17.extract = function extract() {
            return this.getNodes();
        };
        _proto17.insertRawText = function insertRawText(t) {};
        _proto17.insertText = function insertText() {};
        _proto17.insertNodes = function insertNodes(t) {
            const e = this.getNodes().filter((t)=>Ju(t) === null);
            const e_length = e.length;
            if (e_length === 0) {
                return;
            }
            const o = e[e_length - 1];
            let r;
            if (Sr(o)) {
                r = o.select();
            } else {
                const _t211 = o.getIndexWithinParent() + 1;
                r = o.getParentOrThrow().select(_t211, _t211);
            }
            r.insertNodes(t);
            for(let _t212 = 0; _t212 < e_length; _t212++){
                e[_t212].remove();
            }
        };
        _proto17.getNodes = function getNodes() {
            const _cachedNodes = this._cachedNodes;
            if (_cachedNodes !== null) {
                return _cachedNodes;
            }
            const _nodes = this._nodes;
            const n = [];
            for (const _t213 of _nodes){
                const _e142 = Ti(_t213);
                if (_e142 !== null) {
                    n.push(_e142);
                }
            }
            if (!xc()) {
                this._cachedNodes = n;
            }
            return n;
        };
        _proto17.getTextContent = function getTextContent() {
            const t = this.getNodes();
            let e = "";
            for(let _n106 = 0; _n106 < t.length; _n106++){
                e += t[_n106].getTextContent();
            }
            return e;
        };
        _proto17.deleteNodes = function deleteNodes() {
            const t = this.getNodes().filter((t)=>Ju(t) === null);
            if ((Su() || Cu()) === this && t[0]) {
                const _e143 = Ef(t[0], "next");
                Nr($f(_e143, _e143));
            }
            for (const _e144 of t){
                _e144.remove();
            }
            ja();
        };
        return Ua;
    })();
    function ja() {
        const t = Mi();
        if (t.getChildrenSize() === 0 && Qu(Su()) === null) {
            const _e145 = Hr();
            t.append(_e145);
            _e145.select();
        }
    }
    function Ha(t) {
        return t instanceof _Va;
    }
    var _Va = (()=>{
        function Va(t, e, n, o) {
            this.anchor = t;
            this.focus = e;
            t._selection = this;
            e._selection = this;
            this._cachedNodes = null;
            this._cachedIsBackward = null;
            this.format = n;
            this.style = o;
            this.dirty = false;
        }
        const _proto18 = Va.prototype;
        _proto18.getCachedNodes = function getCachedNodes() {
            return this._cachedNodes;
        };
        _proto18.setCachedNodes = function setCachedNodes(t) {
            this._cachedNodes = t;
        };
        _proto18.is = function is(t) {
            return !!Ha(t) && this.anchor.is(t.anchor) && this.focus.is(t.focus) && this.format === t.format && this.style === t.style;
        };
        _proto18.isCollapsed = function isCollapsed() {
            return this.anchor.is(this.focus);
        };
        _proto18.getNodes = function getNodes() {
            const _cachedNodes = this._cachedNodes;
            if (_cachedNodes !== null) {
                return _cachedNodes;
            }
            const e = ((t)=>{
                const e = [];
                const _t$getTextSlices = t.getTextSlices();
                const n = _t$getTextSlices[0];
                const o = _t$getTextSlices[1];
                if (n) {
                    e.push(n.caret.origin);
                }
                const r = new Set();
                let i = 0;
                for (const _n107 of t){
                    if (vf(_n107)) {
                        const _t214 = _n107.origin;
                        if (e.length === 0) {
                            r.add(_t214);
                        } else {
                            i++;
                            e.push(_t214);
                        }
                    } else {
                        const _t215 = _n107.origin;
                        if (Vo(_t215) && i !== 0) {
                            i--;
                        } else {
                            e.push(_t215);
                        }
                    }
                }
                if (o) {
                    e.push(o.caret.origin);
                }
                if (hasNext(t.focus) && Vo(t.focus.origin) && t.focus.getNodeAtCaret() === null) {
                    for(let _n108 = Af(t.focus.origin, "previous"); vf(_n108) && r.has(_n108.origin) && !_n108.origin.isEmpty() && _n108.origin.is(e[e.length - 1]); _n108 = If(_n108)){
                        r.delete(_n108.origin);
                        e.pop();
                    }
                }
                while(e.length > 1){
                    const _t216 = e[e.length - 1];
                    if (!Vo(_t216) || i > 0 || _t216.isEmpty() || r.has(_t216)) {
                        break;
                    }
                    e.pop();
                }
                if (e.length === 0 && t.isCollapsed()) {
                    const _n109 = Dr(t.anchor);
                    const _o68 = Dr(t.anchor.getFlipped());
                    const _r67 = function _r67(t) {
                        if (Cf(t)) {
                            return t.origin;
                        }
                        return t.getNodeAtCaret();
                    };
                    const _i43 = _r67(_n109) || _r67(_o68) || (t.anchor.getNodeAtCaret() ? _n109.origin : _o68.origin);
                    e.push(_i43);
                }
                return e;
            })(Fr(kr(this), "next"));
            if (!xc()) {
                this._cachedNodes = e;
            }
            return e;
        };
        _proto18.setTextNodeRange = function setTextNodeRange(t, e, n, o) {
            this.anchor.set(t.__key, e, "text");
            this.focus.set(n.__key, o, "text");
            return this;
        };
        _proto18.getTextContent = function getTextContent() {
            if (this.isCollapsed()) {
                return "";
            }
            const t = this.getNodes();
            const e = kr(this).getTextSlices();
            let n = "";
            let o = true;
            for (const _i44 of t){
                if (Vo(_i44) && !_i44.isInline()) {
                    if (!o) {
                        n += "\n";
                    }
                    let _t217 = "";
                    for (const _e146 of tf(_i44)){
                        const _n110 = ef(_i44, _e146);
                        if (_n110 !== null) {
                            _t217 += _n110.getTextContent();
                        }
                    }
                    if (_t217 !== "") {
                        n += _t217;
                        o = false;
                    } else {
                        o = !_i44.isEmpty();
                    }
                } else {
                    o = false;
                    if (Sr(_i44)) {
                        const _t218 = Lr(e, _i44);
                        n += _t218 ? _t218.getTextContent() : _i44.getTextContent();
                    } else {
                        if (Go(_i44) || Xl(_i44)) {
                            n += _i44.getTextContent();
                        }
                    }
                }
            }
            return n;
        };
        _proto18.applyDOMRange = function applyDOMRange(t) {
            const e = vc();
            const _selection = e.getEditorState()._selection;
            const o = fu(t.startContainer, t.startOffset, t.endContainer, t.endOffset, e, _selection);
            if (o === null) {
                return;
            }
            const r = o[0];
            const i = o[1];
            const s = o[2];
            this.anchor.set(r.key, r.offset, r.type, true);
            this.focus.set(i.key, i.offset, i.type, true);
            if (s) {
                this.dirty = true;
            }
            Oo(this);
        };
        _proto18.clone = function clone() {
            const anchor = this.anchor;
            const focus = this.focus;
            return new Va(Ka(anchor.key, anchor.offset, anchor.type), Ka(focus.key, focus.offset, focus.type), this.format, this.style);
        };
        _proto18.toggleFormat = function toggleFormat(t) {
            this.format = pi(this.format, t, null);
            this.dirty = true;
        };
        _proto18.setFormat = function setFormat(t) {
            this.format = t;
            this.dirty = true;
        };
        _proto18.setStyle = function setStyle(t) {
            this.style = t;
            this.dirty = true;
        };
        _proto18.hasFormat = function hasFormat(t) {
            const e = w[t];
            return (this.format & e) !== 0;
        };
        _proto18.insertRawText = function insertRawText(t) {
            this.insertNodes(wu(t));
        };
        _proto18.insertText = function insertText(t) {
            let format = this.format;
            let style = this.style;
            if (!this.isCollapsed()) {
                const _e147 = (this.focus.isBefore(this.anchor) ? this.focus : this.anchor).getNode();
                if (Sr(_e147)) {
                    format = _e147.getFormat();
                    style = _e147.getStyle();
                }
                this.removeText();
                this.format = format;
                this.style = style;
                if (t === "") {
                    return;
                }
                if (Ci() === null) {
                    if (this.anchor.type === "element") {
                        za(this.anchor, this.focus, format, style);
                    }
                    return void Wa(this, t, format, style);
                }
            }
            if (this.anchor.type === "element") {
                za(this.anchor, this.focus, format, style);
            }
            const r = this.anchor.getNode();
            if (!Sr(r)) {
                e(398);
            }
            const offset = this.anchor.offset;
            const s = r.getParentOrThrow();
            const l = r.getTextContentSize();
            if (fi(r) || offset === 0 && (!r.canInsertTextBefore() || !s.canInsertTextBefore() && !r.__prev) || offset === l && (!r.canInsertTextAfter() || !s.canInsertTextAfter() && !r.__next)) {
                if (r.isSegmented() && offset !== 0 && offset !== l) {
                    if (Ci() !== null) {
                        r.setMode("normal").setFormat(format).setStyle(style);
                        vc()._inputState.composedSegmentedKey = r.getKey();
                    } else {
                        const _t219 = xr(r.getTextContent());
                        _t219.setFormat(format);
                        _t219.setStyle(style);
                        const _e148 = Su() === this;
                        r.replace(_t219);
                        this.setTextNodeRange(_t219, offset, _t219, offset);
                        if (_e148 && Su() !== this) {
                            Ai(this);
                        }
                    }
                    return void (t !== "" && this.insertText(t));
                }
                if (t === "") {
                    return;
                }
                if (offset === 0 || offset === l) {
                    const _e149 = offset === 0;
                    const _l19 = _e149 ? "previous" : "next";
                    const _c12 = Ef(r, _l19).getNodeAtCaret();
                    let _a0;
                    if (Sr(_c12) && (_e149 ? _c12.canInsertTextAfter() : _c12.canInsertTextBefore()) && !fi(_c12)) {
                        _a0 = _c12;
                    } else {
                        _a0 = xr().setFormat(format).setStyle(style);
                        Ef((_e149 ? s.canInsertTextBefore() : s.canInsertTextAfter()) ? r : s, _l19).insert(_a0);
                    }
                    const _u7 = _e149 ? undefined : 0;
                    _a0.select(_u7, _u7);
                    return void this.insertText(t);
                }
                const _e150 = xr(t);
                _e150.setFormat(format);
                _e150.setStyle(style);
                r.replace(_e150);
                return void _e150.select();
            }
            if (t === "") {
                return;
            }
            const c = s.isInline() && offset === 0 && !r.__prev;
            const a = s.isInline() && offset === l && !r.__next;
            const u = r.getFormat() !== format || r.getStyle() !== style;
            if (c || a || u) {
                if (r.getTextContent() !== "" || c || a) {
                    return void Wa(this, t, format, style);
                }
                r.setFormat(format);
                r.setStyle(style);
            }
            r.spliceText(offset, 0, t, true);
            if (r.isComposing() && this.anchor.type === "text") {
                this.anchor.set(this.anchor.key, this.anchor.offset - t.length, this.anchor.type);
            }
        };
        _proto18.removeText = function removeText() {
            const t = Su() === this;
            const key = this.anchor.key;
            br(this, wr(kr(this)));
            if (this.isCollapsed()) {
                xu(this, key);
            }
            if (t && Su() !== this) {
                Ai(this);
            }
        };
        _proto18.formatText = function formatText(t, e = null) {
            qa(this, t, e);
        };
        _proto18.insertNodes = function insertNodes(t) {
            if (t.length === 0) {
                return;
            }
            if (!this.isCollapsed()) {
                this.removeText();
            }
            const n = this.anchor.getNode();
            if (this.anchor.type === "element" && Vo(n) && n.isShadowRoot() && Ju(n) !== null) {
                let _o69 = n.getFirstChild() ?? n.append(Hr()).getFirstChild();
                if (_o69 !== null && !Vo(_o69)) {
                    const _t220 = Hr();
                    _o69.insertBefore(_t220);
                    _o69 = _t220;
                }
                if (_o69 !== null) {
                    _o69.selectStart();
                    const _n111 = Su();
                    if (!Ha(_n111)) {
                        e(369);
                    }
                    return _n111.insertNodes(t);
                }
            }
            if (this.anchor.type === "element" && shadowRoot(n)) {
                const _e151 = Pu(t);
                const _o70 = _e151.getLastDescendant();
                n.splice(this.anchor.offset, 0, _e151.getChildren());
                return void (_o70 !== null && _o70.selectEnd());
            }
            const o = this.isBackward() ? this.focus : this.anchor;
            let r = o.getNode();
            let i = Il(r, Us);
            const s = t[t.length - 1];
            if (Vo(i) && "__language" in i) {
                if ("__language" in t[0]) {
                    this.insertText(t[0].getTextContent());
                } else {
                    const _Du = Du(this);
                    const _e152 = _Du[1];
                    i.splice(_e152, 0, t);
                    s.selectEnd();
                }
                return;
            }
            if (!t.some((t)=>(Vo(t) || Go(t)) && !t.isInline())) {
                if (!Vo(i)) {
                    e(211, r.constructor.name, r.getType());
                }
                const _Du2 = Du(this, true);
                const _n112 = _Du2[0];
                const _o71 = _Du2[1];
                (Vo(_n112) ? _n112 : i).splice(_o71, 0, t);
                return void s.selectEnd();
            }
            if (i === null) {
                const _e153 = Pu(t);
                const _n113 = _e153.getLastDescendant();
                let _o72 = Tr(this.anchor, "next");
                for (const _t221 of _e153.getChildren()){
                    _o72 = zr(_t221, _o72);
                }
                return void (_n113 !== null && _n113.selectEnd());
            }
            if (Vo(i) && (Ju(i) !== null || !i.isParentRequired() && !shadowRoot(i.getParentOrThrow()))) {
                const _Du3 = Du(this);
                const _e154 = _Du3[1];
                const _n114 = Au(t);
                i.splice(_e154, 0, _n114);
                const _o73 = _n114[_n114.length - 1];
                return void (_o73 !== undefined ? _o73.selectEnd() : i.select(_e154, _e154));
            }
            const l = Pu(t);
            const c = l.getLastDescendant();
            const a = l.getChildren();
            const u = ((t)=>{
                const e = ((t)=>{
                    const e = t.getNode();
                    if (t.offset > 0) {
                        if (t.type === "element" && Vo(e)) {
                            return e.getChildAtIndex(t.offset - 1);
                        }
                        return null;
                    }
                    for(let _t222 = e; _t222 !== null && !Us(_t222) && !shadowRoot(_t222); _t222 = _t222.getParent()){
                        const _e155 = _t222.getPreviousSibling();
                        if (_e155 !== null) {
                            return _e155;
                        }
                    }
                    return null;
                })(t);
                return Xl(e) && Xl(e.getPreviousSibling());
            })(o);
            const f = Vo(i) && i.isEmpty() ? null : this.insertParagraph();
            if (f && !i.isAttached()) {
                r = this.anchor.getNode();
                i = Il(r, Us);
            }
            const d = a[a.length - 1];
            let h = a[0];
            let g;
            g = h;
            if (!(u || !Vo(g) || !Us(g) || g.isEmpty() || !Vo(i) || i.isEmpty() && !i.canMergeWhenEmpty())) {
                if (!Vo(i)) {
                    e(211, r.constructor.name, r.getType());
                }
                i.append(...Array.from(h.getChildren()));
                h = a[1];
            }
            if (h) {
                if (i === null) {
                    e(212, r.constructor.name, r.getType());
                }
                ((t, n)=>{
                    const o = n.getParentOrThrow().getLastChild();
                    let r = n;
                    const i = [
                        n
                    ];
                    while(r !== o){
                        if (!r.getNextSibling()) {
                            e(140);
                        }
                        r = r.getNextSibling();
                        i.push(r);
                    }
                    let s = t;
                    for (const _t223 of i){
                        s = s.insertAfter(_t223);
                    }
                })(i, h);
            }
            const p = Il(c, Us);
            const _ = c.selectEnd();
            if (f) {
                if (Vo(p) && (f.canMergeWhenEmpty() || Us(d))) {
                    p.append(...Array.from(f.getChildren()));
                    f.remove();
                } else if (f.isEmpty()) {
                    f.remove();
                }
            }
            if (Vo(i) && i.isEmpty()) {
                i.remove();
            }
            const m = Vo(i) ? i.getLastChild() : null;
            if (Xl(m) && p !== i) {
                m.remove();
            }
            const y = Dr(Tr(_.anchor, "next"));
            vr(_.anchor, y);
            vr(_.focus, y);
        };
        _proto18.insertParagraph = function insertParagraph() {
            if (!this.isCollapsed()) {
                this.removeText();
            }
            const t = this.anchor.getNode();
            if (this.anchor.type === "element" && shadowRoot(t)) {
                const _e156 = Hr();
                t.splice(this.anchor.offset, 0, [
                    _e156
                ]);
                _e156.select();
                return _e156;
            }
            const _Du4 = Du(this);
            const n = _Du4[1];
            const o = Il(this.anchor.getNode(), Us);
            if (o !== null && Ju(o) !== null) {
                return null;
            }
            if (!Vo(o)) {
                e(213);
            }
            const r = o.getChildAtIndex(n);
            const i = r ? [
                r
            ].concat(Array.from(r.getNextSiblings())) : [];
            const s = o.insertNewAfter(this, false);
            if (s) {
                s.append(...Array.from(i));
                s.selectStart();
                return s;
            }
            return null;
        };
        _proto18.insertLineBreak = function insertLineBreak(t) {
            const e = ql();
            this.insertNodes([
                e
            ]);
            if (t) {
                const _t224 = e.getParentOrThrow();
                const _n115 = e.getIndexWithinParent();
                _t224.select(_n115, _n115);
            }
        };
        _proto18.extract = function extract() {
            const t = this.getNodes();
            if (this.isCollapsed()) {
                return [].concat(Array.from(t));
            }
            const e = this.isBackward();
            const n = kr(this).getTextSlices();
            const o = [];
            for (const _e157 of t){
                const _t225 = Lr(n, _e157);
                const _r69 = _t225 ? Kr(_t225, this) : _e157;
                if (_r69 !== null) {
                    o.push(_r69);
                }
            }
            if (t.length === 1 && o.length === 1 && Sr(o[0])) {
                const _t226 = o[0];
                const _ref72 = e ? [
                    this.focus,
                    this.anchor
                ] : [
                    this.anchor,
                    this.focus
                ];
                const _n116 = _ref72[0];
                const _r70 = _ref72[1];
                _n116.set(_t226.getKey(), 0, "text");
                _r70.set(_t226.getKey(), _t226.getTextContentSize(), "text");
            }
            return o;
        };
        _proto18.modify = function modify(t, e, n) {
            if (Ru(this, t, e, n)) {
                return;
            }
            const o = t === "move";
            const r = vc();
            const i = xs(cs(r));
            if (!i) {
                return;
            }
            const { _blockCursorElement, _rootElement } = r;
            const c = this.focus.getNode();
            if (!(_rootElement === null || _blockCursorElement === null || !Vo(c) || c.isInline() || c.canBeEmpty())) {
                ys(_blockCursorElement, r, _rootElement);
            }
            const a = Zi(r, this.focus.key);
            let u = a;
            if (this.focus.type === "text") {
                u = Sr(c) ? Js(c, a, r) : null;
            }
            if (this.dirty) {
                const _t227 = Zi(r, this.anchor.key);
                let _e158 = _t227;
                if (this.anchor.type === "text") {
                    const _n117 = this.anchor.getNode();
                    _e158 = Sr(_n117) ? Js(_n117, _t227, r) : null;
                }
                if (_e158 && u) {
                    ku(i, _e158, this.anchor.offset, u, this.focus.offset);
                }
            }
            if (n === "character" && Sr(c) && c.isUnmergeable() && (e ? this.focus.offset === 0 : this.focus.offset === c.getTextContentSize())) {
                const _t228 = Ef(c, e ? "previous" : "next").getNodeAtCaret();
                if (Sr(_t228)) {
                    if (!o) {
                        const _n118 = _t228.getTextContentSize();
                        if (e) {
                            this.focus.set(_t228.__key, _n118 - 1, "text");
                        } else {
                            this.focus.set(_t228.__key, 1, "text");
                        }
                        return void (this.dirty = true);
                    }
                    {
                        const _n119 = r.getElementByKey(_t228.getKey());
                        const _o74 = _n119 ? Js(_t228, _n119, r) : null;
                        if (_o74) {
                            const _t229 = e ? _o74.length : 0;
                            ku(i, _o74, _t229, _o74, _t229);
                        }
                    }
                }
            }
            tu(i, t, e ? "backward" : "forward", n, _rootElement);
            if (i.rangeCount > 0) {
                const _t230 = Es(i, r._rootElement);
                const _n120 = _t230 || i.getRangeAt(0);
                const _s25 = this.anchor.getNode();
                const _l20 = root(_s25) ? _s25 : us(_s25);
                this.applyDOMRange(_n120);
                this.dirty = true;
                if (!o) {
                    eu(this, e, _l20);
                    if (!(_t230 ? i.direction !== "backward" : i.anchorNode === _n120.startContainer && i.anchorOffset === _n120.startOffset)) {
                        Za(this);
                    }
                }
            }
            if (n === "lineboundary") {
                Ru(this, t, e, n, "decorators");
            }
        };
        _proto18.forwardDeletion = function forwardDeletion(t, e, n) {
            if (!n && (t.type === "element" && Vo(e) && t.offset === e.getChildrenSize() || t.type === "text" && t.offset === e.getTextContentSize())) {
                const _t231 = e.getParent();
                const _n121 = e.getNextSibling() || (_t231 === null ? null : _t231.getNextSibling());
                if (Vo(_n121) && _n121.isShadowRoot()) {
                    return true;
                }
            }
            return false;
        };
        _proto18.deleteCharacter = function deleteCharacter(t) {
            const e = this.isCollapsed();
            if (this.isCollapsed()) {
                const _e159 = this.anchor;
                let _n122 = _e159.getNode();
                if (this.forwardDeletion(_e159, _n122, t)) {
                    const _t232 = Vo(_n122) ? _n122.getNextSibling() : null;
                    if (!(Vo(_n122) && _n122.isEmpty() && Vo(_t232) && _t232.isShadowRoot())) {
                        return;
                    }
                }
                const _o75 = Tr(_e159, t ? "previous" : "next");
                const _r71 = Kf(_o75);
                if (_r71.getTextSlices().every((t)=>t === null || t.distance === 0)) {
                    if (_e159.type === "element") {
                        const _t233 = _o75.getNodeAtCaret();
                        if (Vo(_t233) && ms(_t233)) {
                            const _e160 = _t233.getParent();
                            _t233.remove();
                            const _n123 = wi(_e160, _t233);
                            return void (_n123 !== null && _n123.selectStart());
                        }
                    }
                    let _t234 = {
                        type: "initial"
                    };
                    for (const caret of _r71.iterNodeCarets("shadowRoot")){
                        if (vf(caret)) {
                            if (caret.origin.isInline()) ;
                            else {
                                if (caret.origin.isShadowRoot()) {
                                    if (_t234.type === "merge-block") {
                                        break;
                                    }
                                    if (Vo(_r71.anchor.origin) && _r71.anchor.origin.isEmpty()) {
                                        const _t235 = Dr(caret);
                                        br(this, $f(_t235, _t235));
                                        _r71.anchor.origin.remove();
                                    }
                                    return;
                                }
                                if (!(_t234.type !== "merge-next-block" && _t234.type !== "merge-block")) {
                                    _t234 = {
                                        block: _t234.block,
                                        caret,
                                        type: "merge-block"
                                    };
                                }
                            }
                        } else {
                            if (_t234.type === "merge-block") {
                                break;
                            }
                            if (hasNext(caret)) {
                                if (Vo(caret.origin)) {
                                    if (caret.origin.isInline()) {
                                        if (!caret.origin.isParentOf(_r71.anchor.origin)) {
                                            break;
                                        }
                                    } else {
                                        _t234 = {
                                            block: caret.origin,
                                            type: "merge-next-block"
                                        };
                                    }
                                    continue;
                                }
                                if (Go(caret.origin)) {
                                    if (caret.origin.isIsolated()) ;
                                    else if (_t234.type === "merge-next-block" && (caret.origin.isKeyboardSelectable() || !caret.origin.isInline()) && Vo(_r71.anchor.origin) && _r71.anchor.origin.isEmpty()) {
                                        _r71.anchor.origin.remove();
                                        const _t236 = pu();
                                        _t236.add(caret.origin.getKey());
                                        Ai(_t236);
                                    } else {
                                        const _t237 = caret.origin;
                                        const _n124 = _t237.getParent();
                                        _t237.remove();
                                        const _o76 = wi(_n124, _t237);
                                        if (_o76 !== null) {
                                            _o76.selectStart();
                                        }
                                    }
                                    return;
                                }
                                if (Xl(caret.origin)) {
                                    return void caret.origin.remove();
                                }
                                break;
                            }
                        }
                    }
                    if (_t234.type === "merge-block") {
                        const _t238 = _t234;
                        const { caret, block } = _t238;
                        if (tf(block).length > 0) {
                            return;
                        }
                        if (caret.origin.isEmpty() && !block.isEmpty() && caret.origin.getParent() === block.getParent()) {
                            return void caret.origin.remove(true);
                        }
                        br(this, $f(!caret.origin.isEmpty() && block.isEmpty() ? Er(Ef(block, caret.direction)) : _r71.anchor, caret));
                        return this.removeText();
                    }
                    for(let _t239 = _e159.getNode(); _t239 !== null;){
                        if (Ju(_t239) !== null) {
                            return;
                        }
                        if (Vo(_t239) && _t239.isShadowRoot()) {
                            break;
                        }
                        _t239 = _t239.getParent();
                    }
                }
                const _i46 = this.focus;
                nu(this, t, "character");
                if (this.isCollapsed()) {
                    if (t && _e159.offset === 0 && ((t, e)=>{
                        for(let _n126 = e; _n126; _n126 = _n126.getParent()){
                            if (Vo(_n126)) {
                                if (_n126.collapseAtStart(t)) {
                                    return true;
                                }
                                if (shadowRoot(_n126)) {
                                    break;
                                }
                            }
                            if (_n126.getPreviousSibling()) {
                                break;
                            }
                        }
                        return false;
                    })(this, _e159.getNode())) {
                        return;
                    }
                } else {
                    const _o77 = _i46.type === "text" ? _i46.getNode() : null;
                    _n122 = _e159.type === "text" ? _e159.getNode() : null;
                    if (_o77 !== null && _o77.isSegmented()) {
                        const _e163 = _i46.offset;
                        const _r72 = _o77.getTextContentSize();
                        if (_o77.is(_n122) || t && _e163 !== _r72 || !t && _e163 !== 0) {
                            return void iu(_o77, t, _e163);
                        }
                    } else if (_n122 !== null && _n122.isSegmented()) {
                        const _r73 = _e159.offset;
                        const _i47 = _n122.getTextContentSize();
                        if (_n122.is(_o77) || t && _r73 !== 0 || !t && _r73 !== _i47) {
                            return void iu(_n122, t, _r73);
                        }
                    }
                    (({ anchor, focus }, e)=>{
                        const r = anchor.getNode();
                        if (r === focus.getNode() && anchor.type === "text" && focus.type === "text") {
                            const _t240 = anchor.offset;
                            const _s26 = focus.offset;
                            const _l21 = _t240 < _s26;
                            const _c13 = _l21 ? _t240 : _s26;
                            const _a1 = _l21 ? _s26 : _t240;
                            const _u8 = _a1 - 1;
                            if (_c13 !== _u8 && !Fi(i = r.getTextContent().slice(_c13, _a1)) && !ru(i)) {
                                if (e) {
                                    focus.set(focus.key, _u8, focus.type);
                                } else {
                                    anchor.set(anchor.key, _u8, anchor.type);
                                }
                            }
                        }
                        var i;
                    })(this, t);
                }
            }
            if (!e) {
                Qa(this);
            }
            this.removeText();
            if (t && !e && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
                ja();
            }
        };
        _proto18.deleteLine = function deleteLine(t) {
            const e = cu(this.anchor);
            if (e !== null && Go(Gu(e))) {
                if (!this.isCollapsed()) {
                    this.focus.set(this.anchor.key, this.anchor.offset, this.anchor.type);
                }
                return void this.deleteCharacter(t);
            }
            Ja(this, t, "lineboundary");
        };
        _proto18.deleteWord = function deleteWord(t) {
            Ja(this, t, "word");
        };
        _proto18.isBackward = function isBackward() {
            const _cachedIsBackward = this._cachedIsBackward;
            if (_cachedIsBackward !== null) {
                return _cachedIsBackward;
            }
            const e = this.focus.isBefore(this.anchor);
            if (!xc()) {
                this._cachedIsBackward = e;
            }
            return e;
        };
        _proto18.getStartEndPoints = function getStartEndPoints() {
            return [
                this.anchor,
                this.focus
            ];
        };
        return Va;
    })();
    function Ya(t) {
        return t instanceof _Ua;
    }
    function Ja(t, e, n) {
        const o = t.isCollapsed();
        const { anchor, focus } = t;
        if (o) {
            if (n === "word" && t.forwardDeletion(anchor, anchor.getNode(), e)) {
                return;
            }
            nu(t, e, n);
            if (n === "lineboundary") {
                ((t)=>{
                    for (const _e164 of kr(t).iterNodeCarets("shadowRoot")){
                        if (hasNext(_e164) && Xl(_e164.origin)) {
                            return void vr(t.focus, Er(_e164));
                        }
                    }
                })(t);
            }
        }
        if (!(n !== "lineboundary" || t.isCollapsed() || Il(anchor.getNode(), Us) === Il(focus.getNode(), Us))) {
            focus.set(anchor.key, anchor.offset, anchor.type);
        }
        if (t.isCollapsed()) {
            t.deleteCharacter(e);
        } else {
            if (!o) {
                Qa(t);
            }
            t.removeText();
        }
    }
    function Ga(t, e) {
        if (Ya(t)) {
            for (const _n127 of t.getNodes()){
                if (ar(_n127)) {
                    _n127.setFormat(e(_n127.getFormat()));
                }
            }
            return;
        }
        const n = t.isCollapsed() ? [] : t.getNodes();
        const o = n.length ? kr(t).getTextSlices() : [];
        let r;
        let i;
        let s;
        let l = false;
        let c = 0;
        for (const _a10 of n){
            if (Sr(_a10)) {
                if (r && i) {
                    r.set(i.__key, 0, "text");
                    r = undefined;
                }
                const _n128 = Lr(o, _a10);
                if (!l && _n128 && _n128.distance === 0) {
                    const _e165 = t.isBackward() ? t.focus : t.anchor;
                    if (_e165.type === "text" && _e165.key === _a10.__key) {
                        r = _e165;
                    }
                }
                l = true;
                if (_n128 && _n128.distance === 0) {
                    continue;
                }
                const _u9 = e(_a10.getFormat());
                const _f8 = r ? _a10.getTextContentSize() : 0;
                const _d4 = _n128 && !fi(_a10) ? Kr(_n128, t) : _a10;
                if (_d4 !== null) {
                    _d4.setFormat(_u9);
                    if (s === undefined) {
                        s = _u9;
                        i = _d4;
                        if (r && _d4.getTextContentSize() !== _f8) {
                            r.set(_d4.__key, 0, "text");
                            r = undefined;
                        }
                    }
                    c = _u9;
                }
            } else {
                if (Vo(_a10)) {
                    _a10.setTextFormat(e(_a10.getTextFormat()));
                } else if (ar(_a10)) {
                    _a10.setFormat(e(_a10.getFormat()));
                }
            }
        }
        if (l) {
            if (s !== undefined) {
                t.format = s | c;
            }
        } else {
            t.setFormat(e(t.format));
            Si(null);
        }
    }
    function qa(t, e, n = null) {
        const o = n === null && Ha(t) ? pi(t.format, e, null) : n;
        Ga(t, (t)=>pi(t, e, o));
    }
    function Xa(t) {
        const t_offset = t.offset;
        if (t.type === "text") {
            return t_offset;
        }
        const n = t.getNode();
        if (t_offset === n.getChildrenSize()) {
            return n.getTextContent().length;
        }
        return 0;
    }
    function Qa(t) {
        const e = Mi();
        if (!e.isEmpty() && Wr(e, t)) {
            t.anchor.set(e.getKey(), 0, "element");
            t.focus.set(e.getKey(), e.getChildrenSize(), "element");
        }
    }
    function Za({ focus, anchor }) {
        const { key, offset, type } = anchor;
        anchor.set(focus.key, focus.offset, focus.type, true);
        focus.set(key, offset, type, true);
    }
    function tu(t, e, n, o, _rootElement) {
        const i = o === "character" ? Ms(t, _rootElement) : null;
        const s = i && i.focusNode;
        const l = i ? i.focusOffset : 0;
        t.modify(e, n, o);
        if (i === null || !((t, e, n)=>t !== null && t.nodeType === 3 && (n === "backward" ? e > 0 : n === "forward" && e < t.length))(s, l, n)) {
            return;
        }
        const c = Ms(t, _rootElement);
        if (c.focusNode === s && c.focusOffset === l) {
            t.modify(e, n, o);
        }
    }
    function eu(t, e, n) {
        const o = t.getNodes();
        const r = o.filter((t)=>ss(t, n));
        if (r.length === 0 || r.length === o.length) {
            return false;
        }
        const i = e ? r[0] : r[r.length - 1];
        const s = Vo(i) ? i : i.getParentOrThrow();
        if (e) {
            s.selectStart();
        } else {
            s.selectEnd();
        }
        return true;
    }
    function nu(t, e, n) {
        if (Ru(t, "extend", e, n)) {
            return;
        }
        const o = vc();
        const r = xs(cs(o));
        if (!r || typeof r.modify !== "function") {
            return;
        }
        const { _blockCursorElement, _rootElement } = o;
        const t_anchor = t.anchor;
        const c = t.focus.getNode();
        if (!(_rootElement === null || _blockCursorElement === null || !Vo(c) || c.isInline() || c.canBeEmpty())) {
            ys(_blockCursorElement, o, _rootElement);
        }
        const a = function a(t) {
            const e = t.getNode();
            const n = o.getElementByKey(t.key);
            if (n !== null && t.type === "text" && Sr(e)) {
                return Js(e, n, o);
            }
            return n;
        };
        const u = t_anchor.getNode();
        const f = a(t_anchor);
        if (f === null) {
            return;
        }
        const l_offset = t_anchor.offset;
        const h = t.isCollapsed();
        const t_focus = t.focus;
        const p = h ? f : a(t_focus);
        if (p === null) {
            return;
        }
        const g_offset = t_focus.offset;
        ku(r, p, g_offset, p, g_offset);
        tu(r, "move", e ? "backward" : "forward", n, _rootElement);
        if (r.rangeCount === 0) {
            return;
        }
        const m = Es(r, _rootElement) || r.getRangeAt(0);
        let m_startContainer = m.startContainer;
        let m_startOffset = m.startOffset;
        if (n === "lineboundary" && di(m_startContainer) && ci(m_startContainer) === o) {
            const _t241 = Ii(m_startContainer);
            if (Go(_t241) && _t241.isInline() && !_t241.isIsolated()) {
                const _n129 = o.getElementByKey(_t241.getKey());
                if (_n129 !== null && _n129.contains(m_startContainer)) {
                    m_startContainer = _n129;
                    m_startOffset = e ? 0 : _n129.childNodes.length;
                }
            }
        }
        if (h && n === "character" && t_anchor.type === "text" && Sr(u) && u.isUnmergeable() && l_offset === (e ? 0 : u.getTextContentSize())) {
            const _n130 = Ef(u, e ? "previous" : "next").getNodeAtCaret();
            if (Sr(_n130)) {
                const _o78 = e ? _n130.getTextContentSize() - 1 : 1;
                t.focus.set(_n130.__key, _o78, "text");
                return void (t.dirty = true);
            }
        }
        if (h && n === "character" && t_anchor.type === "text") {
            const _n131 = e ? 0 : u.getTextContentSize();
            const _o79 = m_startContainer === f ? m_startOffset : l_offset !== _n131 ? _n131 : -1;
            if (_o79 >= 0) {
                return void (_o79 !== l_offset && (t.focus.set(t_anchor.key, _o79, "text"), t.dirty = true));
            }
        }
        const _ref73 = e ? [
            m_startContainer,
            m_startOffset,
            f,
            l_offset
        ] : [
            f,
            l_offset,
            m_startContainer,
            m_startOffset
        ];
        const startContainer = _ref73[0];
        const startOffset = _ref73[1];
        const endContainer = _ref73[2];
        const endOffset = _ref73[3];
        const N = root(u) ? u : us(u);
        t.applyDOMRange({
            collapsed: false,
            endContainer,
            endOffset,
            startContainer,
            startOffset
        });
        t.dirty = true;
        if (!eu(t, e, N) && e) {
            Za(t);
        }
    }
    function ou() {
        try {
            const _t242 = new RegExp("\\p{Emoji}", "u");
            const _e166 = _t242.test.bind(_t242);
            if (_e166("❤\ufe0f") && _e166("#\ufe0f⃣") && _e166("👍")) {
                return _e166;
            }
        } catch (t) {}
        return function() {
            return false;
        };
    }
    var ru = ou();
    function iu(t, e, n) {
        const o = t;
        const r = o.getTextContent().split(/(?=\s)/g);
        const r_length = r.length;
        let s = 0;
        let l = 0;
        for(let _t243 = 0; _t243 < r_length; _t243++){
            const _o80 = _t243 === r_length - 1;
            l = s;
            s += r[_t243].length;
            if (e && s === n || s > n || _o80) {
                r.splice(_t243, 1);
                if (_o80) {
                    l = undefined;
                }
                break;
            }
        }
        const c = r.join("").trim();
        if (c === "") {
            o.remove();
        } else {
            o.setTextContent(c);
            o.select(l, l);
        }
    }
    function su(t, n, o, r) {
        let i;
        let s = n;
        let l = false;
        if (Rs(t)) {
            let _c14 = false;
            const _a11 = t.childNodes;
            const _u0 = _a11.length;
            const _f9 = r._blockCursorElement;
            if (s === _u0 && _u0 > 0) {
                _c14 = true;
                s = _u0 - 1;
            }
            if (!(bi(t, r) !== undefined || il(t, r))) {
                l = true;
            }
            let _d5 = _a11[s];
            let _h6 = false;
            if (_d5 === _f9) {
                _d5 = _a11[s + 1];
                _h6 = true;
            } else if (_f9 !== null) {
                const _e167 = _f9.parentNode;
                if (t === _e167 && n > Array.prototype.indexOf.call(_e167.children, _f9)) {
                    s--;
                }
            }
            i = Ii(_d5);
            if (Sr(i)) {
                s = Mf(i, _c14 ? "next" : "previous");
            } else {
                let _a12 = Ii(t);
                if (_a12 === null) {
                    return null;
                }
                if (Vo(_a12)) {
                    let _u1$resolveChildIndex;
                    const _l22 = r.getElementByKey(_a12.getKey());
                    if (_l22 === null) {
                        e(214);
                    }
                    const _u1 = Vs(_a12, _l22, r);
                    _u1$resolveChildIndex = _u1.resolveChildIndex(_a12, _l22, t, n);
                    _a12 = _u1$resolveChildIndex[0];
                    s = _u1$resolveChildIndex[1];
                    if (!Vo(_a12)) {
                        e(215);
                    }
                    if (_c14 && s >= _a12.getChildrenSize()) {
                        s = Math.max(0, _a12.getChildrenSize() - 1);
                    }
                    let _f0 = _a12.getChildAtIndex(s);
                    if (Vo(_f0) && ((_f0_1, n)=>{
                        const e = 0;
                        const o = _f0_1.getParent();
                        return n === null || o === null || !o.canBeEmpty() || o !== n.getNode();
                    })(_f0, o)) {
                        const _t244 = _c14 ? _f0.getLastDescendant() : _f0.getFirstDescendant();
                        if (_t244 === null) {
                            _a12 = _f0;
                        } else {
                            _f0 = _t244;
                            _a12 = Vo(_f0) ? _f0 : _f0.getParentOrThrow();
                        }
                        s = 0;
                    }
                    if (Sr(_f0)) {
                        i = _f0;
                        _a12 = null;
                        s = Mf(_f0, _c14 ? "next" : "previous");
                    } else if (_f0 !== _a12 && _c14 && !_h6) {
                        if (!Vo(_a12)) {
                            e(216);
                        }
                        s = Math.min(_a12.getChildrenSize(), s + 1);
                    }
                } else {
                    const _e168 = Gu(_a12);
                    const _o81 = _e168 !== null ? _e168 : _a12;
                    const _i48 = _o81.getIndexWithinParent();
                    const _l23 = r.getElementByKey(_a12.getKey());
                    let _c15 = "after";
                    if (_l23 !== null && Ii(t) === _a12) {
                        const _e169 = Vs(_a12, _l23, r);
                        if (_e169.element !== _l23) {
                            _c15 = _e169.resolveLeafPosition(_l23, t, n);
                        } else if (n === 0 && Go(_a12)) {
                            _c15 = "before";
                        }
                    }
                    s = _c15 === "before" ? _i48 : _i48 + 1;
                    _a12 = _o81.getParentOrThrow();
                }
                if (Vo(_a12)) {
                    return [
                        Ka(_a12.__key, s, "element"),
                        l
                    ];
                }
            }
        } else {
            i = Ii(t);
        }
        if (Sr(i)) {
            return [
                Ka(i.__key, Mf(i, s, "clamp"), "text"),
                l
            ];
        }
        return null;
    }
    function lu(t, e, n) {
        const o = t.getNode();
        const r = t.offset === 0;
        if (!r && t.offset !== o.getTextContent().length) {
            return;
        }
        const i = r ? "previous" : "next";
        const s = Ef(o, i).getNodeAtCaret();
        if (r === e || !Vo(s) || !s.isInline() || r && n) {
            if (r && !e) {
                if (Sr(s) && !o.isUnmergeable()) {
                    t.set(s.__key, s.getTextContent().length, "text");
                }
            } else if (s === null && (n || !r && e)) {
                const _e170 = o.getParent();
                if (Vo(_e170) && _e170.isInline() && (r || !_e170.canInsertTextAfter() && _e170.getTextContentSize() > 1)) {
                    const _n132 = Ef(_e170, i).getNodeAtCaret();
                    if (Sr(_n132)) {
                        t.set(_n132.__key, r ? _n132.getTextContent().length : 0, "text");
                    }
                }
            }
        } else {
            t.set(s.__key, r ? s.getChildrenSize() : 0, "element");
        }
    }
    function cu(t) {
        const e = Ti(t.key);
        if (e === null) {
            return null;
        }
        return Xu(e);
    }
    function au(t, e, n) {
        const o = cu(t);
        const r = cu(e);
        if (o === r || o !== null && r !== null && o.is(r)) {
            return false;
        }
        const i = n(o, r);
        if (o !== null) {
            if (Vo(o)) {
                e.set(o.getKey(), i ? o.getChildrenSize() : 0, "element");
            } else {
                e.set(o.getKey(), i ? o.getTextContentSize() : 0, "text");
            }
            return true;
        }
        const s = Gu(r);
        if (s === null) {
            return false;
        }
        const l = s.getParent();
        if (l === null) {
            return false;
        }
        const c = s.getIndexWithinParent();
        e.set(l.getKey(), i ? c + 1 : c, "element");
        return true;
    }
    function uu(t) {
        const e = au(t.anchor, t.focus, (e, n)=>((t, e, n, o)=>{
                if (n !== null && o !== null) {
                    const _t245 = Gu(n);
                    const _e171 = Gu(o);
                    if (_t245 !== null && _t245.is(_e171)) {
                        for (const _e172 of Zu(_t245).values()){
                            if (_e172 === n.getKey()) {
                                return true;
                            }
                            if (_e172 === o.getKey()) {
                                return false;
                            }
                        }
                        return true;
                    }
                    return _t245 === null || _e171 === null || _t245.isBefore(_e171);
                }
                if (n !== null) {
                    const _t246 = Gu(n);
                    const _o82 = Ti(e.key);
                    return _t246 === null || _o82 === null || !(!_t246.is(_o82) && !_t246.isParentOf(_o82)) || _t246.isBefore(_o82);
                }
                const r = Gu(o);
                const i = Ti(t.key);
                return r !== null && i !== null && !r.is(i) && !r.isParentOf(i) && i.isBefore(r);
            })(t.anchor, t.focus, e, n));
        if (e) {
            t.dirty = true;
        }
        return e;
    }
    function fu(t, e, n, o, r, i) {
        if (t === null || n === null || !si(r, t, n)) {
            return null;
        }
        const s = su(t, e, Ha(i) ? i.anchor : null, r);
        if (s === null) {
            return null;
        }
        const l = su(n, o, Ha(i) ? i.focus : null, r);
        if (l === null) {
            return null;
        }
        const c = s[0];
        const a = s[1];
        const u = l[0];
        const f = l[1];
        if (c.type === "element" && u.type === "element") {
            const _e173 = Ii(t);
            const _o83 = Ii(n);
            if (Go(_e173) && Go(_o83)) {
                return null;
            }
        }
        const d = r._slotsUsed && au(c, u, ()=>(t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0);
        ((t, e)=>{
            if (t.type === "text" && e.type === "text") {
                const _n133 = t.isBefore(e);
                const _o84 = t.is(e);
                lu(t, _n133, _o84);
                lu(e, !_n133, _o84);
                if (_o84) {
                    e.set(t.key, t.offset, t.type);
                }
            }
        })(c, u);
        return [
            c,
            u,
            a || f || d
        ];
    }
    function du(t) {
        return Vo(t) && !t.isInline();
    }
    function hu(__key, e, n, o, r, i) {
        const s = Tc();
        const l = new _Va(Ka(__key, e, r), Ka(n, o, i), 0, "");
        l.dirty = true;
        s._selection = l;
        return l;
    }
    function gu() {
        const t = Ka("root", 0, "element");
        const e = Ka("root", 0, "element");
        return new _Va(t, e, 0, "");
    }
    function pu() {
        return new _Ua(new Set());
    }
    function _u(t, e) {
        return yu(null, t, e, null);
    }
    var mu = new Set([
        " ",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "Backspace",
        "Delete",
        "End",
        "Enter",
        "Home",
        "Tab"
    ]);
    function yu(t, e, n, o) {
        const n__window = n._window;
        if (n__window === null) {
            return null;
        }
        const i = o || n__window.event;
        const s = i ? i.type : undefined;
        const l = s === "selectionchange";
        const c = s === "keydown" && i;
        const a = c && Ps(c);
        const u = c && (c.ctrlKey || c.metaKey || mu.has(c.key)) && Ls(a) && ci(a) === n;
        const f = !fe && (l || u || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && i && i.detail === 3 || s === "drop" || s === undefined);
        let d;
        let h;
        let g;
        let p;
        if (Ha(t) && !f) {
            return t.clone();
        }
        {
            if (e === null) {
                return null;
            }
            const _o85 = Ms(e, n._rootElement);
            d = _o85.anchorNode;
            h = _o85.focusNode;
            g = _o85.anchorOffset;
            p = _o85.focusOffset;
            if ((l || u || s === undefined) && Ha(t) && !si(n, d, h)) {
                return t.clone();
            }
        }
        const _ = fu(d, g, h, p, n, t);
        if (_ === null) {
            return null;
        }
        const m = _[0];
        const y = _[1];
        const x = _[2];
        const S = Ha(t) ? t : null;
        const C = new _Va(m, y, S ? S.format : 0, S ? S.style : "");
        if (S) {
            xu(C, S.anchor.key);
        }
        C.dirty = x;
        return C;
    }
    function xu(t, e) {
        const t_anchor = t.anchor;
        if (t_anchor.key === e) {
            return;
        }
        const o = t_anchor.getNode();
        let r = 0;
        let i = "";
        if (Sr(o)) {
            r = o.getFormat();
            i = o.getStyle();
        } else if (Vo(o)) {
            r = o.getTextFormat();
            i = o.getTextStyle();
        }
        if (!(t.format === r && t.style === i)) {
            t.format = r;
            t.style = i;
            t.dirty = true;
        }
    }
    function Su() {
        return Tc()._selection;
    }
    function Cu() {
        return vc()._editorState._selection;
    }
    function Tu(t, { __key }) {
        return t.anchor.key === __key || t.focus.key === __key;
    }
    function vu(t, e, n, o = 1) {
        if (Tu(t, e)) {
            for (const _r74 of [
                t.anchor,
                t.focus
            ]){
                if (_r74.key === e.__key && (n <= _r74.offset && o > 0 || n < _r74.offset && o < 0)) {
                    _r74.set(e.__key, Math.max(0, _r74.offset + o), "element");
                }
                const _t247 = _r74.getNode();
                if (Vo(_t247)) {
                    const _e174 = _t247.getChildrenSize();
                    const _n134 = _r74.offset >= _e174;
                    const _o86 = _t247.getChildAtIndex(_n134 ? _e174 - 1 : _r74.offset);
                    if (Sr(_o86)) {
                        _r74.set(_o86.__key, _n134 ? _o86.getTextContentSize() : 0, "text");
                    }
                }
            }
        }
    }
    function Nu(t, e, n, o, r) {
        const i = o || r;
        if (Sr(i) || Vo(i)) {
            const _e175 = Sr(i);
            t.set(i.__key, o === null ? 0 : _e175 ? i.getTextContentSize() : i.getChildrenSize(), _e175 ? "text" : "element");
        } else {
            const _o87 = e.getIndexWithinParent();
            t.set(n.__key, _o87 === -1 ? n.getChildrenSize() : _o87, "element");
        }
    }
    function bu(t, e, __key, o, r) {
        if (t.type === "text") {
            t.set(__key, t.offset + (e ? 0 : r), "text");
        } else if (t.offset > o.getIndexWithinParent()) {
            t.set(t.key, t.offset - 1, "element");
        }
    }
    function ku(t, e, n, o, r) {
        try {
            t.setBaseAndExtent(e, n, o, r);
        } catch (t) {}
    }
    function Eu(t, e, n) {
        const o = Zi(t, e.getKey());
        if (Vo(e)) {
            const _r75 = Vs(e, o, t);
            return [
                _r75.element,
                n + _r75.getFirstChildOffset()
            ];
        }
        return [
            o,
            n
        ];
    }
    function Ou(t, e, n, o, r, i) {
        const s = i.getRootNode();
        const l = hi(s) || Cs(s) ? Fs(s) : null;
        if (r.has(zl) && l !== i || l !== null && ri(l, l)) {
            return;
        }
        const c = Ms(o, i);
        let a;
        if (!Ha(e)) {
            return void (t !== null && si(n, c.anchorNode, c.focusNode) && o.removeAllRanges());
        }
        const { anchor, focus } = e;
        const h = anchor.getNode();
        const g = focus.getNode();
        const _Eu = Eu(n, h, anchor.offset);
        const p = _Eu[0];
        const _ = _Eu[1];
        const _Eu2 = Eu(n, g, focus.offset);
        const m = _Eu2[0];
        const y = _Eu2[1];
        const { format, style } = e;
        const C = e.isCollapsed();
        let T = p;
        let v = m;
        let N = false;
        if (anchor.type === "text") {
            T = Sr(h) ? Js(h, p, n) : null;
            N = h.getFormat() !== format || h.getStyle() !== style;
        } else if (Ha(t) && t.anchor.type === "text") {
            N = true;
        }
        if (focus.type === "text") {
            v = Sr(g) ? Js(g, m, n) : null;
        }
        if (T !== null && v !== null) {
            if (C && (t === null || N || Ha(t) && (t.format !== format || t.style !== style))) {
                ((t, format_1, style_1, o, r, timeStamp)=>{
                    t._inputState.collapsedSelectionFormat = {
                        format: format_1,
                        key: r,
                        offset: o,
                        style: style_1,
                        timeStamp
                    };
                })(n, format, style, anchor.offset, anchor.key, performance.now());
            }
            if ((o.type !== "Range" || !C) && c.anchorOffset === _ && c.focusOffset === y && c.anchorNode === T && c.focusNode === v) {
                if (l === null || !i.contains(l)) {
                    const _t248 = l !== null ? ci(l) : null;
                    if (!(_t248 !== null && _t248 !== n || r.has(jl))) {
                        i.focus({
                            preventScroll: true
                        });
                    }
                }
                if (anchor.type !== "element") {
                    return;
                }
            }
            ku(o, T, _, v, y);
            if (u && e.isCollapsed() && i !== null && !r.has(jl)) {
                const _t249 = Is(i);
                if (_t249 === null || !i.contains(_t249)) {
                    const _t250 = Fs(i.ownerDocument);
                    const _e176 = _t250 !== null ? ci(_t250) : null;
                    if (!(_e176 !== null && _e176 !== n)) {
                        i.focus({
                            preventScroll: true
                        });
                    }
                }
            }
            if (!r.has(Wl) && e.isCollapsed() && i !== null && i === Is(i)) {
                const _t251 = Ha(e) && e.anchor.type === "element" ? ((t, e, n)=>{
                    const o = e.childNodes[n];
                    if (!Rs(o)) {
                        return o || null;
                    }
                    const r = bi(o, t);
                    const i = r !== undefined ? Ti(r) : null;
                    if (i === null || Vo(i)) {
                        return o;
                    }
                    return Vs(i, o, t).element;
                })(n, T, _) : (a === undefined && (a = Os(o, i)), a);
                if (_t251 !== null) {
                    let _e177;
                    if (di(_t251)) {
                        const _n135 = _t251.ownerDocument.createRange();
                        _n135.selectNode(_t251);
                        _e177 = _n135.getBoundingClientRect();
                    } else {
                        _e177 = Rs(_t251) ? _t251.getBoundingClientRect() : ((_t251_1)=>{
                            const e = _t251_1.getBoundingClientRect();
                            const { startContainer, startOffset } = _t251_1;
                            if (!_t251_1.collapsed || e.width !== 0 || e.height !== 0 || !di(startContainer) || startContainer.length === 0) {
                                return e;
                            }
                            const r = _t251_1.cloneRange();
                            if (startOffset > 0) {
                                r.setStart(startContainer, startOffset - 1);
                            } else {
                                r.setEnd(startContainer, 1);
                            }
                            return r.getBoundingClientRect();
                        })(_t251);
                    }
                    ((t, _e177_1, n, o = null)=>{
                        const r = es(n);
                        const i = ls(r);
                        if (r === null || i === null) {
                            return;
                        }
                        const s = n.getBoundingClientRect();
                        if (_e177_1.bottom < s.top) {
                            return;
                        }
                        if (o !== null && _e177_1.height > 0) {
                            let _t252 = _e177_1.left;
                            let _r76 = _e177_1.right;
                            let _s27 = Rs(o) ? o : ts(o);
                            while(_s27 !== null && n.contains(_s27)){
                                const _e178 = os(i, _s27, _t252, _r76);
                                _t252 -= _e178;
                                _r76 -= _e178;
                                _s27 = _s27 === n ? null : ts(_s27);
                            }
                        }
                        let _e177_1_top = _e177_1.top;
                        let _e177_1_bottom = _e177_1.bottom;
                        let a = 0;
                        let u = 0;
                        let f = n;
                        while(f !== null){
                            const _e179 = f === r.body;
                            if (_e179) {
                                const _e180 = i.visualViewport;
                                if (_e180) {
                                    const _t253 = _e180.offsetTop;
                                    a = _t253;
                                    u = _t253 + _e180.height;
                                } else {
                                    a = 0;
                                    u = cs(t).innerHeight;
                                }
                                const _n136 = i.getComputedStyle(r.documentElement);
                                const _o88 = parseFloat(_n136.scrollPaddingTop);
                                const _s28 = parseFloat(_n136.scrollPaddingBottom);
                                if (isFinite(_o88)) {
                                    a += _o88;
                                }
                                if (isFinite(_s28)) {
                                    u -= _s28;
                                }
                            } else {
                                const _t254 = f === n ? s : f.getBoundingClientRect();
                                a = _t254.top;
                                u = _t254.bottom;
                            }
                            let _o89 = 0;
                            if (_e177_1_top < a) {
                                _o89 = -(a - _e177_1_top);
                            } else if (_e177_1_bottom > u) {
                                _o89 = _e177_1_bottom - u;
                            }
                            if (_o89 !== 0) {
                                if (_e179) {
                                    i.scrollBy(0, _o89);
                                } else {
                                    const _t255 = f.scrollTop;
                                    f.scrollTop += _o89;
                                    const _e181 = f.scrollTop - _t255;
                                    _e177_1_top -= _e181;
                                    _e177_1_bottom -= _e181;
                                }
                            }
                            if (_e179) {
                                break;
                            }
                            f = ts(f);
                        }
                    })(n, _e177, i, T);
                }
            }
            (({ _inputState }, anchorNode, anchorOffset, focusNode, focusOffset)=>{
                _inputState.isSelectionChangeFromDOMUpdate = true;
                _inputState.selectionChangeFromDOMUpdatePoints = anchorNode !== undefined && anchorOffset !== undefined && focusNode !== undefined && focusOffset !== undefined ? {
                    anchorNode,
                    anchorOffset,
                    focusNode,
                    focusOffset
                } : null;
            })(n, T, _, v, y);
        }
    }
    function Mu(t, e) {
        for (const _n137 of t.split(/(\r?\n|\t)/)){
            if (_n137 === "\n" || _n137 === "\r\n") {
                e.linebreak();
            } else if (_n137 === "\t") {
                e.tab();
            } else if (_n137 !== "") {
                e.text(_n137);
            }
        }
    }
    function wu(t) {
        const e = [];
        Mu(t, {
            linebreak: function linebreak() {
                return e.push(ql());
            },
            tab: function tab() {
                return e.push(Gr());
            },
            text: function text(t) {
                return e.push(xr(t));
            }
        });
        return e;
    }
    function Au(t) {
        const e = [];
        for (const _n138 of t){
            if (!Xl(_n138)) {
                if (!Vo(_n138) && !Go(_n138) || _n138.isInline()) {
                    e.push(_n138);
                } else if (Vo(_n138)) {
                    e.push(...Array.from(Au(_n138.getChildren())));
                }
            }
        }
        return e;
    }
    function Du(t, n = false) {
        let o = t;
        if (!t.isCollapsed()) {
            o.removeText();
        }
        const r = Su();
        if (Ha(r)) {
            o = r;
        }
        if (!Ha(o)) {
            e(161);
        }
        const o_anchor = o.anchor;
        let s = o_anchor.getNode();
        let i_offset = o_anchor.offset;
        while(!Us(s) && Ju(s) === null){
            let _Iu;
            const _t256 = s;
            _Iu = Iu(s, i_offset, n);
            s = _Iu[0];
            i_offset = _Iu[1];
            if (_t256.is(s)) {
                break;
            }
        }
        return [
            s,
            i_offset
        ];
    }
    function Iu(t, e, n = false) {
        const o = t.getParent();
        if (!o) {
            const _t257 = Hr();
            Mi().append(_t257);
            _t257.select();
            return [
                Mi(),
                0
            ];
        }
        if (Sr(t)) {
            const _n139 = t.splitText(e);
            if (_n139.length === 0) {
                return [
                    o,
                    t.getIndexWithinParent()
                ];
            }
            const _r77 = e === 0 ? 0 : 1;
            return [
                o,
                _n139[0].getIndexWithinParent() + _r77
            ];
        }
        if (!Vo(t) || e === 0) {
            return [
                o,
                t.getIndexWithinParent()
            ];
        }
        const r = t.getChildAtIndex(e);
        if (r) {
            const _o90 = new _Va(Ka(t.__key, e, "element"), Ka(t.__key, e, "element"), 0, "");
            const _i49 = t.insertNewAfter(_o90);
            if (_i49) {
                _i49.append(...[
                    r
                ].concat(Array.from(r.getNextSiblings())));
            } else if (n) {
                return [
                    t,
                    e
                ];
            }
        }
        return [
            o,
            t.getIndexWithinParent() + 1
        ];
    }
    function Fu(t) {
        return Xl(t) || as(t) || Sr(t) || t.isParentRequired();
    }
    function Pu(t) {
        const e = Hr();
        let n = null;
        for(let _o91 = 0; _o91 < t.length; _o91++){
            const _r78 = t[_o91];
            if (Fu(_r78)) {
                if (n === null) {
                    n = _r78.createParentElementNode();
                    e.append(n);
                    const _i50 = t[_o91 + 1];
                    if (Xl(_r78) && (_i50 === undefined || !Fu(_i50))) {
                        continue;
                    }
                }
                n.append(_r78);
            } else {
                e.append(_r78);
                n = null;
            }
        }
        return e;
    }
    function Ru(t, e, n, o, r = "decorators-and-blocks") {
        if (e === "move" && o === "character" && !t.isCollapsed()) {
            const _ref74 = n === t.isBackward() ? [
                t.focus,
                t.anchor
            ] : [
                t.anchor,
                t.focus
            ];
            const _e182 = _ref74[0];
            const _o92 = _ref74[1];
            _o92.set(_e182.key, _e182.offset, _e182.type);
            return true;
        }
        const i = Tr(t.focus, n ? "previous" : "next");
        const s = o === "lineboundary";
        const l = e === "move";
        let c = i;
        let a = r === "decorators-and-blocks";
        let u = false;
        if (!Ir(c)) {
            for (const _t258 of c){
                a = false;
                const _e183 = _t258.origin;
                if (Go(_e183)) {
                    if (_e183.isIsolated()) {
                        u = true;
                        break;
                    }
                    c = _t258;
                    if (s && _e183.isInline()) {
                        continue;
                    }
                }
                break;
            }
            if (u) {
                return true;
            }
            if (a) {
                for (const _t259 of Kf(i).iterNodeCarets(e === "extend" ? "shadowRoot" : "root")){
                    if (vf(_t259)) {
                        if (!_t259.origin.isInline()) {
                            c = _t259;
                        }
                    } else {
                        if (Vo(_t259.origin)) {
                            continue;
                        }
                        if (Go(_t259.origin) && !_t259.origin.isInline()) {
                            c = _t259;
                        }
                    }
                    break;
                }
            }
        }
        if (c === i) {
            return false;
        }
        if (l && !s && Go(c.origin) && c.origin.isKeyboardSelectable()) {
            const _t260 = pu();
            _t260.add(c.origin.getKey());
            Ai(_t260);
            return true;
        }
        c = Dr(c);
        if (l) {
            vr(t.anchor, c);
        }
        vr(t.focus, c);
        return a || !s;
    }
    function Lu(t, e, n) {
        const o = e === null ? null : e.__key;
        const r = n === null ? null : n.__key;
        if (e === null) {
            t.__first = r;
        } else {
            e.__next = r;
        }
        if (n === null) {
            t.__last = o;
        } else {
            n.__prev = o;
        }
    }
    function Ku(t) {
        const e = vc();
        if (!e._recordNodeMoves) {
            return;
        }
        const _nodeMap = e._editorState._nodeMap;
        if (_nodeMap.has(t.__key)) {
            const _e184 = Tc();
            const _o93 = _e184._movedNodes || (_e184._movedNodes = new WeakMap());
            let _r79 = _o93.get(_nodeMap);
            if (_r79 === undefined) {
                _r79 = new Set();
                _o93.set(_nodeMap, _r79);
            }
            _r79.add(t.__key);
        }
    }
    function Bu(t, e, n, o) {
        const e___key = e.__key;
        if (n === null) {
            t.__first = e___key;
        } else {
            n.__next = e___key;
        }
        if (o === null) {
            t.__last = e___key;
        } else {
            o.__prev = e___key;
        }
        e.__prev = n === null ? null : n.__key;
        e.__next = o === null ? null : o.__key;
        e.__parent = t.__key;
    }
    function $u(t) {
        if (Ju(t) !== null) {
            e(380, t.__key, String(Ju(t)));
        }
        const n = t.getParent();
        if (n !== null) {
            const _e185 = n.getWritable();
            Ku(t);
            const _o94 = t.getPreviousSibling();
            const _r80 = t.getNextSibling();
            Lu(_e185, _o94 && _o94.getWritable(), _r80 && _r80.getWritable());
            t.__prev = null;
            t.__next = null;
            t.__parent = null;
            _e185.__size--;
        }
    }
    function zu(t, e) {
        const n = e && t.getParent();
        const o = e && n && Tu(e, n) ? t.getIndexWithinParent() : -1;
        const r = e && n && o !== -1 ? [
            e.anchor,
            e.focus
        ].filter((t)=>t.type === "element" && t.key === n.__key && t.offset === o + 1) : null;
        if (e && n && o !== -1) {
            e.isBackward();
        }
        $u(t);
        if (e && n && o !== -1) {
            vu(e, n, o, -1);
        }
        if (e) {
            e._cachedIsBackward = null;
        }
        return r;
    }
    function Wu(t, e, n, o) {
        Sc();
        const r = e === "next";
        ps(t, n);
        const i = t.getWritable();
        const s = n.getWritable();
        t.getParentOrThrow();
        const l = Su();
        const c = o && Ha(l) ? l : null;
        const a = zu(s, c);
        const u = t.getParentOrThrow().getWritable();
        const f = c && (r && a !== null && a.length > 0 || Tu(c, u)) ? t.getIndexWithinParent() + (r ? 1 : 0) : -1;
        const d = r ? t.getNextSibling() : t.getPreviousSibling();
        const h = d && d.getWritable();
        Bu(u, s, r ? i : h, r ? h : i);
        u.__size++;
        if (c && f !== -1 && (vu(c, u, f), r && a !== null)) {
            for (const _t261 of a){
                _t261.set(u.__key, f + 1, "element");
            }
        }
        return n;
    }
    function Uu(t, e, n) {
        Sc();
        const { origin, direction } = t;
        const i = direction === "next";
        const s = Gu(origin);
        if (s !== null) {
            if (i) {
                return s.selectNext(e, n);
            }
            return s.selectPrevious(e, n);
        }
        const l = t.getNodeAtCaret();
        const c = origin.getParentOrThrow();
        if (l === null) {
            if (i) {
                return c.select();
            }
            return c.select(0, 0);
        }
        if (Vo(l)) {
            if (i) {
                return l.select(0, 0);
            }
            return l.select();
        }
        if (Sr(l)) {
            return l.select(e, n);
        }
        const a = l.getIndexWithinParent() + (i ? 0 : 1);
        return c.select(a, a);
    }
    function ju(t, e) {
        const n = [];
        for(let _o95 = t; _o95 !== null; _o95 = e === "next" ? _o95.getNextSibling() : _o95.getPreviousSibling()){
            n.push(_o95);
        }
        return n;
    }
    var Hu = new Map();
    function Vu(t) {
        return Vo(t) || Go(t);
    }
    function Yu(t) {
        return Vo(t) || Go(t);
    }
    function Ju(t) {
        const e = t.getLatest();
        if (Yu(e)) {
            return e.__slotHost;
        }
        return null;
    }
    function Gu(t) {
        const n = Ju(t);
        if (n === null) {
            return null;
        }
        const o = Ti(n);
        if (!(Vo(o) || Go(o))) {
            e(370);
        }
        return o;
    }
    function qu(t) {
        const e = Gu(t);
        if (e === null) {
            return null;
        }
        const __key = t.getLatest().__key;
        for (const [_t262, _o96] of Zu(e)){
            if (_o96 === __key) {
                return _t262;
            }
        }
        return null;
    }
    function Xu(t) {
        let e = t.getLatest();
        while(e !== null){
            if (Ju(e) !== null) {
                return e;
            }
            e = e.getParent();
        }
        return null;
    }
    function Qu(t) {
        if (t === null) {
            return null;
        }
        const e = Ha(t) ? t.anchor.getNode() : t.getNodes()[0] ?? null;
        if (e === null) {
            return null;
        }
        return Xu(e);
    }
    function Zu(t) {
        const e = t.getLatest();
        if (Vu(e) && e.__slots !== null) {
            return e.__slots;
        }
        return Hu;
    }
    function tf(t) {
        return Array.from(Zu(t).keys());
    }
    function ef(t, e) {
        const n = Zu(t).get(e);
        if (n === undefined) {
            return null;
        }
        return Ti(n);
    }
    var nf = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    var of = Symbol("slotMapOwner");
    function rf(t) {
        let t___slots = t.__slots;
        if (!(t___slots !== null && t___slots[of] === t)) {
            t___slots = new Map(t___slots);
            t___slots[of] = t;
            t.__slots = t___slots;
        }
        return t___slots;
    }
    var sf = new WeakMap();
    var lf = [];
    function cf(t) {
        for (const _ref78 of Al(t)){
            const _e186 = _ref78.ownNodeConfig;
            {
                const _t263 = _e186 && _e186.slots;
                if (_t263) {
                    return _t263;
                }
            }
        }
        return lf;
    }
    function af(t) {
        let e = "";
        for (const _n140 of Zu(t).values()){
            const _t264 = Ti(_n140);
            if (_t264 !== null) {
                e += _t264.getTextContent();
            }
        }
        return e;
    }
    function uf(t, e, n) {
        const o = n.get(t);
        const r = n.get(e);
        if (o !== undefined) {
            if (r !== undefined) {
                return o - r;
            }
            return -1;
        }
        if (r !== undefined) {
            return 1;
        }
        if (t < e) {
            return -1;
        }
        if (t > e) {
            return 1;
        }
        return 0;
    }
    function ff(t, n, o) {
        if (!(n !== "__proto__" && n !== "constructor" && n !== "prototype")) {
            e(373, n);
        }
        const r = t.getLatest();
        if (r.__slots !== null && r.__slots.get(n) === o.getLatest().__key) {
            return r;
        }
        if (!Vo(o) && !Go(o) || o.isInline()) {
            e(374, o.__key);
        }
        const i = t.getWritable();
        const s = rf(i);
        const l = s.get(n);
        if (l !== undefined) {
            df(l);
        }
        const c = o.getWritable();
        const a = Gu(c);
        if (a !== null) {
            const _t265 = qu(c);
            if (_t265 !== null) {
                rf(a.getWritable()).delete(_t265);
            }
            c.__slotHost = null;
        }
        $u(c);
        c.__slotHost = i.__key;
        s.set(n, c.__key);
        ((t)=>{
            const t___slots = t.__slots;
            if (t___slots === null || t___slots.size < 2) {
                return;
            }
            const o = ((t)=>{
                let n = sf.get(t);
                if (n === undefined) {
                    const _o97 = cf(t);
                    const _r81 = new Map();
                    for (const _n141 of _o97){
                        if (nf.includes(_n141)) {
                            e(371, t.name, _n141);
                        }
                        if (_r81.has(_n141)) {
                            e(372, t.name, _n141);
                        }
                        _r81.set(_n141, _r81.size);
                    }
                    n = _r81;
                    sf.set(t, n);
                }
                return n;
            })(t.constructor);
            let r = null;
            let i = true;
            for (const _t266 of t___slots.keys()){
                if (r !== null && uf(r, _t266, o) > 0) {
                    i = false;
                    break;
                }
                r = _t266;
            }
            if (i) {
                return;
            }
            const s = Array.from(t___slots).sort(([t], _ref80)=>{
                const e = _ref80[0];
                return uf(t, e, o);
            });
            t___slots.clear();
            for (const [_t267, _e187] of s){
                t___slots.set(_t267, _e187);
            }
        })(i);
        vc()._slotsUsed = true;
        Tc()._slotsUsed = true;
        return i;
    }
    function df(t) {
        const n = Ti(t);
        if (n === null) {
            return;
        }
        const o = n.getWritable();
        if (!Yu(o)) {
            e(377, t);
        }
        o.__slotHost = null;
        o.remove();
    }
    var hf = {
        next: "previous",
        previous: "next"
    };
    const _gf4 = (()=>{
        function gf(t) {
            this.origin = t;
        }
        const _proto19 = gf.prototype;
        _proto19[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
            return zf({
                hasNext,
                initial: this.getAdjacentCaret(),
                map: function map(t) {
                    return t;
                },
                step: function step(t) {
                    return t.getAdjacentCaret();
                }
            });
        };
        _proto19.getAdjacentCaret = function getAdjacentCaret() {
            return Ef(this.getNodeAtCaret(), this.direction);
        };
        _proto19.getSiblingCaret = function getSiblingCaret() {
            return Ef(this.origin, this.direction);
        };
        _proto19.remove = function remove() {
            const t = this.getNodeAtCaret();
            if (t) {
                t.remove();
            }
            return this;
        };
        _proto19.replaceOrInsert = function replaceOrInsert(t, e) {
            const n = this.getNodeAtCaret();
            if (!(t.is(this.origin) || t.is(n))) {
                if (n === null) {
                    this.insert(t);
                } else {
                    n.replace(t, e);
                }
            }
            return this;
        };
        _proto19.splice = function splice(t, n, o = "next") {
            const r = o === this.direction ? n : Array.from(n).reverse();
            let i = this;
            const s = this.getParentAtCaret();
            const l = new Map();
            for(let _e188 = i.getAdjacentCaret(); _e188 !== null && l.size < t; _e188 = _e188.getAdjacentCaret()){
                const _t268 = _e188.origin.getWritable();
                l.set(_t268.getKey(), _t268);
            }
            for (const _t269 of r){
                if (l.size > 0) {
                    const _n142 = i.getNodeAtCaret();
                    if (_n142) {
                        l.delete(_n142.getKey());
                        l.delete(_t269.getKey());
                        if (_n142.is(_t269) || i.origin.is(_t269)) ;
                        else {
                            const _e189 = _t269.getParent();
                            if (_e189 && _e189.is(s)) {
                                _t269.remove();
                            }
                            _n142.replace(_t269);
                        }
                    } else {
                        if (_n142 === null) {
                            e(263, Array.from(l).join(" "));
                        }
                    }
                } else {
                    i.insert(_t269);
                }
                i = Ef(_t269, this.direction);
            }
            for (const _t270 of l.values()){
                _t270.remove();
            }
            return this;
        };
        return gf;
    })();
    var _pf3 = ((_gf)=>{
        function pf(...args) {
            let _this6;
            return (_this6 = _gf.call(this, ...args) || this, _this6.type = "child", babelHelpers.assertThisInitialized(_this6)) || babelHelpers.assertThisInitialized(_this6);
        }
        babelHelpers.inheritsLoose(pf, _gf);
        const _proto20 = pf.prototype;
        _proto20.getLatest = function getLatest() {
            const t = this.origin.getLatest();
            if (t === this.origin) {
                return this;
            }
            return Af(t, this.direction);
        };
        _proto20.getParentCaret = function getParentCaret(t = "root") {
            return Ef(yf(this.getParentAtCaret(), t), this.direction);
        };
        _proto20.getFlipped = function getFlipped() {
            const t = mf(this.direction);
            return Ef(this.getNodeAtCaret(), t) || Af(this.origin, t);
        };
        _proto20.getParentAtCaret = function getParentAtCaret() {
            return this.origin;
        };
        _proto20.getChildCaret = function getChildCaret() {
            return this;
        };
        _proto20.isSameNodeCaret = function isSameNodeCaret(t) {
            return t instanceof pf && this.direction === t.direction && this.origin.is(t.origin);
        };
        _proto20.isSamePointCaret = function isSamePointCaret(t) {
            return this.isSameNodeCaret(t);
        };
        return pf;
    })(_gf4);
    var _f = {
        root,
        shadowRoot
    };
    function mf(t) {
        return hf[t];
    }
    function yf(t, e = "root") {
        if (t === null || _f[e](t)) {
            return null;
        }
        if (Ju(t) === null) {
            return t;
        }
        return null;
    }
    var _xf3 = ((_gf2)=>{
        function xf(...args) {
            let _this7;
            return (_this7 = _gf2.call(this, ...args) || this, _this7.type = "sibling", babelHelpers.assertThisInitialized(_this7)) || babelHelpers.assertThisInitialized(_this7);
        }
        babelHelpers.inheritsLoose(xf, _gf2);
        const _proto21 = xf.prototype;
        _proto21.getLatest = function getLatest() {
            const t = this.origin.getLatest();
            if (t === this.origin) {
                return this;
            }
            return Ef(t, this.direction);
        };
        _proto21.getSiblingCaret = function getSiblingCaret() {
            return this;
        };
        _proto21.getParentAtCaret = function getParentAtCaret() {
            return this.origin.getParent();
        };
        _proto21.getChildCaret = function getChildCaret() {
            if (Vo(this.origin)) {
                return Af(this.origin, this.direction);
            }
            return null;
        };
        _proto21.getParentCaret = function getParentCaret(t = "root") {
            return Ef(yf(this.getParentAtCaret(), t), this.direction);
        };
        _proto21.getFlipped = function getFlipped() {
            const t = mf(this.direction);
            return Ef(this.getNodeAtCaret(), t) || Af(this.origin.getParentOrThrow(), t);
        };
        _proto21.isSamePointCaret = function isSamePointCaret(t) {
            return t instanceof xf && this.direction === t.direction && this.origin.is(t.origin);
        };
        _proto21.isSameNodeCaret = function isSameNodeCaret(t) {
            return (t instanceof xf || t instanceof _Sf3) && this.direction === t.direction && this.origin.is(t.origin);
        };
        return xf;
    })(_gf4);
    var _Sf3 = ((_gf3)=>{
        function Sf(t, e) {
            let _this8;
            _this8 = _gf3.call(this, t) || this;
            _this8.type = "text";
            _this8.offset = e;
            return _this8;
        }
        babelHelpers.inheritsLoose(Sf, _gf3);
        const _proto22 = Sf.prototype;
        _proto22.getLatest = function getLatest() {
            const t = this.origin.getLatest();
            if (t === this.origin) {
                return this;
            }
            return Of(t, this.direction, this.offset);
        };
        _proto22.getParentAtCaret = function getParentAtCaret() {
            return this.origin.getParent();
        };
        _proto22.getChildCaret = function getChildCaret() {
            return null;
        };
        _proto22.getParentCaret = function getParentCaret(t = "root") {
            return Ef(yf(this.getParentAtCaret(), t), this.direction);
        };
        _proto22.getFlipped = function getFlipped() {
            return Of(this.origin, mf(this.direction), this.offset);
        };
        _proto22.isSamePointCaret = function isSamePointCaret(t) {
            return t instanceof Sf && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
        };
        _proto22.isSameNodeCaret = function isSameNodeCaret(t) {
            return (t instanceof _xf3 || t instanceof Sf) && this.direction === t.direction && this.origin.is(t.origin);
        };
        _proto22.getSiblingCaret = function getSiblingCaret() {
            return Ef(this.origin, this.direction);
        };
        return Sf;
    })(_gf4);
    function Cf(t) {
        return t instanceof _Sf3;
    }
    function hasNext(t) {
        return t instanceof _xf3;
    }
    function vf(t) {
        return t instanceof _pf3;
    }
    var Nf = {
        next: ((_Sf)=>{
            function _class(...args) {
                let _this9;
                return (_this9 = _Sf.call(this, ...args) || this, _this9.direction = "next", babelHelpers.assertThisInitialized(_this9)) || babelHelpers.assertThisInitialized(_this9);
            }
            babelHelpers.inheritsLoose(_class, _Sf);
            const _proto23 = _class.prototype;
            _proto23.getNodeAtCaret = function getNodeAtCaret() {
                return this.origin.getNextSibling();
            };
            _proto23.insert = function insert(t) {
                this.origin.insertAfter(t);
                return this;
            };
            return _class;
        })(_Sf3),
        previous: ((_Sf2)=>{
            function _class3(...args) {
                let _this0;
                return (_this0 = _Sf2.call(this, ...args) || this, _this0.direction = "previous", babelHelpers.assertThisInitialized(_this0)) || babelHelpers.assertThisInitialized(_this0);
            }
            babelHelpers.inheritsLoose(_class3, _Sf2);
            const _proto24 = _class3.prototype;
            _proto24.getNodeAtCaret = function getNodeAtCaret() {
                return this.origin.getPreviousSibling();
            };
            _proto24.insert = function insert(t) {
                this.origin.insertBefore(t);
                return this;
            };
            return _class3;
        })(_Sf3)
    };
    var bf = {
        next: ((_xf)=>{
            function _class5(...args) {
                let _this1;
                return (_this1 = _xf.call(this, ...args) || this, _this1.direction = "next", babelHelpers.assertThisInitialized(_this1)) || babelHelpers.assertThisInitialized(_this1);
            }
            babelHelpers.inheritsLoose(_class5, _xf);
            const _proto25 = _class5.prototype;
            _proto25.getNodeAtCaret = function getNodeAtCaret() {
                return this.origin.getNextSibling();
            };
            _proto25.insert = function insert(t) {
                this.origin.insertAfter(t);
                return this;
            };
            return _class5;
        })(_xf3),
        previous: ((_xf2)=>{
            function _class7(...args) {
                let _this10;
                return (_this10 = _xf2.call(this, ...args) || this, _this10.direction = "previous", babelHelpers.assertThisInitialized(_this10)) || babelHelpers.assertThisInitialized(_this10);
            }
            babelHelpers.inheritsLoose(_class7, _xf2);
            const _proto26 = _class7.prototype;
            _proto26.getNodeAtCaret = function getNodeAtCaret() {
                return this.origin.getPreviousSibling();
            };
            _proto26.insert = function insert(t) {
                this.origin.insertBefore(t);
                return this;
            };
            return _class7;
        })(_xf3)
    };
    var kf = {
        next: ((_pf)=>{
            function _class9(...args) {
                let _this11;
                return (_this11 = _pf.call(this, ...args) || this, _this11.direction = "next", babelHelpers.assertThisInitialized(_this11)) || babelHelpers.assertThisInitialized(_this11);
            }
            babelHelpers.inheritsLoose(_class9, _pf);
            const _proto27 = _class9.prototype;
            _proto27.getNodeAtCaret = function getNodeAtCaret() {
                return this.origin.getFirstChild();
            };
            _proto27.insert = function insert(t) {
                this.origin.splice(0, 0, [
                    t
                ]);
                return this;
            };
            return _class9;
        })(_pf3),
        previous: ((_pf2)=>{
            function _class1(...args) {
                let _this12;
                return (_this12 = _pf2.call(this, ...args) || this, _this12.direction = "previous", babelHelpers.assertThisInitialized(_this12)) || babelHelpers.assertThisInitialized(_this12);
            }
            babelHelpers.inheritsLoose(_class1, _pf2);
            const _proto28 = _class1.prototype;
            _proto28.getNodeAtCaret = function getNodeAtCaret() {
                return this.origin.getLastChild();
            };
            _proto28.insert = function insert(t) {
                this.origin.splice(this.origin.getChildrenSize(), 0, [
                    t
                ]);
                return this;
            };
            return _class1;
        })(_pf3)
    };
    function Ef(t, e) {
        if (t) {
            return new bf[e](t);
        }
        return null;
    }
    function Of(t, e, n) {
        if (t) {
            return new Nf[e](t, Mf(t, n));
        }
        return null;
    }
    function Mf(t, e, o = "error") {
        const r = t.getTextContentSize();
        let i = e === "next" ? r : e === "previous" ? 0 : e;
        if (i < 0 || i > r) {
            if (o !== "clamp") {
                n(284, String(e), String(r), t.getKey());
            }
            i = i < 0 ? 0 : r;
        }
        return i;
    }
    function wf(t, e) {
        return new _Pf(t, e);
    }
    function Af(t, e) {
        if (Vo(t)) {
            return new kf[e](t);
        }
        return null;
    }
    function Df(t) {
        return t && t.getChildCaret() || t;
    }
    function If(t) {
        return t && Df(t.getAdjacentCaret());
    }
    var _Ff = (()=>{
        function Ff(t, e, n) {
            this.type = "node-caret-range";
            this.anchor = t;
            this.focus = e;
            this.direction = n;
        }
        const _proto29 = Ff.prototype;
        _proto29.getLatest = function getLatest() {
            const t = this.anchor.getLatest();
            const e = this.focus.getLatest();
            if (t === this.anchor && e === this.focus) {
                return this;
            }
            return new Ff(t, e, this.direction);
        };
        _proto29.isCollapsed = function isCollapsed() {
            return this.anchor.isSamePointCaret(this.focus);
        };
        _proto29.getTextSlices = function getTextSlices() {
            const t = this.anchor.getLatest();
            const e = this.focus.getLatest();
            if (Cf(t) && Cf(e) && t.isSameNodeCaret(e)) {
                return [
                    wf(t, e.offset - t.offset),
                    null
                ];
            }
            return [
                Cf(t) ? Rf(t, "anchor") : null,
                Cf(e) ? Rf(e, "focus") : null
            ];
        };
        _proto29.iterNodeCarets = function iterNodeCarets(t = "root") {
            const e = Cf(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest();
            const n = this.focus.getLatest();
            const o = Cf(n);
            const r = function r(e) {
                if (e.isSameNodeCaret(n)) {
                    return null;
                }
                return If(e) || e.getParentCaret(t);
            };
            return zf({
                hasNext: function hasNext(t) {
                    return t !== null && !(o && n.isSameNodeCaret(t));
                },
                initial: e.isSameNodeCaret(n) ? null : r(e),
                map: function map(t) {
                    return t;
                },
                step: r
            });
        };
        _proto29[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
            return this.iterNodeCarets("root");
        };
        return Ff;
    })();
    class _Pf {
        constructor(t, e){
            this.type = "slice";
            this.caret = t;
            this.distance = e;
        }
        getSliceIndices() {
            const distance = this.distance;
            const offset = this.caret.offset;
            const n = offset + distance;
            if (n < offset) {
                return [
                    n,
                    offset
                ];
            }
            return [
                offset,
                n
            ];
        }
        getTextContent() {
            const _this$getSliceIndices = this.getSliceIndices();
            const t = _this$getSliceIndices[0];
            const e = _this$getSliceIndices[1];
            return this.caret.origin.getTextContent().slice(t, e);
        }
        getTextContentSize() {
            return Math.abs(this.distance);
        }
        removeTextSlice() {
            const _this$caret = this.caret;
            const { origin, direction } = _this$caret;
            const _this$getSliceIndices2 = this.getSliceIndices();
            const n = _this$getSliceIndices2[0];
            const o = _this$getSliceIndices2[1];
            const r = origin.getTextContent();
            return Of(origin.setTextContent(r.slice(0, n) + r.slice(o)), direction, n);
        }
    }
    function Rf(t, e) {
        const { direction, origin } = t;
        return wf(t, Mf(origin, e === "focus" ? mf(direction) : direction) - t.offset);
    }
    function Lf(t, e) {
        if (t.direction === e) {
            return t;
        }
        return t.getFlipped();
    }
    function Kf(t) {
        return $f(t, Lf(Af(Mi(), mf(t.direction)), t.direction));
    }
    function Bf(t) {
        return $f(t, t);
    }
    function $f(t, n) {
        if (t.direction !== n.direction) {
            e(265);
        }
        return new _Ff(t, n, t.direction);
    }
    function zf({ initial, hasNext, step, map }) {
        let i = initial;
        return {
            [typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]: function() {
                return this;
            },
            next: function next() {
                if (!hasNext(i)) {
                    return {
                        done: true,
                        value: undefined
                    };
                }
                const t = {
                    done: false,
                    value: map(i)
                };
                i = step(i);
                return t;
            }
        };
    }
    function Wf(t, n) {
        const o = Vf(t.origin, n.origin);
        if (o === null) {
            e(275, t.origin.getKey(), n.origin.getKey());
        }
        switch(o.type){
            case "same":
                {
                    const _e190 = t.type === "text";
                    const _o98 = n.type === "text";
                    if (_e190 && _o98) {
                        return ((t, e)=>Math.sign(t - e))(t.offset, n.offset);
                    }
                    if (t.type === n.type) {
                        return 0;
                    }
                    if (_e190) {
                        return -1;
                    }
                    if (_o98) {
                        return 1;
                    }
                    if (t.type === "child") {
                        return -1;
                    }
                    return 1;
                }
            case "ancestor":
                if (t.type === "child") {
                    return -1;
                }
                return 1;
            case "descendant":
                if (n.type === "child") {
                    return 1;
                }
                return -1;
            case "branch":
                return Uf(o);
        }
    }
    function Uf({ a, b }) {
        const a___key = a.__key;
        const b___key = b.__key;
        let i = a;
        let s = b;
        for(; i && s; i = i.getNextSibling(), s = s.getNextSibling()){
            if (i.__key === b___key) {
                return -1;
            }
            if (s.__key === a___key) {
                return 1;
            }
        }
        if (i === null) {
            return 1;
        }
        return -1;
    }
    function jf(t, e) {
        return e.is(t);
    }
    function Hf(t) {
        if (Vo(t)) {
            return [
                t.getLatest(),
                null
            ];
        }
        return [
            t.getParent(),
            t.getLatest()
        ];
    }
    function Vf(t, n) {
        if (t.is(n)) {
            return {
                commonAncestor: t,
                type: "same"
            };
        }
        const o = new Map();
        const _Hf = Hf(t);
        for(let _e191 = _Hf[0], _n143 = _Hf[1]; _e191; _n143 = _e191, _e191 = _e191.getParent()){
            o.set(_e191, _n143);
        }
        const _Hf2 = Hf(n);
        for(let _r82 = _Hf2[0], b_1 = _Hf2[1]; _r82; b_1 = _r82, _r82 = _r82.getParent()){
            const a_1 = o.get(_r82);
            if (a_1 !== undefined) {
                if (a_1 === null) {
                    if (!jf(t, _r82)) {
                        e(276);
                    }
                    return {
                        commonAncestor: _r82,
                        type: "ancestor"
                    };
                }
                if (b_1 === null) {
                    if (!jf(n, _r82)) {
                        e(277);
                    }
                    return {
                        commonAncestor: _r82,
                        type: "descendant"
                    };
                }
                if (!((Vo(a_1) || jf(t, a_1)) && (Vo(b_1) || jf(n, b_1)) && _r82.is(a_1.getParent()) && _r82.is(b_1.getParent()))) {
                    e(278);
                }
                return {
                    a: a_1,
                    b: b_1,
                    commonAncestor: _r82,
                    type: "branch"
                };
            }
        }
        return null;
    }
    function Yf(...t) {
        const e = [];
        for (const _n144 of t){
            if (_n144 && typeof _n144 === "string") {
                for (const [_t271] of _n144.matchAll(/\S+/g)){
                    e.push(_t271);
                }
            }
        }
        return e;
    }
    exports.$addUpdateTag = rs;
    exports.$applyNodeReplacement = gs;
    exports.$assumeActiveEditor = function(t) {
        if (Tc() !== null && uc === null) {
            uc = t;
        }
        if (uc !== t) {
            n(378);
        }
    };
    exports.$caretFromPoint = Tr;
    exports.$caretRangeFromSelection = kr;
    exports.$cloneWithProperties = Qs;
    exports.$cloneWithPropertiesEphemeral = function(t) {
        e = Qs(t);
        e[SYMBOL_EPHEMERAL] = true;
        return e;
        var e;
    };
    exports.$comparePointCaretNext = Wf;
    exports.$copyNode = hs;
    exports.$create = Dl;
    exports.$createChildrenArray = Fl;
    exports.$createLineBreakNode = ql;
    exports.$createNodeSelection = pu;
    exports.$createParagraphNode = Hr;
    exports.$createPoint = Ka;
    exports.$createRangeSelection = gu;
    exports.$createRangeSelectionFromDom = _u;
    exports.$createTabNode = Gr;
    exports.$createTextNode = xr;
    exports.$exportNodeJSON = ee;
    exports.$extendCaretToRange = Kf;
    exports.$findMatchingParent = Il;
    exports.$flushSyncAfterUpdate = function() {
        const t = Tc();
        Sc();
        t._flushSync = true;
    };
    exports.$formatText = qa;
    exports.$fullReconcile = Nc;
    exports.$generateNodesFromRawText = wu;
    exports.$getAdjacentChildCaret = If;
    exports.$getAdjacentNode = qi;
    exports.$getAdjacentSiblingOrParentSiblingCaret = function(t, e = "root") {
        let n = 0;
        let o = t;
        let r = If(o);
        while(r === null){
            n--;
            r = o.getParentCaret(e);
            if (!r) {
                return null;
            }
            o = r;
            r = If(o);
        }
        return r && [
            r,
            n
        ];
    };
    exports.$getCaretInDirection = Lf;
    exports.$getCaretRange = $f;
    exports.$getCaretRangeInDirection = Fr;
    exports.$getCharacterOffsets = function(t) {
        const e = t.getStartEndPoints();
        if (e === null) {
            return [
                0,
                0
            ];
        }
        const n = e[0];
        const o = e[1];
        if (n.type === "element" && o.type === "element" && n.key === o.key && n.offset === o.offset) {
            return [
                0,
                0
            ];
        }
        return [
            Xa(n),
            Xa(o)
        ];
    };
    exports.$getChildCaret = Af;
    exports.$getChildCaretAtIndex = Pr;
    exports.$getChildCaretOrSelf = Df;
    exports.$getCollapsedCaretRange = Bf;
    exports.$getCommonAncestor = Vf;
    exports.$getCommonAncestorResultBranchOrder = Uf;
    exports.$getDOMSlot = Vs;
    exports.$getDOMTextNode = Js;
    exports.$getDocument = ks;
    exports.$getEditor = js;
    exports.$getEditorDOMRenderConfig = Hs;
    exports.$getElementAndOffsetForPoint = Eu;
    exports.$getNearestNodeFromDOMNode = ki;
    exports.$getNearestRootOrShadowRoot = us;
    exports.$getNodeByKey = Ti;
    exports.$getNodeByKeyOrThrow = _s;
    exports.$getNodeFromDOMNode = vi;
    exports.$getPreviousSelection = Cu;
    exports.$getRoot = Mi;
    exports.$getSelection = Su;
    exports.$getSelectionSlotFrame = Qu;
    exports.$getSiblingCaret = Ef;
    exports.$getSlot = ef;
    exports.$getSlotFrame = Xu;
    exports.$getSlotHost = Gu;
    exports.$getSlotNameWithinHost = qu;
    exports.$getSlotNames = tf;
    exports.$getState = ln;
    exports.$getStateChange = function(t, e, n) {
        const o = ln(t, n, on);
        const r = ln(e, n, on);
        if (n.isEqual(o, r)) {
            return null;
        }
        return [
            o,
            r
        ];
    };
    exports.$getTextContent = function() {
        const t = Su();
        if (t === null) {
            return "";
        }
        return t.getTextContent();
    };
    exports.$getTextNodeOffset = Mf;
    exports.$getTextPointCaret = Of;
    exports.$getTextPointCaretSlice = wf;
    exports.$getTextPointCaretSliceForNode = Lr;
    exports.$getWritableNodeState = dn;
    exports.$hasAncestor = ss;
    exports.$hasUpdateTag = function(t) {
        return vc()._updateTags.has(t);
    };
    exports.$insertNodeToNearestRootAtCaret = zr;
    exports.$insertNodes = function(t) {
        let e = Su() || Cu();
        if (e === null) {
            e = Mi().selectEnd();
        }
        e.insertNodes(t);
    };
    exports.$isBlockElementNode = du;
    exports.$isBlockFullySelected = Wr;
    exports.$isChildCaret = vf;
    exports.$isCompactExport = te;
    exports.$isDecoratorNode = Go;
    exports.$isEditorState = function(t) {
        return t instanceof _Bl;
    };
    exports.$isElementDOMSlot = Ys;
    exports.$isElementNode = Vo;
    exports.$isExtendableTextPointCaret = Ir;
    exports.$isInlineElementOrDecoratorNode = as;
    exports.$isInlineFormattable = ar;
    exports.$isLeafNode = function(t) {
        return Sr(t) || Xl(t) || Go(t);
    };
    exports.$isLexicalNode = No;
    exports.$isLineBreakNode = Xl;
    exports.$isNodeCaret = function(t) {
        return t instanceof _gf4;
    };
    exports.$isNodeSelection = Ya;
    exports.$isParagraphNode = Vr;
    exports.$isRangeSelection = Ha;
    exports.$isRootNode = root;
    exports.$isRootOrShadowRoot = shadowRoot;
    exports.$isSelectionCapturedInDecoratorInput = ri;
    exports.$isShadowRootNode = fs;
    exports.$isSiblingCaret = hasNext;
    exports.$isSlotChild = Yu;
    exports.$isSlotHost = Vu;
    exports.$isTabNode = qr;
    exports.$isTextNode = Sr;
    exports.$isTextPointCaret = Cf;
    exports.$isTextPointCaretSlice = function(t) {
        return t instanceof _Pf;
    };
    exports.$isTokenOrSegmented = fi;
    exports.$isTokenOrTab = ui;
    exports.$markSlotEditable = rl;
    exports.$needsBlockCursorBeside = ms;
    exports.$nodesOfType = function(t) {
        const e = t.getType();
        const n = Tc();
        if (n._readOnly) {
            const _t272 = Xs(n).get(e);
            if (_t272) {
                return Array.from(_t272.values());
            }
            return [];
        }
        const n__nodeMap = n._nodeMap;
        const r = [];
        for (const _ref87 of n__nodeMap){
            const _n145 = _ref87[1];
            if (_n145 instanceof t && _n145.__type === e && _n145.isAttached()) {
                r.push(_n145);
            }
        }
        return r;
    };
    exports.$normalizeCaret = Dr;
    exports.$normalizeSelection__EXPERIMENTAL = Oo;
    exports.$onUpdate = is;
    exports.$parseSerializedNode = function(t) {
        return wc(t, vc()._nodes);
    };
    exports.$removeFromParent = mi;
    exports.$removeSlot = function(t, e) {
        const n = t.getWritable();
        if (n.__slots === null) {
            return n;
        }
        const o = n.__slots.get(e);
        if (o !== undefined) {
            df(o);
            rf(n).delete(e);
        }
        return n;
    };
    exports.$removeTextFromCaretRange = wr;
    exports.$rewindSiblingCaret = Er;
    exports.$selectAll = function(t) {
        const e = Mi();
        if (Ha(t)) {
            const { anchor, focus } = t;
            const _o99 = anchor.getNode();
            if (root(_o99)) {
                anchor.set(_o99.getKey(), 0, "element");
                focus.set(_o99.getKey(), _o99.getChildrenSize(), "element");
                Hi(t, _o99);
                return t;
            }
            const _r83 = _o99.getTopLevelElementOrThrow();
            const _i52 = _r83.getParent();
            if (_i52 === null) {
                if (Vo(_r83)) {
                    anchor.set(_r83.getKey(), 0, "element");
                    focus.set(_r83.getKey(), _r83.getChildrenSize(), "element");
                    Hi(t, _r83);
                }
                return t;
            }
            anchor.set(_i52.getKey(), 0, "element");
            focus.set(_i52.getKey(), _i52.getChildrenSize(), "element");
            Hi(t, _i52);
            return t;
        }
        {
            const _t273 = e.select(0, e.getChildrenSize());
            Ai(Hi(_t273, e));
            return _t273;
        }
    };
    exports.$setCompositionKey = Si;
    exports.$setDirectionFromDOM = tl;
    exports.$setFormatFromDOM = el;
    exports.$setPointFromCaret = vr;
    exports.$setSelection = Ai;
    exports.$setSelectionFromCaretRange = Nr;
    exports.$setSlot = ff;
    exports.$setState = cn;
    exports.$setTextFormat = function(t, e) {
        const n = [];
        for (const [_t274, _o100] of Object.entries(e)){
            if (typeof _o100 === "boolean") {
                n.push([
                    _t274,
                    _o100
                ]);
            }
        }
        if (n.length !== 0) {
            Ga(t, (t)=>{
                for (const [_e193, _o101] of n){
                    t = pi(t, _e193, _o101 ? w[_e193] : 0);
                }
                return t;
            });
        }
    };
    exports.$splitAtPointCaretNext = $r;
    exports.$splitNode = function(t, n) {
        let o = t.getChildAtIndex(n);
        if (o == null) {
            o = t;
        }
        if (shadowRoot(t)) {
            e(102);
        }
        const _r86 = function r(t) {
            const n = t.getParentOrThrow();
            const i = shadowRoot(n);
            const s = t !== o || i ? hs(t) : t;
            if (i) {
                if (!(Vo(t) && Vo(s))) {
                    e(133);
                }
                t.insertAfter(s);
                return [
                    t,
                    s,
                    s
                ];
            }
            {
                const _r85 = _r86(n);
                const _e194 = _r85[0];
                const _o102 = _r85[1];
                const _i53 = _r85[2];
                const _l24 = t.getNextSiblings();
                _i53.append(...[
                    s
                ].concat(Array.from(_l24)));
                return [
                    _e194,
                    _o102,
                    s
                ];
            }
        };
        const _r84 = _r86(o);
        const i = _r84[0];
        const s = _r84[1];
        return [
            i,
            s
        ];
    };
    exports.$splitTextPointCaretSlice = Kr;
    exports.$updateDOMSelection = Ou;
    exports.$updateRangeSelectionFromCaretRange = br;
    exports.$withCompactExport = Zt;
    exports.ArtificialNode__DO_NOT_USE = _Yl;
    exports.BEFORE_INPUT_COMMAND = H;
    exports.BLUR_COMMAND = blur;
    exports.CAN_REDO_COMMAND = It;
    exports.CAN_UNDO_COMMAND = Ft;
    exports.CAN_USE_BEFORE_INPUT = d;
    exports.CAN_USE_DOM = r;
    exports.CLEAR_EDITOR_COMMAND = At;
    exports.CLEAR_HISTORY_COMMAND = Dt;
    exports.CLICK_COMMAND = j;
    exports.COLLABORATION_TAG = zl;
    exports.COMMAND_PRIORITY_BEFORE_CRITICAL = -4;
    exports.COMMAND_PRIORITY_BEFORE_EDITOR = -8;
    exports.COMMAND_PRIORITY_BEFORE_HIGH = -5;
    exports.COMMAND_PRIORITY_BEFORE_LOW = -7;
    exports.COMMAND_PRIORITY_BEFORE_NORMAL = -6;
    exports.COMMAND_PRIORITY_CRITICAL = 4;
    exports.COMMAND_PRIORITY_EDITOR = 0;
    exports.COMMAND_PRIORITY_HIGH = 3;
    exports.COMMAND_PRIORITY_LOW = 1;
    exports.COMMAND_PRIORITY_NORMAL = 2;
    exports.COMPOSITION_END_COMMAND = J;
    exports.COMPOSITION_END_TAG = Vl;
    exports.COMPOSITION_START_COMMAND = Y;
    exports.COMPOSITION_START_TAG = Hl;
    exports.CONTROLLED_TEXT_INSERTION_COMMAND = Q;
    exports.CONTROL_OR_ALT = $t;
    exports.CONTROL_OR_META = Bt;
    exports.CONTROL_OR_OTHER_KEY = SYMBOL_LEXICALCTRL_OR_OTHER_KEY;
    exports.COPY_COMMAND = copy;
    exports.CUT_COMMAND = cut;
    exports.CUT_TAG = "cut";
    exports.DEFAULT_EDITOR_DOM_CONFIG = rc;
    exports.DELETE_CHARACTER_COMMAND = G;
    exports.DELETE_LINE_COMMAND = nt;
    exports.DELETE_WORD_COMMAND = et;
    exports.DRAGEND_COMMAND = dragend;
    exports.DRAGOVER_COMMAND = dragover;
    exports.DRAGSTART_COMMAND = dragstart;
    exports.DROP_COMMAND = drop;
    exports.DecoratorNode = _Jo;
    exports.ElementNode = _Ho4;
    exports.FOCUS_COMMAND = focus;
    exports.FORMAT_ELEMENT_COMMAND = Nt;
    exports.FORMAT_TEXT_COMMAND = ot;
    exports.HISTORIC_TAG = "historic";
    exports.HISTORY_MERGE_TAG = tag;
    exports.HISTORY_PUSH_TAG = "history-push";
    exports.INDENT_CONTENT_COMMAND = Ct;
    exports.INPUT_COMMAND = V;
    exports.INSERT_LINE_BREAK_COMMAND = q;
    exports.INSERT_PARAGRAPH_COMMAND = X;
    exports.INSERT_TAB_COMMAND = St;
    exports.INTERNAL_$expandSelectionToWholeDocument = Qa;
    exports.INTERNAL_$isBlock = Us;
    exports.IS_ALL_FORMATTING = C;
    exports.IS_ANDROID = p;
    exports.IS_ANDROID_CHROME = y;
    exports.IS_APPLE = a;
    exports.IS_APPLE_WEBKIT = x;
    exports.IS_BOLD = 1;
    exports.IS_CHROME = m;
    exports.IS_CODE = 16;
    exports.IS_FIREFOX = u;
    exports.IS_HIGHLIGHT = 128;
    exports.IS_IOS = g;
    exports.IS_ITALIC = 2;
    exports.IS_SAFARI = _;
    exports.IS_STRIKETHROUGH = 4;
    exports.IS_SUBSCRIPT = 32;
    exports.IS_SUPERSCRIPT = 64;
    exports.IS_UNDERLINE = 8;
    exports.KEY_ARROW_DOWN_COMMAND = ht;
    exports.KEY_ARROW_LEFT_COMMAND = ut;
    exports.KEY_ARROW_RIGHT_COMMAND = ct;
    exports.KEY_ARROW_UP_COMMAND = dt;
    exports.KEY_BACKSPACE_COMMAND = _t;
    exports.KEY_DELETE_COMMAND = yt;
    exports.KEY_DOWN_COMMAND = lt;
    exports.KEY_ENTER_COMMAND = gt;
    exports.KEY_ESCAPE_COMMAND = mt;
    exports.KEY_MODIFIER_COMMAND = Lt;
    exports.KEY_SPACE_COMMAND = pt;
    exports.KEY_TAB_COMMAND = xt;
    exports.LineBreakNode = _Jl;
    exports.MOVE_TO_END = at;
    exports.MOVE_TO_START = ft;
    exports.NODE_STATE_DIRECT = on;
    exports.NODE_STATE_KEY = L;
    exports.NODE_STATE_LATEST = rn;
    exports.OUTDENT_CONTENT_COMMAND = Tt;
    exports.PASTE_COMMAND = paste;
    exports.PASTE_TAG = "paste";
    exports.ParagraphNode = _Ur;
    exports.REDO_COMMAND = st;
    exports.REMOVE_TEXT_COMMAND = tt;
    exports.RootNode = _Xo;
    exports.SELECTION_CHANGE_COMMAND = W;
    exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = U;
    exports.SELECT_ALL_COMMAND = wt;
    exports.SET_TEXT_FORMAT_COMMAND = rt;
    exports.SKIP_COLLAB_TAG = "skip-collab";
    exports.SKIP_DOM_SELECTION_TAG = Ul;
    exports.SKIP_SCROLL_INTO_VIEW_TAG = Wl;
    exports.SKIP_SELECTION_FOCUS_TAG = jl;
    exports.TEXT_TYPE_TO_FORMAT = w;
    exports.TabNode = _Jr;
    exports.TextNode = _ur2;
    exports.UNDO_COMMAND = it;
    exports.addClassNamesToElement = function(t, ...e) {
        const n = Yf(...Array.from(e));
        if (n.length > 0) {
            t.classList.add(...Array.from(n));
        }
    };
    exports.aliasTableOf = Ee;
    exports.aliasedValue = Ze;
    exports.arrayValue = function(item) {
        return Ae(function(e) {
            if (!Array.isArray(e)) {
                return [];
            }
            const n = new Array(e.length);
            for(let _o103 = 0; _o103 < e.length; _o103++){
                n[_o103] = item(e[_o103]);
            }
            return n;
        }, {
            item,
            kind: "array"
        }, undefined, function(e, n) {
            if (!Array.isArray(e) || !Array.isArray(n) || e.length !== n.length) {
                return false;
            }
            for(let _o104 = 0; _o104 < e.length; _o104++){
                if (!Te(item, e[_o104], n[_o104])) {
                    return false;
                }
            }
            return true;
        }, function(t) {
            return Array.isArray(t);
        });
    };
    exports.booleanValue = function(t = false) {
        return Ae(function(e) {
            if (typeof e === "boolean") {
                return e;
            }
            return t;
        }, {
            kind: "boolean"
        }, undefined, undefined, function(t) {
            return typeof t === "boolean";
        });
    };
    exports.buildImportMap = function(t) {
        return t;
    };
    exports.compileKeyboardShortcuts = jt;
    exports.configExtension = function(...t) {
        return t;
    };
    exports.createCommand = z;
    exports.createEditor = function(t) {
        const n = t || {};
        const o = kc();
        const r = n.theme || {};
        const i = t === undefined ? o : n.parentEditor || null;
        const disableEvents = n.disableEvents || false;
        const l = Ll();
        const namespace = n.namespace || (i !== null ? i._config.namespace : Li());
        const n_editorState = n.editorState;
        const u = [
            _Xo,
            _ur2,
            _Jl,
            _Jr,
            _Ur,
            _Yl
        ].concat(Array.from(n.nodes || []));
        const { onError, onWarn, html } = n;
        const g = n.editable === undefined || n.editable;
        let p;
        if (t === undefined && o !== null) {
            p = o._nodes;
        } else {
            p = new Map();
            for(let _t275 = 0; _t275 < u.length; _t275++){
                let _o105 = u[_t275];
                let replace = null;
                let replaceWithKlass = null;
                if (_o105 && typeof _o105 === "object") {
                    const _t276 = _o105;
                    _o105 = _t276.replace;
                    replace = _t276.with;
                    replaceWithKlass = _t276.withKlass || null;
                }
                if (typeof _o105 !== "function" || !_o105.prototype || !(_o105 === _vo5 || _o105.prototype instanceof _vo5)) {
                    let _r88 = "<unknown>";
                    try {
                        _r88 = JSON.parse(Yt);
                    } catch (_unused2) {}
                    e(365, String(_t275 - u.length + (n.nodes ? n.nodes.length : 0)), typeof _o105 === "function" ? `${_o105.name}${typeof _o105.getType === "function" ? ` (type ${String(_o105.getType())})` : ""}` : String(_o105), String(_r88));
                }
                kl(_o105);
                const _s30 = _o105.getType();
                const transforms = oc(_o105);
                p.set(_s30, {
                    exportDOM: html && html.export ? html.export.get(_o105) : undefined,
                    klass: _o105,
                    replace,
                    replaceWithKlass,
                    sharedNodeState: an(u[_t275]),
                    transforms
                });
            }
        }
        const _ = new _lc(l, i, p, {
            disableEvents,
            dom: babelHelpers.extends({}, rc, t && t.dom),
            namespace,
            theme: r
        }, onError || console.error, onWarn || ec, ((t, e)=>{
            const n = new Map();
            const o = new Set();
            const r = function r(t) {
                Object.keys(t).forEach((e)=>{
                    let o = n.get(e);
                    if (o === undefined) {
                        o = [];
                        n.set(e, o);
                    }
                    o.push(t[e]);
                });
            };
            t.forEach((t)=>{
                const importDOM = t.klass.importDOM;
                if (importDOM == null || o.has(importDOM)) {
                    return;
                }
                o.add(importDOM);
                const n = importDOM.call(t.klass);
                if (n !== null) {
                    r(n);
                }
            });
            if (e) {
                r(e);
            }
            return n;
        })(p, html ? html.import : undefined), g, t);
        if (n_editorState !== undefined) {
            _._pendingEditorState = n_editorState;
            _._dirtyType = 2;
        }
        ((t)=>{
            t.registerCommand(H, ha, 0);
            t.registerCommand(V, pa, 0);
            t.registerCommand(Y, ma, 0);
            t.registerCommand(J, ya, 0);
            t.registerCommand(lt, Ma, 0);
        })(_);
        return _;
    };
    exports.createRefCountedRegistry = Ht;
    exports.createSharedNodeState = an;
    exports.createState = function(t, e) {
        return new sn(t, e);
    };
    exports.declarePeerDependency = function(...t) {
        return t;
    };
    exports.declaredAccepts = Ie;
    exports.defineExtension = function(t) {
        return t;
    };
    exports.enumValue = qe;
    exports.findAllLexicalElementsDeep = Ns;
    exports.flipDirection = mf;
    exports.getActiveElement = Is;
    exports.getActiveElementDeep = Fs;
    exports.getComposedEventTarget = Ps;
    exports.getComposedSchemaFields = function(t) {
        const _ml3 = ml(t);
        const { fieldsDerivedFirst, flatStates } = _ml3;
        const o = {};
        for (const _t277 of flatStates){
            if (_t277.schema) {
                o[_t277.key] = _t277.schema;
            }
        }
        for (const [_t278, _n147] of fieldsDerivedFirst){
            o[_t278] = _n147;
        }
        return o;
    };
    exports.getComposedStaticRange = Es;
    exports.getDOMOwnerDocument = es;
    exports.getDOMSelection = xs;
    exports.getDOMSelectionFromTarget = Ss;
    exports.getDOMSelectionPoints = Ms;
    exports.getDOMSelectionRange = Os;
    exports.getDOMSelectionRangeAndPoints = function(points, e) {
        const n = Es(points, e);
        if (n === null) {
            return {
                points,
                range: points.rangeCount > 0 ? points.getRangeAt(0) : null
            };
        }
        const range = ws(n) ?? (points.rangeCount > 0 ? points.getRangeAt(0) : null);
        return {
            points: As(n, Ds(points)),
            range
        };
    };
    exports.getDOMShadowRoots = vs;
    exports.getDOMTextNode = gi;
    exports.getDeclaredSlots = cf;
    exports.getEditorPropertyFromDOMNode = ai;
    exports.getNearestEditorFromDOMNode = ci;
    exports.getParentElement = ts;
    exports.getRegisteredNode = ni;
    exports.getRegisteredNodeOrThrow = ei;
    exports.getRegisteredSubtypeMap = function(t) {
        const e = new Map();
        const n = new Map();
        for (const _o106 of t){
            const _kl2 = kl(_o106);
            const _t279 = _kl2.ownNodeType;
            if (_t279) {
                n.set(_t279, _o106);
                e.set(_t279, new Set());
            }
        }
        for (const [_t280, _o107] of n){
            for (const _ref97 of Al(_o107)){
                const _n148 = _ref97.ownNodeType;
                {
                    const _o108 = _n148 && e.get(_n148);
                    if (_o108) {
                        _o108.add(_t280);
                    }
                }
            }
        }
        return e;
    };
    exports.getRootOwnerDocument = bs;
    exports.getStaticNodeConfig = kl;
    exports.getStyleObjectFromCSS = Zo;
    exports.getTextDirection = function(t) {
        if (O.test(t)) {
            return "rtl";
        }
        if (M.test(t)) {
            return "ltr";
        }
        return null;
    };
    exports.getTransformSetFromKlass = oc;
    exports.getterTableOf = be;
    exports.isBlockDomNode = Ws;
    exports.isCurrentlyReadOnlyMode = xc;
    exports.isDOMCapturingSelection = il;
    exports.isDOMDocumentNode = hi;
    exports.isDOMNode = Ls;
    exports.isDOMShadowRoot = Cs;
    exports.isDOMTextNode = di;
    exports.isDOMUnmanaged = ol;
    exports.isDocumentFragment = Ks;
    exports.isExactShortcutMatch = function(t, e, n) {
        if (!Ui(t, n)) {
            return false;
        }
        if (t.key.toLowerCase() === e.toLowerCase()) {
            return true;
        }
        if (e.length > 1) {
            return false;
        }
        if (t.key.length === 1 && t.key.charCodeAt(0) <= 127) {
            return false;
        }
        if (t.code.startsWith("Digit") && /^\d$/.test(e)) {
            return t.code === `Digit${e}`;
        }
        const o = `Key${e.toUpperCase()}`;
        return t.code === o;
    };
    exports.isHTMLAnchorElement = function(t) {
        return Rs(t) && t.tagName === "A";
    };
    exports.isHTMLElement = Rs;
    exports.isHTMLTableCellElement = function(t) {
        return Rs(t) && (t.tagName === "TD" || t.tagName === "TH");
    };
    exports.isHTMLTableRowElement = function(t) {
        return Rs(t) && t.tagName === "TR";
    };
    exports.isInlineDomNode = $s;
    exports.isLastChildInBlockNode = Zl;
    exports.isLexicalEditor = li;
    exports.isModifierMatch = Ui;
    exports.isOnlyChildInBlockNode = Ql;
    exports.isSchemaField = Ne;
    exports.isSelectionCapturedInDecoratorInput = ii;
    exports.isSelectionWithinEditor = si;
    exports.iterStaticNodeConfigChain = Al;
    exports.keyboardEventMaskForPlatform = function(t, e) {
        const n = t[SYMBOL_LEXICALCTRL_OR_OTHER_KEY];
        if (n && e !== a) {
            return babelHelpers.extends({}, t, {
                ctrlKey: t[n],
                [n]: t.ctrlKey
            });
        }
        return t;
    };
    exports.makeStepwiseIterator = zf;
    exports.mergeRegister = $c;
    exports.mountSlotContainer = function(t, e, n, o) {
        const r = t.read("latest", function() {
            const o = Ti(e);
            if (o !== null) {
                return ((t, e, n = js())=>{
                    const o = ef(t, e);
                    if (o === null) {
                        return null;
                    }
                    const r = n.getElementByKey(o.getKey());
                    if (r !== null) {
                        return r.parentElement;
                    }
                    return null;
                })(o, n, t);
            }
            return null;
        });
        if (r !== null) {
            if (r.parentElement !== o) {
                o.appendChild(r);
            }
            r.style.display = "";
        }
        return r;
    };
    exports.nodeSchema = Qe;
    exports.normalizeClassNames = Yf;
    exports.nullable = function(t, { defaultAsNull: e_defaultAsNull } = {}) {
        return Ae(function(e) {
            if (e == null) {
                return null;
            }
            const o = t(e);
            if (e_defaultAsNull && ve(t, o)) {
                return null;
            }
            return o;
        }, {
            defaultAsNull: e_defaultAsNull,
            inner: t,
            kind: "nullable"
        }, undefined, Le(t), Ke(t, (t)=>t == null));
    };
    exports.numberValue = Ge;
    exports.objectValue = function(t) {
        return ((e)=>{
            const t = 0;
            const n = Object.entries(e);
            return Ae(function(t) {
                const e = t !== null && typeof t === "object" ? t : {};
                const o = {};
                for (const [_r89, _i55] of n){
                    o[_r89] = _i55(e[_r89]);
                }
                return o;
            }, {
                fields: e,
                kind: "object"
            }, undefined, function(t, o) {
                return He(t) && He(o) && !Ve(t, e) && !Ve(o, e) && n.every(([e, n])=>Te(n, t[e], o[e]));
            }, function(t) {
                return He(t) && !Ve(t, e);
            });
        })(t);
    };
    exports.optional = function(t, { omitDefault: e_omitDefault } = {}) {
        return Ae(function(e) {
            if (e === undefined) {
                return;
            }
            const o = t(e);
            if (e_omitDefault && ve(t, o)) {
                return undefined;
            }
            return o;
        }, {
            inner: t,
            kind: "optional",
            omitDefault: e_omitDefault
        }, undefined, Le(t), Ke(t, (t)=>t === undefined));
    };
    exports.rawValue = function() {
        return Ae(function(t) {
            if (t === undefined) {
                return undefined;
            }
            return t;
        }, {
            kind: "raw"
        }, undefined, undefined, function() {
            return true;
        });
    };
    exports.registerEventListener = zc;
    exports.registerEventListeners = Wc;
    exports.removeClassNamesFromElement = function(t, ...e) {
        const n = Yf(...Array.from(e));
        if (n.length > 0) {
            t.classList.remove(...Array.from(n));
        }
    };
    exports.removeFromParent = yi;
    exports.resetRandomKey = function() {
        ti = 1;
    };
    exports.safeCast = function(t) {
        return t;
    };
    exports.setDOMStyleFromCSS = er;
    exports.setDOMStyleObject = function(t, e) {
        for(const _n149 in e){
            const _o109 = e[_n149];
            if (_o109 == null) {
                t.removeProperty(_n149);
            } else {
                tr(t, _n149, _o109);
            }
        }
    };
    exports.setDOMUnmanaged = nl;
    exports.setNodeIndentFromDOM = Zs;
    exports.setterDefaultOf = Oe;
    exports.setterTableOf = ke;
    exports.shallowMergeConfig = function(t, e) {
        if (!e || t === e) {
            return t;
        }
        for(const _n150 in e){
            if (t[_n150] !== e[_n150]) {
                return babelHelpers.extends({}, t, e);
            }
        }
        return t;
    };
    exports.stopLexicalPropagation = Fa;
    exports.stringValue = Ye;
    exports.toggleTextFormatType = pi;
    exports.tokenizeRawText = Mu;
    exports.transformValue = function(t, e, n = {}) {
        return Ae(function(n) {
            return e(t(n));
        }, {
            inner: t,
            kind: "transform"
        }, Pe(e(t.defaultValue)), n.isEqual, function(e) {
            return Be(t, e);
        });
    };
    exports.unionValue = function(members) {
        const n = (arguments.length <= 1 ? 0 : arguments.length - 1) !== 0 ? Pe(arguments.length <= 1 ? undefined : arguments[1]) : members[0].defaultValue;
        return Ae(function(e) {
            if (e === undefined) {
                return n;
            }
            const o = ((e)=>{
                const n = ((t, e)=>Ue(t, e).member)(members, e);
                if (n === undefined) {
                    return undefined;
                }
                return {
                    member: n,
                    parsed: n(e)
                };
            })(e);
            if (o === undefined) {
                return n;
            }
            return o.parsed;
        }, {
            kind: "union",
            members
        }, n, Xe, function(e) {
            return (e !== undefined || n === undefined) && members.some((t)=>Be(t, e));
        });
    };
    exports.unmountSlotContainer = function(t, e, n) {
        n.style.display = "none";
        const o = t.getElementByKey(e);
        if (o !== null && n.parentElement !== o) {
            o.insertBefore(n, o.firstChild);
        }
    };
    exports.withAccessors = en;
    exports.withField = tn;
}, null);