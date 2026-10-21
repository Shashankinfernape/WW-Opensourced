__d("WAWebApiCoexV2RelayReceiptStore", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCoexV2BotWid",
    "WAWebSchemaCoexV2RelayReceipt",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 60 * o("WATimeUtils").DAY_SECONDS;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ createdAt, msgId, props, representedLid }) {
            const l = o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable();
            const s = [
                msgId,
                representedLid
            ];
            const u = createdAt == null ? yield l.get(s) : null;
            yield l.createOrMerge(s, babelHelpers.extends({
                msgId,
                representedLid,
                createdAt: createdAt ?? u?.createdAt ?? o("WATimeUtils").unixTime(),
                botJid: o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID.toString()
            }, props));
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r = o("WATimeUtils").unixTime()) {
            if (t.length !== 0) {
                yield (s || (s = n("Promise"))).all(t.map((t)=>{
                    const n = t.toString();
                    return c({
                        createdAt: r,
                        msgId: e,
                        props: {},
                        representedLid: n
                    });
                }));
            }
        });
        return p.apply(this, arguments);
    }
    function _({ ack, msgId, projectedAck, representedLid, ts }) {
        const d = representedLid.toString();
        const m = ack === o("WAWebAck").ACK.RECEIVED ? {
            delivered: ts
        } : ack === o("WAWebAck").ACK.READ ? {
            read: ts
        } : ack === o("WAWebAck").ACK.PLAYED ? {
            played: ts
        } : null;
        if (m == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] receipt store: unsupported ack ",
                ""
            ])), ack).sendLogs("coexv2-relay-receipt-unsupported-ack");
            return (s || (s = n("Promise"))).resolve();
        }
        const p = f(ack, projectedAck, ts);
        return c({
            msgId,
            props: babelHelpers.extends({}, m, p),
            representedLid: d
        });
    }
    function f(ack, projectedAck, n) {
        if (ack !== o("WAWebAck").ACK.READ) {
            return {};
        }
        if (projectedAck === o("WAWebAck").ACK.RECEIVED) {
            return {
                projectedDelivered: n
            };
        }
        if (projectedAck === o("WAWebAck").ACK.READ) {
            return {
                projectedRead: n
            };
        }
        return {};
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable().get([
                e,
                t.toString()
            ]);
            if (n?.projectedRead != null) {
                return o("WAWebAck").ACK.READ;
            }
            if (n?.projectedDelivered != null) {
                return o("WAWebAck").ACK.RECEIVED;
            }
            return null;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable().equals([
                "msgId"
            ], e, {
                limit: 1
            });
            return t.length > 0;
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield S(o("WATimeUtils").unixTime() - u);
            const t = yield o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable().equals([
                "msgId"
            ], e);
            return t.filter((e)=>e.delivered == null && e.read == null && e.played == null).map((e)=>e.representedLid);
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaCoexV2RelayReceipt").getCoexV2RelayReceiptTable().bulkDeleteRange([
                "createdAt"
            ], 0, e);
        });
        return R.apply(this, arguments);
    }
    l.COEX_V2_RELAY_RECEIPT_RETENTION_SECONDS = u;
    l.createOrMergeCoexV2RelayReceipts = m;
    l.addOrUpdateCoexV2RelayReceipt = _;
    l.getCoexV2RelayMessageAck = g;
    l.hasCoexV2RelayReceipt = y;
    l.getUndeliveredCoexV2Lids = b;
    l.purgeCoexV2RelayReceiptsBefore = S;
}, 98);