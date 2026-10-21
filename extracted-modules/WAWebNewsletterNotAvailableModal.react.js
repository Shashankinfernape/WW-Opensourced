__d("WAWebNewsletterNotAvailableModal.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebModalManager",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebUpdaterUpdateApp",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useCallback = u.useCallback;
    function m(t) {
        const n = o("react-compiler-runtime").c(14);
        const t_gating = t.gating;
        const a = p;
        let closeModalManager = o("WAWebModalManager").closeModalManager;
        let l;
        let u;
        let d;
        let m;
        let _;
        e: switch(t_gating){
            case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.Disabled:
                {
                    let f;
                    if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
                        f = s._("WhatsApp Channels isn't currently available for you.");
                        n[0] = f;
                    } else {
                        f = n[0];
                    }
                    m = f;
                    _ = null;
                    break e;
                }
            case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.NeedsUpgrade:
                {
                    let g;
                    if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
                        const Component = o("WAWebFbtAppName").WAWebAppShortName;
                        g = s._("To use Channels, you need to update to the most recent version of {=m1}.", [
                            s._implicitParam("=m1", <Component>{s._("")}</Component>)
                        ]);
                        n[1] = g;
                    } else {
                        g = n[1];
                    }
                    m = g;
                    let h;
                    if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
                        h = s._("Update needed");
                        n[2] = h;
                    } else {
                        h = n[2];
                    }
                    _ = h;
                    u = o("WAWebModalManager").closeModalManager;
                    let y;
                    if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
                        y = s._("Dismiss");
                        n[3] = y;
                    } else {
                        y = n[3];
                    }
                    d = y;
                    closeModalManager = a;
                    let C;
                    if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
                        C = s._("Update");
                        n[4] = C;
                    } else {
                        C = n[4];
                    }
                    l = C;
                    break e;
                }
            case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.AvailableOnPhone:
                {
                    let b;
                    if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
                        b = s._("To use Channels, open the link on your mobile phone.");
                        n[5] = b;
                    } else {
                        b = n[5];
                    }
                    m = b;
                    let v;
                    if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
                        v = s._("Not yet available on web");
                        n[6] = v;
                    } else {
                        v = n[6];
                    }
                    _ = v;
                    break e;
                }
            case o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating.Enabled:
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[LoadingNewsletterPreviewModal] shown when enabled"
                ])));
                return null;
        }
        let S;
        if (n[7] !== d || n[8] !== m || n[9] !== l || n[10] !== u || n[11] !== closeModalManager || n[12] !== _) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            S = <Component title={_} onOK={closeModalManager} okText={l} onCancel={u} cancelText={d}>{m}</Component>;
            n[7] = d;
            n[8] = m;
            n[9] = l;
            n[10] = u;
            n[11] = closeModalManager;
            n[12] = _;
            n[13] = S;
        } else {
            S = n[13];
        }
        return S;
    }
    function p() {
        o("WAWebModalManager").ModalManager.close();
        o("WAWebUpdaterUpdateApp").updateApp();
    }
    l.default = m;
}, 226);