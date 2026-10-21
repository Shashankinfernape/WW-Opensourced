__d("WAWebClearDanglingReceipts", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebNetworkStatus",
    "WAWebOfflineResumePreAckHandler",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendReceiptJobCommon",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
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
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: get ",
                " danglingRecords"
            ])), t.length);
            if (r.aborted) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAndClearDanglingReceipts: aborting, signal.aborted"
                ])));
                throw new (o("WAAbortError")).AbortError;
            }
            const a = new Map;
            let i = [];
            let l = 0;
            t.forEach((e)=>{
                l += e.receipts.length;
                const { acks, receipts } = e;
                receipts.forEach((e)=>{
                    o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(a, {
                        author: o("WAWebWidFactory").createWid(e.author),
                        externalId: e.externalId,
                        from: o("WAWebWidFactory").createWid(e.from),
                        receiptClass: e.receiptClass
                    });
                });
                i = i.concat(acks);
            });
            const p = String(o("WATimeUtils").unixTime());
            const _ = [];
            a.forEach((e, t)=>{
                e.forEach((groupedReceipt, receiptClass)=>{
                    _.push(o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: t,
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                        t: p,
                        groupedReceipt,
                        receiptClass
                    }));
                });
            });
            const f = i.map((e)=>o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e));
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: sending ",
                " rcpts, ",
                " preAcks"
            ])), _.length, f.length);
            yield (g || (g = n("Promise"))).all(_);
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: complete sending ",
                " receipts"
            ])), _.length);
            yield g.all(f);
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: complete sending  ",
                " preAcks"
            ])), f.length);
            yield C();
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflinePreackCount(l);
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: complete"
            ])));
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (!r("WAWebNetworkStatus").online) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] clearDanglingReceipts: skip due to offline"
                ])));
                return;
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[offline-resume] clearDanglingReceipts: sending ping"
            ])));
            const e = yield o("WAWebCommsSendPing").blockSendPing();
            if (e) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[offline-resume] clearDanglingReceipts: clearing"
                ])));
                yield o("WAWebSchemaDanglingReceipt").getTable().clear();
            }
        });
        return b.apply(this, arguments);
    }
    l.sendAndClearDanglingReceipts = h;
    l.clearDanglingReceipts = C;
}, 98);