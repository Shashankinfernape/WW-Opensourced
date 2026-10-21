__d("WAWebExitAndDeleteGroupPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDeleteChatAction",
    "WAWebExitGroupAction",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useState = e.useState;
    function DComponent(e) {
        const t = o("react-compiler-runtime").c(10);
        const e_chat = e.chat;
        const a = e_useState(false);
        const okSpinner = a[0];
        const l = a[1];
        let d;
        if (t[0] !== e_chat) {
            d = function() {
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
                    o("WAWebModalManager").ModalManager.close();
                    l(false);
                });
            };
            t[0] = e_chat;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = d;
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Delete group?");
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Deleting this group will not delete any downloaded content from your device.");
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Delete group for me");
            t[4] = h;
        } else {
            h = t[4];
        }
        const y = h;
        let C;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                surface: "unknown",
                viewName: "exit-delete-group"
            };
            t[5] = C;
        } else {
            C = t[5];
        }
        let b;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebText.react").WAWebTextMuted;
            b = <Component>{g}</Component>;
            t[6] = b;
        } else {
            b = t[6];
        }
        let v;
        if (t[7] !== okSpinner || t[8] !== m) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            v = <Component tsNavigationData={C} title={_} onOK={m} okButtonType="solid-warning" okSpinner={okSpinner} okText={y} onCancel={o("WAWebModalManager").closeModalManager}>{b}</Component>;
            t[7] = okSpinner;
            t[8] = m;
            t[9] = v;
        } else {
            v = t[9];
        }
        return v;
    }
    l.default = DComponent;
}, 226);