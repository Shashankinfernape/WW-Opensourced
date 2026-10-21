__d("WAWebMathRoundUp10thPercentage", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        if (e === 0 || t === 0) {
            return 0;
        }
        const n = e / t * 100;
        if (n % 10 === 0) {
            return n;
        }
        return (parseInt(n / 10, 10) + 1) * 10;
    }
    i.roundUp10thPercentage = e;
}, 66);