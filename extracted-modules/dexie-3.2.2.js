__d("dexie-3.2.2", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const l = {};
    const s = {
        exports: l
    };
    let u;
    function c() {
        ((e, t)=>{
            if (typeof l === "object" && typeof s !== "undefined") {
                s.exports = t();
            } else if (typeof u === "function" && u.amd) {
                u(t);
            } else {
                e = typeof globalThis !== "undefined" ? globalThis : e || self;
                e.Dexie = t();
            }
        })(this, function() {
            let r = function() {
                r = Object.assign || function(t) {
                    let e;
                    for(let n = 1, r = arguments.length; n < r; n++){
                        e = arguments[n];
                        for(const o in e){
                            if (Object.prototype.hasOwnProperty.call(e, o)) {
                                t[o] = e[o];
                            }
                        }
                    }
                    return t;
                };
                return r.apply(this, arguments);
            };
            function o(e, t, n) {
                if (n || arguments.length === 2) {
                    var a;
                    for(let r = 0, o = t.length; r < o; r++){
                        if (a || !(r in t)) {
                            if (!a) {
                                a = Array.prototype.slice.call(t, 0, r);
                            }
                            a[r] = t[r];
                        }
                    }
                }
                return e.concat(a || Array.prototype.slice.call(t));
            }
            const a = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : t;
            const i = Object.keys;
            const l = Array.isArray;
            if (typeof (e || (e = n("Promise"))) !== "undefined" && !a.Promise) {
                a.Promise = e || (e = n("Promise"));
            }
            function s(e, t) {
                if (typeof t === "object") {
                    i(t).forEach((n)=>{
                        e[n] = t[n];
                    });
                }
                return e;
            }
            const u = Object.getPrototypeOf;
            const c = {}.hasOwnProperty;
            function d(e, t) {
                return c.call(e, t);
            }
            function m(e, t) {
                if (typeof t === "function") {
                    t = t(u(e));
                }
                (typeof Reflect === "undefined" ? i : Reflect.ownKeys)(t).forEach((n)=>{
                    _(e, n, t[n]);
                });
            }
            const p = Object.defineProperty;
            function _(e, t, n, r) {
                p(e, t, s(n && d(n, "get") && typeof n.get === "function" ? {
                    get: n.get,
                    set: n.set,
                    configurable: true
                } : {
                    value: n,
                    configurable: true,
                    writable: true
                }, r));
            }
            function f(e) {
                return {
                    from: function(n) {
                        e.prototype = Object.create(n.prototype);
                        _(e.prototype, "constructor", e);
                        return {
                            extend: m.bind(null, e.prototype)
                        };
                    }
                };
            }
            const g = Object.getOwnPropertyDescriptor;
            function h(e, t) {
                const n = g(e, t);
                let r;
                return n || (r = u(e)) && h(r, t);
            }
            const y = [].slice;
            function C(e, t, n) {
                return y.call(e, t, n);
            }
            function b(e, t) {
                return t(e);
            }
            function v(e) {
                if (!e) {
                    throw new Error("Assertion Failed");
                }
            }
            function S(e) {
                if (a.setImmediate) {
                    setImmediate(e);
                } else {
                    setTimeout(e, 0);
                }
            }
            function R(e, t) {
                return e.reduce((e, n, r)=>{
                    const o = t(n, r);
                    if (o) {
                        e[o[0]] = o[1];
                    }
                    return e;
                }, {});
            }
            function L(e, t, n) {
                try {
                    e.apply(null, n);
                } catch (e) {
                    if (t) {
                        t(e);
                    }
                }
            }
            function E(e, t) {
                if (d(e, t)) {
                    return e[t];
                }
                if (!t) {
                    return e;
                }
                if (typeof t !== "string") {
                    const n = [];
                    for(let r = 0, o = t.length; r < o; ++r){
                        const a = E(e, t[r]);
                        n.push(a);
                    }
                    return n;
                }
                const i = t.indexOf(".");
                if (i !== -1) {
                    const l = e[t.substr(0, i)];
                    if (l === void 0) {
                        return void 0;
                    }
                    return E(l, t.substr(i + 1));
                }
            }
            function k(e, t, n) {
                if (!(!e || t === void 0) && !("isFrozen" in Object && Object.isFrozen(e))) {
                    if (typeof t !== "string" && "length" in t) {
                        v(typeof n !== "string" && "length" in n);
                        for(let r = 0, o = t.length; r < o; ++r){
                            k(e, t[r], n[r]);
                        }
                    } else {
                        const a = t.indexOf(".");
                        if (a !== -1) {
                            const i = t.substr(0, a);
                            const s = t.substr(a + 1);
                            if (s === "") {
                                if (n === void 0) {
                                    if (l(e) && !isNaN(parseInt(i))) {
                                        e.splice(i, 1);
                                    } else {
                                        delete e[i];
                                    }
                                } else {
                                    e[i] = n;
                                }
                            } else {
                                let u = e[i];
                                if (!u || !d(e, i)) {
                                    u = e[i] = {};
                                }
                                k(u, s, n);
                            }
                        } else {
                            if (n === void 0) {
                                if (l(e) && !isNaN(parseInt(t))) {
                                    e.splice(t, 1);
                                } else {
                                    delete e[t];
                                }
                            } else {
                                e[t] = n;
                            }
                        }
                    }
                }
            }
            function I(e, t) {
                if (typeof t === "string") {
                    k(e, t, void 0);
                } else if ("length" in t) {
                    [].map.call(t, function(t) {
                        k(e, t, void 0);
                    });
                }
            }
            function T(e) {
                const t = {};
                for(const n in e){
                    if (d(e, n)) {
                        t[n] = e[n];
                    }
                }
                return t;
            }
            const D = [].concat;
            function x(e) {
                return D.apply([], e);
            }
            const $ = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(x([
                8,
                16,
                32,
                64
            ].map((e)=>[
                    "Int",
                    "Uint",
                    "Float"
                ].map((t)=>`${t + e}Array`)))).filter((e)=>a[e]);
            const P = $.map((e)=>a[e]);
            R($, function(e) {
                return [
                    e,
                    true
                ];
            });
            let N = null;
            function M(e) {
                N = typeof WeakMap !== "undefined" && new WeakMap;
                const t = w(e);
                N = null;
                return t;
            }
            function w(e) {
                if (!e || typeof e !== "object") {
                    return e;
                }
                let t = N && N.get(e);
                if (t) {
                    return t;
                }
                if (l(e)) {
                    t = [];
                    if (N) {
                        N.set(e, t);
                    }
                    for(let n = 0, r = e.length; n < r; ++n){
                        t.push(w(e[n]));
                    }
                } else if (P.indexOf(e.constructor) >= 0) {
                    t = e;
                } else {
                    const o = u(e);
                    t = o === Object.prototype ? {} : Object.create(o);
                    if (N) {
                        N.set(e, t);
                    }
                    for(const a in e){
                        if (d(e, a)) {
                            t[a] = w(e[a]);
                        }
                    }
                }
                return t;
            }
            const A = {}.toString;
            function F(e) {
                return A.call(e).slice(8, -1);
            }
            const O = typeof Symbol !== "undefined" && typeof Symbol === "function" ? Symbol.iterator : "@@iterator";
            const B = typeof O === "symbol" ? function(e) {
                let t;
                return e != null && (t = e[O]) && t.apply(e);
            } : function() {
                return null;
            };
            const W = {};
            function q(e) {
                let t;
                let n;
                let r;
                let o;
                if (arguments.length === 1) {
                    if (l(e)) {
                        return e.slice();
                    }
                    if (this === W && typeof e === "string") {
                        return [
                            e
                        ];
                    }
                    if (o = B(e)) {
                        for(n = []; r = o.next(), !r.done;){
                            n.push(r.value);
                        }
                        return n;
                    }
                    if (e == null) {
                        return [
                            e
                        ];
                    }
                    t = e.length;
                    if (typeof t === "number") {
                        for(n = new Array(t); t--;){
                            n[t] = e[t];
                        }
                        return n;
                    }
                    return [
                        e
                    ];
                }
                t = arguments.length;
                for(n = new Array(t); t--;){
                    n[t] = arguments[t];
                }
                return n;
            }
            const U = typeof Symbol !== "undefined" ? function(e) {
                return e[typeof Symbol === "function" ? Symbol.toStringTag : "@@toStringTag"] === "AsyncFunction";
            } : function() {
                return false;
            };
            let V = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
            function H(e, t) {
                V = e;
                G = t;
            }
            var G = function() {
                return true;
            };
            const z = !new Error("").stack;
            function j() {
                if (z) {
                    try {
                        throw new Error;
                    } catch (e) {
                        return e;
                    }
                }
                return new Error;
            }
            function K(e, t) {
                const n = e.stack;
                if (n) {
                    t = t || 0;
                    if (n.indexOf(e.name) === 0) {
                        t += (e.name + e.message).split("\n").length;
                    }
                    return n.split("\n").slice(t).filter(G).map((e)=>`
${e}`).join("");
                }
                return "";
            }
            const Q = [
                "Modify",
                "Bulk",
                "OpenFailed",
                "VersionChange",
                "Schema",
                "Upgrade",
                "InvalidTable",
                "MissingAPI",
                "NoSuchDatabase",
                "InvalidArgument",
                "SubTransaction",
                "Unsupported",
                "Internal",
                "DatabaseClosed",
                "PrematureCommit",
                "ForeignAwait"
            ];
            const X = [
                "Unknown",
                "Constraint",
                "Data",
                "TransactionInactive",
                "ReadOnly",
                "Version",
                "NotFound",
                "InvalidState",
                "InvalidAccess",
                "Abort",
                "Timeout",
                "QuotaExceeded",
                "Syntax",
                "DataClone"
            ];
            const Y = Q.concat(X);
            const J = {
                VersionChanged: "Database version changed by other database connection",
                DatabaseClosed: "Database has been closed",
                Abort: "Transaction aborted",
                TransactionInactive: "Transaction has already completed or failed",
                MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
            };
            function Z(e, t) {
                this._e = j();
                this.name = e;
                this.message = t;
            }
            f(Z).from(Error).extend({
                stack: {
                    get: function() {
                        return this._stack || (this._stack = `${this.name}: ${this.message}${K(this._e, 2)}`);
                    }
                },
                toString: function() {
                    return `${this.name}: ${this.message}`;
                }
            });
            function ee(e, t) {
                return `${e}. Errors: ${Object.keys(t).map((e)=>t[e].toString()).filter((e, t, n)=>n.indexOf(e) === t).join("\n")}`;
            }
            function te(e, t, n, r) {
                this._e = j();
                this.failures = t;
                this.failedKeys = r;
                this.successCount = n;
                this.message = ee(e, t);
            }
            f(te).from(Z);
            function ne(e, t) {
                this._e = j();
                this.name = "BulkError";
                this.failures = Object.keys(t).map((e)=>t[e]);
                this.failuresByPos = t;
                this.message = ee(e, t);
            }
            f(ne).from(Z);
            const re = Y.reduce((e, t)=>{
                e[t] = `${t}Error`;
                return e;
            }, {});
            const oe = Z;
            const ae = Y.reduce((e, t)=>{
                const n = `${t}Error`;
                function r(e, r) {
                    this._e = j();
                    this.name = n;
                    if (e) {
                        if (typeof e === "string") {
                            this.message = `${e}${r ? `
 ${r}` : ""}`;
                            this.inner = r || null;
                        } else if (typeof e === "object") {
                            this.message = `${e.name} ${e.message}`;
                            this.inner = e;
                        }
                    } else {
                        this.message = J[t] || n;
                        this.inner = null;
                    }
                }
                f(r).from(oe);
                e[t] = r;
                return e;
            }, {});
            ae.Syntax = SyntaxError;
            ae.Type = TypeError;
            ae.Range = RangeError;
            const ie = X.reduce((e, t)=>{
                e[`${t}Error`] = ae[t];
                return e;
            }, {});
            function le(e, t) {
                if (!e || e instanceof Z || e instanceof TypeError || e instanceof SyntaxError || !e.name || !ie[e.name]) {
                    return e;
                }
                const n = new ie[e.name](t || e.message, e);
                if ("stack" in e) {
                    _(n, "stack", {
                        get: function() {
                            return this.inner.stack;
                        }
                    });
                }
                return n;
            }
            const se = Y.reduce((e, t)=>{
                if ([
                    "Syntax",
                    "Type",
                    "Range"
                ].indexOf(t) === -1) {
                    e[`${t}Error`] = ae[t];
                }
                return e;
            }, {});
            se.ModifyError = te;
            se.DexieError = Z;
            se.BulkError = ne;
            function ue() {}
            function ce(e) {
                return e;
            }
            function de(e, t) {
                if (e == null || e === ce) {
                    return t;
                }
                return function(n) {
                    return t(e(n));
                };
            }
            function me(e, t) {
                return function() {
                    e.apply(this, arguments);
                    t.apply(this, arguments);
                };
            }
            function pe(e, t) {
                if (e === ue) {
                    return t;
                }
                return function() {
                    const n = e.apply(this, arguments);
                    if (n !== void 0) {
                        arguments[0] = n;
                    }
                    const r = this.onsuccess;
                    const o = this.onerror;
                    this.onsuccess = null;
                    this.onerror = null;
                    const a = t.apply(this, arguments);
                    if (r) {
                        this.onsuccess = this.onsuccess ? me(r, this.onsuccess) : r;
                    }
                    if (o) {
                        this.onerror = this.onerror ? me(o, this.onerror) : o;
                    }
                    if (a !== void 0) {
                        return a;
                    }
                    return n;
                };
            }
            function _e(e, t) {
                if (e === ue) {
                    return t;
                }
                return function() {
                    e.apply(this, arguments);
                    const n = this.onsuccess;
                    const r = this.onerror;
                    this.onsuccess = this.onerror = null;
                    t.apply(this, arguments);
                    if (n) {
                        this.onsuccess = this.onsuccess ? me(n, this.onsuccess) : n;
                    }
                    if (r) {
                        this.onerror = this.onerror ? me(r, this.onerror) : r;
                    }
                };
            }
            function fe(e, t) {
                if (e === ue) {
                    return t;
                }
                return function(n) {
                    const r = e.apply(this, arguments);
                    s(n, r);
                    const o = this.onsuccess;
                    const a = this.onerror;
                    this.onsuccess = null;
                    this.onerror = null;
                    const i = t.apply(this, arguments);
                    if (o) {
                        this.onsuccess = this.onsuccess ? me(o, this.onsuccess) : o;
                    }
                    if (a) {
                        this.onerror = this.onerror ? me(a, this.onerror) : a;
                    }
                    if (r === void 0) {
                        if (i === void 0) {
                            return void 0;
                        }
                        return i;
                    }
                    return s(r, i);
                };
            }
            function ge(e, t) {
                if (e === ue) {
                    return t;
                }
                return function() {
                    if (t.apply(this, arguments) === false) {
                        return false;
                    }
                    return e.apply(this, arguments);
                };
            }
            function he(e, t) {
                if (e === ue) {
                    return t;
                }
                return function() {
                    const n = e.apply(this, arguments);
                    if (n && typeof n.then === "function") {
                        const r = this;
                        for(var o = arguments.length, a = new Array(o); o--;){
                            a[o] = arguments[o];
                        }
                        return n.then(()=>t.apply(r, a));
                    }
                    return t.apply(this, arguments);
                };
            }
            const ye = {};
            const Ce = 100;
            const be = 20;
            const ve = 100;
            const Se = typeof (e || (e = n("Promise"))) === "undefined" ? [] : (()=>{
                const t = (e || (e = n("Promise"))).resolve();
                if (typeof crypto === "undefined" || !crypto.subtle) {
                    return [
                        t,
                        u(t),
                        t
                    ];
                }
                const r = crypto.subtle.digest("SHA-512", new Uint8Array([
                    0
                ]));
                return [
                    r,
                    u(r),
                    t
                ];
            })();
            const Re = Se[0];
            const Le = Se[1];
            const Ee = Se[2];
            const ke = Le && Le.then;
            const Ie = Re && Re.constructor;
            const Te = !!Ee;
            let De = false;
            const xe = Ee ? function() {
                Ee.then(Ze);
            } : a.setImmediate ? setImmediate.bind(null, Ze) : a.MutationObserver ? function() {
                let e = document.createElement("div");
                new MutationObserver(function() {
                    Ze();
                    e = null;
                }).observe(e, {
                    attributes: true
                });
                e.setAttribute("i", "1");
            } : function() {
                setTimeout(Ze, 0);
            };
            let $e = function(t, n) {
                We.push([
                    t,
                    n
                ]);
                if (Ne) {
                    xe();
                    Ne = false;
                }
            };
            var Pe = true;
            var Ne = true;
            let Me = [];
            let we = [];
            let Ae = null;
            let Fe = ce;
            const Oe = {
                id: "global",
                global: true,
                ref: 0,
                unhandleds: [],
                onunhandled: It,
                pgp: false,
                env: {},
                finalize: function() {
                    this.unhandleds.forEach((e)=>{
                        try {
                            It(e[0], e[1]);
                        } catch (e) {}
                    });
                }
            };
            let Be = Oe;
            var We = [];
            let qe = 0;
            const Ue = [];
            function Ve(e, ...args) {
                if (typeof this !== "object") {
                    throw new TypeError("Promises must be constructed via new");
                }
                this._listeners = [];
                this.onuncatched = ue;
                this._lib = false;
                const t = this._PSD = Be;
                if (V) {
                    this._stackHolder = j();
                    this._prev = null;
                    this._numPrev = 0;
                }
                if (typeof e !== "function") {
                    if (e !== ye) {
                        throw new TypeError("Not a function");
                    }
                    this._state = args[0];
                    this._value = args[1];
                    if (this._state === false) {
                        je(this, this._value);
                    }
                    return;
                }
                this._state = null;
                this._value = null;
                ++t.ref;
                ze(this, e);
            }
            var He = {
                get: function() {
                    const e = Be;
                    const t = mt;
                    function n(n, r) {
                        const o = this;
                        const a = !e.global && (e !== Be || t !== mt);
                        const i = a && !gt();
                        const l = new Ve(function(t, l) {
                            Qe(o, new Ge(Lt(n, e, a, i), Lt(r, e, a, i), t, l, e));
                        });
                        if (V) {
                            Je(l, this);
                        }
                        return l;
                    }
                    n.prototype = ye;
                    return n;
                },
                set: function(t) {
                    _(this, "then", t && t.prototype === ye ? He : {
                        get: function() {
                            return t;
                        },
                        set: He.set
                    });
                }
            };
            m(Ve.prototype, {
                then: He,
                _then: function(t, n) {
                    Qe(this, new Ge(null, null, t, n, Be));
                },
                catch: function(t, n) {
                    if (arguments.length === 1) {
                        return this.then(null, t);
                    }
                    const e = arguments[0];
                    if (typeof e === "function") {
                        return this.then(null, (t)=>{
                            if (t instanceof e) {
                                return n(t);
                            }
                            return it(t);
                        });
                    }
                    return this.then(null, (t)=>{
                        if (t && t.name === e) {
                            return n(t);
                        }
                        return it(t);
                    });
                },
                finally: function(t) {
                    return this.then((e)=>{
                        t();
                        return e;
                    }, (e)=>{
                        t();
                        return it(e);
                    });
                },
                stack: {
                    get: function() {
                        if (this._stack) {
                            return this._stack;
                        }
                        try {
                            De = true;
                            const e = Ye(this, [], be);
                            const t = e.join("\nFrom previous: ");
                            if (this._state !== null) {
                                this._stack = t;
                            }
                            return t;
                        } finally{
                            De = false;
                        }
                    }
                },
                timeout: function(t, n) {
                    const e = this;
                    if (t < 1 / 0) {
                        return new Ve(function(r, o) {
                            const a = setTimeout(()=>o(new ae.Timeout(n)), t);
                            e.then(r, o).finally(clearTimeout.bind(null, a));
                        });
                    }
                    return this;
                }
            });
            if (typeof Symbol !== "undefined" && (typeof Symbol !== "function" || Symbol.toStringTag)) {
                _(Ve.prototype, typeof Symbol === "function" ? Symbol.toStringTag : "@@toStringTag", "Dexie.Promise");
            }
            Oe.env = vt();
            function Ge(e, t, n, r, o) {
                this.onFulfilled = typeof e === "function" ? e : null;
                this.onRejected = typeof t === "function" ? t : null;
                this.resolve = n;
                this.reject = r;
                this.psd = o;
            }
            m(Ve, {
                all: function() {
                    const e = q.apply(null, arguments).map(ht);
                    return new Ve(function(t, n) {
                        if (e.length === 0) {
                            t([]);
                        }
                        let r = e.length;
                        e.forEach((o, a)=>Ve.resolve(o).then((n)=>{
                                e[a] = n;
                                if (!--r) {
                                    t(e);
                                }
                            }, n));
                    });
                },
                resolve: function(t) {
                    if (t instanceof Ve) {
                        return t;
                    }
                    if (t && typeof t.then === "function") {
                        return new Ve(function(e, n) {
                            t.then(e, n);
                        });
                    }
                    const e = new Ve(ye, true, t);
                    Je(e, Ae);
                    return e;
                },
                reject: it,
                race: function() {
                    const e = q.apply(null, arguments).map(ht);
                    return new Ve(function(t, n) {
                        e.map((e)=>Ve.resolve(e).then(t, n));
                    });
                },
                PSD: {
                    get: function() {
                        return Be;
                    },
                    set: function(t) {
                        return Be = t;
                    }
                },
                totalEchoes: {
                    get: function() {
                        return mt;
                    }
                },
                newPSD: _t,
                usePSD: St,
                scheduler: {
                    get: function() {
                        return $e;
                    },
                    set: function(t) {
                        $e = t;
                    }
                },
                rejectionMapper: {
                    get: function() {
                        return Fe;
                    },
                    set: function(t) {
                        Fe = t;
                    }
                },
                follow: function(t, n) {
                    return new Ve(function(e, r) {
                        return _t(function(e, n) {
                            const r = Be;
                            r.unhandleds = [];
                            r.onunhandled = n;
                            r.finalize = me(function() {
                                const t = this;
                                rt(function() {
                                    if (t.unhandleds.length === 0) {
                                        e();
                                    } else {
                                        n(t.unhandleds[0]);
                                    }
                                });
                            }, r.finalize);
                            t();
                        }, n, e, r);
                    });
                }
            });
            if (Ie) {
                if (Ie.allSettled) {
                    _(Ve, "allSettled", function() {
                        const e = q.apply(null, arguments).map(ht);
                        return new Ve(function(t) {
                            if (e.length === 0) {
                                t([]);
                            }
                            let n = e.length;
                            const r = new Array(n);
                            e.forEach((e, o)=>Ve.resolve(e).then((e)=>r[o] = {
                                        status: "fulfilled",
                                        value: e
                                    }, (e)=>r[o] = {
                                        status: "rejected",
                                        reason: e
                                    }).then(()=>--n || t(r)));
                        });
                    });
                }
                if (Ie.any && typeof AggregateError !== "undefined") {
                    _(Ve, "any", function() {
                        const e = q.apply(null, arguments).map(ht);
                        return new Ve(function(t, n) {
                            if (e.length === 0) {
                                n(new AggregateError([]));
                            }
                            let r = e.length;
                            const o = new Array(r);
                            e.forEach((e, a)=>Ve.resolve(e).then((e)=>t(e), (e)=>{
                                    o[a] = e;
                                    if (!--r) {
                                        n(new AggregateError(o));
                                    }
                                }));
                        });
                    });
                }
            }
            function ze(e, t) {
                try {
                    t(function(t) {
                        if (e._state === null) {
                            if (t === e) {
                                throw new TypeError("A promise cannot be resolved with itself.");
                            }
                            const n = e._lib && et();
                            if (t && typeof t.then === "function") {
                                ze(e, function(e, n) {
                                    if (t instanceof Ve) {
                                        t._then(e, n);
                                    } else {
                                        t.then(e, n);
                                    }
                                });
                            } else {
                                e._state = true;
                                e._value = t;
                                Ke(e);
                            }
                            if (n) {
                                tt();
                            }
                        }
                    }, je.bind(null, e));
                } catch (t) {
                    je(e, t);
                }
            }
            function je(e, t) {
                we.push(t);
                if (e._state === null) {
                    const n = e._lib && et();
                    t = Fe(t);
                    e._state = false;
                    e._value = t;
                    if (V && t !== null && typeof t === "object" && !t._promise) {
                        L(function() {
                            const n = h(t, "stack");
                            t._promise = e;
                            _(t, "stack", {
                                get: function() {
                                    if (De) {
                                        return n && (n.get ? n.get.apply(t) : n.value);
                                    }
                                    return e.stack;
                                }
                            });
                        });
                    }
                    ot(e);
                    Ke(e);
                    if (n) {
                        tt();
                    }
                }
            }
            function Ke(e) {
                const t = e._listeners;
                e._listeners = [];
                for(let n = 0, r = t.length; n < r; ++n){
                    Qe(e, t[n]);
                }
                const o = e._PSD;
                if (!--o.ref) {
                    o.finalize();
                }
                if (qe === 0) {
                    ++qe;
                    $e(function() {
                        if (--qe === 0) {
                            nt();
                        }
                    }, []);
                }
            }
            function Qe(e, t) {
                if (e._state === null) {
                    e._listeners.push(t);
                    return;
                }
                const n = e._state ? t.onFulfilled : t.onRejected;
                if (n === null) {
                    return (e._state ? t.resolve : t.reject)(e._value);
                }
                ++t.psd.ref;
                ++qe;
                $e(Xe, [
                    n,
                    e,
                    t
                ]);
            }
            function Xe(e, t, n) {
                try {
                    Ae = t;
                    let r;
                    const o = t._value;
                    if (t._state) {
                        r = e(o);
                    } else {
                        if (we.length) {
                            we = [];
                        }
                        r = e(o);
                        if (we.indexOf(o) === -1) {
                            at(t);
                        }
                    }
                    n.resolve(r);
                } catch (e) {
                    n.reject(e);
                } finally{
                    Ae = null;
                    if (--qe === 0) {
                        nt();
                    }
                    if (!--n.psd.ref) {
                        n.psd.finalize();
                    }
                }
            }
            function Ye(e, t, n) {
                if (t.length === n) {
                    return t;
                }
                let r = "";
                if (e._state === false) {
                    const o = e._value;
                    let a;
                    let i;
                    if (o != null) {
                        a = o.name || "Error";
                        i = o.message || o;
                        r = K(o, 0);
                    } else {
                        a = o;
                        i = "";
                    }
                    t.push(a + (i ? `: ${i}` : "") + r);
                }
                if (V) {
                    r = K(e._stackHolder, 2);
                    if (r && t.indexOf(r) === -1) {
                        t.push(r);
                    }
                    if (e._prev) {
                        Ye(e._prev, t, n);
                    }
                }
                return t;
            }
            function Je(e, t) {
                const n = t ? t._numPrev + 1 : 0;
                if (n < Ce) {
                    e._prev = t;
                    e._numPrev = n;
                }
            }
            function Ze() {
                if (et()) {
                    tt();
                }
            }
            function et() {
                const e = Pe;
                Pe = false;
                Ne = false;
                return e;
            }
            function tt() {
                let e;
                let t;
                let n;
                do {
                    while(We.length > 0){
                        e = We;
                        We = [];
                        n = e.length;
                        for(t = 0; t < n; ++t){
                            const r = e[t];
                            r[0].apply(null, r[1]);
                        }
                    }
                }while (We.length > 0)
                Pe = true;
                Ne = true;
            }
            function nt() {
                const e = Me;
                Me = [];
                e.forEach((e)=>{
                    e._PSD.onunhandled.call(null, e._value, e);
                });
                const t = Ue.slice(0);
                for(let n = t.length; n;){
                    t[--n]();
                }
            }
            function rt(e) {
                function t() {
                    e();
                    Ue.splice(Ue.indexOf(t), 1);
                }
                Ue.push(t);
                ++qe;
                $e(function() {
                    if (--qe === 0) {
                        nt();
                    }
                }, []);
            }
            function ot(e) {
                if (!Me.some((t)=>t._value === e._value)) {
                    Me.push(e);
                }
            }
            function at(e) {
                for(let t = Me.length; t;){
                    if (Me[--t]._value === e._value) {
                        Me.splice(t, 1);
                        return;
                    }
                }
            }
            function it(e) {
                return new Ve(ye, false, e);
            }
            function lt(e, t) {
                const n = Be;
                return function() {
                    const r = et();
                    const o = Be;
                    try {
                        bt(n, true);
                        return e.apply(this, arguments);
                    } catch (e) {
                        if (t) {
                            t(e);
                        }
                    } finally{
                        bt(o, false);
                        if (r) {
                            tt();
                        }
                    }
                };
            }
            var st = {
                awaits: 0,
                echoes: 0,
                id: 0
            };
            var ut = 0;
            var ct = [];
            var dt = 0;
            var mt = 0;
            var pt = 0;
            function _t(e, t, n, r) {
                const o = Be;
                const a = Object.create(o);
                a.parent = o;
                a.ref = 0;
                a.global = false;
                a.id = ++pt;
                const i = Oe.env;
                a.env = Te ? {
                    Promise: Ve,
                    PromiseProp: {
                        value: Ve,
                        configurable: true,
                        writable: true
                    },
                    all: Ve.all,
                    race: Ve.race,
                    allSettled: Ve.allSettled,
                    any: Ve.any,
                    resolve: Ve.resolve,
                    reject: Ve.reject,
                    nthen: Et(i.nthen, a),
                    gthen: Et(i.gthen, a)
                } : {};
                if (t) {
                    s(a, t);
                }
                ++o.ref;
                a.finalize = function() {
                    if (!--this.parent.ref) {
                        this.parent.finalize();
                    }
                };
                const l = St(a, e, n, r);
                if (a.ref === 0) {
                    a.finalize();
                }
                return l;
            }
            function ft() {
                if (!st.id) {
                    st.id = ++ut;
                }
                ++st.awaits;
                st.echoes += ve;
                return st.id;
            }
            function gt() {
                if (st.awaits) {
                    if (--st.awaits === 0) {
                        st.id = 0;
                    }
                    st.echoes = st.awaits * ve;
                    return true;
                }
                return false;
            }
            if (`${ke}`.indexOf("[native code]") === -1) {
                gt = ue;
                ft = ue;
            }
            function ht(e) {
                if (st.echoes && e && e.constructor === Ie) {
                    ft();
                    return e.then((e)=>{
                        gt();
                        return e;
                    }, (e)=>{
                        gt();
                        return Tt(e);
                    });
                }
                return e;
            }
            function yt(e) {
                ++mt;
                if (!st.echoes || --st.echoes === 0) {
                    st.echoes = st.id = 0;
                }
                ct.push(Be);
                bt(e, true);
            }
            function Ct() {
                const e = ct[ct.length - 1];
                ct.pop();
                bt(e, false);
            }
            function bt(e, t) {
                const n = Be;
                if (t ? st.echoes && (!dt++ || e !== Be) : dt && (!--dt || e !== Be)) {
                    Rt(t ? yt.bind(null, e) : Ct);
                }
                if (e !== Be && (Be = e, n === Oe && (Oe.env = vt()), Te)) {
                    const r = Oe.env.Promise;
                    const o = e.env;
                    Le.then = o.nthen;
                    r.prototype.then = o.gthen;
                    if (n.global || e.global) {
                        Object.defineProperty(a, "Promise", o.PromiseProp);
                        r.all = o.all;
                        r.race = o.race;
                        r.resolve = o.resolve;
                        r.reject = o.reject;
                        if (o.allSettled) {
                            r.allSettled = o.allSettled;
                        }
                        if (o.any) {
                            r.any = o.any;
                        }
                    }
                }
            }
            function vt() {
                const e = a.Promise;
                if (Te) {
                    return {
                        Promise: e,
                        PromiseProp: Object.getOwnPropertyDescriptor(a, "Promise"),
                        all: e.all,
                        race: e.race,
                        allSettled: e.allSettled,
                        any: e.any,
                        resolve: e.resolve,
                        reject: e.reject,
                        nthen: Le.then,
                        gthen: e.prototype.then
                    };
                }
                return {};
            }
            function St(e, t, n, r, o) {
                const a = Be;
                try {
                    bt(e, true);
                    return t(n, r, o);
                } finally{
                    bt(a, false);
                }
            }
            function Rt(e) {
                ke.call(Re, e);
            }
            function Lt(e, t, n, r) {
                if (typeof e !== "function") {
                    return e;
                }
                return function() {
                    const o = Be;
                    if (n) {
                        ft();
                    }
                    bt(t, true);
                    try {
                        return e.apply(this, arguments);
                    } finally{
                        bt(o, false);
                        if (r) {
                            Rt(gt);
                        }
                    }
                };
            }
            function Et(e, t) {
                return function(n, r) {
                    return e.call(this, Lt(n, t), Lt(r, t));
                };
            }
            var kt = "unhandledrejection";
            function It(e, t) {
                let n;
                try {
                    n = t.onuncatched(e);
                } catch (e) {}
                if (n !== false) {
                    try {
                        let r;
                        const o = {
                            promise: t,
                            reason: e
                        };
                        if (a.document && document.createEvent) {
                            r = document.createEvent("Event");
                            r.initEvent(kt, true, true);
                            s(r, o);
                        } else if (a.CustomEvent) {
                            r = new CustomEvent(kt, {
                                detail: o
                            });
                            s(r, o);
                        }
                        if (r && a.dispatchEvent && (dispatchEvent(r), !a.PromiseRejectionEvent && a.onunhandledrejection)) {
                            try {
                                a.onunhandledrejection(r);
                            } catch (e) {}
                        }
                        V && r && !r.defaultPrevented && `${e.stack || e}`;
                    } catch (e) {}
                }
            }
            var Tt = Ve.reject;
            function Dt(e, t, n, r) {
                if (!e.idbdb || !e._state.openComplete && !Be.letThrough && !e._vip) {
                    if (e._state.openComplete) {
                        return Tt(new ae.DatabaseClosed(e._state.dbOpenError));
                    }
                    if (!e._state.isBeingOpened) {
                        if (!e._options.autoOpen) {
                            return Tt(new ae.DatabaseClosed);
                        }
                        e.open().catch(ue);
                    }
                    return e._state.dbReadyPromise.then(()=>Dt(e, t, n, r));
                } else {
                    const o = e._createTransaction(t, n, e._dbSchema);
                    try {
                        o.create();
                        e._state.PR1398_maxLoop = 3;
                    } catch (o) {
                        if (o.name === re.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0) {
                            e._close();
                            return e.open().then(()=>Dt(e, t, n, r));
                        }
                        return Tt(o);
                    }
                    return o._promise(t, function(e, t) {
                        return _t(function() {
                            Be.trans = o;
                            return r(e, t, o);
                        });
                    }).then((e)=>o._completion.then(()=>e));
                }
            }
            const xt = "3.2.2";
            const $t = "\uFFFF";
            const Pt = -1 / 0;
            const Nt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
            const Mt = "String expected.";
            const wt = [];
            const At = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
            const Ft = At;
            const Ot = At;
            const Bt = function(t) {
                return !/(dexie\.js|dexie\.min\.js)/.test(t);
            };
            const Wt = "__dbnames";
            const qt = "readonly";
            const Ut = "readwrite";
            function Vt(e, t) {
                if (e) {
                    if (t) {
                        return function() {
                            return e.apply(this, arguments) && t.apply(this, arguments);
                        };
                    }
                    return e;
                }
                return t;
            }
            const Ht = {
                type: 3,
                lower: -1 / 0,
                lowerOpen: false,
                upper: [
                    []
                ],
                upperOpen: false
            };
            function Gt(e) {
                if (typeof e === "string" && !/\./.test(e)) {
                    return function(t) {
                        if (t[e] === void 0 && e in t) {
                            t = M(t);
                            delete t[e];
                        }
                        return t;
                    };
                }
                return function(e) {
                    return e;
                };
            }
            const zt = (()=>{
                class e {
                    _trans(e, t, n) {
                        const r = this._tx || Be.trans;
                        const o = this.name;
                        function a(e, n, r) {
                            if (!r.schema[o]) {
                                throw new ae.NotFound(`Table ${o} not part of transaction`);
                            }
                            return t(r.idbtrans, r);
                        }
                        const i = et();
                        try {
                            if (r && r.db === this.db) {
                                if (r === Be.trans) {
                                    return r._promise(e, a, n);
                                }
                                return _t(function() {
                                    return r._promise(e, a, n);
                                }, {
                                    trans: r,
                                    transless: Be.transless || Be
                                });
                            }
                            return Dt(this.db, e, [
                                this.name
                            ], a);
                        } finally{
                            if (i) {
                                tt();
                            }
                        }
                    }
                    get(e, t) {
                        const n = this;
                        if (e && e.constructor === Object) {
                            return this.where(e).first(t);
                        }
                        return this._trans("readonly", function(t) {
                            return n.core.get({
                                trans: t,
                                key: e
                            }).then((e)=>n.hook.reading.fire(e));
                        }).then(t);
                    }
                    where(e) {
                        if (typeof e === "string") {
                            return new this.db.WhereClause(this, e);
                        }
                        if (l(e)) {
                            return new this.db.WhereClause(this, `[${e.join("+")}]`);
                        }
                        const t = i(e);
                        if (t.length === 1) {
                            return this.where(t[0]).equals(e[t[0]]);
                        }
                        const n = this.schema.indexes.concat(this.schema.primKey).filter((e)=>e.compound && t.every((t)=>e.keyPath.indexOf(t) >= 0) && e.keyPath.every((e)=>t.indexOf(e) >= 0))[0];
                        if (n && this.db._maxKey !== $t) {
                            return this.where(n.name).equals(n.keyPath.map((t)=>e[t]));
                        }
                        !n && V && `${JSON.stringify(e)}${this.name}${`compound index [${t.join("+")}]`}`;
                        const r = this.schema.idxByName;
                        const o = this.db._deps.indexedDB;
                        function a(e, t) {
                            try {
                                return o.cmp(e, t) === 0;
                            } catch (e) {
                                return false;
                            }
                        }
                        const s = t.reduce(([o, i], n)=>{
                            const s = r[n];
                            const u = e[n];
                            return [
                                o || s,
                                o || !s ? Vt(i, s && s.multi ? function(e) {
                                    const t = E(e, n);
                                    return l(t) && t.some((e)=>a(u, e));
                                } : function(e) {
                                    return a(u, E(e, n));
                                }) : i
                            ];
                        }, [
                            null,
                            null
                        ]);
                        const u = s[0];
                        const c = s[1];
                        if (u) {
                            return this.where(u.name).equals(e[u.keyPath]).filter(c);
                        }
                        if (n) {
                            return this.filter(c);
                        }
                        return this.where(t).equals("");
                    }
                    filter(e) {
                        return this.toCollection().and(e);
                    }
                    count(e) {
                        return this.toCollection().count(e);
                    }
                    offset(e) {
                        return this.toCollection().offset(e);
                    }
                    limit(e) {
                        return this.toCollection().limit(e);
                    }
                    each(e) {
                        return this.toCollection().each(e);
                    }
                    toArray(e) {
                        return this.toCollection().toArray(e);
                    }
                    toCollection() {
                        return new this.db.Collection(new this.db.WhereClause(this));
                    }
                    orderBy(e) {
                        return new this.db.Collection(new this.db.WhereClause(this, l(e) ? `[${e.join("+")}]` : e));
                    }
                    reverse() {
                        return this.toCollection().reverse();
                    }
                    mapToClass(e) {
                        this.schema.mappedClass = e;
                        const t = function(n) {
                            if (!n) {
                                return n;
                            }
                            const t = Object.create(e.prototype);
                            for(const r in n){
                                if (d(n, r)) {
                                    try {
                                        t[r] = n[r];
                                    } catch (e) {}
                                }
                            }
                            return t;
                        };
                        if (this.schema.readHook) {
                            this.hook.reading.unsubscribe(this.schema.readHook);
                        }
                        this.schema.readHook = t;
                        this.hook("reading", t);
                        return e;
                    }
                    defineClass() {
                        function e(e) {
                            s(this, e);
                        }
                        return this.mapToClass(e);
                    }
                    add(e, t) {
                        const n = this;
                        const r = this.schema.primKey;
                        const { auto: o, keyPath: a } = r;
                        let i = e;
                        if (a && o) {
                            i = Gt(a)(e);
                        }
                        return this._trans("readwrite", function(e) {
                            return n.core.mutate({
                                trans: e,
                                type: "add",
                                keys: t != null ? [
                                    t
                                ] : null,
                                values: [
                                    i
                                ]
                            });
                        }).then((e)=>{
                            if (e.numFailures) {
                                return Ve.reject(e.failures[0]);
                            }
                            return e.lastResult;
                        }).then((t)=>{
                            if (a) {
                                try {
                                    k(e, a, t);
                                } catch (e) {}
                            }
                            return t;
                        });
                    }
                    update(e, t) {
                        if (typeof e === "object" && !l(e)) {
                            const n = E(e, this.schema.primKey.keyPath);
                            if (n === void 0) {
                                return Tt(new ae.InvalidArgument("Given object does not contain its primary key"));
                            }
                            try {
                                if (typeof t !== "function") {
                                    i(t).forEach((n)=>{
                                        k(e, n, t[n]);
                                    });
                                } else {
                                    t(e, {
                                        value: e,
                                        primKey: n
                                    });
                                }
                            } catch (e) {}
                            return this.where(":id").equals(n).modify(t);
                        } else {
                            return this.where(":id").equals(e).modify(t);
                        }
                    }
                    put(e, t) {
                        const n = this;
                        const r = this.schema.primKey;
                        const { auto: o, keyPath: a } = r;
                        let i = e;
                        if (a && o) {
                            i = Gt(a)(e);
                        }
                        return this._trans("readwrite", function(e) {
                            return n.core.mutate({
                                trans: e,
                                type: "put",
                                values: [
                                    i
                                ],
                                keys: t != null ? [
                                    t
                                ] : null
                            });
                        }).then((e)=>{
                            if (e.numFailures) {
                                return Ve.reject(e.failures[0]);
                            }
                            return e.lastResult;
                        }).then((t)=>{
                            if (a) {
                                try {
                                    k(e, a, t);
                                } catch (e) {}
                            }
                            return t;
                        });
                    }
                    delete(e) {
                        const t = this;
                        return this._trans("readwrite", function(n) {
                            return t.core.mutate({
                                trans: n,
                                type: "delete",
                                keys: [
                                    e
                                ]
                            });
                        }).then((e)=>{
                            if (e.numFailures) {
                                return Ve.reject(e.failures[0]);
                            }
                        });
                    }
                    clear() {
                        const e = this;
                        return this._trans("readwrite", function(t) {
                            return e.core.mutate({
                                trans: t,
                                type: "deleteRange",
                                range: Ht
                            });
                        }).then((e)=>{
                            if (e.numFailures) {
                                return Ve.reject(e.failures[0]);
                            }
                        });
                    }
                    bulkGet(e) {
                        const t = this;
                        return this._trans("readonly", function(n) {
                            return t.core.getMany({
                                keys: e,
                                trans: n
                            }).then((e)=>e.map((e)=>t.hook.reading.fire(e)));
                        });
                    }
                    bulkAdd(e, t, n) {
                        const r = this;
                        const o = Array.isArray(t) ? t : void 0;
                        n = n || (o ? void 0 : t);
                        const a = n ? n.allKeys : void 0;
                        return this._trans("readwrite", function(t) {
                            const n = r.schema.primKey;
                            const { auto: i, keyPath: l } = n;
                            if (l && o) {
                                throw new ae.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                            }
                            if (o && o.length !== e.length) {
                                throw new ae.InvalidArgument("Arguments objects and keys must have the same length");
                            }
                            const s = e.length;
                            const u = l && i ? e.map(Gt(l)) : e;
                            return r.core.mutate({
                                trans: t,
                                type: "add",
                                keys: o,
                                values: u,
                                wantResults: a
                            }).then(({ numFailures: t, results: n, lastResult: o, failures: i })=>{
                                const l = a ? n : o;
                                if (t === 0) {
                                    return l;
                                }
                                throw new ne(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`, i);
                            });
                        });
                    }
                    bulkPut(e, t, n) {
                        const r = this;
                        const o = Array.isArray(t) ? t : void 0;
                        n = n || (o ? void 0 : t);
                        const a = n ? n.allKeys : void 0;
                        return this._trans("readwrite", function(t) {
                            const n = r.schema.primKey;
                            const { auto: i, keyPath: l } = n;
                            if (l && o) {
                                throw new ae.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                            }
                            if (o && o.length !== e.length) {
                                throw new ae.InvalidArgument("Arguments objects and keys must have the same length");
                            }
                            const s = e.length;
                            const u = l && i ? e.map(Gt(l)) : e;
                            return r.core.mutate({
                                trans: t,
                                type: "put",
                                keys: o,
                                values: u,
                                wantResults: a
                            }).then(({ numFailures: t, results: n, lastResult: o, failures: i })=>{
                                const l = a ? n : o;
                                if (t === 0) {
                                    return l;
                                }
                                throw new ne(`${r.name}.bulkPut(): ${t} of ${s} operations failed`, i);
                            });
                        });
                    }
                    bulkDelete(e) {
                        const t = this;
                        const n = e.length;
                        return this._trans("readwrite", function(n) {
                            return t.core.mutate({
                                trans: n,
                                type: "delete",
                                keys: e
                            });
                        }).then(({ numFailures: r, lastResult: o, failures: a })=>{
                            if (r === 0) {
                                return o;
                            }
                            throw new ne(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`, a);
                        });
                    }
                }
                return e;
            })();
            function jt(e) {
                const t = {};
                const n = function(r, o) {
                    if (o) {
                        for(var n = arguments.length, a = new Array(n - 1); --n;){
                            a[n - 1] = arguments[n];
                        }
                        t[r].subscribe.apply(null, a);
                        return e;
                    } else if (typeof r === "string") {
                        return t[r];
                    }
                };
                n.addEventType = a;
                for(let r = 1, o = arguments.length; r < o; ++r){
                    a(arguments[r]);
                }
                return n;
                function a(e, r, o) {
                    if (typeof e === "object") {
                        return s(e);
                    }
                    if (!r) {
                        r = ge;
                    }
                    if (!o) {
                        o = ue;
                    }
                    var a = {
                        subscribers: [],
                        fire: o,
                        subscribe: function(t) {
                            if (a.subscribers.indexOf(t) === -1) {
                                a.subscribers.push(t);
                                a.fire = r(a.fire, t);
                            }
                        },
                        unsubscribe: function(t) {
                            a.subscribers = a.subscribers.filter((e)=>e !== t);
                            a.fire = a.subscribers.reduce(r, o);
                        }
                    };
                    t[e] = n[e] = a;
                    return a;
                }
                function s(e) {
                    i(e).forEach((t)=>{
                        const n = e[t];
                        if (l(n)) {
                            a(t, e[t][0], e[t][1]);
                        } else if (n === "asap") var r = a(t, ce, function() {
                            for(var e = arguments.length, t = new Array(e); e--;){
                                t[e] = arguments[e];
                            }
                            r.subscribers.forEach((e)=>{
                                S(function() {
                                    e.apply(null, t);
                                });
                            });
                        });
                        else {
                            throw new ae.InvalidArgument("Invalid event config");
                        }
                    });
                }
            }
            function Kt(e, t) {
                f(t).from({
                    prototype: e
                });
                return t;
            }
            function Qt(e) {
                return Kt(zt.prototype, function(n, r, o) {
                    this.db = e;
                    this._tx = o;
                    this.name = n;
                    this.schema = r;
                    this.hook = e._allTables[n] ? e._allTables[n].hook : jt(null, {
                        creating: [
                            pe,
                            ue
                        ],
                        reading: [
                            de,
                            ce
                        ],
                        updating: [
                            fe,
                            ue
                        ],
                        deleting: [
                            _e,
                            ue
                        ]
                    });
                });
            }
            function Xt(e, t) {
                return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
            }
            function Yt(e, t) {
                e.filter = Vt(e.filter, t);
            }
            function Jt(e, t, n) {
                const r = e.replayFilter;
                e.replayFilter = r ? function() {
                    return Vt(r(), t());
                } : t;
                e.justLimit = n && !r;
            }
            function Zt(e, t) {
                e.isMatch = Vt(e.isMatch, t);
            }
            function en(e, t) {
                if (e.isPrimKey) {
                    return t.primaryKey;
                }
                const n = t.getIndexByKeyPath(e.index);
                if (!n) {
                    throw new ae.Schema(`KeyPath ${e.index} on object store ${t.name} is not indexed`);
                }
                return n;
            }
            function tn(e, t, n) {
                const r = en(e, t.schema);
                return t.openCursor({
                    trans: n,
                    values: !e.keysOnly,
                    reverse: e.dir === "prev",
                    unique: !!e.unique,
                    query: {
                        index: r,
                        range: e.range
                    }
                });
            }
            function nn(t, r, o, a) {
                const i = t.replayFilter ? Vt(t.filter, t.replayFilter()) : t.filter;
                if (t.or) {
                    const l = {};
                    const s = function(t, n, o) {
                        if (!i || i(n, o, function(e) {
                            return n.stop(e);
                        }, function(e) {
                            return n.fail(e);
                        })) {
                            const e = n.primaryKey;
                            let a = `${e}`;
                            if (a === "[object ArrayBuffer]") {
                                a = `${new Uint8Array(e)}`;
                            }
                            if (!d(l, a)) {
                                l[a] = true;
                                r(t, n, o);
                            }
                        }
                    };
                    return (e || (e = n("Promise"))).all([
                        t.or._iterate(s, o),
                        rn(tn(t, a, o), t.algorithm, s, !t.keysOnly && t.valueMapper)
                    ]);
                } else {
                    return rn(tn(t, a, o), Vt(t.algorithm, i), r, !t.keysOnly && t.valueMapper);
                }
            }
            function rn(e, t, n, r) {
                const o = r ? function(e, t, o) {
                    return n(r(e), t, o);
                } : n;
                const a = lt(o);
                return e.then((e)=>{
                    if (e) {
                        return e.start(function() {
                            let n = function() {
                                return e.continue();
                            };
                            if (!t || t(e, function(e) {
                                return n = e;
                            }, function(t) {
                                e.stop(t);
                                n = ue;
                            }, function(t) {
                                e.fail(t);
                                n = ue;
                            })) {
                                a(e.value, e, function(e) {
                                    return n = e;
                                });
                            }
                            n();
                        });
                    }
                });
            }
            function on(e, t) {
                try {
                    const n = sn(e);
                    const r = sn(t);
                    if (n !== r) {
                        if (n === "Array") {
                            return 1;
                        }
                        if (r === "Array") {
                            return -1;
                        }
                        if (n === "binary") {
                            return 1;
                        }
                        if (r === "binary") {
                            return -1;
                        }
                        if (n === "string") {
                            return 1;
                        }
                        if (r === "string") {
                            return -1;
                        }
                        if (n === "Date") {
                            return 1;
                        }
                        if (r !== "Date") {
                            return NaN;
                        }
                        return -1;
                    }
                    switch(n){
                        case "number":
                        case "Date":
                        case "string":
                            if (e > t) {
                                return 1;
                            }
                            if (e < t) {
                                return -1;
                            }
                            return 0;
                        case "binary":
                            return ln(un(e), un(t));
                        case "Array":
                            return an(e, t);
                    }
                } catch (e) {}
                return NaN;
            }
            function an(e, t) {
                const n = e.length;
                const r = t.length;
                for(let o = n < r ? n : r, a = 0; a < o; ++a){
                    const i = on(e[a], t[a]);
                    if (i !== 0) {
                        return i;
                    }
                }
                if (n === r) {
                    return 0;
                }
                if (n < r) {
                    return -1;
                }
                return 1;
            }
            function ln(e, t) {
                const n = e.length;
                const r = t.length;
                for(let o = n < r ? n : r, a = 0; a < o; ++a){
                    if (e[a] !== t[a]) {
                        if (e[a] < t[a]) {
                            return -1;
                        }
                        return 1;
                    }
                }
                if (n === r) {
                    return 0;
                }
                if (n < r) {
                    return -1;
                }
                return 1;
            }
            function sn(e) {
                const t = typeof e;
                if (t !== "object") {
                    return t;
                }
                if (ArrayBuffer.isView(e)) {
                    return "binary";
                }
                const n = F(e);
                if (n === "ArrayBuffer") {
                    return "binary";
                }
                return n;
            }
            function un(e) {
                if (e instanceof Uint8Array) {
                    return e;
                }
                if (ArrayBuffer.isView(e)) {
                    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                }
                return new Uint8Array(e);
            }
            const cn = (()=>{
                class t {
                    _read(e, t) {
                        const n = this._ctx;
                        if (n.error) {
                            return n.table._trans(null, Tt.bind(null, n.error));
                        }
                        return n.table._trans("readonly", e).then(t);
                    }
                    _write(e) {
                        const t = this._ctx;
                        if (t.error) {
                            return t.table._trans(null, Tt.bind(null, t.error));
                        }
                        return t.table._trans("readwrite", e, "locked");
                    }
                    _addAlgorithm(e) {
                        const t = this._ctx;
                        t.algorithm = Vt(t.algorithm, e);
                    }
                    _iterate(e, t) {
                        return nn(this._ctx, e, t, this._ctx.table.core);
                    }
                    clone(e) {
                        const t = Object.create(this.constructor.prototype);
                        const n = Object.create(this._ctx);
                        if (e) {
                            s(n, e);
                        }
                        t._ctx = n;
                        return t;
                    }
                    raw() {
                        this._ctx.valueMapper = null;
                        return this;
                    }
                    each(e) {
                        const t = this._ctx;
                        return this._read(function(n) {
                            return nn(t, e, n, t.table.core);
                        });
                    }
                    count(e) {
                        const t = this;
                        return this._read(function(e) {
                            const n = t._ctx;
                            const r = n.table.core;
                            if (Xt(n, true)) {
                                return r.count({
                                    trans: e,
                                    query: {
                                        index: en(n, r.schema),
                                        range: n.range
                                    }
                                }).then((e)=>Math.min(e, n.limit));
                            }
                            let o = 0;
                            return nn(n, function() {
                                ++o;
                                return false;
                            }, e, r).then(()=>o);
                        }).then(e);
                    }
                    sortBy(e, t) {
                        const n = e.split(".").reverse();
                        const r = n[0];
                        const o = n.length - 1;
                        function a(e, t) {
                            if (t) {
                                return a(e[n[t]], t - 1);
                            }
                            return e[r];
                        }
                        const i = this._ctx.dir === "next" ? 1 : -1;
                        function l(e, t) {
                            const n = a(e, o);
                            const r = a(t, o);
                            if (n < r) {
                                return -i;
                            }
                            if (n > r) {
                                return i;
                            }
                            return 0;
                        }
                        return this.toArray(function(e) {
                            return e.sort(l);
                        }).then(t);
                    }
                    toArray(e) {
                        const t = this;
                        return this._read(function(e) {
                            const n = t._ctx;
                            if (n.dir === "next" && Xt(n, true) && n.limit > 0) {
                                const r = n.valueMapper;
                                const o = en(n, n.table.core.schema);
                                return n.table.core.query({
                                    trans: e,
                                    limit: n.limit,
                                    values: true,
                                    query: {
                                        index: o,
                                        range: n.range
                                    }
                                }).then(({ result: t })=>{
                                    if (r) {
                                        return t.map(r);
                                    }
                                    return t;
                                });
                            } else {
                                const a = [];
                                return nn(n, function(e) {
                                    return a.push(e);
                                }, e, n.table.core).then(()=>a);
                            }
                        }, e);
                    }
                    offset(e) {
                        const t = this._ctx;
                        if (e <= 0) {
                            return this;
                        }
                        t.offset += e;
                        if (Xt(t)) {
                            Jt(t, function() {
                                let t = e;
                                return function(e, n) {
                                    switch(t){
                                        case 0:
                                            return true;
                                        case 1:
                                            --t;
                                            return false;
                                        default:
                                            n(function() {
                                                e.advance(t);
                                                t = 0;
                                            });
                                            return false;
                                    }
                                };
                            });
                        } else {
                            Jt(t, function() {
                                let t = e;
                                return function() {
                                    return --t < 0;
                                };
                            });
                        }
                        return this;
                    }
                    limit(e) {
                        this._ctx.limit = Math.min(this._ctx.limit, e);
                        Jt(this._ctx, function() {
                            let t = e;
                            return function(e, n, r) {
                                if (--t <= 0) {
                                    n(r);
                                }
                                return t >= 0;
                            };
                        }, true);
                        return this;
                    }
                    until(e, t) {
                        Yt(this._ctx, function(n, r, o) {
                            if (e(n.value)) {
                                r(o);
                                return t;
                            }
                            return true;
                        });
                        return this;
                    }
                    first(e) {
                        return this.limit(1).toArray(function(e) {
                            return e[0];
                        }).then(e);
                    }
                    last(e) {
                        return this.reverse().first(e);
                    }
                    filter(e) {
                        Yt(this._ctx, function(t) {
                            return e(t.value);
                        });
                        Zt(this._ctx, e);
                        return this;
                    }
                    and(e) {
                        return this.filter(e);
                    }
                    or(e) {
                        return new this.db.WhereClause(this._ctx.table, e, this);
                    }
                    reverse() {
                        this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
                        if (this._ondirectionchange) {
                            this._ondirectionchange(this._ctx.dir);
                        }
                        return this;
                    }
                    desc() {
                        return this.reverse();
                    }
                    eachKey(e) {
                        const t = this._ctx;
                        t.keysOnly = !t.isMatch;
                        return this.each(function(t, n) {
                            e(n.key, n);
                        });
                    }
                    eachUniqueKey(e) {
                        this._ctx.unique = "unique";
                        return this.eachKey(e);
                    }
                    eachPrimaryKey(e) {
                        const t = this._ctx;
                        t.keysOnly = !t.isMatch;
                        return this.each(function(t, n) {
                            e(n.primaryKey, n);
                        });
                    }
                    keys(e) {
                        const t = this._ctx;
                        t.keysOnly = !t.isMatch;
                        const n = [];
                        return this.each(function(e, t) {
                            n.push(t.key);
                        }).then(()=>n).then(e);
                    }
                    primaryKeys(e) {
                        const t = this._ctx;
                        if (t.dir === "next" && Xt(t, true) && t.limit > 0) {
                            return this._read(function(e) {
                                const n = en(t, t.table.core.schema);
                                return t.table.core.query({
                                    trans: e,
                                    values: false,
                                    limit: t.limit,
                                    query: {
                                        index: n,
                                        range: t.range
                                    }
                                });
                            }).then(({ result: t })=>t).then(e);
                        }
                        t.keysOnly = !t.isMatch;
                        const n = [];
                        return this.each(function(e, t) {
                            n.push(t.primaryKey);
                        }).then(()=>n).then(e);
                    }
                    uniqueKeys(e) {
                        this._ctx.unique = "unique";
                        return this.keys(e);
                    }
                    firstKey(e) {
                        return this.limit(1).keys(function(e) {
                            return e[0];
                        }).then(e);
                    }
                    lastKey(e) {
                        return this.reverse().firstKey(e);
                    }
                    distinct() {
                        const e = this._ctx;
                        const t = e.index && e.table.schema.idxByName[e.index];
                        if (!t || !t.multi) {
                            return this;
                        }
                        const n = {};
                        Yt(this._ctx, function(e) {
                            const t = e.primaryKey.toString();
                            const r = d(n, t);
                            n[t] = true;
                            return !r;
                        });
                        return this;
                    }
                    modify(t) {
                        const r = this;
                        const o = this._ctx;
                        return this._write(function(a) {
                            let l;
                            if (typeof t === "function") {
                                l = t;
                            } else {
                                const s = i(t);
                                const u = s.length;
                                l = function(n) {
                                    let e = false;
                                    for(let r = 0; r < u; ++r){
                                        const o = s[r];
                                        const a = t[o];
                                        if (E(n, o) !== a) {
                                            k(n, o, a);
                                            e = true;
                                        }
                                    }
                                    return e;
                                };
                            }
                            const c = o.table.core;
                            const d = c.schema.primaryKey;
                            const { outbound: m, extractKey: p } = d;
                            const _ = r.db._options.modifyChunkSize || 200;
                            const f = [];
                            let g = 0;
                            const h = [];
                            const y = function(t, { failures: e, numFailures: r }) {
                                g += t - r;
                                for (const l of i(e)){
                                    f.push(e[l]);
                                }
                            };
                            return r.clone().primaryKeys().then((r)=>{
                                const i = function(u) {
                                    const s = Math.min(_, r.length - u);
                                    return c.getMany({
                                        trans: a,
                                        keys: r.slice(u, u + s),
                                        cache: "immutable"
                                    }).then((d)=>{
                                        const f = [];
                                        const g = [];
                                        const h = m ? [] : null;
                                        const C = [];
                                        for(let b = 0; b < s; ++b){
                                            const v = d[b];
                                            const S = {
                                                value: M(v),
                                                primKey: r[u + b]
                                            };
                                            if (l.call(S, S.value, S) !== false) {
                                                if (S.value == null) {
                                                    C.push(r[u + b]);
                                                } else if (!m && on(p(v), p(S.value)) !== 0) {
                                                    C.push(r[u + b]);
                                                    f.push(S.value);
                                                } else {
                                                    g.push(S.value);
                                                    if (m) {
                                                        h.push(r[u + b]);
                                                    }
                                                }
                                            }
                                        }
                                        const R = Xt(o) && o.limit === 1 / 0 && (typeof t !== "function" || t === dn) && {
                                            index: o.index,
                                            range: o.range
                                        };
                                        return (e || (e = n("Promise"))).resolve(f.length > 0 && c.mutate({
                                            trans: a,
                                            type: "add",
                                            values: f
                                        }).then((e)=>{
                                            for(const t in e.failures){
                                                C.splice(parseInt(t), 1);
                                            }
                                            y(f.length, e);
                                        })).then(()=>(g.length > 0 || R && typeof t === "object") && c.mutate({
                                                trans: a,
                                                type: "put",
                                                keys: h,
                                                values: g,
                                                criteria: R,
                                                changeSpec: typeof t !== "function" && t
                                            }).then((e)=>y(g.length, e))).then(()=>(C.length > 0 || R && t === dn) && c.mutate({
                                                trans: a,
                                                type: "delete",
                                                keys: C,
                                                criteria: R
                                            }).then((e)=>y(C.length, e))).then(()=>r.length > u + s && i(u + _));
                                    });
                                };
                                return i(0).then(()=>{
                                    if (f.length > 0) {
                                        throw new te("Error modifying one or more objects", f, g, h);
                                    }
                                    return r.length;
                                });
                            });
                        });
                    }
                    delete() {
                        const e = this._ctx;
                        const t = e.range;
                        if (Xt(e) && (e.isPrimKey && !Ot || t.type === 3)) {
                            return this._write(function(n) {
                                const r = e.table.core.schema.primaryKey;
                                const o = t;
                                return e.table.core.count({
                                    trans: n,
                                    query: {
                                        index: r,
                                        range: o
                                    }
                                }).then((t)=>e.table.core.mutate({
                                        trans: n,
                                        type: "deleteRange",
                                        range: o
                                    }).then((e)=>{
                                        const n = e.failures;
                                        e.lastResult;
                                        e.results;
                                        const r = e.numFailures;
                                        if (r) {
                                            throw new te("Could not delete some values", Object.keys(n).map((e)=>n[e]), t - r);
                                        }
                                        return t - r;
                                    }));
                            });
                        }
                        return this.modify(dn);
                    }
                }
                return t;
            })();
            var dn = function(t, n) {
                return n.value = null;
            };
            function mn(e) {
                return Kt(cn.prototype, function(n, r) {
                    this.db = e;
                    let t = Ht;
                    let o = null;
                    if (r) {
                        try {
                            t = r();
                        } catch (e) {
                            o = e;
                        }
                    }
                    const a = n._ctx;
                    const i = a.table;
                    const l = i.hook.reading.fire;
                    this._ctx = {
                        table: i,
                        index: a.index,
                        isPrimKey: !a.index || i.schema.primKey.keyPath && a.index === i.schema.primKey.name,
                        range: t,
                        keysOnly: false,
                        dir: "next",
                        unique: "",
                        algorithm: null,
                        filter: null,
                        replayFilter: null,
                        justLimit: true,
                        isMatch: null,
                        offset: 0,
                        limit: 1 / 0,
                        error: o,
                        or: a.or,
                        valueMapper: l !== ce ? l : null
                    };
                });
            }
            function pn(e, t) {
                if (e < t) {
                    return -1;
                }
                if (e === t) {
                    return 0;
                }
                return 1;
            }
            function _n(e, t) {
                if (e > t) {
                    return -1;
                }
                if (e === t) {
                    return 0;
                }
                return 1;
            }
            function fn(e, t, n) {
                const r = e instanceof Rn ? new e.Collection(e) : e;
                r._ctx.error = n ? new n(t) : new TypeError(t);
                return r;
            }
            function gn(e) {
                return new e.Collection(e, function() {
                    return Sn("");
                }).limit(0);
            }
            function hn(e) {
                if (e === "next") {
                    return function(e) {
                        return e.toUpperCase();
                    };
                }
                return function(e) {
                    return e.toLowerCase();
                };
            }
            function yn(e) {
                if (e === "next") {
                    return function(e) {
                        return e.toLowerCase();
                    };
                }
                return function(e) {
                    return e.toUpperCase();
                };
            }
            function Cn(e, t, n, r, o, a) {
                for(var i = Math.min(e.length, r.length), l = -1, s = 0; s < i; ++s){
                    const u = t[s];
                    if (u !== r[s]) {
                        if (o(e[s], n[s]) < 0) {
                            return e.substr(0, s) + n[s] + n.substr(s + 1);
                        }
                        if (o(e[s], r[s]) < 0) {
                            return e.substr(0, s) + r[s] + n.substr(s + 1);
                        }
                        if (l >= 0) {
                            return e.substr(0, l) + t[l] + n.substr(l + 1);
                        }
                        return null;
                    }
                    if (o(e[s], u) < 0) {
                        l = s;
                    }
                }
                if (i < r.length && a === "next") {
                    return e + n.substr(e.length);
                }
                if (i < e.length && a === "prev") {
                    return e.substr(0, n.length);
                }
                if (l < 0) {
                    return null;
                }
                return e.substr(0, l) + r[l] + n.substr(l + 1);
            }
            function bn(e, t, n, r) {
                let o;
                let a;
                let i;
                let l;
                let s;
                let u;
                let c;
                const d = n.length;
                if (!n.every((e)=>typeof e === "string")) {
                    return fn(e, Mt);
                }
                function m(e) {
                    o = hn(e);
                    a = yn(e);
                    i = e === "next" ? pn : _n;
                    const t = n.map((e)=>({
                            lower: a(e),
                            upper: o(e)
                        })).sort((e, t)=>i(e.lower, t.lower));
                    l = t.map((e)=>e.upper);
                    s = t.map((e)=>e.lower);
                    u = e;
                    c = e === "next" ? "" : r;
                }
                m("next");
                const p = new e.Collection(e, function() {
                    return vn(l[0], s[d - 1] + r);
                });
                p._ondirectionchange = function(e) {
                    m(e);
                };
                let _ = 0;
                p._addAlgorithm(function(e, n, r) {
                    const o = e.key;
                    if (typeof o !== "string") {
                        return false;
                    }
                    const m = a(o);
                    if (t(m, s, _)) {
                        return true;
                    }
                    let p = null;
                    for(let f = _; f < d; ++f){
                        const g = Cn(o, m, l[f], s[f], i, u);
                        if (g === null && p === null) {
                            _ = f + 1;
                        } else if (p === null || i(p, g) > 0) {
                            p = g;
                        }
                    }
                    n(p !== null ? function() {
                        e.continue(p + c);
                    } : r);
                    return false;
                });
                return p;
            }
            function vn(e, t, n, r) {
                return {
                    type: 2,
                    lower: e,
                    upper: t,
                    lowerOpen: n,
                    upperOpen: r
                };
            }
            function Sn(e) {
                return {
                    type: 1,
                    lower: e,
                    upper: e
                };
            }
            var Rn = (()=>{
                class e {
                    get Collection() {
                        return this._ctx.table.db.Collection;
                    }
                    between(e, t, n, r) {
                        n = n !== false;
                        r = r === true;
                        try {
                            if (this._cmp(e, t) > 0 || this._cmp(e, t) === 0 && (n || r) && !(n && r)) {
                                return gn(this);
                            }
                            return new this.Collection(this, function() {
                                return vn(e, t, !n, !r);
                            });
                        } catch (e) {
                            return fn(this, Nt);
                        }
                    }
                    equals(e) {
                        if (e == null) {
                            return fn(this, Nt);
                        }
                        return new this.Collection(this, function() {
                            return Sn(e);
                        });
                    }
                    above(e) {
                        if (e == null) {
                            return fn(this, Nt);
                        }
                        return new this.Collection(this, function() {
                            return vn(e, void 0, true);
                        });
                    }
                    aboveOrEqual(e) {
                        if (e == null) {
                            return fn(this, Nt);
                        }
                        return new this.Collection(this, function() {
                            return vn(e, void 0, false);
                        });
                    }
                    below(e) {
                        if (e == null) {
                            return fn(this, Nt);
                        }
                        return new this.Collection(this, function() {
                            return vn(void 0, e, false, true);
                        });
                    }
                    belowOrEqual(e) {
                        if (e == null) {
                            return fn(this, Nt);
                        }
                        return new this.Collection(this, function() {
                            return vn(void 0, e);
                        });
                    }
                    startsWith(e) {
                        if (typeof e !== "string") {
                            return fn(this, Mt);
                        }
                        return this.between(e, e + $t, true, true);
                    }
                    startsWithIgnoreCase(e) {
                        if (e === "") {
                            return this.startsWith(e);
                        }
                        return bn(this, function(e, t) {
                            return e.indexOf(t[0]) === 0;
                        }, [
                            e
                        ], $t);
                    }
                    equalsIgnoreCase(e) {
                        return bn(this, function(e, t) {
                            return e === t[0];
                        }, [
                            e
                        ], "");
                    }
                    anyOfIgnoreCase() {
                        const e = q.apply(W, arguments);
                        if (e.length === 0) {
                            return gn(this);
                        }
                        return bn(this, function(e, t) {
                            return t.indexOf(e) !== -1;
                        }, e, "");
                    }
                    startsWithAnyOfIgnoreCase() {
                        const e = q.apply(W, arguments);
                        if (e.length === 0) {
                            return gn(this);
                        }
                        return bn(this, function(e, t) {
                            return t.some((t)=>e.indexOf(t) === 0);
                        }, e, $t);
                    }
                    anyOf() {
                        const e = this;
                        const t = q.apply(W, arguments);
                        let n = this._cmp;
                        try {
                            t.sort(n);
                        } catch (e) {
                            return fn(this, Nt);
                        }
                        if (t.length === 0) {
                            return gn(this);
                        }
                        const r = new this.Collection(this, function() {
                            return vn(t[0], t[t.length - 1]);
                        });
                        r._ondirectionchange = function(r) {
                            n = r === "next" ? e._ascending : e._descending;
                            t.sort(n);
                        };
                        let o = 0;
                        r._addAlgorithm(function(e, r, a) {
                            for(var i = e.key; n(i, t[o]) > 0;){
                                ++o;
                                if (o === t.length) {
                                    r(a);
                                    return false;
                                }
                            }
                            if (n(i, t[o]) === 0) {
                                return true;
                            }
                            r(function() {
                                e.continue(t[o]);
                            });
                            return false;
                        });
                        return r;
                    }
                    notEqual(e) {
                        return this.inAnyRange([
                            [
                                Pt,
                                e
                            ],
                            [
                                e,
                                this.db._maxKey
                            ]
                        ], {
                            includeLowers: false,
                            includeUppers: false
                        });
                    }
                    noneOf() {
                        const e = q.apply(W, arguments);
                        if (e.length === 0) {
                            return new this.Collection(this);
                        }
                        try {
                            e.sort(this._ascending);
                        } catch (e) {
                            return fn(this, Nt);
                        }
                        const t = e.reduce((e, t)=>{
                            if (e) {
                                return e.concat([
                                    [
                                        e[e.length - 1][1],
                                        t
                                    ]
                                ]);
                            }
                            return [
                                [
                                    Pt,
                                    t
                                ]
                            ];
                        }, null);
                        t.push([
                            e[e.length - 1],
                            this.db._maxKey
                        ]);
                        return this.inAnyRange(t, {
                            includeLowers: false,
                            includeUppers: false
                        });
                    }
                    inAnyRange(e, t) {
                        const n = this;
                        const r = this._cmp;
                        const o = this._ascending;
                        const a = this._descending;
                        const i = this._min;
                        const l = this._max;
                        if (e.length === 0) {
                            return gn(this);
                        }
                        if (!e.every((e)=>e[0] !== void 0 && e[1] !== void 0 && o(e[0], e[1]) <= 0)) {
                            return fn(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ae.InvalidArgument);
                        }
                        const s = !t || t.includeLowers !== false;
                        const u = t && t.includeUppers === true;
                        function c(e, t) {
                            for(var n = 0, o = e.length; n < o; ++n){
                                const a = e[n];
                                if (r(t[0], a[1]) < 0 && r(t[1], a[0]) > 0) {
                                    a[0] = i(a[0], t[0]);
                                    a[1] = l(a[1], t[1]);
                                    break;
                                }
                            }
                            if (n === o) {
                                e.push(t);
                            }
                            return e;
                        }
                        let d = o;
                        function m(e, t) {
                            return d(e[0], t[0]);
                        }
                        let p;
                        try {
                            p = e.reduce(c, []);
                            p.sort(m);
                        } catch (e) {
                            return fn(this, Nt);
                        }
                        let _ = 0;
                        const f = u ? function(e) {
                            return o(e, p[_][1]) > 0;
                        } : function(e) {
                            return o(e, p[_][1]) >= 0;
                        };
                        const g = s ? function(e) {
                            return a(e, p[_][0]) > 0;
                        } : function(e) {
                            return a(e, p[_][0]) >= 0;
                        };
                        function h(e) {
                            return !f(e) && !g(e);
                        }
                        let y = f;
                        const C = new this.Collection(this, function() {
                            return vn(p[0][0], p[p.length - 1][1], !s, !u);
                        });
                        C._ondirectionchange = function(e) {
                            if (e === "next") {
                                y = f;
                                d = o;
                            } else {
                                y = g;
                                d = a;
                            }
                            p.sort(m);
                        };
                        C._addAlgorithm(function(e, t, r) {
                            for(var a = e.key; y(a);){
                                ++_;
                                if (_ === p.length) {
                                    t(r);
                                    return false;
                                }
                            }
                            if (h(a)) {
                                return true;
                            }
                            if (!(n._cmp(a, p[_][1]) === 0 || n._cmp(a, p[_][0]) === 0)) {
                                t(function() {
                                    if (d === o) {
                                        e.continue(p[_][0]);
                                    } else {
                                        e.continue(p[_][1]);
                                    }
                                });
                            }
                            return false;
                        });
                        return C;
                    }
                    startsWithAnyOf() {
                        const e = q.apply(W, arguments);
                        if (e.every((e)=>typeof e === "string")) {
                            if (e.length === 0) {
                                return gn(this);
                            }
                            return this.inAnyRange(e.map((e)=>[
                                    e,
                                    e + $t
                                ]));
                        }
                        return fn(this, "startsWithAnyOf() only works with strings");
                    }
                }
                return e;
            })();
            function Ln(e) {
                return Kt(Rn.prototype, function(n, r, o) {
                    this.db = e;
                    this._ctx = {
                        table: n,
                        index: r === ":id" ? null : r,
                        or: o
                    };
                    const t = e._deps.indexedDB;
                    if (!t) {
                        throw new ae.MissingAPI;
                    }
                    this._cmp = this._ascending = t.cmp.bind(t);
                    this._descending = function(e, n) {
                        return t.cmp(n, e);
                    };
                    this._max = function(e, n) {
                        if (t.cmp(e, n) > 0) {
                            return e;
                        }
                        return n;
                    };
                    this._min = function(e, n) {
                        if (t.cmp(e, n) < 0) {
                            return e;
                        }
                        return n;
                    };
                    this._IDBKeyRange = e._deps.IDBKeyRange;
                });
            }
            function En(e) {
                return lt(function(t) {
                    kn(t);
                    e(t.target.error);
                    return false;
                });
            }
            function kn(e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                if (e.preventDefault) {
                    e.preventDefault();
                }
            }
            const In = "storagemutated";
            const Tn = "x-storagemutated-1";
            const Dn = jt(null, In);
            const xn = (()=>{
                class e {
                    _lock() {
                        v(!Be.global);
                        ++this._reculock;
                        if (this._reculock === 1 && !Be.global) {
                            Be.lockOwnerFor = this;
                        }
                        return this;
                    }
                    _unlock() {
                        v(!Be.global);
                        if (--this._reculock === 0) {
                            for(Be.global || (Be.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();){
                                const e = this._blockedFuncs.shift();
                                try {
                                    St(e[1], e[0]);
                                } catch (e) {}
                            }
                        }
                        return this;
                    }
                    _locked() {
                        return this._reculock && Be.lockOwnerFor !== this;
                    }
                    create(e) {
                        const t = this;
                        if (!this.mode) {
                            return this;
                        }
                        const n = this.db.idbdb;
                        const r = this.db._state.dbOpenError;
                        v(!this.idbtrans);
                        if (!e && !n) {
                            switch(r && r.name){
                                case "DatabaseClosedError":
                                    throw new ae.DatabaseClosed(r);
                                case "MissingAPIError":
                                    throw new ae.MissingAPI(r.message, r);
                                default:
                                    throw new ae.OpenFailed(r);
                            }
                        }
                        if (!this.active) {
                            throw new ae.TransactionInactive;
                        }
                        v(this._completion._state === null);
                        e = this.idbtrans = e || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
                            durability: this.chromeTransactionDurability
                        }) : n.transaction(this.storeNames, this.mode, {
                            durability: this.chromeTransactionDurability
                        }));
                        e.onerror = lt(function(n) {
                            kn(n);
                            t._reject(e.error);
                        });
                        e.onabort = lt(function(n) {
                            kn(n);
                            if (t.active) {
                                t._reject(new ae.Abort(e.error));
                            }
                            t.active = false;
                            t.on("abort").fire(n);
                        });
                        e.oncomplete = lt(function() {
                            t.active = false;
                            t._resolve();
                            if ("mutatedParts" in e) {
                                Dn.storagemutated.fire(e.mutatedParts);
                            }
                        });
                        return this;
                    }
                    _promise(e, t, n) {
                        const r = this;
                        if (e === "readwrite" && this.mode !== "readwrite") {
                            return Tt(new ae.ReadOnly("Transaction is readonly"));
                        }
                        if (!this.active) {
                            return Tt(new ae.TransactionInactive);
                        }
                        if (this._locked()) {
                            return new Ve(function(o, a) {
                                r._blockedFuncs.push([
                                    function() {
                                        r._promise(e, t, n).then(o, a);
                                    },
                                    Be
                                ]);
                            });
                        }
                        if (n) {
                            return _t(function() {
                                const e = new Ve(function(e, n) {
                                    r._lock();
                                    const o = t(e, n, r);
                                    if (o && o.then) {
                                        o.then(e, n);
                                    }
                                });
                                e.finally(()=>r._unlock());
                                e._lib = true;
                                return e;
                            });
                        }
                        const o = new Ve(function(e, n) {
                            const o = t(e, n, r);
                            if (o && o.then) {
                                o.then(e, n);
                            }
                        });
                        o._lib = true;
                        return o;
                    }
                    _root() {
                        if (this.parent) {
                            return this.parent._root();
                        }
                        return this;
                    }
                    waitFor(e) {
                        const t = this._root();
                        const n = Ve.resolve(e);
                        if (t._waitingFor) {
                            t._waitingFor = t._waitingFor.then(()=>n);
                        } else {
                            t._waitingFor = n;
                            t._waitingQueue = [];
                            const r = t.idbtrans.objectStore(t.storeNames[0]);
                            (function e() {
                                for(++t._spinCount; t._waitingQueue.length;){
                                    t._waitingQueue.shift()();
                                }
                                if (t._waitingFor) {
                                    r.get(-1 / 0).onsuccess = e;
                                }
                            })();
                        }
                        const o = t._waitingFor;
                        return new Ve(function(e, r) {
                            n.then((n)=>t._waitingQueue.push(lt(e.bind(null, n))), (e)=>t._waitingQueue.push(lt(r.bind(null, e)))).finally(()=>{
                                if (t._waitingFor === o) {
                                    t._waitingFor = null;
                                }
                            });
                        });
                    }
                    abort() {
                        if (this.active) {
                            this.active = false;
                            if (this.idbtrans) {
                                this.idbtrans.abort();
                            }
                            this._reject(new ae.Abort);
                        }
                    }
                    table(e) {
                        const t = this._memoizedTables || (this._memoizedTables = {});
                        if (d(t, e)) {
                            return t[e];
                        }
                        const n = this.schema[e];
                        if (!n) {
                            throw new ae.NotFound(`Table ${e} not part of transaction`);
                        }
                        const r = new this.db.Table(e, n, this);
                        r.core = this.db.core.table(e);
                        t[e] = r;
                        return r;
                    }
                }
                return e;
            })();
            function $n(e) {
                return Kt(xn.prototype, function(n, r, o, a, i) {
                    const t = this;
                    this.db = e;
                    this.mode = n;
                    this.storeNames = r;
                    this.schema = o;
                    this.chromeTransactionDurability = a;
                    this.idbtrans = null;
                    this.on = jt(this, "complete", "error", "abort");
                    this.parent = i || null;
                    this.active = true;
                    this._reculock = 0;
                    this._blockedFuncs = [];
                    this._resolve = null;
                    this._reject = null;
                    this._waitingFor = null;
                    this._waitingQueue = null;
                    this._spinCount = 0;
                    this._completion = new Ve(function(e, n) {
                        t._resolve = e;
                        t._reject = n;
                    });
                    this._completion.then(()=>{
                        t.active = false;
                        t.on.complete.fire();
                    }, (e)=>{
                        const n = t.active;
                        t.active = false;
                        t.on.error.fire(e);
                        if (t.parent) {
                            t.parent._reject(e);
                        } else if (n && t.idbtrans) {
                            t.idbtrans.abort();
                        }
                        return Tt(e);
                    });
                });
            }
            function Pn(e, t, n, r, o, a, i) {
                return {
                    name: e,
                    keyPath: t,
                    unique: n,
                    multi: r,
                    auto: o,
                    compound: a,
                    src: (n && !i ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + Nn(t)
                };
            }
            function Nn(e) {
                if (typeof e === "string") {
                    return e;
                }
                if (e) {
                    return `[${[].join.call(e, "+")}]`;
                }
                return "";
            }
            function Mn(e, t, n) {
                return {
                    name: e,
                    primKey: t,
                    indexes: n,
                    mappedClass: null,
                    idxByName: R(n, function(e) {
                        return [
                            e.name,
                            e
                        ];
                    })
                };
            }
            function wn(e) {
                if (e.length === 1) {
                    return e[0];
                }
                return e;
            }
            let An = function(t) {
                try {
                    t.only([
                        []
                    ]);
                    An = function() {
                        return [
                            []
                        ];
                    };
                    return [
                        []
                    ];
                } catch (e) {
                    An = function() {
                        return $t;
                    };
                    return $t;
                }
            };
            function Fn(e) {
                if (e == null) {
                    return function() {};
                }
                if (typeof e === "string") {
                    return On(e);
                }
                return function(t) {
                    return E(t, e);
                };
            }
            function On(e) {
                const t = e.split(".");
                if (t.length === 1) {
                    return function(t) {
                        return t[e];
                    };
                }
                return function(t) {
                    return E(t, e);
                };
            }
            function Bn(e) {
                return [].slice.call(e);
            }
            let Wn = 0;
            function qn(e) {
                if (e == null) {
                    return ":id";
                }
                if (typeof e === "string") {
                    return e;
                }
                return `[${e.join("+")}]`;
            }
            function Un(t, r, o) {
                function a(e, t) {
                    const n = Bn(e.objectStoreNames);
                    return {
                        schema: {
                            name: e.name,
                            tables: n.map((e)=>t.objectStore(e)).map((e)=>{
                                const { keyPath: t, autoIncrement: n } = e;
                                const r = l(t);
                                const o = t == null;
                                const a = {};
                                const i = {
                                    name: e.name,
                                    primaryKey: {
                                        name: null,
                                        isPrimaryKey: true,
                                        outbound: o,
                                        compound: r,
                                        keyPath: t,
                                        autoIncrement: n,
                                        unique: true,
                                        extractKey: Fn(t)
                                    },
                                    indexes: Bn(e.indexNames).map((t)=>e.index(t)).map(({ name: t, unique: n, multiEntry: r, keyPath: o })=>{
                                        const i = l(o);
                                        const s = {
                                            name: t,
                                            compound: i,
                                            keyPath: o,
                                            unique: n,
                                            multiEntry: r,
                                            extractKey: Fn(o)
                                        };
                                        a[qn(o)] = s;
                                        return s;
                                    }),
                                    getIndexByKeyPath: function(t) {
                                        return a[qn(t)];
                                    }
                                };
                                a[":id"] = i.primaryKey;
                                if (t != null) {
                                    a[qn(t)] = i.primaryKey;
                                }
                                return i;
                            })
                        },
                        hasGetAll: n.length > 0 && "getAll" in t.objectStore(n[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
                    };
                }
                function i(e) {
                    if (e.type === 3) {
                        return null;
                    }
                    if (e.type === 4) {
                        throw new Error("Cannot convert never type to IDBKeyRange");
                    }
                    const { lower: t, upper: n, lowerOpen: o, upperOpen: a } = e;
                    const i = t === void 0 ? n === void 0 ? null : r.upperBound(n, !!a) : n === void 0 ? r.lowerBound(t, !!o) : r.bound(t, n, !!o, !!a);
                    return i;
                }
                function s(t) {
                    const r = t.name;
                    function o({ trans: o, type, keys: l, values: s, range: u }) {
                        return new (e || (e = n("Promise")))(function(e, t) {
                            e = lt(e);
                            const n = o.objectStore(r);
                            const c = n.keyPath == null;
                            const d = type === "put" || type === "add";
                            if (!d && type !== "delete" && type !== "deleteRange") {
                                throw new Error(`Invalid operation type: ${type}`);
                            }
                            const m = (l || s || {
                                length: 1
                            }).length;
                            if (l && s && l.length !== s.length) {
                                throw new Error("Given keys array must have same length as given values array.");
                            }
                            if (m === 0) {
                                return e({
                                    numFailures: 0,
                                    failures: {},
                                    results: [],
                                    lastResult: void 0
                                });
                            }
                            let p;
                            const _ = [];
                            const f = [];
                            let g = 0;
                            const h = function(t) {
                                ++g;
                                kn(t);
                            };
                            if (type === "deleteRange") {
                                if (u.type === 4) {
                                    return e({
                                        numFailures: g,
                                        failures: f,
                                        results: [],
                                        lastResult: void 0
                                    });
                                }
                                if (u.type === 3) {
                                    _.push(p = n.clear());
                                } else {
                                    _.push(p = n.delete(i(u)));
                                }
                            } else {
                                const y = d ? c ? [
                                    s,
                                    l
                                ] : [
                                    s,
                                    null
                                ] : [
                                    l,
                                    null
                                ];
                                const C = y[0];
                                const b = y[1];
                                if (d) {
                                    for(var v = 0; v < m; ++v){
                                        _.push(p = b && b[v] !== void 0 ? n[type](C[v], b[v]) : n[type](C[v]));
                                        p.onerror = h;
                                    }
                                } else {
                                    for(var v = 0; v < m; ++v){
                                        _.push(p = n[type](C[v]));
                                        p.onerror = h;
                                    }
                                }
                            }
                            const S = function(n) {
                                const t = n.target.result;
                                _.forEach((e, t)=>e.error != null && (f[t] = e.error));
                                e({
                                    numFailures: g,
                                    failures: f,
                                    results: type === "delete" ? l : _.map((e)=>e.result),
                                    lastResult: t
                                });
                            };
                            p.onerror = function(e) {
                                h(e);
                                S(e);
                            };
                            p.onsuccess = S;
                        });
                    }
                    function a({ trans: o, values: a, query: l, reverse: s, unique: u }) {
                        return new (e || (e = n("Promise")))(function(t, c) {
                            t = lt(t);
                            const { index: d, range: m } = l;
                            const p = o.objectStore(r);
                            const _ = d.isPrimaryKey ? p : p.index(d.name);
                            const f = s ? u ? "prevunique" : "prev" : u ? "nextunique" : "next";
                            const g = a || !("openKeyCursor" in _) ? _.openCursor(i(m), f) : _.openKeyCursor(i(m), f);
                            g.onerror = En(c);
                            g.onsuccess = lt(function(r) {
                                const a = g.result;
                                if (!a) {
                                    t(null);
                                    return;
                                }
                                a.___id = ++Wn;
                                a.done = false;
                                const i = a.continue.bind(a);
                                let l = a.continuePrimaryKey;
                                if (l) {
                                    l = l.bind(a);
                                }
                                const s = a.advance.bind(a);
                                const u = function() {
                                    throw new Error("Cursor not started");
                                };
                                const d = function() {
                                    throw new Error("Cursor not stopped");
                                };
                                a.trans = o;
                                a.stop = a.continue = a.continuePrimaryKey = a.advance = u;
                                a.fail = lt(c);
                                a.next = function() {
                                    const e = this;
                                    let t = 1;
                                    return this.start(function() {
                                        if (t--) {
                                            return e.continue();
                                        }
                                        return e.stop();
                                    }).then(()=>e);
                                };
                                a.start = function(t) {
                                    const r = new (e || (e = n("Promise")))(function(e, t) {
                                        e = lt(e);
                                        g.onerror = En(t);
                                        a.fail = t;
                                        a.stop = function(t) {
                                            a.stop = a.continue = a.continuePrimaryKey = a.advance = d;
                                            e(t);
                                        };
                                    });
                                    const o = function() {
                                        if (g.result) {
                                            try {
                                                t();
                                            } catch (e) {
                                                a.fail(e);
                                            }
                                        } else {
                                            a.done = true;
                                            a.start = function() {
                                                throw new Error("Cursor behind last entry");
                                            };
                                            a.stop();
                                        }
                                    };
                                    g.onsuccess = lt(function(e) {
                                        g.onsuccess = o;
                                        o();
                                    });
                                    a.continue = i;
                                    a.continuePrimaryKey = l;
                                    a.advance = s;
                                    o();
                                    return r;
                                };
                                t(a);
                            }, c);
                        });
                    }
                    function l(t) {
                        return function(o) {
                            return new (e || (e = n("Promise")))(function(e, n) {
                                e = lt(e);
                                const { trans: a, values: l, limit: s, query: u } = o;
                                const c = s === 1 / 0 ? void 0 : s;
                                const { index: d, range: m } = u;
                                const p = a.objectStore(r);
                                const _ = d.isPrimaryKey ? p : p.index(d.name);
                                const f = i(m);
                                if (s === 0) {
                                    return e({
                                        result: []
                                    });
                                }
                                if (t) {
                                    const g = l ? _.getAll(f, c) : _.getAllKeys(f, c);
                                    g.onsuccess = function(t) {
                                        return e({
                                            result: t.target.result
                                        });
                                    };
                                    g.onerror = En(n);
                                } else {
                                    let h = 0;
                                    const y = l || !("openKeyCursor" in _) ? _.openCursor(f) : _.openKeyCursor(f);
                                    const C = [];
                                    y.onsuccess = function(t) {
                                        const n = y.result;
                                        if (!n) {
                                            return e({
                                                result: C
                                            });
                                        }
                                        C.push(l ? n.value : n.primaryKey);
                                        if (++h === s) {
                                            return e({
                                                result: C
                                            });
                                        }
                                        n.continue();
                                    };
                                    y.onerror = En(n);
                                }
                            });
                        };
                    }
                    return {
                        name: r,
                        schema: t,
                        mutate: o,
                        getMany: function({ trans: t, keys: a }) {
                            return new (e || (e = n("Promise")))(function(e, n) {
                                e = lt(e);
                                const o = t.objectStore(r);
                                let c;
                                for(var i = a.length, l = new Array(i), s = 0, u = 0, d = function({ target: t }) {
                                    (l[t._pos] = t.result) != null;
                                    if (++u === s) {
                                        e(l);
                                    }
                                }, m = En(n), p = 0; p < i; ++p){
                                    const _ = a[p];
                                    if (_ != null) {
                                        c = o.get(a[p]);
                                        c._pos = p;
                                        c.onsuccess = d;
                                        c.onerror = m;
                                        ++s;
                                    }
                                }
                                if (s === 0) {
                                    e(l);
                                }
                            });
                        },
                        get: function({ trans: t, key }) {
                            return new (e || (e = n("Promise")))(function(e, n) {
                                e = lt(e);
                                const o = t.objectStore(r);
                                const i = o.get(key);
                                i.onsuccess = function(t) {
                                    return e(t.target.result);
                                };
                                i.onerror = En(n);
                            });
                        },
                        query: l(d),
                        openCursor: a,
                        count: function({ query: t, trans: a }) {
                            const { index: l, range: s } = t;
                            return new (e || (e = n("Promise")))(function(e, t) {
                                const n = a.objectStore(r);
                                const o = l.isPrimaryKey ? n : n.index(l.name);
                                const u = i(s);
                                const c = u ? o.count(u) : o.count();
                                c.onsuccess = lt(function(t) {
                                    return e(t.target.result);
                                });
                                c.onerror = En(t);
                            });
                        }
                    };
                }
                const u = a(t, o);
                const c = u.schema;
                var d = u.hasGetAll;
                const m = c.tables.map((e)=>s(e));
                const p = {};
                m.forEach((e)=>p[e.name] = e);
                return {
                    stack: "dbcore",
                    transaction: t.transaction.bind(t),
                    table: function(t) {
                        const e = p[t];
                        if (!e) {
                            throw new Error(`Table '${t}' not found`);
                        }
                        return p[t];
                    },
                    MIN_KEY: -1 / 0,
                    MAX_KEY: An(r),
                    schema: c
                };
            }
            function Vn(e, t) {
                return t.reduce((e, { create: n })=>r(r({}, e), n(e)), e);
            }
            function Hn(e, t, n, r) {
                const o = n.IDBKeyRange;
                n.indexedDB;
                const a = Vn(Un(t, o, r), e.dbcore);
                return {
                    dbcore: a
                };
            }
            function Gn({ _novip: n }, t) {
                const r = t.db;
                const o = Hn(n._middlewares, r, n._deps, t);
                n.core = o.dbcore;
                n.tables.forEach((e)=>{
                    const t = e.name;
                    if (n.core.schema.tables.some((e)=>e.name === t)) {
                        e.core = n.core.table(t);
                        if (n[t] instanceof n.Table) {
                            n[t].core = e.core;
                        }
                    }
                });
            }
            function zn({ _novip: o }, t, n, r) {
                n.forEach((e)=>{
                    const n = r[e];
                    t.forEach((t)=>{
                        const r = h(t, e);
                        if (!r || "value" in r && r.value === void 0) {
                            if (t === o.Transaction.prototype || t instanceof o.Transaction) {
                                _(t, e, {
                                    get: function() {
                                        return this.table(e);
                                    },
                                    set: function(n) {
                                        p(this, e, {
                                            value: n,
                                            writable: true,
                                            configurable: true,
                                            enumerable: true
                                        });
                                    }
                                });
                            } else {
                                t[e] = new o.Table(e, n);
                            }
                        }
                    });
                });
            }
            function jn({ _novip: n }, t) {
                t.forEach((e)=>{
                    for(const t in e){
                        if (e[t] instanceof n.Table) {
                            delete e[t];
                        }
                    }
                });
            }
            function Kn(e, t) {
                return e._cfg.version - t._cfg.version;
            }
            function Qn(e, t, n, r) {
                const o = e._dbSchema;
                const a = e._createTransaction("readwrite", e._storeNames, o);
                a.create(n);
                a._completion.catch(r);
                const l = a._reject.bind(a);
                const s = Be.transless || Be;
                _t(function() {
                    Be.trans = a;
                    Be.transless = s;
                    if (t === 0) {
                        i(o).forEach((e)=>{
                            Jn(n, e, o[e].primKey, o[e].indexes);
                        });
                        Gn(e, n);
                        Ve.follow(function() {
                            return e.on.populate.fire(a);
                        }).catch(l);
                    } else {
                        Xn(e, t, a, n).catch(l);
                    }
                });
            }
            function Xn({ _novip: o }, t, n, r) {
                const a = [];
                const l = o._versions;
                let s = o._dbSchema = nr(o, o.idbdb, r);
                let u = false;
                const c = l.filter((e)=>e._cfg.version >= t);
                c.forEach((e)=>{
                    a.push(function() {
                        const a = s;
                        const l = e._cfg.dbschema;
                        ar(o, a, r);
                        ar(o, l, r);
                        s = o._dbSchema = l;
                        const c = Yn(a, l);
                        c.add.forEach((e)=>{
                            Jn(r, e[0], e[1].primKey, e[1].indexes);
                        });
                        c.change.forEach((e)=>{
                            if (e.recreate) {
                                throw new ae.Upgrade("Not yet support for changing primary key");
                            }
                            const t = r.objectStore(e.name);
                            e.add.forEach((e)=>tr(t, e));
                            e.change.forEach((e)=>{
                                t.deleteIndex(e.name);
                                tr(t, e);
                            });
                            e.del.forEach((e)=>t.deleteIndex(e));
                        });
                        const d = e._cfg.contentUpgrade;
                        if (d && e._cfg.version > t) {
                            Gn(o, r);
                            n._memoizedTables = {};
                            u = true;
                            const m = T(l);
                            c.del.forEach((e)=>{
                                m[e] = a[e];
                            });
                            jn(o, [
                                o.Transaction.prototype
                            ]);
                            zn(o, [
                                o.Transaction.prototype
                            ], i(m), m);
                            n.schema = m;
                            const p = U(d);
                            if (p) {
                                ft();
                            }
                            let _;
                            const f = Ve.follow(function() {
                                _ = d(n);
                                if (_ && p) {
                                    const e = gt.bind(null, null);
                                    _.then(e, e);
                                }
                            });
                            if (_ && typeof _.then === "function") {
                                return Ve.resolve(_);
                            }
                            return f.then(()=>_);
                        }
                    });
                    a.push(function(t) {
                        if (!u || !Ft) {
                            const r = e._cfg.dbschema;
                            er(r, t);
                        }
                        jn(o, [
                            o.Transaction.prototype
                        ]);
                        zn(o, [
                            o.Transaction.prototype
                        ], o._storeNames, o._dbSchema);
                        n.schema = o._dbSchema;
                    });
                });
                function d() {
                    if (a.length) {
                        return Ve.resolve(a.shift()(n.idbtrans)).then(d);
                    }
                    return Ve.resolve();
                }
                return d().then(()=>{
                    Zn(s, r);
                });
            }
            function Yn(e, t) {
                const n = {
                    del: [],
                    add: [],
                    change: []
                };
                let r;
                for(r in e){
                    if (!t[r]) {
                        n.del.push(r);
                    }
                }
                for(r in t){
                    const o = e[r];
                    const a = t[r];
                    if (!o) {
                        n.add.push([
                            r,
                            a
                        ]);
                    } else {
                        const i = {
                            name: r,
                            def: a,
                            recreate: false,
                            del: [],
                            add: [],
                            change: []
                        };
                        if (`${o.primKey.keyPath || ""}` != `${a.primKey.keyPath || ""}` || o.primKey.auto !== a.primKey.auto && !At) {
                            i.recreate = true;
                            n.change.push(i);
                        } else {
                            const l = o.idxByName;
                            const s = a.idxByName;
                            let u = void 0;
                            for(u in l){
                                if (!s[u]) {
                                    i.del.push(u);
                                }
                            }
                            for(u in s){
                                const c = l[u];
                                const d = s[u];
                                if (c) {
                                    if (c.src !== d.src) {
                                        i.change.push(d);
                                    }
                                } else {
                                    i.add.push(d);
                                }
                            }
                            if (i.del.length > 0 || i.add.length > 0 || i.change.length > 0) {
                                n.change.push(i);
                            }
                        }
                    }
                }
                return n;
            }
            function Jn(e, t, n, r) {
                const o = e.db.createObjectStore(t, n.keyPath ? {
                    keyPath: n.keyPath,
                    autoIncrement: n.auto
                } : {
                    autoIncrement: n.auto
                });
                r.forEach((e)=>tr(o, e));
                return o;
            }
            function Zn(e, t) {
                i(e).forEach((n)=>{
                    if (!t.db.objectStoreNames.contains(n)) {
                        Jn(t, n, e[n].primKey, e[n].indexes);
                    }
                });
            }
            function er(e, t) {
                [].slice.call(t.db.objectStoreNames).forEach((n)=>e[n] == null && t.db.deleteObjectStore(n));
            }
            function tr(e, t) {
                e.createIndex(t.name, t.keyPath, {
                    unique: t.unique,
                    multiEntry: t.multi
                });
            }
            function nr(e, t, n) {
                const r = {};
                const o = C(t.objectStoreNames, 0);
                o.forEach((e)=>{
                    for(var t = n.objectStore(e), o = t.keyPath, a = Pn(Nn(o), o || "", false, false, !!t.autoIncrement, o && typeof o !== "string", true), i = [], l = 0; l < t.indexNames.length; ++l){
                        const s = t.index(t.indexNames[l]);
                        o = s.keyPath;
                        const u = Pn(s.name, o, !!s.unique, !!s.multiEntry, false, o && typeof o !== "string", false);
                        i.push(u);
                    }
                    r[e] = Mn(e, a, i);
                });
                return r;
            }
            function rr({ _novip: r }, t, n) {
                r.verno = t.version / 10;
                const o = r._dbSchema = nr(r, t, n);
                r._storeNames = C(t.objectStoreNames, 0);
                zn(r, [
                    r._allTables
                ], i(o), o);
            }
            function or(e, t) {
                const n = nr(e, e.idbdb, t);
                const r = Yn(n, e._dbSchema);
                return !(r.add.length || r.change.some((e)=>e.add.length || e.change.length));
            }
            function ar({ _novip: r }, t, n) {
                for(let o = n.db.objectStoreNames, i = 0; i < o.length; ++i){
                    const l = o[i];
                    const s = n.objectStore(l);
                    r._hasGetAll = "getAll" in s;
                    for(let u = 0; u < s.indexNames.length; ++u){
                        const c = s.indexNames[u];
                        const d = s.index(c).keyPath;
                        const m = typeof d === "string" ? d : `[${C(d).join("+")}]`;
                        if (t[l]) {
                            const p = t[l].idxByName[m];
                            if (p) {
                                p.name = c;
                                delete t[l].idxByName[m];
                                t[l].idxByName[c] = p;
                            }
                        }
                    }
                }
                if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && a.WorkerGlobalScope && a instanceof a.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
                    r._hasGetAll = false;
                }
            }
            function ir(e) {
                return e.split(",").map((e, t)=>{
                    e = e.trim();
                    const n = e.replace(/([&*]|\+\+)/g, "");
                    const r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
                    return Pn(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), l(r), t === 0);
                });
            }
            const lr = (()=>{
                class e {
                    _parseStoresSpec(e, t) {
                        i(e).forEach((n)=>{
                            if (e[n] !== null) {
                                const r = ir(e[n]);
                                const o = r.shift();
                                if (o.multi) {
                                    throw new ae.Schema("Primary key cannot be multi-valued");
                                }
                                r.forEach((e)=>{
                                    if (e.auto) {
                                        throw new ae.Schema("Only primary key can be marked as autoIncrement (++)");
                                    }
                                    if (!e.keyPath) {
                                        throw new ae.Schema("Index must have a name and cannot be an empty string");
                                    }
                                });
                                t[n] = Mn(n, o, r);
                            }
                        });
                    }
                    stores(e) {
                        const t = this.db;
                        this._cfg.storesSource = this._cfg.storesSource ? s(this._cfg.storesSource, e) : e;
                        const n = t._versions;
                        const r = {};
                        let o = {};
                        n.forEach((e)=>{
                            s(r, e._cfg.storesSource);
                            o = e._cfg.dbschema = {};
                            e._parseStoresSpec(r, o);
                        });
                        t._dbSchema = o;
                        jn(t, [
                            t._allTables,
                            t,
                            t.Transaction.prototype
                        ]);
                        zn(t, [
                            t._allTables,
                            t,
                            t.Transaction.prototype,
                            this._cfg.tables
                        ], i(o), o);
                        t._storeNames = i(o);
                        return this;
                    }
                    upgrade(e) {
                        this._cfg.contentUpgrade = he(this._cfg.contentUpgrade || ue, e);
                        return this;
                    }
                }
                return e;
            })();
            function sr(e) {
                return Kt(lr.prototype, function(n) {
                    this.db = e;
                    this._cfg = {
                        version: n,
                        storesSource: null,
                        dbschema: {},
                        tables: {},
                        contentUpgrade: null
                    };
                });
            }
            function ur(e, t) {
                let n = e._dbNamesDB;
                if (!n) {
                    n = e._dbNamesDB = new Wr(Wt, {
                        addons: [],
                        indexedDB: e,
                        IDBKeyRange: t
                    });
                    n.version(1).stores({
                        dbnames: "name"
                    });
                }
                return n.table("dbnames");
            }
            function cr(e) {
                return e && typeof e.databases === "function";
            }
            function dr({ indexedDB: r, IDBKeyRange: o }) {
                if (cr(r)) {
                    return (e || (e = n("Promise"))).resolve(r.databases()).then((e)=>e.map((e)=>e.name).filter((e)=>e !== Wt));
                }
                return ur(r, o).toCollection().primaryKeys();
            }
            function mr({ indexedDB: n, IDBKeyRange: r }, t) {
                if (!cr(n) && t !== Wt) {
                    ur(n, r).put({
                        name: t
                    }).catch(ue);
                }
            }
            function pr({ indexedDB: n, IDBKeyRange: r }, t) {
                if (!cr(n) && t !== Wt) {
                    ur(n, r).delete(t).catch(ue);
                }
            }
            function _r(e) {
                return _t(function() {
                    Be.letThrough = true;
                    return e();
                });
            }
            function fr() {
                const t = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
                if (!t || !indexedDB.databases) {
                    return (e || (e = n("Promise"))).resolve();
                }
                let r;
                return new (e || (e = n("Promise")))(function(e) {
                    const t = function() {
                        return indexedDB.databases().finally(e);
                    };
                    r = setInterval(t, 100);
                    t();
                }).finally(()=>clearInterval(r));
            }
            function gr(e) {
                const t = e._state;
                const n = e._deps.indexedDB;
                if (t.isBeingOpened || e.idbdb) {
                    return t.dbReadyPromise.then(()=>{
                        if (t.dbOpenError) {
                            return Tt(t.dbOpenError);
                        }
                        return e;
                    });
                }
                if (V) {
                    t.openCanceller._stackHolder = j();
                }
                t.isBeingOpened = true;
                t.dbOpenError = null;
                t.openComplete = false;
                const r = t.openCanceller;
                function o() {
                    if (t.openCanceller !== r) {
                        throw new ae.DatabaseClosed("db.open() was cancelled");
                    }
                }
                const a = t.dbReadyResolve;
                let i = null;
                let l = false;
                return Ve.race([
                    r,
                    (typeof navigator === "undefined" ? Ve.resolve() : fr()).then(()=>new Ve(function(r, a) {
                            o();
                            if (!n) {
                                throw new ae.MissingAPI;
                            }
                            const s = e.name;
                            const u = t.autoSchema ? n.open(s) : n.open(s, Math.round(e.verno * 10));
                            if (!u) {
                                throw new ae.MissingAPI;
                            }
                            u.onerror = En(a);
                            u.onblocked = lt(e._fireOnBlocked);
                            u.onupgradeneeded = lt(function(r) {
                                i = u.transaction;
                                if (t.autoSchema && !e._options.allowEmptyDB) {
                                    u.onerror = kn;
                                    i.abort();
                                    u.result.close();
                                    const o = n.deleteDatabase(s);
                                    o.onsuccess = o.onerror = lt(function() {
                                        a(new ae.NoSuchDatabase(`Database ${s} doesnt exist`));
                                    });
                                } else {
                                    i.onerror = En(a);
                                    const c = r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion;
                                    l = c < 1;
                                    e._novip.idbdb = u.result;
                                    Qn(e, c / 10, i, a);
                                }
                            }, a);
                            u.onsuccess = lt(function() {
                                i = null;
                                const n = e._novip.idbdb = u.result;
                                const o = C(n.objectStoreNames);
                                if (o.length > 0) {
                                    try {
                                        const a = n.transaction(wn(o), "readonly");
                                        if (t.autoSchema) {
                                            rr(e, n, a);
                                        } else {
                                            ar(e, e._dbSchema, a);
                                            or(e, a);
                                        }
                                        Gn(e, a);
                                    } catch (e) {}
                                }
                                wt.push(e);
                                n.onversionchange = lt(function(n) {
                                    t.vcFired = true;
                                    e.on("versionchange").fire(n);
                                });
                                n.onclose = lt(function(t) {
                                    e.on("close").fire(t);
                                });
                                if (l) {
                                    mr(e._deps, s);
                                }
                                r();
                            }, a);
                        }))
                ]).then(()=>{
                    o();
                    t.onReadyBeingFired = [];
                    return Ve.resolve(_r(function() {
                        return e.on.ready.fire(e.vip);
                    })).then(function n() {
                        if (t.onReadyBeingFired.length > 0) {
                            const r = t.onReadyBeingFired.reduce(he, ue);
                            t.onReadyBeingFired = [];
                            return Ve.resolve(_r(function() {
                                return r(e.vip);
                            })).then(n);
                        }
                    });
                }).finally(()=>{
                    t.onReadyBeingFired = null;
                    t.isBeingOpened = false;
                }).then(()=>e).catch((n)=>{
                    t.dbOpenError = n;
                    try {
                        if (i) {
                            i.abort();
                        }
                    } catch (e) {}
                    if (r === t.openCanceller) {
                        e._close();
                    }
                    return Tt(n);
                }).finally(()=>{
                    t.openComplete = true;
                    a();
                });
            }
            function hr(t) {
                const r = function(n) {
                    return t.next(n);
                };
                const o = function(n) {
                    return t.throw(n);
                };
                var a = s(r);
                var i = s(o);
                function s(t) {
                    return function(r) {
                        const o = t(r);
                        const s = o.value;
                        if (o.done) {
                            return s;
                        }
                        if (!s || typeof s.then !== "function") {
                            if (l(s)) {
                                return (e || (e = n("Promise"))).all(s).then(a, i);
                            }
                            return a(s);
                        }
                        return s.then(a, i);
                    };
                }
                return s(r)();
            }
            function yr(e, t, n) {
                let r = arguments.length;
                if (r < 2) {
                    throw new ae.InvalidArgument("Too few arguments");
                }
                const o = new Array(r - 1);
                while(--r){
                    o[r - 1] = arguments[r];
                }
                n = o.pop();
                const a = x(o);
                return [
                    e,
                    a,
                    n
                ];
            }
            function Cr(e, t, n, r, o) {
                return Ve.resolve().then(()=>{
                    const a = Be.transless || Be;
                    const i = e._createTransaction(t, n, e._dbSchema, r);
                    const l = {
                        trans: i,
                        transless: a
                    };
                    if (r) {
                        i.idbtrans = r.idbtrans;
                    } else {
                        try {
                            i.create();
                            e._state.PR1398_maxLoop = 3;
                        } catch (r) {
                            if (r.name === re.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0) {
                                e._close();
                                return e.open().then(()=>Cr(e, t, n, null, o));
                            }
                            return Tt(r);
                        }
                    }
                    const s = U(o);
                    if (s) {
                        ft();
                    }
                    let u;
                    const c = Ve.follow(function() {
                        u = o.call(i, i);
                        if (u) {
                            if (s) {
                                const e = gt.bind(null, null);
                                u.then(e, e);
                            } else {
                                if (typeof u.next === "function" && typeof u.throw === "function") {
                                    u = hr(u);
                                }
                            }
                        }
                    }, l);
                    return (u && typeof u.then === "function" ? Ve.resolve(u).then((e)=>{
                        if (i.active) {
                            return e;
                        }
                        return Tt(new ae.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
                    }) : c.then(()=>u)).then((e)=>{
                        if (r) {
                            i._resolve();
                        }
                        return i._completion.then(()=>e);
                    }).catch((e)=>{
                        i._reject(e);
                        return Tt(e);
                    });
                });
            }
            function br(e, t, n) {
                const r = l(e) ? e.slice() : [
                    e
                ];
                for(let o = 0; o < n; ++o){
                    r.push(t);
                }
                return r;
            }
            function vr(e) {
                return r(r({}, e), {
                    table: function(n) {
                        const t = e.table(n);
                        const o = t.schema;
                        const a = {};
                        const i = [];
                        function l(e, t, n) {
                            const o = qn(e);
                            const s = a[o] = a[o] || [];
                            const u = e == null ? 0 : typeof e === "string" ? 1 : e.length;
                            const c = t > 0;
                            const d = r(r({}, n), {
                                isVirtual: c,
                                keyTail: t,
                                keyLength: u,
                                extractKey: Fn(e),
                                unique: !c && n.unique
                            });
                            s.push(d);
                            if (!d.isPrimaryKey) {
                                i.push(d);
                            }
                            if (u > 1) {
                                const m = u === 2 ? e[0] : e.slice(0, u - 1);
                                l(m, t + 1, n);
                            }
                            s.sort((e, t)=>e.keyTail - t.keyTail);
                            return d;
                        }
                        const s = l(o.primaryKey.keyPath, 0, o.primaryKey);
                        a[":id"] = [
                            s
                        ];
                        for (const d of o.indexes){
                            l(d.keyPath, 0, d);
                        }
                        function m(e) {
                            const t = a[qn(e)];
                            return t && t[0];
                        }
                        function p(t, n) {
                            return {
                                type: t.type === 1 ? 2 : t.type,
                                lower: br(t.lower, t.lowerOpen ? e.MAX_KEY : e.MIN_KEY, n),
                                lowerOpen: true,
                                upper: br(t.upper, t.upperOpen ? e.MIN_KEY : e.MAX_KEY, n),
                                upperOpen: true
                            };
                        }
                        function _(e) {
                            const t = e.query.index;
                            if (t.isVirtual) {
                                return r(r({}, e), {
                                    query: {
                                        index: t,
                                        range: p(e.query.range, t.keyTail)
                                    }
                                });
                            }
                            return e;
                        }
                        const f = r(r({}, t), {
                            schema: r(r({}, o), {
                                primaryKey: s,
                                indexes: i,
                                getIndexByKeyPath: m
                            }),
                            count: function(n) {
                                return t.count(_(n));
                            },
                            query: function(n) {
                                return t.query(_(n));
                            },
                            openCursor: function(r) {
                                const n = r.query.index;
                                const { keyTail: o, isVirtual: a, keyLength: i } = n;
                                if (!a) {
                                    return t.openCursor(r);
                                }
                                function l(t) {
                                    function n(n) {
                                        if (n != null) {
                                            t.continue(br(n, r.reverse ? e.MAX_KEY : e.MIN_KEY, o));
                                        } else if (r.unique) {
                                            t.continue(t.key.slice(0, i).concat(r.reverse ? e.MIN_KEY : e.MAX_KEY, o));
                                        } else {
                                            t.continue();
                                        }
                                    }
                                    const a = Object.create(t, {
                                        continue: {
                                            value: n
                                        },
                                        continuePrimaryKey: {
                                            value: function(r, a) {
                                                t.continuePrimaryKey(br(r, e.MAX_KEY, o), a);
                                            }
                                        },
                                        primaryKey: {
                                            get: function() {
                                                return t.primaryKey;
                                            }
                                        },
                                        key: {
                                            get: function() {
                                                const e = t.key;
                                                if (i === 1) {
                                                    return e[0];
                                                }
                                                return e.slice(0, i);
                                            }
                                        },
                                        value: {
                                            get: function() {
                                                return t.value;
                                            }
                                        }
                                    });
                                    return a;
                                }
                                return t.openCursor(_(r)).then((e)=>e && l(e));
                            }
                        });
                        return f;
                    }
                });
            }
            const Sr = {
                stack: "dbcore",
                name: "VirtualIndexMiddleware",
                level: 1,
                create: vr
            };
            function Rr(e, t, n, r) {
                n = n || {};
                r = r || "";
                i(e).forEach((o)=>{
                    if (!d(t, o)) {
                        n[r + o] = void 0;
                    } else {
                        const a = e[o];
                        const i = t[o];
                        if (typeof a === "object" && typeof i === "object" && a && i) {
                            const l = F(a);
                            const s = F(i);
                            if (l !== s) {
                                n[r + o] = t[o];
                            } else if (l === "Object") {
                                Rr(a, i, n, `${r + o}.`);
                            } else if (a !== i) {
                                n[r + o] = t[o];
                            }
                        } else {
                            if (a !== i) {
                                n[r + o] = t[o];
                            }
                        }
                    }
                });
                i(t).forEach((o)=>{
                    if (!d(e, o)) {
                        n[r + o] = t[o];
                    }
                });
                return n;
            }
            function Lr(e, t) {
                if (t.type === "delete") {
                    return t.keys;
                }
                return t.keys || t.values.map(e.extractKey);
            }
            const Er = {
                stack: "dbcore",
                name: "HooksMiddleware",
                level: 2,
                create: function(a) {
                    return r(r({}, a), {
                        table: function(i) {
                            const t = a.table(i);
                            const l = t.schema.primaryKey;
                            const s = r(r({}, t), {
                                mutate: function(s) {
                                    const a = Be.trans;
                                    const u = a.table(i).hook;
                                    const { deleting: c, creating: m, updating: p } = u;
                                    switch(s.type){
                                        case "add":
                                            if (m.fire === ue) {
                                                break;
                                            }
                                            return a._promise("readwrite", function() {
                                                return _(s);
                                            }, true);
                                        case "put":
                                            if (m.fire === ue && p.fire === ue) {
                                                break;
                                            }
                                            return a._promise("readwrite", function() {
                                                return _(s);
                                            }, true);
                                        case "delete":
                                            if (c.fire === ue) {
                                                break;
                                            }
                                            return a._promise("readwrite", function() {
                                                return _(s);
                                            }, true);
                                        case "deleteRange":
                                            if (c.fire === ue) {
                                                break;
                                            }
                                            return a._promise("readwrite", function() {
                                                return f(s);
                                            }, true);
                                    }
                                    return t.mutate(s);
                                    function _(a) {
                                        const i = Be.trans;
                                        const s = a.keys || Lr(l, a);
                                        if (!s) {
                                            throw new Error("Keys missing");
                                        }
                                        a = a.type === "add" || a.type === "put" ? r(r({}, a), {
                                            keys: s
                                        }) : r({}, a);
                                        if (a.type !== "delete") {
                                            a.values = o([], a.values, true);
                                        }
                                        if (a.keys) {
                                            a.keys = o([], a.keys, true);
                                        }
                                        return kr(t, a, s).then((r)=>{
                                            const o = s.map((e, t)=>{
                                                const n = r[t];
                                                const o = {
                                                    onerror: null,
                                                    onsuccess: null
                                                };
                                                if (a.type === "delete") {
                                                    c.fire.call(o, e, n, i);
                                                } else if (a.type === "add" || n === void 0) {
                                                    const s = m.fire.call(o, e, a.values[t], i);
                                                    if (e == null && s != null) {
                                                        e = s;
                                                        a.keys[t] = e;
                                                        if (!l.outbound) {
                                                            k(a.values[t], l.keyPath, e);
                                                        }
                                                    }
                                                } else {
                                                    const u = Rr(n, a.values[t]);
                                                    const _ = p.fire.call(o, u, e, n, i);
                                                    if (_) {
                                                        const f = a.values[t];
                                                        Object.keys(_).forEach((e)=>{
                                                            if (d(f, e)) {
                                                                f[e] = _[e];
                                                            } else {
                                                                k(f, e, _[e]);
                                                            }
                                                        });
                                                    }
                                                }
                                                return o;
                                            });
                                            return t.mutate(a).then(({ failures: t, results: n, numFailures: i, lastResult: l })=>{
                                                for(let u = 0; u < s.length; ++u){
                                                    const c = n ? n[u] : s[u];
                                                    const d = o[u];
                                                    if (c == null) {
                                                        if (d.onerror) {
                                                            d.onerror(t[u]);
                                                        }
                                                    } else if (d.onsuccess) {
                                                        d.onsuccess(a.type === "put" && r[u] ? a.values[u] : c);
                                                    }
                                                }
                                                return {
                                                    failures: t,
                                                    results: n,
                                                    numFailures: i,
                                                    lastResult: l
                                                };
                                            }).catch((t)=>{
                                                o.forEach((e)=>e.onerror && e.onerror(t));
                                                return (e || (e = n("Promise"))).reject(t);
                                            });
                                        });
                                    }
                                    function f(e) {
                                        return g(e.trans, e.range, 10000);
                                    }
                                    function g(o, a, i) {
                                        return t.query({
                                            trans: o,
                                            values: false,
                                            query: {
                                                index: l,
                                                range: a
                                            },
                                            limit: i
                                        }).then(({ result: l })=>_({
                                                type: "delete",
                                                keys: l,
                                                trans: o
                                            }).then((t)=>{
                                                if (t.numFailures > 0) {
                                                    return (e || (e = n("Promise"))).reject(t.failures[0]);
                                                }
                                                if (l.length < i) {
                                                    return {
                                                        failures: [],
                                                        numFailures: 0,
                                                        lastResult: void 0
                                                    };
                                                }
                                                return g(o, r(r({}, a), {
                                                    lower: l[l.length - 1],
                                                    lowerOpen: true
                                                }), i);
                                            }));
                                    }
                                }
                            });
                            return s;
                        }
                    });
                }
            };
            function kr(t, r, o) {
                if (r.type === "add") {
                    return (e || (e = n("Promise"))).resolve([]);
                }
                return t.getMany({
                    trans: r.trans,
                    keys: o,
                    cache: "immutable"
                });
            }
            function Ir(e, t, n) {
                try {
                    if (!t || t.keys.length < e.length) {
                        return null;
                    }
                    const r = [];
                    for(let o = 0, a = 0; o < t.keys.length && a < e.length; ++o){
                        if (on(t.keys[o], e[a]) === 0) {
                            r.push(n ? M(t.values[o]) : t.values[o]);
                            ++a;
                        }
                    }
                    if (r.length === e.length) {
                        return r;
                    }
                    return null;
                } catch (e) {
                    return null;
                }
            }
            const Tr = {
                stack: "dbcore",
                level: -1,
                create: function(t) {
                    return {
                        table: function(n) {
                            const e = t.table(n);
                            return r(r({}, e), {
                                getMany: function(n) {
                                    if (!n.cache) {
                                        return e.getMany(n);
                                    }
                                    const t = Ir(n.keys, n.trans._cache, n.cache === "clone");
                                    if (t) {
                                        return Ve.resolve(t);
                                    }
                                    return e.getMany(n).then((e)=>{
                                        n.trans._cache = {
                                            keys: n.keys,
                                            values: n.cache === "clone" ? M(e) : e
                                        };
                                        return e;
                                    });
                                },
                                mutate: function(n) {
                                    if (n.type !== "add") {
                                        n.trans._cache = null;
                                    }
                                    return e.mutate(n);
                                }
                            });
                        }
                    };
                }
            };
            function xr(e) {
                return !("from" in e);
            }
            const $r = function(t, n) {
                if (this) {
                    s(this, arguments.length ? {
                        d: 1,
                        from: t,
                        to: arguments.length > 1 ? n : t
                    } : {
                        d: 0
                    });
                } else {
                    const e = new $r;
                    if (t && "d" in t) {
                        s(e, t);
                    }
                    return e;
                }
            };
            m($r.prototype, {
                add: function(t) {
                    Nr(this, t);
                    return this;
                },
                addKey: function(t) {
                    Pr(this, t, t);
                    return this;
                },
                addKeys: function(t) {
                    const e = this;
                    t.forEach((t)=>Pr(e, t, t));
                    return this;
                },
                [O]: function() {
                    return wr(this);
                }
            });
            function Pr(e, t, n) {
                const r = on(t, n);
                if (!isNaN(r)) {
                    if (r > 0) {
                        throw RangeError();
                    }
                    if (xr(e)) {
                        return s(e, {
                            from: t,
                            to: n,
                            d: 1
                        });
                    }
                    const { l: o, r: a } = e;
                    if (on(n, e.from) < 0) {
                        if (o) {
                            Pr(o, t, n);
                        } else {
                            e.l = {
                                from: t,
                                to: n,
                                d: 1,
                                l: null,
                                r: null
                            };
                        }
                        return Ar(e);
                    }
                    if (on(t, e.to) > 0) {
                        if (a) {
                            Pr(a, t, n);
                        } else {
                            e.r = {
                                from: t,
                                to: n,
                                d: 1,
                                l: null,
                                r: null
                            };
                        }
                        return Ar(e);
                    }
                    if (on(t, e.from) < 0) {
                        e.from = t;
                        e.l = null;
                        e.d = a ? a.d + 1 : 1;
                    }
                    if (on(n, e.to) > 0) {
                        e.to = n;
                        e.r = null;
                        e.d = e.l ? e.l.d + 1 : 1;
                    }
                    const i = !e.r;
                    if (o && !e.l) {
                        Nr(e, o);
                    }
                    if (a && i) {
                        Nr(e, a);
                    }
                }
            }
            function Nr(e, t) {
                function n(e, { from: r, to: o, l: a, r: i }) {
                    Pr(e, r, o);
                    if (a) {
                        n(e, a);
                    }
                    if (i) {
                        n(e, i);
                    }
                }
                if (!xr(t)) {
                    n(e, t);
                }
            }
            function Mr(e, t) {
                const n = wr(t);
                let r = n.next();
                if (r.done) {
                    return false;
                }
                let o = r.value;
                const a = wr(e);
                for(let i = a.next(o.from), l = i.value; !r.done && !i.done;){
                    if (on(l.from, o.to) <= 0 && on(l.to, o.from) >= 0) {
                        return true;
                    }
                    if (on(o.from, l.from) < 0) {
                        o = (r = n.next(l.from)).value;
                    } else {
                        l = (i = a.next(o.from)).value;
                    }
                }
                return false;
            }
            function wr(e) {
                let t = xr(e) ? null : {
                    s: 0,
                    n: e
                };
                return {
                    next: function(n) {
                        const e = arguments.length > 0;
                        while(t){
                            switch(t.s){
                                case 0:
                                    t.s = 1;
                                    if (e) {
                                        while(t.n.l && on(n, t.n.from) < 0){
                                            t = {
                                                up: t,
                                                n: t.n.l,
                                                s: 1
                                            };
                                        }
                                    } else {
                                        while(t.n.l){
                                            t = {
                                                up: t,
                                                n: t.n.l,
                                                s: 1
                                            };
                                        }
                                    }
                                case 1:
                                    t.s = 2;
                                    if (!e || on(n, t.n.to) <= 0) {
                                        return {
                                            value: t.n,
                                            done: false
                                        };
                                    }
                                case 2:
                                    if (t.n.r) {
                                        t.s = 3;
                                        t = {
                                            up: t,
                                            n: t.n.r,
                                            s: 0
                                        };
                                        continue;
                                    }
                                case 3:
                                    t = t.up;
                            }
                        }
                        return {
                            done: true
                        };
                    }
                };
            }
            function Ar(e) {
                const o = (e.r?.d || 0) - (e.l?.d || 0);
                const a = o > 1 ? "r" : o < -1 ? "l" : "";
                if (a) {
                    const i = a === "r" ? "l" : "r";
                    const l = r({}, e);
                    const s = e[a];
                    e.from = s.from;
                    e.to = s.to;
                    e[a] = s[a];
                    l[a] = s[i];
                    e[i] = l;
                    l.d = Fr(l);
                }
                e.d = Fr(e);
            }
            function Fr({ r: t, l: n }) {
                return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
            }
            const Or = {
                stack: "dbcore",
                level: 0,
                create: function(t) {
                    const e = t.schema.name;
                    const n = new $r(t.MIN_KEY, t.MAX_KEY);
                    return r(r({}, t), {
                        table: function(a) {
                            const o = t.table(a);
                            const s = o.schema;
                            const u = s.primaryKey;
                            const { extractKey: c, outbound: d } = u;
                            const m = r(r({}, o), {
                                mutate: function(r) {
                                    const t = r.trans;
                                    const i = t.mutatedParts || (t.mutatedParts = {});
                                    const u = function(n) {
                                        const t = `idb://${e}/${a}/${n}`;
                                        return i[t] || (i[t] = new $r);
                                    };
                                    const c = u("");
                                    const d = u(":dels");
                                    const m = r.type;
                                    const p = r.type === "deleteRange" ? [
                                        r.range
                                    ] : r.type === "delete" ? [
                                        r.keys
                                    ] : r.values.length < 50 ? [
                                        [],
                                        r.values
                                    ] : [];
                                    let _ = p[0];
                                    const f = p[1];
                                    const g = r.trans._cache;
                                    return o.mutate(r).then((e)=>{
                                        if (l(_)) {
                                            if (m !== "delete") {
                                                _ = e.results;
                                            }
                                            c.addKeys(_);
                                            const t = Ir(_, g);
                                            if (!t && m !== "add") {
                                                d.addKeys(_);
                                            }
                                            if (t || f) {
                                                Br(u, s, t, f);
                                            }
                                        } else if (_) {
                                            const r = {
                                                from: _.lower,
                                                to: _.upper
                                            };
                                            d.add(r);
                                            c.add(r);
                                        } else {
                                            c.add(n);
                                            d.add(n);
                                            s.indexes.forEach((e)=>u(e.name).add(n));
                                        }
                                        return e;
                                    });
                                }
                            });
                            const p = function({ query: o }) {
                                const { index: a, range: i } = o;
                                return [
                                    a,
                                    new $r(i.lower ?? t.MIN_KEY, i.upper ?? t.MAX_KEY)
                                ];
                            };
                            const _ = {
                                get: function(t) {
                                    return [
                                        u,
                                        new $r(t.key)
                                    ];
                                },
                                getMany: function(t) {
                                    return [
                                        u,
                                        new $r().addKeys(t.keys)
                                    ];
                                },
                                count: p,
                                query: p,
                                openCursor: p
                            };
                            i(_).forEach((t)=>{
                                m[t] = function(i) {
                                    const l = Be.subscr;
                                    if (l) {
                                        const s = function(n) {
                                            const t = `idb://${e}/${a}/${n}`;
                                            return l[t] || (l[t] = new $r);
                                        };
                                        const u = s("");
                                        const m = s(":dels");
                                        const p = _[t](i);
                                        const f = p[0];
                                        const g = p[1];
                                        s(f.name || "").add(g);
                                        if (!f.isPrimaryKey) {
                                            if (t === "count") {
                                                m.add(n);
                                            } else {
                                                const h = t === "query" && d && i.values && o.query(r(r({}, i), {
                                                    values: false
                                                }));
                                                return o[t].apply(this, arguments).then((e)=>{
                                                    if (t === "query") {
                                                        if (d && i.values) {
                                                            return h.then(({ result: n })=>{
                                                                u.addKeys(n);
                                                                return e;
                                                            });
                                                        }
                                                        const n = i.values ? e.result.map(c) : e.result;
                                                        if (i.values) {
                                                            u.addKeys(n);
                                                        } else {
                                                            m.addKeys(n);
                                                        }
                                                    } else if (t === "openCursor") {
                                                        const r = e;
                                                        const o = i.values;
                                                        return r && Object.create(r, {
                                                            key: {
                                                                get: function() {
                                                                    m.addKey(r.primaryKey);
                                                                    return r.key;
                                                                }
                                                            },
                                                            primaryKey: {
                                                                get: function() {
                                                                    const e = r.primaryKey;
                                                                    m.addKey(e);
                                                                    return e;
                                                                }
                                                            },
                                                            value: {
                                                                get: function() {
                                                                    if (o) {
                                                                        u.addKey(r.primaryKey);
                                                                    }
                                                                    return r.value;
                                                                }
                                                            }
                                                        });
                                                    }
                                                    return e;
                                                });
                                            }
                                        }
                                    }
                                    return o[t].apply(this, arguments);
                                };
                            });
                            return m;
                        }
                    });
                }
            };
            function Br(e, t, n, r) {
                function o(t) {
                    const o = e(t.name || "");
                    function a(e) {
                        if (e != null) {
                            return t.extractKey(e);
                        }
                        return null;
                    }
                    const i = function(n) {
                        if (t.multiEntry && l(n)) {
                            return n.forEach((e)=>o.addKey(e));
                        }
                        return o.addKey(n);
                    };
                    (n || r).forEach((e, t)=>{
                        const o = n && a(n[t]);
                        const l = r && a(r[t]);
                        if (on(o, l) !== 0) {
                            if (o != null) {
                                i(o);
                            }
                            if (l != null) {
                                i(l);
                            }
                        }
                    });
                }
                t.indexes.forEach(o);
            }
            var Wr = function() {
                class e {
                    constructor(t, n){
                        const o = this;
                        this._middlewares = {};
                        this.verno = 0;
                        const a = e.dependencies;
                        this._options = n = r({
                            addons: e.addons,
                            autoOpen: true,
                            indexedDB: a.indexedDB,
                            IDBKeyRange: a.IDBKeyRange
                        }, n);
                        this._deps = {
                            indexedDB: n.indexedDB,
                            IDBKeyRange: n.IDBKeyRange
                        };
                        const i = n.addons;
                        this._dbSchema = {};
                        this._versions = [];
                        this._storeNames = [];
                        this._allTables = {};
                        this.idbdb = null;
                        this._novip = this;
                        const l = {
                            dbOpenError: null,
                            isBeingOpened: false,
                            onReadyBeingFired: null,
                            openComplete: false,
                            dbReadyResolve: ue,
                            dbReadyPromise: null,
                            cancelOpen: ue,
                            openCanceller: null,
                            autoSchema: true,
                            PR1398_maxLoop: 3
                        };
                        l.dbReadyPromise = new Ve(function(e) {
                            l.dbReadyResolve = e;
                        });
                        l.openCanceller = new Ve(function(e, t) {
                            l.cancelOpen = t;
                        });
                        this._state = l;
                        this.name = t;
                        this.on = jt(this, "populate", "blocked", "versionchange", "close", {
                            ready: [
                                he,
                                ue
                            ]
                        });
                        this.on.ready.subscribe = b(this.on.ready.subscribe, function(t) {
                            return function(n, r) {
                                e.vip(function() {
                                    const e = o._state;
                                    if (e.openComplete) {
                                        if (!e.dbOpenError) {
                                            Ve.resolve().then(n);
                                        }
                                        if (r) {
                                            t(n);
                                        }
                                    } else if (e.onReadyBeingFired) {
                                        e.onReadyBeingFired.push(n);
                                        if (r) {
                                            t(n);
                                        }
                                    } else {
                                        t(n);
                                        const a = o;
                                        if (!r) {
                                            t(function e() {
                                                a.on.ready.unsubscribe(n);
                                                a.on.ready.unsubscribe(e);
                                            });
                                        }
                                    }
                                });
                            };
                        });
                        this.Collection = mn(this);
                        this.Table = Qt(this);
                        this.Transaction = $n(this);
                        this.Version = sr(this);
                        this.WhereClause = Ln(this);
                        this.on("versionchange", function(e) {
                            e.newVersion > 0;
                            `${o.name}`;
                            o.close();
                        });
                        this.on("blocked", function(e) {
                            !e.newVersion || e.newVersion < e.oldVersion ? `${o.name}` : `${o.name}${e.oldVersion / 10}`;
                        });
                        this._maxKey = An(n.IDBKeyRange);
                        this._createTransaction = function(e, t, n, r) {
                            return new o.Transaction(e, t, n, o._options.chromeTransactionDurability, r);
                        };
                        this._fireOnBlocked = function(e) {
                            o.on("blocked").fire(e);
                            wt.filter((e)=>e.name === o.name && e !== o && !e._state.vcFired).map((t)=>t.on("versionchange").fire(e));
                        };
                        this.use(Sr);
                        this.use(Er);
                        this.use(Or);
                        this.use(Tr);
                        this.vip = Object.create(this, {
                            _vip: {
                                value: true
                            }
                        });
                        i.forEach((e)=>e(o));
                    }
                    version(e) {
                        if (isNaN(e) || e < 0.1) {
                            throw new ae.Type("Given version is not a positive number");
                        }
                        e = Math.round(e * 10) / 10;
                        if (this.idbdb || this._state.isBeingOpened) {
                            throw new ae.Schema("Cannot add version when database is open");
                        }
                        this.verno = Math.max(this.verno, e);
                        const t = this._versions;
                        let n = t.filter((t)=>t._cfg.version === e)[0];
                        return n || (n = new this.Version(e), t.push(n), t.sort(Kn), n.stores({}), this._state.autoSchema = false, n);
                    }
                    _whenReady(e) {
                        const t = this;
                        if (this.idbdb && (this._state.openComplete || Be.letThrough || this._vip)) {
                            return e();
                        }
                        return new Ve(function(e, n) {
                            if (t._state.openComplete) {
                                return n(new ae.DatabaseClosed(t._state.dbOpenError));
                            }
                            if (!t._state.isBeingOpened) {
                                if (!t._options.autoOpen) {
                                    n(new ae.DatabaseClosed);
                                    return;
                                }
                                t.open().catch(ue);
                            }
                            t._state.dbReadyPromise.then(e, n);
                        }).then(e);
                    }
                    use({ stack: t, create: n, level: r, name: o }) {
                        if (o) {
                            this.unuse({
                                stack: t,
                                name: o
                            });
                        }
                        const a = this._middlewares[t] || (this._middlewares[t] = []);
                        a.push({
                            stack: t,
                            create: n,
                            level: r ?? 10,
                            name: o
                        });
                        a.sort((e, t)=>e.level - t.level);
                        return this;
                    }
                    unuse({ stack: t, name, create: r }) {
                        if (t && this._middlewares[t]) {
                            this._middlewares[t] = this._middlewares[t].filter((e)=>{
                                if (r) {
                                    return e.create !== r;
                                }
                                if (name) {
                                    return e.name !== name;
                                }
                                return false;
                            });
                        }
                        return this;
                    }
                    open() {
                        return gr(this);
                    }
                    _close() {
                        const e = this._state;
                        const t = wt.indexOf(this);
                        if (t >= 0) {
                            wt.splice(t, 1);
                        }
                        if (this.idbdb) {
                            try {
                                this.idbdb.close();
                            } catch (e) {}
                            this._novip.idbdb = null;
                        }
                        e.dbReadyPromise = new Ve(function(t) {
                            e.dbReadyResolve = t;
                        });
                        e.openCanceller = new Ve(function(t, n) {
                            e.cancelOpen = n;
                        });
                    }
                    close() {
                        this._close();
                        const e = this._state;
                        this._options.autoOpen = false;
                        e.dbOpenError = new ae.DatabaseClosed;
                        if (e.isBeingOpened) {
                            e.cancelOpen(e.dbOpenError);
                        }
                    }
                    delete(...args) {
                        const e = this;
                        const t = args.length > 0;
                        const n = this._state;
                        return new Ve(function(r, o) {
                            const a = function() {
                                e.close();
                                const t = e._deps.indexedDB.deleteDatabase(e.name);
                                t.onsuccess = lt(function() {
                                    pr(e._deps, e.name);
                                    r();
                                });
                                t.onerror = En(o);
                                t.onblocked = e._fireOnBlocked;
                            };
                            if (t) {
                                throw new ae.InvalidArgument("Arguments not allowed in db.delete()");
                            }
                            if (n.isBeingOpened) {
                                n.dbReadyPromise.then(a);
                            } else {
                                a();
                            }
                        });
                    }
                    backendDB() {
                        return this.idbdb;
                    }
                    isOpen() {
                        return this.idbdb !== null;
                    }
                    hasBeenClosed() {
                        const e = this._state.dbOpenError;
                        return e && e.name === "DatabaseClosed";
                    }
                    hasFailed() {
                        return this._state.dbOpenError !== null;
                    }
                    dynamicallyOpened() {
                        return this._state.autoSchema;
                    }
                    get tables() {
                        const e = this;
                        return i(this._allTables).map((t)=>e._allTables[t]);
                    }
                    transaction() {
                        const e = yr.apply(this, arguments);
                        return this._transaction(...e);
                    }
                    _transaction(e, t, n) {
                        const r = this;
                        let o = Be.trans;
                        if (!o || o.db !== this || e.indexOf("!") !== -1) {
                            o = null;
                        }
                        const a = e.indexOf("?") !== -1;
                        e = e.replace("!", "").replace("?", "");
                        let i;
                        let l;
                        try {
                            l = t.map((e)=>{
                                const t = e instanceof r.Table ? e.name : e;
                                if (typeof t !== "string") {
                                    throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                                }
                                return t;
                            });
                            if (e == "r" || e === qt) {
                                i = qt;
                            } else if (e == "rw" || e == Ut) {
                                i = Ut;
                            } else {
                                throw new ae.InvalidArgument(`Invalid transaction mode: ${e}`);
                            }
                            if (o) {
                                if (o.mode === qt && i === Ut) {
                                    if (a) {
                                        o = null;
                                    } else {
                                        throw new ae.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                                    }
                                }
                                if (o) {
                                    l.forEach((e)=>{
                                        if (o && o.storeNames.indexOf(e) === -1) {
                                            if (a) {
                                                o = null;
                                            } else {
                                                throw new ae.SubTransaction(`Table ${e} not included in parent transaction.`);
                                            }
                                        }
                                    });
                                }
                                if (a && o && !o.active) {
                                    o = null;
                                }
                            }
                        } catch (e) {
                            if (o) {
                                return o._promise(null, function(t, n) {
                                    n(e);
                                });
                            }
                            return Tt(e);
                        }
                        const s = Cr.bind(null, this, i, l, o, n);
                        if (o) {
                            return o._promise(i, s, "lock");
                        }
                        if (Be.trans) {
                            return St(Be.transless, function() {
                                return r._whenReady(s);
                            });
                        }
                        return this._whenReady(s);
                    }
                    table(e) {
                        if (!d(this._allTables, e)) {
                            throw new ae.InvalidTable(`Table ${e} does not exist`);
                        }
                        return this._allTables[e];
                    }
                }
                return e;
            }();
            const qr = typeof Symbol !== "undefined" && "observable" in Symbol && typeof Symbol === "function" ? Symbol.observable : "@@observable";
            const Ur = function() {
                class e {
                    constructor(e){
                        this._subscribe = e;
                    }
                    subscribe(e, t, n) {
                        return this._subscribe(!e || typeof e === "function" ? {
                            next: e,
                            error: t,
                            complete: n
                        } : e);
                    }
                }
                e.prototype[qr] = function() {
                    return this;
                };
                return e;
            }();
            function Vr(e, t) {
                i(t).forEach((n)=>{
                    const r = e[n] || (e[n] = new $r);
                    Nr(r, t[n]);
                });
                return e;
            }
            function Hr(t) {
                return new Ur(function(r) {
                    const o = U(t);
                    function a(e) {
                        if (o) {
                            ft();
                        }
                        const n = function() {
                            return _t(t, {
                                subscr: e,
                                trans: null
                            });
                        };
                        const r = Be.trans ? St(Be.transless, n) : n();
                        if (o) {
                            r.then(gt, gt);
                        }
                        return r;
                    }
                    let l = false;
                    let s = {};
                    let u = {};
                    const c = {
                        get closed () {
                            return l;
                        },
                        unsubscribe: function() {
                            l = true;
                            Dn.storagemutated.unsubscribe(_);
                        }
                    };
                    if (r.start) {
                        r.start(c);
                    }
                    let d = false;
                    let m = false;
                    function p() {
                        return i(u).some((e)=>s[e] && Mr(s[e], u[e]));
                    }
                    var _ = function(t) {
                        Vr(s, t);
                        if (p()) {
                            f();
                        }
                    };
                    var f = function() {
                        if (!(d || l)) {
                            s = {};
                            const t = {};
                            const o = a(t);
                            if (!m) {
                                Dn(In, _);
                                m = true;
                            }
                            d = true;
                            (e || (e = n("Promise"))).resolve(o).then((e)=>{
                                d = false;
                                if (!l) {
                                    if (p()) {
                                        f();
                                    } else {
                                        s = {};
                                        u = t;
                                        if (r.next) {
                                            r.next(e);
                                        }
                                    }
                                }
                            }, (e)=>{
                                d = false;
                                if (r.error) {
                                    r.error(e);
                                }
                                c.unsubscribe();
                            });
                        }
                    };
                    f();
                    return c;
                });
            }
            let Gr;
            try {
                Gr = {
                    indexedDB: a.indexedDB || a.mozIndexedDB || a.webkitIndexedDB || a.msIndexedDB,
                    IDBKeyRange: a.IDBKeyRange || a.webkitIDBKeyRange
                };
            } catch (e) {
                Gr = {
                    indexedDB: null,
                    IDBKeyRange: null
                };
            }
            const zr = Wr;
            m(zr, r(r({}, se), {
                delete: function(t) {
                    const e = new zr(t, {
                        addons: []
                    });
                    return e.delete();
                },
                exists: function(t) {
                    return new zr(t, {
                        addons: []
                    }).open().then((e)=>{
                        e.close();
                        return true;
                    }).catch("NoSuchDatabaseError", function() {
                        return false;
                    });
                },
                getDatabaseNames: function(t) {
                    try {
                        return dr(zr.dependencies).then(t);
                    } catch (e) {
                        return Tt(new ae.MissingAPI);
                    }
                },
                defineClass: function() {
                    function e(e) {
                        s(this, e);
                    }
                    return e;
                },
                ignoreTransaction: function(t) {
                    if (Be.trans) {
                        return St(Be.transless, t);
                    }
                    return t();
                },
                vip: _r,
                async: function(t) {
                    return function() {
                        try {
                            const e = hr(t.apply(this, arguments));
                            if (!e || typeof e.then !== "function") {
                                return Ve.resolve(e);
                            }
                            return e;
                        } catch (e) {
                            return Tt(e);
                        }
                    };
                },
                spawn: function(t, n, r) {
                    try {
                        const e = hr(t.apply(r, n || []));
                        if (!e || typeof e.then !== "function") {
                            return Ve.resolve(e);
                        }
                        return e;
                    } catch (e) {
                        return Tt(e);
                    }
                },
                currentTransaction: {
                    get: function() {
                        return Be.trans || null;
                    }
                },
                waitFor: function(t, n) {
                    const e = Ve.resolve(typeof t === "function" ? zr.ignoreTransaction(t) : t).timeout(n || 60000);
                    if (Be.trans) {
                        return Be.trans.waitFor(e);
                    }
                    return e;
                },
                Promise: Ve,
                debug: {
                    get: function() {
                        return V;
                    },
                    set: function(t) {
                        H(t, t === "dexie" ? function() {
                            return true;
                        } : Bt);
                    }
                },
                derive: f,
                extend: s,
                props: m,
                override: b,
                Events: jt,
                on: Dn,
                liveQuery: Hr,
                extendObservabilitySet: Vr,
                getByKeyPath: E,
                setByKeyPath: k,
                delByKeyPath: I,
                shallowClone: T,
                deepClone: M,
                getObjectDiff: Rr,
                cmp: on,
                asap: S,
                minKey: Pt,
                addons: [],
                connections: wt,
                errnames: re,
                dependencies: Gr,
                semVer: xt,
                version: xt.split(".").map((e)=>parseInt(e)).reduce((e, t, n)=>e + t / Math.pow(10, n * 2))
            }));
            zr.maxKey = An(zr.dependencies.IDBKeyRange);
            if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
                Dn(In, function(e) {
                    if (!Kr) {
                        let t;
                        if (At) {
                            t = document.createEvent("CustomEvent");
                            t.initCustomEvent(Tn, true, true, e);
                        } else {
                            t = new CustomEvent(Tn, {
                                detail: e
                            });
                        }
                        Kr = true;
                        dispatchEvent(t);
                        Kr = false;
                    }
                });
                addEventListener(Tn, function({ detail: t }) {
                    if (!Kr) {
                        jr(t);
                    }
                });
            }
            function jr(e) {
                const t = Kr;
                try {
                    Kr = true;
                    Dn.storagemutated.fire(e);
                } finally{
                    Kr = t;
                }
            }
            var Kr = false;
            if (typeof BroadcastChannel !== "undefined") {
                const Qr = new BroadcastChannel(Tn);
                Dn(In, function(e) {
                    if (!Kr) {
                        Qr.postMessage(e);
                    }
                });
                Qr.onmessage = function(e) {
                    if (e.data) {
                        jr(e.data);
                    }
                };
            } else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
                Dn(In, function(e) {
                    try {
                        if (!Kr) {
                            if (typeof localStorage !== "undefined") {
                                localStorage.setItem(Tn, JSON.stringify({
                                    trig: Math.random(),
                                    changedParts: e
                                }));
                            }
                            if (typeof self.clients === "object") {
                                o([], self.clients.matchAll({
                                    includeUncontrolled: true
                                }), true).forEach((t)=>t.postMessage({
                                        type: Tn,
                                        changedParts: e
                                    }));
                            }
                        }
                    } catch (e) {}
                });
                if (typeof addEventListener !== "undefined") {
                    addEventListener("storage", function(e) {
                        if (e.key === Tn) {
                            const t = JSON.parse(e.newValue);
                            if (t) {
                                jr(t.changedParts);
                            }
                        }
                    });
                }
                const Xr = self.document && navigator.serviceWorker;
                if (Xr) {
                    Xr.addEventListener("message", Yr);
                }
            }
            function Yr({ data: t }) {
                if (t && t.type === Tn) {
                    jr(t.changedParts);
                }
            }
            Ve.rejectionMapper = le;
            H(V, Bt);
            const Jr = Object.freeze({
                __proto__: null,
                Dexie: Wr,
                liveQuery: Hr,
                default: Wr,
                RangeSet: $r,
                mergeRanges: Nr,
                rangesOverlap: Mr
            });
            r(Wr, Jr, {
                default: Wr
            });
            return Wr;
        });
    }
    let d = false;
    function m() {
        if (!d) {
            d = true;
            c();
        }
        return s.exports;
    }
    function p(e) {
        switch(e){
            case void 0:
                return m();
        }
    }
    a.exports = p;
}, null);