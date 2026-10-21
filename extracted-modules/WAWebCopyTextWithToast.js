__d("WAWebCopyTextWithToast", [
    "WAWebCopyToClipboard",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ failureMsg, onSuccess, successMsg, text }) {
        o("WAWebCopyToClipboard").copyTextToClipboard(text).then((e)=>{
            if (e) {
                o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, {
                    msg: successMsg
                }));
                if (onSuccess != null) {
                    onSuccess();
                }
            } else {
                o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, {
                    msg: failureMsg
                }));
            }
        }).catch(()=>{
            o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, {
                msg: failureMsg
            }));
        });
    }
    l.copyTextWithToast = u;
}, 98);