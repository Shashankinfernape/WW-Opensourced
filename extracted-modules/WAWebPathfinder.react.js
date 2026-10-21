__d("WAWebPathfinder.react", [
    "WAWebModalManager",
    "WAWebPathfinderApp",
    "WAWebPathfinderKeyboard",
    "WAWebPathfinderNavigation",
    "WAWebPathfinderUserTouch",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = o("react"))).useEffect;
    function u() {
        const e = o("react-compiler-runtime").c(11);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                capture: true
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        o("useWAWebListener").useListener(window, "click", o("WAWebPathfinderUserTouch").handleClick, t);
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            n = {
                capture: true
            };
            e[1] = n;
        } else {
            n = e[1];
        }
        o("useWAWebListener").useListener(window, "dblclick", o("WAWebPathfinderUserTouch").handleDoubleClick, n);
        let r;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                capture: true
            };
            e[2] = r;
        } else {
            r = e[2];
        }
        o("useWAWebListener").useListener(window, "wheel", o("WAWebPathfinderUserTouch").handleWheel, r);
        let a;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                capture: true
            };
            e[3] = a;
        } else {
            a = e[3];
        }
        o("useWAWebListener").useListener(window, "scroll", o("WAWebPathfinderUserTouch").handleScroll, a);
        let i;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                capture: true
            };
            e[4] = i;
        } else {
            i = e[4];
        }
        o("useWAWebListener").useListener(window, "pointerdown", o("WAWebPathfinderUserTouch").handlePointerDown, i);
        let l;
        if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                capture: true
            };
            e[5] = l;
        } else {
            l = e[5];
        }
        o("useWAWebListener").useListener(window, "pointerup", o("WAWebPathfinderUserTouch").handlePointerUp, l);
        let u;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            u = {
                capture: true
            };
            e[6] = u;
        } else {
            u = e[6];
        }
        o("useWAWebListener").useListener(window, "pointercancel", o("WAWebPathfinderUserTouch").handlePointerCancel, u);
        let d;
        if (e[7] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                capture: true
            };
            e[7] = d;
        } else {
            d = e[7];
        }
        o("useWAWebListener").useListener(window, "focusin", o("WAWebPathfinderKeyboard").handleFocusIn, d);
        let m;
        if (e[8] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                capture: true
            };
            e[8] = m;
        } else {
            m = e[8];
        }
        o("useWAWebListener").useListener(window, "focusout", o("WAWebPathfinderKeyboard").handleFocusOut, m);
        let p;
        if (e[9] === Symbol.for("react.memo_cache_sentinel")) {
            p = {
                capture: true
            };
            e[9] = p;
        } else {
            p = e[9];
        }
        o("useWAWebListener").useListener(window, "input", o("WAWebPathfinderKeyboard").handleInput, p);
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "open_modal", o("WAWebPathfinderApp").handleAlertShown);
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "open_alert", o("WAWebPathfinderApp").handleAlertShown);
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", o("WAWebPathfinderApp").handleAlertClosed);
        o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_alert", o("WAWebPathfinderApp").handleAlertClosed);
        let _;
        if (e[10] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [];
            e[10] = _;
        } else {
            _ = e[10];
        }
        s(c, _);
        return null;
    }
    function c() {
        return o("WAWebPathfinderNavigation").initNavigationListener();
    }
    l.default = u;
}, 98);