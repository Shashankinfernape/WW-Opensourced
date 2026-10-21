__d("WAWebParseInteractiveMessageProto", [
    "WAWebBotUtils",
    "WAWebE2EProtoParserApi",
    "WAWebE2EProtoUtils",
    "WAWebHandleMsgError",
    "WAWebHsmGatingUtils",
    "WAWebInteractiveMessageCarouselConstants",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMaibaWASSMigration",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNativeFlowValidation",
    "WAWebParseDocumentMessageProto",
    "WAWebParseImageMessageProto",
    "WAWebParseProductMessageProto",
    "WAWebParseVideoMessageProto",
    "WAWebStripBrazilPaymentState",
    "WAWebWamEnumE2eFailureReason",
    "filterNulls"
], function(t, n, r, o, a, i, l) {
    const e = "im_a2ui";
    function s({ baseMessage: i, bizInfo: l, bizSource: s, messageProtobuf: d, msgContext: _ }) {
        const f = d.interactiveMessage;
        if (f != null) {
            const g = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(f);
            if (!g || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(g)) {
                return p(i, f);
            }
            const { body: h, footer: y } = f;
            const C = o("WAWebE2EProtoUtils").getInteractiveMessageFieldNameForType(g);
            let b = {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                kind: o("WAWebMsgType").MsgKind.Interactive,
                caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(h?.text) ?? "",
                interactiveType: g,
                interactivePayload: f[C],
                pmCampaignId: l?.campaignId,
                bizSource: s
            };
            if (!o("WAWebE2EProtoUtils").isSupportedInteractiveMessageVersion(g, f[C])) {
                return p(i, f);
            }
            const v = m(f);
            const S = v?.type === e && o("WAWebHsmGatingUtils").isBloksWidgetEnabled();
            let R = null;
            const L = f.carouselMessage;
            if (L != null && (R = c({
                baseMessage: i,
                bizInfo: l,
                bizSource: s,
                carouselMessage: L,
                msgContext: _
            }), R == null)) {
                return p(i, f);
            }
            if (g === r("WAWebInteractiveMessageType").NATIVE_FLOW) {
                const E = r("WAWebInteractiveMessagesNativeFlowName").cast(o("WAWebE2EProtoUtils").getBizNativeFlowName({
                    interactiveMessage: f
                }));
                b = babelHelpers.extends({}, b, {
                    nativeFlowName: E,
                    interactivePayload: o("WAWebStripBrazilPaymentState").stripBrazilPaymentState(f.nativeFlowMessage)
                });
                if (!S && (_ === "relay" || _ === "history")) {
                    const T = i?.id?.remote != null && (o("WAWebBotUtils").isAnyMetaAiBot(i.id.remote) || o("WAWebMaibaWASSMigration").isMaibaAiHubLid(i.id.remote) || i.id.remote.isSupportAgentBot());
                    const D = T || o("WAWebE2EProtoUtils").isValidNativeFlowName({
                        name: E,
                        bizInfo: l,
                        msgContext: _
                    });
                    if (!D || !o("WAWebNativeFlowValidation").isValidNativeFlowMessage({
                        baseMessage: i,
                        bizSource: s,
                        fromMe: i?.id?.fromMe,
                        msg: b
                    })) {
                        return p(i, f);
                    }
                }
            }
            const x = f.header != null ? u(f.header, i, _) : void 0;
            return {
                msgData: babelHelpers.extends({}, i, x?.headerMessage ?? {}, b, {
                    interactiveHeader: x?.interactiveHeader,
                    footer: y ? o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(y.text) : i.footer,
                    carouselCardsParsed: R ?? void 0,
                    bloksWidget: v
                }),
                contextInfo: f.contextInfo
            };
        }
    }
    function u(e, t, n) {
        const a = function() {
            if (e.imageMessage) {
                const i = r("WAWebParseImageMessageProto")({
                    messageProtobuf: {
                        imageMessage: e.imageMessage
                    },
                    baseMessage: t,
                    msgContext: n
                })?.msgData;
                if (i && i.kind !== o("WAWebMsgType").MsgKind.Image) {
                    throw new (o("WAWebHandleMsgError")).MessageValidationError("parseInteractiveHeaderMessageProto: header imageMessage is not an ImageMsgData", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                return {
                    headerMessage: i,
                    mediaType: o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.IMAGE
                };
            }
            if (e.documentMessage) {
                return {
                    headerMessage: r("WAWebParseDocumentMessageProto")({
                        messageProtobuf: {
                            documentMessage: e.documentMessage
                        },
                        baseMessage: t,
                        msgContext: n
                    })?.msgData,
                    mediaType: o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.DOCUMENT
                };
            }
            if (e.videoMessage) {
                const u = r("WAWebParseVideoMessageProto")({
                    messageProtobuf: {
                        videoMessage: e.videoMessage
                    },
                    baseMessage: t,
                    msgContext: n
                })?.msgData;
                if (u && u.kind !== o("WAWebMsgType").MsgKind.Video) {
                    throw new (o("WAWebHandleMsgError")).MessageValidationError("parseInteractiveHeaderMessageProto: header videoMessage is not an VideoMsgData", o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE);
                }
                return {
                    headerMessage: u,
                    mediaType: o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.VIDEO
                };
            }
            if (e.productMessage) {
                const d = r("WAWebParseProductMessageProto")({
                    messageProtobuf: {
                        productMessage: e.productMessage
                    },
                    baseMessage: t,
                    msgContext: n
                })?.msgData;
                return {
                    headerMessage: d,
                    mediaType: o("WAWebInteractiveMessageHeaderMediaType").InteractiveMessageHeaderMediaType.PRODUCT
                };
            }
        };
        const i = e.hasMediaAttachment === true ? a() : void 0;
        return {
            headerMessage: i?.headerMessage,
            interactiveHeader: {
                title: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(e.title),
                subtitle: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(e.subtitle),
                thumbnail: o("WAWebE2EProtoParserApi").decodeBytes(e.jpegThumbnail),
                hasMediaAttachment: !!e.hasMediaAttachment,
                mediaType: i?.mediaType
            }
        };
    }
    function c({ baseMessage: t, bizInfo: n, bizSource: a, carouselMessage: i, msgContext: l }) {
        if (i.cards.length > o("WAWebInteractiveMessageCarouselConstants").MAX_CAROUSEL_CARDS) {
            return null;
        }
        const s = i.cards.map((e)=>d({
                baseMessage: t,
                bizInfo: n,
                bizSource: a,
                card: e,
                msgContext: l
            }));
        const u = r("filterNulls")(s);
        if (u.length === 0) {
            return null;
        }
        return u;
    }
    function d({ baseMessage: n, bizInfo: a, bizSource: i, card: l, msgContext: s }) {
        const { body: c, header: d } = l;
        const m = o("WAWebE2EProtoUtils").getInteractiveMessageTypeForProto(l);
        if (!m || !o("WAWebE2EProtoUtils").isInteractiveMessageTypeEnabled(m)) {
            return null;
        }
        const p = babelHelpers.extends({}, d, {
            type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
            kind: o("WAWebMsgType").MsgKind.Interactive,
            caption: o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(c?.text) ?? "",
            interactiveType: m,
            interactivePayload: l.nativeFlowMessage,
            pmCampaignId: a?.campaignId,
            bizSource: i
        });
        const _ = d != null ? u(d, n, s) : void 0;
        const f = _?.headerMessage;
        if (_ == null || f == null) {
            return null;
        }
        const g = babelHelpers.extends({}, _.interactiveHeader, {
            title: null,
            subtitle: null
        });
        const h = new (r("WAWebMsgKey"))({
            fromMe: f.id.fromMe,
            remote: f.id.remote,
            participant: f.id.participant,
            id: r("WAWebMsgKey").newId_DEPRECATED()
        });
        if (f.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
            return babelHelpers.extends({}, f, p, {
                id: h,
                interactiveHeader: g,
                footer: null,
                isCarouselCard: true,
                parentMsgId: n.id.clone(),
                bloksWidget: null
            });
        }
        if (f.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
            return babelHelpers.extends({}, f, p, {
                id: h,
                interactiveHeader: g,
                footer: null,
                isCarouselCard: true,
                parentMsgId: n.id.clone(),
                bloksWidget: null
            });
        }
        if (f.type === o("WAWebMsgType").MSG_TYPE.PRODUCT) {
            return babelHelpers.extends({}, f, p, {
                id: h,
                interactiveHeader: g,
                footer: null,
                isCarouselCard: true,
                parentMsgId: n.id.clone(),
                bloksWidget: null
            });
        }
    }
    function m(e) {
        if (e.bloksWidget != null) {
            return {
                uuid: e.bloksWidget.uuid ?? null,
                data: e.bloksWidget.data ?? null,
                type: e.bloksWidget.type ?? null,
                fallback: e.bloksWidget.fallback ?? null
            };
        }
        if (e.header?.bloksWidget != null) {
            return {
                uuid: e.header.bloksWidget.uuid ?? null,
                data: e.header.bloksWidget.data ?? null,
                type: e.header.bloksWidget.type ?? null,
                fallback: e.header.bloksWidget.fallback ?? null
            };
        }
        return null;
    }
    function p(e, t) {
        return {
            msgData: babelHelpers.extends({}, e, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: "phone_only_feature"
            }),
            contextInfo: t.contextInfo
        };
    }
    l.default = s;
}, 98);