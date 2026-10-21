__d("WAWebMsgModel", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBaseModel",
    "WAWebBizBotProfileUtils",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTypes",
    "WAWebBusinessHSMTypes",
    "WAWebCarouselCardsCollection",
    "WAWebChangePresenceHandlerAction",
    "WAWebChatCollection",
    "WAWebChatGetMessage",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebContactCollection",
    "WAWebDBUpdateMessageTable",
    "WAWebDebounce",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendMsgGetters",
    "WAWebInteractiveMessageCarouselConstants",
    "WAWebMedia",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "WAWebMessageAssociationUIUtils",
    "WAWebMessageReceiptUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModelPropUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNotificationsMsgNotification",
    "WAWebPinInChatCollection",
    "WAWebPromiseQueue",
    "WAWebSendMsgRecordAction",
    "WAWebStarredMsgCollection",
    "WAWebSuspendedGroupMediaDownloadFailureModal.react",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebViewOnceState",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "react"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ack",
        "author",
        "broadcast",
        "buttons",
        "from",
        "hatchMetadataSync",
        "id",
        "invis",
        "isNewMsg",
        "latestEditMsgKey",
        "latestEditSenderTimestampMs",
        "multicast",
        "notifyName",
        "quotedMsg",
        "quotedParticipant",
        "quotedRemoteJid",
        "quotedStanzaID",
        "quotedType",
        "recipients",
        "recvFresh",
        "replyButtons",
        "senderObj",
        "star",
        "t",
        "to"
    ];
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    const h = g || (g = o("react"));
    const y = ((t)=>{
        function a(...a) {
            let e;
            e = t.call(this, ...a) || this;
            e.id = o("WAWebBaseModel").prop();
            e.rowId = o("WAWebBaseModel").prop();
            e.serverId = o("WAWebBaseModel").prop();
            e.parentServerId = o("WAWebBaseModel").prop();
            e.questionResponseInfo = o("WAWebBaseModel").prop();
            e.viewCount = o("WAWebBaseModel").prop();
            e.viewed = o("WAWebBaseModel").prop(false);
            e.body = o("WAWebBaseModel").prop();
            e.type = o("WAWebBaseModel").prop();
            e.typeFlag = o("WAWebBaseModel").prop();
            e.subtype = o("WAWebBaseModel").prop();
            e.t = o("WAWebBaseModel").prop();
            e.clientReceivedTsMillis = o("WAWebBaseModel").prop();
            e.serverStoreTimeMicros = o("WAWebBaseModel").prop();
            e.revokeTimestamp = o("WAWebBaseModel").prop();
            e.notifyName = o("WAWebBaseModel").prop();
            e.from = o("WAWebBaseModel").prop();
            e.to = o("WAWebBaseModel").prop();
            e.author = o("WAWebBaseModel").prop();
            e.ack = o("WAWebBaseModel").prop();
            e.invis = o("WAWebBaseModel").prop();
            e.isNewMsg = o("WAWebBaseModel").prop();
            e.star = o("WAWebBaseModel").prop(false);
            e.kicKey = o("WAWebBaseModel").prop();
            e.kicState = o("WAWebBaseModel").prop();
            e.kicTimestampMs = o("WAWebBaseModel").prop();
            e.kicNotified = o("WAWebBaseModel").prop(false);
            e.keepType = o("WAWebBaseModel").prop();
            e.keptMessageKey = o("WAWebBaseModel").prop();
            e.keptCount = o("WAWebBaseModel").prop();
            e.recvFresh = o("WAWebBaseModel").prop();
            e.caption = o("WAWebBaseModel").prop();
            e.interactiveAnnotations = o("WAWebBaseModel").prop();
            e.lastMusicBlocklistUpdate = o("WAWebBaseModel").prop();
            e.contextInfo = o("WAWebBaseModel").prop();
            e.statusAttributions = o("WAWebBaseModel").prop();
            e.statusAudienceMetadata = o("WAWebBaseModel").prop();
            e.clientUrl = o("WAWebBaseModel").prop();
            e.loc = o("WAWebBaseModel").prop();
            e.lat = o("WAWebBaseModel").prop();
            e.lng = o("WAWebBaseModel").prop();
            e.isLive = o("WAWebBaseModel").prop();
            e.accuracy = o("WAWebBaseModel").prop();
            e.speed = o("WAWebBaseModel").prop();
            e.degrees = o("WAWebBaseModel").prop();
            e.comment = o("WAWebBaseModel").prop();
            e.sequence = o("WAWebBaseModel").prop();
            e.shareDuration = o("WAWebBaseModel").prop();
            e.finalLat = o("WAWebBaseModel").prop();
            e.finalLng = o("WAWebBaseModel").prop();
            e.finalAccuracy = o("WAWebBaseModel").prop();
            e.finalThumbnail = o("WAWebBaseModel").prop();
            e.finalSpeed = o("WAWebBaseModel").prop();
            e.finalDegrees = o("WAWebBaseModel").prop();
            e.finalTimeOffset = o("WAWebBaseModel").prop();
            e.deprecatedMms3Url = o("WAWebBaseModel").prop();
            e.directPath = o("WAWebBaseModel").prop();
            e.mimetype = o("WAWebBaseModel").prop();
            e.duration = o("WAWebBaseModel").prop();
            e.filehash = o("WAWebBaseModel").prop();
            e.encFilehash = o("WAWebBaseModel").prop();
            e.size = o("WAWebBaseModel").prop();
            e.filename = o("WAWebBaseModel").prop();
            e.streamingSidecar = o("WAWebBaseModel").prop();
            e.mediaKey = o("WAWebBaseModel").prop();
            e.mediaKeyTimestamp = o("WAWebBaseModel").prop();
            e.pageCount = o("WAWebBaseModel").prop();
            e.isGif = o("WAWebBaseModel").prop();
            e.gifAttribution = o("WAWebBaseModel").prop();
            e.accessibilityLabel = o("WAWebBaseModel").prop();
            e.isViewOnce = o("WAWebBaseModel").prop();
            e.streamable = o("WAWebBaseModel").prop();
            e.width = o("WAWebBaseModel").prop();
            e.height = o("WAWebBaseModel").prop();
            e.thumbnailDirectPath = o("WAWebBaseModel").prop();
            e.thumbnailSha256 = o("WAWebBaseModel").prop();
            e.thumbnailEncSha256 = o("WAWebBaseModel").prop();
            e.thumbnailHeight = o("WAWebBaseModel").prop();
            e.thumbnailWidth = o("WAWebBaseModel").prop();
            e.metadataUrl = o("WAWebBaseModel").prop();
            e.waveform = o("WAWebBaseModel").prop();
            e.staticUrl = o("WAWebBaseModel").prop();
            e.stickerPackId = o("WAWebBaseModel").prop();
            e.stickerPackName = o("WAWebBaseModel").prop();
            e.stickerPackPublisher = o("WAWebBaseModel").prop();
            e.dashManifestUrl = o("WAWebBaseModel").prop();
            e.stickers = o("WAWebBaseModel").prop();
            e.trayIconFileName = o("WAWebBaseModel").prop();
            e.stickerPackSize = o("WAWebBaseModel").prop();
            e.mediaHandle = o("WAWebBaseModel").prop();
            e.scanLengths = o("WAWebBaseModel").prop();
            e.scansSidecar = o("WAWebBaseModel").prop();
            e.isFromTemplate = o("WAWebBaseModel").prop(false);
            e.devicesAdded = o("WAWebBaseModel").prop();
            e.devicesRemoved = o("WAWebBaseModel").prop();
            e.isThisDeviceAdded = o("WAWebBaseModel").prop();
            e.firstFrameLength = o("WAWebBaseModel").prop();
            e.firstFrameSidecar = o("WAWebBaseModel").prop();
            e.isAnimated = o("WAWebBaseModel").prop();
            e.isAiSticker = o("WAWebBaseModel").prop();
            e.isLottie = o("WAWebBaseModel").prop();
            e.mediaPngThumbnail = o("WAWebBaseModel").prop();
            e.matchedText = o("WAWebBaseModel").prop();
            e.thumbnail = o("WAWebBaseModel").prop();
            e.thumbnailHQ = o("WAWebBaseModel").prop();
            e.richPreviewType = o("WAWebBaseModel").prop();
            e.doNotPlayInline = o("WAWebBaseModel").prop();
            e.rcat = o("WAWebBaseModel").prop();
            e.faviconMMSMetadata = o("WAWebBaseModel").prop();
            e.isScheduledMsg = o("WAWebBaseModel").prop();
            e.scheduledTimestampS = o("WAWebBaseModel").prop();
            e.title = o("WAWebBaseModel").prop();
            e.description = o("WAWebBaseModel").prop();
            e.isAdsMedia = o("WAWebBaseModel").prop(false);
            e.paymentLinkMetadata = o("WAWebBaseModel").prop();
            e.qrUrl = o("WAWebBaseModel").prop();
            e.businessOwnerJid = o("WAWebBaseModel").prop();
            e.productId = o("WAWebBaseModel").prop();
            e.currencyCode = o("WAWebBaseModel").prop();
            e.priceAmount1000 = o("WAWebBaseModel").prop();
            e.salePriceAmount1000 = o("WAWebBaseModel").prop();
            e.retailerId = o("WAWebBaseModel").prop();
            e.url = o("WAWebBaseModel").prop();
            e.productImageCount = o("WAWebBaseModel").prop();
            e.sessionId = o("WAWebBaseModel").prop();
            e.pollName = o("WAWebBaseModel").prop();
            e.pollLoggingId = o("WAWebBaseModel").prop();
            e.pollOptions = o("WAWebBaseModel").prop();
            e.pollSelectableOptionsCount = o("WAWebBaseModel").prop();
            e.pollInvalidated = o("WAWebBaseModel").prop(false);
            e.pollContentType = o("WAWebBaseModel").prop();
            e.pollType = o("WAWebBaseModel").prop();
            e.correctOptionIndex = o("WAWebBaseModel").prop();
            e.pollEndTime = o("WAWebBaseModel").prop();
            e.pollHideVoterNames = o("WAWebBaseModel").prop();
            e.pollAllowAddOption = o("WAWebBaseModel").prop();
            e.pollNameHashHistory = o("WAWebBaseModel").prop();
            e.isSentCagPollCreation = o("WAWebBaseModel").prop(false);
            e.pollUpdateParentKey = o("WAWebBaseModel").prop();
            e.encPollVote = o("WAWebBaseModel").prop();
            e.selectedOptionLocalIds = o("WAWebBaseModel").prop();
            e.pollVotesSnapshot = o("WAWebBaseModel").prop();
            e.quarantineExtractedText = o("WAWebBaseModel").prop();
            e.quarantineOriginalProtobuf = o("WAWebBaseModel").prop();
            e.senderTimestampMs = o("WAWebBaseModel").prop();
            e.latestEditMsgKey = o("WAWebBaseModel").prop(null);
            e.latestEditSenderTimestampMs = o("WAWebBaseModel").prop(null);
            e.editMsgType = o("WAWebBaseModel").prop();
            e.recipients = o("WAWebBaseModel").prop();
            e.broadcast = o("WAWebBaseModel").prop();
            e.quotedMsg = o("WAWebBaseModel").prop();
            e.quotedStanzaID = o("WAWebBaseModel").prop();
            e.quotedRemoteJid = o("WAWebBaseModel").prop();
            e.quotedParticipant = o("WAWebBaseModel").prop();
            e.quotedGroupSubject = o("WAWebBaseModel").prop();
            e.quotedParentGroupJid = o("WAWebBaseModel").prop();
            e.quotedType = o("WAWebBaseModel").prop();
            e.mentionedJidList = o("WAWebBaseModel").prop();
            e.reporterJidList = o("WAWebBaseModel").prop();
            e.groupMentions = o("WAWebBaseModel").prop();
            e.footer = o("WAWebBaseModel").prop();
            e.hydratedButtons = o("WAWebBaseModel").prop();
            e.buttons = o("WAWebBaseModel").session();
            e.hsmTag = o("WAWebBaseModel").prop();
            e.hsmCategory = o("WAWebBaseModel").prop();
            e.templateId = o("WAWebBaseModel").prop();
            e.eventName = o("WAWebBaseModel").prop();
            e.isEventCanceled = o("WAWebBaseModel").prop(false);
            e.eventDescription = o("WAWebBaseModel").prop();
            e.eventJoinLink = o("WAWebBaseModel").prop();
            e.eventStartTime = o("WAWebBaseModel").prop();
            e.eventEndTime = o("WAWebBaseModel").prop();
            e.eventLocation = o("WAWebBaseModel").prop();
            e.eventInvalidated = o("WAWebBaseModel").prop(false);
            e.eventIsScheduledCall = o("WAWebBaseModel").prop();
            e.eventExtraGuestsAllowed = o("WAWebBaseModel").prop();
            e.sharableEventInviteId = o("WAWebBaseModel").prop();
            e.sharableEventInviteTitle = o("WAWebBaseModel").prop();
            e.sharableEventInviteStartTime = o("WAWebBaseModel").prop();
            e.sharableEventInviteEndTime = o("WAWebBaseModel").prop();
            e.sharableEventInviteCaption = o("WAWebBaseModel").prop();
            e.sharableEventInviteIsCanceled = o("WAWebBaseModel").prop();
            e.sharableEventInviteJpegThumbnail = o("WAWebBaseModel").prop();
            e.sharableEventInviteCallLink = o("WAWebBaseModel").prop();
            e.musicData = o("WAWebBaseModel").prop();
            e.selectedId = o("WAWebBaseModel").prop();
            e.selectedIndex = o("WAWebBaseModel").prop();
            e.selectedCarouselCardIndex = o("WAWebBaseModel").prop();
            e.multicast = o("WAWebBaseModel").prop();
            e.urlText = o("WAWebBaseModel").prop();
            e.urlNumber = o("WAWebBaseModel").prop();
            e.statusMentioned = o("WAWebBaseModel").prop();
            e.isWamoSub = o("WAWebBaseModel").prop();
            e.hasPaidPartnershipLabel = o("WAWebBaseModel").prop();
            e.aiProvenance = o("WAWebBaseModel").prop();
            e.experienceIds = o("WAWebBaseModel").prop();
            e.clearMedia = o("WAWebBaseModel").prop();
            e.isVcardOverMmsDocument = o("WAWebBaseModel").prop(false);
            e.isCaptionByUser = o("WAWebBaseModel").prop();
            e.vcardList = o("WAWebBaseModel").prop();
            e.vcardFormattedName = o("WAWebBaseModel").prop();
            e.revokeSender = o("WAWebBaseModel").prop();
            e.protocolMessageKey = o("WAWebBaseModel").prop();
            e.futureproofBuffer = o("WAWebBaseModel").prop();
            e.futureproofParams = o("WAWebBaseModel").prop();
            e.futureproofType = o("WAWebBaseModel").prop();
            e.futureproofSubtype = o("WAWebBaseModel").prop();
            e.templateParams = o("WAWebBaseModel").prop();
            e.textColor = o("WAWebBaseModel").prop();
            e.backgroundColor = o("WAWebBaseModel").prop();
            e.font = o("WAWebBaseModel").prop();
            e.cannotBeRanked = o("WAWebBaseModel").prop();
            e.canBeReshared = o("WAWebBaseModel").prop();
            e.campaignId = o("WAWebBaseModel").prop();
            e.campaignDuration = o("WAWebBaseModel").prop();
            e.actionLink = o("WAWebBaseModel").prop();
            e.statusPSAReadTimestamp = o("WAWebBaseModel").prop();
            e.crosspostingInfo = o("WAWebBaseModel").prop();
            e.isForwarded = o("WAWebBaseModel").prop(false);
            e.isQuestion = o("WAWebBaseModel").prop(false);
            e.isSpoiler = o("WAWebBaseModel").prop(false);
            e.questionReplyQuotedMessage = o("WAWebBaseModel").prop(null);
            e.questionResponsesCount = o("WAWebBaseModel").prop(0);
            e.readQuestionResponsesCount = o("WAWebBaseModel").prop(0);
            e.forwardsCount = o("WAWebBaseModel").prop(0);
            e.forwardingScore = o("WAWebBaseModel").prop();
            e.labels = o("WAWebBaseModel").prop();
            e.hasReaction = o("WAWebBaseModel").prop(false);
            e.newsletterAdminProfile = o("WAWebBaseModel").prop(null);
            e.paymentCurrency = o("WAWebBaseModel").prop();
            e.paymentAmount1000 = o("WAWebBaseModel").prop();
            e.paymentMessageReceiverJid = o("WAWebBaseModel").prop();
            e.paymentTransactionTimestamp = o("WAWebBaseModel").prop();
            e.paymentStatus = o("WAWebBaseModel").prop();
            e.paymentTxnStatus = o("WAWebBaseModel").prop();
            e.paymentNoteMsg = o("WAWebBaseModel").prop();
            e.paymentRequestMessageKey = o("WAWebBaseModel").prop();
            e.paymentExpiryTimestamp = o("WAWebBaseModel").prop();
            e.paymentInviteServiceType = o("WAWebBaseModel").prop();
            e.ephemeralDuration = o("WAWebBaseModel").prop();
            e.ephemeralSettingTimestamp = o("WAWebBaseModel").prop();
            e.ephemeralOutOfSync = o("WAWebBaseModel").prop();
            e.ephemeralSharedSecret = o("WAWebBaseModel").prop();
            e.disappearingModeInitiator = o("WAWebBaseModel").prop();
            e.ephemeralSettingUser = o("WAWebBaseModel").prop();
            e.disappearingModeTrigger = o("WAWebBaseModel").prop();
            e.disappearingModeInitiatedByMe = o("WAWebBaseModel").prop();
            e.afterReadDuration = o("WAWebBaseModel").prop();
            e.expiredTimestamp = o("WAWebBaseModel").prop();
            e.parentMsgKey = o("WAWebBaseModel").prop();
            e.associationType = o("WAWebBaseModel").prop();
            e.pairedMediaType = o("WAWebBaseModel").prop();
            e.viewMode = o("WAWebBaseModel").prop();
            e.messageSecret = o("WAWebBaseModel").prop();
            e.originalSelfAuthor = o("WAWebBaseModel").prop();
            e.bizPrivacyStatus = o("WAWebBaseModel").prop();
            e.privacyModeWhenSent = o("WAWebBaseModel").prop();
            e.verifiedBizName = o("WAWebBaseModel").prop();
            e.inviteCode = o("WAWebBaseModel").prop();
            e.inviteCodeExp = o("WAWebBaseModel").prop();
            e.inviteGrp = o("WAWebBaseModel").prop();
            e.inviteGrpName = o("WAWebBaseModel").prop();
            e.inviteGrpJpegThum = o("WAWebBaseModel").prop();
            e.inviteGrpType = o("WAWebBaseModel").prop();
            e.threadIds = o("WAWebBaseModel").prop();
            e.aiThreadInfo = o("WAWebBaseModel").prop();
            e.sellerJid = o("WAWebBaseModel").prop();
            e.message = o("WAWebBaseModel").prop();
            e.orderTitle = o("WAWebBaseModel").prop();
            e.itemCount = o("WAWebBaseModel").prop();
            e.orderId = o("WAWebBaseModel").prop();
            e.surface = o("WAWebBaseModel").prop();
            e.status = o("WAWebBaseModel").prop();
            e.token = o("WAWebBaseModel").prop();
            e.totalAmount1000 = o("WAWebBaseModel").prop();
            e.totalCurrencyCode = o("WAWebBaseModel").prop();
            e.catalogType = o("WAWebBaseModel").prop();
            e.historySyncMetaData = o("WAWebBaseModel").prop();
            e.isSendFailure = o("WAWebBaseModel").prop();
            e.errorCode = o("WAWebBaseModel").prop();
            e.appStateSyncKeyShare = o("WAWebBaseModel").prop();
            e.appStateSyncKeyRequest = o("WAWebBaseModel").prop();
            e.appStateFatalExceptionNotification = o("WAWebBaseModel").prop();
            e.peerDataOperationRequestMessage = o("WAWebBaseModel").prop();
            e.peerDataOperationRequestResponseMessage = o("WAWebBaseModel").prop();
            e.broadcastParticipants = o("WAWebBaseModel").prop();
            e.broadcastEphSettings = o("WAWebBaseModel").prop();
            e.broadcastId = o("WAWebBaseModel").prop();
            e.smbClientCampaignId = o("WAWebBaseModel").prop();
            e.ctwaContext = o("WAWebBaseModel").prop();
            e.signupContext = o("WAWebBaseModel").prop();
            e.utm = o("WAWebBaseModel").session();
            e.list = o("WAWebBaseModel").prop();
            e.listResponse = o("WAWebBaseModel").prop();
            e.productListItemCount = o("WAWebBaseModel").prop();
            e.productHeaderImageRejected = o("WAWebBaseModel").prop(false);
            e.agentId = o("WAWebBaseModel").prop();
            e.lastPlaybackProgress = o("WAWebBaseModel").prop(0);
            e.local = o("WAWebBaseModel").session(false);
            e.search = o("WAWebBaseModel").session();
            e.$MsgImpl$p_1 = o("WAWebBaseModel").session();
            e.$MsgImpl$p_2 = o("WAWebBaseModel").session(function() {
                return new Map;
            });
            e.startOfDay = o("WAWebBaseModel").session();
            e.startOfDaySkew = o("WAWebBaseModel").session();
            e.quotedMsgKey = o("WAWebBaseModel").session();
            e.isQuotedMsgAvailable = o("WAWebBaseModel").session(true);
            e.fromQuotedMsg = o("WAWebBaseModel").session(false);
            e.senderObj = o("WAWebBaseModel").session();
            e.mediaData = o("WAWebBaseModel").session();
            e.forwardedFromWeb = o("WAWebBaseModel").session(false);
            e.nonce = o("WAWebBaseModel").session();
            e.squelch = o("WAWebBaseModel").session();
            e.wamMessageSendReporter = o("WAWebBaseModel").session();
            e.wamMessageSendPerfReporter = o("WAWebBaseModel").session();
            e.pendingDeleteForMe = o("WAWebBaseModel").session(false);
            e.isFadingOut = o("WAWebBaseModel").session(false);
            e.isDynamicReplyButtonsMsg = o("WAWebBaseModel").prop(false);
            e.dynamicReplyButtons = o("WAWebBaseModel").prop();
            e.replyButtons = o("WAWebBaseModel").session();
            e.buttonsResponse = o("WAWebBaseModel").prop();
            e.selectedButtonId = o("WAWebBaseModel").prop();
            e.headerType = o("WAWebBaseModel").prop();
            e.nativeFlowName = o("WAWebBaseModel").prop();
            e.nativeFlowButtons = o("WAWebBaseModel").prop();
            e.interactiveHeader = o("WAWebBaseModel").prop();
            e.interactiveType = o("WAWebBaseModel").prop();
            e.interactivePayload = o("WAWebBaseModel").prop();
            e.bloksWidget = o("WAWebBaseModel").prop();
            e.nativeFlowInteractiveMsg = o("WAWebBaseModel").prop();
            e.carouselCardsParsed = o("WAWebBaseModel").prop();
            e.carouselCards = o("WAWebBaseModel").session();
            e.isCarouselCard = o("WAWebBaseModel").prop(false);
            e.parentMsgId = o("WAWebBaseModel").prop(null);
            e.callSilenceReason = o("WAWebBaseModel").prop(null);
            e.callOutcome = o("WAWebBaseModel").prop();
            e.isVideoCall = o("WAWebBaseModel").prop(false);
            e.callDuration = o("WAWebBaseModel").prop(null);
            e.callCreator = o("WAWebBaseModel").prop(null);
            e.callParticipants = o("WAWebBaseModel").prop(null);
            e.isCallLink = o("WAWebBaseModel").prop(null);
            e.callLinkToken = o("WAWebBaseModel").prop(null);
            e.finalCallOutcome = o("WAWebBaseModel").prop();
            e.terminatedByDeviceSwitch = o("WAWebBaseModel").prop(null);
            e.selfOtherDeviceConnected = o("WAWebBaseModel").prop(null);
            e.bytesSent = o("WAWebBaseModel").prop(null);
            e.bytesReceived = o("WAWebBaseModel").prop(null);
            e.reactionParentKey = o("WAWebBaseModel").prop();
            e.reactionText = o("WAWebBaseModel").prop();
            e.reactionTimestamp = o("WAWebBaseModel").prop();
            e.targetMessageKey = o("WAWebBaseModel").prop();
            e.encIv = o("WAWebBaseModel").prop();
            e.encPayload = o("WAWebBaseModel").prop();
            e.replyCount = o("WAWebBaseModel").prop();
            e.pinParentKey = o("WAWebBaseModel").prop();
            e.pinMessageType = o("WAWebBaseModel").prop();
            e.pinSenderTimestampMs = o("WAWebBaseModel").prop();
            e.pinExpiryDuration = o("WAWebBaseModel").prop();
            e.revokeDuration = o("WAWebBaseModel").session();
            e.isMdHistoryMsg = o("WAWebBaseModel").prop(false);
            e.stickerSentTs = o("WAWebBaseModel").prop(0);
            e.isAvatar = o("WAWebBaseModel").prop(false);
            e.stickerPremiumStatus = o("WAWebBaseModel").prop();
            e.stickerAudio = o("WAWebBaseModel").prop();
            e.emojis = o("WAWebBaseModel").prop();
            e.bizSource = o("WAWebBaseModel").prop();
            e.pmCampaignId = o("WAWebBaseModel").prop();
            e.decisionId = o("WAWebBaseModel").prop();
            e.sourceType = o("WAWebBaseModel").prop();
            e.decisionSources = o("WAWebBaseModel").prop();
            e.lastUpdateFromServerTs = o("WAWebBaseModel").prop(0);
            e.botEditType = o("WAWebBaseModel").prop();
            e.invokedBotWid = o("WAWebBaseModel").prop(null);
            e.botMessageSecret = o("WAWebBaseModel").prop();
            e.botFeedbackKind = o("WAWebBaseModel").prop();
            e.botFeedbackText = o("WAWebBaseModel").prop();
            e.botTargetSenderJid = o("WAWebBaseModel").prop();
            e.metaFrom = o("WAWebBaseModel").prop(null);
            e.botGroupParticipant = o("WAWebBaseModel").prop();
            e.botGroupParticipants = o("WAWebBaseModel").prop();
            e.bizBotType = o("WAWebBaseModel").prop(null);
            e.botPersonaId = o("WAWebBaseModel").prop();
            e.botDeepLinkToken = o("WAWebBaseModel").prop(null);
            e.aiMediaCollectionInfo = o("WAWebBaseModel").prop(null);
            e.expectedImageCount = o("WAWebBaseModel").prop(null);
            e.expectedVideoCount = o("WAWebBaseModel").prop(null);
            e.activeBotMsgStreamingInProgress = o("WAWebBaseModel").session(false);
            e.botEditTimeoutID = o("WAWebBaseModel").session();
            e.lastBotEditBodyLength = o("WAWebBaseModel").session();
            e.botEditTargetId = o("WAWebBaseModel").session();
            e.botRespOrInvocationRevokeBotWid = o("WAWebBaseModel").session(null);
            e.botResponseTargetId = o("WAWebBaseModel").prop(null);
            e.botResponseId = o("WAWebBaseModel").prop(null);
            e.botPluginType = o("WAWebBaseModel").prop(null);
            e.botPluginReferenceIndex = o("WAWebBaseModel").prop(null);
            e.botPluginSearchProvider = o("WAWebBaseModel").prop(null);
            e.botPluginSearchUrl = o("WAWebBaseModel").prop(null);
            e.botPluginSearchQuery = o("WAWebBaseModel").prop(null);
            e.botPluginMaybeParent = o("WAWebBaseModel").prop(false);
            e.botReelPluginThumbnailCdnUrl = o("WAWebBaseModel").prop(null);
            e.botMessageDisclaimerText = o("WAWebBaseModel").prop(null);
            e.botSessionTransparencyType = o("WAWebBaseModel").prop(null);
            e.botMetricsMetadata = o("WAWebBaseModel").session(null);
            e.botMsgBodyType = o("WAWebBaseModel").prop(null);
            e.botModeSelection = o("WAWebBaseModel").prop(null);
            e.botModeOverride = o("WAWebBaseModel").prop(null);
            e.isSupportAIMessage = o("WAWebBaseModel").prop();
            e.supportCitations = o("WAWebBaseModel").prop();
            e.richResponse = o("WAWebBaseModel").prop();
            e.unifiedResponse = o("WAWebBaseModel").prop();
            e.unifiedResponseRawData = o("WAWebBaseModel").prop();
            e.unifiedResponseMutationMediaList = o("WAWebBaseModel").prop();
            e.botSignatureVerificationMetadata = o("WAWebBaseModel").prop();
            e.forwardedNewsletterMessageInfo = o("WAWebBaseModel").prop();
            e.forwardedAiBotMessageInfo = o("WAWebBaseModel").prop();
            e.encryptedData = o("WAWebBaseModel").prop();
            e.newsletterAdminInviteInfo = o("WAWebBaseModel").prop();
            e.newsletterFollowerInviteInfo = o("WAWebBaseModel").prop();
            e.reportingTokenInfo = o("WAWebBaseModel").prop();
            e.reportingTokenContentInfo = o("WAWebBaseModel").prop();
            e.plainProtobufBytes = o("WAWebBaseModel").session();
            e.preMatChat = o("WAWebBaseModel").session();
            e.senderWithDevice = o("WAWebBaseModel").session();
            e.isRetry = o("WAWebBaseModel").session(false);
            e.isOffline = o("WAWebBaseModel").session(false);
            e.read = o("WAWebBaseModel").prop();
            e.memberLabelData = o("WAWebBaseModel").prop();
            e.hatchMetadataSync = o("WAWebBaseModel").prop(null);
            e.musicArtwork = o("WAWebBaseModel").prop();
            e.$MsgImpl$p_3 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.$MsgImpl$p_4 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.$MsgImpl$p_5 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.linksIndexParsed = o("WAWebBaseModel").session(0);
            e.$MsgImpl$p_6 = o("WAWebBaseModel").session();
            e.$MsgImpl$p_7 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.$MsgImpl$p_8 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.$MsgImpl$p_9 = o("WAWebBaseModel").session(function() {
                return [];
            });
            e.phoneNumbersIndexParsed = o("WAWebBaseModel").session(0);
            e.waitForPhoneUploadPromise = o("WAWebBaseModel").session();
            e.requiresDirectConnection = o("WAWebBaseModel").prop(null);
            e.isGroupStatus = o("WAWebBaseModel").prop();
            e.isNewsletterStatus = o("WAWebBaseModel").prop();
            e.isOverwrittenByRevoke = o("WAWebBaseModel").session(false);
            e.bizContentPlaceholderType = o("WAWebBaseModel").prop(null);
            e.hostedBizEncStateMismatch = o("WAWebBaseModel").prop(false);
            e.senderOrRecipientAccountTypeHosted = o("WAWebBaseModel").prop(false);
            e.placeholderCreatedWhenAccountIsHosted = o("WAWebBaseModel").prop(false);
            e.limitSharing = o("WAWebBaseModel").prop();
            e.acp2Setting = o("WAWebBaseModel").prop();
            e.galaxyFlowWAMMessageId = o("WAWebBaseModel").prop();
            e.galaxyFlowQPLMessageId = o("WAWebBaseModel").prop();
            e.galaxyFlowDisabled = o("WAWebBaseModel").prop();
            e.signupCtaTapped = o("WAWebBaseModel").prop();
            e.groupHistoryBundleMessageKey = o("WAWebBaseModel").prop(null);
            e.groupHistoryBundleMetadata = o("WAWebBaseModel").prop(null);
            e.groupHistoryIndividualMessageInfo = o("WAWebBaseModel").prop(null);
            e.nonJidMentions = o("WAWebBaseModel").prop(null);
            e.createdMediaDataOnInit = o("WAWebBaseModel").session(false);
            e.createdMediaDataOnUpdate = o("WAWebBaseModel").session(false);
            e.oldType = o("WAWebBaseModel").session();
            e.newType = o("WAWebBaseModel").session();
            e.typeOnInit = o("WAWebBaseModel").session();
            e.calledCiphertextDecrypted = o("WAWebBaseModel").session(false);
            e.$MsgImpl$p_24 = r("WAWebDebounce")(function(e, lastPlaybackProgress) {
                o("WAWebDBUpdateMessageTable").updateMessageTable(e, {
                    lastPlaybackProgress
                });
            }, 500);
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.pendingAckUpdate_TESTONLY = function() {
            return this.$MsgImpl$p_10;
        };
        a_prototype.enqueueAckUpdate = function(t) {
            this.$MsgImpl$p_10.enqueue(t);
        };
        a_prototype.$MsgImpl$p_11 = function() {
            this.$MsgImpl$p_12();
            if (!this.isViewOnce || o("WAWebViewOnceState").isUnviewed(this.safe())) {
                o("WAWebMedia").registerMsg(this);
            }
        };
        a_prototype.initialize = function() {
            t.prototype.initialize.call(this);
            this.typeOnInit = this.type;
            if (this.carouselCardsParsed != null) {
                this.$MsgImpl$p_13();
            }
            if (this.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
                this.listenTo(this, "change:carouselCardsParsed", this.$MsgImpl$p_13);
            }
            this.$MsgImpl$p_10 = new (o("WAWebPromiseQueue")).PromiseQueue;
            const n = o("WAWebMsgModelUtils").getValidatedSender(this);
            if (n) {
                this.addChild("senderObj", o("WAWebContactCollection").ContactCollection.gadd(n.isUser() && !n.isFbidBot() && !n.isHosted() && !n.isNewsletter() ? o("WAWebWidFactory").createWid(n.isLid() ? o("WAJids").toLidUserJid(n.user) : o("WAJids").toPhoneUserJid(n.user)) : n));
                if (this.hsmTag === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING) {
                    this.senderObj.setIsMarketingMessageThread(true);
                }
            }
            this.mentionedJidList = this.mentionedJidList || [];
            this.groupMentions = this.groupMentions || [];
            this.mentionedJidList.forEach((e)=>o("WAWebContactCollection").ContactCollection.gadd(e));
            if (this.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
                this.listenToOnce(this, "change:type", this.$MsgImpl$p_14);
            }
            this.mediaObject = undefined;
            if (o("WAWebMsgModelUtils").typeIsMms(this)) {
                this.createdMediaDataOnInit = true;
                this.$MsgImpl$p_11();
            }
            if (this.isViewOnce) {
                this.listenTo(this, "change:ack", this.$MsgImpl$p_15);
                this.listenTo(this.mediaData, "change:mediaStage", this.$MsgImpl$p_15);
            }
            this.listenTo(this, "change:viewMode", this.$MsgImpl$p_16);
            if (!o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, this.viewMode)) {
                this.$MsgImpl$p_16();
            }
            if (!r("gkx")("26258")) {
                this.listenTo(this, "change:t", this.$MsgImpl$p_17);
            }
            if (o("WAWebMsgGetters").getIsMetaBotResponse(this)) {
                this.listenTo(this, "change:botEditType", this.$MsgImpl$p_18);
            }
            if (this.recvFresh && this.senderObj?.id?.isBot()) {
                if (this.botEditType == null) {
                    this.botEditType = o("WAWebBotTypes").BotMsgEditType.FULL;
                }
                this.activeBotMsgStreamingInProgress = true;
            }
            this.$MsgImpl$p_18();
        };
        a_prototype.$MsgImpl$p_17 = function() {
            if (!Number.isInteger(this.t)) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid timestamp value in msg, raw ts value: ",
                    ", msgId: ",
                    ", msgType: ",
                    "_",
                    ""
                ])), this.t, this.id.toString(), this.type, this.subtype).tags("date_marker").sendLogs("Msg TS updated to invalid value");
            }
        };
        a_prototype.$MsgImpl$p_16 = function() {
            const n = o("WAWebFrontendMsgGetters").getMaybeChat(this)?.msgs ?? this.$MsgImpl$p_1;
            if (o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT, this.viewMode)) {
                if (n != null) {
                    n.trigger("insert_msgs", [
                        this
                    ], {});
                }
            } else {
                this.$MsgImpl$p_19();
                this.$MsgImpl$p_20({
                    messageInHiddenViewMode: true
                });
                if (n != null) {
                    n.trigger("remove_msgs", [
                        this
                    ], {});
                }
            }
            n?.triggerChangeLast(null, n, {});
        };
        a_prototype.$MsgImpl$p_19 = function() {
            const e = o("WAWebFrontendMsgGetters").getEventType(this);
            const parentMsgKey = this.parentMsgKey;
            const n = this.recvFresh && !o("WAWebMsgGetters").getIsSentByMe(this) && (e === o("WAWebCommonMsgUtils").EventType.DEFAULT || e === o("WAWebCommonMsgUtils").EventType.SIGNIFICANT);
            if (parentMsgKey && n) {
                const r = this.getCollection().get(parentMsgKey);
                if (r && o("WAWebNotificationsMsgNotification").eligibleMessagesForNotificationRetriggering.has(r.type)) {
                    o("WAWebCmd").Cmd.alertNewMsg(r);
                } else {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Msg: #triggerNotificationForParentMessage: parentMsg for ",
                        " not found in MsgCollection or not eligible for notification re-triggering"
                    ])), this.id.toString());
                }
            }
        };
        a_prototype.$MsgImpl$p_13 = function() {
            const carouselCardsParsed = this.carouselCardsParsed;
            if (!(carouselCardsParsed == null || r("WAWebWid").isNewsletter(this.id.remote))) {
                const a = carouselCardsParsed.length > o("WAWebInteractiveMessageCarouselConstants").MAX_CAROUSEL_CARDS ? carouselCardsParsed.slice(0, o("WAWebInteractiveMessageCarouselConstants").MAX_CAROUSEL_CARDS) : carouselCardsParsed;
                const i = this.carouselCards?.getCardsById() ?? {};
                const l = [];
                for (const s of a){
                    const u = s.id.toString();
                    if (i[u] != null) {
                        const c = i[u];
                        c.set(s);
                        l.push(c);
                    } else {
                        const d = babelHelpers.extends({}, s);
                        l.push(d);
                    }
                }
                const m = new (r("WAWebCarouselCardsCollection"));
                m.add(l);
                this.carouselCards = m;
                this.getCollection().add(m.slice());
            }
        };
        a_prototype.$MsgImpl$p_18 = function() {
            const e = this;
            if (this.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE) {
                const t = o("WAWebBotGenTypingIndicatorMsg").getBotTypingIndicatorTimeout();
                self.setTimeout(function() {
                    e.delete();
                }, t);
                r("WAWebChangePresenceHandlerAction")({
                    id: this.id.remote,
                    type: "typing"
                });
                return;
            }
            const botEditType = this.botEditType;
            if (botEditType != null) {
                const a = o("WAWebBotGenTypingIndicatorMsg").getBotTypingIndicatorTimeout();
                switch(botEditType){
                    case o("WAWebBotTypes").BotMsgEditType.LAST:
                    case o("WAWebBotTypes").BotMsgEditType.FULL:
                        this.activeBotMsgStreamingInProgress = false;
                        if (this.botEditTimeoutID != null && this.botEditTimeoutID !== 0) {
                            self.clearTimeout(this.botEditTimeoutID);
                        }
                        if (botEditType === o("WAWebBotTypes").BotMsgEditType.LAST) {
                            this.$MsgImpl$p_21();
                        }
                        return;
                    default:
                        this.botEditTimeoutID = self.setTimeout(function() {
                            e.activeBotMsgStreamingInProgress = false;
                            e.botEditType = o("WAWebBotTypes").BotMsgEditType.LAST;
                            o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
                                botEditType: o("WAWebBotTypes").BotMsgEditType.LAST
                            });
                        }, a);
                }
            }
        };
        a_prototype.$MsgImpl$p_21 = function() {
            if (!(!this.recvFresh || o("WAWebMsgGetters").getIsSentByMe(this) || o("WAWebMsgGetters").getIsStatus(this))) {
                o("WAWebCmd").Cmd.alertNewMsg(this);
            }
        };
        a_prototype.getMsgChunk = function(t) {
            if (t != null) {
                return this.$MsgImpl$p_2.get(t.toString());
            }
            return this.$MsgImpl$p_1;
        };
        a_prototype.setMsgChunk = function(t, n) {
            if (n != null) {
                this.$MsgImpl$p_2.set(n.toString(), t);
            } else {
                this.$MsgImpl$p_1 = t;
            }
        };
        a_prototype.forEachThreadMsgChunk = function(t) {
            this.$MsgImpl$p_2.forEach((e, n)=>{
                t(e, n);
            });
        };
        a_prototype.getRawLinks = function() {
            if (this.type === o("WAWebMsgType").MSG_TYPE.REVOKED && this.$MsgImpl$p_3.length > 0) {
                this.clearRawLinks();
            }
            return this.$MsgImpl$p_3;
        };
        a_prototype.setRawLinks = function(t) {
            if (t.length > 0) {
                this.$MsgImpl$p_3 = t;
            }
        };
        a_prototype.clearRawLinks = function() {
            this.$MsgImpl$p_3 = [];
            this.linksIndexParsed = 0;
        };
        a_prototype.getRawPollOptionsToLinks = function() {
            return this.$MsgImpl$p_6;
        };
        a_prototype.setRawPollOptionsToLinks = function(t) {
            this.$MsgImpl$p_6 = t;
        };
        a_prototype.getRawHeaderLinks = function() {
            return this.$MsgImpl$p_4;
        };
        a_prototype.setRawHeaderLinks = function(t) {
            if (t.length > 0) {
                this.$MsgImpl$p_4 = t;
            }
        };
        a_prototype.getRawFooterLinks = function() {
            return this.$MsgImpl$p_5;
        };
        a_prototype.setRawFooterLinks = function(t) {
            if (t.length > 0) {
                this.$MsgImpl$p_5 = t;
            }
        };
        a_prototype.getRawPhoneNumbers = function() {
            return this.$MsgImpl$p_7;
        };
        a_prototype.setRawPhoneNumbers = function(t) {
            if (t.length > 0) {
                this.$MsgImpl$p_7 = t;
            }
        };
        a_prototype.clearRawPhoneNumbers = function() {
            this.$MsgImpl$p_7 = [];
            this.phoneNumbersIndexParsed = 0;
        };
        a_prototype.getRawHeaderPhoneNumbers = function() {
            return this.$MsgImpl$p_8;
        };
        a_prototype.setRawHeaderPhoneNumbers = function(t) {
            if (t.length > 0) {
                this.$MsgImpl$p_8 = t;
            }
        };
        a_prototype.getRawFooterPhoneNumbers = function() {
            return this.$MsgImpl$p_9;
        };
        a_prototype.setRawFooterPhoneNumbers = function(t) {
            if (t.length > 0) {
                this.$MsgImpl$p_9 = t;
            }
        };
        a_prototype.$MsgImpl$p_12 = function() {
            this.addChild("mediaData", new (r("WAWebMediaData")));
        };
        a_prototype.isUnsentPhoneMsg = function() {
            return !this.local && o("WAWebMsgGetters").getIsSentByMe(this) && this.ack < o("WAWebAck").ACK.SENT;
        };
        a_prototype.resumeRemoteUpload = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (o("WAWebMsgGetters").getIsNewsletterMsg(this)) {
                    const e = yield o("WAWebMedia").resumeUploadMsg(this);
                    return e?.messageSendResult;
                }
                if (this.isUnsentPhoneMsg()) {
                    o("WAWebSendMsgRecordAction").sendMsgRecord(this);
                }
                return this.forceDownloadMediaEvenIfExpensive();
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.cancelDownload = function() {
            o("WAWebMedia").cancelDownloadMsg(this);
        };
        a_prototype.resumeUpload = function() {
            if (this.mediaData.mediaStage !== o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "resumeUpload called while state was ",
                    ""
                ])), this.mediaData.mediaStage).sendLogs("resume-non-need-upload");
            }
            return o("WAWebMedia").resumeUploadMsg(this).then((e)=>e?.messageSendResult);
        };
        a_prototype.cancelUpload = function() {
            o("WAWebMedia").cancelUploadMsg(this);
        };
        a_prototype.forceDownloadMediaEvenIfExpensive = function() {
            return this.downloadMedia({
                downloadEvenIfExpensive: true,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_CLICK,
                isUserInitiated: true
            });
        };
        a_prototype.downloadMedia = function(t) {
            const e = this;
            if (o("WAWebFrontendMsgGetters").getAsRevoked(this)) {
                return (f || (f = n("Promise"))).resolve();
            }
            const { downloadEvenIfExpensive, isAutoDownload, isUserInitiated, rmrReason, shouldSequenceDownload, shouldThrowAbortError } = t;
            if (!isUserInitiated && !o("WAWebMsgModelPropUtils").isTrusted(this)) {
                return (f || (f = n("Promise"))).resolve();
            }
            if (!o("WAWebMsgGetters").getIsStatus(this) && !o("WAWebMsgGetters").getIsNewsletterMsg(this) && o("WAWebFrontendMsgGetters").getChat(this).isSuspendedOrTerminated() && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
                if (isUserInitiated) {
                    o("WAWebModalManager").ModalManager.open(h.jsx(r("WAWebSuspendedGroupMediaDownloadFailureModal.react"), {}), {
                        transition: "modal-flow"
                    });
                }
                return (f || (f = n("Promise"))).resolve();
            }
            if (!o("WAWebFrontendMsgGetters").getAsMms(this)) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "id: ",
                    " type: ",
                    ""
                ])), this.id.toString(), this.type).sendLogs("media-fault: downloadMedia msg is not mms type");
            }
            if (this.isUnsentPhoneMsg()) {
                let p = this.waitForPhoneUploadPromise;
                if (!p) {
                    p = this.waitForPhoneUploadPromise = r("WAWebEventsWaitForBbEvent")(this.mediaData, "change:mediaStage change:filehash", function() {
                        return !!e.mediaData.filehash && !e.isUnsentPhoneMsg();
                    }).then(()=>{
                        e.waitForPhoneUploadPromise = null;
                    });
                }
                return p.then(()=>e.downloadMedia(t));
            }
            return o("WAWebMedia").downloadMsg({
                msg: this,
                isUserClick: rmrReason === o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_CLICK,
                downloadEvenIfExpensive,
                rmrReason,
                rmrData: this.$MsgImpl$p_22(rmrReason),
                mode: isUserInitiated ? "manual" : "auto",
                isAutoDownload,
                chatWid: o("WAWebFrontendMsgGetters").getMaybeChat(this)?.id,
                shouldSequenceDownload,
                shouldThrowAbortError
            });
        };
        a_prototype.$MsgImpl$p_22 = function(webcRmrReason) {
            const e = {
                webcRmrReason,
                webcMessageT: this.t
            };
            const n = o("WAWebFrontendMsgGetters").getMaybeChat(this);
            if (n) {
                e.webcChatType = n.getWebcChatType();
                if (n.initialIndex != null) {
                    e.webcChatPosition = n.initialIndex;
                }
                const r = this.$MsgImpl$p_1;
                if (r && r === n.msgs) {
                    e.webcMessageIndex = r.length - r.indexOf(this) - 1;
                }
            }
            return e;
        };
        a_prototype.applyUpdate = function(t) {
            const e = this;
            if (t.type && this.type !== t.type) {
                this.oldType = this.type;
                this.newType = t.type;
            }
            if (t.type && this.type !== t.type && o("WAWebMsgModelUtils").typeIsMms(t)) {
                if (!o("WAWebCommonMsgUtils").isPlaceholderMsg(this.type) && !o("WAWebMsgGetters").getIsFutureproof(this) && !o("WAWebCommonMsgUtils").isQuarantinedMsg(this.type)) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "updated ",
                        " from ",
                        " to ",
                        ""
                    ])), this.id.toString(), this.type, String(t.type)).sendLogs("invalid-type-update");
                }
                return this.registerAndPrepMedia(t).then(()=>{
                    e.set(t);
                });
            }
            this.set(t);
            return (f || (f = n("Promise"))).resolve();
        };
        a_prototype.registerAndPrepMedia = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                this.createdMediaDataOnUpdate = true;
                this.$MsgImpl$p_12();
                o("WAWebMedia").registerMsgEarly(this, e);
                try {
                    yield o("WAWebMedia").prepareMsg(this);
                } catch (error) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "error"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("preregister-error");
                    throw error;
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.waitForPrep = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const e = o("WAWebMsgModelUtils").typeIsMms(this);
                if (e && this.mediaData == null) {
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "Msg: waitForPrep called while mediaData was null. id: ",
                        "\n            createdMediaDataOnInit: ",
                        ", createdMediaDataOnUpdate: ",
                        ",\n            type on init: ",
                        ", type before change: ",
                        ", type after change: ",
                        "\n            calledCiphertextDecrypted: ",
                        ""
                    ])), this.id.toString(), this.createdMediaDataOnInit, this.createdMediaDataOnUpdate, this.typeOnInit, this.oldType, this.newType, this.calledCiphertextDecrypted);
                    this.$MsgImpl$p_11();
                }
                const t = e ? o("WAWebMedia").prepareMsg(this) : (f || (f = n("Promise"))).resolve();
                return t;
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$MsgImpl$p_20 = function(t) {
            const e = this.$MsgImpl$p_23().get(this.id.remote);
            if (e) {
                if ((this.id.remote.isBot() || o("WAWebBizBotProfileUtils").isBizBot3pBusinessProfile(e.contact.businessProfile)) && this.subtype === o("WAWebBotGenTypingIndicatorMsg").BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE && e.botInitialTypingIndicatorMsgId && e.botInitialTypingIndicatorMsgId.equals(this.id)) {
                    e.set({
                        botInitialTypingIndicatorMsgId: null
                    }, {
                        silent: true
                    });
                }
                if (e.unreadMsgAnchor === this) {
                    e.unreadMsgAnchor = undefined;
                }
                const r = t?.messageInHiddenViewMode === true || !t || !t.doNotResetLastReceived;
                if (r && e.lastReceivedKey === this.id) {
                    let a;
                    const i = o("WAWebChatGetMessage").getLastReceivedMsg(e);
                    if (i) {
                        a = i.id;
                    }
                    e.lastReceivedKey = a;
                }
                if (e.composeQuotedMsg?.id.equals(this.id) && t?.messageInHiddenViewMode !== true) {
                    e.composeQuotedMsg = null;
                }
            }
        };
        a_prototype.delete = function(n) {
            t.prototype.delete.call(this);
            if (this.botEditTimeoutID != null && this.botEditTimeoutID !== 0) {
                self.clearTimeout(this.botEditTimeoutID);
            }
            o("WAWebStarredMsgCollection").AllStarredMsgsCollection.remove(this);
            o("WAWebPinInChatCollection").PinInChatCollection.deleteByParentMessageKey(this.id);
            if (o("WAWebMsgModelUtils").typeIsMms(this)) {
                o("WAWebMedia").deregisterMsg(this);
            }
            const e = this.getCollection();
            o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(this.id).forEach((e)=>{
                e.delete();
            });
            e.remove(this.id);
            o("WAWebMsgModelUtils").hideParentMessageInChat(this, {
                duringDetach: false
            });
            if (this.$MsgImpl$p_1) {
                this.$MsgImpl$p_1.remove(this.id, {}, !!(n != null && n.skipUpdatingSortTime));
            }
            for (const r of this.$MsgImpl$p_2.values()){
                r.remove(this.id, {}, !!(n != null && n.skipUpdatingSortTime));
            }
            this.$MsgImpl$p_2.clear();
            this.$MsgImpl$p_20(n);
            o("WAWebMsgGetters").clearMsgGetterCacheFor(this);
            o("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(this);
        };
        a_prototype.msgContextInfo = function(n) {
            const t = this.toJSON();
            const { ack, author, broadcast, buttons, from, hatchMetadataSync, id, invis, isNewMsg, latestEditMsgKey, latestEditSenderTimestampMs, multicast, notifyName, quotedMsg, quotedParticipant, quotedRemoteJid, quotedStanzaID, quotedType, recipients, recvFresh, replyButtons, senderObj, star, t: t_1, to } = t;
            const quotedMsg_1 = babelHelpers.objectWithoutPropertiesLoose(t, e);
            const x = this.id;
            let quotedRemoteJid_1 = null;
            if (n && !x.remote.equals(n)) {
                quotedRemoteJid_1 = x.remote;
            }
            const quotedParticipant_1 = o("WAWebMsgModelUtils").getQuotedParticipantForContextInfo(this);
            return {
                quotedMsg: quotedMsg_1,
                quotedParticipant: quotedParticipant_1,
                quotedStanzaID: x.id,
                quotedRemoteJid: quotedRemoteJid_1
            };
        };
        a_prototype.updateAck = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
                const ack = this.ack;
                const r = o("WAWebFrontendMsgGetters").getMaybeChat(this);
                if (!(!o("WAWebMsgGetters").getIsStatus(this) && r != null && o("WAWebChatGetters").getIsGroup(r) && this.isMdHistoryMsg && e >= o("WAWebAck").ACK.RECEIVED && this.id.fromMe)) {
                    let a = this.id;
                    if (this.id.remote.isStatus()) {
                        const i = yield o("WAWebMessageReceiptUtils").fixStatusReceiptKeys([
                            a
                        ]);
                        a = i[0];
                    }
                    if (typeof e === "number" && (ack === undefined || e > ack || e === o("WAWebAck").ACK.FAILED)) {
                        this.ack = e;
                        if (!t) {
                            this.$MsgImpl$p_10.enqueue(function() {
                                return o("WAWebDBUpdateMessageTable").updateMessageTable(a, {
                                    ack: e
                                });
                            });
                        }
                    } else if (e === o("WAWebAck").ACK.FAILED && this.ack === o("WAWebAck").ACK.CLOCK) {
                        this.ack = o("WAWebAck").ACK.FAILED;
                        this.$MsgImpl$p_10.enqueue(function() {
                            return o("WAWebDBUpdateMessageTable").updateMessageTable(a, {
                                ack: e
                            });
                        });
                    }
                }
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.updateNFMButtonsState = function(galaxyFlowDisabled) {
            return o("WAWebDBUpdateMessageTable").updateMessageTable(this.id, {
                galaxyFlowDisabled
            });
        };
        a_prototype.updateLastPlaybackProgress = function(t) {
            this.lastPlaybackProgress = t;
            this.$MsgImpl$p_24(this.id, t);
        };
        a_prototype.$MsgImpl$p_14 = function() {
            this.calledCiphertextDecrypted = true;
            if (!o("WAWebMsgGetters").getIsStatus(this)) {
                const e = o("WAWebFrontendMsgGetters").getChat(this);
                const t = e.msgs.length;
                const n = e.msgs.indexOf(this);
                if (n !== -1 && t - n <= 10 && !o("WAWebMsgGetters").getIsSentByMe(this)) {
                    o("WAWebCmd").Cmd.alertNewMsg(this);
                }
            }
        };
        a_prototype.$MsgImpl$p_15 = function() {
            if (this.isViewOnce && this.mediaData != null) {
                const e = o("WAWebMsgGetters").getIsSentByMe(this) && this.ack >= o("WAWebAck").ACK.SENT && this.mediaData.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED;
                const t = !o("WAWebMsgGetters").getIsSentByMe(this) && this.ack >= o("WAWebAck").ACK.PLAYED;
                if (e || t) {
                    this.stopListening(this, "change:ack", this.$MsgImpl$p_15);
                    this.stopListening(this.mediaData, "change:mediaStage", this.$MsgImpl$p_15);
                    o("WAWebMedia").deregisterMsg(this);
                }
            }
        };
        a_prototype.getCollection = function() {
            return o("WAWebMsgCollection").MsgCollection;
        };
        a_prototype.$MsgImpl$p_23 = function() {
            if (o("WAWebMsgGetters").getIsNewsletterMsg(this)) {
                return r("WAWebNewsletterCollection");
            }
            return o("WAWebChatCollection").ChatCollection;
        };
        a_prototype.safe = function() {
            return this;
        };
        a_prototype.unsafe = function() {
            return this;
        };
        a_prototype.detachAssociatedMsg = function() {
            o("WAWebMsgModelUtils").hideParentMessageInChat(this, {
                duringDetach: true
            });
            this.set({
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                associationType: null,
                parentMsgKey: null
            });
        };
        return a;
    })(o("WAWebBaseModel").BaseModel);
    y.Proxy = "msg";
    y.idClass = r("WAWebMsgKey");
    y.kind = "__MOCKED_KIND__";
    const C = o("WAWebBaseModel").defineModel(y);
    l.Msg = C;
}, 98);