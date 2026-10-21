__d("WAWebBrPixBankCatalog", [
    "Promise",
    "WALogger",
    "WASmaxBrPaymentGetPixBankListRPC",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = 1000;
    let d = null;
    let m = null;
    function p(accountBanksBank, t) {
        const banksByRefId = new Map;
        let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        for (const o of accountBanksBank){
            if (!(o.bankRefId === "" || o.bankName.trim() === "" || o.ttl <= 0)) {
                banksByRefId.set(o.bankRefId, {
                    bankName: o.bankName,
                    bankRefId: o.bankRefId,
                    imageUrl: o.imageUrl
                });
                Number_POSITIVE_INFINITY = Math.min(Number_POSITIVE_INFINITY, o.ttl);
            }
        }
        if (banksByRefId.size === 0 || !Number.isFinite(Number_POSITIVE_INFINITY)) {
            return null;
        }
        return {
            banksByRefId,
            expiresAtMs: t + Number_POSITIVE_INFINITY * c
        };
    }
    function _() {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                const t = yield o("WASmaxBrPaymentGetPixBankListRPC").sendGetPixBankListRPC();
                if (t.name !== "GetPixBankListResponseSuccess") {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "br_pix_bank_catalog: bank list request returned an error"
                    ]))).sendLogs("br-pix-bank-catalog-fetch");
                    return null;
                }
                return p(t.value.accountBanksBank, Date.now());
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "br_pix_bank_catalog: bank list request failed"
                ]))).sendLogs("br-pix-bank-catalog-fetch");
                return null;
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        const e = d;
        if (e != null && e.expiresAtMs > Date.now()) {
            return (u || (u = n("Promise"))).resolve(e);
        }
        const t = m;
        if (t != null) {
            return t;
        }
        var r = _().then((e)=>{
            if (e != null) {
                d = e;
            }
            if (m === r) {
                m = null;
            }
            return e;
        });
        m = r;
        return r;
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e === "") {
                return null;
            }
            const n = yield g();
            return (n == null ? undefined : n.banksByRefId.get(e)) ?? null;
        });
        return y.apply(this, arguments);
    }
    function C() {
        d = null;
        m = null;
    }
    l.getPixBankByRefId = h;
    l.resetPixBankCatalogForTesting = C;
}, 98);