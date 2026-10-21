__d("WAWebPonyfillsIdleCallback", [], function(t, n, r, o, a, i) {
    function e(e) {
        const t = self.setTimeout(function() {
            const t = Date.now();
            e({
                didTimeout: false,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - t));
                }
            });
        }, 1);
        return t;
    }
    function l(e) {
        self.clearTimeout(e);
    }
    const { requestIdleCallback: s, cancelIdleCallback: u } = window;
    const c = "requestIdleCallback" in window ? s.bind(window) : e.bind(window);
    const d = "cancelIdleCallback" in window ? u.bind(window) : l.bind(window);
    i.requestIdleCallback = c;
    i.cancelIdleCallback = d;
}, 66);