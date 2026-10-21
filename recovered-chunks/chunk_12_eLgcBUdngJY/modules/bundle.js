;
"use strict";
(()=>{
    const e = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    if (typeof e.AbortController !== "undefined") {
        return;
    }
    function t() {
        return typeof Event !== "undefined";
    }
    function n(e) {
        if (t()) {
            return new Event(e);
        }
        return {
            type: e
        };
    }
    function r() {
        if (typeof DOMException !== "undefined") {
            return new DOMException("signal is aborted without reason", "AbortError");
        }
        const e = new Error("signal is aborted without reason");
        e.name = "AbortError";
        return e;
    }
    const o = (()=>{
        function e() {
            this.__listeners = new Map;
        }
        e.prototype = Object.create(Object.prototype);
        e.prototype.addEventListener = function(e, t, n) {
            if (arguments.length < 2) {
                throw new TypeError(`TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only ${arguments.length} present.`);
            }
            const __listeners = this.__listeners;
            const o = e.toString();
            if (!__listeners.has(o)) {
                __listeners.set(o, new Map);
            }
            const a = __listeners.get(o);
            if (!a.has(t)) {
                a.set(t, n);
            }
        };
        e.prototype.removeEventListener = function(e, t, n) {
            if (arguments.length < 2) {
                throw new TypeError(`TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only ${arguments.length} present.`);
            }
            const __listeners = this.__listeners;
            const o = e.toString();
            if (__listeners.has(o)) {
                const a = __listeners.get(o);
                if (a.has(t)) {
                    a.delete(t);
                }
            }
        };
        e.prototype.dispatchEvent = function(e) {
            const n = this;
            if (t() && !(e instanceof Event)) {
                throw new TypeError("Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'.");
            }
            const e_type = e.type;
            const __listeners = this.__listeners;
            const a = __listeners.get(e_type);
            if (a) {
                const i = ()=>{
                    const t = l[0];
                    const r = l[1];
                    try {
                        if (typeof t === "function") {
                            t.call(n, e);
                        } else if (t && typeof t.handleEvent === "function") {
                            t.handleEvent(e);
                        }
                    } catch (error) {
                        setTimeout(()=>{
                            throw error;
                        });
                    }
                    if (r && r.once) {
                        a.delete(t);
                    }
                };
                for (var l of a.entries()){
                    i();
                }
            }
            return true;
        };
        return e;
    })();
    const a = {};
    e.AbortSignal = function() {
        class e extends o {
            constructor(e){
                if (e !== a) {
                    throw new TypeError("Illegal constructor.");
                }
                super();
                this._aborted = false;
                this._reason = undefined;
            }
            throwIfAborted() {
                if (this._aborted) {
                    throw this._reason;
                }
            }
        }
        Object.defineProperty(e.prototype, "onabort", {
            get: function() {
                return this._onabort;
            },
            set: function(t) {
                const _onabort = this._onabort;
                if (_onabort) {
                    this.removeEventListener("abort", _onabort);
                }
                this._onabort = t;
                this.addEventListener("abort", t);
            }
        });
        Object.defineProperty(e.prototype, "aborted", {
            get: function() {
                return this._aborted;
            }
        });
        Object.defineProperty(e.prototype, "reason", {
            get: function() {
                return this._reason;
            }
        });
        return e;
    }();
    e.AbortController = (()=>{
        function e() {
            this._signal = new AbortSignal(a);
        }
        e.prototype = Object.create(Object.prototype);
        Object.defineProperty(e.prototype, "signal", {
            get: function() {
                return this._signal;
            }
        });
        e.prototype.abort = function(e) {
            const signal = this.signal;
            if (!signal.aborted) {
                signal._aborted = true;
                signal._reason = e !== undefined ? e : r();
                signal.dispatchEvent(n("abort"));
            }
        };
        return e;
    })();
})();
"use strict";
if (Array.prototype.at == null) {
    Array.prototype.at = function(t) {
        let e = parseInt(t, 10);
        if (!Number.isInteger(e)) {
            e = 0;
        }
        if (e >= 0 && e < this.length) {
            return this[e];
        }
        return this[this.length + e];
    };
}
"use strict";
(()=>{
    if (!Array.prototype.flat) {
        const e = (n, r)=>{
            if (r < 1) {
                return Array.prototype.slice.call(n);
            }
            return Array.prototype.reduce.call(n, function(t, n) {
                if (Array.isArray(n)) {
                    t.push(...e(n, r - 1));
                } else {
                    t.push(n);
                }
                return t;
            }, []);
        };
        Array.prototype.flat = function(...args) {
            return e(this, isNaN(args[0]) ? 1 : Number(args[0]));
        };
    }
    if (!Array.prototype.flatMap) {
        const t = (t, n)=>{
            const e = [];
            if (typeof n !== "function") {
                const r = new TypeError("Callback function must be callable.");
                r.stack;
                throw r;
            }
            for(let o = 0; o < t.length; o++){
                const a = n.call(t, t[o], o, t);
                if (Array.isArray(a)) {
                    e.push(...a);
                } else {
                    e.push(a);
                }
            }
            return e;
        };
        Array.prototype.flatMap = function(e, ...args) {
            const n = args[0] || this;
            return t(n, e);
        };
    }
})();
(function() {
    "use strict";
    const indexOf = Array.prototype.indexOf;
    if (!Array.prototype.includes) {
        Array.prototype.includes = function(r) {
            "use strict";
            if (r !== undefined && Array.isArray(this) && !Number.isNaN(r)) {
                return indexOf.apply(this, arguments) !== -1;
            }
            const o = Object(this);
            const a = o.length ? t(o.length) : 0;
            if (a === 0) {
                return false;
            }
            const i = arguments.length > 1 ? n(arguments[1]) : 0;
            for(let l = i < 0 ? Math.max(a + i, 0) : i, s = Number.isNaN(r); l < a;){
                const u = o[l];
                if (u === r || s && Number.isNaN(u)) {
                    return true;
                }
                l++;
            }
            return false;
        };
    }
    function t(e) {
        return Math.min(Math.max(n(e), 0), Number.MAX_SAFE_INTEGER);
    }
    function n(e) {
        const t = Number(e);
        if (Number.isFinite(t) && t !== 0) {
            return r(t) * Math.floor(Math.abs(t));
        }
        return t;
    }
    function r(e) {
        if (e >= 0) {
            return 1;
        }
        return -1;
    }
    if (!Array.prototype.values) {
        class o {
            constructor(e){
                this.$1 = undefined;
                this.$2 = 0;
                if (e == null) {
                    throw new TypeError("Cannot convert undefined or null to object");
                }
                this.$1 = Object(e);
            }
            next() {
                if (this.$1 == null || this.$2 >= this.$1.length) {
                    this.$1 = undefined;
                    return {
                        value: undefined,
                        done: true
                    };
                }
                const e = this.$1[this.$2];
                this.$2++;
                return {
                    value: e,
                    done: false
                };
            }
            [typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]() {
                return this;
            }
        }
        Array.prototype.values = function() {
            return new o(this);
        };
    }
    if (!Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
        Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = Array.prototype.values;
    }
})();
"use strict";
if (Array.prototype.findLast == null) {
    Array.prototype.findLast = function(t, n) {
        const e = this;
        for(let r = e.length - 1; r >= 0; r--){
            const o = e[r];
            const a = t.call(n, o, r, e);
            if (a) {
                return o;
            }
        }
    };
}
"use strict";
if (Array.prototype.findLastIndex == null) {
    Array.prototype.findLastIndex = function(t, n) {
        const e = this;
        for(let r = e.length - 1; r >= 0; r--){
            const o = e[r];
            const a = t.call(n, o, r, e);
            if (a) {
                return r;
            }
        }
        return -1;
    };
}
"use strict";
if (Array.prototype.toReversed == null) {
    Array.prototype.toReversed = function() {
        return this.slice().reverse();
    };
}
"use strict";
if (Array.prototype.toSorted == null) {
    Array.prototype.toSorted = function(t) {
        return this.slice().sort(t);
    };
}
"use strict";
if (Array.prototype.toSpliced == null) {
    Array.prototype.toSpliced = function() {
        const e = this.slice();
        e.splice(...arguments);
        return e;
    };
}
"use strict";
if (Array.prototype.with == null) {
    const toIntegerOrInfinity = function(t) {
        if (Number.isNaN(t) || t === 0) {
            return 0;
        }
        if (t === Infinity || t === -Infinity) {
            return t;
        }
        return Math.trunc(t);
    };
    Array.prototype.with = function(e, n) {
        const length = this.length;
        const o = toIntegerOrInfinity(e);
        let a;
        if (o >= 0) {
            a = o;
        } else {
            a = length + o;
        }
        if (a >= length || a < 0) {
            const i = new RangeError("Invalid index");
            i.stack;
            throw i;
        }
        const l = this.slice();
        l[a] = n;
        return l;
    };
}
((e)=>{
    e.__t = function(e) {
        return e[0];
    };
    e.__w = function(e) {
        return e;
    };
})(typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof this !== "undefined" ? this : typeof self !== "undefined" ? self : {});
((e)=>{
    let t = {};
    const n = (t, n)=>{
        if (!t && !n) {
            return null;
        }
        const e = {};
        if (typeof t !== "undefined") {
            e.type = t;
        }
        if (typeof n !== "undefined") {
            e.signature = n;
        }
        return e;
    };
    const r = (t, r)=>n(t && /^[A-Z]/.test(t) ? t : undefined, r && (r.params && r.params.length || r.returns) ? `function(${r.params ? r.params.map((e)=>{
            if (/\?/.test(e)) {
                return `?${e.replace("?", "")}`;
            }
            return e;
        }).join(",") : ""})${r.returns ? `:${r.returns}` : ""}` : undefined);
    const o = function(t, n, r) {
        return t;
    };
    const a = function(t, n, o) {
        if ("typechecks" in __transform_includes) {
            const e = r(n ? n.name : undefined, o);
            if (e) {
                __w(t, e);
            }
        }
        return t;
    };
    const i = function(t, n, r) {
        return r.apply(t, n);
    };
    const l = function(n, r, o, a, i) {
        if (i) {
            if (!i.callId) {
                i.callId = `${i.module}:${i.line || 0}:${i.column || 0}`;
            }
            const e = i.callId;
            t[e] = (t[e] || 0) + 1;
        }
        return o.apply(n, r);
    };
    if (typeof __transform_includes === "undefined") {
        e.__annotator = o;
        e.__bodyWrapper = i;
    } else {
        e.__annotator = a;
        if ("codeusage" in __transform_includes) {
            e.__annotator = o;
            e.__bodyWrapper = l;
            e.__bodyWrapper.getCodeUsage = function() {
                return t;
            };
            e.__bodyWrapper.clearCodeUsage = function() {
                t = {};
            };
        } else {
            e.__bodyWrapper = i;
        }
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof this !== "undefined" ? this : typeof self !== "undefined" ? self : {});
self.__DEV__ = self.__DEV__ || 0;
self.emptyFunction = function() {};
(function(e, t) {
    const KIND_KEYS = "keys";
    const KIND_VALUES = "values";
    const KIND_ENTRIES = "entries";
    const a = (()=>{
        const e = l(Array);
        let a;
        if (!e) {
            a = (()=>{
                "use strict";
                function e(e, t) {
                    this.$1 = e;
                    this.$2 = t;
                    this.$3 = 0;
                }
                const e_prototype = e.prototype;
                e_prototype.next = function() {
                    if (this.$1 == null) {
                        return {
                            value: t,
                            done: true
                        };
                    }
                    const e = this.$1;
                    const length = this.$1.length;
                    const i = this.$3;
                    const l = this.$2;
                    if (i >= length) {
                        this.$1 = t;
                        return {
                            value: t,
                            done: true
                        };
                    }
                    this.$3 = i + 1;
                    if (l === KIND_KEYS) {
                        return {
                            value: i,
                            done: false
                        };
                    }
                    if (l === KIND_VALUES) {
                        return {
                            value: e[i],
                            done: false
                        };
                    }
                    if (l === KIND_ENTRIES) {
                        return {
                            value: [
                                i,
                                e[i]
                            ],
                            done: false
                        };
                    }
                };
                e_prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this;
                };
                return e;
            })();
        }
        return {
            keys: e ? function(e) {
                return e.keys();
            } : function(e) {
                return new a(e, KIND_KEYS);
            },
            values: e ? function(e) {
                return e.values();
            } : function(e) {
                return new a(e, KIND_VALUES);
            },
            entries: e ? function(e) {
                return e.entries();
            } : function(e) {
                return new a(e, KIND_ENTRIES);
            }
        };
    })();
    const i = (()=>{
        const e = l(String);
        let n;
        if (!e) {
            n = (()=>{
                "use strict";
                function e(e) {
                    this.$1 = e;
                    this.$2 = 0;
                }
                const e_prototype = e.prototype;
                e_prototype.next = function() {
                    if (this.$1 == null) {
                        return {
                            value: t,
                            done: true
                        };
                    }
                    const e = this.$2;
                    const n = this.$1;
                    const n_length = n.length;
                    if (e >= n_length) {
                        this.$1 = t;
                        return {
                            value: t,
                            done: true
                        };
                    }
                    let o;
                    const a = n.charCodeAt(e);
                    if (a < 55296 || a > 56319 || e + 1 === n_length) {
                        o = n[e];
                    } else {
                        const i = n.charCodeAt(e + 1);
                        if (i < 56320 || i > 57343) {
                            o = n[e];
                        } else {
                            o = n[e] + n[e + 1];
                        }
                    }
                    this.$2 = e + o.length;
                    return {
                        value: o,
                        done: false
                    };
                };
                e_prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this;
                };
                return e;
            })();
        }
        return {
            keys: function() {
                throw TypeError("Strings default iterator doesn't implement keys.");
            },
            values: e ? function(e) {
                return e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
            } : function(e) {
                return new n(e);
            },
            entries: function() {
                throw TypeError("Strings default iterator doesn't implement entries.");
            }
        };
    })();
    function l(e) {
        return typeof e.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof e.prototype.values === "function" && typeof e.prototype.keys === "function" && typeof e.prototype.entries === "function";
    }
    class s {
        constructor(e, t){
            this.$1 = e;
            this.$2 = t;
            this.$3 = Object.keys(e);
            this.$4 = 0;
        }
        next() {
            const length = this.$3.length;
            const a = this.$4;
            const i = this.$2;
            const l = this.$3[a];
            if (a >= length) {
                this.$1 = t;
                return {
                    value: t,
                    done: true
                };
            }
            this.$4 = a + 1;
            if (i === KIND_KEYS) {
                return {
                    value: l,
                    done: false
                };
            }
            if (i === KIND_VALUES) {
                return {
                    value: this.$1[l],
                    done: false
                };
            }
            if (i === KIND_ENTRIES) {
                return {
                    value: [
                        l,
                        this.$1[l]
                    ],
                    done: false
                };
            }
        }
        [typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]() {
            return this;
        }
    }
    const u = {
        keys: function(t) {
            return new s(t, KIND_KEYS);
        },
        values: function(t) {
            return new s(t, KIND_VALUES);
        },
        entries: function(t) {
            return new s(t, KIND_ENTRIES);
        }
    };
    function c(e, t) {
        if (typeof e === "string") {
            return i[t || KIND_VALUES](e);
        }
        if (Array.isArray(e)) {
            return a[t || KIND_VALUES](e);
        }
        if (e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
            return e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        }
        return u[t || KIND_ENTRIES](e);
    }
    Object.assign(c, {
        KIND_KEYS,
        KIND_VALUES,
        KIND_ENTRIES,
        keys: function(t) {
            return c(t, KIND_KEYS);
        },
        values: function(t) {
            return c(t, KIND_VALUES);
        },
        entries: function(t) {
            return c(t, KIND_ENTRIES);
        },
        generic: u.entries
    });
    e.FB_enumerate = c;
})(typeof global === "object" ? global : typeof this === "object" ? this : typeof window === "object" ? window : typeof self === "object" ? self : {});
"use strict";
(()=>{
    if (typeof Element === "undefined" || Element.prototype.scroll) {
        return;
    }
    function e(e, t, n = false) {
        if (t.length !== 0) {
            let r;
            let o;
            if (t.length === 1) {
                const a = t[0];
                if (a == null) {
                    return;
                }
                r = a.left;
                o = a.top;
                if (r !== undefined) {
                    r = Number(r) || 0;
                }
                if (o !== undefined) {
                    o = Number(o) || 0;
                }
            } else {
                r = t[0];
                o = t[1];
                r = Number(r) || 0;
                o = Number(o) || 0;
            }
            if (r !== undefined) {
                e.scrollLeft = (n ? e.scrollLeft : 0) + r;
            }
            if (o !== undefined) {
                e.scrollTop = (n ? e.scrollTop : 0) + o;
            }
        }
    }
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        e(this, arguments);
    };
    Element.prototype.scrollBy = function() {
        e(this, arguments, true);
    };
})();
"use strict";
function* generator() {
    yield 1;
}
function getIterables() {
    return [
        generator(),
        [].values(),
        [].keys(),
        [].entries(),
        new Uint8Array([]).values(),
        new Uint8Array([]).keys(),
        new Uint8Array([]).entries(),
        new Map().values(),
        new Map().keys(),
        new Map().entries(),
        new Set().values(),
        new Set().keys(),
        new Set().entries()
    ];
}
function polyfillIteratorFunctions() {
    const e = new Set;
    getIterables().forEach((t)=>{
        e.add(Object.getPrototypeOf(t));
    });
    e.forEach((e)=>{
        if (typeof e.drop !== "function") {
            e.drop = function(t) {
                for(let e = 0; e < t; e++){
                    this.next();
                }
                return this;
            };
        }
        if (typeof e.every !== "function") {
            e.every = function(t) {
                let e = 0;
                for (const n of this){
                    if (!t(n, e++)) {
                        return false;
                    }
                }
                return true;
            };
        }
        if (typeof e.filter !== "function") {
            e.filter = function*(t) {
                let e = 0;
                for (const n of this){
                    if (t(n, e++)) {
                        yield n;
                    }
                }
            };
        }
        if (typeof e.find !== "function") {
            e.find = function(t) {
                let e = 0;
                for (const n of this){
                    if (t(n, e++)) {
                        return n;
                    }
                }
            };
        }
        if (typeof e.flatMap !== "function") {
            e.flatMap = function*(t) {
                let e = 0;
                for (const n of this){
                    let r = t(n, e++);
                    if (!("next" in r)) {
                        r = r[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                    }
                    for(let o = r.next(); !o.done;){
                        yield o.value;
                        o = r.next();
                    }
                }
            };
        }
        if (typeof e.forEach !== "function") {
            e.forEach = function(t) {
                let e = 0;
                for (const n of this){
                    t(n, e++);
                }
            };
        }
        if (typeof e.map !== "function") {
            e.map = function*(t) {
                let e = 0;
                for (const n of this){
                    yield t(n, e++);
                }
            };
        }
        if (typeof e.reduce !== "function") {
            e.reduce = function(t, n) {
                let e = n;
                let r = 0;
                for (const o of this){
                    e = t(e, o, r++);
                }
                return e;
            };
        }
        if (typeof e.some !== "function") {
            e.some = function(t) {
                let e = 0;
                for (const n of this){
                    if (t(n, e++)) {
                        return true;
                    }
                }
                return false;
            };
        }
        if (typeof e.take !== "function") {
            e.take = function*(t) {
                let e = 0;
                for (const n of this){
                    if (e++ >= t) {
                        break;
                    }
                    yield n;
                }
            };
        }
        if (typeof e.toArray !== "function") {
            e.toArray = function() {
                return Array.from(this);
            };
        }
    });
}
polyfillIteratorFunctions();
(()=>{
    function e() {
        if (typeof JSON !== "object" || typeof JSON.stringify !== "function") {
            return false;
        }
        if (typeof navigator === "undefined" || !navigator.userAgent) {
            return true;
        }
        const navigator_userAgent = navigator.userAgent;
        let t;
        if (navigator_userAgent.indexOf("Firefox/") > -1) {
            t = navigator_userAgent.match(/Firefox\/([0-9]+)/);
            return t == null || !(parseInt(t[1], 10) >= 62);
        }
        if (navigator_userAgent.indexOf("Edg/") > -1) {
            t = navigator_userAgent.match(/Edg\/([0-9]+)/);
            return t == null || !(parseInt(t[1], 10) >= 79);
        }
        if (navigator_userAgent.indexOf("Chrome/") > -1) {
            t = navigator_userAgent.match(/Chrome\/([0-9]+)/);
            return t == null || !(parseInt(t[1], 10) >= 66);
        }
        if (navigator_userAgent.indexOf("CriOS/") > -1) {
            t = navigator_userAgent.match(/CriOS\/([0-9]+)/);
            return t == null || !(parseInt(t[1], 10) >= 66);
        }
        if (navigator_userAgent.indexOf("Safari/") > -1 && navigator_userAgent.indexOf("Version/") > -1) {
            t = navigator_userAgent.match(/Version\/([0-9]+)/);
            return t == null || !(parseInt(t[1], 10) >= 12);
        }
        return true;
    }
    function t() {
        return JSON.stringify([
            "\u2028\u2029"
        ]) === '["\\u2028\\u2029"]';
    }
    if (e() && !t()) {
        JSON.stringify = ((e)=>{
            const t = /\u2028/g;
            const n = /\u2029/g;
            return function(o, a, i) {
                let r = e.call(this, o, a, i);
                if (r) {
                    if (r.indexOf("\u2028") > -1) {
                        r = r.replace(t, "\\u2028");
                    }
                    if (r.indexOf("\u2029") > -1) {
                        r = r.replace(n, "\\u2029");
                    }
                }
                return r;
            };
        })(JSON.stringify);
    }
})();
"use strict";
if (Map.prototype.getOrInsert == null) {
    Object.defineProperty(Map.prototype, "getOrInsert", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: function(t, n) {
            if (this.has(t)) {
                return this.get(t);
            }
            this.set(t, n);
            return n;
        }
    });
}
"use strict";
if (Map.prototype.getOrInsertComputed == null) {
    Object.defineProperty(Map.prototype, "getOrInsertComputed", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: function(t, n) {
            if (this.has(t)) {
                return this.get(t);
            }
            const e = n(t);
            this.set(t, e);
            return e;
        }
    });
}
(()=>{
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    Object.entries = function(t) {
        if (t == null) {
            const n = new TypeError("Object.entries called on non-object");
            n.stack;
            throw n;
        }
        const r = [];
        for(const o in t){
            if (hasOwnProperty.call(t, o)) {
                r.push([
                    o,
                    t[o]
                ]);
            }
        }
        return r;
    };
    if (typeof Object.fromEntries !== "function") {
        Object.fromEntries = function(t) {
            const e = {};
            for (const [r, o] of t){
                e[r] = o;
            }
            return e;
        };
    }
    Object.values = function(t) {
        if (t == null) {
            const n = new TypeError("Object.values called on non-object");
            n.stack;
            throw n;
        }
        const r = [];
        for(const o in t){
            if (hasOwnProperty.call(t, o)) {
                r.push(t[o]);
            }
        }
        return r;
    };
})();
if (!Object.hasOwn) {
    Object.hasOwn = function(e, t) {
        if (e == null) {
            const n = new TypeError("Cannot convert undefined or null to object");
            n.stack;
            throw n;
        }
        return Object.getOwnPropertyDescriptor(Object(e), t) !== undefined;
    };
}
"use strict";
if (Set.prototype.difference == null) {
    Set.prototype.difference = function(t) {
        const e = new Set(this);
        for (const n of t){
            if (e.has(n)) {
                e.delete(n);
            }
        }
        return e;
    };
}
"use strict";
if (!("intersection" in Set.prototype)) {
    Object.defineProperty(Set.prototype, "intersection", {
        configurable: true,
        enumerable: true,
        value: function(t) {
            const e = new Set;
            for (const n of this){
                if (t.has(n)) {
                    e.add(n);
                }
            }
            return e;
        },
        writable: true
    });
}
"use strict";
if (!("isDisjointFrom" in Set.prototype)) {
    Object.defineProperty(Set.prototype, "isDisjointFrom", {
        configurable: true,
        enumerable: true,
        value: function(t) {
            if (this.size <= t.size) {
                for (const e of this){
                    if (t.has(e)) {
                        return false;
                    }
                }
            } else {
                for (const n of t){
                    if (this.has(n)) {
                        return false;
                    }
                }
            }
            return true;
        },
        writable: true
    });
}
"use strict";
if (!("isSubsetOf" in Set.prototype)) {
    Object.defineProperty(Set.prototype, "isSubsetOf", {
        configurable: true,
        enumerable: true,
        value: function(t) {
            if (this.size > t.size) {
                return false;
            }
            for (const e of this){
                if (!t.has(e)) {
                    return false;
                }
            }
            return true;
        },
        writable: true
    });
}
"use strict";
if (!("isSupersetOf" in Set.prototype)) {
    Object.defineProperty(Set.prototype, "isSupersetOf", {
        configurable: true,
        enumerable: true,
        value: function(t) {
            if (this.size < t.size) {
                return false;
            }
            for (const e of t){
                if (!this.has(e)) {
                    return false;
                }
            }
            return true;
        },
        writable: true
    });
}
"use strict";
if (Set.prototype.symmetricDifference == null) {
    Set.prototype.symmetricDifference = function(t) {
        const e = new Set(this);
        for (const n of t){
            if (e.has(n)) {
                e.delete(n);
            } else {
                e.add(n);
            }
        }
        return e;
    };
}
if (!String.prototype.contains) {
    String.prototype.contains = String.prototype.includes;
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function(e, t) {
        e = e >> 0;
        t = String(t || " ");
        if (this.length > e) {
            return String(this);
        }
        e = e - this.length;
        if (e > t.length) {
            t += t.repeat(e / t.length);
        }
        return t.slice(0, e) + String(this);
    };
}
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function(e, t) {
        e = e >> 0;
        t = String(t || " ");
        if (this.length > e) {
            return String(this);
        }
        e = e - this.length;
        if (e > t.length) {
            t += t.repeat(e / t.length);
        }
        return String(this) + t.slice(0, e);
    };
}
if (!String.prototype.matchAll) {
    const MAX_CALLS_TO_EXEC = 250;
    String.prototype.matchAll = function(e) {
        if (!e.global) {
            const n = new TypeError("String.prototype.matchAll called with a non-global RegExp argument");
            n.stack;
            throw n;
        }
        let a;
        for(var r = String(this), o = [], i = 0; (a = e.exec(r)) && i++ < MAX_CALLS_TO_EXEC;){
            o.push(a);
        }
        return o;
    };
}
"use strict";
if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function(e, t) {
        const n = String(this);
        if (Object.prototype.toString.call(e) === "[object RegExp]") {
            if (!e.global) {
                const r = new TypeError("String.prototype.replaceAll called with a non-global RegExp argument");
                r.stack;
                throw r;
            }
            return n.replace(e, t);
        }
        const o = new RegExp(String(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
        return n.replace(o, t);
    };
}
if (!String.prototype.trimLeft) {
    String.prototype.trimLeft = function() {
        return this.replace(/^\s+/, "");
    };
}
if (!String.prototype.trimRight) {
    String.prototype.trimRight = function() {
        return this.replace(/\s+$/, "");
    };
}
"use strict";
((e)=>{
    function t() {
        return !(typeof URL !== "function" || typeof URL.createObjectURL !== "function" || typeof URL.revokeObjectURL !== "function" || typeof File !== "function" || typeof Blob !== "function");
    }
    if (t()) {
        const n = {};
        const { createObjectURL, revokeObjectURL } = URL;
        URL.createObjectURL = function(e) {
            let t = null;
            let size = 0;
            if (e instanceof File) {
                t = "File";
                size = e.size;
            } else if (e instanceof Blob) {
                t = "Blob";
                size = e.size;
            } else if (typeof MediaSource === "function" && e instanceof MediaSource) {
                t = "MediaSource";
                size = 0;
            }
            const a = createObjectURL.call(URL, e);
            if (t !== null) {
                n[a] = {
                    type: t,
                    size
                };
            }
            return a;
        };
        URL.revokeObjectURL = function(e) {
            revokeObjectURL.call(URL, e);
            delete n[e];
        };
        URL._fbRegisteredObjectURL = function() {
            return Object.values(n);
        };
    }
})(this);
"use strict";
if (typeof WeakMap === "function" && WeakMap.prototype.getOrInsert == null) {
    Object.defineProperty(WeakMap.prototype, "getOrInsert", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: function(t, n) {
            if (this.has(t)) {
                return this.get(t);
            }
            this.set(t, n);
            return n;
        }
    });
}
"use strict";
if (typeof WeakMap === "function" && WeakMap.prototype.getOrInsertComputed == null) {
    Object.defineProperty(WeakMap.prototype, "getOrInsertComputed", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: function(t, n) {
            if (this.has(t)) {
                return this.get(t);
            }
            const e = n(t);
            this.set(t, e);
            return e;
        }
    });
}
(function(e) {
    const t = e.babelHelpers = {};
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    if (typeof Symbol !== "undefined" && !(typeof Symbol !== "function" || Symbol.asyncIterator)) {
        Symbol.asyncIterator = Symbol("Symbol.asyncIterator");
    }
    function r(e) {
        this.wrapped = e;
    }
    class o {
        constructor(e){
            let t;
            let n;
            function o(e, arg) {
                return new Promise((resolve, reject)=>{
                    const l = {
                        key: e,
                        arg,
                        resolve,
                        reject,
                        next: null
                    };
                    if (n) {
                        n = n.next = l;
                    } else {
                        n = l;
                        t = l;
                        a(e, arg);
                    }
                });
            }
            function a(t, n) {
                try {
                    const o = e[t](n);
                    const l = o.value;
                    const s = l instanceof r;
                    Promise.resolve(s ? l.wrapped : l).then((e)=>{
                        if (s) {
                            a(t === "return" ? "return" : "next", e);
                            return;
                        }
                        i(o.done ? "return" : "normal", e);
                    }, (e)=>{
                        a("throw", e);
                    });
                } catch (error) {
                    i("throw", error);
                }
            }
            function i(e, r) {
                switch(e){
                    case "return":
                        t.resolve({
                            value: r,
                            done: true
                        });
                        break;
                    case "throw":
                        t.reject(r);
                        break;
                    default:
                        t.resolve({
                            value: r,
                            done: false
                        });
                        break;
                }
                t = t.next;
                if (t) {
                    a(t.key, t.arg);
                } else {
                    n = null;
                }
            }
            this._invoke = o;
            if (typeof e.return !== "function") {
                this.return = undefined;
            }
        }
        next(e) {
            return this._invoke("next", e);
        }
        throw(e) {
            return this._invoke("throw", e);
        }
        return(e) {
            return this._invoke("return", e);
        }
    }
    if (typeof Symbol === "function" && (typeof Symbol !== "function" || Symbol.asyncIterator)) {
        o.prototype[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"] = function() {
            return this;
        };
    }
    t.createClass = (()=>{
        function e(e, t) {
            for (const r of t){
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                    r.writable = true;
                }
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) {
                e(t.prototype, n);
            }
            if (r) {
                e(t, r);
            }
            return t;
        };
    })();
    t.inheritsLoose = function(e, t) {
        Object.assign(e, t);
        e.prototype = Object.create(t && t.prototype);
        e.prototype.constructor = e;
        e.__superConstructor__ = t;
        return t;
    };
    t.wrapNativeSuper = function(e) {
        const n = typeof Map === "function" ? new Map : undefined;
        t.wrapNativeSuper = function(e) {
            if (e === null) {
                return null;
            }
            if (typeof e !== "function") {
                const r = new TypeError("Super expression must either be null or a function");
                r.stack;
                throw r;
            }
            if (n !== undefined) {
                if (n.has(e)) {
                    return n.get(e);
                }
                n.set(e, o);
            }
            t.inheritsLoose(o, e);
            function o() {
                e.apply(this, arguments);
            }
            return o;
        };
        return t.wrapNativeSuper(e);
    };
    t.assertThisInitialized = function(e) {
        if (e === undefined) {
            const t = new ReferenceError("this hasn't been initialised - super() hasn't been called");
            t.stack;
            throw t;
        }
        return e;
    };
    t._extends = Object.assign;
    t.extends = t._extends;
    t.construct = function(e, t) {
        return new (Function.prototype.bind.apply(e, [
            null
        ].concat(t)));
    };
    t.objectWithoutPropertiesLoose = function(e, t) {
        const r = {};
        for(const o in e){
            if (!(!hasOwnProperty.call(e, o) || t.indexOf(o) >= 0)) {
                r[o] = e[o];
            }
        }
        return r;
    };
    t.taggedTemplateLiteralLoose = function(e, t) {
        if (!t) {
            t = e.slice(0);
        }
        e.raw = t;
        return e;
    };
    t.bind = Function.prototype.bind;
    t.wrapAsyncGenerator = function(e) {
        return function() {
            return new o(e.apply(this, arguments));
        };
    };
    t.awaitAsyncGenerator = function(e) {
        return new r(e);
    };
    t.asyncIterator = function(e) {
        let t;
        if (typeof Symbol !== "undefined" && ((typeof Symbol !== "function" || Symbol.asyncIterator) && (t = e[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"], t != null) || (typeof Symbol !== "function" || Symbol.iterator) && (t = e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"], t != null))) {
            return t.call(e);
        }
        const n = new TypeError("Object is not async iterable");
        n.stack;
        throw n;
    };
    t.asyncGeneratorDelegate = function(e, t) {
        const n = {};
        let r = false;
        function o(n, o) {
            r = true;
            o = new Promise((resolve)=>{
                resolve(e[n](o));
            });
            return {
                done: false,
                value: t(o)
            };
        }
        if (typeof Symbol === "function" && (typeof Symbol !== "function" || Symbol.iterator)) {
            n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this;
            };
        }
        n.next = function(e) {
            if (r) {
                r = false;
                return e;
            }
            return o("next", e);
        };
        if (typeof e.throw === "function") {
            n.throw = function(e) {
                if (r) {
                    r = false;
                    throw e;
                }
                return o("throw", e);
            };
        }
        if (typeof e.return === "function") {
            n.return = function(e) {
                if (r) {
                    r = false;
                    return e;
                }
                return o("return", e);
            };
        }
        return n;
    };
    t.arrayLikeToArray = function(t, n) {
        if (n == null || n > t.length) {
            n = t.length;
        }
        for(var e = 0, r = new Array(n); e < n; e++){
            r[e] = t[e];
        }
        return r;
    };
})(typeof global === "undefined" ? self : global);
((t)=>{
    if (t.require != null) {
        return;
    }
    let e = null;
    let n = null;
    let r = [];
    const modulesMap = {};
    const a = {};
    let i = 0;
    let l = 0;
    let s = 0;
    let u = 0;
    let c = 0;
    let numDefined = 0;
    let numUsed = 0;
    let numUndefinedUsed = 0;
    let numUndefinedUnused = 0;
    function f(e) {
        if (!(e.dependencies === undefined && !e.wasUsed)) {
            if (e.wasUsed) {
                numUndefinedUsed++;
            } else {
                numUndefinedUnused++;
            }
        }
    }
    function g(e) {
        if (!e.wasUsed) {
            e.wasUsed = true;
            numUsed++;
        }
    }
    const h = 1;
    const y = 2;
    const C = 4;
    const b = 8;
    const v = 16;
    const S = 32;
    const R = 64;
    const L = 128;
    const E = 256;
    const k = {};
    const I = {};
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const toString = Object.prototype.toString;
    function debugUnresolvedDependencies(e) {
        let r;
        let a;
        let i;
        let l;
        for(var t = Array.prototype.slice.call(e), n = {}; t.length;){
            a = t.shift();
            if (!n[a] && (n[a] = true, i = modulesMap[a], !(!i || Le(i)) && i.dependencies)) {
                for(r = 0; r < i.dependencies.length; r++){
                    l = i.dependencies[r];
                    if (!Le(l)) {
                        t.push(l.id);
                    }
                }
            }
        }
        for(a in n){
            if (hasOwnProperty.call(n, a)) {
                t.push(a);
            }
        }
        const s = [];
        for(r = 0; r < t.length; r++){
            a = t[r];
            let u = a;
            i = modulesMap[a];
            const c = i ? i.dependencies : null;
            if (!i || !c) {
                u += " is not defined";
            } else if (Le(i)) {
                u += " is ready";
            } else {
                const d = [];
                for(let m = 0; m < c.length; m++){
                    l = c[m];
                    if (!Le(l)) {
                        d.push(l.id);
                    }
                }
                u += ` is waiting for ${d.join(", ")}`;
            }
            s.push(u);
        }
        return s.join("\n");
    }
    function $(e, ...r) {
        const t = new Error(e);
        t.name = "ModuleError";
        t.messageFormat = e;
        t.messageParams = r.map((e)=>String(e));
        t.taalOpcodes = [
            2,
            2
        ];
        return t;
    }
    const P = t.Env || {};
    const N = !!P.gk_require_when_ready_in_order;
    const M = !!P.clear_js_factory_after_used;
    const w = !!P.profile_require_factories;
    const A = !!P.fbmodule_runtime_iterative_resolve;
    const F = A ? ne : te;
    const O = A ? we : xe;
    const B = t.performance || {};
    let W;
    if (B.now && B.timing && B.timing.navigationStart) {
        const q = B.timing.navigationStart;
        W = function() {
            return B.now() + q;
        };
    } else {
        W = function() {
            return Date.now();
        };
    }
    let U = 0;
    function V(e) {
        U++;
        let t = modulesMap[e];
        if (!t || t.exports == null && !t.factoryFinished) {
            Q(e);
            t = modulesMap[e];
        }
        if (t && t.refcount-- === 1) {
            f(t);
            modulesMap[e] = null;
        }
        return t;
    }
    function H(e) {
        if (e.defaultExport !== I) {
            return e.defaultExport;
        }
        return e.exports;
    }
    function G(e) {
        const t = V(e);
        if (t) {
            return H(t);
        }
    }
    function z(e) {
        const t = V(e);
        if (t) {
            if (t.defaultExport !== I) {
                return t.defaultExport;
            }
            return null;
        }
    }
    function j(e) {
        const t = V(e);
        if (t) {
            return t.exports;
        }
    }
    function K(e) {
        if (e.factoryLength === -1 && e.factory != null) {
            e.factoryLength = e.factory.length;
        }
        return e.factoryLength;
    }
    function Q(r) {
        const t_ErrorGuard = t.ErrorGuard;
        if (t_ErrorGuard && !t_ErrorGuard.inGuard()) {
            return t_ErrorGuard.applyWithGuard(Q, null, [
                r
            ]);
        }
        const l = modulesMap[r];
        if (!l) {
            const s = 'Requiring unknown module "%s"';
            throw $(s, r);
        }
        t.__onBeforeModuleFactory?.(l);
        if (l.hasError) {
            if (l.error == null) {
                throw $('Requiring module "%s" which threw an exception', r);
            }
            const d = X(l.error);
            Y(d, {
                messageFormat: 'Requiring module "%s" which threw an exception',
                messageParams: [
                    r
                ]
            });
            throw d;
        }
        if (!Le(l)) {
            throw $('Requiring module "%s" with unresolved dependencies: %s', r, debugUnresolvedDependencies([
                r
            ]));
        }
        F(l);
        g(l);
        const m = l.exports = {};
        let l_factory = l.factory;
        const l_dependencies = l.dependencies;
        if (l_factory != null && toString.call(l_factory) === "[object Function]" && l_dependencies != null) {
            const f = l_dependencies.length;
            let h;
            try {
                try {
                    Fe(l);
                } catch (error) {
                    J(error, r);
                }
                let v = [];
                let L = f;
                if (l.special & b) {
                    const E = l.special & S ? n : e;
                    v = E.slice(0);
                    v[E.length - 2] = l;
                    v[E.length - 1] = m;
                    L += v.length;
                }
                if (l.special & y) {
                    const I = K(l);
                    L = Math.min(f + v.length, I);
                }
                for(let P = 0; P < f; P++){
                    const N = l_dependencies[P];
                    if (v.length < L) {
                        v.push(G.call(null, N.id));
                    }
                }
                let A;
                if (w) {
                    A = W();
                }
                a[l.id].factoryRun = true;
                try {
                    const O = l.context ?? t;
                    h = l_factory.apply(O, v);
                } catch (error) {
                    J(error, r);
                } finally{
                    if (w) {
                        const B = W();
                        const q = a[l.id];
                        q.factoryTime = B - (A || 0);
                        q.factoryEnd = B;
                        q.factoryStart = A;
                    }
                }
            } catch (error) {
                l.hasError = true;
                l.error = error;
                l.exports = null;
                throw error;
            } finally{}
            if (h != null && (typeof h === "object" || typeof h === "function")) {
                l.exports = h;
            }
            let U;
            if (l.special & R) {
                if (l.exports != null && hasOwnProperty.call(l.exports, "default")) {
                    l.defaultExport = U = l.exports.default;
                }
            } else {
                l.defaultExport = U = l.exports;
            }
            if (typeof U === "function") {
                const V = U.__superConstructor__;
                if (U.displayName == null || V && V.displayName === U.displayName) {
                    try {
                        U.displayName = `${U.name || "(anonymous)"} [from ${r}]`;
                    } catch (e) {}
                }
            }
            l.factoryFinished = true;
            if (M) {
                l.factory = null;
                l_factory = undefined;
            }
        } else {
            l.exports = l_factory;
        }
        const H = `__isRequired__${r}`;
        const z = modulesMap[H];
        if (z && !Le(z)) {
            _e(H, k);
        }
        t.__onAfterModuleFactory?.(l);
    }
    function X(e) {
        if (t.getErrorSafe != null) {
            return t.getErrorSafe(e);
        }
        if (e != null && typeof e === "object" && typeof e.message === "string") {
            return e;
        }
        return $("Non-error thrown: %s", String(e));
    }
    function Y(e, n) {
        const t_ErrorSerializer = t.ErrorSerializer;
        if (t_ErrorSerializer) {
            t_ErrorSerializer.aggregateError(e, n);
        }
    }
    function J(error, t) {
        const n = X(error);
        Y(n, {
            messageFormat: 'Module "%s"',
            messageParams: [
                t
            ],
            forcedKey: t.startsWith("__") ? null : t
        });
        throw n;
    }
    function Z() {
        return U;
    }
    function ee() {
        const e = {};
        for(const t in a){
            if (Object.prototype.hasOwnProperty.call(a, t)) {
                e[t] = a[t];
            }
        }
        return e;
    }
    function te(e) {
        if (!e.nonJSDeps) {
            e.nonJSDeps = true;
            if (e.dependencies) {
                e.dependencies.forEach(te);
            }
        }
    }
    function ne(e) {
        if (!e.nonJSDeps && (e.nonJSDeps = true, !(e.dependencies == null || e.dependencies.length === 0))) {
            for(let t = [
                e
            ], n = t.pop(); n != null; n = t.pop()){
                const r = n.dependencies;
                if (r != null) {
                    for (const a of r){
                        if (!a.nonJSDeps) {
                            a.nonJSDeps = true;
                            t.push(a);
                        }
                    }
                }
            }
        }
    }
    const re = t != null && t.document != null && "createElement" in t.document;
    const oe = typeof WorkerGlobalScope === "function";
    const ae = re || oe;
    const ie = P.use_fbt_virtual_modules === true && ae;
    const le = "$fbt_virtual";
    const se = {};
    let ue = null;
    const ce = 60000;
    function de(e) {
        if (!(e in modulesMap) && !(e in se)) {
            se[e] = W();
        }
        if (ue == null || ue === 0) {
            ue = setTimeout(Ge()(me, "_checkFbtVirtualModuleTimeout"), ce);
        }
    }
    function me() {
        ue = null;
        const e = W();
        const t = Object.keys(se).filter((t)=>{
            const n = e - se[t] > ce;
            if (n) {
                delete se[t];
            }
            return n;
        });
        if (Object.keys(se).length > 0) {
            ue = setTimeout(Ge()(me, "_checkFbtVirtualModuleTimeout"), ce);
        }
        if (t.length > 0) {
            ye([
                "FBLogger"
            ], function(e) {
                e("binary_transparency", "vmod_timeout").warn("The following virtual modules are taking over %sms to be defined: %s...", ce, t.join(",").slice(0, 300));
            });
        }
    }
    function pe(e, dependencies, category) {
        if (ie && category != null && category & L) {
            const r = e + le;
            dependencies.push(r);
            de(r);
        }
    }
    function _e(e, dependencies, o, category, l, s, meta) {
        if (dependencies === undefined) {
            dependencies = [];
            o = e;
            e = Ce();
        } else if (o === undefined) {
            o = dependencies;
            if (toString.call(e) === "[object Array]") {
                dependencies = e;
                e = Ce(dependencies.join(","));
            } else {
                dependencies = [];
            }
        }
        const p = {
            cancel: he.bind(this, e)
        };
        const _ = fe(e);
        if (!dependencies && !o && s != null && s !== 0) {
            _.refcount += s;
            return p;
        }
        if (ie) {
            if (e in se) {
                delete se[e];
            }
            if (Array.isArray(dependencies)) {
                pe(e, dependencies, category);
            }
        }
        a[e] = {
            id: e,
            dependencies,
            meta,
            category,
            defined: w ? W() : null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: false
        };
        if (_.dependencies && _.reload !== true) {
            if (e.indexOf(":") !== -1) {
                c++;
            } else {
                u++;
            }
            return p;
        }
        if (_.dependencies === undefined) {
            numDefined++;
        }
        if (s != null && s !== 0) {
            _.refcount += s;
        }
        const f = dependencies.map(fe);
        _.factory = o;
        _.dependencies = f;
        _.context = l;
        _.special = category;
        if (_.nonJSDeps || Te(_)) {
            _.nonJSDeps = false;
            F(_);
        }
        O(_);
        if (r.length > 0) {
            const g = r;
            r = [];
            const h = !De(_) && t.ScheduleJSWork ? t.ScheduleJSWork : He;
            h(function() {
                if (N) {
                    for(let e = 0; e < g.length; e++){
                        G.call(null, g[e].id);
                    }
                    g.length = 0;
                } else {
                    while(g.length > 0){
                        G.call(null, g.pop().id);
                    }
                }
            })();
        }
        return p;
    }
    function fe(e) {
        let t = modulesMap[e];
        return t || (t = ge(e, 0), modulesMap[e] = t, t);
    }
    function ge(e, refcount, n) {
        const r = {
            id: e,
            refcount,
            exports: n ?? null,
            defaultExport: n ?? I,
            factory: undefined,
            factoryLength: -1,
            factoryFinished: false,
            dependencies: undefined,
            depPosition: 0,
            context: undefined,
            special: 0,
            hasError: false,
            error: null,
            ranRecursiveSideEffects: false,
            sideEffectDependencyException: null,
            nextDepWaitingHead: null,
            nextDepWaitingNext: null,
            tarjanGeneration: -1,
            tarjanLow: 0,
            tarjanIndex: 0,
            tarjanOnStack: false,
            nonJSDeps: false,
            wasUsed: false
        };
        return r;
    }
    function he(e) {
        if (modulesMap[e]) {
            const t = modulesMap[e];
            f(t);
            modulesMap[e] = null;
            if (t.dependencies) {
                for(let n = 0; n < t.dependencies.length; n++){
                    const dependency = t.dependencies[n];
                    if (dependency.refcount-- === 1) {
                        he(dependency.id);
                    }
                }
            }
        }
    }
    function ye(e, t, n = null, r = 0) {
        const o = `__requireLazy__x__${i++}`;
        return _e(`__requireLazy__${o}`, e, Ge()(t, "requireLazy", {
            propagationType: 0
        }), r | h | v, n, 1);
    }
    function Ce(e) {
        return `__mod__${e != null ? `${e}__` : ""}${i++}`;
    }
    function be(e, t, n) {
        if (n.tarjanGeneration != l) {
            n.tarjanGeneration = l;
            n.tarjanLow = n.tarjanIndex = s++;
            n.tarjanOnStack = true;
            t.push(n);
        }
        if (n.dependencies != null) {
            for(let r = n.depPosition; r < n.dependencies.length; r++){
                const dependency = n.dependencies[r];
                if (dependency.tarjanGeneration != l) {
                    be(e, t, dependency);
                    n.tarjanLow = Math.min(n.tarjanLow, dependency.tarjanLow);
                } else if (dependency.tarjanOnStack) {
                    n.tarjanLow = Math.min(n.tarjanLow, dependency.tarjanIndex);
                }
            }
        }
        if (n.tarjanLow == n.tarjanIndex) {
            const a = [];
            let i;
            do {
                i = t.pop();
                i.tarjanOnStack = false;
                a.push(i);
                if (n == t[0] && i != n && i.dependencies != null) {
                    for(let u = i.depPosition; u < i.dependencies.length; u++){
                        const dependency = i.dependencies[u];
                        if (!Le(dependency) && e.indexOf(dependency) === -1 && t.indexOf(dependency) === -1 && a.indexOf(dependency) === -1) {
                            e.push(dependency);
                        }
                    }
                }
            }while (i != n)
        }
    }
    function ve(e, t) {
        const n = [];
        const r = [];
        const o = [];
        const a = (t)=>{
            t.tarjanGeneration = l;
            t.tarjanLow = t.tarjanIndex = s++;
            t.tarjanOnStack = true;
            n.push(t);
            r.push(t);
            o.push(t.depPosition);
        };
        a(t);
        while(r.length > 0){
            const i = r.length - 1;
            const u = r[i];
            const c = u.dependencies;
            if (c != null && o[i] < c.length) {
                const d = c[o[i]++];
                if (d.tarjanGeneration != l) {
                    a(d);
                } else if (d.tarjanOnStack) {
                    u.tarjanLow = Math.min(u.tarjanLow, d.tarjanIndex);
                }
                continue;
            }
            r.pop();
            o.pop();
            if (u.tarjanLow == u.tarjanIndex) {
                const m = [];
                let p;
                do {
                    p = n.pop();
                    if (p == null) {
                        throw $('Tarjan stack emptied before reaching "%s"', u.id);
                    }
                    p.tarjanOnStack = false;
                    m.push(p);
                    if (u == n[0] && p != u && p.dependencies != null) {
                        for(let _ = p.depPosition; _ < p.dependencies.length; _++){
                            const dependency = p.dependencies[_];
                            if (!Le(dependency) && e.indexOf(dependency) === -1 && n.indexOf(dependency) === -1 && m.indexOf(dependency) === -1) {
                                e.push(dependency);
                            }
                        }
                    }
                }while (p != u)
            }
            if (i > 0) {
                const g = r[i - 1];
                g.tarjanLow = Math.min(g.tarjanLow, u.tarjanLow);
            }
        }
    }
    function Se(e) {
        const e_dependencies = e.dependencies;
        if (!e_dependencies) {
            throw $("Called _replaceCycleLinkWithSCCDeps on an undefined module");
        }
        l++;
        be(e_dependencies, [], e);
        e.depPosition++;
        xe(e);
    }
    function Re(e, t) {
        for(let n = t; n.dependencies && n.depPosition != n.dependencies.length;){
            n = n.dependencies[n.depPosition];
            if (n == e) {
                Se(e);
                return;
            }
        }
        e.nextDepWaitingNext = t.nextDepWaitingHead;
        t.nextDepWaitingHead = e;
    }
    function Le(e) {
        return e.dependencies != null && e.depPosition >= e.dependencies.length;
    }
    function Ee(e) {
        e.depPosition++;
        xe(e);
    }
    function ke(e) {
        let e_nextDepWaitingHead = e.nextDepWaitingHead;
        for(e.nextDepWaitingHead = null; e_nextDepWaitingHead != null;){
            const n = e_nextDepWaitingHead;
            if (n.nonJSDeps) {
                F(e);
            }
            e_nextDepWaitingHead = n.nextDepWaitingNext;
            n.nextDepWaitingNext = null;
            const r = !modulesMap[n.id];
            if (!r) {
                Ee(n);
            }
        }
    }
    function Ie(e) {
        return e.special & h;
    }
    function Te(e) {
        return e.special & v;
    }
    function De(e) {
        return e.special & E;
    }
    function xe(e) {
        while(e.dependencies != null && e.depPosition < e.dependencies.length){
            const t = e.dependencies[e.depPosition];
            const n = Le(t);
            if (!n && e != t) {
                Re(e, t);
                return;
            }
            e.depPosition++;
        }
        if (Ie(e)) {
            r.push(e);
        }
        if (e.nextDepWaitingHead !== null) {
            ke(e);
        }
    }
    function $e(e) {
        const e_dependencies = e.dependencies;
        if (!e_dependencies) {
            throw $("Called _replaceCycleLinkWithSCCDeps on an undefined module");
        }
        l++;
        ve(e_dependencies, e);
    }
    function Pe(e) {
        if (e == null) {
            return null;
        }
        const e_dependencies = e.dependencies;
        if (e_dependencies != null && e.depPosition < e_dependencies.length) {
            return e_dependencies[e.depPosition];
        }
        return null;
    }
    function Ne(e, t) {
        let n = t;
        let r = t;
        do {
            for(let o = 0; o < 2 && (n = Pe(n), n != null); o++){
                if (n == e) {
                    $e(e);
                    return true;
                }
            }
            r = Pe(r);
        }while (n != null && r != null && r !== n)
        e.nextDepWaitingNext = t.nextDepWaitingHead;
        t.nextDepWaitingHead = e;
        return false;
    }
    function Me(e) {
        for(const t = [
            e
        ]; t.length > 0;){
            const n = t[t.length - 1];
            const r = n.nextDepWaitingHead;
            if (r == null) {
                t.pop();
                continue;
            }
            n.nextDepWaitingHead = r.nextDepWaitingNext;
            r.nextDepWaitingNext = null;
            if (r.nonJSDeps) {
                ne(n);
            }
            const a = !modulesMap[r.id];
            if (!a) {
                r.depPosition++;
                if (Ae(r)) {
                    t.push(r);
                }
            }
        }
    }
    function we(e) {
        if (Ae(e)) {
            Me(e);
        }
    }
    function Ae(e) {
        while(e.dependencies != null && e.depPosition < e.dependencies.length){
            const t = e.dependencies[e.depPosition];
            const n = Le(t);
            if (!n && e != t && !Ne(e, t)) {
                return false;
            }
            e.depPosition++;
        }
        if (Ie(e)) {
            r.push(e);
        }
        return e.nextDepWaitingHead !== null;
    }
    function Fe(e) {
        if (e.sideEffectDependencyException != null) {
            throw e.sideEffectDependencyException;
        }
        if (!e.ranRecursiveSideEffects) {
            e.ranRecursiveSideEffects = true;
            const t = e.dependencies;
            if (t) {
                for (const r of t){
                    try {
                        Fe(r);
                    } catch (error) {
                        e.sideEffectDependencyException = error;
                        throw error;
                    }
                    if (r.special & C) {
                        try {
                            G.call(null, r.id);
                        } catch (error) {
                            e.sideEffectDependencyException = error;
                            throw error;
                        }
                    }
                }
            }
        }
    }
    function Oe(e, t) {
        const n = modulesMap[e];
        if (n != null) {
            f(n);
        }
        const r = ge(e, 0, t);
        numDefined++;
        g(r);
        modulesMap[e] = r;
        a[e] = {
            id: e,
            dependencies: [],
            category: 0,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: false
        };
    }
    Oe("module", 0);
    Oe("exports", 0);
    Oe("define", _e);
    Oe("global", t);
    Oe("require", G);
    Oe("requireInterop", G);
    Oe("importDefault", z);
    Oe("importNamespace", j);
    Oe("requireDynamic", Be);
    Oe("requireLazy", ye);
    Oe("requireWeak", We);
    Oe("ifRequired", qe);
    Oe("ifRequireable", Ue);
    e = [
        G.call(null, "global"),
        G.call(null, "require"),
        G.call(null, "requireDynamic"),
        G.call(null, "requireLazy"),
        G.call(null, "requireInterop"),
        null
    ];
    n = [
        G.call(null, "global"),
        G.call(null, "require"),
        G.call(null, "importDefault"),
        G.call(null, "importNamespace"),
        G.call(null, "requireLazy"),
        G.call(null, "requireInterop"),
        null
    ];
    _e.amd = {};
    t.define = _e;
    t.require = G;
    t.requireInterop = G;
    t.importDefault = z;
    t.importNamespace = j;
    t.requireDynamic = Be;
    t.requireLazy = ye;
    t.__onBeforeModuleFactory = null;
    t.__onAfterModuleFactory = null;
    function Be(e, t) {
        throw new ReferenceError("requireDynamic is not defined");
    }
    function We(e, t) {
        qe.call(null, e, function(e) {
            t(e);
        }, function() {
            _e(`__requireWeak__${e}__${i++}`, [
                `__isRequired__${e}`
            ], Ge()(function() {
                return t(H(modulesMap[e]));
            }, "requireWeak"), h, null, 1);
        });
    }
    function qe(e, t, n) {
        const r = modulesMap[e];
        if (r && r.factoryFinished) {
            if (typeof t === "function") {
                return t(H(r));
            }
        } else if (typeof n === "function") {
            return n();
        }
    }
    function Ue(e, t, n) {
        const r = modulesMap[e];
        if (r && r.nonJSDeps && Le(r)) {
            if (typeof t === "function") {
                return t(G.call(null, e));
            }
        } else if (typeof n === "function") {
            return n();
        }
    }
    const Ve = {
        getDupCount: function() {
            return [
                u,
                c
            ];
        },
        getModules: function() {
            const e = {};
            for(const t in modulesMap){
                const n = modulesMap[t];
                if (n && Object.prototype.hasOwnProperty.call(modulesMap, t)) {
                    e[t] = n;
                }
            }
            return e;
        },
        modulesMap,
        debugUnresolvedDependencies,
        getCounts: function() {
            return {
                numDefined,
                numUndefinedUnused,
                numUndefinedUsed,
                numUsed
            };
        }
    };
    function He(e) {
        return e;
    }
    function Ge() {
        const e = t.TimeSlice && t.TimeSlice.guard ? t.TimeSlice.guard : He;
        return function() {
            return e(...arguments);
        };
    }
    Oe("__getTotalRequireCalls", Z);
    Oe("__getModuleTimeDetails", ee);
    Oe("__debug", Ve);
    t.__d = function(e, t, n, r) {
        Ge()(function() {
            _e(e, t, n, (r ?? y) | b, null, null, null);
        }, `define ${e}`, {
            root: true
        })();
    };
    function ze(e, t) {
        return true;
    }
    const je = function() {};
    t.$RefreshReg$ = je;
    t.$RefreshSig$ = function() {
        return function(e) {
            return e;
        };
    };
    if (t.__d_stub) {
        for(let Ke = 0; Ke < t.__d_stub.length; Ke++){
            t.__d.apply(null, t.__d_stub[Ke]);
        }
        delete t.__d_stub;
    }
    if (t.__rl_stub) {
        for(let Qe = 0; Qe < t.__rl_stub.length; Qe++){
            ye(...t.__rl_stub[Qe]);
        }
        delete t.__rl_stub;
    }
})(typeof this !== "undefined" ? this : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {});
(function() {
    if (typeof globalThis === "undefined") {
        const e = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof this !== "undefined" ? this : typeof self !== "undefined" ? self : {};
        e.globalThis = e;
    }
})();
((e)=>{
    const e_performance = e.performance;
    if (e_performance && e_performance.setResourceTimingBufferSize) {
        e_performance.setResourceTimingBufferSize(2500);
        e_performance.onresourcetimingbufferfull = function() {
            e.__isresourcetimingbufferfull = true;
        };
        e_performance.setResourceTimingBufferSize = function() {};
    }
})(typeof this === "object" ? this : typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : {});
__d("ExecutionEnvironment", [], function(t, n, r, o, a, i) {
    "use strict";
    const canUseDOM = !!(t !== undefined && t.document && t.document.createElement);
    const isInWorker = typeof WorkerGlobalScope === "function";
    const isInSharedWorker = typeof SharedWorkerGlobalScope === "function" && self instanceof SharedWorkerGlobalScope;
    const isInMainThread = !isInWorker && canUseDOM;
    const c = {
        canUseDOM,
        canUseEventListeners: canUseDOM && !!(t.addEventListener || t.attachEvent),
        canUseViewport: canUseDOM && !!window.screen,
        canUseWorkers: typeof Worker !== "undefined",
        isInBrowser: canUseDOM || isInWorker,
        isInMainThread,
        isInSharedWorker,
        isInWorker
    };
    i.default = c;
}, 66);
__d("BootloaderDocumentInserter", [
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    function u() {
        if (!s) {
            s = document.head || document.getElementsByTagName("head")[0] || document.body;
        }
        return s;
    }
    function c(t) {
        if ((e || (e = r("ExecutionEnvironment"))).isInWorker) {
            t(null);
            return;
        }
        const n = document.createDocumentFragment();
        t(n);
        u().appendChild(n);
    }
    l.getDOMContainerNode = u;
    l.batchDOMInsert = c;
}, 98);
__d("Env", [], function(t, n, r, o, a, i) {
    let e = {
        ajaxpipe_token: null,
        compat_iframe_token: null,
        iframeKey: "",
        iframeTarget: "",
        iframeToken: "",
        isCQuick: false,
        jssp_header_sent: false,
        jssp_targeting_enabled: false,
        loadHyperion: false,
        start: Date.now(),
        nocatch: false,
        ig_server_override: "",
        barcelona_server_override: "",
        ig_mqtt_wss_endpoint: "",
        ig_mqtt_polling_endpoint: ""
    };
    if (t.Env) {
        e = babelHelpers.extends({}, e, t.Env);
    }
    t.Env = e;
    i.default = e;
}, 66);
__d("fb-error-lite", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };
    function err(t, ...o) {
        const n = new Error(t);
        if (n.stack === undefined) {
            try {
                throw n;
            } catch (e) {}
        }
        n.messageFormat = t;
        n.messageParams = o.map((e)=>String(e));
        n.taalOpcodes = [
            e.PREVIOUS_FRAME
        ];
        return n;
    }
    const s = {
        err,
        TAALOpcode: e
    };
    i.default = s;
}, 66);
__d("sprintf", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, ...n) {
        let o = 0;
        return e.replace(/%s/g, ()=>String(n[o++]));
    }
    i.default = e;
}, 66);
__d("invariant", [
    "Env",
    "fb-error-lite",
    "sprintf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t, ...args) {
        if (!e) {
            let n = t;
            for(var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++){
                a[i - 2] = arguments[i];
            }
            if (typeof n === "number") {
                const l = u(n, a);
                const { decoderLink, message } = l;
                n = message;
                a.unshift(decoderLink);
            } else if (n === undefined) {
                n = "Invariant: ";
                for(let d = 0; d < a.length; d++){
                    n += "%s,";
                }
            }
            const p = new Error(n);
            p.name = "Invariant Violation";
            p.messageFormat = n;
            p.messageParams = a.map((e)=>String(e));
            p.taalOpcodes = [
                r("fb-error-lite").TAALOpcode.PREVIOUS_FRAME
            ];
            p.stack;
            throw p;
        }
    }
    function u(t, n) {
        let message = `Minified invariant #${t}; %s`;
        if (n.length > 0) {
            message += ` Params: ${n.map((e)=>"%s").join(", ")}`;
        }
        const decoderLink = (e || (e = r("Env"))).show_invariant_decoder === true ? `visit ${c(t, n)} to see the full message.` : "";
        return {
            message,
            decoderLink
        };
    }
    function c(e, t) {
        let n = `https://www.internalfb.com/intern/invariant/${e}/`;
        if (t.length > 0) {
            n += `?${t.map((e, t)=>`args[${t}]=${encodeURIComponent(String(e))}`).join("&")}`;
        }
        return n;
    }
    l.default = s;
}, 98);
__d("ArbiterToken", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    class e {
        constructor(e, t){
            this.unsubscribe = function() {
                for(let e = 0; e < this.$2.length; e++){
                    this.$2[e].remove();
                }
                this.$2.length = 0;
            };
            this.$1 = e;
            this.$2 = t;
        }
        isForArbiterInstance(t) {
            if (!this.$1) {
                s(0, 2506);
            }
            return this.$1 === t;
        }
    }
    l.default = e;
}, 98);
__d("performance", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = t.performance || t.msPerformance || t.webkitPerformance || {};
    i.default = e;
}, 66);
__d("performanceNow", [
    "performance"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    if ((e || (e = r("performance"))).now) {
        s = function() {
            return (e || (e = r("performance"))).now();
        };
    } else {
        const u = t._cstart;
        const c = Date.now();
        let d = typeof u === "number" && u < c ? u : c;
        let m = 0;
        s = function() {
            const e = Date.now();
            let t = e - d;
            if (t < m) {
                d -= m - t;
                t = e - d;
            }
            m = t;
            return t;
        };
    }
    l.default = s;
}, 98);
__d("removeFromArray", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = e.indexOf(t);
        if (n !== -1) {
            e.splice(n, 1);
        }
    }
    i.default = e;
}, 66);
__d("fb-error", [
    "performanceNow",
    "removeFromArray"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const l = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };
    function err(e, ...r) {
        const t = new Error(e);
        if (t.stack === undefined) {
            try {
                throw t;
            } catch (e) {}
        }
        t.messageFormat = e;
        t.messageParams = r.map((e)=>String(e));
        t.taalOpcodes = [
            l.PREVIOUS_FRAME
        ];
        return t;
    }
    let u = false;
    const ErrorBrowserConsole = {
        errorListener: function(n) {
            const t_console = t.console;
            const r = t_console[n.type] ? n.type : "error";
            if (n.type === "fatal" || r === "error" && !u) {
                const o = n.message;
                t_console.error(`ErrorUtils caught an error:

${o}

Subsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.`, n);
                u = true;
            }
        }
    };
    const config = {
        skipDupErrorGuard: false
    };
    var ErrorConfig = {
        config,
        setup: _
    };
    var p = false;
    function _(e) {
        if (p === false) {
            p = true;
            ErrorConfig.config = Object.freeze(e);
        }
    }
    const ErrorDynamicData = {
        access_token: null
    };
    const g = 6;
    const h = 60000;
    const y = 10 * h;
    const C = new Map;
    let b = 0;
    function v() {
        const t = (e || (e = n("performanceNow")))();
        if (t > b + h) {
            const r = t - y;
            for (const [a, i] of C){
                if (i.lastAccessed < r) {
                    C.delete(a);
                }
            }
            b = t;
        }
    }
    function S(hash) {
        v();
        const lastAccessed = (e || (e = n("performanceNow")))();
        const o = C.get(hash);
        if (o == null) {
            C.set(hash, {
                dropped: 0,
                logged: [
                    lastAccessed
                ],
                lastAccessed
            });
            return 1;
        }
        const { dropped, logged } = o;
        for(o.lastAccessed = lastAccessed; logged[0] < lastAccessed - h;){
            logged.shift();
        }
        if (logged.length < g) {
            o.dropped = 0;
            logged.push(lastAccessed);
            return dropped + 1;
        }
        o.dropped++;
        return null;
    }
    const ErrorFilter = {
        shouldLog: function(t) {
            return S(t.hash);
        }
    };
    const L = "RE_EXN_ID";
    function getErrorSafe(e) {
        let t = null;
        if (e == null || typeof e !== "object") {
            t = err("Non-object thrown: %s", String(e));
        } else if (Object.prototype.hasOwnProperty.call(e, L)) {
            t = err("Rescript exception thrown: %s", JSON.stringify(e));
        } else if (typeof e?.then === "function") {
            t = err("Promise thrown: %s", JSON.stringify(e));
        } else if (typeof e.message !== "string") {
            t = err("Non-error thrown: %s, keys: %s", String(e), JSON.stringify(Object.keys(e).sort()));
        } else if (e.messageFormat != null && typeof e.messageFormat !== "string") {
            t = err("Error with non-string messageFormat thrown: %s, %s, keys: %s", String(e.message), String(e), JSON.stringify(Object.keys(e).sort()));
        } else if (Object.isExtensible && !Object.isExtensible(e)) {
            t = err("Non-extensible thrown: %s", String(e.message));
        }
        if (t != null) {
            t.taalOpcodes = t.taalOpcodes || [];
            t.taalOpcodes.push(l.PREVIOUS_FRAME);
            return t;
        }
        return e;
    }
    const k = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>";
    let I;
    function T(e) {
        const n = e.error != null ? getErrorSafe(e.error) : err(e.message || "");
        if (n.fileName == null && e.filename != null) {
            n.fileName = e.filename;
        }
        if (n.line == null && e.lineno != null) {
            n.line = e.lineno;
        }
        if (n.column == null && e.colno != null) {
            n.column = e.colno;
        }
        n.guardList = [
            k
        ];
        n.loggingSource = "ONERROR";
        I?.reportError(n);
    }
    const ErrorGlobalEventHandler = {
        setup: function(n) {
            if (typeof t.addEventListener === "function" && I == null) {
                I = n;
                t.addEventListener("error", T);
            }
        }
    };
    const x = [];
    const ErrorGuardState = {
        pushGuard: function(t) {
            x.unshift(t);
        },
        popGuard: function() {
            x.shift();
        },
        inGuard: function() {
            return x.length !== 0;
        },
        cloneGuardList: function() {
            return x.map((e)=>e.name);
        },
        findDeferredSource: function() {
            for (const e of x){
                if (e.deferredSource != null) {
                    return e.deferredSource;
                }
            }
        }
    };
    function P(e) {
        return e.type ?? (e.loggingSource == "GUARDED" || e.loggingSource == "ERROR_BOUNDARY" || e.name == "SyntaxError" ? "fatal" : e.loggingSource == "ONERROR" && e.message.indexOf("ResizeObserver loop") >= 0 || e.stack != null && e.stack.indexOf("chrome-extension://") >= 0 ? "warn" : "error");
    }
    let N = [];
    class M {
        constructor(){
            this.metadata = [].concat(N);
        }
        addEntries() {
            this.metadata.push(...arguments);
            return this;
        }
        addEntry(t, n, r) {
            this.metadata.push([
                t,
                n,
                r
            ]);
            return this;
        }
        isEmpty() {
            return this.metadata.length === 0;
        }
        clearEntries() {
            this.metadata = [];
        }
        format() {
            const e = [];
            this.metadata.forEach((t)=>{
                if (t && t.length) {
                    const n = t.map((e)=>{
                        if (e != null) {
                            return String(e).replace(/:/g, "_");
                        }
                        return "";
                    }).join(":");
                    e.push(n);
                }
            });
            return e;
        }
        getAll() {
            return this.metadata;
        }
        static addGlobalMetadata(t, n, r) {
            N.push([
                t,
                n,
                r
            ]);
        }
        static getGlobalMetadata() {
            return N;
        }
        static unsetGlobalMetadata(t, n) {
            N = N.filter((e)=>!(Array.isArray(e) && e[0] === t && e[1] === n));
        }
    }
    const w = {
        debug: 1,
        info: 2,
        warn: 3,
        error: 4,
        fatal: 5
    };
    function aggregateError(e, t) {
        if (!Object.isFrozen(e)) {
            if (t.type && (!e.type || w[e.type] > w[t.type])) {
                e.type = t.type;
            }
            const o = t.metadata;
            if (o != null) {
                const i = e.metadata ?? new M;
                if (o != null) {
                    i.addEntries(...o.getAll());
                }
                e.metadata = i;
            }
            if (t.project != null) {
                e.project = t.project;
            }
            if (t.errorName != null) {
                e.errorName = t.errorName;
            }
            if (t.componentStack != null) {
                e.componentStack = t.componentStack;
            }
            if (t.deferredSource != null) {
                e.deferredSource = t.deferredSource;
            }
            if (t.blameModule != null) {
                e.blameModule = t.blameModule;
            }
            if (t.loggingSource != null) {
                e.loggingSource = t.loggingSource;
            }
            let l = e.messageFormat ?? e.message;
            const s = e.messageParams ?? [];
            if (l !== t.messageFormat && t.messageFormat != null) {
                l += ` [Caught in: ${t.messageFormat}]`;
                s.push(...t.messageParams ?? []);
            }
            e.messageFormat = l;
            e.messageParams = s;
            const c = t.forcedKey;
            const d = e.forcedKey;
            const m = c != null && d != null ? `${c}_${d}` : c ?? d;
            e.forcedKey = m;
        }
    }
    function toReadableMessage(e) {
        return O(e.messageFormat ?? e.message, e.messageParams || []);
    }
    function O(e, t) {
        let n = 0;
        const r = String(e);
        let o = r.replace(/%s/g, ()=>{
            if (n < t.length) {
                return t[n++];
            }
            return "NOPARAM";
        });
        if (n < t.length) {
            o += ` PARAMS${JSON.stringify(t.slice(n))}`;
        }
        return o;
    }
    function toStringParams(e) {
        return (e ?? []).map((e)=>String(e));
    }
    const ErrorSerializer = {
        aggregateError,
        toReadableMessage,
        toStringParams
    };
    const q = 5;
    const U = [];
    function add(e) {
        U.push(e);
        if (U.length > q) {
            U.shift();
        }
    }
    function addFromXHR(e) {
        const t = e.getAllResponseHeaders();
        if (t != null && t.indexOf("X-FB-Debug") >= 0) {
            const n = e.getResponseHeader("X-FB-Debug");
            if (n != null && n !== "") {
                add(n);
            }
        }
    }
    function getAll() {
        return U;
    }
    const ErrorXFBDebug = {
        add,
        addFromXHR,
        getAll
    };
    const j = "abcdefghijklmnopqrstuvwxyz012345";
    function getSimpleHash(...n) {
        let e = 0;
        for (const o of n){
            if (o != null) {
                for(let a = o.length, i = 0; i < a; i++){
                    e = (e << 5) - e + o.charCodeAt(i);
                }
            }
        }
        let l = "";
        for(let s = 0; s < 6; s++){
            l = j.charAt(e & 31) + l;
            e >>= 5;
        }
        return l;
    }
    const Q = [
        /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
        /@([^\s\)\()]+):(\d+):(\d+)$/,
        /^([^\s\)\()]+):(\d+):(\d+)$/,
        /^at ([^\s\)\()]+):(\d+):(\d+)$/
    ];
    const X = /^\w+:\s.*?\n/g;
    if (Error.stackTraceLimit != null && Error.stackTraceLimit < 80) {
        Error.stackTraceLimit = 80;
    }
    function Y({ message, name, stack }) {
        if (stack == null) {
            return null;
        }
        if (name != null && message != null && message !== "") {
            const o = `${name}: ${message}
`;
            if (stack.startsWith(o)) {
                return stack.substr(o.length);
            }
            if (stack === `${name}: ${message}`) {
                return null;
            }
        }
        if (name != null) {
            const a = `${name}
`;
            if (stack.startsWith(a)) {
                return stack.substr(a.length);
            }
        }
        if (message != null && message !== "") {
            const i = `: ${message}
`;
            const l = stack.indexOf(i);
            const s = stack.substring(0, l);
            if (/^\w+$/.test(s)) {
                return stack.substring(l + i.length);
            }
        }
        return stack.replace(X, "");
    }
    function J(e) {
        const t = e.trim();
        let n = t;
        let r;
        let line;
        let column;
        if (t.includes("charset=utf-8;base64,")) {
            n = "<inlined-file>";
        } else {
            let i;
            for (const l of Q){
                i = t.match(l);
                if (i != null) {
                    break;
                }
            }
            if (i != null && i.length === 4) {
                r = i[1];
                line = parseInt(i[2], 10);
                column = parseInt(i[3], 10);
                n = t.substring(0, t.length - i[0].length);
            } else {
                n = t;
            }
            n = n.replace(/^at /, "").trim();
        }
        const s = {
            identifier: n,
            script: r,
            line,
            column
        };
        s.text = formatStackFrame(s);
        return s;
    }
    function Z(e) {
        if (e == null || e === "") {
            return [];
        }
        return e.split(/\n\n/)[0].split("\n").map(J);
    }
    function ee(e) {
        const t = Y(e);
        return Z(t);
    }
    function te(componentStack) {
        if (componentStack == null || componentStack === "") {
            return null;
        }
        const t = componentStack.split("\n");
        t.splice(0, 1);
        return t.map((e)=>e.trim());
    }
    function formatStackFrame({ column, identifier, line, script }) {
        let a = `    at ${identifier ?? "<unknown>"}`;
        if (script != null && line != null && column != null) {
            a += ` (${script}:${line}:${column})`;
        }
        return a;
    }
    function normalizeError(r) {
        const stackFrames = ee(r);
        const g = r.taalOpcodes ?? [];
        const r_framesToPop = r.framesToPop;
        if (r_framesToPop != null) {
            for(let y = Math.min(r_framesToPop, stackFrames.length), C = 0; C < y; C++){
                g.unshift(l.PREVIOUS_FRAME);
            }
        }
        const messageFormat = r.messageFormat ?? r.message;
        const messageParams = (r.messageParams ?? []).map((e)=>String(e));
        const reactComponentStack = te(r.componentStack);
        const componentStackFrames = reactComponentStack == null ? null : reactComponentStack.map(J);
        let metadata = r.metadata ? r.metadata.format() : new M().format();
        if (metadata.length === 0) {
            metadata = undefined;
        }
        const stack = stackFrames.map((e)=>e.text).join("\n");
        const k = r.errorName ?? r.name;
        const I = P(r);
        const { loggingSource, project } = r;
        let x = r.lineNumber ?? r.line;
        let $ = r.columnNumber ?? r.column;
        let N = r.fileName ?? r.sourceURL;
        const w = stackFrames.length > 0;
        if (w && x == null) {
            x = stackFrames[0].line;
        }
        if (w && $ == null) {
            $ = stackFrames[0].column;
        }
        if (w && N == null) {
            N = stackFrames[0].script;
        }
        const A = {
            blameModule: r.blameModule,
            cause: r.cause,
            column: $ == null ? null : String($),
            clientTime: Math.floor(Date.now() / 1000),
            componentStackFrames,
            deferredSource: r.deferredSource != null ? normalizeError(r.deferredSource) : null,
            extra: r.extra ?? {},
            fbtrace_id: r.fbtrace_id,
            guardList: r.guardList ?? [],
            hash: getSimpleHash(k, stack, I, project, loggingSource),
            isNormalizedError: true,
            line: x == null ? null : String(x),
            loggingSource,
            message: ErrorSerializer.toReadableMessage(r),
            messageFormat,
            messageParams,
            metadata,
            name: k,
            page_time: Math.floor((e || (e = n("performanceNow")))()),
            project,
            reactComponentStack,
            script: N,
            serverHash: r.serverHash,
            stack,
            stackFrames,
            type: I,
            xFBDebug: ErrorXFBDebug.getAll(),
            tags: r.tags ?? [],
            operation: r.operation
        };
        if (r.forcedKey != null) {
            A.forcedKey = r.forcedKey;
        }
        if (g.length > 0) {
            A.taalOpcodes = g;
        }
        const t_location = t.location;
        if (t_location) {
            A.windowLocationURL = t_location.href;
        }
        for(const O in A){
            if (A[O] == null) {
                delete A[O];
            }
        }
        return A;
    }
    function ifNormalizedError(e) {
        if (e != null && typeof e === "object" && e.isNormalizedError === true) {
            return e;
        }
        return null;
    }
    const ErrorNormalizeUtils = {
        formatStackFrame,
        normalizeError,
        ifNormalizedError
    };
    const ie = "<global.react>";
    const le = [];
    const history = [];
    const ue = 50;
    let ce = false;
    var ErrorPubSub = {
        history,
        addListener: function(t, n = false) {
            le.push(t);
            if (!n) {
                history.forEach((e)=>t(e, e.loggingSource ?? "DEPRECATED"));
            }
        },
        unshiftListener: function(t) {
            le.unshift(t);
        },
        removeListener: function(t) {
            n("removeFromArray")(le, t);
        },
        reportError: function(t) {
            const e = ErrorNormalizeUtils.normalizeError(t);
            ErrorPubSub.reportNormalizedError(e);
        },
        reportNormalizedError: function(t) {
            if (ce) {
                return false;
            }
            const e = ErrorGuardState.cloneGuardList();
            if (t.componentStackFrames) {
                e.unshift(ie);
            }
            if (e.length > 0) {
                t.guardList = e;
            }
            if (t.deferredSource == null) {
                const n = ErrorGuardState.findDeferredSource();
                if (n != null) {
                    t.deferredSource = ErrorNormalizeUtils.normalizeError(n);
                }
            }
            if (history.length > ue) {
                history.splice(ue / 2, 1);
            }
            history.push(t);
            ce = true;
            for(let r = 0; r < le.length; r++){
                try {
                    le[r](t, t.loggingSource ?? "DEPRECATED");
                } catch (e) {}
            }
            ce = false;
            return true;
        }
    };
    ErrorPubSub.addListener(ErrorBrowserConsole.errorListener);
    const me = "<anonymous guard>";
    let pe = false;
    var ErrorGuard = {
        applyWithGuard: function(t, n, r, o) {
            if (ErrorConfig.config.skipDupErrorGuard && "__isMetaErrorGuarded" in t) {
                return t.apply(n, r);
            }
            ErrorGuardState.pushGuard({
                name: (o?.name != null ? o.name : null) || (t.name ? `func_name:${t.name}` : null) || me,
                deferredSource: o?.deferredSource
            });
            if (pe) {
                try {
                    return t.apply(n, r);
                } finally{
                    ErrorGuardState.popGuard();
                }
            }
            try {
                return Function.prototype.apply.call(t, n, r);
            } catch (error) {
                try {
                    const a = o ?? babelHelpers.extends({}, null);
                    const { deferredSource, onError, onNormalizedError } = a;
                    const u = getErrorSafe(error);
                    const c = {
                        deferredSource,
                        loggingSource: "GUARDED",
                        project: o?.project ?? "ErrorGuard",
                        type: o?.errorType
                    };
                    ErrorSerializer.aggregateError(u, c);
                    const d = ErrorNormalizeUtils.normalizeError(u);
                    if (u == null && t) {
                        d.extra[t.toString().substring(0, 100)] = "function";
                        if (r != null && r.length) {
                            d.extra[Array.from(r).toString().substring(0, 100)] = "args";
                        }
                    }
                    d.guardList = ErrorGuardState.cloneGuardList();
                    if (onError) {
                        onError(u);
                    }
                    if (onNormalizedError) {
                        onNormalizedError(d);
                    }
                    ErrorPubSub.reportNormalizedError(d);
                } catch (e) {}
            } finally{
                ErrorGuardState.popGuard();
            }
        },
        guard: function(t, n) {
            function e(...r) {
                return ErrorGuard.applyWithGuard(t, this, r, n);
            }
            e.__isMetaErrorGuarded = true;
            if (t.__SMmeta) {
                e.__SMmeta = t.__SMmeta;
            }
            return e;
        },
        inGuard: function() {
            return ErrorGuardState.inGuard();
        },
        skipGuardGlobal: function(t) {
            pe = t;
        }
    };
    const fe = 1024;
    const ge = [];
    let he = 0;
    function ye(e) {
        return String(e);
    }
    function Ce(e) {
        if (e == null) {
            return null;
        }
        return String(e);
    }
    function be(extra, t) {
        const n = {};
        if (t) {
            t.forEach((e)=>{
                n[e] = true;
            });
        }
        Object.keys(extra).forEach((t)=>{
            if (extra[t]) {
                n[t] = true;
            } else if (n[t]) {
                delete n[t];
            }
        });
        return Object.keys(n);
    }
    function ve(e) {
        return (e ?? []).map((e)=>({
                column: Ce(e.column),
                identifier: e.identifier,
                line: Ce(e.line),
                script: e.script
            }));
    }
    function Se(e) {
        const t = String(e);
        if (t.length > fe) {
            return `${t.substring(0, fe - 3)}...`;
        }
        return t;
    }
    function createErrorPayload(e, t) {
        const i = {
            appId: Ce(t.appId),
            cavalry_lid: t.cavalry_lid,
            access_token: ErrorDynamicData.access_token,
            ancestor_hash: e.hash,
            bundle_variant: t.bundle_variant ?? null,
            clientTime: ye(e.clientTime),
            column: e.column,
            componentStackFrames: ve(e.componentStackFrames),
            events: e.events,
            extra: be(e.extra, t.extra),
            forcedKey: e.forcedKey,
            frontend_env: t.frontend_env ?? null,
            guardList: e.guardList,
            line: e.line,
            loggingFramework: t.loggingFramework,
            messageFormat: Se(e.messageFormat),
            messageParams: e.messageParams.map(Se),
            name: e.name,
            sample_weight: Ce(t.sample_weight),
            script: e.script,
            site_category: t.site_category,
            stackFrames: ve(e.stackFrames),
            type: e.type,
            page_time: Ce(e.page_time),
            project: e.project,
            push_phase: t.push_phase,
            report_source: t.report_source,
            report_source_ref: t.report_source_ref,
            rollout_hash: t.rollout_hash ?? null,
            script_path: t.script_path,
            server_revision: Ce(t.server_revision),
            spin: Ce(t.spin),
            svn_rev: String(t.client_revision),
            additional_client_revisions: Array.from(t.additional_client_revisions ?? []).map(ye),
            taalOpcodes: e.taalOpcodes == null ? null : e.taalOpcodes.map((e)=>e),
            web_session_id: t.web_session_id,
            version: "3",
            xFBDebug: e.xFBDebug,
            tags: e.tags
        };
        const { blameModule, deferredSource } = e;
        if (blameModule != null) {
            i.blameModule = String(blameModule);
        }
        if (deferredSource && deferredSource.stackFrames) {
            i.deferredSource = {
                stackFrames: ve(deferredSource.stackFrames)
            };
        }
        if (e.metadata) {
            i.metadata = e.metadata;
        }
        if (e.loadingUrls) {
            i.loadingUrls = e.loadingUrls;
        }
        if (e.serverHash != null) {
            i.serverHash = e.serverHash;
        }
        if (e.windowLocationURL != null) {
            i.windowLocationURL = e.windowLocationURL;
        }
        if (e.loggingSource != null) {
            i.loggingSource = e.loggingSource;
        }
        return i;
    }
    function postError(e, t, n) {
        let r;
        he++;
        if (t.sample_weight === 0) {
            return false;
        }
        const o = ErrorFilter.shouldLog(e);
        if (o == null || (r = t.projectBlocklist) !== null && r !== undefined && r.includes(e.project)) {
            return false;
        }
        const a = createErrorPayload(e, t);
        Object.assign(a, {
            ancestors: ge.slice(),
            clientWeight: ye(o),
            page_position: ye(he)
        });
        if (ge.length < 15 && [
            "fatal",
            "error"
        ].includes(e.type)) {
            ge.push(e.hash);
        }
        n(a);
        return true;
    }
    const ErrorPoster = {
        createErrorPayload,
        postError
    };
    let ke = null;
    let Ie = false;
    function onunhandledrejection(e) {
        if (ke != null) {
            const t = ke;
            const n = e.reason;
            let r;
            let o = getErrorSafe(n);
            let a = null;
            if (n !== o && typeof n === "object" && n !== null) {
                r = Object.keys(n).sort().slice(0, 3);
                if (typeof n.message !== "string" && typeof n.messageFormat === "string") {
                    n.message = n.messageFormat;
                    o = getErrorSafe(n);
                }
                if (typeof n.message !== "string" && typeof n.errorMsg === "string") {
                    if (/^\s*\<!doctype/i.test(n.errorMsg)) {
                        const i = /<title>([^<]+)<\/title>(?:(?:.|\n)*<h1>([^<]+)<\/h1>)?/im.exec(n.errorMsg);
                        if (i) {
                            o = err('HTML document with title="%s" and h1="%s"', i[1] ?? "", i[2] ?? "");
                        } else {
                            o = err("HTML document sanitized");
                        }
                    } else {
                        if (/^\s*<\?xml/i.test(n.errorMsg)) {
                            o = err("XML document sanitized");
                        } else {
                            n.message = n.errorMsg;
                            o = getErrorSafe(n);
                        }
                    }
                }
                if (o !== n && typeof n.name === "string") {
                    a = n.name;
                }
                if (typeof n.name !== "string" && typeof n.errorCode === "string") {
                    a = `UnhandledRejectionWith_errorCode_${n.errorCode}`;
                }
                if (typeof n.name !== "string" && typeof n.error === "number") {
                    a = `UnhandledRejectionWith_error_${String(n.error)}`;
                }
            }
            o.loggingSource = "ONUNHANDLEDREJECTION";
            try {
                a = o === n && a != null && a !== "" ? a : typeof n?.name === "string" && n.name !== "" ? n.name : r != null && r.length > 0 ? `UnhandledRejectionWith_${r.join("_")}` : `UnhandledRejection_${n === null ? "null" : typeof n}`;
                o.name = a;
            } catch (e) {}
            try {
                let c = n?.stack;
                if (typeof c !== "string" || c === "") {
                    c = o.stack;
                }
                if (typeof c !== "string" || c === "") {
                    c = err("").stack;
                }
                o.stack = `${o.name}: ${o.message}
${c.split("\n").slice(1).join("\n")}`;
            } catch (e) {}
            try {
                const d = e.promise;
                const m = d;
                o.stack = o.stack + (d != null && typeof m.settledStack === "string" ? `
    at <promise_settled_stack_below>
${m.settledStack}` : "") + (d != null && typeof m.createdStack === "string" ? `
    at <promise_created_stack_below>
${m.createdStack}` : "");
            } catch (e) {}
            try {
                const p = e.promise;
                if ("__isPromiseWithTracing" in p && p.__isPromiseWithTracing === true && p.deferredError != null) {
                    o.deferredSource = getErrorSafe(p.deferredError);
                }
            } catch (e) {}
            t.reportError(o);
            e.preventDefault();
        }
    }
    function De(e) {
        ke = e;
        if (typeof t.addEventListener === "function" && !Ie) {
            Ie = true;
            t.addEventListener("unhandledrejection", onunhandledrejection);
        }
    }
    const xe = {
        onunhandledrejection,
        setup: De
    };
    const ErrorSetup = {
        preSetup: function(t) {
            if (t == null || t.ignoreOnError !== true) {
                ErrorGlobalEventHandler.setup(ErrorPubSub);
            }
            if (t == null || t.ignoreOnUnahndledRejection !== true) {
                xe.setup(ErrorPubSub);
            }
        },
        setup: function(t, n, r) {
            ErrorPubSub.addListener(function(e) {
                const a = babelHelpers.extends({}, t, r?.() ?? {});
                ErrorPoster.postError(e, a, n);
            });
        }
    };
    const Pe = 20;
    const Ne = (()=>{
        function e(e, t = []) {
            const n = this;
            this.FATAL = function(e, ...o) {
                const t = e.join("%s");
                n.fatal(t, ...o);
            };
            this.MUSTFIX = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.mustfix(t, ...o);
            };
            this.WARN = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.warn(t, ...o);
            };
            this.INFO = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.info(t, ...o);
            };
            this.DEBUG = function(e, ...o) {
                const t = n.getTagString() + e.join("%s");
                n.debug(t, ...o);
            };
            this.project = e;
            this.events = [];
            this.metadata = new M;
            this.taalOpcodes = [];
            this.loggerTags = new Set(t);
        }
        const e_prototype = e.prototype;
        e_prototype.$1 = function(n, r, ...p) {
            const messageFormat = String(r);
            const blameModule = this.blameModule;
            const events = this.events;
            const forcedKey = this.forcedKey;
            const metadata = this.metadata;
            const project = this.project;
            let error = this.error;
            let d;
            if (this.normalizedError) {
                d = babelHelpers.extends({}, this.normalizedError, {
                    messageFormat: `${this.normalizedError.messageFormat} [Caught in: ${messageFormat}]`,
                    messageParams: ErrorSerializer.toStringParams([].concat(this.normalizedError.messageParams, p)),
                    project,
                    type: n,
                    loggingSource: "FBLOGGER"
                });
                d.message = ErrorSerializer.toReadableMessage(d);
                if (forcedKey != null) {
                    d.forcedKey = d.forcedKey != null ? `${forcedKey}_${d.forcedKey}` : forcedKey;
                }
            } else if (error) {
                if (this.taalOpcodes.length > 0) {
                    new e("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching");
                }
                ErrorSerializer.aggregateError(error, {
                    messageFormat,
                    messageParams: ErrorSerializer.toStringParams(p),
                    errorName: error.name,
                    forcedKey,
                    project,
                    type: n,
                    loggingSource: "FBLOGGER"
                });
                d = ErrorNormalizeUtils.normalizeError(error);
            } else {
                error = new Error(messageFormat);
                if (error.stack === undefined) {
                    try {
                        throw error;
                    } catch (e) {}
                }
                error.messageFormat = messageFormat;
                error.messageParams = ErrorSerializer.toStringParams(p);
                error.blameModule = blameModule;
                error.forcedKey = forcedKey;
                error.project = project;
                error.type = n;
                error.loggingSource = "FBLOGGER";
                error.taalOpcodes = [
                    l.PREVIOUS_FRAME,
                    l.PREVIOUS_FRAME
                ].concat(this.taalOpcodes);
                d = ErrorNormalizeUtils.normalizeError(error);
                d.name = "FBLogger";
            }
            if (!metadata.isEmpty()) {
                if (d.metadata == null) {
                    d.metadata = metadata.format();
                } else {
                    const f = d.metadata.concat(metadata.format());
                    const g = new Set(f);
                    d.metadata = Array.from(g.values());
                }
            }
            if (events.length > 0) {
                if (d.events != null) {
                    d.events.push(...events);
                } else {
                    d.events = [].concat(events);
                }
                if (d.events != null && d.events.length > Pe) {
                    const y = d.events.length - Pe;
                    d.events.splice(0, y + 1, `<first ${y} events omitted>`);
                }
            }
            d.tags = Array.from(this.loggerTags);
            ErrorPubSub.reportNormalizedError(d);
            return error;
        };
        e_prototype.fatal = function(t, ...n) {
            this.$1("fatal", t, ...n);
        };
        e_prototype.mustfix = function(t, ...n) {
            this.$1("error", t, ...n);
        };
        e_prototype.warn = function(t, ...n) {
            this.$1("warn", t, ...n);
        };
        e_prototype.info = function(t, ...n) {
            this.$1("info", t, ...n);
        };
        e_prototype.debug = function(t) {};
        e_prototype.mustfixThrow = function(t, ...n) {
            let o = this.$1("error", t, ...n);
            if (!o) {
                o = err("mustfixThrow does not support catchingNormalizedError");
                o.taalOpcodes = o.taalOpcodes || [];
                o.taalOpcodes.push(l.PREVIOUS_FRAME);
            }
            try {
                o.message = ErrorSerializer.toReadableMessage(o);
            } catch (e) {}
            o.is_js_error = true;
            throw o;
        };
        e_prototype.catching = function(n) {
            if (n instanceof Error) {
                this.error = n;
            } else {
                new e("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported");
            }
            return this;
        };
        e_prototype.catchingNormalizedError = function(t) {
            this.normalizedError = t;
            return this;
        };
        e_prototype.event = function(t) {
            this.events.push(t);
            return this;
        };
        e_prototype.blameToModule = function(t) {
            this.blameModule = t;
            return this;
        };
        e_prototype.blameToPreviousFile = function() {
            this.taalOpcodes.push(l.PREVIOUS_FILE);
            return this;
        };
        e_prototype.blameToPreviousFrame = function() {
            this.taalOpcodes.push(l.PREVIOUS_FRAME);
            return this;
        };
        e_prototype.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(l.PREVIOUS_DIR);
            return this;
        };
        e_prototype.addToCategoryKey = function(t) {
            this.forcedKey = t;
            return this;
        };
        e_prototype.addMetadata = function(t, n, r) {
            this.metadata.addEntry(t, n, r);
            return this;
        };
        e_prototype.tags = function(n) {
            const t = n.concat(Array.from(this.loggerTags));
            const r = new e(this.project, t);
            this.events.forEach((e)=>r.event(e));
            this.metadata.getAll().forEach(([t, n, o])=>r.addMetadata(t, n, o));
            return r;
        };
        e_prototype.getTagString = function() {
            const e = this.loggerTags.size > 0 ? `[${Array.from(this.loggerTags).join("|")}] ` : "";
            return e;
        };
        return e;
    })();
    const FBLogger = function(t, n) {
        const e = new Ne(t);
        if (n != null) {
            return e.event(`${t}.${n}`);
        }
        return e;
    };
    FBLogger.addGlobalMetadata = function(e, t, n) {
        M.addGlobalMetadata(e, t, n);
    };
    const we = "<CUSTOM_NAME:";
    const Ae = ">";
    function renameFunction(e, t) {
        if (e != null && t != null) {
            try {
                Object.defineProperty(e, "name", {
                    value: `${we} ${t}${Ae}`
                });
            } catch (e) {}
        }
        return e;
    }
    const TAAL = {
        blameToPreviousFile: function(t) {
            t.taalOpcodes = t.taalOpcodes ?? [];
            t.taalOpcodes.push(l.PREVIOUS_FILE);
            return t;
        },
        blameToPreviousFrame: function(t) {
            t.taalOpcodes = t.taalOpcodes ?? [];
            t.taalOpcodes.push(l.PREVIOUS_FRAME);
            return t;
        },
        blameToPreviousDirectory: function(t) {
            t.taalOpcodes = t.taalOpcodes ?? [];
            t.taalOpcodes.push(l.PREVIOUS_DIR);
            return t;
        }
    };
    const Be = {
        err,
        ErrorBrowserConsole,
        ErrorConfig,
        ErrorDynamicData,
        ErrorFilter,
        ErrorGlobalEventHandler,
        ErrorGuard,
        ErrorGuardState,
        ErrorMetadata: M,
        ErrorNormalizeUtils,
        ErrorPoster,
        ErrorPubSub,
        ErrorSerializer,
        ErrorSetup,
        ErrorXFBDebug,
        FBLogger,
        getErrorSafe,
        getSimpleHash,
        TAAL,
        TAALOpcode: l,
        renameFunction
    };
    a.exports = Be;
}, null);
__d("ErrorGuard", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").ErrorGuard;
}, 98);
__d("CallbackDependencyManager", [
    "ErrorGuard"
], function(t, n, r, o, a, i) {
    let e;
    class l {
        constructor(){
            this.$1 = new Map;
            this.$2 = new Map;
            this.$3 = 1;
            this.$4 = new Map;
        }
        $5(t, n) {
            let e = 0;
            const r = new Set;
            for(let o = 0, a = n.length; o < a; o++){
                r.add(n[o]);
            }
            for (const i of r.keys()){
                if (!this.$4.get(i)) {
                    e++;
                    let l = this.$1.get(i);
                    if (l === undefined) {
                        l = new Map;
                        this.$1.set(i, l);
                    }
                    l.set(t, (l.get(t) || 0) + 1);
                }
            }
            return e;
        }
        $6(r) {
            const t = this.$1.get(r);
            if (t) {
                for (const o of t.entries()){
                    const a = o[0];
                    const i = o[1] - 1;
                    t.set(a, i);
                    if (i <= 0) {
                        t.delete(a);
                    }
                    const l = this.$2.get(a);
                    if (l !== undefined && (l.$7--, l.$7 <= 0)) {
                        const s = l.$8;
                        this.$2.delete(a);
                        (e || (e = n("ErrorGuard"))).applyWithGuard(s, null, []);
                    }
                }
            }
        }
        addDependenciesToExistingCallback(t, n) {
            const e = this.$2.get(t);
            if (!e) {
                return null;
            }
            const r = this.$5(t, n);
            e.$7 += r;
            return t;
        }
        isPersistentDependencySatisfied(t) {
            return !!this.$4.get(t);
        }
        satisfyPersistentDependency(t) {
            this.$4.set(t, 1);
            this.$6(t);
        }
        satisfyNonPersistentDependency(t) {
            const e = this.$4.get(t) === 1;
            if (!e) {
                this.$4.set(t, 1);
            }
            this.$6(t);
            if (!e) {
                this.$4.delete(t);
            }
        }
        registerCallback(r, o) {
            const t = this.$3;
            this.$3++;
            const a = this.$5(t, o);
            if (a === 0) {
                (e || (e = n("ErrorGuard"))).applyWithGuard(r, null, []);
                return null;
            }
            this.$2.set(t, {
                $8: r,
                $7: a
            });
            return t;
        }
    }
    a.exports = l;
}, null);
__d("EventSubscription", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = function(t) {
        const e = this;
        this.remove = function() {
            if (e.subscriber) {
                e.subscriber.removeSubscription(e);
                e.subscriber = null;
            }
        };
        this.subscriber = t;
    };
    i.default = e;
}, 66);
__d("EmitterSubscription", [
    "EventSubscription"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t) || this;
            o.listener = n;
            o.context = r;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("EventSubscription"));
    l.default = e;
}, 98);
__d("EventSubscriptionVendor", [
    "invariant"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        constructor(){
            this.$1 = {};
        }
        addSubscription(t, n) {
            if (n.subscriber !== this) {
                l(0, 2828);
            }
            if (!this.$1[t]) {
                this.$1[t] = [];
            }
            const length = this.$1[t].length;
            this.$1[t].push(n);
            n.eventType = t;
            n.key = length;
            return n;
        }
        removeAllSubscriptions(t) {
            if (t === undefined) {
                this.$1 = {};
            } else {
                delete this.$1[t];
            }
        }
        removeSubscription({ eventType, key }) {
            const r = this.$1[eventType];
            if (r) {
                delete r[key];
            }
        }
        getSubscriptionsForType(t) {
            return this.$1[t];
        }
    }
    a.exports = e;
}, null);
__d("FBLogger", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").FBLogger;
}, 98);
__d("emptyFunction", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return function() {
            return e;
        };
    }
    const l = function() {};
    l.thatReturns = e;
    l.thatReturnsFalse = e(false);
    l.thatReturnsTrue = e(true);
    l.thatReturnsNull = e(null);
    l.thatReturnsThis = function() {
        return this;
    };
    l.thatReturnsArgument = function(e) {
        return e;
    };
    i.default = l;
}, 66);
__d("BaseEventEmitter", [
    "EmitterSubscription",
    "ErrorGuard",
    "EventSubscriptionVendor",
    "FBLogger",
    "emptyFunction"
], function(t, n, r, o, a, i) {
    let e;
    class l {
        constructor(){
            this.$2 = new (n("EventSubscriptionVendor"));
            this.$1 = null;
        }
        addListener(t, r, o) {
            return this.$2.addSubscription(t, new (n("EmitterSubscription"))(this.$2, r, o));
        }
        removeListener(t) {
            this.$2.removeSubscription(t);
        }
        once(t, n, r) {
            const e = this;
            return this.addListener(t, function() {
                e.removeCurrentListener();
                n.apply(r, arguments);
            });
        }
        removeAllListeners(t) {
            this.$2.removeAllSubscriptions(t);
        }
        removeCurrentListener() {
            if (!this.$1) {
                throw n("FBLogger")("emitter").mustfixThrow("Not in an emitting cycle; there is no current subscription");
            }
            this.$2.removeSubscription(this.$1);
        }
        listeners(t) {
            const e = this.$2.getSubscriptionsForType(t);
            if (e) {
                return e.filter(n("emptyFunction").thatReturnsTrue).map((e)=>e.listener);
            }
            return [];
        }
        emit(t) {
            const e = this.$2.getSubscriptionsForType(t);
            if (e) {
                let r;
                for(let n = Object.keys(e), o = 0; o < n.length; o++){
                    const a = n[o];
                    const i = e[a];
                    if (i) {
                        this.$1 = i;
                        if (r == null) {
                            r = [
                                i,
                                t
                            ];
                            for(let l = 0, s = arguments.length <= 1 ? 0 : arguments.length - 1; l < s; l++){
                                r[l + 2] = l + 1 < 1 || arguments.length <= l + 1 ? undefined : arguments[l + 1];
                            }
                        } else {
                            r[0] = i;
                        }
                        this.__emitToSubscription(...r);
                    }
                }
                this.$1 = null;
            }
        }
        __emitToSubscription(r, o, ...a) {
            (e || (e = n("ErrorGuard"))).applyWithGuard(r.listener, r.context, a, {
                name: `EventEmitter ${o} event`
            });
        }
    }
    a.exports = l;
}, null);
__d("EventEmitter", [
    "BaseEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("BaseEventEmitter"));
    l.default = e;
}, 98);
__d("EventEmitterWithHolding", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(e, t){
            this.$2 = e;
            this.$3 = t;
            this.$1 = null;
            this.$5 = [];
            this.$4 = 0;
        }
        addListener(t, n, r) {
            return this.$2.addListener(t, n, r);
        }
        once(t, n, r) {
            return this.$2.once(t, n, r);
        }
        addRetroactiveListener(t, n, r) {
            const e = this.$2.addListener(t, n, r);
            const o = this.$5;
            o.push(false);
            this.$4++;
            this.$3.emitToListener(t, n, r);
            this.$4--;
            if (o[o.length - 1]) {
                e.remove();
            }
            o.pop();
            return e;
        }
        removeAllListeners(t) {
            this.$2.removeAllListeners(t);
        }
        removeCurrentListener() {
            if (this.$4) {
                const e = this.$5;
                e[e.length - 1] = true;
            } else {
                this.$2.removeCurrentListener();
            }
        }
        listeners(t) {
            return this.$2.listeners(t);
        }
        emit(t, ...r) {
            this.$2.emit(t, ...r);
        }
        emitAndHold(t, ...o) {
            this.$1 = this.$3.holdEvent(t, ...o);
            this.$2.emit(t, ...o);
            this.$1 = null;
        }
        releaseCurrentEvent() {
            if (this.$1 != null) {
                this.$3.releaseEvent(this.$1);
            } else if (this.$4 > 0) {
                this.$3.releaseCurrentEvent();
            }
        }
        releaseHeldEventType(t) {
            this.$3.releaseEventType(t);
        }
    }
    i.default = e;
}, 66);
__d("EventHolder", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    class e {
        constructor(){
            this.$1 = {};
            this.$2 = [];
        }
        holdEvent(t, ...o) {
            this.$1[t] = this.$1[t] || [];
            const e = this.$1[t];
            const n = {
                eventType: t,
                index: e.length
            };
            e.push(o);
            return n;
        }
        emitToListener(t, n, r) {
            const e = this;
            const o = this.$1[t];
            if (o) {
                o.forEach((o, index)=>{
                    if (o) {
                        e.$2.push({
                            eventType: t,
                            index
                        });
                        n.apply(r, o);
                        e.$2.pop();
                    }
                });
            }
        }
        releaseCurrentEvent() {
            if (!this.$2.length) {
                s(0, 1764);
            }
            this.releaseEvent(this.$2[this.$2.length - 1]);
        }
        releaseEvent(t) {
            delete this.$1[t.eventType][t.index];
        }
        releaseEventType(t) {
            this.$1[t] = [];
        }
    }
    l.default = e;
}, 98);
__d("Arbiter", [
    "invariant",
    "ArbiterToken",
    "CallbackDependencyManager",
    "ErrorGuard",
    "EventEmitter",
    "EventEmitterWithHolding",
    "EventHolder"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    function u(e) {
        if (Array.isArray(e)) {
            return e;
        }
        return [
            e
        ];
    }
    function c(e) {
        if (e instanceof d || e === d) {
            return e;
        }
        return d;
    }
    var d = (()=>{
        function t() {
            const e = new (r("EventEmitter"));
            this.$3 = new m;
            this.$2 = new (r("EventEmitterWithHolding"))(e, this.$3);
            this.$1 = new (r("CallbackDependencyManager"));
            this.$4 = [];
        }
        const t_prototype = t.prototype;
        t_prototype.subscribe = function(t, n, o) {
            const e = this;
            t = u(t);
            t.forEach((e)=>{
                if (!(e && typeof e === "string")) {
                    s(0, 1966, e);
                }
            });
            if (typeof n !== "function") {
                s(0, 1967, n);
            }
            o = o || "all";
            if (!(o === "new" || o === "all")) {
                s(0, 1968, o);
            }
            const a = t.map((t)=>{
                const r = function(o) {
                    return e.$5(n, t, o);
                };
                r.__SMmeta = n.__SMmeta;
                if (o === "new") {
                    return e.$2.addListener(t, r);
                }
                e.$4.push({});
                const a = e.$2.addRetroactiveListener(t, r);
                e.$4.pop();
                return a;
            });
            return new (r("ArbiterToken"))(this, a);
        };
        t_prototype.$5 = function(n, o, a) {
            const t = this.$4[this.$4.length - 1];
            if (t[o] !== false) {
                const i = (e || (e = r("ErrorGuard"))).applyWithGuard(n, null, [
                    o,
                    a
                ]);
                if (i === false) {
                    this.$2.releaseCurrentEvent();
                }
                t[o] = i;
            }
        };
        t_prototype.unsubscribeCurrentSubscription = function() {
            this.$2.removeCurrentListener();
        };
        t_prototype.releaseCurrentPersistentEvent = function() {
            this.$2.releaseCurrentEvent();
        };
        t_prototype.subscribeOnce = function(t, n, r) {
            const e = this;
            const o = this.subscribe(t, function(t, r) {
                e.unsubscribeCurrentSubscription();
                return n(t, r);
            }, r);
            return o;
        };
        t_prototype.unsubscribe = function(t) {
            if (!t.isForArbiterInstance(this)) {
                s(0, 1969);
            }
            t.unsubscribe();
        };
        t_prototype.inform = function(t, n, r) {
            const e = Array.isArray(t);
            t = u(t);
            r = r || "event";
            const o = r === "state" || r === "persistent";
            this.$4.push({});
            for (const i of t){
                if (!i) {
                    s(0, 1970, i);
                }
                this.$3.setHoldingBehavior(i, r);
                this.$2.emitAndHold(i, n);
                this.$6(i, n, o);
            }
            const l = this.$4.pop();
            if (e) {
                return l;
            }
            return l[t[0]];
        };
        t_prototype.query = function(t) {
            const e = this.$3.getHoldingBehavior(t);
            if (!(!e || e === "state")) {
                s(0, 1971, t);
            }
            let n = null;
            this.$3.emitToListener(t, function(e) {
                n = e;
            });
            return n;
        };
        t_prototype.registerCallback = function(t, n) {
            if (typeof t === "function") {
                return this.$1.registerCallback(t, n);
            }
            return this.$1.addDependenciesToExistingCallback(t, n);
        };
        t_prototype.$6 = function(t, n, r) {
            if (n !== null) {
                if (r) {
                    this.$1.satisfyPersistentDependency(t);
                } else {
                    this.$1.satisfyNonPersistentDependency(t);
                }
            }
        };
        t.subscribe = function(n, r, o) {
            return t.prototype.subscribe.apply(c(this), arguments);
        };
        t.unsubscribeCurrentSubscription = function() {
            return t.prototype.unsubscribeCurrentSubscription.apply(c(this));
        };
        t.releaseCurrentPersistentEvent = function() {
            return t.prototype.releaseCurrentPersistentEvent.apply(c(this));
        };
        t.subscribeOnce = function(n, r, o) {
            return t.prototype.subscribeOnce.apply(c(this), arguments);
        };
        t.unsubscribe = function(n) {
            return t.prototype.unsubscribe.apply(c(this), arguments);
        };
        t.inform = function(n, r, o) {
            return t.prototype.inform.apply(c(this), arguments);
        };
        t.informSingle = function(n, r, o) {
            return t.prototype.inform.apply(c(this), arguments);
        };
        t.query = function(n) {
            return t.prototype.query.apply(c(this), arguments);
        };
        t.registerCallback = function(n, r) {
            return t.prototype.registerCallback.apply(c(this), arguments);
        };
        t.$6 = function(n, r, o) {
            return t.prototype.$6.apply(c(this), arguments);
        };
        t.$5 = function(n, r, o) {
            return t.prototype.$5.apply(c(this), arguments);
        };
        return t;
    })();
    var m = ((e)=>{
        function t() {
            let t;
            t = e.call(this) || this;
            t.$ArbiterEventHolder1 = {};
            return t;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setHoldingBehavior = function(t, n) {
            this.$ArbiterEventHolder1[t] = n;
        };
        t_prototype.getHoldingBehavior = function(t) {
            return this.$ArbiterEventHolder1[t];
        };
        t_prototype.holdEvent = function(n, ...args) {
            const t = this.$ArbiterEventHolder1[n];
            if (t !== "persistent") {
                this.$ArbiterEventHolder2(n);
            }
            if (t !== "event") {
                for(var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++){
                    a[i - 1] = arguments[i];
                }
                return e.prototype.holdEvent.call(...[
                    this,
                    n
                ].concat(a));
            }
        };
        t_prototype.$ArbiterEventHolder2 = function(t) {
            const e = this;
            this.emitToListener(t, function() {
                return e.releaseCurrentEvent();
            });
        };
        t_prototype.releaseEvent = function(n) {
            if (n) {
                e.prototype.releaseEvent.call(this, n);
            }
        };
        return t;
    })(r("EventHolder"));
    d.call(d);
    l.default = d;
}, 98);
__d("objectValues", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        return Object.values(e);
    }
    i.default = e;
}, 66);
__d("BootloaderEvents", [
    "Arbiter",
    "objectValues"
], function(t, n, r, o, a, i, l) {
    const e = "bootloader/bootload";
    const s = "bootloader/bootload_started";
    const u = "bootloader/callback_timeout";
    const c = "bootloader/defer_timeout";
    const d = "hasteResponse/handle";
    const m = "bootloader/resource_in_longtail_bt_manifest";
    const p = "bootloader/bootload_error";
    const _ = "bootloader/bootload_endpoint_error";
    const f = new (r("Arbiter"));
    const g = new Set;
    const h = new Set;
    let y = false;
    function C(e, t) {
        return `haste_response_ef:${e}:${t ?? "<unknown>"}`;
    }
    function b(e) {
        const t = new Map;
        for (const n of r("objectValues")(e)){
            for (const [a, i] of n){
                t.set(a, i);
            }
        }
        return t;
    }
    function v() {
        return {
            blocking: new Map,
            nonblocking: new Map,
            default: new Map
        };
    }
    function S(e) {
        g.add(e);
        f.inform(s, e, "persistent");
    }
    function R(t) {
        g.delete(t);
        f.inform(e, t, "persistent");
    }
    function L(e, t) {
        h.add(C(e, t));
    }
    function E(e, t, n) {
        f.inform(C(e, t), n, "persistent");
    }
    function k(e) {
        f.inform(c, e, "persistent");
    }
    function I(e) {
        return f.subscribe(s, function(t, n) {
            return e(n);
        });
    }
    function T(t) {
        return f.subscribe(e, function(e, n) {
            return t(n);
        });
    }
    function D(e) {
        return f.subscribe(c, function(t, n) {
            return e(n);
        });
    }
    function x() {
        return new Set(g);
    }
    function $(e) {
        f.inform(d, e, "persistent");
    }
    function P(e) {
        return f.subscribe(d, function(t, n) {
            const r = C(n.source, n.sourceDetail);
            if (h.has(r)) {
                f.subscribe(r, function(t, efData) {
                    return e(babelHelpers.extends({}, n, {
                        efData
                    }));
                });
                return;
            }
            e(n);
        });
    }
    function N(e) {
        return f.subscribe(m, function(t, n) {
            e(n);
        });
    }
    function M() {
        return y;
    }
    function w(hashes, source) {
        y = true;
        f.inform(m, {
            hashes,
            source
        }, "persistent");
    }
    function A(e) {
        return f.subscribe(u, function(t, n) {
            e(n);
        });
    }
    function F(e) {
        f.inform(u, e, "persistent");
    }
    function O(e) {
        return f.subscribe(p, function(t, n) {
            return e(n);
        });
    }
    function B(e) {
        f.inform(p, e, "persistent");
    }
    function W(e) {
        return f.subscribe(_, function(t, n) {
            return e(n);
        });
    }
    function q(e) {
        f.inform(_, e, "persistent");
    }
    l.flattenResourceMapSet = b;
    l.newResourceMapSet = v;
    l.notifyBootloadStart = S;
    l.notifyBootload = R;
    l.notifyHasteResponseEFStart = L;
    l.notifyHasteResponseEF = E;
    l.notifyDeferTimeout = k;
    l.onBootloadStarted = I;
    l.onBootload = T;
    l.onDeferTimeout = D;
    l.getActiveBootloads = x;
    l.notifyHasteResponse = $;
    l.onHasteResponse = P;
    l.onResourceInLongTailBTManifest = N;
    l.getHasDetectedResourceInLongTailBTManifest = M;
    l.notifyResourceInLongTailBTManifest = w;
    l.onBootloaderCallbackTimeout = A;
    l.notifyBootloaderCallbackTimeout = F;
    l.onBootloadError = O;
    l.notifyBootloadError = B;
    l.onBootloadEndpointError = W;
    l.notifyBootloadEndpointError = q;
}, 98);
__d("SimpleHook", [], function(t, n, r, o, a, i) {
    "use strict";
    class e {
        constructor(){
            this.__callbacks = [];
            this.call = this.$2;
        }
        hasCallback(t) {
            const __callbacks = this.__callbacks;
            return __callbacks.length > 0 && (t == null || __callbacks.some((e)=>e === t || e.$1 === t));
        }
        add(t, n) {
            const e = this;
            let r;
            if (n?.once === true) {
                const o = function() {
                    e.remove(r);
                    t(...arguments);
                };
                o.$1 = t;
                r = o;
            } else {
                r = t;
            }
            this.__callbacks.push(r);
            return r;
        }
        removeLast() {
            return this.__callbacks.pop();
        }
        remove(t) {
            return this.removeIf(function(e) {
                return e === t;
            });
        }
        removeIf(t) {
            const __callbacks = this.__callbacks;
            this.__callbacks = __callbacks.filter((e)=>!t(e));
            return __callbacks.length > this.__callbacks.length;
        }
        clear() {
            this.__callbacks = [];
        }
        $2() {
            const __callbacks = this.__callbacks;
            for(let t = 0, n = __callbacks.length; t < n; ++t){
                const __callback = __callbacks[t];
                __callback(...arguments);
            }
        }
    }
    i.SimpleHook = e;
}, 66);
__d("performanceAbsoluteNowOnAdjust", [
    "SimpleHook"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (o("SimpleHook")).SimpleHook;
    l.default = e;
}, 98);
__d("performanceAbsoluteNow", [
    "performance",
    "performanceAbsoluteNowOnAdjust"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = function() {
        return Date.now();
    };
    function setFallback(e) {
        s = e;
    }
    let c = 0;
    let d = -1;
    const m = typeof (e || (e = r("performance"))) === "object";
    const p = m && typeof (e || (e = r("performance"))).now === "function";
    if (m) {
        if ((e || (e = r("performance"))).timeOrigin) {
            d = (e || (e = r("performance"))).timeOrigin;
        } else if ((e || (e = r("performance"))).timing && (e || (e = r("performance"))).timing.navigationStart) {
            d = (e || (e = r("performance"))).timing.navigationStart;
        }
    }
    let _;
    let adjusted;
    let __adjust = function() {
        return 0;
    };
    if (p && d !== -1) {
        _ = function() {
            return (e || (e = r("performance"))).now() + d;
        };
        adjusted = function() {
            return _() + c;
        };
        __adjust = function() {
            const e = Date.now() - _();
            if (e > 500) {
                c = e;
                r("performanceAbsoluteNowOnAdjust").call(e);
            }
            return e;
        };
        if (typeof window === "object" && typeof window.addEventListener === "function") {
            const h = {
                capture: false,
                passive: true
            };
            window.addEventListener("blur", __adjust, h);
            window.addEventListener("focus", __adjust, h);
        }
    } else {
        adjusted = _ = function() {
            return s();
        };
    }
    const y = {
        setFallback,
        fromRelativeTime: (()=>{
            if (d === -1) {
                const t = p ? Date.now() - (e || (e = r("performance"))).now() : 0;
                return function(e) {
                    return e + t;
                };
            } else {
                return function(e) {
                    return e + d;
                };
            }
        })(),
        __adjust,
        adjusted
    };
    function C() {
        return _();
    }
    C.setFallback = y.setFallback;
    C.fromRelativeTime = y.fromRelativeTime;
    C.__adjust = y.__adjust;
    C.adjusted = y.adjusted;
    l.default = C;
}, 98);
__d("BootloaderEventsManager", [
    "CallbackDependencyManager",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    let e;
    class s {
        constructor(){
            this.$1 = new (r("CallbackDependencyManager"));
            this.$2 = new Map;
        }
        rsrcDone(t) {
            return t;
        }
        bootload(t) {
            return `bl:${t.join(",")}`;
        }
        tierOne(t) {
            return `t1:${t}`;
        }
        tierTwoStart(t) {
            return `t2s:${t}`;
        }
        tierTwo(t) {
            return `t2:${t}`;
        }
        tierThreeStart(t) {
            return `t3s:${t}`;
        }
        tierThree(t) {
            return `t3:${t}`;
        }
        tierOneLog(t) {
            return `t1l:${t}`;
        }
        tierTwoLog(t) {
            return `t2l:${t}`;
        }
        tierThreeLog(t) {
            return `t3l:${t}`;
        }
        beDone(t) {
            return `beDone:${t}`;
        }
        notify(n) {
            this.$2.set(n, (e || (e = r("performanceAbsoluteNow")))());
            this.$1.satisfyPersistentDependency(n);
        }
        getEventTime(t) {
            return this.$2.get(t);
        }
        registerCallback(t, n) {
            this.$1.registerCallback(t, n);
        }
    }
    l.default = s;
}, 98);
__d("nullthrows", [], function(t, n, r, o, a, i) {
    function e(e, t = "Got unexpected null or undefined") {
        if (e != null) {
            return e;
        }
        const n = new Error(t);
        n.framesToPop = 1;
        n.stack;
        throw n;
    }
    i.default = e;
}, 66);
__d("BootloaderPreloader", [
    "invariant",
    "BootloaderDocumentInserter",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "nullthrows"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = new Set;
    const d = new Set;
    function m(e) {
        const e_allResources = e.allResources;
        const a = e?.hsrp?.hblp?.rsrcMap;
        if (a == null) {
            r("FBLogger")("BootloaderPreloader").warn("Missing resource map in worker hrp");
            return;
        }
        if (e_allResources == null) {
            r("FBLogger")("BootloaderPreloader").warn("Missing allResources list in worker hrp");
            return;
        }
        o("BootloaderDocumentInserter").batchDOMInsert(function(e) {
            e_allResources.forEach((t)=>{
                const n = a[t];
                if (!(!n || n.type !== "js")) {
                    p(n, e, "prefetch");
                }
            });
        });
    }
    function p(t, n, o = "preload", a, i) {
        if (!(e || (e = r("ExecutionEnvironment"))).isInWorker) {
            const l = r("nullthrows")(n);
            let m;
            switch(t.type){
                case "async":
                    return;
                case "css":
                    m = "style";
                    break;
                case "js":
                    m = "script";
                    break;
                default:
                    m = t.type;
                    s(0, 3721);
            }
            if (!(c.has(t.src) || o === "prefetch" && d.has(t.src)) && (o === "preload" ? c.add(t.src) : o === "prefetch" ? d.add(t.src) : s(0, 77517), t.d !== 1)) {
                const p = document.createElement("link");
                if (i != null) {
                    p.onerror = (u || (u = r("ErrorGuard"))).guard(function() {
                        i();
                    });
                }
                p.href = t.src;
                p.rel = o;
                if (o === "preload") {
                    p.as = m;
                }
                if (a != null) {
                    p.setAttribute("fetchpriority", a);
                }
                if (!t.nc) {
                    p.crossOrigin = "anonymous";
                }
                l.appendChild(p);
            }
        }
    }
    l.preloadWorkerJSFromHRP = m;
    l.preloadResource = p;
}, 98);
__d("BootloaderRetryTracker", [
    "ErrorGuard",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    class u {
        constructor(e){
            this.$2 = [];
            this.$3 = new Map;
            this.$1 = e;
            this.$4 = this.$1.retries.length > 0;
        }
        getAllRetryAttempts_FOR_DEBUG_ONLY() {
            return this.$3;
        }
        getNumRetriesForSource(t) {
            return this.$3.get(t) ?? 0;
        }
        maybeScheduleRetry(o, a, i) {
            const n = this;
            const l = this.getNumRetriesForSource(o);
            if (!this.$5() || l >= this.$1.retries.length) {
                i();
                return;
            }
            this.$2.push((e || (e = r("performanceAbsoluteNow")))());
            this.$3.set(o, l + 1);
            t.setTimeout(function() {
                if (n.$5()) {
                    a();
                } else {
                    i();
                }
            }, this.$1.retries[l]);
        }
        maybeRetryImmediately(n, o, a) {
            const t = this.getNumRetriesForSource(n);
            if (!this.$5() || t >= this.$1.retries.length) {
                a();
                return;
            }
            this.$2.push((e || (e = r("performanceAbsoluteNow")))());
            this.$3.set(n, t + 1);
            o();
        }
        $5() {
            if (!this.$4) {
                return false;
            }
            const length = this.$2.length;
            if (length < this.$1.abortNum) {
                return true;
            }
            const t = this.$2[length - 1] - this.$2[length - this.$1.abortNum];
            if (t < this.$1.abortTime) {
                (s || (s = r("ErrorGuard"))).applyWithGuard(this.$1.abortCallback, null, []);
                this.$4 = false;
            }
            return this.$4;
        }
    }
    l.default = u;
}, 98);
__d("requireCond", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        const r = new Error("Cannot use raw untransformed requireCond.");
        r.stack;
        throw r;
    }
    i.default = e;
}, 66);
__d("Promise", [
    "cr:6640"
], function(t, n, r, o, a, i) {
    "use strict";
    const l = n("cr:6640") ?? t.Promise;
    if (!l.allSettled) {
        l.allSettled = function(e) {
            let t;
            if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in e) {
                t = Array.from(e);
            } else {
                return new l(function() {
                    const e = new TypeError("Promise.allSettled must be passed an iterable.");
                    e.stack;
                    throw e;
                });
            }
            const n = Array(t.length);
            const r = ()=>{
                const e = t[o];
                const r = typeof e === "object" && e !== null && typeof e.then === "function";
                n[o] = r ? new l(function(t, n) {
                    e.then((n)=>{
                        t({
                            status: "fulfilled",
                            value: n
                        });
                    }, (reason)=>{
                        t({
                            status: "rejected",
                            reason
                        });
                    });
                }) : l.resolve({
                    status: "fulfilled",
                    value: e
                });
            };
            for(var o = 0, a = t.length; o < a; ++o){
                r();
            }
            return l.all(n);
        };
    }
    if (!l.prototype.finally) {
        l.prototype.finally = function(e) {
            return this.then((t)=>l.resolve(e()).then(()=>t), (t)=>l.resolve(e()).then(()=>{
                    throw t;
                }));
        };
    }
    a.exports = l;
}, null);
__d("$InternalEnum", [], function(t, n, r, o, a, i) {
    "use strict";
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const l = typeof WeakMap === "function" ? new WeakMap : new Map;
    function s(e) {
        const t = l.get(e);
        if (t !== undefined) {
            return t;
        }
        const n = new Map;
        Object.getOwnPropertyNames(e).forEach((t)=>{
            n.set(e[t], t);
        });
        try {
            l.set(e, n);
        } catch (e) {}
        return n;
    }
    const u = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(t) {
                return s(this).has(t);
            }
        },
        cast: {
            value: function(t) {
                if (this.isValid(t)) {
                    return t;
                }
            }
        },
        members: {
            value: function() {
                return s(this).keys();
            }
        },
        getName: {
            value: function(t) {
                return s(this).get(t);
            }
        }
    }));
    function c(t) {
        const n = Object.create(u);
        for(const r in t){
            if (hasOwnProperty.call(t, r)) {
                Object.defineProperty(n, r, {
                    value: t[r]
                });
            }
        }
        return Object.freeze(n);
    }
    const d = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(n) {
                if (typeof n === "string") {
                    return hasOwnProperty.call(this, n);
                }
                return false;
            }
        },
        cast: {
            value: u.cast
        },
        members: {
            value: function() {
                return Object.getOwnPropertyNames(this).values();
            }
        },
        getName: {
            value: function(t) {
                return t;
            }
        }
    }));
    c.Mirrored = function(t) {
        const e = Object.create(d);
        for(let n = 0, r = t.length; n < r; ++n){
            Object.defineProperty(e, t[n], {
                value: t[n]
            });
        }
        return Object.freeze(e);
    };
    Object.freeze(c.Mirrored);
    a.exports = Object.freeze(c);
}, null);
__d("RequireDeferredFactoryEvent", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum")({
        SUPPORT_DATA: "sd",
        CSS: "css"
    });
    i.default = e;
}, 66);
__d("ifRequired", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        let r;
        let a;
        if ((r = o) != null) {
            r.call(null, [
                e
            ], function(e) {
                a = e;
            });
        }
        if (a && t) {
            return t(a);
        }
        if (!a && n) {
            return n();
        }
    }
    i.default = e;
}, 66);
__d("ifRequireable", [
    "ifRequired"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return r("ifRequired").call(null, e, t, n);
    }
    l.default = e;
}, 98);
__d("ErrorPubSub", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").ErrorPubSub;
}, 98);
__d("PromiseAnnotate", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        e.displayName = t;
        return e;
    }
    function l({ displayName }) {
        if (typeof displayName === "string") {
            return displayName;
        }
        return null;
    }
    i.setDisplayName = e;
    i.getDisplayName = l;
}, 66);
__d("asyncToGeneratorRuntime", [
    "Promise"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    function l(t, r, o, a, i, l, s) {
        try {
            var u = t[l](s);
            var c = u.value;
        } catch (error) {
            o(error);
            return;
        }
        if (u.done) {
            r(c);
        } else {
            (e || (e = n("Promise"))).resolve(c).then(a, i);
        }
    }
    function s(t) {
        return function() {
            const r = this;
            const o = arguments;
            return new (e || (e = n("Promise")))(function(e, n) {
                const a = t.apply(r, o);
                function i(t) {
                    l(a, e, n, i, s, "next", t);
                }
                function s(t) {
                    l(a, e, n, i, s, "throw", t);
                }
                i(undefined);
            });
        };
    }
    i.asyncToGenerator = s;
}, 66);
__d("getErrorSafe", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").getErrorSafe;
}, 98);
__d("promiseDone", [
    "ErrorPubSub",
    "PromiseAnnotate",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        const t = r("getErrorSafe")(e);
        t.loggingSource = "PROMISE_DONE";
        (s || (s = r("ErrorPubSub"))).reportError(t);
    }
    function c(e) {
        return (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                try {
                    const n = yield e(t);
                    return n;
                } catch (error) {
                    u(error);
                }
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })();
    }
    function d(t, n, r) {
        const a = r != null ? c(r) : null;
        const i = arguments.length > 1 ? t.then(n, a) : t;
        if (r == null) {
            i.then(null, u);
        }
        const l = (e || (e = o("PromiseAnnotate"))).getDisplayName(t);
        if (l != null) {
            (e || (e = o("PromiseAnnotate"))).setDisplayName(i, l);
        }
    }
    l.default = d;
}, 98);
__d("requireWeak", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        let n;
        if ((n = o) != null) {
            n.call(null, [
                e
            ], t);
        }
    }
    i.default = e;
}, 66);
__d("RequireDeferredReference", [
    "CallbackDependencyManager",
    "Promise",
    "RequireDeferredFactoryEvent",
    "ifRequireable",
    "ifRequired",
    "performanceNow",
    "promiseDone",
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = 1;
    const c = 2;
    const d = 16;
    const m = u | c | d;
    let p = null;
    function _() {
        if (p == null) {
            p = new (r("CallbackDependencyManager"));
        }
        return p;
    }
    function f(e, t) {
        return `${e}:${t}`;
    }
    const g = new Set;
    const h = (()=>{
        function t(e) {
            this.$1 = e;
        }
        const t_prototype = t.prototype;
        t_prototype.setRequireDeferredForDisplay = function(t) {
            this.$2 = t;
        };
        t_prototype.isRequireDeferredForDisplay = function() {
            return this.$2;
        };
        t_prototype.getModuleId = function() {
            const e = this.$1;
            return e;
        };
        t_prototype.getModuleIdAsRef = function() {
            return this.$1;
        };
        t_prototype.preload = function() {};
        t_prototype.getModuleIfRequired = function() {
            return r("ifRequired").call(null, this.$1, function(e) {
                return e;
            });
        };
        t_prototype.getModuleIfRequireable = function() {
            return r("ifRequireable").call(null, this.$1, function(e) {
                return e;
            });
        };
        t_prototype.isAvailableInSSR_DO_NOT_USE = function() {
            return true;
        };
        t_prototype.$3 = function(t) {
            const e = this;
            const n = r("ifRequireable")("InteractionTracingMetrics", function(t) {
                return t.currentInteractionLogger().addRequireDeferred(e.getModuleId(), (s || (s = r("performanceNow")))());
            });
            let o = false;
            const a = (a, i)=>{
                n?.((s || (s = r("performanceNow")))(), i);
                if (!o) {
                    t(a);
                }
            };
            r("ifRequireable").call(null, this.$1, function(e) {
                return a(e, true);
            }, function() {
                r("requireWeak").call(null, e.$1, function(e) {
                    return a(e, false);
                });
            });
            return {
                remove: function() {
                    o = true;
                }
            };
        };
        t_prototype.load = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e) {
                return t.$3(e);
            });
        };
        t_prototype.__setRef = function(t) {
            return this;
        };
        t_prototype.onReadyImmediately = function(t) {
            return this.$3(t);
        };
        t_prototype.onReady = function(o) {
            let t = false;
            const a = this.$3(function(a) {
                r("promiseDone")((e || (e = n("Promise"))).resolve().then(()=>{
                    if (!t) {
                        o(a);
                    }
                }));
            });
            return {
                remove: function() {
                    t = true;
                    a.remove();
                }
            };
        };
        t_prototype.loadImmediately = function(t) {
            return this.$3(t);
        };
        t.getRDModuleName_DO_NOT_USE = function(t) {
            return `rd:${t}`;
        };
        t.unblock = function(o, a) {
            const e = _();
            const i = (i)=>{
                if (!g.has(i)) {
                    g.add(i);
                    e.registerCallback(function() {
                        define(t.getRDModuleName_DO_NOT_USE(i), [
                            i
                        ], function() {
                            n.call(null, i);
                        }, m);
                    }, Array.from(r("RequireDeferredFactoryEvent").members(), function(e) {
                        return f(i, e);
                    }));
                }
                e.satisfyPersistentDependency(f(i, a));
            };
            for (const l of o){
                i(l);
            }
        };
        return t;
    })();
    l.default = h;
}, 98);
__d("RDRequireDeferredReference", [
    "RequireDeferredReference"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.disableForSSR_DO_NOT_USE = function() {
            this.$RDRequireDeferredReference$p_1 = false;
        };
        const t_prototype = t.prototype;
        t_prototype.isAvailableInSSR_DO_NOT_USE = function() {
            return this.constructor.$RDRequireDeferredReference$p_1;
        };
        return t;
    })(r("RequireDeferredReference"));
    e.$RDRequireDeferredReference$p_1 = true;
    l.default = e;
}, 98);
__d("requireDeferred", [
    "RDRequireDeferredReference"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    function s(t, n) {
        e[t] = n;
    }
    function u(t) {
        return e[t];
    }
    function c(e) {
        const t = u(e);
        if (t) {
            return t;
        }
        const n = new (r("RDRequireDeferredReference"))(e);
        n.setRequireDeferredForDisplay(false);
        s(e, n);
        return n;
    }
    l.default = c;
}, 98);
__d("BootloaderUsageLoggerUtils", [
    "SiteData",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("ODS").__setRef("BootloaderUsageLoggerUtils");
    const s = new Set;
    const u = new Set;
    function c(e, ...n_1) {
        return n_1.map((t, n)=>{
            const r = e[n];
            p(r, "loaded");
            return ((e)=>{
                switch(e){
                    case "function":
                        return new Proxy(t, d(r));
                    case "object":
                        return new Proxy(t, m(r));
                    default:
                        return t;
                }
            })(typeof t);
        });
    }
    function d(e) {
        return {
            apply: function(n, r, o) {
                p(e, "used");
                return Reflect.apply(n, r, o);
            }
        };
    }
    function m(e) {
        return {
            get: function(n, r) {
                p(e, "used");
                return Reflect.get(n, r);
            }
        };
    }
    function p(e, t) {
        const n = t === "loaded" ? u : s;
        if (!n.has(e)) {
            _(e, t);
            n.add(e);
        }
    }
    function _(t, n) {
        e.onReady(function(e) {
            e.bumpEntityKey(454, `bootloader_load_modules.${o("SiteData").pkg_cohort}`, `${t}.module_${n}`);
        });
    }
    l.getProxyArgs = c;
    l.bumpODSKey = _;
}, 98);
__d("clearInterval", [
    "cr:7385"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:7385");
}, 98);
__d("isEmpty", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        if (Array.isArray(e)) {
            return e.length === 0;
        }
        if (typeof e === "object") {
            if (e) {
                if (!(!u(e) || e.size === undefined)) {
                    s(0, 1445);
                }
                for(const t in e){
                    return false;
                }
            }
            return true;
        } else {
            return !e;
        }
    }
    function u(e) {
        if (typeof Symbol === "undefined") {
            return false;
        }
        return e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null;
    }
    l.default = e;
}, 98);
__d("setIntervalAcrossTransitions", [
    "cr:7389"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:7389");
}, 98);
__d("CSSPoller", [
    "CSSLoaderConfig",
    "FBLogger",
    "clearInterval",
    "getErrorSafe",
    "isEmpty",
    "setIntervalAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 20;
    const u = new Map;
    var c = {
        expirationTime: null,
        startCSSPoll: function(t, onLoad, onError, link) {
            const e = u.size !== 0;
            c.expirationTime = Date.now() + r("CSSLoaderConfig").timeout;
            u.set(t, {
                link,
                onLoad,
                onError,
                pollAttempts: 0
            });
            if (!e) var i = r("setIntervalAcrossTransitions")(function() {
                if (c.runCSSPolls()) {
                    r("clearInterval")(i);
                }
            }, s);
        },
        runCSSPolls: function() {
            const t = [];
            const c_expirationTime = c.expirationTime;
            if (c_expirationTime != null && Date.now() >= c_expirationTime) {
                for (const o of u.values()){
                    r("FBLogger")("CSSPoller").warn("Failed to poll CSS: %s with CORS setting %s after %d attempts", o.link.href, o.link.crossOrigin, o.pollAttempts);
                    t.push(o.onError);
                }
                u.clear();
            } else {
                for (const [i, l] of u){
                    const s = l.link;
                    try {
                        const d = s.sheet;
                        if (d != null) {
                            const p = d.cssRules ?? d.rules;
                            if (p != null) {
                                t.push(l.onLoad);
                                u.delete(i);
                            }
                        }
                    } catch (error) {
                        l.pollAttempts++;
                        r("FBLogger")("CSSPoller").catching(r("getErrorSafe")(error)).warn("Poll technique was unable to poll CSS: %s with CORS setting %s at attempt %d", s.href, s.crossOrigin, l.pollAttempts);
                    }
                }
            }
            if (!(e || (e = r("isEmpty")))(t)) {
                for(let _ = 0; _ < t.length; _++){
                    t[_]();
                }
                c.expirationTime = Date.now() + r("CSSLoaderConfig").timeout;
            }
            return u.size === 0;
        }
    };
    l.default = c;
}, 98);
__d("CircularBuffer", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(e){
            if (e <= 0) {
                throw r("FBLogger")("comet_infra").mustfixThrow("Buffer size should be a positive integer");
            }
            this.$1 = e;
            this.$2 = 0;
            this.$3 = [];
            this.$4 = [];
        }
        write(t) {
            const e = this;
            if (this.$3.length < this.$1) {
                this.$3.push(t);
            } else {
                this.$4.forEach((t)=>t(e.$3[e.$2]));
                this.$3[this.$2] = t;
                this.$2++;
                this.$2 %= this.$1;
            }
            return this;
        }
        onEvict(t) {
            this.$4.push(t);
            return this;
        }
        read() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
        }
        expand(t) {
            if (t > this.$1) {
                const e = this.read();
                this.$2 = 0;
                this.$3 = e;
                this.$1 = t;
            }
            return this;
        }
        dropFirst(t) {
            if (t <= this.$1) {
                const e = this.read();
                this.$2 = 0;
                e.splice(0, t);
                this.$3 = e;
            }
            return this;
        }
        clear() {
            this.$2 = 0;
            this.$3 = [];
            return this;
        }
        currentSize() {
            return this.$3.length;
        }
        lastElement() {
            return this.$3[this.$2];
        }
    }
    l.default = e;
}, 98);
__d("ResourceTypes", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    i.default = e;
}, 66);
__d("TimingAnnotations", [], function(t, n, r, o, a, i) {
    class e {
        addStringAnnotation(t, n) {
            return this;
        }
        addSetAnnotation(t, n) {
            return this;
        }
        addSetElement(t, n) {
            return this;
        }
        registerOnBeforeSend(t) {
            return this;
        }
        addVectorAnnotation(t, n) {
            return this;
        }
        addVectorElement(t, n) {
            return this;
        }
    }
    class l {
        constructor(){
            this.$1 = null;
            this.$2 = null;
            this.$3 = null;
            this.$4 = [];
        }
        addStringAnnotation(t, n) {
            this.$2 = this.$2 || new Map;
            this.$2.set(t, n);
            return this;
        }
        addSetAnnotation(t, n) {
            const e = this.$1 || new Map;
            const r = e.get(t) || new Set;
            n.forEach((e)=>r.add(e));
            e.set(t, r);
            this.$1 = e;
            return this;
        }
        addSetElement(t, n) {
            const e = this.$1 || new Map;
            const r = e.get(t) || new Set;
            r.add(n);
            e.set(t, r);
            this.$1 = e;
            return this;
        }
        addVectorAnnotation(t, n) {
            this.$3 = this.$3 || new Map;
            this.$3.set(t, n);
            return this;
        }
        addVectorElement(t, n) {
            const e = this.$3 = this.$3 || new Map;
            const r = this.$3.get(t) || [];
            r.push(n);
            e.set(t, r);
            return this;
        }
        registerOnBeforeSend(t) {
            this.$4.push(t);
            return this;
        }
        prepareToSend() {
            const e = this;
            this.$4.forEach((t)=>t(e));
            this.$4 = [];
            const setProps = {};
            if (this.$1 != null) {
                for (const [r, o] of this.$1){
                    setProps[r] = Array.from(o.values());
                }
            }
            const stringProps = {};
            if (this.$2 != null) {
                for (const [l, s] of this.$2){
                    stringProps[l] = s;
                }
            }
            const vectorProps = {};
            if (this.$3 != null) {
                for (const [d, m] of this.$3){
                    vectorProps[d] = m;
                }
            }
            return {
                setProps,
                stringProps,
                vectorProps
            };
        }
        static combine(t, n) {
            let e;
            if (t != null && n != null) {
                t.stringProps = babelHelpers.extends({}, n.stringProps, t.stringProps);
                t.setProps = babelHelpers.extends({}, n.setProps, t.setProps);
                e = t;
            } else if (t != null) {
                e = t;
            } else if (n != null) {
                e = n;
            }
            return e;
        }
    }
    l.EmptyTimingAnnotations = e;
    l.EmptyTraceTimingAnnotations = e;
    l.TraceTimingAnnotations = l;
    i.default = l;
}, 66);
__d("BaseDeserializePHPQueryData", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
    function l(e) {
        if (e === "hasOwnProperty" || e === "__proto__") {
            return "🝖";
        }
        return e;
    }
    function s(t, n) {
        if (t == null || t === "") {
            return {};
        }
        const r = {};
        const o = t.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        const a = o.split("&");
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        for(let s = 0, u = a.length; s < u; s++){
            const c = a[s].match(e);
            if (c) {
                const _ = c[2].split(/\]\[|\[|\]/).slice(0, -1);
                const f = c[1];
                const g = n(c[3] || "");
                _[0] = f;
                let h = r;
                for(let y = 0; y < _.length - 1; y++){
                    const C = l(_[y]);
                    if (C) {
                        if (!hasOwnProperty.call(h, C)) {
                            const b = _[y + 1] && !_[y + 1].match(/^\d{1,3}$/) ? {} : [];
                            h[C] = b;
                            if (h[C] !== b) {
                                return r;
                            }
                        }
                        h = h[C];
                    } else {
                        if (_[y + 1] && !_[y + 1].match(/^\d{1,3}$/)) {
                            h.push({});
                        } else {
                            h.push([]);
                        }
                        h = h[h.length - 1];
                    }
                }
                if (h instanceof Array && _[_.length - 1] === "") {
                    h.push(g);
                } else {
                    h[l(_[_.length - 1])] = g;
                }
            } else {
                const d = a[s].indexOf("=");
                if (d === -1) {
                    r[n(a[s])] = null;
                } else {
                    const m = a[s].substring(0, d);
                    const p = a[s].substring(d + 1);
                    r[n(m)] = n(p);
                }
            }
        }
        return r;
    }
    i.deserialize = s;
}, 66);
__d("flattenPHPQueryData", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
        return u(e, "", {});
    }
    function u(e, t, n) {
        if (e == null) {
            n[t] = undefined;
        } else if (typeof e === "object") {
            if (typeof e.appendChild === "function") {
                s(0, 2616);
            }
            for(const r in e){
                if (r !== "$$typeof" && Object.prototype.hasOwnProperty.call(e, r) && e[r] !== undefined) {
                    u(e[r], t ? `${t}[${r}]` : r, n);
                }
            }
        } else {
            n[t] = e;
        }
        return n;
    }
    l.default = e;
}, 98);
__d("PHPQuerySerializer", [
    "BaseDeserializePHPQueryData",
    "flattenPHPQueryData"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = [];
        const n = r("flattenPHPQueryData")(e);
        for(const o in n){
            if (Object.prototype.hasOwnProperty.call(n, o)) {
                const a = encodeComponent(o);
                if (n[o] === undefined) {
                    t.push(a);
                } else {
                    t.push(`${a}=${encodeComponent(String(n[o]))}`);
                }
            }
        }
        return t.join("&");
    }
    function encodeComponent(e) {
        return encodeURIComponent(e).replace(/%5D/g, "]").replace(/%5B/g, "[");
    }
    function u(e) {
        return o("BaseDeserializePHPQueryData").deserialize(e, c);
    }
    function c(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (t) {
            return e;
        }
    }
    const d = {
        decodeComponent: c,
        deserialize: u,
        encodeComponent,
        serialize: e
    };
    i.exports = d;
}, 34);
__d("PHPQuerySerializerNoEncoding", [
    "BaseDeserializePHPQueryData",
    "flattenPHPQueryData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = [];
        const n = r("flattenPHPQueryData")(e);
        for(const o in n){
            if (Object.prototype.hasOwnProperty.call(n, o)) {
                const a = o;
                if (n[o] === undefined) {
                    t.push(a);
                } else {
                    t.push(`${a}=${String(n[o])}`);
                }
            }
        }
        return t.join("&");
    }
    function encodeComponent(e) {
        return e;
    }
    function u(e) {
        return o("BaseDeserializePHPQueryData").deserialize(e, c);
    }
    function c(e) {
        return e;
    }
    const d = {
        decodeComponent: c,
        deserialize: u,
        encodeComponent,
        serialize: e
    };
    l.default = d;
}, 98);
__d("ReloadPage", [
    "Env",
    "ifRequireable"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(n) {
        const o = r("ifRequireable")("BlueCompatRouter", function(e) {
            return e;
        });
        if ((e || (e = r("Env"))).isCQuick && o) {
            o.sendMessage({
                compatAction: "reload"
            });
            return;
        }
        t.window.location.reload(n);
    }
    function u(e) {
        t.setTimeout(s, e);
    }
    l.now = s;
    l.delay = u;
}, 98);
__d("PHPStrictQuerySerializer", [
    "PHPQuerySerializer",
    "flattenPHPQueryData"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        const t = [];
        const n = r("flattenPHPQueryData")(e);
        for(const o in n){
            if (Object.prototype.hasOwnProperty.call(n, o)) {
                const a = u(o);
                if (n[o] === undefined) {
                    t.push(a);
                } else {
                    t.push(`${a}=${u(String(n[o]))}`);
                }
            }
        }
        return t.join("&");
    }
    function u(e) {
        return encodeURIComponent(e);
    }
    l.serialize = s;
    l.encodeComponent = u;
    l.deserialize = (e || (e = o("PHPQuerySerializer"))).deserialize;
    l.decodeComponent = e.decodeComponent;
}, 98);
__d("URIRFC3986", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
    function l(t) {
        if (t.trim() === "") {
            return null;
        }
        const n = t.match(e);
        if (n == null) {
            return null;
        }
        const authority = n[2] ? n[2].substr(2) : null;
        const scheme = n[1] ? n[1].substr(0, n[1].length - 1) : null;
        const a = {
            uri: n[0] ? n[0] : null,
            scheme,
            authority,
            userinfo: n[3] ? n[3].substr(0, n[3].length - 1) : null,
            host: n[2] ? n[4] : null,
            port: n[5] && n[5].substr(1) ? parseInt(n[5].substr(1), 10) : null,
            path: n[6] ? n[6] : null,
            query: n[7] ? n[7].substr(1) : null,
            fragment: n[8] ? n[8].substr(1) : null,
            isGenericURI: authority === null && !!scheme
        };
        return a;
    }
    i.parse = l;
}, 66);
__d("URISchemes", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set([
        "about",
        "accountscenter",
        "aidemos",
        "aistudio",
        "apk",
        "blob",
        "barcelona",
        "cmms",
        "fb",
        "fba",
        "fbatwork",
        "fb-ama",
        "fb-internal",
        "fb-workchat",
        "fb-workchat-secure",
        "fb-messenger",
        "fb-messenger-public",
        "fb-messenger-group-thread",
        "fb-page-messages",
        "fb-pma",
        "fbagenthome",
        "fbcf",
        "fbconnect",
        "fbinternal",
        "fbmobilehome",
        "mobilehome",
        "fbrpc",
        "file",
        "flipper",
        "ftp",
        "gtalk",
        "http",
        "https",
        "mailto",
        "wss",
        "ms-app",
        "intent",
        "itms",
        "itms-apps",
        "itms-services",
        "lasso",
        "market",
        "svn+ssh",
        "fbstaging",
        "tel",
        "sms",
        "pebblejs",
        "sftp",
        "whatsapp",
        "moments",
        "flash",
        "fblite",
        "chrome-extension",
        "webcal",
        "instagram",
        "iglite",
        "fb124024574287414",
        "fb124024574287414rc",
        "fb124024574287414master",
        "fb1576585912599779",
        "fb929757330408142",
        "designpack",
        "fbpixelcloud",
        "fbapi20130214",
        "fb1196383223757595",
        "tbauth",
        "oculus",
        "oculus.store",
        "oculus.feed",
        "fb1680871178595114",
        "fb1543576032349914",
        "fb1635404796768116",
        "fb147781309031234",
        "oculusstore",
        "socialplatform",
        "odh",
        "com.oculus.rd",
        "aria",
        "skype",
        "ms-windows-store",
        "callto",
        "messenger",
        "workchat",
        "fb236786383180508",
        "fb1775440806014337",
        "data",
        "fb-mk",
        "munki",
        "origami-file",
        "fb-nimble-vrsrecorder",
        "fb-nimble-monohandtrackingvis",
        "together",
        "togetherbl",
        "horizonlauncher",
        "horizon",
        "venues",
        "whatsapp-consumer",
        "whatsapp-smb",
        "fb-ide-opener",
        "fb-vscode",
        "fb-vscode-insiders",
        "fb-vscode-dev",
        "editor",
        "spark-studio",
        "spark-player",
        "spark-simulator",
        "meta-spatial-editor",
        "cosmo-player",
        "arstudio",
        "manifold",
        "origami-internal",
        "origami-public",
        "stella",
        "mwa",
        "mattermost",
        "logaggregator",
        "pcoip",
        "cinema",
        "home",
        "oculus360photos",
        "systemux",
        "content",
        "moonstone",
        "hsr-asset-viewer",
        "upi",
        "phonepe",
        "gpay",
        "tez",
        "paytmmp",
        "bhim",
        "q4bconfigurator",
        "q4bnux",
        "fb-viewapp",
        "meta-ai",
        "vibes",
        "x-safari-https",
        "meta-bloks",
        "facebook-horizon",
        "fbboost",
        "ctrl-hub",
        "ctrl-launcher",
        "hsr-editor",
        "assethub",
        "gizmo",
        "aura",
        "hatch",
        "basel",
        "lantern",
        "fb-owl",
        "glam"
    ]);
    const l = n("$InternalEnum")({
        EXPLICITLY_ALLOWED_SCHEMES_ONLY: "explicitly_allowed_schemes_only",
        INCLUDE_DEFAULTS: "include_defaults"
    });
    function s(t, n = l.INCLUDE_DEFAULTS, r) {
        if (t == null || t === "") {
            return true;
        }
        return r?.has(t.toLowerCase()) || n === l.INCLUDE_DEFAULTS && e.has(t.toLowerCase());
    }
    i.Options = l;
    i.isAllowed = s;
}, 66);
__d("err", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").err;
}, 98);
__d("isSameOrigin", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        if (!e.getProtocol() || !e.getDomain() || !t.getProtocol() || !t.getDomain()) {
            return false;
        }
        return e.getOrigin() === t.getOrigin();
    }
    i.default = e;
}, 66);
__d("setHostSubdomain", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = e.split(".");
        if (n.length < 3) {
            n.unshift(t);
        } else {
            n[0] = t;
        }
        return n.join(".");
    }
    i.default = e;
}, 66);
__d("URIAbstractBase", [
    "invariant",
    "FBLogger",
    "PHPStrictQuerySerializer",
    "URIRFC3986",
    "URISchemes",
    "err",
    "isSameOrigin",
    "setHostSubdomain"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = {
        deserialize: o("PHPStrictQuerySerializer").deserialize,
        serialize: o("PHPStrictQuerySerializer").serialize
    };
    const d = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]");
    const m = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
    const p = [];
    const _ = (()=>{
        function t(n, r, a = (e || (e = o("URISchemes"))).Options.INCLUDE_DEFAULTS, i) {
            if (!r) {
                s(0, 2966);
            }
            this.$9 = r;
            this.$7 = "";
            this.$1 = "";
            this.$6 = "";
            this.$5 = "";
            this.$3 = "";
            this.$4 = false;
            this.$8 = {};
            this.$2 = false;
            this.$12 = a;
            this.$13 = i;
            t.parse(this, n, true, r);
            this.$11 = false;
        }
        t.parse = function(a, i, l, s) {
            if (i == null || i === "") {
                return true;
            }
            if (i instanceof t) {
                a.setProtocol(i.getProtocol());
                a.setDomain(i.getDomain());
                a.setPort(i.getPort());
                a.setPath(i.getPath());
                a.setQueryData(s.deserialize(s.serialize(i.getQueryData())));
                a.setFragment(i.getFragment());
                a.setIsGeneric(i.getIsGeneric());
                a.setForceFragmentSeparator(i.getForceFragmentSeparator());
                a.setOriginalRawQuery(i.getOriginalRawQuery());
                a.setQueryParamModified(false);
                return true;
            }
            const c = i.toString().trim();
            const p = (u || (u = o("URIRFC3986"))).parse(c) || {
                fragment: null,
                scheme: null,
                query: null
            };
            if (!l && !(e || (e = o("URISchemes"))).isAllowed(p.scheme, a.$12, a.$13) || (a.setProtocol(p.scheme || ""), !l && d.test(p.host || ""))) {
                return false;
            }
            a.setDomain(p.host || "");
            a.setPort(p.port ?? "");
            a.setPath(p.path || "");
            if (l) {
                a.setQueryData(s.deserialize(p.query || "") || {});
            } else {
                try {
                    a.setQueryData(s.deserialize(p.query || "") || {});
                } catch (e) {
                    return false;
                }
            }
            a.setFragment(p.fragment || "");
            if (p.fragment === "") {
                a.setForceFragmentSeparator(true);
            }
            a.setIsGeneric(p.isGenericURI || false);
            a.setOriginalRawQuery(p.query);
            a.setQueryParamModified(false);
            if (p.userinfo !== null) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (userinfo is not allowed in a URI): ${c}`);
                }
                return false;
            }
            if (!a.getDomain() && a.getPath().indexOf("\\") !== -1) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (no domain but multiple back-slashes): ${c}`);
                }
                return false;
            }
            if (!c.startsWith("#") && !a.getProtocol() && m.test(c)) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (unsafe protocol-relative URLs): ${c}'`);
                }
                return false;
            }
            if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/")) {
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (domain and path where path lacks leading slash): ${c}`);
                }
                return false;
            }
            if (a.getProtocol() && a.getProtocol() !== "file" && !a.getIsGeneric() && !a.getDomain() && a.getPath() !== "") {
                r("FBLogger")("uri").warn(`URI.parse: invalid URI (protocol "${a.getProtocol()}" with no domain)`);
                if (l) {
                    throw r("err")(`URI.parse: invalid URI (protocol and path but no domain): ${c}`);
                }
                return false;
            }
            return true;
        };
        t.tryParse = function(n, r, o, a) {
            const e = new t(null, r, o, a);
            if (t.parse(e, n, false, r)) {
                return e;
            }
            return null;
        };
        t.isValid = function(n, r, o, a) {
            return !!t.tryParse(n, r, o, a);
        };
        const t_prototype = t.prototype;
        t_prototype.setProtocol = function(n) {
            if (!(e || (e = o("URISchemes"))).isAllowed(n, this.$12, this.$13)) {
                s(0, 11793, n);
            }
            this.$7 = n;
            return this;
        };
        t_prototype.getProtocol = function() {
            return (this.$7 || "").toLowerCase();
        };
        t_prototype.setSecure = function(t) {
            return this.setProtocol(t ? "https" : "http");
        };
        t_prototype.isSecure = function() {
            return this.getProtocol() === "https";
        };
        t_prototype.setDomain = function(t) {
            if (d.test(t)) {
                throw r("err")(`URI.setDomain: unsafe domain specified: ${t} for url ${this.toString()}`);
            }
            this.$1 = t;
            return this;
        };
        t_prototype.getDomain = function() {
            return this.$1;
        };
        t_prototype.setPort = function(t) {
            this.$6 = t;
            return this;
        };
        t_prototype.getPort = function() {
            return this.$6;
        };
        t_prototype.setPath = function(t) {
            this.$5 = t;
            return this;
        };
        t_prototype.getPath = function() {
            return this.$5;
        };
        t_prototype.addQueryData = function(t, n) {
            if (Object.prototype.toString.call(t) === "[object Object]") {
                Object.assign(this.$8, t);
            } else {
                this.$8[t] = n;
            }
            this.$11 = true;
            return this;
        };
        t_prototype.setQueryData = function(t) {
            this.$8 = t;
            this.$11 = true;
            return this;
        };
        t_prototype.getQueryData = function() {
            return this.$8;
        };
        t_prototype.setQueryString = function(t) {
            return this.setQueryData(this.$9.deserialize(t));
        };
        t_prototype.getQueryString = function(t = false, n = function() {
            return false;
        }, r = null) {
            return this.$14(false, t, n, r);
        };
        t_prototype.$14 = function(t = false, n = false, r = function() {
            return false;
        }, o = null) {
            if (!this.$11 && (n || r(this.getDomain()))) {
                return this.$10 ?? "";
            }
            return (t && o ? o : this.$9).serialize(this.getQueryData());
        };
        t_prototype.removeQueryData = function(t) {
            const e = Array.isArray(t) ? t : [
                t
            ];
            for(let n = 0, r = e.length; n < r; ++n){
                delete this.$8[e[n]];
            }
            this.$11 = true;
            return this;
        };
        t_prototype.setFragment = function(t) {
            this.$3 = t;
            this.setForceFragmentSeparator(false);
            return this;
        };
        t_prototype.getFragment = function() {
            return this.$3;
        };
        t_prototype.setForceFragmentSeparator = function(t) {
            this.$2 = t;
            return this;
        };
        t_prototype.getForceFragmentSeparator = function() {
            return this.$2;
        };
        t_prototype.setIsGeneric = function(t) {
            this.$4 = t;
            return this;
        };
        t_prototype.getIsGeneric = function() {
            return this.$4;
        };
        t_prototype.getOriginalRawQuery = function() {
            return this.$10;
        };
        t_prototype.setOriginalRawQuery = function(t) {
            this.$10 = t;
            return this;
        };
        t_prototype.setQueryParamModified = function(t) {
            this.$11 = t;
            return this;
        };
        t_prototype.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment());
        };
        t_prototype.toString = function(t = function() {
            return false;
        }, n = null) {
            return this.$15(false, false, t, n);
        };
        t_prototype.toStringRawQuery = function(t = function() {
            return false;
        }, n = null) {
            return this.$15(true, false, t, n);
        };
        t_prototype.toStringPreserveQuery = function(t = function() {
            return false;
        }, n = null) {
            return this.$15(false, true, t, n);
        };
        t_prototype.toStringStrictQueryEncoding = function(t = function() {
            return false;
        }) {
            return this.$15(true, false, t, c);
        };
        t_prototype.$15 = function(t = false, n = false, r = function() {
            return false;
        }, o = null) {
            let e = this;
            for(let a = 0; a < p.length; a++){
                e = p[a](e);
            }
            return e.$16(t, n, r, o);
        };
        t_prototype.$16 = function(t = false, n = false, r = function() {
            return false;
        }, o = null) {
            let e = "";
            const a = this.getProtocol();
            if (a) {
                e += `${a}:${this.getIsGeneric() ? "" : "//"}`;
            }
            const i = this.getDomain();
            if (i) {
                e += i;
            }
            const l = this.getPort();
            if (l) {
                e += `:${l}`;
            }
            const s = this.getPath();
            if (s) {
                e += s;
            } else if (e) {
                e += "/";
            }
            const u = this.$14(t, n, r, o);
            if (u) {
                e += `?${u}`;
            }
            const c = this.getFragment();
            if (c) {
                e += `#${c}`;
            } else if (this.getForceFragmentSeparator()) {
                e += "#";
            }
            return e;
        };
        t.registerFilter = function(t) {
            p.push(t);
        };
        t_prototype.getOrigin = function() {
            const e = this.getPort();
            return `${this.getProtocol()}://${this.getDomain()}${e ? `:${e}` : ""}`;
        };
        t_prototype.isSameOrigin = function(t) {
            return r("isSameOrigin")(this, t);
        };
        t_prototype.getQualifiedURIBase = function() {
            return new t(this, this.$9).qualify();
        };
        t_prototype.qualify = function() {
            if (!this.getDomain()) {
                const e = new t(window.location.href, this.$9);
                this.setProtocol(e.getProtocol()).setDomain(e.getDomain()).setPort(e.getPort());
            }
            return this;
        };
        t_prototype.setSubdomain = function(t) {
            const e = this.qualify();
            const n = e.getDomain();
            return this.setDomain(r("setHostSubdomain")(n, t));
        };
        t_prototype.getSubdomain = function() {
            if (!this.getDomain()) {
                return "";
            }
            const e = this.getDomain().split(".");
            if (e.length <= 2) {
                return "";
            }
            return e[0];
        };
        t_prototype.isSubdomainOfDomain = function(n) {
            const e = this.getDomain();
            return t.isDomainSubdomainOfDomain(e, n, this.$9);
        };
        t.isDomainSubdomainOfDomain = function(n, r, o) {
            if (r === "" || n === "") {
                return false;
            }
            if (n.endsWith(r)) {
                const e = n.length;
                const a = r.length;
                const i = e - a - 1;
                if (e === a || n[i] === ".") {
                    const l = new t(null, o);
                    l.setDomain(r);
                    return t.isValid(l, o);
                }
            }
            return false;
        };
        return t;
    })();
    l.default = _;
}, 98);
__d("URIBase", [
    "ExecutionEnvironment",
    "PHPQuerySerializerNoEncoding",
    "URIAbstractBase",
    "URISchemes",
    "UriNeedRawQuerySVChecker",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n, o) {
        try {
            return r("URIAbstractBase").parse(e, t, n, o);
        } catch (error) {
            const a = r("getErrorSafe")(error);
            const i = new Error(r("err")(a.message));
            i.stack;
            throw i;
        }
    }
    const c = ((t)=>{
        function n(e, n, r, a) {
            let i;
            if (r === undefined) {
                r = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS;
            }
            i = t.call(this, e, n, r, a) || this;
            i.$URIBase$p_1 = n;
            u(i, e, true, n);
            return i;
        }
        babelHelpers.inheritsLoose(n, t);
        n.tryParse = function(t, r, a = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS, i) {
            const e = new n(null, r, a, i);
            if (u(e, t, false, r)) {
                return e;
            }
            return null;
        };
        n.isValid = function(t, r, a = (s || (s = o("URISchemes"))).Options.INCLUDE_DEFAULTS, i) {
            return !!n.tryParse(t, r, a, i);
        };
        const n_prototype = n.prototype;
        n_prototype.setDomain = function(n) {
            try {
                t.prototype.setDomain.call(this, n);
            } catch (error) {
                const e = r("getErrorSafe")(error);
                const o = new Error(r("err")(e.message));
                o.stack;
                throw o;
            }
            return this;
        };
        n_prototype.getQualifiedURIBase = function() {
            return new n(this, this.$URIBase$p_1).qualify();
        };
        n_prototype.qualify = function() {
            if (!this.getDomain()) {
                let t = (typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
                    location: {
                        href: ""
                    }
                }).location.href;
                if ((e || (e = r("ExecutionEnvironment"))).isInWorker && t && t.startsWith("blob:")) {
                    t = t.substring(5, t.length);
                }
                const o = new n(t, this.$URIBase$p_1);
                this.setProtocol(o.getProtocol()).setDomain(o.getDomain()).setPort(o.getPort());
            }
            return this;
        };
        n_prototype.isSubdomainOfDomain = function(t) {
            const e = this.getDomain();
            return n.isDomainSubdomainOfDomain(e, t, this.$URIBase$p_1);
        };
        n.isDomainSubdomainOfDomain = function(t, r, o) {
            if (r === "" || t === "") {
                return false;
            }
            if (t.endsWith(r)) {
                const e = t.length;
                const a = r.length;
                const i = e - a - 1;
                if (e === a || t[i] === ".") {
                    const l = new n(null, o);
                    l.setDomain(r);
                    return n.isValid(l, o);
                }
            }
            return false;
        };
        n_prototype.toString = function() {
            return t.prototype.toString.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        n_prototype.toStringRawQuery = function() {
            return t.prototype.toStringRawQuery.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        n_prototype.toStringPreserveQuery = function() {
            return t.prototype.toStringPreserveQuery.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        n_prototype.toStringStrictQueryEncoding = function() {
            return t.prototype.toStringStrictQueryEncoding.call(this, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery);
        };
        n_prototype.getQueryString = function(n = false) {
            return t.prototype.getQueryString.call(this, n, o("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, r("PHPQuerySerializerNoEncoding"));
        };
        return n;
    })(r("URIAbstractBase"));
    l.default = c;
}, 98);
__d("UriNeedRawQuerySVChecker", [
    "PHPQuerySerializer",
    "URIBase",
    "UriNeedRawQuerySVConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = [
        "http",
        "https"
    ];
    function c(t) {
        if (t == null) {
            return false;
        }
        const n = t instanceof (e || (e = r("URIBase"))) ? t : (e || (e = r("URIBase"))).tryParse(t, s || (s = r("PHPQuerySerializer")));
        if (n == null) {
            return false;
        }
        const o = n.getProtocol();
        if (u.includes(o)) {
            return d(n.getDomain());
        }
        return false;
    }
    function d(t) {
        return t != null && r("UriNeedRawQuerySVConfig").uris.some((n)=>(e || (e = r("URIBase"))).isDomainSubdomainOfDomain(t, n, s || (s = r("PHPQuerySerializer"))));
    }
    l.isUriNeedRawQuery = c;
    l.isDomainNeedRawQuery = d;
}, 98);
__d("isFacebookURI", [], function(t, n, r, o, a, i) {
    let e = null;
    const l = [
        "http",
        "https"
    ];
    function s(t) {
        if (!e) {
            e = new RegExp("(^|\\.)facebook\\.com$", "i");
        }
        const n = e;
        if (t.isEmpty() && t.toString() !== "#") {
            return false;
        }
        if (!t.getDomain() && !t.getProtocol()) {
            return true;
        }
        return l.indexOf(t.getProtocol()) !== -1 && n.test(t.getDomain());
    }
    s.setRegex = function(t) {
        e = t;
    };
    i.default = s;
}, 66);
__d("memoize", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        let t = e;
        let n;
        return function(...args) {
            if (args.length) {
                s(0, 4494);
            }
            if (t) {
                n = t();
                t = null;
            }
            return n;
        };
    }
    l.default = e;
}, 98);
__d("justknobx", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = {};
    const u = {
        getBool: function(t, n = null) {
            s(0, 47459);
        },
        getInt: function(t, n = null) {
            s(0, 47459);
        },
        _: function(n) {
            const t = e[n];
            if (t == null) {
                s(0, 47458, n);
            }
            return t.r;
        },
        add: function(n, r) {
            for(const t in n){
                if (r) {
                    r.entry++;
                }
                if (t in e) {
                    if (r) {
                        r.dup_entry++;
                    }
                } else {
                    e[t] = n[t];
                }
            }
        }
    };
    l.default = u;
}, 98);
__d("memoizeInstrumentation", [
    "ExecutionEnvironment",
    "FBLogger",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = false;
    try {
        s = r("justknobx")._("1590");
    } catch (e) {}
    const u = 1 / 100;
    const c = [
        1000,
        10000,
        100000,
        1000000
    ];
    function d() {
        return s && Math.random() < u;
    }
    function m() {
        return {
            creationStack: _(),
            nextThresholdIdx: 0
        };
    }
    function p(e, t, n, o) {
        while(o.nextThresholdIdx < c.length && e >= c[o.nextThresholdIdx]){
            const a = c[o.nextThresholdIdx];
            o.nextThresholdIdx++;
            try {
                r("FBLogger")("memoize_instrumentation", "cache_grew_large").warn("Unbounded memoize cache crossed %s entries (utility=%s, fn=%s, page=%s, creationStack=%s)", a, t, n != null && n !== "" ? n : "<anonymous>", f(), o.creationStack ?? "<no-stack>");
            } catch (e) {}
        }
    }
    function _() {
        try {
            const e = r("err")("stack for memoization").stack;
            if (e == null) {
                return undefined;
            }
            return e.split("\n").slice(0, 10).join("\n");
        } catch (e) {
            return null;
        }
    }
    function f() {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return "<no-dom>";
        }
        try {
            if (window.top !== window.self) {
                return "<iframe>";
            }
            return window.location.pathname;
        } catch (e) {
            return "<error>";
        }
    }
    l.shouldTrackThisInstance = d;
    l.createCacheSizeTracker = m;
    l.maybeLogMemoizeCacheSize = p;
}, 98);
__d("memoizeStringOnly", [
    "memoizeInstrumentation"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = {};
        let n = 0;
        const r = o("memoizeInstrumentation").shouldTrackThisInstance() ? o("memoizeInstrumentation").createCacheSizeTracker() : null;
        return function(a) {
            if (!Object.prototype.hasOwnProperty.call(t, a)) {
                t[a] = e.call(this, a);
                if (r != null) {
                    n++;
                    o("memoizeInstrumentation").maybeLogMemoizeCacheSize(n, "memoizeStringOnly", e.name, r);
                }
            }
            return t[a];
        };
    }
    l.default = e;
}, 98);
__d("unqualifyURI", [], function(t, n, r, o, a, i) {
    function e(e) {
        return e.setProtocol("").setDomain("").setPort("");
    }
    i.default = e;
}, 66);
__d("URI", [
    "Env",
    "FBLogger",
    "PHPQuerySerializer",
    "PHPQuerySerializerNoEncoding",
    "ReloadPage",
    "URIBase",
    "UriNeedRawQuerySVChecker",
    "cr:1078",
    "cr:1080",
    "ifRequired",
    "isFacebookURI",
    "memoize",
    "memoizeStringOnly",
    "unqualifyURI"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("memoize")(function() {
        return new m(window.location.href);
    });
    function d() {
        return r("ifRequired")("PageTransitions", function(e) {
            if (e.isInitialized()) {
                return e;
            }
        });
    }
    var m = ((a)=>{
        function i(t, n, i) {
            const l = o("UriNeedRawQuerySVChecker").isUriNeedRawQuery(t) ? r("PHPQuerySerializerNoEncoding") : e || (e = r("PHPQuerySerializer"));
            return a.call(this, t, l, n, i) || this;
        }
        babelHelpers.inheritsLoose(i, a);
        const i_prototype = i.prototype;
        i_prototype.setPath = function(t) {
            this.path = t;
            return a.prototype.setPath.call(this, t);
        };
        i_prototype.getPath = function() {
            const e = a.prototype.getPath.call(this);
            return e && e.replace(/^\/+/, "/");
        };
        i_prototype.setProtocol = function(t) {
            this.protocol = t;
            return a.prototype.setProtocol.call(this, t);
        };
        i_prototype.setDomain = function(t) {
            this.domain = t;
            return a.prototype.setDomain.call(this, t);
        };
        i_prototype.setPort = function(t) {
            this.port = t;
            return a.prototype.setPort.call(this, t);
        };
        i_prototype.setFragment = function(t) {
            this.fragment = t;
            return a.prototype.setFragment.call(this, t);
        };
        i_prototype.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this;
        };
        i_prototype.addTrailingSlash = function() {
            const e = this.getPath();
            if (e.length > 0 && e[e.length - 1] !== "/") {
                this.setPath(`${e}/`);
            }
            return this;
        };
        i_prototype.valueOf = function() {
            return this.toString();
        };
        i_prototype.getRegisteredDomain = function() {
            if (!this.getDomain()) {
                return "";
            }
            if (!r("isFacebookURI")(this)) {
                return null;
            }
            const e = this.getDomain().split(".");
            let t = e.indexOf("facebook");
            if (t === -1) {
                t = e.indexOf("workplace");
            }
            return e.slice(t).join(".");
        };
        i_prototype.getUnqualifiedURI = function() {
            return r("unqualifyURI")(new i(this));
        };
        i_prototype.getQualifiedURI = function() {
            return new i(this).qualify();
        };
        i_prototype.isSameOrigin = function(t) {
            let e = t;
            if (e == null) {
                e = c();
            } else if (!(e instanceof i)) {
                e = new i(e.toString());
            }
            return a.prototype.isSameOrigin.call(this, e);
        };
        i.goURIOnNewWindow = function(t) {
            i.goURIOnWindow(t, window.open("", "_blank"), true);
        };
        i.goURIOnWindow = function(t, n, r = false, o = false) {
            i.goURIOnWindowWithReference(t, n, r, o);
        };
        i.goURIOnWindowWithReference = function(n, a, l = false, u = false) {
            const e = new i(n);
            let c = l;
            const d = !a || a === window;
            if ((s || (s = r("Env"))).isCQuick && r("isFacebookURI")(e) && d) {
                const m = {
                    cquick: (s || (s = r("Env"))).iframeKey,
                    ctarget: s.iframeTarget,
                    cquick_token: s.iframeToken
                };
                e.addQueryData(m);
                c = false;
            }
            const p = e.toString();
            const _ = a || window;
            const f = window.location.href === p && _ === window;
            if (!c && t.PageTransitions) {
                t.PageTransitions.go(p, u);
            } else if (f) {
                o("ReloadPage").now();
            } else if (u) {
                _.location.replace(p);
            } else {
                _.location.href = p;
            }
            return _;
        };
        i_prototype.go = function(t, r) {
            if (n("cr:1078")) {
                n("cr:1078")(this, t, r);
                return;
            }
            if (n("cr:1080")) {
                n("cr:1080")("uri.go");
            }
            i.go(this, t, r);
        };
        i.tryParseURI = function(n) {
            const t = (u || (u = r("URIBase"))).tryParse(n, e || (e = r("PHPQuerySerializer")));
            if (t) {
                return new i(t);
            }
            return null;
        };
        i.isValidURI = function(n) {
            return (u || (u = r("URIBase"))).isValid(n, e || (e = r("PHPQuerySerializer")));
        };
        i.getRequestURI = function(t = true, n = false) {
            if (t) {
                const e = d();
                if (e) {
                    return e.getCurrentURI(!!n).getQualifiedURI();
                }
            }
            return new i(window.location.href);
        };
        i.getMostRecentURI = function() {
            const e = d();
            if (e) {
                return e.getMostRecentURI().getQualifiedURI();
            }
            return new i(window.location.href);
        };
        i.getNextURI = function() {
            const e = d();
            if (e) {
                return e.getNextURI().getQualifiedURI();
            }
            return new i(window.location.href);
        };
        i.encodeComponent = function(t) {
            return encodeURIComponent(t).replace(/%5D/g, "]").replace(/%5B/g, "[");
        };
        i.decodeComponent = function(t) {
            return decodeURIComponent(t.replace(/\+/g, " "));
        };
        i.normalize = function(t) {
            if (t != null && typeof t === "string") {
                return this.normalizeString(t);
            }
            return new i(t).toString();
        };
        return i;
    })(u || (u = r("URIBase")));
    m.go = function(e, t, r) {
        if (n("cr:1080")) {
            n("cr:1080")("URI.go");
        }
        m.goURIOnWindow(e, window, t, r);
    };
    m.normalizeString = r("memoizeStringOnly")(function(e) {
        return new m(e).toString();
    });
    m.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    m.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
    l.default = m;
}, 98);
__d("ResourceTimingsStore", [
    "CircularBuffer",
    "ResourceTypes",
    "TimingAnnotations",
    "URI",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    let l;
    const s = 1000;
    const u = new (n("TimingAnnotations")).EmptyTimingAnnotations;
    const c = {};
    const d = {};
    Object.keys(n("ResourceTypes")).forEach((e)=>{
        const t = n("ResourceTypes")[e];
        const entries = new (n("CircularBuffer"))(s);
        const o = new Map;
        entries.onEvict(function(e) {
            o.delete(e);
        });
        c[t] = {
            idx: 1,
            entries
        };
        d[t] = o;
    });
    function m(t, r, idx) {
        let a;
        switch(t){
            case "css":
            case "js":
                const i = p.parseMakeHasteURL(r);
                const l = i == null ? "unknown_resource" : i[0];
                a = `${idx}_${l}`;
                break;
            case "xhr":
                const s = new (e || (e = n("URI")))(r).getQualifiedURI();
                const u = s.getDomain() + s.getPath();
                a = `${idx}_${u}`;
                break;
            default:
                a = "never here";
        }
        return a;
    }
    var p = {
        getUID: function(t, n) {
            const e = c[t];
            const uid = m(t, n, e.idx);
            e.entries.write(uid);
            d[t].set(uid, {
                uri: n,
                uid
            });
            e.idx++;
            return uid;
        },
        updateURI: function(t, n, r) {
            const e = d[t].get(n);
            if (e != null) {
                e.uri = r;
            }
        },
        getMapFor: function(t) {
            return d[t];
        },
        parseMakeHasteURL: function(t) {
            const e = t.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!e) {
                return null;
            }
            const n = e[1];
            let r = "";
            const o = n.match(/\.(\w+)$/);
            if (o) {
                r = o[1];
            }
            return [
                n,
                r
            ];
        },
        measureRequestSent: function(t, r) {
            const e = d[t];
            const o = e.get(r);
            if (!(o == null || o.requestSent != null)) {
                o.requestSent = (l || (l = n("performanceAbsoluteNow")))();
            }
        },
        measureResponseReceived: function(t, r) {
            const e = d[t];
            const o = e.get(r);
            if (!(o == null || o.requestSent == null || o.responseReceived != null)) {
                o.responseReceived = (l || (l = n("performanceAbsoluteNow")))();
            }
        },
        annotate: function(t, r) {
            const e = d[t];
            const o = e.get(r);
            if (o) {
                const a = o.annotations;
                if (a != null) {
                    return a;
                }
                const i = new (n("TimingAnnotations"));
                o.annotations = i;
                return i;
            } else {
                return u;
            }
        },
        getAnnotationsFor: function(t, n) {
            const e = d[t];
            const r = e.get(n);
            if (r) {
                const o = r.annotations;
                if (o != null) {
                    return o.prepareToSend();
                }
                return null;
            } else {
                return null;
            }
        }
    };
    a.exports = p;
}, null);
__d("TimeSlice", [
    "cr:1126"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:1126");
}, 98);
__d("CSSLoader", [
    "CSSLoaderConfig",
    "CSSPoller",
    "ResourceTimingsStore",
    "TimeSlice",
    "ifRequired"
], function(t, n, r, o, a, i, l) {
    let loadEventSupported = r("CSSLoaderConfig").loadEventSupported;
    let s;
    function u(t) {
        if (!s) {
            s = true;
            const n = document.createElement("link");
            n.onload = function() {
                loadEventSupported = true;
                if (n.parentNode) {
                    n.parentNode.removeChild(n);
                }
            };
            n.rel = "stylesheet";
            n.href = "data:text/css;base64,";
            t.appendChild(n);
        }
    }
    function c(e, t, n, o) {
        r("CSSPoller").startCSSPoll(e, t, n, o);
    }
    function d(t, n, o, a, i, l, s = false) {
        const d = r("ResourceTimingsStore").getUID("css", n);
        r("ResourceTimingsStore").annotate("css", d).addStringAnnotation("name", t).addStringAnnotation("source", n).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        r("ifRequired")("TimeSliceInteraction", function(e) {
            e.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", n).addStringAnnotation("name", t);
        });
        r("ResourceTimingsStore").measureRequestSent("css", d);
        const m = function() {
            r("ResourceTimingsStore").measureResponseReceived("css", d);
            a();
        };
        const p = r("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        if (s) {
            c(t, m, i, l);
        } else if (loadEventSupported !== true) {
            c(t, m, i, l);
            if (loadEventSupported === undefined) {
                u(o);
            }
        } else {
            l.onload = p.bind(undefined, function() {
                l.onload = l.onerror = null;
                m();
            });
            l.onerror = p.bind(undefined, function() {
                l.onload = l.onerror = null;
                i();
            });
        }
    }
    const m = {
        loadStyleSheet: function(t, n, r, o, a, i, l) {
            const e = document.createElement("link");
            e.rel = "stylesheet";
            e.type = "text/css";
            e.href = n;
            if (o) {
                e.crossOrigin = "anonymous";
            }
            if (a != null) {
                e.dataset.btmanifest = a;
            }
            d(t, n, r, i, l, e);
            r.appendChild(e);
        },
        setupEventListenersForPotentiallyLoadedCSS: function(t, n, r, o, a, i) {
            d(t, n, r, o, a, i, true);
        }
    };
    i.exports = m;
}, 34);
__d("ClientConsistencyEventEmitter", [
    "BaseEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new (r("BaseEventEmitter"));
    l.default = e;
}, 98);
__d("ClientConsistency", [
    "ClientConsistencyEventEmitter",
    "FBLogger",
    "SiteData",
    "requireWeak"
], function(t, n, r, o, a, i) {
    "use strict";
    const client_revision = n("SiteData").client_revision;
    let l = false;
    let s;
    let u = {};
    const c = new Set;
    const d = new Set;
    const m = (actions)=>{
        u = {};
        const e = Object.keys(actions).sort().reverse();
        if (s === "multiple_revs") {
            s = undefined;
        }
        const r = ()=>{
            const r = Number(o);
            const a = actions[r] ?? [];
            if (a.length === 0) {
                p(r);
                return 1;
            }
            a.forEach((e)=>{
                u[e] = Math.max(u[e] ?? 0, r);
                if (!d.has(e)) {
                    d.add(e);
                    n("requireWeak").call(null, e, function() {
                        if (u[e]) {
                            p(u[e], e);
                        }
                    });
                }
            });
        };
        for (var o of e){
            if (r()) {
                break;
            }
        }
    };
    var p = (t, r)=>{
        if (t > 0 && s == null) {
            n("FBLogger")("client_consistency").debug("Consistency action needed: %s:%s", t, String(r));
            s = "multiple_revs";
        }
        if (t === 2) {
            n("ClientConsistencyEventEmitter").emit("softRefresh", "multiple_revs");
        }
        if (t === 3) {
            n("ClientConsistencyEventEmitter").emit("hardRefresh", "multiple_revs");
        }
    };
    const _ = ({ actions, rev })=>{
        if (rev !== client_revision) {
            if (s === "multiple_revs") {
                s = undefined;
            }
            if (actions != null) {
                m(actions);
            }
        }
    };
    const f = {
        init: function() {
            if (!l) {
                n("ClientConsistencyEventEmitter").addListener("newEntry", function(e) {
                    _(e);
                });
                n("ClientConsistencyEventEmitter").addListener("softRefresh", function(e) {
                    s = e;
                });
                n("ClientConsistencyEventEmitter").addListener("hardRefresh", function(e) {
                    s = e;
                });
                l = true;
            }
        },
        recordResponseRevision: function(n) {
            if (n != null && n !== client_revision) {
                c.add(n);
            }
        },
        addAdditionalRevision: function(r) {
            if (r !== client_revision) {
                c.add(r);
                n("ClientConsistencyEventEmitter").emit("newRevision", r);
            }
        },
        getAdditionalRevisions: function() {
            return c;
        },
        getPendingRefresh: function() {
            return s;
        }
    };
    a.exports = f;
}, null);
__d("BitMap", [], function(t, n, r, o, a, i) {
    const e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    class l {
        constructor(){
            this.$1 = [];
            this.$2 = null;
        }
        set(t) {
            if (this.$2 != null && !this.$1[t]) {
                this.$2 = null;
            }
            this.$1[t] = 1;
            return this;
        }
        toString() {
            const e = [];
            for(let t = 0; t < this.$1.length; t++){
                e.push(this.$1[t] ? 1 : 0);
            }
            if (e.length) {
                return u(e.join(""));
            }
            return "";
        }
        toCompressedString() {
            if (this.$1.length === 0) {
                return "";
            }
            if (this.$2 != null) {
                return this.$2;
            }
            const e = [];
            let t = 1;
            let n = this.$1[0] || 0;
            const r = n.toString(2);
            for(let o = 1; o < this.$1.length; o++){
                const a = this.$1[o] || 0;
                if (a === n) {
                    t++;
                } else {
                    e.push(s(t));
                    n = a;
                    t = 1;
                }
            }
            if (t) {
                e.push(s(t));
            }
            return this.$2 = u(r + e.join(""));
        }
    }
    function s(e) {
        const t = e.toString(2);
        const n = "0".repeat(t.length - 1);
        return n + t;
    }
    function u(t) {
        for(var n = `${t}00000`.match(/[01]{6}/g), r = "", o = 0; n != null && o < n.length; o++){
            r += e[parseInt(n[o], 2)];
        }
        return r;
    }
    i.default = l;
}, 66);
__d("HasteBitMap", [
    "BitMap"
], function(t, n, r, o, a, i, l) {
    const e = new Map;
    function s(t, n) {
        if (!e.has(t)) {
            e.set(t, new (r("BitMap")));
        }
        e.get(t)?.set(n);
    }
    function u(t) {
        return e.get(t)?.toCompressedString() ?? "";
    }
    l.add = s;
    l.toCompressedString = u;
}, 98);
__d("HasteResourceIndexUtil", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    const e = 0;
    function u(e) {
        if (e.substr(0, 1) !== ":") {
            s(0, 88579, e);
        }
        return e.substr(1).split(",").map((e)=>parseInt(e, 10));
    }
    l.UNKNOWN_RESOURCE_INDEX = e;
    l.parseResourceIndexes = u;
}, 98);
__d("ErrorMetadata", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        t.addGlobalMetadata = function(n, r, o) {
            e.addGlobalMetadata.call(this, n, r, o);
        };
        return t;
    })(r("fb-error").ErrorMetadata);
    l.default = e;
}, 98);
__d("JSResourceEvents", [
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 50;
    const u = new Map;
    function c(t, n, o) {
        const a = t;
        const i = n ?? "";
        let l = u.get(a);
        if (!l) {
            u.set(a, l = new Map);
        }
        let c = l.get(i);
        if (!c) {
            l.set(i, c = new Map);
        }
        let d = c.get(o);
        if (!d) {
            const m = [
                0,
                []
            ];
            c.set(o, d = m);
        }
        d[1][d[0]++ % s] = (e || (e = r("performanceAbsoluteNow")))();
    }
    function d(e, t, n) {
        const r = u.get(e);
        if (!r) {
            return [];
        }
        const o = [];
        for (const [i, l] of r){
            for (const [type, d] of l){
                for (const time of d[1]){
                    if (time >= t && time <= n) {
                        o.push({
                            module: e,
                            ref: i || null,
                            type,
                            time
                        });
                    }
                }
            }
        }
        return o.sort((e, t)=>e.time - t.time);
    }
    function m(e, t) {
        const n = new Map;
        for (const r of u.keys()){
            const o = d(r, e, t);
            if (o.length) {
                n.set(r, o);
            }
        }
        return n;
    }
    l.notify = c;
    l.getEvents = d;
    l.getAllModuleEvents = m;
}, 98);
__d("JSResourceReferenceImpl", [
    "BootloaderEvents",
    "ErrorMetadata",
    "JSResourceEvents",
    "Promise",
    "PromiseAnnotate",
    "err",
    "ifRequireable",
    "ifRequired"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = function(t) {
        return t;
    };
    let c = [];
    let d = null;
    function m(e) {
        if (d) {
            e(d);
        } else {
            c.push(e);
        }
    }
    const p = "JSResource: unknown caller";
    class _ {
        constructor(e){
            this.$1 = e;
        }
        static setBootloader(t) {
            d = t;
            for (const e of c){
                e(d);
            }
            c = [];
        }
        getModuleId() {
            const e = this.$1;
            return e;
        }
        getModuleIdAsRef() {
            return this.$1;
        }
        load() {
            const t = this;
            const a = this.$2;
            const i = this.getModuleId();
            o("JSResourceEvents").notify(this.$1, a, "LOADED");
            const l = new (s || (s = n("Promise")))(function(e, n) {
                var l = o("BootloaderEvents").onBootloadEndpointError(function(e) {
                    if (e.module === i) {
                        l?.unsubscribe();
                        const o = r("err")("[INTERNAL ONLY] Bootloading module %s failed with error MID opes:%s. This issue may cause infinite spinners in production.", i, e.errorMID);
                        o.forcedKey = `${i}:${e.errorMID}`;
                        o.opes_mids = [
                            e.errorMID
                        ];
                        const a = o.metadata ?? new (r("ErrorMetadata"));
                        a.addEntry("OPES", "MID", e.errorMID);
                        o.metadata = a;
                        n(o);
                    }
                });
                m(function(n) {
                    n.loadModules([
                        t.getModuleIdAsRef()
                    ], function(n) {
                        l?.unsubscribe();
                        o("JSResourceEvents").notify(t.$1, a, "PROMISE_RESOLVED");
                        e(n);
                    }, t.$2 ?? p);
                });
            });
            (e || (e = o("PromiseAnnotate"))).setDisplayName(l, `Bootload(${this.getModuleId()})`);
            return l;
        }
        preload() {
            const t = this;
            const n = this.$2 ?? p;
            m(function(e) {
                return e.loadModules([
                    t.getModuleIdAsRef()
                ], function() {}, `preload: ${n}`);
            });
        }
        equals(t) {
            return this === t || this.$1 == t.$1;
        }
        getModuleIfRequireable() {
            o("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return r("ifRequireable").call(null, this.$1, u);
        }
        getModuleIfRequired() {
            o("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return r("ifRequired").call(null, this.$1, u);
        }
        static disableForSSR_DO_NOT_USE() {
            this.$3 = false;
        }
        isAvailableInSSR_DO_NOT_USE() {
            return this.constructor.$3;
        }
        __setRef(t) {
            this.$2 = t;
            o("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
            return this;
        }
        static loadAll(t, n) {
            const e = {};
            let r = false;
            for (const a of t){
                const i = a.$2;
                if (i) {
                    r = true;
                    e[i] = true;
                }
                o("JSResourceEvents").notify(a.$1, i, "LOADED");
            }
            m(function(o) {
                return o.loadModules(t.map((e)=>e.getModuleId()), n, r ? Object.keys(e).join(":") : p);
            });
        }
    }
    _.$3 = true;
    l.default = _;
}, 98);
__d("MakeHasteTranslationsMap", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = {};
    function u(t) {
        Object.assign(e, t);
    }
    function c(t) {
        if (!(t in e)) {
            s(0, 62571, t);
        }
        return e[t];
    }
    l.setBatch = u;
    l.get = c;
}, 98);
__d("GHLDetectionUtilsPreludeSafe", [
    "ExecutionEnvironment",
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return null;
    }
    function u(e) {
        for(var t = "3f0a7c1b9e42d685"; t.length < e;){
            t += t;
        }
        return t.slice(0, e);
    }
    function c(e) {
        for(var t = " "; t.length < e;){
            t += t;
        }
        return t.slice(0, e);
    }
    function d() {
        for(var e = [
            "Spon",
            "sored",
            "Data"
        ], t = "", n = 0; n < e.length; n++){
            t += e[n];
        }
        return `{"node":{"s":{"__typename":"${t}"}}}`;
    }
    const m = d();
    const p = `{"data":${m},"edges":[${m}],"require":[${m}],"t8":"${u(16)}","extensions":{"is_final":true}${c(4079)}}`;
    let _ = null;
    let f = null;
    let g = null;
    let h = null;
    let y = null;
    let C = null;
    let b = false;
    let v = false;
    let S = null;
    function R(e) {
        if (e != null) {
            e.remove();
        }
        if (S != null) {
            S.remove();
            S = null;
        }
    }
    function L() {
        if (!(_ != null && f != null)) {
            let t = null;
            try {
                S = null;
                if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
                    r("FBLogger")("ad_blocker_defense_ghost_owl").info("Environment does not support DOM");
                    return;
                }
                const l = window.Env;
                const s = document.body;
                const u = s || document.documentElement;
                if (u == null) {
                    return;
                }
                t = document.createElement("iframe");
                t.style.display = "none";
                const c = l != null && "h4npx7qw" in l;
                v = c;
                if (c) {
                    t.src = "about:blank#g";
                } else if (l != null && "p9fk3wmn" in l) {
                    t.src = "about:blank";
                    t.srcdoc = "";
                }
                const d = u.firstElementChild;
                const m = l != null && "f2yq8vnd" in l && "createElement" in document;
                const L = l != null && "t5nd8vqc" in l && "createComment" in document;
                const E = l != null && "m8r3kp6w" in l && "createRange" in document;
                const k = l != null && "b3xk8fqm" in l && d != null && "before" in d;
                const I = l != null && "q4v7nx3k" in l && d != null && "after" in d;
                const T = l != null && "r7c2m9xk" in l && "prepend" in u;
                const D = l != null && "z2ht6xqp" in l && "append" in u;
                const x = l != null && "k7q3nv9d" in l;
                const $ = l != null && "w6jt4rnq" in l;
                const P = l != null && "w8kq3zmt" in l && "replaceChild" in u;
                const N = l != null && "b7xr2qnf" in l && "replaceChildren" in u;
                const w = m ? document.createElement("span") : null;
                const A = N ? document.createElement("div") : null;
                const F = P ? document.createElement("span") : null;
                const O = L ? document.createComment("") : null;
                const B = E ? document.createRange() : null;
                if (w != null && "replaceWith" in w) {
                    u.appendChild(w);
                    w.replaceWith(t);
                } else if (A != null) {
                    A.style.display = "none";
                    u.appendChild(A);
                    A.replaceChildren(t);
                    S = A;
                } else if (F != null) {
                    u.appendChild(F);
                    u.replaceChild(t, F);
                } else if (O != null && "replaceWith" in O) {
                    u.appendChild(O);
                    O.replaceWith(t);
                } else if (B != null) {
                    B.setStart(u, u.childNodes.length);
                    B.insertNode(t);
                } else if (I && d != null) {
                    d.after(t);
                } else if (k && d != null) {
                    d.before(t);
                } else if (T) {
                    u.prepend(t);
                } else if (D) {
                    u.append(t);
                } else if (x) {
                    u.insertBefore(t, null);
                } else if ($) {
                    u.insertAdjacentElement("beforeend", t);
                } else {
                    u.appendChild(t);
                }
                const W = t.contentWindow;
                _ = W?.String;
                const q = t.contentWindow;
                f = q?.Function?.prototype?.call;
                const U = t.contentWindow;
                g = U?.JSON?.parse;
                const V = t.contentWindow;
                h = V?.Function?.prototype?.toString;
                const H = t.contentWindow.Object.getOwnPropertyDescriptor;
                const G = t.contentWindow;
                const z = G?.XMLHttpRequest?.prototype;
                const j = H(z, "response");
                const K = H(z, "responseText");
                if (j != null && j.get) {
                    y = j.get;
                }
                if (K != null && K.get) {
                    C = K.get;
                }
                try {
                    const X = t.contentWindow;
                    b = M(X?.JSON?.parse(p));
                } catch (e) {
                    b = true;
                }
            } catch (e) {
                r("FBLogger")("ad_blocker_defense_ghost_owl").warn("Failed to create iframe for builtin restoration");
            } finally{
                try {
                    R(t);
                } catch (e) {}
            }
        }
    }
    function E() {
        L();
        const e = _;
        if (e != null && !B()) {
            window.String = e;
        }
    }
    function k() {
        L();
        const e = f;
        const t = h;
        if (e == null || t == null) {
            return false;
        }
        try {
            const n = s(t.call(Function.prototype.call));
            const r = s(t.call(e));
            if (n == null || r == null) {
                return false;
            }
            if (n !== r) {
                return true;
            }
            return n !== "function call() { [native code] }";
        } catch (e) {
            return false;
        }
    }
    function I() {
        try {
            return String(p) !== p;
        } catch (e) {
            return false;
        }
    }
    function T() {
        try {
            let e = null;
            const t = (n, r)=>{
                e = r;
            };
            t.call({}, null, [
                p
            ]);
            return Array.isArray(e) && e[0] !== p;
        } catch (e) {
            return false;
        }
    }
    function D(e, ...n) {
        return Reflect.apply(this, e, n);
    }
    function x() {
        if (typeof Reflect === "object" && typeof Reflect.apply === "function") {
            const t = "call";
            Function.prototype[t] = D;
            return;
        }
        L();
        const n = f;
        if (n != null && !B()) {
            Function.prototype.call = n;
        }
    }
    function $() {
        L();
        if (!B()) {
            if (y != null) {
                try {
                    Object.defineProperty(t.XMLHttpRequest.prototype, "response", {
                        get: y,
                        configurable: true,
                        enumerable: true
                    });
                } catch (e) {
                    r("FBLogger")("ad_blocker_defense_ghost_owl").warn("Failed to restore native XHR response getter");
                }
            }
            if (C != null) {
                try {
                    Object.defineProperty(t.XMLHttpRequest.prototype, "responseText", {
                        get: C,
                        configurable: true,
                        enumerable: true
                    });
                } catch (e) {
                    r("FBLogger")("ad_blocker_defense_ghost_owl").warn("Failed to restore native XHR responseText getter");
                }
            }
        }
    }
    function P() {
        L();
        const e = y;
        const n = h;
        if (e != null && n != null) {
            try {
                const r = Object.getOwnPropertyDescriptor(t.XMLHttpRequest.prototype, "response");
                if (r?.get != null) {
                    return n.call(r.get) !== n.call(e);
                }
            } catch (e) {}
        }
        try {
            const o = Object.getOwnPropertyDescriptor(t.XMLHttpRequest.prototype, "response");
            const a = o?.get;
            if (a != null && typeof a === "function") {
                return !(a.toString === a.toString.toString && s(a.toString()) === "function get response() { [native code] }" && s(a.toString.toString()) === "function toString() { [native code] }");
            }
        } catch (e) {}
        return false;
    }
    function N() {
        L();
        const e = g;
        const t = h;
        if (e != null && t != null) {
            try {
                const n = s(t.call(JSON.parse));
                const r = s(t.call(e));
                if (n !== r) {
                    return true;
                }
                return n !== "function parse() { [native code] }";
            } catch (e) {}
        }
        return typeof JSON.parse === "function" && !(JSON.parse.toString === JSON.parse.toString.toString && s(JSON.parse.toString()) === "function parse() { [native code] }" && s(JSON.parse.toString.toString()) === "function toString() { [native code] }");
    }
    function M(e) {
        return e?.data?.node == null || e?.edges?.[0]?.node == null || e?.require?.[0]?.node == null;
    }
    function w() {
        try {
            return M(JSON.parse(p));
        } catch (e) {
            return false;
        }
    }
    function A(e, t) {
        try {
            const n = JSON.parse(e);
            return n != null && !M(n[t]);
        } catch (e) {
            return false;
        }
    }
    function F() {
        return A(`{"q7z":${p}}`, "q7z");
    }
    function O() {
        return A(`[${p}]`, 0);
    }
    function B() {
        L();
        return b;
    }
    function W() {
        L();
        if (!v || b) {
            return null;
        }
        return g;
    }
    function q(e) {
        try {
            e();
        } catch (error) {
            if (error != null && typeof error === "object") {
                const t = error;
                if (typeof t.stack === "string") {
                    return t.stack;
                }
            }
        }
        return "";
    }
    const U = /chrome-extension:\/\/|moz-extension:\/\/|safari-web-extension:\/\/|<anonymous>:\d/;
    function V() {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return false;
        }
        const t = document.body || document.documentElement;
        if (t == null) {
            return false;
        }
        const n = document.createElement("iframe");
        n.setAttribute("aria-hidden", "true");
        n.style.display = "none";
        try {
            t.appendChild(n);
            const o = n.contentWindow;
            if (o == null) {
                return false;
            }
            const a = [
                q(()=>{
                    JSON.parse("{ ");
                }),
                q(()=>{
                    o.JSON?.parse("{ ");
                }),
                q(()=>{
                    new XMLHttpRequest().send();
                }),
                q(()=>{
                    new o.XMLHttpRequest().send();
                })
            ];
            return a.some((e)=>U.test(e));
        } catch (e) {
            return false;
        } finally{
            n.remove();
        }
    }
    l.normalize = s;
    l.restoreNativeString = E;
    l.isCallShimmedCrossRealm = k;
    l.isStringBehaviorallyShimmed = I;
    l.isCallBehaviorallyShimmed = T;
    l.restoreNativeCall = x;
    l.restoreNativeXHRGetters = $;
    l.isXHRResponseGetterShimmed = P;
    l.isJSONParseShimmed = N;
    l.isJSONParseBehaviorallyShimmed = w;
    l.isBoxedParseEffective = F;
    l.isWrappedParseEffective = O;
    l.isHarvestPoisoned = B;
    l.getCleanJSONParse = W;
    l.isNativeStackTampered = V;
}, 98);
__d("BanzaiLazyQueue", [
    "SimpleHook"
], function(t, n, r, o, a, i, l) {
    let e = [];
    const onQueue = new (o("SimpleHook")).SimpleHook;
    const u = {
        onQueue,
        queuePost: function(n, r, o) {
            e.push([
                n,
                r,
                o
            ]);
            onQueue.call(n, r, o);
        },
        flushQueue: function() {
            const t = e;
            e = [];
            return t;
        }
    };
    i.exports = u;
}, 34);
__d("gkx", [
    "invariant",
    "BanzaiLazyQueue",
    "ExecutionEnvironment",
    "emptyFunction"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = {};
    const c = {};
    function d(t) {
        const n = u[t];
        if (n == null) {
            s(0, 11797, t);
        }
        if (!c[t]) {
            c[t] = true;
            if (n.hash != null && ((e || (e = r("ExecutionEnvironment"))).canUseDOM || (e || (e = r("ExecutionEnvironment"))).isInWorker)) {
                o("BanzaiLazyQueue").queuePost("gk2_exposure", {
                    identifier: t,
                    hash: n.hash
                });
            }
        }
        return n.result;
    }
    d.add = function(e, t) {
        for(const n in e){
            if (t) {
                t.entry++;
            }
            if (n in u) {
                if (t) {
                    t.dup_entry++;
                }
            } else {
                u[n] = e[n];
            }
        }
    };
    d.addLoggedInternal = function(e) {
        d.add(e);
        for(const t in e){
            c[t] = true;
        }
    };
    const m = r("emptyFunction");
    d.getGKs = function() {
        return null;
    };
    d.getLogged = function() {
        return Object.keys(c).map((e)=>({
                identifier: e,
                hash: u[e].hash
            }));
    };
    d.setPass = m;
    d.setFail = m;
    d.clear = m;
    l.default = d;
}, 98);
__d("GHLDetectionUtils", [
    "GHLDetectionUtilsPreludeSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        if (r("gkx")("5415")) {
            return true;
        }
        return o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed();
    }
    function s(e) {
        if (r("gkx")("8869")) {
            return true;
        }
        return typeof e === "function" && !(e.toString === e.toString.toString && o("GHLDetectionUtilsPreludeSafe").normalize(e.toString()) === "function XMLHttpRequest() { [native code] }" && o("GHLDetectionUtilsPreludeSafe").normalize(e.toString.toString()) === "function toString() { [native code] }");
    }
    function u(e) {
        if (r("gkx")("9063")) {
            return true;
        }
        return typeof e === "function" && !(e.prototype.fillText.toString === e.prototype.fillText.toString.toString && o("GHLDetectionUtilsPreludeSafe").normalize(e.prototype.fillText.toString()) === "function fillText() { [native code] }" && o("GHLDetectionUtilsPreludeSafe").normalize(e.prototype.fillText.toString.toString()) === "function toString() { [native code] }");
    }
    function c() {
        return typeof String === "function" && !(String.toString === String.toString.toString && o("GHLDetectionUtilsPreludeSafe").normalize(String.toString()) === "function String() { [native code] }" && o("GHLDetectionUtilsPreludeSafe").normalize(String.toString.toString()) === "function toString() { [native code] }");
    }
    function d() {
        return typeof Function.prototype.call === "function" && !(Function.prototype.call.toString === Function.prototype.call.toString.toString && o("GHLDetectionUtilsPreludeSafe").normalize(Function.prototype.call.toString()) === "function call() { [native code] }" && o("GHLDetectionUtilsPreludeSafe").normalize(Function.prototype.call.toString.toString()) === "function toString() { [native code] }");
    }
    l.isNativeStackTampered = o("GHLDetectionUtilsPreludeSafe").isNativeStackTampered;
    l.isXHRResponseGetterShimmed = o("GHLDetectionUtilsPreludeSafe").isXHRResponseGetterShimmed;
    l.isJSONParseShimmed = e;
    l.isXHRModified = s;
    l.isCanvasFillTextModified = u;
    l.isStringShimmed = c;
    l.isCallShimmed = d;
}, 98);
__d("GHLNetworkLayer", [
    "FBLogger",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        try {
            if (r("gkx")("8068") && o("GHLDetectionUtils").isXHRModified(t.XMLHttpRequest)) {
                for(var e = 5, n = Object.getPrototypeOf(t.XMLHttpRequest), a = 0; n != null && a < e && o("GHLDetectionUtilsPreludeSafe").normalize(n.toString())?.includes("{ [native code] }") !== true;){
                    n = Object.getPrototypeOf(n);
                    a++;
                }
                if (n != null && !o("GHLDetectionUtils").isXHRModified(n)) {
                    return n;
                }
            }
            return null;
        } catch (error) {
            r("FBLogger")("ghl").catching(error instanceof Error ? error : r("err")(String(error))).mustfix("error while getGHLXhr");
            return null;
        }
    }
    l.getGHLXhr = e;
}, 98);
__d("getSameOriginTransport", [
    "ExecutionEnvironment",
    "FBLogger",
    "GHLDetectionUtils",
    "GHLDetectionUtilsPreludeSafe",
    "GHLNetworkLayer",
    "err",
    "getErrorSafe",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s = null;
    let u = false;
    let c = false;
    function d() {
        if (!(e || (e = r("ExecutionEnvironment"))).canUseDOM && !(e || (e = r("ExecutionEnvironment"))).isInWorker) {
            throw r("FBLogger")("comet_infra").mustfixThrow("getSameOriginTransport: Same origin transport unavailable in the server environment.");
        }
        try {
            if (s == null) {
                try {
                    const n = r("justknobx")._("3323") ? o("GHLNetworkLayer").getGHLXhr() : null;
                    if (n != null) {
                        s = n;
                    } else {
                        s = t.XMLHttpRequest;
                    }
                } catch (error) {
                    r("FBLogger")("ghl").warn("error while getGHLXhr in getSameOriginTransport: %s", r("getErrorSafe")(error).message);
                    s = t.XMLHttpRequest;
                }
            }
            if (!u) {
                try {
                    const a = r("justknobx")._("2694") && r("gkx")("5023");
                    if (r("justknobx")._("5589") && r("gkx")("23984") && ((a ? o("GHLDetectionUtilsPreludeSafe").isCallShimmedCrossRealm() : o("GHLDetectionUtils").isCallShimmed()) || o("GHLDetectionUtilsPreludeSafe").isCallBehaviorallyShimmed())) {
                        o("GHLDetectionUtilsPreludeSafe").restoreNativeCall();
                    }
                } catch (e) {}
                u = true;
            }
            if (!c) {
                try {
                    if (r("justknobx")._("340") && r("gkx")("999") && o("GHLDetectionUtilsPreludeSafe").isXHRResponseGetterShimmed()) {
                        o("GHLDetectionUtilsPreludeSafe").restoreNativeXHRGetters();
                    }
                } catch (e) {}
                c = true;
            }
            if (s == null) {
                throw r("err")("getSameOriginTransport: XMLHttpRequestSafe is null");
            }
            return new s;
        } catch (error) {
            throw r("err")("getSameOriginTransport: %s", r("getErrorSafe")(error).message);
        }
    }
    l.default = d;
}, 98);
__d("MakeHasteTranslations", [
    "BootloaderConfig",
    "BootloaderRetryTracker",
    "ExecutionEnvironment",
    "FBLogger",
    "MakeHasteTranslationsMap",
    "Promise",
    "TimeSlice",
    "err",
    "fb-error",
    "getErrorSafe",
    "getSameOriginTransport",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let c;
    let d;
    const m = {};
    const p = new (r("BootloaderRetryTracker"))({
        retries: r("BootloaderConfig").translationRetries ?? r("BootloaderConfig").jsRetries,
        abortNum: r("BootloaderConfig").translationRetryAbortNum ?? r("BootloaderConfig").jsRetryAbortNum,
        abortTime: r("BootloaderConfig").translationRetryAbortTime ?? r("BootloaderConfig").jsRetryAbortTime,
        abortCallback: function() {
            r("FBLogger")("binary_transparency").warn("Translations retry abort");
        }
    });
    function _(e) {
        const t = JSON.parse(e);
        if (t != null && typeof t === "object" && typeof t.translations === "object" && Array.isArray(t.virtual_modules)) {
            return t;
        }
        throw r("err")("Invalid response shape");
    }
    function f(e) {
        return new (d || (d = n("Promise")))(function(t, n) {
            const o = r("TimeSlice").getGuardedContinuation("MakeHasteTranslationsFetcher genSendRequest");
            const a = r("getSameOriginTransport")();
            a.open("GET", e, true);
            a.onreadystatechange = function(i) {
                if (a.readyState === 4) {
                    o(function() {
                        r("fb-error").ErrorXFBDebug.addFromXHR(a);
                        try {
                            if (a.status !== 200) {
                                throw r("err")("Received non-200 response");
                            }
                            t(_(a.responseText));
                        } catch (error) {
                            p.maybeScheduleRetry(e, function() {
                                return t(f(e));
                            }, function() {
                                return n(r("err")("Error processing response. XHR Error: %s, XHR status: %s, Response Text: %s", r("getErrorSafe")(error).toString(), a.status, a.responseText.length > 300 ? `${a.responseText.slice(0, 300)}...` : a.responseText));
                            });
                        }
                    });
                }
            };
            a.send();
        });
    }
    const g = "data:application/json;base64";
    function h(e) {
        if (!e.includes(g)) {
            throw r("err")("Invalid data uri mime type");
        }
        const t = e.split(",");
        const n = t[0];
        const o = t[1];
        if (o == null) {
            throw r("err")("Data uri contains no contents");
        }
        return _(atob(o));
    }
    function y(e, a) {
        if (!(c || (c = r("ExecutionEnvironment"))).isInBrowser || m[e] === "inprogress" || m[e] === "complete") {
            return (d || (d = n("Promise"))).resolve();
        }
        m[e] = "inprogress";
        return (a.includes(g) ? (d || (d = n("Promise"))).resolve(h(a)) : f(a)).then((n)=>{
            o("MakeHasteTranslationsMap").setBatch(n.translations);
            n.virtual_modules.forEach((e)=>t.define(e, {}));
            m[e] = "complete";
        }).catch((t)=>{
            m[e] = "failed";
            r("FBLogger")("binary_transparency", "translation_download_error").catching(r("getErrorSafe")(t)).warn("Unable to download and process translation map. Url: %s", a);
        });
    }
    function C(e) {
        for (const [n, o] of Object.entries(e)){
            r("promiseDone")(y(n, o));
        }
    }
    l.genFetchAndProcessTranslations = y;
    l.fetchTranslationsForEarlyFlush = C;
}, 98);
__d("clearTimeout", [
    "cr:3725"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:3725");
}, 98);
__d("setTimeout", [
    "cr:4344"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:4344");
}, 98);
__d("NetworkHeartbeat", [
    "clearTimeout",
    "getSameOriginTransport",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "/nw/";
    const s = 6400;
    let u = 100;
    let c = null;
    let d = 0;
    let m = null;
    let p = false;
    function _(t, n) {
        const o = r("getSameOriginTransport")();
        m = o;
        o.open("GET", e, true);
        o.onload = function() {
            if (m && m.status === 204) {
                p = true;
            }
            g(t);
        };
        o.onerror = function() {
            h(t, n);
        };
        o.ontimeout = function() {
            h(t, n);
        };
        o.send();
    }
    function f() {
        m = null;
        u = 100;
        d = 0;
        r("clearTimeout")(c);
    }
    function g(e) {
        f();
        e();
    }
    function h(e, t) {
        c = r("setTimeout")(function() {
            y(e, t, undefined, true);
        }, u);
        d++;
        if (u < s) {
            u = Math.min(u * 2 ** d, s);
        }
        t();
    }
    function y(e, t, n = function() {
        return true;
    }, r = false) {
        if (!p) {
            if (r || m == null && n()) {
                _(e, t);
            }
        }
    }
    function C() {
        return m != null;
    }
    l.maybeStartHeartbeat = y;
    l.isHeartbeatPending = C;
}, 98);
__d("NetworkStatusImpl", [
    "NetworkHeartbeat",
    "justknobx",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    const u = [];
    const c = typeof window !== "undefined" ? window : self;
    let online = c?.navigator?.onLine;
    const m = 2;
    const p = 5000;
    let _ = [];
    let f = [];
    let g = 0;
    const h = true;
    const y = false;
    let C = false;
    var b = function() {
        L(h, true);
    };
    var v = function() {
        L(y, true);
    };
    function S() {
        const e = u.slice();
        e.forEach((e)=>{
            e({
                online
            });
        });
    }
    function R(e) {
        const t = u.indexOf(e);
        if (t > -1) {
            u.splice(t, 1);
        }
    }
    function L(e, t = false) {
        const n = online === e;
        const r = !t && e === h && o("NetworkHeartbeat").isHeartbeatPending();
        if (!(n || r)) {
            C = C || e === y;
            online = e;
            if (!online) {
                o("NetworkHeartbeat").maybeStartHeartbeat(b, v);
            }
            S();
        }
    }
    function E() {
        const e = (s || (s = r("performanceNow")))();
        _ = _.filter((t)=>k(t.startTime, e));
        f = f.filter((t)=>k(t.startTime, e));
        return f.length / _.length < m;
    }
    var k = (t, n)=>t > n - p;
    function I() {
        return online;
    }
    function T(e) {
        u.push(e);
        let t = false;
        return {
            remove: function() {
                if (!t) {
                    t = true;
                    R(e);
                }
            }
        };
    }
    function D() {
        const e = (s || (s = r("performanceNow")))();
        _.push({
            startTime: e
        });
        o("NetworkHeartbeat").maybeStartHeartbeat(b, v, E);
    }
    function x() {
        const e = (s || (s = r("performanceNow")))();
        f.push({
            startTime: e
        });
        if (!k(g, e)) {
            f = f.filter((t)=>k(t.startTime, e));
            g = e;
        }
    }
    function $() {
        return C;
    }
    if (!online && r("justknobx")._("4216")) {
        o("NetworkHeartbeat").maybeStartHeartbeat(b, v);
    }
    c.addEventListener("online", function() {
        L(h);
    });
    c.addEventListener("offline", function() {
        L(y);
    });
    l.isOnline = I;
    l.onChange = T;
    l.reportError = D;
    l.reportSuccess = x;
    l.wasOffline = $;
}, 98);
__d("NetworkStatusSham", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        return true;
    }
    function l(e) {
        return {
            remove: function() {}
        };
    }
    function s() {}
    function u() {}
    function c() {
        return false;
    }
    i.isOnline = e;
    i.onChange = l;
    i.reportError = s;
    i.reportSuccess = u;
    i.wasOffline = c;
}, 66);
__d("NetworkStatus", [
    "NetworkStatusImpl",
    "NetworkStatusSham",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (r("gkx")("7742") || r("gkx")("20935")) && r("gkx")("20936") ? o("NetworkStatusImpl") : o("NetworkStatusSham");
    l.default = e;
}, 98);
__d("ResourceHasher", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = "placeholder";
    let u = 0;
    function c(e) {
        return `async:${e}`;
    }
    function d() {
        return `ejs:${u++}`;
    }
    function m(e) {
        if (typeof e !== "string") {
            s(0, 19551, e);
        }
        return e;
    }
    l.PLACEHOLDER = e;
    l.getAsyncHash = c;
    l.createExternalJSHash = d;
    l.getValidResourceHash = m;
}, 98);
__d("ServerJsRuntimeEnvironment", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    function u(platform, executionContext) {
        if (e != null) {
            s(0, 71696);
        }
        e = {
            platform,
            executionContext
        };
    }
    function c() {
        return e != null;
    }
    function d() {
        return e?.executionContext;
    }
    function m() {
        return e?.platform;
    }
    l.init = u;
    l.isRunningServerJsRuntime = c;
    l.getExecutionContext = d;
    l.getPlatform = m;
}, 98);
__d("__debug", [], function(t, n, r, o, a, i) {}, null);
__d("objectKeys", [], function(t, n, r, o, a, i) {
    function e(e) {
        return Object.keys(e);
    }
    i.default = e;
}, 66);
__d("setTimeoutAcrossTransitions", [
    "cr:7391"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:7391");
}, 98);
__d("Bootloader", [
    "invariant",
    "BootloaderConfig",
    "BootloaderDocumentInserter",
    "BootloaderEndpoint",
    "BootloaderEvents",
    "BootloaderEventsManager",
    "BootloaderPreloader",
    "BootloaderRetryTracker",
    "BootloaderUsageLoggerUtils",
    "CSSLoader",
    "ClientConsistency",
    "ErrorPubSub",
    "ExecutionEnvironment",
    "FBLogger",
    "HasteBitMap",
    "HasteResourceIndexUtil",
    "JSResourceReferenceImpl",
    "MakeHasteTranslations",
    "NetworkStatus",
    "RequireDeferredReference",
    "ResourceHasher",
    "ResourceTimingsStore",
    "ServerJsRuntimeEnvironment",
    "SiteData",
    "TimeSlice",
    "__debug",
    "clearTimeout",
    "cr:696703",
    "err",
    "fb-error",
    "getErrorSafe",
    "gkx",
    "ifRequireable",
    "ifRequired",
    "nullthrows",
    "objectKeys",
    "objectValues",
    "performanceAbsoluteNow",
    "performanceNow",
    "promiseDone",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = function() {};
    const _ = 10000;
    const f = 15000;
    const queuedToMarkAsImmediate = new Set;
    const h = new Set;
    let y = !!(m = r("BootloaderConfig")).deferBootloads;
    let C = [];
    let b = false;
    let v = [];
    const S = new Map;
    const requestedRsrcIndex = new Set;
    const DOMAppendedJSHashes = new Set;
    const requested = new Map;
    const loaded = new Map;
    const errors = new Map;
    const componentMap = new Map;
    const resources = new Map;
    const riMap = new Map;
    const revMap = new Map;
    const bootloaded = new Map;
    const N = new Set;
    let M = false;
    const w = new Set;
    let A = false;
    const events = new (r("BootloaderEventsManager"));
    const notAvailableResources = new Set;
    const B = new (r("BootloaderRetryTracker"))({
        retries: m.jsRetries,
        abortNum: m.jsRetryAbortNum,
        abortTime: m.jsRetryAbortTime,
        abortCallback: function() {
            r("FBLogger")("bootloader", "js_retry_abort").info("JS retry abort");
        }
    });
    const offlineFailedResources = new Set;
    let q = false;
    let U = null;
    function V() {
        if (U == null) {
            try {
                if (r("gkx")("1174")) {
                    if (typeof r("NetworkStatus").isOnline === "function" && typeof r("NetworkStatus").onChange === "function") {
                        q = !r("NetworkStatus").isOnline();
                        U = r("NetworkStatus").onChange(function({ online }) {
                            const n = q;
                            q = !online;
                            r("FBLogger")("bootloader").info("Network status change: was offline %s, now offline %s", n, q);
                            if (n && online) {
                                H();
                            }
                        });
                    } else {
                        const e = new Error("Network status API is not available");
                        e.stack;
                        throw e;
                    }
                }
            } catch (e) {
                r("FBLogger")("bootloader").warn("NetworkStatus is failing");
            }
        }
    }
    V();
    function H() {
        if (offlineFailedResources.size !== 0) {
            const e = Array.from(offlineFailedResources);
            offlineFailedResources.clear();
            r("FBLogger")("bootloader").info("Network back online, retrying %s failed resources", e.length);
            ve.loadResources(e);
        }
    }
    function G(e) {
        if (q) {
            offlineFailedResources.add(e);
            r("FBLogger")("bootloader").info("Resource %s failed while offline, will retry when network returns", e);
        }
    }
    (e || (e = r("ErrorPubSub"))).unshiftListener(function(e) {
        const t = [];
        for (const [r, o] of requested){
            if (!loaded.has(r)) {
                const a = X(r);
                if (!(a.type === "csr" || a.type === "async")) {
                    t.push(a.src);
                }
            }
        }
        e.loadingUrls = t;
    });
    function z(e) {
        for (const t of e){
            if (h.has(t)) {
                return true;
            }
        }
        return false;
    }
    function j(e) {
        if (y || !A || z(e) && !b) {
            return false;
        }
        for (const t of e){
            const n = componentMap.get(t);
            if (!n) {
                return false;
            }
            for (const r of [
                n.r,
                n.rdfds?.r || [],
                n.rds?.r || []
            ]){
                for (const i of r){
                    if (!resources.has(i)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    function K(e) {
        const t = componentMap.get(e);
        if (!t) {
            throw r("fb-error").TAAL.blameToPreviousFile(r("err")("Bootloader: %s is not in the component map", e));
        }
        return t;
    }
    function Q(e) {
        const t = K(e);
        if (t.be) {
            delete t.be;
            ve.done(o("ResourceHasher").getAsyncHash(e));
        }
        h.add(e);
    }
    function X(e) {
        const t = resources.get(e);
        if (!t) {
            throw r("fb-error").TAAL.blameToPreviousFile(r("err")("No resource entry for hash: %s", e));
        }
        return t;
    }
    function Y(e, t) {
        const n = o("ResourceHasher").getAsyncHash(e);
        if (!resources.has(n)) {
            resources.set(n, {
                type: "async",
                module: e,
                blocking: !!t
            });
        } else {
            const r = X(n);
            if (r.type !== "async") {
                s(0, 21557);
            }
            if (r.blocking && !t) {
                r.blocking = false;
            }
        }
        return n;
    }
    function J(e) {
        return !pe(e);
    }
    function Z(e) {
        if (!J(e)) {
            return false;
        }
        const t = K(e);
        const n = t.be;
        return !!n;
    }
    function ee(e) {
        if (!Z(e)) {
            return null;
        }
        const t = o("ResourceHasher").getAsyncHash(e);
        return events.rsrcDone(t);
    }
    function te(e, t, n) {
        const o = (u || (u = r("performanceAbsoluteNow")))();
        const t_src = t.src;
        const i = r("ResourceTimingsStore").getUID("js", t_src);
        r("ResourceTimingsStore").annotate("js", i).addStringAnnotation("name", e).addStringAnnotation("source", t_src);
        r("ResourceTimingsStore").measureRequestSent("js", i);
        r("nullthrows")(self.bl_worker_import_wrapper)(t_src).then(()=>{
            const t = B.getNumRetriesForSource(t_src);
            if (t > 0) {
                r("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", e, t_src, (u || (u = r("performanceAbsoluteNow")))() - o, t);
            }
            r("ResourceTimingsStore").measureResponseReceived("js", i);
            n();
        }).catch((l)=>{
            r("ResourceTimingsStore").measureResponseReceived("js", i);
            const s = (u || (u = r("performanceAbsoluteNow")))();
            B.maybeScheduleRetry(t_src, function() {
                te(e, t, n);
            }, function() {
                errors.set(e, s);
                r("FBLogger")("bootloader").catching(r("getErrorSafe")(l)).warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", e, t_src, s - o, B.getNumRetriesForSource(t_src), requested.size - loaded.size);
                r("NetworkStatus").reportError();
                n();
            });
        });
    }
    function ne(e, t, n, o) {
        if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
            te(e, t, n);
            return;
        }
        const a = r("nullthrows")(o);
        const i = document.createElement("script");
        i.src = t.src;
        if (t.d && t.src.startsWith("data:")) {
            i.nonce = r("BootloaderConfig").nonce;
        }
        i.async = true;
        if (r("BootloaderConfig").enableRetryOnStuckResource) {
            i.setAttribute("fetchPriority", "high");
        }
        if (!t.nc) {
            i.crossOrigin = "anonymous";
        }
        if (t.m != null) {
            i.dataset.btmanifest = t.m;
        }
        if (t.tsrc != null) {
            i.dataset.tsrc = t.tsrc;
        }
        i.dataset.bootloaderHashClient = e;
        re(i, e, t, n);
        DOMAppendedJSHashes.add(e);
        a.appendChild(i);
    }
    function re(e, t, n, o) {
        const e_src = e.src;
        const i = (u || (u = r("performanceAbsoluteNow")))();
        const l = r("TimeSlice").getGuardedContinuation("Bootloader script.onresponse");
        const s = r("ResourceTimingsStore").getUID("js", e_src);
        r("ResourceTimingsStore").annotate("js", s).addStringAnnotation("name", t).addStringAnnotation("source", e_src);
        r("ifRequireable")("TimeSliceInteraction", function(e) {
            e.informGlobally("bootloader._loadJS").addStringAnnotation("source", e_src).addStringAnnotation("name", t);
        });
        r("ResourceTimingsStore").measureRequestSent("js", s);
        let c = false;
        e.onload = l.bind(undefined, function() {
            c = true;
            const e = B.getNumRetriesForSource(e_src);
            if (e > 0) {
                r("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", t, e_src, (u || (u = r("performanceAbsoluteNow")))() - i, e);
            }
            r("ResourceTimingsStore").measureResponseReceived("js", s);
            o();
        });
        e.onerror = l.bind(undefined, function() {
            c = true;
            const l = (u || (u = r("performanceAbsoluteNow")))();
            errors.set(t, l);
            r("ResourceTimingsStore").measureResponseReceived("js", s);
            B.maybeScheduleRetry(e_src, function() {
                const e_parentNode = e.parentNode;
                if (e_parentNode) {
                    errors.delete(t);
                    e_parentNode.removeChild(e);
                    ne(t, n, o, e_parentNode);
                }
            }, function() {
                r("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", t, e_src, l - i, B.getNumRetriesForSource(e_src), requested.size - loaded.size);
                r("NetworkStatus").reportError();
                o();
            });
        });
        if (r("BootloaderConfig").enableRetryOnStuckResource) {
            r("setTimeoutAcrossTransitions")(l.bind(undefined, function() {
                if (!c) {
                    B.maybeRetryImmediately(e_src, function() {
                        const e_parentNode = e.parentNode;
                        if (e_parentNode) {
                            e_parentNode.removeChild(e);
                            ne(t, n, o, e_parentNode);
                        }
                    }, function() {
                        r("FBLogger")("bootloader").warn("JS loading timeout [%s] at %s | retries: %s | concurrency: %s", t, e_src, B.getNumRetriesForSource(e_src), requested.size - loaded.size);
                    });
                }
            }), _);
        }
    }
    function oe(e, t, n) {
        return function() {
            r("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", e, t.src, requested.size - loaded.size);
            errors.set(e, (u || (u = r("performanceAbsoluteNow")))());
            r("NetworkStatus").reportError();
            n();
        };
    }
    function ae(e, src, n, btCutoffIndex) {
        if (!src.includes("/rsrc.php") || src.includes("/intern/rsrc.php")) {
            return [];
        }
        const l = (src.match(/(.*\/)([^.]+)(\.)/) ?? [])[2];
        if (l == null) {
            return [];
        }
        return l.match(/.{1,11}/g)?.filter(function(t, o) {
            return !n.has(o) && e[o] > btCutoffIndex;
        }) ?? [];
    }
    function ie(e, t) {
        const n = e.replace(/\/y[a-zA-Z0-9_-]\//, "/");
        if (n.includes("/intern/rsrc.php") || n.includes("/intern/rsrc-translations.php")) {
            return n.replace(/(!)(.+)(\.(?:css|js)(?:$|\?))/, (e, n, r, o)=>n + r.split(",").filter((e, n)=>!t.has(n)).join(",") + o);
        }
        if (n.includes("/rsrc.php") || n.includes("/rsrc-translations.php")) {
            return n.replace(/(.*\/)([^.]+)(\.)/, (e, n, r, o)=>n + r.match(/.{1,11}/g).filter((e, n)=>!t.has(n)).join("") + o);
        }
        return e;
    }
    function le(e, t, n, a) {
        if (r("gkx")("15745")) {
            if (requested.has(e) && !errors.has(e)) {
                return;
            }
        } else if (requested.has(e)) {
            return;
        }
        if (errors.has(e)) {
            errors.delete(e);
        }
        requested.set(e, (u || (u = r("performanceAbsoluteNow")))());
        const i = [];
        if ((t.type === "js" || t.type === "css") && t.p != null && t.d !== 1 && r("BootloaderConfig").hypStep4) {
            const l = o("HasteResourceIndexUtil").parseResourceIndexes(t.p);
            const d = new Set;
            let m = 0;
            l.forEach((t, n)=>{
                if (t !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX && riMap.get(t) !== e) {
                    d.add(n);
                } else if (t > m) {
                    m = t;
                }
            });
            if (m > r("BootloaderConfig").btCutoffIndex) {
                const p = ae(l, t.src, d, r("BootloaderConfig").btCutoffIndex);
                i.push(p);
            }
            if (d.size === l.length) {
                return;
            }
            if (d.size > 0) {
                t.src = ie(t.src, d);
                if (t.type === "js" && t.tsrc != null && t.tsrc.trim() !== "") {
                    t.tsrc = ie(r("nullthrows")(t.tsrc), d);
                }
            }
        }
        if (t.type === "js" && t.tsrc != null && t.tsrc.trim() !== "") {
            r("promiseDone")(o("MakeHasteTranslations").genFetchAndProcessTranslations(e, r("nullthrows")(t.tsrc)));
        }
        o("BootloaderPreloader").preloadResource(t, n, undefined, undefined);
        switch(t.type){
            case "js":
                ne(e, t, function() {
                    ve.done(e);
                    for (const t of i){
                        o("BootloaderEvents").notifyResourceInLongTailBTManifest(t, a);
                    }
                }, n);
                break;
            case "css":
                const _ = function() {
                    return ve.done(e);
                };
                if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
                    _();
                    break;
                }
                r("CSSLoader").loadStyleSheet(e, t.src, r("nullthrows")(n), !t.nc, t.m, _, oe(e, t, _));
                break;
            case "async":
                o("BootloaderEndpoint").BootloaderEndpoint.load(t.module, t.blocking, e);
                break;
            default:
                t.type;
                s(0, 3721);
        }
    }
    function se(e, t, a, i, l) {
        const u = new Map;
        const c = l ?? o("BootloaderEvents").newResourceMapSet();
        const d = [];
        const m = [];
        const p = [];
        for (const [f, g] of _resolveCSRs(e)){
            let h;
            switch(g.type){
                case "css":
                    h = g.nonblocking ? "nonblocking" : "blocking";
                    break;
                case "js":
                    h = "default";
                    break;
                case "async":
                    h = g.blocking ? "blocking" : "nonblocking";
                    break;
                default:
                    g.type;
                    s(0, 3721);
            }
            c[h].set(f, g);
            const y = events.rsrcDone(f);
            p.push(y);
            if (h !== "nonblocking") {
                m.push(y);
                if (h === "blocking") {
                    d.push(y);
                }
            }
            if (r("gkx")("15745")) {
                if (!requested.has(f) || errors.has(f)) {
                    u.set(f, g);
                }
            } else if (!requested.has(f)) {
                u.set(f, g);
            }
        }
        let C;
        let b;
        if (n("cr:696703")) {
            b = n("cr:696703").scheduleLoggingPriCallback;
            C = n("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE();
        } else {
            C = b = function(t) {
                return t();
            };
        }
        const { onAll, onBlocking, onLog } = t;
        if (onBlocking) {
            events.registerCallback(function() {
                C(onBlocking);
            }, d);
        }
        if (onAll) {
            events.registerCallback(function() {
                C(onAll);
            }, m);
        }
        if (onLog) {
            events.registerCallback(function() {
                b(function() {
                    return onLog(c);
                });
            }, p);
        }
        for (const [k, T] of u){
            le(k, T, a, i);
        }
    }
    function ue(e, t, n) {
        resources.set(e, t);
        if (!(t.type === "async" || t.type === "csr")) {
            const a = t.p;
            if (a != null) {
                for (const i of o("HasteResourceIndexUtil").parseResourceIndexes(a)){
                    if (i !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX) {
                        if (!riMap.has(i) || n) {
                            riMap.set(i, e);
                        }
                        if (t.c && r("BootloaderConfig").csrOn) {
                            o("HasteBitMap").add("__csr", i);
                        }
                    }
                }
            }
            ce(e);
        }
    }
    function ce(e) {
        if (notAvailableResources.has(e)) {
            notAvailableResources.delete(e);
            ve.loadResources([
                e
            ]);
        }
    }
    function de(e, components) {
        const a = events.bootload(components);
        if (N.has(a)) {
            return [
                a,
                null
            ];
        }
        N.add(a);
        const fetchStartTime = (u || (u = r("performanceAbsoluteNow")))();
        const l = {
            ref: e,
            components,
            timesliceContext: r("TimeSlice").getContext(),
            startTime: S.get(a) ?? fetchStartTime,
            fetchStartTime,
            callbackStart: 0,
            callbackEnd: 0,
            tierOne: o("BootloaderEvents").newResourceMapSet(),
            tierTwo: o("BootloaderEvents").newResourceMapSet(),
            tierThree: o("BootloaderEvents").newResourceMapSet(),
            beRequests: new Map
        };
        o("BootloaderEvents").notifyBootloadStart(l);
        return [
            a,
            l
        ];
    }
    function me(e) {
        return r("ifRequired").call(null, e, function() {
            return true;
        }, function() {
            return false;
        });
    }
    function pe(e) {
        return r("ifRequireable").call(null, e, function() {
            return true;
        }, function() {
            return false;
        });
    }
    function _e(e, t, n, bootloaderData) {
        if (!bootloaded.has(e)) {
            bootloaded.set(e, {
                firstBootloadStart: (u || (u = r("performanceAbsoluteNow")))(),
                logData: new Set
            });
        }
        if (bootloaderData) {
            r("nullthrows")(bootloaded.get(e)).logData.add(bootloaderData);
        }
        const l = K(e);
        const { be, r: r_1, rdfds, rds } = l;
        const p = J(e) ? Y(e, be) : null;
        if (p == null) {
            events.notify(events.beDone(e));
        }
        se(p != null ? [
            p
        ].concat(r_1) : r_1, {
            onAll: function() {
                return events.notify(events.tierOne(e));
            },
            onLog: function() {
                return events.notify(events.tierOneLog(e));
            }
        }, n, e, bootloaderData?.tierOne);
        const _ = rdfds?.m || [];
        const f = function(o) {
            se(rdfds?.r || [], {
                onBlocking: function() {
                    return r("RequireDeferredReference").unblock(_, "css");
                },
                onAll: function() {
                    return events.registerCallback(function() {
                        events.notify(events.tierTwoStart(e));
                        a.call(null, _.map(r("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                            return events.notify(events.tierTwo(e));
                        });
                    }, [
                        events.tierOne(e),
                        t
                    ]);
                },
                onLog: function() {
                    return events.notify(events.tierTwoLog(e));
                }
            }, o, e, bootloaderData?.tierTwo);
        };
        if (r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 2) {
            events.registerCallback(function() {
                return o("BootloaderDocumentInserter").batchDOMInsert(f);
            }, [
                events.tierOne(e)
            ]);
        } else {
            f(n);
        }
        const g = rds?.m || [];
        const h = function(n) {
            se(rds?.r || [], {
                onBlocking: function() {
                    return r("RequireDeferredReference").unblock(g, "css");
                },
                onAll: function() {
                    return events.registerCallback(function() {
                        events.notify(events.tierThreeStart(e));
                        a.call(null, g.map(r("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                            return events.notify(events.tierThree(e));
                        });
                    }, [
                        events.tierTwo(e)
                    ]);
                },
                onLog: function() {
                    return events.notify(events.tierThreeLog(e));
                }
            }, n, e, bootloaderData?.tierThree);
        };
        if (r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 3) {
            events.registerCallback(function() {
                return o("BootloaderDocumentInserter").batchDOMInsert(h);
            }, [
                events.tierTwo(e)
            ]);
        } else {
            h(n);
        }
    }
    function _resolveCSRs(e) {
        const t = new Map;
        for (const n of e){
            const a = resources.get(n);
            if (!a) {
                notAvailableResources.add(n);
                r("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", n);
                continue;
            }
            let i;
            if (a.type === "csr") {
                i = o("HasteResourceIndexUtil").parseResourceIndexes(a.src);
            } else if (a.p != null) {
                i = o("HasteResourceIndexUtil").parseResourceIndexes(a.p);
                if (i.includes(o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX)) {
                    t.set(n, a);
                }
                i = i.filter((e)=>e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX);
            } else {
                t.set(n, a);
                continue;
            }
            for (const l of i){
                requestedRsrcIndex.add(l);
                const u = riMap.get(l);
                if (u == null) {
                    r("FBLogger")("bootloader").mustfix("SoT hash unavailable for resource index %s", l);
                    throw r("err")("SoT hash unavailable for resource index %s", l);
                }
                const c = X(u);
                if (c.type === "csr") {
                    s(0, 20056, u);
                }
                t.set(u, c);
            }
        }
        return t.entries();
    }
    function ge(e) {
        if (e.type === "csr") {
            return o("HasteResourceIndexUtil").parseResourceIndexes(e.src).filter((e)=>e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX);
        }
        if (e.p != null) {
            return o("HasteResourceIndexUtil").parseResourceIndexes(e.p).filter((e)=>e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX);
        }
        return [];
    }
    function he(e) {
        const n = e.getAttribute("data-bootloader-hash");
        if (n != null) {
            const a = o("ResourceHasher").getValidResourceHash(n);
            if (e.id) {
                if (w.has(e.id)) {
                    return;
                }
                w.add(e.id);
            }
            const i = e.tagName === "SCRIPT" ? {
                src: e.src,
                type: "js"
            } : {
                src: e.href,
                type: "css"
            };
            if (e.crossOrigin == null) {
                i.nc = 1;
            }
            if (i.type === "js" && e.dataset.tsrc != null && e.dataset.tsrc.trim() !== "") {
                i.tsrc = e.dataset.tsrc;
                r("promiseDone")(o("MakeHasteTranslations").genFetchAndProcessTranslations(a, i.tsrc));
            }
            if (i.type === "css" && e.getAttribute("data-nonblocking")) {
                i.nonblocking = 1;
            }
            const l = e.getAttribute("data-c");
            if (l === "1") {
                i.c = 1;
            } else if (l === "2") {
                i.c = 2;
            }
            const s = e.getAttribute("data-p");
            if (s != null) {
                i.p = s;
                const c = o("HasteResourceIndexUtil").parseResourceIndexes(s);
                const d = Math.max(...c);
                if (d > r("BootloaderConfig").btCutoffIndex) {
                    o("BootloaderEvents").notifyResourceInLongTailBTManifest(ae(c, i.src, new Set, r("BootloaderConfig").btCutoffIndex), "pickupPageResource");
                }
            }
            const m = e.getAttribute("data-btmanifest");
            if (m != null) {
                i.m = m;
            }
            ue(a, i, true);
            requested.set(a, (u || (u = r("performanceAbsoluteNow")))());
            const p = function() {
                return ve.done(a);
            };
            const _ = i.type === "js" ? !e.getAttribute("async") : e.parentNode?.tagName === "HEAD";
            if (_ || window._btldr && window._btldr[a]) {
                p();
            } else if (i.type === "js") {
                re(e, a, i, p);
            } else {
                r("FBLogger")("bootloader").info("Encountered body CSS not handled by BootloaderScriptListener: {\n          hash: '%s',\n          src: '%s',\n          cohort: '%s',\n        }", a, i.src, r("SiteData").pkg_cohort);
                r("CSSLoader").setupEventListenersForPotentiallyLoadedCSS(a, i.src, o("BootloaderDocumentInserter").getDOMContainerNode(), p, oe(a, i, p), e);
            }
        }
    }
    function ye() {
        if (!M) {
            M = true;
            if (!(!(c || (c = r("ExecutionEnvironment"))).canUseDOM || (c || (c = r("ExecutionEnvironment"))).isInWorker)) {
                Array.from(document.getElementsByTagName("link")).forEach((e)=>he(e));
                Array.from(document.getElementsByTagName("script")).forEach((e)=>he(e));
            }
        }
    }
    function Ce() {
        if (b) {
            const e = C;
            C = [];
            e.forEach(([t, n, o, a])=>{
                a(function() {
                    r("FBLogger")("bootloader").info("Support data is ready, executing immediate bootload:", t.join(", "));
                    ve.loadModules(t, n, o);
                });
            });
        }
    }
    function be() {
        A = true;
        const e = v;
        v = [];
        e.forEach(([t, n, r, o])=>{
            o(function() {
                ve.loadModules(t, n, r);
            });
        });
        Ce();
    }
    var ve = {
        loadModules: function(t, n = p, i = "loadModules: unknown caller") {
            const e = t;
            let l;
            let s = false;
            const c = function() {
                r("clearTimeout")(l);
                if (!s) {
                    n(...arguments);
                }
            };
            const d = {
                remove: function() {
                    s = true;
                }
            };
            if (r("BootloaderConfig").fastPathForAlreadyRequired && e.every((e)=>pe(e))) {
                a.call(null, e, function(...n) {
                    const i = r("BootloaderConfig").shouldEnableProxyArgs ? o("BootloaderUsageLoggerUtils").getProxyArgs.apply(o("BootloaderUsageLoggerUtils"), [
                        e
                    ].concat(n)) : n;
                    c(...i);
                });
                return d;
            }
            if (!j(e)) {
                const _ = "Deferred: Bootloader.loadModules";
                const f = r("TimeSlice").getGuardedContinuation(_);
                if (z(e) && !b) {
                    r("FBLogger")("bootloader").info("Support data is not ready, queuing immediate bootload:", e.join());
                    C.push([
                        e,
                        c,
                        i,
                        f
                    ]);
                } else {
                    v.push([
                        e,
                        c,
                        i,
                        f
                    ]);
                }
                const g = events.bootload(e);
                S.set(g, S.get(g) ?? (u || (u = r("performanceAbsoluteNow")))());
                return d;
            }
            const h = de(i, e);
            const y = h[0];
            const bootloaderData = h[1];
            events.registerCallback(a.bind(null, e, function() {
                if (bootloaderData) {
                    bootloaderData.callbackStart = (u || (u = r("performanceAbsoluteNow")))();
                }
                c(...arguments);
                if (bootloaderData) {
                    bootloaderData.callbackEnd = (u || (u = r("performanceAbsoluteNow")))();
                }
                events.notify(y);
            }), e.map((e)=>events.tierOne(e)));
            o("BootloaderDocumentInserter").batchDOMInsert(function(t) {
                for (const n of e){
                    _e(n, y, t, bootloaderData);
                }
            });
            if (bootloaderData) {
                const L = new Set([
                    y
                ]);
                for (const E of e){
                    L.add(events.beDone(E));
                    L.add(events.tierThree(E));
                    L.add(events.tierOneLog(E));
                    L.add(events.tierTwoLog(E));
                    L.add(events.tierThreeLog(E));
                }
                events.registerCallback(function() {
                    o("BootloaderEvents").notifyBootload(bootloaderData);
                }, Array.from(L));
                const k = new Set;
                for (const I of new Set(e)){
                    k.add(events.beDone(I));
                    k.add(events.tierOneLog(I));
                    k.add(events.tierTwoLog(I));
                    k.add(events.tierThreeLog(I));
                }
                const T = {
                    bootloaderData,
                    erroredResources: new Set,
                    offline: false
                };
                events.registerCallback(function() {
                    if (ve.getErrorCount() > 0) {
                        T.erroredResources.clear();
                        const e = (t)=>{
                            for (const e of r("objectValues")(t)){
                                for (const [o, a] of e){
                                    const i = ve.getResourceState(o);
                                    if (i.loadError != null) {
                                        G(o);
                                        if (a.type === "js" || a.type === "css") {
                                            T.erroredResources.add(a.src);
                                        } else if (a.type === "async") {
                                            T.erroredResources.add(a.module);
                                        }
                                    }
                                }
                            }
                        };
                        e(bootloaderData.tierOne);
                        e(bootloaderData.tierTwo);
                        e(bootloaderData.tierThree);
                        for (const t of bootloaderData.beRequests.values()){
                            e(t.rsrcs);
                        }
                        const n = r("gkx")("20935") ? !r("NetworkStatus").isOnline() : !window.navigator.onLine;
                        if (n) {
                            T.offline = true;
                        }
                        o("BootloaderEvents").notifyBootloadError(T);
                    }
                }, Array.from(k));
                r("ifRequireable")("TimeSliceInteraction", function(t) {
                    t.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(o("BootloaderEvents").flattenResourceMapSet(bootloaderData.tierOne).keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(o("BootloaderEvents").flattenResourceMapSet(bootloaderData.tierTwo).keys())).addSetAnnotation("rd_requested_hashes", Array.from(o("BootloaderEvents").flattenResourceMapSet(bootloaderData.tierThree).keys())).addStringAnnotation("bootloader_reference", i).addSetAnnotation("requested_components", e);
                });
                l = r("setTimeoutAcrossTransitions")(function() {
                    o("BootloaderEvents").notifyBootloaderCallbackTimeout(bootloaderData);
                }, r("BootloaderConfig").timeout);
            }
            return d;
        },
        loadResources: function(t, n) {
            ye();
            o("BootloaderDocumentInserter").batchDOMInsert(function(e) {
                return se(t.map((e)=>o("ResourceHasher").getValidResourceHash(e)), n ?? Object.freeze({}), e, "loadResources");
            });
        },
        loadTieredResources: function(t, n) {
            const e = r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 2;
            const a = r("BootloaderConfig").tieredLoadingFromTier != null && r("BootloaderConfig").tieredLoadingFromTier <= 3;
            let i = false;
            let l = false;
            const s = function(r) {
                se((t?.rds ?? []).map((e)=>o("ResourceHasher").getValidResourceHash(e)), n ?? Object.freeze({}), r, "loadTieredResources");
            };
            const u = function(r) {
                se((t?.rdfds ?? []).map((e)=>o("ResourceHasher").getValidResourceHash(e)), {
                    onAll: function() {
                        if (e) {
                            o("BootloaderDocumentInserter").batchDOMInsert(s);
                        } else if (a) {
                            l = true;
                            if (i) {
                                o("BootloaderDocumentInserter").batchDOMInsert(s);
                            }
                        }
                    }
                }, r, "loadTieredResources");
            };
            const c = function(r) {
                se((t?.r ?? []).map((e)=>o("ResourceHasher").getValidResourceHash(e)), {
                    onAll: function() {
                        if (e) {
                            o("BootloaderDocumentInserter").batchDOMInsert(u);
                        } else if (a) {
                            i = true;
                            if (l) {
                                o("BootloaderDocumentInserter").batchDOMInsert(s);
                            }
                        }
                    }
                }, r, "loadTieredResources");
            };
            if (e) {
                o("BootloaderDocumentInserter").batchDOMInsert(c);
            } else {
                o("BootloaderDocumentInserter").batchDOMInsert(function(e) {
                    c(e);
                    u(e);
                });
            }
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(src) {
            const e = o("ResourceHasher").createExternalJSHash();
            ue(e, {
                type: "js",
                src,
                nc: 1
            }, false);
            ve.loadResources([
                e
            ]);
        },
        done: function(t) {
            loaded.set(t, (u || (u = r("performanceAbsoluteNow")))());
            events.notify(events.rsrcDone(t));
        },
        beDone: function(t, n, r) {
            for (const e of bootloaded.get(t)?.logData ?? []){
                e.beRequests.set(n, r);
            }
            events.notify(events.beDone(t));
        },
        handlePayload: function(t, n) {
            for (const l of t.rsrcTags ?? []){
                const u = document.getElementById(l);
                if (u instanceof HTMLScriptElement || u instanceof HTMLLinkElement) {
                    he(u);
                } else {
                    r("FBLogger")("bootloader").warn("rsrcTags element missing or not a script/link tag: %s", l);
                }
            }
            const c = t.consistency?.rev ?? null;
            ve.setResourceMap(t.rsrcMap ?? {}, t.sotUpgrades, c, n);
            if (t.indexUpgrades) {
                r("objectKeys")(t.indexUpgrades).forEach((e)=>{
                    const n = o("HasteResourceIndexUtil").parseResourceIndexes(r("nullthrows")(t.indexUpgrades)[e]);
                    if (n.length) {
                        n.forEach((t)=>o("HasteBitMap").add(e, t));
                    }
                });
            }
            if (t.compMap) {
                ve.enableBootload(t.compMap, n);
            }
        },
        enableBootload: function(t, n) {
            for(const e in t){
                if (n) {
                    n.comp++;
                }
                if (componentMap.has(e)) {
                    if (n) {
                        n.dup_comp++;
                    }
                } else {
                    componentMap.set(e, t[e]);
                    if (queuedToMarkAsImmediate.has(e)) {
                        queuedToMarkAsImmediate.delete(e);
                        Q(e);
                    }
                }
            }
            ye();
            if (!y) {
                be();
            }
        },
        undeferBootloads: function(t = false) {
            if (!/[?&]__deferBootloads=/.test(window.location.search)) {
                if (t && y) {
                    o("BootloaderEvents").notifyDeferTimeout({
                        componentMapSize: componentMap.size,
                        pending: v.map(([components, n, r, o])=>({
                                components,
                                ref: r
                            })),
                        time: (d || (d = r("performanceNow")))()
                    });
                }
                y = false;
                if (componentMap.size) {
                    be();
                }
            }
        },
        markComponentsAsImmediate: function(t) {
            for (const e of t){
                if (componentMap.has(e)) {
                    Q(e);
                } else {
                    queuedToMarkAsImmediate.add(e);
                }
            }
        },
        markSupportDataReadyForImmediateBootloads: function() {
            b = true;
            Ce();
        },
        setResourceMap: function(t, n, a, i) {
            let e = false;
            for(let l in t){
                if (i) {
                    i.rsrc++;
                }
                l = o("ResourceHasher").getValidResourceHash(l);
                if (a != null) {
                    revMap.set(l, a);
                }
                const s = t[l];
                const u = resources.get(l);
                if (u) {
                    if (i) {
                        i.dup_rsrc++;
                    }
                    if ((u.type === "js" && s.type === "js" || u.type === "css" && s.type === "css") && s.d && !u.d) {
                        if (s.type === "js") {
                            e = true;
                        }
                        if (s.nonce != null && u.type === "js") {
                            u.nonce = s.nonce;
                        }
                        u.src = s.src;
                        u.d = 1;
                    }
                } else {
                    if (s.type === "js") {
                        e = true;
                    }
                    ue(l, s, false);
                }
            }
            if (e && a != null) {
                r("ClientConsistency").addAdditionalRevision(a);
            }
            if (n) {
                for (const c of n){
                    const d = resources.get(c);
                    if (d) {
                        ue(c, d, true);
                    }
                }
            }
        },
        getURLToHashMap: function() {
            const e = new Map;
            for (const [n, r] of resources){
                if (!(r.type === "async" || r.type === "csr")) {
                    e.set(r.src, n);
                }
            }
            return e;
        },
        loadPredictedResourceMap: function(t, n, r) {
            ve.setResourceMap(t, null, r);
            ve.loadResources(Object.keys(t), n);
        },
        getCSSResources: function(t) {
            const e = [];
            for (const [r, o] of _resolveCSRs(t)){
                if (o.type === "css") {
                    e.push(r);
                }
            }
            return e;
        },
        getBootloadPendingComponents: function() {
            const e = new Map;
            for (const [n] of bootloaded){
                if (!me(n)) {
                    e.set(n, ve.getComponentDebugState(n));
                }
            }
            return e;
        },
        getComponentDebugState: function(t) {
            const a = (t)=>!!events.getEventTime(t);
            return {
                phases: {
                    tierOne: a(events.tierOne(t)),
                    tierOneLog: a(events.tierOneLog(t)),
                    tierTwo: a(events.tierTwo(t)),
                    tierTwoLog: a(events.tierTwoLog(t)),
                    tierThree: a(events.tierThree(t)),
                    tierThreeLog: a(events.tierThreeLog(t)),
                    beDone: a(events.beDone(t)),
                    asyncHash: a(events.rsrcDone(o("ResourceHasher").getAsyncHash(t)))
                },
                unresolvedDeps: r("__debug").debugUnresolvedDependencies([
                    t
                ]),
                nonJSDeps: r("__debug").modulesMap[t]?.nonJSDeps,
                hasError: r("__debug").modulesMap[t]?.hasError
            };
        },
        getBootloadedComponents: function() {
            const e = new Map;
            for (const [n, r] of bootloaded){
                e.set(n, r.firstBootloadStart);
            }
            return e;
        },
        notifyManuallyLoadedResourcesInWorker: function(t, n) {
            const e = ()=>{
                const e = o("ResourceHasher").getValidResourceHash(a);
                const i = t[e];
                if (i.type === "js" || i.type === "css") {
                    ue(e, i, true);
                    if (i.type === "js" && i.tsrc != null && i.tsrc.trim() !== "") {
                        r("promiseDone")(o("MakeHasteTranslations").genFetchAndProcessTranslations(e, r("nullthrows")(i.tsrc)));
                    }
                    requested.set(e, (u || (u = r("performanceAbsoluteNow")))());
                    const l = function() {
                        return ve.done(e);
                    };
                    const s = n[e];
                    if (i.type === "js" && s) {
                        r("promiseDone")(s, l, function() {
                            te(e, i, l);
                        });
                    } else {
                        l();
                    }
                }
            };
            for(var a in t){
                e();
            }
        },
        getResourceState: function(t) {
            return {
                loadStart: requested.get(t),
                loadEnd: loaded.get(t),
                loadError: errors.get(t)
            };
        },
        getComponentTiming: function(t) {
            return {
                tierTwoStart: events.getEventTime(events.tierTwoStart(t)) ?? 0,
                tierTwoEnd: events.getEventTime(events.tierTwo(t)) ?? 0,
                tierThreeStart: events.getEventTime(events.tierThreeStart(t)) ?? 0,
                tierThreeEnd: events.getEventTime(events.tierThree(t)) ?? 0
            };
        },
        getLoadedResourceCount: function() {
            return loaded.size;
        },
        getErrorCount: function() {
            return errors.size;
        },
        forceFlush: function() {
            o("BootloaderEndpoint").BootloaderEndpoint.forceFlush();
        },
        __debug: {
            componentMap,
            DOMAppendedJSHashes,
            requestedRsrcIndex,
            requested,
            resources,
            riMap,
            retries: B.getAllRetryAttempts_FOR_DEBUG_ONLY(),
            errors,
            loaded,
            bootloaded,
            notAvailableResources,
            queuedToMarkAsImmediate,
            events,
            offlineFailedResources,
            _resolveCSRs,
            revMap,
            _getQueuedLoadModules: function() {
                return v;
            },
            _dequeueLoadModules: function(t) {
                const e = v.splice(t, 1);
                if (e.length) {
                    const n = e[0];
                    const r = n[0];
                    const o = n[1];
                    const a = n[2];
                    const i = n[3];
                    const l = y;
                    const s = A;
                    y = false;
                    A = true;
                    i(function() {
                        ve.loadModules(r, o, a);
                    });
                    y = l;
                    A = s;
                }
            }
        }
    };
    r("JSResourceReferenceImpl").setBootloader(ve);
    if (y && !t.__comet_ssr_is_server_env_DO_NOT_USE && !o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()) {
        if ((d || (d = r("performanceNow")))() > f) {
            ve.undeferBootloads(true);
        } else {
            r("setTimeoutAcrossTransitions")(function() {
                ve.undeferBootloads(true);
            }, f - (d || (d = r("performanceNow")))());
        }
    }
    l.default = ve;
}, 98);
__d("CSRFGuard", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = "for (;;);";
    const l = /^for ?\(;;\);/;
    const e_length = e.length;
    function u(e) {
        return !!e.match(l);
    }
    function c(e) {
        const t = e.match(l);
        return t && e.substr(t[0].length);
    }
    i.regex = l;
    i.length = e_length;
    i.exists = u;
    i.clean = c;
}, 66);
__d("ImmediateImplementation", [
    "ImmediateImplementationExperiments"
], function(t, n, r, o, a, i, l) {
    ((e, t)=>{
        "use strict";
        let n = 1;
        const o = {};
        let a = {};
        let i = a;
        let s = false;
        const e_document = e.document;
        let c;
        let d;
        let m;
        const p = `setImmediate\$${Math.random()}\$`;
        function _() {
            const e_event = e.event;
            if (e_event) {
                return e_event.isTrusted && [
                    "change",
                    "click",
                    "contextmenu",
                    "dblclick",
                    "mouseup",
                    "pointerup",
                    "reset",
                    "submit",
                    "touchend"
                ].includes(e_event.type) || e_event.type === "message" && e_event.source === e && typeof e_event.data === "string" && e_event.data.indexOf(p) === 0;
            }
            return false;
        }
        function f(e) {
            const r = e[0];
            const a = Array.prototype.slice.call(e, 1);
            o[n] = function() {
                r.apply(t, a);
            };
            i = i.next = {
                handle: n++
            };
            return i.handle;
        }
        function g() {
            let e;
            let t;
            while(!s && (e = a.next)){
                a = e;
                if (t = o[e.handle]) {
                    s = true;
                    try {
                        t();
                        s = false;
                    } finally{
                        h(e.handle);
                        if (s) {
                            s = false;
                            if (a.next) {
                                c(g);
                            }
                        }
                    }
                }
            }
        }
        function h(e) {
            delete o[e];
        }
        function y() {
            if (e.postMessage && !e.importScripts) {
                let t = true;
                const n = function() {
                    t = false;
                    if (e.removeEventListener) {
                        e.removeEventListener("message", n, false);
                    } else {
                        e.detachEvent("onmessage", n);
                    }
                };
                if (e.addEventListener) {
                    e.addEventListener("message", n, false);
                } else if (e.attachEvent) {
                    e.attachEvent("onmessage", n);
                } else {
                    return false;
                }
                e.postMessage("", "*");
                return t;
            }
        }
        function C() {
            const t = function(n) {
                if (n.source === e && typeof n.data === "string" && n.data.indexOf(p) === 0) {
                    g();
                }
            };
            if (e.addEventListener) {
                e.addEventListener("message", t, false);
            } else {
                e.attachEvent("onmessage", t);
            }
            c = function() {
                const t = f(arguments);
                if (e.originalPostMessage) {
                    e.originalPostMessage(p + t, "*");
                } else {
                    e.postMessage(p + t, "*");
                }
                return t;
            };
            d = c;
        }
        function b() {
            const e = new MessageChannel;
            let t = false;
            e.port1.onmessage = function() {
                t = false;
                g();
            };
            c = function() {
                const n = f(arguments);
                if (!t) {
                    e.port2.postMessage(n);
                    t = true;
                }
                return n;
            };
            m = c;
        }
        function v() {
            const e_document_documentElement = e_document.documentElement;
            c = function() {
                const t = f(arguments);
                let n = e_document.createElement("script");
                n.onreadystatechange = function() {
                    n.onreadystatechange = null;
                    e_document_documentElement.removeChild(n);
                    n = null;
                    g();
                };
                e_document_documentElement.appendChild(n);
                return t;
            };
        }
        function S() {
            c = function() {
                setTimeout(g, 0);
                return f(arguments);
            };
        }
        if (y()) {
            if (e.MessageChannel && r("ImmediateImplementationExperiments").prefer_message_channel) {
                C();
                b();
                c = function() {
                    if (_()) {
                        return d(...arguments);
                    }
                    return m(...arguments);
                };
            } else {
                C();
            }
        } else if (e.MessageChannel) {
            b();
        } else if (e_document && e_document.createElement && "onreadystatechange" in e_document.createElement("script")) {
            v();
        } else {
            S();
        }
        l.setImmediate = c;
        l.clearImmediate = h;
    })(typeof self === "undefined" ? typeof t === "undefined" ? this : t : self);
}, 34);
__d("clearImmediatePolyfill", [
    "ImmediateImplementation"
], function(t, n, r, o, a, i, l) {
    const e = t.clearImmediate || r("ImmediateImplementation").clearImmediate;
    l.default = e;
}, 98);
__d("clearImmediate", [
    "clearImmediatePolyfill"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        r("clearImmediatePolyfill")(e);
    }
    l.default = e;
}, 98);
__d("currentCometRouterInstance", [], function(t, n, r, o, a, i) {
    "use strict";
    let e = null;
    function l() {
        return e;
    }
    function s(t) {
        e = t;
    }
    i.get_THIS_IS_NOT_WHAT_YOU_WANT = l;
    i.register = s;
}, 66);
__d("pushViewToRouteInfo", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "depth",
        "key"
    ];
    function l(t) {
        const { depth, key } = t;
        const o = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return o;
    }
    i.default = l;
}, 66);
__d("getTopMostRouteInfo", [
    "pushViewToRouteInfo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ hosted, main, pushViewStack }) {
        if (pushViewStack && pushViewStack.length > 0) {
            return r("pushViewToRouteInfo")(pushViewStack[pushViewStack.length - 1]);
        }
        return hosted || main;
    }
    l.default = e;
}, 98);
__d("getTopMostRoute", [
    "getTopMostRouteInfo"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return r("getTopMostRouteInfo")(e).route;
    }
    l.default = e;
}, 98);
__d("CurrentCanonicalRoute", [
    "currentCometRouterInstance",
    "getTopMostRoute"
], function(t, n, r, o, a, i, l) {
    function e() {
        const t = o("currentCometRouterInstance").get_THIS_IS_NOT_WHAT_YOU_WANT()?.getCurrentRouterState();
        if (t != null) {
            const n = r("getTopMostRoute")(t);
            return n.canonicalRouteName;
        }
        return null;
    }
    l.getForGlobalLoggingOnly = e;
}, 98);
__d("isCdnURI", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (e.getProtocol() !== "http" && e.getProtocol() !== "https") {
            return false;
        }
        const t = Number(e.getPort());
        if (t && t !== 80 && t !== 443) {
            return false;
        }
        return e.isSubdomainOfDomain("fbcdn.net");
    }
    i.default = e;
}, 66);
__d("isInstagramURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)instagram\\.com$";
    let l = null;
    function s(t) {
        if (t.isEmpty() && t.toString() !== "#" || !t.getDomain() && !t.getProtocol() || t.getProtocol() !== "https") {
            return false;
        }
        if (!l) {
            l = new RegExp(e, "i");
        }
        return l.test(t.getDomain());
    }
    i.default = s;
}, 66);
__d("isMessengerDotComURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)messenger\\.com$";
    const l = new RegExp(e, "i");
    const s = [
        "https"
    ];
    function u(e) {
        if (e.isEmpty() && e.toString() !== "#" || !e.getDomain() && !e.getProtocol()) {
            return false;
        }
        return s.indexOf(e.getProtocol()) !== -1 && l.test(e.getDomain());
    }
    i.default = u;
}, 66);
__d("isMetaDotComURI", [], function(t, n, r, o, a, i) {
    const e = new RegExp("(^|\\.)meta\\.com$", "i");
    const l = [
        "https"
    ];
    function s(t) {
        if (t.isEmpty() && t.toString() !== "#") {
            return false;
        }
        if (!t.getDomain() && !t.getProtocol()) {
            return true;
        }
        return l.indexOf(t.getProtocol()) !== -1 && e.test(t.getDomain());
    }
    i.default = s;
}, 66);
__d("isOculusDotComURI", [], function(t, n, r, o, a, i) {
    const e = new RegExp("(^|\\.)oculus\\.com$", "i");
    const l = [
        "https"
    ];
    function s(t) {
        if (t.isEmpty() && t.toString() !== "#" || !t.getDomain() && !t.getProtocol()) {
            return false;
        }
        return l.indexOf(t.getProtocol()) !== -1 && e.test(t.getDomain());
    }
    i.default = s;
}, 66);
__d("isWorkplaceDotComURI", [], function(t, n, r, o, a, i) {
    const e = "(^|\\.)workplace\\.com$";
    const l = new RegExp(e, "i");
    function s(e) {
        return e.getProtocol() === "https" && l.test(e.getDomain());
    }
    i.default = s;
}, 66);
__d("DTSGUtils", [
    "SprinkleConfig",
    "isCdnURI",
    "isFacebookURI",
    "isInstagramURI",
    "isMessengerDotComURI",
    "isMetaDotComURI",
    "isOculusDotComURI",
    "isWorkplaceDotComURI"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        getNumericValue: function(t) {
            let e = 0;
            for(let r = 0; r < t.length; r++){
                e += t.charCodeAt(r);
            }
            const o = e.toString();
            if (n("SprinkleConfig").should_randomize) {
                return o;
            }
            return n("SprinkleConfig").version + o;
        },
        shouldAppendToken: function(t) {
            return !n("isCdnURI")(t) && !t.isSubdomainOfDomain("fbsbx.com") && (n("isFacebookURI")(t) || n("isInstagramURI")(t) || n("isMessengerDotComURI")(t) || n("isMetaDotComURI")(t) || n("isWorkplaceDotComURI")(t) || n("isOculusDotComURI")(t) || t.isSubdomainOfDomain("freebasics.com") || t.isSubdomainOfDomain("discoverapp.com"));
        }
    };
    a.exports = e;
}, null);
__d("HasteBitMapName", [], function(t, n, r, o, a, i) {
    const e = Object.freeze({
        CSR: "__csr",
        HSDP: "__hsdp",
        HBLP: "__hblp",
        SJSP: "__sjsp"
    });
    i.default = e;
}, 66);
__d("ge", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        if (typeof e !== "string") {
            return e;
        }
        if (t) {
            return l(e, t, n);
        }
        return document.getElementById(e);
    }
    function l(e, t, n) {
        let r;
        let o;
        let a;
        if (s(t) == e) {
            return t;
        }
        if (t.getElementsByTagName) {
            o = t.getElementsByTagName(n != null && n !== "" ? n : "*");
            for(a = 0; a < o.length; a++){
                if (s(o[a]) == e) {
                    return o[a];
                }
            }
        } else {
            o = t.childNodes;
            for(a = 0; a < o.length; a++){
                r = l(e, o[a]);
                if (r) {
                    return r;
                }
            }
        }
        return null;
    }
    function s(e) {
        if (e.getAttribute) {
            return e.getAttribute("id");
        }
        return null;
    }
    i.default = e;
}, 66);
__d("replaceTransportMarkers", [
    "BanzaiLazyQueue",
    "ge",
    "memoize"
], function(t, n, r, o, a, i, l) {
    const e = new Set;
    function s(t, a, i) {
        const l = i !== undefined ? a[i] : a;
        let u;
        if (Array.isArray(l)) {
            for(u = 0; u < l.length; u++){
                s(t, l, u);
            }
        } else if (l && typeof l === "object") {
            if (l.__m) {
                if (l.__lazy) {
                    a[i] = r("memoize")(n.bind(null, l.__m));
                } else {
                    a[i] = n.call(null, l.__m);
                }
            } else if (l.__jsr) {
                a[i] = new (n.call(null, "JSResourceReferenceImpl"))(l.__jsr).__setRef("replaceTransportMarkers");
            } else if (l.__dr) {
                a[i] = new (n.call(null, "RequireDeferredReference"))(l.__dr).__setRef("replaceTransportMarkers");
            } else if (l.__rc) {
                if (l.__rc[0] === null) {
                    a[i] = null;
                } else {
                    a[i] = n.call(null, l.__rc[0]);
                }
                if (l.__rc[1]) {
                    if (!e.has(l.__rc[1])) {
                        e.add(l.__rc[1]);
                        o("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
                            identifier: l.__rc[1]
                        });
                    }
                }
            } else if (l.__e) {
                a[i] = r("ge")(l.__e);
            } else if (l.__rel) {
                a[i] = t.relativeTo;
            } else if (l.__bigPipeContext) {
                a[i] = t.bigPipeContext;
            } else if (l.__bbox) {
                a[i] = l.__bbox;
            } else {
                for(const c in l){
                    s(t, l, c);
                }
                if (l.__map) {
                    a[i] = new Map(l.__map);
                } else if (l.__set) {
                    a[i] = new Set(l.__set);
                } else if (l.__imm) {
                    const d = l.__imm;
                    const { method, value } = d;
                    a[i] = n.call(null, "immutable")[method](value);
                }
            }
        }
    }
    l.default = s;
}, 98);
__d("ServerJSDefine", [
    "BitMap",
    "replaceTransportMarkers"
], function(t, n, r, o, a, i, l) {
    const e = 2;
    const s = 8;
    const u = new (r("BitMap"));
    var c = {
        getLoadedModuleHash: function() {
            return u.toCompressedString();
        },
        getModuleNameAndHash: function(t) {
            const e = t.split("@");
            return {
                hash: e[1],
                name: e[0]
            };
        },
        handleDefine: function(n, o, a, i, relativeTo) {
            if (i >= 0) {
                u.set(i);
            }
            define(n, o, function(t, o, s, u, c) {
                const e = {
                    data: a
                };
                r("replaceTransportMarkers")({
                    relativeTo
                }, e);
                if (i === -42) {
                    const d = a != null && typeof a === "object" && a.__throw8367__;
                    const m = new Error(`${n}: ${typeof d === "string" ? d : ""}`);
                    m.stack;
                    throw m;
                }
                c.exports = e.data;
            }, e | s);
        },
        handleDefines: function(t, n) {
            t.forEach((e)=>{
                let t;
                if (n != null) {
                    t = [].concat(e, [
                        n
                    ]);
                } else {
                    t = [].concat(e, [
                        null
                    ]);
                }
                c.handleDefine.apply(null, t);
            });
        }
    };
    l.default = c;
}, 98);
__d("StaticSiteData", [], function(t, n, r, o, a, i) {
    const e = Object.freeze({
        hs_key: "__hs",
        connection_class_server_guess_key: "__ccg",
        dpr_key: "dpr",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv",
        lite_iframe_locale_override_key: "__ltif_locale",
        weblite_key: "__wblt",
        weblite_iframe_key: "__wbltif",
        force_touch_key: "__fmt",
        kite_key: "__ktif",
        kite_legacy_key: "_ktif",
        haste_session_id_key: "__hsi",
        jsmod_key: "__dyn",
        comet_key: "__comet_req",
        canonical_route_key: "__crn"
    });
    i.default = e;
}, 66);
__d("Alea", [], function(t, n, r, o, a, i) {
    function e() {
        let e = 4022871197;
        const t = function(n) {
            for(let t = n.toString(), r = 0; r < t.length; r++){
                e += t.charCodeAt(r);
                let o = 0.02519603282416938 * e;
                e = o >>> 0;
                o -= e;
                o *= e;
                e = o >>> 0;
                o -= e;
                e += o * 4294967296;
            }
            return (e >>> 0) * 2.3283064365386963e-10;
        };
        t.version = "Mash 0.9";
        return t;
    }
    function l(...i) {
        let t = 0;
        let n = 0;
        let r = 0;
        let o = 1;
        const s = i.length > 0 ? i : [
            new Date
        ];
        let u;
        u = e();
        t = u(" ");
        n = u(" ");
        r = u(" ");
        for(let c = 0; c < s.length; c++){
            t -= u(s[c]);
            if (t < 0) {
                t += 1;
            }
            n -= u(s[c]);
            if (n < 0) {
                n += 1;
            }
            r -= u(s[c]);
            if (r < 0) {
                r += 1;
            }
        }
        u = null;
        const d = function() {
            const e = 2091639 * t + o * 2.3283064365386963e-10;
            t = n;
            n = r;
            r = e - (o = e | 0);
            return r;
        };
        d.version = "Alea 0.9";
        d.args = s;
        return d;
    }
    i.default = l;
}, 66);
__d("Random", [
    "Alea",
    "ServerNonce"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = 4294967296;
    const ServerNonce = n("ServerNonce").ServerNonce;
    let s;
    function u() {
        if (s == null) {
            s = n("Alea")(ServerNonce);
        }
        return s;
    }
    var c = {
        random: (()=>{
            const n = typeof Uint32Array === "function" ? new Uint32Array(1) : null;
            const r = t.crypto || t.msCrypto;
            if (n != null) {
                try {
                    const o = r?.getRandomValues;
                    if (typeof o === "function") {
                        const a = o.bind(r);
                        return function() {
                            try {
                                a(n);
                            } catch (e) {
                                return u()();
                            }
                            return n[0] / e;
                        };
                    }
                } catch (e) {}
            }
            return u();
        })(),
        uint32: function() {
            return Math.floor(c.random() * e);
        },
        intBetween: function(t, n) {
            return Math.floor(c.random() * (n - t + 1) + t);
        },
        coinflip: ((e)=>{
            function t(t) {
                return e.apply(this, arguments);
            }
            t.toString = function() {
                return e.toString();
            };
            return t;
        })(function(e) {
            if (e === 0) {
                return false;
            }
            if (e <= 1) {
                return true;
            }
            return c.random() * e <= 1;
        })
    };
    a.exports = c;
}, null);
__d("WebSessionDefaultTimeoutMs", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = 35000;
    i.default = e;
}, 66);
__d("CookieConsent", [
    "InitialCookieConsent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set((e || (e = r("InitialCookieConsent"))).initialConsent);
    let e_shouldShowCookieBanner = e.shouldShowCookieBanner;
    var c = {
        setConsented: function() {
            s.add(1);
            e_shouldShowCookieBanner = false;
        },
        shouldShowCookieBanner: function() {
            return e_shouldShowCookieBanner;
        },
        shouldWaitForDeferredDatrCookie: function() {
            return (e || (e = r("InitialCookieConsent"))).shouldWaitForDeferredDatrCookie;
        },
        isFirstPartyStorageAllowed: function() {
            return !(e || (e = r("InitialCookieConsent"))).noCookies && c.hasFirstPartyConsent();
        },
        hasFirstPartyConsent: function() {
            return s.has(1);
        },
        hasIndividualThirdPartyIntegrationConsent: function(t) {
            const n = c.hasThirdPartyConsent([
                t
            ]);
            return n.get(t) ?? false;
        },
        hasThirdPartyConsent: function(n) {
            const t = new Map;
            if (!(e || (e = r("InitialCookieConsent"))).hasGranularThirdPartyCookieConsent) {
                const o = s.has(2);
                for (const a of n){
                    if ((e || (e = r("InitialCookieConsent"))).exemptedIntegrations.includes(a)) {
                        t.set(a, true);
                    } else {
                        t.set(a, o);
                    }
                }
                return t;
            }
            for (const i of n){
                if ((e || (e = r("InitialCookieConsent"))).optedInIntegrations.includes(i)) {
                    t.set(i, true);
                } else {
                    t.set(i, false);
                }
            }
            return t;
        },
        isThirdPartyConsentRequiredForMetaPixel: function() {
            return (e || (e = r("InitialCookieConsent"))).consentRequiredForMetaPixel;
        },
        isThirdPartyIntegrationEmbedAllowed: function(n) {
            if ((e || (e = r("InitialCookieConsent"))).hasGranularThirdPartyCookieConsent) {
                return !(e || (e = r("InitialCookieConsent"))).noCookies && (e || (e = r("InitialCookieConsent"))).optedInIntegrations.includes(n);
            }
            if ((e || (e = r("InitialCookieConsent"))).exemptedIntegrations.includes(n)) {
                return !(e || (e = r("InitialCookieConsent"))).noCookies;
            }
            return !(e || (e = r("InitialCookieConsent"))).noCookies && s.has(2);
        }
    };
    l.default = c;
}, 98);
__d("isQuotaExceededError", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        if (!(e instanceof t.DOMException)) {
            return false;
        }
        const n = e;
        return n.code === 22 || n.code === 1014 || n.name === "QuotaExceededError" || n.name === "NS_ERROR_DOM_QUOTA_REACHED";
    }
    function l(t, n) {
        return !!(e(n) && t && t.length !== 0);
    }
    i.isQuotaExceededError = e;
    i.isStorageQuotaExceededError = l;
}, 66);
__d("WebStorage", [
    "CookieConsent",
    "FBLogger",
    "err",
    "getErrorSafe",
    "isQuotaExceededError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = {};
    let u = {};
    const c = "localStorage";
    const d = "sessionStorage";
    let m = false;
    const p = typeof window !== "undefined" ? window : self;
    function _(t, n, o) {
        if ((e || (e = r("CookieConsent"))).isFirstPartyStorageAllowed()) {
            if (!Object.prototype.hasOwnProperty.call(t, o)) {
                t[o] = n(o);
            }
            return t[o];
        }
        if (!m) {
            r("FBLogger")("web_storage").warn("Failed to get %s because of missing cookie consent", o.toString());
            m = true;
        }
        return null;
    }
    function f(e) {
        try {
            return p[e];
        } catch (error) {
            r("FBLogger")("web_storage").warn("Failed to get storage for read %s", r("getErrorSafe")(error).message);
        }
        return null;
    }
    function g(e) {
        let t = null;
        try {
            t = p[e];
            if (t != null && typeof t.setItem === "function" && typeof t.removeItem === "function") {
                const n = `__test__${Date.now()}`;
                t.setItem(n, "");
                t.removeItem(n);
            } else {
                return null;
            }
        } catch (error) {
            if (o("isQuotaExceededError").isStorageQuotaExceededError(t, r("getErrorSafe")(error)) === false) {
                r("FBLogger")("web_storage").catching(r("getErrorSafe")(error)).warn("Failed to get WebStorage of type `%s`", e);
                return null;
            }
        }
        return t;
    }
    function h(e) {
        let t = null;
        try {
            t = p[e];
            if (t != null && typeof t.setItem === "function" && typeof t.removeItem === "function") {
                const n = `__test__${Date.now()}`;
                t.setItem(n, "");
                t.removeItem(n);
            }
        } catch (error) {
            if (o("isQuotaExceededError").isStorageQuotaExceededError(t, r("getErrorSafe")(error)) === true) {
                return true;
            }
        }
        return false;
    }
    function y(e) {
        const t = [];
        for(let n = 0; n < e.length; n++){
            t.push(e.key(n) || "");
        }
        return t;
    }
    function setItemGuarded(e, t, n) {
        if (e == null) {
            return r("err")("storage cannot be null");
        }
        let o = null;
        try {
            e.setItem(t, n);
        } catch (error) {
            const a = y(e).map((t)=>{
                const length = (e.getItem(t) || "").length;
                return `${t}(${length})`;
            });
            o = r("err")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", r("getErrorSafe")(error).name ? `${r("getErrorSafe")(error).name}: ` : "", t, n.length, a.join());
        }
        return o;
    }
    const b = {
        getLocalStorage: function() {
            return _(s, g, c);
        },
        getAllowlistedKeyFromLocalStorage: function(t) {
            return _(u, f, c)?.getItem(t);
        },
        getSessionStorage: function() {
            return _(s, g, d);
        },
        getAllowlistedKeyFromSessionStorage: function(t) {
            return _(u, f, d)?.getItem(t);
        },
        getLocalStorageForRead: function() {
            return _(u, f, c);
        },
        getSessionStorageForRead: function() {
            return _(u, f, d);
        },
        isLocalStorageQuotaExceeded: function() {
            return h(c);
        },
        isSessionStorageQuotaExceeded: function() {
            return h(d);
        },
        setItemGuarded,
        setAllowlistedKeyToLocalStorage: function(t, n, r) {
            return setItemGuarded(t, n, r);
        },
        clearCaches: function() {
            s = {};
            u = {};
        }
    };
    l.default = b;
}, 98);
__d("WebSession", [
    "FBLogger",
    "Random",
    "WebSessionDefaultTimeoutMs",
    "WebStorage"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 36;
    const u = 6;
    const c = s ** u;
    function d(e) {
        if (e == null || Number.isFinite(e) === false || e <= 0) {
            return null;
        }
        return e;
    }
    function m(e) {
        if (e == null) {
            return null;
        }
        const t = parseInt(e, 10);
        if (`${t}` !== e) {
            r("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(e));
            return null;
        }
        return d(t);
    }
    function p(e) {
        if (e == null) {
            return null;
        }
        if (e.length !== u) {
            r("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", u, e.length, e);
            return null;
        }
        if (/^[a-z0-9]+$/.test(e) === false) {
            r("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", s, e);
            return null;
        }
        return e;
    }
    function _(e) {
        if (e == null) {
            return null;
        }
        if (typeof e !== "string" && !(e instanceof String)) {
            r("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", e);
            return null;
        }
        const t = e.split(":");
        const n = t[0];
        const o = t[1];
        const expiryTime = m(o);
        const i = p(n);
        if (expiryTime == null || i == null) {
            return null;
        }
        return {
            expiryTime,
            id: i
        };
    }
    function f() {
        const e = Math.floor(o("Random").random() * c);
        const t = e.toString(s);
        return "0".repeat(u - t.length) + t;
    }
    let g = null;
    function h() {
        if (g == null) {
            g = f();
        }
        return g;
    }
    function y(t = Date.now()) {
        const n = (e || (e = r("WebStorage"))).getLocalStorageForRead();
        if (n == null) {
            return null;
        }
        try {
            const o = _(n.getItem("Session"));
            if (o && t < o.expiryTime) {
                return o;
            }
            return null;
        } catch (e) {
            return null;
        }
    }
    function C() {
        const t = (e || (e = r("WebStorage"))).getSessionStorageForRead();
        if (t == null) {
            return null;
        }
        const n = p(t.getItem("TabId"));
        if (n == null) {
            const o = (e || (e = r("WebStorage"))).getSessionStorage();
            if (o == null) {
                return null;
            }
            const a = f();
            e.setItemGuarded(o, "TabId", a);
            return a;
        }
        return n;
    }
    function b(t) {
        if (t !== undefined && d(t) == null) {
            r("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", t);
            return;
        }
        const n = Date.now();
        const o = t ?? n + r("WebSessionDefaultTimeoutMs");
        const a = y(n);
        if (!(a && a.expiryTime >= o || o <= n)) {
            const i = (e || (e = r("WebStorage"))).getLocalStorage();
            if (i != null) {
                const l = a == null ? f() : a.id;
                (e || (e = r("WebStorage"))).setItemGuarded(i, "Session", `${l}:${o}`);
            }
        }
    }
    function v() {
        return y()?.id;
    }
    function S() {
        const n = h();
        const r = v() ?? "";
        const o = C() ?? "";
        return `${r}:${o}:${n}`;
    }
    function R() {
        return h();
    }
    l.getTabId = C;
    l.extend = b;
    l.getSessionId = v;
    l.getId = S;
    l.getPageId_DO_NOT_USE = R;
}, 98);
__d("asyncParams", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    function l(t, n) {
        e[t] = n;
    }
    function s() {
        return e;
    }
    function u(t) {
        delete e[t];
    }
    i.add = l;
    i.get = s;
    i.remove = u;
}, 66);
__d("getAsyncParamsForProfiling", [
    "SiteData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "__profiler_opts";
    const t_1 = 30;
    const u = 300;
    function c() {
        if (typeof URLSearchParams !== "function") {
            return null;
        }
        const n = new URLSearchParams(window.location.search);
        const o = n.get(e);
        if (o == null) {
            return null;
        }
        const a = {
            recursive: "0",
            t: t_1,
            traceid: r("SiteData").polytrace_id
        };
        o.split(";").forEach((e)=>{
            const t = e.split(/:|=/, 2);
            const n = t[0];
            const r = t[1];
            const o = n.toLowerCase();
            switch(o){
                case "t":
                    a.t = Math.min(parseInt(r, 10) || t_1, 300);
                    break;
                case "recursive":
                    a.recursive = r === "1" ? "1" : "0";
                    break;
                case "uid":
                case "filter":
                case "traceid":
                    if (r) {
                        a[o] = r;
                    }
                    break;
            }
        });
        if (a.recursive !== "1" || window.performance.now() > (a.t || 0) * 1000 || a.traceid == null) {
            return null;
        }
        const i = Object.entries(a).map((e)=>e.join(":")).sort().join(";");
        const l = {
            [e]: i
        };
        n.forEach((e, t)=>{
            if (t.endsWith("_sample")) {
                l[t] = e;
            }
        });
        return l;
    }
    l.defaultTimeSpan = t_1;
    l.maxTimeSpan = u;
    l.getAsyncParamsForProfiling = c;
}, 98);
__d("getAsyncParamsFromCurrentPageURI", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {
        locale: true,
        cxobfus: true,
        js_debug: true,
        cquick: true,
        cquick_token: true,
        wdplevel: true,
        prod_graphql: true,
        sri: true
    };
    const l = {
        ctarget: true,
        hl: true,
        gk_enable: true,
        gk_disable: true,
        __pwa: true
    };
    function s() {
        const t = {};
        window.location.search.slice(1).split("&").forEach((n)=>{
            const r = n.split("=");
            const o = r[0];
            const a = r[1];
            if (o.substr(0, 4) === "tfc_" || o.substr(0, 4) === "tfi_" || o.substr(0, 3) === "mh_" || e[o] > -1 || l[o] > -1) {
                if (l[o] > -1) {
                    t[o] = decodeURIComponent(a);
                } else {
                    t[o] = a;
                }
            }
        });
        return t;
    }
    i.default = s;
}, 66);
__d("CSSCore", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        for(var n = e; n.parentNode;){
            n = n.parentNode;
        }
        if (n instanceof Element) {
            const r = n.querySelectorAll(t);
            return Array.prototype.indexOf.call(r, e) !== -1;
        }
        return false;
    }
    function u(e, t) {
        if (/\s/.test(t)) {
            s(0, 11794, t);
        }
        if (t) {
            if (e.classList) {
                e.classList.add(t);
            } else if (!m(e, t)) {
                e.className = `${e.className} ${t}`;
            }
        }
        return e;
    }
    function c(e, t) {
        if (/\s/.test(t)) {
            s(0, 11795, t);
        }
        if (t) {
            if (e.classList) {
                e.classList.remove(t);
            } else if (m(e, t)) {
                e.className = e.className.replace(new RegExp(`(^|\\s)${t}(?:\\s|\$)`, "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
            }
        }
        return e;
    }
    function d(e, t, n) {
        return (n ? u : c)(e, t);
    }
    function m(e, t) {
        if (/\s/.test(t)) {
            s(0, 442);
        }
        if (e.classList) {
            return !!t && e.classList.contains(t);
        }
        return ` ${e.className} `.indexOf(` ${t} `) > -1;
    }
    function p(t, n) {
        const l = t.matches ?? t.webkitMatchesSelector ?? t.mozMatchesSelector ?? t.msMatchesSelector ?? ((n)=>e(t, n));
        return l.call(t, n);
    }
    l.addClass = u;
    l.removeClass = c;
    l.conditionClass = d;
    l.hasClass = m;
    l.matchesSelector = p;
}, 98);
__d("isSocialPlugin", [
    "CSSCore",
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return !!document.body && o("CSSCore").hasClass(document.body, "plugin");
        }
        return false;
    }
    l.default = s;
}, 98);
__d("uniqueRequestID", [], function(t, n, r, o, a, i) {
    const e = 36;
    let l = 1;
    function s() {
        return (l++).toString(e);
    }
    i.default = s;
}, 66);
__d("getAsyncParams", [
    "CometPersistQueryParams",
    "CurrentCanonicalRoute",
    "CurrentUserInitialData",
    "DTSGUtils",
    "Env",
    "GetAsyncParamsExtraData",
    "HasteBitMap",
    "HasteBitMapName",
    "JSErrorLoggingConfig",
    "LSD",
    "ServerJSDefine",
    "SiteData",
    "SprinkleConfig",
    "StaticSiteData",
    "WebConnectionClassServerGuess",
    "WebSession",
    "asyncParams",
    "cr:8959",
    "cr:8960",
    "getAsyncParamsForProfiling",
    "getAsyncParamsFromCurrentPageURI",
    "isSocialPlugin",
    "objectValues",
    "requireWeak",
    "uniqueRequestID"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, a = false) {
        const c = r("GetAsyncParamsExtraData").extra_data ?? {};
        const d = babelHelpers.extends({}, o("asyncParams").get(), c, {
            __user: (e || (e = r("CurrentUserInitialData"))).USER_ID,
            __a: 1,
            __req: r("uniqueRequestID")(),
            [r("StaticSiteData").hs_key]: r("SiteData").haste_session,
            [r("StaticSiteData").dpr_key]: r("SiteData").pr,
            [r("StaticSiteData").connection_class_server_guess_key]: r("WebConnectionClassServerGuess").connectionClass,
            __rev: r("SiteData").client_revision,
            __s: o("WebSession").getId(),
            [r("StaticSiteData").haste_session_id_key]: r("SiteData").hsi
        });
        if (!a) {
            d[r("StaticSiteData").jsmod_key] = r("ServerJSDefine").getLoadedModuleHash();
            r("objectValues")(r("HasteBitMapName")).forEach((e)=>{
                const t = o("HasteBitMap").toCompressedString(e);
                if (t !== "") {
                    d[e] = t;
                }
            });
        }
        if (r("SiteData").wbloks_env !== true && r("SiteData").comet_env != null && r("SiteData").comet_env !== 0) {
            d[r("StaticSiteData").comet_key] = r("SiteData").comet_env ?? 1;
        }
        Object.entries(r("CometPersistQueryParams").relative).forEach(([t, n])=>{
            if (n != null) {
                d[t] = String(n);
            }
        });
        if (typeof window !== "undefined" && window?.location != null) {
            Object.assign(d, r("getAsyncParamsFromCurrentPageURI")());
            Object.assign(d, o("getAsyncParamsForProfiling").getAsyncParamsForProfiling());
        }
        if ((s || (s = r("Env"))).isCQuick && !d.cquick) {
            d.cquick = (s || (s = r("Env"))).iframeKey;
            d.ctarget = s.iframeTarget;
            d.cquick_token = s.iframeToken;
        }
        if (t == "POST") {
            const p = n("cr:8959").getCachedToken ? n("cr:8959").getCachedToken() : n("cr:8959").getToken();
            if (p != null && p !== "") {
                d.fb_dtsg = p;
                if (r("SprinkleConfig").param_name) {
                    d[r("SprinkleConfig").param_name] = r("DTSGUtils").getNumericValue(p);
                }
            }
            if (r("LSD").token != null && r("LSD").token !== "") {
                d.lsd = r("LSD").token;
                if (r("SprinkleConfig").param_name && (p == null || p === "")) {
                    d[r("SprinkleConfig").param_name] = r("DTSGUtils").getNumericValue(r("LSD").token);
                }
            }
        }
        if (t == "GET") {
            const _ = n("cr:8960").getCachedToken ? n("cr:8960").getCachedToken() : n("cr:8960").getToken();
            if (_ != null && _ !== "") {
                d.fb_dtsg_ag = _;
                if (r("SprinkleConfig").param_name) {
                    d[r("SprinkleConfig").param_name] = r("DTSGUtils").getNumericValue(_);
                }
            }
        }
        if (r("isSocialPlugin")()) {
            d.__sp = 1;
        }
        if (r("SiteData").spin) {
            let f;
            d[(f = r("StaticSiteData")).spin_rev_key] = r("SiteData")[f.spin_rev_key];
            d[f.spin_branch_key] = r("SiteData")[f.spin_branch_key];
            d[f.spin_time_key] = r("SiteData")[f.spin_time_key];
            if (r("SiteData")[r("StaticSiteData").spin_mhenv_key]) {
                d[r("StaticSiteData").spin_mhenv_key] = r("SiteData")[r("StaticSiteData").spin_mhenv_key];
            }
        }
        if (o("JSErrorLoggingConfig").sampleWeight != null && o("JSErrorLoggingConfig").sampleWeightKey != null) {
            d[o("JSErrorLoggingConfig").sampleWeightKey] = o("JSErrorLoggingConfig").sampleWeight;
        }
        const g = o("CurrentCanonicalRoute").getForGlobalLoggingOnly();
        if (g != null) {
            d[r("StaticSiteData").canonical_route_key] = g;
        }
        r("requireWeak")("QPLUserFlow", function(e) {
            const t = e.getActiveFlowIDs();
            if (t.length > 0) {
                d.qpl_active_flow_ids = t.sort().join(",");
            }
        });
        r("requireWeak")("MessengerPWAVersionForUserAgent", function(e) {
            const t = e();
            if (t != null) {
                d.__pwa = t;
            }
        });
        return d;
    }
    l.default = u;
}, 98);
__d("setImmediatePolyfill", [
    "invariant",
    "ImmediateImplementation",
    "PromiseUsePolyfillSetImmediateGK"
], function({ setImmediate }, n, r, o, a, i, l, s) {
    if (r("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !setImmediate) {
        setImmediate = r("ImmediateImplementation").setImmediate;
    }
    function u(t, ...r) {
        if (typeof t !== "function") {
            s(0, 5912);
        }
        return setImmediate(t, ...r);
    }
    l.default = u;
}, 98);
__d("setImmediateAcrossTransitions", [
    "TimeSlice",
    "setImmediatePolyfill"
], function(t, n, r, o, a, i, l) {
    function e(e, ...o) {
        const t = r("TimeSlice").guard(e, "setImmediate", {
            propagationType: r("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: true
        });
        return r("setImmediatePolyfill")(t, ...o);
    }
    l.default = e;
}, 98);
__d("BootloaderEndpoint", [
    "AdsManagerReadRegions",
    "Bootloader",
    "BootloaderEndpointConfig",
    "BootloaderEvents",
    "CSRFGuard",
    "FBLogger",
    "HasteResponse",
    "TimeSlice",
    "clearImmediate",
    "fb-error",
    "getAsyncParams",
    "getSameOriginTransport",
    "gkx",
    "performanceAbsoluteNow",
    "setImmediateAcrossTransitions"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const ErrorXFBDebug = n("fb-error").ErrorXFBDebug;
    const endpointURI = n("BootloaderEndpointConfig").endpointURI;
    let u = 0;
    let c = null;
    let d = null;
    let m = new Map;
    let p = new Map;
    function _(e, t, n) {
        return {
            requestStart: e,
            responseStart: t,
            serverGenTime: 0,
            uri: n,
            source: "bootloader_endpoint",
            sourceDetail: "Invalid response",
            isFirstIdentical: false,
            timesliceContext: null,
            startTime: e,
            logTime: t,
            jsmodsStart: t,
            jsmodsEnd: t,
            rsrcs: {
                blocking: new Map,
                nonblocking: new Map,
                default: new Map
            },
            payloadStats: {
                hsdp: {
                    entry: 0,
                    dup_entry: 0
                },
                hblp: {
                    rsrc: 0,
                    dup_rsrc: 0,
                    comp: 0,
                    dup_comp: 0
                },
                sjsp: {
                    define: 0,
                    dup_user_define: 0,
                    dup_system_define: 0,
                    require: 0
                }
            }
        };
    }
    function f(t, r, o, a, i) {
        if (n("gkx")("5163")) {
            const l = (e || (e = n("performanceAbsoluteNow")))();
            for (const s of [
                t,
                r
            ]){
                for (const [c, d] of s.entries()){
                    n("Bootloader").done(d);
                    n("Bootloader").beDone(c, o, _(a, l, i));
                }
            }
        }
    }
    function g(e) {
        return Array.from(e.keys()).join(",");
    }
    function _getURL(e, t) {
        const r = {};
        if (e.size) {
            r.modules = g(e);
        }
        if (t.size) {
            r.nb_modules = g(t);
        }
        const o = Object.entries(babelHelpers.extends({}, r, n("getAsyncParams")("GET"))).map(([t, n])=>`${encodeURIComponent(t)}=${encodeURIComponent(String(n))}`).join("&");
        return endpointURI + (endpointURI.includes("?") ? "&" : "?") + o;
    }
    function y(e, blockingMods, nonblockingMods) {
        const o = e.getAllResponseHeaders();
        const errorMID = o.indexOf("error-mid") >= 0 ? e.getResponseHeader("error-mid") : null;
        if (errorMID != null) {
            for (const i of [
                blockingMods,
                nonblockingMods
            ]){
                for (const [module, hash] of i.entries()){
                    n("BootloaderEvents").notifyBootloadEndpointError({
                        module,
                        hash,
                        errorMID,
                        blockingMods,
                        nonblockingMods
                    });
                }
            }
        }
        return errorMID;
    }
    function C(status, responseText) {
        if (status !== 200) {
            return null;
        }
        try {
            return JSON.parse(n("CSRFGuard").clean(responseText));
        } catch (e) {
            return null;
        }
    }
    function _sendRequest(t, r) {
        if (!(t.size === 0 && r.size === 0)) {
            let o = BootloaderEndpoint._getURL(t, r);
            if (shouldRouteToAMReadRegions(o)) {
                o += "&ads_manager_read_regions=true";
            }
            const a = n("getSameOriginTransport")();
            const i = u++;
            const s = (e || (e = n("performanceAbsoluteNow")))();
            a.open("GET", o, true);
            const c = n("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
            a.onreadystatechange = function() {
                if (a.readyState === 4) {
                    c(function() {
                        ErrorXFBDebug.addFromXHR(a);
                        const e = C(a.status, a.responseText);
                        if (e == null) {
                            f(t, r, i, s, o);
                            const u = y(a, t, r);
                            let c = n("FBLogger")("bootloader");
                            if (u != null) {
                                c = c.addMetadata("OPES", "MID", u);
                                c.addToCategoryKey(u);
                            }
                            c.warn('Invalid bootloader response %s; blocking mods: %s; non-blocking mods: %s; opes mid: %s; "%s"', a.status, g(t), g(r), u ?? "none", a.responseText.substr(0, 256));
                            return;
                        }
                        if (e.error) {
                            n("FBLogger")("bootloader").warn("Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", g(t), g(r));
                        } else if (e.__error) {
                            f(t, r, i, s, o);
                            const d = y(a, t, r);
                            let m = n("FBLogger")("bootloader");
                            if (d != null) {
                                m = m.addMetadata("OPES", "MID", d);
                                m.addToCategoryKey(d);
                            }
                            m.warn("Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s; opes mid: %s", g(t), g(r), d ?? "none");
                            return;
                        }
                        n("TimeSlice").guard(function() {
                            return v(o, e, t, r, i, s);
                        }, "Bootloader receiveEndpointData", {
                            propagationType: n("TimeSlice").PropagationType.CONTINUATION
                        })();
                    });
                }
            };
            a.send();
        }
    }
    function v(t, r, o, a, i, requestStart) {
        const responseStart = (e || (e = n("performanceAbsoluteNow")))();
        const r_serverGenTime = r.serverGenTime;
        let r_hrp = r.hrp;
        if (r_hrp == null) {
            const d = r;
            n("FBLogger")("be_null_hrp").mustfix("Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s", g(o), g(a), `${d.error}, summary: ${d.errorSummary}, description: ${d.errorDescription}`);
            r_hrp = d;
        }
        n("HasteResponse").handle(r_hrp, {
            source: "bootloader_endpoint",
            sourceDetail: JSON.stringify({
                b: Array.from(o.keys()),
                n: Array.from(a.keys())
            }),
            onBlocking: function() {
                for (const e of [
                    o,
                    a
                ]){
                    for (const t of e.values()){
                        n("Bootloader").done(t);
                    }
                }
            },
            onLog: function(r) {
                for (const e of [
                    o,
                    a
                ]){
                    for (const c of e.keys()){
                        n("Bootloader").beDone(c, i, babelHelpers.extends({
                            requestStart,
                            responseStart,
                            serverGenTime: r_serverGenTime,
                            uri: t
                        }, r));
                    }
                }
            }
        });
    }
    function S() {
        const e = m;
        const t = p;
        n("clearImmediate")(d);
        d = null;
        c = null;
        m = new Map;
        p = new Map;
        _sendRequest(e, t);
    }
    function R() {
        const maxBatchSize = n("BootloaderEndpointConfig").maxBatchSize;
        if (maxBatchSize <= 0) {
            return false;
        }
        return m.size + p.size >= maxBatchSize;
    }
    var BootloaderEndpoint = {
        load: function(t, r, o) {
            (r ? m : p).set(t, o);
            if (n("BootloaderEndpointConfig").debugNoBatching || R()) {
                S();
                return;
            }
            if (d == null) {
                c = n("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
                d = n("setImmediateAcrossTransitions")(function() {
                    if (c) {
                        c(function() {
                            return S();
                        });
                    }
                });
            }
        },
        forceFlush: function() {
            if (c) {
                c(function() {
                    return S();
                });
            }
        },
        _getURL,
        _sendRequest
    };
    function shouldRouteToAMReadRegions(e) {
        return !!(window.location.host.includes("adsmanager") && !n("AdsManagerReadRegions").excluded_endpoints.some((t)=>e.includes(t)) && n("BootloaderEndpointConfig").adsManagerReadRegions);
    }
    a.exports = {
        BootloaderEndpoint,
        shouldRouteToAMReadRegions
    };
}, null);
__d("MetaConfigMap", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {};
    const s = {
        add: function(n, r) {
            for(const t in n){
                if (r) {
                    r.entry++;
                }
                if (t in e) {
                    if (r) {
                        r.dup_entry++;
                    }
                } else {
                    e[t] = n[t];
                }
            }
        },
        get: function(n) {
            return l[n] ?? e[n];
        },
        getAll_DO_NOT_USE: function() {
            return babelHelpers.extends({}, e, l);
        },
        applyOverride_DO_NOT_USE: function(t, n) {
            l[t] = n;
        },
        clearOverride_DO_NOT_USE: function(t) {
            delete l[t];
        },
        clearAllOverrides_DO_NOT_USE: function() {
            for(const e in l){
                delete l[e];
            }
        },
        hasOverride_DO_NOT_USE: function(t) {
            return t in l;
        },
        getBase_DO_NOT_USE: function(n) {
            return e[n];
        }
    };
    i.default = s;
}, 66);
__d("QPLHasteSupportDataStorage", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        add: function(n, r) {
            Object.keys(n).forEach((t)=>{
                if (r) {
                    r.entry++;
                }
                if (e[t] == null) {
                    const o = n[t];
                    e[t] = o;
                } else {
                    if (r) {
                        r.dup_entry++;
                    }
                }
            });
        },
        get: function(n) {
            return e[n];
        }
    };
    i.default = l;
}, 66);
__d("bx", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {};
    function s(t) {
        const n = e[t];
        if (!n) {
            throw r("FBLogger")("staticresources").mustfixThrow(`bx${`(...): Unknown file path "${t}"`}`);
        }
        return n;
    }
    s.add = function(t, n) {
        const r = false;
        for(const o in t){
            if (n) {
                n.entry++;
            }
            if (o in e) {
                if (n) {
                    n.dup_entry++;
                }
            } else {
                t[o].loggingID = o;
                e[o] = t[o];
            }
        }
    };
    s.getURL = function(e) {
        return e.uri;
    };
    l.default = s;
}, 98);
__d("getFalcoLogPolicy_DO_NOT_USE", [
    "FBLogger"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        r: 1
    };
    const s = {};
    function u(t) {
        const n = s[t];
        return n ?? (r("FBLogger")("staticresources").mustfix("Failed to find a Haste-supplied log policy for the Falco event ' + 'identified by token `%s`. Failing open (ie. with a sampling rate of 1.0).", t), e);
    }
    u.add = function(e, t) {
        Object.keys(e).forEach((n)=>{
            if (t) {
                t.entry++;
            }
            if (s[n] == null) {
                s[n] = e[n];
            } else if (t) {
                t.dup_entry++;
            }
        });
    };
    l.default = u;
}, 98);
__d("ix", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    const e = {};
    const u = new Set;
    function c(t) {
        const n = e[t];
        if (!n) {
            s(0, 11798, t);
        }
        return n;
    }
    c.add = function(t, n) {
        const r = false;
        for(const o in t){
            if (n) {
                n.entry++;
            }
            if (o in e) {
                if (n) {
                    n.dup_entry++;
                }
            } else {
                t[o].loggingID = o;
                e[o] = t[o];
            }
        }
    };
    c.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function() {
        if (t.__flight_execution_mode_DO_NOT_USE !== "flight") {
            s(0, 34547);
        }
        return Array.from(u);
    };
    c.getAllPaths = function() {
        const t = new Set;
        Object.values(e).map((e)=>{
            if (e?.sprited === 0) {
                return e.uri;
            }
            if (e?.sprited === 1) {
                return e._spi;
            }
            if (e?.sprited === 2) {
                return e.spi;
            }
        }).forEach((e)=>e != null && t.add(e));
        return t;
    };
    l.default = c;
}, 98);
__d("qex", [
    "invariant",
    "BanzaiLazyQueue"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = {};
    const u = {};
    const c = {
        _: function(n) {
            const t = e[n];
            if (t == null) {
                s(0, 11799, n);
            }
            const { l, r: r_1 } = t;
            if (l != null && !u[n]) {
                u[n] = true;
                o("BanzaiLazyQueue").queuePost("qex", {
                    l
                });
            }
            return r_1;
        },
        add: function(n, r) {
            for(const t in n){
                if (r) {
                    r.entry++;
                }
                if (t in e) {
                    if (r) {
                        r.dup_entry++;
                    }
                } else {
                    e[t] = n[t];
                }
            }
        }
    };
    l.default = c;
}, 98);
__d("HasteSupportData", [
    "ix",
    "MetaConfigMap",
    "QPLHasteSupportDataStorage",
    "bx",
    "getFalcoLogPolicy_DO_NOT_USE",
    "gkx",
    "justknobx",
    "qex"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e({ bxData, clpData, gkxData, ixData, justknobxData, metaconfigData, qexData, qplData }, t) {
        if (bxData != null) {
            r("bx").add(bxData, t);
        }
        if (clpData != null) {
            r("getFalcoLogPolicy_DO_NOT_USE").add(clpData, t);
        }
        if (gkxData != null) {
            r("gkx").add(gkxData, t);
        }
        if (ixData != null) {
            s.add(ixData, t);
        }
        if (metaconfigData != null) {
            r("MetaConfigMap").add(metaconfigData, t);
        }
        if (qexData != null) {
            r("qex").add(qexData, t);
        }
        if (qplData != null) {
            r("QPLHasteSupportDataStorage").add(qplData, t);
        }
        if (justknobxData != null) {
            r("justknobx").add(justknobxData, t);
        }
    }
    l.handle = e;
}, 98);
__d("Parent", [
    "CSSCore"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = t.toUpperCase();
        const r = m(e, (e)=>e.nodeName === n);
        if (r instanceof Element) {
            return r;
        }
        return null;
    }
    function s(e, t) {
        const n = m(e, (e)=>e instanceof Element && o("CSSCore").hasClass(e, t));
        if (n instanceof Element) {
            return n;
        }
        return null;
    }
    function u(e, t) {
        let n = e;
        const r = e;
        if (typeof r.matches === "function") {
            while(n && n !== document && !n.matches(t)){
                n = n.parentNode;
            }
            if (n instanceof Element) {
                return n;
            }
            return null;
        } else if (typeof r.msMatchesSelector === "function") {
            while(n && n !== document && !n.msMatchesSelector(t)){
                n = n.parentNode;
            }
            if (n instanceof Element) {
                return n;
            }
            return null;
        } else {
            return c(e, t);
        }
    }
    function c(e, t) {
        let n = e;
        for(var r = e; r.parentNode;){
            r = r.parentNode;
        }
        if (!(r instanceof Element) && !(r instanceof Document)) {
            return null;
        }
        const o = r.querySelectorAll(t);
        while(n){
            if (Array.from(o).some((e)=>e === n)) {
                if (n instanceof Element) {
                    return n;
                }
                return null;
            }
            n = n.parentNode;
        }
        if (n instanceof Element) {
            return n;
        }
        return null;
    }
    function d(e, t) {
        const n = m(e, (e)=>e instanceof Element && !!e.getAttribute(t));
        if (n instanceof Element) {
            return n;
        }
        return null;
    }
    function m(e, t) {
        for(let n = e; n;){
            if (t(n)) {
                return n;
            }
            n = n.parentNode;
        }
        return null;
    }
    l.byTag = e;
    l.byClass = s;
    l.bySelector = u;
    l.bySelector_SLOW = c;
    l.byAttribute = d;
    l.find = m;
}, 98);
__d("ContextualComponent", [
    "Parent"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor({ element, isRoot, parent }){
            this.$2 = isRoot;
            this.$3 = element;
            this.$4 = parent;
            this.$5 = new Set;
            this.$6 = [];
            this.$7 = [];
            this.$8();
        }
        static forNode(n) {
            return e.$1.get(n) || null;
        }
        static closestToNode(n) {
            const t = o("Parent").find(n, function(t) {
                return !!e.forNode(t);
            });
            if (t) {
                return e.forNode(t);
            }
            return null;
        }
        static register(n) {
            return new e(n);
        }
        onCleanup(t) {
            this.$6.push(t);
        }
        onUnmount(t) {
            this.$7.push(t);
        }
        cleanup() {
            this.$5.forEach((e)=>e.cleanup());
            this.$6.forEach((e)=>e());
            this.$6 = [];
        }
        unmount() {
            this.cleanup();
            this.$5.forEach((e)=>e.unmount());
            this.$7.forEach((e)=>e());
            this.$7 = [];
            const t = this.$4;
            if (t) {
                e.$1.delete(this.$3);
                t.$9(this);
            }
        }
        reinitialize() {
            const t = this.$4;
            if (t) {
                t.$9(this);
                this.$4 = undefined;
            }
            e.$1.delete(this.$3);
            this.$8();
        }
        $8() {
            if (!this.$2 && !this.$4) {
                const t = e.closestToNode(this.$3);
                if (t) {
                    this.$4 = t;
                }
            }
            if (this.$4) {
                this.$4.$10(this);
            }
            e.$1.set(this.$3, this);
        }
        $10(t) {
            this.$5.add(t);
        }
        $9(t) {
            this.$5.delete(t);
        }
    }
    e.$1 = new Map;
    l.default = e;
}, 98);
__d("ServerJS", [
    "ContextualComponent",
    "ErrorGuard",
    "HasteBitMap",
    "HasteResourceIndexUtil",
    "ServerJSDefine",
    "__debug",
    "err",
    "ge",
    "getErrorSafe",
    "replaceTransportMarkers"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 1;
    const u = 2;
    const c = 16;
    let d = 0;
    class m {
        constructor(){
            this.$2 = {};
            this.$1 = null;
            this.$4 = {};
            this.$3 = undefined;
        }
        handle(t, n) {
            return this.$5(t, n, _);
        }
        handleWithCustomApplyEach(t, n, r) {
            this.$5(n, r, t);
        }
        $5(t, n, o) {
            this.$3 = n;
            if (t.__guard != null) {
                throw r("err")("ServerJS.handle called on data that has already been handled");
            }
            t.__guard = true;
            o(t.define || [], this.$6, this);
            o(t.markup || [], this.$7, this);
            o(t.elements || [], this.$8, this);
            this.$9(t.contexts || []);
            o(t.instances || [], this.$10, this);
            let e = o(t.pre_display_requires || [], this.$11, this);
            e = e.concat(o(t.require || [], this.$11, this));
            if (t.phd2_indexes != null) {
                this.$12(t.phd2_indexes);
            }
            return {
                cancel: function() {
                    e.forEach((e)=>{
                        if (e) {
                            e.cancel();
                        }
                    });
                }
            };
        }
        handlePartial(t, n) {
            const e = this;
            (t.instances || []).forEach((t)=>{
                h(e.$2, t);
            });
            (t.markup || []).forEach((t)=>{
                g(e.$2, t);
            });
            (t.elements || []).forEach((t)=>{
                g(e.$2, t);
            });
            return this.handle(t, n);
        }
        setRelativeTo(t) {
            this.$1 = t;
            return this;
        }
        cleanup(o) {
            const t = Object.keys(this.$2);
            if (o) {
                a.call(null, t, o.guard(function() {}, "SeverJS Cleanup requireLazy", {
                    propagationType: o.PropagationType.ORPHAN
                }));
            } else {
                a.call(null, t, function() {});
            }
            this.$2 = {};
            function i(e) {
                const t = this.$4[e];
                const o = t[0];
                const a = t[1];
                const i = t[2];
                delete this.$4[e];
                const l = a ? `JS::call("${o}", "${a}", ...)` : `JS::requireModule("${o}")`;
                const s = n("__debug").debugUnresolvedDependencies([
                    o,
                    e
                ]);
                throw p(r("err")("%s did not fire because it has missing dependencies.\n%s", l, s), i);
            }
            for(const l in this.$4){
                (e || (e = r("ErrorGuard"))).applyWithGuard(i, this, [
                    l
                ], {
                    name: `ServerJS:cleanup id: ${l}`,
                    project: "ServerJSCleanup"
                });
            }
        }
        $6(n, o, a, i) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(r("ServerJSDefine").handleDefine, r("ServerJSDefine"), [
                n,
                o,
                a,
                i,
                this.$1
            ], {
                name: "JS::define"
            });
        }
        $11(n, o, a, i) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(this.$13, this, [
                n,
                o,
                a,
                i
            ], {
                name: o != null ? "JS::call" : "JS::requireModule"
            });
        }
        $13(o, a, i, l) {
            const t = this;
            const m = r("ServerJSDefine").getModuleNameAndHash(o);
            const { hash, name } = m;
            let g;
            let h;
            if (typeof a === "object") {
                g = a;
            } else {
                g = i;
                h = a;
            }
            const y = [
                name
            ].concat(g || []);
            let C;
            if (h != null) {
                C = `__call__${name}.${h}`;
            } else if (l != null) {
                C = `__call__${name}`;
            } else {
                C = `__requireModule__${name}`;
            }
            C += `__${d++}`;
            this.$4[C] = [
                name,
                h,
                hash
            ];
            const b = this.$3 && this.$3.bigPipeContext;
            var v = (e || (e = r("ErrorGuard"))).guard(function(e) {
                const o = n.call(null, name);
                delete t.$4[C];
                if (l) {
                    r("replaceTransportMarkers")({
                        relativeTo: t.$1,
                        bigPipeContext: b
                    }, l);
                }
                if (h != null) {
                    if (!o[h]) {
                        throw p(r("err")('Module %s has no method "%s"', name, h), hash);
                    }
                } else if (l != null && typeof o !== "function") {
                    throw p(r("err")("Module %s is not a function but was called with args", name), hash);
                }
                const a = h != null ? o[h] : l != null && typeof o === "function" ? o : null;
                if (a != null) {
                    a.apply(o, l || []);
                    v.__SMmeta = a.__SMmeta || {};
                    v.__SMmeta.module = v.__SMmeta.module || name;
                    v.__SMmeta.name = v.__SMmeta.name || h;
                }
            }, {
                name: h != null ? `JS::call('${name}', '${h}', ...)` : l != null ? `JS::call('${name}', ...)` : `JS::requireModule('${name}')`
            });
            const S = define(C, y, v, s | c | u, this, 1, this.$3);
            return S;
        }
        $10(n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$14, this, [
                n,
                o,
                a,
                i
            ], {
                name: "JS::instance"
            });
        }
        $14(t, o, a, i) {
            const e = this;
            let l = null;
            const s = r("ServerJSDefine").getModuleNameAndHash(t);
            const { hash, name } = s;
            if (o) {
                const p = this.$3 && this.$3.bigPipeContext;
                l = function() {
                    const t = n.call(null, o[0]);
                    r("replaceTransportMarkers")({
                        relativeTo: e.$1,
                        bigPipeContext: p
                    }, a);
                    const i = Object.create(t.prototype);
                    t.apply(i, a);
                    return i;
                };
            }
            define(name, o, l, u | c, null, i);
        }
        $7(n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$15, this, [
                n,
                o,
                a,
                i
            ], {
                name: "JS::markup"
            });
        }
        $15(t, n, o, a) {
            const e = r("ServerJSDefine").getModuleNameAndHash(t);
            const { hash, name } = e;
            define(name, [
                a
            ], function(t) {
                try {
                    return t.replaceJSONWrapper(n).getRootNode();
                } catch (error) {
                    throw p(r("getErrorSafe")(error), hash);
                }
            }, c, null, o);
        }
        $8(n, o, a, i) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$16, this, [
                n,
                o,
                a,
                i
            ], {
                name: "JS::element"
            });
        }
        $16(t, n, o, a) {
            const e = r("ServerJSDefine").getModuleNameAndHash(t);
            const { hash, name } = e;
            if (n === null && o != null) {
                define(name, null, null, c, null, o);
                return;
            }
            const u = [];
            let d = c;
            let m = o || 0;
            if (a != null) {
                u.push(a);
                d |= s;
                m++;
            }
            define(name, u, function(t) {
                const e = r("ge")(n, t);
                if (!e) {
                    const o = "";
                    throw p(r("err")('Could not find element "%s"%s', n, o), hash);
                }
                return e;
            }, d, null, m);
        }
        $9(n) {
            (e || (e = r("ErrorGuard"))).applyWithGuard(this.$17, this, [
                n
            ], {
                name: "ContextualComponents"
            });
        }
        $17(t) {
            const e = this;
            const n = this.$3 && this.$3.bigPipeContext;
            t.map((t)=>{
                r("replaceTransportMarkers")({
                    relativeTo: e.$1,
                    bigPipeContext: n
                }, t);
                const o = t[0];
                return [
                    t,
                    f(o)
                ];
            }).sort((e, t)=>e[1] - t[1]).forEach(([t])=>{
                const element = t[0];
                const isRoot = t[1];
                r("ContextualComponent").register({
                    element,
                    isRoot
                });
            });
        }
        $12(t) {
            o("HasteResourceIndexUtil").parseResourceIndexes(t).forEach((e)=>o("HasteBitMap").add("__sjsp", e));
        }
    }
    function p(e, t) {
        e.serverHash = t;
        return e;
    }
    function _(e, t, n) {
        return e.map((r)=>t.apply(n, r));
    }
    function f(e) {
        let t = 0;
        for(let n = e; n;){
            n = n.parentElement;
            t++;
        }
        return t;
    }
    function g(e, t) {
        const n = r("ServerJSDefine").getModuleNameAndHash(t[0]);
        const n_name = n.name;
        if (!(n_name in e)) {
            t[2] = (t[2] || 0) + 1;
        }
        e[n_name] = true;
    }
    function h(e, t) {
        const n = r("ServerJSDefine").getModuleNameAndHash(t[0]);
        const n_name = n.name;
        if (!(n_name in e)) {
            t[3] = (t[3] || 0) + 1;
        }
        e[n_name] = true;
    }
    i.exports = m;
}, 34);
__d("HasteResponse", [
    "Bootloader",
    "BootloaderConfig",
    "BootloaderEvents",
    "ClientConsistency",
    "ClientConsistencyEventEmitter",
    "HasteSupportData",
    "ServerJS",
    "TimeSlice",
    "__debug",
    "fb-error",
    "performanceAbsoluteNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set;
    var u = {
        handleSRPayload: function({ hblp, hsdp }, n) {
            const i = hblp?.consistency;
            r("ClientConsistency").recordResponseRevision(i?.rev);
            if (hsdp) {
                o("HasteSupportData").handle(hsdp, n?.hsdp);
            }
            if (hblp) {
                r("Bootloader").handlePayload(hblp, n?.hblp);
            }
            if (i != null) {
                r("ClientConsistencyEventEmitter").emit("newEntry", i);
            }
        },
        handle: function({ allResources, hsrp, jsmods, tieredResources }, { onAll, onBlocking, onLog, source, sourceDetail }) {
            const h = (e || (e = r("performanceAbsoluteNow")))();
            let isFirstIdentical;
            if (sourceDetail == null) {
                isFirstIdentical = true;
            } else {
                const C = r("fb-error").getSimpleHash(source, sourceDetail);
                if (s.has(C)) {
                    isFirstIdentical = false;
                } else {
                    isFirstIdentical = true;
                    s.add(C);
                }
            }
            const payloadStats = {
                hsdp: {
                    entry: 0,
                    dup_entry: 0
                },
                hblp: {
                    rsrc: 0,
                    dup_rsrc: 0,
                    comp: 0,
                    dup_comp: 0
                },
                sjsp: {
                    define: 0,
                    dup_user_define: 0,
                    dup_system_define: 0,
                    require: 0
                }
            };
            if (hsrp) {
                u.handleSRPayload(hsrp, payloadStats);
            }
            let jsmodsStart = 0;
            let jsmodsEnd = 0;
            const onBlocking_1 = function() {
                payloadStats.sjsp.require += (jsmods?.require || []).length;
                payloadStats.sjsp.define += (jsmods?.define || []).length;
                const t = n("__debug").getDupCount();
                let o = t[0];
                let a = t[1];
                payloadStats.sjsp.dup_user_define -= o;
                payloadStats.sjsp.dup_system_define -= a;
                jsmodsStart = (e || (e = r("performanceAbsoluteNow")))();
                new (r("ServerJS"))().handle(jsmods || {});
                jsmodsEnd = e();
                const i = n("__debug").getDupCount();
                o = i[0];
                a = i[1];
                payloadStats.sjsp.dup_user_define += o;
                payloadStats.sjsp.dup_system_define += a;
                onBlocking?.();
            };
            const onLog_1 = function(rsrcs) {
                const t = {
                    source,
                    sourceDetail,
                    isFirstIdentical,
                    timesliceContext: r("TimeSlice").getContext(),
                    startTime: h,
                    logTime: (e || (e = r("performanceAbsoluteNow")))(),
                    jsmodsStart,
                    jsmodsEnd,
                    rsrcs,
                    payloadStats
                };
                onLog?.(t);
                o("BootloaderEvents").notifyHasteResponse(t);
            };
            if (r("BootloaderConfig").tieredLoadingFromTier <= 3 && tieredResources != null) {
                r("Bootloader").loadTieredResources(tieredResources, {
                    onBlocking: onBlocking_1,
                    onAll,
                    onLog: onLog_1
                });
            } else {
                r("Bootloader").loadResources(allResources ?? [], {
                    onBlocking: onBlocking_1,
                    onAll,
                    onLog: onLog_1
                });
            }
        }
    };
    const { handle, handleSRPayload } = u;
    l.handle = handle;
    l.handleSRPayload = handleSRPayload;
}, 98);
__d("DTSG", [
    "invariant",
    "DTSGInitialData"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e = o("DTSGInitialData").token || null;
    function u() {
        return e;
    }
    function c() {
        const token = o("DTSGInitialData").token;
        return token != null && token !== "";
    }
    function d(t) {
        e = t;
    }
    function m() {
        s(0, 5809);
    }
    function p(e) {
        s(0, 73819);
    }
    l.getToken = u;
    l.hasInitialDataToken = c;
    l.setToken = d;
    l.refresh = m;
    l.setTokenConfig = p;
}, 98);
__d("DTSG_ASYNC", [
    "DTSGInitData"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = r("DTSGInitData").async_get_token || null;
    function s() {
        return e;
    }
    function u(t) {
        e = t;
    }
    l.getToken = s;
    l.setToken = u;
}, 98);
__d("SchedulerFeatureFlags", [], function(t, n, r, o, a, i) {
    const e = true;
    const l = true;
    const s = 250;
    const u = 5000;
    const c = 10000;
    i.enableRequestPaint = e;
    i.enableSchedulerDebugging = l;
    i.userBlockingPriorityTimeout = s;
    i.normalPriorityTimeout = u;
    i.lowPriorityTimeout = c;
}, 66);
__d("Scheduler-dev.classic", [
    "SchedulerFeatureFlags"
], function(t, n, r, o, a, i) {
    "use strict";
}, null);
__d("Scheduler-profiling.classic", [
    "SchedulerFeatureFlags"
], function(t, n, r, o, a, i) {
    "use strict";
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    }
    const enableRequestPaint = n("SchedulerFeatureFlags").enableRequestPaint;
    function l(e, t) {
        let e_length = e.length;
        e.push(t);
        e: while(e_length > 0){
            const r = e_length - 1 >>> 1;
            const o = e[r];
            if (c(o, t) > 0) {
                e[r] = t;
                e[e_length] = o;
                e_length = r;
            } else {
                break e;
            }
        }
    }
    function s(e) {
        if (e.length === 0) {
            return null;
        }
        return e[0];
    }
    function u(e) {
        if (e.length === 0) {
            return null;
        }
        const t = e[0];
        const n = e.pop();
        if (n !== t) {
            e[0] = n;
            e: for(let r = 0, o = e.length, a = o >>> 1; r < a;){
                const i = 2 * (r + 1) - 1;
                const l = e[i];
                const s = i + 1;
                const u = e[s];
                if (c(l, n) < 0) {
                    if (s < o && c(u, l) < 0) {
                        e[r] = u;
                        e[s] = n;
                        r = s;
                    } else {
                        e[r] = l;
                        e[i] = n;
                        r = i;
                    }
                } else if (s < o && c(u, n) < 0) {
                    e[r] = u;
                    e[s] = n;
                    r = s;
                } else {
                    break e;
                }
            }
        }
        return t;
    }
    function c(e, t) {
        const n = e.sortIndex - t.sortIndex;
        if (n !== 0) {
            return n;
        }
        return e.id - t.id;
    }
    i.unstable_now = undefined;
    if (typeof performance === "object" && typeof performance.now === "function") {
        const d = performance;
        i.unstable_now = function() {
            return d.now();
        };
    } else {
        const p = Date.now();
        i.unstable_now = function() {
            return Date.now() - p;
        };
    }
    const _ = [];
    const f = [];
    let g = 1;
    let h = null;
    let y = 3;
    let C = false;
    let b = false;
    let v = false;
    let S = false;
    const R = typeof setTimeout === "function" ? setTimeout : null;
    const L = typeof clearTimeout === "function" ? clearTimeout : null;
    const E = typeof setImmediate !== "undefined" ? setImmediate : null;
    function k(e) {
        for(let t = s(f); t !== null;){
            if (t.callback === null) {
                u(f);
            } else if (t.startTime <= e) {
                u(f);
                t.sortIndex = t.expirationTime;
                l(_, t);
            } else {
                break;
            }
            t = s(f);
        }
    }
    function I(e) {
        v = false;
        k(e);
        if (!b) {
            if (s(_) !== null) {
                b = true;
                if (!T) {
                    T = true;
                    M();
                }
            } else {
                const t = s(f);
                if (t !== null) {
                    F(I, t.startTime - e);
                }
            }
        }
    }
    var T = false;
    let D = -1;
    let x = 10;
    let $ = -1;
    function P() {
        if (enableRequestPaint && S) {
            return true;
        }
        return !(i.unstable_now() - $ < x);
    }
    function N() {
        if (enableRequestPaint) {
            S = false;
        }
        if (T) {
            let t = i.unstable_now();
            $ = t;
            let n = true;
            try {
                e: {
                    b = false;
                    if (v) {
                        v = false;
                        L(D);
                        D = -1;
                    }
                    C = true;
                    const r = y;
                    try {
                        t: {
                            k(t);
                            for(h = s(_); h !== null && !(h.expirationTime > t && P());){
                                const o = h.callback;
                                if (typeof o === "function") {
                                    h.callback = null;
                                    y = h.priorityLevel;
                                    const a = o(h.expirationTime <= t);
                                    t = i.unstable_now();
                                    if (typeof a === "function") {
                                        h.callback = a;
                                        k(t);
                                        n = true;
                                        break t;
                                    }
                                    if (h === s(_)) {
                                        u(_);
                                    }
                                    k(t);
                                } else {
                                    u(_);
                                }
                                h = s(_);
                            }
                            if (h !== null) {
                                n = true;
                            } else {
                                const l = s(f);
                                if (l !== null) {
                                    F(I, l.startTime - t);
                                }
                                n = false;
                            }
                        }
                        break e;
                    } finally{
                        h = null;
                        y = r;
                        C = false;
                    }
                    n = undefined;
                }
            } finally{
                if (n) {
                    M();
                } else {
                    T = false;
                }
            }
        }
    }
    var M;
    if (typeof E === "function") {
        M = function() {
            E(N);
        };
    } else if (typeof MessageChannel !== "undefined") {
        const w = new MessageChannel;
        const A = w.port2;
        w.port1.onmessage = N;
        M = function() {
            A.postMessage(null);
        };
    } else {
        M = function() {
            R(N, 0);
        };
    }
    function F(e, t) {
        D = R(function() {
            e(i.unstable_now());
        }, t);
    }
    i.unstable_IdlePriority = 5;
    i.unstable_ImmediatePriority = 1;
    i.unstable_LowPriority = 4;
    i.unstable_NormalPriority = 3;
    i.unstable_Profiling = null;
    i.unstable_UserBlockingPriority = 2;
    i.unstable_cancelCallback = function(e) {
        e.callback = null;
    };
    i.unstable_forceFrameRate = function(e) {
        if (!(e < 0 || e > 125)) {
            x = e > 0 ? Math.floor(1000 / e) : 10;
        }
    };
    i.unstable_getCurrentPriorityLevel = function() {
        return y;
    };
    i.unstable_next = function(e) {
        switch(y){
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = y;
        }
        const n = y;
        y = t;
        try {
            return e();
        } finally{
            y = n;
        }
    };
    i.unstable_requestPaint = function() {
        if (enableRequestPaint) {
            S = true;
        }
    };
    i.unstable_runWithPriority = function(e, t) {
        switch(e){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        const n = y;
        y = e;
        try {
            return t();
        } finally{
            y = n;
        }
    };
    i.unstable_scheduleCallback = function(priorityLevel, callback, n) {
        const r = i.unstable_now();
        if (typeof n === "object" && n !== null) {
            n = n.delay;
            n = typeof n === "number" && n > 0 ? r + n : r;
        } else {
            n = r;
        }
        switch(priorityLevel){
            case 1:
                var expirationTime = -1;
                break;
            case 2:
                expirationTime = 250;
                break;
            case 5:
                expirationTime = 1073741823;
                break;
            case 4:
                expirationTime = 10000;
                break;
            default:
                expirationTime = 5000;
        }
        expirationTime = n + expirationTime;
        priorityLevel = {
            id: g++,
            callback,
            priorityLevel,
            startTime: n,
            expirationTime,
            sortIndex: -1
        };
        if (n > r) {
            priorityLevel.sortIndex = n;
            l(f, priorityLevel);
            if (s(_) === null && priorityLevel === s(f)) {
                if (v) {
                    L(D);
                    D = -1;
                } else {
                    v = true;
                }
                F(I, n - r);
            }
        } else {
            priorityLevel.sortIndex = expirationTime;
            l(_, priorityLevel);
            if (!(b || C)) {
                b = true;
                if (!T) {
                    T = true;
                    M();
                }
            }
        }
        return priorityLevel;
    };
    i.unstable_shouldYield = P;
    i.unstable_wrapCallback = function(e) {
        const t = y;
        return function() {
            const n = y;
            y = t;
            try {
                return e.apply(this, arguments);
            } finally{
                y = n;
            }
        };
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }
}, null);
__d("nativeRequestAnimationFrame", [], function(t, n, r, o, a, i) {
    const e = t.__fbNativeRequestAnimationFrame || t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
    i.default = e;
}, 66);
__d("requestAnimationFramePolyfill", [
    "ExecutionEnvironment",
    "nativeRequestAnimationFrame",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u = 0;
    let c = r("nativeRequestAnimationFrame");
    if ((e || (e = r("ExecutionEnvironment"))).isInWorker && c != null) {
        try {
            c(function() {});
        } catch (e) {
            c = null;
        }
    }
    const d = c || function(e) {
        const n = (s || (s = r("performanceNow")))();
        const o = Math.max(0, 16 - (n - u));
        u = n + o;
        return t.setTimeout(function() {
            e((s || (s = r("performanceNow")))());
        }, o);
    };
    l.default = d;
}, 98);
__d("SchedulerFb-Internals_DO_NOT_USE", [
    "Scheduler-dev.classic",
    "Scheduler-profiling.classic",
    "ifRequireable",
    "requestAnimationFramePolyfill"
], function(t, n, r, o, a, i) {
    "use strict";
    if (t.requestAnimationFrame === undefined) {
        t.requestAnimationFrame = n("requestAnimationFramePolyfill");
    }
    let e;
    e = n("Scheduler-profiling.classic");
    a.exports = {
        unstable_ImmediatePriority: e.unstable_ImmediatePriority,
        unstable_UserBlockingPriority: e.unstable_UserBlockingPriority,
        unstable_NormalPriority: e.unstable_NormalPriority,
        unstable_LowPriority: e.unstable_LowPriority,
        unstable_IdlePriority: e.unstable_IdlePriority,
        unstable_getCurrentPriorityLevel: e.unstable_getCurrentPriorityLevel,
        unstable_runWithPriority: e.unstable_runWithPriority,
        unstable_now: e.unstable_now,
        unstable_scheduleCallback: function(r, o, a) {
            const t = n("ifRequireable")("TimeSlice", function(e) {
                return e.guard(o, "unstable_scheduleCallback", {
                    propagationType: e.PropagationType.CONTINUATION,
                    registerCallStack: true
                });
            }, function() {
                return o;
            });
            return e.unstable_scheduleCallback(r, t, a);
        },
        unstable_cancelCallback: function(n) {
            return e.unstable_cancelCallback(n);
        },
        unstable_wrapCallback: function(r) {
            const t = n("ifRequireable")("TimeSlice", function(e) {
                return e.guard(r, "unstable_wrapCallback", {
                    propagationType: e.PropagationType.CONTINUATION,
                    registerCallStack: true
                });
            }, function() {
                return r;
            });
            return e.unstable_wrapCallback(t);
        },
        unstable_pauseExecution: function() {
            return e.unstable_pauseExecution();
        },
        unstable_continueExecution: function() {
            return e.unstable_continueExecution();
        },
        unstable_shouldYield: e.unstable_shouldYield,
        unstable_requestPaint: e.unstable_requestPaint,
        unstable_forceFrameRate: e.unstable_forceFrameRate,
        unstable_Profiling: e.unstable_Profiling
    };
}, null);
__d("JSScheduler", [
    "SchedulerFb-Internals_DO_NOT_USE"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    const priorities = {
        unstable_Idle: (e = n("SchedulerFb-Internals_DO_NOT_USE")).unstable_IdlePriority,
        unstable_Immediate: e.unstable_ImmediatePriority,
        unstable_Low: e.unstable_LowPriority,
        unstable_Normal: e.unstable_NormalPriority,
        unstable_UserBlocking: e.unstable_UserBlockingPriority
    };
    let s = false;
    const { unstable_scheduleCallback, unstable_cancelCallback } = e;
    var d = {
        cancelCallback: function(t) {
            unstable_cancelCallback(t);
        },
        cancelDelayedCallback_DO_NOT_USE: function(t) {
            return unstable_cancelCallback(t);
        },
        defer: function(t) {
            const e = d.getCurrentPriorityLevel();
            return unstable_scheduleCallback(e, t);
        },
        deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function(t) {
            const e = d.getCurrentPriorityLevel();
            return unstable_scheduleCallback(priorities.unstable_UserBlocking, function() {
                n("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(e, t);
            });
        },
        getCallbackScheduler: function() {
            const e = d.getCurrentPriorityLevel();
            return function(t) {
                return unstable_scheduleCallback(e, t);
            };
        },
        getCurrentPriorityLevel: e.unstable_getCurrentPriorityLevel,
        getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE: function() {
            const e = d.getCurrentPriorityLevel();
            return function(t) {
                return unstable_scheduleCallback(priorities.unstable_UserBlocking, function() {
                    n("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(e, t);
                });
            };
        },
        makeSchedulerGlobalEntry: function(r = null, o = false, a = false) {
            if (r != null) {
                n("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(r);
            }
            if (o) {
                d.startEventProfiling();
            }
            if (a !== true) {
                t.ScheduleJSWork = function(e) {
                    return function(...n) {
                        if (s) {
                            e(...n);
                        } else {
                            d.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                                s = true;
                                try {
                                    e(...n);
                                } finally{
                                    s = false;
                                }
                            });
                        }
                    };
                };
            }
        },
        priorities,
        runWithPriority: e.unstable_runWithPriority,
        runWithPriority_DO_NOT_USE: e.unstable_runWithPriority,
        scheduleDelayedCallback_DO_NOT_USE: function(t, delay, r) {
            const e = unstable_scheduleCallback(t, r, {
                delay
            });
            return e;
        },
        scheduleImmediatePriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Immediate, t);
        },
        scheduleLoggingPriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Low, t);
        },
        scheduleNormalPriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Normal, t);
        },
        scheduleSpeculativeCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_Idle, t);
        },
        scheduleUserBlockingPriCallback: function(t) {
            return unstable_scheduleCallback(priorities.unstable_UserBlocking, t);
        },
        shouldYield: e.unstable_shouldYield,
        startEventProfiling: function() {
            const t = n("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling?.startLoggingProfilingEvents;
            if (typeof t === "function") {
                t();
            }
        },
        stopEventProfiling: function() {
            const t = n("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling?.stopLoggingProfilingEvents;
            if (typeof t === "function") {
                return t();
            }
            return null;
        }
    };
    a.exports = d;
}, null);
__d("createCancelableFunction", [
    "emptyFunction"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        let t = e;
        const n = function(...n) {
            return t.apply(this, n);
        };
        n.cancel = function() {
            t = r("emptyFunction");
        };
        return n;
    }
    l.default = e;
}, 98);
__d("unexpectedUseInComet", [
    "FBLogger",
    "gkx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        if (r("gkx")("20935")) {
            const t = `${e} called unexpectedly. This is not supported in Comet!`;
            const n = r("FBLogger")("comet_infra").blameToPreviousFrame().blameToPreviousFrame();
            n.mustfix(t);
        }
    }
    l.default = e;
}, 98);
__d("RunComet", [
    "ExecutionEnvironment",
    "FBLogger",
    "createCancelableFunction",
    "emptyFunction",
    "getErrorSafe",
    "gkx",
    "setTimeout",
    "unexpectedUseInComet"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = {};
    let c = false;
    let d = false;
    const m = {
        remove: r("emptyFunction")
    };
    function p(e, t) {
        if (u.unload == null) {
            u.unload = [];
            u.afterunload = [];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("unload", function() {
                    h("unload");
                    h("afterunload");
                });
            }
        }
        if (u[e] == null) {
            r("FBLogger")("comet_infra").mustfix("EVENT_LISTENERS.%s wasn't initialized but should have been!", e);
            u[e] = [
                t
            ];
        } else {
            u[e].push(t);
        }
    }
    function _(e) {
        return r("createCancelableFunction")(e);
    }
    function f(e, t) {
        return {
            remove: function() {
                t.cancel();
                if (r("gkx")("11588")) {
                    const n = u[e];
                    if (n != null) {
                        const o = n.indexOf(t);
                        if (o !== -1) {
                            n.splice(o, 1);
                        }
                    }
                }
            }
        };
    }
    function g(t, n) {
        try {
            n();
        } catch (error) {
            const o = r("getErrorSafe")(error);
            r("FBLogger")("comet_infra").catching(o).MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Hit an error while executing '",
                "' event listeners."
            ])), t);
        }
    }
    function h(e) {
        const t = u[e] || [];
        if (r("gkx")("11588")) {
            while(t.length > 0){
                const n = t.shift();
                if (n != null) {
                    g(e, n);
                }
            }
        } else {
            for(let o = 0; o < t.length; o++){
                g(e, t[o]);
            }
        }
        u[e] = [];
    }
    function y(e) {
        return u[e]?.length ?? 0;
    }
    function C(e) {
        if (c) {
            e();
            return m;
        }
        const t = _(e);
        if (u.domcontentloaded == null) {
            u.domcontentloaded = [
                t
            ];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("DOMContentLoaded", function() {
                    h("domcontentloaded");
                }, true);
            }
        } else {
            u.domcontentloaded.push(t);
        }
        return f("domcontentloaded", t);
    }
    function b(e) {
        const t = _(e);
        p("afterunload", t);
        return f("afterunload", t);
    }
    function v(e) {
        const t = _(e);
        if (u.load == null) {
            u.load = [
                t
            ];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("load", function() {
                    h("domcontentloaded");
                    h("load");
                });
            }
        } else {
            u.load.push(t);
        }
        if (d) {
            r("setTimeout")(function() {
                h("domcontentloaded");
                h("load");
            }, 0);
        }
        return f("load", t);
    }
    function S(e) {
        const t = _(e);
        p("unload", t);
        return f("unload", t);
    }
    function R(e) {
        const t = _(e);
        if (u.beforeunload == null) {
            u.beforeunload = [
                t
            ];
            if ((s || (s = r("ExecutionEnvironment"))).canUseEventListeners) {
                window.addEventListener("beforeunload", function(e) {
                    const o = r("gkx")("11588") ? [].concat(u.beforeunload ?? []) : u.beforeunload ?? [];
                    for (const a of o){
                        let i;
                        try {
                            i = a();
                        } catch (error) {
                            const l = r("getErrorSafe")(error);
                            r("FBLogger")("comet_infra").catching(l).mustfix("Hit an error while executing onBeforeUnload event listeners.");
                        }
                        if (i !== undefined) {
                            if (i != null && i.body != null) {
                                i = i.body;
                            }
                            e.preventDefault();
                            const s = typeof i === "string" ? i : String(i);
                            e.returnValue = s;
                            return s;
                        }
                    }
                });
            }
        } else {
            u.beforeunload.push(t);
        }
        return f("beforeunload", t);
    }
    const L = R;
    function E(e) {
        r("unexpectedUseInComet")("Run.onLeave");
        return m;
    }
    function k(e, t) {
        r("unexpectedUseInComet")("Run.onCleanupOrLeave");
        return m;
    }
    function I(e) {
        r("unexpectedUseInComet")("Run.removeHook");
    }
    function T() {
        if (document.readyState === "loading") {
            C(function() {
                c = true;
            });
        } else {
            c = true;
        }
        if (document.readyState === "complete") {
            d = true;
        } else {
            const e = window.onload;
            window.onload = function() {
                if (e) {
                    e();
                }
                d = true;
            };
        }
    }
    if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
        T();
    }
    const D = null;
    const x = null;
    l.getEventListenerCountForTesting = y;
    l.onLoad = C;
    l.onAfterUnload = b;
    l.onAfterLoad = v;
    l.onUnload = S;
    l.onBeforeUnload = R;
    l.maybeOnBeforeUnload = L;
    l.onLeave = E;
    l.onCleanupOrLeave = k;
    l.__removeHook = I;
    l.__domContentCallback = D;
    l.__onloadCallback = x;
}, 98);
__d("RunWWW", [
    "cr:925100"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    l.__domContentCallback = (e = n("cr:925100")).__domContentCallback;
    l.__onloadCallback = e.__onloadCallback;
    l.__removeHook = e.__removeHook;
    l.onAfterLoad = e.onAfterLoad;
    l.onAfterUnload = e.onAfterUnload;
    l.onBeforeUnload = e.onBeforeUnload;
    l.maybeOnBeforeUnload = e.maybeOnBeforeUnload;
    l.onCleanupOrLeave = e.onCleanupOrLeave;
    l.onLeave = e.onLeave;
    l.onLoad = e.onLoad;
    l.onUnload = e.onUnload;
}, 98);
__d("IntervalTrackingBoundedBuffer", [
    "CircularBuffer",
    "ErrorPubSub",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 5000;
    class u {
        constructor(e){
            var t = this;
            this.$6 = 0;
            if (e != null && e <= 0) {
                var n = new Error("Size for a buffer must be greater than zero.");
                n.stack;
                throw n;
            }
            var o = e ?? s;
            this.$4 = o;
            this.$1 = new (r("CircularBuffer"))(o);
            this.$1.onEvict(function() {
                t.$6++;
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0;
        }
        open() {
            const e = this;
            const t = this.$3++;
            let n = false;
            let r;
            const startIdx = this.$5;
            var a = {
                id: t,
                startIdx,
                hasOverflown: function() {
                    return a.getOverflowSize() > 0;
                },
                getOverflowSize: function() {
                    return r ?? Math.max(e.$6 - startIdx, 0);
                },
                close: function() {
                    if (n) {
                        return [];
                    }
                    n = true;
                    r = e.$6 - startIdx;
                    return e.$7(t);
                }
            };
            this.$2.push(a);
            return a;
        }
        pushElement(t) {
            if (this.$2.length > 0) {
                this.$1.write(t);
                this.$5++;
            }
            return this;
        }
        isActive() {
            return this.$2.length > 0;
        }
        $8(t) {
            return Math.max(t - this.$6, 0);
        }
        $7(n) {
            let t;
            let o;
            let a;
            let i;
            for(let l = 0; l < this.$2.length; l++){
                const s = this.$2[l];
                const { id, startIdx } = s;
                if (id === n) {
                    a = l;
                    i = startIdx;
                } else if (o == null || startIdx < o) {
                    o = startIdx;
                }
                if (t == null || startIdx < t) {
                    t = startIdx;
                }
            }
            if (a == null || t == null || i == null) {
                (e || (e = r("ErrorPubSub"))).reportError(r("err")("messed up state inside IntervalTrackingBoundedBuffer"));
                return [];
            }
            this.$2.splice(a, 1);
            const d = this.$8(i);
            const m = this.$1.read().slice(d);
            const p = this.$8(o ?? this.$5) - this.$8(t);
            if (p > 0) {
                this.$1.dropFirst(p);
                this.$6 += p;
            }
            return m;
        }
    }
    l.default = u;
}, 98);
__d("TimeSliceSham", [
    "Env",
    "ErrorGuard",
    "IntervalTrackingBoundedBuffer"
], function(t, n, r, o, a, i) {
    let e;
    let l;
    let timesliceBufferSize = (e || (e = n("Env"))).timesliceBufferSize;
    if (timesliceBufferSize == null) {
        timesliceBufferSize = 5000;
    }
    const u = new (n("IntervalTrackingBoundedBuffer"))(timesliceBufferSize);
    var c = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(t, r) {
            return (l || (l = n("ErrorGuard"))).guard(t, {
                name: `TimeSlice${r ? `: ${r}` : ""}`
            });
        },
        copyGuardForWrapper: function(t, n) {
            return t;
        },
        checkCoverage: function() {},
        setLogging: function(t, n) {},
        getContext: function() {
            return null;
        },
        getGuardedContinuation: function(t) {
            function e(e, ...n) {
                return e.apply(this, n);
            }
            return e;
        },
        getReusableContinuation: function(t) {
            return c.getPlaceholderReusableContinuation();
        },
        getPlaceholderReusableContinuation: function() {
            function e(e) {
                e();
            }
            e.last = e;
            return e;
        },
        getGuardNameStack: function() {
            return [];
        },
        registerExecutionContextObserver: function(t) {},
        catchUpOnDemandExecutionContextObservers: function(t) {},
        getBuffer: function() {
            return u;
        }
    };
    t.TimeSlice = c;
    a.exports = c;
}, 6);
__d("setTimeoutCometInternals", [
    "JSScheduler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    let u = 0;
    function c(t) {
        if (t != null) {
            const n = s.get(t);
            if (n !== undefined) {
                s.delete(t);
                (e || (e = r("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(n);
            }
        }
    }
    function d(t) {
        if (t != null) {
            const n = s.get(t);
            if (n !== undefined) {
                s.delete(t);
                (e || (e = r("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(n);
            }
        }
    }
    function m(t, n, o, ...i) {
        const c = u;
        u += 1;
        if (typeof n !== "function") {
            return c;
        }
        const d = function() {
            const a = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(t, o, d);
            s.set(c, a);
            n(...i);
        };
        const m = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(t, o, d);
        s.set(c, m);
        return c;
    }
    function p(t, n, o, ...i) {
        const c = u;
        u += 1;
        if (typeof n !== "function") {
            return c;
        }
        const d = (e || (e = r("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(t, o, function() {
            s.delete(c);
            n(...i);
        });
        s.set(c, d);
        return c;
    }
    l.clearInterval_DO_NOT_USE = c;
    l.clearTimeout_DO_NOT_USE = d;
    l.setIntervalAtPriority_DO_NOT_USE = m;
    l.setTimeoutAtPriority_DO_NOT_USE = p;
}, 98);
__d("clearIntervalComet", [
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = o("setTimeoutCometInternals").clearInterval_DO_NOT_USE;
}, 98);
__d("clearIntervalWWW", [
    "cr:1003267"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:1003267");
}, 98);
__d("clearTimeoutComet", [
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = o("setTimeoutCometInternals").clearTimeout_DO_NOT_USE;
}, 98);
__d("clearTimeoutWWW", [
    "cr:806696"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = n("cr:806696");
}, 98);
__d("clearTimeoutWWWOrMobile", [
    "cr:7386"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:7386");
}, 98);
__d("setIntervalAcrossTransitionsWWW", [
    "cr:896462"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:896462");
}, 98);
__d("setIntervalComet", [
    "JSScheduler",
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, ...i) {
        const r = (e || (e = o("JSScheduler"))).getCurrentPriorityLevel() === (e || (e = o("JSScheduler"))).priorities.unstable_Idle ? (e || (e = o("JSScheduler"))).priorities.unstable_Idle : (e || (e = o("JSScheduler"))).priorities.unstable_Low;
        return o("setTimeoutCometInternals").setIntervalAtPriority_DO_NOT_USE.apply(o("setTimeoutCometInternals"), [
            r,
            t,
            n,
            ...i
        ]);
    }
    l.default = s;
}, 98);
__d("setIntervalWWW", [
    "cr:896461"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:896461");
}, 98);
__d("setTimeoutAcrossTransitionsWWW", [
    "cr:986633"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:986633");
}, 98);
__d("setTimeoutComet", [
    "JSScheduler",
    "setTimeoutCometInternals"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, ...i) {
        const r = (e || (e = o("JSScheduler"))).getCurrentPriorityLevel() === (e || (e = o("JSScheduler"))).priorities.unstable_Idle ? (e || (e = o("JSScheduler"))).priorities.unstable_Idle : (e || (e = o("JSScheduler"))).priorities.unstable_Low;
        return o("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(o("setTimeoutCometInternals"), [
            r,
            t,
            n,
            ...i
        ]);
    }
    l.default = s;
}, 98);
__d("setTimeoutWWW", [
    "cr:807042"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:807042");
}, 98);
__d("setTimeoutWWWOrMobile", [
    "cr:7390"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:7390");
}, 98);
__d("CometPreludeCriticalRequireConds", [
    "DTSG",
    "DTSG_ASYNC",
    "JSScheduler",
    "RunComet",
    "RunWWW",
    "TimeSliceSham",
    "clearIntervalComet",
    "clearIntervalWWW",
    "clearTimeoutComet",
    "clearTimeoutWWW",
    "clearTimeoutWWWOrMobile",
    "setIntervalAcrossTransitionsWWW",
    "setIntervalComet",
    "setIntervalWWW",
    "setTimeoutAcrossTransitionsWWW",
    "setTimeoutComet",
    "setTimeoutWWW",
    "setTimeoutWWWOrMobile"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    n("DTSG");
    n("DTSG_ASYNC");
    if (!e) {
        e = n("JSScheduler");
    }
    n("TimeSliceSham");
    n("RunComet");
    n("RunWWW");
    n("clearIntervalComet");
    n("clearIntervalWWW");
    n("clearTimeoutComet");
    n("clearTimeoutWWW");
    n("clearTimeoutWWWOrMobile");
    n("setIntervalAcrossTransitionsWWW");
    n("setIntervalComet");
    n("setIntervalWWW");
    n("setTimeoutAcrossTransitionsWWW");
    n("setTimeoutComet");
    n("setTimeoutWWW");
    n("setTimeoutWWWOrMobile");
}, null);
__d("CometResourceScheduler", [
    "Bootloader",
    "ErrorGuard"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Set;
    const u = new Set;
    let c = [];
    const d = {
        executedDeferredCallback: 0,
        getPendingCallbacks: function() {
            return c;
        },
        queuedDeferredCallback: 0
    };
    function m(e) {
        const t = [];
        for (const n of e){
            if (!u.has(n)) {
                u.add(n);
                t.push(n);
            }
        }
        if (t.length) {
            _(t);
        }
    }
    function p(e) {
        c.push(e);
        if (s.size === 0) {
            f();
        }
    }
    function _(e) {
        e.forEach((e)=>s.add(e));
        r("Bootloader").loadResources(e, {
            onAll: function() {
                e.forEach((e)=>s.delete(e));
                if (!s.size) {
                    f();
                }
            }
        });
    }
    function f() {
        const t = c;
        c = [];
        t.forEach((t)=>(e || (e = r("ErrorGuard"))).applyWithGuard(t, null, []));
    }
    l.__debug = d;
    l.registerHighPriHashes = m;
    l.onHighPriComplete = p;
}, 98);
__d("DeferredJSResourceScheduler", [
    "Bootloader",
    "CometResourceScheduler",
    "JSScheduler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t) {
        o("CometResourceScheduler").__debug.queuedDeferredCallback++;
        o("CometResourceScheduler").onHighPriComplete(function() {
            (e || (e = r("JSScheduler"))).scheduleLoggingPriCallback(function() {
                o("CometResourceScheduler").__debug.executedDeferredCallback++;
                r("Bootloader").loadResources(t);
            });
        });
    }
    l.default = s;
}, 98);
__d("unstable_server-external-runtime-exp", [
    "Promise"
], function(t, n, r, o, a, i) {
    let e;
    (()=>{
        const r = t.__fbNativeSetTimeout ?? setTimeout;
        function o(e) {
            e = e.querySelectorAll("template");
            for(let t = 0; t < e.length; t++){
                i(e[t]);
            }
        }
        function a(body) {
            function t(e) {
                for(let t = 0; t < e.length; t++){
                    for(let n = e[t].addedNodes, r = 0; r < n.length; r++){
                        if (n[r].parentNode) {
                            i(n[r]);
                        }
                    }
                }
            }
            const n = new MutationObserver(t);
            n.observe(body, {
                childList: true
            });
            window.addEventListener("DOMContentLoaded", function() {
                t(n.takeRecords());
                n.disconnect();
            });
        }
        function i(e) {
            if (e.nodeType === 1 && e.dataset) {
                const t = e.dataset;
                if (t.rxi != null) {
                    c(t.bid, t.dgst, t.msg, t.stck, t.cstck);
                    e.remove();
                } else if (t.rri != null) {
                    p(t.bid, t.sid, JSON.parse(t.sty));
                    e.remove();
                } else if (t.rci != null) {
                    m(t.bid, t.sid);
                    e.remove();
                } else if (t.rsi != null) {
                    _(t.sid, t.pid);
                    e.remove();
                }
            }
        }
        let l;
        const s = new Map;
        let u = [];
        var c = function(t, n, r, o, a) {
            let e = document.getElementById(t);
            if (e) {
                t = e.previousSibling;
                t.data = "$!";
                e = e.dataset;
                if (n) {
                    e.dgst = n;
                }
                if (r) {
                    e.msg = r;
                }
                if (o) {
                    e.stck = o;
                }
                if (a) {
                    e.cstck = a;
                }
                if (t._reactRetry) {
                    t._reactRetry();
                }
            }
        };
        var d = (function(t, o) {
            function a(e, t) {
                const n = e.getAttribute(t);
                if (n) {
                    t = e.style;
                    s.push(e, t.viewTransitionName, t.viewTransitionClass);
                    if (n !== "auto") {
                        t.viewTransitionClass = n;
                    }
                    if (!(e = e.getAttribute("vt-name"))) {
                        e = `_T_${l++}_`;
                    }
                    t.viewTransitionName = e;
                    i = true;
                }
            }
            var i = false;
            var l = 0;
            var s = [];
            try {
                let c = document.__reactViewTransition;
                if (c) {
                    c.finished.finally(d.bind(null, o));
                    return;
                }
                const m = new Map;
                for(c = 1; c < o.length; c += 2){
                    for(var p = o[c].querySelectorAll("[vt-share]"), _ = 0; _ < p.length; _++){
                        var f = p[_];
                        m.set(f.getAttribute("vt-name"), f);
                    }
                }
                const g = [];
                for(p = 0; p < o.length; p += 2){
                    const h = o[p];
                    const y = h.parentNode;
                    if (y) {
                        const C = y.getBoundingClientRect();
                        if (C.left || C.top || C.width || C.height) {
                            f = h;
                            for(c = 0; f;){
                                if (f.nodeType === 8) {
                                    const b = f.data;
                                    if (b === "/$") {
                                        if (c === 0) {
                                            break;
                                        }
                                        c--;
                                    } else {
                                        if (!(b !== "$" && b !== "$?" && b !== "$~" && b !== "$!")) {
                                            c++;
                                        }
                                    }
                                } else if (f.nodeType === 1) {
                                    _ = f;
                                    const v = _.getAttribute("vt-name");
                                    const S = m.get(v);
                                    a(_, S ? "vt-share" : "vt-exit");
                                    if (S) {
                                        a(S, "vt-share");
                                        m.set(v, null);
                                    }
                                    const R = _.querySelectorAll("[vt-share]");
                                    for(_ = 0; _ < R.length; _++){
                                        const L = R[_];
                                        const E = L.getAttribute("vt-name");
                                        const k = m.get(E);
                                        if (k) {
                                            a(L, "vt-share");
                                            a(k, "vt-share");
                                            m.set(E, null);
                                        }
                                    }
                                }
                                f = f.nextSibling;
                            }
                            const I = o[p + 1];
                            for(let T = I.firstElementChild; T;){
                                if (m.get(T.getAttribute("vt-name")) !== null) {
                                    a(T, "vt-enter");
                                }
                                T = T.nextElementSibling;
                            }
                            f = y;
                            do {
                                for(let D = f.firstElementChild; D;){
                                    const x = D.getAttribute("vt-update");
                                    if (x && x !== "none" && !s.includes(D)) {
                                        a(D, "vt-update");
                                    }
                                    D = D.nextElementSibling;
                                }
                            }while ((f = f.parentNode) && f.nodeType === 1 && f.getAttribute("vt-update") !== "none")
                            const $ = I.querySelectorAll('img[src]:not([loading="lazy"])');
                            g.push(...$);
                        }
                    }
                }
                if (i) {
                    const P = document.__reactViewTransition = document.startViewTransition({
                        update: function() {
                            t(o);
                            const a = [
                                document.documentElement.clientHeight,
                                document.fonts.ready
                            ];
                            for(let i = {}, l = 0; l < g.length; i = {
                                $jscomp$loop$prop$suspenseyImage$8: i.$jscomp$loop$prop$suspenseyImage$8
                            }, l++){
                                i.$jscomp$loop$prop$suspenseyImage$8 = g[l];
                                if (!i.$jscomp$loop$prop$suspenseyImage$8.complete) {
                                    let s = i.$jscomp$loop$prop$suspenseyImage$8.getBoundingClientRect();
                                    if (s.bottom > 0 && s.right > 0 && s.top < window.innerHeight && s.left < window.innerWidth) {
                                        s = new (e || (e = n("Promise")))(((e)=>function(t) {
                                                e.$jscomp$loop$prop$suspenseyImage$8.addEventListener("load", t);
                                                e.$jscomp$loop$prop$suspenseyImage$8.addEventListener("error", t);
                                            })(i));
                                        a.push(s);
                                    }
                                }
                            }
                            return (e || (e = n("Promise"))).race([
                                e.all(a),
                                new e(function(e) {
                                    const t = performance.now();
                                    r(e, t < 2300 && t > 2000 ? 2300 - t : 500);
                                })
                            ]);
                        },
                        types: []
                    });
                    P.ready.finally(()=>{
                        for(let e = s.length - 3; e >= 0; e -= 3){
                            const t = s[e];
                            const n = t.style;
                            n.viewTransitionName = s[e + 1];
                            n.viewTransitionClass = s[e + 1];
                            if (t.getAttribute("style") === "") {
                                t.removeAttribute("style");
                            }
                        }
                    });
                    P.finished.finally(()=>{
                        if (document.__reactViewTransition === P) {
                            document.__reactViewTransition = null;
                        }
                    });
                    u = [];
                    return;
                }
            } catch (e) {}
            t(o);
        }).bind(null, function(e) {
            l = performance.now();
            for(let n = 0; n < e.length; n += 2){
                let r = e[n];
                const o = e[n + 1];
                if (o.parentNode !== null) {
                    o.parentNode.removeChild(o);
                }
                const a = r.parentNode;
                if (a) {
                    const i = r.previousSibling;
                    let s = 0;
                    do {
                        if (r && r.nodeType === 8) {
                            var u = r.data;
                            if (u === "/$" || u === "/&") {
                                if (s === 0) {
                                    break;
                                }
                                s--;
                            } else {
                                if (!(u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" && u !== "&")) {
                                    s++;
                                }
                            }
                        }
                        u = r.nextSibling;
                        a.removeChild(r);
                        r = u;
                    }while (r)
                    const c = [];
                    while(o.firstChild){
                        c.push(o.firstChild);
                        a.insertBefore(o.firstChild, r);
                    }
                    i.data = "$";
                    if (t.__onSSRInject) {
                        t.__onSSRInject(c);
                    }
                    if (i._reactRetry) {
                        requestAnimationFrame(i._reactRetry);
                    }
                }
            }
            e.length = 0;
        });
        var m = function(t, n) {
            if (n = document.getElementById(n)) {
                if (t = document.getElementById(t)) {
                    t.previousSibling.data = "$~";
                    u.push(t, n);
                    if (u.length === 2) {
                        if (typeof l !== "number") {
                            requestAnimationFrame(d.bind(null, u));
                        } else {
                            t = performance.now();
                            t = t < 2300 && t > 2000 ? 2300 - t : l + 300 - t;
                            r(d.bind(null, u), t);
                        }
                    }
                } else {
                    n.parentNode.removeChild(n);
                }
            }
        };
        var p = (bid, sid, a)=>{
            function t(e) {
                this._p = null;
                e();
            }
            const i = new Map;
            const l = document;
            let u;
            let d;
            for(var p = l.querySelectorAll("link[data-precedence],style[data-precedence]"), _ = [], f = 0; d = p[f++];){
                if (d.getAttribute("media") === "not all") {
                    _.push(d);
                } else {
                    if (d.tagName === "LINK") {
                        s.set(d.getAttribute("href"), d);
                    }
                    i.set(d.dataset.precedence, u = d);
                }
            }
            p = 0;
            d = [];
            let g;
            let h;
            for(f = true;;){
                if (f) {
                    const y = a[p++];
                    if (!y) {
                        f = false;
                        p = 0;
                        continue;
                    }
                    var C = false;
                    let b = 0;
                    let v = y[b++];
                    if (h = s.get(v)) {
                        var S = h._p;
                        C = true;
                    } else {
                        h = l.createElement("link");
                        h.href = v;
                        h.rel = "stylesheet";
                        for(h.dataset.precedence = g = y[b++]; S = y[b++];){
                            h.setAttribute(S, y[b++]);
                        }
                        S = h._p = new (e || (e = n("Promise")))(function(e, n) {
                            h.onload = t.bind(h, e);
                            h.onerror = t.bind(h, n);
                        });
                        s.set(v, h);
                    }
                    v = h.getAttribute("media");
                    if (!(!S || v && !window.matchMedia(v).matches)) {
                        d.push(S);
                    }
                    if (C) {
                        continue;
                    }
                } else {
                    h = _[p++];
                    if (!h) {
                        break;
                    }
                    g = h.getAttribute("data-precedence");
                    h.removeAttribute("media");
                }
                C = i.get(g) || u;
                if (C === u) {
                    u = h;
                }
                i.set(g, h);
                if (C) {
                    C.parentNode.insertBefore(h, C.nextSibling);
                } else {
                    C = l.head;
                    C.insertBefore(h, C.firstChild);
                }
            }
            if (a = document.getElementById(bid)) {
                a.previousSibling.data = "$~";
            }
            (e || (e = n("Promise"))).all(d).then(m.bind(null, bid, sid), c.bind(null, bid, "CSS failed to load"));
        };
        var _ = (t, n)=>{
            t = document.getElementById(t);
            n = document.getElementById(n);
            t.parentNode.removeChild(t);
            while(t.firstChild){
                n.parentNode.insertBefore(t.firstChild, n);
            }
            n.parentNode.removeChild(n);
        };
        (()=>{
            addEventListener("submit", function(e) {
                if (!e.defaultPrevented) {
                    const { target, submitter } = e;
                    let r = target.action;
                    let o = submitter;
                    if (submitter) {
                        const a = submitter.getAttribute("formAction");
                        if (a != null) {
                            r = a;
                            o = null;
                        }
                    }
                    if (r === "javascript:throw new Error('React form unexpectedly submitted.')") {
                        e.preventDefault();
                        if (o) {
                            e = document.createElement("input");
                            e.name = o.name;
                            e.value = o.value;
                            o.parentNode.insertBefore(e, o);
                            o = new FormData(target);
                            e.parentNode.removeChild(e);
                        } else {
                            o = new FormData(target);
                        }
                        e = target.ownerDocument || target;
                        (e.$$reactFormReplay = e.$$reactFormReplay || []).push(target, submitter, o);
                    }
                }
            });
        })();
        const f = performance.getEntriesByType ? performance.getEntriesByType("paint") : [];
        if (f.length > 0) {
            l = f[0].startTime;
        } else {
            requestAnimationFrame(()=>{
                l = performance.now();
            });
        }
        if (document.body != null) {
            if (document.readyState === "loading") {
                a(document.body);
            }
            o(document.body);
        } else {
            var g = new MutationObserver(function() {
                if (document.body != null) {
                    if (document.readyState === "loading") {
                        a(document.body);
                    }
                    o(document.body);
                    g.disconnect();
                }
            });
            g.observe(document.documentElement, {
                childList: true
            });
        }
    })();
}, null);
__d("ReactDOMServerExternalRuntime", [
    "ExecutionEnvironment",
    "unstable_server-external-runtime-exp"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        n("unstable_server-external-runtime-exp");
        if (window._qplInl && typeof window._qplInl === "object" && window._qplInl.addPoint && typeof window._qplInl.addPoint === "function") {
            window._qplInl.addPoint("ssrPayloadListenerStart");
        }
    }
}, 35);
__d("Run", [
    "cr:310"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    l.__domContentCallback = (e = n("cr:310")).__domContentCallback;
    l.__onloadCallback = e.__onloadCallback;
    l.onAfterLoad = e.onAfterLoad;
    l.onAfterUnload = e.onAfterUnload;
    l.onBeforeUnload = e.onBeforeUnload;
    l.maybeOnBeforeUnload = e.maybeOnBeforeUnload;
    l.onLeave = e.onLeave;
    l.onLoad = e.onLoad;
    l.onUnload = e.onUnload;
}, 98);
__d("ScheduledApplyEach", [
    "JSScheduler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, r) {
        return t.map((t)=>{
            (e || (e = o("JSScheduler"))).deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                n.apply(r, t);
            });
        });
    }
    l.default = s;
}, 98);
__d("ScheduledServerJS", [
    "JSScheduler",
    "ScheduledApplyEach",
    "ServerJS"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n, a) {
        if (n != null) {
            new (r("ServerJS"))().handle(n);
        }
        (e || (e = o("JSScheduler"))).runWithPriority(e.priorities.unstable_Normal, function() {
            if (a != null) {
                new (r("ServerJS"))().handle(a);
            }
            new (r("ServerJS"))().handleWithCustomApplyEach(r("ScheduledApplyEach"), t);
        });
    }
    l.handle = s;
}, 98);
__d("ScheduledServerJSDefine", [
    "JSScheduler",
    "ServerJSDefine"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(t, n) {
        t.forEach((t)=>{
            let a = t;
            if (n != null) {
                a = [].concat(t, [
                    n
                ]);
            }
            (e || (e = o("JSScheduler"))).deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                r("ServerJSDefine").handleDefine.apply(null, a);
            });
        });
    }
    l.handleDefines = s;
}, 98);
__d("ScheduledServerJSWithCSS", [
    "Bootloader",
    "JSScheduler",
    "ScheduledServerJS"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t, n, a) {
        return function() {
            r("Bootloader").loadResources(a, {
                onAll: function() {
                    o("ScheduledServerJS").handle(e, t, n);
                }
            });
        };
    }
    function u(t, n, o, a) {
        const i = s(t, n, o, a);
        if (a.length > 0) {
            (e || (e = r("JSScheduler"))).scheduleImmediatePriCallback(i);
        }
    }
    l.handle = u;
}, 98);
__d("performanceNavigationStart", [
    "performance"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = typeof window !== "undefined" ? window : self;
    let u;
    if ((e || (e = r("performance"))).now) {
        if ((e || (e = r("performance"))).timing && (e || (e = r("performance"))).timing.navigationStart) {
            u = function() {
                return (e || (e = r("performance"))).timing.navigationStart;
            };
        } else {
            if (typeof s._cstart === "number") {
                u = function() {
                    return s._cstart;
                };
            } else {
                const c = Date.now();
                u = function() {
                    return c;
                };
            }
            u.isPolyfilled = true;
        }
    } else {
        const d = function() {
            return 0;
        };
        u = d;
        d.isPolyfilled = true;
    }
    l.default = u;
}, 98);
__d("bootstrapWebSession", [
    "WebSession",
    "WebSessionDefaultTimeoutMs",
    "performanceNavigationStart"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = r("performanceNavigationStart")() || e;
        if (Number.isInteger(t)) {
            return t;
        }
        return null;
    }
    let s = false;
    function u(t) {
        if (s !== true) {
            s = true;
            const n = e(t);
            if (n != null && n > 0) {
                o("WebSession").extend(n + r("WebSessionDefaultTimeoutMs"));
            }
        }
    }
    l.default = u;
}, 98);
__d("cx", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = new Error("cx: Unexpected class transformation.");
        t.stack;
        throw t;
    }
    i.default = e;
}, 66);
__d("shouldDisableAnimations", [
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 4;
    function u() {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return navigator.hardwareConcurrency != null && navigator.hardwareConcurrency < s;
        }
        return false;
    }
    l.default = u;
}, 98);
__d("maybeDisableAnimations", [
    "cx",
    "shouldDisableAnimations"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
        if (r("shouldDisableAnimations")()) {
            document.documentElement?.classList.add("_8ykn");
        }
    }
    l.default = e;
}, 98);
__d("qplAnnotationsIntServerJS", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    function l(t, n, r) {
        if (t != null) {
            if (e[t] == null) {
                e[t] = {};
            }
            if (n != null && r != null) {
                e[t][n] = r;
            }
        }
        return e;
    }
    i.default = l;
}, 66);
__d("qplAnnotationsStringServerJS", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    function l(t, n, r) {
        if (t != null) {
            if (e[t] == null) {
                e[t] = {};
            }
            if (n != null && r != null) {
                e[t][n] = r;
            }
        }
        return e;
    }
    i.default = l;
}, 66);
__d("qplTagServerJS", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [];
    function l(t) {
        if (t == null) {
            return e;
        }
        e.push(t);
    }
    i.default = l;
}, 66);
__d("UserTimingUtils.shared", [
    "UserTimingUtils",
    "asyncToGeneratorRuntime",
    "performance"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = typeof (e || (e = r("performance"))).mark === "function" && typeof (e || (e = r("performance"))).clearMarks === "function" && typeof (e || (e = r("performance"))).measure === "function" && typeof (e || (e = r("performance"))).clearMeasures === "function";
    let u = false;
    if (s && (e || (e = r("performance"))).mark != null) {
        const c = "__v3";
        const d = {};
        Object.defineProperty(d, "startTime", {
            get: function() {
                u = true;
            }
        });
        try {
            (e || (e = r("performance"))).mark(c, d);
        } catch (e) {} finally{
            (e || (e = r("performance"))).clearMarks(c);
        }
    }
    function m() {
        return u;
    }
    function p(t) {
        if (s) {
            (e || (e = r("performance"))).mark(t);
        }
    }
    function _(t, n, o = true) {
        if (s) {
            try {
                (e || (e = r("performance"))).measure(t, n);
            } catch (e) {}
            if (o) {
                (e || (e = r("performance"))).clearMarks(n);
            }
            (e || (e = r("performance"))).clearMeasures(t);
        }
    }
    function f(t) {
        if (s) {
            try {
                const n = (e || (e = r("performance"))).getEntriesByName(t, "mark");
                if (n != null && n.length > 0) {
                    return true;
                }
            } catch (e) {}
            return false;
        }
    }
    function g(t) {
        if (s) {
            try {
                (e || (e = r("performance"))).clearMarks(t);
            } catch (e) {}
        }
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const a = (e || (e = r("performance"))).now();
            const i = yield n();
            const l = e.now();
            o("UserTimingUtils").measureModern(t, {
                end: l,
                start: a
            });
            return i;
        });
        return y.apply(this, arguments);
    }
    function C(e, t, n) {}
    function b(e, t) {}
    function v(t, n, a) {
        const i = (e || (e = r("performance"))).now();
        n();
        const l = e.now();
        o("UserTimingUtils").measureModern(t, {
            end: l,
            start: i
        }, a);
    }
    l.isUserTimingV3Supported = m;
    l.measureStart = p;
    l.measureEnd = _;
    l.hasMark = f;
    l.clearMarks = g;
    l.asyncMeasure = h;
    l.measureReactCommit = C;
    l.measureReactPostCommit = b;
    l.measureCallback = v;
}, 98);
__d("UserTimingUtils", [
    "UserTimingUtils.shared",
    "performance",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(e, t, n, a) {
        if (o("UserTimingUtils.shared").isUserTimingV3Supported()) {
            let i = t;
            if (n != null) {
                let devtools = t?.detail?.devtools ?? undefined;
                devtools = devtools ?? {
                    dataType: "track-entry",
                    track: n,
                    trackGroup: a
                };
                devtools.track = n;
                const detail = t?.detail ?? {
                    devtools
                };
                i = babelHelpers.extends({}, t, {
                    detail
                });
            }
            try {
                (s || (s = r("performance"))).measure(e, i);
                s.clearMeasures(e);
            } catch (e) {}
        }
    }
    function d(e, t, n, a) {
        if (o("UserTimingUtils.shared").isUserTimingV3Supported()) {
            let i = t;
            if (n != null) {
                i = {
                    startTime: t?.startTime ?? (u || (u = r("performanceNow")))(),
                    detail: babelHelpers.extends({}, t, {
                        devtools: {
                            dataType: "track-entry",
                            track: n,
                            trackGroup: a
                        }
                    })
                };
            }
            (s || (s = r("performance"))).mark(e, i);
            s.clearMarks(e);
        }
    }
    l.measureStart = (e = o("UserTimingUtils.shared")).measureStart;
    l.measureEnd = e.measureEnd;
    l.hasMark = e.hasMark;
    l.clearMarks = e.clearMarks;
    l.asyncMeasure = e.asyncMeasure;
    l.measureReactCommit = e.measureReactCommit;
    l.measureReactPostCommit = e.measureReactPostCommit;
    l.measureModern = c;
    l.markModern = d;
}, 98);
__d("nowServerJS", [], function(t, n, r, o, a, i) {
    "use strict";
    function e() {
        if (window._nowInl && typeof window._nowInl === "function") {
            return window._nowInl();
        }
        const window_performance = window.performance;
        if (window_performance && window_performance.now && window_performance.timing && window_performance.timing.navigationStart) {
            return window_performance.now() + window_performance.timing.navigationStart;
        }
        return new Date().getTime();
    }
    i.default = e;
}, 66);
__d("qplTimingsServerJS", [
    "UserTimingUtils",
    "nowServerJS",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {};
    function u(t, n, a) {
        if (t == null) {
            return s;
        }
        if (s[t] == null) {
            s[t] = {};
        }
        if (n != null) {
            s[t][n] = a ?? r("nowServerJS")();
            o("UserTimingUtils").measureModern(n, {
                start: 0,
                end: (e || (e = r("performanceNow")))()
            }, "ServerJS");
        }
    }
    l.default = u;
}, 98);
__d("hyperionGlobals", [], function(t, n, r, o, a, i) {
    const e = typeof globalThis === "object" ? globalThis : typeof t === "object" ? t : typeof window === "object" ? window : typeof self === "object" ? self : {};
    const l = {
        getCallStack: function() {
            return [];
        },
        logger: console
    };
    function s(e) {
        l.getCallStack = e.getCallStack ?? l.getCallStack;
        l.logger = e.logger;
    }
    function u() {
        return l.logger;
    }
    function c(e, t, n) {
        if (!e) {
            const a = n?.getCallStack ?? l.getCallStack;
            const i = n?.logger ?? l.logger;
            const s = a(2);
            if (s && s.length > 0) {
                i.error(t, s);
            } else {
                i.error(t);
            }
        }
    }
    let d = {};
    function m() {
        return d;
    }
    function p(e) {
        d = e;
    }
    i.assert = c;
    i.getFlags = m;
    i.getLogger = u;
    i.globalScope = e;
    i.setAssertLoggerOptions = s;
    i.setFlags = p;
}, 66);
__d("hyperionHook", [], function(t, n, r, o, a, i) {
    const e = function() {};
    class l {
        constructor(){
            this.call = e;
        }
        hasCallback(n) {
            if (this.$1) {
                const t = this.$1;
                return t.length > 0 && (!n || t.some((e)=>e === n || e.$2 === n));
            } else {
                if (n) {
                    return this.call === n;
                }
                return this.call !== e;
            }
        }
        createMultiCallbackCall(t) {
            const e = function() {
                const e = t;
                for(let n = 0, r = e.length; n < r; ++n){
                    e[n].apply(this, arguments);
                }
            };
            return e;
        }
        add(n, r) {
            let t = n;
            if (r) {
                const o = this;
                const a = function() {
                    o.remove(a);
                    return n.apply(this, arguments);
                };
                a.$2 = n;
                t = a;
            }
            if (this.call === e) {
                this.call = t;
            } else if (this.$1) {
                this.$1.push(t);
            } else {
                this.$1 = [
                    this.call,
                    t
                ];
                this.call = this.createMultiCallbackCall(this.$1);
            }
            return n;
        }
        remove(t) {
            return this.removeIf(function(e) {
                return e === t;
            });
        }
        removeIf(n) {
            if (this.$1) {
                const t = this.$1.filter((e)=>!n(e));
                const r = this.$1.length > t.length;
                if (r) {
                    this.$1 = t;
                    this.call = this.createMultiCallbackCall(this.$1);
                }
                return r;
            } else {
                if (n(this.call)) {
                    this.call = e;
                    return true;
                }
                return false;
            }
        }
        clear() {
            if (this.call === e || !this.$1) {
                this.call = e;
            } else {
                this.$1.length = 0;
            }
        }
    }
    i.Hook = l;
}, 66);
__d("hyperionCore", [
    "Promise",
    "__debug",
    "hyperionGlobals",
    "hyperionHook"
], function(t, n, r, o, a, i, l) {
    let c;
    let d;
    const m = (()=>{
        function e(e) {
            this.status = 0;
            this.name = e;
        }
        const e_prototype = e.prototype;
        e_prototype.interceptObjectOwnProperties = function(t) {};
        return e;
    })();
    function p(e, t) {
        for(var n; e && !n;){
            n = Object.getOwnPropertyDescriptor(e, t);
            if (n) {
                n.container = e;
            }
            e = Object.getPrototypeOf(e);
        }
        return n;
    }
    function _(container, name, n) {
        try {
            Object.defineProperty(container, name, n);
        } catch (e) {}
    }
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    function g(e, t) {
        return hasOwnProperty.call(e, t);
    }
    function h(e, t, n) {
        if (!(!e || !t)) {
            const r = Object.getOwnPropertyNames(e);
            for(let a = 0, i = r.length; a < i; ++a){
                const l = r[a];
                if (!(l in t)) {
                    const s = Object.getOwnPropertyDescriptor(e, l);
                    o("hyperionGlobals").assert(s != null, `Unexpected situation, we should have own property for ${l}`);
                    try {
                        Object.defineProperty(t, l, s);
                    } catch (e) {}
                }
            }
            {
                t.toString = function() {
                    return e.toString();
                };
                if (Object.prototype.hasOwnProperty.call(e, "valueOf")) {
                    t.valueOf = function() {
                        return e.valueOf();
                    };
                }
                t.prototype = e.prototype;
                const u = Object.getOwnPropertyDescriptor(e, "name");
                try {
                    Object.defineProperty(t, "name", u);
                } catch (e) {}
            }
        }
    }
    const y = "__ext";
    const C = "__sproto";
    let b = 0;
    const v = [];
    function S(e) {
        v.push(e);
        return function() {
            const t = v.indexOf(e);
            if (t > -1) {
                v.splice(t, 1);
            }
        };
    }
    function R(e) {
        const t = Object.getOwnPropertyDescriptor(e, C);
        return t?.value;
    }
    function L(e, t) {
        Object.defineProperty(e, C, {
            value: t
        });
        return t;
    }
    const E = {};
    function k(e) {
        const t = typeof e;
        return e && (t === "object" || t === "function");
    }
    function I(e) {
        return g(e, y);
    }
    function T(e, t) {
        if (k(e) && !I(e)) {
            for(var shadowPrototype = t, r = 0; !shadowPrototype && r < v.length; ++r){
                shadowPrototype = v[r](e);
            }
            if (!shadowPrototype) {
                shadowPrototype = e[C];
            }
            if (shadowPrototype) {
                const o = {
                    virtualPropertyValues: {},
                    shadowPrototype,
                    id: b++
                };
                E.value = o;
                Object.defineProperty(e, y, E);
                shadowPrototype.interceptObject(e);
            }
        }
        return e;
    }
    function D(e, t) {
        let n = e[y];
        if (!n && t) {
            T(e);
            n = e[y];
        }
        return n;
    }
    function x(e, t) {
        const n = D(e, true);
        return n?.virtualPropertyValues[t];
    }
    function $(e, t, n) {
        const r = D(e, true);
        if (r) {
            r.virtualPropertyValues[t] = n;
        } else {
            o("hyperionGlobals").assert(!!r, "Could not get extension for the object");
        }
        return n;
    }
    const P = "__ext";
    const N = function() {};
    const M = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function(e) {
                let n = e;
                for(let r = 0, o = t.length; r < o; ++r){
                    n = t[r].call(this, n);
                }
                return n;
            };
        };
        return t;
    })((d || (d = o("hyperionHook"))).Hook);
    const w = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function() {
                let e = false;
                for(let n = 0, r = t.length; n < r; ++n){
                    const o = t[n];
                    e = o.apply(this, arguments) || e;
                }
                return e;
            };
        };
        return t;
    })(d.Hook);
    const A = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function(e) {
                let n = e;
                for(let r = 0, o = t.length; r < o; ++r){
                    n = t[r].call(this, n);
                }
                return n;
            };
        };
        return t;
    })(d.Hook);
    const F = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(d.Hook);
    const O = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.createMultiCallbackCall = function(t) {
            return function() {
                const e = [];
                for(let n = 0, r = t.length; n < r; ++n){
                    const o = t[n];
                    e.push(o.apply(this, arguments));
                }
                return function(t) {
                    let n = t;
                    for(let r = 0, o = e.length; r < o; ++r){
                        const a = e[r];
                        n = a.call(this, n);
                    }
                    return n;
                };
            };
        };
        return t;
    })(d.Hook);
    const B = ((e)=>{
        function t(t, n = N, r = false) {
            let o;
            o = e.call(this, t) || this;
            o.original = N;
            const a = o;
            o.interceptor = r ? function() {
                const e = a.dispatcherFunc.apply(this, arguments);
                return T(e);
            } : function() {
                const e = a.dispatcherFunc.apply(this, arguments);
                return e;
            };
            q(o.interceptor, o);
            o.implementation = n;
            o.dispatcherFunc = o.original;
            o.setOriginal(n);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getOriginal = function() {
            return this.original;
        };
        t_prototype.setOriginal = function(t) {
            if (this.original !== t) {
                this.original = t;
                if (!this.customFunc) {
                    this.implementation = t;
                }
                h(t, this.interceptor);
                q(t, this);
                this.updateDispatcherFunc();
            }
        };
        t_prototype.setCustom = function(t) {
            this.customFunc = t;
            this.implementation = t;
            this.updateDispatcherFunc();
        };
        t_prototype.updateDispatcherFunc = function() {
            let e = 0;
            e |= this.onBeforeCallMapper ? 8 : 0;
            e |= this.onBeforeCallObserver ? 4 : 0;
            e |= this.onAfterCallMapper ? 2 : 0;
            e |= this.onAfterCallObserver ? 1 : 0;
            e |= this.onBeforeAndAterCallMapper ? 16 : 0;
            const n = t.dispatcherCtors[e];
            o("hyperionGlobals").assert(!!n, `unhandled interceptor state ${e}`);
            this.dispatcherFunc = n(this);
        };
        t_prototype.onBeforeCallMapperAdd = function(t) {
            if (!this.onBeforeCallMapper) {
                this.onBeforeCallMapper = new M;
                this.updateDispatcherFunc();
            }
            return this.onBeforeCallMapper.add(t);
        };
        t_prototype.onBeforeCallMapperRemove = function(t) {
            let e;
            if ((e = this.onBeforeCallMapper) != null && e.remove(t)) {
                if (!this.onBeforeCallMapper.hasCallback()) {
                    this.onBeforeCallMapper = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onBeforeCallObserverAdd = function(t) {
            if (!this.onBeforeCallObserver) {
                this.onBeforeCallObserver = new w;
                this.updateDispatcherFunc();
            }
            return this.onBeforeCallObserver.add(t);
        };
        t_prototype.onBeforeCallObserverRemove = function(t) {
            let e;
            if ((e = this.onBeforeCallObserver) != null && e.remove(t)) {
                if (!this.onBeforeCallObserver.hasCallback()) {
                    this.onBeforeCallObserver = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onAfterCallMapperAdd = function(t) {
            if (!this.onAfterCallMapper) {
                this.onAfterCallMapper = new A;
                this.updateDispatcherFunc();
            }
            return this.onAfterCallMapper.add(t);
        };
        t_prototype.onAfterCallMapperRemove = function(t) {
            let e;
            if ((e = this.onAfterCallMapper) != null && e.remove(t)) {
                if (!this.onAfterCallMapper.hasCallback()) {
                    this.onAfterCallMapper = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onAfterCallObserverAdd = function(t) {
            if (!this.onAfterCallObserver) {
                this.onAfterCallObserver = new F;
                this.updateDispatcherFunc();
            }
            return this.onAfterCallObserver.add(t);
        };
        t_prototype.onAfterCallObserverRemove = function(t) {
            let e;
            if ((e = this.onAfterCallObserver) != null && e.remove(t)) {
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.onBeforeAndAfterCallMapperAdd = function(t) {
            if (!this.onBeforeAndAterCallMapper) {
                this.onBeforeAndAterCallMapper = new O;
                this.updateDispatcherFunc();
            }
            return this.onBeforeAndAterCallMapper.add(t);
        };
        t_prototype.onBeforeAndAfterCallMapperRemove = function(t) {
            let e;
            if ((e = this.onBeforeAndAterCallMapper) != null && e.remove(t)) {
                if (!this.onBeforeAndAterCallMapper.hasCallback()) {
                    this.onBeforeAndAterCallMapper = null;
                }
                this.updateDispatcherFunc();
            }
            return t;
        };
        t_prototype.getData = function(t) {
            return this.data?.[t];
        };
        t_prototype.setData = function(t, n) {
            if (!this.data) {
                this.data = {};
            }
            this.data[t] = n;
        };
        t_prototype.testAndSet = function(t) {
            const e = this.getData(t) || false;
            if (!e) {
                this.setData(t, true);
            }
            return e;
        };
        return t;
    })(m);
    B.dispatcherCtors = ((e)=>{
        e = {};
        e[0] = function(t) {
            return t.customFunc ?? t.original;
        };
        e[1] = function(t) {
            return function() {
                let e;
                e = t.implementation.apply(this, arguments);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[2] = function(t) {
            return function() {
                let e;
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                return e;
            };
        };
        e[3] = function(t) {
            return function() {
                let e;
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[4] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                }
                return e;
            };
        };
        e[5] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[6] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                }
                return e;
            };
        };
        e[7] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[8] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                return e;
            };
        };
        e[9] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[10] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                return e;
            };
        };
        e[11] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                return e;
            };
        };
        e[12] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                }
                return e;
            };
        };
        e[13] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[14] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                }
                return e;
            };
        };
        e[15] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                }
                return e;
            };
        };
        e[16] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                e = n.call(this, e);
                return e;
            };
        };
        e[17] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                t.onAfterCallObserver.call.call(this, e);
                e = n.call(this, e);
                return e;
            };
        };
        e[18] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                e = n.call(this, e);
                return e;
            };
        };
        e[19] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, arguments);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                e = n.call(this, e);
                return e;
            };
        };
        e[20] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[21] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    t.onAfterCallObserver.call.call(this, e);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[22] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[23] = function(t) {
            return function() {
                let e;
                if (!t.onBeforeCallObserver.call.apply(this, arguments)) {
                    const n = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, arguments);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                    e = n.call(this, e);
                }
                return e;
            };
        };
        e[24] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = r.call(this, e);
                return e;
            };
        };
        e[25] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                t.onAfterCallObserver.call.call(this, e);
                e = r.call(this, e);
                return e;
            };
        };
        e[26] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                e = r.call(this, e);
                return e;
            };
        };
        e[27] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                e = t.implementation.apply(this, n);
                e = t.onAfterCallMapper.call.call(this, e);
                t.onAfterCallObserver.call.call(this, e);
                e = r.call(this, e);
                return e;
            };
        };
        e[28] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        e[29] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    t.onAfterCallObserver.call.call(this, e);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        e[30] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        e[31] = function(t) {
            return function() {
                let e;
                const n = t.onBeforeCallMapper.call.call(this, arguments);
                if (!t.onBeforeCallObserver.call.apply(this, n)) {
                    const r = t.onBeforeAndAterCallMapper.call.call(this, arguments);
                    e = t.implementation.apply(this, n);
                    e = t.onAfterCallMapper.call.call(this, e);
                    t.onAfterCallObserver.call.call(this, e);
                    e = r.call(this, e);
                }
                return e;
            };
        };
        return e;
    })();
    function W(e) {
        return e?.[P];
    }
    function q(e, t) {
        Object.defineProperty(e, P, {
            value: t,
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
    function U(e, t = false, n, r = "_annonymous") {
        o("hyperionGlobals").assert(typeof e === "function", "cannot intercept non-function input");
        let a = W(e);
        if (!a) {
            a = n ? new n(r, e, t) : new B(r, e, t);
        }
        return a;
    }
    const V = ((e)=>{
        function t(t, n, r = false, o) {
            let a;
            a = e.call(this, t, undefined, r) || this;
            a.interceptProperty(n.targetPrototype, false, o);
            if (a.status !== 1) {
                n.addPendingPropertyInterceptor(a);
            }
            return a;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.interceptProperty = function(t, n, r) {
            r = r ?? p(t, this.name);
            if (n) {
                let e;
                if (r) {
                    if (r.writable && (r.value || Object.prototype.hasOwnProperty.call(r, "value"))) {
                        e = r.value;
                        delete r.value;
                        delete r.writable;
                        r.get = function() {
                            return e;
                        };
                        r.set = function(t) {
                            e = t;
                        };
                        r.configurable = true;
                    }
                } else {
                    r = {
                        get: function() {
                            return e;
                        },
                        set: function(n) {
                            e = n;
                        },
                        enumerable: true,
                        configurable: true,
                        container: t
                    };
                }
            }
            if (r) {
                if (r.value) {
                    this.setOriginal(r.value);
                    r.value = this.interceptor;
                    _(r.container, this.name, r);
                    this.status = 1;
                } else if (r.get || r.set) {
                    const o = this;
                    const a = r;
                    const { get, set } = a;
                    if (get) {
                        r.get = function() {
                            const e = get.call(this);
                            if (typeof e !== "function") {
                                return e;
                            }
                            if (e !== o.interceptor) {
                                o.setOriginal(e);
                            }
                            return o.interceptor;
                        };
                        q(r.get, o);
                    }
                    if (set) {
                        r.set = function(e) {
                            set.call(this, o.interceptor);
                            if (e !== o.interceptor && e !== o.original) {
                                o.setOriginal(e);
                            }
                            return o.interceptor;
                        };
                        q(r.set, o);
                    }
                    _(r.container, this.name, r);
                    this.status = r.configurable ? 1 : 4;
                } else {
                    if (Object.prototype.hasOwnProperty.call(r, "value")) {
                        this.status = 1;
                    }
                }
            } else {
                this.status = 2;
            }
        };
        t_prototype.interceptObjectOwnProperties = function(t) {
            this.interceptProperty(t, true);
        };
        return t;
    })(B);
    function H(e, t) {
        const n = p(t.targetPrototype, e);
        let r;
        if (n) {
            r = W(n.value);
            if (!r) {
                const a = W(n.get);
                const i = W(n.set);
                o("hyperionGlobals").assert(!(a && i) || a === i, `Getter/Setter of method ${e} have differnt interceptors`);
                r = a ?? i;
            }
            n.interceptor = r;
        }
        return n;
    }
    function G(e, t, n = false, r) {
        const a = H(e, t);
        return a?.interceptor ?? new (r ?? V)(e, t, n, a);
    }
    function z(e) {
        const t = function(...args) {
            let t;
            switch(args.length){
                case 0:
                    t = new e;
                    break;
                case 1:
                    t = new e(args[0]);
                    break;
                case 2:
                    t = new e(args[0], args[1]);
                    break;
                case 3:
                    t = new e(args[0], args[1], args[2]);
                    break;
                case 4:
                    t = new e(args[0], args[1], args[2], args[3]);
                    break;
                case 5:
                    t = new e(args[0], args[1], args[2], args[3], args[4]);
                    break;
                case 6:
                    t = new e(args[0], args[1], args[2], args[3], args[4], args[5]);
                    break;
                default:
                    throw "Unsupported case!";
            }
            return t;
        };
        h(e, t);
        return t;
    }
    const j = ((e)=>{
        function t(t, n) {
            let r;
            r = e.call(this, t, n, true) || this;
            r.ctorInterceptor = null;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setOriginal = function(n) {
            this.ctorInterceptor = z(n);
            return e.prototype.setOriginal.call(this, this.ctorInterceptor);
        };
        return t;
    })(B);
    function K(e, t = "_annonymousCtor") {
        return U(e, true, j, t);
    }
    const Q = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t, n, true, r) || this;
            o.ctorInterceptor = null;
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.setOriginal = function(n) {
            this.ctorInterceptor = z(n);
            return e.prototype.setOriginal.call(this, this.ctorInterceptor);
        };
        return t;
    })(V);
    function X(e, t) {
        const r = H(e, t);
        return r?.interceptor ?? new Q(e, t, r);
    }
    function Y(e, extension) {
        if (extension != null && extension.useCaseInsensitivePropertyName) {
            return `${e}`.toLocaleLowerCase();
        }
        return e;
    }
    class J {
        constructor(e, t){
            this.onBeforInterceptObj = new (d || (d = o("hyperionHook"))).Hook;
            this.onAfterInterceptObj = new d.Hook;
            this.targetPrototype = e;
            this.parentShadowPrototype = t;
            this.extension = Object.create(t?.extension ?? null);
            if (this.parentShadowPrototype) {
                for(var r = this.targetPrototype, a = this.parentShadowPrototype.targetPrototype, i = false; r && !i;){
                    i = r === a;
                    r = Object.getPrototypeOf(r);
                }
                o("hyperionGlobals").assert(i, "Invalid prototype chain");
            }
        }
        callOnBeforeInterceptObject(t) {
            let n;
            this.parentShadowPrototype?.callOnBeforeInterceptObject(t);
            if ((n = this.onBeforInterceptObj) != null) {
                n.call(t);
            }
        }
        callOnAfterInterceptObject(t) {
            let n;
            this.parentShadowPrototype?.callOnAfterInterceptObject(t);
            if ((n = this.onAfterInterceptObj) != null) {
                n.call(t);
            }
        }
        interceptObjectItself(t) {
            this.parentShadowPrototype?.interceptObjectItself(t);
            if (this.pendingPropertyInterceptors) {
                for (const n of this.pendingPropertyInterceptors){
                    n.interceptObjectOwnProperties(t);
                }
            }
        }
        interceptObject(t) {
            this.callOnBeforeInterceptObject(t);
            this.interceptObjectItself(t);
            this.callOnAfterInterceptObject(t);
        }
        addPendingPropertyInterceptor(t) {
            if (!this.pendingPropertyInterceptors) {
                this.pendingPropertyInterceptors = [];
            }
            this.pendingPropertyInterceptors.push(t);
        }
        getVirtualProperty(t) {
            const extension = this.extension;
            const n = Y(t, extension);
            return extension[n];
        }
        setVirtualProperty(t, n) {
            const extension = this.extension;
            const r = Y(t, extension);
            extension[r] = n;
            return n;
        }
        removeVirtualPropery(t, n) {
            const extension = this.extension;
            const r = Y(t, extension);
            if (extension[r] === n) {
                delete extension[r];
            } else {
                `${t}`;
            }
        }
    }
    const Z = (()=>{
        function e() {}
        const e_prototype = e.prototype;
        e_prototype.getExports = function(t) {
            return null;
        };
        e_prototype.updateExports = function(t, n, r, o) {};
        return e;
    })();
    const ee = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.$WebpackModuleRuntime1 = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getExports = function(t) {
            const e = this;
            const o = new RegExp(`${t}(?:/index)?[.]js\$`);
            const a = Object.keys(this.$WebpackModuleRuntime1).filter((e)=>o.test(e)).map((t)=>e.$WebpackModuleRuntime1[t]);
            return a[0]?.exports ?? null;
        };
        return t;
    })(Z);
    const te = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.$MetaModuleRuntime1 = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.updateExports = function(t, n, r, o) {
            if (r.default != null) {
                this.$MetaModuleRuntime1.modulesMap[t].defaultExport = n.default;
            }
        };
        return t;
    })(Z);
    const ne = (()=>{
        if (typeof n === "function") {
            try {
                const e = n("__debug");
                if (typeof e === "object") {
                    return new te(e);
                }
            } catch (e) {}
        }
        if (typeof __webpack_module_cache__ === "object") {
            return new ee(__webpack_module_cache__);
        }
        return new Z;
    })();
    function interceptModuleExports(e, t, n, r) {
        let o = t;
        const a = ne.getExports(e);
        if (a && a !== o) {
            o = a;
        }
        const i = new J(o, null);
        const l = {};
        for (const u of n){
            l[u] = G(u, i);
        }
        ne.updateExports(e, t, l, r);
        validateModuleInterceptor(e, t, l, r);
        return l;
    }
    function validateModuleInterceptor(e, t, n, r) {
        if (Array.isArray(r)) {
            for(let a = Object.keys(n), i = 0; i < a.length; ++i){
                const l = a[i];
                if (t[l] !== n[l].interceptor) {
                    r.push(l);
                }
            }
            o("hyperionGlobals").assert(r.length === 0, r.map((t)=>`could not intercept ${e}.${t}`).join("\n"));
        }
    }
    const ae = Object.freeze({
        __proto__: null,
        interceptModuleExports,
        validateModuleInterceptor
    });
    const ie = R(o("hyperionGlobals").globalScope) ?? new J(o("hyperionGlobals").globalScope, null);
    const setInterval = G("setInterval", ie);
    const setTimeout = G("setTimeout", ie);
    const IPromiseConstructor = X("Promise", ie);
    const ce = Object.freeze({
        __proto__: null,
        IPromiseConstructor,
        setInterval,
        setTimeout
    });
    const de = Object.getPrototypeOf((c || (c = n("Promise"))).resolve());
    const IPromisePrototype = R(de) ?? L(de, new J(de, null));
    const constructor = IPromiseConstructor;
    const then = G("then", IPromisePrototype);
    const Catch = G("catch", IPromisePrototype);
    const Finally = G("finally", IPromisePrototype);
    const he = R(c || (c = n("Promise"))) ?? L(c || (c = n("Promise")), new J(c || (c = n("Promise")), null));
    const all = G("all", he);
    const allSettled = G("allSettled", he);
    const any = G("any", he);
    const race = G("race", he);
    const reject = G("reject", he);
    const resolve = G("resolve", he);
    const Le = Object.freeze({
        __proto__: null,
        Catch,
        Finally,
        IPromisePrototype,
        all,
        allSettled,
        any,
        constructor,
        race,
        reject,
        resolve,
        then
    });
    const Ee = "__attributeInterceptor";
    const ke = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t) || this;
            o.getter = new B(t, n);
            o.setter = new B(t, r);
            o.getter.setData(Ee, o);
            o.setter.setData(Ee, o);
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(m);
    const Ie = ((e)=>{
        function t(t, n, r) {
            let o;
            o = e.call(this, t) || this;
            o.interceptProperty(n.targetPrototype, false, r);
            if (o.status !== 1) {
                n.addPendingPropertyInterceptor(o);
            }
            return o;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.interceptProperty = function(t, n, r) {
            r = r ?? p(t, this.name);
            if (n) {
                let e;
                const o = function() {
                    return e;
                };
                const set = function(n) {
                    e = n;
                };
                if (r) {
                    if (r.value && r.writable) {
                        e = r.value;
                        delete r.value;
                        delete r.writable;
                        r.get = o;
                        r.set = set;
                        r.configurable = true;
                    }
                } else {
                    r = {
                        get: o,
                        set,
                        enumerable: true,
                        configurable: true,
                        container: t
                    };
                }
            }
            if (r) {
                if (r.get || r.set) {
                    const i = r;
                    const { get, set } = i;
                    if (get) {
                        this.getter.setOriginal(get);
                        r.get = this.getter.interceptor;
                    }
                    if (set) {
                        this.setter.setOriginal(set);
                        r.set = this.setter.interceptor;
                    }
                    _(r.container, this.name, r);
                    this.status = r.configurable ? 1 : 4;
                } else {
                    if (r.value) {
                        `${this.name}`;
                        this.status = 3;
                    }
                }
            } else {
                this.status = 2;
            }
        };
        t_prototype.interceptObjectOwnProperties = function(t) {
            return this.interceptProperty(t, true);
        };
        return t;
    })(ke);
    function Te(e, t) {
        const n = p(t.targetPrototype, e);
        if (n) {
            const r = W(n.get);
            const a = W(n.set);
            const i = r?.getData(Ee);
            const l = a?.getData(Ee);
            o("hyperionGlobals").assert(!(i && l) || i === l, `Getter/Setter of attribute ${e} have differnt interceptors`);
            n.interceptor = i ?? l;
        }
        return n;
    }
    function De(e, t, n) {
        const o = Te(e, t);
        return o?.interceptor ?? new n(e, t, o);
    }
    function xe(e, t) {
        return De(e, t, Ie);
    }
    l.AttributeInterceptor = Ie;
    l.AttributeInterceptorBase = ke;
    l.Catch = Catch;
    l.IGlobalThis = ce;
    l.IPromise = Le;
    l.IPromisePrototype = IPromisePrototype;
    l.IRequire = ae;
    l.ShadowPrototype = J;
    l.all = all;
    l.allSettled = allSettled;
    l.any = any;
    l.constructor = constructor;
    l.getFunctionInterceptor = W;
    l.getObjectExtension = D;
    l.getOwnShadowPrototypeOf = R;
    l.getVirtualPropertyValue = x;
    l.intercept = T;
    l.interceptAttribute = xe;
    l.interceptAttributeBase = De;
    l.interceptConstructor = K;
    l.interceptConstructorMethod = X;
    l.interceptFunction = U;
    l.interceptMethod = G;
    l.interceptModuleExports = interceptModuleExports;
    l.race = race;
    l.registerShadowPrototype = L;
    l.registerShadowPrototypeGetter = S;
    l.reject = reject;
    l.resolve = resolve;
    l.setInterval = setInterval;
    l.setTimeout = setTimeout;
    l.setVirtualPropertyValue = $;
    l.then = then;
    l.validateModuleInterceptor = validateModuleInterceptor;
}, 98);
__d("hyperionDOM", [
    "hyperionCore",
    "hyperionGlobals"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Map;
    const u = new Map;
    (e || (e = o("hyperionCore"))).registerShadowPrototypeGetter(function(e) {
        if (e instanceof Node) {
            return u.get(e.nodeName) ?? s.get(e.nodeType);
        }
        return null;
    });
    const c = ((t)=>{
        function n(n, r, a) {
            let l;
            let c = a?.targetPrototype ?? n?.prototype;
            if (!c && a) {
                const { sampleObject, nodeName, nodeType } = a;
                let f = sampleObject;
                if (!f && nodeType) {
                    switch(nodeType){
                        case window.document.DOCUMENT_NODE:
                            f = window.document;
                            break;
                        case window.document.ELEMENT_NODE:
                            f = head;
                            break;
                        default:
                            o("hyperionGlobals").assert(false, `Unsupported and unexpected nodeType ${nodeType}`);
                            break;
                    }
                }
                if (!f && nodeName) {
                    f = window.document.createElement(nodeName);
                }
                if (f) {
                    c = Object.getPrototypeOf(f);
                }
            }
            o("hyperionGlobals").assert(c && typeof c === "object", "Cannot create shadow prototype for undefined");
            l = t.call(this, c, r) || this;
            if (a) {
                const { nodeName, nodeType } = a;
                if (nodeName) {
                    u.set(nodeName.toUpperCase(), l);
                }
                if (nodeType) {
                    s.set(nodeType, l);
                }
            }
            if (a?.registerOnPrototype && c) {
                try {
                    (e || (e = o("hyperionCore"))).registerShadowPrototype(c, l);
                } catch (e) {}
            }
            return l;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(e.ShadowPrototype);
    var head = window.document.head;
    function m(t, n) {
        const a = (e || (e = o("hyperionCore"))).getObjectExtension(t, true)?.shadowPrototype;
        if (a) {
            return a.getVirtualProperty(n);
        }
        return null;
    }
    const IEventPrototype = new c(Event, null, {
        sampleObject: new Event("tmp"),
        registerOnPrototype: true
    });
    const stopPropagation = e.interceptMethod("stopPropagation", IEventPrototype);
    const f = Object.freeze({
        __proto__: null,
        IEventPrototype,
        stopPropagation
    });
    const IEventTargetPrototype = new c(EventTarget, null, {
        sampleObject: head
    });
    const addEventListener = e.interceptMethod("addEventListener", IEventTargetPrototype);
    const dispatchEvent = e.interceptMethod("dispatchEvent", IEventTargetPrototype);
    const removeEventListener = e.interceptMethod("removeEventListener", IEventTargetPrototype);
    const b = Object.freeze({
        __proto__: null,
        IEventTargetPrototype,
        addEventListener,
        dispatchEvent,
        removeEventListener
    });
    const INodePrototype = new c(Node, IEventTargetPrototype, {
        sampleObject: head
    });
    const appendChild = e.interceptMethod("appendChild", INodePrototype);
    const cloneNode = e.interceptMethod("cloneNode", INodePrototype, true);
    const insertBefore = e.interceptMethod("insertBefore", INodePrototype);
    const removeChild = e.interceptMethod("removeChild", INodePrototype);
    const replaceChild = e.interceptMethod("replaceChild", INodePrototype);
    const I = Object.freeze({
        __proto__: null,
        INodePrototype,
        appendChild,
        cloneNode,
        insertBefore,
        removeChild,
        replaceChild
    });
    const ICSSStyleDeclarationPrototype = new c(CSSStyleDeclaration, null, {
        sampleObject: head.style
    });
    ICSSStyleDeclarationPrototype.extension.useCaseInsensitivePropertyName = true;
    const getPropertyValue = e.interceptMethod("getPropertyValue", ICSSStyleDeclarationPrototype);
    const removeProperty = e.interceptMethod("removeProperty", ICSSStyleDeclarationPrototype);
    const setProperty = e.interceptMethod("setProperty", ICSSStyleDeclarationPrototype);
    const P = Object.freeze({
        __proto__: null,
        ICSSStyleDeclarationPrototype,
        getPropertyValue,
        removeProperty,
        setProperty
    });
    const N = new c(Attr, INodePrototype, {
        sampleObject: head.attributes[0],
        nodeType: document.ATTRIBUTE_NODE
    });
    const M = e.interceptAttribute("value", N);
    function w() {
        M.getter.setCustom(function() {
            const e = this;
            const e_ownerElement = e.ownerElement;
            if (e_ownerElement) {
                const n = m(e_ownerElement, e.name);
                if (n) {
                    const r = n.getRawValue(e_ownerElement);
                    if (r != null) {
                        return r;
                    }
                }
            }
            return M.getter.getOriginal().call(e);
        });
        M.setter.setCustom(function(e) {
            const t = this;
            const t_ownerElement = t.ownerElement;
            if (t_ownerElement) {
                const r = m(t_ownerElement, t.name);
                if (r) {
                    return r.setRawValue(t_ownerElement, e);
                }
            }
            return M.setter.getOriginal().call(t, e);
        });
    }
    const A = new c(Element, INodePrototype, {
        sampleObject: head,
        nodeType: document.ELEMENT_NODE
    });
    A.extension.useCaseInsensitivePropertyName = true;
    const getAttribute = e.interceptMethod("getAttribute", A);
    const getAttributeNS = e.interceptMethod("getAttributeNS", A);
    const setAttribute = e.interceptMethod("setAttribute", A);
    const setAttributeNS = e.interceptMethod("setAttributeNS", A);
    const setAttributeNode = e.interceptMethod("setAttributeNode", A);
    const setAttributeNodeNS = e.interceptMethod("setAttributeNodeNS", A);
    function V() {
        getAttribute.setCustom(function(e) {
            const t = m(this, e);
            if (t) {
                const n = t.getRawValue(this);
                if (n !== null) {
                    return n;
                }
            }
            return getAttribute.getOriginal().apply(this, arguments);
        });
        setAttribute.setCustom(function(e, t) {
            const n = m(this, e);
            if (n) {
                return n.setRawValue(this, t);
            }
            return setAttribute.getOriginal().apply(this, arguments);
        });
        getAttributeNS.setCustom(function(e, t) {
            const n = m(this, t);
            if (n) {
                const r = n.getRawValue(this);
                if (r !== null) {
                    return r;
                }
            }
            return getAttributeNS.getOriginal().apply(this, arguments);
        });
        setAttributeNS.setCustom(function(e, t, n) {
            const r = m(this, t);
            if (r) {
                return r.setRawValue(this, n);
            }
            return setAttributeNS.getOriginal().apply(this, arguments);
        });
        function e(e) {
            return function(t) {
                let n;
                const r = !t.ownerElement;
                const o = m(this, t.name);
                if (r && o) {
                    const a = t.value;
                    n = e.call(this, t);
                    o.setRawValue(this, a);
                } else {
                    n = e.call(this, t);
                }
                return n;
            };
        }
        setAttributeNode.setCustom(e(setAttributeNode.getOriginal()));
        setAttributeNodeNS.setCustom(e(setAttributeNodeNS.getOriginal()));
    }
    class H {
        constructor(e, t){
            this.rawValue = e;
            this.processedValue = t;
        }
        getRawValue(t) {
            return this.rawValue.getter.interceptor.call(t);
        }
        setRawValue(t, n) {
            return this.rawValue.setter.interceptor.call(t, n);
        }
        getProcessedValue(t) {
            return this.processedValue.getter.interceptor.call(t);
        }
        setProcessedValue(t, n) {
            return this.processedValue.setter.interceptor.call(t, n);
        }
    }
    let G = function() {
        w();
        V();
        G = function() {};
    };
    const z = ((t)=>{
        function n(n, r, a) {
            let i;
            i = t.call(this, n, r, a) || this;
            i.raw = new (e || (e = o("hyperionCore"))).AttributeInterceptorBase(n, function() {
                return getAttribute.getOriginal().call(this, n);
            }, function(e) {
                return setAttribute.getOriginal().call(this, n, e);
            });
            A.setVirtualProperty(n, new H(i.raw, i));
            G();
            return i;
        }
        babelHelpers.inheritsLoose(n, t);
        return n;
    })(e.AttributeInterceptor);
    function j(t, n) {
        return (e || (e = o("hyperionCore"))).interceptAttributeBase(t, n, z);
    }
    const IElementtPrototype = A;
    const after = e.interceptMethod("after", IElementtPrototype);
    const append = e.interceptMethod("append", IElementtPrototype);
    const before = e.interceptMethod("before", IElementtPrototype);
    const getAttributeNames = e.interceptMethod("getAttributeNames", IElementtPrototype);
    const getAttributeNode = e.interceptMethod("getAttributeNode", IElementtPrototype, true);
    const getAttributeNodeNS = e.interceptMethod("getAttributeNodeNS", IElementtPrototype, true);
    const getBoundingClientRect = e.interceptMethod("getBoundingClientRect", IElementtPrototype);
    const getClientRects = e.interceptMethod("getClientRects", IElementtPrototype);
    const getElementsByClassName = e.interceptMethod("getElementsByClassName", IElementtPrototype);
    const getElementsByTagName = e.interceptMethod("getElementsByTagName", IElementtPrototype);
    const getElementsByTagNameNS = e.interceptMethod("getElementsByTagNameNS", IElementtPrototype);
    const hasAttribute = e.interceptMethod("hasAttribute", IElementtPrototype);
    const hasAttributeNS = e.interceptMethod("hasAttributeNS", IElementtPrototype);
    const hasAttributes = e.interceptMethod("hasAttributes", IElementtPrototype);
    const insertAdjacentElement = e.interceptMethod("insertAdjacentElement", IElementtPrototype);
    const insertAdjacentHTML = e.interceptMethod("insertAdjacentHTML", IElementtPrototype);
    const insertAdjacentText = e.interceptMethod("insertAdjacentText", IElementtPrototype);
    const prepend = e.interceptMethod("prepend", IElementtPrototype);
    const remove = e.interceptMethod("remove", IElementtPrototype);
    const removeAttribute = e.interceptMethod("removeAttribute", IElementtPrototype);
    const removeAttributeNode = e.interceptMethod("removeAttributeNode", IElementtPrototype);
    const removeAttributeNS = e.interceptMethod("removeAttributeNS", IElementtPrototype);
    const replaceChildren = e.interceptMethod("replaceChildren", IElementtPrototype);
    const replaceWith = e.interceptMethod("replaceWith", IElementtPrototype);
    const toggleAttribute = e.interceptMethod("toggleAttribute", IElementtPrototype);
    const be = j("id", IElementtPrototype);
    const innerHTML = e.interceptAttribute("innerHTML", IElementtPrototype);
    const Se = Object.freeze({
        __proto__: null,
        IElementtPrototype,
        after,
        append,
        before,
        getAttribute,
        getAttributeNS,
        getAttributeNames,
        getAttributeNode,
        getAttributeNodeNS,
        getBoundingClientRect,
        getClientRects,
        getElementsByClassName,
        getElementsByTagName,
        getElementsByTagNameNS,
        hasAttribute,
        hasAttributeNS,
        hasAttributes,
        id: be,
        innerHTML,
        insertAdjacentElement,
        insertAdjacentHTML,
        insertAdjacentText,
        prepend,
        remove,
        removeAttribute,
        removeAttributeNS,
        removeAttributeNode,
        replaceChildren,
        replaceWith,
        setAttribute,
        setAttributeNS,
        setAttributeNode,
        setAttributeNodeNS,
        toggleAttribute
    });
    const IHTMLElementtPrototype = new c(HTMLElement, IElementtPrototype, {
        sampleObject: head,
        nodeType: document.ELEMENT_NODE
    });
    const style = e.interceptAttribute("style", IHTMLElementtPrototype);
    const Ee = Object.freeze({
        __proto__: null,
        IHTMLElementtPrototype,
        style
    });
    const IHTMLInputElementPrototype = new c(HTMLInputElement, IHTMLElementtPrototype, {
        sampleObject: document.createElement("input"),
        nodeType: document.ELEMENT_NODE
    });
    const checked = e.interceptAttribute("checked", IHTMLInputElementPrototype);
    const Te = Object.freeze({
        __proto__: null,
        IHTMLInputElementPrototype,
        checked
    });
    const De = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(e.AttributeInterceptor);
    function xe(t, n) {
        return (e || (e = o("hyperionCore"))).interceptAttributeBase(t, n, De);
    }
    const IWindowPrototype = new c(Window, IEventTargetPrototype, {
        targetPrototype: window,
        registerOnPrototype: true
    });
    const fetch = e.interceptMethod("fetch", IWindowPrototype);
    const requestAnimationFrame = e.interceptMethod("requestAnimationFrame", IWindowPrototype);
    const requestIdleCallback = e.interceptMethod("requestIdleCallback", IWindowPrototype);
    const IntersectionObserver = e.interceptConstructorMethod("IntersectionObserver", IWindowPrototype);
    const MutationObserver = e.interceptConstructorMethod("MutationObserver", IWindowPrototype);
    const onerror = xe("onerror", IWindowPrototype);
    const ondevicemotion = xe("ondevicemotion", IWindowPrototype);
    const ondeviceorientation = xe("ondeviceorientation", IWindowPrototype);
    const onorientationchange = xe("onorientationchange", IWindowPrototype);
    const qe = Object.freeze({
        __proto__: null,
        IWindowPrototype,
        IntersectionObserver,
        MutationObserver,
        fetch,
        ondevicemotion,
        ondeviceorientation,
        onerror,
        onorientationchange,
        requestAnimationFrame,
        requestIdleCallback
    });
    const IHistoryPrototype = new c(History, null, {
        sampleObject: window.history,
        registerOnPrototype: true
    });
    const back = e.interceptMethod("back", IHistoryPrototype);
    const forward = e.interceptMethod("forward", IHistoryPrototype);
    const go = e.interceptMethod("go", IHistoryPrototype);
    const pushState = e.interceptMethod("pushState", IHistoryPrototype);
    const replaceState = e.interceptMethod("replaceState", IHistoryPrototype);
    const Ke = Object.freeze({
        __proto__: null,
        IHistoryPrototype,
        back,
        forward,
        go,
        pushState,
        replaceState
    });
    const Qe = new c(XMLHttpRequest, IEventTargetPrototype, {
        sampleObject: new XMLHttpRequest,
        registerOnPrototype: true
    });
    const Xe = e.interceptConstructorMethod("XMLHttpRequest", IWindowPrototype);
    const Ye = e.interceptMethod("open", Qe);
    const Je = e.interceptMethod("send", Qe);
    const Ze = xe("onabort", Qe);
    const et = xe("onerror", Qe);
    const tt = xe("onload", Qe);
    const nt = xe("onloadend", Qe);
    const rt = xe("onloadstart", Qe);
    const ot = xe("onprogress", Qe);
    const at = xe("readystatechange", Qe);
    const it = xe("ontimeout", Qe);
    l.ICSSStyleDeclaration = P;
    l.IElement = Se;
    l.IElementtPrototype = IElementtPrototype;
    l.IEvent = f;
    l.IEventTarget = b;
    l.IHTMLElement = Ee;
    l.IHTMLInputElement = Te;
    l.IHistory = Ke;
    l.INode = I;
    l.IWindow = qe;
    l.addEventListener = addEventListener;
    l.after = after;
    l.append = append;
    l.appendChild = appendChild;
    l.before = before;
    l.checked = checked;
    l.constructor = Xe;
    l.fetch = fetch;
    l.innerHTML = innerHTML;
    l.insertAdjacentElement = insertAdjacentElement;
    l.insertBefore = insertBefore;
    l.interceptElementAttribute = j;
    l.onabort = Ze;
    l.onerror = et;
    l.onload = tt;
    l.onloadend = nt;
    l.onloadstart = rt;
    l.onprogress = ot;
    l.ontimeout = it;
    l.open = Ye;
    l.prepend = prepend;
    l.pushState = pushState;
    l.readystatechange = at;
    l.remove = remove;
    l.removeChild = removeChild;
    l.removeEventListener = removeEventListener;
    l.replaceChild = replaceChild;
    l.replaceChildren = replaceChildren;
    l.replaceState = replaceState;
    l.replaceWith = replaceWith;
    l.requestAnimationFrame = requestAnimationFrame;
    l.requestIdleCallback = requestIdleCallback;
    l.send = Je;
    l.stopPropagation = stopPropagation;
}, 98);
__d("Hyperion", [
    "Env",
    "ExecutionEnvironment",
    "hyperionCore",
    "hyperionDOM"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    if ((u || (u = r("ExecutionEnvironment"))).isInBrowser && !(u || (u = r("ExecutionEnvironment"))).isInWorker && (c || (c = r("Env"))).loadHyperion === true) {
        (e || (e = o("hyperionCore"))).intercept(t, (s || (s = o("hyperionDOM"))).IWindow.IWindowPrototype);
    }
}, 34);
__d("cancelAnimationFramePolyfill", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = t.__fbNativeCancelAnimationFrame || t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t.msCancelAnimationFrame || t.clearTimeout;
    i.default = e;
}, 66);
__d("cancelAnimationFrame", [
    "cancelAnimationFramePolyfill"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        r("cancelAnimationFramePolyfill")(e);
    }
    l.default = e;
}, 98);
__d("TimerStorage", [], function(t, n, r, o, a, i) {
    const e = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    const l = {};
    Object.keys(e).forEach((e)=>l[e] = {});
    const s = babelHelpers.extends({}, e, {
        set: function(t, n) {
            l[t][n] = true;
        },
        unset: function(t, n) {
            delete l[t][n];
        },
        clearAll: function(t, n) {
            Object.keys(l[t]).forEach(n);
            l[t] = {};
        },
        getStorages: function() {
            return {};
        }
    });
    i.default = s;
}, 66);
__d("requestAnimationFrameAcrossTransitions", [
    "TimeSlice",
    "requestAnimationFramePolyfill"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = r("TimeSlice").guard(e, "requestAnimationFrame", {
            propagationType: r("TimeSlice").PropagationType.CONTINUATION
        });
        return r("requestAnimationFramePolyfill")(t);
    }
    l.default = e;
}, 98);
__d("requestAnimationFrame", [
    "TimeSlice",
    "TimerStorage",
    "requestAnimationFrameAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        function t(t) {
            r("TimerStorage").unset(r("TimerStorage").ANIMATION_FRAME, n);
            e(t);
        }
        r("TimeSlice").copyGuardForWrapper(e, t);
        t.__originalCallback = e;
        var n = r("requestAnimationFrameAcrossTransitions")(t);
        r("TimerStorage").set(r("TimerStorage").ANIMATION_FRAME, n);
        return n;
    }
    l.default = e;
}, 98);
__d("setInterval", [
    "cr:7388"
], function(t, n, r, o, a, i, l) {
    l.default = n("cr:7388");
}, 98);
__d("replaceNativeTimer", [
    "Hyperion",
    "cancelAnimationFrame",
    "clearInterval",
    "clearTimeout",
    "requestAnimationFrame",
    "setInterval",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    n("Hyperion");
    t.__fbNativeSetTimeout = t.setTimeout;
    t.__fbNativeClearTimeout = t.clearTimeout;
    t.__fbNativeSetInterval = t.setInterval;
    t.__fbNativeClearInterval = t.clearInterval;
    t.__fbNativeRequestAnimationFrame = t.requestAnimationFrame;
    t.__fbNativeCancelAnimationFrame = t.cancelAnimationFrame;
    r("setTimeout").nativeBackup = t.setTimeout;
    r("clearTimeout").nativeBackup = t.clearTimeout;
    r("setInterval").nativeBackup = t.setInterval;
    r("clearInterval").nativeBackup = t.clearInterval;
    r("requestAnimationFrame").nativeBackup = t.requestAnimationFrame;
    r("cancelAnimationFrame").nativeBackup = t.cancelAnimationFrame;
    t.setTimeout = r("setTimeout");
    t.clearTimeout = r("clearTimeout");
    t.setInterval = r("setInterval");
    t.clearInterval = r("clearInterval");
    t.requestAnimationFrame = r("requestAnimationFrame");
    t.cancelAnimationFrame = r("cancelAnimationFrame");
    function e() {}
    l.default = e;
}, 98);
__d("CometPreludeCritical", [
    "Bootloader",
    "CometPreludeCriticalRequireConds",
    "CometResourceScheduler",
    "DeferredJSResourceScheduler",
    "Env",
    "HasteResponse",
    "HasteSupportData",
    "JSScheduler",
    "ReactDOMServerExternalRuntime",
    "Run",
    "ScheduledApplyEach",
    "ScheduledServerJS",
    "ScheduledServerJSDefine",
    "ScheduledServerJSWithCSS",
    "ServerJS",
    "bootstrapWebSession",
    "maybeDisableAnimations",
    "qplAnnotationsIntServerJS",
    "qplAnnotationsStringServerJS",
    "qplTagServerJS",
    "qplTimingsServerJS",
    "replaceNativeTimer"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    let l;
    n("Bootloader");
    n("CometPreludeCriticalRequireConds");
    n("CometResourceScheduler");
    n("DeferredJSResourceScheduler");
    if (!e) {
        e = n("Env");
    }
    n("HasteResponse");
    n("HasteSupportData");
    if (!l) {
        l = n("JSScheduler");
    }
    n("Run");
    n("ScheduledApplyEach");
    n("ScheduledServerJS");
    n("ScheduledServerJSWithCSS");
    n("ScheduledServerJSDefine");
    n("ServerJS");
    n("bootstrapWebSession");
    n("replaceNativeTimer");
    n("qplTimingsServerJS");
    n("qplTagServerJS");
    n("qplAnnotationsIntServerJS");
    n("qplAnnotationsStringServerJS");
    n("maybeDisableAnimations");
    n("ReactDOMServerExternalRuntime");
}, null);
__d("ErrorGuardState", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").ErrorGuardState;
}, 98);
__d("ErrorNormalizeUtils", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").ErrorNormalizeUtils;
}, 98);
__d("ErrorSerializer", [
    "fb-error"
], function(t, n, r, o, a, i, l) {
    "use strict";
    l.default = r("fb-error").ErrorSerializer;
}, 98);
__d("ErrorUtils", [
    "ErrorGuard",
    "ErrorGuardState",
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "ErrorSerializer",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    if (!u) {
        u = n("ErrorGuardState");
    }
    n("ErrorNormalizeUtils");
    if (!c) {
        c = n("ErrorPubSub");
    }
    n("getErrorSafe");
    if (!d) {
        d = n("ErrorGuard");
    }
    n("ErrorSerializer");
    t.getErrorSafe = r("getErrorSafe");
    t.ErrorGuard = e || (e = r("ErrorGuard"));
    t.ErrorSerializer = r("ErrorSerializer");
    const m = {
        history: (s || (s = r("ErrorPubSub"))).history,
        applyWithGuard: function(n, o, a, onNormalizedError, name, s) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(n, o, a ?? [], {
                name,
                onNormalizedError,
                deferredSource: s?.deferredSource
            });
        },
        guard: function(n, o, a) {
            let t = (e || (e = r("ErrorGuard"))).guard(n, o != null ? {
                name: o
            } : null);
            if (a != null) {
                t = t.bind(a);
            }
            return t;
        },
        normalizeError: function(t) {
            return r("ErrorNormalizeUtils").ifNormalizedError(t) ?? r("ErrorNormalizeUtils").normalizeError(r("getErrorSafe")(t));
        }
    };
    t.ErrorUtils = m;
    const p = m;
    if (typeof __t === "function" && __t.setHandler) {
        __t.setHandler((s || (s = r("ErrorPubSub"))).reportError);
    }
    l.default = p;
}, 99);
__d("GHLTypenameRestore", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const n = window.Env != null ? window.Env.q9k7m2x : null;
        if (!(n == null || !Array.isArray(n))) {
            for (const o of n){
                if (Array.isArray(o) && o.length === 2) {
                    if (t != null && t.indexOf(o[0]) === -1) {
                        continue;
                    }
                    l(e, o[0], o[1]);
                }
            }
        }
    }
    function l(e, t, n) {
        if (!(e == null || typeof e !== "object")) {
            for(const r = [
                e
            ]; r.length > 0;){
                const o = r.pop();
                if (!(o == null || typeof o !== "object")) {
                    if (Array.isArray(o)) {
                        for (const i of o){
                            if (i != null && typeof i === "object") {
                                r.push(i);
                            }
                        }
                        continue;
                    }
                    if (o.__typename === t) {
                        o.__typename = n;
                    }
                    for(let l = Object.keys(o), s = 0; s < l.length; s++){
                        const u = o[l[s]];
                        if (u != null && typeof u === "object") {
                            r.push(u);
                        }
                    }
                }
            }
        }
    }
    i.restoreAllTypenames = e;
    i.restoreTypenameValues = l;
}, 66);
__d("json5", [], function(t, n, r, o, a, i) {
    const e = typeof i === "object" ? i : {};
    e.parse = (()=>{
        "use strict";
        let e;
        let t;
        const n = {
            "'": "'",
            '"': '"',
            "\\": "\\",
            "/": "/",
            "\n": "",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "	"
        };
        const r = [
            " ",
            "	",
            "\r",
            "\n",
            "\v",
            "\f",
            "\xA0",
            "\uFEFF"
        ];
        let o;
        const a = (t)=>{
            const n = new SyntaxError;
            n.message = t;
            n.at = e;
            n.text = o;
            throw n;
        };
        const i = (n)=>{
            if (n && n !== t) {
                a(`Expected '${n}' instead of '${t}'`);
            }
            t = o.charAt(e);
            e += 1;
            return t;
        };
        const l = ()=>o.charAt(e);
        const s = ()=>{
            let e = t;
            for(t !== "_" && t !== "$" && (t < "a" || t > "z") && (t < "A" || t > "Z") && a("Bad identifier"); i() && (t === "_" || t === "$" || t >= "a" && t <= "z" || t >= "A" && t <= "Z" || t >= "0" && t <= "9");){
                e += t;
            }
            return e;
        };
        const u = ()=>{
            let e;
            let n = "";
            let r = "";
            let o = 10;
            if (t === "-" || t === "+") {
                n = t;
                i(t);
            }
            if (t === "I") {
                e = f();
                if (typeof e !== "number" || isNaN(e)) {
                    a("Unexpected word for number");
                }
                if (n === "-") {
                    return -e;
                }
                return e;
            }
            if (t === "N") {
                e = f();
                if (!isNaN(e)) {
                    a("expected word to be NaN");
                }
                return e;
            }
            if (t === "0") {
                r += t;
                i();
                if (t === "x" || t === "X") {
                    r += t;
                    i();
                    o = 16;
                } else if (t >= "0" && t <= "9") {
                    a("Octal literal");
                }
            }
            switch(o){
                case 10:
                    while(t >= "0" && t <= "9"){
                        r += t;
                        i();
                    }
                    if (t === ".") {
                        for(r += "."; i() && t >= "0" && t <= "9";){
                            r += t;
                        }
                    }
                    if (t === "e" || t === "E") {
                        r += t;
                        i();
                        if (t === "-" || t === "+") {
                            r += t;
                            i();
                        }
                        while(t >= "0" && t <= "9"){
                            r += t;
                            i();
                        }
                    }
                    break;
                case 16:
                    while(t >= "0" && t <= "9" || t >= "A" && t <= "F" || t >= "a" && t <= "f"){
                        r += t;
                        i();
                    }
                    break;
            }
            if (n === "-") {
                e = -r;
            } else {
                e = +r;
            }
            if (!isFinite(e)) {
                a("Bad number");
            } else {
                return e;
            }
        };
        const c = ()=>{
            let e;
            let r;
            let o = "";
            let s;
            let u;
            if (t === '"' || t === "'") {
                for(s = t; i();){
                    if (t === s) {
                        i();
                        return o;
                    }
                    if (t === "\\") {
                        i();
                        if (t === "u") {
                            u = 0;
                            for(r = 0; r < 4 && (e = parseInt(i(), 16), !!isFinite(e)); r += 1){
                                u = u * 16 + e;
                            }
                            o += String.fromCharCode(u);
                        } else if (t === "\r") {
                            if (l() === "\n") {
                                i();
                            }
                        } else if (typeof n[t] === "string") {
                            o += n[t];
                        } else {
                            break;
                        }
                    } else {
                        if (t === "\n") {
                            break;
                        }
                        o += t;
                    }
                }
            }
            a("Bad string");
        };
        const d = ()=>{
            if (t !== "/") {
                a("Not an inline comment");
            }
            do {
                i();
                if (t === "\n" || t === "\r") {
                    i();
                    return;
                }
            }while (t)
        };
        const m = ()=>{
            if (t !== "*") {
                a("Not a block comment");
            }
            do {
                i();
                while(t === "*"){
                    i("*");
                    if (t === "/") {
                        i("/");
                        return;
                    }
                }
            }while (t)
            a("Unterminated block comment");
        };
        const p = ()=>{
            if (t !== "/") {
                a("Not a comment");
            }
            i("/");
            switch(t){
                case "/":
                    d();
                    break;
                case "*":
                    m();
                    break;
                default:
                    a("Unrecognized comment");
            }
        };
        const _ = ()=>{
            while(t){
                if (t === "/") {
                    p();
                } else if (r.indexOf(t) >= 0) {
                    i();
                } else {
                    return;
                }
            }
        };
        var f = ()=>{
            switch(t){
                case "t":
                    i("t");
                    i("r");
                    i("u");
                    i("e");
                    return true;
                case "f":
                    i("f");
                    i("a");
                    i("l");
                    i("s");
                    i("e");
                    return false;
                case "n":
                    i("n");
                    i("u");
                    i("l");
                    i("l");
                    return null;
                case "I":
                    i("I");
                    i("n");
                    i("f");
                    i("i");
                    i("n");
                    i("i");
                    i("t");
                    i("y");
                    return Infinity;
                case "N":
                    i("N");
                    i("a");
                    i("N");
                    return NaN;
            }
            a(`Unexpected '${t}'`);
        };
        let g;
        const h = ()=>{
            const e = [];
            if (t === "[") {
                i("[");
                _();
                while(t){
                    if (t === "]" || (t === "," ? a("Missing array element") : e.push(g()), _(), t !== ",")) {
                        i("]");
                        return e;
                    }
                    i(",");
                    _();
                }
            }
            a("Bad array");
        };
        const y = ()=>{
            let e;
            const n = {};
            if (t === "{") {
                i("{");
                _();
                while(t){
                    if (t === "}" || (t === '"' || t === "'" ? e = c() : e = s(), _(), i(":"), n[e] = g(), _(), t !== ",")) {
                        i("}");
                        return n;
                    }
                    i(",");
                    _();
                }
            }
            a("Bad object");
        };
        g = function() {
            _();
            switch(t){
                case "{":
                    return y();
                case "[":
                    return h();
                case '"':
                case "'":
                    return c();
                case "-":
                case "+":
                case ".":
                    return u();
                default:
                    if (t >= "0" && t <= "9") {
                        return u();
                    }
                    return f();
            }
        };
        return function(n, r) {
            let i;
            o = typeof n === "string" ? n : String(n);
            e = 0;
            t = " ";
            i = g();
            _();
            if (t) {
                a("Syntax error");
            }
            if (typeof r === "function") {
                return function e(t, n) {
                    let o;
                    let a;
                    const i = t[n];
                    if (i && typeof i === "object") {
                        for(o in i){
                            if (Object.prototype.hasOwnProperty.call(i, o)) {
                                a = e(i, o);
                                if (a !== undefined) {
                                    i[o] = a;
                                } else {
                                    delete i[o];
                                }
                            }
                        }
                    }
                    return r.call(t, n, i);
                }({
                    "": i
                }, "");
            }
            return i;
        };
    })();
    e.fromPiece = e.parse;
    e.stringify = function(t, n, r) {
        if (n && typeof n !== "function" && !s(n)) {
            throw new Error("Replacer must be a function or an array");
        }
        const o = (e, t, r)=>{
            let o = e[t];
            if (o && o.toJSON && typeof o.toJSON === "function") {
                o = o.toJSON();
            }
            if (typeof n === "function") {
                return n.call(e, t, o);
            }
            if (n) {
                if (r || s(e) || n.indexOf(t) >= 0) {
                    return o;
                }
                return undefined;
            }
            return o;
        };
        function a(e) {
            return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "_" || e === "$";
        }
        function i(e) {
            return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_" || e === "$";
        }
        function l(e) {
            if (typeof e !== "string" || !i(e[0])) {
                return false;
            }
            for(let t = 1, n = e.length; t < n;){
                if (!a(e[t])) {
                    return false;
                }
                t++;
            }
            return true;
        }
        e.isWord = l;
        function s(e) {
            if (Array.isArray) {
                return Array.isArray(e);
            }
            return Object.prototype.toString.call(e) === "[object Array]";
        }
        function u(e) {
            return Object.prototype.toString.call(e) === "[object Date]";
        }
        isNaN = isNaN || function(e) {
            return typeof e === "number" && e !== e;
        };
        const c = [];
        function d(e) {
            for(let t = 0; t < c.length; t++){
                if (c[t] === e) {
                    throw new TypeError("Converting circular structure to JSON");
                }
            }
        }
        function m(e, t, n) {
            if (!e) {
                return "";
            }
            if (e.length > 10) {
                e = e.substring(0, 10);
            }
            let r = n ? "" : "\n";
            for(let o = 0; o < t; o++){
                r += e;
            }
            return r;
        }
        let p;
        if (r) {
            if (typeof r === "string") {
                p = r;
            } else if (typeof r === "number" && r >= 0) {
                p = m(" ", r, true);
            }
        }
        const _ = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        const f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        const g = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        function h(e) {
            f.lastIndex = 0;
            if (f.test(e)) {
                return `"${e.replace(f, (e)=>{
                    const t = g[e];
                    if (typeof t === "string") {
                        return t;
                    }
                    return `\\u${`0000${e.charCodeAt(0).toString(16)}`.slice(-4)}`;
                })}"`;
            }
            return `"${e}"`;
        }
        function y(e, t, n) {
            let r;
            let a;
            let i = o(e, t, n);
            if (i && !u(i)) {
                i = i.valueOf();
            }
            switch(typeof i){
                case "boolean":
                    return i.toString();
                case "number":
                    if (isNaN(i) || !isFinite(i)) {
                        return "null";
                    }
                    return i.toString();
                case "string":
                    return h(i.toString());
                case "object":
                    if (i === null) {
                        return "null";
                    }
                    if (s(i)) {
                        d(i);
                        r = "[";
                        c.push(i);
                        for(let _ = 0; _ < i.length; _++){
                            a = y(i, _, false);
                            r += m(p, c.length);
                            if (a === null || typeof a === "undefined") {
                                r += "null";
                            } else {
                                r += a;
                            }
                            if (_ < i.length - 1) {
                                r += ",";
                            } else if (p) {
                                r += "\n";
                            }
                        }
                        c.pop();
                        r += `${m(p, c.length, true)}]`;
                    } else {
                        d(i);
                        r = "{";
                        let f = false;
                        c.push(i);
                        for(const g in i){
                            if (i.hasOwnProperty(g)) {
                                const C = y(i, g, false);
                                n = false;
                                if (typeof C !== "undefined" && C !== null) {
                                    r += m(p, c.length);
                                    f = true;
                                    var t = l(g) ? g : h(g);
                                    r += `${t}:${p ? " " : ""}${C},`;
                                }
                            }
                        }
                        c.pop();
                        if (f) {
                            r = `${r.substring(0, r.length - 1) + m(p, c.length)}}`;
                        } else {
                            r = "{}";
                        }
                    }
                    return r;
                default:
                    return;
            }
        }
        const C = {
            "": t
        };
        if (t === undefined) {
            return o(C, "", true);
        }
        return y(C, "", true);
    };
}, null);
__d("GHLServerJSParse", [
    "FBLogger",
    "GHLDetectionUtilsPreludeSafe",
    "GHLTypenameRestore",
    "getErrorSafe",
    "json5"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = '"__typename":"AdsSideFeedUnit"';
    const s = '"__typename":"Q4xN7zP9aLbM3vT"';
    const u = "AdsSideFeedUnit";
    const c = "Q4xN7zP9aLbM3vT";
    function d(t, n) {
        if (!n) {
            return t.split(e).join(s);
        }
        let r = t.indexOf(e);
        if (r === -1) {
            return t;
        }
        let o = "";
        let a = 0;
        while(r !== -1){
            o += t.slice(a, r) + s;
            a = r + e.length;
            r = t.indexOf(e, a);
        }
        return o + t.slice(a);
    }
    function m(e) {
        const t = /^\s*\[?\s*\{\s*\"(?:[^\"\\]|\\.)*\"\s*:\s*(?:\"(?:[^\"\\]|\\.)*\"|[[{]|true|false|null|-?[\d.eE+-]+)\s*(?:\"(?:[^\"\\]|\\.)*\"\s*:|[,[{\]}])/.exec(e);
        if (t != null) {
            return `${t[0]}/*x*/${e.slice(t[0].length)}`;
        }
        const n = /^\s*\[?\s*\{\s*\"(?:[^\"\\]|\\.)*\"\s*:/.exec(e);
        if (n != null) {
            return `${n[0]}/*x*/${e.slice(n[0].length)}`;
        }
        const r = /\S/.exec(e);
        if (r != null && (e[r.index] === "{" || e[r.index] === "[")) {
            return `${e.slice(0, r.index + 1)}/*x*/${e.slice(r.index + 1)}`;
        }
        return `/*x*/${e}`;
    }
    function p(e) {
        let t = null;
        const window_Env = window.Env;
        const a = window_Env != null && "v9k2mt7q" in window_Env;
        const i = window_Env != null && "d3hf9km2" in window_Env;
        const l = window_Env != null && "k8pq2mnb" in window_Env;
        const s = window_Env != null && "n5tq2wjb" in window_Env;
        let p = e;
        if (l && p != null) {
            p = d(p, s);
        }
        const _ = a && (o("GHLDetectionUtilsPreludeSafe").isJSONParseShimmed() || i && o("GHLDetectionUtilsPreludeSafe").isJSONParseBehaviorallyShimmed());
        const f = window_Env != null && "c6mw9qtk" in window_Env;
        const g = window_Env != null && "j6dw4ztx" in window_Env;
        let h = false;
        if (f && _ && p != null && (!g || o("GHLDetectionUtilsPreludeSafe").isBoxedParseEffective())) {
            try {
                const y = JSON.parse(`{"q7z":${p}}`);
                if (y != null && y.q7z != null) {
                    t = y.q7z;
                    h = true;
                }
            } catch (e) {
                h = false;
            }
        }
        if (!h && _ && window_Env != null && "x8kf2pw6" in window_Env && p != null && (!g || o("GHLDetectionUtilsPreludeSafe").isWrappedParseEffective())) {
            try {
                const C = JSON.parse(`[${p}]`);
                if (Array.isArray(C) && C.length === 1) {
                    t = C[0];
                    h = true;
                }
            } catch (e) {
                h = false;
            }
        }
        if (!h && _) {
            try {
                const b = o("GHLDetectionUtilsPreludeSafe").isStringBehaviorallyShimmed();
                const v = window_Env != null && "r4wt7kmj" in window_Env;
                if (v && b) {
                    o("GHLDetectionUtilsPreludeSafe").restoreNativeString();
                }
                const S = o("GHLDetectionUtilsPreludeSafe").getCleanJSONParse();
                let R = false;
                if (S != null) {
                    try {
                        t = S(p);
                        R = true;
                    } catch (e) {
                        R = false;
                    }
                }
                if (!R) {
                    t = r("json5").fromPiece(m(p));
                }
            } catch (error) {
                r("FBLogger")("ad_blocker_defense_ghost_owl").catching(r("getErrorSafe")(error)).mustfix("Failed to parse ServerJS payload using json5");
                t = JSON.parse(p);
            }
        } else {
            if (!h) {
                t = JSON.parse(p);
            }
        }
        if (l && t != null && p.indexOf(c) !== -1) {
            o("GHLTypenameRestore").restoreTypenameValues(t, c, u);
        }
        return t;
    }
    l.loadBootPayload = p;
}, 98);
__d("ServerJSPayloadListener", [
    "FBLogger",
    "GHLServerJSParse",
    "GHLTypenameRestore",
    "ServerJS",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (e instanceof HTMLScriptElement) {
            const a = e.dataset.contentLen;
            if (!(e.dataset.processed || e.textContent.length.toString() !== a)) {
                e.dataset.processed = "1";
                const i = e.nonce ?? e.getAttribute("nonce");
                if (i !== t) {
                    r("FBLogger")("serverjs_listener").warn("ServerJS payload nonce validation failed: %s v/s %s", i, t);
                    if (window.Env?.sjsNonceEnforce === true) {
                        return;
                    }
                }
                let s = null;
                try {
                    s = o("GHLServerJSParse").loadBootPayload(e.textContent);
                    if (s == null) {
                        throw r("err")("ServerJS payload marked with data-sjs was parsed as null");
                    }
                    o("GHLTypenameRestore").restoreAllTypenames(s, e.textContent);
                    new (r("ServerJS"))().handle(s);
                } catch (error) {
                    r("FBLogger")("serverjs_listener").catching(r("getErrorSafe")(error)).mustfix("ServerJS based data-sjs payload failed to parse and execute.");
                }
            }
        }
    }
    function s() {
        if (t.document != null) {
            const o = document.querySelectorAll("script[data-sjs]:not([data-processed])");
            const a = window.Env?.sjsNonce ?? "undefined";
            for (const i of o){
                e(i, a);
            }
        }
    }
    l.process = s;
}, 99);
__d("ServerJSPayloadListener_NEW", [
    "FBLogger",
    "GHLTypenameRestore",
    "ServerJS",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        if (e instanceof HTMLScriptElement) {
            const a = e.dataset.contentLen;
            if (!(e.dataset.processed || e.textContent.length.toString() !== a)) {
                e.dataset.processed = "1";
                const i = e.nonce ?? e.getAttribute("nonce");
                if (i !== t) {
                    r("FBLogger")("serverjs_listener").warn("ServerJS payload nonce validation failed: %s v/s %s", i, t);
                    if (window.Env?.sjsNonceEnforce === true) {
                        return;
                    }
                }
                let s = null;
                try {
                    s = JSON.parse(e.textContent);
                    if (s == null) {
                        throw r("err")("ServerJS payload marked with data-sjs was parsed as null");
                    }
                    o("GHLTypenameRestore").restoreAllTypenames(s, e.textContent);
                    new (r("ServerJS"))().handle(s);
                } catch (error) {
                    r("FBLogger")("serverjs_listener").catching(r("getErrorSafe")(error)).mustfix("ServerJS based data-sjs payload failed to parse and execute.");
                }
            }
        }
    }
    function s() {
        if (t.document != null && !(!window.Env || !window.Env.sjsListenerNew)) {
            const o = document.querySelectorAll("script[data-sjs]:not([data-processed])");
            const a = window.Env?.sjsNonce ?? "undefined";
            for (const i of o){
                e(i, a);
            }
        }
    }
    l.process = s;
}, 99);
__d("Visibility", [
    "BaseEventEmitter",
    "ExecutionEnvironment",
    "TimeSlice"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        if (document.hidden !== undefined) {
            s = "hidden";
            u = "visibilitychange";
        } else if (document.mozHidden !== undefined) {
            s = "mozHidden";
            u = "mozvisibilitychange";
        } else if (document.msHidden !== undefined) {
            s = "msHidden";
            u = "msvisibilitychange";
        } else if (document.webkitHidden !== undefined) {
            s = "webkitHidden";
            u = "webkitvisibilitychange";
        }
    }
    const c = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.HIDDEN = "hidden";
            e.VISIBLE = "visible";
            e.hiddenKey = s;
            e.hiddenEvent = u;
            e.$VisibilityEmitter$p_1 = null;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.isHidden = function() {
            if (s) {
                return document[s];
            }
            return false;
        };
        n_prototype.isSupported = function() {
            return (e || (e = r("ExecutionEnvironment"))).canUseDOM && document.addEventListener && u !== undefined;
        };
        n_prototype.setLoggingSinkCallback = function(t) {
            this.$VisibilityEmitter$p_1 = t;
        };
        n_prototype.getLoggingSinkCallback = function() {
            return this.$VisibilityEmitter$p_1;
        };
        return n;
    })(r("BaseEventEmitter"));
    const d = new c;
    if (d.isSupported()) {
        document.addEventListener(d.hiddenEvent, r("TimeSlice").guard(function(t) {
            const e = d.isHidden();
            d.emit(e ? d.HIDDEN : d.VISIBLE, {
                changeTime: t.timeStamp
            });
            const n = d.getLoggingSinkCallback();
            if (n != null) {
                n(e);
            }
        }, "visibility change"));
    }
    l.default = d;
}, 98);
__d("VisibilityListener", [
    "Visibility",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = Date.now() - (e || (e = r("performanceNow")))();
    const u = [];
    let c = false;
    const d = 10000;
    u.push({
        key: s,
        value: r("Visibility").isHidden()
    });
    function m(changeTime, t) {
        if (c || u.length > d) {
            c = true;
            return;
        }
        u.push({
            key: changeTime + s,
            value: t
        });
    }
    r("Visibility").addListener(r("Visibility").VISIBLE, function(e) {
        m(e.changeTime, false);
    });
    r("Visibility").addListener(r("Visibility").HIDDEN, function(e) {
        m(e.changeTime, true);
    });
    function p(e, t) {
        if (c) {
            return null;
        }
        let n;
        for(let o = u.length - 1; o >= 0; o--){
            if (u[o].key <= t) {
                n = u.slice(0, o + 1);
                break;
            }
        }
        if (n === undefined) {
            return null;
        }
        if (n[n.length - 1].value !== r("Visibility").isHidden()) {
            n[n.length] = {
                key: t,
                value: r("Visibility").isHidden()
            };
        }
        return n;
    }
    function _(e, t) {
        const n = p(e, t);
        if (!n) {
            return null;
        }
        if (n.length < 2) {
            if (r("Visibility").isHidden()) {
                return t - e;
            }
            return 0;
        }
        let o = n.length - 1;
        let a = n[o].value ? t - n[o].key : 0;
        for(--o; o > 0 && n[o].key > e; o--){
            if (n[o].value) {
                a += n[o + 1].key - n[o].key;
            }
        }
        if (n[o].value) {
            a = n[o + 1].key - e;
        }
        return a;
    }
    function f() {
        return true;
    }
    l.getHiddenTimings = p;
    l.getHiddenTime = _;
    l.supported = f;
}, 98);
__d("CometPreludeRunWhenReady", [
    "ErrorUtils",
    "ServerJSPayloadListener",
    "ServerJSPayloadListener_NEW",
    "VisibilityListener"
], function(t, n, r, o, a, i) {
    "use strict";
    let e;
    if (!e) {
        e = n("ErrorUtils");
    }
    n("VisibilityListener");
    n("ServerJSPayloadListener");
    n("ServerJSPayloadListener_NEW");
}, null);
__d("CometPrelude", [
    "CometPreludeCritical",
    "CometPreludeRunWhenReady"
], function(t, n, r, o, a, i) {
    "use strict";
    n("CometPreludeCritical");
    n("CometPreludeRunWhenReady");
}, null);
