__d("WAWebNewsletterStatusUtils", [
    "WAAckLevel",
    "WALogger",
    "WAWebE2EProtoParser",
    "WAWebEmoji",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "decodeProtobuf"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t, n) {
        const r = m(e, t);
        const a = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n);
        const i = o("WAWebE2EProtoParser").parseMsgProto({
            messageProtobuf: a,
            message: r,
            msgContext: "relay"
        });
        return o("WAWebNewsletterMsgUtils").cleanupMediaFields(babelHelpers.extends({}, i, {
            serverId: e.serverId,
            isNewMsg: true,
            latestEditMsgKey: void 0
        }));
    }
    function u(e, t) {
        const n = m(e, t);
        const a = e.isSender === "true";
        const i = new (r("WAWebMsgKey"))({
            remote: t,
            fromMe: a,
            id: e.id
        });
        return babelHelpers.extends({}, n, {
            serverId: e.serverId,
            isNewMsg: true,
            id: new (r("WAWebMsgKey"))({
                remote: t,
                fromMe: a,
                id: r("WAWebMsgKey").newId_DEPRECATED()
            }),
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
            subtype: "admin_revoke",
            protocolMessageKey: i,
            viewMode: o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE
        });
    }
    function c(t, n) {
        const r = t.statusNewsletterContentMixin;
        if (r == null) {
            return null;
        }
        const a = r.newsletterStatusContentTypeMixins;
        switch(a.name){
            case "StatusNewsletterReaction":
            case "StatusNewsletterReactionRevoke":
            case "StatusNewsletterRevoke":
                return null;
            case "StatusNewsletterText":
            case "StatusNewsletterMedia":
                {
                    if (t.id == null || t.t == null) {
                        return null;
                    }
                    const i = a.value.plaintextNewsletterPlaintextPayloadMixin.elementValue;
                    const l = {
                        id: t.id,
                        serverId: t.serverId,
                        t: t.t,
                        isSender: t.isSender === "true",
                        from: n,
                        to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
                        offline: null,
                        newsletterAdminProfile: null,
                        payload: i
                    };
                    const s = a.name === "StatusNewsletterText" ? babelHelpers.extends({}, l, {
                        type: "NewsletterText"
                    }) : babelHelpers.extends({}, l, {
                        type: "NewsletterMedia"
                    });
                    const u = babelHelpers.extends({
                        isNewMsg: false,
                        isNewsletterStatus: true
                    }, o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() ? {
                        hasPaidPartnershipLabel: t.hasStatusPaidPartnershipContentMixin
                    } : void 0);
                    if (o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled()) {
                        u.hasSelfDisclosedAiContent = t.hasStatusAIContentMetaMixin;
                    }
                    return o("WAWebNewsletterMsgUtils").mapMsgStanzaToMsgData({
                        msg: s,
                        msgContext: u
                    }, "relay");
                }
            default:
                a.name;
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] Unhandled status content type: ",
                    ""
                ])), a.name).sendLogs("newsletter-status-unhandled-type");
                return null;
        }
    }
    function d(e) {
        if (e == null || e.length === 0) {
            return null;
        }
        const t = new Map;
        for (const n of e){
            const a = o("WAWebEmoji").EmojiUtil.getNormalizedOrTofu(n.code);
            t.set(a, (t.get(a) ?? 0) + n.count);
        }
        return t;
    }
    function m(e, t) {
        const n = e.isSender === "true";
        const a = new (r("WAWebMsgKey"))({
            remote: t,
            fromMe: n,
            id: e.id
        });
        return {
            ack: o("WAAckLevel").ACK.SENT,
            from: t,
            t: e.t,
            to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            id: a,
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            count: null,
            invis: false
        };
    }
    l.mapStatusStanzaToMsgData = s;
    l.mapStatusRevokeToMsgData = u;
    l.mapStatusEntryToMsgData = c;
    l.buildEmojiCountMap = d;
}, 98);