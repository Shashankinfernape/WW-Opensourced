__d("WAWebNewsletterSendMessageQueryJob", [
    "WASmaxMessagePublishNewsletterRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(e.newsletterJid);
            const t = {
                messageTo: e.newsletterJid,
                clientNewsletterAndServerOrNewsletterIDMixinGroupArgs: u(e)
            };
            const n = yield o("WASmaxMessagePublishNewsletterRPC").sendNewsletterRPC(t);
            switch(n.name){
                case "NewsletterResponseSuccess":
                    return {
                        success: true,
                        ack: {
                            t: n.value.newsletterQuestionResponseOrNewsletterMessageAckMixinGroup.value.t
                        },
                        serverId: n.value.newsletterQuestionResponseOrNewsletterMessageAckMixinGroup.value.serverId
                    };
                case "NewsletterResponseNegative":
                    return {
                        success: false,
                        ack: {
                            t: n.value.t,
                            error: n.value.error
                        }
                    };
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        switch(e.type){
            case "reaction":
                return c(e);
            case "pollVote":
                return d(e);
            case "newsletterQuestionResponse":
                return m(e);
            default:
                return {
                    newsletterClientID: p(e)
                };
        }
    }
    function c(e) {
        const e_reactionCode = e.reactionCode;
        const newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs = e_reactionCode != null && e_reactionCode !== "" ? {
            newsletterReaction: {
                reactionCode: e_reactionCode
            }
        } : {
            isNewsletterReactionRevoke: true
        };
        return {
            newsletterClientAndServerID: {
                messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                messageServerId: e.parentMsgServerId,
                newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs
            }
        };
    }
    function d(e) {
        const newsletterPollVote = {
            voteArgs: e.votes.map((voteElementValue)=>({
                    voteElementValue
                }))
        };
        return {
            newsletterClientAndServerID: {
                messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                messageServerId: e.parentMsgServerId,
                newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs: {
                    newsletterPollVote
                }
            }
        };
    }
    function m(e) {
        return {
            newsletterClientAndServerID: {
                messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                messageServerId: e.parentMsgServerId,
                newsletterQuestionResponsePublishOrReactionOrReactionRevokeOrPollVoteMixinGroupArgs: {
                    newsletterQuestionResponsePublish: {
                        payloadMixinArgs: {
                            plaintextElementValue: e.payload
                        }
                    }
                }
            }
        };
    }
    function p(e) {
        switch(e.type){
            case "editText":
                return {
                    messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                    hasNewsletterAIContentMeta: e.hasNewsletterAIContentMeta,
                    newsletterClientIdContentArgs: {
                        newsletterEdit: {
                            hasWAMOSub: e.isWamoSub,
                            newsletterQuestionReplyOrTextOrMediaMixinGroupArgs: {
                                newsletterText: {
                                    payloadMixinArgs: {
                                        plaintextElementValue: e.payload
                                    }
                                }
                            }
                        }
                    }
                };
            case "editMedia":
                {
                    const t = e.contentId == null ? null : {
                        senderContentTypeMediaRCATMixinArgs: {
                            plaintextContentId: e.contentId
                        }
                    };
                    return babelHelpers.extends({
                        messageId: o("WAStanzaUtils").toStanzaId(e.messageId)
                    }, t, {
                        hasNewsletterAIContentMeta: e.hasNewsletterAIContentMeta,
                        newsletterClientIdContentArgs: {
                            newsletterEdit: {
                                hasWAMOSub: e.isWamoSub,
                                newsletterQuestionReplyOrTextOrMediaMixinGroupArgs: {
                                    newsletterMedia: {
                                        payloadMixinArgs: {
                                            plaintextElementValue: e.payload
                                        },
                                        plaintextMediatype: e.mediaType
                                    }
                                }
                            }
                        }
                    });
                }
            case "revoke":
                return {
                    messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                    newsletterClientIdContentArgs: {
                        newsletterRevoke: {
                            hasWAMOSub: e.isWamoSub
                        }
                    }
                };
            case "pollCreation":
                return {
                    messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                    newsletterClientIdContentArgs: {
                        newsletterPollCreation: {
                            payloadMixinArgs: {
                                plaintextElementValue: e.payload
                            },
                            hasWAMOSub: e.isWamoSub,
                            metaContenttype: e.contentType
                        }
                    }
                };
            case "pollResultSnapshot":
                return {
                    messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                    newsletterClientIdContentArgs: {
                        newsletterPollResultSnapshot: {
                            payloadMixinArgs: {
                                plaintextElementValue: e.payload
                            },
                            hasWAMOSub: e.isWamoSub
                        }
                    }
                };
            case "text":
                return {
                    messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                    hasNewsletterAIContentMeta: e.hasNewsletterAIContentMeta,
                    newsletterClientIdContentArgs: babelHelpers.extends({}, _({
                        newsletterText: {
                            payloadMixinArgs: {
                                plaintextElementValue: e.payload
                            },
                            hasWAMOSub: e.isWamoSub
                        }
                    }, e.isQuestion, e.questionReplyQuotedMessage))
                };
            case "url":
                return {
                    messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                    senderContentTypeMediaRCATMixinArgs: {
                        plaintextContentId: e.contentId
                    },
                    hasNewsletterAIContentMeta: e.hasNewsletterAIContentMeta,
                    newsletterClientIdContentArgs: babelHelpers.extends({}, _({
                        newsletterMediaPublish: {
                            plaintextMediatype: e.type,
                            payloadMixinArgs: {
                                plaintextElementValue: e.payload
                            },
                            messageMediaId: e.mediaHandle,
                            hasWAMOSub: e.isWamoSub,
                            messageAssociationTypeMixinArgs: e.messageAssociationTypeMixinArgs
                        }
                    }, e.isQuestion, e.questionReplyQuotedMessage))
                };
            case "audio":
            case "avatar_sticker":
            case "document":
            case "gif":
            case "image":
            case "ptt":
            case "sticker":
            case "sticker_pack":
            case "vcard":
            case "video":
                return {
                    messageId: o("WAStanzaUtils").toStanzaId(e.messageId),
                    hasNewsletterAIContentMeta: e.hasNewsletterAIContentMeta,
                    newsletterClientIdContentArgs: babelHelpers.extends({}, _({
                        newsletterMediaPublish: {
                            plaintextMediatype: e.type,
                            payloadMixinArgs: {
                                plaintextElementValue: e.payload
                            },
                            messageMediaId: e.mediaHandle,
                            hasWAMOSub: e.isWamoSub,
                            messageAssociationTypeMixinArgs: e.messageAssociationTypeMixinArgs
                        }
                    }, e.isQuestion, e.questionReplyQuotedMessage))
                };
            default:
                e.type;
                throw r("err")(`Wrong code path for ${e.type}`);
        }
    }
    function _(newsletterTextOrMediaPublishMixinGroupArgs, isQuestion, questionReplyQuotedMessage) {
        if (isQuestion) {
            return {
                newsletterQuestionPublish: {
                    newsletterTextOrMediaPublishMixinGroupArgs
                }
            };
        }
        if (questionReplyQuotedMessage) {
            if (questionReplyQuotedMessage.quotedResponse.questionResponseInfo?.responseServerId == null) {
                throw r("err")("Missing response server id for question reply");
            }
            return {
                newsletterQuestionReplyPublish: {
                    metaParentServerId: questionReplyQuotedMessage.questionServerId,
                    metaResponseServerId: questionReplyQuotedMessage.quotedResponse.questionResponseInfo?.responseServerId,
                    newsletterTextOrMediaPublishMixinGroupArgs
                }
            };
        }
        return newsletterTextOrMediaPublishMixinGroupArgs;
    }
    l.querySendNewsletterMessage = e;
}, 98);