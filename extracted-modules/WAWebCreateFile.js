__d("WAWebCreateFile", [], function(t, n, r, o, a, i) {
    function e(e, t, n) {
        const r = n || {};
        const o = new Blob(e, r);
        const a = o;
        a.name = t;
        return a;
    }
    i.createFile = e;
}, 66);