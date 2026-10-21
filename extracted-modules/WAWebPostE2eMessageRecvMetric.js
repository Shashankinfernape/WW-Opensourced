__d("WAWebPostE2eMessageRecvMetric", [
    "WAWebBackendApi",
    "WAWebBackendJobsCommon",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2WamClassification",
    "WAWebE2eMessageRecvWamEvent",
    "WAWebGetMetricE2eDestination",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebHandleMsgCommon",
    "WAWebSessionScopeWamUtils",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ enc, error, from, msgBotInfo, msgInfo, msgMeta }) {
            const s = msgMeta.type === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction;
            const msgInfo_chat = msgInfo.chat;
            const c = new (o("WAWebE2eMessageRecvWamEvent")).E2eMessageRecvWamEvent({
                e2eCiphertextType: o("WAWebBackendJobsCommon").getMetricE2eCiphertextType(enc.e2eType),
                e2eCiphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
                e2eFailureReason: error?.e2eFailureReason,
                e2eSuccessful: false,
                messageMediaType: o("WAWebBackendJobsCommon").getMetricMediaType({
                    encMediaType: enc.encMediaType,
                    msgType: msgMeta.type,
                    msgPollType: msgMeta.pollType
                }),
                retryCount: enc.retryCount,
                editType: o("WAWebBackendJobsCommon").getMetricEditType(msgInfo.edit),
                isPq: enc.sessionType === "pq" ? true : undefined,
                botType: o("WAWebWamMsgUtils").getWamBotType({
                    chatId: msgInfo_chat,
                    bizBotType: msgBotInfo?.bizBotType
                }),
                sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(o("WAWebSessionScopeWamUtils").getIncomingSkdmSessionScope({
                    from,
                    isGroupStatus: msgMeta.isGroupStatus,
                    isSkdm: msgMeta.isSkdm,
                    metaSessionScope: msgMeta.metaSessionScope
                }))
            });
            const d = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(from);
            if (d != null) {
                c.e2eDestination = d;
            }
            const m = o("WAWebCoexV2WamClassification").getRecvWamE2eClassification(msgInfo.author, from, msgInfo.metaFrom);
            const { e2eSenderType, encryptionType } = m;
            if (e2eSenderType != null) {
                c.e2eSenderType = e2eSenderType;
            }
            if (encryptionType != null) {
                c.encryptionType = encryptionType;
            }
            if (msgInfo.addressingMode != null) {
                c.serverAddressingMode = o("WAWebWamAddressingModeUtils").getWamAddressingModeFromString(msgInfo.addressingMode);
            }
            if (msgInfo_chat.isGroup()) {
                const f = yield o("WAWebBackendApi").frontendSendAndReceive("getGroupMetadata", {
                    groupWid: msgInfo_chat
                });
                if (f != null) {
                    c.isLid = o("WAWebGroupMetadataGetters").getIsCag(f) && s || !!f.isLidAddressingMode;
                    const g = o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupMetadataGetters").getGroupType(f));
                    c.typeOfGroup = g;
                    const h = o("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(f);
                    if (h != null) {
                        c.localAddressingMode = h;
                    }
                }
            } else {
                if (msgInfo_chat.isBroadcast()) {
                    c.isLid = msgInfo.author.isLid();
                } else {
                    c.isLid = msgInfo_chat.isLid();
                }
            }
            if (msgInfo.author.isBot() && !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(msgInfo.author, msgInfo.metaFrom)) {
                if (msgInfo.chat.isBot()) {
                    c.agentEngagementType = o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
                } else {
                    c.agentEngagementType = o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
                }
            }
            return c;
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield e(t);
            n.e2eSuccessful = true;
            n.weight = 1000;
            n.commit();
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield e(t);
            n.e2eSuccessful = false;
            n.weight = 1;
            n.commit();
        });
        return m.apply(this, arguments);
    }
    l.postSuccessE2eMessageRecvMetric = u;
    l.postFailureE2eMessageRecvMetric = d;
}, 98);