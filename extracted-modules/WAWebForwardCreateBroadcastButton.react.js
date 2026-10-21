__d("WAWebForwardCreateBroadcastButton.react", [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebTabOrder",
    "WDSIconWdsIcBroadcastMessage.react",
    "WDSMenuBarItem.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebForwardCreateBroadcastAction").__setRef("WAWebForwardCreateBroadcastButton.react").load();
    }, "ForwardCreateBroadcastAction");
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const { msg, onClose, variant } = e;
        let l;
        if (t[0] !== msg || t[1] !== onClose) {
            l = function() {
                c().then((e)=>e(msg, onClose));
            };
            t[0] = msg;
            t[1] = onClose;
            t[2] = l;
        } else {
            l = t[2];
        }
        const d = l;
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("New business broadcast");
            t[3] = m;
        } else {
            m = t[3];
        }
        const p = m;
        let _;
        if (t[4] !== d || t[5] !== variant) {
            const Component = r("WDSMenuItem.react");
            const Component_1 = r("WDSMenuBarItem.react");
            _ = variant === "menu-item" ? <Component testid="biz-broadcast-forward-menu-item" onPress={d} title={p} Icon={r("WDSIconWdsIcBroadcastMessage.react")}/> : <Component_1 testid="biz-broadcast-forward-modal-creation-button" tabOrder={o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER} onClick={d} title={p} icon={r("WDSIconWdsIcBroadcastMessage.react")}/>;
            t[4] = d;
            t[5] = variant;
            t[6] = _;
        } else {
            _ = t[6];
        }
        return _;
    }
    l.default = d;
}, 226);