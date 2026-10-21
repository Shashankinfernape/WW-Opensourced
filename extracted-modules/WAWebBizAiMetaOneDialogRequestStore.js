__d("WAWebBizAiMetaOneDialogRequestStore", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    let u = 0;
    let c = null;
    let d = null;
    const m = new Set;
    function p(destination) {
        u += 1;
        c = {
            id: u,
            destination
        };
        m.forEach((e)=>e());
    }
    function _(e) {
        if (d === e) {
            return false;
        }
        d = e;
        return true;
    }
    function f(e) {
        if (c?.id === e) {
            c = null;
            m.forEach((e)=>e());
        }
    }
    function useG() {
        return useSyncExternalStore(h, y);
    }
    function h(e) {
        m.add(e);
        return function() {
            m.delete(e);
        };
    }
    function y() {
        return c;
    }
    l.requestMetaOneDialog = p;
    l.claimMetaOneDialogRequest = _;
    l.clearMetaOneDialogRequest = f;
    l.useMetaOneDialogRequest = useG;
}, 98);