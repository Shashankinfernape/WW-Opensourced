__d("WAWebReportUtils", [
    "Promise",
    "WALogger",
    "WAStanzaUtils",
    "WAWebBackendJobsCommon",
    "WAWebDBReportingTokenUtils",
    "WAWebE2EProtoUtils",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOTPHelper",
    "WAWebOutgoingMessage",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportSpamJob",
    "WAWebReportingTokenUtils",
    "WAWebSpamUtils",
    "WAWebViewOnceState",
    "asyncToGeneratorRuntime",
    "encodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        let e_conversation = e.conversation;
        if (!t.isFromTemplate || e_conversation == null) {
            return e;
        }
        const t_buttons = t.buttons;
        t_buttons?.forEach(function(e) {
            const t = o("WAWebOTPHelper").getOTPCodeFromButton(e);
            if (t != null) {
                e_conversation = e_conversation?.replace(t, "<code>");
            }
        });
        e.conversation = e_conversation;
        return e;
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.type === o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED) {
                return {
                    deletedReason: null,
                    messagePayloadTypesArgs: {
                        messageWithType: {
                            contentTypeTextOrMediaMixinGroupArgs: {
                                isContentTypeText: true
                            }
                        }
                    },
                    hsmTemplateMixin: null,
                    questionsResponseMixin: null,
                    rawArgs: null
                };
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && e.signupContext != null) {
                const messageParamsJson = JSON.stringify({
                    message_type: "automated_greeting",
                    source: "signup_deeplink",
                    signup_id: e.signupContext.signupId
                });
                const n = {
                    interactiveMessage: {
                        body: {
                            text: e.body
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "api_signup",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "Sign up"
                                    })
                                }
                            ],
                            messageParamsJson,
                            messageVersion: 1
                        }
                    }
                };
                const r = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n).readByteArrayView();
                return {
                    deletedReason: null,
                    messagePayloadTypesArgs: {
                        messageWithType: {
                            contentTypeTextOrMediaMixinGroupArgs: {
                                isContentTypeText: true
                            }
                        }
                    },
                    hsmTemplateMixin: null,
                    questionsResponseMixin: null,
                    rawArgs: {
                        rawElementValue: r,
                        rawMixinsArgs: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION === 2 ? {
                            isRawV2: true
                        } : {
                            rawV3: {
                                rawProtocolV: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION
                            }
                        },
                        rawLocalMessageType: o("WAWebSpamUtils").msgTypeToReportLocalMessageType(o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
                    }
                };
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && e.ctwaContext != null) {
                const a = {
                    interactiveMessage: {
                        body: {
                            text: e.body
                        },
                        contextInfo: {
                            externalAdReply: {
                                sourceId: e.ctwaContext.sourceId,
                                sourceUrl: e.ctwaContext.sourceUrl,
                                sourceType: e.ctwaContext.sourceType,
                                sourceApp: e.ctwaContext.sourceApp,
                                title: e.ctwaContext.title,
                                body: e.ctwaContext.description,
                                thumbnailUrl: e.ctwaContext.thumbnailUrl,
                                mediaType: e.ctwaContext.mediaType,
                                mediaUrl: e.ctwaContext.mediaUrl,
                                automatedGreetingMessageShown: true,
                                greetingMessageBody: e.body,
                                ctaPayload: e.ctwaContext.ctaPayload,
                                originalImageUrl: e.ctwaContext.originalImageUrl
                            }
                        },
                        nativeFlowMessage: {
                            buttons: e.nativeFlowName ? [
                                {
                                    name: e.nativeFlowName,
                                    buttonParamsJson: JSON.stringify({
                                        display_text: ""
                                    })
                                }
                            ] : [],
                            messageVersion: 1
                        }
                    }
                };
                const i = o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, a).readByteArrayView();
                return {
                    deletedReason: null,
                    messagePayloadTypesArgs: {
                        messageWithType: {
                            contentTypeTextOrMediaMixinGroupArgs: {
                                isContentTypeText: true
                            }
                        }
                    },
                    hsmTemplateMixin: null,
                    questionsResponseMixin: null,
                    rawArgs: {
                        rawElementValue: i,
                        rawMixinsArgs: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION === 2 ? {
                            isRawV2: true
                        } : {
                            rawV3: {
                                rawProtocolV: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION
                            }
                        },
                        rawLocalMessageType: o("WAWebSpamUtils").msgTypeToReportLocalMessageType(o("WAWebMsgType").MSG_TYPE.INTERACTIVE)
                    }
                };
            }
            if (e.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN) {
                return {
                    deletedReason: null,
                    messagePayloadTypesArgs: {
                        messageWithType: {
                            contentTypeTextOrMediaMixinGroupArgs: {
                                isContentTypeText: true
                            }
                        }
                    },
                    hsmTemplateMixin: null,
                    rawArgs: null,
                    questionsResponseMixin: null
                };
            }
            let deletedReason;
            const s = e.isViewOnce && !o("WAWebViewOnceState").isUnviewed(e.safe());
            if (s) {
                deletedReason = o("WAWebViewOnceState").isViewed(e.safe()) ? "view_once_opened" : "view_once_expired";
            }
            const c = o("WAWebReportSpamJob").getSpamMessageProtobuf(o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(o("WAWebOutgoingMessage").OutgoingMessageOriginType.Report, e));
            const d = u(c, e);
            const rawMediatype = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(d);
            const p = s ? null : o("encodeProtobuf").encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, d).readByteArrayView();
            const _ = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(d);
            const messagePayloadTypesArgs = _ === "poll" ? {
                messageWithPoll: {
                    metaContenttype: e.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE ? "image" : "text"
                }
            } : _ === "text" ? {
                messageWithType: {
                    contentTypeTextOrMediaMixinGroupArgs: {
                        isContentTypeText: true
                    }
                }
            } : {
                messageWithType: {
                    contentTypeTextOrMediaMixinGroupArgs: {
                        isContentTypeMedia: true
                    }
                }
            };
            const rawArgs = p != null ? babelHelpers.extends({
                rawElementValue: p,
                rawMixinsArgs: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION === 2 ? {
                    isRawV2: true
                } : {
                    rawV3: {
                        rawProtocolV: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION
                    }
                }
            }, rawMediatype && {
                rawMediatype
            }, {
                rawLocalMessageType: o("WAWebSpamUtils").msgTypeToReportLocalMessageType(e.type)
            }) : null;
            const hsmTemplateMixin = e.isFromTemplate && e.templateId != null ? {
                hsmTid: e.templateId
            } : null;
            const questionsResponseMixin = e.type === o("WAWebMsgType").MSG_TYPE.NEWSLETTER_QUESTION_RESPONSE && e.parentServerId != null && e.questionResponseInfo != null && e.questionResponseInfo.responseServerId != null ? {
                messageServerId: e.parentServerId,
                messageResponseServerId: e.questionResponseInfo.responseServerId
            } : null;
            return {
                deletedReason,
                messagePayloadTypesArgs,
                hsmTemplateMixin,
                rawArgs,
                questionsResponseMixin
            };
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()) {
                return null;
            }
            const r = yield o("WAWebDBReportingTokenUtils").getReportingInfosFromMsgKeys([
                e.toString()
            ]);
            if (r.length === 0) {
                return null;
            }
            const senderWid = o("WAWebMsgGetters").getIsStatus(t) ? t.author : o("WAWebMsgGetters").getSender(t);
            const t_messageSecret = t.messageSecret;
            const remoteJid = o("WAWebReportingTokenUtils").getRemoteJidOnReceiverSide(t);
            const u = r.map((reportingInfo)=>o("WAWebDBReportingTokenUtils").createReportingValidationArgs({
                    msgSecret: t_messageSecret,
                    remoteJid,
                    reportingInfo,
                    senderWid
                }));
            return {
                reportingValidationArgs: yield (s || (s = n("Promise"))).all(u)
            };
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        const a = JSON.parse(t[0].buttonParamsJson ?? "{}");
        const i = o("WAWebGalaxyFlowsSessionsCache").getFlowDataForMessage(e.id.id.toString(), e.galaxyFlowQPLMessageId ?? "");
        if (i.length === 0) {
            return null;
        }
        return i.map((t)=>({
                extensionScreenExtensionId: a.flow_id ?? "",
                extensionScreenSessionId: e.galaxyFlowQPLMessageId ?? "",
                extensionScreenT: t.timestamp,
                extensionScreenName: t.screenName,
                extensionScreenEntryPoint: "message_cta",
                dataElementValue: JSON.stringify(t.data ?? {}) ?? ""
            }));
    }
    function f(e, t) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { allowAssociatedMessage = false } = {}) {
            if (!o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type) && !(allowAssociatedMessage && o("WAWebSpamUtils").isSpamSupportedForAssociatedMessageType(t.type))) {
                return null;
            }
            let s = t.id;
            if (t.type === "revoked") {
                s = t.protocolMessageKey ?? t.id;
            }
            try {
                const d = yield c(t);
                const { deletedReason, hsmTemplateMixin, messagePayloadTypesArgs, questionsResponseMixin, rawArgs } = d;
                let C = {
                    messagePayloadTypesArgs,
                    messageT: t.t,
                    messageId: o("WAStanzaUtils").toStanzaId(s.id),
                    rawArgs,
                    messageDeletedReason: deletedReason,
                    messageWithHsmTemplateMixinArgs: hsmTemplateMixin
                };
                if (o("WAWebMsgGetters").getIsEdited(t)) {
                    C = babelHelpers.extends({}, C, {
                        hasMessageEdit: true
                    });
                }
                if (t.type === "revoked") {
                    C = babelHelpers.extends({}, C, t.subtype === "sender" ? {
                        hasRevoke: true
                    } : {
                        hasAdminRevoke: true
                    });
                }
                if (o("WAWebMsgGetters").getIsMarketingMessage(t)) {
                    C = babelHelpers.extends({}, C, {
                        sMBBroadcastSourceMixinArgs: {
                            metaBizSource: "smb_promo"
                        }
                    });
                }
                const clientReportingContentValidationMixinArgs = yield m(s, t);
                if (clientReportingContentValidationMixinArgs != null) {
                    C = babelHelpers.extends({
                        waMessageReportingMixinArgs: {
                            hasRaw: false,
                            clientReportingContentValidationMixinArgs
                        }
                    }, C);
                }
                if (questionsResponseMixin != null) {
                    C = babelHelpers.extends({}, C, {
                        messageWithNewsletterQuestionResponseMixinArgs: questionsResponseMixin
                    });
                }
                if (t?.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW) {
                    const S = t.interactivePayload?.buttons;
                    if (S != null) {
                        const extensionScreenArgs = _(t, S);
                        if (extensionScreenArgs != null) {
                            C = babelHelpers.extends({}, C, {
                                extensionScreenDataMixinArgs: {
                                    extensionScreenArgs
                                }
                            });
                        }
                    }
                }
                if (t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE) {
                    C = babelHelpers.extends({}, C, {
                        hasAutomated: true
                    });
                }
                return C;
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WA-ICE] getMessageMixinArgs failed type=",
                    " sub=",
                    ""
                ])), t.type, t.subtype).tags("wa-ice", "reporting").sendLogs("reporting-get-message-failed");
                throw error;
            }
        });
        return g.apply(this, arguments);
    }
    l.getMessageMixinArgs = f;
}, 98);