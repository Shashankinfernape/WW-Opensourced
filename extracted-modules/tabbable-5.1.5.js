__d("tabbable-5.1.5", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = {};
    const l = {
        exports: e
    };
    function s() {
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        const t = [
            "input",
            "select",
            "textarea",
            "a[href]",
            "button",
            "[tabindex]",
            "audio[controls]",
            "video[controls]",
            '[contenteditable]:not([contenteditable="false"])',
            "details>summary:first-of-type",
            "details"
        ];
        const n = t.join(",");
        const r = typeof Element === "undefined" ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        const o = function(t, o, a) {
            let e = Array.prototype.slice.apply(t.querySelectorAll(n));
            if (o && r.call(t, n)) {
                e.unshift(t);
            }
            e = e.filter(a);
            return e;
        };
        const a = function(t) {
            return t.contentEditable === "true";
        };
        const i = function(t) {
            const e = parseInt(t.getAttribute("tabindex"), 10);
            if (isNaN(e)) {
                if (a(t) || (t.nodeName === "AUDIO" || t.nodeName === "VIDEO" || t.nodeName === "DETAILS") && t.getAttribute("tabindex") === null) {
                    return 0;
                }
                return t.tabIndex;
            }
            return e;
        };
        const l = function(t, n) {
            if (t.tabIndex === n.tabIndex) {
                return t.documentOrder - n.documentOrder;
            }
            return t.tabIndex - n.tabIndex;
        };
        const s = function(t) {
            return t.tagName === "INPUT";
        };
        const u = function(t) {
            return s(t) && t.type === "hidden";
        };
        const c = function(t) {
            const e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some((e)=>e.tagName === "SUMMARY");
            return e;
        };
        const d = function(t, n) {
            for(let e = 0; e < t.length; e++){
                if (t[e].checked && t[e].form === n) {
                    return t[e];
                }
            }
        };
        const m = function(t) {
            if (!t.name) {
                return true;
            }
            const e = t.form || t.ownerDocument;
            const n = function(n) {
                return e.querySelectorAll(`input[type="radio"][name="${n}"]`);
            };
            let r;
            if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
                r = n(window.CSS.escape(t.name));
            } else {
                try {
                    r = n(t.name);
                } catch (e) {
                    e.message;
                    return false;
                }
            }
            const o = d(r, t.form);
            return !o || o === t;
        };
        const p = function(t) {
            return s(t) && t.type === "radio";
        };
        const _ = function(t) {
            return p(t) && !m(t);
        };
        const f = function(t) {
            if (getComputedStyle(t).visibility === "hidden") {
                return true;
            }
            const e = r.call(t, "details>summary:first-of-type");
            const n = e ? t.parentElement : t;
            if (r.call(n, "details:not([open]) *")) {
                return true;
            }
            while(t){
                if (getComputedStyle(t).display === "none") {
                    return true;
                }
                t = t.parentElement;
            }
            return false;
        };
        const g = function(t) {
            return !(t.disabled || u(t) || f(t) || c(t));
        };
        const h = function(t) {
            return !(!g(t) || _(t) || i(t) < 0);
        };
        const y = function(t, n) {
            n = n || {};
            const e = [];
            const r = [];
            const a = o(t, n.includeContainer, h);
            a.forEach((t, n)=>{
                const o = i(t);
                if (o === 0) {
                    e.push(t);
                } else {
                    r.push({
                        documentOrder: n,
                        tabIndex: o,
                        node: t
                    });
                }
            });
            const s = r.sort(l).map((e)=>e.node).concat(e);
            return s;
        };
        const C = function(t, n) {
            n = n || {};
            const e = o(t, n.includeContainer, g);
            return e;
        };
        const b = function(t) {
            if (!t) {
                throw new Error("No node provided");
            }
            if (r.call(t, n) === false) {
                return false;
            }
            return h(t);
        };
        const v = t.concat("iframe").join(",");
        const S = function(t) {
            if (!t) {
                throw new Error("No node provided");
            }
            if (r.call(t, v) === false) {
                return false;
            }
            return g(t);
        };
        e.focusable = C;
        e.isFocusable = S;
        e.isTabbable = b;
        e.tabbable = y;
    }
    let u = false;
    function c() {
        if (!u) {
            u = true;
            s();
        }
        return l.exports;
    }
    function d(e) {
        switch(e){
            case void 0:
                return c();
        }
    }
    a.exports = d;
}, null);