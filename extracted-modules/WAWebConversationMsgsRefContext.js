__d("WAWebConversationMsgsRefContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const createContext = (e || (e = o("react"))).createContext;
    const u = [];
    const CContext = createContext(null);
    function d() {
        let e = null;
        let t = null;
        const n = new Set;
        const r = function() {
            n.forEach((e)=>e());
        };
        const o = ()=>{
            t?.();
            t = e != null && n.size > 0 ? e.subscribeToVisibleMessageAnchors(r) : null;
        };
        return {
            source: {
                getVisibleMessageAnchors: function() {
                    return e?.getVisibleMessageAnchors() ?? u;
                },
                subscribeToVisibleMessageAnchors: function(t) {
                    const e = n.size === 0;
                    n.add(t);
                    if (e) {
                        o();
                    }
                    return function() {
                        n.delete(t);
                        if (n.size === 0) {
                            o();
                        }
                    };
                }
            },
            updateSource: function(n) {
                if (e !== n) {
                    e = n;
                    o();
                    r();
                }
            }
        };
    }
    l.WAWebConversationMsgsRefContext = CContext;
    l.createWAWebVisibleMessageAnchorSourceProxy = d;
}, 98);