__d("WAWebAttachMenuPopupItemPolls.react", [
    "fbt",
    "WAWebAttachmentMenuLogger",
    "WAWebModalManager",
    "WAWebPollCreationUtils",
    "WAWebPollsCreatePollModalLoadable.react",
    "WAWebPrepareMessageSendingAction",
    "WDSIconWdsIcPoll.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        refreshedIcon: {
            color: "x157dx7a",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(9);
        const { chat, getComposeBoxEditorRef, onAlternateSendFlowStart } = e;
        let l;
        if (t[0] !== chat || t[1] !== getComposeBoxEditorRef) {
            l = function() {
                o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebPollsCreatePollModalLoadable.react").CreatePollModalLoadable, {
                    chat,
                    getComposeBoxEditorRef,
                    pollType: o("WAWebPollCreationUtils").PollType.POLL
                }), {
                    blockClose: true
                });
                o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(chat);
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.POLL);
            };
            t[0] = chat;
            t[1] = getComposeBoxEditorRef;
            t[2] = l;
        } else {
            l = t[2];
        }
        const d = l;
        let m;
        if (t[3] !== onAlternateSendFlowStart || t[4] !== d) {
            m = function() {
                onAlternateSendFlowStart();
                d();
            };
            t[3] = onAlternateSendFlowStart;
            t[4] = d;
            t[5] = m;
        } else {
            m = t[5];
        }
        const p = m;
        let _;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Poll");
            t[6] = _;
        } else {
            _ = t[6];
        }
        let f;
        if (t[7] !== p) {
            const Component = r("WDSMenuItem.react");
            f = <Component testid="mi-attach-poll" onPress={p} Icon={r("WDSIconWdsIcPoll.react")} iconXstyle={c.refreshedIcon} title={_}/>;
            t[7] = p;
            t[8] = f;
        } else {
            f = t[8];
        }
        return f;
    }
    l.default = d;
}, 226);