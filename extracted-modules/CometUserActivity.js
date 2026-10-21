__d("CometUserActivity", [
    "BaseEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 5000;
    const s = 500;
    const u = -5;
    let c = Date.now();
    let last_inform = c;
    let m = false;
    let p = Date.now();
    let _ = document.hasFocus ? document.hasFocus() : true;
    let f = 0;
    let g = Date.now();
    let h = -1;
    let y = -1;
    let C = false;
    let b = false;
    const v = new (r("BaseEventEmitter"));
    function S(e) {
        var t = R((n, r)=>{
            t.unsubscribe();
            e(r);
        });
        return t;
    }
    function R(e) {
        const t = v.addListener("user_activity", function(t) {
            return e("user_activity", t);
        });
        return {
            unsubscribe: function() {
                return t.remove();
            }
        };
    }
    function L(t) {
        return new Date().getTime() - c < (t ?? e);
    }
    function E() {
        return _;
    }
    function k() {
        return m;
    }
    function I() {
        _ = true;
        m = false;
    }
    function T() {
        return p;
    }
    function D() {
        return c;
    }
    function x(e) {
        f = e;
    }
    function $() {
        return g;
    }
    function P() {
        return C;
    }
    function N() {
        return b;
    }
    function M() {
        return last_inform;
    }
    function w() {
        c = Date.now();
        last_inform = c;
        m = false;
        p = Date.now();
        _ = document.hasFocus ? document.hasFocus() : true;
        f = 0;
        g = Date.now();
        h = -1;
        y = -1;
        C = false;
        b = false;
    }
    function A(e) {
        e.unsubscribe();
    }
    function F(e) {
        B(e, s);
    }
    function O(e) {
        B(e, 0);
    }
    function B(n, r = 0) {
        const { MouseEvent, KeyboardEvent } = t;
        if (MouseEvent && n instanceof MouseEvent) {
            if (/^mouse(enter|leave|move|out|over)$/.test(n.type) && n.pageX == h && n.pageY == y) {
                return;
            }
            h = n.pageX;
            y = n.pageY;
        } else {
            if (KeyboardEvent && n instanceof KeyboardEvent) {
                b = true;
            }
        }
        if (n.type === "click" || n.type === "dblclick" || n.type === "contextmenu") {
            C = true;
        }
        c = Date.now();
        const idleness = c - last_inform;
        if (idleness >= r) {
            last_inform = c;
            if (!_) {
                g = c;
            }
            if (idleness >= (f || e)) {
                m = true;
                p = c;
            }
            const l = {
                event: n,
                idleness,
                last_inform
            };
            v.emit("user_activity", l);
        } else {
            if (idleness < u) {
                last_inform = c;
            }
        }
    }
    function W(e) {
        _ = true;
        p = Date.now();
        O(e);
    }
    function q() {
        _ = false;
        m = true;
        g = Date.now();
    }
    window.addEventListener("scroll", F, {
        capture: true,
        passive: true
    });
    window.addEventListener("focus", W, {
        capture: false,
        passive: true
    });
    window.addEventListener("blur", q, {
        capture: false,
        passive: true
    });
    (()=>{
        const document_documentElement = document.documentElement;
        if (document_documentElement != null) {
            [
                "keydown",
                "mouseover",
                "mousemove",
                "click"
            ].forEach((t)=>{
                document_documentElement.addEventListener(t, F, {
                    capture: true,
                    passive: true
                });
            });
        }
    })();
    l.EVENT_INTERVAL_MS = s;
    l.subscribeOnce = S;
    l.subscribe = R;
    l.isActive = L;
    l.isOnTab = E;
    l.hasBeenInactive = k;
    l.resetActiveStatus = I;
    l.getLastInActiveEnds = T;
    l.getLastActive = D;
    l.setIdleTime = x;
    l.getLastLeaveTime = $;
    l.hasClicked = P;
    l.hasInteractedWithKeyboard = N;
    l.getLastInformTime = M;
    l.reset = w;
    l.unsubscribe = A;
}, 98);