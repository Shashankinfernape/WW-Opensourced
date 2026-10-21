__d("WAWebUprPaymentRequest", [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebUprConstants"
], function(t, n, r, o, a, i, l) {
    function e({ additional_identifiers: t }) {
        if (Array.isArray(t)) {
            return t.flatMap((e)=>{
                const t = e?.identifier_type;
                const n = e?.value;
                if (typeof t === "string" && t.trim() !== "" && typeof n === "string" && n.trim() !== "") {
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
    }
    function s(t) {
        let n;
        if (t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || t.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW || t.nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || !((n = t.interactivePayload) != null && n.buttons)) {
            return null;
        }
        const s = t.interactivePayload.buttons[0]?.buttonParamsJson;
        if (s == null) {
            return null;
        }
        let u;
        try {
            u = JSON.parse(s);
        } catch (e) {
            return null;
        }
        if (u[o("WAWebUprConstants").UprWireFields.PAYMENT_TYPE] !== o("WAWebUprConstants").UPR_PAYMENT_TYPE) {
            return null;
        }
        const c = u[o("WAWebUprConstants").UprWireFields.PAYMENT_SETTINGS];
        if (!Array.isArray(c) || c.length === 0) {
            return null;
        }
        const d = u[o("WAWebUprConstants").UprWireFields.TOTAL_AMOUNT];
        const m = d?.value != null && d?.offset != null ? d : null;
        const p = [];
        for (const _ of c){
            const f = _[o("WAWebUprConstants").UprWireFields.TYPE];
            if (f === o("WAWebUprConstants").UprPaymentSettingType.PAYMENT_LINK) {
                const h = _[o("WAWebUprConstants").UprWireFields.PAYMENT_LINK]?.[o("WAWebUprConstants").UprWireFields.URI];
                if (h != null && h !== "") {
                    p.push({
                        kind: "payment_link",
                        uri: h
                    });
                }
            } else if (f === o("WAWebUprConstants").UprPaymentSettingType.PAYMENT_ACCOUNT) {
                const y = _[o("WAWebUprConstants").UprWireFields.PAYMENT_ACCOUNT];
                if (y?.[o("WAWebUprConstants").UprWireFields.IDENTIFIER_VALUE] != null) {
                    p.push({
                        kind: "payment_account",
                        accountType: y[o("WAWebUprConstants").UprWireFields.ACCOUNT_TYPE],
                        identifierType: y[o("WAWebUprConstants").UprWireFields.IDENTIFIER_TYPE],
                        identifierValue: y[o("WAWebUprConstants").UprWireFields.IDENTIFIER_VALUE],
                        institutionName: y[o("WAWebUprConstants").UprWireFields.INSTITUTION_NAME] ?? "",
                        beneficiaryName: y[o("WAWebUprConstants").UprWireFields.BENEFICIARY_NAME] ?? "",
                        additionalIdentifiers: e(y)
                    });
                }
            }
        }
        if (p.length === 0) {
            return null;
        }
        const v = u[o("WAWebUprConstants").UprWireFields.ORDER];
        const S = Array.isArray(v?.[o("WAWebUprConstants").UprWireFields.ITEMS]) ? v[o("WAWebUprConstants").UprWireFields.ITEMS].map((e)=>({
                retailerId: e.retailer_id,
                name: e.name,
                amount: e.amount,
                quantity: e.quantity
            })) : null;
        return {
            referenceId: u[o("WAWebUprConstants").UprWireFields.REFERENCE_ID] ?? "",
            currency: u[o("WAWebUprConstants").UprWireFields.CURRENCY] ?? "",
            totalAmount: m,
            paymentOptions: p,
            items: S
        };
    }
    l.parseUprPaymentInfo = s;
}, 98);