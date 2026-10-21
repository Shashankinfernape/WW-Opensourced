__d("WAWebDBGroupMembeshipApprovalRequest", [
    "WABatcher",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = 3000;
    const s = o("WABatcher").batch({
        delayMs: e
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.flatMap((e)=>{
                const t = e.id.toString();
                return e.requests.map((e)=>[
                        t,
                        e.toString()
                    ]);
            });
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "pending-membership-approval-request"
            ], function([n]) {
                return n.bulkRemove(t);
            });
            return t.map((e)=>{});
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function u(e, t, n = false) {
        if (n) {
            return s({
                id: e,
                requests: t
            });
        }
        const r = e.toString();
        return o("WAWebModelStorageUtils").getStorage().lock([
            "pending-membership-approval-request"
        ], function([n]) {
            return n.bulkRemove(t.map((e)=>[
                    r,
                    e.toString()
                ]));
        });
    }
    l.removeMembershipApprovalRequests = u;
}, 98);