__d("WAWebCoexV2SendReceipt", [
    "WAWebCoexV2BotWid",
    "WAWebSendReceiptJobCommon",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER,
                recipient: t,
                groupedReceipt: new Map([
                    [
                        t,
                        [
                            e
                        ]
                    ]
                ])
            });
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                recipient: t,
                groupedReceipt: new Map([
                    [
                        t,
                        [
                            e
                        ]
                    ]
                ])
            });
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ externalIds: t, isReadSelf: n, maxSts: r, recipient: a, t: i }) {
            return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
                type: n ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ_SELF : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.READ,
                recipient: a,
                t: i,
                groupedReceipt: new Map([
                    [
                        a,
                        [].concat(t)
                    ]
                ]),
                maxStsByAuthor: r != null ? new Map([
                    [
                        a,
                        r
                    ]
                ]) : null
            });
        });
        return m.apply(this, arguments);
    }
    l.sendCoexV2SenderReceipt = e;
    l.sendCoexV2DeliveryReceipt = u;
    l.sendCoexV2ReadReceipt = d;
}, 98);