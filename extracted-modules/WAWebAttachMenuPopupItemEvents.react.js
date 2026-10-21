__d("WAWebAttachMenuPopupItemEvents.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebEventsCreateEventModalFlowLoadable",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WAWebSharableEventCreationNotSupportedModal.react",
    "WAWebSharableEventGatingUtils",
    "WDSIconIcCalendarMonthFilled.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        icon: {
            color: "xvzgjlx",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const { chat, onAlternateSendFlowStart } = e;
        let i;
        if (t[0] !== chat || t[1] !== onAlternateSendFlowStart) {
            i = function() {
                const e = o("WAWebChatGetters").getIsGroup(chat) ? o("WAWebSharableEventGatingUtils").SharableEventCreationEntryPoint.GroupChatAttachmentTray : o("WAWebSharableEventGatingUtils").SharableEventCreationEntryPoint.IndividualChatAttachmentTray;
                if (o("WAWebSharableEventGatingUtils").isSharableEventCreationEnabled(e) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
                    o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharableEventCreationNotSupportedModal.react").SharableEventCreationNotSupportedModal, {}));
                    return;
                }
                onAlternateSendFlowStart();
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebEventsCreateEventModalFlowLoadable").EventsCreateEventModalFlowLoadable, {
                    preselectedChat: chat
                }), {
                    blockClose: true
                });
                o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
            };
            t[0] = chat;
            t[1] = onAlternateSendFlowStart;
            t[2] = i;
        } else {
            i = t[2];
        }
        const l = i;
        let d;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Event");
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== l) {
            const Component = r("WDSMenuItem.react");
            m = <Component testid="mi-attach-events" onPress={l} Icon={r("WDSIconIcCalendarMonthFilled.react")} iconXstyle={c.icon} title={d}/>;
            t[4] = l;
            t[5] = m;
        } else {
            m = t[5];
        }
        return m;
    }
    l.default = d;
}, 226);