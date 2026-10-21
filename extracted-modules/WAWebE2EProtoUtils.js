__d("WAWebE2EProtoUtils", [
    "WABase64",
    "WAJids",
    "WALogger",
    "WATypeUtils",
    "WAWebABProps",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonProcessingError",
    "WAWebApiContact",
    "WAWebBackendJobs.flow",
    "WAWebBatchedStatusIdUtils",
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebConvertToTextWithoutSpecialEmojis",
    "WAWebDecodeJid",
    "WAWebEphemeralityTypes",
    "WAWebHandleMsgCommon",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveResponseMessageType",
    "WAWebIsCagGroupCache",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNonEmptyString",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProtobufsE2E.pb",
    "WAWebSignupGating",
    "WAWebUserPrefsMeUser",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "justknobx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = 3;
    function g(t, n = 0) {
        const d = o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(t) ?? t;
        if (r("justknobx")._("2451") && n >= f) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "typeAttributeFromProtobuf: nesting depth exceeded limit of ",
                ""
            ])), f).tags("messaging").sendLogs("type-attr-proto-max-depth");
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.ephemeralMessage) {
            const m = d.ephemeralMessage.message;
            if (m) {
                return g(m, n + 1);
            }
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.groupMentionedMessage) {
            const p = d.groupMentionedMessage.message;
            if (p) {
                return g(p, n + 1);
            }
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.botInvokeMessage) {
            const _ = d.botInvokeMessage.message;
            if (_) {
                return g(_, n + 1);
            }
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.botForwardedMessage) {
            const h = d.botForwardedMessage.message;
            if (h) {
                return g(h, n + 1);
            }
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.deviceSentMessage) {
            const y = d.deviceSentMessage.message;
            if (y) {
                return g(y, n + 1);
            }
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.reactionMessage || d.encReactionMessage) {
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.reaction;
        }
        if (d.eventMessage || d.encEventResponseMessage || d.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT) {
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event;
        }
        if (d.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT) {
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.pollCreationMessage || d.pollCreationMessageV2 || d.pollCreationMessageV3 || d.pollCreationMessageV5 || d.pollCreationMessageV6 || d.pollUpdateMessage || d.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT || d.secretEncryptedMessage?.secretEncType === o("WAWebProtobufsE2E.pb").Message$SecretEncryptedMessage$SecretEncType.POLL_ADD_OPTION) {
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll;
        }
        if (d.extendedTextMessage?.matchedText != null && d.extendedTextMessage.matchedText.trim() !== "") {
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media;
        }
        if (d.conversation || d.extendedTextMessage || d.templateButtonReplyMessage || d.protocolMessage || d.interactiveMessage || d.keepInChatMessage || d.requestPhoneNumberMessage || d.editedMessage || d.pinInChatMessage || d.encCommentMessage || d.newsletterAdminInviteMessage || d.newsletterFollowerInviteMessageV2 || d.messageHistoryNotice || d.albumMessage || d.statusNotificationMessage || d.richResponseMessage) {
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        if (d.pollResultSnapshotMessage || d.pollResultSnapshotMessageV3) {
            if (r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()) {
                return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll;
            }
            return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text;
        }
        return o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.media;
    }
    function h(e) {
        if (o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e) === o("WAWebMsgType").MSG_TYPE.COMMENT) {
            const t = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
            const n = o("WAWebWidFactory").asUserWidOrThrow(r("nullthrows")(t.participant, "undefined participant"));
            const a = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
            return {
                threadMsgId: t.id,
                threadMsgSenderLid: r("nullthrows")(a, "undefined lid")
            };
        }
    }
    const y = new Set([
        (_ = o("WAWebProtobufsE2E.pb")).Message$SecretEncryptedMessage$SecretEncType.EVENT_EDIT,
        _.Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT,
        _.Message$SecretEncryptedMessage$SecretEncType.POLL_ADD_OPTION,
        _.Message$SecretEncryptedMessage$SecretEncType.POLL_EDIT
    ]);
    function C(e) {
        let n;
        const i = o("WAWebVerifyProtobufMsgObjectKeys").getUnwrappedProtobufMessage(e) ?? e;
        if (i.reactionMessage || i.encReactionMessage || (n = i.pollUpdateMessage) != null && n.vote || i.keepInChatMessage || i.editedMessage || i.pinInChatMessage || i.botInvokeMessage?.message?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE || i.encEventResponseMessage || i.secretEncryptedMessage?.secretEncType != null && y.has(i.secretEncryptedMessage.secretEncType) || i.messageHistoryNotice || i.conditionalRevealMessage || i.statusNotificationMessage) {
            return o("WAWebBackendJobs.flow").DecryptFailType.Hide;
        }
        const i_protocolMessage = i.protocolMessage;
        if (i_protocolMessage && (i_protocolMessage.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE || i_protocolMessage.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE || i_protocolMessage.editedMessage || i_protocolMessage.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.GROUP_MEMBER_LABEL_CHANGE || i_protocolMessage.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_UNSCHEDULE || i_protocolMessage.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.AI_METADATA_OPERATION)) {
            return o("WAWebBackendJobs.flow").DecryptFailType.Hide;
        }
        return o("WAWebBackendJobs.flow").DecryptFailType.Show;
    }
    function b(e) {
        const n = [
            "XUS",
            "XDX",
            "USDP"
        ];
        const r = o("WAWebNonEmptyString").asMaybeNonEmptyString(e?.primaryAmount?.currencyCode) || e?.currency;
        return r != null && n.includes(r.toUpperCase());
    }
    function v(e, t) {
        let n;
        return !(e.remote.isGroup() && !((n = e.participant) != null && n.equals(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE())) && !t.equals(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()));
    }
    function S({ bizInfo, msgContext, name }) {
        if (name != null || bizInfo?.nativeFlowName != null) {
            return R({
                name,
                bizInfo,
                msgContext
            });
        }
        return true;
    }
    function R({ bizInfo, msgContext, name }) {
        if (msgContext !== "relay" && name != null) {
            return true;
        }
        const a = bizInfo?.nativeFlowName;
        if (a == null || name == null) {
            return false;
        }
        if (r("WAWebInteractiveMessagesNativeFlowName").cast(a) === r("WAWebInteractiveMessagesNativeFlowName").MIXED || L(a, name)) {
            return true;
        }
        return r("WAWebInteractiveMessagesNativeFlowName").cast(a) === name;
    }
    function L(e, name) {
        return name === r("WAWebInteractiveMessagesNativeFlowName").API_SIGNUP && r("WAWebInteractiveMessagesNativeFlowName").cast(e) === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP && o("WAWebSignupGating").isReceivedSignupPromptEnabled();
    }
    function E(e) {
        return e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || e === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS || e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS || e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_METHOD || e === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO;
    }
    function k(e) {
        const e_interactiveMessage = e.interactiveMessage;
        const p = e_interactiveMessage?.nativeFlowMessage?.buttons;
        if (p != null && p.length > 0 && !o("WAWebBizTemplateAndInteractiveMessagesUtils").buttonsViolateButtonImprovementsConstraints(p.map((nativeFlowButton)=>({
                nativeFlowButton
            })))) {
            return String(o("WAWebBizTemplateAndInteractiveMessagesUtils").getNativeFlowNameByButtonName(p[0].name));
        }
        if (e.buttonsMessage?.buttons?.length === 1) {
            return String(o("WAWebBizTemplateAndInteractiveMessagesUtils").getNativeFlowNameByButtonName(e.buttonsMessage.buttons[0].nativeFlowInfo?.name));
        }
        const f = !(p != null && p.length) && ((e_interactiveMessage?.body?.text?.length ?? 0) > 0 || (e_interactiveMessage?.header?.title?.length ?? 0) > 0 || (e_interactiveMessage?.footer?.text?.length ?? 0) > 0 || e_interactiveMessage?.header?.imageMessage != null) && !(e_interactiveMessage != null && e_interactiveMessage.shopStorefrontMessage);
        if (f) {
            return String(r("WAWebInteractiveMessagesNativeFlowName").MIXED);
        }
    }
    const I = [
        "novi_login",
        "novi_report_transaction",
        "novi_hub",
        "novi_view_code",
        "novi_view_transaction",
        "novi_view_bank_detail",
        "novi_view_card_detail",
        "wa_payment_transaction_details",
        "wa_payment_learn_more",
        "wa_payment_fbpin_reset"
    ];
    function T(e) {
        return e.some((e)=>e.nativeFlowInfo && e.nativeFlowInfo.name != null && I.includes(e.nativeFlowInfo.name) || e.buttonId != null && I.includes(e.buttonId));
    }
    function D(e) {
        if (e === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
            return !o("WAWebABProps").getABPropConfigValue("interactive_message_native_flow_killswitch");
        }
        if (e === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT) {
            return o("WAWebABProps").getABPropConfigValue("web_shop_storefront_message");
        }
        if (e === r("WAWebInteractiveMessageType").CAROUSEL) {
            return true;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function x(e) {
        switch(e){
            case r("WAWebInteractiveMessageType").NATIVE_FLOW:
                return "nativeFlowMessage";
            case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
                return "shopStorefrontMessage";
            case r("WAWebInteractiveMessageType").CAROUSEL:
                return "carouselMessage";
        }
    }
    function $(e) {
        for (const t of r("WAWebInteractiveMessageType").members()){
            if (x(t) in e) {
                return t;
            }
        }
        return null;
    }
    function P(e, t) {
        const n = t?.messageVersion;
        if (n == null || e == null) {
            return false;
        }
        switch(e){
            case r("WAWebInteractiveMessageType").NATIVE_FLOW:
                return n <= 1;
            case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
                return n <= 1;
            case r("WAWebInteractiveMessageType").CAROUSEL:
                return n <= 1;
        }
    }
    function N(e) {
        switch(e){
            case r("WAWebInteractiveResponseMessageType").NATIVE_FLOW:
                return "nativeFlowResponseMessage";
        }
    }
    function M(e) {
        for (const t of r("WAWebInteractiveResponseMessageType").members()){
            if (N(t) in e) {
                return t;
            }
        }
        return null;
    }
    function w({ bizInfo, message, msgContext, type }) {
        switch(type){
            case r("WAWebInteractiveResponseMessageType").NATIVE_FLOW:
                {
                    const i = r("nullthrows")(message.nativeFlowResponseMessage);
                    const l = r("nullthrows")(r("WAWebInteractiveMessagesNativeFlowName").cast(i.name));
                    const s = r("nullthrows")(i.version);
                    if (s > 1 || bizInfo?.nativeFlowName != null && !R({
                        name: l,
                        bizInfo,
                        msgContext
                    })) {
                        throw r("err")("Invalid message");
                    }
                    return {
                        name: l,
                        version: s,
                        type,
                        paramsJson: r("nullthrows")(i.paramsJson)
                    };
                }
        }
    }
    function A(e, t) {
        if (e != null) {
            const n = e.id;
            if (n != null) {
                return B(n, e, t, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
            }
        }
    }
    function F(e, t) {
        if (e != null) {
            const n = e.id;
            if (n != null) {
                return B(n, e, t, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message);
            }
        }
    }
    function O({ info, msgMeta, realType }) {
        const i = o("WAWebAddonProcessingError").validateMsgMeta(msgMeta, realType);
        const { threadMsgId, threadMsgSenderJid } = i;
        return new (r("WAWebMsgKey"))({
            id: threadMsgId,
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(threadMsgSenderJid),
            remote: info.chat,
            participant: threadMsgSenderJid
        });
    }
    function B(e, t, n, a) {
        let fromMe;
        let c;
        let d;
        if (n?.id?.fromMe) {
            fromMe = !!t.fromMe;
            d = o("WAWebDecodeJid").decodeJid(t.remoteJid);
            if (t.fromMe === true) {
                if (d instanceof r("WAWebWid") && !(d.isUser() || d.isNewsletter())) {
                    let g;
                    let h;
                    const y = r("WAWebIsCagGroupCache").isCag(d);
                    const C = y && a !== o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon;
                    if (!((g = n.author) != null && g.isLid())) {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[translateKeyToLocalReference] isCag=",
                            ""
                        ])), y);
                        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[translateKeyToLocalReference] non LID msg author found"
                        ]))).sendLogs("translate-msg-key-non-lid-author");
                    }
                    const b = C || !((h = n.author) != null && h.isLid()) ? o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE() : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
                    c = b;
                }
            } else {
                c = o("WAWebDecodeJid").decodeJid(t.participant);
            }
        } else {
            d = n.id.remote;
            const m = r("WAWebIsCagGroupCache").isCag(d);
            if (t.fromMe === true) {
                fromMe = false;
                c = n.author;
                if (m && c?.isLid() && a !== o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon) {
                    const _ = o("WAWebApiContact").getPhoneNumber(n.author);
                    if (_ != null) {
                        c = _;
                    }
                }
            } else {
                const f = o("WAWebDecodeJid").decodeJid(t.participant);
                if (f instanceof r("WAWebWid")) {
                    fromMe = o("WAWebUserPrefsMeUser").isMeAccount(f);
                    if (!d.isUser() || f.isBot()) {
                        if (fromMe) {
                            c = o("WAWebUserPrefsMeUser").getMeUserMatchingAddressingModeOrThrow(f);
                        } else {
                            c = f;
                        }
                    }
                } else {
                    fromMe = true;
                }
            }
        }
        if (n.type === o("WAWebMsgType").MSG_TYPE.REACTION && d != null && (d instanceof r("WAWebWid") && d.isBroadcast() && !d.isStatus() || o("WAJids").interpretAndValidateJid(d.toString()).jidType === "broadcast")) {
            d = o("WAWebDecodeJid").decodeJid(t.participant);
            c = undefined;
        }
        if (d instanceof r("WAWebWid") && c instanceof r("WAWebWid") && d.isUser() && d.equals(c)) {
            c = undefined;
        }
        const v = d instanceof r("WAWebWid") && d.isStatus() ? o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(e) : e;
        return new (r("WAWebMsgKey"))({
            id: v,
            fromMe,
            remote: d,
            participant: c
        });
    }
    function W(e) {
        if (e == null || e === "" || o("WAWebMobilePlatforms").getMobilePlatform() === o("WAWebMobilePlatforms").PLATFORMS.ANDROID) {
            return e;
        }
        return o("WAWebConvertToTextWithoutSpecialEmojis").convertToTextWithoutSpecialEmojis(e);
    }
    function q(e) {
        const t = {
            fromMe: e.fromMe,
            id: e.id
        };
        const n = U(e.remote);
        const r = U(e.participant);
        if (o("WATypeUtils").isString(n)) {
            t.remoteJid = n;
        }
        if (o("WATypeUtils").isString(r)) {
            t.participant = r;
        }
        return t;
    }
    function U(e) {
        if (e instanceof r("WAWebWid")) {
            return e.toString({
                legacy: true
            });
        }
        if (o("WATypeUtils").isString(e)) {
            return e.replace(/@c.us$/, "@s.whatsapp.net");
        }
    }
    function V(e) {
        if (e != null && e !== "") {
            return o("WABase64").decodeB64(e);
        }
    }
    function H(e, t, n) {
        if (!t.viewOnce) {
            if (t.directPath == null && t.staticUrl == null) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "directPath missing from msg type ",
                    ""
                ])), e).sendLogs(`outgoing-${e}-message-missing-direct-path`);
            }
            if (t.fileSha256 == null) {
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "fileSha256 missing from msg type ",
                    ""
                ])), e).sendLogs(`outgoing-${e}-message-missing-file-sha`);
            }
            if (!n && t.fileEncSha256 == null) {
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "fileEncSha256 missing from msg type ",
                    ""
                ])), e).sendLogs(`outgoing-${e}-message-missing-file-enc-sha`);
            }
            if (t.url == null && t.staticUrl == null && !n) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "url(deprecatedMms3Url) missing from msg type ",
                    ""
                ])), e).sendLogs(`outgoing-${e}-message-missing-mms3-url`);
            }
        }
    }
    function G(e, t, n) {
        let initiator;
        let trigger;
        let i;
        switch(e){
            case o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat:
                initiator = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.CHANGED_IN_CHAT;
                break;
            case o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe:
                initiator = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_ME;
                break;
            case o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByOther:
                initiator = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_OTHER;
                break;
            case o("WAWebEphemeralityTypes").DisappearingModeInitiator.BizUpgradeFbHosting:
                initiator = o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_OTHER;
                break;
        }
        if (t) {
            switch(t){
                case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
                    trigger = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.CHAT_SETTING;
                    break;
                case o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings:
                    trigger = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.ACCOUNT_SETTING;
                    break;
                case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
                    trigger = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.BULK_CHANGE;
                    break;
                case o("WAWebEphemeralityTypes").DisappearingModeTrigger.Unknown:
                    trigger = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN;
                    break;
                case o("WAWebEphemeralityTypes").DisappearingModeTrigger.UnknownGroups:
                    trigger = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN_GROUPS;
                    break;
                case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BizSupportFbHosting:
                    trigger = o("WAWebProtobufsE2E.pb").DisappearingMode$Trigger.UNKNOWN;
                    break;
            }
        }
        if (n != null) {
            i = n;
        }
        return {
            initiator,
            trigger,
            initiatedByMe: i
        };
    }
    function z(e) {
        return e;
    }
    l.typeAttributeFromProtobuf = g;
    l.extractCommentTargetIdAndSenderLid = h;
    l.decryptFailAttributeFromProtobuf = C;
    l.hasUnsupportedCurrency = b;
    l.isEitherSenderOrReceiverOfPaymentMessage = v;
    l.shouldParseNFM = S;
    l.isValidNativeFlowName = R;
    l.isOrderNativeFlow = E;
    l.getBizNativeFlowName = k;
    l.hasUnsupportedButtons = T;
    l.isInteractiveMessageTypeEnabled = D;
    l.getInteractiveMessageFieldNameForType = x;
    l.getInteractiveMessageTypeForProto = $;
    l.isSupportedInteractiveMessageVersion = P;
    l.getInteractiveResponseMessageFieldNameForType = N;
    l.getInteractiveResponseMessageTypeForProto = M;
    l.getInteractiveResponsePayload = w;
    l.translateAddonMessageKeyToLocalReference = A;
    l.translateRegularMessageKeyToLocalReference = F;
    l.createMsgKeyFromThreadInfo = O;
    l.translateKeyToLocalReference = B;
    l.convertToTextWithoutSpecialEmojis = W;
    l.encodeKey = q;
    l.encodeJid = U;
    l.encodeBytes = V;
    l.validateOutgoingRequiredMediaProperties = H;
    l.disappearingModeInitiatorToProto = G;
    l.getMutableMessageProtobuf = z;
}, 98);