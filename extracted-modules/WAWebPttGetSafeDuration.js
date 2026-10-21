__d("WAWebPttGetSafeDuration", [], function(t, n, r, o, a, i) {
    function e({ duration }) {
        if (Number.isFinite(duration)) {
            return duration;
        }
        return null;
    }
    i.getSafeDuration = e;
}, 66);