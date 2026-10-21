__d("cometVirtualizationPinExclusion", [
    "FocusManager",
    "VirtualizationConfig",
    "WeakRefApiUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    const u = o("WeakRefApiUtils").getNativeWeakSetOrFallback();
    const c = o("WeakRefApiUtils").getNativeWeakMapOrFallback();
    const d = new u;
    const m = new u;
    const p = new c;
    const _ = new Set([
        "button",
        "checkbox",
        "combobox",
        "link",
        "menuitem",
        "menuitemcheckbox",
        "menuitemradio",
        "option",
        "radio",
        "scrollbar",
        "searchbox",
        "slider",
        "spinbutton",
        "switch",
        "tab",
        "textbox",
        "treeitem"
    ]);
    function f() {
        return g;
    }
    function g(e) {
        if (e != null) {
            d.add(e);
        }
    }
    function h() {
        return y;
    }
    function y(e) {
        if (e != null) {
            m.add(e);
        }
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = function(n) {
                if (n != null) {
                    p.set(n, e);
                }
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function b(e) {
        if (e.localName !== "a") {
            return false;
        }
        const t = e.getAttribute("href");
        return t != null && t !== "" && !t.startsWith("#");
    }
    function v(e) {
        for(var t = e instanceof Element ? e : null, n = false, r = null; t != null;){
            r = r ?? p.get(t);
            n = n || b(t);
            if (d.has(t)) {
                return {
                    excluded: true,
                    reason: r ?? "other"
                };
            }
            if (n && m.has(t)) {
                return {
                    excluded: true,
                    reason: r ?? "other"
                };
            }
            t = t.parentElement ?? null;
        }
        return {
            excluded: false,
            reason: r ?? "other"
        };
    }
    function S(e) {
        return v(e).excluded;
    }
    function R(e) {
        const t = e.getAttribute("role");
        if (t != null && _.has(t) || e.localName === "a" || e.localName === "button" || e.localName === "input" || e.localName === "label" || e.localName === "select" || e.localName === "summary" || e.localName === "textarea") {
            return true;
        }
        return e instanceof HTMLElement && (e.isContentEditable || e.tabIndex >= 0);
    }
    function L(e, t, n) {
        if (!o("VirtualizationConfig").isNonInteractiveClickPinExclusionEnabled() || e !== "click" || !(t instanceof Element) || !(n instanceof Element) || !n.contains(t)) {
            return false;
        }
        for(let r = t; r != null;){
            if (R(r)) {
                return false;
            }
            if (r === n) {
                return true;
            }
            r = r.parentElement;
        }
        return false;
    }
    function E(e) {
        return v(e).reason;
    }
    function k(e, t, n) {
        return e === "focus" && t instanceof Node && n instanceof Node && !n.contains(t);
    }
    function I(e) {
        return e === "focus" && o("FocusManager").isFocusingWithoutUserIntent();
    }
    function T(e, t) {
        const n = window.setTimeout(function() {
            const n = v(e);
            if (!n.excluded) {
                t(n.reason);
            }
        }, 0);
        return function() {
            return window.clearTimeout(n);
        };
    }
    l.usePinExclusionRef = f;
    l.useLinkPinExclusionRef = h;
    l.useInteractionPinReasonRef = C;
    l.getInteractionPinDecision = v;
    l.isInteractionExcludedFromPin = S;
    l.isNonInteractiveClickExcludedFromPin = L;
    l.getInteractionPinReason = E;
    l.isPortalFocusExcludedFromPin = k;
    l.isProgrammaticFocusExcludedFromPin = I;
    l.schedulePinAfterPendingHydration = T;
}, 98);