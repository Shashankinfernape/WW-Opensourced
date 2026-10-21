__d("WAWebUnknownContactSection.react", [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebAddContactLabel",
    "WAWebApiContact",
    "WAWebBlocklistCollection",
    "WAWebCallUserJourneyCallsTabAction",
    "WAWebCallUserJourneyLogger",
    "WAWebCallsTabDialerContext",
    "WAWebCellFrame.react",
    "WAWebChatContactUtils",
    "WAWebContactCollection",
    "WAWebContactManagementGating",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebLazyLoadedRetriable",
    "WAWebMiscGatingUtils",
    "WAWebPhoneNumberSearch",
    "WAWebPhoneUtils",
    "WAWebProfileImage.react",
    "WAWebSectionHeader.react",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WAWebUsernameGatingUtils",
    "WAWebVerifiedBlueStyles.stylex",
    "WAWebWamEnumSubSurface",
    "WDSIconIcPersonAdd.react",
    "WDSIconWdsIcVerifiedFilled.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = d;
    const { useContext, useMemo } = p;
    const g = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield (c || (c = n("Promise"))).all([
            r("JSResourceForInteraction")("WAWebContactEditUtils").__setRef("WAWebUnknownContactSection.react").load(),
            r("JSResourceForInteraction")("WAWebContactLogging").__setRef("WAWebUnknownContactSection.react").load(),
            r("JSResourceForInteraction")("WAWebContactUtils").__setRef("WAWebUnknownContactSection.react").load()
        ]);
        const editUtils = e[0];
        const logging = e[1];
        const contactUtils = e[2];
        return {
            editUtils,
            logging,
            contactUtils
        };
    }), "AddContactNewChat");
    const h = {
        overrideEllipsifyFlexGrow: {
            flexGrow: "x1c4vz4f",
            $$css: true
        },
        addContactButton: {
            cursor: "x1ypdohk",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            paddingTop: "x16ovd2e",
            paddingInlineEnd: "x1nzty39",
            paddingBottom: "x12xbjc7",
            paddingInlineStart: "x12w63v0",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            color: "x14ug900",
            $$css: true
        }
    };
    function Y14({ onUnknownContactClick, username }) {
        const a = `@${username}`;
        const i = m.jsx(r("WAWebProfileImage.react"), {});
        const Component = r("WAWebCellFrame.react");
        return <>{m.jsx(r("WAWebSectionHeader.react"), {
            header: r("WAWebFbtCommon")("Not in your contacts")
        }, "not-in-your-contacts-header")}<Component image={i} primary={a} onClick={onUnknownContactClick} focusable tabIndex={0} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST}/></>;
    }
    Y14.displayName = `${Y14.name} [from ${i.id}]`;
    function C({ contactInfo, disableHeader = false, extraDetail, onUnknownContactClick, searchText }) {
        const C = useMemo(function() {
            return searchText != null && o("WAWebPhoneNumberSearch").isPhoneNumberLike(searchText);
        }, [
            searchText
        ]);
        const b = useContext(o("WAWebCallsTabDialerContext").CallsTabDialerContext);
        if (contactInfo.wid == null) {
            if (o("WAWebUsernameGatingUtils").usernameSearchEnabled()) {
                return <Y14 username={contactInfo.username} onUnknownContactClick={onUnknownContactClick}/>;
            }
            return null;
        }
        const { chat, isBusiness, username, verifiedLevel, verifiedName, wid } = contactInfo;
        const I = chat?.contact.isContactBlocked ?? !!o("WAWebBlocklistCollection").BlocklistCollection.get(wid);
        const T = m.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: wid,
            waitIdle: true
        });
        const D = {
            xstyle: h.overrideEllipsifyFlexGrow,
            ellipsify: true,
            titlify: true,
            breakWord: true,
            direction: "auto"
        };
        let x;
        let $;
        if (o("WAWebUsernameGatingUtils").usernameSearchEnabled() && username != null) {
            x = `@${username}`;
            if (C) {
                $ = s._("Matches this number");
            }
        } else if (!wid.isLid()) {
            x = o("WAWebPhoneUtils").formatPhone(wid.user);
        } else {
            const N = o("WAWebApiContact").getPhoneNumber(wid)?.user;
            if (N != null) {
                x = o("WAWebPhoneUtils").formatPhone(N);
            } else {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[UnknownContactSection] PN null for remote LID search"
                ]))).sendLogs("unknownContactSection-pn-null-for-remote-search");
                x = s._("Unknown contact");
            }
        }
        let M = m.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({
            text: x
        }, D));
        if (chat) {
            let w = chat.contact.pushname;
            if (!w) {
                w = verifiedName ?? "";
            }
            $ = x ?? o("WAWebChatContactUtils").getFormattedNotifyName(w);
            if (isBusiness) {
                if (verifiedLevel === "high") {
                    const A = <div className="x7r5mf7 x7phf20">{o("WAWebMiscGatingUtils").isBlueEnabled() ? m.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                        height: 14,
                        testid: "psa-verified-blue",
                        width: 14,
                        xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedBlueStyles.color
                    }) : m.jsx(r("WDSIconWdsIcVerifiedFilled.react"), {
                        height: 18,
                        testid: "psa-verified",
                        width: 18,
                        xstyle: o("WAWebVerifiedBlueStyles.stylex").verifiedGreenStyles.color
                    })}</div>;
                    M = <>{m.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({
                        text: verifiedName
                    }, D))}{A}</>;
                }
                if (w == null || w === "") {
                    $ = s._("Business account");
                }
            }
        }
        if (I) {
            $ = s._("Contact is blocked");
        }
        const F = wid.isRegularUser() && o("WAWebContactManagementGating").addContactNewChatDrawerEnabled();
        const O = ()=>{
            if (b) {
                o("WAWebCallUserJourneyCallsTabAction").logCallsTabCallAction(o("WAWebCallUserJourneyLogger").OUT_OF_CALL_ACTION_TYPE.TAP_DIALER_ADD_CONTACT, o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER);
            }
            g().then(({ contactUtils, editUtils, logging })=>{
                const editUtils_openContactEditDrawer = editUtils.openContactEditDrawer;
                const logging_ContactSourceType = logging.ContactSourceType;
                const contactUtils_getContactDataFromContactModel = contactUtils.getContactDataFromContactModel;
                const u = chat?.contact ?? o("WAWebContactCollection").ContactCollection.gadd(wid);
                editUtils_openContactEditDrawer(contactUtils_getContactDataFromContactModel(u), logging_ContactSourceType.NewChatDrawer);
            }).catch((e)=>{
                o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[add-contact] module load failed: ",
                    ""
                ])), e).sendLogs("add-contact-new-chat-drawer-load-failure");
            });
        };
        const B = o("WAWebAddContactLabel").getAddToContactsLabel();
        const Component = r("WAWebUnstyledButton.react");
        const Component_1 = r("WDSTooltip.react");
        const W = F ? <Component_1 label={B}><Component aria-label={B} dataTab={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST} onClick={function(t) {
            t.stopPropagation();
            O();
        }} testid="new-chat-add-contact-btn" xstyle={h.addContactButton}>{m.jsx(r("WDSIconIcPersonAdd.react"), {
            "aria-hidden": true
        })}</Component></Component_1> : null;
        let q = null;
        if (W != null && extraDetail != null) {
            q = <div className="x78zum5 x6s0dn4 x1qvou4u x1s70e7g">{W}{extraDetail}</div>;
        } else if (W != null) {
            q = W;
        } else if (extraDetail != null) {
            q = extraDetail;
        }
        const Component_2 = r("WAWebCellFrame.react");
        return <>{!disableHeader && m.jsx(r("WAWebSectionHeader.react"), {
            header: r("WAWebFbtCommon")("Not in your contacts")
        }, "not-in-your-contacts-header")}<Component_2 image={T} primary={M} secondary={$ != null ? m.jsx(o("WAWebEmojiText.react").EmojiText, babelHelpers.extends({
            text: $
        }, D)) : null} detail={q} onClick={onUnknownContactClick} focusable tabIndex={0} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_LIST}/></>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    l.default = C;
}, 226);