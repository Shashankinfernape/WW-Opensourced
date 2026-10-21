__d("WAWebApiMessageInfoStore", [
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBotUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageInfo",
    "WAWebSchemaParticipant",
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
    const m = [
        o("WAWebAck").ACK_STRING.PLAYED,
        o("WAWebAck").ACK_STRING.READ,
        o("WAWebAck").ACK_STRING.DELIVERY
    ];
    const p = Object.freeze({
        ELIGIBLE: "ELGIBLE",
        INELIGIBLE_RECORD_MISSING: "INELIGIBLE_RECORD_MISSING",
        INELIGIBLE_ALREADY_DELIVERED: "INELIGIBLE_ALREADY_DELIVERED",
        INELIGIBLE_NOT_MD: "INELIGIBLE_NOT_MD",
        INELIGIBLE_CHANGED_IDENTITY: "INELIGIBLE_CHANGED_IDENTITY"
    });
    function _(e) {
        const t = new Map;
        e.forEach(({ msgKey, receiverId })=>{
            const receiverUserJid = o("WAWebWidFactory").asUserWidOrThrow(receiverId).toString();
            const l = msgKey.toString();
            const s = `${l},${receiverUserJid}`;
            const u = receiverId.device ?? o("WAJids").DEFAULT_DEVICE_ID;
            const c = t.get(s);
            if (c) {
                c.deviceNotDelivered.push(u);
            } else {
                t.set(s, {
                    msgKey: l,
                    receiverUserJid,
                    deviceDelivered: [],
                    deviceNotDelivered: [
                        u
                    ]
                });
            }
        });
        return o("WAWebModelStorageUtils").getStorage().lock([
            "message-info"
        ], (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                const r = Array.from(t.values()).map((e)=>[
                        e.msgKey,
                        e.receiverUserJid
                    ]);
                const a = yield n.anyOf([
                    "msgKey",
                    "receiverUserJid"
                ], r);
                a.forEach((e)=>{
                    const n = `${e.msgKey},${e.receiverUserJid}`;
                    const r = t.get(n);
                    if (r) {
                        t.set(n, babelHelpers.extends({}, e, {
                            deviceNotDelivered: [].concat(e.deviceNotDelivered, r.deviceNotDelivered)
                        }));
                    }
                });
                return o("WAWebSchemaMessageInfo").getMessageInfoTable().bulkCreateOrReplace(Array.from(t.values()));
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ identityRowId, messageRowId, msgKey, receiver }) {
            const l = o("WAWebWidFactory").asUserWidOrThrow(receiver).toString();
            const m = receiver.device || 0;
            let _ = yield o("WAWebSchemaMessageInfo").getMessageInfoTable().get([
                msgKey.toString(),
                l
            ]);
            if (!_) {
                const f = o("WAWebLidMigrationUtils").getAlternateMsgKey(msgKey);
                if (f != null) {
                    _ = yield o("WAWebSchemaMessageInfo").getMessageInfoTable().get([
                        f.toString(),
                        l
                    ]);
                }
            }
            const hasAdditionalRetryTargets = _?.hasAdditionalRetryTargets === true;
            if (_) {
                if (_.deviceNotDelivered.includes(m)) {
                    if (identityRowId != null && messageRowId >= identityRowId) {
                        return {
                            hasAdditionalRetryTargets,
                            retryEligibility: p.ELIGIBLE
                        };
                    }
                    if (receiver.device != null && receiver.device !== o("WAJids").DEFAULT_DEVICE_ID) {
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "MessageInfoStore: ",
                            ", ",
                            ":",
                            ": companion identity changed"
                        ])), msgKey.toString(), l, m);
                        return {
                            hasAdditionalRetryTargets,
                            retryEligibility: p.INELIGIBLE_CHANGED_IDENTITY
                        };
                    }
                    if (_.delivery != null) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "MessageInfoStore: ",
                            ", ",
                            ":",
                            ": primary id changed post-delivery"
                        ])), msgKey.toString(), l, m);
                        return {
                            hasAdditionalRetryTargets,
                            retryEligibility: p.INELIGIBLE_CHANGED_IDENTITY
                        };
                    }
                    return {
                        hasAdditionalRetryTargets,
                        retryEligibility: p.ELIGIBLE
                    };
                }
            } else {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageInfoStore: missing record for ",
                    ", ",
                    ""
                ])), msgKey.toString(), l);
                return {
                    hasAdditionalRetryTargets,
                    retryEligibility: p.INELIGIBLE_RECORD_MISSING
                };
            }
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "MessageInfoStore: ",
                ", ",
                ":",
                " has been delivered"
            ])), msgKey.toString(), l, m);
            return {
                hasAdditionalRetryTargets,
                retryEligibility: p.INELIGIBLE_ALREADY_DELIVERED
            };
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (yield f(e)).retryEligibility;
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield v([
                e
            ]);
            const n = t.get(e.toString());
            if (!n) {
                throw r("err")(`No message info found for ${e.toString()}`);
            }
            return n;
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e.map((e)=>e.toString()));
            const n = new Map;
            const a = yield T(e);
            const i = new Map;
            for(let l = 0; l < e.length; l++){
                const c = e[l].toString();
                const d = t[l]?.latestEditMsgKey ?? c;
                i.set(d, c);
                const m = {
                    messageInfoRecords: [],
                    ackReceiver: t[l] ? t[l].count : null,
                    groupParticipantJids: a.get(e[l].remote.toString())
                };
                n.set(d, m);
                if (e[l].remote.isUser() || e[l].remote.isStatus()) {
                    const _ = o("WAWebLidMigrationUtils").getAlternateMsgKey(r("WAWebMsgKey").from(d))?.toString();
                    if (_ != null) {
                        i.set(_, c);
                        n.set(_, m);
                    }
                }
            }
            const f = yield o("WAWebSchemaMessageInfo").getMessageInfoTable().anyOf([
                "msgKey"
            ], Array.from(n.keys()));
            f.forEach((e)=>{
                n.get(e.msgKey)?.messageInfoRecords.push(e);
            });
            const g = R(n);
            const h = new Map;
            for (const [C, b] of g){
                {
                    const v = i.get(C);
                    if (v != null) {
                        h.set(v, b);
                    }
                }
            }
            return h;
        });
        return S.apply(this, arguments);
    }
    function R(t) {
        const n = new Map;
        const r = [];
        for (const [i, l] of t.entries()){
            if (r.length < 3) {
                r.push(i);
            }
            n.set(i, L(i, l));
        }
        if (n.size > 0) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryMsgInfo: processed ",
                " messages, sample keys: ",
                ""
            ])), n.size, r);
        }
        return n;
    }
    function L(e, { ackReceiver, groupParticipantJids, messageInfoRecords }) {
        const isGroupMessage = r("WAWebWid").isGroup(r("WAWebMsgKey").fromString(e).remote);
        const messageInfo = {
            delivery: [],
            deliveryRemaining: 0,
            played: [],
            playedRemaining: 0,
            read: [],
            readRemaining: 0
        };
        const u = [];
        messageInfoRecords.forEach((messageInfoRecord)=>{
            const receiverUserWid = o("WAWebWidFactory").createWid(messageInfoRecord.receiverUserJid);
            if (!o("WAWebUserPrefsMeUser").isMeAccount(receiverUserWid)) {
                x(messageInfoRecord);
                E({
                    isGroupMessage,
                    messageInfo,
                    messageInfoRecord,
                    receiverUserWid
                });
                if (messageInfoRecord.delivery != null && messageInfoRecord.deliveryPrivacyMode != null) {
                    messageInfo.deliveryPrivacyMode = messageInfoRecord.deliveryPrivacyMode;
                }
                u.push(receiverUserWid);
            }
        });
        const length = u.filter((e)=>!isGroupMessage || !e.isBot()).length;
        const humanTotal = ackReceiver != null && ackReceiver !== 0 ? ackReceiver : I(length, groupParticipantJids);
        const m = isGroupMessage ? k({
            agentReceiverWids: u.filter((e)=>e.isBot()),
            groupParticipantJids,
            humanTotal,
            isSendingDevice: ackReceiver != null
        }) : [];
        const p = new Set(m.map(String));
        const _ = (t)=>t.filter(({ id })=>!isGroupMessage || !id.isBot() || p.has(String(id))).length;
        messageInfo.playedRemaining = humanTotal + m.length - _(messageInfo.played);
        messageInfo.readRemaining = messageInfo.playedRemaining - _(messageInfo.read);
        messageInfo.deliveryRemaining = messageInfo.readRemaining - _(messageInfo.delivery);
        if (m.length > 0) {
            messageInfo.countedAgents = m;
        }
        return messageInfo;
    }
    function E({ isGroupMessage, messageInfo, messageInfoRecord, receiverUserWid }) {
        for (const a of m){
            const i = messageInfoRecord[a];
            if (i != null && (messageInfo[a].push({
                id: receiverUserWid,
                t: i
            }), isGroupMessage)) {
                return;
            }
        }
    }
    function k({ agentReceiverWids, groupParticipantJids, humanTotal, isSendingDevice }) {
        const i = new Map;
        const l = function(t) {
            i.set(String(t), t);
        };
        if (isSendingDevice) {
            agentReceiverWids.forEach(l);
            return Array.from(i.values());
        }
        const s = (groupParticipantJids ?? []).filter((e)=>e.endsWith("@bot")).map((e)=>o("WAWebWidFactory").createUserWidOrThrow(e));
        s.filter(o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid).forEach(l);
        if (i.size === 0 && humanTotal === 0) {
            s.forEach(l);
        }
        return Array.from(i.values());
    }
    function I(e, groupParticipantJids) {
        if (e > 0 || groupParticipantJids == null) {
            return e;
        }
        return groupParticipantJids.filter((e)=>!e.endsWith("@bot") && !o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").createWid(e))).length;
    }
    function T(e) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(new Set(e.filter((e)=>e.remote.isGroup()).map((e)=>e.remote.toString())));
            const n = new Map;
            if (t.length === 0) {
                return n;
            }
            const r = yield o("WAWebSchemaParticipant").getParticipantTable().bulkGet(t);
            r.forEach((e, r)=>{
                if (e != null) {
                    n.set(t[r], e.participants);
                }
            });
            return n;
        });
        return D.apply(this, arguments);
    }
    function x(messageInfoRecord) {
        const e_read = messageInfoRecord.read;
        if (e_read != null && (messageInfoRecord.delivery == null || messageInfoRecord.delivery > e_read)) {
            messageInfoRecord.delivery = e_read;
        }
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const n = yield v(e);
            for (const r of e){
                const a = n.get(r.toString());
                if (a != null) {
                    let i;
                    if (a.playedRemaining === 0 && a.played.length > 0) {
                        i = o("WAWebAck").ACK.PLAYED;
                    } else if (a.readRemaining === 0 && a.read.length > 0) {
                        i = o("WAWebAck").ACK.READ;
                    } else if (a.deliveryRemaining === 0 && a.delivery.length > 0) {
                        i = o("WAWebAck").ACK.RECEIVED;
                    }
                    if (i != null) {
                        t.set(r.toString(), i);
                    }
                }
            }
            return t;
        });
        return P.apply(this, arguments);
    }
    l.RetryEligibilityResult = p;
    l.createOrMergeReceiptRecords = _;
    l.getRetryEligibilityWithMetadata = f;
    l.isRetryEligible = h;
    l.queryMsgInfo = C;
    l.queryMsgInfos = v;
    l.getHighestMsgAcks = $;
}, 98);