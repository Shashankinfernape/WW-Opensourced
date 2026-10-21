__d("unstable_server-external-runtime-exp", [
    "Promise"
], function(t, n, r, o, a, i) {
    let e;
    (()=>{
        const r = t.__fbNativeSetTimeout ?? setTimeout;
        function o(e) {
            e = e.querySelectorAll("template");
            for(let t = 0; t < e.length; t++){
                i(e[t]);
            }
        }
        function a(body) {
            function t(e) {
                for(let t = 0; t < e.length; t++){
                    for(let n = e[t].addedNodes, r = 0; r < n.length; r++){
                        if (n[r].parentNode) {
                            i(n[r]);
                        }
                    }
                }
            }
            const n = new MutationObserver(t);
            n.observe(body, {
                childList: true
            });
            window.addEventListener("DOMContentLoaded", function() {
                t(n.takeRecords());
                n.disconnect();
            });
        }
        function i(e) {
            if (e.nodeType === 1 && e.dataset) {
                const t = e.dataset;
                if (t.rxi != null) {
                    c(t.bid, t.dgst, t.msg, t.stck, t.cstck);
                    e.remove();
                } else if (t.rri != null) {
                    p(t.bid, t.sid, JSON.parse(t.sty));
                    e.remove();
                } else if (t.rci != null) {
                    m(t.bid, t.sid);
                    e.remove();
                } else if (t.rsi != null) {
                    _(t.sid, t.pid);
                    e.remove();
                }
            }
        }
        let l;
        const s = new Map;
        let u = [];
        var c = function(t, n, r, o, a) {
            let e = document.getElementById(t);
            if (e) {
                t = e.previousSibling;
                t.data = "$!";
                e = e.dataset;
                if (n) {
                    e.dgst = n;
                }
                if (r) {
                    e.msg = r;
                }
                if (o) {
                    e.stck = o;
                }
                if (a) {
                    e.cstck = a;
                }
                if (t._reactRetry) {
                    t._reactRetry();
                }
            }
        };
        var d = (function(t, o) {
            function a(e, t) {
                const n = e.getAttribute(t);
                if (n) {
                    t = e.style;
                    s.push(e, t.viewTransitionName, t.viewTransitionClass);
                    if (n !== "auto") {
                        t.viewTransitionClass = n;
                    }
                    if (!(e = e.getAttribute("vt-name"))) {
                        e = `_T_${l++}_`;
                    }
                    t.viewTransitionName = e;
                    i = true;
                }
            }
            var i = false;
            var l = 0;
            var s = [];
            try {
                let c = document.__reactViewTransition;
                if (c) {
                    c.finished.finally(d.bind(null, o));
                    return;
                }
                const m = new Map;
                for(c = 1; c < o.length; c += 2){
                    for(var p = o[c].querySelectorAll("[vt-share]"), _ = 0; _ < p.length; _++){
                        var f = p[_];
                        m.set(f.getAttribute("vt-name"), f);
                    }
                }
                const g = [];
                for(p = 0; p < o.length; p += 2){
                    const h = o[p];
                    const y = h.parentNode;
                    if (y) {
                        const C = y.getBoundingClientRect();
                        if (C.left || C.top || C.width || C.height) {
                            f = h;
                            for(c = 0; f;){
                                if (f.nodeType === 8) {
                                    const b = f.data;
                                    if (b === "/$") {
                                        if (c === 0) {
                                            break;
                                        }
                                        c--;
                                    } else {
                                        if (!(b !== "$" && b !== "$?" && b !== "$~" && b !== "$!")) {
                                            c++;
                                        }
                                    }
                                } else if (f.nodeType === 1) {
                                    _ = f;
                                    const v = _.getAttribute("vt-name");
                                    const S = m.get(v);
                                    a(_, S ? "vt-share" : "vt-exit");
                                    if (S) {
                                        a(S, "vt-share");
                                        m.set(v, null);
                                    }
                                    const R = _.querySelectorAll("[vt-share]");
                                    for(_ = 0; _ < R.length; _++){
                                        const L = R[_];
                                        const E = L.getAttribute("vt-name");
                                        const k = m.get(E);
                                        if (k) {
                                            a(L, "vt-share");
                                            a(k, "vt-share");
                                            m.set(E, null);
                                        }
                                    }
                                }
                                f = f.nextSibling;
                            }
                            const I = o[p + 1];
                            for(let T = I.firstElementChild; T;){
                                if (m.get(T.getAttribute("vt-name")) !== null) {
                                    a(T, "vt-enter");
                                }
                                T = T.nextElementSibling;
                            }
                            f = y;
                            do {
                                for(let D = f.firstElementChild; D;){
                                    const x = D.getAttribute("vt-update");
                                    if (x && x !== "none" && !s.includes(D)) {
                                        a(D, "vt-update");
                                    }
                                    D = D.nextElementSibling;
                                }
                            }while ((f = f.parentNode) && f.nodeType === 1 && f.getAttribute("vt-update") !== "none")
                            const $ = I.querySelectorAll('img[src]:not([loading="lazy"])');
                            g.push(...$);
                        }
                    }
                }
                if (i) {
                    const P = document.__reactViewTransition = document.startViewTransition({
                        update: function() {
                            t(o);
                            const a = [
                                document.documentElement.clientHeight,
                                document.fonts.ready
                            ];
                            for(let i = {}, l = 0; l < g.length; i = {
                                $jscomp$loop$prop$suspenseyImage$8: i.$jscomp$loop$prop$suspenseyImage$8
                            }, l++){
                                i.$jscomp$loop$prop$suspenseyImage$8 = g[l];
                                if (!i.$jscomp$loop$prop$suspenseyImage$8.complete) {
                                    let s = i.$jscomp$loop$prop$suspenseyImage$8.getBoundingClientRect();
                                    if (s.bottom > 0 && s.right > 0 && s.top < window.innerHeight && s.left < window.innerWidth) {
                                        s = new (e || (e = n("Promise")))(((e)=>function(t) {
                                                e.$jscomp$loop$prop$suspenseyImage$8.addEventListener("load", t);
                                                e.$jscomp$loop$prop$suspenseyImage$8.addEventListener("error", t);
                                            })(i));
                                        a.push(s);
                                    }
                                }
                            }
                            return (e || (e = n("Promise"))).race([
                                e.all(a),
                                new e(function(e) {
                                    const t = performance.now();
                                    r(e, t < 2300 && t > 2000 ? 2300 - t : 500);
                                })
                            ]);
                        },
                        types: []
                    });
                    P.ready.finally(()=>{
                        for(let e = s.length - 3; e >= 0; e -= 3){
                            const t = s[e];
                            const n = t.style;
                            n.viewTransitionName = s[e + 1];
                            n.viewTransitionClass = s[e + 1];
                            if (t.getAttribute("style") === "") {
                                t.removeAttribute("style");
                            }
                        }
                    });
                    P.finished.finally(()=>{
                        if (document.__reactViewTransition === P) {
                            document.__reactViewTransition = null;
                        }
                    });
                    u = [];
                    return;
                }
            } catch (e) {}
            t(o);
        }).bind(null, function(e) {
            l = performance.now();
            for(let n = 0; n < e.length; n += 2){
                let r = e[n];
                const o = e[n + 1];
                if (o.parentNode !== null) {
                    o.parentNode.removeChild(o);
                }
                const a = r.parentNode;
                if (a) {
                    const i = r.previousSibling;
                    let s = 0;
                    do {
                        if (r && r.nodeType === 8) {
                            var u = r.data;
                            if (u === "/$" || u === "/&") {
                                if (s === 0) {
                                    break;
                                }
                                s--;
                            } else {
                                if (!(u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" && u !== "&")) {
                                    s++;
                                }
                            }
                        }
                        u = r.nextSibling;
                        a.removeChild(r);
                        r = u;
                    }while (r)
                    const c = [];
                    while(o.firstChild){
                        c.push(o.firstChild);
                        a.insertBefore(o.firstChild, r);
                    }
                    i.data = "$";
                    if (t.__onSSRInject) {
                        t.__onSSRInject(c);
                    }
                    if (i._reactRetry) {
                        requestAnimationFrame(i._reactRetry);
                    }
                }
            }
            e.length = 0;
        });
        var m = function(t, n) {
            if (n = document.getElementById(n)) {
                if (t = document.getElementById(t)) {
                    t.previousSibling.data = "$~";
                    u.push(t, n);
                    if (u.length === 2) {
                        if (typeof l !== "number") {
                            requestAnimationFrame(d.bind(null, u));
                        } else {
                            t = performance.now();
                            t = t < 2300 && t > 2000 ? 2300 - t : l + 300 - t;
                            r(d.bind(null, u), t);
                        }
                    }
                } else {
                    n.parentNode.removeChild(n);
                }
            }
        };
        var p = (bid, sid, a)=>{
            function t(e) {
                this._p = null;
                e();
            }
            const i = new Map;
            const l = document;
            let u;
            let d;
            for(var p = l.querySelectorAll("link[data-precedence],style[data-precedence]"), _ = [], f = 0; d = p[f++];){
                if (d.getAttribute("media") === "not all") {
                    _.push(d);
                } else {
                    if (d.tagName === "LINK") {
                        s.set(d.getAttribute("href"), d);
                    }
                    i.set(d.dataset.precedence, u = d);
                }
            }
            p = 0;
            d = [];
            let g;
            let h;
            for(f = true;;){
                if (f) {
                    const y = a[p++];
                    if (!y) {
                        f = false;
                        p = 0;
                        continue;
                    }
                    var C = false;
                    let b = 0;
                    let v = y[b++];
                    if (h = s.get(v)) {
                        var S = h._p;
                        C = true;
                    } else {
                        h = l.createElement("link");
                        h.href = v;
                        h.rel = "stylesheet";
                        for(h.dataset.precedence = g = y[b++]; S = y[b++];){
                            h.setAttribute(S, y[b++]);
                        }
                        S = h._p = new (e || (e = n("Promise")))(function(e, n) {
                            h.onload = t.bind(h, e);
                            h.onerror = t.bind(h, n);
                        });
                        s.set(v, h);
                    }
                    v = h.getAttribute("media");
                    if (!(!S || v && !window.matchMedia(v).matches)) {
                        d.push(S);
                    }
                    if (C) {
                        continue;
                    }
                } else {
                    h = _[p++];
                    if (!h) {
                        break;
                    }
                    g = h.getAttribute("data-precedence");
                    h.removeAttribute("media");
                }
                C = i.get(g) || u;
                if (C === u) {
                    u = h;
                }
                i.set(g, h);
                if (C) {
                    C.parentNode.insertBefore(h, C.nextSibling);
                } else {
                    C = l.head;
                    C.insertBefore(h, C.firstChild);
                }
            }
            if (a = document.getElementById(bid)) {
                a.previousSibling.data = "$~";
            }
            (e || (e = n("Promise"))).all(d).then(m.bind(null, bid, sid), c.bind(null, bid, "CSS failed to load"));
        };
        var _ = (t, n)=>{
            t = document.getElementById(t);
            n = document.getElementById(n);
            t.parentNode.removeChild(t);
            while(t.firstChild){
                n.parentNode.insertBefore(t.firstChild, n);
            }
            n.parentNode.removeChild(n);
        };
        (()=>{
            addEventListener("submit", function(e) {
                if (!e.defaultPrevented) {
                    const { target, submitter } = e;
                    let r = target.action;
                    let o = submitter;
                    if (submitter) {
                        const a = submitter.getAttribute("formAction");
                        if (a != null) {
                            r = a;
                            o = null;
                        }
                    }
                    if (r === "javascript:throw new Error('React form unexpectedly submitted.')") {
                        e.preventDefault();
                        if (o) {
                            e = document.createElement("input");
                            e.name = o.name;
                            e.value = o.value;
                            o.parentNode.insertBefore(e, o);
                            o = new FormData(target);
                            e.parentNode.removeChild(e);
                        } else {
                            o = new FormData(target);
                        }
                        e = target.ownerDocument || target;
                        (e.$$reactFormReplay = e.$$reactFormReplay || []).push(target, submitter, o);
                    }
                }
            });
        })();
        const f = performance.getEntriesByType ? performance.getEntriesByType("paint") : [];
        if (f.length > 0) {
            l = f[0].startTime;
        } else {
            requestAnimationFrame(()=>{
                l = performance.now();
            });
        }
        if (document.body != null) {
            if (document.readyState === "loading") {
                a(document.body);
            }
            o(document.body);
        } else {
            var g = new MutationObserver(function() {
                if (document.body != null) {
                    if (document.readyState === "loading") {
                        a(document.body);
                    }
                    o(document.body);
                    g.disconnect();
                }
            });
            g.observe(document.documentElement, {
                childList: true
            });
        }
    })();
}, null);