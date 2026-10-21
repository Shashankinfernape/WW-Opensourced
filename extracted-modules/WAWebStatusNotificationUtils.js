__d("WAWebStatusNotificationUtils", [
    "fbt",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebStatusCollection",
    "WAWebStatusQuotedFlowLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("WAWebMsgGetters").getSender(e);
        if (t == null) {
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                msg: s._("Sender not found")
            }));
            return;
        }
        o("WAWebStatusCollection").StatusCollection.find(t).then((t)=>{
            const onMsgNotFound = function() {
                o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._("Status update not found")
                }));
            };
            const Component = o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable;
            o("WAWebModalManager").ModalManager.openMedia(<Component status={t} msgKey={e.id} onMsgNotFound={onMsgNotFound} onClose={function() {
                return o("WAWebModalManager").ModalManager.closeMedia();
            }}/>, {
                transition: "quoted-status-modal"
            });
        });
    }
    l.openStatusViewer = c;
}, 226);