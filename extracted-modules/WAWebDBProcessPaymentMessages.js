__d("WAWebDBProcessPaymentMessages", [
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            const r = [];
            const a = u(e);
            const i = c(e.filter((e)=>e.subtype === "payment_action_request_declined" || e.subtype === "payment_transaction_request_cancelled"));
            return o("WAWebModelStorageUtils").getStorage().lock([
                "message"
            ], (()=>{
                const l = n("asyncToGeneratorRuntime").asyncToGenerator(function*([l]) {
                    const s = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(a.concat(i));
                    const u = new Map;
                    s.forEach((e)=>{
                        if (e != null) {
                            u.set(e.id.toString(), e);
                        }
                    });
                    e.forEach((e)=>{
                        let a = e.paymentRequestMessageKey?.toString();
                        let i = u.get(a || "");
                        if (i == null && e.paymentRequestMessageKey != null) {
                            const l = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.paymentRequestMessageKey);
                            if (l != null) {
                                a = l.toString();
                                i = u.get(o("WAWebLidMigrationUtils").getAlternateMsgKey(l)?.toString() ?? "");
                            }
                        }
                        if (i && a != null) {
                            if (e.subtype === "send" && e.paymentTxnStatus != null) {
                                t.push({
                                    id: a,
                                    paymentTxnStatus: e.paymentTxnStatus
                                });
                            } else {
                                const d = i.from.isGroup() ? i.author : i.from;
                                const m = o("WAWebUserPrefsMeUser").isMeAccount(i.paymentMessageReceiverJid);
                                const p = m ? d : i.paymentMessageReceiverJid;
                                if (e.subtype === "payment_action_request_declined") {
                                    t.push({
                                        id: a,
                                        paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED,
                                        paymentTxnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_REJECTED
                                    });
                                } else if (e.subtype === "payment_transaction_request_cancelled") {
                                    t.push({
                                        id: a,
                                        paymentStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED,
                                        paymentTxnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_CANCELED
                                    });
                                }
                                t.push({
                                    id: e.id.toString(),
                                    type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                                    templateParams: [
                                        p || "",
                                        i.paymentCurrency || "",
                                        String(i.paymentAmount1000)
                                    ]
                                });
                            }
                        } else {
                            if (u.get(e.id.toString()) && !e.isMdHistoryMsg) {
                                r.push(e.id.toString());
                            }
                        }
                    });
                    yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(r);
                    yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(t);
                    return t;
                });
                return function(e) {
                    return l.apply(this, arguments);
                };
            })());
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return e.flatMap((e)=>{
            let t;
            return [
                e.paymentRequestMessageKey ? e.paymentRequestMessageKey.toString() : null,
                e.paymentRequestMessageKey && (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.paymentRequestMessageKey)?.toString()) != null ? t : null
            ];
        }).filter(Boolean);
    }
    function c(e) {
        return e.flatMap((e)=>[
                e.id.toString(),
                o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id)?.toString() ?? null
            ]).filter(Boolean);
    }
    l.processPaymentMessages = e;
    l.mapOriginalAndAltPaymentRequestMessageKey = u;
    l.mapOriginalAndAltMsgId = c;
}, 98);