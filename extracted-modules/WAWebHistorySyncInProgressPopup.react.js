__d("WAWebHistorySyncInProgressPopup.react", [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFaqUrl",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProgressBar.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebHistorySyncProgressValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = "x1gnekcx-B";
    function d() {
        const e = o("react-compiler-runtime").c(9);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = [
                o("WAWebHistorySyncProgressGetters").getProgress
            ];
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = o("useWAWebHistorySyncProgressValues").useHistorySyncProgressValues(t);
        const progress = n[0];
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                surface: "unknown",
                viewName: "history-sync-in-progress"
            };
            e[1] = i;
        } else {
            i = e[1];
        }
        let l;
        let c;
        if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebHistorySyncUIText").SYNCING_OLDER_MESSAGES_MODAL_TITLE();
            c = s._("Learn more");
            e[2] = l;
            e[3] = c;
        } else {
            l = e[2];
            c = e[3];
        }
        let d;
        if (e[4] !== progress) {
            d = <M12 progress={progress}/>;
            e[4] = progress;
            e[5] = d;
        } else {
            d = e[5];
        }
        let p;
        if (e[6] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            p = <p data-testid="history-sync-progress-description-paragraph"><Component type="Body1" colorName="contentDefault" testid="history-sync-progress-description">{o("WAWebHistorySyncUIText").SYNCING_OLDER_MESSAGES_MODAL_TEXT()}</Component></p>;
            e[6] = p;
        } else {
            p = e[6];
        }
        let f;
        if (e[7] !== d) {
            const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
            f = <Component tsNavigationData={i} type={o("WAWebModal.react").ModalTheme.HistorySyncProgress} title={l} cancelText={c} onOK={o("WAWebModalManager").closeModalManager} onCancel={_}>{d}{p}</Component>;
            e[7] = d;
            e[8] = f;
        } else {
            f = e[8];
        }
        return f;
    }
    function M12(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_progress = e.progress;
        const a = e_progress;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "xz9dl7a xod5an3 x78zum5 xdt5ytf"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] !== a) {
            l = <div {...babelHelpers.extends({}, i, {
                children: a == null ? <P6Component/> : u.jsx(r("WAWebProgressBar.react"), {
                    value: a,
                    max: 100
                })
            })}/>;
            t[1] = a;
            t[2] = l;
        } else {
            l = t[2];
        }
        let s;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            s = {
                className: "x1kpxq89 xieb3on"
            };
            t[3] = s;
        } else {
            s = t[3];
        }
        let c;
        if (t[4] !== a) {
            c = a == null ? "" : o("WAWebHistorySyncUIText").SYNCING_OLDER_MESSAGES_MODAL_PERCENT(a);
            t[4] = a;
            t[5] = c;
        } else {
            c = t[5];
        }
        let d;
        if (t[6] !== c) {
            const Component = r("WDSText.react");
            d = <div {...babelHelpers.extends({
                "data-testid": "history-sync-progress-percentage"
            }, s, {
                children: <Component type="Body3" colorName="contentDefault" testid="history-sync-progress-percentage-text">{c}</Component>
            })}/>;
            t[6] = c;
            t[7] = d;
        } else {
            d = t[7];
        }
        let m;
        if (t[8] !== l || t[9] !== d) {
            m = <>{l}{d}</>;
            t[8] = l;
            t[9] = d;
            t[10] = m;
        } else {
            m = t[10];
        }
        return m;
    }
    function P6Component() {
        const e = o("react-compiler-runtime").c(1);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = <div className="x1izncso x7t6ubo xa4qsjk x8ktpl7 xgbwgrv xuoj239"/>;
            e[0] = t;
        } else {
            t = e[0];
        }
        return t;
    }
    function _() {
        window.open(o("WAWebFaqUrl").getMessageHistoryOnLinkedDevicesFAQUrl());
    }
    l.default = d;
}, 226);