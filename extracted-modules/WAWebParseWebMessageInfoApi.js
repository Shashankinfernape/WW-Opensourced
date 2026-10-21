__d("WAWebParseWebMessageInfoApi", [
    "WABase64",
    "WALogger",
    "WATimeUtils",
    "WAWebABPropsSaga",
    "WAWebAfterReadUtils",
    "WAWebBotTypes",
    "WAWebDecodeJid",
    "WAWebE2EProtoParser",
    "WAWebEphemeralKeepInChat",
    "WAWebEphemeralityTypes",
    "WAWebGroupHistoryProtoUtils",
    "WAWebHistorySyncScheduledMsgInnerProtoBuilder",
    "WAWebMessagingGatingUtils",
    "WAWebMsgHistorySyncExtensions",
    "WAWebMsgType",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebParseWebMessageInfoUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConstants",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(t, n) {
        const f = t.key;
        const g = o("WAWebDecodeJid").decodeJidAndValidate(f.remoteJid, "remoteJid");
        const h = o("WAWebParseWebMessageInfoUtils").getMeJid(t);
        const y = f.fromMe === true ? g : h;
        const C = f.fromMe === true ? h : g;
        const b = o("WAWebParseWebMessageInfoUtils").buildMsgKey(t, f);
        if (b != null) {
            const { author: v, msgKey: S } = b;
            if (y === "broadcast") {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "drop: broadcast"
                ])));
                return;
            }
            let R = false;
            R = t.reactions.some((e)=>e.text != null);
            let L = babelHelpers.extends({
                id: S,
                from: C,
                to: y,
                participant: S.participant,
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                t: t.messageTimestamp ?? 0,
                ack: t.status - 1,
                author: v,
                invis: !!t.ignore,
                star: !!t.starred,
                broadcast: f.fromMe === true && t.broadcast,
                notifyName: t.pushName || "",
                encFilehash: t.mediaCiphertextSha256 ? o("WABase64").encodeB64(t.mediaCiphertextSha256) : void 0,
                shareDuration: t.duration,
                labels: t.labels,
                ephemeralStartTimestamp: t.ephemeralStartTimestamp,
                expiredTimestamp: o("WAWebAfterReadUtils").isAfterReadEnabled() ? t.ephemeralExpirationTimestamp : null,
                ephemeralOutOfSync: t.ephemeralOutOfSync,
                bizPrivacyStatus: t.bizPrivacyStatus,
                verifiedBizName: t.verifiedBizName,
                reactions: t.reactions,
                hasReaction: R,
                agentId: t.agentId,
                revokeTimestamp: t.revokeMessageTimestamp,
                kicKey: void 0,
                kicState: void 0,
                pollInvalidated: t.pollAdditionalMetadata?.pollInvalidated === true
            }, o("WAWebMsgHistorySyncExtensions").parseHistorySyncMsgExtensions(t), {
                eventInvalidated: t.eventAdditionalMetadata?.isStale === true,
                replyCount: t.commentMetadata?.replyCount,
                originalSelfAuthor: o("WAWebDecodeJid").decodeJidAndValidate(t.originalSelfAuthorUserJidString, "originalSelfAuthorUserJidString"),
                kicTimestampMs: void 0,
                pinInChat: t.pinInChat,
                pmCampaignId: t.premiumMessageInfo?.serverCampaignId,
                galaxyFlowDisabled: t.interactiveMessageAdditionalMetadata != null ? t.interactiveMessageAdditionalMetadata.isGalaxyFlowCompleted === true : void 0,
                bizSource: t.premiumMessageInfo?.serverCampaignId != null ? "smb_promo" : void 0,
                bizBotType: t.is1PBizBotMessage === true ? o("WAWebBotTypes").BizBotType.BIZ_1P : null,
                botTargetSenderJid: t.botMessageInvokerJid != null ? o("WAWebDecodeJid").decodeJidAndValidate(t.botMessageInvokerJid, "botMessageInvokerJid") : null,
                groupHistoryBundleInfo: t.groupHistoryBundleInfo,
                hsmTag: t.hsmTag ?? void 0
            });
            if (r("WAWebWid").isCAPISupportAccount(S.remote)) {
                if (t.isSupportAiMessage != null && o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled()) {
                    L.isSupportAIMessage = t.isSupportAiMessage;
                }
                if (t.supportAiCitations != null && t.supportAiCitations.length > 0) {
                    L.supportCitations = t.supportAiCitations;
                }
            }
            if (o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled()) {
                L.reportingTokenInfo = t.reportingTokenInfo != null ? {
                    reportingTag: t.reportingTokenInfo?.reportingTag,
                    version: o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.HISTORY_SYNC
                } : null;
            }
            if (t.keepInChat != null) {
                try {
                    const k = o("WAWebEphemeralKeepInChat").parseKeepInChatHistorySyncMessage(t);
                    if (k != null) {
                        L = babelHelpers.extends({}, L, k);
                    }
                } catch (e) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "parseWebMessageInfo: KIC fields are malformed"
                    ])));
                }
            }
            const I = o("WAWebGroupHistoryProtoUtils").getGroupHistoryIndividualMessageInfoMetadataFromProto(t.groupHistoryIndividualMessageInfo);
            if (I != null) {
                L.groupHistoryIndividualMessageInfo = I;
            }
            if (t.message) {
                const T = o("WAWebE2EProtoParser").parseMsgProto({
                    messageProtobuf: t.message,
                    message: L,
                    msgContext: "history",
                    paymentInfo: t.paymentInfo,
                    finalLocation: t.finalLiveLocation,
                    quotedPaymentInfo: t.quotedPaymentInfo,
                    bizSource: L.bizSource,
                    historyLidPnMappings: n
                });
                m(t, T);
                p(t, T);
                return T;
            }
            o("WAWebParseLimitSharingHistorySyncProto").parseLimitSharingFromProtocolHistorySyncMessage(t, L);
            return o("WAWebParseWebMessageInfoUtils").parseMsgStubProto(t, L);
        }
    }
    function m(e, t) {
        let l;
        let s;
        const c = e.scheduledMessageMetadata;
        if (!(c == null || t == null) && e.key?.fromMe === true) {
            const { revealKey: d, revealKeyId: m, scheduledTime: p } = c;
            if (!(d == null || m == null || p == null)) {
                const _ = t.id?.remote;
                const g = t.id?.id != null ? t.id.toString() : null;
                if (!(_ == null || g == null)) {
                    const h = o("WAWebWidToJid").widToChatJid(_);
                    const y = typeof t.body === "string" ? t.body : null;
                    const C = o("WATimeUtils").castToUnixTime(Number(p));
                    const b = new Uint8Array(d);
                    const v = {
                        ephemeralDuration: typeof t.ephemeralDuration === "number" ? t.ephemeralDuration : null,
                        ephemeralSettingTimestamp: typeof t.ephemeralSettingTimestamp === "number" ? t.ephemeralSettingTimestamp : null,
                        afterReadDuration: typeof t.afterReadDuration === "number" ? t.afterReadDuration : null,
                        disappearingModeInitiator: typeof t.disappearingModeInitiator === "string" && (l = o("WAWebEphemeralityTypes").DisappearingModeInitiator.cast(t.disappearingModeInitiator)) != null ? l : null,
                        disappearingModeTrigger: typeof t.disappearingModeTrigger === "string" && (s = o("WAWebEphemeralityTypes").DisappearingModeTrigger.cast(t.disappearingModeTrigger)) != null ? s : null,
                        disappearingModeInitiatedByMe: typeof t.disappearingModeInitiatedByMe === "boolean" ? t.disappearingModeInitiatedByMe : null
                    };
                    f({
                        msgId: g,
                        chatId: h,
                        revealKeyId: m,
                        revealKey: b,
                        scheduledTimestampS: C,
                        body: y,
                        ephemeral: v,
                        sourceProto: e.message
                    }).catch((e)=>{
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[scheduled_msg][history_sync] persist failed msg=",
                            ""
                        ])), g).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-history-sync-persist-failed");
                    });
                    t.viewMode = o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE;
                }
            }
        }
    }
    function p(e, t) {
        if (e.scheduledMessageMetadata == null) {
            const a = e.message?.conditionalRevealMessage;
            if (a != null) {
                const i = e.key;
                if (!(i == null || i.fromMe === true)) {
                    const l = o("WAWebParseWebMessageInfoUtils").buildMsgKey(e, i);
                    if (l != null) {
                        const s = l.msgKey;
                        const u = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(a);
                        if (u != null) {
                            const { remote: d, id: m } = s;
                            if (!(d == null || m == null)) {
                                const p = _(d, s.participant);
                                const f = o("WAWebScheduledMsgOutgoingMsgKey").buildScheduledMsgIncomingMsgKey(m, d, p).toString();
                                o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                                    msgId: f,
                                    chatId: o("WAWebWidToJid").widToChatJid(d),
                                    revealKeyId: u.revealKeyId,
                                    revealKey: new Uint8Array(0),
                                    encPayload: new Uint8Array(u.encPayload),
                                    encIv: new Uint8Array(u.encIv),
                                    scheduledTimestampS: o("WATimeUtils").castToUnixTime(0),
                                    status: "PENDING",
                                    createdAt: o("WATimeUtils").unixTime(),
                                    senderJid: p
                                }).catch((e)=>{
                                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                        "[scheduled_msg][history_sync] recv CR park failed msg=",
                                        ""
                                    ])), m).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-history-sync-cr-park-failed");
                                });
                                if (t != null) {
                                    t.viewMode = o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function _(e, t) {
        if (e.isGroup()) {
            if (t != null && !o("WAWebUserPrefsMeUser").isMeAccount(t)) {
                return t.toString();
            }
            return null;
        }
        return e.toString();
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebHistorySyncScheduledMsgInnerProtoBuilder").buildHistorySyncInnerProto({
                body: e.body,
                ephemeral: e.ephemeral,
                sourceProto: e.sourceProto
            });
            const n = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, t).readByteArrayView();
            const a = yield o("WAWebScheduledMsgCrypto").encryptWithRevealKey(n, e.revealKey);
            const { encIv: i, encPayload: l } = a;
            const s = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
                msgId: e.msgId,
                chatId: e.chatId,
                revealKeyId: e.revealKeyId,
                revealKey: e.revealKey,
                scheduledTimestampS: e.scheduledTimestampS,
                encPayload: new Uint8Array(l),
                encIv: new Uint8Array(i)
            });
            if (!s) {
                throw r("err")("per-chat scheduled message limit reached");
            }
        });
        return g.apply(this, arguments);
    }
    l.parseWebMessageInfo = d;
}, 98);