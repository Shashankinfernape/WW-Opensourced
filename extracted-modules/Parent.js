__d("Parent", [
    "CSSCore"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = t.toUpperCase();
        const r = m(e, (e)=>e.nodeName === n);
        if (r instanceof Element) {
            return r;
        }
        return null;
    }
    function s(e, t) {
        const n = m(e, (e)=>e instanceof Element && o("CSSCore").hasClass(e, t));
        if (n instanceof Element) {
            return n;
        }
        return null;
    }
    function u(e, t) {
        let n = e;
        const r = e;
        if (typeof r.matches === "function") {
            while(n && n !== document && !n.matches(t)){
                n = n.parentNode;
            }
            if (n instanceof Element) {
                return n;
            }
            return null;
        } else if (typeof r.msMatchesSelector === "function") {
            while(n && n !== document && !n.msMatchesSelector(t)){
                n = n.parentNode;
            }
            if (n instanceof Element) {
                return n;
            }
            return null;
        } else {
            return c(e, t);
        }
    }
    function c(e, t) {
        let n = e;
        for(var r = e; r.parentNode;){
            r = r.parentNode;
        }
        if (!(r instanceof Element) && !(r instanceof Document)) {
            return null;
        }
        const o = r.querySelectorAll(t);
        while(n){
            if (Array.from(o).some((e)=>e === n)) {
                if (n instanceof Element) {
                    return n;
                }
                return null;
            }
            n = n.parentNode;
        }
        if (n instanceof Element) {
            return n;
        }
        return null;
    }
    function d(e, t) {
        const n = m(e, (e)=>e instanceof Element && !!e.getAttribute(t));
        if (n instanceof Element) {
            return n;
        }
        return null;
    }
    function m(e, t) {
        for(let n = e; n;){
            if (t(n)) {
                return n;
            }
            n = n.parentNode;
        }
        return null;
    }
    l.byTag = e;
    l.byClass = s;
    l.bySelector = u;
    l.bySelector_SLOW = c;
    l.byAttribute = d;
    l.find = m;
}, 98);