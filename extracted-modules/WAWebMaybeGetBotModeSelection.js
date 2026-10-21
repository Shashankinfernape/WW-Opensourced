__d("WAWebMaybeGetBotModeSelection", [
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotModeSelectionTypes",
    "WAWebBotUtils",
    "WAWebDynamicAIModesCache",
    "WAWebThreadMsgUtils"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    const s = [];
    function u() {
        s.forEach((e)=>e());
    }
    function c(e) {
        s.push(e);
        return function() {
            const t = s.indexOf(e);
            if (t !== -1) {
                s.splice(t, 1);
            }
        };
    }
    function d(t) {
        e = t;
        u();
    }
    function m() {
        return e;
    }
    function p() {
        if (e != null) {
            e = null;
            u();
        }
    }
    const _ = [
        0
    ];
    let f = null;
    function g(e) {
        f = e;
        u();
    }
    function h() {
        return f;
    }
    function y() {
        if (f != null) {
            f = null;
            u();
        }
    }
    function C(e, t) {
        if (t != null) {
            const r = e.aiThreads?.get(t);
            if (r?.botModeSelection != null) {
                return r.botModeSelection;
            }
        }
    }
    function b(e, t) {
        const n = t.to;
        if (o("WAWebBotUtils").isMetaAiBot(n)) {
            const r = o("WAWebThreadMsgUtils").getMsgAiThread(t);
            if (r != null) {
                const a = C(e, r);
                if (a !== undefined) {
                    return a;
                }
            }
            const i = m();
            return i ?? [
                o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default
            ];
        }
    }
    function v(e, t) {
        const r = t.to;
        if (!(!o("WAWebBotUtils").isMetaAiBot(r) || !o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) && o("WAWebBotGating").isAiModeSelectorInteractive()) {
            const a = o("WAWebDynamicAIModesCache").getStaleCachedDynamicAIModes() ?? [];
            if (a.length !== 0) {
                if (a.length === 1) {
                    return [
                        a[0].modeId
                    ];
                }
                const i = o("WAWebThreadMsgUtils").getMsgAiThread(t);
                if (i != null) {
                    const s = e.aiThreads?.get(i);
                    if (s?.botModeOverride != null) {
                        return s.botModeOverride;
                    }
                }
                const u = h();
                return u ?? _;
            }
        }
    }
    l.subscribeToBotModeSelection = c;
    l.storeInMemoryBotMode = d;
    l.getInMemoryBotMode = m;
    l.clearInMemoryBotMode = p;
    l.storeInMemoryBotModeOverride = g;
    l.getInMemoryBotModeOverride = h;
    l.clearInMemoryBotModeOverride = y;
    l.maybeGetBotModeSelection = b;
    l.maybeGetBotDynamicModeSelection = v;
}, 98);