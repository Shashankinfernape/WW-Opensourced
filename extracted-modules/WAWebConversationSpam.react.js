__d("WAWebConversationSpam.react", [
    "fbt",
    "Promise",
    "WAWebAddContactLabel",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebBlocklistCollection",
    "WAWebBox.react",
    "WAWebBusinessProfileTypes",
    "WAWebButton.react",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebContactManagementGating",
    "WAWebConversationNewBanner.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupHistoryBundleInfoContext",
    "WAWebGroupSafetyToolsModal.react",
    "WAWebLeaveCommunityModalUtilsLoadable",
    "WAWebModalManager",
    "WAWebOpenLeaveAndReportGroupModalLoadable",
    "WAWebReportContactDialogUtils",
    "WAWebReportSpamPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebSpamConstants",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WDSIconIcBlock.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcLogout.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcThumbDown.react",
    "WDSMargins.stylex",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "fbs",
    "react",
    "requireDeferred",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_use = u.use;
    const m = r("requireDeferred")("WAWebContactEditUtils").__setRef("WAWebConversationSpam.react");
    const p = r("requireDeferred")("WAWebContactLogging").__setRef("WAWebConversationSpam.react");
    const _ = r("requireDeferred")("WAWebContactUtils").__setRef("WAWebConversationSpam.react");
    const f = {
        paddingInlineEnd15: {
            paddingInlineEnd: "x1q3ajuy",
            $$css: true
        }
    };
    const href = o("WAWebFaqUrl").getGroupHistoryFAQUrl();
    const h = {
        link: {
            display: "xt0psk2",
            $$css: true
        },
        groupHistorySecondaryText: {
            paddingInlineEnd: "x1uc92m",
            $$css: true
        },
        grayLighterColor: {
            color: "xshy2n",
            $$css: true
        }
    };
    const y = "add remove reset";
    function C({ chat, onClickDismissSpam, onClickNotSpam }) {
        let a;
        let i;
        let l;
        const L = o("useWAWebChatValues").useChatValues(chat.id, [
            (a = o("WAWebChatGetters")).getId,
            a.getIsPSA,
            a.getIsIAS,
            (i = o("WAWebFrontendChatGetters")).getShouldAppearInList,
            i.getTrusted,
            a.getIsGroup,
            i.getContact,
            i.getGroupMetadata
        ]);
        const E = L[0];
        const k = L[1];
        const I = L[2];
        const T = L[3];
        const D = L[4];
        const x = L[5];
        const $ = L[6];
        const P = L[7];
        const N = o("useWAWebContactValues").useContactValues(chat.contact.id, [
            (l = o("WAWebContactGetters")).getId,
            l.getIsBusiness,
            l.getIsSupportAccount,
            l.getVerifiedLevel,
            o("WAWebFrontendContactGetters").getFormattedName,
            l.getIsMe,
            o("WAWebFrontendContactGetters").getBusinessProfile,
            o("WAWebFrontendContactGetters").getIsMyContact
        ]);
        const M = N[0];
        const w = N[1];
        const A = N[2];
        const F = N[3];
        const O = N[4];
        const B = N[5];
        const W = N[6];
        const q = N[7];
        const U = r("useWAWebSourceSnapshot")(o("WAWebBlocklistCollection").BlocklistCollection, y, function() {
            return b(E);
        }, v);
        const V = U.chatId === E ? U.blocked : b(E).blocked;
        const H = u_use(o("WAWebGroupHistoryBundleInfoContext").WAWebGroupHistoryBundleInfoContext);
        const H_earliestVisibleBundleSender = H.earliestVisibleBundleSender;
        const onReport = function() {
            o("WAWebSendSpamChatAction").sendReport({
                chat,
                spamFlow: x === true ? o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport : o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport
            });
            o("WAWebModalManager").ModalManager.close();
        };
        const onReportExitClear = function() {
            o("WAWebSendSpamChatAction").sendSpamExitClear(chat, o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport);
            o("WAWebModalManager").ModalManager.close();
        };
        const K = function() {
            const e = P?.getParentGroupChat();
            if (e != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat)) {
                o("WAWebLeaveCommunityModalUtilsLoadable").openLeaveCommunityModal({
                    chat: e,
                    enableDeactivateIfSuperAdmin: true,
                    spamFlow: o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport
                });
            } else if (o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(chat)) {
                o("WAWebOpenLeaveAndReportGroupModalLoadable").openLeaveAndReportGroupModal(chat, o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport);
            } else {
                o("WAWebCmd").Cmd.deleteOrExitChat(chat);
            }
        };
        const QComponent = function() {
            if (!x) {
                o("WAWebReportContactDialogUtils").openReportContactPopup(chat, o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport);
                return;
            }
            const Component = r("WAWebReportSpamPopup.react");
            o("WAWebModalManager").ModalManager.open(<Component isGroupChat isMessage={false} onCancel={o("WAWebModalManager").closeModalManager} onReport={onReport} onReportExitClear={onReportExitClear}/>);
        };
        const X = function() {
            o("WAWebGroupSafetyToolsModal.react").displayGroupSafetyToolsModal();
        };
        if (k || I || E.isAiHub() || !T || D || A || B) {
            return null;
        }
        const WAWebButtonSecondary = o("WAWebButton.react").WAWebButtonSecondary;
        const WAWebButtonSecondaryDestructive = o("WAWebButton.react").WAWebButtonSecondaryDestructive;
        const Z = s._("Stay");
        const ee = <WAWebButtonSecondary key="not_spam" onClick={onClickNotSpam} tabOrder={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} testid="not-spam-btn"><span className="x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x5see2y x16hg961 x1pzews7 x1x3agtl x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1whkhu0 x3emv5x x1ydeqjr xyg86qh x1120s5i">{c.jsx(r("WDSIconIcCheck.react"), {
            height: 12,
            width: 14
        })}</span>{Z}</WAWebButtonSecondary>;
        const Component = r("WAWebUnstyledButton.react");
        const te = <Component key="dismiss_spam" dataTab={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} onClick={onClickDismissSpam} role="button" testid="dismiss-spam-btn" xstyle={[
            o("WDSMargins.stylex").wdsMargins.marginTopAuto,
            o("WDSMargins.stylex").wdsMargins.marginBottomAuto
        ]}>{c.jsx(r("WDSIconIcClose.react"), {
            iconXstyle: h.grayLighterColor,
            height: 24,
            width: 24
        })}</Component>;
        const ne = o("WAWebContactManagementGating").shouldShowAddContactButton(chat.contact.id, q, o("WAWebContactManagementGating").addContactFMXCardEnabled());
        const re = <WAWebButtonSecondary key="add_contact" icon={r("WDSIconIcPersonAdd.react")} onClick={function() {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const t = yield (e || (e = n("Promise"))).all([
                    m.load(),
                    _.load(),
                    p.load()
                ]);
                const openContactEditDrawer = t[0].openContactEditDrawer;
                const getContactDataFromContactModel = t[1].getContactDataFromContactModel;
                const ContactSourceType = t[2].ContactSourceType;
                openContactEditDrawer(getContactDataFromContactModel(chat.contact), ContactSourceType.SuspiciousChatBanner);
            })();
        }} tabOrder={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} testid="add-contact-btn">{o("WAWebAddContactLabel").getAddToContactsLabel()}</WAWebButtonSecondary>;
        const oe = <WAWebButtonSecondaryDestructive key="report_spam" icon={r("WDSIconIcThumbDown.react")} onClick={QComponent} tabOrder={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} testid="report-btn">{s._("Report")}</WAWebButtonSecondaryDestructive>;
        const ae = <WAWebButtonSecondaryDestructive key="exit_group" icon={r("WDSIconIcLogout.react")} onClick={K} tabOrder={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} testid="exit-btn">{S(chat)}</WAWebButtonSecondaryDestructive>;
        let primaryText;
        let le;
        const se = [];
        if (x) {
            if (H_earliestVisibleBundleSender != null) {
                const Component = r("WDSTextualLink.react");
                const Component_1 = r("WDSText.react");
                primaryText = s._("Message history sent by {group_history_bundle_sender}, someone not in your contacts. {=m4}{link_to_group_history_faq}", [
                    s._param("group_history_bundle_sender", H_earliestVisibleBundleSender),
                    s._param("link_to_group_history_faq", <Component href={href}>{s._("Learn more")}</Component>),
                    s._implicitParam("=m4", <Component_1 xstyle={h.groupHistorySecondaryText} colorName="contentDeemphasized" type="Body1">{s._("History may not always be accurate or complete.")}</Component_1>)
                ]);
            } else {
                const Component = r("WAWebClickableLink.react");
                primaryText = s._("You were added by someone not in your contacts. See {safety_tools}.", [
                    s._param("safety_tools", <Component data-tab={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} tabIndex={0} onClick={X} xstyle={h.link}>{r("fbs")._("safety tools")}</Component>)
                ]);
            }
            se.push(oe);
            se.push(ae);
            se.push(ee);
        } else {
            const Component = r("WAWebBox.react");
            primaryText = <Component xstyle={f.paddingInlineEnd15}>{s._("The sender won't see if you read their messages until you reply or add them as a contact.")}</Component>;
            if (w) {
                if (F !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH) {
                    primaryText = s._("This business won't see if you read their messages until you reply or add them as a contact.");
                } else if (F === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH) {
                    primaryText = s._("This verified account is not in your contact list.");
                } else {
                    primaryText = s._("This business account is not in your contact list.");
                }
            }
            if (V) {
                le = <WAWebButtonSecondary key="unblock" grow={1} onClick={function() {
                    return o("WAWebBlockContactUtils").handleUnblock(chat.contact, w ? o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock : o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock);
                }} tabOrder={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} testid="unblock-btn">{r("WAWebFbtCommon")("Unblock")}</WAWebButtonSecondary>;
            } else {
                le = <WAWebButtonSecondaryDestructive key="block" grow={1} icon={r("WDSIconIcBlock.react")} onClick={function() {
                    return o("WAWebBlockContactUtils").handleBlock(chat, w ? o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock : o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock);
                }} tabOrder={o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL} testid="block-btn">{r("WAWebFbtCommon")("Block")}</WAWebButtonSecondaryDestructive>;
            }
            se.push(oe, le, ee);
        }
        let buttons;
        if (x) {
            buttons = [
                ae,
                ee
            ];
        } else if (w) {
            buttons = [
                le,
                ee
            ];
        } else {
            buttons = [
                le,
                ne ? re : te
            ];
        }
        return c.jsx(r("WAWebConversationNewBanner.react"), {
            buttons,
            primaryText
        });
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b(e) {
        return {
            chatId: e,
            blocked: o("WAWebBlocklistCollection").BlocklistCollection.get(e) != null
        };
    }
    function v(e, t) {
        return e.chatId === t.chatId && e.blocked === t.blocked;
    }
    function S(chat) {
        if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(chat)) {
            return r("WAWebFbtCommon")("Exit Community");
        }
        return r("WAWebFbtCommon")("Exit Group");
    }
    l.default = C;
}, 226);