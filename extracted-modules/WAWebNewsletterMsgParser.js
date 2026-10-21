__d("WAWebNewsletterMsgParser", [
    "WASmaxMessageDeliverNewsletterRPC",
    "WASmaxParsingFailure",
    "WAWebJidToWid",
    "WAWebNewsletterAdminProfilesSmaxUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsBEUtils",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const r = o("WASmaxMessageDeliverNewsletterRPC").receiveNewsletterRPC(e);
        const { makeNewsletterResponseSuccess: a, parsedRequest: i } = r;
        const l = {
            id: i.id,
            t: i.t,
            isSender: i.isSender === "true",
            serverId: i.serverId,
            offline: i.offlineMixin?.offline,
            from: o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: i.from
            }),
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            newsletterAdminProfile: o("WAWebNewsletterAdminProfilesSmaxUtils").mapAdminProfileInfoFromAdminProfileMixin(i.adminProfileMetaMixin)
        };
        const s = i.newsletterMessageFanoutContent.value.wAMOSubMixin?.metaIsWamoSub;
        if (s != null && o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled()) {
            l.isWamoSub = s === "true";
        }
        const u = i.hasPaidPartnershipContentMixin;
        if (o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()) {
            l.hasPaidPartnershipLabel = u;
        }
        if (o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled()) {
            l.hasSelfDisclosedAiContent = i.hasNewsletterAIContentMetaMixin;
        }
        return {
            ack: a(),
            msg: d(l, i)
        };
    }
    function s(e) {
        return e.reactionCode;
    }
    function u(e) {
        return e.votesVote.map(({ elementValue: t })=>t);
    }
    function c(e) {
        return e.plaintextPayloadMixin.elementValue;
    }
    function d(e, t) {
        const n = t.newsletterMessageFanoutContent;
        switch(n.name){
            case "NewsletterPollVote":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterPollVote",
                    pollVote: u(n.value)
                });
            case "NewsletterReaction":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterReaction",
                    reactionCode: s(n.value)
                });
            case "NewsletterReactionRevoke":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterReactionRevoke",
                    reactionCode: o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
                });
            case "NewsletterRevoke":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterRevoke"
                });
            case "NewsletterMedia":
                return babelHelpers.extends({}, e, {
                    type: n.name,
                    payload: c(n.value)
                });
            case "NewsletterQuestion":
            case "NewsletterQuestionReply":
                {
                    const r = babelHelpers.extends({}, e, {
                        payload: c(n.value.newsletterTextOrMediaMixinGroup.value)
                    });
                    if (n.value.newsletterTextOrMediaMixinGroup.name === "NewsletterText") {
                        return babelHelpers.extends({}, r, {
                            type: "NewsletterText"
                        });
                    }
                    return babelHelpers.extends({}, r, {
                        type: "NewsletterMedia"
                    });
                }
            case "NewsletterQuestionResponse":
            case "NewsletterText":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterText",
                    payload: c(n.value)
                });
            case "NewsletterPollCreation":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterPollCreation",
                    payload: c(n.value)
                });
            case "NewsletterEdit":
                {
                    const l = n.value.newsletterQuestionReplyOrTextOrMediaMixinGroup;
                    let d;
                    switch(l.name){
                        case "NewsletterQuestionReply":
                            d = c(l.value.newsletterTextOrMediaMixinGroup.value);
                            break;
                        case "NewsletterText":
                        case "NewsletterMedia":
                            d = c(l.value);
                            break;
                        default:
                            l.name;
                            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure("unrecognized-newsletter-edit-type");
                    }
                    return babelHelpers.extends({}, e, {
                        type: "NewsletterEdit",
                        payload: d,
                        msgEditT: t.newsletterMessageLastEditTimestampMixin?.metaMsgEditT,
                        msgOriginalT: t.newsletterMessageOriginalTimestampMixin?.metaOriginalMsgT
                    });
                }
            case "NewsletterPollResultSnapshot":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterPollResultSnapshot",
                    payload: c(n.value)
                });
            case "NewsletterWAMOEmpty":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterWAMOEmpty"
                });
            case "NewsletterQuizCreation":
                return babelHelpers.extends({}, e, {
                    type: "NewsletterPollCreation",
                    payload: c(n.value)
                });
            default:
                n.name;
                throw new (o("WASmaxParsingFailure")).SmaxParsingFailure("unrecognized-newsletter-message-type");
        }
    }
    l.default = e;
}, 98);