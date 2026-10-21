__d("WAWebNoiseInfoWorkerCompatible", [
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t) {
        e = t;
    }
    function u() {
        return r("nullthrows")(e, "NoiseInfo is not initialised");
    }
    function c() {
        return u().getNoiseInfo();
    }
    function d(e) {
        return u().setCertificateChain(e);
    }
    l.setInstance = s;
    l.getNoiseInfo = c;
    l.setCertificateChain = d;
}, 98);