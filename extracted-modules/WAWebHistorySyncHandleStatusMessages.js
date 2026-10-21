__d("WAWebHistorySyncHandleStatusMessages", [
    "Promise",
    "WAAckLevel",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendJobs.flow",
    "WAWebDBReportingTokenUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageReceiptBatcher",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebReportingTokenConstants",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
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
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chunkDownloadFinishTimestamp, chunkInfo, historySyncDataAppliedMetric, historySyncDownloadMetric, proto }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing status"
            ])));
            historySyncDownloadMetric.mdBootstrapMessagesCount = proto.statusV3Messages.length;
            o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp,
                historySyncDownloadMetric,
                isSuccess: true,
                startTs: chunkInfo.historySyncStepStartedTs
            });
            proto.statusV3Messages.sort(({ messageTimestamp }, t)=>{
                const t_messageTimestamp = t.messageTimestamp;
                return o("WATimeUtils").castToUnixTime(parseInt(messageTimestamp, 10)) - o("WATimeUtils").castToUnixTime(parseInt(t_messageTimestamp, 10));
            });
            const _ = [];
            yield (d || (d = n("Promise"))).all(proto.statusV3Messages.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    let a = null;
                    let i = [];
                    if (e.key.fromMe === true) {
                        a = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                        i = e.userReceipt.filter((e)=>e.readTimestamp != null && e.readTimestamp !== 0);
                    } else {
                        const l = e.participant;
                        if (l == null) {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] skipping status without participant"
                            ])));
                            return (d || (d = n("Promise"))).resolve();
                        }
                        a = o("WAWebWidFactory").createWid(l);
                    }
                    const info = {
                        type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS,
                        externalId: r("nullthrows")(e.key.id, "HistorySync:handleStatusMessages: missing key.id"),
                        ts: o("WATimeUtils").castToUnixTime(parseInt(e.messageTimestamp, 10)),
                        edit: -1,
                        isHsm: false,
                        count: null,
                        chat: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
                        author: a,
                        pushname: null,
                        isDirect: false
                    };
                    if (e.message == null) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[history sync] missing message"
                        ]))).sendLogs("history-sync-missing-status-msg");
                        return (d || (d = n("Promise"))).resolve();
                    }
                    const Skmsg = o("WAWebBackendJobs.flow").CiphertextType.Skmsg;
                    const p = yield o("WAWebMsgProcessingApiUtils").parseMessage({
                        info,
                        ciphertextType: Skmsg,
                        msgProtobuf: r("nullthrows")(e.message, "HistorySync:handleStatusMessages: missing message"),
                        hsmInfo: null
                    });
                    const f = p.renderableMsgs && p.renderableMsgs;
                    if (!f || f.length !== 1) {
                        return (d || (d = n("Promise"))).resolve();
                    }
                    const g = f[0].id;
                    const author = f[0].author;
                    let y = babelHelpers.extends({}, f[0], {
                        author: author && o("WAWebLidStatusMigrationUtils").matWidConvert(author),
                        id: new (r("WAWebMsgKey"))({
                            fromMe: g.fromMe,
                            remote: g.remote,
                            id: g.id,
                            participant: g.participant == null ? undefined : o("WAWebLidStatusMigrationUtils").matWidConvert(g.participant)
                        })
                    });
                    if (e.participant === "0@s.whatsapp.net") {
                        return (d || (d = n("Promise"))).resolve();
                    }
                    const C = e.ignore === true;
                    if (C) {
                        y = babelHelpers.extends({}, y, {
                            invis: true,
                            ack: o("WAAckLevel").ACK.READ
                        });
                    }
                    yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                        chatId: y.id.remote,
                        newMsg: y,
                        handleSingleMsgOrigin: "historyStatusMessages"
                    });
                    i.forEach((e)=>{
                        const ts = o("WALongInt").numberOrThrowIfTooLarge(e.readTimestamp ?? 0);
                        const r = o("WAWebWidFactory").createWid(e.userJid);
                        o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
                            ts,
                            ack: o("WAAckLevel").ACK.READ,
                            receiverId: r,
                            msgKeys: [
                                y.id.toString()
                            ]
                        });
                    });
                    if (o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() && e.reportingTokenInfo?.reportingTag != null) {
                        y = babelHelpers.extends({}, y, {
                            reportingTokenInfo: {
                                reportingTag: new Uint8Array(e.reportingTokenInfo?.reportingTag),
                                version: o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.HISTORY_SYNC
                            }
                        });
                    }
                    _.push(y);
                    return true;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()));
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(chunkInfo.msgKey, chunkInfo.syncType, chunkInfo.chunkOrder);
            o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric,
                startTs: chunkInfo.historySyncStepStartedTs,
                isSuccess: true
            });
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] storing Status complete, ",
                ""
            ])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(chunkInfo, proto.statusV3Messages.length));
            o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(_);
        });
        return p.apply(this, arguments);
    }
    l.handleStatusMessages = m;
}, 98);