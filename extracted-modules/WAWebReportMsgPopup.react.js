__d("WAWebReportMsgPopup.react", [
    "fbt",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlocklistUtils",
    "WAWebBusinessProfileGetters",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebComplianceReportPopupLoadable",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebPrivateMessageComplianceUtils",
    "WAWebReportPopupBase.react",
    "WAWebSendSpamChatAction",
    "WAWebUseBusinessProfile.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebBusinessProfileValues",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ msg, spamFlow }) {
        const l = o("WAWebFrontendMsgGetters").getChat(msg);
        o("WAWebUseBusinessProfile.react").useBusinessProfile(l.contact.id);
        const c = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(l.contact.id, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ])?.[0] === true;
        const m = d(msg);
        const p = o("useWAWebContactValues").useContactValues(m.id, [
            o("WAWebFrontendContactGetters").getIsContactBlocked
        ]);
        const _ = p[0];
        const f = r("useWAWebContactFormattedUsernameOrPhoneByChat")(l, m);
        const { formattedUsernameOrPhone, isPhoneNumberForceMasked } = f;
        const y = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebSendSpamChatAction").sendMessageReport(msg, spamFlow).then((reportId)=>{
                    o("WAWebModalManager").ModalManager.close();
                    const t = o("WAWebPrivateMessageComplianceUtils").getPrivateMessageReportComplianceConfig({
                        reportId,
                        msg
                    });
                    if (t != null) {
                        o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebComplianceReportPopupLoadable").ComplianceReportPopupLoadable, {
                            learnMoreUrl: t.learnMoreUrl,
                            bannerText: t.bannerText,
                            actionText: t.actionText,
                            showViewReport: t.showViewReport
                        }));
                    }
                });
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const C = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (c || l.contact.isBusiness) {
                    let e;
                    yield o("WAWebSendSpamChatAction").sendMessageReport(msg, spamFlow).then((t)=>{
                        e = t;
                    });
                    o("WAWebModalManager").ModalManager.close();
                    const t = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(spamFlow);
                    o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBlockBusinessPopup.react"), {
                        chat: l,
                        blockEntryPoint: t,
                        reportId: e,
                        withReport: false
                    }));
                    return;
                }
                o("WAWebSendSpamChatAction").sendMessageReportBlock(msg, spamFlow);
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const b = <Component href={o("WAWebFaqUrl").getBlockingReportingFaqUrl()} testid="learn-more-link">{r("WAWebFbtCommon")("Learn more")}</Component>;
        const v = isPhoneNumberForceMasked === true ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: formattedUsernameOrPhone,
            direction: "auto",
            inlineblock: true
        }) : u.jsx(o("WAWebName.react").Name, {
            contact: m
        });
        const S = ()=>{
            if (c) {
                return s._("This message will be sent to WhatsApp. This AI won't know you reported or blocked them. {link to learn more}", [
                    s._param("link to learn more", b)
                ]);
            }
            if (l.contact.isBusiness) {
                return s._("This message will be sent to WhatsApp. This business won't know you reported or blocked them. {link to learn more}", [
                    s._param("link to learn more", b)
                ]);
            }
            if (o("WAWebChatGetters").getIsGroup(l) && o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(msg)) {
                return s._("This message was sent to you by {name of the group history bundle sender} as part of message history. This message will be forwarded to WhatsApp. No one in this group will be notified. {link to learn more}", [
                    s._param("name of the group history bundle sender", v),
                    s._param("link to learn more", b)
                ]);
            }
            if (o("WAWebChatGetters").getIsGroup(l) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(l) && o("WAWebBlocklistUtils").isRBIForGroupsEnabled()) {
                return s._("This message will be forwarded to WhatsApp. No one in this group will be notified. {link to learn more}", [
                    s._param("link to learn more", b)
                ]);
            }
            return s._("This message will be sent to WhatsApp. This person won't know you reported or blocked them. {link to learn more}", [
                s._param("link to learn more", b)
            ]);
        };
        const Component_1 = o("WAWebReportPopupBase.react").ReportPopupBase;
        return <Component_1 hasAdditionalAction={!_} reportSubText={S()} additionalActionLabelText={o("WAWebReportPopupBase.react").getBlockLabelText(c, v)} additionalActionSubText={o("WAWebReportPopupBase.react").getBlockSubText({
            isBizBot3p: c,
            isBusiness: l.contact.isBusiness,
            isGroup: o("WAWebChatGetters").getIsGroup(l),
            isCommunityAnnouncementGroup: o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(l)
        })} onSendReport={y} onSendReportAndAdditionalAction={C}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d(msg) {
        const t = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(msg);
        if (o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(msg) && t != null) {
            const n = o("WAWebMsgCollection").MsgCollection.get(t);
            if (n) {
                return o("WAWebFrontendMsgGetters").getSenderObj(n);
            }
        }
        return o("WAWebFrontendMsgGetters").getSenderObj(msg);
    }
    l.default = c;
}, 226);