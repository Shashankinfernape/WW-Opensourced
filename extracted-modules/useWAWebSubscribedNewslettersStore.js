__d("useWAWebSubscribedNewslettersStore", [
    "WAWebABProps",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebNoop",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    const u = [
        "change:msgs",
        "change:msgsChanged",
        "change:pendingDeleteForMeCount",
        "change:chatlistPreview",
        "change:lastReactionPreview",
        "change:active"
    ];
    function c(e) {
        let t;
        const n = new Map;
        const a = new Map;
        const i = function(r) {
            const t = r.id.toString();
            if (!n.has(t) && r.newsletterMetadata != null) {
                r.newsletterMetadata.on("change:membershipType", e);
                n.set(t, function() {
                    r.newsletterMetadata?.off("change:membershipType", e);
                });
            }
            if (!a.has(t)) {
                u.map((t)=>{
                    r.on(t, e);
                });
                a.set(t, function() {
                    u.map((t)=>{
                        r.off(t, e);
                    });
                });
            }
        };
        const l = function(n) {
            i(n);
            e();
        };
        const s = function(r) {
            const t = r.id.toString();
            const o = n.get(t);
            const i = a.get(t);
            if (o != null) {
                o();
                n.delete(t);
            }
            if (i != null) {
                i();
                a.delete(t);
            }
            e();
        };
        (t = r("WAWebNewsletterCollection")).on("add", l);
        t.on("remove", s);
        t.on("sort", e);
        t.map(i);
        return function() {
            if (o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_2")) {
                r("WAWebNewsletterCollection").off("add", l);
                r("WAWebNewsletterCollection").off("remove", s);
                r("WAWebNewsletterCollection").off("sort", e);
            }
            n.forEach((e)=>e());
            a.forEach((e)=>e());
        };
    }
    let d = [];
    function m() {
        const e = r("WAWebNewsletterCollection").filter(({ newsletterMetadata })=>newsletterMetadata != null && o("WAWebNewsletterMetadataGetters").getIsSubscribedOrOwned(newsletterMetadata));
        if (e.length !== d.length) {
            d = e;
            return d;
        }
        const t = e.some((e, t)=>!d[t].equals(e));
        if (t) {
            d = e;
        }
        return d;
    }
    const p = [];
    function _() {
        return r("WAWebNoop");
    }
    function f() {
        return p;
    }
    function useG(e) {
        const t = e === undefined ? true : e;
        return useSyncExternalStore(t ? c : _, t ? m : f);
    }
    l.default = useG;
}, 98);