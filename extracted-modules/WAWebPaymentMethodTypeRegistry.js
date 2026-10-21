__d("WAWebPaymentMethodTypeRegistry", [
    "WALogger",
    "WAWebCurrencyData",
    "WAWebPaymentMethodPIX",
    "WAWebUprConstants",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsValidators"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    const b = new Set([
        "bank_account",
        "wallet"
    ]);
    const v = new Map;
    function S(e, t) {
        v.set(e, t);
    }
    function R() {
        for (const e of v.values()){
            e();
        }
    }
    const L = {
        type: (C = o("WAWebUserPrefsTypes")).WACustomPaymentMethodType.PIX_KEY,
        country: "BR",
        extract: o("WAWebPaymentMethodPIX").extractAndStorePix,
        flushErrors: o("WAWebPaymentMethodPIX").flushPixErrors,
        isStoredValid: o("WAWebPaymentMethodPIX").isStoredPIXValid
    };
    function E({ errorKey, errors, input, metadataKey }) {
        const i = o("WAWebPaymentMethodPIX").findMetadataValue(input, metadataKey);
        if (i == null || !o("WAWebUserPrefsValidators").isStringFieldValid(i)) {
            o("WAWebPaymentMethodPIX").recordError(errors, errorKey);
            return null;
        }
        return i;
    }
    function k(e, t) {
        const n = e.findIndex((e)=>e.credentialId === t.credentialId);
        if (n >= 0) {
            e[n] = t;
        } else {
            e.push(t);
        }
    }
    function I(e, t, errors) {
        const u = E({
            errorKey: "clabe_key_null",
            errors,
            input: e,
            metadataKey: "key"
        });
        if (u == null) {
            return false;
        }
        const c = E({
            errorKey: "clabe_institution_name_null",
            errors,
            input: e,
            metadataKey: "institution_name"
        });
        if (c == null) {
            return false;
        }
        const d = E({
            errorKey: "clabe_full_name_on_account_null",
            errors,
            input: e,
            metadataKey: "full_name_on_account"
        });
        if (d == null) {
            return false;
        }
        const m = t.existingMethods?.methods?.clabe ?? [];
        const p = m.find((t)=>t.credentialId === e.credentialId);
        const _ = p?.time_added ?? Date.now();
        const f = p?.time_last_used ?? null;
        const g = {
            credentialId: e.credentialId,
            country: e.country,
            key: u,
            institution_name: c,
            full_name_on_account: d,
            time_added: _,
            time_last_used: f
        };
        const t_out = t.out;
        const y = t_out.methods ?? {};
        t_out.methods = y;
        const C = y.clabe ?? [];
        k(C, g);
        y.clabe = C;
        return true;
    }
    function T(t) {
        const i = t.counts.get("clabe_key_null") ?? 0;
        if (i > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " CLABE key values are null"
            ])), i).sendLogs("monitor-errors");
        }
        const l = t.counts.get("clabe_institution_name_null") ?? 0;
        if (l > 0) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " CLABE institution_name values are null"
            ])), l).sendLogs("monitor-errors");
        }
        const c = t.counts.get("clabe_full_name_on_account_null") ?? 0;
        if (c > 0) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " CLABE full_name_on_account values are null"
            ])), c).sendLogs("monitor-errors");
        }
    }
    function D(e) {
        return o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) && o("WAWebUserPrefsValidators").isStringFieldValid(e.country) && o("WAWebUserPrefsValidators").isStringFieldValid(e.key) && o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) && o("WAWebUserPrefsValidators").isStringFieldValid(e.full_name_on_account);
    }
    function x(e) {
        const n = e?.methods?.clabe;
        if (n == null || n.length === 0) {
            return false;
        }
        return n.every(D);
    }
    const $ = {
        type: C.WACustomPaymentMethodType.CLABE,
        country: "MX",
        extract: I,
        flushErrors: T,
        isStoredValid: x
    };
    function P(e) {
        return o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) && o("WAWebUserPrefsValidators").isStringFieldValid(e.country) && o("WAWebUprConstants").UprPaymentAccountType.cast(e.accountType) != null && o("WAWebUserPrefsValidators").isStringFieldValid(e.identifierType) && o("WAWebUserPrefsValidators").isStringFieldValid(e.currency) && o("WAWebUserPrefsValidators").isStringFieldValid(e.key) && o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) && o("WAWebUserPrefsValidators").isStringFieldValid(e.full_name_on_account);
    }
    function N(e) {
        return babelHelpers.extends({}, e, {
            additionalIdentifiers: Array.isArray(e.additionalIdentifiers) ? e.additionalIdentifiers.filter((e)=>e != null && o("WAWebUserPrefsValidators").isStringFieldValid(e.identifierType) && o("WAWebUserPrefsValidators").isStringFieldValid(e.value)) : []
        });
    }
    function M(e) {
        const t = o("WAWebPaymentMethodPIX").findMetadataValue(e, "additional_identifiers");
        if (t == null || !o("WAWebUserPrefsValidators").isStringFieldValid(t)) {
            return [];
        }
        try {
            const n = JSON.parse(t);
            if (Array.isArray(n)) {
                return n.flatMap((e)=>{
                    const t = e?.identifier_type;
                    const n = e?.value;
                    if (o("WAWebUserPrefsValidators").isStringFieldValid(t) && o("WAWebUserPrefsValidators").isStringFieldValid(n)) {
                        return [
                            {
                                identifierType: t,
                                value: n
                            }
                        ];
                    }
                    return [];
                });
            }
            return [];
        } catch (e) {
            return [];
        }
    }
    function w(e) {
        return {
            accountType: o("WAWebPaymentMethodPIX").findMetadataValue(e, "account_type"),
            identifierType: o("WAWebPaymentMethodPIX").findMetadataValue(e, "identifier_type")
        };
    }
    function A(e) {
        const t = o("WAWebPaymentMethodPIX").findMetadataValue(e, "currency");
        if (o("WAWebUserPrefsValidators").isStringFieldValid(t)) {
            return t;
        }
        const n = o("WAWebCurrencyData").REGION_TO_CURRENCY[e.country.toUpperCase()];
        const r = n?.[0];
        if (o("WAWebUserPrefsValidators").isStringFieldValid(r)) {
            return r;
        }
        return null;
    }
    function F(credentialId, t, accountType, identifierType) {
        const s = t.existingMethods?.methods?.uprKeys?.find(function(t) {
            return t.credentialId === credentialId;
        });
        const u = accountType === o("WAWebUprConstants").UprPaymentAccountType.BANK_ACCOUNT && identifierType === o("WAWebUprConstants").UprIdentifierType.CLABE ? t.existingMethods?.methods?.clabe?.find(function(t) {
            return t.credentialId === credentialId;
        }) : null;
        return s ?? u ?? null;
    }
    function O(e, t, n) {
        const l = F(e.credentialId, t, n.accountType, n.identifierType);
        const s = {
            credentialId: e.credentialId,
            country: e.country,
            accountType: n.accountType,
            identifierType: n.identifierType,
            currency: n.currency,
            key: n.key,
            institution_name: n.institutionName,
            full_name_on_account: n.fullNameOnAccount,
            additionalIdentifiers: n.additionalIdentifiers,
            time_added: l?.time_added ?? Date.now(),
            time_last_used: l?.time_last_used ?? null
        };
        const t_out = t.out;
        const c = t_out.methods ?? {};
        t_out.methods = c;
        const d = c.uprKeys ?? [];
        k(d, s);
        c.uprKeys = d;
    }
    function B(e, t, n) {
        const r = w(e);
        const { accountType, identifierType } = r;
        if (accountType == null || identifierType == null) {
            return false;
        }
        const accountType_1 = o("WAWebUprConstants").UprPaymentAccountType.cast(accountType);
        const s = ((e)=>{
            if (e === "CBU") {
                return o("WAWebUprConstants").UprIdentifierType.CBU;
            }
            if (e === "CVU") {
                return o("WAWebUprConstants").UprIdentifierType.CVU;
            }
            if (e === "CCI") {
                return o("WAWebUprConstants").UprIdentifierType.CCI;
            }
            if (o("WAWebUserPrefsValidators").isStringFieldValid(identifierType)) {
                return identifierType;
            }
            return null;
        })(e.type.toUpperCase());
        if (accountType_1 == null || s == null) {
            return true;
        }
        const u = A(e);
        const c = E({
            errorKey: "upr_key_null",
            errors: n,
            input: e,
            metadataKey: "key"
        });
        const institutionName = E({
            errorKey: "upr_institution_name_null",
            errors: n,
            input: e,
            metadataKey: "institution_name"
        });
        const fullNameOnAccount = E({
            errorKey: "upr_full_name_on_account_null",
            errors: n,
            input: e,
            metadataKey: "full_name_on_account"
        });
        if (u == null || !o("WAWebUserPrefsValidators").isStringFieldValid(u)) {
            o("WAWebPaymentMethodPIX").recordError(n, "upr_currency_null");
            return true;
        }
        if (!(c == null || institutionName == null || fullNameOnAccount == null)) {
            O(e, t, {
                accountType: accountType_1,
                identifierType: s,
                currency: u,
                key: c,
                institutionName,
                fullNameOnAccount,
                additionalIdentifiers: M(e)
            });
        }
        return true;
    }
    function W(e) {
        const i = e.counts.get("upr_key_null") ?? 0;
        if (i > 0) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR key values are null"
            ])), i).sendLogs("monitor-errors");
        }
        const l = e.counts.get("upr_institution_name_null") ?? 0;
        if (l > 0) {
            o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR institution_name values are null"
            ])), l).sendLogs("monitor-errors");
        }
        const s = e.counts.get("upr_full_name_on_account_null") ?? 0;
        if (s > 0) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR full_name_on_account values are null"
            ])), s).sendLogs("monitor-errors");
        }
        const u = e.counts.get("upr_currency_null") ?? 0;
        if (u > 0) {
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " UPR currency values are null"
            ])), u).sendLogs("monitor-errors");
        }
    }
    function q(e, t, n) {
        const c = E({
            errorKey: "id_key_null",
            errors: n,
            input: e,
            metadataKey: "key"
        });
        if (c == null) {
            return false;
        }
        const d = E({
            errorKey: "id_institution_name_null",
            errors: n,
            input: e,
            metadataKey: "institution_name"
        });
        if (d == null) {
            return false;
        }
        const m = E({
            errorKey: "id_full_name_on_account_null",
            errors: n,
            input: e,
            metadataKey: "full_name_on_account"
        });
        if (m == null) {
            return false;
        }
        const p = o("WAWebPaymentMethodPIX").findMetadataValue(e, "account_type");
        if (p == null) {
            o("WAWebPaymentMethodPIX").recordError(n, "id_account_type_null");
            return false;
        }
        const account_type = p === "bank_account" ? "bank_account" : p === "wallet" ? "wallet" : null;
        if (account_type == null) {
            o("WAWebPaymentMethodPIX").recordError(n, "id_account_type_invalid", p);
            return false;
        }
        const f = t.existingMethods?.methods?.idPaymentAccount ?? [];
        const g = f.find((t)=>t.credentialId === e.credentialId);
        const h = g?.time_added ?? Date.now();
        const y = g?.time_last_used ?? null;
        const C = {
            credentialId: e.credentialId,
            country: e.country,
            key: c,
            institution_name: d,
            full_name_on_account: m,
            account_type,
            time_added: h,
            time_last_used: y
        };
        const t_out = t.out;
        const v = t_out.methods ?? {};
        t_out.methods = v;
        const S = v.idPaymentAccount ?? [];
        k(S, C);
        v.idPaymentAccount = S;
        return true;
    }
    function U(e) {
        const l = e.counts.get("id_key_null") ?? 0;
        if (l > 0) {
            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account key values are null"
            ])), l).sendLogs("monitor-errors");
        }
        const s = e.counts.get("id_institution_name_null") ?? 0;
        if (s > 0) {
            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account institution_name values are null"
            ])), s).sendLogs("monitor-errors");
        }
        const u = e.counts.get("id_full_name_on_account_null") ?? 0;
        if (u > 0) {
            o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account full_name_on_account values are null"
            ])), u).sendLogs("monitor-errors");
        }
        const c = e.counts.get("id_account_type_null") ?? 0;
        if (c > 0) {
            o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account account_type values are null"
            ])), c).sendLogs("monitor-errors");
        }
        const d = e.counts.get("id_account_type_invalid") ?? 0;
        if (d > 0) {
            const p = e.samples.get("id_account_type_invalid") ?? [];
            o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " ID Payment Account account_type values are invalid: ",
                ""
            ])), d, p).sendLogs("monitor-errors");
        }
    }
    function V(e) {
        return o("WAWebUserPrefsValidators").isStringFieldValid(e.credentialId) && o("WAWebUserPrefsValidators").isStringFieldValid(e.country) && o("WAWebUserPrefsValidators").isStringFieldValid(e.key) && o("WAWebUserPrefsValidators").isStringFieldValid(e.institution_name) && o("WAWebUserPrefsValidators").isStringFieldValid(e.full_name_on_account) && b.has(e.account_type);
    }
    function H(e) {
        const n = e?.methods?.idPaymentAccount;
        if (n == null || n.length === 0) {
            return false;
        }
        return n.every(V);
    }
    const G = {
        type: C.WACustomPaymentMethodType.ID_PAYMENT_ACCOUNT,
        country: "ID",
        extract: q,
        flushErrors: U,
        isStoredValid: H
    };
    const z = new Map([
        [
            C.WACustomPaymentMethodType.PIX_KEY,
            L
        ],
        [
            C.WACustomPaymentMethodType.CLABE,
            $
        ],
        [
            C.WACustomPaymentMethodType.ID_PAYMENT_ACCOUNT,
            G
        ]
    ]);
    l.registerPaymentMethodSmartDefault = S;
    l.runAllPaymentMethodSmartDefaults = R;
    l.isStoredClabeEntryValid = D;
    l.isStoredUprKeyValid = P;
    l.withValidAdditionalIdentifiers = N;
    l.tryExtractUprKey = B;
    l.flushUprKeyErrors = W;
    l.PaymentMethodTypeRegistry = z;
}, 98);