__d("WAWebSendMsgMetaNode", [
    "WAWap",
    "WAWebBotLoggingUtils",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommsWapMd",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgCommon",
    "WAWebMsgType",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMsgConstants",
    "WAWebScheduledMsgStanzaContributor",
    "WAWebSessionScope",
    "WAWebUsernameTypes",
    "WAWebVerifyProtobufMsgObjectKeys"
], function(t, n, r, o, a, i, l) {
    const e = "forward";
    function s(e, t) {
        const n = t?.origin;
        if (e.isLid() && n != null && n === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) {
            return n;
        }
        return null;
    }
    function u({ botMetricsOrigin, chatId, includeAttributes, msgRecord }) {
        if (botMetricsOrigin != null && o("WAWebBotUtils").isMetaAiBot(chatId)) {
            return botMetricsOrigin;
        }
        const l = msgRecord.data.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && msgRecord.data.isForwarded === true;
        if (l) {
            return e;
        }
        return s(chatId, includeAttributes);
    }
    function c({ chatId, groupData, includeAttributes, msgProtobuf, msgRecord, scheduledMsgMetadata }) {
        const C = o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(msgProtobuf) ?? msgProtobuf;
        const b = p(C);
        const v = d(scheduledMsgMetadata?.kind === "schedule" ? scheduledMsgMetadata.originalMessageAssociationType : msgProtobuf.messageContextInfo?.messageAssociation?.associationType);
        const S = _(C);
        const R = g(includeAttributes);
        let L;
        if (msgRecord.type === "addon") {
            L = o("WAWebE2EProtoUtils").extractCommentTargetIdAndSenderLid(msgRecord.data);
        }
        const botMetricsMetadata = msgRecord.data.botMetricsMetadata;
        const botMetricsOrigin = botMetricsMetadata != null ? o("WAWebBotLoggingUtils").getBotOriginFromBotMetricsEntryPoint(botMetricsMetadata.destinationEntryPoint) : null;
        const I = botMetricsMetadata?.destinationId ?? null;
        const T = u({
            botMetricsOrigin,
            chatId,
            includeAttributes,
            msgRecord
        });
        const D = f(msgRecord, includeAttributes);
        const x = h(msgRecord);
        const $ = msgRecord.data.mediaData?.isViewOnce === true;
        const P = msgRecord.data.isGroupStatus === true;
        const N = P && includeAttributes?.hasPairwisePayload === true && includeAttributes.sessionScope === o("WAWebSessionScope").SessionScope.STATUS;
        const M = scheduledMsgMetadata != null ? o("WAWebScheduledMsgStanzaContributor").genScheduledMsgMetaContribution(scheduledMsgMetadata) : null;
        const w = M != null || b != null || S != null || L != null || T != null || I != null || includeAttributes?.appendHostedSenderIntent === true || D != null || $ || R != null || x != null || v != null || P;
        if (w) {
            let F;
            return o("WAWap").wap("meta", {
                origin: T != null ? o("WAWap").CUSTOM_STRING(T) : o("WAWap").DROP_ATTR,
                destination_id: I != null ? o("WAWap").CUSTOM_STRING(I) : o("WAWap").DROP_ATTR,
                sender_intent: includeAttributes?.appendHostedSenderIntent === true ? "hosted" : o("WAWap").DROP_ATTR,
                polltype: b ?? o("WAWap").DROP_ATTR,
                event_type: S ?? o("WAWap").DROP_ATTR,
                thread_msg_id: L?.threadMsgId != null ? o("WAWap").CUSTOM_STRING(L.threadMsgId) : o("WAWap").DROP_ATTR,
                thread_msg_sender_jid: (F = L) != null && F.threadMsgSenderLid ? o("WAWebCommsWapMd").USER_JID(L.threadMsgSenderLid) : o("WAWap").DROP_ATTR,
                appdata: D != null ? o("WAWap").CUSTOM_STRING(D) : o("WAWap").DROP_ATTR,
                view_once: $ ? "true" : o("WAWap").DROP_ATTR,
                conversation_thread_id: R != null ? o("WAWap").CUSTOM_STRING(R) : o("WAWap").DROP_ATTR,
                tag_reason: x != null ? o("WAWap").CUSTOM_STRING(x) : o("WAWap").DROP_ATTR,
                message_association_type: v != null ? o("WAWap").CUSTOM_STRING(v) : o("WAWap").DROP_ATTR,
                is_group_status: P ? "true" : o("WAWap").DROP_ATTR,
                session_scope: N ? "status" : o("WAWap").DROP_ATTR,
                type: M != null ? o("WAWap").CUSTOM_STRING(o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE) : o("WAWap").DROP_ATTR,
                st: M?.scheduledTimestampS != null ? o("WAWap").CUSTOM_STRING(String(M.scheduledTimestampS)) : o("WAWap").DROP_ATTR
            }, M?.keyNode);
        }
    }
    function d(e) {
        if (e == null) {
            return null;
        }
        return m.get(e) ?? null;
    }
    var m = new Map([
        [
            o("WAWebProtobufsE2E.pb").MessageAssociation$AssociationType.HD_IMAGE_DUAL_UPLOAD,
            "hd_image_dual_upload"
        ]
    ]);
    function p(e) {
        if (e.pollCreationMessage != null || e.pollCreationMessageV2 != null || e.pollCreationMessageV3 != null || e.pollCreationMessageV5 != null || e.pollCreationMessageV6 != null) {
            return o("WAWebHandleMsgCommon").POLL_TYPES.creation;
        }
        if (e.pollUpdateMessage?.vote != null) {
            return o("WAWebHandleMsgCommon").POLL_TYPES.vote;
        }
        if ((e.pollResultSnapshotMessage != null || e.pollResultSnapshotMessageV3 != null) && r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()) {
            return o("WAWebHandleMsgCommon").POLL_TYPES.result_snapshot;
        }
        if (e.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT) {
            return o("WAWebHandleMsgCommon").POLL_TYPES.edit;
        }
        return null;
    }
    function _(e) {
        if (e.eventMessage != null) {
            return o("WAWebHandleMsgCommon").EVENT_TYPES.creation;
        }
        if (e.encEventResponseMessage != null) {
            return o("WAWebHandleMsgCommon").EVENT_TYPES.response;
        }
        if (e.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT) {
            return o("WAWebHandleMsgCommon").EVENT_TYPES.edit;
        }
        return null;
    }
    function f(msgRecord, includeAttributes) {
        const n = msgRecord.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && msgRecord.data.subtype === "member_label";
        if (n) {
            return "member_tag";
        }
        const r = msgRecord.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && msgRecord.data.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSyncResponse;
        const a = includeAttributes?.isCategoryPeerMessage === true;
        if (r || a) {
            return "default";
        }
        if (msgRecord.data.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE) {
            return "group_history";
        }
        return null;
    }
    function g(includeAttributes) {
        const t = includeAttributes ?? {};
        const t_hashedAiThreadId = t.hashedAiThreadId;
        return t_hashedAiThreadId ?? null;
    }
    function h(msgRecord) {
        const n = msgRecord.data.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && msgRecord.data.subtype === "member_label";
        if (!n) {
            return null;
        }
        const r = msgRecord.data.memberLabelData?.label;
        if (r === "" || r == null) {
            return "user_delete";
        }
        return "user_update";
    }
    l.getOriginAttribute = s;
    l.getMetaOrigin = u;
    l.genMetaNode = c;
}, 98);