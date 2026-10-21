__d("WAWebPaymentNotificationHandler", [
    "WALogger",
    "WAWap",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPaymentNotificationParser",
    "WAWebPaymentStatusUtils",
    "WAWebPaymentsODS",
    "WAWebSchemaOrphanPaymentNotification",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WAWebPaymentNotificationParser").paymentNotificationParser.parse(t);
            if (n.error != null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePaymentNotification: failed: ",
                    ""
                ])), n.error);
                throw n.error;
            }
            const n_success = n.success;
            const { dehydratedTransaction, invite, transaction } = n_success;
            if (dehydratedTransaction) {
                o("WAWebPaymentsODS").logDehydratedTransactionNotificationSkipped();
            }
            if (invite != null) {
                yield _(invite);
            } else if (transaction != null) {
                yield m(transaction);
            }
            return E(n.success);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = r("nullthrows")(e.msgKey);
            const n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
            const a = k(t, n);
            const i = a ? o("WAWebStateUtils").unproxy(a) : yield I(t, n);
            if (!i) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePaymentTransactionNotification: no msg found for id: ",
                    ""
                ])), t);
                const l = babelHelpers.extends({}, e, {
                    msgKey: t.toString()
                });
                yield o("WAWebSchemaOrphanPaymentNotification").getTable().createOrReplace(l);
                return;
            }
            yield g(i, e);
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type === "account-set-up") {
                const t = yield R(e.from, e.timestamp);
                yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                    chatId: t.from,
                    newMsg: t,
                    handleSingleMsgOrigin: "handlePaymentInviteNotification"
                });
            }
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = [];
            y(e, t);
            n.push(e.id.toString());
            const r = [
                e instanceof o("WAWebMsgModel").Msg ? e.toJSON() : e
            ];
            if (e.paymentRequestMessageKey != null) {
                const a = e.paymentRequestMessageKey;
                const i = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
                const l = k(a, i);
                const s = l ? o("WAWebStateUtils").unproxy(l) : yield I(a, i);
                if (s) {
                    s.paymentStatus = e.paymentStatus;
                    s.paymentTxnStatus = o("WAWebPaymentStatusUtils").determinePaymentRequestFulfilledStatus(e.paymentTxnStatus);
                    r.push(s instanceof o("WAWebMsgModel").Msg ? s.toJSON() : s);
                }
            }
            o("WAWebSchemaOrphanPaymentNotification").getTable().bulkRemove(n).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getOrphanPaymentNotificationTable.bulkRemove fail: ",
                    " err: ",
                    ""
                ])), n, e);
            });
            yield o("WAWebDBProcessMessage").updateExistingMessages(r);
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        if (t) {
            if (t.status != null) {
                e.paymentStatus = o("WAWebPaymentStatusUtils").getPaymentWebStatus(t.status, t.type);
                e.paymentTxnStatus = o("WAWebPaymentStatusUtils").getPaymentTxnWebStatus(t.status);
            }
            e.paymentCurrency = t.currency || "";
            e.paymentAmount1000 = r("nullthrows")(t.amount1000);
            e.paymentMessageReceiverJid = t.receiver;
            e.paymentTransactionTimestamp = r("nullthrows")(t.ts);
        }
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>e.id.toString());
            const n = yield o("WAWebSchemaOrphanPaymentNotification").getTable().bulkGet(t);
            const a = new Map;
            e.forEach((e)=>{
                a.set(e.id.toString(), e);
            });
            n.forEach((e)=>{
                if (e) {
                    const t = a.get(e.msgKey);
                    if (!t) {
                        return;
                    }
                    g(t, {
                        receiver: e.receiver,
                        currency: e.currency,
                        amount1000: e.amount1000,
                        type: e.type,
                        status: e.status,
                        ts: e.ts,
                        msgKey: r("WAWebMsgKey").fromString(e.msgKey)
                    });
                }
            });
        });
        return b.apply(this, arguments);
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaOrphanPaymentNotification").getTable().all();
            const t = new Map;
            const n = [];
            e.forEach((e)=>{
                let e_msgKey = e.msgKey;
                let i = o("WAWebMsgCollection").MsgCollection.get(e_msgKey);
                if (i == null) {
                    const l = o("WAWebLidMigrationUtils").getAlternateMsgKey(r("WAWebMsgKey").fromString(e_msgKey));
                    if (l != null) {
                        e_msgKey = l.toString();
                        i = o("WAWebMsgCollection").MsgCollection.get(l);
                    }
                }
                if (i) {
                    g(i, {
                        receiver: e.receiver,
                        currency: e.currency,
                        amount1000: e.amount1000,
                        type: e.type,
                        status: e.status,
                        ts: e.ts,
                        msgKey: r("WAWebMsgKey").fromString(e_msgKey)
                    });
                } else {
                    t.set(e_msgKey, e);
                    n.push(e_msgKey);
                }
            });
            if (n.length > 0) {
                const a = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(n, function(e) {
                    const n = t.get(e.id.toString());
                    if (n) {
                        e.paymentTxnStatus = o("WAWebPaymentStatusUtils").getPaymentTxnWebStatus(n.status);
                        e.paymentCurrency = n.currency || "";
                        e.paymentAmount1000 = r("nullthrows")(n.amount1000);
                        e.paymentMessageReceiverJid = n.receiver;
                        e.paymentTransactionTimestamp = r("nullthrows")(n.ts);
                    }
                });
                return o("WAWebDBProcessMessage").updateExistingMessages(a);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return {
                id: new (r("WAWebMsgKey"))({
                    remote: e,
                    fromMe: false,
                    id: yield r("WAWebMsgKey").newId()
                }),
                type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.PaymentInviteAccountSetUp,
                from: e,
                to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                recipients: [],
                t,
                templateParams: [
                    e
                ]
            };
        });
        return L.apply(this, arguments);
    }
    function E({ from, stanzaId }) {
        return o("WAWap").wap("ack", {
            class: "notification",
            type: "pay",
            id: o("WAWap").CUSTOM_STRING(stanzaId),
            to: from
        });
    }
    function k(e, t) {
        return o("WAWebMsgCollection").MsgCollection.get(e) ?? (t != null ? o("WAWebMsgCollection").MsgCollection.get(t) : null);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            let n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(e);
            if (n == null && t != null) {
                n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t);
            }
            return n;
        });
        return T.apply(this, arguments);
    }
    l.handlePaymentNotification = c;
    l.processOrphanPaymentNotifications = C;
    l.processAllOrphanPaymentNotifications = v;
    l.getMessageFromCollection = k;
    l.getMessageFromDb = I;
}, 98);