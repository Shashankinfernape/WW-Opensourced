__d("WAWebPostE2eMessageSendMetric", [
    "WAWebBackendJobsCommon",
    "WAWebCoexV2BotWid",
    "WAWebE2eMessageSendWamEvent",
    "WAWebGetMetricE2eDestination",
    "WAWebSessionScopeWamUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamMsgUtils"
], function(t, n, r, o, a, i, l) {
    function e({ to, retryCount, type, isPq, msg, editType = o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED, sessionScope, coexV2SelfHosted }) {
        const p = new (o("WAWebE2eMessageSendWamEvent")).E2eMessageSendWamEvent({
            e2eCiphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
            isLid: to.isLid(),
            retryCount,
            editType,
            isPq,
            botType: o("WAWebWamMsgUtils").getWamBotType({
                chatId: to,
                bizBotType: msg?.bizBotType
            }),
            sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(sessionScope)
        });
        const _ = o("WAWebGetMetricE2eDestination").getMetricE2eDestination(to);
        if (_ != null) {
            p.e2eDestination = _;
        }
        const f = u(to, coexV2SelfHosted);
        if (f != null) {
            p.e2eReceiverDeviceType = f;
        }
        const g = s(to, coexV2SelfHosted);
        if (g != null) {
            p.encryptionType = g;
        }
        if (type != null) {
            p.e2eCiphertextType = o("WAWebBackendJobsCommon").getMetricE2eCiphertextType(type);
        }
        if (msg) {
            p.messageMediaType = o("WAWebWamMsgUtils").getWamMediaType(msg);
            if (to.isBot()) {
                if (msg.id.remote.isBot()) {
                    p.agentEngagementType = o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
                } else {
                    p.agentEngagementType = o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE.INVOKED;
                }
            }
        }
        return p;
    }
    function s(e, coexV2SelfHosted) {
        if (e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
            if (coexV2SelfHosted === true) {
                return o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.SELF_COEX_V2;
            }
            return o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX_V2;
        }
        if (e.isHosted()) {
            return o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
        }
    }
    function u(e, coexV2SelfHosted) {
        if (e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
            if (coexV2SelfHosted === true) {
                return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_COEX_V2;
            }
            return o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_COEX_V2;
        }
        return o("WAWebWamMsgUtils").getWamE2eSenderType(e);
    }
    function c(t) {
        const n = e(t);
        n.e2eSuccessful = true;
        n.commit();
    }
    function d(t) {
        const n = e(t);
        n.e2eSuccessful = false;
        n.weight = 1;
        n.commit();
    }
    l.postSuccessDirectE2eMessageSendMetric = c;
    l.postFailureDirectE2eMessageSendMetric = d;
}, 98);