__d("WAWebNewsletterMsgUtils", [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebE2EProtoParser",
    "WAWebMsgAIProvenance",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterAdminProfilesSmaxUtils",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgStanzaAdapters",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "decodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (e != null) {
            if (e.name === "NewsletterViewsCountDeprecated") {
                return e.value.viewsCountCount;
            }
            const n = e.value.viewsCount;
            if (o("WAWebNewsletterGatingUtils").isNewsletterViewsVPVDefinitionEnabled()) {
                return n.find((e)=>e.type === "views")?.count ?? n.find((e)=>e.type == null)?.count;
            }
            return n.find((e)=>e.type == null)?.count;
        }
    }
    function u({ msg: u, msgContext: d }, n) {
        const p = new (r("WAWebMsgKey"))({
            remote: u.from,
            fromMe: u.isSender,
            id: u.id
        });
        switch(u.type){
            case "NewsletterReaction":
            case "NewsletterReactionRevoke":
                return o("WAWebNewsletterMsgStanzaAdapters").mapReactionMsgStanza(p, u, d);
            case "NewsletterPollVote":
                return o("WAWebNewsletterMsgStanzaAdapters").mapPollVoteMsgStanza(p, u, d);
        }
        const _ = m(p, u);
        if (u.type === "NewsletterRevoke") {
            return o("WAWebNewsletterMsgStanzaAdapters").mapRevokeMsgStanza({
                msgKey: p,
                msg: u,
                msgContext: d,
                baseMsgData: _,
                parsingContext: n
            });
        }
        const f = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, u.payload);
        const g = o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: f,
            message: _,
            msgContext: n
        });
        const h = c(babelHelpers.extends({}, g, {
            isNewMsg: d.isNewMsg,
            viewCount: d.viewCount ?? void 0,
            forwardsCount: d.forwardsCount ?? void 0,
            questionResponsesCount: d.questionResponsesCount ?? 0,
            hasReaction: !!d.hasReaction,
            latestEditSenderTimestampMs: d.latestEditSenderTimestampMs,
            lastUpdateFromServerTs: d.lastUpdateFromServerTs ?? void 0,
            latestEditMsgKey: d.isEdited === true ? p : void 0,
            serverId: u.serverId
        }));
        if (d.isWamoSub != null && o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled()) {
            h.isWamoSub = d.isWamoSub ?? void 0;
        }
        if (u.newsletterAdminProfile != null) {
            h.newsletterAdminProfile = u.newsletterAdminProfile;
        }
        const C = d.hasPaidPartnershipLabel;
        if (C != null && o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()) {
            h.hasPaidPartnershipLabel = C;
        }
        if (d.hasSelfDisclosedAiContent === true && o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled()) {
            h.aiProvenance = o("WAWebMsgAIProvenance").withSelfDisclosed(h.aiProvenance);
        }
        if (d.isNewsletterStatus === true) {
            h.isNewsletterStatus = true;
        }
        const b = o("WAWebNewsletterFutureProofUtils").isMsgSupported(h);
        const { reason: v, supported: S } = b;
        if (!S) {
            h.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN;
            h.subtype = v;
            h.kind = o("WAWebMsgType").MsgKind.Unknown;
            h.futureproofType = g.type;
            h.futureproofSubtype = g.subtype;
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter] unsupported msg type=",
                " sub=",
                ""
            ])), g.type, g.subtype).sendLogs("unsupported-newsletter-message", {
                sampling: 0.1
            });
        }
        switch(u.type){
            case "NewsletterEdit":
                return o("WAWebNewsletterMsgStanzaAdapters").mapEditMsgStanza(h, n, d);
            case "NewsletterPollCreation":
            case "NewsletterPollResultSnapshot":
            case "NewsletterText":
            case "NewsletterMedia":
                return h;
            case "NewsletterWAMOEmpty":
                return babelHelpers.extends({}, h, {
                    isWamoSub: true,
                    viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN
                });
            default:
                u.type;
                throw r("err")("unreachable code");
        }
    }
    function c(e) {
        e.streamingSidecar = null;
        e.mediaKey = null;
        e.mediaKeyTimestamp = null;
        return e;
    }
    function d({ from: a, hasReaction: l = false, lastUpdateFromServerTs: c, message: d }) {
        const { newsletterMessageHistoryContent: m, id: p, serverId: _, t: f } = d;
        if (m == null || p == null || f == null) {
            return null;
        }
        const g = d.isSender === "true";
        const h = {
            id: p,
            from: a,
            isSender: g,
            to: g ? a : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            t: f,
            serverId: _,
            offline: null,
            newsletterAdminProfile: o("WAWebNewsletterAdminProfilesSmaxUtils").mapAdminProfileInfoFromAdminProfileMixin(d.adminProfileMetaMixin)
        };
        const y = d.newsletterMessageOriginalTimestampMixin?.metaOriginalMsgT;
        const C = babelHelpers.extends({
            hasReaction: l,
            lastUpdateFromServerTs: c,
            viewCount: s(d.newsletterViewsCountViewsOrDeprecatedMixinGroup),
            questionResponsesCount: d.newsletterResponsesCountMixin?.responsesCountCount,
            forwardsCount: d.newsletterForwardsCountMixin?.forwardsCountCount,
            isEdited: m.name === "NewsletterEdit",
            metaOriginalMsgT: y
        }, d.hasPaidPartnershipContentMixin != null && {
            hasPaidPartnershipLabel: d.hasPaidPartnershipContentMixin
        });
        if (d.hasNewsletterAIContentMetaMixin != null) {
            C.hasSelfDisclosedAiContent = d.hasNewsletterAIContentMetaMixin;
        }
        if (o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled()) {
            C.isWamoSub = d.newsletterMessageHistoryContent?.value.wAMOSubMixin?.metaIsWamoSub === "true";
        }
        const v = "history";
        switch(m.name){
            case "NewsletterEdit":
                {
                    const R = d.newsletterMessageLastEditTimestampMixin?.metaMsgEditT;
                    const L = R != null ? o("WATimeUtils").castToMillisTime(R) : void 0;
                    const E = y ?? f;
                    let k = m.value.newsletterQuestionReplyOrTextOrMediaMixinGroup;
                    if (k.name === "NewsletterQuestionReply") {
                        k = k.value.newsletterTextOrMediaMixinGroup;
                    }
                    return u({
                        msg: babelHelpers.extends({}, h, {
                            type: m.name,
                            t: E,
                            payload: k.value.plaintextPayloadMixin.elementValue,
                            msgEditT: R,
                            msgOriginalT: f
                        }),
                        msgContext: babelHelpers.extends({}, C, {
                            latestEditSenderTimestampMs: L
                        })
                    }, v);
                }
            case "NewsletterQuestion":
            case "NewsletterQuestionReply":
                {
                    const I = m.value.newsletterTextOrMediaMixinGroup.value.plaintextPayloadMixin.elementValue;
                    if (m.value.newsletterTextOrMediaMixinGroup.name === "NewsletterMedia") {
                        return u({
                            msg: babelHelpers.extends({}, h, {
                                payload: I,
                                type: "NewsletterMedia"
                            }),
                            msgContext: C
                        }, v);
                    }
                    return u({
                        msg: babelHelpers.extends({}, h, {
                            payload: I,
                            type: "NewsletterText"
                        }),
                        msgContext: C
                    }, v);
                }
            case "NewsletterText":
                return u({
                    msg: babelHelpers.extends({}, h, {
                        payload: m.value.plaintextPayloadMixin.elementValue,
                        type: "NewsletterText"
                    }),
                    msgContext: C
                }, v);
            case "NewsletterQuizCreation":
            case "NewsletterPollCreation":
                return u({
                    msg: babelHelpers.extends({}, h, {
                        payload: m.value.plaintextPayloadMixin.elementValue,
                        type: "NewsletterPollCreation"
                    }),
                    msgContext: C
                }, v);
            case "NewsletterPollResultSnapshot":
                return u({
                    msg: babelHelpers.extends({}, h, {
                        payload: m.value.plaintextPayloadMixin.elementValue,
                        type: m.name
                    }),
                    msgContext: C
                }, v);
            case "NewsletterMedia":
                return u({
                    msg: babelHelpers.extends({}, h, {
                        payload: m.value.plaintextPayloadMixin.elementValue,
                        type: m.name
                    }),
                    msgContext: C
                }, v);
            case "NewsletterRevoke":
                return u({
                    msg: babelHelpers.extends({}, h, {
                        type: m.name
                    }),
                    msgContext: C
                }, v);
            case "NewsletterWAMOEmpty":
                return u({
                    msg: babelHelpers.extends({}, h, {
                        type: m.name
                    }),
                    msgContext: C
                }, v);
            default:
                m.name;
                return null;
        }
    }
    function m(e, t) {
        return {
            ack: o("WAAckLevel").ACK.SENT,
            from: t.from,
            t: t.t,
            to: t.to,
            id: e,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            count: null,
            invis: false
        };
    }
    l.getNewsletterViewCount = s;
    l.mapMsgStanzaToMsgData = u;
    l.cleanupMediaFields = c;
    l.mapNewsletterMsgToMsgData = d;
}, 98);