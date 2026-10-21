__d("ge", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        if (typeof e !== "string") {
            return e;
        }
        if (t) {
            return l(e, t, n);
        }
        return document.getElementById(e);
    }
    function l(e, t, n) {
        let r;
        let o;
        let a;
        if (s(t) == e) {
            return t;
        }
        if (t.getElementsByTagName) {
            o = t.getElementsByTagName(n != null && n !== "" ? n : "*");
            for(a = 0; a < o.length; a++){
                if (s(o[a]) == e) {
                    return o[a];
                }
            }
        } else {
            o = t.childNodes;
            for(a = 0; a < o.length; a++){
                r = l(e, o[a]);
                if (r) {
                    return r;
                }
            }
        }
        return null;
    }
    function s(e) {
        if (e.getAttribute) {
            return e.getAttribute("id");
        }
        return null;
    }
    i.default = e;
}, 66);