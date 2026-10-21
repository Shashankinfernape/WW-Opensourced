__d("useWebPressableTouchStartHandler", [
    "ExecutionEnvironment",
    "UserAgent",
    "passiveEventListenerUtil",
    "react",
    "useDynamicCallbackDANGEROUS"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const useEffect = (s || (s = o("react"))).useEffect;
    const c = r("UserAgent").isBrowser("Safari") || r("UserAgent").isBrowser("Mobile Safari");
    const d = c ? function(t) {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            const a = window?.document?.body;
            if (a == null) {
                return;
            }
            const i = a.style;
            i.WebkitUserSelect = "none";
            const l = o("passiveEventListenerUtil").makeEventOptions({
                passive: true
            });
            const s = function() {
                i.WebkitUserSelect = null;
                document.removeEventListener("touchend", s, typeof l === "boolean" ? l : l.capture);
            };
            document.addEventListener("touchend", s, l);
            return s;
        }
    } : null;
    function useM(e, t, n) {
        const a = r("useDynamicCallbackDANGEROUS")(n);
        useEffect(function() {
            if (!(!t && !d)) {
                const r = e.current;
                const i = window?.document?.body;
                if (!(!r || !i || !r.addEventListener || !p(r))) {
                    let l;
                    if (t) {
                        t.register(r, a);
                        l = function(n) {
                            n.preventDefault();
                            t.onTouchStart();
                        };
                    }
                    let s;
                    const u = l || d ? function(e) {
                        l?.(e);
                        s = d?.(e);
                    } : null;
                    const c = u ? o("passiveEventListenerUtil").makeEventOptions({
                        passive: !t
                    }) : null;
                    if (u && c != null) {
                        r.addEventListener("touchstart", u, c);
                    }
                    return function() {
                        s?.();
                        t?.unRegister(r);
                        if (u && c != null) {
                            r.removeEventListener("touchstart", u, typeof c === "boolean" ? c : c.capture);
                        }
                    };
                }
            }
        }, [
            a,
            e,
            t
        ]);
    }
    function p(t) {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM && typeof document.contains === "function") {
            return document.contains(t);
        }
        return false;
    }
    function _(e, t, n) {}
    const f = (e || (e = r("ExecutionEnvironment"))).canUseDOM ? useM : _;
    l.default = f;
}, 98);