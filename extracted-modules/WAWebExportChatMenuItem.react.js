__d("WAWebExportChatMenuItem.react", [
    "fbt",
    "WAWebExportChatGatingUtils",
    "WAWebExportChatModalLoadable",
    "WAWebModalManager",
    "WDSIconIcDownload.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_chat = e.chat;
        if (!o("WAWebExportChatGatingUtils").canExportChat(e_chat) || !o("WAWebExportChatGatingUtils").isExportChatHistorySyncReady()) {
            return null;
        }
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Export chat");
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = a;
        let l;
        if (t[1] !== e_chat) {
            const Component = r("WDSMenuItem.react");
            l = <Component key="export" Icon={r("WDSIconIcDownload.react")} title={i} onPress={function() {
                const Component = o("WAWebExportChatModalLoadable").ExportChatModalLoadable;
                o("WAWebModalManager").ModalManager.open(<Component chat={e_chat} onClose={o("WAWebModalManager").closeModalManager}/>);
            }} testid="mi-export-chat"/>;
            t[1] = e_chat;
            t[2] = l;
        } else {
            l = t[2];
        }
        return l;
    }
    l.default = c;
}, 226);