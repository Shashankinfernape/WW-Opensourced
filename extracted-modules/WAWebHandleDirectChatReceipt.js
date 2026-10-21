__d("WAWebHandleDirectChatReceipt", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgReceiptCommon",
    "WAWebHandleMsgReceiptUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ackString: a, biz: i, externalIds: l, from: m, offline: p, recipient: _, ts: f, ack: g }) {
            const h = a === o("WAWebAck").ACK_STRING.SENDER;
            const y = !h && o("WAWebUserPrefsMeUser").isMeAccount(m);
            let C;
            if (y || h) {
                if (!_) {
                    if (!o("WAWebUserPrefsMeUser").isMeAccount(m)) {
                        throw r("err")("handleChatSimpleReceipt: invalid sender/peer receipt without recipient");
                    }
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleChatSimpleReceipt] skip self receipt: no recipient"
                    ]))).sendLogs("handleChatSimpleReceipt: skip self receipt without recipient", {
                        sampling: 0.01
                    });
                    return;
                }
                C = _;
            } else {
                C = o("WAWebWidFactory").asUserWidOrThrow(m);
                const v = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS)?.readReceipts === "none";
                if (v && (g === o("WAWebAck").ACK.READ || g === o("WAWebAck").ACK.PLAYED)) {
                    g = o("WAWebAck").ACK.RECEIVED;
                }
            }
            const S = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidThread(C);
            if (S != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleChatSimpleReceipt: forwarding ",
                    " to ",
                    ""
                ])), C.toLogString(), S.toLogString());
                C = o("WAWebWidFactory").asUserWidOrThrow(S);
            }
            const R = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(C);
            if (R != null) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BIZAI] handleChatSimpleReceipt: forwarding ",
                    " to ",
                    ""
                ])), C.toLogString(), R.toLogString());
                C = o("WAWebWidFactory").asUserWidOrThrow(R);
            }
            let L;
            if (C != null && r("WAWebWid").isWid(C) && C === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID)) {
                L = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID);
            }
            const E = l.map((e)=>new (r("WAWebMsgKey"))({
                    id: e,
                    remote: C,
                    fromMe: !y,
                    participant: L
                }));
            if (y && g === o("WAWebAck").ACK.PLAYED) {
                o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(E).catch((e)=>{
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleChatSimpleReceipt] handleViewOnceOpenedIfNecessary failed: ",
                        ""
                    ])), String(e));
                });
            }
            const k = E.map((e)=>e.toString());
            if (p != null) {
                o("WAWebOfflineHandler").OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
            }
            const I = p != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
            let T = (d || (d = n("Promise"))).resolve();
            if (y) {
                if (_ != null && o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) && l.length > 0) {
                    T = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptPeerReceipt({
                        ack: g,
                        ts: f,
                        msgKeys: k,
                        isOffline: I,
                        remote: C
                    });
                }
            } else {
                T = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
                    ack: g,
                    ts: f,
                    receiverId: m,
                    msgKeys: k,
                    privacyMode: i,
                    isSender: h
                });
            }
            if (!I) {
                yield (d || (d = n("Promise"))).all([
                    T,
                    o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches()
                ]);
            }
            return T;
        });
        return p.apply(this, arguments);
    }
    l.handleChatSimpleReceipt = m;
}, 98);