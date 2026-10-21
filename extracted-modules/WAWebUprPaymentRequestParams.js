__d("WAWebUprPaymentRequestParams", [
    "WAWebUprConstants"
], function(t, n, r, o, a, i, l) {
    function e({ amount, currency, offset, paymentKeys, referenceId }) {
        const l = {
            payment_type: o("WAWebUprConstants").UPR_PAYMENT_TYPE,
            type: "physical-goods",
            reference_id: referenceId,
            currency,
            payment_settings: paymentKeys.map((e)=>({
                    type: o("WAWebUprConstants").UprPaymentSettingType.PAYMENT_ACCOUNT,
                    payment_account: s(e)
                }))
        };
        if (amount != null) {
            l.total_amount = {
                value: amount,
                offset
            };
        }
        return l;
    }
    function s(e) {
        let t;
        const n = {
            account_type: e.accountType,
            identifier_type: e.identifierType,
            identifier_value: e.key,
            institution_name: e.institution_name,
            beneficiary_name: e.full_name_on_account
        };
        if ((t = e.additionalIdentifiers) != null && t.length) {
            n.additional_identifiers = e.additionalIdentifiers.map((e)=>({
                    identifier_type: e.identifierType,
                    value: e.value
                }));
        }
        return n;
    }
    l.buildUprPaymentRequestParams = e;
}, 98);