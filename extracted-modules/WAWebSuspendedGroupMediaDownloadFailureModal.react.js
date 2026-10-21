__d("WAWebSuspendedGroupMediaDownloadFailureModal.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(2);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                surface: "unknown",
                viewName: "suspended-group-download-failure"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            n = <Component tsNavigationData={t} onOK={o("WAWebModalManager").closeModalManager} title={s._("Download failed")}>{s._("Media no longer available")}</Component>;
            e[1] = n;
        } else {
            n = e[1];
        }
        return n;
    }
    l.default = c;
}, 226);