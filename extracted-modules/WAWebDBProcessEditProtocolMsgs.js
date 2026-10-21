__d("WAWebDBProcessEditProtocolMsgs", [
    "$InternalEnum",
    "Promise",
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebAddonQueryUtils",
    "WAWebApiChatUnreadMention",
    "WAWebBackendApi",
    "WAWebCoexV2MessageAckProjection",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreMessageOrphans",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebGroupAgentRichResponseLinkIndex",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMaibaAiHubSettledProgressEdit",
    "WAWebMessageEditBotGroupMetadata",
    "WAWebMessageEditGatingUtils",
    "WAWebMessageEditUtils",
    "WAWebMessagingGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgStoreExtensions",
    "WAWebMsgType",
    "WAWebMsmsgMsgSecretCache",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadMsgUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:375",
    "getErrorSafe",
    "justknobx",
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
    const y = n("cr:375") ?? {};
    const y_ftsLightClient = y.ftsLightClient;
    const b = n("$InternalEnum").Mirrored([
        "Added",
        "Removed"
    ]);
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
            const n = yield R(e, t);
            const n_latestMessageEdits = n.latestMessageEdits;
            return n_latestMessageEdits;
        });
        return S.apply(this, arguments);
    }
    function R(e, t) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
            if (e.length === 0) {
                return {
                    latestMessageEdits: [],
                    processedProtocolMsgs: [],
                    consumedProtocolMsgs: []
                };
            }
            const a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(r("compactMap")(e, function(e) {
                return e.protocolMessageKey;
            }));
            const processedProtocolMsgs = yield (h || (h = n("Promise"))).all(I(e, a).map(V));
            const l = [];
            const s = [];
            const u = [];
            processedProtocolMsgs.sort((e, t)=>r("nullthrows")(t.latestEditSenderTimestampMs) - r("nullthrows")(e.latestEditSenderTimestampMs));
            for (const c of processedProtocolMsgs){
                const d = c.protocolMessageKey && a.get(c.protocolMessageKey.toString());
                if (!d || T(d.type)) {
                    l.push(c);
                } else {
                    if (o("WAWebMessagingGatingUtils").isWebReportingTokenDelayProcessingEnabled()) {
                        const m = o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.startMarker(o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible").msgProcessReporter.stage.ProcessReportingTokenInfo);
                        yield o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
                            renderableMsgs: [
                                c
                            ]
                        });
                        m?.();
                    }
                    s.push(F(d, c));
                    if (o("WAWebThreadMsgUtils").isThreadMsg(c)) {
                        u.push(c);
                    }
                }
            }
            yield D(l);
            const latestMessageEdits = s.filter((e)=>e.isLatest);
            yield E(s, latestMessageEdits);
            if (t) {
                yield o("WAWebDBMarkFutureproofMessagesReparsed").markFutureproofMessagesReparsed(e.map((e)=>e.id.toString()));
            }
            yield o("WAWebDBThreadMetadataBulkHelper").persistNewMessagesThreadMetadataInBulk(u);
            yield o("WAWebCoexV2MessageAckProjection").reconcileCoexV2ReceiptAcksAfterMessagePersisted(latestMessageEdits.map(({ protocolMsg })=>protocolMsg), h.resolve(), null);
            return {
                latestMessageEdits,
                processedProtocolMsgs,
                consumedProtocolMsgs: s.map((e)=>e.protocolMsg)
            };
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, messageEdits) {
            if (e.length) {
                yield $(e);
                z(e);
                N(e.filter((e)=>e.isLatest && !o("WAWebMsgGetters").getIsNewsletterMsg(e.parentMsg)).map((e)=>e.parentMsg));
                yield K(e);
                yield o("WAWebMsgStoreExtensions").handleStoredMessageEdits(e);
            }
            if (messageEdits.length) {
                o("WAWebBackendApi").frontendFireAndForget("updateEditedMessagesAction", {
                    messageEdits
                });
            }
        });
        return k.apply(this, arguments);
    }
    function I(e, t) {
        const n = [];
        const a = [];
        const i = [];
        const l = [];
        const _ = [];
        const f = [];
        const g = e.filter((e)=>{
            const e_protocolMessageKey = e.protocolMessageKey;
            if (!e_protocolMessageKey) {
                if (n.length < 3) {
                    n.push(e.id.toString());
                }
                return false;
            }
            const u = t.get(e_protocolMessageKey.toString());
            if (u) {
                const c = o("WAWebMessageEditUtils").msgTypeSupportsEditing(u.type) || T(u.type);
                if (!c) {
                    if (a.length < 3) {
                        a.push({
                            id: u.id.toString(),
                            type: u.type
                        });
                    }
                    return false;
                }
                if (u.isForwarded === true) {
                    if (i.length < 3) {
                        i.push(u.id.toString());
                    }
                    return false;
                }
                const parentTsInSeconds = r("nullthrows")(u.t);
                const editTsInSeconds = r("nullthrows")(e.t);
                const p = o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
                    parentTsInSeconds,
                    editTsInSeconds,
                    msgKey: u.id
                }) || o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
                    msgKey: u.id,
                    msgType: u.type
                }) || o("WAWebMessageEditUtils").shouldDeferMessageYourselfEditWindowCheck({
                    msgKey: u.id,
                    msgType: u.type
                });
                if (!p) {
                    if (l.length < 3) {
                        l.push(u.id.toString());
                    }
                    return false;
                }
                const g = o("WAWebMsgGetters").getSender(u);
                const h = o("WAWebMsgGetters").getSender(e);
                if (!o("WAWebMsgGetters").getIsNewsletterMsg(u) && (!g || !h || !r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(g, h)))) {
                    if (_.length < 3) {
                        _.push(u.id.toString());
                    }
                    return false;
                }
            }
            if (e.latestEditSenderTimestampMs == null) {
                if (f.length < 3) {
                    f.push(e.id.toString());
                }
                return false;
            }
            return true;
        });
        if (n.length > 0) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit] ",
                " protocol msgs missing original msg key => ",
                ""
            ])), n.length, n).sendLogs("message-edit-missing-original-msg-key");
        }
        if (a.length > 0) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit] ",
                " msgs have unsupported type => ",
                ""
            ])), a.length, a.map((e)=>`${e.id}:${e.type}`)).sendLogs("message-edit-unsupported-msg-type");
        }
        if (i.length > 0) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit] ",
                " forwarded msgs cannot be edited => ",
                ""
            ])), i.length, i).sendLogs("message-edit-forwarded-message");
        }
        if (l.length > 0) {
            o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit] ",
                " msgs exceeded edit window => ",
                ""
            ])), l.length, l);
        }
        if (_.length > 0) {
            o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit] ",
                " senders are not the parent msg sender => ",
                ""
            ])), _.length, _).sendLogs("message-edit-sender-mismatch");
        }
        if (f.length > 0) {
            o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit] ",
                " msgs missing sender timestamp => ",
                ""
            ])), f.length, f).sendLogs("message-edit-missing-timestamp");
        }
        return g;
    }
    function T(type) {
        return type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || type === o("WAWebMsgType").MSG_TYPE.QUARANTINED && r("justknobx")._("572");
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length) {
                yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(e, function(e) {
                    return e.protocolMessageKey;
                }, {
                    storeReportingInfo: true
                });
            }
        });
        return x.apply(this, arguments);
    }
    function $(e) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length) {
                const t = [];
                const r = [];
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "message",
                    "chat",
                    "thread-metadata"
                ], (()=>{
                    const a = n("asyncToGeneratorRuntime").asyncToGenerator(function*([i, l, s]) {
                        const u = [];
                        const c = new Set;
                        const d = new Map;
                        e.forEach(({ editedMsgData, isLatest, parentMsg, protocolMsg })=>{
                            if (isLatest) {
                                u.push(babelHelpers.extends({}, parentMsg, editedMsgData));
                                if (!o("WAWebMsgGetters").getIsSentByMe(protocolMsg)) {
                                    const p = parentMsg.id.remote.toString();
                                    c.add(p);
                                    const _ = o("WAWebDBMessageUtils").getThreadIdsFromMessage(parentMsg);
                                    for (const f of _){
                                        d.set(f.toString(), f);
                                    }
                                }
                                t.push(parentMsg.id.toString());
                                r.push([
                                    parentMsg.id,
                                    editedMsgData.latestEditMsgKey?.id.toString() ?? ""
                                ]);
                            }
                        });
                        const m = [];
                        if (u.length) {
                            m.push(i.bulkCreateOrMerge(u.map((e)=>X(e))));
                        }
                        if (c.size || d.size) {
                            const unreadEditTimestampMs = o("WATimeUtils").unixTimeMs();
                            if (c.size) {
                                const _ = Array.from(c, function(e) {
                                    return {
                                        id: e,
                                        unreadEditTimestampMs
                                    };
                                });
                                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "storeMessageEdits: bulkCreateOrMerge"
                                ]))).tags("missing-lid");
                                m.push(l.bulkCreateOrMerge(_));
                            }
                            if (d.size) {
                                const g = Array.from(d.values(), function(e) {
                                    return {
                                        threadId: e,
                                        unreadEditTimestampMs
                                    };
                                });
                                m.push(o("WAWebThreadMetadataBulkJob").bulkUpdateThreadUnreadEditTimestampWithTable(s, g));
                            }
                        }
                        yield (h || (h = n("Promise"))).all(m);
                    });
                    return function(e) {
                        return a.apply(this, arguments);
                    };
                })());
                o("WAWebDBReportingTokenUtils").handleReportingInfosUpdateOnMessageEdit(r);
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        if (e.length) {
            const t = Array.from(new Set(e.map((e)=>String(r("nullthrows")(e.rowId)))));
            if (y_ftsLightClient != null) {
                y_ftsLightClient.purge(t).catch(r("WAWebNoop"));
            }
            r("WAWeb-dexie").ignoreTransaction(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield y_ftsLightClient?.addToIndexingTable(t);
                if (y_ftsLightClient != null) {
                    y_ftsLightClient.index().catch(r("WAWebNoop"));
                }
            }));
        }
    }
    function M(e, t) {
        return o("WAWebMsgGetters").getIsNewsletterMsg(e) && !o("WAWebUserPrefsMeUser").isMeAccount(t.from) || e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION || e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || o("WAWebMessageEditGatingUtils").isCrossDeviceMessageEditingEnabled() || t.local !== true && o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
            msgKey: e.id,
            msgType: e.type
        });
    }
    function w(e, protocolMsg) {
        if (o("WAWebMsgGetters").getIsSentByMe(e)) {
            if (e.local === true) {
                if (M(e, protocolMsg)) {
                    return o("WAAckLevel").ACK.SENT;
                }
                return o("WAAckLevel").ACK.CLOCK;
            }
            if (o("WAWebMsgKeyUtils").isNoteToSelf(e.id)) {
                return o("WAAckLevel").ACK.READ;
            }
            return o("WAAckLevel").ACK.SENT;
        }
    }
    const A = new Map;
    function F(parentMsg, protocolMsg) {
        const i = r("nullthrows")(o("WAWebMessageEditUtils").getMsgEditType(parentMsg.type), "Unsupported message type for edits");
        const editedMsgData = U(parentMsg, protocolMsg, i);
        if (o("WAWebMsgGetters").getIsSentByMe(parentMsg) && protocolMsg.count != null) {
            editedMsgData.count = protocolMsg.count;
        }
        const s = A.get(parentMsg.id.toString()) ?? parentMsg.latestEditSenderTimestampMs ?? 0;
        const u = r("nullthrows")(protocolMsg.latestEditSenderTimestampMs);
        let isLatest = u >= s;
        if (u >= s) {
            G(editedMsgData, parentMsg, protocolMsg);
        }
        if (i === o("WAWebMessageEditUtils").MsgEditType.EventEdit) {
            const d = !!parentMsg.isEventCanceled;
            const m = !!protocolMsg.isEventCanceled;
            if (!d && m) {
                isLatest = true;
            } else if (d && !m) {
                isLatest = false;
            }
        }
        if (isLatest) {
            A.set(parentMsg.id.toString(), u);
        }
        let mentionOfMe;
        if (i !== o("WAWebMessageEditUtils").MsgEditType.EventEdit && !o("WAWebMsgGetters").getIsSentByMe(parentMsg)) {
            const _ = o("WAWebMsgGetters").getHasMentionOfMe(parentMsg);
            const f = o("WAWebMsgGetters").getHasMentionOfMe(babelHelpers.extends({}, parentMsg, editedMsgData));
            if (_ && !f) {
                mentionOfMe = b.Removed;
            } else if (!_ && f) {
                mentionOfMe = b.Added;
            }
        }
        if (o("WAWebMsgGetters").getIsMetaBotResponse(parentMsg) || o("WAWebMsgGetters").getIsBizBot1pMessage(parentMsg) || parentMsg.botEditType != null) {
            editedMsgData.botEditType = protocolMsg.botEditType;
            editedMsgData.botEditTargetId = protocolMsg.botEditTargetId;
        }
        O(parentMsg, protocolMsg, editedMsgData);
        if (o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(parentMsg)) {
            const g = o("WAWebMsgGetters").getGroupHistoryIndividualMessageInfo(parentMsg);
            if (g != null) {
                editedMsgData.groupHistoryIndividualMessageInfo = babelHelpers.extends({}, g, {
                    isEditedAfterReceivedAsHistory: true
                });
            }
        }
        return {
            parentMsg,
            protocolMsg,
            editedMsgData,
            isLatest,
            mentionOfMe
        };
    }
    function O(parentMsg, protocolMsg, editedMsgData) {
        const r = o("WAWebMaibaAiHubSettledProgressEdit").getMaibaAiHubSettledProgressEditViewMode(parentMsg, protocolMsg);
        if (r != null) {
            editedMsgData.viewMode = r;
        }
    }
    function B(protocolMsg) {
        return babelHelpers.extends({
            aiThreadInfo: protocolMsg.aiThreadInfo
        }, protocolMsg.botResponseId != null ? {
            botResponseId: protocolMsg.botResponseId
        } : null, {
            botPluginSearchUrl: protocolMsg.botPluginSearchUrl,
            botPluginSearchProvider: protocolMsg.botPluginSearchProvider,
            botPluginReferenceIndex: protocolMsg.botPluginReferenceIndex,
            botPluginType: protocolMsg.botPluginType,
            botPluginMaybeParent: protocolMsg.botPluginMaybeParent,
            botReelPluginThumbnailCdnUrl: protocolMsg.botReelPluginThumbnailCdnUrl,
            botPluginSearchQuery: protocolMsg.botPluginSearchQuery,
            botMessageDisclaimerText: protocolMsg.botMessageDisclaimerText
        });
    }
    function W(protocolMsg) {
        return {
            deprecatedMms3Url: protocolMsg.deprecatedMms3Url,
            directPath: protocolMsg.directPath,
            staticUrl: protocolMsg.staticUrl,
            qrUrl: protocolMsg.qrUrl,
            mimetype: protocolMsg.mimetype,
            caption: protocolMsg.caption,
            filehash: protocolMsg.filehash,
            encFilehash: protocolMsg.encFilehash,
            size: protocolMsg.size,
            height: protocolMsg.height,
            width: protocolMsg.width,
            mediaKey: protocolMsg.mediaKey,
            mediaKeyTimestamp: protocolMsg.mediaKeyTimestamp,
            interactiveAnnotations: protocolMsg.interactiveAnnotations,
            scanLengths: protocolMsg.scanLengths ?? [],
            scansSidecar: protocolMsg.scansSidecar,
            isViewOnce: protocolMsg.isViewOnce,
            thumbnailDirectPath: protocolMsg.thumbnailDirectPath,
            thumbnailSha256: protocolMsg.thumbnailSha256,
            thumbnailEncSha256: protocolMsg.thumbnailEncSha256,
            body: r("nullthrows")(protocolMsg.body),
            type: "image",
            kind: "image"
        };
    }
    function q(protocolMsg) {
        return {
            deprecatedMms3Url: protocolMsg.deprecatedMms3Url,
            directPath: protocolMsg.directPath,
            staticUrl: protocolMsg.staticUrl,
            mimetype: protocolMsg.mimetype,
            caption: protocolMsg.caption,
            filehash: protocolMsg.filehash,
            encFilehash: protocolMsg.encFilehash,
            size: protocolMsg.size,
            height: protocolMsg.height,
            width: protocolMsg.width,
            mediaKey: protocolMsg.mediaKey,
            mediaKeyTimestamp: protocolMsg.mediaKeyTimestamp,
            body: r("nullthrows")(protocolMsg.body),
            interactiveAnnotations: protocolMsg.interactiveAnnotations,
            isViewOnce: protocolMsg.isViewOnce,
            thumbnailDirectPath: protocolMsg.thumbnailDirectPath,
            thumbnailSha256: protocolMsg.thumbnailSha256,
            thumbnailEncSha256: protocolMsg.thumbnailEncSha256,
            isGif: protocolMsg.isGif,
            gifAttribution: protocolMsg.gifAttribution,
            accessibilityLabel: protocolMsg.accessibilityLabel,
            duration: protocolMsg.duration,
            streamingSidecar: protocolMsg.streamingSidecar,
            type: "video",
            kind: "video"
        };
    }
    function U(parentMsg, protocolMsg, n) {
        const r = babelHelpers.extends({
            latestEditMsgKey: protocolMsg.latestEditMsgKey,
            latestEditSenderTimestampMs: protocolMsg.latestEditSenderTimestampMs,
            errorCode: protocolMsg.errorCode,
            ack: w(parentMsg, protocolMsg),
            pendingReadReceipt: o("WAWebMsgGetters").getIsSentByMe(parentMsg) ? undefined : o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
            hasPaidPartnershipLabel: protocolMsg.hasPaidPartnershipLabel
        }, o("WAWebMsgGetters").getIsNewsletterMsg(parentMsg) ? {
            aiProvenance: protocolMsg.aiProvenance
        } : null);
        switch(n){
            case o("WAWebMessageEditUtils").MsgEditType.TextEdit:
                {
                    const c = !!protocolMsg.matchedText || !!protocolMsg.description || !!protocolMsg.title;
                    return babelHelpers.extends({}, r, B(protocolMsg), {
                        subtype: c ? "url" : undefined,
                        body: protocolMsg.body,
                        mentionedJidList: protocolMsg.mentionedJidList,
                        groupMentions: protocolMsg.groupMentions,
                        isSpoiler: protocolMsg.isSpoiler === true,
                        title: protocolMsg.title,
                        description: protocolMsg.description,
                        matchedText: protocolMsg.matchedText,
                        inviteGrpType: protocolMsg.inviteGrpType,
                        thumbnail: protocolMsg.thumbnail,
                        richPreviewType: protocolMsg.richPreviewType,
                        doNotPlayInline: protocolMsg.doNotPlayInline,
                        paymentLinkMetadata: protocolMsg.paymentLinkMetadata,
                        thumbnailDirectPath: protocolMsg.thumbnailDirectPath ?? undefined,
                        thumbnailSha256: protocolMsg.thumbnailSha256 ?? undefined,
                        thumbnailEncSha256: protocolMsg.thumbnailEncSha256 ?? undefined,
                        thumbnailHeight: protocolMsg.thumbnailHeight ?? undefined,
                        thumbnailWidth: protocolMsg.thumbnailWidth ?? undefined,
                        mediaKey: protocolMsg.mediaKey,
                        mediaKeyTimestamp: protocolMsg.mediaKeyTimestamp
                    });
                }
            case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
                return babelHelpers.extends({}, r, {
                    caption: protocolMsg.caption,
                    mentionedJidList: protocolMsg.mentionedJidList,
                    groupMentions: protocolMsg.groupMentions,
                    isSpoiler: protocolMsg.isSpoiler === true,
                    isCaptionByUser: true
                });
            case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
                return babelHelpers.extends({}, r, {
                    eventName: protocolMsg.eventName,
                    eventDescription: protocolMsg.eventDescription,
                    eventLocation: protocolMsg.eventLocation,
                    eventStartTime: protocolMsg.eventStartTime,
                    eventEndTime: protocolMsg.eventEndTime,
                    eventJoinLink: protocolMsg.eventJoinLink,
                    isEventCanceled: protocolMsg.isEventCanceled
                });
            case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
                return babelHelpers.extends({}, r, {
                    pollName: protocolMsg.pollName
                });
            case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
                return babelHelpers.extends({}, r, B(protocolMsg), {
                    richResponse: protocolMsg.richResponse,
                    unifiedResponse: protocolMsg.unifiedResponse,
                    unifiedResponseRawData: protocolMsg.unifiedResponseRawData,
                    botSignatureVerificationMetadata: protocolMsg.botSignatureVerificationMetadata
                });
            case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit:
                {
                    const d = protocolMsg.mimetype;
                    if (d != null) {
                        if (d.startsWith("image")) {
                            return babelHelpers.extends({}, r, B(protocolMsg), W(protocolMsg), {
                                subtype: null
                            });
                        }
                        if (d.startsWith("video")) {
                            return babelHelpers.extends({}, r, B(protocolMsg), q(protocolMsg), {
                                subtype: null
                            });
                        }
                    }
                    return babelHelpers.extends({}, r, B(protocolMsg), {
                        type: "loading_media"
                    });
                }
        }
    }
    function V(e) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.id.remote.isGroup() || !o("WAWebMsgGetters").getIsSentByMeFromWeb(e)) {
                return e;
            }
            try {
                const t = yield o("WAWebMessageEditBotGroupMetadata").getOwnEditBotGroupMetadata(e);
                const { botGroupParticipant, botGroupParticipants } = t;
                return babelHelpers.extends({}, e, {
                    botGroupParticipant: botGroupParticipant ?? null,
                    botGroupParticipants: botGroupParticipants ?? null
                });
            } catch (error) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] own edit BotGroupMetadata failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("message-edit-own-bot-group-metadata-failed");
                return e;
            }
        });
        return H.apply(this, arguments);
    }
    function G(editedMsgData, parentMsg, protocolMsg) {
        if (parentMsg.id.remote.isGroup()) {
            const a = protocolMsg.botResponseTargetId != null;
            if (!(protocolMsg.botGroupParticipants == null && !a)) {
                editedMsgData.botGroupParticipant = protocolMsg.botGroupParticipant ?? null;
                editedMsgData.botGroupParticipants = protocolMsg.botGroupParticipants ?? null;
            }
        }
    }
    function z(e) {
        e.forEach(({ editedMsgData, isLatest, parentMsg })=>{
            if (!(!isLatest || editedMsgData.botGroupParticipants === undefined)) {
                try {
                    j(parentMsg.id, editedMsgData.botGroupParticipants, editedMsgData.botGroupParticipant);
                } catch (error) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[message-edit] bot group gossip cache update failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("message-edit-bot-group-gossip-cache-failed");
                }
            }
        });
    }
    function j(e, botGroupParticipants, botGroupParticipant) {
        const r = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(botGroupParticipants, botGroupParticipant);
        [
            e,
            o("WAWebLidMigrationUtils").getAlternateMsgKey(e)
        ].forEach((e)=>{
            if (e != null) {
                if (r == null) {
                    o("WAWebMsmsgMsgSecretCache").msmsgBotGroupGossipDataCache.deleteMsmsgBotGroupGossipDataFromCache(e.toString());
                    return;
                }
                o("WAWebMsmsgMsgSecretCache").msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(e.toString(), r.participants, r.isLegacySingular);
            }
        });
    }
    function K(e) {
        return Q.apply(this, arguments);
    }
    function Q() {
        Q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const n = new Map;
            for (const r of e){
                const { mentionOfMe, parentMsg } = r;
                const l = parentMsg.id.remote.toString();
                if (mentionOfMe) {
                    switch(mentionOfMe){
                        case b.Removed:
                            {
                                const s = parentMsg.id.toString();
                                let u = t.get(l);
                                if (!u) {
                                    u = [];
                                    t.set(l, u);
                                }
                                u.push(s);
                                break;
                            }
                        case b.Added:
                            {
                                let c = n.get(l);
                                if (!c) {
                                    c = [];
                                    n.set(l, c);
                                }
                                const d = {
                                    id: parentMsg.id.toString(),
                                    timestamp: parentMsg.t
                                };
                                c.push(d);
                            }
                    }
                }
            }
            if (t.size) {
                yield o("WAWebApiChatUnreadMention").removeUnreadMentionChat(t);
            }
            if (n.size) {
                yield o("WAWebApiChatUnreadMention").addUnreadMentionChat(n);
            }
        });
        return Q.apply(this, arguments);
    }
    function X(e) {
        const t = o("WAWebMsgStoreExtensions").omitColumnsPreservedAcrossEdits(o("WAWebDBMessageSerialization").dbRowFromMessage(e));
        const e_rowId = e.rowId;
        if (e_rowId == null || !o("WAWebGroupAgentRichResponseLinkIndex").shouldIndexGroupAgentRichResponseLink(e, e.id.remote.toString())) {
            return t;
        }
        return babelHelpers.extends({}, t, {
            hasLink: e_rowId
        });
    }
    l.EditedMentionOfMe = b;
    l.processEditProtocolMsgs = v;
    l.processEditProtocolMsgsWithOutcomes = R;
    l.updateMessageEditsLocally = E;
    l.generateMessageEdit = F;
}, 98);