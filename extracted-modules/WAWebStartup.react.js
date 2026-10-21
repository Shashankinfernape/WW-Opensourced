__d("WAWebStartup.react", [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebDebouncedLoadingScreen.react",
    "WAWebSocketModel",
    "WAWebStreamGetters",
    "WAWebStreamModel",
    "react",
    "useWAWebForceUpdate",
    "useWAWebInterval",
    "useWAWebListener",
    "useWAWebTimeout"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        "use no forget";
        const { initialLoadState: n, onReady: a } = t;
        const i = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        let l;
        let u;
        o("useWAWebListener").useListener(o("WAWebStreamModel").Stream, [
            "change:info",
            "change:obscurity",
            "change:hasSynced"
        ], i);
        const d = r("useWAWebInterval")(i, 1000);
        const m = d[0];
        o("useWAWebTimeout").useTimeout(m, 6000, {
            immediate: true
        });
        const p = o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream);
        const _ = function() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Startup: user selected logout"
            ])));
            o("WAWebSocketModel").Socket.logout();
        };
        const Component = r("WAWebDebouncedLoadingScreen.react");
        switch(p){
            case o("WAWebStreamModel").StreamInfo.OPENING:
            case o("WAWebStreamModel").StreamInfo.PAIRING:
                l = s._("Connecting to WhatsApp");
                u = s._("Make sure your computer has an active internet connection.");
                break;
            case o("WAWebStreamModel").StreamInfo.SYNCING:
            case o("WAWebStreamModel").StreamInfo.CONNECTING:
                return <Component initialLoadState={n} onReady={a} onLogout={_}/>;
            default:
                if (o("WAWebStreamModel").Stream.mode === o("WAWebStreamModel").StreamMode.MAIN) {
                    const Component = r("WAWebDebouncedLoadingScreen.react");
                    return <Component initialLoadState={n} onReady={a} onLogout={_}/>;
                }
                return null;
        }
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component_1 cover title={l} cancelText={s._("Log out")} onCancel={_}><hr className="xqtp20y x14vqqas xod5an3 x178xt8z x13fuv20 xx42vgk x1qhh985 x14e42zd x10w94by"/><div className="xieb3on x1f6kntn x1fc57z9 xhslqc4">{u}</div></Component_1>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 226);