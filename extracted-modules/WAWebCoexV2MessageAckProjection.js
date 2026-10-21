__d("WAWebCoexV2MessageAckProjection", [
    "Promise",
    "WABatcher",
    "WALogger",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBackendApi",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2MessageAckProjectionEligibility",
    "WAWebDBBulkGetRootMsgs",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    const g = 1000;
    const h = new Set;
    const y = o("WABatcher").createSimpleBatcher({
        delayMs: g
    }, (()=>{
        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield F(e);
            G(t);
            return [];
        });
        return function(t) {
            return e.apply(this, arguments);
        };
    })());
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isOffline, msgIds, projectedAck, representedLid }) {
            const i = y.accept({
                msgIds,
                projectedAck,
                representedLid
            });
            if (!isOffline) {
                yield (f || (f = n("Promise"))).all([
                    i,
                    v()
                ]);
                return;
            }
            yield i;
        });
        return b.apply(this, arguments);
    }
    function v() {
        return y.runActiveBatch().then(r("WAWebNoop")).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] message ack projection: failed to flush"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("coexv2-message-ack-projection-flush-failed");
        });
    }
    function S() {
        return (f || (f = n("Promise"))).all([
            v(),
            E()
        ]).then(r("WAWebNoop"));
    }
    function R(e, t, n, r) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            const o = e.filter(W);
            if (o.length !== 0) {
                const a = T(o, t);
                if (r?.deferUntilMessagePersisted === true) {
                    const i = k(a);
                    I(i, n);
                    return;
                }
                yield x((yield a), n);
            }
        });
        return L.apply(this, arguments);
    }
    function E() {
        return (f || (f = n("Promise"))).all(Array.from(h)).then(r("WAWebNoop"));
    }
    function k(e) {
        const t = e.catch((e)=>{
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] message ack reconciliation: deferred projection failed"
            ]))).catching(r("getErrorSafe")(e)).sendLogs("coexv2-message-ack-reconciliation-deferred-failed");
            return null;
        });
        const n = t.then(r("WAWebNoop"));
        h.add(n);
        n.finally(()=>{
            h.delete(n);
        });
        return t;
    }
    function I(e, t) {
        if (t != null) {
            e.then((e)=>{
                if (e != null) {
                    return t.then(()=>z(e)).catch(r("WAWebNoop"));
                }
            });
        }
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield t;
            const o = r("compactMap")((yield (f || (f = n("Promise"))).all(e.map(P))), function(e) {
                return e;
            });
            yield w(o);
            return o;
        });
        return D.apply(this, arguments);
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t != null) {
                yield t;
                yield z(e);
            }
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = M(e);
            if (a == null || !o("WAWebCoexV2MessageAckProjectionEligibility").isCoexV2MessageAckProjectionTarget(a)) {
                return null;
            }
            const i = e.latestEditMsgKey?.id ?? e.id.id;
            try {
                const projectedAck = o("WAWebCoexV2MessageAckProjectionEligibility").getEligibleCoexV2MessageAckProjection({
                    projectedAck: yield o("WAWebApiCoexV2RelayReceiptStore").getCoexV2RelayMessageAck(i, a),
                    representedLid: a
                });
                return {
                    msgKey: e.id,
                    receiptInfo: projectedAck == null ? null : {
                        msgIds: [
                            i
                        ],
                        projectedAck,
                        representedLid: a
                    },
                    representedLid: a
                };
            } catch (error) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] message ack reconciliation: receipt lookup failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-message-ack-reconciliation-lookup-failed");
                return {
                    msgKey: e.id,
                    receiptInfo: null,
                    representedLid: a
                };
            }
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        try {
            return o("WAWebLidMigrationUtils").toUserLid(e.preMatChat ?? e.id.remote);
        } catch (error) {
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] message ack reconciliation: represented LID lookup failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-message-ack-reconciliation-lid-lookup-failed");
            return null;
        }
    }
    function w(e) {
        return A.apply(this, arguments);
    }
    function A() {
        A = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = yield F(r("compactMap")(e, function(e) {
                    return e.receiptInfo;
                }));
                G(t);
            } catch (error) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] message ack reconciliation: projection failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-message-ack-reconciliation-projection-failed");
            }
        });
        return A.apply(this, arguments);
    }
    function F(e) {
        return O.apply(this, arguments);
    }
    function O() {
        O = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = B(e);
            if (t.length === 0) {
                return [];
            }
            return o("WAWebModelStorageUtils").getStorage().lock([
                "message",
                "chat"
            ], (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                    const a = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(t.map((e)=>e.msgKey));
                    const i = new Map;
                    t.forEach((e, t)=>{
                        q(e, a[t], i);
                    });
                    const l = r("compactMap")(Array.from(i.entries()), function([n, r]) {
                        const { ack, msg } = r;
                        if (ack > (msg.ack ?? Number.NEGATIVE_INFINITY)) {
                            return {
                                id: n,
                                ack
                            };
                        }
                        return null;
                    });
                    if (l.length > 0) {
                        yield n.bulkCreateOrMerge(l);
                    }
                    return l.map(({ ack, id })=>({
                            id: r("WAWebMsgKey").from(id),
                            ack
                        }));
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        });
        return O.apply(this, arguments);
    }
    function B(e) {
        const t = [];
        for (const n of e){
            const { msgIds, projectedAck, representedLid } = n;
            const s = o("WAWebCoexV2MessageAckProjectionEligibility").getEligibleCoexV2MessageAckProjection({
                projectedAck,
                representedLid
            });
            if (s != null) {
                for (const u of msgIds){
                    t.push({
                        ack: s,
                        msgId: u,
                        msgKey: new (r("WAWebMsgKey"))({
                            id: u,
                            remote: representedLid,
                            fromMe: true
                        }).toString()
                    });
                }
            }
        }
        return t;
    }
    function W(e) {
        return e.id.fromMe && e.id.remote.isUser() && e.senderWithDevice?.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) === true && e.metaFrom != null && o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom) && e.isScheduledMsg !== true && o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
    }
    function q(e, t, n) {
        try {
            const a = U(e, t);
            if (t == null || a == null) {
                return;
            }
            const i = a.toString();
            const l = n.get(i);
            if (l == null || e.ack > l.ack) {
                n.set(i, {
                    ack: e.ack,
                    msg: t
                });
            }
        } catch (error) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] message ack projection: invalid stored message"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-message-ack-projection-invalid-message");
        }
    }
    function U(e, t) {
        if (t == null) {
            return null;
        }
        const n = r("WAWebMsgKey").fromString(t.id);
        if (!V(t, n)) {
            return null;
        }
        const o = H(t, n);
        if (o === e.msgId) {
            return n;
        }
        return null;
    }
    function V(e, t) {
        return t.fromMe && t.remote.isUser() && e.senderWithDevice != null && o("WAWebWidFactory").createWidFromWidLike(e.senderWithDevice).equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && e.metaFrom != null && o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWidFromWidLike(e.metaFrom)) && e.isScheduledMsg !== true;
    }
    function H(e, t) {
        if (e.latestEditMsgKey == null) {
            return t.id;
        }
        return r("WAWebMsgKey").fromString(e.latestEditMsgKey).id;
    }
    function G(e) {
        if (e.length !== 0) {
            try {
                o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
                    updates: e
                });
            } catch (error) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] message ack projection: frontend publish failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-message-ack-projection-publish-failed");
            }
        }
    }
    function z(e) {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                let t;
                try {
                    t = yield o("WAWebModelStorageUtils").getStorage().lock([
                        "message",
                        "chat"
                    ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        const t = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(e.map((e)=>e.msgKey.toString()));
                        return r("compactMap")(t, function(t, n) {
                            const i = e[n]?.representedLid;
                            if (t == null || i == null) {
                                return null;
                            }
                            const l = o("WAWebCoexV2MessageAckProjectionEligibility").getEligibleCoexV2MessageAckProjection({
                                projectedAck: t.ack,
                                representedLid: i
                            });
                            if (l == null) {
                                return null;
                            }
                            return {
                                id: r("WAWebMsgKey").from(t.id),
                                ack: l
                            };
                        });
                    }));
                } catch (error) {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[coexv2] message ack reconciliation: refresh failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("coexv2-message-ack-reconciliation-refresh-failed");
                    return;
                }
                G(t);
            }
        });
        return j.apply(this, arguments);
    }
    l.projectCoexV2ReadReceiptAck = C;
    l.flushCoexV2MessageAckProjections = v;
    l.flushCoexV2OfflineMessageAckWork = S;
    l.reconcileCoexV2ReceiptAcksAfterMessagePersisted = R;
}, 98);