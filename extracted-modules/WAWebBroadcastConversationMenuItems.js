__d("WAWebBroadcastConversationMenuItems", [
    "fbt",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCmd",
    "WAWebDeleteMenuItem.react",
    "WAWebMuteMenuItem.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSIconIcCancel.react",
    "WDSIconIcInfo.react",
    "WDSMenuItem.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("WAWebWidToJid").widToBroadcastJid(e.id);
        const n = function() {
            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.audienceInfoButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, t);
            o("WAWebCmd").Cmd.chatInfoDrawer(e);
        };
        const Component = r("WDSMenuItem.react");
        return <Component key="info" testid="mi-broadcast-info" onPress={n} Icon={r("WDSIconIcInfo.react")} title={o("WAWebBizBroadcastsCreationStrings").getBroadcastAudienceInfoLabel()}/>;
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d(e) {
        const Component = r("WAWebMuteMenuItem.react");
        return <Component key="mute" onMute={function(n) {
            return o("WAWebCmd").Cmd.muteChatFromEntryPoint(e, n, o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONVERSATION_SCREEN);
        }} chat={e} isMuted={!!e.mute.expiration}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function MComponent(e) {
        const Component = r("WDSMenuItem.react");
        return <Component key="close" testid="mi-close-chat" onPress={function() {
            return o("WAWebCmd").Cmd.closeChat(e);
        }} Icon={r("WDSIconIcCancel.react")} title={s._("Close chat")}/>;
    }
    MComponent.displayName = `${MComponent.name} [from ${i.id}]`;
    function PComponent(e) {
        const Component = r("WAWebDeleteMenuItem.react");
        return <Component key="delete" onDeleteOrExit={function() {
            o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, o("WAWebWidToJid").widToBroadcastJid(e.id));
            o("WAWebCmd").Cmd.deleteOrExitChat(e);
        }} chat={e}/>;
    }
    PComponent.displayName = `${PComponent.name} [from ${i.id}]`;
    l.getBroadcastAudienceInfoMenuItem = c;
    l.getBroadcastMuteMenuItem = d;
    l.getBroadcastCloseChatMenuItem = MComponent;
    l.getBroadcastDeleteMenuItem = PComponent;
}, 226);