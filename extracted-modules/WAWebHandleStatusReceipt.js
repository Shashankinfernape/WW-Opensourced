__d("WAWebHandleStatusReceipt", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBatchedStatusIdUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebSetUsernameJob",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const { ack: i, ackString: l, externalIds: c, offline: d, participant: p, recipient: _, ts: f } = t;
            const g = c[0];
            if (g != null) {
                const h = o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(g);
                if (!p) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "error: got status ack without participant"
                    ]))).sendLogs("handleStatusSimpleReceipt: failed");
                    return;
                }
                const y = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                const C = o("WAWebWidFactory").asUserWidOrThrow(p);
                const b = o("WAWebUserPrefsMeUser").isMeAccount(C);
                const v = t.participantPn;
                if (v != null && p.isLid()) {
                    const S = o("WAWebWidFactory").asUserLidOrThrow(p);
                    const R = o("WAWebWidFactory").asUserWidOrThrow(v);
                    o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                        mappings: [
                            {
                                lid: S,
                                pn: R
                            }
                        ],
                        flushImmediately: true,
                        learningSource: "status-receipt"
                    });
                }
                const L = t.participantUsername;
                if (L != null && p.isLid()) {
                    const E = o("WAWebUsernameTypes").asMaybeUsername(L);
                    if (E != null) {
                        const k = [
                            {
                                userId: C,
                                username: E
                            }
                        ];
                        n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                            try {
                                const e = yield o("WAWebSetUsernameJob").setUsernamesJob(k);
                                yield o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(k, e, "handleStatusSimpleReceipt");
                            } catch (e) {
                                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "handleStatusSimpleReceipt: setUsernamesJob failed ",
                                    ""
                                ])), e instanceof Error ? e.message : String(e)).sendLogs("handleStatusSimpleReceipt-set-usernames-failed");
                            }
                        })();
                    }
                }
                const I = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS)?.readReceipts === "none";
                if (!(!b && (I || l !== o("WAWebAck").ACK_STRING.READ))) {
                    const T = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
                    const D = _ ?? y;
                    const x = new (r("WAWebMsgKey"))({
                        id: h,
                        remote: T,
                        fromMe: m({
                            isPeerReceipt: b,
                            ack: i,
                            statusAuthor: D
                        }),
                        participant: D
                    });
                    const $ = [
                        x.toString()
                    ];
                    const P = d != null && !o("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete();
                    let N = (u || (u = n("Promise"))).resolve();
                    if (b) {
                        N = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptPeerReceipt({
                            ts: f,
                            msgKeys: $,
                            ack: i,
                            isOffline: P,
                            remote: T
                        });
                    } else {
                        N = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
                            ack: i,
                            ts: f,
                            receiverId: C,
                            msgKeys: $
                        });
                    }
                    if (!P) {
                        yield (u || (u = n("Promise"))).all([
                            N,
                            o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches()
                        ]);
                    }
                    return N;
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m({ ack: t, isPeerReceipt: n, statusAuthor: r }) {
        if (!n) {
            return true;
        }
        const a = t === o("WAWebAck").ACK.READ;
        const i = o("WAWebUserPrefsMeUser").isMeAccount(r);
        if (!a || !i) {
            return false;
        }
        return o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled();
    }
    l.handleStatusSimpleReceipt = c;
}, 98);