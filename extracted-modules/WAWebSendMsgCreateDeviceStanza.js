__d("WAWebSendMsgCreateDeviceStanza", [
    "invariant",
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCommsWapMd",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebE2EProtoUtils",
    "WAWebEncryptMsgProtobuf",
    "WAWebGenerateBotGroupMetadata",
    "WAWebGroupMsgSendUtils",
    "WAWebHandleMsgCommon",
    "WAWebICDCMetaApi",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebPQSessionScope",
    "WAWebRemoveQuotedAttachmentMediaFields",
    "WAWebReportingTokenUtils",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgMetaNode",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWasaHatchOutboundWrapper",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = n("$InternalEnum").Mirrored([
        "Retry",
        "AppStateSync"
    ]);
    const d = n("$InternalEnum")({
        OnDemand: 1
    });
    function m(e, t, n, r) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(msgRecord, t, n, origin) {
            const { option, recipient, to } = n;
            let u = t;
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: false,
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [
                    to
                ]
            });
            if (o("WAWebUserPrefsMeUser").isMeAccount(to) && option.type !== c.AppStateSync) {
                if (recipient == null) {
                    s(0, 56363);
                }
                u = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(t, recipient);
                yield o("WAWebICDCMetaApi").populateICDCMeta(o("WAWebWidFactory").asUserWidOrThrow(recipient), u);
            } else {
                yield o("WAWebICDCMetaApi").populateICDCMeta(o("WAWebWidFactory").asUserWidOrThrow(to), u);
            }
            return h({
                msgProtobuf: u,
                msgRecord,
                origin,
                params: babelHelpers.extends({
                    type: "user"
                }, n)
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgProtobuf, msgRecord, params }) {
            let a;
            const { option, participant, sessionScope, to } = params;
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: false,
                sessionScope: sessionScope ?? o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [
                    participant
                ]
            });
            if (option.type === c.AppStateSync) {
                return (u || (u = n("Promise"))).reject(r("err")("[messaging] createGroupDeviceMsgStanza: not expect for App State Sync message"));
            }
            const remote = msgRecord.data.id.remote;
            if (!remote.isGroup()) {
                return (u || (u = n("Promise"))).reject(r("err")("[messaging] createGroupDeviceMsgStanza: function called for non group WID"));
            }
            const C = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(remote.toString());
            const b = yield o("WAWebGroupMsgSendUtils").getGroupData(remote.toString(), C, msgRecord);
            const v = b.groupAgentParticipants ?? [];
            let groupAgentParticipants = v;
            if (option.type === c.Retry && participant.isBot()) {
                const R = yield o("WAWebResolveGroupAgentParticipants").resolveGroupAgentFanoutForGroupSend(b);
                groupAgentParticipants = R.resolvedGroupAgentParticipants;
                if (v.some((e)=>e.equals(participant)) && !groupAgentParticipants.some((e)=>e.equals(participant))) {
                    return (u || (u = n("Promise"))).reject(r("err")("[messaging] createGroupDeviceMsgStanza: retry requested for an ineligible group agent"));
                }
            }
            const groupAgentPolicyParticipants = option.type === c.Retry && (a = msgRecord.data.botGroupParticipants?.filter(g)) != null ? a : groupAgentParticipants;
            const groupHasMuseAgent = participant.equals(o("WAWebBotUtils").META_BOT_FBID_WID) && (yield o("WAWebResolveGroupAgentParticipants").hasMuseNoticeGroupAgent(v));
            const groupData = babelHelpers.extends({}, b, {
                groupAgentParticipants
            });
            const I = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(o("WAWebRemoveQuotedAttachmentMediaFields").isGroupWithAgentParticipant(b) ? o("WAWebRemoveQuotedAttachmentMediaFields").removeQuotedAttachmentMediaFields(msgProtobuf) : msgProtobuf, groupAgentPolicyParticipants);
            const T = o("WAWebUserPrefsMeUser").isMeAccount(participant) ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(I, to) : I;
            yield o("WAWebICDCMetaApi").populateICDCMeta(o("WAWebWidFactory").asUserWidOrThrow(participant), T);
            return h({
                msgProtobuf: T,
                msgRecord,
                params: babelHelpers.extends({
                    type: "group",
                    groupData,
                    groupAgentPolicyParticipants,
                    groupHasMuseAgent
                }, params)
            });
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return !o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e) && !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ msgProtobuf, msgRecord, origin, params }) {
            let r;
            const msgRecord_data = msgRecord.data;
            const { botMessageSecret, isLidBot, option, to } = params;
            let R;
            let L;
            if (params.type === "user") {
                R = params.recipient;
            } else {
                L = params.participant;
            }
            const E = L || to;
            const k = option.retryCount ?? 0;
            const I = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(msgProtobuf);
            const msgRecord_data_id = msgRecord_data.id;
            const D = o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(msgProtobuf, msgRecord_data);
            let appendHostedSenderIntent = false;
            if (k > 0) {
                if (msgRecord.data?.senderOrRecipientAccountTypeHosted === true) {
                    appendHostedSenderIntent = true;
                }
            }
            const P = to.isBot() && R != null && !R.isBot();
            const N = !!((r = L) != null && r.isBot() || P);
            const M = params.type === "group" && L?.isBot() === true && params.groupData.groupAgentParticipants?.some(function(e) {
                return e.equals(L);
            }) === true;
            const w = params.type === "group" ? params.groupAgentPolicyParticipants ?? params.groupData.groupAgentParticipants ?? [] : [];
            const isGroupAgentParticipantSend = L?.isBot() === true && w.some((e)=>e.equals(L));
            const hasOpenBotTarget = params.type === "group" && L != null && L.equals(o("WAWebBotUtils").META_BOT_FBID_WID);
            const hasGroupAgentTarget = isGroupAgentParticipantSend || hasOpenBotTarget && w.length > 0;
            let isOpenBotGroup = false;
            if (L?.isBot() && o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled()) {
                const W = msgRecord.data.id.remote;
                const q = yield o("WAWebGroupMsgSendUtils").getGroupData(W.toString(), undefined);
                isOpenBotGroup = q.isOpenBotGroup === true;
            }
            const U = E.isHosted() && o("WAWebMessagingGatingUtils").isSimpleSignalEnabled();
            const V = M || N && botMessageSecret != null;
            const H = V ? yield o("WAWebE2EProtoGenerator").updateBotInvokeMsgProtoCopyForCapi({
                message: msgProtobuf,
                messageSecret: msgRecord_data.messageSecret,
                botMessageSecret,
                groupHasMuseAgent: params.type === "group" && params.groupHasMuseAgent === true,
                hasGroupAgentTarget,
                hasOpenBotTarget,
                isGroupAgentParticipantSend,
                isGroupMsg: params.type === "group",
                isOpenBotGroup,
                mentionedJidList: hasGroupAgentTarget && !hasOpenBotTarget ? null : msgRecord_data.mentionedJidList
            }) : msgProtobuf;
            const G = isGroupAgentParticipantSend && L?.isFbidBot() === true ? o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(H) : H;
            const z = params.type === "user" && option.type === c.Retry && !N && !o("WAWebUserPrefsMeUser").isMeAccount(to);
            const j = params.type === "group" ? params.sessionScope : yield o("WAWebPQSessionScope").resolvePqSendScope(E, z);
            const K = o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(msgRecord_data.id.remote, E, msgRecord_data.subtype) ? yield o("WAWebWasaHatchOutboundWrapper").wrapHatchOutboundMessage({
                currentStanzaId: msgRecord_data.id.id,
                innerMessage: G
            }) : G;
            const Q = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(E, k, K, msgRecord_data, D, j, U);
            const { ciphertext, type } = Q;
            let J = null;
            if (type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg) {
                const Z = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
                J = o("WAWap").wap("device-identity", null, Z);
            }
            if (option.type !== c.Retry) {
                yield o("WAWebSendMsgCommonApi").updateIdentityRange(msgRecord, [
                    E
                ]);
            }
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
            let push_priority;
            if (option.pushPriority != null) {
                push_priority = o("WAWap").CUSTOM_STRING(option.pushPriority);
            } else {
                push_priority = option.type === c.AppStateSync ? "high" : o("WAWap").DROP_ATTR;
            }
            let te = null;
            if (params.type === "group") {
                te = params.groupData.isLidAddressingMode === true ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
            }
            const ne = o("WAWebSendMsgMetaNode").genMetaNode({
                chatId: to,
                groupData: params.type === "group" ? params.groupData : undefined,
                includeAttributes: {
                    appendHostedSenderIntent,
                    hasPairwisePayload: params.type === "group",
                    isCategoryPeerMessage: option.type === c.AppStateSync,
                    origin,
                    sessionScope: params.type === "group" ? j : undefined
                },
                msgProtobuf,
                msgRecord
            });
            const re = R && P ? R : to;
            let oe = o("WAWap").wap("enc", {
                v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
                type: o("WAWap").CUSTOM_STRING(type),
                session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(ciphertext) ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
                state: U && type === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
                count: k === 0 ? o("WAWap").DROP_ATTR : o("WAWap").INT(k),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(I),
                "decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(msgProtobuf))
            }, ciphertext);
            if (N) {
                const ae = to.isBot() ? to : L;
                if (!(ae != null && ae.isBot())) {
                    s(0, 75934);
                }
                oe = o("WAWap").wap("bot", {
                    is_lid: isLidBot === true ? "true" : o("WAWap").DROP_ATTR
                }, o("WAWap").wap("to", {
                    jid: o("WAWebCommsWapMd").DEVICE_JID(ae)
                }, oe));
            }
            const ie = !o("WAWebUserPrefsMeUser").isMeAccount(to) && msgRecord.data.kind !== o("WAWebMsgType").MsgKind.PeerMessage ? yield o("WAWebReportingTokenUtils").genReportingTokenBody(msgRecord.data, msgProtobuf) : null;
            const le = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
            let se;
            let ue;
            let ce;
            if (le && o("WAWebUserPrefsMeUser").isMeAccount(re) && R != null && R.isRegularUser()) {
                if (R.isLid()) {
                    se = o("WAWebApiContact").getPhoneNumber(R);
                    if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                        const de = yield o("WAWebApiContact").getContactRecord(R);
                        if (de?.username != null) {
                            ce = de.username;
                        }
                    }
                } else {
                    ue = params.peerRecipientLid ?? o("WAWebLidMigrationUtils").toLid(R);
                    if (ue != null && !ue.isLid()) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "createDeviceMsgStanza: peerRecipientLid is not a LID: ",
                            ""
                        ])), ue.toLogString()).sendLogs("peer-recipient-lid-not-lid-device");
                    }
                }
            }
            return o("WAWap").wap("message", {
                id: o("WAWap").CUSTOM_STRING(msgRecord_data_id.id),
                to: o("WAWebCommsWapMd").JID(re),
                participant: L && !N ? o("WAWebCommsWapMd").DEVICE_JID(L) : o("WAWap").DROP_ATTR,
                recipient: R && !N ? o("WAWebCommsWapMd").USER_JID(R) : o("WAWap").DROP_ATTR,
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(msgProtobuf),
                peer_recipient_pn: se ? o("WAWebCommsWapMd").USER_JID(se) : o("WAWap").DROP_ATTR,
                peer_recipient_lid: ue ? o("WAWebCommsWapMd").USER_JID(ue) : o("WAWap").DROP_ATTR,
                peer_recipient_username: ce !== undefined ? o("WAWap").CUSTOM_STRING(o("WAWebUsernameTypes").serializeUsername(ce)) : o("WAWap").DROP_ATTR,
                edit: o("WAWebSendMsgCommonApi").editAttribute(msgProtobuf, msgRecord_data.subtype),
                category: option.type === c.AppStateSync ? "peer" : o("WAWap").DROP_ATTR,
                push_priority,
                privacy_sensitive: option.privacySensitive != null ? o("WAWap").CUSTOM_STRING(option.privacySensitive.valueOf().toString()) : o("WAWap").DROP_ATTR,
                addressing_mode: te != null ? o("WAWap").CUSTOM_STRING(te) : o("WAWap").DROP_ATTR
            }, oe, J, ne, ie);
        });
        return y.apply(this, arguments);
    }
    l.MsgType = c;
    l.PrivacySensitiveType = d;
    l.createUserDeviceMsgStanza = m;
    l.createGroupDeviceMsgStanza = _;
}, 98);