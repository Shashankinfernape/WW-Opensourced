__d("WAWebLongLinkPop.react", [
    "fbt",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebWamEnumUrlStatusClicked",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = function() {
        o("WAWebModalManager").ModalManager.close();
        o("WAWebCmd").Cmd.closeLongLinkModal(true);
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(12);
        const { link, statusItemViewEventRef } = e;
        let a;
        if (t[0] !== link.href || t[1] !== statusItemViewEventRef) {
            a = function() {
                if (statusItemViewEventRef?.current != null) {
                    statusItemViewEventRef.current.urlStatusClicked = o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.TWO_CLICKS;
                }
                o("WAWebModalManager").ModalManager.close();
                o("WAWebExternalLink.react").openExternalLink(link.href);
            };
            t[0] = link.href;
            t[1] = statusItemViewEventRef;
            t[2] = a;
        } else {
            a = t[2];
        }
        const i = a;
        let l;
        let d;
        let okText;
        let cancelText;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = {
                surface: "unknown",
                viewName: "long-link"
            };
            d = s._("Open in browser");
            okText = s._("Open link");
            cancelText = s._("Cancel");
            t[3] = l;
            t[4] = d;
            t[5] = okText;
            t[6] = cancelText;
        } else {
            l = t[3];
            d = t[4];
            okText = t[5];
            cancelText = t[6];
        }
        let _;
        if (t[7] !== link.href) {
            _ = <div>{link.href}</div>;
            t[7] = link.href;
            t[8] = _;
        } else {
            _ = t[8];
        }
        let f;
        if (t[9] !== i || t[10] !== _) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            f = <Component tsNavigationData={l} title={d} okText={okText} cancelText={cancelText} onOK={i} onCancel={c} type={o("WAWebModal.react").ModalTheme.LinkPopup}>{_}</Component>;
            t[9] = i;
            t[10] = _;
            t[11] = f;
        } else {
            f = t[11];
        }
        return f;
    }
    l.default = d;
}, 226);