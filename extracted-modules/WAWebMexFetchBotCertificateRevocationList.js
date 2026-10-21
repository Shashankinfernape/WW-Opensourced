__d("WAWebMexFetchBotCertificateRevocationList", [
    "WAWebMexClient",
    "WAWebMexFetchBotCertificateRevocationListQuery.graphql",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "whatsapp_simple_signal";
    const u = 172800000;
    const c = e !== void 0 ? e : e = n("WAWebMexFetchBotCertificateRevocationListQuery.graphql");
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebMexClient").fetchQuery(c, {
                crl_name: s
            });
            const t = e?.xwa2_fetch_feature_pki_crl;
            if (t == null) {
                throw r("err")("Empty CRL response from server");
            }
            const n = t.next_update != null ? parseInt(t.next_update, 10) * 1000 : NaN;
            const a = Number.isFinite(n) ? n : Date.now() + u;
            return {
                crl: t.crl,
                nextUpdateMs: a
            };
        });
        return m.apply(this, arguments);
    }
    l.mexFetchBotCertificateRevocationList = d;
}, 98);