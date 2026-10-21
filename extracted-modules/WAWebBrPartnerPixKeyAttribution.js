__d("WAWebBrPartnerPixKeyAttribution", [
    "Promise",
    "WAWebBrPixBankCatalog",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = {
        kind: "none"
    };
    const u = 15000;
    function c(t) {
        return new (e || (e = n("Promise")))(function(e) {
            const n = self.setTimeout(function() {
                e(null);
            }, u);
            const r = function(r) {
                self.clearTimeout(n);
                e(r);
            };
            o("WAWebBrPixBankCatalog").getPixBankByRefId(t).then(r, ()=>{
                r(null);
            });
        });
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e == null || e === "") {
                return s;
            }
            const t = yield c(e);
            if (t == null) {
                return s;
            }
            return {
                bankName: t.bankName,
                kind: "unverified",
                logoUrl: t.imageUrl.trim()
            };
        });
        return m.apply(this, arguments);
    }
    l.lookUpWithinWait = c;
    l.resolvePartnerPixKeyAttribution = d;
}, 98);