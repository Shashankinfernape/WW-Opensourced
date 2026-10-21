__d("WAWebAttachMenuPopupItemCamera.react", [
    "fbt",
    "WAWebAttachmentMenuLogger",
    "WDSIconIcPhotoCameraFilled.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        refreshedIcon: {
            color: "xvzgjlx",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { chat, onAlternateSendFlowStart, onCaptureClick } = e;
        let l;
        if (t[0] !== chat || t[1] !== onAlternateSendFlowStart || t[2] !== onCaptureClick) {
            l = function() {
                onAlternateSendFlowStart();
                onCaptureClick();
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CAMERA);
            };
            t[0] = chat;
            t[1] = onAlternateSendFlowStart;
            t[2] = onCaptureClick;
            t[3] = l;
        } else {
            l = t[3];
        }
        const d = l;
        let m;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Camera");
            t[4] = m;
        } else {
            m = t[4];
        }
        let p;
        if (t[5] !== d) {
            const Component = r("WDSMenuItem.react");
            p = <Component testid="mi-attach-camera" onPress={d} Icon={r("WDSIconIcPhotoCameraFilled.react")} iconXstyle={c.refreshedIcon} title={m}/>;
            t[5] = d;
            t[6] = p;
        } else {
            p = t[6];
        }
        return p;
    }
    l.default = d;
}, 226);