__d("WAWebShowDeleteAiThreadConfirmation", [
    "fbt",
    "WAWebBotFrontendUtils",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebConfirmPopup.react",
    "WAWebDeleteAiThreadsAction",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e, t, n) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component title={s._("Delete this chat with Meta AI?")} okText={s._("Delete")} okButtonType="solid-warning" onOK={function() {
            o("WAWebDeleteAiThreadsAction").deleteAiThreadsAction(e, [
                t
            ]).then(()=>{
                o("WAWebModalManager").ModalManager.close();
                o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Chat deleted")
                }));
                if (n) {
                    const t = o("WAWebChatCollection").ChatCollection.get(e);
                    if (t != null) {
                        o("WAWebBotFrontendUtils").createAndOpenNewMetaAiThread(t, o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIThreadList);
                    }
                }
            });
        }} onCancel={o("WAWebModalManager").closeModalManager}>{s._("Messages will be removed from all devices.")}</Component>);
    }
    l.showDeleteAiThreadConfirmation = c;
}, 226);