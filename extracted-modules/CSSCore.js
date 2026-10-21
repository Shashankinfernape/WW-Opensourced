__d("CSSCore", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    function e(e, t) {
        for(var n = e; n.parentNode;){
            n = n.parentNode;
        }
        if (n instanceof Element) {
            const r = n.querySelectorAll(t);
            return Array.prototype.indexOf.call(r, e) !== -1;
        }
        return false;
    }
    function u(e, t) {
        if (/\s/.test(t)) {
            s(0, 11794, t);
        }
        if (t) {
            if (e.classList) {
                e.classList.add(t);
            } else if (!m(e, t)) {
                e.className = `${e.className} ${t}`;
            }
        }
        return e;
    }
    function c(e, t) {
        if (/\s/.test(t)) {
            s(0, 11795, t);
        }
        if (t) {
            if (e.classList) {
                e.classList.remove(t);
            } else if (m(e, t)) {
                e.className = e.className.replace(new RegExp(`(^|\\s)${t}(?:\\s|\$)`, "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
            }
        }
        return e;
    }
    function d(e, t, n) {
        return (n ? u : c)(e, t);
    }
    function m(e, t) {
        if (/\s/.test(t)) {
            s(0, 442);
        }
        if (e.classList) {
            return !!t && e.classList.contains(t);
        }
        return ` ${e.className} `.indexOf(` ${t} `) > -1;
    }
    function p(t, n) {
        const l = t.matches ?? t.webkitMatchesSelector ?? t.mozMatchesSelector ?? t.msMatchesSelector ?? ((n)=>e(t, n));
        return l.call(t, n);
    }
    l.addClass = u;
    l.removeClass = c;
    l.conditionClass = d;
    l.hasClass = m;
    l.matchesSelector = p;
}, 98);