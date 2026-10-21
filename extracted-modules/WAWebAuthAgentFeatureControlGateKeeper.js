__d("WAWebAuthAgentFeatureControlGateKeeper", [
    "WAWebBizCoexGatingUtils",
    "WAWebFeatureControlCache",
    "WAWebFeatureControlPolicy"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = false;
    function s(t, n) {
        if (!e) {
            e = true;
            const r = Object.entries(t.entries).filter(([, t])=>t === "DISABLED").map(([t])=>t).sort();
            const o = Object.entries(t.entries).filter(([, t])=>t === "LOCKED").map(([t])=>t).sort();
        }
    }
    function u(t) {
        const n = o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled();
        const r = o("WAWebFeatureControlCache").getUserIsAA();
        const a = n && r;
        if (!a) {
            if (!e) {
                e = true;
            }
            return "ENABLED";
        }
        const i = o("WAWebFeatureControlCache").getPolicy();
        const l = i ?? o("WAWebFeatureControlPolicy").PILOT_DEFAULT;
        s(l, i != null ? "cached" : "pilot_default");
        return o("WAWebFeatureControlPolicy").featureState(l, t);
    }
    function c(e) {
        return u(e) === "ENABLED";
    }
    function d(e) {
        return u(e) === "DISABLED";
    }
    function m(e) {
        return u(e) === "LOCKED";
    }
    l.getFeatureState = u;
    l.isFeatureEnabled = c;
    l.isFeatureDisabled = d;
    l.isFeatureLocked = m;
}, 98);