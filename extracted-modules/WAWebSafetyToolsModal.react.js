__d("WAWebSafetyToolsModal.react", [
    "fbt",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebCellV2.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebPsFmxActionWamEvent",
    "WAWebReportContactDialogUtils",
    "WAWebSpamConstants",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WDSIconIcBlock.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcDialpad.react",
    "WDSIconIcPerson.react",
    "WDSIconIcThumbDown.react",
    "WDSText.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        },
        criticalColor: {
            color: "x30a034",
            $$css: true
        },
        paddingTop16: {
            paddingTop: "xyamay9",
            $$css: true
        },
        paddingTop8: {
            paddingTop: "x1y1aw1k",
            $$css: true
        }
    };
    function d(contact, t) {
        o("WAWebModalManager").ModalManager.open(<P4Component chat={t} contact={contact}/>);
    }
    function m(chat) {
        const t = chat.trusted ? o("WAWebSpamConstants").SpamFlow.ChatFmxCardSafetyToolsReport : o("WAWebSpamConstants").SpamFlow.ChatFmxCardSafetyToolsReportSuspicious;
        o("WAWebReportContactDialogUtils").openReportContactPopup(chat, t);
    }
    function P4Component({ chat, contact }) {
        const a = (t)=>{
            new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
                fmxEvent: t,
                fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.SAFETY_TOOLS
            }).commit();
        };
        const i = function() {
            a(o("WAWebWamEnumFmxEvent").FMX_EVENT.LEARN_MORE);
            o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSafetyToolsFaqUrl());
        };
        const l = function() {
            a(o("WAWebWamEnumFmxEvent").FMX_EVENT.REPORT);
            o("WAWebModalManager").closeModalManager();
            m(chat);
        };
        const d = function() {
            a(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
            o("WAWebModalManager").closeModalManager();
            o("WAWebBlockContactUtils").handleBlock(chat, chat.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardSafetyToolsBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardSafetyToolsBlockSuspicious);
        };
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSText.react");
        const Component_3 = r("WDSText.react");
        const Component_4 = r("WAWebCellV2.react");
        const Component_5 = r("WDSText.react");
        const Component_6 = r("WAWebCellV2.react");
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = r("WDSText.react");
        const Component_9 = r("WDSText.react");
        const Component_10 = r("WDSText.react");
        const Component_11 = r("WDSText.react");
        const Component_12 = r("WDSText.react");
        const Component_13 = o("WAWebFlex.react").FlexColumn;
        const Component_14 = o("WAWebFlex.react").FlexColumn;
        const Component_15 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_15 tsNavigationData={{
            surface: "unknown",
            viewName: "fmx-safety-tools"
        }} cancelText={r("WAWebFbtCommon")("Learn more")} okText={s._("Back to chat")} onCancel={i} onOK={o("WAWebModalManager").closeModalManager}><Component_14><Component type="Headline2" colorName="contentDefault">{s._("Safety tools")}</Component><Component_1 type="Body1" colorName="contentDefault" xstyle={c.paddingTop16}>{s._("Here's what you can do")}</Component_1><Component_2 type="Body2" colorName="contentDeemphasized" xstyle={c.paddingTop8}>{s._("When receiving messages from an unknown sender you can take any of these actions. They won't be notified if you do.")}</Component_2><Component_7 alignSelf="stretch" gap={4} padding={[
            16,
            0
        ]}>{!contact.isContactBlocked && <Component_4 colorScheme="lightest" detailLeft={u.jsx(r("WDSIconIcBlock.react"), {
            height: 24,
            width: 24,
            iconXstyle: c.criticalColor
        })} detailRight={u.jsx(r("WDSIconIcChevronRight.react"), {
            directional: true,
            height: 30,
            width: 30
        })} onClick={d} testid="fmx-safety-tools-block-contact" primary=<Component_3 type="Body1" colorName="secondaryNegative">{s._("Block contact")}</Component_3> size="medium"/>}<Component_6 colorScheme="lightest" detailLeft={u.jsx(r("WDSIconIcThumbDown.react"), {
            iconXstyle: c.criticalColor
        })} detailRight={u.jsx(r("WDSIconIcChevronRight.react"), {
            directional: true,
            height: 30,
            width: 30
        })} onClick={l} testid="fmx-safety-tools-report-contact" primary=<Component_5 type="Body1" colorName="secondaryNegative">{s._("Report contact")}</Component_5> size="medium"/></Component_7><Component_8 type="Body1" colorName="contentDefault">{s._("Staying safe in chats")}</Component_8><Component_13 alignSelf="stretch" paddingTop={8}>{u.jsx(r("WAWebCellV2.react"), {
            colorScheme: "lightest",
            detailLeft: u.jsx(r("WDSIconIcPerson.react"), {
                iconXstyle: c.secondaryColor
            }),
            interactive: false,
            primary: <Component_9 type="Body1" colorName="contentDefault">{s._("Profile name and photo")}</Component_9>,
            secondary: <Component_10 type="Body2" colorName="contentDeemphasized">{s._("Names and photos set by the sender. WhatsApp does not verify this information.")}</Component_10>,
            size: "medium"
        })}{u.jsx(r("WAWebCellV2.react"), {
            colorScheme: "lightest",
            detailLeft: u.jsx(r("WDSIconIcDialpad.react"), {
                iconXstyle: c.secondaryColor
            }),
            interactive: false,
            primary: <Component_11 type="Body1" colorName="contentDefault">{s._("Phone number")}</Component_11>,
            secondary: <Component_12 type="Body2" colorName="contentDeemphasized">{s._("Make sure that the country code of the number looks familiar.")}</Component_12>,
            size: "medium"
        })}</Component_13></Component_14></Component_15>;
    }
    P4Component.displayName = `${P4Component.name} [from ${i.id}]`;
    l.displaySafetyToolsModal = d;
}, 226);