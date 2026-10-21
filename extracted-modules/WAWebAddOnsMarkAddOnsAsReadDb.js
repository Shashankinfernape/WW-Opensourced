__d("WAWebAddOnsMarkAddOnsAsReadDb", [
    "Promise",
    "WAWebDBAddOnProviders",
    "WAWebDBMarkAsReadForTable",
    "asyncToGeneratorRuntime",
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
                return a.markAsRead?.(n);
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
            const updatedAddOns = new Map;
            const a = o("WAWebDBAddOnProviders").addOnProviders.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = yield e.markAsRead?.(t);
                    updatedAddOns.set(e.type, n ?? []);
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            const updatedOrphans = [];
            const l = o("WAWebDBMarkAsReadForTable").markAsReadForTable("message-orphans", t.map(String)).then((e)=>{
                updatedOrphans.push(...e);
            });
            const s = yield (e || (e = n("Promise"))).allSettled([].concat(a, [
                l
            ]));
            for (const u of s){
                if (u.status === "rejected") {
                    throw u.reason;
                }
            }
            return {
                updatedAddOns,
                updatedOrphans
            };
        });
        return d.apply(this, arguments);
    }
    l.markAddOnsAsReadDb = s;
    l.markUnclassifiedAddOnsAsReadDb = c;
}, 98);