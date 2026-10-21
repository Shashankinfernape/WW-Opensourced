__d("WAWebPostIncomingMessageDropMetric", [
    "WADeprecatedWapParser",
    "WAWebAck",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2WamClassification",
    "WAWebGetMetricE2eDestination",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebIncomingMessageDropWamEvent",
    "WAWebJidToWid",
    "WAWebSessionScopeWamUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumMessageDropReasonType",
    "WAWebWamEnumRevokeType",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT) {
            return e.author;
        }
        return e.chat;
    }
    const s = new (r("WADeprecatedWapParser"))("incomingMsgParserForMetric", function(e) {
        const t = {};
        try {
            t.type = e.attrEnum("type", o("WAWebHandleMsgCommon").STANZA_MSG_TYPES);
        } catch (e) {}
        try {
            t.pollType = t.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll ? e.child("meta").attrEnumOrNullIfUnknown("polltype", o("WAWebHandleMsgCommon").POLL_TYPES) : null;
        } catch (e) {}
        try {
            let n;
            let r;
            t.from = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from"));
            if ((n = t.from) != null && n.isUser()) {
                t.author = t.from;
            } else if ((r = t.from) != null && r.isGroup()) {
                t.author = e.hasAttr("participant") ? o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("participant")) : null;
            }
        } catch (e) {}
        try {
            t.offline = e.attrInt("offline");
        } catch (e) {}
        try {
            t.edit = e.attrInt("edit");
        } catch (e) {}
        try {
            const a = e.attrString("category");
            const i = o("WAWebWamMsgUtils").getWamInvisibleMessageCategoryType(a);
            if (i != null) {
                t.invisibleMessageCategoryType = i;
            }
        } catch (e) {}
        const l = e.maybeChild("enc");
        if (l != null) {
            try {
                t.e2eType = l.attrEnumValues("type", o("WAWebBackendJobs.flow").CiphertextType.members());
            } catch (e) {}
            try {
                t.encMediaType = o("WAWebBackendJobs.flow").EncMediaType.cast(l.maybeAttrString("mediatype"));
            } catch (e) {}
            try {
                t.sessionType = l.maybeAttrString("session_type");
            } catch (e) {
                t.sessionType = null;
            }
            try {
                t.retryCount = l.attrInt("count");
            } catch (e) {}
        }
        try {
            let s;
            t.botType = o("WAWebWamEnumBotType").BOT_TYPE.UNKNOWN;
            if ((s = t.author) != null && s.isBot()) {
                t.botType = o("WAWebWamEnumBotType").BOT_TYPE.METABOT;
            } else {
                const c = e.maybeChild("bot")?.maybeAttrString("biz_bot");
                if (c === "1") {
                    t.botType = o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ;
                } else if (c === "3") {
                    t.botType = o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ;
                }
            }
        } catch (e) {}
        return t;
    });
    function u({ messageDropReason: C, stanza: b }) {
        let v = null;
        try {
            v = s.parse(b).success;
        } catch (e) {}
        const S = new (o("WAWebIncomingMessageDropWamEvent")).IncomingMessageDropWamEvent({
            messageDropReason: C,
            isPq: v?.sessionType != null ? v.sessionType === "pq" : void 0,
            offline: v?.offline != null,
            offlineCount: v?.offline,
            messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
                encMediaType: v?.encMediaType,
                msgType: v?.type,
                msgPollType: v?.pollType
            })
        });
        if (v?.from != null) {
            const R = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(v.from);
            if (R != null) {
                S.e2eDestination = R;
            }
        }
        const L = v?.author;
        if (L != null) {
            const E = o("WAWebWamMsgUtils").getWamE2eSenderType(L);
            if (E != null) {
                S.e2eSenderType = E;
            }
            if (L.isHosted()) {
                S.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
            }
        }
        if (v?.e2eType != null) {
            S.e2eCiphertextType = o("WAWebBackendJobsCommon").getMetricE2eCiphertextType(v.e2eType);
        }
        if (v?.retryCount != null) {
            S.retryCount = v.retryCount;
        }
        if (v?.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE) {
            S.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN;
        } else if (v?.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE) {
            S.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER;
        }
        if (v?.from != null && v?.author != null) {
            if (v?.author?.isBot() === true) {
                if (v?.from?.isBot() === true) {
                    S.agentEngagementType = o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
                } else {
                    S.agentEngagementType = o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
                }
            }
        }
        if (v?.botType != null) {
            S.botType = v?.botType;
        }
        if (v?.invisibleMessageCategoryType != null) {
            S.invisibleMessageCategory = v.invisibleMessageCategoryType;
        }
        S.commit();
    }
    function c(e) {
        u({
            messageDropReason: o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.INVALID_STANZA,
            stanza: e
        });
    }
    function d(e) {
        u({
            messageDropReason: o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.UNKNOWN_MESSAGE_TYPE,
            stanza: e
        });
    }
    function m(e) {
        u({
            messageDropReason: o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.INTERNAL_ERROR,
            stanza: e
        });
    }
    function p(e) {
        u({
            messageDropReason: o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.DB_OPERATION_FAILED,
            stanza: e
        });
    }
    function _(e, t) {
        u({
            messageDropReason: o("WAWebCoexV2WamClassification").getCoexV2ReceiveDropReason(t) ?? o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.INVALID_HOSTED_COMPANION_STANZA,
            stanza: e
        });
    }
    function f({ enc: r, error: a, msgInfo: i, msgMeta: l }, n) {
        const s = new (o("WAWebIncomingMessageDropWamEvent")).IncomingMessageDropWamEvent({
            messageDropReason: n,
            isPq: r.sessionType != null ? r.sessionType === "pq" : void 0,
            e2eCiphertextType: o("WAWebBackendJobsCommon").getMetricE2eCiphertextType(r.e2eType),
            messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
                encMediaType: r.encMediaType,
                msgType: l.type,
                msgPollType: l.pollType
            }),
            retryCount: r.retryCount,
            offline: i.offline != null,
            e2eFailureReason: a?.e2eFailureReason,
            sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScope({
                from: e(i),
                isGroupStatus: l.isGroupStatus,
                isSkdm: l.isSkdm,
                metaSessionScope: l.metaSessionScope
            }))
        });
        const u = e(i);
        const c = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(u);
        if (c != null) {
            s.e2eDestination = c;
        }
        if (u) {
            const d = o("WAWebWamMsgUtils").getWamE2eSenderType(u);
            if (d != null) {
                s.e2eSenderType = d;
            }
            if (u.isHosted()) {
                s.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
            }
        }
        if (i.edit === o("WAWebAck").EDIT_ATTR.ADMIN_REVOKE) {
            s.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN;
        } else if (i.edit === o("WAWebAck").EDIT_ATTR.SENDER_REVOKE) {
            s.revokeType = o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER;
        }
        const m = o("WAWebWamMsgUtils").getWamInvisibleMessageCategoryType(i.category);
        if (m != null) {
            s.invisibleMessageCategory = m;
        }
        if (i.offline != null) {
            const p = parseInt(i.offline, 10);
            if (!Number.isNaN(p)) {
                s.offlineCount = p;
            }
        }
        s.commit();
    }
    function g(e) {
        f(e, o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.RECEIVED_WITH_OLD_COUNTER);
    }
    function h(e) {
        f(e, o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.DUPLICATE_MESSAGE);
    }
    function y(e) {
        f(e, o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.INVALID_PROTOBUF);
    }
    function C(e) {
        f(e, o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.INVALID_STANZA);
    }
    function b(e) {
        f(e, o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE.EXPIRED);
    }
    l.postIncomingMessageDropInvalidStanza = c;
    l.postIncomingMessageDropUnknownMessageType = d;
    l.postIncomingMessageDropInternalError = m;
    l.postIncomingMessageDropDBOperationFailed = p;
    l.postIncomingMessageDropForCoexV2RelayOrHostedCompanion = _;
    l.postIncomingMessageDropOldCounter = g;
    l.postIncomingMessageDropDuplicateMessage = h;
    l.postIncomingMessageDropInvalidProtobuf = y;
    l.postIncomingMessageDropInvalidStanzaFromDecryptedMessageInfo = C;
    l.postIncomingMessageDropExpired = b;
}, 98);