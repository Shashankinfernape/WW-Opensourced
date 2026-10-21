__d("WAWebInAppSignupInfoCache", [], function(t, n, r, o, a, i) {
    const e = new Map;
    function l(t) {
        return e.get(t) ?? null;
    }
    function s(t, n) {
        return babelHelpers.extends({}, e.get(t) ?? {}, n, {
            id: t
        });
    }
    function u(t) {
        e.set(t.id, t);
    }
    function c(t) {
        for (const n of t){
            e.set(n.id, n);
        }
    }
    function d() {
        e.clear();
    }
    i.getInAppSignupInfo = l;
    i.buildMergedInAppSignupInfoRow = s;
    i.setInAppSignupInfo = u;
    i.primeInAppSignupInfoCache = c;
    i.clearInAppSignupInfoCache = d;
}, 66);