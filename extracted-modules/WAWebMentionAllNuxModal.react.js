__d("WAWebMentionAllNuxModal.react", [
    "fbt",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebDrawerManager",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "useWAWebFocusOnMount"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c({ chat }) {
        const i = r("useWAWebFocusOnMount")();
        const l = function() {
            o("WAWebModalManager").ModalManager.close();
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                descriptorType: "info_flow",
                chat,
                initialStep: o("WAWebInfoFlowStep").InfoFlowStep.Notifications
            } : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                chat,
                initialStep: o("WAWebInfoFlowStep").InfoFlowStep.Notifications
            }), {
                transition: "slide-left",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
            });
        };
        const c = o("WAWebABProps").getABPropConfigValue("admin_only_mention_everyone_group_size");
        const d = chat.groupMetadata?.participants?.length ?? 0;
        const m = d >= c;
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = r("WDSTextualLink.react");
        const Component_3 = r("WDSTextualLink.react");
        const Component_4 = r("WDSText.react");
        const Component_5 = o("WAWebFlex.react").FlexRow;
        const Component_6 = o("WAWebFlex.react").FlexColumn;
        const Component_7 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_7 tsNavigationData={{
            surface: "unknown",
            viewName: "mention-all-nux"
        }} ref={i} onOK={o("WAWebModalManager").closeModalManager} okText={r("WAWebFbtCommon")("Close")} onOverlayClick={o("WAWebModalManager").closeModalManager} testid="mention-all-nux-modal"><Component_6><Component_1 align="start" alignSelf="stretch" justify="start" paddingBottom={8}><Component type="Headline1" colorName="contentDefault">{s._("Mention all")}</Component></Component_1><Component_5><Component_4 type="Body1" colorName="contentDeemphasized">{m ? s._("In this chat, only admins can notify all members of an important message. You can mute \u0040all in {notification_settings_link}.", [
            s._param("notification_settings_link", <Component_2 onClick={l}>{s._("notification settings")}</Component_2>)
        ]) : s._("Notify all members of an important message. You can mute \u0040all in {notification_settings_link}.", [
            s._param("notification_settings_link", <Component_3 onClick={l}>{s._("notification settings")}</Component_3>)
        ])}</Component_4></Component_5></Component_6></Component_7>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);