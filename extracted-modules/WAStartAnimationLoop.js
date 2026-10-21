__d("WAStartAnimationLoop", [], function(t, n, r, o, a, i) {
    function e(e, t) {
        const { delay = 0, targetWindow = window } = t ?? {};
        let l;
        let s;
        let u;
        const c = function() {
            s = true;
            targetWindow.cancelAnimationFrame(l);
        };
        const d = function(n) {
            if (u == null || n - u >= delay) {
                e(n);
                u = n;
            }
            if (!s) {
                l = targetWindow.requestAnimationFrame(d);
            }
        };
        l = targetWindow.requestAnimationFrame(d);
        return c;
    }
    i.startAnimationLoop = e;
}, 66);