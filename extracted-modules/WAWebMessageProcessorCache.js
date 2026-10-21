__d("WAWebMessageProcessorCache", [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebABProps",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBReportingTokenUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGroupDatabaseJob",
    "WAWebHandleMessageTypes",
    "WAWebHandleMsgCommon",
    "WAWebIdbTransactionCounter",
    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
    "WAWebMessageReceiveFlow",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPromiseQueue",
    "WAWebSendOfflineDeliveryReceiptJob",
    "WAWebSignalProtocolStore",
    "WAWebSignalStorageUtils",
    "WAWebSignalStoreApi",
    "WAWebStoreMsgs",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:13546",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    const C = n("cr:13546") ?? {};
    const b = C.handleAddressingModeMismatch;
    function v() {
        return o("WAWebABProps").getABPropConfigValue("web_message_processing_cache_size");
    }
    function S() {
        return R() > 0;
    }
    function R() {
        return o("WAWebABProps").getABPropConfigValue("web_offline_message_processor_timeout_seconds");
    }
    const L = (()=>{
        function e() {
            const e = this;
            this.$1 = [];
            this.$2 = [];
            this.$3 = new (o("WAWebPromiseQueue")).PromiseQueue;
            this.$4 = 0;
            this.$6 = new Map;
            this.$7 = false;
            this.$5 = new (o("WAShiftTimer")).ShiftTimer(function() {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-cache] flushing cache due to timeout"
                ])));
                e.createSnapshot();
            });
        }
        const t = e.prototype;
        t.size = function() {
            return (y || (y = n("Promise"))).resolve(this.$1.length);
        };
        t.checkpointQueueSize = function() {
            return (y || (y = n("Promise"))).resolve(this.$3.size());
        };
        t.checkpointQueueWait = function() {
            return this.$3.wait();
        };
        t.addMessages = function(t, n = false) {
            this.$1.push(...t);
            const r = this.$8();
            if (n) {
                this.$7 = true;
                this.createSnapshot();
                return r;
            }
            this.$7 = false;
            const a = t.map((e)=>{
                if (e.msg != null) {
                    return `msg ${e.msg?.id?.id ?? ""}`;
                }
                return `receipt ${e.receiptInfo?.externalId || e.duplicateMsgReceiptInfo?.externalId || ""}`;
            });
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[message-cache] add len=",
                " nextIdx=",
                ": ",
                ""
            ])), this.$1.length, this.$4, a);
            if (this.$1.length >= v()) {
                this.createSnapshot();
                return r;
            }
            if (S() && !this.$5.isScheduled()) {
                this.$5.onOrBefore(R() * 1000);
            }
            return r;
        };
        t.addAdditionalInfo = function(t, n = false) {
            this.$2.push(t);
            if (n) {
                const e = this.$2;
                this.$2 = [];
                this.$9(e);
            }
        };
        t.handleChangedAddressingMode = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = new Map;
                e.forEach(({ msg: n })=>{
                    if (n != null && n.id.remote.isGroup()) {
                        let r;
                        if (n?.groupAddressingMode === "pn") {
                            r = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
                        } else if (n?.groupAddressingMode === "lid") {
                            r = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid;
                        }
                        if (r != null) {
                            t.set(n.id.remote.toString(), r);
                        }
                    }
                });
                const a = Array.from(t.keys(), o("WAWebWidFactory").createWid);
                const i = yield o("WAWebGetGroupAddressingMode").bulkGetGroupAddressingMode(a);
                const l = [];
                for (const [u, c] of t.entries()){
                    if (i.get(u) !== c) {
                        l.push(o("WAWebWidFactory").createWid(u));
                    }
                }
                if (!this.$7) {
                    yield o("WAWebGroupDatabaseJob").bulkMarkGroupParticipantStaleJob(l);
                }
                yield (y || (y = n("Promise"))).all(l.map((e)=>b?.(e, {
                        localAddressingMode: i.get(e.toString()),
                        serverAddressingMode: r("nullthrows")(t.get(e.toString()), "missing server addressing mode for group"),
                        mismatchOrigin: o("WAWebWamEnumMismatchOriginType").MISMATCH_ORIGIN_TYPE.INCOMING_GROUP_MESSAGE
                    })));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.$8 = function() {
            const e = this;
            const t = this.$4;
            if (!this.$6.has(t)) {
                let o;
                let a = function(t) {};
                this.$6.set(t, {
                    promise: new (y || (y = n("Promise")))(function(e, t) {
                        o = e;
                        a = t;
                    }),
                    markCheckpointDone: function(r) {
                        e.$6.delete(t);
                        if (r != null) {
                            a(r);
                            return;
                        }
                        o();
                    }
                });
            }
            return r("nullthrows")(this.$6.get(t)).promise;
        };
        t.$10 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = [];
                e.forEach(({ msg: t })=>{
                    if (t != null) {
                        n.push(t);
                    }
                });
                const a = o("WAWebIdbTransactionCounter").getIdbTransactionCount();
                const i = r("gkx")("20665") ? o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.DBStoring) : null;
                yield o("WAWebStoreMsgs").storeMsgs(o("WAWebKeepAndApplyBrazilPaymentStateUpdates").withoutRoutedBrazilPaymentStateUpdates(n));
                i?.();
                o("WAWebMessageReceiveFlow").annotateMessageReceiveStorageCommit(t, {
                    batchSize: n.length,
                    transactionCount: o("WAWebIdbTransactionCounter").getIdbTransactionCount() - a
                });
                yield o("WAWebKeepAndApplyBrazilPaymentStateUpdates").keepAndApplyBrazilPaymentStateUpdatesInBatch(n);
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.$9 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = e.filter((e)=>e.type === o("WAWebHandleMessageTypes").MsgAdditionalInfoType.ReportingInfo).map((e)=>e.data);
                o("WAWebDBReportingTokenUtils").handleAddReportingInfos(t);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t.createSnapshot = function() {
            const r = this;
            const a = this.$1;
            const i = this.$2;
            this.$1 = [];
            this.$2 = [];
            if (this.$5.isScheduled()) {
                this.$5.cancel();
            }
            const l = this.$4;
            const s = l + a.length;
            this.$4 = s;
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[message-cache] createSnapshot ",
                "-",
                ": ",
                " messages/receipts"
            ])), l, s, a.length);
            if (a.length !== 0) {
                const u = this.$6.get(l)?.markCheckpointDone ?? function(e) {
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "MessageProcessorCache: missing doneFn"
                    ]))).sendLogs("message-cache-missing-doneFn");
                };
                const C = o("WAWebSignalProtocolStore").getSignalProtocolStore().generateSnapshot();
                const b = k(a);
                this.$3.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(b.all, "storage_commit_start");
                        yield (y || (y = n("Promise"))).all([
                            r.$10(a, b.all),
                            o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb()
                        ]);
                        o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(b.all, "storage_commit_end");
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": messages added to table"
                        ])), l, s);
                        if (C != null) {
                            o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(b.all, "checkpoint_signal_write_start");
                            yield o("WAWebSignalStorageUtils").getStorage().lock([
                                "session-store",
                                "identity-store",
                                "prekey-store",
                                "senderkey-store"
                            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                                yield (y || (y = n("Promise"))).all([
                                    o("WAWebSignalStoreApi").waSignalStore.bulkPutSession(C.sessionUpdate),
                                    o("WAWebSignalStoreApi").waSignalStore.bulkPutIdentityKeyWithRowId(C.identityUpdate),
                                    o("WAWebSignalStoreApi").waSignalStore.bulkPutSenderKey(C.senderKeyUpdate),
                                    o("WAWebSignalStoreApi").waSignalStore.bulkRemovePreKey(C.preKeyRemove),
                                    o("WAWebSignalStoreApi").waSignalStore.bulkRemoveSession(C.sessionRemove),
                                    o("WAWebSignalStoreApi").waSignalStore.bulkRemoveIdentity(C.identityRemove)
                                ]);
                            }));
                            o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(b.all, "checkpoint_signal_write_end");
                            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[message-cache] createSnapshot ",
                                "-",
                                ": signal stores updated"
                            ])), l, s);
                        }
                        const e = yield o("WAWebSendOfflineDeliveryReceiptJob").sendAggregateOfflineReceipts(a);
                        o("WAWebMessageReceiveFlow").endMessageReceiveWithNack(e);
                        o("WAWebMessageReceiveFlow").endMessageReceiveWithAggregatedReceipt(b.aggregatedReceipts.filter((t)=>!e.includes(t)), {
                            batchSize: a.length,
                            signalDirtyCount: I(C)
                        });
                        o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": aggregated receipts sent"
                        ])), l, s);
                        yield r.$9(i);
                        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": additional info processed"
                        ])), l, s);
                    } catch (e) {
                        o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[message-cache] createSnapshot ",
                            "-",
                            ": failed: ",
                            ""
                        ])), l, s, e);
                        o("WAWebMessageReceiveFlow").failMessageReceiveCheckpoint(b.all);
                        u(e);
                        return;
                    }
                    o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[message-cache] before markCheckpointDone"
                    ])));
                    u();
                }));
                this.handleChangedAddressingMode(a);
            }
        };
        return e;
    })();
    const E = new L;
    function k(e) {
        const t = new Set;
        const n = new Set;
        e.forEach(({ duplicateMsgReceiptInfo: a, msg: i, receiptInfo: l })=>{
            const s = l?.externalId ?? a?.externalId;
            if (s != null) {
                n.add(s);
                t.add(s);
            }
            const u = i?.id?.id;
            if (u != null) {
                t.add(u);
            }
        });
        return {
            all: Array.from(t),
            aggregatedReceipts: Array.from(n)
        };
    }
    function I(e) {
        if (e == null) {
            return 0;
        }
        return e.sessionUpdate.length + e.identityUpdate.length + e.senderKeyUpdate.length + e.preKeyRemove.length + e.sessionRemove.length + e.identityRemove.length;
    }
    l.messageProcessorCache = E;
}, 98);