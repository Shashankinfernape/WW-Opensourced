__d("WAWebKeyboardTabUtils", [
    "$InternalEnum",
    "WAWebBoolFunc",
    "tabbable"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "CUSTOM",
        "CUSTOM_SELECTOR",
        "TABBABLE"
    ]);
    const s = n("$InternalEnum").Mirrored([
        "FORWARD",
        "BACKWARD"
    ]);
    const u = 1;
    const c = new Set([
        "auto",
        "clip",
        "hidden",
        "overlay",
        "scroll"
    ]);
    function d({ container, customSelector, focusType }) {
        if (focusType === e.TABBABLE) {
            return {
                candidateElements: o("tabbable").tabbable(container),
                isElementTabbable: function(t) {
                    return true;
                },
                skipOccluded: false
            };
        }
        if (focusType === e.CUSTOM_SELECTOR && customSelector != null) {
            return {
                candidateElements: Array.from(container.querySelectorAll(customSelector)),
                isElementTabbable: function(t) {
                    return true;
                },
                skipOccluded: false
            };
        }
        return {
            candidateElements: Array.from(container.querySelectorAll("[data-tab]")).sort((e, t)=>(parseInt(e.getAttribute("data-tab"), 10) || 0) - (parseInt(t.getAttribute("data-tab"), 10) || 0)),
            isElementTabbable,
            skipOccluded: true
        };
    }
    function m(container, n = e.CUSTOM, r = function() {
        return true;
    }, o) {
        const a = d({
            container,
            customSelector: o,
            focusType: n
        });
        const { candidateElements, isElementTabbable } = a;
        return candidateElements.filter((e)=>isElementTabbable(e) && r(e));
    }
    function p(t, n = s.FORWARD, r = e.CUSTOM, a, i) {
        let l;
        if (a === undefined) {
            a = o("WAWebBoolFunc").returnTrue;
        }
        const u = d({
            container: t,
            customSelector: i,
            focusType: r
        });
        const { candidateElements, isElementTabbable, skipOccluded } = u;
        const g = n === s.FORWARD ? 1 : -1;
        const h = _(t, candidateElements, g);
        const y = function(t) {
            return isElementTabbable(t) && a(t);
        };
        if (skipOccluded && (l = f(candidateElements, h, g, (e)=>y(e) && !C(e))) != null) {
            return l;
        }
        return f(candidateElements, h, g, y);
    }
    function _(e, candidateElements, n) {
        const activeElement = e.ownerDocument.activeElement;
        if (!activeElement) {
            return 0;
        }
        let o = candidateElements.findIndex((e)=>e.contains(activeElement));
        const a = candidateElements.findIndex((e)=>e === activeElement);
        if (a > 0) {
            o = a;
        }
        if (o === -1) {
            return 0;
        }
        return g(o + n, candidateElements.length);
    }
    function f(candidateElements, t, n, r) {
        for(let o = 0; o < candidateElements.length; o++){
            const a = candidateElements[g(t + o * n, candidateElements.length)];
            if (r(a)) {
                return a;
            }
        }
        return null;
    }
    function g(e, t) {
        return (e + t) % t;
    }
    function isElementTabbable(e) {
        if (e.disabled) {
            return false;
        }
        const t = parseInt(e.dataset.tab, 10);
        if (typeof t !== "number" || t < 0) {
            return false;
        }
        const n = e.getAttribute("tabindex");
        if (n != null && parseInt(n, 10) === -1 || e.closest("[inert]") != null) {
            return false;
        }
        return !y(e);
    }
    function y(e) {
        if (getComputedStyle(e).visibility === "hidden") {
            return true;
        }
        for(let t = e; t;){
            if (getComputedStyle(t).display === "none") {
                return true;
            }
            t = t.parentElement;
        }
        return false;
    }
    function C(e) {
        const e_ownerDocument = e.ownerDocument;
        if (!("elementFromPoint" in e_ownerDocument) || e.getRootNode() !== e_ownerDocument) {
            return false;
        }
        const n = e.getBoundingClientRect();
        const { height, width, x, y } = n;
        if (width === 0 || height === 0 || !v(e, x + width / 2, y + height / 2) || getComputedStyle(e).pointerEvents === "none") {
            return false;
        }
        const l = S(e, {
            height,
            width,
            x,
            y
        });
        if (l == null) {
            return false;
        }
        return b(e, l);
    }
    function b(e, { height, width, x, y }) {
        const i = x + u;
        const l = x + width - u;
        const s = y + u;
        const c = y + height - u;
        return v(e, x + width / 2, y + height / 2) && v(e, i, s) && v(e, l, s) && v(e, i, c) && v(e, l, c);
    }
    function v(e, t, n) {
        const r = e.ownerDocument.elementFromPoint(t, n);
        if (r == null || r.shadowRoot != null || e.contains(r) || r.contains(e)) {
            return false;
        }
        return getComputedStyle(r).opacity !== "0";
    }
    function S(e, { height, width, x, y }) {
        let i = x;
        let l = y;
        let s = x + width;
        let u = y + height;
        for(let c = e.parentElement; c != null;){
            if (R(c)) {
                const d = c.getBoundingClientRect();
                i = Math.max(i, d.x);
                l = Math.max(l, d.y);
                s = Math.min(s, d.x + d.width);
                u = Math.min(u, d.y + d.height);
                if (s <= i || u <= l) {
                    return null;
                }
            }
            c = c.parentElement;
        }
        return {
            height: u - l,
            width: s - i,
            x: i,
            y: l
        };
    }
    function R(e) {
        const t = getComputedStyle(e);
        const { overflowX, overflowY } = t;
        return c.has(overflowY) || c.has(overflowX);
    }
    l.FocusType = e;
    l.TabDirection = s;
    l.getTabbableElements = m;
    l.getNextTabbableElement = p;
}, 98);