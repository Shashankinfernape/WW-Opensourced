__d("WAWebExitAndDeleteGroupDialogV2.react", [
    "fbt",
    "WAWebDeleteChatAction",
    "WAWebExitGroupAction",
    "WAWebNetworkStatus",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_chat = e.chat;
        const a = e_useState(false);
        const i = a[0];
        const l = a[1];
        const d = m;
        let p;
        if (t[0] !== e_chat || t[1] !== i) {
            p = function() {
                if (!i) {
                    l(true);
                    if (!r("WAWebNetworkStatus").online) {
                        o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                            msg: s._("Couldn't leave group. Please try again.")
                        }));
                        l(false);
                        return;
                    }
                    o("WAWebExitGroupAction").sendExitGroup(e_chat).then((e)=>{
                        if (e) {
                            o("WAWebDeleteChatAction").sendDelete(e_chat);
                        }
                    }).finally(()=>{
                        o("WDSDialogBridge").closeWDSDialog();
                        l(false);
                    });
                }
            };
            t[0] = e_chat;
            t[1] = i;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        let g;
        let confirmLabel;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Delete group?");
            g = s._("Deleting this group will not delete any downloaded content from your device.");
            confirmLabel = s._("Delete group for me");
            t[3] = f;
            t[4] = g;
            t[5] = confirmLabel;
        } else {
            f = t[3];
            g = t[4];
            confirmLabel = t[5];
        }
        let y;
        if (t[6] !== _) {
            const Component = r("WDSConfirmDialog.react");
            y = <Component title={f} description={g} confirmLabel={confirmLabel} destructive onConfirm={_} onDismiss={d} open/>;
            t[6] = _;
            t[7] = y;
        } else {
            y = t[7];
        }
        return y;
    }
    function m() {
        o("WDSDialogBridge").closeWDSDialog();
    }
    l.default = DComponent;
}, 226);