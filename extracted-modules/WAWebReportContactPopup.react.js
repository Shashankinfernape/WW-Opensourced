__d("WAWebReportContactPopup.react", [
    "fbt",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlocklistUtils",
    "WAWebBusinessProfileGetters",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebReportPopupBase.react",
    "WAWebSendSpamChatAction",
    "WAWebUseBusinessProfile.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebBusinessProfileValues",
    "useWAWebContactValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ chat, spamFlow }) {
        o("WAWebUseBusinessProfile.react").useBusinessProfile(chat.contact.id);
        const l = o("useWAWebBusinessProfileValues").useOptionalBusinessProfileValues(chat.contact.id, [
            o("WAWebBusinessProfileGetters").getIsBizBot3p
        ])?.[0] === true;
        const c = o("useWAWebContactValues").useContactValues(chat.contact.id, [
            o("WAWebFrontendContactGetters").getIsContactBlocked
        ]);
        const d = c[0];
        const m = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebSendSpamChatAction").sendReport({
                    chat,
                    spamFlow
                });
                o("WAWebModalManager").ModalManager.close();
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const p = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (l || chat.contact.isBusiness) {
                    yield o("WAWebSendSpamChatAction").sendReport({
                        chat,
                        spamFlow
                    });
                    o("WAWebModalManager").ModalManager.close();
                    const e = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(spamFlow);
                    o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBlockBusinessPopup.react"), {
                        chat,
                        blockEntryPoint: e,
                        withReport: false
                    }));
                    return;
                }
                o("WAWebSendSpamChatAction").sendReportBlock({
                    chat,
                    spamFlow
                });
                o("WAWebModalManager").ModalManager.close();
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const Component = o("WAWebExternalLink.react").ExternalLink;
        const _ = <Component href={o("WAWebFaqUrl").getBlockingReportingFaqUrl()} testid="learn-more-link">{r("WAWebFbtCommon")("Learn more")}</Component>;
        const f = u.jsx(o("WAWebName.react").Name, {
            contact: chat.contact
        });
        const g = ()=>{
            if (l) {
                return s._("The last 5 messages in this chat will be sent to WhatsApp. This AI won't know you reported or blocked them. {link to learn more}", [
                    s._param("link to learn more", _)
                ]);
            }
            if (chat.contact.isBusiness) {
                return s._("The last 5 messages in this chat will be sent to WhatsApp. This business won't know you reported or blocked them. {link to learn more}", [
                    s._param("link to learn more", _)
                ]);
            }
            return s._("The last 5 messages in this chat will be sent to WhatsApp. This person won't know you reported or blocked them. {link to learn more}", [
                s._param("link to learn more", _)
            ]);
        };
        const Component_1 = o("WAWebReportPopupBase.react").ReportPopupBase;
        return <Component_1 hasAdditionalAction={!d} reportSubText={g()} additionalActionLabelText={o("WAWebReportPopupBase.react").getBlockLabelText(l, f)} additionalActionSubText={o("WAWebReportPopupBase.react").getBlockSubText({
            isBizBot3p: l,
            isBusiness: chat.contact.isBusiness,
            isGroup: o("WAWebChatGetters").getIsGroup(chat),
            isCommunityAnnouncementGroup: o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat)
        })} onSendReport={m} onSendReportAndAdditionalAction={p}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);