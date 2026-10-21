__d("WAWebCommsHandleLoggedInStanza", [
    "WABackendHandleError",
    "WACreateHandleChatState",
    "WAHandleChatStateProtocol",
    "WAHandleDecisionTreeResult",
    "WAJids",
    "WALogger",
    "WAParsableWapNode",
    "WASmaxChatstateServerNotificationRPC",
    "WAWebAccountLinkingNotificationHandler",
    "WAWebAltDeviceLinkingHandleNotification",
    "WAWebCreateNackFromStanza",
    "WAWebDecodeJid",
    "WAWebHandleAboutNotification",
    "WAWebHandleAccountSyncNotification",
    "WAWebHandleBotProfileNotification",
    "WAWebHandleBusinessNotification",
    "WAWebHandleChatState",
    "WAWebHandleCoexV2ChatState",
    "WAWebHandleCompanionReqRefreshNotification",
    "WAWebHandleContactNotification",
    "WAWebHandleDeviceNotification",
    "WAWebHandleDeviceSwitchingNotification",
    "WAWebHandleDigestKey",
    "WAWebHandleDigitalCommerceSubscriptionNotification",
    "WAWebHandleDisappearingModeNotification",
    "WAWebHandleFailure",
    "WAWebHandleGrowthNotification",
    "WAWebHandleHostedNotification",
    "WAWebHandleInfoBulletin",
    "WAWebHandleMediaRetryNotification",
    "WAWebHandleMessageRetryRequest",
    "WAWebHandleMexNotification",
    "WAWebHandleNewsletterNotification",
    "WAWebHandlePreKeyLow",
    "WAWebHandlePresence",
    "WAWebHandlePrivacyTokensNotification",
    "WAWebHandleProfilePicNotification",
    "WAWebHandlePsa",
    "WAWebHandleQPPrefetchTimestampNotification",
    "WAWebHandleQPSurfacesNotification",
    "WAWebHandleServerNotification",
    "WAWebHandleServerSyncNotification",
    "WAWebHandleStreamError",
    "WAWebHandleSuccess",
    "WAWebHandleVoipCall",
    "WAWebHandleWaChat",
    "WAWebMaibaWASSMigration",
    "WAWebPaymentNotificationHandler",
    "WAWebPostUnknownStanzaMetric",
    "WAWebShortcakeLinkingHandleNotification",
    "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
    "WAWebWid",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    const _ = r("requireDeferred")("WAWebHandleBizThreadDataBulkNotification").__setRef("WAWebCommsHandleLoggedInStanza");
    const f = r("requireDeferred")("WAWebHandleBizThreadDataNotification").__setRef("WAWebCommsHandleLoggedInStanza");
    const g = o("WACreateHandleChatState").createHandleChatState({
        groupMessage: {
            handleGroupChatState: o("WAWebHandleChatState").handleGroupChatState
        },
        individualMessage: {
            handleIndividualChatState: o("WAWebHandleChatState").handleIndividualChatState
        }
    });
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const e_attrs = e.attrs;
            switch(e.tag){
                case "receipt":
                    try {
                        if (e_attrs.type === "retry" || e_attrs.type === "enc_rekey_retry") {
                            return yield o("WAWebHandleMessageRetryRequest").handleMessageRetryRequest(e);
                        }
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Unhandled receipt stanza: type: '",
                            "', id: '",
                            "'"
                        ])), e_attrs.type, e_attrs.id);
                        break;
                    } catch (error) {
                        if (error instanceof o("WAParsableWapNode").XmppParsingFailure) {
                            o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e);
                            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to parse receipt ",
                                " stanza: ",
                                ""
                            ])), e_attrs.type, error).sendLogs("failed-to-parse-receipt-stanza", {
                                sampling: r("gkx")("26259") ? 1 : 0.1
                            });
                            return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.ParsingError);
                        }
                        return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.UnhandledError);
                    }
                case "notification":
                    try {
                        switch(e_attrs.type){
                            case "server_sync":
                                return yield o("WAWebHandleServerSyncNotification").handleServerSyncNotification(e);
                            case "picture":
                                return yield o("WAWebHandleProfilePicNotification").handleProfilePicNotificationJob(e);
                            case "business":
                                return yield o("WAWebHandleBusinessNotification").handleBusinessNotificationJob(e);
                            case "digital_commerce_subscription":
                                return yield o("WAWebHandleDigitalCommerceSubscriptionNotification").handleDigitalCommerceSubscriptionNotificationJob(e);
                            case "contacts":
                                {
                                    const a = e.content;
                                    if (!Array.isArray(a) || !a.length) {
                                        break;
                                    }
                                    const i = a[0].tag;
                                    if (i === "invite") {
                                        break;
                                    }
                                    return yield r("WAWebHandleContactNotification")(e);
                                }
                            case "devices":
                                return yield o("WAWebHandleDeviceNotification").handleDevicesNotification(e);
                            case "disappearing_mode":
                                return yield o("WAWebHandleDisappearingModeNotification").handleDisappearingModeNotificationJob(e);
                            case "mediaretry":
                                {
                                    const l = yield r("WAWebHandleMediaRetryNotification")(e);
                                    return l;
                                }
                            case "encrypt":
                                {
                                    const p = e.content;
                                    if (!Array.isArray(p) || !p.length) {
                                        break;
                                    }
                                    const h = p[0].tag;
                                    switch(h){
                                        case "count":
                                        case "pq_count":
                                            return yield r("WAWebHandlePreKeyLow")(e, t);
                                        case "digest":
                                            return yield r("WAWebHandleDigestKey")(e);
                                    }
                                    break;
                                }
                            case "server":
                                return yield o("WAWebHandleServerNotification").handleServerNotification(e);
                            case "status":
                                return yield o("WAWebHandleAboutNotification").handleAboutNotification(e);
                            case "account_sync":
                                return yield o("WAWebHandleAccountSyncNotification").handleAccountSyncNotification(e);
                            case "pay":
                                return yield o("WAWebPaymentNotificationHandler").handlePaymentNotification(e);
                            case "psa":
                                if (e_attrs.from != null && e_attrs.from.toString() === o("WAJids").PSA_JID) {
                                    const y = e.content;
                                    if (!Array.isArray(y) || !y.length) {
                                        break;
                                    }
                                    const v = y[0].tag;
                                    switch(v){
                                        case "surfaces":
                                            return yield o("WAWebHandleQPSurfacesNotification").handleQPSurfacesNotification(e);
                                        case "reset_smb_last_qp_prefetch_timestamp":
                                            return o("WAWebHandleQPPrefetchTimestampNotification").handleQPPrefetchTimestampNotification(e);
                                        default:
                                            return yield r("WAWebHandleWaChat")(e);
                                    }
                                }
                                return yield r("WAWebHandlePsa")(e);
                            case "privacy_token":
                                return yield r("WAWebHandlePrivacyTokensNotification")(e);
                            case "link_code_companion_reg":
                                return yield o("WAWebAltDeviceLinkingHandleNotification").handleAltDeviceLinkingNotification(e);
                            case "newsletter":
                                return yield r("WAWebHandleNewsletterNotification")(e);
                            case "w:growth":
                                return yield r("WAWebHandleGrowthNotification")(e);
                            case "registration":
                                return yield r("WAWebHandleDeviceSwitchingNotification")(e);
                            case "mex":
                                return yield o("WAWebHandleMexNotification").handleMexNotification(e);
                            case "companion_reg_refresh":
                                return yield o("WAWebHandleCompanionReqRefreshNotification").handleCompanionReqRefreshNotification(e);
                            case "waffle":
                                return yield o("WAWebAccountLinkingNotificationHandler").handleAccountLinkingNotification(e);
                            case "fb:update":
                                return yield o("WAWebHandleBotProfileNotification").handleBotProfileNotification(e);
                            case "hosted":
                                return yield o("WAWebHandleHostedNotification").handleHostedNotification(e);
                        }
                        if (e_attrs.type != null && String(e_attrs.type) === "biz_thread_data") {
                            const S = yield f.load();
                            const R = S.handleBizThreadDataNotification;
                            return R(e);
                        }
                        if (e_attrs.type != null && String(e_attrs.type) === "biz_thread_data_bulk") {
                            const L = yield _.load();
                            const E = L.handleBizThreadDataBulkNotification;
                            return E(e);
                        }
                        if (e_attrs.type != null && String(e_attrs.type) === "passkey_prologue_request") {
                            return yield o("WAWebShortcakeLinkingHandlePasskeyPrologueRequest").handlePasskeyPrologueRequestNotification(e);
                        }
                        if (e_attrs.type != null && String(e_attrs.type) === "crsc_continuation") {
                            return o("WAWebShortcakeLinkingHandleNotification").handleShortcakeLinkingNotification(e);
                        }
                    } catch (error) {
                        if (error instanceof o("WAParsableWapNode").XmppParsingFailure) {
                            o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(e);
                            const T = e_attrs.type?.toString() ?? "[empty]";
                            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to parse notification ",
                                " stanza: ",
                                ""
                            ])), T, error).sendLogs(`failed-to-parse-notification-stanza-${T}`, {
                                sampling: 0.01
                            });
                            return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.ParsingError);
                        }
                        if (error instanceof o("WAWebHandleMexNotification").MissingMEXNotificationHandler) {
                            return C(e);
                        }
                        return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.UnhandledError);
                    }
                    return C(e);
                case "chatstate":
                    {
                        const D = b(e);
                        if (D != null) {
                            return D;
                        }
                        const x = o("WAWebHandleCoexV2ChatState").maybeHandleCoexV2ChatStateStanza(e);
                        return x ?? o("WAHandleDecisionTreeResult").handleDecisionTreeResult(e, g(e));
                    }
                case "presence":
                    return r("WAWebHandlePresence")(e);
                case "ib":
                    return r("WAWebHandleInfoBulletin")(e);
                case "stream:error":
                    return r("WAWebHandleStreamError")(e);
                case "failure":
                    return r("WAWebHandleFailure")(e);
                case "success":
                    return r("WAWebHandleSuccess")(e);
                case "call":
                    return o("WAWebHandleVoipCall").handleCall(e);
                case "error":
                    return o("WABackendHandleError").handleError(e);
                case "xmlstreamend":
                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Comms.handleStanza received xmlstreamend, return NO_ACK"
                    ])));
                    return "NO_ACK";
            }
            o("WALogger").DEV_XMPP(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "Comms.handleStanza unrecognized stanza ",
                ""
            ])), e);
            return o("WAWebCreateNackFromStanza").createNackFromStanza(e, o("WAWebCreateNackFromStanza").NackReason.UnrecognizedStanza);
        });
        return y.apply(this, arguments);
    }
    function C(t) {
        o("WALogger").DEV_XMPP(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Comms.handleStanza unrecognized stanza ",
            ""
        ])), t);
        return o("WAWebCreateNackFromStanza").createNackFromStanza(t, o("WAWebCreateNackFromStanza").NackReason.UnrecognizedStanza);
    }
    function b(e) {
        const n = R(e.attrs.from?.toString());
        if (n == null) {
            return null;
        }
        const r = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(n);
        if (r == null) {
            return null;
        }
        return v(e, r);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            try {
                const n = o("WASmaxChatstateServerNotificationRPC").receiveServerNotificationRPC(e);
                const a = n.parsedRequest.stateTypes;
                const i = o("WAHandleChatStateProtocol").parseChatStatus(a);
                yield o("WAWebHandleChatState").handleIndividualChatState({
                    jid: o("WAWebWidToJid").widToUserJid(t),
                    status: i
                });
                return "NO_ACK";
            } catch (error) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to handle MAIBA AI Hub chatstate"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("maiba-ai-hub-chatstate-handle-fail", {
                    sampling: 0.1
                });
                return "NO_ACK";
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        const t = o("WAWebDecodeJid").decodeJid(e);
        if (t instanceof r("WAWebWid")) {
            return t;
        }
        return null;
    }
    l.handleLoggedInStanza = h;
}, 98);