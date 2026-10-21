__d("WAWebMediaPrepSendToChat", [
    "JSResourceForInteraction",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBotBaseGating",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaEntry",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaPrepHelpers",
    "WAWebMediaPrepMediaProps",
    "WAWebMediaTypes",
    "WAWebMediaUpdateMsg",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNullFunc",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSpoilerFormatRegex",
    "WAWebWamEnumMessageSendResultType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "requireDeferred"
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
    const g = r("requireDeferred")("WAWebSendStatusMsgAction").__setRef("WAWebMediaPrepSendToChat");
    const signal = new AbortController().signal;
    const y = r("err")("upload failed: retryable, auto-retrying");
    const C = 3;
    const b = ({ baseProps, chat, options, prep })=>{
        options.chatWid = chat.id;
        options.downloadOrigin = o("WAWebMediaPrepHelpers").getDownloadOriginForChat(chat, baseProps);
        options.isNewsletterMsg = o("WAWebChatGetters").getIsNewsletter(chat);
        return r("WAWebMediaPrepMediaProps")(prep, options);
    };
    function v(e) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, earlyUpload, options, prep }) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Media:sendToChat chat ",
                ""
            ])), chat.id.toLogString());
            try {
                if (!chat.id.isStatus()) {
                    const L = yield o("WAWebSchemaChat").getChatTable().get(chat.id.toString());
                    if (L == null) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "sendMediaMsgToChat: chat ",
                            " not in DB. lid: ",
                            ""
                        ])), chat.id.toLogString(), chat.accountLid?.toLogString()).sendLogs("send-media-chat-not-found").tags("missing-lid");
                    } else {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "sendMediaMsgToChat: chat ",
                            " found in DB. has account lid: ",
                            ""
                        ])), chat.id.toLogString(), L.accountLid != null);
                    }
                }
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendMediaMsgToChat: failed to check if chat exists"
                ])));
            }
            const { caption, footer } = options;
            const T = options.quotedMsg ? options.quotedMsg.msgContextInfo(chat.id) : {};
            const D = options.productMsgOptions ?? {};
            const x = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(chat);
            const { afterReadDuration, ephemeralDuration } = x;
            const ephemeralDuration_1 = o("WAWebChatEphemerality").isEphemeralSettingOn(chat) ? ephemeralDuration : undefined;
            const ephemeralSettingTimestamp = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(chat);
            const disappearingModeInitiator = o("WAWebChatEphemerality").getDisappearingModeInitiator(chat);
            const isSpoiler = o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(caption ?? null) && o("WAWebABProps").getABPropConfigValue("is_spoiler_rich_format_sender_enabled");
            let F;
            let O = false;
            if (chat.isCAGAdmin()) {
                O = true;
            }
            const B = options.type ?? prep.baseType;
            if (o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() && o("WAWebMessagePluginGenerateReportingTokenContent").isMsgTypeReportingTokenCompatible(B)) {
                O = true;
            }
            const W = chat.id.isBot() && (o("WAWebBotBaseGating").isBotEnabled() || chat.id.isSupportAgentBot());
            if (W) {
                O = true;
            }
            if (O) {
                F = self.crypto.getRandomValues(new Uint8Array(32));
            }
            const baseProps = babelHelpers.extends({}, (yield o("WAWebMsgDataUtils").genOutgoingMsgData(chat, B)), {
                type: B,
                caption,
                footer,
                quotedMsg: T.quotedMsg,
                quotedParticipant: T.quotedParticipant,
                quotedStanzaID: T.quotedStanzaID,
                quotedRemoteJid: T.quotedRemoteJid,
                mentionedJidList: options.mentionedJidList,
                groupMentions: options.groupMentions,
                isForwarded: options.isForwarded,
                forwardingScore: options.forwardingScore,
                forwardedNewsletterMessageInfo: options.forwardedNewsletterMessageInfo,
                forwardedAiBotMessageInfo: options.forwardedAiBotMessageInfo,
                aiProvenance: options.aiProvenance,
                multicast: options.multicast,
                forwardedFromWeb: options.forwardedFromWeb,
                ctwaContext: options.ctwaContext,
                ephemeralDuration: ephemeralDuration_1,
                ephemeralSettingTimestamp,
                disappearingModeInitiator,
                afterReadDuration,
                isSpoiler,
                messageSecret: F,
                botPersonaId: options.botPersonaId,
                aiMediaCollectionInfo: options.aiMediaCollectionInfo,
                botMetricsMetadata: options.botMetricsMetadata,
                aiThreadInfo: options.aiThreadInfo,
                isAvatar: options.isAvatar,
                isAiSticker: options.isAiSticker,
                stickerAudio: options.stickerAudio,
                viewMode: options.viewMode,
                parentMsgKey: options.parentMsgKey,
                associationType: options.associationType,
                pairedMediaType: options.pairedMediaType,
                isQuestion: options.isQuestion,
                questionReplyQuotedMessage: options.questionReplyQuotedMessage,
                interactiveAnnotations: options.interactiveAnnotations,
                threadIds: options.threadId != null ? [
                    options.threadId
                ] : undefined,
                statusAttributions: options.statusAttributions,
                isScheduledMsg: options.isScheduledMsg,
                scheduledTimestampS: options.scheduledTimestampS
            }, D);
            if (options.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
                baseProps.description = options.description;
                baseProps.isCaptionByUser = !!options.caption;
                baseProps.thumbnailSha256 = options.thumbnailSha256;
                baseProps.stickers = options.stickers;
                baseProps.stickerPackPublisher = options.publisher;
                baseProps.size = options.fileLength ?? 0;
                baseProps.stickerPackId = options.stickerPackId;
                baseProps.thumbnailDirectPath = options.thumbnailDirectPath;
                baseProps.thumbnailEncSha256 = options.thumbnailEncSha256;
                baseProps.trayIconFileName = options.trayIconFileName;
                baseProps.stickerPackSize = options.stickerPackSize;
            }
            if (options.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT && options.caption) {
                baseProps.isCaptionByUser = true;
            }
            if (options.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                baseProps.nativeFlowInteractiveMsg = options.nativeFlowInteractiveMsg;
                baseProps.nativeFlowName = options.nativeFlowName;
                baseProps.interactiveHeader = options.interactiveHeader;
                baseProps.interactiveType = options.interactiveType;
                baseProps.interactivePayload = options.interactivePayload;
            }
            if (options.isWamoSub === true) {
                baseProps.isWamoSub = true;
            }
            R(options.onMsgKeyCreated, baseProps.id);
            let V;
            let H;
            function G(e) {
                return z.apply(this, arguments);
            }
            function z() {
                z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    V = e;
                    let options_aiProvenance = options.aiProvenance;
                    if (options.aiProvenancePromise != null) {
                        options_aiProvenance = yield options.aiProvenancePromise.catch(o("WAWebNullFunc").returnNull);
                    }
                    const e_mediaObject = e.mediaObject;
                    options.earlyUpload = earlyUpload;
                    options.isMediaCryptoExpectedForChat = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForChat(chat);
                    options.uploadOriginForChat = r("WAWebMediaGetUploadOriginForChat")(chat);
                    const s = ()=>o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep(e, options);
                    const u = o("WAPromiseBackoffs").createTimer({
                        algo: {
                            type: "exponential",
                            first: 1000,
                            base: 2
                        },
                        max: 3000,
                        jitter: 0.5
                    });
                    u();
                    const c = yield o("WABackoffDelay").backoff({
                        delay: function() {
                            return u();
                        },
                        signal,
                        retries: C
                    }, (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                            const i = e_mediaObject?.loadedSize ?? 0;
                            const l = yield s();
                            const u = e_mediaObject?.loadedSize ?? 0;
                            const c = u > i;
                            if (!l.mediaResult.mediaEntry && l.mediaResult.kind === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR && e_mediaObject?.uploadStage === o("WAWebMediaTypes").UploadStage.NEED_UPLOAD && c) {
                                if (t < C) {
                                    if (e_mediaObject != null) {
                                        e_mediaObject.consolidate({
                                            uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING
                                        });
                                    }
                                }
                                return e(y);
                            }
                            return l;
                        });
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    })());
                    const { body, mediaResult } = c;
                    const { kind, mediaEntry } = mediaResult;
                    const c_mmsThumbnailData = c.mmsThumbnailData;
                    H = kind;
                    if (!mediaEntry) {
                        throw r("err")("upload failed: media entry was not created");
                    }
                    yield r("WAWebMediaUpdateMsg")(V, babelHelpers.extends({
                        aiProvenance: options_aiProvenance,
                        deprecatedMms3Url: mediaEntry.deprecatedMms3Url,
                        directPath: mediaEntry.directPath,
                        mediaKey: mediaEntry.getMediaKey(),
                        mediaKeyTimestamp: mediaEntry.getMediaKeyTimestamp(),
                        filehash: r("nullthrows")(e_mediaObject).filehash,
                        encFilehash: mediaEntry.getEncfilehash(),
                        size: r("nullthrows")(e_mediaObject).size,
                        streamingSidecar: mediaEntry.sidecar,
                        firstFrameSidecar: mediaEntry.firstFrameSidecar,
                        body,
                        stickerSentTs: o("WATimeUtils").unixTimeMs(),
                        mediaHandle: mediaEntry instanceof o("WAWebMediaEntry").UnencryptedMediaEntry ? mediaEntry.handle : null,
                        metadataUrl: mediaEntry instanceof o("WAWebMediaEntry").UnencryptedMediaEntry && mediaEntry.metadataUrl != null && o("WAWebChannelVideoServerTranscodeGating").isChannelVideoServerTranscodeUploadEnabled() ? mediaEntry.metadataUrl : null,
                        dashManifestUrl: mediaEntry instanceof o("WAWebMediaEntry").UnencryptedMediaEntry && mediaEntry.dashManifestUrl != null && o("WAWebChannelVideoServerTranscodeGating").isChannelVideoServerTranscodeUploadEnabled() ? mediaEntry.dashManifestUrl : undefined
                    }, c_mmsThumbnailData));
                    return V;
                });
                return z.apply(this, arguments);
            }
            let j;
            if (options.addEvenWhilePreparing === true) {
                const K = options.placeholderProps || {};
                const mediaMsgData = babelHelpers.extends({}, K, baseProps);
                const X = function(t) {
                    V = t;
                    return b({
                        baseProps,
                        chat,
                        options,
                        prep
                    }).then((e)=>r("WAWebMediaUpdateMsg")(V, e)).then(()=>G(V));
                };
                if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && o("WAWebChatGetters").getIsNewsletter(chat)) {
                    if (options.isNewsletterStatus === true) {
                        j = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction").__setRef("WAWebMediaPrepSendToChat").load().then((e)=>e.sendNewsletterStatusMediaMsgAction(mediaMsgData, X, options.statusPostFunnelContext));
                    } else {
                        j = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(chat, mediaMsgData, X);
                    }
                } else if (chat.id.isStatus()) {
                    j = g.load().then((e)=>e.sendStatusMediaMsgAction({
                            beforeSend: X,
                            funnelContext: options.statusPostFunnelContext,
                            mediaMsgData
                        }));
                } else {
                    j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, mediaMsgData, X)[1];
                }
            } else {
                const Y = b({
                    baseProps,
                    chat,
                    options,
                    prep
                }).then((e)=>{
                    const t = options.useBasePropsType === true ? baseProps.type : e.type;
                    return babelHelpers.extends({}, baseProps, e, {
                        type: t
                    });
                });
                if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && o("WAWebChatGetters").getIsNewsletter(chat)) {
                    if (options.isNewsletterStatus === true) {
                        const J = yield Y;
                        j = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction").__setRef("WAWebMediaPrepSendToChat").load().then((e)=>e.sendNewsletterStatusMediaMsgAction(J, G, options.statusPostFunnelContext));
                    } else {
                        j = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(chat, (yield Y), G);
                    }
                } else {
                    if (chat.id.isStatus()) {
                        j = g.load().then((()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                                return e.sendStatusMediaMsgAction({
                                    beforeSend: G,
                                    funnelContext: options.statusPostFunnelContext,
                                    mediaMsgData: yield Y
                                });
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })());
                    } else if (baseProps.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                        j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, (yield Y), G)[1];
                    } else {
                        j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(chat, Y, G)[1];
                    }
                }
            }
            return j.then((result)=>({
                    result,
                    error: null
                })).catch((error)=>({
                    result: null,
                    error
                })).then(({ error, result })=>{
                if (result?.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK) {
                    if (V.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER && V.isAvatar !== true) {
                        o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.addStickerWithMediaData(V);
                    }
                    return {
                        messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
                        msg: V
                    };
                }
                if (V) {
                    V.ack = o("WAWebAck").ACK.FAILED;
                }
                const a = V?.mediaObject?.uploadStage;
                if (V && o("WAWebMmsMediaTypes").getMsgMediaType(V) === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
                    const i = a || "undefined";
                    if (H === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR) {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "Sticker:sendToChat failed with expressions panel enabled"
                        ]))).tags("non-sad").sendLogs(`sticker-send-fail-with-expressions-panel-enabled-uploadStage-${i}`, {
                            sampling: 0.01
                        });
                    }
                }
                if (H === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Media:sendToChat canceled"
                    ])));
                    V.wamMessageSendReporter?.postFailure({
                        result: o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED,
                        isTerminal: true
                    });
                    return {
                        messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
                    };
                }
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Media:sendToChat err res=",
                    " stage=",
                    " kind=",
                    " err=",
                    ""
                ])), result, a, H, String(error));
                if (a != null) {
                    switch(a){
                        case o("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
                        case o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE:
                        case o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN:
                        case o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED:
                            return {
                                messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(V),
                                msg: V
                            };
                        case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                            o("WAWebCoreActionsODS").logMsgSendError();
                            o("WAWebCoreActionsODS").logMsgSendErrorUpload();
                            return {
                                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_EXPIRED,
                                msg: V
                            };
                        default:
                    }
                }
                if (H === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR) {
                    return {
                        messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(V),
                        msg: V
                    };
                }
                if (result != null) {
                    if (V != null) {
                        return babelHelpers.extends({}, result, {
                            msg: V
                        });
                    }
                    return result;
                }
                if (V && o("WAWebMmsMediaTypes").getMsgMediaType(V) === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
                    o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                        "Sticker:sendToChat failed with unknown error"
                    ]))).sendLogs("sticker-send-fail-unknown-expression-panels");
                }
                o("WAWebCoreActionsODS").logMsgSendError();
                return {
                    messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
                };
            });
        });
        return S.apply(this, arguments);
    }
    function R(onMsgKeyCreated, n) {
        try {
            onMsgKeyCreated?.(n);
        } catch (error) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Media:sendToChat onMsgKeyCreated failed"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("media-send-on-msg-key-created-failed");
        }
    }
    l.default = v;
}, 98);