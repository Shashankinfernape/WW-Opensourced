__d("ImageMutationTracker", [
    "VisualCompletionUtil",
    "WebAPIs",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s = null;
    const u = new Set;
    const c = new Set;
    class d {
        constructor(){
            this.$2 = false;
            this.$3 = typeof o("WebAPIs").WeakSet === "function" ? new (o("WebAPIs")).WeakSet : null;
        }
        init() {
            const e = this;
            if (!this.$2) {
                this.$1 = new MutationObserver(function(t) {
                    e.$4(t);
                });
                this.$1.observe(document.documentElement, {
                    childList: true,
                    attributes: true,
                    attributeOldValue: true,
                    attributeFilter: [
                        "src",
                        "hidden",
                        "style"
                    ],
                    characterData: false,
                    subtree: true
                });
                this.$2 = true;
            }
        }
        $4(n) {
            const t = this;
            const a = (e || (e = r("performanceNow")))();
            Array.from(n).forEach((e)=>{
                if (e.type === "childList" && e.addedNodes && e.addedNodes.length) {
                    Array.from(e.addedNodes).forEach((e)=>{
                        let n;
                        const r = e;
                        if (o("VisualCompletionUtil").isImage(r) && !((n = t.$3) != null && n.has(r)) && r.hasAttribute("data-imgperflogname")) {
                            t.$3?.add(r);
                            C(r, "imgLoad", a);
                            return;
                        } else if (o("VisualCompletionUtil").isElementNode(r)) {
                            const l = t.$5(r);
                            l.forEach((e)=>{
                                let n;
                                if (!((n = t.$3) != null && n.has(e))) {
                                    t.$3?.add(e);
                                    C(e, "imgLoad", a);
                                }
                            });
                        }
                    });
                } else if (e.type === "attributes") {
                    const n = e.target;
                    if (!n.hasAttribute("data-imgperflogname")) {
                        return;
                    }
                    const r = e.attributeName;
                    if (r === "hidden") {
                        if (!n.hasAttribute("hidden")) {
                            let i;
                            if (!((i = t.$3) != null && i.has(n))) {
                                t.$3?.add(n);
                                C(n, "mutationHiddenAttribute", a);
                            }
                        }
                    } else if (r === "style") {
                        const s = n.getAttribute("style");
                        const u = e.oldValue;
                        if (o("VisualCompletionUtil").checkInvisibleStyle(u) && !o("VisualCompletionUtil").checkInvisibleStyle(s)) {
                            let c;
                            if (!((c = t.$3) != null && c.has(n))) {
                                t.$3?.add(n);
                                C(n, "mutationStyleAttribute", a);
                            }
                        }
                    } else if (o("VisualCompletionUtil").getTagName(n) === "image" && r === "href" || o("VisualCompletionUtil").getTagName(n) === "IMG" && r === "src") {
                        let m;
                        if (!((m = t.$3) != null && m.has(n))) {
                            t.$3?.add(n);
                            C(n, "mutationImageAttribute", a);
                        }
                    }
                }
                if (e.type === "childList" && e.removedNodes && e.removedNodes.length) {
                    Array.from(e.removedNodes).forEach((e)=>{
                        const n = e;
                        if (o("VisualCompletionUtil").isImage(n) && n.hasAttribute("data-imgperflogname")) {
                            b(n);
                        } else if (o("VisualCompletionUtil").isElementNode(n)) {
                            const r = t.$5(n);
                            r.forEach((e)=>b(e));
                        }
                    });
                }
            });
        }
        $5(t) {
            const e = [];
            const n = t.querySelectorAll("img[data-imgperflogname], image[data-imgperflogname]");
            Array.from(n).forEach((t)=>{
                if (o("VisualCompletionUtil").isImage(t)) {
                    e.push(t);
                }
            });
            return e;
        }
        disconnect() {
            if (this.$1) {
                this.$1.disconnect();
                this.$1 = null;
            }
            this.$2 = false;
        }
    }
    function m() {
        if (!s) {
            s = new d;
        }
        return s;
    }
    function p(e, t) {
        if (e != null) {
            f(e);
        }
        if (t != null) {
            h(t);
        }
        m().init();
    }
    function _() {
        if (s) {
            s.disconnect();
        }
    }
    function f(e) {
        u.add(e);
    }
    function g(e) {
        u.delete(e);
    }
    function h(e) {
        c.add(e);
    }
    function y(e) {
        c.delete(e);
    }
    function C(e, t, n) {
        u.forEach((r)=>r(e, t, n));
    }
    function b(e) {
        c.forEach((t)=>t(e));
    }
    l.getInstance = m;
    l.init = p;
    l.disconnect = _;
    l.subscribeImageLoadStart = f;
    l.unsubscribeImageLoadStart = g;
    l.subscribeImageRemove = h;
    l.unsubscribeImageRemove = y;
}, 98);