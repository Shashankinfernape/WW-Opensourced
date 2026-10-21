__d("WAWebFocusTracer", [
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    let e;
    const c = 5;
    const d = 75;
    let m = [];
    let p = false;
    function _() {
        m = [];
        p = false;
    }
    function f() {
        if (m.length < c) {
            return false;
        }
        const e = new Set;
        for(let t = 0; t < m.length; t++){
            if (e.has(m[t])) {
                return true;
            }
            e.add(m[t]);
        }
        return false;
    }
    function g(e) {
        if (m.length === c) {
            m.shift();
        }
        m.push(e);
    }
    const h = new (o("WAShiftTimer")).ShiftTimer(_);
    document.addEventListener("keydown", function(e) {
        h.forceRunNow();
    }, {
        capture: true,
        passive: true
    });
    function y(e) {
        if (e == null) {
            return "null";
        }
        if (e instanceof Element) {
            const t = e.getAttribute("data-testid");
            return `<${e.tagName.toLowerCase()}${e.id ? `#${e.id}` : ""}${t != null ? ` [testid=${t}]` : ""}>`;
        }
        if (e instanceof Text) {
            return "#text";
        }
        return "[focusable]";
    }
    function focus(t, n) {
        if (t && !(m.length && t === m[m.length - 1])) {
            p = p || window.event != null;
            g(t);
            if (f() && !p) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Focus loop encountered."
                ]))).sendLogs("focus-loop");
                return;
            }
            h.onOrBefore(d);
            t.focus(n);
        }
    }
    const b = {
        focus
    };
    l.default = b;
}, 98);