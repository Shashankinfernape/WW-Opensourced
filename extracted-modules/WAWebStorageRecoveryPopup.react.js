__d("WAWebStorageRecoveryPopup.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebStopEvent",
    "WAWebStorageErrorHandlingUtils",
    "WAWebUnexpectedFatalErrorModal.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(6);
        const t_onReload = t.onReload;
        let a;
        if (n[0] !== t_onReload) {
            a = function() {
                t_onReload?.();
                o("WAWebStorageErrorHandlingUtils").markAppReloadForStorageRecovery();
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] StorageReloadHandler"
                ])));
                window.location.reload();
            };
            n[0] = t_onReload;
            n[1] = a;
        } else {
            a = n[1];
        }
        let okText;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            okText = s._("Reload");
            n[2] = okText;
        } else {
            okText = n[2];
        }
        let l;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("We encountered a problem running WhatsApp. Please reload the application to continue.");
            n[3] = l;
        } else {
            l = n[3];
        }
        let u;
        if (n[4] !== a) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            u = <Component onOverlayClick={o("WAWebStopEvent").preventDefault} onOK={a} okText={okText} okButtonType="primary" buttonsDirection="horizontal">{l}</Component>;
            n[4] = a;
            n[5] = u;
        } else {
            u = n[5];
        }
        return u;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(4);
        const { bugReportDescription, children, reason } = e;
        let l;
        if (t[0] !== bugReportDescription || t[1] !== children || t[2] !== reason) {
            const Component = r("WAWebUnexpectedFatalErrorModal.react");
            l = <Component bugReportDescription={bugReportDescription} reason={reason}>{children}</Component>;
            t[0] = bugReportDescription;
            t[1] = children;
            t[2] = reason;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    l.WAWebStorageReloadHandler = d;
    l.WAWebStorageLogoutHandler = m;
}, 226);