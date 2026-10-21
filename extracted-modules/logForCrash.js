__d("logForCrash", [
    "BrowserCrashStaticConfig",
    "FBLogger",
    "JSErrorLoggingConfig",
    "Promise",
    "getErrorSafe",
    "gkx",
    "justknobx",
    "logForCrashUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        return !(!("crashReport" in window) || !R(window.crashReport?.set) || !R(window.crashReport?.initialize));
    }
    const u = s();
    const c = 28 * 1024;
    const d = 50;
    const m = "meta-crash-storage";
    let p = false;
    const _ = [];
    function f() {
        const e = _.splice(0);
        for (const t of e){
            g(t);
        }
    }
    function g(t) {
        try {
            const o = t();
            if (o instanceof (e || (e = n("Promise")))) {
                o.catch((e)=>{
                    r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(e)).warn("onLogForCrashReady callback failed");
                });
            }
        } catch (error) {
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("onLogForCrashReady callback failed");
        }
    }
    function h() {
        if (!(!u || p || !r("justknobx")._("195") || !r("gkx")("207"))) {
            b(c);
        }
    }
    function y() {
        p = true;
        f();
    }
    function C(e) {
        if (e == null) {
            return false;
        }
        return e?.message === "The requested size is too large.";
    }
    function b(e) {
        try {
            window.crashReport?.initialize(e)?.then(y)?.catch(function(t) {
                if (C(t) && e >= d) {
                    b(Math.floor(e / 2));
                    return;
                }
                v();
            });
        } catch (error) {
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to initialize crash report storage");
        }
    }
    function v() {
        try {
            window.crashReport?.initialize(m)?.then(y)?.catch(function(e) {
                r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(e)).warn("Failed to initialize crash report storage with name fallback");
                p = false;
            });
        } catch (error) {
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to initialize crash report storage with name fallback");
        }
    }
    h();
    function S(e) {
        if (typeof e.replace === "function") {
            return e.replace(/\n/g, " ").replace(/\s+/g, " ");
        }
        return null;
    }
    function R(e) {
        if (typeof e !== "function" || typeof e.toString !== "function") {
            return false;
        }
        const t = S(e.toString());
        if (t == null) {
            return false;
        }
        return t.endsWith("{ [native code] }");
    }
    function L(e, t) {
        if (e.length <= t) {
            return e;
        }
        const n = e.length - t;
        return `${e.slice(0, t)}...(${n} more)`;
    }
    function E() {
        const LOGGING_SIZE_MAP_MAX_ENTRIES = r("BrowserCrashStaticConfig").LOGGING_SIZE_MAP_MAX_ENTRIES;
        const LOGGING_SIZE_MAP_MAX_KEY_LENGTH = r("BrowserCrashStaticConfig").LOGGING_SIZE_MAP_MAX_KEY_LENGTH;
        const n = Array.from(x).sort((e, t)=>t[1] - e[1]);
        const n_length = n.length;
        const a = n.reduce((acc, item)=>acc + item[1], 0);
        const i = n.slice(0, LOGGING_SIZE_MAP_MAX_ENTRIES);
        const l = i.map(([n, r])=>`${L(n, LOGGING_SIZE_MAP_MAX_KEY_LENGTH)}:${r}`);
        let s = l.join(",");
        if (n_length > LOGGING_SIZE_MAP_MAX_ENTRIES) {
            s += `,...(${n_length - LOGGING_SIZE_MAP_MAX_ENTRIES} more entries)`;
        }
        s += ` [total: ${n_length} entries, ${a} bytes]`;
        return s;
    }
    const k = 119211728144504;
    const I = o("JSErrorLoggingConfig").appId === k && r("gkx")("3981");
    let T = 0;
    let D = false;
    var x = new Map;
    let $ = 0;
    const P = 5;
    let N = 0;
    const M = 4;
    let w = null;
    function A(e) {
        try {
            if (w === null) {
                if (typeof window.crashReport?.remove === "function") {
                    w = "remove";
                } else if (typeof window.crashReport?.delete === "function") {
                    w = "delete";
                } else {
                    w = "none";
                }
            }
            if (w === "remove") {
                window.crashReport.remove(e);
                T = 0;
            } else if (w === "delete") {
                window.crashReport.delete(e);
                T = 0;
            }
        } catch (error) {
            if (++T > r("BrowserCrashStaticConfig").LOG_FOR_CRASH_MAX_FAIL_COUNT) {
                D = true;
            }
            r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to remove crash report storage for key: %s, logged entry sizes: %s", L(e, r("BrowserCrashStaticConfig").LOG_KEY_MAX_LENGTH), E());
        }
    }
    function F(e, t, n = {
        isSystem: false
    }) {
        if (!(D || !u || !p || t == null)) {
            const o = typeof t === "object" ? W(t) : t.toString();
            if (o != null) {
                let a = n.isSystem === true ? e : `@${e}`;
                if (n.isJSStackTrace === true) {
                    a = `${r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX}:${a}`;
                }
                try {
                    A(a);
                    x.set(a, o.length);
                    window.crashReport?.set(a, o);
                    T = 0;
                } catch (error) {
                    if (++T > r("BrowserCrashStaticConfig").LOG_FOR_CRASH_MAX_FAIL_COUNT) {
                        D = true;
                    }
                    if (!I || N++ < M) {
                        r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to set crash report storage for key: %s, value: %s, logged entry sizes: %s", L(e, r("BrowserCrashStaticConfig").LOG_KEY_MAX_LENGTH), L(o, r("BrowserCrashStaticConfig").LOG_VALUE_MAX_LENGTH), E());
                    }
                }
            }
        }
    }
    function O(e, t = {
        isSystem: false
    }) {
        if (!(!u || !p || D)) {
            let n = t.isSystem === true ? e : `@${e}`;
            if (t.isJSStackTrace === true) {
                n = `${r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX}:${n}`;
            }
            try {
                A(n);
            } catch (error) {
                if (I ? N++ < M : $++ < P) {
                    r("FBLogger")("log-for-crash").catching(r("getErrorSafe")(error)).warn("Failed to clear crash report storage for key: %s", e);
                }
            }
        }
    }
    function B(e) {
        if (p) {
            g(e);
            return;
        }
        _.push(e);
    }
    function W(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            r("FBLogger")("log-for-crash").warn("Failed to stringify object for browser crash storage");
            return null;
        }
    }
    l.logForCrash = F;
    l.clearCrashLog = O;
    l.onLogForCrashReady = B;
}, 98);