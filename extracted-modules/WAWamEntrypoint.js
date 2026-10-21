__d("WAWamEntrypoint", [
    "Promise",
    "WAWamManager",
    "WAWamUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 1;
    let u = false;
    let c = null;
    function d() {
        if (!c) {
            c = new (o("WAWamManager")).WamManager;
        }
        return c;
    }
    function m() {
        u = true;
    }
    function p(e, t, n, r, o) {
        d().initialize(n, e, t, r, o);
    }
    function _() {
        d().deinitialize();
    }
    function f(e, t, n, r, a, i = s, l) {
        const c = Date.now();
        u && l != null;
        d().enqueueEvent(e, t, c, n, o("WAWamUtils").appendRawFields(r, a), i);
    }
    function g(t, r, a, i, l, c = s, m) {
        const p = Date.now();
        u && m != null;
        return new (e || (e = n("Promise")))(function(e) {
            d().enqueueEvent(t, r, p, a, o("WAWamUtils").appendRawFields(i, l), c, e);
        });
    }
    function h(e, t) {
        const n = o("WAWamUtils").getDeltaFromAttributes(e);
        if (n != null) {
            const { deltaPrivate: r, deltaRegular: a } = n;
            u && t != null;
            if (a.size > 0) {
                d().enqueueAttributesUpdate("regular", a);
            }
            if (r.size > 0) {
                d().enqueueAttributesUpdate("private", r);
            }
        }
    }
    function y(e) {
        d().updatePrivateStatsIds(e);
    }
    function C() {
        d().forceFlushBuffers();
    }
    function b() {
        d().rotateBuffers();
    }
    l.enableDebugMode = m;
    l.initializeWAM = p;
    l.deinitializeWAM = _;
    l.log = f;
    l.logAsync = g;
    l.logAttributes = h;
    l.updatePrivateStatsIds = y;
    l.forceFlushBuffers = C;
    l.rotateBuffers = b;
}, 98);