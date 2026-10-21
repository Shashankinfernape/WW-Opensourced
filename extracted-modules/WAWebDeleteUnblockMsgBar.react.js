__d("WAWebDeleteUnblockMsgBar.react", [
    "fbt",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebCmd",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSIconIcBlock.react",
    "WDSIconIcDelete.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c({ chat }) {
        const n = function() {
            o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(chat, 0);
        };
        const Component = r("WDSButton.react");
        const Component_1 = o("WAWebFlex.react").FlexColumn;
        const a = <Component_1 marginEnd={48}><Component variant="outline" type="destructive" onPress={n} testid="blocked-contact-msgbar-delete-chat-btn" Icon={r("WDSIconIcDelete.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} label={s._("Delete chat")}/></Component_1>;
        const Component_2 = r("WDSButton.react");
        const Component_3 = o("WAWebFlex.react").FlexColumn;
        const i = <Component_3><Component_2 variant="outline" type="default" onPress={function() {
            return o("WAWebBlockContactUtils").handleUnblock(chat.contact, o("WAWebBlockContants").BlockEntryPoint.OneToOneBlockedChatComposer);
        }} testid="blocked-contact-msgbar-unblock-btn" Icon={r("WDSIconIcBlock.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.GROUP_MSG_BAR_LEARN_MORE} label={r("WAWebFbtCommon")("Unblock")}/></Component_3>;
        const Component_4 = o("WAWebFlex.react").FlexRow;
        return <Component_4 justify="around">{a}{i}</Component_4>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    l.default = c;
}, 226);