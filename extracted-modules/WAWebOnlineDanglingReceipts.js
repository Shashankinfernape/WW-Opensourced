__d("WAWebOnlineDanglingReceipts", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebNetworkStatus",
    "WAWebSendReceiptJobCommon",
    "WAWebWamOfflineResumeReporter",
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
    const g = new Map;
    const h = new Map;
    let y = null;
    const C = 120 * 1000;
    function b({ author: n, externalId: r, from: a, options: i, receiptClass: l }) {
        const s = i?.sendsGroupAgentDeliveryReceipt === true ? h : g;
        o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(s, {
            author: n,
            externalId: r,
            from: a,
            receiptClass: l
        });
        if (y == null) {
            y = self.setTimeout(function() {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[online-preacks] clear dangling receipts (timeout)"
                ])));
                k();
                y = null;
            }, C);
        }
    }
    function v() {
        return g.size > 0 || h.size > 0;
    }
    function S() {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = String(o("WATimeUtils").unixTime());
            let t = 0;
            const r = [];
            const a = [];
            const i = function(i, l) {
                i.forEach((n, i)=>{
                    n.forEach((n, s)=>{
                        n.forEach((e)=>{
                            t += e.length;
                        });
                        if (r.length < 3) {
                            r.push(n.size);
                        }
                        a.push(o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                            to: i,
                            type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                            t: e,
                            groupedReceipt: n,
                            receiptClass: s,
                            sendsGroupAgentDeliveryReceipt: l
                        }));
                    });
                });
            };
            i(g, false);
            i(h, true);
            if (r.length > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[online-preacks] sending ",
                    " dangling receipt buckets for ",
                    " chats => ",
                    ""
                ])), a.length, g.size, r);
            }
            yield (f || (f = n("Promise"))).all(a);
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflinePreackCount(t, true);
            L();
        });
        return R.apply(this, arguments);
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (v()) {
                if (!r("WAWebNetworkStatus").online) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[clearOnlineDanglingReceiptsAfterSending] skip offline"
                    ])));
                    return;
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[clearOnlineDanglingReceiptsAfterSending] ping"
                ])));
                const e = yield o("WAWebCommsSendPing").blockSendPing();
                if (e) {
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[clearOnlineDanglingReceiptsAfterSending] cleared"
                    ])));
                    T();
                }
            }
        });
        return E.apply(this, arguments);
    }
    function k() {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (v() && r("WAWebNetworkStatus").online) {
                try {
                    o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[online-preacks] clearOrFlushOnlineDanglingReceipts: ping"
                    ])));
                    const e = yield o("WAWebCommsSendPing").blockSendPing();
                    if (e) {
                        o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[online-preacks] clearOrFlushOnlineDanglingReceipts: cleared"
                        ])));
                        T();
                    }
                } catch (e) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[online-preacks] clearOrFlushOnlineDanglingReceipts: failed ",
                        ""
                    ])), e);
                }
            }
        });
        return I.apply(this, arguments);
    }
    function T() {
        g.clear();
        h.clear();
    }
    l.addOnlineDanglingReceipts = b;
    l.hasOnlineDanglingReceipts = v;
    l.sendAndClearOnlineDanglingReceipts = S;
}, 98);