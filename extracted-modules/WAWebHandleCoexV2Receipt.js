__d("WAWebHandleCoexV2Receipt", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2MessageAckProjection",
    "WAWebCoexV2MessageAckProjectionEligibility",
    "WAWebLidMigrationUtils",
    "WAWebOfflineHandler",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        if (!e.from.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) || !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() && !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()) {
            return null;
        }
        return m(e);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ack: a, ackString: i, externalIds: l, offline: d, participant: m, recipient: p, ts: g }) {
            if (d != null) {
                o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
            }
            const h = d != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
            if (p == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] receipt: missing recipient"
                ]))).sendLogs("coexv2-relay-receipt-missing-recipient");
                return;
            }
            try {
                const y = f(i, m, p);
                if (y == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] receipt: unresolved represented LID for type ",
                        ""
                    ])), String(i)).sendLogs("coexv2-relay-receipt-unresolved-lid");
                    return;
                }
                const C = o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() ? o("WAWebCoexV2MessageAckProjectionEligibility").getEligibleCoexV2MessageAckProjection({
                    projectedAck: _(a, i),
                    representedLid: y
                }) : null;
                yield (c || (c = n("Promise"))).all(l.map((e)=>o("WAWebApiCoexV2RelayReceiptStore").addOrUpdateCoexV2RelayReceipt({
                        ack: a,
                        msgId: e,
                        projectedAck: C,
                        representedLid: y,
                        ts: g
                    })));
                if (C == null) {
                    return;
                }
                yield o("WAWebCoexV2MessageAckProjection").projectCoexV2ReadReceiptAck({
                    isOffline: h,
                    msgIds: l,
                    projectedAck: C,
                    representedLid: y
                });
            } catch (e) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] receipt: failed to process for type ",
                    ""
                ])), String(i)).catching(r("getErrorSafe")(e)).sendLogs("coexv2-relay-receipt-process-failed");
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        if (t !== o("WAWebAck").ACK_STRING.READ || e !== o("WAWebAck").ACK.READ) {
            return null;
        }
        if (o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS)?.readReceipts === "none") {
            return o("WAWebAck").ACK.RECEIVED;
        }
        return o("WAWebAck").ACK.READ;
    }
    function f(e, t, n) {
        if (e === o("WAWebAck").ACK_STRING.SENDER || e === o("WAWebAck").ACK_STRING.READ_SELF || e === o("WAWebAck").ACK_STRING.PLAYED_SELF) {
            return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        }
        if (e === o("WAWebAck").ACK_STRING.READ || e === o("WAWebAck").ACK_STRING.PLAYED) {
            if (t != null) {
                return o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").asUserWidOrThrow(t));
            }
            return null;
        }
        if (e === null || e === o("WAWebAck").ACK_STRING.DELIVERY) {
            return o("WAWebLidMigrationUtils").toUserLid(o("WAWebWidFactory").asUserWidOrThrow(n));
        }
        return null;
    }
    l.maybeHandleCoexV2Receipt = d;
}, 98);