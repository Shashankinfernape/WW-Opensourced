__d("WAWebCrosspostingMsgHydration", [
    "WAWebCrosspostingDBOperations",
    "WAWebMsgGetters",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (o("WAWebMsgGetters").getIsStatus(e)) {
                const t = e.id.toString();
                const n = yield o("WAWebCrosspostingDBOperations").getCrosspostingInfoForMessage(t);
                if (n != null) {
                    e.crosspostingInfo = n;
                }
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = e.map((e)=>e.id.toString());
                const n = yield o("WAWebCrosspostingDBOperations").getCrosspostingInfoForMessagesBulk(t);
                for (const r of e){
                    const a = n.get(r.id.toString());
                    if (a != null) {
                        r.crosspostingInfo = a;
                    }
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.hydrateCrosspostingInfo = e;
    l.hydrateCrosspostingInfoBulk = u;
}, 98);