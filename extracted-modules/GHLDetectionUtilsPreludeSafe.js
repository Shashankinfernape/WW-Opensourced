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