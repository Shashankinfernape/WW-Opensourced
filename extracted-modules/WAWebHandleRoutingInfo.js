__d("WAWebHandleRoutingInfo", [
    "WAHex",
    "WALogger",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = {
        fb: "fb",
        sl: "sl"
    };
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let t_domain = t.domain;
            if (t_domain == null || t_domain === "") {
                const r = yield o("WAWebUserPrefsMultiDevice").getRoutingInfo();
                t_domain = r ? r.domain : s.fb;
            }
            const edgeRouting = o("WAHex").bytesToBuffer(t.edgeRouting);
            yield o("WAWebUserPrefsMultiDevice").setRoutingInfo({
                domain: t_domain,
                edgeRouting
            });
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleInfoBulletin setting and domain: ",
                " and edgeRouting:"
            ])), t_domain);
        });
        return c.apply(this, arguments);
    }
    l.DOMAINS = s;
    l.handleRoutingInfo = u;
}, 98);