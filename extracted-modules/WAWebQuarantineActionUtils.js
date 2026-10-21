__d("WAWebQuarantineActionUtils", [
    "WAWebApiContact",
    "WAWebBotUtils",
    "WAWebFutureproofProtoUtils",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = [
        "$$unknownFieldCount",
        "associatedChildMessage",
        "bcallMessage",
        "botForwardedMessage",
        "botInvokeMessage",
        "call",
        "chat",
        "deviceSentMessage",
        "documentWithCaptionMessage",
        "editedMessage",
        "ephemeralMessage",
        "fastRatchetKeySenderKeyDistributionMessage",
        "groupMentionedMessage",
        "groupRootKeyShare",
        "messageContextInfo",
        "messageHistoryBundle",
        "newsletterAdminProfileMessage",
        "placeholderMessage",
        "pollCreationMessageV4",
        "pollCreationOptionImageMessage",
        "questionMessage",
        "questionReplyMessage",
        "rootSecretDistributeMessage",
        "secretEncryptedMessage",
        "senderKeyDistributionMessage",
        "spoilerMessage",
        "stickerSyncRmrMessage",
        "viewOnceMessage",
        "viewOnceMessageV2",
        "viewOnceMessageV2Extension"
    ];
    const s = 5;
    const u = 3;
    function c() {
        const e = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
        return e.defenseMode === "on_standard";
    }
    const d = {
        type: "NoQuarantine"
    };
    const m = {
        type: "QuarantineWithoutText"
    };
    function p(e) {
        return {
            type: "QuarantineWithText",
            text: e
        };
    }
    const _ = {
        NoQuarantine: d,
        QuarantineWithoutText: m,
        QuarantineWithText: p
    };
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return r("WAWebWid").isUser(e) && !o("WAWebUserPrefsMeUser").isMeAccount(e) && !(r("WAWebWid").isPSA(e) || r("WAWebWid").isIAS(e) || r("WAWebWid").isOfficialBizAccount(e) || r("WAWebWid").isSupportAccount(e) || r("WAWebWid").isCAPISupportAccount(e) || r("WAWebWid").isAiHub(e) || o("WAWebBotUtils").isAnyMetaAiBot(e)) && !(yield o("WAWebApiContact").isAddressBookContact(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(e))));
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        if (e.type === "QuarantineWithText") {
            return e.text;
        }
        return null;
    }
    function y(e) {
        if (r("isStringNullOrEmpty")(e)) {
            return _.QuarantineWithoutText;
        }
        return _.QuarantineWithText(e);
    }
    function C(e) {
        if (e == null) {
            return false;
        }
        return e.jpegThumbnail != null || e.thumbnailDirectPath != null || e.mediaKey != null || e.thumbnailSha256 != null || e.contextInfo?.externalAdReply?.thumbnail != null;
    }
    function b(e, t = 0) {
        if (e == null) {
            return true;
        }
        if (t > s) {
            return false;
        }
        return v(e.hydratedHsm, t + 1);
    }
    function v(e, t = 0) {
        if (e == null) {
            return true;
        }
        if (t > s) {
            return false;
        }
        const n = t + 1;
        return !(!L(e.interactiveMessageTemplate, n) || !S(e.fourRowTemplate, n) || !R(e.hydratedFourRowTemplate, n) || !R(e.hydratedTemplate, n));
    }
    function S(e, t = 0) {
        if (e == null) {
            return true;
        }
        if (t > s || e.documentMessage != null || e.imageMessage != null || e.videoMessage != null || e.locationMessage != null) {
            return false;
        }
        const n = t + 1;
        if (!b(e.highlyStructuredMessage, n) || !b(e.content, n) || !b(e.footer, n)) {
            return false;
        }
        const r = e.buttons;
        if (r != null) {
            for (const o of r){
                if (!E(o, n)) {
                    return false;
                }
            }
        }
        return true;
    }
    function R(e, t = 0) {
        if (e == null) {
            return true;
        }
        return !(t > s || e.documentMessage != null || e.imageMessage != null || e.videoMessage != null || e.locationMessage != null);
    }
    function L(e, t = 0) {
        if (e == null) {
            return true;
        }
        if (t > s) {
            return false;
        }
        const r = e.header;
        if (r != null && (r.documentMessage != null || r.imageMessage != null || r.jpegThumbnail != null || r.videoMessage != null || r.locationMessage != null || r.productMessage != null) || e.shopStorefrontMessage != null || e.collectionMessage != null) {
            return false;
        }
        const o = e.carouselMessage?.cards;
        if (o != null) {
            for (const a of o){
                if (!L(a, t + 1)) {
                    return false;
                }
            }
        }
        return true;
    }
    function E(e, t = 0) {
        if (e == null) {
            return true;
        }
        if (t > s) {
            return false;
        }
        const l = t + 1;
        return !(!b(e.quickReplyButton?.displayText, l) || !b(e.urlButton?.displayText, l) || !b(e.urlButton?.url, l) || !b(e.callButton?.displayText, l) || !b(e.callButton?.phoneNumber, l));
    }
    function k(t) {
        const { $$unknownFieldCount: n, associatedChildMessage: r, bcallMessage: o, botForwardedMessage: a, botInvokeMessage: i, call: l, chat: s, deviceSentMessage: u, documentWithCaptionMessage: c, editedMessage: d, ephemeralMessage: m, fastRatchetKeySenderKeyDistributionMessage: p, groupMentionedMessage: _, groupRootKeyShare: f, messageContextInfo: g, messageHistoryBundle: h, newsletterAdminProfileMessage: y, placeholderMessage: C, pollCreationMessageV4: b, pollCreationOptionImageMessage: v, questionMessage: S, questionReplyMessage: R, rootSecretDistributeMessage: L, secretEncryptedMessage: E, senderKeyDistributionMessage: k, spoilerMessage: I, stickerSyncRmrMessage: T, viewOnceMessage: D, viewOnceMessageV2: x, viewOnceMessageV2Extension: $ } = t;
        const P = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return (n ?? 0) === 0 && Object.values(P).every((e)=>e == null);
    }
    function I(e) {
        if (k(e)) {
            return _.NoQuarantine;
        }
        const t = e.extendedTextMessage;
        if (t != null) {
            if (C(t)) {
                return y(t.text);
            }
            return _.NoQuarantine;
        }
        if (e.imageMessage != null) {
            return y(e.imageMessage.caption);
        }
        if (e.videoMessage != null) {
            return y(e.videoMessage.caption);
        }
        if (e.documentMessage != null) {
            return y(e.documentMessage.caption);
        }
        if (T(e)) {
            return _.NoQuarantine;
        }
        if (e.highlyStructuredMessage != null || e.templateMessage != null || e.interactiveMessage != null) {
            if (b(e.highlyStructuredMessage) && v(e.templateMessage) && L(e.interactiveMessage)) {
                return _.NoQuarantine;
            }
            return _.QuarantineWithoutText;
        }
        if (e.callLogMesssage != null) {
            return _.NoQuarantine;
        }
        return _.QuarantineWithoutText;
    }
    function T(e) {
        return e.conversation != null || e.protocolMessage != null || e.reactionMessage != null || e.encReactionMessage != null || e.pollUpdateMessage != null || e.keepInChatMessage != null || e.pinInChatMessage != null || e.albumMessage != null;
    }
    function D(e) {
        switch(e.type){
            case "NoQuarantine":
                return 0;
            case "QuarantineWithoutText":
                return 1;
            case "QuarantineWithText":
                return 2;
            default:
                return 0;
        }
    }
    function x(e, t) {
        if (D(t) > D(e)) {
            return t;
        }
        return e;
    }
    function $(e, t = 0) {
        let a = I(e);
        const i = o("WAWebFutureproofProtoUtils").maybeGetFutureproofMessage(e)?.message;
        const l = e.protocolMessage?.editedMessage;
        const s = o("WAWebFutureproofProtoUtils").hasGatedOffFutureproofWrapper(e);
        if (t >= u && (i != null || l != null || s)) {
            return x(a, _.QuarantineWithoutText);
        }
        if (!(t >= u)) {
            if (i != null) {
                a = x(a, $(i, t + 1));
            }
            if (s) {
                a = x(a, _.QuarantineWithoutText);
            }
            if (l != null) {
                a = x(a, $(l, t + 1));
            }
        }
        return a;
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e == null || !c() || !(yield f(t))) {
                return _.NoQuarantine;
            }
            return $(e);
        });
        return N.apply(this, arguments);
    }
    l.MESSAGE_MAX_INSPECTION_DEPTH = u;
    l.QuarantineAction = _;
    l.maybeGetQuarantineText = h;
    l.getQuarantineAction = P;
}, 98);