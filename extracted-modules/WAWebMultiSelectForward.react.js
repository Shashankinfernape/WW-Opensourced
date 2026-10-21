__d("WAWebMultiSelectForward.react", [
    "fbt",
    "WAArrayUtils",
    "WAWebChatGroupUtils",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebForwardMessageFlowLoadable",
    "WAWebForwardUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMultiSelectUtils",
    "WAWebTabOrder",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSIconIcFastForward.react",
    "WDSMenuBarItem.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        btnMargin: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function d({ noSortOnForward, onBack, onCancel, onForwardModalOpen, selectedMessages, theme }) {
        const m = selectedMessages.getSelected();
        const m_length = m.length;
        const _ = m.every((e)=>o("WAWebMsgActionCapability").canForwardMsg(e));
        const f = !m_length || !_;
        const g = o("WAArrayUtils").groupBy(m, function(e) {
            return o("WAWebFrontendMsgGetters").getChat(e);
        });
        const h = g.keys();
        const y = h.some((e)=>o("WAWebChatGroupUtils").isSuspendedGroup(e));
        const C = y && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled();
        const b = theme === "mediaHub" ? (e, t)=>o("WAWebModalManager").ModalManager.openSupportModal(e, t) : function() {
            return o("WAWebModalManager").ModalManager.open.apply(o("WAWebModalManager").ModalManager, arguments);
        };
        const v = theme === "mediaHub" ? function() {
            return o("WAWebModalManager").ModalManager.closeSupportModal();
        } : o("WAWebModalManager").closeModalManager;
        const SComponent = function() {
            let e = selectedMessages.getSelected();
            const c = h.some(Boolean);
            if (!noSortOnForward && c) {
                e = [];
                g.forEach((t, n)=>{
                    e = e.concat(n.sortMsgs(t));
                });
            }
            const e_length = e.length;
            const onForward = function() {
                o("WAWebForwardUtils").showForwardedToast(e_length);
                onCancel();
            };
            const p = e.filter((e)=>o("WAWebMsgActionCapability").canForwardMsg(e));
            if (p.length) {
                const getAnnouncementSummary = function(t) {
                    return s._("_j{\"*\":\"You have selected {chats-number} chats to forward to\",\"_1\":\"You have selected 1 chat to forward to\"}", [
                        s._plural(t.length, "chats-number")
                    ]);
                };
                if (e_length !== p.length) {
                    const f = function() {
                        const Component = o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable;
                        b(<Component msgs={p} onForward={onForward} onClose={v} onBack={onBack} getAnnouncementSummary={getAnnouncementSummary}/>, {
                            transition: "modal-flow"
                        });
                    };
                    const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                    b(<Component title={s._("Can't forward all messages")} onOK={f} okText={s._("Forward")} onCancel={v} cancelText={r("WAWebFbtCommon")("Cancel")} tsNavigationData={{
                        surface: "unknown",
                        viewName: "forward-error"
                    }}>{s._("Some messages can't be forwarded. Do you want to forward the rest?")}</Component>);
                } else {
                    const Component = o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable;
                    b(<Component msgs={e} onForward={onForward} onClose={v} onBack={onBack} getAnnouncementSummary={getAnnouncementSummary}/>, {
                        transition: "modal-flow"
                    });
                }
            } else {
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                b(<Component title={s._("Can't forward")} onOK={v} okText={r("WAWebFbtCommon")("OK")} tsNavigationData={{
                    surface: "unknown",
                    viewName: "forward-error"
                }}>{s._("_j{\"*\":\"Wait until the messages finish sending and displays a checkmark before forwarding.\",\"_1\":\"Wait until the message finishes sending and displays a checkmark before forwarding.\"}", [
                    s._plural(e_length)
                ])}</Component>);
            }
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(e, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD);
            onForwardModalOpen?.();
        };
        let buttonVariant;
        if (f && theme === "mediaHub") {
            buttonVariant = "borderless";
        } else if (!f && theme === "mediaHub") {
            buttonVariant = "filled";
        }
        if (C) {
            return null;
        }
        const Component = r("WDSMenuBarItem.react");
        return <Component disabled={f} testid="multi-select-bar-forward" buttonVariant={buttonVariant} icon={r("WDSIconIcFastForward.react")} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR} onClick={SComponent} title={s._("_j{\"*\":\"Forward messages\",\"_1\":\"Forward\"}", [
            s._plural(m_length)
        ])} marginInlineXstyle={c.btnMargin}/>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);