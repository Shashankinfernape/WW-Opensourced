__d("velocity-animate-1.5.2", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        ((window_1)=>{
            if (window_1.jQuery) {
                return;
            }
            const t = function(e, n) {
                return new t.fn.init(e, n);
            };
            t.isWindow = function(e) {
                return e && e === e.window;
            };
            t.type = function(e) {
                if (e) {
                    if (typeof e === "object" || typeof e === "function") {
                        return o[i.call(e)] || "object";
                    }
                    return typeof e;
                }
                return `${e}`;
            };
            t.isArray = Array.isArray || function(e) {
                return t.type(e) === "array";
            };
            function n(e) {
                const n = e.length;
                const r = t.type(e);
                if (r === "function" || t.isWindow(e)) {
                    return false;
                }
                if (e.nodeType === 1 && n) {
                    return true;
                }
                return r === "array" || n === 0 || typeof n === "number" && n > 0 && n - 1 in e;
            }
            t.isPlainObject = function(e) {
                let n;
                if (!e || t.type(e) !== "object" || e.nodeType || t.isWindow(e)) {
                    return false;
                }
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) {
                        return false;
                    }
                } catch (e) {
                    return false;
                }
                for(n in e);
                return n === void 0 || a.call(e, n);
            };
            t.each = function(e, t, r) {
                let o;
                let a = 0;
                const i = e.length;
                const l = n(e);
                if (r) {
                    if (l) {
                        for(; a < i && (o = t.apply(e[a], r), o !== false); a++);
                    } else {
                        for(a in e){
                            if (e.hasOwnProperty(a) && (o = t.apply(e[a], r), o === false)) {
                                break;
                            }
                        }
                    }
                } else if (l) {
                    for(; a < i && (o = t.call(e[a], a, e[a]), o !== false); a++);
                } else {
                    for(a in e){
                        if (e.hasOwnProperty(a) && (o = t.call(e[a], a, e[a]), o === false)) {
                            break;
                        }
                    }
                }
                return e;
            };
            t.data = function(e, n, o) {
                if (o === void 0) {
                    const a = e[t.expando];
                    const i = a && r[a];
                    if (n === void 0) {
                        return i;
                    }
                    if (i && n in i) {
                        return i[n];
                    }
                } else if (n !== void 0) {
                    const l = e[t.expando] || (e[t.expando] = ++t.uuid);
                    r[l] = r[l] || {};
                    r[l][n] = o;
                    return o;
                }
            };
            t.removeData = function(e, n) {
                const o = e[t.expando];
                const a = o && r[o];
                if (a) {
                    if (n) {
                        t.each(n, function(e, t) {
                            delete a[t];
                        });
                    } else {
                        delete r[o];
                    }
                }
            };
            t.extend = function() {
                let e;
                let n;
                let r;
                let o;
                let a;
                let i;
                let l = arguments[0] || {};
                let s = 1;
                const u = arguments.length;
                let c = false;
                if (typeof l === "boolean") {
                    c = l;
                    l = arguments[s] || {};
                    s++;
                }
                if (typeof l !== "object" && t.type(l) !== "function") {
                    l = {};
                }
                if (s === u) {
                    l = this;
                    s--;
                }
                for(; s < u; s++){
                    if (a = arguments[s]) {
                        for(o in a){
                            if (a.hasOwnProperty(o)) {
                                e = l[o];
                                r = a[o];
                                if (l !== r) {
                                    if (c && r && (t.isPlainObject(r) || (n = t.isArray(r)))) {
                                        if (n) {
                                            n = false;
                                            i = e && t.isArray(e) ? e : [];
                                        } else {
                                            i = e && t.isPlainObject(e) ? e : {};
                                        }
                                        l[o] = t.extend(c, i, r);
                                    } else if (r !== void 0) {
                                        l[o] = r;
                                    }
                                }
                            }
                        }
                    }
                }
                return l;
            };
            t.queue = function(e, r, o) {
                function a(e, t) {
                    const r = t || [];
                    if (e) {
                        if (n(Object(e))) {
                            ((e, t)=>{
                                for(var n = +t.length, r = 0, o = e.length; r < n;){
                                    e[o++] = t[r++];
                                }
                                if (n !== n) {
                                    while(t[r] !== void 0){
                                        e[o++] = t[r++];
                                    }
                                }
                                e.length = o;
                                return e;
                            })(r, typeof e === "string" ? [
                                e
                            ] : e);
                        } else {
                            [].push.call(r, e);
                        }
                    }
                    return r;
                }
                if (e) {
                    r = `${r || "fx"}queue`;
                    let i = t.data(e, r);
                    if (o) {
                        if (!i || t.isArray(o)) {
                            i = t.data(e, r, a(o));
                        } else {
                            i.push(o);
                        }
                        return i;
                    }
                    return i || [];
                }
            };
            t.dequeue = function(e, n) {
                t.each(e.nodeType ? [
                    e
                ] : e, function(e, r) {
                    n = n || "fx";
                    const o = t.queue(r, n);
                    let a = o.shift();
                    if (a === "inprogress") {
                        a = o.shift();
                    }
                    if (a) {
                        if (n === "fx") {
                            o.unshift("inprogress");
                        }
                        a.call(r, function() {
                            t.dequeue(r, n);
                        });
                    }
                });
            };
            t.fn = t.prototype = {
                init: function(e) {
                    if (e.nodeType) {
                        this[0] = e;
                        return this;
                    }
                    throw new Error("Not a DOM node.");
                },
                offset: function() {
                    const t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (window_1.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (window_1.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    };
                },
                position: function() {
                    function e(e) {
                        for(var t = e.offsetParent; t && t.nodeName.toLowerCase() !== "html" && t.style && t.style.position.toLowerCase() === "static";){
                            t = t.offsetParent;
                        }
                        return t || document;
                    }
                    const n = this[0];
                    const r = e(n);
                    const o = this.offset();
                    const a = /^(?:body|html)$/i.test(r.nodeName) ? {
                        top: 0,
                        left: 0
                    } : t(r).offset();
                    o.top -= parseFloat(n.style.marginTop) || 0;
                    o.left -= parseFloat(n.style.marginLeft) || 0;
                    if (r.style) {
                        a.top += parseFloat(r.style.borderTopWidth) || 0;
                        a.left += parseFloat(r.style.borderLeftWidth) || 0;
                    }
                    return {
                        top: o.top - a.top,
                        left: o.left - a.left
                    };
                }
            };
            var r = {};
            t.expando = `velocity${new Date().getTime()}`;
            t.uuid = 0;
            var o = {};
            var a = o.hasOwnProperty;
            var i = o.toString;
            for(let l = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < l.length; s++){
                o[`[object ${l[s]}]`] = l[s].toLowerCase();
            }
            t.fn.init.prototype = t.fn;
            window_1.Velocity = {
                Utilities: t
            };
        })(window);
        ((e)=>{
            if (typeof l === "object" && typeof l.exports === "object") {
                l.exports = e();
            } else {
                e();
            }
        })(function() {
            return ((e, window_1, n, r)=>{
                const o = (()=>{
                    if (n.documentMode) {
                        return n.documentMode;
                    }
                    for(let e = 7; e > 4; e--){
                        let t = n.createElement("div");
                        t.innerHTML = `<!--[if IE ${e}]><span></span><![endif]-->`;
                        if (t.getElementsByTagName("span").length) {
                            t = null;
                            return e;
                        }
                    }
                    return r;
                })();
                const a = (()=>{
                    let e = 0;
                    return window_1.webkitRequestAnimationFrame || window_1.mozRequestAnimationFrame || function(t) {
                        const n = new Date().getTime();
                        let r;
                        r = Math.max(0, 16 - (n - e));
                        e = n + r;
                        return setTimeout(()=>{
                            t(n + r);
                        }, r);
                    };
                })();
                const i = (()=>{
                    const e = window_1.performance || {};
                    if (typeof e.now !== "function") {
                        const n = e.timing && e.timing.navigationStart ? e.timing.navigationStart : new Date().getTime();
                        e.now = function() {
                            return new Date().getTime() - n;
                        };
                    }
                    return e;
                })();
                function l(e) {
                    for(var t = -1, n = e ? e.length : 0, r = []; ++t < n;){
                        const o = e[t];
                        if (o) {
                            r.push(o);
                        }
                    }
                    return r;
                }
                const s = (()=>{
                    const e = Array.prototype.slice;
                    try {
                        e.call(n.documentElement);
                        return e;
                    } catch (t) {
                        return function(t, n) {
                            const r = this.length;
                            if (typeof t !== "number") {
                                t = 0;
                            }
                            if (typeof n !== "number") {
                                n = r;
                            }
                            if (this.slice) {
                                return e.call(this, t, n);
                            }
                            let o;
                            let a = [];
                            const i = t >= 0 ? t : Math.max(0, r + t);
                            const l = n < 0 ? r + n : Math.min(n, r);
                            const s = l - i;
                            if (s > 0) {
                                a = new Array(s);
                                if (this.charAt) {
                                    for(o = 0; o < s; o++){
                                        a[o] = this.charAt(i + o);
                                    }
                                } else {
                                    for(o = 0; o < s; o++){
                                        a[o] = this[i + o];
                                    }
                                }
                            }
                            return a;
                        };
                    }
                })();
                const u = function() {
                    if (Array.prototype.includes) {
                        return function(e, t) {
                            return e.includes(t);
                        };
                    }
                    if (Array.prototype.indexOf) {
                        return function(e, t) {
                            return e.indexOf(t) >= 0;
                        };
                    }
                    return function(e, t) {
                        for(let n = 0; n < e.length; n++){
                            if (e[n] === t) {
                                return true;
                            }
                        }
                        return false;
                    };
                };
                function c(e) {
                    if (d.isWrapped(e)) {
                        e = s.call(e);
                    } else if (d.isNode(e)) {
                        e = [
                            e
                        ];
                    }
                    return e;
                }
                var d = {
                    isNumber: function(e) {
                        return typeof e === "number";
                    },
                    isString: function(e) {
                        return typeof e === "string";
                    },
                    isArray: Array.isArray || function(e) {
                        return Object.prototype.toString.call(e) === "[object Array]";
                    },
                    isFunction: function(e) {
                        return Object.prototype.toString.call(e) === "[object Function]";
                    },
                    isNode: function(e) {
                        return e && e.nodeType;
                    },
                    isWrapped: function(e) {
                        return e && e !== window_1 && d.isNumber(e.length) && !d.isString(e) && !d.isFunction(e) && !d.isNode(e) && (e.length === 0 || d.isNode(e[0]));
                    },
                    isSVG: function(e) {
                        return window_1.SVGElement && e instanceof window_1.SVGElement;
                    },
                    isEmptyObject: function(e) {
                        for(const t in e){
                            if (e.hasOwnProperty(t)) {
                                return false;
                            }
                        }
                        return true;
                    }
                };
                let m;
                let p = false;
                if (e.fn && e.fn.jquery) {
                    m = e;
                    p = true;
                } else {
                    m = window_1.Velocity.Utilities;
                }
                if (o <= 8 && !p) {
                    throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                }
                if (o <= 7) {
                    jQuery.fn.velocity = jQuery.fn.animate;
                    return;
                }
                const _ = 400;
                const f = "swing";
                var g = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window_1.navigator.userAgent),
                        isAndroid: /Android/i.test(window_1.navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(window_1.navigator.userAgent),
                        isChrome: window_1.chrome,
                        isFirefox: /Firefox/i.test(window_1.navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: false,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: m,
                    Redirects: {},
                    Easings: {},
                    Promise: window_1.Promise,
                    defaults: {
                        queue: "",
                        duration: _,
                        easing: f,
                        begin: r,
                        complete: r,
                        progress: r,
                        display: r,
                        visibility: r,
                        loop: false,
                        delay: false,
                        mobileHA: true,
                        _cacheValues: true,
                        promiseRejectEmpty: true
                    },
                    init: function(e) {
                        m.data(e, "velocity", {
                            isSVG: d.isSVG(e),
                            isAnimating: false,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        });
                    },
                    hook: null,
                    mock: false,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 2
                    },
                    debug: false,
                    timestamp: true,
                    pauseAll: function(e) {
                        const t = new Date().getTime();
                        m.each(g.State.calls, function(t, n) {
                            if (n) {
                                if (e !== r && (n[2].queue !== e || n[2].queue === false)) {
                                    return true;
                                }
                                n[5] = {
                                    resume: false
                                };
                            }
                        });
                        m.each(g.State.delayedElements, function(e, n) {
                            if (n) {
                                y(n, t);
                            }
                        });
                    },
                    resumeAll: function(e) {
                        new Date().getTime();
                        m.each(g.State.calls, function(t, n) {
                            if (n) {
                                if (e !== r && (n[2].queue !== e || n[2].queue === false)) {
                                    return true;
                                }
                                if (n[5]) {
                                    n[5].resume = true;
                                }
                            }
                        });
                        m.each(g.State.delayedElements, function(e, t) {
                            if (t) {
                                C(t);
                            }
                        });
                    }
                };
                if (window_1.pageYOffset !== r) {
                    g.State.scrollAnchor = window_1;
                    g.State.scrollPropertyLeft = "pageXOffset";
                    g.State.scrollPropertyTop = "pageYOffset";
                } else {
                    g.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body;
                    g.State.scrollPropertyLeft = "scrollLeft";
                    g.State.scrollPropertyTop = "scrollTop";
                }
                function h(e) {
                    const t = m.data(e, "velocity");
                    if (t === null) {
                        return r;
                    }
                    return t;
                }
                function y(e, t) {
                    const n = h(e);
                    if (n && n.delayTimer && !n.delayPaused) {
                        n.delayRemaining = n.delay - t + n.delayBegin;
                        n.delayPaused = true;
                        clearTimeout(n.delayTimer.setTimeout);
                    }
                }
                function C(e, t) {
                    const n = h(e);
                    if (n && n.delayTimer && n.delayPaused) {
                        n.delayPaused = false;
                        n.delayTimer.setTimeout = setTimeout(n.delayTimer.next, n.delayRemaining);
                    }
                }
                function b(e) {
                    return function(t) {
                        return Math.round(t * e) * (1 / e);
                    };
                }
                function v(e, n, r, o) {
                    const a = 4;
                    const i = 0.001;
                    const l = 1e-7;
                    const s = 10;
                    const u = 11;
                    const c = 1 / (u - 1);
                    const d = "Float32Array" in window_1;
                    if (arguments.length !== 4) {
                        return false;
                    }
                    for(let m = 0; m < 4; ++m){
                        if (typeof arguments[m] !== "number" || isNaN(arguments[m]) || !isFinite(arguments[m])) {
                            return false;
                        }
                    }
                    e = Math.min(e, 1);
                    r = Math.min(r, 1);
                    e = Math.max(e, 0);
                    r = Math.max(r, 0);
                    const p = d ? new Float32Array(u) : new Array(u);
                    function _(e, t) {
                        return 1 - 3 * t + 3 * e;
                    }
                    function f(e, t) {
                        return 3 * t - 6 * e;
                    }
                    function g(e) {
                        return 3 * e;
                    }
                    function h(e, t, n) {
                        return ((_(t, n) * e + f(t, n)) * e + g(t)) * e;
                    }
                    function y(e, t, n) {
                        return 3 * _(t, n) * e * e + 2 * f(t, n) * e + g(t);
                    }
                    function C(t, n) {
                        for(let o = 0; o < a; ++o){
                            const i = y(n, e, r);
                            if (i === 0) {
                                return n;
                            }
                            const l = h(n, e, r) - t;
                            n -= l / i;
                        }
                        return n;
                    }
                    function b() {
                        for(let t = 0; t < u; ++t){
                            p[t] = h(t * c, e, r);
                        }
                    }
                    function v(t, n, o) {
                        let a;
                        let i;
                        let u = 0;
                        do {
                            i = n + (o - n) / 2;
                            a = h(i, e, r) - t;
                            if (a > 0) {
                                o = i;
                            } else {
                                n = i;
                            }
                        }while (Math.abs(a) > l && ++u < s)
                        return i;
                    }
                    function S(t) {
                        let n = 0;
                        for(var o = 1, a = u - 1; o !== a && p[o] <= t; ++o){
                            n += c;
                        }
                        --o;
                        const l = (t - p[o]) / (p[o + 1] - p[o]);
                        const s = n + l * c;
                        const d = y(s, e, r);
                        if (d >= i) {
                            return C(t, s);
                        }
                        if (d === 0) {
                            return s;
                        }
                        return v(t, n, n + c);
                    }
                    let R = false;
                    function L() {
                        R = true;
                        if (e !== n || r !== o) {
                            b();
                        }
                    }
                    const E = function(t) {
                        if (!R) {
                            L();
                        }
                        if (e === n && r === o) {
                            return t;
                        }
                        if (t === 0) {
                            return 0;
                        }
                        if (t === 1) {
                            return 1;
                        }
                        return h(S(t), n, o);
                    };
                    E.getControlPoints = function() {
                        return [
                            {
                                x: e,
                                y: n
                            },
                            {
                                x: r,
                                y: o
                            }
                        ];
                    };
                    const k = `generateBezier(${[
                        e,
                        n,
                        r,
                        o
                    ]})`;
                    E.toString = function() {
                        return k;
                    };
                    return E;
                }
                const S = (()=>{
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v;
                    }
                    function t(t, n, r) {
                        const o = {
                            x: t.x + r.dx * n,
                            v: t.v + r.dv * n,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: o.v,
                            dv: e(o)
                        };
                    }
                    function n(n, r) {
                        const o = {
                            dx: n.v,
                            dv: e(n)
                        };
                        const a = t(n, r * 0.5, o);
                        const i = t(n, r * 0.5, a);
                        const l = t(n, r, i);
                        const s = 1 / 6 * (o.dx + 2 * (a.dx + i.dx) + l.dx);
                        const u = 1 / 6 * (o.dv + 2 * (a.dv + i.dv) + l.dv);
                        n.x = n.x + s * r;
                        n.v = n.v + u * r;
                        return n;
                    }
                    return function e(t, r, o) {
                        const a = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        };
                        const i = [
                            0
                        ];
                        let l = 0;
                        const s = 1 / 10000;
                        const u = 16 / 1000;
                        let c;
                        let d;
                        let m;
                        t = parseFloat(t) || 500;
                        r = parseFloat(r) || 20;
                        o = o || null;
                        a.tension = t;
                        a.friction = r;
                        c = o !== null;
                        if (c) {
                            l = e(t, r);
                            d = l / o * u;
                        } else {
                            d = u;
                        }
                        while(m = n(m || a, d), i.push(1 + m.x), l += 16, Math.abs(m.x) > s && Math.abs(m.v) > s);
                        if (c) {
                            return function(e) {
                                return i[e * (i.length - 1) | 0];
                            };
                        }
                        return l;
                    };
                })();
                g.Easings = {
                    linear: function(e) {
                        return e;
                    },
                    swing: function(e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    spring: function(e) {
                        return 1 - Math.cos(e * 4.5 * Math.PI) * Math.exp(-e * 6);
                    }
                };
                m.each([
                    [
                        "ease",
                        [
                            0.25,
                            0.1,
                            0.25,
                            1
                        ]
                    ],
                    [
                        "ease-in",
                        [
                            0.42,
                            0,
                            1,
                            1
                        ]
                    ],
                    [
                        "ease-out",
                        [
                            0,
                            0,
                            0.58,
                            1
                        ]
                    ],
                    [
                        "ease-in-out",
                        [
                            0.42,
                            0,
                            0.58,
                            1
                        ]
                    ],
                    [
                        "easeInSine",
                        [
                            0.47,
                            0,
                            0.745,
                            0.715
                        ]
                    ],
                    [
                        "easeOutSine",
                        [
                            0.39,
                            0.575,
                            0.565,
                            1
                        ]
                    ],
                    [
                        "easeInOutSine",
                        [
                            0.445,
                            0.05,
                            0.55,
                            0.95
                        ]
                    ],
                    [
                        "easeInQuad",
                        [
                            0.55,
                            0.085,
                            0.68,
                            0.53
                        ]
                    ],
                    [
                        "easeOutQuad",
                        [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ]
                    ],
                    [
                        "easeInOutQuad",
                        [
                            0.455,
                            0.03,
                            0.515,
                            0.955
                        ]
                    ],
                    [
                        "easeInCubic",
                        [
                            0.55,
                            0.055,
                            0.675,
                            0.19
                        ]
                    ],
                    [
                        "easeOutCubic",
                        [
                            0.215,
                            0.61,
                            0.355,
                            1
                        ]
                    ],
                    [
                        "easeInOutCubic",
                        [
                            0.645,
                            0.045,
                            0.355,
                            1
                        ]
                    ],
                    [
                        "easeInQuart",
                        [
                            0.895,
                            0.03,
                            0.685,
                            0.22
                        ]
                    ],
                    [
                        "easeOutQuart",
                        [
                            0.165,
                            0.84,
                            0.44,
                            1
                        ]
                    ],
                    [
                        "easeInOutQuart",
                        [
                            0.77,
                            0,
                            0.175,
                            1
                        ]
                    ],
                    [
                        "easeInQuint",
                        [
                            0.755,
                            0.05,
                            0.855,
                            0.06
                        ]
                    ],
                    [
                        "easeOutQuint",
                        [
                            0.23,
                            1,
                            0.32,
                            1
                        ]
                    ],
                    [
                        "easeInOutQuint",
                        [
                            0.86,
                            0,
                            0.07,
                            1
                        ]
                    ],
                    [
                        "easeInExpo",
                        [
                            0.95,
                            0.05,
                            0.795,
                            0.035
                        ]
                    ],
                    [
                        "easeOutExpo",
                        [
                            0.19,
                            1,
                            0.22,
                            1
                        ]
                    ],
                    [
                        "easeInOutExpo",
                        [
                            1,
                            0,
                            0,
                            1
                        ]
                    ],
                    [
                        "easeInCirc",
                        [
                            0.6,
                            0.04,
                            0.98,
                            0.335
                        ]
                    ],
                    [
                        "easeOutCirc",
                        [
                            0.075,
                            0.82,
                            0.165,
                            1
                        ]
                    ],
                    [
                        "easeInOutCirc",
                        [
                            0.785,
                            0.135,
                            0.15,
                            0.86
                        ]
                    ]
                ], function(e, t) {
                    g.Easings[t[0]] = v.apply(null, t[1]);
                });
                function R(e, t) {
                    let n = e;
                    if (d.isString(e)) {
                        if (!g.Easings[e]) {
                            n = false;
                        }
                    } else if (d.isArray(e) && e.length === 1) {
                        n = b.apply(null, e);
                    } else if (d.isArray(e) && e.length === 2) {
                        n = S.apply(null, e.concat([
                            t
                        ]));
                    } else if (d.isArray(e) && e.length === 4) {
                        n = v.apply(null, e);
                    } else {
                        n = false;
                    }
                    if (n === false) {
                        if (g.Easings[g.defaults.easing]) {
                            n = g.defaults.easing;
                        } else {
                            n = f;
                        }
                    }
                    return n;
                }
                var L = g.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
                    },
                    Lists: {
                        colors: [
                            "fill",
                            "stroke",
                            "stopColor",
                            "color",
                            "backgroundColor",
                            "borderColor",
                            "borderTopColor",
                            "borderRightColor",
                            "borderBottomColor",
                            "borderLeftColor",
                            "outlineColor"
                        ],
                        transformsBase: [
                            "translateX",
                            "translateY",
                            "scale",
                            "scaleX",
                            "scaleY",
                            "skewX",
                            "skewY",
                            "rotateZ"
                        ],
                        transforms3D: [
                            "transformPerspective",
                            "translateZ",
                            "scaleZ",
                            "rotateX",
                            "rotateY"
                        ],
                        units: [
                            "%",
                            "em",
                            "ex",
                            "ch",
                            "rem",
                            "vw",
                            "vh",
                            "vmin",
                            "vmax",
                            "cm",
                            "mm",
                            "Q",
                            "in",
                            "pc",
                            "pt",
                            "px",
                            "deg",
                            "grad",
                            "rad",
                            "turn",
                            "s",
                            "ms"
                        ],
                        colorNames: {
                            aliceblue: "240,248,255",
                            antiquewhite: "250,235,215",
                            aquamarine: "127,255,212",
                            aqua: "0,255,255",
                            azure: "240,255,255",
                            beige: "245,245,220",
                            bisque: "255,228,196",
                            black: "0,0,0",
                            blanchedalmond: "255,235,205",
                            blueviolet: "138,43,226",
                            blue: "0,0,255",
                            brown: "165,42,42",
                            burlywood: "222,184,135",
                            cadetblue: "95,158,160",
                            chartreuse: "127,255,0",
                            chocolate: "210,105,30",
                            coral: "255,127,80",
                            cornflowerblue: "100,149,237",
                            cornsilk: "255,248,220",
                            crimson: "220,20,60",
                            cyan: "0,255,255",
                            darkblue: "0,0,139",
                            darkcyan: "0,139,139",
                            darkgoldenrod: "184,134,11",
                            darkgray: "169,169,169",
                            darkgrey: "169,169,169",
                            darkgreen: "0,100,0",
                            darkkhaki: "189,183,107",
                            darkmagenta: "139,0,139",
                            darkolivegreen: "85,107,47",
                            darkorange: "255,140,0",
                            darkorchid: "153,50,204",
                            darkred: "139,0,0",
                            darksalmon: "233,150,122",
                            darkseagreen: "143,188,143",
                            darkslateblue: "72,61,139",
                            darkslategray: "47,79,79",
                            darkturquoise: "0,206,209",
                            darkviolet: "148,0,211",
                            deeppink: "255,20,147",
                            deepskyblue: "0,191,255",
                            dimgray: "105,105,105",
                            dimgrey: "105,105,105",
                            dodgerblue: "30,144,255",
                            firebrick: "178,34,34",
                            floralwhite: "255,250,240",
                            forestgreen: "34,139,34",
                            fuchsia: "255,0,255",
                            gainsboro: "220,220,220",
                            ghostwhite: "248,248,255",
                            gold: "255,215,0",
                            goldenrod: "218,165,32",
                            gray: "128,128,128",
                            grey: "128,128,128",
                            greenyellow: "173,255,47",
                            green: "0,128,0",
                            honeydew: "240,255,240",
                            hotpink: "255,105,180",
                            indianred: "205,92,92",
                            indigo: "75,0,130",
                            ivory: "255,255,240",
                            khaki: "240,230,140",
                            lavenderblush: "255,240,245",
                            lavender: "230,230,250",
                            lawngreen: "124,252,0",
                            lemonchiffon: "255,250,205",
                            lightblue: "173,216,230",
                            lightcoral: "240,128,128",
                            lightcyan: "224,255,255",
                            lightgoldenrodyellow: "250,250,210",
                            lightgray: "211,211,211",
                            lightgrey: "211,211,211",
                            lightgreen: "144,238,144",
                            lightpink: "255,182,193",
                            lightsalmon: "255,160,122",
                            lightseagreen: "32,178,170",
                            lightskyblue: "135,206,250",
                            lightslategray: "119,136,153",
                            lightsteelblue: "176,196,222",
                            lightyellow: "255,255,224",
                            limegreen: "50,205,50",
                            lime: "0,255,0",
                            linen: "250,240,230",
                            magenta: "255,0,255",
                            maroon: "128,0,0",
                            mediumaquamarine: "102,205,170",
                            mediumblue: "0,0,205",
                            mediumorchid: "186,85,211",
                            mediumpurple: "147,112,219",
                            mediumseagreen: "60,179,113",
                            mediumslateblue: "123,104,238",
                            mediumspringgreen: "0,250,154",
                            mediumturquoise: "72,209,204",
                            mediumvioletred: "199,21,133",
                            midnightblue: "25,25,112",
                            mintcream: "245,255,250",
                            mistyrose: "255,228,225",
                            moccasin: "255,228,181",
                            navajowhite: "255,222,173",
                            navy: "0,0,128",
                            oldlace: "253,245,230",
                            olivedrab: "107,142,35",
                            olive: "128,128,0",
                            orangered: "255,69,0",
                            orange: "255,165,0",
                            orchid: "218,112,214",
                            palegoldenrod: "238,232,170",
                            palegreen: "152,251,152",
                            paleturquoise: "175,238,238",
                            palevioletred: "219,112,147",
                            papayawhip: "255,239,213",
                            peachpuff: "255,218,185",
                            peru: "205,133,63",
                            pink: "255,192,203",
                            plum: "221,160,221",
                            powderblue: "176,224,230",
                            purple: "128,0,128",
                            red: "255,0,0",
                            rosybrown: "188,143,143",
                            royalblue: "65,105,225",
                            saddlebrown: "139,69,19",
                            salmon: "250,128,114",
                            sandybrown: "244,164,96",
                            seagreen: "46,139,87",
                            seashell: "255,245,238",
                            sienna: "160,82,45",
                            silver: "192,192,192",
                            skyblue: "135,206,235",
                            slateblue: "106,90,205",
                            slategray: "112,128,144",
                            snow: "255,250,250",
                            springgreen: "0,255,127",
                            steelblue: "70,130,180",
                            tan: "210,180,140",
                            teal: "0,128,128",
                            thistle: "216,191,216",
                            tomato: "255,99,71",
                            turquoise: "64,224,208",
                            violet: "238,130,238",
                            wheat: "245,222,179",
                            whitesmoke: "245,245,245",
                            white: "255,255,255",
                            yellowgreen: "154,205,50",
                            yellow: "255,255,0"
                        }
                    },
                    Hooks: {
                        templates: {
                            textShadow: [
                                "Color X Y Blur",
                                "black 0px 0px 0px"
                            ],
                            boxShadow: [
                                "Color X Y Blur Spread",
                                "black 0px 0px 0px 0px"
                            ],
                            clip: [
                                "Top Right Bottom Left",
                                "0px 0px 0px 0px"
                            ],
                            backgroundPosition: [
                                "X Y",
                                "0% 0%"
                            ],
                            transformOrigin: [
                                "X Y Z",
                                "50% 50% 0px"
                            ],
                            perspectiveOrigin: [
                                "X Y",
                                "50% 50%"
                            ]
                        },
                        registered: {},
                        register: function() {
                            for(let e = 0; e < L.Lists.colors.length; e++){
                                const t = L.Lists.colors[e] === "color" ? "0 0 0 1" : "255 255 255 1";
                                L.Hooks.templates[L.Lists.colors[e]] = [
                                    "Red Green Blue Alpha",
                                    t
                                ];
                            }
                            let n;
                            let r;
                            let a;
                            if (o) {
                                for(n in L.Hooks.templates){
                                    if (L.Hooks.templates.hasOwnProperty(n)) {
                                        r = L.Hooks.templates[n];
                                        a = r[0].split(" ");
                                        const i = r[1].match(L.RegEx.valueSplit);
                                        if (a[0] === "Color") {
                                            a.push(a.shift());
                                            i.push(i.shift());
                                            L.Hooks.templates[n] = [
                                                a.join(" "),
                                                i.join(" ")
                                            ];
                                        }
                                    }
                                }
                            }
                            for(n in L.Hooks.templates){
                                if (L.Hooks.templates.hasOwnProperty(n)) {
                                    r = L.Hooks.templates[n];
                                    a = r[0].split(" ");
                                    for(const l in a){
                                        if (a.hasOwnProperty(l)) {
                                            const s = n + a[l];
                                            const u = l;
                                            L.Hooks.registered[s] = [
                                                n,
                                                u
                                            ];
                                        }
                                    }
                                }
                            }
                        },
                        getRoot: function(e) {
                            const t = L.Hooks.registered[e];
                            if (t) {
                                return t[0];
                            }
                            return e;
                        },
                        getUnit: function(e, t) {
                            const n = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                            if (n && u(L.Lists.units)) {
                                return n;
                            }
                            return "";
                        },
                        fixColors: function(e) {
                            return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, (e, t, n)=>{
                                if (L.Lists.colorNames.hasOwnProperty(n)) {
                                    return (t || "rgba(") + L.Lists.colorNames[n] + (t ? "" : ",1)");
                                }
                                return t + n;
                            });
                        },
                        cleanRootPropertyValue: function(e, t) {
                            if (L.RegEx.valueUnwrap.test(t)) {
                                t = t.match(L.RegEx.valueUnwrap)[1];
                            }
                            if (L.Values.isCSSNullValue(t)) {
                                t = L.Hooks.templates[e][1];
                            }
                            return t;
                        },
                        extractValue: function(e, t) {
                            const n = L.Hooks.registered[e];
                            if (n) {
                                const r = n[0];
                                const o = n[1];
                                t = L.Hooks.cleanRootPropertyValue(r, t);
                                return t.toString().match(L.RegEx.valueSplit)[o];
                            } else {
                                return t;
                            }
                        },
                        injectValue: function(e, t, n) {
                            const r = L.Hooks.registered[e];
                            if (r) {
                                const o = r[0];
                                const a = r[1];
                                let i;
                                let l;
                                n = L.Hooks.cleanRootPropertyValue(o, n);
                                i = n.toString().match(L.RegEx.valueSplit);
                                i[a] = t;
                                l = i.join(" ");
                                return l;
                            } else {
                                return n;
                            }
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, n) {
                                switch(e){
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        let r;
                                        if (L.RegEx.wrappedValueAlreadyExtracted.test(n)) {
                                            r = n;
                                        } else {
                                            r = n.toString().match(L.RegEx.valueUnwrap);
                                            r = r ? r[1].replace(/,(\s+)?/g, " ") : n;
                                        }
                                        return r;
                                    case "inject":
                                        return `rect(${n})`;
                                }
                            },
                            blur: function(e, t, n) {
                                switch(e){
                                    case "name":
                                        if (g.State.isFirefox) {
                                            return "filter";
                                        }
                                        return "-webkit-filter";
                                    case "extract":
                                        let r = parseFloat(n);
                                        if (!(r || r === 0)) {
                                            const o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            if (o) {
                                                r = o[1];
                                            } else {
                                                r = 0;
                                            }
                                        }
                                        return r;
                                    case "inject":
                                        if (parseFloat(n)) {
                                            return `blur(${n})`;
                                        }
                                        return "none";
                                }
                            },
                            opacity: function(e, t, n) {
                                if (o <= 8) {
                                    switch(e){
                                        case "name":
                                            return "filter";
                                        case "extract":
                                            const r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                            if (r) {
                                                n = r[1] / 100;
                                            } else {
                                                n = 1;
                                            }
                                            return n;
                                        case "inject":
                                            t.style.zoom = 1;
                                            if (parseFloat(n) >= 1) {
                                                return "";
                                            }
                                            return `alpha(opacity=${parseInt(parseFloat(n) * 100, 10)})`;
                                    }
                                } else {
                                    switch(e){
                                        case "name":
                                            return "opacity";
                                        case "extract":
                                            return n;
                                        case "inject":
                                            return n;
                                    }
                                }
                            }
                        },
                        register: function() {
                            if ((!o || o > 9) && !g.State.isGingerbread) {
                                L.Lists.transformsBase = L.Lists.transformsBase.concat(L.Lists.transforms3D);
                            }
                            for(var e = 0; e < L.Lists.transformsBase.length; e++){
                                (()=>{
                                    const t = L.Lists.transformsBase[e];
                                    L.Normalizations.registered[t] = function(e, n, o) {
                                        switch(e){
                                            case "name":
                                                return "transform";
                                            case "extract":
                                                if (h(n) === r || h(n).transformCache[t] === r) {
                                                    if (/^scale/i.test(t)) {
                                                        return 1;
                                                    }
                                                    return 0;
                                                }
                                                return h(n).transformCache[t].replace(/[()]/g, "");
                                            case "inject":
                                                let a = false;
                                                switch(t.substr(0, t.length - 1)){
                                                    case "translate":
                                                        a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                        break;
                                                    case "scal":
                                                    case "scale":
                                                        if (g.State.isAndroid && h(n).transformCache[t] === r && o < 1) {
                                                            o = 1;
                                                        }
                                                        a = !/(\d)$/i.test(o);
                                                        break;
                                                    case "skew":
                                                        a = !/(deg|\d)$/i.test(o);
                                                        break;
                                                    case "rotate":
                                                        a = !/(deg|\d)$/i.test(o);
                                                        break;
                                                }
                                                if (!a) {
                                                    h(n).transformCache[t] = `(${o})`;
                                                }
                                                return h(n).transformCache[t];
                                        }
                                    };
                                })();
                            }
                            for(var t = 0; t < L.Lists.colors.length; t++){
                                (()=>{
                                    const e = L.Lists.colors[t];
                                    L.Normalizations.registered[e] = function(t, n, a) {
                                        switch(t){
                                            case "name":
                                                return e;
                                            case "extract":
                                                let i;
                                                if (L.RegEx.wrappedValueAlreadyExtracted.test(a)) {
                                                    i = a;
                                                } else {
                                                    let l;
                                                    const s = {
                                                        black: "rgb(0, 0, 0)",
                                                        blue: "rgb(0, 0, 255)",
                                                        gray: "rgb(128, 128, 128)",
                                                        green: "rgb(0, 128, 0)",
                                                        red: "rgb(255, 0, 0)",
                                                        white: "rgb(255, 255, 255)"
                                                    };
                                                    if (/^[A-z]+$/i.test(a)) {
                                                        if (s[a] !== r) {
                                                            l = s[a];
                                                        } else {
                                                            l = s.black;
                                                        }
                                                    } else if (L.RegEx.isHex.test(a)) {
                                                        l = `rgb(${L.Values.hexToRgb(a).join(" ")})`;
                                                    } else if (!/^rgba?\(/i.test(a)) {
                                                        l = s.black;
                                                    }
                                                    i = (l || a).toString().match(L.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                                }
                                                if ((!o || o > 8) && i.split(" ").length === 3) {
                                                    i += " 1";
                                                }
                                                return i;
                                            case "inject":
                                                if (/^rgb/.test(a)) {
                                                    return a;
                                                }
                                                if (o <= 8) {
                                                    if (a.split(" ").length === 4) {
                                                        a = a.split(/\s+/).slice(0, 3).join(" ");
                                                    }
                                                } else if (a.split(" ").length === 3) {
                                                    a += " 1";
                                                }
                                                return `${o <= 8 ? "rgb" : "rgba"}(${a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "")})`;
                                        }
                                    };
                                })();
                            }
                            function n(e, t, n) {
                                const r = L.getPropertyValue(t, "boxSizing").toString().toLowerCase() === "border-box";
                                if (r === (n || false)) {
                                    let o;
                                    let a;
                                    let i = 0;
                                    const l = e === "width" ? [
                                        "Left",
                                        "Right"
                                    ] : [
                                        "Top",
                                        "Bottom"
                                    ];
                                    const s = [
                                        `padding${l[0]}`,
                                        `padding${l[1]}`,
                                        `border${l[0]}Width`,
                                        `border${l[1]}Width`
                                    ];
                                    for(o = 0; o < s.length; o++){
                                        a = parseFloat(L.getPropertyValue(t, s[o]));
                                        if (!isNaN(a)) {
                                            i += a;
                                        }
                                    }
                                    if (n) {
                                        return -i;
                                    }
                                    return i;
                                }
                                return 0;
                            }
                            function a(e, t) {
                                return function(r, o, a) {
                                    switch(r){
                                        case "name":
                                            return e;
                                        case "extract":
                                            return parseFloat(a) + n(e, o, t);
                                        case "inject":
                                            return `${parseFloat(a) - n(e, o, t)}px`;
                                    }
                                };
                            }
                            L.Normalizations.registered.innerWidth = a("width", true);
                            L.Normalizations.registered.innerHeight = a("height", true);
                            L.Normalizations.registered.outerWidth = a("width");
                            L.Normalizations.registered.outerHeight = a("height");
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, (e, t)=>t.toUpperCase());
                        },
                        SVGAttribute: function(e) {
                            let t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            if (o || g.State.isAndroid && !g.State.isChrome) {
                                t += "|transform";
                            }
                            return new RegExp(`^(${t})\$`, "i").test(e);
                        },
                        prefixCheck: function(e) {
                            if (g.State.prefixMatches[e]) {
                                return [
                                    g.State.prefixMatches[e],
                                    true
                                ];
                            }
                            const t = [
                                "",
                                "Webkit",
                                "Moz",
                                "ms",
                                "O"
                            ];
                            for(let n = 0, r = t.length; n < r; n++){
                                let o;
                                if (n === 0) {
                                    o = e;
                                } else {
                                    o = t[n] + e.replace(/^\w/, (e)=>e.toUpperCase());
                                }
                                if (d.isString(g.State.prefixElement.style[o])) {
                                    g.State.prefixMatches[e] = o;
                                    return [
                                        o,
                                        true
                                    ];
                                }
                            }
                            return [
                                e,
                                false
                            ];
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            const t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                            const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                            let r;
                            e = e.replace(t, (e, t, n, r)=>t + t + n + n + r + r);
                            r = n.exec(e);
                            if (r) {
                                return [
                                    parseInt(r[1], 16),
                                    parseInt(r[2], 16),
                                    parseInt(r[3], 16)
                                ];
                            }
                            return [
                                0,
                                0,
                                0
                            ];
                        },
                        isCSSNullValue: function(e) {
                            return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                        },
                        getUnitType: function(e) {
                            if (/^(rotate|skew)/i.test(e)) {
                                return "deg";
                            }
                            if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)) {
                                return "";
                            }
                            return "px";
                        },
                        getDisplayType: function(e) {
                            const t = e && e.tagName.toString().toLowerCase();
                            if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)) {
                                return "inline";
                            }
                            if (/^(li)$/i.test(t)) {
                                return "list-item";
                            }
                            if (/^(tr)$/i.test(t)) {
                                return "table-row";
                            }
                            if (/^(table)$/i.test(t)) {
                                return "table";
                            }
                            if (/^(tbody)$/i.test(t)) {
                                return "table-row-group";
                            }
                            return "block";
                        },
                        addClass: function(e, t) {
                            if (e) {
                                if (e.classList) {
                                    e.classList.add(t);
                                } else if (d.isString(e.className)) {
                                    e.className += (e.className.length ? " " : "") + t;
                                } else {
                                    const n = e.getAttribute(o <= 7 ? "className" : "class") || "";
                                    e.setAttribute("class", n + (n ? " " : "") + t);
                                }
                            }
                        },
                        removeClass: function(e, t) {
                            if (e) {
                                if (e.classList) {
                                    e.classList.remove(t);
                                } else if (d.isString(e.className)) {
                                    e.className = e.className.toString().replace(new RegExp(`(^|\\s)${t.split(" ").join("|")}(\\s|\$)`, "gi"), " ");
                                } else {
                                    const n = e.getAttribute(o <= 7 ? "className" : "class") || "";
                                    e.setAttribute("class", n.replace(new RegExp(`(^|s)${t.split(" ").join("|")}(s|\$)`, "gi"), " "));
                                }
                            }
                        }
                    },
                    getPropertyValue: function(e, n, a, i) {
                        function l(e, n) {
                            let a = 0;
                            if (o <= 8) {
                                a = m.css(e, n);
                            } else {
                                let s = false;
                                if (/^(width|height)$/.test(n) && L.getPropertyValue(e, "display") === 0) {
                                    s = true;
                                    L.setPropertyValue(e, "display", L.Values.getDisplayType(e));
                                }
                                const u = function() {
                                    if (s) {
                                        L.setPropertyValue(e, "display", "none");
                                    }
                                };
                                if (!i) {
                                    if (n === "height" && L.getPropertyValue(e, "boxSizing").toString().toLowerCase() !== "border-box") {
                                        const c = e.offsetHeight - (parseFloat(L.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(L.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(L.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(L.getPropertyValue(e, "paddingBottom")) || 0);
                                        u();
                                        return c;
                                    } else if (n === "width" && L.getPropertyValue(e, "boxSizing").toString().toLowerCase() !== "border-box") {
                                        const d = e.offsetWidth - (parseFloat(L.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(L.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(L.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(L.getPropertyValue(e, "paddingRight")) || 0);
                                        u();
                                        return d;
                                    }
                                }
                                let p;
                                if (h(e) === r) {
                                    p = window_1.getComputedStyle(e, null);
                                } else if (h(e).computedStyle) {
                                    p = h(e).computedStyle;
                                } else {
                                    p = h(e).computedStyle = window_1.getComputedStyle(e, null);
                                }
                                if (n === "borderColor") {
                                    n = "borderTopColor";
                                }
                                if (o === 9 && n === "filter") {
                                    a = p.getPropertyValue(n);
                                } else {
                                    a = p[n];
                                }
                                if (a === "" || a === null) {
                                    a = e.style[n];
                                }
                                u();
                            }
                            if (a === "auto" && /^(top|right|bottom|left)$/i.test(n)) {
                                const _ = l(e, "position");
                                if (_ === "fixed" || _ === "absolute" && /top|left/i.test(n)) {
                                    a = `${m(e).position()[n]}px`;
                                }
                            }
                            return a;
                        }
                        let s;
                        if (L.Hooks.registered[n]) {
                            const u = n;
                            const c = L.Hooks.getRoot(u);
                            if (a === r) {
                                a = L.getPropertyValue(e, L.Names.prefixCheck(c)[0]);
                            }
                            if (L.Normalizations.registered[c]) {
                                a = L.Normalizations.registered[c]("extract", e, a);
                            }
                            s = L.Hooks.extractValue(u, a);
                        } else if (L.Normalizations.registered[n]) {
                            let d;
                            let p;
                            d = L.Normalizations.registered[n]("name", e);
                            if (d !== "transform") {
                                p = l(e, L.Names.prefixCheck(d)[0]);
                                if (L.Values.isCSSNullValue(p) && L.Hooks.templates[n]) {
                                    p = L.Hooks.templates[n][1];
                                }
                            }
                            s = L.Normalizations.registered[n]("extract", e, p);
                        }
                        if (!/^[\d-]/.test(s)) {
                            const _ = h(e);
                            if (_ && _.isSVG && L.Names.SVGAttribute(n)) {
                                if (/^(height|width)$/i.test(n)) {
                                    try {
                                        s = e.getBBox()[n];
                                    } catch (e) {
                                        s = 0;
                                    }
                                } else {
                                    s = e.getAttribute(n);
                                }
                            } else {
                                s = l(e, L.Names.prefixCheck(n)[0]);
                            }
                        }
                        if (L.Values.isCSSNullValue(s)) {
                            s = 0;
                        }
                        g.debug >= 2 && `${n}${s}`;
                        return s;
                    },
                    setPropertyValue: function(e, n, r, a, i) {
                        let l = n;
                        if (n === "scroll") {
                            if (i.container) {
                                i.container[`scroll${i.direction}`] = r;
                            } else if (i.direction === "Left") {
                                window_1.scrollTo(r, i.alternateValue);
                            } else {
                                window_1.scrollTo(i.alternateValue, r);
                            }
                        } else if (L.Normalizations.registered[n] && L.Normalizations.registered[n]("name", e) === "transform") {
                            L.Normalizations.registered[n]("inject", e, r);
                            l = "transform";
                            r = h(e).transformCache[n];
                        } else {
                            if (L.Hooks.registered[n]) {
                                const s = n;
                                const u = L.Hooks.getRoot(n);
                                a = a || L.getPropertyValue(e, u);
                                r = L.Hooks.injectValue(s, r, a);
                                n = u;
                            }
                            if (L.Normalizations.registered[n]) {
                                r = L.Normalizations.registered[n]("inject", e, r);
                                n = L.Normalizations.registered[n]("name", e);
                            }
                            l = L.Names.prefixCheck(n)[0];
                            if (o <= 8) {
                                try {
                                    e.style[l] = r;
                                } catch (e) {
                                    g.debug && `${r}${l}`;
                                }
                            } else {
                                const c = h(e);
                                if (c && c.isSVG && L.Names.SVGAttribute(n)) {
                                    e.setAttribute(n, r);
                                } else {
                                    e.style[l] = r;
                                }
                            }
                            g.debug >= 2 && `${n}${l}${r}`;
                        }
                        return [
                            l,
                            r
                        ];
                    },
                    flushTransformCache: function(e) {
                        let t = "";
                        const n = h(e);
                        if ((o || g.State.isAndroid && !g.State.isChrome) && n && n.isSVG) {
                            const r = function(t) {
                                return parseFloat(L.getPropertyValue(e, t));
                            };
                            const a = {
                                translate: [
                                    r("translateX"),
                                    r("translateY")
                                ],
                                skewX: [
                                    r("skewX")
                                ],
                                skewY: [
                                    r("skewY")
                                ],
                                scale: r("scale") !== 1 ? [
                                    r("scale"),
                                    r("scale")
                                ] : [
                                    r("scaleX"),
                                    r("scaleY")
                                ],
                                rotate: [
                                    r("rotateZ"),
                                    0,
                                    0
                                ]
                            };
                            m.each(h(e).transformCache, function(e) {
                                if (/^translate/i.test(e)) {
                                    e = "translate";
                                } else if (/^scale/i.test(e)) {
                                    e = "scale";
                                } else if (/^rotate/i.test(e)) {
                                    e = "rotate";
                                }
                                if (a[e]) {
                                    t += `${e}(${a[e].join(" ")}) `;
                                    delete a[e];
                                }
                            });
                        } else {
                            let i;
                            let l;
                            m.each(h(e).transformCache, function(n) {
                                i = h(e).transformCache[n];
                                if (n === "transformPerspective") {
                                    l = i;
                                    return true;
                                }
                                if (o === 9 && n === "rotateZ") {
                                    n = "rotate";
                                }
                                t += `${n + i} `;
                            });
                            if (l) {
                                t = `perspective${l} ${t}`;
                            }
                        }
                        L.setPropertyValue(e, "transform", t);
                    }
                };
                L.Hooks.register();
                L.Normalizations.register();
                g.hook = function(e, t, n) {
                    let o;
                    e = c(e);
                    m.each(e, function(e, a) {
                        if (h(a) === r) {
                            g.init(a);
                        }
                        if (n === r) {
                            if (o === r) {
                                o = L.getPropertyValue(a, t);
                            }
                        } else {
                            const i = L.setPropertyValue(a, t, n);
                            if (i[0] === "transform") {
                                g.CSS.flushTransformCache(a);
                            }
                            o = i;
                        }
                    });
                    return o;
                };
                const E = function() {
                    let e;
                    function o() {
                        if (i) {
                            return v.promise || null;
                        }
                        return l;
                    }
                    const a = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || d.isString(arguments[0].properties));
                    var i;
                    var l;
                    let s;
                    let p;
                    let f;
                    let b;
                    if (d.isWrapped(this)) {
                        i = false;
                        s = 0;
                        p = this;
                        l = this;
                    } else {
                        i = true;
                        s = 1;
                        p = a ? arguments[0].elements || arguments[0].e : arguments[0];
                    }
                    var v = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    if (i && g.Promise) {
                        v.promise = new g.Promise(function(e, t) {
                            v.resolver = e;
                            v.rejecter = t;
                        });
                    }
                    if (a) {
                        f = arguments[0].properties || arguments[0].p;
                        b = arguments[0].options || arguments[0].o;
                    } else {
                        f = arguments[s];
                        b = arguments[s + 1];
                    }
                    p = c(p);
                    if (!p) {
                        if (v.promise) {
                            if (!f || !b || b.promiseRejectEmpty !== false) {
                                v.rejecter();
                            } else {
                                v.resolver();
                            }
                        }
                        return;
                    }
                    const S = p.length;
                    let k = 0;
                    if (!/^(stop|finish|finishAll|pause|resume)$/i.test(f) && !m.isPlainObject(b)) {
                        const I = s + 1;
                        b = {};
                        for(let T = I; T < arguments.length; T++){
                            if (!d.isArray(arguments[T]) && (/^(fast|normal|slow)$/i.test(arguments[T]) || /^\d/.test(arguments[T]))) {
                                b.duration = arguments[T];
                            } else if (d.isString(arguments[T]) || d.isArray(arguments[T])) {
                                b.easing = arguments[T];
                            } else if (d.isFunction(arguments[T])) {
                                b.complete = arguments[T];
                            }
                        }
                    }
                    let D;
                    switch(f){
                        case "scroll":
                            D = "scroll";
                            break;
                        case "reverse":
                            D = "reverse";
                            break;
                        case "pause":
                            var P = new Date().getTime();
                            m.each(p, function(e, t) {
                                y(t, P);
                            });
                            m.each(g.State.calls, function(e, t) {
                                let n = false;
                                if (t) {
                                    m.each(t[1], function(e, o) {
                                        const a = b === r ? "" : b;
                                        if (a !== true && t[2].queue !== a && !(b === r && t[2].queue === false)) {
                                            return true;
                                        }
                                        m.each(p, function(e, r) {
                                            if (r === o) {
                                                t[5] = {
                                                    resume: false
                                                };
                                                n = true;
                                                return false;
                                            }
                                        });
                                        if (n) {
                                            return false;
                                        }
                                    });
                                }
                            });
                            return o();
                        case "resume":
                            m.each(p, function(e, t) {
                                C(t);
                            });
                            m.each(g.State.calls, function(e, t) {
                                let n = false;
                                if (t) {
                                    m.each(t[1], function(e, o) {
                                        const a = b === r ? "" : b;
                                        if (a !== true && t[2].queue !== a && !(b === r && t[2].queue === false) || !t[5]) {
                                            return true;
                                        }
                                        m.each(p, function(e, r) {
                                            if (r === o) {
                                                t[5].resume = true;
                                                n = true;
                                                return false;
                                            }
                                        });
                                        if (n) {
                                            return false;
                                        }
                                    });
                                }
                            });
                            return o();
                        case "finish":
                        case "finishAll":
                        case "stop":
                            m.each(p, function(e, t) {
                                if (h(t) && h(t).delayTimer) {
                                    clearTimeout(h(t).delayTimer.setTimeout);
                                    if (h(t).delayTimer.next) {
                                        h(t).delayTimer.next();
                                    }
                                    delete h(t).delayTimer;
                                }
                                if (f === "finishAll" && (b === true || d.isString(b))) {
                                    m.each(m.queue(t, d.isString(b) ? b : ""), function(e, t) {
                                        if (d.isFunction(t)) {
                                            t();
                                        }
                                    });
                                    m.queue(t, d.isString(b) ? b : "", []);
                                }
                            });
                            var N = [];
                            m.each(g.State.calls, function(e, t) {
                                if (t) {
                                    m.each(t[1], function(n, o) {
                                        const a = b === r ? "" : b;
                                        if (a !== true && t[2].queue !== a && !(b === r && t[2].queue === false)) {
                                            return true;
                                        }
                                        m.each(p, function(n, r) {
                                            if (r === o) {
                                                if (b === true || d.isString(b)) {
                                                    m.each(m.queue(r, d.isString(b) ? b : ""), function(e, t) {
                                                        if (d.isFunction(t)) {
                                                            t(null, true);
                                                        }
                                                    });
                                                    m.queue(r, d.isString(b) ? b : "", []);
                                                }
                                                if (f === "stop") {
                                                    const i = h(r);
                                                    if (i && i.tweensContainer && (a === true || a === "")) {
                                                        m.each(i.tweensContainer, function(e, t) {
                                                            t.endValue = t.currentValue;
                                                        });
                                                    }
                                                    N.push(e);
                                                } else {
                                                    if (f === "finish" || f === "finishAll") {
                                                        t[2].duration = 1;
                                                    }
                                                }
                                            }
                                        });
                                    });
                                }
                            });
                            if (f === "stop") {
                                m.each(N, function(e, t) {
                                    $(t, true);
                                });
                                if (v.promise) {
                                    v.resolver(p);
                                }
                            }
                            return o();
                        default:
                            if (m.isPlainObject(f) && !d.isEmptyObject(f)) {
                                D = "start";
                            } else if (d.isString(f) && g.Redirects[f]) {
                                e = m.extend({}, b);
                                const M = e.duration;
                                const w = e.delay || 0;
                                if (e.backwards === true) {
                                    p = m.extend(true, [], p).reverse();
                                }
                                m.each(p, function(t, n) {
                                    if (parseFloat(e.stagger)) {
                                        e.delay = w + parseFloat(e.stagger) * t;
                                    } else if (d.isFunction(e.stagger)) {
                                        e.delay = w + e.stagger.call(n, t, S);
                                    }
                                    if (e.drag) {
                                        e.duration = parseFloat(M) || (/^(callout|transition)/.test(f) ? 1000 : _);
                                        e.duration = Math.max(e.duration * (e.backwards ? 1 - t / S : (t + 1) / S), e.duration * 0.75, 200);
                                    }
                                    g.Redirects[f].call(n, n, e || {}, t, S, p, v.promise ? v : r);
                                });
                                return o();
                            } else {
                                const A = `Velocity: First argument (${f}) was not a property map, a known action, or a registered redirect. Aborting.`;
                                if (v.promise) {
                                    v.rejecter(new Error(A));
                                } else {
                                    window_1.console;
                                }
                                return o();
                            }
                    }
                    const F = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    };
                    const O = [];
                    function B(e, o) {
                        let a = m.extend({}, g.defaults, b);
                        let i = {};
                        let l;
                        if (h(e) === r) {
                            g.init(e);
                        }
                        if (parseFloat(a.delay) && a.queue !== false) {
                            m.queue(e, a.queue, function(t, n) {
                                if (n === true) {
                                    return true;
                                }
                                g.velocityQueueEntryFlag = true;
                                const r = g.State.delayedElements.count++;
                                g.State.delayedElements[r] = e;
                                const o = ((e)=>function() {
                                        g.State.delayedElements[e] = false;
                                        t();
                                    })(r);
                                h(e).delayBegin = new Date().getTime();
                                h(e).delay = parseFloat(a.delay);
                                h(e).delayTimer = {
                                    setTimeout: setTimeout(t, parseFloat(a.delay)),
                                    next: o
                                };
                            });
                        }
                        switch(a.duration.toString().toLowerCase()){
                            case "fast":
                                a.duration = 200;
                                break;
                            case "normal":
                                a.duration = _;
                                break;
                            case "slow":
                                a.duration = 600;
                                break;
                            default:
                                a.duration = parseFloat(a.duration) || 1;
                        }
                        if (g.mock !== false) {
                            if (g.mock === true) {
                                a.duration = a.delay = 1;
                            } else {
                                a.duration *= parseFloat(g.mock) || 1;
                                a.delay *= parseFloat(g.mock) || 1;
                            }
                        }
                        a.easing = R(a.easing, a.duration);
                        if (a.begin && !d.isFunction(a.begin)) {
                            a.begin = null;
                        }
                        if (a.progress && !d.isFunction(a.progress)) {
                            a.progress = null;
                        }
                        if (a.complete && !d.isFunction(a.complete)) {
                            a.complete = null;
                        }
                        if (a.display !== r && a.display !== null) {
                            a.display = a.display.toString().toLowerCase();
                            if (a.display === "auto") {
                                a.display = g.CSS.Values.getDisplayType(e);
                            }
                        }
                        if (a.visibility !== r && a.visibility !== null) {
                            a.visibility = a.visibility.toString().toLowerCase();
                        }
                        a.mobileHA = a.mobileHA && g.State.isMobile && !g.State.isGingerbread;
                        function s(s) {
                            let c;
                            let _;
                            if (a.begin && k === 0) {
                                try {
                                    a.begin.call(p, p);
                                } catch (e) {
                                    setTimeout(()=>{
                                        throw e;
                                    }, 1);
                                }
                            }
                            if (D === "scroll") {
                                const y = /^x$/i.test(a.axis) ? "Left" : "Top";
                                const C = parseFloat(a.offset) || 0;
                                let E;
                                let I;
                                let T;
                                if (a.container) {
                                    if (d.isWrapped(a.container) || d.isNode(a.container)) {
                                        a.container = a.container[0] || a.container;
                                        E = a.container[`scroll${y}`];
                                        T = E + m(e).position()[y.toLowerCase()] + C;
                                    } else {
                                        a.container = null;
                                    }
                                } else {
                                    E = g.State.scrollAnchor[g.State[`scrollProperty${y}`]];
                                    I = g.State.scrollAnchor[g.State[`scrollProperty${y === "Left" ? "Top" : "Left"}`]];
                                    T = m(e).offset()[y.toLowerCase()] + C;
                                }
                                i = {
                                    scroll: {
                                        rootPropertyValue: false,
                                        startValue: E,
                                        currentValue: E,
                                        endValue: T,
                                        unitType: "",
                                        easing: a.easing,
                                        scrollData: {
                                            container: a.container,
                                            direction: y,
                                            alternateValue: I
                                        }
                                    },
                                    element: e
                                };
                                g.debug && i.scroll;
                            } else if (D === "reverse") {
                                c = h(e);
                                if (!c) {
                                    return;
                                }
                                if (c.tweensContainer) {
                                    if (c.opts.display === "none") {
                                        c.opts.display = "auto";
                                    }
                                    if (c.opts.visibility === "hidden") {
                                        c.opts.visibility = "visible";
                                    }
                                    c.opts.loop = false;
                                    c.opts.begin = null;
                                    c.opts.complete = null;
                                    if (!b.easing) {
                                        delete a.easing;
                                    }
                                    if (!b.duration) {
                                        delete a.duration;
                                    }
                                    a = m.extend({}, c.opts, a);
                                    _ = m.extend(true, {}, c ? c.tweensContainer : null);
                                    for(const $ in _){
                                        if (_.hasOwnProperty($) && $ !== "element") {
                                            const P = _[$].startValue;
                                            _[$].startValue = _[$].currentValue = _[$].endValue;
                                            _[$].endValue = P;
                                            if (!d.isEmptyObject(b)) {
                                                _[$].easing = a.easing;
                                            }
                                            g.debug && `${$}${JSON.stringify(_[$])}`;
                                        }
                                    }
                                    i = _;
                                } else {
                                    m.dequeue(e, a.queue);
                                    return;
                                }
                            } else if (D === "start") {
                                c = h(e);
                                if (c && c.tweensContainer && c.isAnimating === true) {
                                    _ = c.tweensContainer;
                                }
                                const N = function(t, n) {
                                    let r;
                                    let i;
                                    let l;
                                    if (d.isFunction(t)) {
                                        t = t.call(e, o, S);
                                    }
                                    if (d.isArray(t)) {
                                        r = t[0];
                                        if (!d.isArray(t[1]) && /^[\d-]/.test(t[1]) || d.isFunction(t[1]) || L.RegEx.isHex.test(t[1])) {
                                            l = t[1];
                                        } else if (d.isString(t[1]) && !L.RegEx.isHex.test(t[1]) && g.Easings[t[1]] || d.isArray(t[1])) {
                                            i = n ? t[1] : R(t[1], a.duration);
                                            l = t[2];
                                        } else {
                                            l = t[1] || t[2];
                                        }
                                    } else {
                                        r = t;
                                    }
                                    if (!n) {
                                        i = i || a.easing;
                                    }
                                    if (d.isFunction(r)) {
                                        r = r.call(e, o, S);
                                    }
                                    if (d.isFunction(l)) {
                                        l = l.call(e, o, S);
                                    }
                                    return [
                                        r || 0,
                                        i,
                                        l
                                    ];
                                };
                                const M = function(o, s) {
                                    const u = L.Hooks.getRoot(o);
                                    let p = false;
                                    let f = s[0];
                                    const h = s[1];
                                    let y = s[2];
                                    let C;
                                    if ((!c || !c.isSVG) && u !== "tween" && L.Names.prefixCheck(u)[1] === false && L.Normalizations.registered[u] === r) {
                                        g.debug && `${u}`;
                                        return;
                                    }
                                    if ((a.display !== r && a.display !== null && a.display !== "none" || a.visibility !== r && a.visibility !== "hidden") && /opacity|filter/.test(o) && !y && f !== 0) {
                                        y = 0;
                                    }
                                    if (a._cacheValues && _ && _[o]) {
                                        if (y === r) {
                                            y = _[o].endValue + _[o].unitType;
                                        }
                                        p = c.rootPropertyValueCache[u];
                                    } else if (L.Hooks.registered[o]) {
                                        if (y === r) {
                                            p = L.getPropertyValue(e, u);
                                            y = L.getPropertyValue(e, o, p);
                                        } else {
                                            p = L.Hooks.templates[u][1];
                                        }
                                    } else if (y === r) {
                                        y = L.getPropertyValue(e, o);
                                    }
                                    let b;
                                    let v;
                                    let S;
                                    let R = false;
                                    const E = function(e, t) {
                                        let n;
                                        let r;
                                        r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, (e)=>{
                                            n = e;
                                            return "";
                                        });
                                        if (!n) {
                                            n = L.Values.getUnitType(e);
                                        }
                                        return [
                                            r,
                                            n
                                        ];
                                    };
                                    if (y !== f && d.isString(y) && d.isString(f)) {
                                        C = "";
                                        let k = 0;
                                        let I = 0;
                                        const T = [];
                                        const D = [];
                                        let x = 0;
                                        let $ = 0;
                                        let P = 0;
                                        y = L.Hooks.fixColors(y);
                                        for(f = L.Hooks.fixColors(f); k < y.length && I < f.length;){
                                            let N = y[k];
                                            let M = f[I];
                                            if (/[\d\.-]/.test(N) && /[\d\.-]/.test(M)) {
                                                let w = N;
                                                let A = M;
                                                let O = ".";
                                                let B = ".";
                                                while(++k < y.length){
                                                    N = y[k];
                                                    if (N === O) {
                                                        O = "..";
                                                    } else if (!/\d/.test(N)) {
                                                        break;
                                                    }
                                                    w += N;
                                                }
                                                while(++I < f.length){
                                                    M = f[I];
                                                    if (M === B) {
                                                        B = "..";
                                                    } else if (!/\d/.test(M)) {
                                                        break;
                                                    }
                                                    A += M;
                                                }
                                                const W = L.Hooks.getUnit(y, k);
                                                const q = L.Hooks.getUnit(f, I);
                                                k += W.length;
                                                I += q.length;
                                                if (W === q) {
                                                    if (w === A) {
                                                        C += w + W;
                                                    } else {
                                                        C += `{${T.length}${$ ? "!" : ""}}${W}`;
                                                        T.push(parseFloat(w));
                                                        D.push(parseFloat(A));
                                                    }
                                                } else {
                                                    const U = parseFloat(w);
                                                    const V = parseFloat(A);
                                                    C += `${x < 5 ? "calc" : ""}(${U ? `{${T.length}${$ ? "!" : ""}}` : "0"}${W} + ${V ? `{${T.length + (U ? 1 : 0)}${$ ? "!" : ""}}` : "0"}${q})`;
                                                    if (U) {
                                                        T.push(U);
                                                        D.push(0);
                                                    }
                                                    if (V) {
                                                        T.push(0);
                                                        D.push(V);
                                                    }
                                                }
                                            } else if (N === M) {
                                                C += N;
                                                k++;
                                                I++;
                                                if (x === 0 && N === "c" || x === 1 && N === "a" || x === 2 && N === "l" || x === 3 && N === "c" || x >= 4 && N === "(") {
                                                    x++;
                                                } else if (x && x < 5 || x >= 4 && N === ")" && --x < 5) {
                                                    x = 0;
                                                }
                                                if ($ === 0 && N === "r" || $ === 1 && N === "g" || $ === 2 && N === "b" || $ === 3 && N === "a" || $ >= 3 && N === "(") {
                                                    if ($ === 3 && N === "a") {
                                                        P = 1;
                                                    }
                                                    $++;
                                                } else if (P && N === ",") {
                                                    if (++P > 3) {
                                                        P = 0;
                                                        $ = 0;
                                                    }
                                                } else if (P && $ < (P ? 5 : 4) || $ >= (P ? 4 : 3) && N === ")" && --$ < (P ? 5 : 4)) {
                                                    P = 0;
                                                    $ = 0;
                                                }
                                            } else {
                                                x = 0;
                                                break;
                                            }
                                        }
                                        if (k !== y.length || I !== f.length) {
                                            g.debug && `${f}${y}`;
                                            C = r;
                                        }
                                        if (C) {
                                            if (T.length) {
                                                g.debug && (`${C}`, `${y}${f}`);
                                                y = T;
                                                f = D;
                                                v = S = "";
                                            } else {
                                                C = r;
                                            }
                                        }
                                    }
                                    if (!C) {
                                        b = E(o, y);
                                        y = b[0];
                                        S = b[1];
                                        b = E(o, f);
                                        f = b[0].replace(/^([+-\/*])=/, (e, t)=>{
                                            R = t;
                                            return "";
                                        });
                                        v = b[1];
                                        y = parseFloat(y) || 0;
                                        f = parseFloat(f) || 0;
                                        if (v === "%") {
                                            if (/^(fontSize|lineHeight)$/.test(o)) {
                                                f = f / 100;
                                                v = "em";
                                            } else if (/^scale/.test(o)) {
                                                f = f / 100;
                                                v = "";
                                            } else if (/(Red|Green|Blue)$/i.test(o)) {
                                                f = f / 100 * 255;
                                                v = "";
                                            }
                                        }
                                    }
                                    const H = function() {
                                        const r = {
                                            myParent: e.parentNode || n.body,
                                            position: L.getPropertyValue(e, "position"),
                                            fontSize: L.getPropertyValue(e, "fontSize")
                                        };
                                        const o = r.position === F.lastPosition && r.myParent === F.lastParent;
                                        const a = r.fontSize === F.lastFontSize;
                                        F.lastParent = r.myParent;
                                        F.lastPosition = r.position;
                                        F.lastFontSize = r.fontSize;
                                        const i = 100;
                                        const l = {};
                                        if (!a || !o) {
                                            const s = c && c.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                            g.init(s);
                                            r.myParent.appendChild(s);
                                            m.each([
                                                "overflow",
                                                "overflowX",
                                                "overflowY"
                                            ], function(e, t) {
                                                g.CSS.setPropertyValue(s, t, "hidden");
                                            });
                                            g.CSS.setPropertyValue(s, "position", r.position);
                                            g.CSS.setPropertyValue(s, "fontSize", r.fontSize);
                                            g.CSS.setPropertyValue(s, "boxSizing", "content-box");
                                            m.each([
                                                "minWidth",
                                                "maxWidth",
                                                "width",
                                                "minHeight",
                                                "maxHeight",
                                                "height"
                                            ], function(e, t) {
                                                g.CSS.setPropertyValue(s, t, `${i}%`);
                                            });
                                            g.CSS.setPropertyValue(s, "paddingLeft", `${i}em`);
                                            l.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(L.getPropertyValue(s, "width", null, true)) || 1) / i;
                                            l.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(L.getPropertyValue(s, "height", null, true)) || 1) / i;
                                            l.emToPx = F.lastEmToPx = (parseFloat(L.getPropertyValue(s, "paddingLeft")) || 1) / i;
                                            r.myParent.removeChild(s);
                                        } else {
                                            l.emToPx = F.lastEmToPx;
                                            l.percentToPxWidth = F.lastPercentToPxWidth;
                                            l.percentToPxHeight = F.lastPercentToPxHeight;
                                        }
                                        if (F.remToPx === null) {
                                            F.remToPx = parseFloat(L.getPropertyValue(n.body, "fontSize")) || 16;
                                        }
                                        if (F.vwToPx === null) {
                                            F.vwToPx = parseFloat(window_1.innerWidth) / 100;
                                            F.vhToPx = parseFloat(window_1.innerHeight) / 100;
                                        }
                                        l.remToPx = F.remToPx;
                                        l.vwToPx = F.vwToPx;
                                        l.vhToPx = F.vhToPx;
                                        g.debug >= 1 && `${JSON.stringify(l)}`;
                                        return l;
                                    };
                                    if (/[\/*]/.test(R)) {
                                        v = S;
                                    } else if (S !== v && y !== 0) {
                                        if (f === 0) {
                                            v = S;
                                        } else {
                                            l = l || H();
                                            const G = /margin|padding|left|right|width|text|word|letter/i.test(o) || /X$/.test(o) || o === "x" ? "x" : "y";
                                            switch(S){
                                                case "%":
                                                    y *= G === "x" ? l.percentToPxWidth : l.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    y *= l[`${S}ToPx`];
                                            }
                                            switch(v){
                                                case "%":
                                                    y *= 1 / (G === "x" ? l.percentToPxWidth : l.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    y *= 1 / l[`${v}ToPx`];
                                            }
                                        }
                                    }
                                    switch(R){
                                        case "+":
                                            f = y + f;
                                            break;
                                        case "-":
                                            f = y - f;
                                            break;
                                        case "*":
                                            f = y * f;
                                            break;
                                        case "/":
                                            f = y / f;
                                            break;
                                    }
                                    i[o] = {
                                        rootPropertyValue: p,
                                        startValue: y,
                                        currentValue: y,
                                        endValue: f,
                                        unitType: v,
                                        easing: h
                                    };
                                    if (C) {
                                        i[o].pattern = C;
                                    }
                                    g.debug && `${o}${JSON.stringify(i[o])}`;
                                };
                                for(const w in f){
                                    if (f.hasOwnProperty(w)) {
                                        const A = L.Names.camelCase(w);
                                        const B = N(f[w]);
                                        if (u(L.Lists.colors)) {
                                            const W = B[0];
                                            const q = B[1];
                                            const U = B[2];
                                            if (L.RegEx.isHex.test(W)) {
                                                for(let V = [
                                                    "Red",
                                                    "Green",
                                                    "Blue"
                                                ], H = L.Values.hexToRgb(W), G = U ? L.Values.hexToRgb(U) : r, z = 0; z < V.length; z++){
                                                    const j = [
                                                        H[z]
                                                    ];
                                                    if (q) {
                                                        j.push(q);
                                                    }
                                                    if (G !== r) {
                                                        j.push(G[z]);
                                                    }
                                                    M(A + V[z], j);
                                                }
                                                continue;
                                            }
                                        }
                                        M(A, B);
                                    }
                                }
                                i.element = e;
                            }
                            if (i.element) {
                                L.Values.addClass(e, "velocity-animating");
                                O.push(i);
                                c = h(e);
                                if (c) {
                                    if (a.queue === "") {
                                        c.tweensContainer = i;
                                        c.opts = a;
                                    }
                                    c.isAnimating = true;
                                }
                                if (k === S - 1) {
                                    g.State.calls.push([
                                        O,
                                        p,
                                        a,
                                        null,
                                        v.resolver,
                                        null,
                                        0
                                    ]);
                                    if (g.State.isTicking === false) {
                                        g.State.isTicking = true;
                                        x();
                                    }
                                } else {
                                    k++;
                                }
                            }
                        }
                        if (a.queue === false) {
                            if (a.delay) {
                                const c = g.State.delayedElements.count++;
                                g.State.delayedElements[c] = e;
                                const y = ((e)=>function() {
                                        g.State.delayedElements[e] = false;
                                        s();
                                    })(c);
                                h(e).delayBegin = new Date().getTime();
                                h(e).delay = parseFloat(a.delay);
                                h(e).delayTimer = {
                                    setTimeout: setTimeout(s, parseFloat(a.delay)),
                                    next: y
                                };
                            } else {
                                s();
                            }
                        } else {
                            m.queue(e, a.queue, function(e, t) {
                                if (t === true) {
                                    if (v.promise) {
                                        v.resolver(p);
                                    }
                                    return true;
                                }
                                g.velocityQueueEntryFlag = true;
                                s();
                            });
                        }
                        if ((a.queue === "" || a.queue === "fx") && m.queue(e)[0] !== "inprogress") {
                            m.dequeue(e);
                        }
                    }
                    m.each(p, function(e, t) {
                        if (d.isNode(t)) {
                            B(t, e);
                        }
                    });
                    e = m.extend({}, g.defaults, b);
                    e.loop = parseInt(e.loop, 10);
                    const W = e.loop * 2 - 1;
                    if (e.loop) {
                        for(let q = 0; q < W; q++){
                            const U = {
                                delay: e.delay,
                                progress: e.progress
                            };
                            if (q === W - 1) {
                                U.display = e.display;
                                U.visibility = e.visibility;
                                U.complete = e.complete;
                            }
                            E(p, "reverse", U);
                        }
                    }
                    return o();
                };
                g = m.extend(E, g);
                g.animate = E;
                var k = window_1.requestAnimationFrame || a;
                const I = 16;
                let T = I;
                g.enableSmoothBackgroundAnimations = function() {
                    T = 0;
                };
                g.disableSmoothBackgroundAnimations = function() {
                    T = I;
                };
                if (!g.State.isMobile && n.hidden !== r) {
                    const D = function() {
                        if (n.hidden) {
                            k = function(e) {
                                return setTimeout(()=>{
                                    e(true);
                                }, T);
                            };
                            x();
                        } else {
                            k = window_1.requestAnimationFrame || a;
                        }
                    };
                    D();
                    n.addEventListener("visibilitychange", D);
                }
                function x(e) {
                    if (e) {
                        const t = g.timestamp && e !== true ? e : i.now();
                        let n = g.State.calls.length;
                        if (n > 10000) {
                            g.State.calls = l(g.State.calls);
                            n = g.State.calls.length;
                        }
                        for(let a = 0; a < n; a++){
                            if (g.State.calls[a]) {
                                const s = g.State.calls[a];
                                const u = s[0];
                                var c = s[2];
                                let p = s[3];
                                const _ = !p;
                                let f = null;
                                const y = s[5];
                                let C = s[6];
                                if (!p) {
                                    p = g.State.calls[a][3] = t - 16;
                                }
                                if (y) {
                                    if (y.resume === true) {
                                        p = s[3] = Math.round(t - C - 16);
                                        s[5] = null;
                                    } else {
                                        continue;
                                    }
                                }
                                C = s[6] = t - p;
                                var b = Math.min(C / c.duration, 1);
                                for(let v = 0, S = u.length; v < S; v++){
                                    const R = u[v];
                                    var E = R.element;
                                    if (h(E)) {
                                        let I = false;
                                        if (c.display !== r && c.display !== null && c.display !== "none") {
                                            if (c.display === "flex") {
                                                const T = [
                                                    "-webkit-box",
                                                    "-moz-box",
                                                    "-ms-flexbox",
                                                    "-webkit-flex"
                                                ];
                                                m.each(T, function(e, t) {
                                                    L.setPropertyValue(E, "display", t);
                                                });
                                            }
                                            L.setPropertyValue(E, "display", c.display);
                                        }
                                        if (c.visibility !== r && c.visibility !== "hidden") {
                                            L.setPropertyValue(E, "visibility", c.visibility);
                                        }
                                        for(const D in R){
                                            if (R.hasOwnProperty(D) && D !== "element") {
                                                var P = R[D];
                                                let N;
                                                var M = d.isString(P.easing) ? g.Easings[P.easing] : P.easing;
                                                if (d.isString(P.pattern)) {
                                                    const w = b === 1 ? function(e, t, n) {
                                                        const r = P.endValue[t];
                                                        if (n) {
                                                            return Math.round(r);
                                                        }
                                                        return r;
                                                    } : function(e, t, n) {
                                                        const r = P.startValue[t];
                                                        const o = P.endValue[t] - r;
                                                        const a = r + o * M(b, c, o);
                                                        if (n) {
                                                            return Math.round(a);
                                                        }
                                                        return a;
                                                    };
                                                    N = P.pattern.replace(/{(\d+)(!)?}/g, w);
                                                } else if (b === 1) {
                                                    N = P.endValue;
                                                } else {
                                                    const A = P.endValue - P.startValue;
                                                    N = P.startValue + A * M(b, c, A);
                                                }
                                                if (!_ && N === P.currentValue) {
                                                    continue;
                                                }
                                                P.currentValue = N;
                                                if (D === "tween") {
                                                    f = N;
                                                } else {
                                                    let F;
                                                    if (L.Hooks.registered[D]) {
                                                        F = L.Hooks.getRoot(D);
                                                        const O = h(E).rootPropertyValueCache[F];
                                                        if (O) {
                                                            P.rootPropertyValue = O;
                                                        }
                                                    }
                                                    const B = L.setPropertyValue(E, D, P.currentValue + (o < 9 && parseFloat(N) === 0 ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                                    if (L.Hooks.registered[D]) {
                                                        if (L.Normalizations.registered[F]) {
                                                            h(E).rootPropertyValueCache[F] = L.Normalizations.registered[F]("extract", null, B[1]);
                                                        } else {
                                                            h(E).rootPropertyValueCache[F] = B[1];
                                                        }
                                                    }
                                                    if (B[0] === "transform") {
                                                        I = true;
                                                    }
                                                }
                                            }
                                        }
                                        if (c.mobileHA && h(E).transformCache.translate3d === r) {
                                            h(E).transformCache.translate3d = "(0px, 0px, 0px)";
                                            I = true;
                                        }
                                        if (I) {
                                            L.flushTransformCache(E);
                                        }
                                    }
                                }
                                if (c.display !== r && c.display !== "none") {
                                    g.State.calls[a][2].display = false;
                                }
                                if (c.visibility !== r && c.visibility !== "hidden") {
                                    g.State.calls[a][2].visibility = false;
                                }
                                if (c.progress) {
                                    c.progress.call(s[1], s[1], b, Math.max(0, p + c.duration - t), p, f);
                                }
                                if (b === 1) {
                                    $(a);
                                }
                            }
                        }
                    }
                    if (g.State.isTicking) {
                        k(x);
                    }
                }
                function $(e, t) {
                    if (!g.State.calls[e]) {
                        return false;
                    }
                    const n = g.State.calls[e][0];
                    const o = g.State.calls[e][1];
                    const a = g.State.calls[e][2];
                    const i = g.State.calls[e][4];
                    let l = false;
                    for(let s = 0, u = n.length; s < u; s++){
                        const c = n[s].element;
                        if (!t && !a.loop) {
                            if (a.display === "none") {
                                L.setPropertyValue(c, "display", a.display);
                            }
                            if (a.visibility === "hidden") {
                                L.setPropertyValue(c, "visibility", a.visibility);
                            }
                        }
                        var d = h(c);
                        if (a.loop !== true && (m.queue(c)[1] === r || !/\.velocityQueueEntryFlag/i.test(m.queue(c)[1])) && d) {
                            d.isAnimating = false;
                            d.rootPropertyValueCache = {};
                            var p = false;
                            m.each(L.Lists.transforms3D, function(e, t) {
                                const n = /^scale/.test(t) ? 1 : 0;
                                const o = d.transformCache[t];
                                if (d.transformCache[t] !== r && new RegExp(`^\\(${n}[^.]`).test(o)) {
                                    p = true;
                                    delete d.transformCache[t];
                                }
                            });
                            if (a.mobileHA) {
                                p = true;
                                delete d.transformCache.translate3d;
                            }
                            if (p) {
                                L.flushTransformCache(c);
                            }
                            L.Values.removeClass(c, "velocity-animating");
                        }
                        if (!t && a.complete && !a.loop && s === u - 1) {
                            try {
                                a.complete.call(o, o);
                            } catch (e) {
                                setTimeout(()=>{
                                    throw e;
                                }, 1);
                            }
                        }
                        if (i && a.loop !== true) {
                            i(o);
                        }
                        if (d && a.loop === true && !t) {
                            m.each(d.tweensContainer, function(e, t) {
                                if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 === 0) {
                                    const n = t.startValue;
                                    t.startValue = t.endValue;
                                    t.endValue = n;
                                }
                                if (/^backgroundPosition/.test(e) && parseFloat(t.endValue) === 100 && t.unitType === "%") {
                                    t.endValue = 0;
                                    t.startValue = 100;
                                }
                            });
                            g(c, "reverse", {
                                loop: true,
                                delay: a.delay
                            });
                        }
                        if (a.queue !== false) {
                            m.dequeue(c, a.queue);
                        }
                    }
                    g.State.calls[e] = false;
                    for(let _ = 0, f = g.State.calls.length; _ < f; _++){
                        if (g.State.calls[_] !== false) {
                            l = true;
                            break;
                        }
                    }
                    if (l === false) {
                        g.State.isTicking = false;
                        delete g.State.calls;
                        g.State.calls = [];
                    }
                }
                e.Velocity = g;
                if (e !== window_1) {
                    e.fn.velocity = E;
                    e.fn.velocity.defaults = g.defaults;
                }
                m.each([
                    "Down",
                    "Up"
                ], function(e, t) {
                    g.Redirects[`slide${t}`] = function(e, n, o, a, i, l) {
                        const s = m.extend({}, n);
                        const { begin: u, complete: c } = s;
                        const d = {};
                        const p = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                        if (s.display === r) {
                            s.display = t === "Down" ? g.CSS.Values.getDisplayType(e) === "inline" ? "inline-block" : "block" : "none";
                        }
                        s.begin = function() {
                            if (o === 0 && u) {
                                u.call(i, i);
                            }
                            for(const n in p){
                                if (p.hasOwnProperty(n)) {
                                    d[n] = e.style[n];
                                    const r = L.getPropertyValue(e, n);
                                    p[n] = t === "Down" ? [
                                        r,
                                        0
                                    ] : [
                                        0,
                                        r
                                    ];
                                }
                            }
                            d.overflow = e.style.overflow;
                            e.style.overflow = "hidden";
                        };
                        s.complete = function() {
                            for(const t in d){
                                if (d.hasOwnProperty(t)) {
                                    e.style[t] = d[t];
                                }
                            }
                            if (o === a - 1) {
                                if (c) {
                                    c.call(i, i);
                                }
                                if (l) {
                                    l.resolver(i);
                                }
                            }
                        };
                        g(e, p, s);
                    };
                });
                m.each([
                    "In",
                    "Out"
                ], function(e, t) {
                    g.Redirects[`fade${t}`] = function(e, n, o, a, i, l) {
                        const s = m.extend({}, n);
                        const u = s.complete;
                        const c = {
                            opacity: t === "In" ? 1 : 0
                        };
                        if (o !== 0) {
                            s.begin = null;
                        }
                        if (o !== a - 1) {
                            s.complete = null;
                        } else {
                            s.complete = function() {
                                if (u) {
                                    u.call(i, i);
                                }
                                if (l) {
                                    l.resolver(i);
                                }
                            };
                        }
                        if (s.display === r) {
                            s.display = t === "In" ? "auto" : "none";
                        }
                        g(this, c, s);
                    };
                });
                return g;
            })(window.jQuery || window.Zepto || window, window, window ? window.document : void 0);
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
    const d = {};
    const m = {
        exports: d
    };
    function p() {
        ((e)=>{
            if (typeof n === "function" && typeof d === "object") {
                m.exports = e();
            } else {
                e();
            }
        })(function() {
            return (({ Velocity: o }, window_1, n, r)=>{
                if (!o || !o.Utilities) {
                    window_1.console;
                    return;
                }
                const { Utilities: a, version: i } = o;
                const l = {
                    major: 1,
                    minor: 1,
                    patch: 0
                };
                function s(e, t) {
                    const n = [];
                    if (!e || !t) {
                        return false;
                    }
                    a.each([
                        e,
                        t
                    ], function(e, t) {
                        const r = [];
                        a.each(t, function(e, t) {
                            while(t.toString().length < 5){
                                t = `0${t}`;
                            }
                            r.push(t);
                        });
                        n.push(r.join(""));
                    });
                    return parseFloat(n[0]) > parseFloat(n[1]);
                }
                if (s(l, i)) {
                    const u = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
                    alert(u);
                    throw new Error(u);
                }
                o.RegisterEffect = o.RegisterUI = function(e, t) {
                    function n(e, t, n, r) {
                        let i = 0;
                        let l;
                        a.each(e.nodeType ? [
                            e
                        ] : e, function(e, t) {
                            if (r) {
                                n += e * r;
                            }
                            l = t.parentNode;
                            let s = [
                                "height",
                                "paddingTop",
                                "paddingBottom",
                                "marginTop",
                                "marginBottom"
                            ];
                            if (o.CSS.getPropertyValue(t, "boxSizing").toString().toLowerCase() === "border-box") {
                                s = [
                                    "height"
                                ];
                            }
                            a.each(s, function(e, n) {
                                i += parseFloat(o.CSS.getPropertyValue(t, n));
                            });
                        });
                        o.animate(l, {
                            height: `${t === "In" ? "+" : "-"}=${i}`
                        }, {
                            queue: false,
                            easing: "ease-in-out",
                            duration: n * (t === "In" ? 0.6 : 1)
                        });
                    }
                    o.Redirects[e] = function(i, l, s, u, c, d, m) {
                        const p = s === u - 1;
                        let _ = 0;
                        m = m || t.loop;
                        if (typeof t.defaultDuration === "function") {
                            t.defaultDuration = t.defaultDuration.call(c, c);
                        } else {
                            t.defaultDuration = parseFloat(t.defaultDuration);
                        }
                        for(var f = 0; f < t.calls.length; f++){
                            b = t.calls[f][1];
                            if (typeof b === "number") {
                                _ += b;
                            }
                        }
                        const g = _ >= 1 ? 0 : t.calls.length ? (1 - _) / t.calls.length : 1;
                        for(f = 0; f < t.calls.length; f++){
                            const h = t.calls[f];
                            var y = h[0];
                            var C = 1000;
                            var b = h[1];
                            const v = h[2] || {};
                            var S = {};
                            if (l.duration !== r) {
                                C = l.duration;
                            } else if (t.defaultDuration !== r) {
                                C = t.defaultDuration;
                            }
                            S.duration = C * (typeof b === "number" ? b : g);
                            S.queue = l.queue || "";
                            S.easing = v.easing || "ease";
                            S.delay = parseFloat(v.delay) || 0;
                            S.loop = !t.loop && v.loop;
                            S._cacheValues = v._cacheValues || true;
                            if (f === 0) {
                                S.delay += parseFloat(l.delay) || 0;
                                if (s === 0) {
                                    S.begin = function() {
                                        if (l.begin) {
                                            l.begin.call(c, c);
                                        }
                                        const t = e.match(/(In|Out)$/);
                                        if (t && t[0] === "In" && y.opacity !== r) {
                                            a.each(c.nodeType ? [
                                                c
                                            ] : c, function(e, t) {
                                                o.CSS.setPropertyValue(t, "opacity", 0);
                                            });
                                        }
                                        if (l.animateParentHeight && t) {
                                            n(c, t[0], C + S.delay, l.stagger);
                                        }
                                    };
                                }
                                if (l.display !== null) {
                                    if (l.display !== r && l.display !== "none") {
                                        S.display = l.display;
                                    } else if (/In$/.test(e)) {
                                        const R = o.CSS.Values.getDisplayType(i);
                                        S.display = R === "inline" ? "inline-block" : R;
                                    }
                                }
                                if (l.visibility && l.visibility !== "hidden") {
                                    S.visibility = l.visibility;
                                }
                            }
                            if (f === t.calls.length - 1) {
                                var L = function() {
                                    if ((l.display === r || l.display === "none") && /Out$/.test(e)) {
                                        a.each(c.nodeType ? [
                                            c
                                        ] : c, function(e, t) {
                                            o.CSS.setPropertyValue(t, "display", "none");
                                        });
                                    }
                                    if (l.complete) {
                                        l.complete.call(c, c);
                                    }
                                    if (d) {
                                        d.resolver(c || i);
                                    }
                                };
                                S.complete = function() {
                                    if (m) {
                                        o.Redirects[e](i, l, s, u, c, d, m === true ? true : Math.max(0, m - 1));
                                    }
                                    if (t.reset) {
                                        for(const n in t.reset){
                                            if (t.reset.hasOwnProperty(n)) {
                                                const a = t.reset[n];
                                                if (o.CSS.Hooks.registered[n] === r && (typeof a === "string" || typeof a === "number")) {
                                                    t.reset[n] = [
                                                        t.reset[n],
                                                        t.reset[n]
                                                    ];
                                                }
                                            }
                                        }
                                        const _ = {
                                            duration: 0,
                                            queue: false
                                        };
                                        if (p) {
                                            _.complete = L;
                                        }
                                        o.animate(i, t.reset, _);
                                    } else {
                                        if (p) {
                                            L();
                                        }
                                    }
                                };
                                if (l.visibility === "hidden") {
                                    S.visibility = l.visibility;
                                }
                            }
                            o.animate(i, y, S);
                        }
                    };
                    return o;
                };
                o.RegisterEffect.packagedEffects = {
                    "callout.bounce": {
                        defaultDuration: 550,
                        calls: [
                            [
                                {
                                    translateY: -30
                                },
                                0.25
                            ],
                            [
                                {
                                    translateY: 0
                                },
                                0.125
                            ],
                            [
                                {
                                    translateY: -15
                                },
                                0.125
                            ],
                            [
                                {
                                    translateY: 0
                                },
                                0.25
                            ]
                        ]
                    },
                    "callout.shake": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    translateX: -11
                                }
                            ],
                            [
                                {
                                    translateX: 11
                                }
                            ],
                            [
                                {
                                    translateX: -11
                                }
                            ],
                            [
                                {
                                    translateX: 11
                                }
                            ],
                            [
                                {
                                    translateX: -11
                                }
                            ],
                            [
                                {
                                    translateX: 11
                                }
                            ],
                            [
                                {
                                    translateX: -11
                                }
                            ],
                            [
                                {
                                    translateX: 0
                                }
                            ]
                        ]
                    },
                    "callout.flash": {
                        defaultDuration: 1100,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        "easeInOutQuad",
                                        1
                                    ]
                                }
                            ],
                            [
                                {
                                    opacity: [
                                        1,
                                        "easeInOutQuad"
                                    ]
                                }
                            ],
                            [
                                {
                                    opacity: [
                                        0,
                                        "easeInOutQuad"
                                    ]
                                }
                            ],
                            [
                                {
                                    opacity: [
                                        1,
                                        "easeInOutQuad"
                                    ]
                                }
                            ]
                        ]
                    },
                    "callout.pulse": {
                        defaultDuration: 825,
                        calls: [
                            [
                                {
                                    scaleX: 1.1,
                                    scaleY: 1.1
                                },
                                0.5,
                                {
                                    easing: "easeInExpo"
                                }
                            ],
                            [
                                {
                                    scaleX: 1,
                                    scaleY: 1
                                },
                                0.5
                            ]
                        ]
                    },
                    "callout.swing": {
                        defaultDuration: 950,
                        calls: [
                            [
                                {
                                    rotateZ: 15
                                }
                            ],
                            [
                                {
                                    rotateZ: -10
                                }
                            ],
                            [
                                {
                                    rotateZ: 5
                                }
                            ],
                            [
                                {
                                    rotateZ: -5
                                }
                            ],
                            [
                                {
                                    rotateZ: 0
                                }
                            ]
                        ]
                    },
                    "callout.tada": {
                        defaultDuration: 1000,
                        calls: [
                            [
                                {
                                    scaleX: 0.9,
                                    scaleY: 0.9,
                                    rotateZ: -3
                                },
                                0.1
                            ],
                            [
                                {
                                    scaleX: 1.1,
                                    scaleY: 1.1,
                                    rotateZ: 3
                                },
                                0.1
                            ],
                            [
                                {
                                    scaleX: 1.1,
                                    scaleY: 1.1,
                                    rotateZ: -3
                                },
                                0.1
                            ],
                            [
                                "reverse",
                                0.125
                            ],
                            [
                                "reverse",
                                0.125
                            ],
                            [
                                "reverse",
                                0.125
                            ],
                            [
                                "reverse",
                                0.125
                            ],
                            [
                                "reverse",
                                0.125
                            ],
                            [
                                {
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotateZ: 0
                                },
                                0.2
                            ]
                        ]
                    },
                    "transition.fadeIn": {
                        defaultDuration: 500,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ]
                                }
                            ]
                        ]
                    },
                    "transition.fadeOut": {
                        defaultDuration: 500,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ]
                                }
                            ]
                        ]
                    },
                    "transition.flipXIn": {
                        defaultDuration: 700,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    rotateY: [
                                        0,
                                        -55
                                    ]
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipXOut": {
                        defaultDuration: 700,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    rotateY: 55
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateY: 0
                        }
                    },
                    "transition.flipYIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    rotateX: [
                                        0,
                                        -45
                                    ]
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipYOut": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    rotateX: 25
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateX: 0
                        }
                    },
                    "transition.flipBounceXIn": {
                        defaultDuration: 900,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0.725,
                                        0
                                    ],
                                    transformPerspective: [
                                        400,
                                        400
                                    ],
                                    rotateY: [
                                        -10,
                                        90
                                    ]
                                },
                                0.5
                            ],
                            [
                                {
                                    opacity: 0.8,
                                    rotateY: 10
                                },
                                0.25
                            ],
                            [
                                {
                                    opacity: 1,
                                    rotateY: 0
                                },
                                0.25
                            ]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipBounceXOut": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0.9,
                                        1
                                    ],
                                    transformPerspective: [
                                        400,
                                        400
                                    ],
                                    rotateY: -10
                                }
                            ],
                            [
                                {
                                    opacity: 0,
                                    rotateY: 90
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateY: 0
                        }
                    },
                    "transition.flipBounceYIn": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0.725,
                                        0
                                    ],
                                    transformPerspective: [
                                        400,
                                        400
                                    ],
                                    rotateX: [
                                        -10,
                                        90
                                    ]
                                },
                                0.5
                            ],
                            [
                                {
                                    opacity: 0.8,
                                    rotateX: 10
                                },
                                0.25
                            ],
                            [
                                {
                                    opacity: 1,
                                    rotateX: 0
                                },
                                0.25
                            ]
                        ],
                        reset: {
                            transformPerspective: 0
                        }
                    },
                    "transition.flipBounceYOut": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0.9,
                                        1
                                    ],
                                    transformPerspective: [
                                        400,
                                        400
                                    ],
                                    rotateX: -15
                                }
                            ],
                            [
                                {
                                    opacity: 0,
                                    rotateX: 90
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            rotateX: 0
                        }
                    },
                    "transition.swoopIn": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformOriginX: [
                                        "100%",
                                        "50%"
                                    ],
                                    transformOriginY: [
                                        "100%",
                                        "100%"
                                    ],
                                    scaleX: [
                                        1,
                                        0
                                    ],
                                    scaleY: [
                                        1,
                                        0
                                    ],
                                    translateX: [
                                        0,
                                        -700
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.swoopOut": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformOriginX: [
                                        "50%",
                                        "100%"
                                    ],
                                    transformOriginY: [
                                        "100%",
                                        "100%"
                                    ],
                                    scaleX: 0,
                                    scaleY: 0,
                                    translateX: -700,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            scaleX: 1,
                            scaleY: 1,
                            translateX: 0
                        }
                    },
                    "transition.whirlIn": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformOriginX: [
                                        "50%",
                                        "50%"
                                    ],
                                    transformOriginY: [
                                        "50%",
                                        "50%"
                                    ],
                                    scaleX: [
                                        1,
                                        0
                                    ],
                                    scaleY: [
                                        1,
                                        0
                                    ],
                                    rotateY: [
                                        0,
                                        160
                                    ]
                                },
                                1,
                                {
                                    easing: "easeInOutSine"
                                }
                            ]
                        ]
                    },
                    "transition.whirlOut": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        "easeInOutQuint",
                                        1
                                    ],
                                    transformOriginX: [
                                        "50%",
                                        "50%"
                                    ],
                                    transformOriginY: [
                                        "50%",
                                        "50%"
                                    ],
                                    scaleX: 0,
                                    scaleY: 0,
                                    rotateY: 160
                                },
                                1,
                                {
                                    easing: "swing"
                                }
                            ]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1,
                            rotateY: 0
                        }
                    },
                    "transition.shrinkIn": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformOriginX: [
                                        "50%",
                                        "50%"
                                    ],
                                    transformOriginY: [
                                        "50%",
                                        "50%"
                                    ],
                                    scaleX: [
                                        1,
                                        1.5
                                    ],
                                    scaleY: [
                                        1,
                                        1.5
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.shrinkOut": {
                        defaultDuration: 600,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformOriginX: [
                                        "50%",
                                        "50%"
                                    ],
                                    transformOriginY: [
                                        "50%",
                                        "50%"
                                    ],
                                    scaleX: 1.3,
                                    scaleY: 1.3,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.expandIn": {
                        defaultDuration: 700,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformOriginX: [
                                        "50%",
                                        "50%"
                                    ],
                                    transformOriginY: [
                                        "50%",
                                        "50%"
                                    ],
                                    scaleX: [
                                        1,
                                        0.625
                                    ],
                                    scaleY: [
                                        1,
                                        0.625
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.expandOut": {
                        defaultDuration: 700,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformOriginX: [
                                        "50%",
                                        "50%"
                                    ],
                                    transformOriginY: [
                                        "50%",
                                        "50%"
                                    ],
                                    scaleX: 0.5,
                                    scaleY: 0.5,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.bounceIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    scaleX: [
                                        1.05,
                                        0.3
                                    ],
                                    scaleY: [
                                        1.05,
                                        0.3
                                    ]
                                },
                                0.35
                            ],
                            [
                                {
                                    scaleX: 0.9,
                                    scaleY: 0.9,
                                    translateZ: 0
                                },
                                0.2
                            ],
                            [
                                {
                                    scaleX: 1,
                                    scaleY: 1
                                },
                                0.45
                            ]
                        ]
                    },
                    "transition.bounceOut": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    scaleX: 0.95,
                                    scaleY: 0.95
                                },
                                0.35
                            ],
                            [
                                {
                                    scaleX: 1.1,
                                    scaleY: 1.1,
                                    translateZ: 0
                                },
                                0.35
                            ],
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    scaleX: 0.3,
                                    scaleY: 0.3
                                },
                                0.3
                            ]
                        ],
                        reset: {
                            scaleX: 1,
                            scaleY: 1
                        }
                    },
                    "transition.bounceUpIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateY: [
                                        -30,
                                        1000
                                    ]
                                },
                                0.6,
                                {
                                    easing: "easeOutCirc"
                                }
                            ],
                            [
                                {
                                    translateY: 10
                                },
                                0.2
                            ],
                            [
                                {
                                    translateY: 0
                                },
                                0.2
                            ]
                        ]
                    },
                    "transition.bounceUpOut": {
                        defaultDuration: 1000,
                        calls: [
                            [
                                {
                                    translateY: 20
                                },
                                0.2
                            ],
                            [
                                {
                                    opacity: [
                                        0,
                                        "easeInCirc",
                                        1
                                    ],
                                    translateY: -1000
                                },
                                0.8
                            ]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.bounceDownIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateY: [
                                        30,
                                        -1000
                                    ]
                                },
                                0.6,
                                {
                                    easing: "easeOutCirc"
                                }
                            ],
                            [
                                {
                                    translateY: -10
                                },
                                0.2
                            ],
                            [
                                {
                                    translateY: 0
                                },
                                0.2
                            ]
                        ]
                    },
                    "transition.bounceDownOut": {
                        defaultDuration: 1000,
                        calls: [
                            [
                                {
                                    translateY: -20
                                },
                                0.2
                            ],
                            [
                                {
                                    opacity: [
                                        0,
                                        "easeInCirc",
                                        1
                                    ],
                                    translateY: 1000
                                },
                                0.8
                            ]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.bounceLeftIn": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateX: [
                                        30,
                                        -1250
                                    ]
                                },
                                0.6,
                                {
                                    easing: "easeOutCirc"
                                }
                            ],
                            [
                                {
                                    translateX: -10
                                },
                                0.2
                            ],
                            [
                                {
                                    translateX: 0
                                },
                                0.2
                            ]
                        ]
                    },
                    "transition.bounceLeftOut": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    translateX: 30
                                },
                                0.2
                            ],
                            [
                                {
                                    opacity: [
                                        0,
                                        "easeInCirc",
                                        1
                                    ],
                                    translateX: -1250
                                },
                                0.8
                            ]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.bounceRightIn": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateX: [
                                        -30,
                                        1250
                                    ]
                                },
                                0.6,
                                {
                                    easing: "easeOutCirc"
                                }
                            ],
                            [
                                {
                                    translateX: 10
                                },
                                0.2
                            ],
                            [
                                {
                                    translateX: 0
                                },
                                0.2
                            ]
                        ]
                    },
                    "transition.bounceRightOut": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    translateX: -30
                                },
                                0.2
                            ],
                            [
                                {
                                    opacity: [
                                        0,
                                        "easeInCirc",
                                        1
                                    ],
                                    translateX: 1250
                                },
                                0.8
                            ]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideUpIn": {
                        defaultDuration: 900,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateY: [
                                        0,
                                        20
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideUpOut": {
                        defaultDuration: 900,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateY: -20,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideDownIn": {
                        defaultDuration: 900,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateY: [
                                        0,
                                        -20
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideDownOut": {
                        defaultDuration: 900,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateY: 20,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideLeftIn": {
                        defaultDuration: 1000,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateX: [
                                        0,
                                        -20
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideLeftOut": {
                        defaultDuration: 1050,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateX: -20,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideRightIn": {
                        defaultDuration: 1000,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateX: [
                                        0,
                                        20
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideRightOut": {
                        defaultDuration: 1050,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateX: 20,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideUpBigIn": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateY: [
                                        0,
                                        75
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideUpBigOut": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateY: -75,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideDownBigIn": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateY: [
                                        0,
                                        -75
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideDownBigOut": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateY: 75,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateY: 0
                        }
                    },
                    "transition.slideLeftBigIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateX: [
                                        0,
                                        -75
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideLeftBigOut": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateX: -75,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.slideRightBigIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    translateX: [
                                        0,
                                        75
                                    ],
                                    translateZ: 0
                                }
                            ]
                        ]
                    },
                    "transition.slideRightBigOut": {
                        defaultDuration: 750,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    translateX: 75,
                                    translateZ: 0
                                }
                            ]
                        ],
                        reset: {
                            translateX: 0
                        }
                    },
                    "transition.perspectiveUpIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    transformOriginX: [
                                        0,
                                        0
                                    ],
                                    transformOriginY: [
                                        "100%",
                                        "100%"
                                    ],
                                    rotateX: [
                                        0,
                                        -180
                                    ]
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveUpOut": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    transformOriginX: [
                                        0,
                                        0
                                    ],
                                    transformOriginY: [
                                        "100%",
                                        "100%"
                                    ],
                                    rotateX: -180
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateX: 0
                        }
                    },
                    "transition.perspectiveDownIn": {
                        defaultDuration: 800,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    transformOriginX: [
                                        0,
                                        0
                                    ],
                                    transformOriginY: [
                                        0,
                                        0
                                    ],
                                    rotateX: [
                                        0,
                                        180
                                    ]
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveDownOut": {
                        defaultDuration: 850,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformPerspective: [
                                        800,
                                        800
                                    ],
                                    transformOriginX: [
                                        0,
                                        0
                                    ],
                                    transformOriginY: [
                                        0,
                                        0
                                    ],
                                    rotateX: 180
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateX: 0
                        }
                    },
                    "transition.perspectiveLeftIn": {
                        defaultDuration: 950,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformPerspective: [
                                        2000,
                                        2000
                                    ],
                                    transformOriginX: [
                                        0,
                                        0
                                    ],
                                    transformOriginY: [
                                        0,
                                        0
                                    ],
                                    rotateY: [
                                        0,
                                        -180
                                    ]
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveLeftOut": {
                        defaultDuration: 950,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformPerspective: [
                                        2000,
                                        2000
                                    ],
                                    transformOriginX: [
                                        0,
                                        0
                                    ],
                                    transformOriginY: [
                                        0,
                                        0
                                    ],
                                    rotateY: -180
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateY: 0
                        }
                    },
                    "transition.perspectiveRightIn": {
                        defaultDuration: 950,
                        calls: [
                            [
                                {
                                    opacity: [
                                        1,
                                        0
                                    ],
                                    transformPerspective: [
                                        2000,
                                        2000
                                    ],
                                    transformOriginX: [
                                        "100%",
                                        "100%"
                                    ],
                                    transformOriginY: [
                                        0,
                                        0
                                    ],
                                    rotateY: [
                                        0,
                                        180
                                    ]
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%"
                        }
                    },
                    "transition.perspectiveRightOut": {
                        defaultDuration: 950,
                        calls: [
                            [
                                {
                                    opacity: [
                                        0,
                                        1
                                    ],
                                    transformPerspective: [
                                        2000,
                                        2000
                                    ],
                                    transformOriginX: [
                                        "100%",
                                        "100%"
                                    ],
                                    transformOriginY: [
                                        0,
                                        0
                                    ],
                                    rotateY: 180
                                }
                            ]
                        ],
                        reset: {
                            transformPerspective: 0,
                            transformOriginX: "50%",
                            transformOriginY: "50%",
                            rotateY: 0
                        }
                    }
                };
                for(const c in o.RegisterEffect.packagedEffects){
                    if (o.RegisterEffect.packagedEffects.hasOwnProperty(c)) {
                        o.RegisterEffect(c, o.RegisterEffect.packagedEffects[c]);
                    }
                }
                o.RunSequence = function(e) {
                    const t = a.extend(true, [], e);
                    if (t.length > 1) {
                        a.each(t.reverse(), function(e, n) {
                            const r = t[e + 1];
                            if (r) {
                                const i = n.o || n.options;
                                const l = r.o || r.options;
                                const s = i && i.sequenceQueue === false ? "begin" : "complete";
                                const u = l && l[s];
                                const c = {};
                                c[s] = function() {
                                    const e = r.e || r.elements;
                                    const t = e.nodeType ? [
                                        e
                                    ] : e;
                                    if (u) {
                                        u.call(t, t);
                                    }
                                    o(n);
                                };
                                if (r.o) {
                                    r.o = a.extend({}, l, c);
                                } else {
                                    r.options = a.extend({}, l, c);
                                }
                            }
                        });
                        t.reverse();
                    }
                    o(t[0]);
                };
            })(window.jQuery || window.Zepto || window, window);
        });
    }
    let _ = false;
    function f() {
        if (!_) {
            _ = true;
            p();
        }
        return m.exports;
    }
    function g(e) {
        switch(e){
            case void 0:
                return c();
            case "/velocity.ui":
                return f();
            case "/velocity.ui":
                return f();
        }
    }
    a.exports = g;
}, null);