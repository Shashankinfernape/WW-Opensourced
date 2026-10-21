__d("WAWebParseTemplateMessageProto", [
    "WAWebBizTemplateAndInteractiveMessagesUtils",
    "WAWebE2EProtoUtils",
    "WAWebMmSignalSharingContextInfo",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMsgType",
    "WAWebParseDocumentMessageProto",
    "WAWebParseImageMessageProto",
    "WAWebParseInteractiveMessageProto",
    "WAWebParseLocationMessageProto",
    "WAWebParseVideoMessageProto",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    function e({ baseMessage: n, bizInfo: a, messageProtobuf: i, msgContext: l }) {
        const u = i.templateMessage;
        if (u != null && !(l === "relay" && a?.verifiedHsmEnvelope !== true)) {
            const c = u.interactiveMessageTemplate;
            if (c) {
                return s({
                    baseMessage: n,
                    bizInfo: a,
                    msgContext: l,
                    templateMessage: u
                });
            }
            const d = u.hydratedTemplate ?? r("nullthrows")(u.hydratedFourRowTemplate);
            const { documentMessage: m, hydratedButtons: p, hydratedContentText: _, hydratedFooterText: f, hydratedTitleText: g, imageMessage: h, locationMessage: y, templateId: C, videoMessage: b } = d;
            const v = function() {
                const e = babelHelpers.extends({}, n, {
                    type: o("WAWebMsgType").MSG_TYPE.CHAT,
                    kind: o("WAWebMsgType").MsgKind.Chat
                }, !!_ && {
                    body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(_)
                });
                if (h) {
                    return r("WAWebParseImageMessageProto")({
                        messageProtobuf: {
                            imageMessage: h
                        },
                        baseMessage: n,
                        msgContext: l
                    })?.msgData ?? e;
                }
                if (m) {
                    return r("WAWebParseDocumentMessageProto")({
                        messageProtobuf: {
                            documentMessage: m
                        },
                        baseMessage: n,
                        msgContext: l
                    })?.msgData ?? e;
                }
                if (y) {
                    return r("WAWebParseLocationMessageProto")({
                        messageProtobuf: {
                            locationMessage: y
                        },
                        baseMessage: n,
                        msgContext: l
                    })?.msgData ?? e;
                }
                if (b) {
                    return r("WAWebParseVideoMessageProto")({
                        messageProtobuf: {
                            videoMessage: b
                        },
                        baseMessage: n,
                        msgContext: l
                    })?.msgData ?? e;
                }
                return e;
            };
            if (o("WAWebBizTemplateAndInteractiveMessagesUtils").buttonsViolateButtonImprovementsConstraints(p.map((e)=>({
                    hydratedTemplateButton: e
                })))) {
                return {
                    msgData: babelHelpers.extends({}, n, {
                        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                        kind: o("WAWebMsgType").MsgKind.Unknown,
                        subtype: "phone_only_feature"
                    }),
                    contextInfo: void 0
                };
            }
            const S = v();
            const R = p.length > 0 ? {
                hydratedButtons: p
            } : {};
            return {
                msgData: babelHelpers.extends({}, S, {
                    templateId: C,
                    isFromTemplate: true,
                    caption: _ ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(_) : S.caption,
                    footer: f ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(f) : S.footer,
                    title: g ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(g) : S.title
                }, R),
                contextInfo: void 0
            };
        }
    }
    function s(e) {
        let t;
        const { baseMessage: l, bizInfo: s, msgContext: u, templateMessage: c } = e;
        const { contextInfo: d, interactiveMessageTemplate: m, templateId: p } = c;
        const _ = babelHelpers.extends({}, l, {
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat
        }, !!(!(m == null || (t = m.body) == null) && t.text) && {
            body: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(m?.body?.text)
        });
        const f = r("WAWebParseInteractiveMessageProto")({
            messageProtobuf: {
                interactiveMessage: m
            },
            baseMessage: l,
            msgContext: u,
            bizSource: l.bizSource || "",
            bizInfo: s
        })?.msgData ?? _;
        return {
            msgData: babelHelpers.extends({}, f, {
                templateId: p,
                isFromTemplate: true,
                caption: f.caption,
                footer: f.footer,
                title: f.title
            }),
            contextInfo: o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled() && (o("WAWebMmSignalSharingContextInfo").existsMmSignalSharingContextInfoDisclosureFlag() || o("WAWebMmSignalSharingContextInfo").existsMmSignalSharingURlTrackingMapElements() != null) ? d : void 0
        };
    }
    l.default = e;
}, 98);