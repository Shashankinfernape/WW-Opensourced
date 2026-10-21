__d("WAWebLeadStageStore", [
    "WALogger",
    "WAWebApiContact",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebLeadSublistChangeNotifier",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = new Map;
    const u = new Map;
    let c = null;
    let d = null;
    let m = 0;
    const p = new Set;
    function _(e) {
        return b(u, e) ?? b(s, e);
    }
    function f(e) {
        return b(u, e);
    }
    function g(e, t) {
        if (u.get(e) !== t) {
            u.set(e, t);
            v();
        }
    }
    function h(e) {
        if (u.delete(e)) {
            v();
        }
    }
    function y(e) {
        p.add(e);
        if (d == null) {
            d = o("WAWebLeadSublistChangeNotifier").subscribeToLeadSublistChanges(T);
        }
        R();
        return function() {
            p.delete(e);
            if (p.size === 0) {
                if (d != null) {
                    d();
                }
                d = null;
                c = null;
            }
        };
    }
    function C() {
        s = new Map;
        u.clear();
        c = null;
        m++;
        d?.();
        d = null;
        p.clear();
    }
    function b(e, t) {
        const n = e.get(t);
        if (n != null) {
            return n;
        }
        const r = S(t);
        if (r != null) {
            return e.get(r);
        }
        return null;
    }
    function v() {
        for (const e of p){
            e();
        }
    }
    function S(e) {
        if (!r("WAWebWid").isWid(e)) {
            return null;
        }
        const n = o("WAWebWidFactory").createWid(e);
        if (n.isUser()) {
            return o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(n))?.toString();
        }
        return null;
    }
    function R() {
        if (c == null) {
            c = L();
        }
        return c;
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = ++m;
            let n = null;
            try {
                n = I((yield o("WAWebDBLabelSublistDatabaseApi").getAllLabelSublist()));
            } catch (error) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[CustomerManager] lead stage store read failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("customer_manager_lead_stage_store_read_failed");
            }
            if (t === m) {
                if (n == null) {
                    c = null;
                    return;
                }
                s = n;
                k();
                v();
            }
        });
        return E.apply(this, arguments);
    }
    function k() {
        for (const [t, n] of u){
            if (b(s, t) === n) {
                u.delete(t);
            }
        }
    }
    function I(e) {
        const t = new Map;
        for (const n of e){
            if (n.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID) {
                const r = o("WAWebLeadStage").getLeadStageFromNumber(n.subListId);
                if (r != null) {
                    t.set(n.chatJid, r);
                }
            }
        }
        return t;
    }
    function T() {
        c = L();
    }
    l.getLeadStageFromStore = _;
    l.getPendingLeadStage = f;
    l.publishPendingLeadStage = g;
    l.clearPendingLeadStage = h;
    l.subscribeToLeadStageStore = y;
    l.resetLeadStageStore = C;
}, 98);