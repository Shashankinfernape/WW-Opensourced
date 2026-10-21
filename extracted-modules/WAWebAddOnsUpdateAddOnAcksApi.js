__d("WAWebAddOnsUpdateAddOnAcksApi", [
    "Promise",
    "WAAckLevel",
    "WATypeUtils",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebDBAddOnProviders",
    "asyncToGeneratorRuntime",
    "compactMap",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = yield (e || (e = n("Promise"))).allSettled(Array.from(t.entries(), function([t, n]) {
                const a = r("nullthrows")(o("WAWebDBAddOnProviders").getProviderForAddOnType(t));
                return a.updateAcks?.(n, o("WAWebBoolFunc").returnTrue);
            }));
            for (const i of a){
                if (i.status === "rejected") {
                    throw i.reason;
                }
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = yield (e || (e = n("Promise"))).allSettled(Array.from(t, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                    const a = r("nullthrows")(o("WAWebDBAddOnProviders").getProviderForAddOnType(t));
                    const i = yield a.updateAcks?.(n, function(e, t) {
                        return m(e.ack, t.ack);
                    });
                    if (!(i == null || i.length === 0)) {
                        return [
                            t,
                            i
                        ];
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            const updatesByType = new Map(r("compactMap")(a, function(e) {
                return e.value;
            }));
            o("WAWebBackendApi").frontendFireAndForget("updateAddOnCollectionAcks", {
                updatesByType
            });
            for (const l of a){
                if (l.status === "rejected") {
                    throw l.reason;
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(ack, t) {
        return o("WATypeUtils").isNumber(t) && (ack == null || t > ack || t === o("WAAckLevel").ACK.FAILED);
    }
    l.updateAddOnAcks = s;
    l.maybeUpdateAddOnAcks = c;
}, 98);