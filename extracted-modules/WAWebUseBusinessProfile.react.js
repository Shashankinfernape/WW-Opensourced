__d("WAWebUseBusinessProfile.react", [
    "WAWebBusinessProfileCollection",
    "WAWebContactCollection",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebUnmountSignal"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useState } = s;
    function useD(e) {
        const t = useState(function() {
            if (e) {
                return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e);
            }
            return null;
        });
        const a = t[0];
        const i = t[1];
        if (a && e && !a.id.equals(e)) {
            i(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e));
        }
        const l = r("useWAWebUnmountSignal")();
        useEffect(function() {
            const t = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if (!(!e || !e.isUserNotPSA() || e.isFbidBot())) {
                        const t = o("WAWebContactCollection").ContactCollection.get(e);
                        if (!(t && !t.isBusiness && !t.isEnterprise)) {
                            const n = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(e);
                            if (!l.aborted) {
                                i(n);
                            }
                        }
                    }
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            t();
        }, [
            e
        ]);
        return a;
    }
    l.useBusinessProfile = useD;
}, 98);