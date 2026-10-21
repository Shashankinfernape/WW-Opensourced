__d("camelize", [], function(t, n, r, o, a, i) {
    const e = /-(.)/g;
    function l(t) {
        return t.replace(e, (e, t)=>t.toUpperCase());
    }
    i.default = l;
}, 66);