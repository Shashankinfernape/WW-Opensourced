__d("hyphenate", [], function(t, n, r, o, a, i) {
    const e = /([A-Z])/g;
    function l(t) {
        return t.replace(e, "-$1").toLowerCase();
    }
    i.default = l;
}, 66);