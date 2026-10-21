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