__d("WAWebDomElementMatches", [], function(t, n, r, o, a, i) {
    const e = Element.prototype;
    const l = e.matches || e.msMatchesSelector || e.webkitMatchesSelector;
    function s(e, t) {
        if (e instanceof HTMLElement) {
            return l.call(e, t);
        }
        return false;
    }
    i.default = s;
}, 66);