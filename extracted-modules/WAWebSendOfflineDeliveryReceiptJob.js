__d("WAWebSendOfflineDeliveryReceiptJob", [
    "Promise",
    "WAComms",
    "WALogger",
    "WATimeUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebHandleMsgSendAck",
    "WAWebOfflineResumePreAckHandler",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendAggregateDeliveryReceipts",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = [];
            if (t.length === 0) {
                return n;
            }
            const r = yield o("WAWebSendAggregateDeliveryReceipts").aggregateDeliveryReceipts(t);
            for (const a of r){
                const { isInDB: i, receipt: l } = a;
                const { author: u, enc: c, externalId: d, from: m, msgInfo: p, msgMeta: _ } = l;
                const f = m.isUser() || m.isNewsletter() ? null : u;
                if (i) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[sendAggregateOfflineReceipts] dup msg in db: ",
                        ""
                    ])), d);
                    o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropDuplicateMessage({
                        msgMeta: _,
                        msgInfo: p,
                        enc: c
                    });
                    n.push({
                        externalId: d,
                        from: m,
                        author: u,
                        receiptClass: o("WAWebDeliveryReceiptClassUtils").getDeliveryReceiptClass(m, _)
                    });
                } else {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[sendAggregateOfflineReceipts] dup msg not in db: ",
                        ""
                    ])), d);
                    o("WAWebPostIncomingMessageDropMetric").postIncomingMessageDropOldCounter({
                        msgMeta: _,
                        msgInfo: p,
                        enc: c
                    });
                    o("WAWebHandleMsgSendAck").sendNack(d, m, _.type, f, o("WAWebCreateNackFromStanza").NackReason.SignalErrorOldCounter, void 0, _.isStatusStanza === true ? "status" : void 0);
                }
            }
            return n;
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendAggregateOfflineReceipts"
            ])));
            let t = [];
            const a = [];
            for (const i of e){
                const { duplicateMsgReceiptInfo: l, receiptInfo: s } = i;
                if (l != null) {
                    a.push(l);
                }
                if (s != null) {
                    t.push(s);
                }
            }
            const _ = yield p(a);
            t = t.concat(_);
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendAggregateOfflineReceipts: ",
                " receipts are ready to be sent"
            ])), t.length);
            const f = new Map;
            const g = [];
            const y = [];
            t.forEach((e)=>{
                const { author: t, externalId: n, from: a, receiptClass: i, statusAckType: l } = e;
                if (l != null && r("justknobx")._("6393")) {
                    y.push({
                        ackClass: "status",
                        ackId: n,
                        to: String(a),
                        tag: "ack",
                        participant: null,
                        type: l,
                        error: null
                    });
                    return;
                }
                o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(f, e);
                const s = {
                    from: String(a),
                    author: String(t),
                    externalId: n
                };
                if (i != null) {
                    s.receiptClass = i;
                }
                g.push(s);
            });
            const C = String(o("WATimeUtils").unixTime());
            const b = [];
            f.forEach((e, t)=>{
                e.forEach((e, n)=>{
                    const r = t.isUser() && o("WAWebUserPrefsMeUser").isMeAccount(t);
                    const a = r ? o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.SENDER : o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY;
                    const i = r ? t : null;
                    b.push(o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: t,
                        type: a,
                        t: C,
                        groupedReceipt: e,
                        receiptClass: n,
                        recipient: i
                    }));
                });
            });
            (m || (m = n("Promise"))).all(b).catch((e)=>{
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAggregateOfflineReceipts: error sending receipts"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("offline-receipt-send-error");
            });
            o("WAComms").cancelDeadSocketTimer();
            y.forEach((e)=>{
                o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e);
            });
            if (g.length > 0 || y.length > 0) {
                yield o("WAWebSchemaDanglingReceipt").getTable().create({
                    receipts: g,
                    acks: y
                });
            }
            return h(a, _);
        });
        return g.apply(this, arguments);
    }
    function h(e, t) {
        const n = new Set(t.map(({ externalId: t })=>t));
        return e.map(({ externalId: t })=>t).filter((e)=>!n.has(e));
    }
    l.handleDuplicateMsgReceipts = p;
    l.sendAggregateOfflineReceipts = f;
}, 98);