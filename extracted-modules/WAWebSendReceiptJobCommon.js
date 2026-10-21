__d("WAWebSendReceiptJobCommon", [
    "$InternalEnum",
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = Object.freeze({
        INACTIVE: "inactive",
        SENDER: "sender",
        DELIVERY: "delivery",
        READ: "read",
        READ_SELF: "read-self",
        PLAYED: "played",
        PLAYED_SELF: "played-self",
        HISTORY_SYNC_COMPLETION: "hist_sync",
        SERVER_ERROR: "server-error",
        PEER_MSG: "peer_msg"
    });
    const c = n("$InternalEnum")({
        ORPHAN: 0,
        NO_CHECKMARK_UX: 1,
        HID_FAILED_DECRYPT: 2
    });
    function d(e) {
        if (e > 0) {
            return o("WAWap").wap("meta", {
                mode: o("WAWap").INT(e)
            });
        }
        return null;
    }
    const m = 256;
    const p = new (r("WADeprecatedWapParser"))("readReceiptAckParser", function(e) {
        e.assertTag("ack");
        return {
            readReceipts: e.hasAttr("readreceipts") ? e.attrEnum("readreceipts", o("WAWebPrivacySettings").ALL_NONE) : null
        };
    });
    function _(e, groupedReceipt) {
        const n = Array.from(groupedReceipt.values()).flat();
        const r = n[0];
        const a = babelHelpers.arrayLikeToArray(n).slice(1);
        const i = a.length > 0 ? o("WAWap").wap("list", null, a.map((e)=>o("WAWap").wap("item", {
                id: o("WAWap").CUSTOM_STRING(e)
            }))) : null;
        const l = o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(r),
            to: o("WAWebCommsWapMd").JID(e),
            class: "message",
            type: "text"
        }, i);
        return o("WADeprecatedSendIq").deprecatedCastStanza(l);
    }
    function f({ messageIds, participant, recipient, to }) {
        const i = messageIds[0];
        const l = babelHelpers.arrayLikeToArray(messageIds).slice(1);
        const s = l.length > 0 ? o("WAWap").wap("list", null, l.map((e)=>o("WAWap").wap("item", {
                id: o("WAWap").CUSTOM_STRING(e)
            }))) : null;
        const u = o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(i),
            to: o("WAWebCommsWapMd").JID(to),
            recipient: recipient != null ? o("WAWebCommsWapMd").USER_JID(recipient) : o("WAWap").DROP_ATTR,
            participant: participant != null ? o("WAWebCommsWapMd").USER_JID(participant) : o("WAWap").DROP_ATTR,
            class: "message",
            type: "text"
        }, s);
        return o("WADeprecatedSendIq").deprecatedCastStanza(u);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ groupedReceipt, isStatusReceipt, maxStsByAuthor, receiptClass, recipient, sendsGroupAgentDeliveryReceipt, t: t_1, threadId, to, type }) {
            if (to.isNewsletter() && type === u.DELIVERY) {
                return _(to, groupedReceipt);
            }
            const b = type === u.READ || type === u.PLAYED || type === u.READ_SELF || type === u.PLAYED_SELF || type === u.HISTORY_SYNC_COMPLETION;
            yield (s || (s = n("Promise"))).all(Array.from(groupedReceipt.keys(), (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const messageIds = groupedReceipt.get(t);
                    if (!(!messageIds || messageIds.length === 0)) {
                        const v = maxStsByAuthor?.get(t);
                        const S = !to.isBot() && t.isBot();
                        if (type === u.DELIVERY && S && sendsGroupAgentDeliveryReceipt !== true) {
                            let R;
                            let L;
                            let E;
                            if (to.isUser()) {
                                R = t;
                                L = to;
                            } else {
                                R = to;
                                E = t;
                            }
                            f({
                                messageIds,
                                participant: E,
                                recipient: L,
                                to: R
                            });
                            return;
                        }
                        const k = to.isUser() || to.isNewsletter() ? null : t;
                        let I = o("WAWebMaibaWASSMigration").maybeReplaceMaibaAiHubWidWithFbid(o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceDeprecatedBotPnWithFbid(to));
                        let T = recipient;
                        if (T == null && to.isUser() && !to.isBot() && t.isBot()) {
                            I = t;
                            T = to;
                        }
                        const D = type === u.DELIVERY || type === u.SENDER || type === u.PEER_MSG || type === u.HISTORY_SYNC_COMPLETION;
                        const x = D ? I : yield o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(I, type);
                        const $ = [];
                        const P = function*() {
                            const t = messageIds.splice(0, m);
                            let r = null;
                            if (t.length > 1) {
                                r = o("WAWap").wap("list", null, t.slice(1).map((e)=>o("WAWap").wap("item", {
                                        id: o("WAWap").CUSTOM_STRING(e)
                                    })));
                            }
                            let i;
                            let s;
                            if (k != null) {
                                if (k.isPSA()) {
                                    i = o("WAWebCommsWapMd").JID(k);
                                } else if (k.isUser()) {
                                    i = o("WAWebCommsWapMd").DEVICE_JID(k);
                                    if (o("WAWebABProps").getABPropConfigValue("lid_status_non_soaked_client_support_enabled") && x.toString() === o("WAJids").STATUS_JID && k.isLid() && type === u.READ) {
                                        s = o("WAWebLidMigrationUtils").toPn(k);
                                    }
                                }
                            }
                            const c = threadId?.key.id;
                            const d = c != null ? o("WAWap").wap("bot", {
                                client_thread_id: o("WAWap").CUSTOM_STRING(c)
                            }) : null;
                            const f = isStatusReceipt === true || I.toString() === o("WAJids").STATUS_JID ? "status" : null;
                            const y = receiptClass ?? f;
                            const S = o("WAWap").wap("receipt", {
                                to: o("WAWebCommsWapMd").JID(x),
                                type: type === u.DELIVERY ? o("WAWap").DROP_ATTR : type,
                                class: y != null ? o("WAWap").CUSTOM_STRING(y) : o("WAWap").DROP_ATTR,
                                id: o("WAWap").CUSTOM_STRING(t[0]),
                                t: t_1 != null ? o("WAWap").CUSTOM_STRING(t_1) : o("WAWap").DROP_ATTR,
                                participant: i ?? o("WAWap").DROP_ATTR,
                                peer_participant_pn: s ? o("WAWebCommsWapMd").USER_JID(s) : o("WAWap").DROP_ATTR,
                                recipient: T ? o("WAWebCommsWapMd").USER_JID(T) : o("WAWap").DROP_ATTR,
                                sts: v != null ? o("WAWap").CUSTOM_STRING(String(v)) : o("WAWap").DROP_ATTR
                            }, r, d);
                            if (b) {
                                const R = (()=>{
                                    const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                        const n = {
                                            id: t[0],
                                            from: x,
                                            class: "receipt",
                                            type,
                                            participant: k,
                                            recipient: T
                                        };
                                        if (type === u.READ || type === u.READ_SELF) {
                                            const r = yield o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndReturnAck(S, o("WAWebCommsAckParser").toCoreAckTemplate(n));
                                            const a = p.parse(r);
                                            if (a.error) {
                                                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                                    "[messaging] sendAggregateReceipts: Invalid ack from server"
                                                ]))).sendLogs("Invalid-Receipt-Ack");
                                            } else {
                                                const readReceipts = a.success.readReceipts;
                                                if (readReceipts != null) {
                                                    o("WAWebUserPrefsGeneral").setUserPrivacySettings(babelHelpers.extends({}, o("WAWebUserPrefsGeneral").getUserPrivacySettings(), {
                                                        readReceipts
                                                    }));
                                                }
                                            }
                                        } else {
                                            return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndWaitForAck(S, o("WAWebCommsAckParser").toCoreAckTemplate(n));
                                        }
                                    });
                                    return function() {
                                        return r.apply(this, arguments);
                                    };
                                })();
                                $.push(R());
                            } else {
                                $.push(o("WADeprecatedSendIq").deprecatedCastStanza(S));
                            }
                        };
                        while(messageIds.length > 0){
                            yield* P();
                        }
                        return (s || (s = n("Promise"))).all($);
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
        });
        return h.apply(this, arguments);
    }
    l.RECEIPT_TYPE = u;
    l.ReceiptModeBitPosition = c;
    l.genReceiptMetaModeNode = d;
    l.sendBotInvokeResponseAcks = f;
    l.sendAggregateReceipts = g;
}, 98);