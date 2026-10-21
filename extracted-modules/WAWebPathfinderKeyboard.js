__d("WAWebPathfinderKeyboard", [
    "WAWebPathfinderLogger",
    "WAWebPathfinderPIIFilter",
    "WAWebPathfinderScreenName"
], function(t, n, r, o, a, i, l) {
    const e = new Set([
        "INPUT",
        "TEXTAREA"
    ]);
    function s(t) {
        return e.has(t.tagName) || t.isContentEditable;
    }
    const u = 2000;
    const c = [
        "data-testid",
        "id"
    ];
    function d(e) {
        for (const t of c){
            const n = e.getAttribute(t);
            if (n != null && n !== "") {
                if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(n)) {
                    return null;
                }
                return `${t}=${n}`;
            }
        }
        for(let r = 0, a = e.parentElement; a != null && r < 5;){
            r++;
            for (const i of c){
                const l = a.getAttribute(i);
                if (l != null && l !== "") {
                    if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(l)) {
                        return null;
                    }
                    return `${i}=${l}@${String(r)}`;
                }
            }
            a = a.parentElement;
        }
        return m(e);
    }
    function m(e) {
        const t = e.getAttribute("name");
        if (t != null && t !== "") {
            if (o("WAWebPathfinderPIIFilter").hasUnsafePathfinderTrackingId(t)) {
                return null;
            }
            return `tag=${e.tagName};name=${t}`;
        }
        return `tag=${e.tagName}`;
    }
    let p = null;
    let _ = null;
    let f = null;
    function g() {
        p = null;
        _ = null;
        if (f != null) {
            window.clearTimeout(f);
            f = null;
        }
    }
    function h(e) {
        if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
            return e.value === "";
        }
        return (e.textContent ?? "") === "";
    }
    function y({ target: t }) {
        if (!(!(t instanceof HTMLElement) || !s(t))) {
            if (f != null) {
                window.clearTimeout(f);
            }
            _ = t;
            f = window.setTimeout(function() {
                f = null;
                const e = _;
                _ = null;
                if (e != null) {
                    const t = h(e);
                    o("WAWebPathfinderLogger").emitPathfinderEvent({
                        eventType: "CONTENT_CHANGED",
                        context: JSON.stringify({
                            is_empty: String(t)
                        }),
                        screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
                        timestampMs: Date.now()
                    });
                }
            }, u);
        }
    }
    function C({ target: t }) {
        if (!(!(t instanceof HTMLElement) || !s(t))) {
            const n = d(t);
            if (n != null && p !== n) {
                p = n;
                o("WAWebPathfinderLogger").emitPathfinderEvent({
                    eventType: "BEGIN_EDITING",
                    screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
                    targetTrackingId: n,
                    timestampMs: Date.now()
                });
            }
        }
    }
    function b({ target: t }) {
        if (!(!(t instanceof HTMLElement) || !s(t))) {
            const n = d(t);
            if (n == null) {
                p = null;
                return;
            }
            if (p === n) {
                p = null;
                o("WAWebPathfinderLogger").emitPathfinderEvent({
                    eventType: "END_EDITING",
                    screenName: o("WAWebPathfinderScreenName").getCurrentScreenName(),
                    targetTrackingId: n,
                    timestampMs: Date.now()
                });
            }
        }
    }
    l.resetKeyboardStateForTesting = g;
    l.handleInput = y;
    l.handleFocusIn = C;
    l.handleFocusOut = b;
}, 98);