__d("WAWebGroupSafetyToolsModal.react", [
    "fbt",
    "WAWebCellV2.react",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebPrivacyVisibilityEditDrawerLoadable",
    "WAWebText.react",
    "WDSIconIcLock.react",
    "WDSIconIcMessageReport.react",
    "WDSIconIcThumbDown.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        secondaryColor: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function d() {
        o("WAWebModalManager").ModalManager.open(<M5Component/>);
    }
    function M5Component() {
        let e;
        const t = function() {
            o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSafetyToolsFaqUrl());
        };
        const NComponent = function() {
            o("WAWebModalManager").ModalManager.close();
            const Component = o("WAWebPrivacyVisibilityEditDrawerLoadable").PrivacyVisibilityEditDrawerLoadable;
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component category="groupAdd" onClose={o("WAWebDrawerManager").closeDrawerLeft}/>);
        };
        const Component = (e = o("WAWebText.react")).WAWebTextLarge;
        const Component_1 = r("WAWebClickableLink.react");
        const Component_2 = o("WAWebFlex.react").FlexColumn;
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const Component_4 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_4 tsNavigationData={{
            surface: "unknown",
            viewName: "group-safety-tools"
        }} cancelText={r("WAWebFbtCommon")("Learn more")} okText={s._("Back to chat")} onCancel={t} onOK={o("WAWebModalManager").closeModalManager}><Component_3><Component>{s._("Safety tools")}</Component><e.WAWebTextMuted paddingTop={8}>{s._("Here’s what you can do to stay safe in group chats.")}</e.WAWebTextMuted><Component_2 alignSelf="stretch" paddingTop={8}>{u.jsx(r("WAWebCellV2.react"), {
            colorScheme: "lightest",
            detailLeft: u.jsx(r("WDSIconIcLock.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.secondaryColor,
                testid: "lock"
            }),
            interactive: false,
            primary: <e.WAWebTextTitle>{s._("Control who can add you to groups")}</e.WAWebTextTitle>,
            secondary: <e.WAWebTextMuted textWrap="wrap">{s._("Change if contacts or non-contacts can add you to groups in {=m2}.", [
                s._implicitParam("=m2", <Component_1 onClick={NComponent}>{s._("privacy settings")}</Component_1>)
            ])}</e.WAWebTextMuted>,
            size: "medium"
        })}{u.jsx(r("WAWebCellV2.react"), {
            colorScheme: "lightest",
            detailLeft: u.jsx(r("WDSIconIcMessageReport.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.secondaryColor,
                testid: "message-report"
            }),
            interactive: false,
            primary: <e.WAWebTextTitle>{s._("Report messages in a group")}</e.WAWebTextTitle>,
            secondary: <e.WAWebTextMuted textWrap="wrap">{s._("Click on a message to report it. Nobody in the group will be notified.")}</e.WAWebTextMuted>,
            size: "medium"
        })}{u.jsx(r("WAWebCellV2.react"), {
            colorScheme: "lightest",
            detailLeft: u.jsx(r("WDSIconIcThumbDown.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.secondaryColor
            }),
            interactive: false,
            primary: <e.WAWebTextTitle>{s._("Report group")}</e.WAWebTextTitle>,
            secondary: <e.WAWebTextMuted textWrap="wrap">{s._("Go to group chat info to report the group. Nobody in the group will know if you do.")}</e.WAWebTextMuted>,
            size: "medium"
        })}</Component_2></Component_3></Component_4>;
    }
    M5Component.displayName = `${M5Component.name} [from ${i.id}]`;
    l.displayGroupSafetyToolsModal = d;
}, 226);