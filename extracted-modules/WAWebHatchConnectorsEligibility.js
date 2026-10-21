__d("WAWebHatchConnectorsEligibility", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new Set([
        "auth"
    ]);
    const l = "browser";
    const s = new Set([
        "stripe_link",
        "shop_pay",
        "meta_pay"
    ]);
    function u(e) {
        const connected = [];
        const available = [];
        for (const r of e){
            if (!(m(r) || !_(r))) {
                if (r.state === "connected") {
                    connected.push(r);
                } else {
                    available.push(r);
                }
            }
        }
        return {
            connected,
            available
        };
    }
    function c(e) {
        const t = e.filter((e)=>m(e) && _(e));
        return [].concat(t.filter((e)=>e.state === "connected"), t.filter((e)=>e.state !== "connected"));
    }
    function d(e) {
        return e.managementKind === "policy_only" && p(e.id) === l;
    }
    function m(e) {
        return s.has(p(e.id));
    }
    function p(e) {
        return e.trim().toLowerCase().replace(/[- ]/g, "_");
    }
    function _(t) {
        switch(t.state){
            case "connected":
                return e.has(t.managementKind) || d(t);
            case "disconnected":
                return e.has(t.managementKind);
            default:
                return false;
        }
    }
    i.groupEligibleHatchConnectors = u;
    i.listEligibleHatchWalletConnectors = c;
    i.isHatchPermissionsOnlyConnector = d;
    i.isHatchWalletConnector = m;
    i.isManageableHatchConnector = _;
}, 66);