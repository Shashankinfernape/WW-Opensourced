__d("WAWebE2EInfoModal.react", [
    "fbt",
    "invariant",
    "WALogger",
    "WAWebABPropsSupportGroup",
    "WAWebChatGroupUtils",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDailyAggregatedStats",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFormatE2ENotificationForDeviceChange",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebPrefetchIdentityKeysContactAction",
    "WAWebPrinaUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebStateUtils",
    "WAWebSupportChatStrings",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFormat",
    "react"
], function(t, n, r, o, a, i, l, s, u) {
    let e;
    let c;
    let d;
    const m = d || (d = o("react"));
    const d_useEffect = d.useEffect;
    const _ = [
        "encrypt",
        "info_encrypted"
    ];
    function f({ accountLid, chat, chatId, e2eSubtype, highlightSurface, jid, msg }) {
        d_useEffect(function() {
            o("WAWebPrefetchIdentityKeysContactAction").prefetchIdentityKeysForSecurityCode(jid);
            if (_.includes(e2eSubtype) && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && highlightSurface != null) {
                o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(highlightSurface, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_APPEAR);
            }
        }, []);
        const v = function() {
            if (jid) {
                const e = o("WAWebUserPrefsMeUser").isMeAccount(jid);
                const t = e ? chatId : jid;
                o("WAWebModalManager").ModalManager.close();
                o("WAWebCmd").Cmd.verificationDrawer({
                    wid: t,
                    lid: accountLid
                });
            }
        };
        let S;
        let R = null;
        let L = null;
        let E = null;
        let k = null;
        let I = null;
        let T = null;
        E = o("WAWebModalManager").closeModalManager;
        k = r("WAWebFbtCommon")("OK");
        switch(e2eSubtype){
            case "info_encrypted":
                I = g(e2eSubtype, o("WAWebFaqUrl").getE2EFaqUrl(), highlightSurface);
                if (r("WAWebWid").isGroup(chatId)) {
                    if (o("WAWebChatGroupUtils").isSupportGroup(chat)) {
                        S = o("WAWebSupportChatStrings").SupportChatSecurityModalText();
                        I = h({
                            e2eSubtype,
                            highlightSurface,
                            linkText: o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
                            url: o("WAWebFaqUrl").getSupportChatSafetyFaqUrl()
                        });
                    } else {
                        S = s._("Messages you send to this group are secured with end-to-end encryption, which means WhatsApp and third parties can't read them.");
                    }
                } else if (r("WAWebWid").isBroadcast(chatId)) {
                    S = s._("Messages you send to this broadcast list are secured with end-to-end encryption, which means WhatsApp and third parties can't read them.");
                }
                break;
            case "identity":
                {
                    const D = jid && o("WAWebContactCollection").ContactCollection.get(jid);
                    if (D != null && o("WAWebContactGetters").getIsMe(D)) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[formatE2ENotification] self identity notif received"
                        ]))).sendLogs("SelfIdentityNotificationError");
                        if (r("WAWebWid").isGroup(chatId)) {
                            S = s._("Your security code with all participants changed because there was a registration on a new device of yours. To verify a contact's security code, open their Contact Info page and click \"Encryption\".");
                        } else if (r("WAWebWid").isBroadcast(chatId)) {
                            S = s._("Your security code with all recipients changed because there was a registration on a new device of yours. To verify a contact's security code, open their Contact Info page and click \"Encryption\".");
                        } else {
                            const x = o("WAWebContactCollection").ContactCollection.get(chatId);
                            const $ = x ? o("WAWebFrontendContactGetters").getFormattedName(x) : o("WAWebWidFormat").widToFormattedUser(chatId);
                            S = s._("Your security code with {name} changed because there was a registration on a new device of yours.", [
                                s._param("name", $)
                            ]);
                        }
                    } else {
                        const P = D ? o("WAWebFrontendContactGetters").getFormattedName(D) : o("WAWebWidFormat").widToFormattedUser(jid);
                        S = s._("Your security code with {name} changed because they registered WhatsApp on their phone again.", [
                            s._param("name", P)
                        ]);
                    }
                    R = E;
                    L = k;
                    E = v;
                    k = s._("Verify");
                    I = h({
                        e2eSubtype,
                        highlightSurface,
                        url: o("WAWebFaqUrl").getMDCodeChangeFaqUrl()
                    });
                    break;
                }
            case "chat_psa":
                {
                    I = g(e2eSubtype, o("WAWebFaqUrl").getWAChatFaqUrl(), highlightSurface);
                    T = s._("WhatsApp uses this secure, official chat to share tips and let you know about new features.");
                    S = s._("We'll never ask you for your personal information.");
                    break;
                }
            case "device":
                {
                    if (msg == null) {
                        u(0, 56550);
                    }
                    const N = o("WAWebStateUtils").unproxy(msg);
                    S = o("WAWebFormatE2ENotificationForDeviceChange").formatE2ENotificationForDeviceChange(N, true);
                    R = E;
                    L = k;
                    const M = N.body != null && N.body !== "" ? o("WAWebContactCollection").ContactCollection.get(N.body) : null;
                    if (M != null && o("WAWebContactGetters").getIsMe(M) && (chatId.isGroup() || chatId.isBroadcast())) {
                        E = undefined;
                        k = undefined;
                    } else {
                        E = v;
                        k = s._("Verify");
                    }
                    I = h({
                        e2eSubtype,
                        highlightSurface,
                        url: o("WAWebFaqUrl").getMDCodeChangeFaqUrl()
                    });
                    break;
                }
            case "encrypt":
            case "encrypt_now":
            default:
                {
                    const w = o("WAWebContactCollection").ContactCollection.get(chatId);
                    I = g(e2eSubtype, o("WAWebPrinaUtils").securityUrl(), highlightSurface);
                    if (r("WAWebWid").isGroup(chatId)) {
                        if (o("WAWebChatGroupUtils").isSupportGroup(o("WAWebFrontendMsgGetters").getChat(msg))) {
                            S = o("WAWebSupportChatStrings").SupportChatSecurityModalText();
                            I = h({
                                e2eSubtype,
                                highlightSurface,
                                linkText: o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
                                url: o("WAWebFaqUrl").getSupportChatSafetyFaqUrl()
                            });
                        } else {
                            S = s._("WhatsApp secures your conversations with end-to-end encryption. This means your messages and statuses stay between you and the people you choose. Not even WhatsApp can read or listen to them.");
                        }
                    } else if (r("WAWebABPropsSupportGroup")(chatId.user)) {
                        S = o("WAWebSupportChatStrings").SupportChatSecurityModalText();
                        I = h({
                            e2eSubtype,
                            highlightSurface,
                            linkText: o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
                            url: o("WAWebFaqUrl").getSupportChatSafetyFaqUrl()
                        });
                    } else if (r("WAWebWid").isBroadcast(chatId)) {
                        S = s._("WhatsApp secures your conversations with end-to-end encryption. This means your messages and statuses stay between you and the people you choose. Not even WhatsApp can read or listen to them.");
                    } else if (w != null && o("WAWebContactGetters").getIsMe(w)) {
                        S = s._("End-to-end encryption keeps personal messages that you send to yourself private. Not even WhatsApp can read or listen to them.");
                    } else {
                        T = s._("WhatsApp secures your conversations with end-to-end encryption.");
                        S = s._("Your messages and calls stay between you and the people and businesses you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them.");
                        break;
                    }
                }
        }
        const A = <>{S} {I != null && I.type === "inline" && I.link} </>;
        const F = R != null || L != null;
        const O = I != null && I.type === "button";
        if (F && O) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebE2EInfoModal] cancel + learn more btn conflict"
            ])));
        }
        R = I?.onClick ?? R;
        L = O ? s._("Learn more") : L;
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component tsNavigationData={{
            surface: "unknown",
            viewName: "e2e-info"
        }} testid="e2e_info_modal" title={T} onOK={E} okText={k} onCancel={R} cancelText={L}>{A}</Component>;
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e2eSubtype, t, highlightSurface) {
        const r = y(e2eSubtype, t, highlightSurface);
        return {
            type: "button",
            onClick: r
        };
    }
    function h({ e2eSubtype, highlightSurface, linkText, url }) {
        const i = y(e2eSubtype, url, highlightSurface);
        const Component = r("WAWebClickableLink.react");
        const link = <Component onClick={i}>{linkText ?? s._("Learn more")}</Component>;
        return {
            type: "inline",
            link
        };
    }
    function y(e2eSubtype, t, highlightSurface) {
        return function() {
            if (_.includes(e2eSubtype) && o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && highlightSurface != null) {
                o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(highlightSurface, o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_SELECT);
            }
            o("WAWebExternalLink.react").openExternalLink(t);
        };
    }
    l.default = f;
}, 226);