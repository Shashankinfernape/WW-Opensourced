__d("WAWebMessageReceiptBatcher", [
    "Promise",
    "WABatcher",
    "WAJids",
    "WALogger",
    "WAPromiseMap",
    "WAWebAck",
    "WAWebApiMessageInfoStore",
    "WAWebBackendApi",
    "WAWebDBBulkGetRootMsgs",
    "WAWebHandleMsgReceiptCommon",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageInfo",
    "WAWebSchemaPeerReadReceipt",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "compactMap"
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
    const h = Object.freeze({
        [(g = o("WAWebAck")).ACK.SENT]: g.ACK_STRING.DELIVERY,
        [g.ACK.RECEIVED]: g.ACK_STRING.DELIVERY,
        [g.ACK.READ]: g.ACK_STRING.READ,
        [g.ACK.PLAYED]: g.ACK_STRING.PLAYED,
        [g.ACK.INACTIVE]: g.ACK_STRING.INACTIVE
    });
    const y = {
        delayMs: 1000
    };
    const C = (()=>{
        function e() {
            const e = this;
            this.$1 = o("WABatcher").createSimpleBatcher(y, function(t) {
                return e.$2(t).then(()=>[]);
            });
            this.$3 = o("WABatcher").createSimpleBatcher(y, function(t) {
                return e.$4(t).then(()=>[]);
            });
        }
        const e_prototype = e.prototype;
        e_prototype.acceptPeerReceipt = function(t) {
            return this.$1.accept(t);
        };
        e_prototype.acceptOtherReceipt = function(t) {
            return this.$3.accept(t);
        };
        e_prototype.runActiveBatches = function() {
            return (f || (f = n("Promise"))).all([
                this.$1.runActiveBatch(),
                this.$3.runActiveBatch()
            ]).then(r("WAWebNoop"));
        };
        e_prototype.$5 = function(t) {
            const e = [];
            for (const n of t){
                const { ack, msgKeys, privacyMode, receiverId } = n;
                if (ack === o("WAWebAck").ACK.RECEIVED && privacyMode != null) {
                    e.push({
                        remote: receiverId,
                        deliveryPrivacyMode: privacyMode,
                        msgKeys: msgKeys.map((e)=>r("WAWebMsgKey").from(e))
                    });
                }
            }
            return e;
        };
        e_prototype.$6 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processPrivacyModeUpdates"
                ])));
                yield o("WAPromiseMap").promiseMap(e, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        yield o("WAWebHandlePrivacyModeUpdateMsgAction").handlePrivacyModeTransition(e.remote, e.deliveryPrivacyMode);
                        yield o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("updateBizPrivacyStatus", {
                            msgIds: e.msgKeys,
                            privacyMode: e.deliveryPrivacyMode
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$7 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const n = this.$8(e);
                const a = t.map((e)=>r("WAWebMsgKey").from(e)).filter((e)=>e.remote.isGroup() || e.remote.isStatus() || e.remote.isBot());
                const i = yield o("WAWebApiMessageInfoStore").getHighestMsgAcks(a);
                for (const [s, u] of i.entries()){
                    n.set(s, u);
                }
                return n;
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$8 = function(t) {
            const e = new Map;
            for (const n of t){
                const { ack, isBotInvoke, isSender, msgKeys } = n;
                for (const s of msgKeys){
                    if (r("WAWebMsgKey").from(s).remote.isUser() && isBotInvoke !== true && isSender !== true) {
                        e.set(s, Math.max(ack, e.get(s) ?? Number.NEGATIVE_INFINITY));
                    }
                }
            }
            return e;
        };
        e_prototype.$9 = function(t) {
            const e = new Map;
            const n = [];
            t.forEach(({ ack, msgKeys, receiverId, ts })=>{
                const u = receiverId.isNewsletter() ? receiverId.toJid() : o("WAWebWidFactory").asUserWidOrThrow(receiverId).toString();
                const c = receiverId.device ?? o("WAJids").DEFAULT_DEVICE_ID;
                msgKeys.forEach((t)=>{
                    const r = h[ack];
                    if (r == null) {
                        if (n.length < 3) {
                            n.push(ack);
                        }
                        return;
                    }
                    const i = `${t},${u}`;
                    const l = e.get(i);
                    if (l) {
                        if (r !== o("WAWebAck").ACK_STRING.INACTIVE) {
                            l[r] = S(l[r], ts);
                        }
                        l.deviceDelivered.add(c);
                    } else {
                        const d = {
                            deviceDelivered: new Set([
                                c
                            ])
                        };
                        d[r] = ts;
                        e.set(i, d);
                    }
                });
            });
            if (n.length > 0) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[unify][batcher]: ",
                    " receipts have unsupported ack types => ",
                    ""
                ])), n.length, n);
            }
            return Array.from(e, function([t, n]) {
                const r = t.split(",");
                const o = r[0];
                const a = r[1];
                return [
                    [
                        o,
                        a
                    ],
                    n
                ];
            });
        };
        e_prototype.$4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processOtherReceipts"
                ])));
                const a = this.$9(e);
                const i = Array.from(new Set(e.flatMap((e)=>e.msgKeys)));
                const l = yield o("WAWebModelStorageUtils").getStorage().lock([
                    "message-info",
                    "message",
                    "chat",
                    "participant"
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const l = yield (f || (f = n("Promise"))).all([
                        o("WAWebSchemaMessageInfo").getMessageInfoTable().bulkGet(a.map(([t, n])=>t)),
                        o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(i)
                    ]);
                    const s = l[0];
                    const u = l[1];
                    const receiptMsgKeyToMsg = new Map(i.map((e, t)=>[
                            e,
                            u[t]
                        ]));
                    const d = r("compactMap")(s, function(e, t) {
                        const n = a[t];
                        const r = n[0];
                        const o = r[0];
                        const receiverUserJid = r[1];
                        const l = n[1];
                        if (!l) {
                            return null;
                        }
                        if (!e) {
                            return {
                                delivery: l.delivery,
                                read: l.read,
                                played: l.played,
                                msgKey: o,
                                receiverUserJid,
                                deviceDelivered: Array.from(l.deviceDelivered),
                                deviceNotDelivered: []
                            };
                        }
                        const l_deviceDelivered = l.deviceDelivered;
                        e.deviceDelivered.forEach((e)=>l_deviceDelivered.add(e));
                        return babelHelpers.extends({}, e, {
                            delivery: S(e.delivery, l.delivery),
                            read: S(e.read, l.read),
                            played: S(e.played, l.played),
                            deviceDelivered: Array.from(l_deviceDelivered),
                            deviceNotDelivered: e.deviceNotDelivered.filter((e)=>!l_deviceDelivered.has(e))
                        });
                    });
                    yield o("WAWebSchemaMessageInfo").getMessageInfoTable().bulkCreateOrReplace(d);
                    const m = yield t.$7(e, i);
                    const p = Array.from(m.entries());
                    const ackUpdates = r("compactMap")(p, function([t, n]) {
                        const o = r("WAWebMsgKey").fromString(t);
                        const o_remote = o.remote;
                        if (o_remote.isUser() || o_remote.isGroup() || o_remote.isStatus()) {
                            const l = receiptMsgKeyToMsg.get(t);
                            if (l == null || l.isScheduledMsg === true) {
                                return;
                            }
                            if (n > (l.ack ?? Number.NEGATIVE_INFINITY)) {
                                return {
                                    id: l.id.toString(),
                                    ack: n
                                };
                            }
                        }
                    });
                    return {
                        ackUpdates,
                        receiptMsgKeyToMsg
                    };
                }));
                yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(l.ackUpdates).catch((e)=>{
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "_processOtherReceipts: db msg ack update failed: ",
                        ""
                    ])), e).sendLogs("process-other-receipts-failed-to-update-db-msg-acks");
                    throw e;
                });
                o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
                    updates: l.ackUpdates.map(({ ack, id })=>({
                            id: r("WAWebMsgKey").from(id),
                            ack
                        }))
                });
                o("WAWebBackendApi").frontendFireAndForget("updateMsgInfo", {
                    updates: e.flatMap(({ ack, msgKeys, receiverId, ts })=>msgKeys.map((e)=>{
                            const n = l.receiptMsgKeyToMsg.get(e);
                            if (n != null) {
                                const s = r("WAWebMsgKey").from(n.id);
                                if (s.fromMe && (s.remote.isUser() || s.remote.isGroup() || s.remote.isStatus())) {
                                    const u = o("WAWebWidFactory").asUserWidOrThrow(receiverId);
                                    if (!o("WAWebUserPrefsMeUser").isMeAccount(u)) {
                                        return {
                                            msgKey: s,
                                            ts,
                                            participant: u,
                                            ack
                                        };
                                    }
                                }
                            }
                        })).filter(Boolean)
                });
                this.$6(this.$5(e)).catch(()=>{
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "_processOtherReceipts: privacy mode update failed"
                    ])));
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        e_prototype.$2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "processPeerReceipts"
                ])));
                const t = e.some((e)=>!e.isOffline);
                if (t) {
                    yield o("WAPromiseMap").promiseMap(e, b);
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "handleOnlinePeerReceipt: processed ",
                        " receipts"
                    ])), e.length);
                    return;
                }
                const n = e.map(({ ack, msgKeys, ts })=>({
                        ts,
                        msgKeys,
                        ack
                    }));
                yield o("WAWebSchemaPeerReadReceipt").getTable().bulkCreate(n);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.msgKeys.map((e)=>r("WAWebMsgKey").from(e));
            if (e.remote.isStatus()) {
                yield o("WAWebHandleMsgReceiptCommon").markStatusesReadFromPeer(t.map(o("WAWebLidStatusMigrationKeyUtils").matKeyConvert), e.ts);
                return;
            }
            if ((e.remote.isUser() || e.remote.isGroup() || e.remote.isNewsletter() || e.remote.isBot()) && e.ack >= o("WAWebAck").ACK.RECEIVED) {
                if (e.ack === o("WAWebAck").ACK.READ) {
                    return o("WAWebHandleMsgReceiptCommon").updateChatPeerRead(e.remote, t, e.ts);
                }
                if (e.ack === o("WAWebAck").ACK.PLAYED) {
                    return o("WAWebBackendApi").frontendSendAndReceive("updateMsgPeerAcks", {
                        msgKeys: t,
                        ack: e.ack,
                        t: e.ts
                    });
                }
            }
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        if (e != null && t != null) {
            return Math.min(e, t);
        }
        const n = e ?? t;
        return n ?? undefined;
    }
    const R = new C;
    l.receiptBatcher = R;
}, 98);