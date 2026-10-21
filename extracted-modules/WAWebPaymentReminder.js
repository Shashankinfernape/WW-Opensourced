__d("WAWebPaymentReminder", [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        try {
            const o = JSON.parse(e);
            if (o.cta_action_url == null || o.due_date == null || o.amount_due == null || o.amount_due_currency == null) {
                return null;
            }
            const dueDateMs = parseInt(o.due_date, 10) * 1000;
            return {
                url: o.cta_action_url,
                dueDateMs,
                amountDue: {
                    value: o.amount_due.value,
                    offset: o.amount_due.offset
                },
                amountDueCurrency: o.amount_due_currency,
                isOverdue: o.is_overdue === true,
                daysOverdue: o.days_overdue ?? null,
                accountName: o.account_name ?? null,
                cardNumber: o.card_number_last_4_digits ?? null
            };
        } catch (e) {
            return null;
        }
    }
    function s({ interactivePayload, interactiveType, nativeFlowName, type }) {
        if (nativeFlowName !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER || type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE || interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW || !(interactivePayload != null && interactivePayload.buttons)) {
            return null;
        }
        const u = interactivePayload.buttons[0]?.buttonParamsJson;
        if (u == null) {
            return null;
        }
        return e(u);
    }
    function u(t) {
        if (t?.name !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REMINDER) {
            return null;
        }
        const t_buttonParamsJson = t.buttonParamsJson;
        if (t_buttonParamsJson == null) {
            return null;
        }
        return e(t_buttonParamsJson);
    }
    l.getPaymentReminderInfoFor = s;
    l.parsePaymentReminderButton = u;
}, 98);