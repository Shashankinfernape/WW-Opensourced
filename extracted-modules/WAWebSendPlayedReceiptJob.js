__d("WAWebSendPlayedReceiptJob", [
    "WAWap",
    "WAWebAck",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebPnlessStanzaMigration",
    "WAWebPrivacySettings",
    "WAWebSchemaMessage",
    "WAWebSendReceiptJobCommon",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = e.broadcastId || t;
            const r = e.id.id;
            const a = n.isUser() ? null : e.author;
            const i = u(t);
            const l = yield o("WAWebPnlessStanzaMigration").getStanzaToFromChatId(n, i);
            const s = o("WAWap").wap("receipt", {
                to: o("WAWebCommsWapMd").CHAT_JID(l),
                type: i,
                id: o("WAWap").CUSTOM_STRING(r),
                t: o("WAWap").CUSTOM_STRING(Date.now().toString()),
                participant: a ? o("WAWebCommsWapMd").DEVICE_JID(a) : o("WAWap").DROP_ATTR
            });
            yield o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndWaitForAck(s, o("WAWebCommsAckParser").toCoreAckTemplate({
                id: r,
                class: "receipt",
                type: i,
                from: l,
                participant: a
            }));
            return o("WAWebSchemaMessage").getMessageTable().merge(e.id.toString(), {
                ack: o("WAWebAck").ACK.PLAYED
            });
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (e.isGroup()) {
            return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED;
        }
        if (e.isNewsletter()) {
            return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED_SELF;
        }
        const t = o("WAWebUserPrefsGeneral").getUserPrivacySettings().readReceipts === o("WAWebPrivacySettings").ALL_NONE.none;
        if (t) {
            return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED_SELF;
        }
        return o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.PLAYED;
    }
    l.default = e;
}, 98);