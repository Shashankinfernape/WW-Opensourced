__d("WAWebCreateReceiptStanzaReceiveMetric", [
    "WAWebAck",
    "WAWebHandleMsgReceiptParser",
    "WAWebReceiptStanzaReceiveWamEvent",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumReceiptStanzaStage",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = new (o("WAWebReceiptStanzaReceiveWamEvent")).ReceiptStanzaReceiveWamEvent({
            receiptStanzaStage: o("WAWebWamEnumReceiptStanzaStage").RECEIPT_STANZA_STAGE.OVERALL,
            receiptStanzaTotalCount: 1
        });
        return function({ ackString: n, from: r, offline: a, receipts: i }) {
            e.messageType = u(r);
            if (a != null) {
                const l = parseInt(a, 10);
                if (!Number.isNaN(l)) {
                    e.receiptStanzaOfflineCount = l;
                }
            }
            if (n == null) {
                e.receiptStanzaType = o("WAWebAck").ACK_STRING.DELIVERY;
            } else if (n in o("WAWebHandleMsgReceiptParser").RECEIPT_TYPES_TO_ACK) {
                e.receiptStanzaType = n;
            }
            if (i?.length != null) {
                e.receiptStanzaTotalCount = i.length;
            }
            e.markReceiptStanzaDuration();
            e.commit();
        };
    }
    function s() {
        const e = new (o("WAWebReceiptStanzaReceiveWamEvent")).ReceiptStanzaReceiveWamEvent({
            receiptStanzaStage: o("WAWebWamEnumReceiptStanzaStage").RECEIPT_STANZA_STAGE.OVERALL,
            receiptStanzaTotalCount: 1
        });
        return function({ from: n, type }) {
            e.messageType = u(n);
            e.receiptStanzaType = type;
            e.markReceiptStanzaDuration();
            e.commit();
        };
    }
    function u(e) {
        if (r("WAWebWid").isStatus(e)) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS;
        }
        if (r("WAWebWid").isGroup(e)) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP;
        }
        if (r("WAWebWid").isBroadcast(e)) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.BROADCAST;
        }
        if (r("WAWebWid").isNewsletter(e)) {
            return o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL;
        }
        return o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL;
    }
    l.createReceiptStanzaReceiveMetric = e;
    l.createRetryReceiptStanzaReceiveMetric = s;
}, 98);