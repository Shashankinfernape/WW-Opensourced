__d("WAWebHistorySyncPausedPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFaqUrl",
    "WAWebHistorySyncUIText",
    "WAWebModal.react",
    "WAWebModalManager",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(4);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = {
                surface: "unknown",
                viewName: "history-sync-paused"
            };
            e[0] = t;
        } else {
            t = e[0];
        }
        let n;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            n = <h1 data-testid="history-sync-paused-title-heading"><Component type="Headline2" colorName="contentDefault" testid="history-sync-paused-title">{o("WAWebHistorySyncUIText").SYNCING_PAUSED_POPUP_TITLE()}</Component></h1>;
            e[1] = n;
        } else {
            n = e[1];
        }
        let a;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Learn more");
            e[2] = a;
        } else {
            a = e[2];
        }
        let i;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
            i = <Component_1 tsNavigationData={t} title={n} type={o("WAWebModal.react").ModalTheme.HistorySyncProgress} cancelText={a} onOK={o("WAWebModalManager").closeModalManager} onCancel={d}><p data-testid="history-sync-paused-description-paragraph"><Component type="Body1" colorName="contentDefault" testid="history-sync-paused-description">{o("WAWebHistorySyncUIText").SYNCING_PAUSED_POPUP_DESC()}</Component></p></Component_1>;
            e[3] = i;
        } else {
            i = e[3];
        }
        return i;
    }
    function d() {
        window.open(o("WAWebFaqUrl").getMessageHistoryOnLinkedDevicesFAQUrl());
    }
    l.default = c;
}, 226);