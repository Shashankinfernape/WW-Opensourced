__d("WAWebMemoizeWithClearUtils", [], function(t, n, r, o, a, i) {
    function e(e) {
        let t;
        return [
            function() {
                if (!t) {
                    t = [
                        e()
                    ];
                }
                return t[0];
            },
            function() {
                t = null;
            }
        ];
    }
    i.memoizeWithClear = e;
}, 66);