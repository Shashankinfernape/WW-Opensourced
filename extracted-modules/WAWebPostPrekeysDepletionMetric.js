__d("WAWebPostPrekeysDepletionMetric", [
    "WAWebPrekeysDepletionWamEvent"
], function(t, n, r, o, a, i, l) {
    function e({ count: t, deviceSizeBucket: n, messageType: r, prekeysFetchReason: a }) {
        if (!(t == null || t === 0)) {
            const i = {};
            if (a != null) {
                i.prekeysFetchReason = a;
            }
            if (r != null) {
                i.messageType = r;
            }
            if (n != null) {
                i.deviceSizeBucket = n;
            }
            self.setTimeout(function() {
                for(let e = 0; e < t; e++){
                    new (o("WAWebPrekeysDepletionWamEvent")).PrekeysDepletionWamEvent(i).commit();
                }
            }, 0);
        }
    }
    l.maybePostPrekeysDepletionMetric = e;
}, 98);