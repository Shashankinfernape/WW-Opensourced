__d("ClientConsistency", [
    "ClientConsistencyEventEmitter",
    "FBLogger",
    "SiteData",
    "requireWeak"
], function(t, n, r, o, a, i) {
    "use strict";
    const client_revision = n("SiteData").client_revision;
    let l = false;
    let s;
    let u = {};
    const c = new Set;
    const d = new Set;
    const m = (actions)=>{
        u = {};
        const e = Object.keys(actions).sort().reverse();
        if (s === "multiple_revs") {
            s = undefined;
        }
        const r = ()=>{
            const r = Number(o);
            const a = actions[r] ?? [];
            if (a.length === 0) {
                p(r);
                return 1;
            }
            a.forEach((e)=>{
                u[e] = Math.max(u[e] ?? 0, r);
                if (!d.has(e)) {
                    d.add(e);
                    n("requireWeak").call(null, e, function() {
                        if (u[e]) {
                            p(u[e], e);
                        }
                    });
                }
            });
        };
        for (var o of e){
            if (r()) {
                break;
            }
        }
    };
    var p = (t, r)=>{
        if (t > 0 && s == null) {
            n("FBLogger")("client_consistency").debug("Consistency action needed: %s:%s", t, String(r));
            s = "multiple_revs";
        }
        if (t === 2) {
            n("ClientConsistencyEventEmitter").emit("softRefresh", "multiple_revs");
        }
        if (t === 3) {
            n("ClientConsistencyEventEmitter").emit("hardRefresh", "multiple_revs");
        }
    };
    const _ = ({ actions, rev })=>{
        if (rev !== client_revision) {
            if (s === "multiple_revs") {
                s = undefined;
            }
            if (actions != null) {
                m(actions);
            }
        }
    };
    const f = {
        init: function() {
            if (!l) {
                n("ClientConsistencyEventEmitter").addListener("newEntry", function(e) {
                    _(e);
                });
                n("ClientConsistencyEventEmitter").addListener("softRefresh", function(e) {
                    s = e;
                });
                n("ClientConsistencyEventEmitter").addListener("hardRefresh", function(e) {
                    s = e;
                });
                l = true;
            }
        },
        recordResponseRevision: function(n) {
            if (n != null && n !== client_revision) {
                c.add(n);
            }
        },
        addAdditionalRevision: function(r) {
            if (r !== client_revision) {
                c.add(r);
                n("ClientConsistencyEventEmitter").emit("newRevision", r);
            }
        },
        getAdditionalRevisions: function() {
            return c;
        },
        getPendingRefresh: function() {
            return s;
        }
    };
    a.exports = f;
}, null);