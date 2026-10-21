__d("WAWebUserPrefsCustomPaymentMethods", [
    "WALogger",
    "WAWebPaymentMethodPIX",
    "WAWebPaymentMethodTypeRegistry",
    "WAWebUprConstants",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocalStorage",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsValidators"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return r("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS);
    }
    function c() {
        return o("WAWebPaymentMethodPIX").getValidStoredPix(u()) ?? null;
    }
    function d() {
        const a = u();
        const i = (a?.methods?.uprKeys ?? []).filter(o("WAWebPaymentMethodTypeRegistry").isStoredUprKeyValid).map(o("WAWebPaymentMethodTypeRegistry").withValidAdditionalIdentifiers);
        const l = (a?.methods?.clabe ?? []).filter(o("WAWebPaymentMethodTypeRegistry").isStoredClabeEntryValid).map((e)=>({
                credentialId: e.credentialId,
                country: e.country,
                accountType: o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT,
                identifierType: o("WAWebUprConstants").UprIdentifierType.CLABE,
                currency: "MXN",
                key: e.key,
                institution_name: e.institution_name,
                full_name_on_account: e.full_name_on_account,
                additionalIdentifiers: [],
                time_added: e.time_added,
                time_last_used: e.time_last_used
            }));
        return [].concat(i, l);
    }
    function m(t) {
        const out = {};
        const existingMethods = u();
        const i = o("WAWebPaymentMethodPIX").newPaymentMethodTypeErrors();
        let l = 0;
        const c = [];
        const d = new Map;
        t.forEach((e)=>{
            if (!o("WAWebPaymentMethodTypeRegistry").tryExtractUprKey(e, {
                out,
                existingMethods
            }, i)) {
                const r = o("WAWebUserPrefsTypes").WACustomPaymentMethodType.cast(e.type);
                if (r == null) {
                    l++;
                    if (c.length < 3) {
                        c.push(e.type);
                    }
                    return;
                }
                const s = o("WAWebPaymentMethodTypeRegistry").PaymentMethodTypeRegistry.get(r);
                if (s != null) {
                    const u = d.get(r) ?? {
                        received: 0,
                        wrote: 0
                    };
                    u.received++;
                    const m = s.extract(e, {
                        out,
                        existingMethods
                    }, i);
                    if (m) {
                        u.wrote++;
                    }
                    d.set(r, u);
                }
            }
        });
        if (l > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " invalid custom payment method types: ",
                ""
            ])), l, c).sendLogs("monitor-errors");
        }
        for (const [p, _] of d){
            const { received, wrote } = _;
            if (received > 0 && wrote === 0) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[customPaymentMethods] noRecognizedKeys type=",
                    " recv=",
                    " wrote=0"
                ])), p, received).sendLogs("monitor-errors");
            }
        }
        for (const h of o("WAWebPaymentMethodTypeRegistry").PaymentMethodTypeRegistry.values()){
            h.flushErrors(i);
        }
        o("WAWebPaymentMethodTypeRegistry").flushUprKeyErrors(i);
        r("WAWebUserPrefsLocalStorage").setItemToLocalStorage(o("WAWebUserPrefsKeys").KEYS.CUSTOM_PAYMENT_METHODS, out);
    }
    function p() {
        return o("WAWebPaymentMethodPIX").isStoredPIXValid(u());
    }
    l.getPIX = c;
    l.getAllUprStoredKeys = d;
    l.setCustomPaymentMethods = m;
    l.isPIXValid = p;
    l.isStringFieldValid = o("WAWebUserPrefsValidators").isStringFieldValid;
}, 98);