__d("DOMMutationTracker", [
    "WebAPIs",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 20;
    function u(e) {
        if (e == null || e === "") {
            return false;
        }
        const t = e.replace(/ /g, "");
        return t.indexOf("display:none") >= 0 || t.indexOf("visibility:hidden") >= 0 || t.indexOf("content-visibility:hidden") >= 0;
    }
    let c = null;
    class d {
        constructor(e = s){
            this.$1 = e;
            this.$2 = new Array(e);
            this.$3 = 0;
            this.$5 = false;
        }
        init(t) {
            const e = this;
            if (!this.$5) {
                this.$4 = new MutationObserver(function(t) {
                    e.$6(t);
                });
                this.$4.observe(document.documentElement, {
                    childList: true,
                    attributes: true,
                    characterData: false,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: false
                });
                this.$5 = true;
            }
        }
        $6(n) {
            const t = this;
            const a = (e || (e = r("performanceNow")))();
            n.forEach((e)=>{
                if (e.target instanceof Element) {
                    const targetRef = new (o("WebAPIs")).WeakRef(e.target);
                    const addedNodesRefs = [];
                    if (e.addedNodes) {
                        for(let i = 0; i < e.addedNodes.length; i++){
                            const addedNode = e.addedNodes[i];
                            if (addedNode instanceof Element) {
                                addedNodesRefs.push(new (o("WebAPIs")).WeakRef(addedNode));
                            }
                        }
                    }
                    const removedNodesRefs = [];
                    if (e.removedNodes) {
                        for(let c = 0; c < e.removedNodes.length; c++){
                            const removedNode = e.removedNodes[c];
                            if (removedNode instanceof Element) {
                                removedNodesRefs.push(new (o("WebAPIs")).WeakRef(removedNode));
                            }
                        }
                    }
                    const hiddenElementRefs = [];
                    const unhiddenElementRefs = [];
                    if (e.type === "attributes") {
                        const _ = e.target;
                        if (_ instanceof Element) {
                            if (e.attributeName === "hidden") {
                                const f = _.hasAttribute("hidden");
                                if (f) {
                                    hiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                } else {
                                    unhiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                }
                            } else if (e.attributeName === "style") {
                                const g = _.getAttribute("style");
                                const h = e.oldValue;
                                const y = u(h);
                                const C = u(g);
                                if (y !== C) {
                                    if (C) {
                                        hiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                    } else if (y && !C) {
                                        unhiddenElementRefs.push(new (o("WebAPIs")).WeakRef(_));
                                    }
                                }
                            }
                        }
                    }
                    const b = {
                        mutation: e,
                        timestamp: a,
                        targetRef,
                        addedNodesRefs,
                        removedNodesRefs,
                        hiddenElementRefs,
                        unhiddenElementRefs
                    };
                    if (addedNodesRefs.length > 0 || removedNodesRefs.length > 0 || hiddenElementRefs.length > 0 || unhiddenElementRefs.length > 0) {
                        t.$2[t.$3] = b;
                        t.$3 = (t.$3 + 1) % t.$1;
                    }
                }
            });
        }
        getMutationsInTimeRange(t, n) {
            if (!this.$5) {
                return [];
            }
            const e = [];
            for(let r = 0; r < this.$1; r++){
                const o = this.$2[r];
                if (o && o.timestamp >= t && o.timestamp <= n) {
                    e.push(o);
                }
            }
            return e;
        }
        hasMutationsInTimeRange(t, n) {
            if (!this.$5) {
                return false;
            }
            for(let e = 0; e < this.$1; e++){
                const r = this.$2[e];
                if (r && r.timestamp >= t && r.timestamp <= n) {
                    return true;
                }
            }
            return false;
        }
        disconnect() {
            if (this.$4) {
                this.$4.disconnect();
                this.$4 = null;
            }
            this.$5 = false;
        }
    }
    function m(e) {
        if (!c) {
            c = new d(e);
        }
        return c;
    }
    function p(e, t) {
        m(t).init(e);
    }
    function _(e, t) {
        return m().getMutationsInTimeRange(e, t);
    }
    function f(e, t) {
        return m().hasMutationsInTimeRange(e, t);
    }
    function g() {
        if (c) {
            c.disconnect();
        }
    }
    l.getInstance = m;
    l.init = p;
    l.getMutationsInTimeRange = _;
    l.hasMutationsInTimeRange = f;
    l.disconnect = g;
}, 98);