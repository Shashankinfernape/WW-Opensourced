__d("resize-observer-polyfill-1.5.1", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        ((t, n)=>{
            if (typeof e === "object" && typeof l !== "undefined") {
                l.exports = n();
            } else {
                t.ResizeObserver = n();
            }
        })(this, function() {
            const e = (()=>{
                if (typeof Map !== "undefined") {
                    return Map;
                }
                function e(__entries__, t) {
                    let n = -1;
                    __entries__.some((e, r)=>{
                        if (e[0] === t) {
                            n = r;
                            return true;
                        }
                        return false;
                    });
                    return n;
                }
                return function() {
                    class t {
                        constructor(){
                            this.__entries__ = [];
                        }
                        get(t) {
                            const n = e(this.__entries__, t);
                            const r = this.__entries__[n];
                            return r && r[1];
                        }
                        set(t, n) {
                            const r = e(this.__entries__, t);
                            if (~r) {
                                this.__entries__[r][1] = n;
                            } else {
                                this.__entries__.push([
                                    t,
                                    n
                                ]);
                            }
                        }
                        delete(t) {
                            const __entries__ = this.__entries__;
                            const r = e(__entries__, t);
                            if (~r) {
                                __entries__.splice(r, 1);
                            }
                        }
                        has(t) {
                            return !!~e(this.__entries__, t);
                        }
                        clear() {
                            this.__entries__.splice(0);
                        }
                        forEach(e, t = null) {
                            for (const o of this.__entries__){
                                e.call(t, o[1], o[0]);
                            }
                        }
                    }
                    Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.__entries__.length;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return t;
                }();
            })();
            const n = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
            const r = (()=>{
                if (typeof t !== "undefined" && t.Math === Math) {
                    return t;
                }
                if (typeof self !== "undefined" && self.Math === Math) {
                    return self;
                }
                if (typeof window !== "undefined" && window.Math === Math) {
                    return window;
                }
                return Function("return this")();
            })();
            const o = (()=>{
                if (typeof requestAnimationFrame === "function") {
                    return requestAnimationFrame.bind(r);
                }
                return function(e) {
                    return setTimeout(()=>e(Date.now()), 1000 / 60);
                };
            })();
            const a = 2;
            function i(e, t) {
                let n = false;
                let r = false;
                let i = 0;
                function l() {
                    if (n) {
                        n = false;
                        e();
                    }
                    if (r) {
                        u();
                    }
                }
                function s() {
                    o(l);
                }
                function u() {
                    const e = Date.now();
                    if (n) {
                        if (e - i < a) {
                            return;
                        }
                        r = true;
                    } else {
                        n = true;
                        r = false;
                        setTimeout(s, t);
                    }
                    i = e;
                }
                return u;
            }
            const l = 20;
            const s = [
                "top",
                "right",
                "bottom",
                "left",
                "width",
                "height",
                "size",
                "weight"
            ];
            const u = typeof MutationObserver !== "undefined";
            const c = function() {
                class e {
                    constructor(){
                        this.connected_ = false;
                        this.mutationEventsAdded_ = false;
                        this.mutationsObserver_ = null;
                        this.observers_ = [];
                        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
                        this.refresh = i(this.refresh.bind(this), l);
                    }
                    addObserver(e) {
                        if (!~this.observers_.indexOf(e)) {
                            this.observers_.push(e);
                        }
                        if (!this.connected_) {
                            this.connect_();
                        }
                    }
                    removeObserver(e) {
                        const observers_ = this.observers_;
                        const n = observers_.indexOf(e);
                        if (~n) {
                            observers_.splice(n, 1);
                        }
                        if (!observers_.length && this.connected_) {
                            this.disconnect_();
                        }
                    }
                    refresh() {
                        const e = this.updateObservers_();
                        if (e) {
                            this.refresh();
                        }
                    }
                    updateObservers_() {
                        const e = this.observers_.filter((e)=>{
                            e.gatherActive();
                            return e.hasActive();
                        });
                        e.forEach((e)=>e.broadcastActive());
                        return e.length > 0;
                    }
                    connect_() {
                        if (!(!n || this.connected_)) {
                            document.addEventListener("transitionend", this.onTransitionEnd_);
                            window.addEventListener("resize", this.refresh);
                            if (u) {
                                this.mutationsObserver_ = new MutationObserver(this.refresh);
                                this.mutationsObserver_.observe(document, {
                                    attributes: true,
                                    childList: true,
                                    characterData: true,
                                    subtree: true
                                });
                            } else {
                                document.addEventListener("DOMSubtreeModified", this.refresh);
                                this.mutationEventsAdded_ = true;
                            }
                            this.connected_ = true;
                        }
                    }
                    disconnect_() {
                        if (!(!n || !this.connected_)) {
                            document.removeEventListener("transitionend", this.onTransitionEnd_);
                            window.removeEventListener("resize", this.refresh);
                            if (this.mutationsObserver_) {
                                this.mutationsObserver_.disconnect();
                            }
                            if (this.mutationEventsAdded_) {
                                document.removeEventListener("DOMSubtreeModified", this.refresh);
                            }
                            this.mutationsObserver_ = null;
                            this.mutationEventsAdded_ = false;
                            this.connected_ = false;
                        }
                    }
                    onTransitionEnd_({ propertyName = "" }) {
                        const r = s.some((e)=>!!~propertyName.indexOf(e));
                        if (r) {
                            this.refresh();
                        }
                    }
                    static getInstance() {
                        if (!this.instance_) {
                            this.instance_ = new e;
                        }
                        return this.instance_;
                    }
                }
                e.instance_ = null;
                return e;
            }();
            const d = (e, t)=>{
                for (const o of Object.keys(t)){
                    Object.defineProperty(e, o, {
                        value: t[o],
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                }
                return e;
            };
            const m = (e)=>{
                const t = e && e.ownerDocument && e.ownerDocument.defaultView;
                return t || r;
            };
            const p = R(0, 0, 0, 0);
            function _(e) {
                return parseFloat(e) || 0;
            }
            function f(e, ...t_1) {
                return t_1.reduce((acc, item)=>{
                    const r = e[`border-${item}-width`];
                    return acc + _(r);
                }, 0);
            }
            function g(e) {
                const t = [
                    "top",
                    "right",
                    "bottom",
                    "left"
                ];
                const n = {};
                for (const a of t){
                    const i = e[`padding-${a}`];
                    n[a] = _(i);
                }
                return n;
            }
            function h(target) {
                const t = target.getBBox();
                return R(0, 0, t.width, t.height);
            }
            function y(target) {
                const { clientWidth, clientHeight } = target;
                if (!clientWidth && !clientHeight) {
                    return p;
                }
                const r = m(target).getComputedStyle(target);
                const o = g(r);
                const a = o.left + o.right;
                const i = o.top + o.bottom;
                let l = _(r.width);
                let s = _(r.height);
                if (r.boxSizing === "border-box") {
                    if (Math.round(l + a) !== clientWidth) {
                        l -= f(r, "left", "right") + a;
                    }
                    if (Math.round(s + i) !== clientHeight) {
                        s -= f(r, "top", "bottom") + i;
                    }
                }
                if (!b(target)) {
                    const u = Math.round(l + a) - clientWidth;
                    const c = Math.round(s + i) - clientHeight;
                    if (Math.abs(u) !== 1) {
                        l -= u;
                    }
                    if (Math.abs(c) !== 1) {
                        s -= c;
                    }
                }
                return R(o.left, o.top, l, s);
            }
            const C = (()=>{
                if (typeof SVGGraphicsElement !== "undefined") {
                    return function(e) {
                        return e instanceof m(e).SVGGraphicsElement;
                    };
                }
                return function(e) {
                    return e instanceof m(e).SVGElement && typeof e.getBBox === "function";
                };
            })();
            function b(e) {
                return e === m(e).document.documentElement;
            }
            function v(target) {
                if (n) {
                    if (C(target)) {
                        return h(target);
                    }
                    return y(target);
                }
                return p;
            }
            function S({ x, y, width, height }) {
                const a = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
                const i = Object.create(a.prototype);
                d(i, {
                    x,
                    y,
                    width,
                    height,
                    top: y,
                    right: x + width,
                    bottom: height + y,
                    left: x
                });
                return i;
            }
            function R(x, y_1, width, height) {
                return {
                    x,
                    y: y_1,
                    width,
                    height
                };
            }
            class L {
                constructor(e){
                    this.broadcastWidth = 0;
                    this.broadcastHeight = 0;
                    this.contentRect_ = R(0, 0, 0, 0);
                    this.target = e;
                }
                isActive() {
                    const e = v(this.target);
                    this.contentRect_ = e;
                    return e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
                }
                broadcastRect() {
                    const contentRect_ = this.contentRect_;
                    this.broadcastWidth = contentRect_.width;
                    this.broadcastHeight = contentRect_.height;
                    return contentRect_;
                }
            }
            class E {
                constructor(e, t){
                    var contentRect = S(t);
                    d(this, {
                        target: e,
                        contentRect
                    });
                }
            }
            class k {
                constructor(t, n, r){
                    this.activeObservations_ = [];
                    this.observations_ = new e;
                    if (typeof t !== "function") {
                        throw new TypeError("The callback provided as parameter 1 is not a function.");
                    }
                    this.callback_ = t;
                    this.controller_ = n;
                    this.callbackCtx_ = r;
                }
                observe(e) {
                    if (!arguments.length) {
                        throw new TypeError("1 argument required, but only 0 present.");
                    }
                    if (!(typeof Element === "undefined" || !(Element instanceof Object))) {
                        if (!(e instanceof m(e).Element)) {
                            throw new TypeError('parameter 1 is not of type "Element".');
                        }
                        const t = this.observations_;
                        if (!t.has(e)) {
                            t.set(e, new L(e));
                            this.controller_.addObserver(this);
                            this.controller_.refresh();
                        }
                    }
                }
                unobserve(e) {
                    if (!arguments.length) {
                        throw new TypeError("1 argument required, but only 0 present.");
                    }
                    if (!(typeof Element === "undefined" || !(Element instanceof Object))) {
                        if (!(e instanceof m(e).Element)) {
                            throw new TypeError('parameter 1 is not of type "Element".');
                        }
                        const t = this.observations_;
                        if (t.has(e)) {
                            t.delete(e);
                            if (!t.size) {
                                this.controller_.removeObserver(this);
                            }
                        }
                    }
                }
                disconnect() {
                    this.clearActive();
                    this.observations_.clear();
                    this.controller_.removeObserver(this);
                }
                gatherActive() {
                    const e = this;
                    this.clearActive();
                    this.observations_.forEach((t)=>{
                        if (t.isActive()) {
                            e.activeObservations_.push(t);
                        }
                    });
                }
                broadcastActive() {
                    if (this.hasActive()) {
                        const e = this.callbackCtx_;
                        const t = this.activeObservations_.map((e)=>new E(e.target, e.broadcastRect()));
                        this.callback_.call(e, t, e);
                        this.clearActive();
                    }
                }
                clearActive() {
                    this.activeObservations_.splice(0);
                }
                hasActive() {
                    return this.activeObservations_.length > 0;
                }
            }
            const I = typeof WeakMap !== "undefined" ? new WeakMap : new e;
            const T = (()=>{
                function e(t) {
                    if (!(this instanceof e)) {
                        throw new TypeError("Cannot call a class as a function.");
                    }
                    if (!arguments.length) {
                        throw new TypeError("1 argument required, but only 0 present.");
                    }
                    const n = c.getInstance();
                    const r = new k(t, n, this);
                    I.set(this, r);
                }
                return e;
            })();
            [
                "observe",
                "unobserve",
                "disconnect"
            ].forEach((e)=>{
                T.prototype[e] = function() {
                    return I.get(this)[e](...arguments);
                };
            });
            const D = (()=>{
                if (typeof r.ResizeObserver !== "undefined") {
                    return r.ResizeObserver;
                }
                return T;
            })();
            return D;
        });
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case undefined:
                return c();
        }
    }
    a.exports = d;
}, null);