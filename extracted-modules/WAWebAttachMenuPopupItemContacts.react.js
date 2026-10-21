__d("WAWebAttachMenuPopupItemContacts.react", [
    "fbt",
    "WAWebAttachVcardsFlowLoadable",
    "WAWebAttachmentMenuLogger",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WDSIconIcPersonFilled.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        refreshedIcon: {
            color: "x3j997e",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { chat, onAlternateSendFlowStart, onMenuComplete } = e;
        let l;
        if (t[0] !== chat || t[1] !== onAlternateSendFlowStart || t[2] !== onMenuComplete) {
            const d = ()=>{
                onAlternateSendFlowStart();
                const Component = o("WAWebAttachVcardsFlowLoadable").AttachVcardsFlowLoadable;
                o("WAWebModalManager").ModalManager.open(<Component chat={chat} onCancel={function() {
                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
                }} onContactsSent={function() {
                    onMenuComplete?.(true);
                    o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
                }}/>);
                o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CONTACT);
            };
            l = function() {
                d();
            };
            t[0] = chat;
            t[1] = onAlternateSendFlowStart;
            t[2] = onMenuComplete;
            t[3] = l;
        } else {
            l = t[3];
        }
        const m = l;
        let p;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Contact");
            t[4] = p;
        } else {
            p = t[4];
        }
        let _;
        if (t[5] !== m) {
            const Component = r("WDSMenuItem.react");
            _ = <Component testid="mi-attach-contact" onPress={m} Icon={r("WDSIconIcPersonFilled.react")} iconXstyle={c.refreshedIcon} title={p}/>;
            t[5] = m;
            t[6] = _;
        } else {
            _ = t[6];
        }
        return _;
    }
    l.default = d;
}, 226);