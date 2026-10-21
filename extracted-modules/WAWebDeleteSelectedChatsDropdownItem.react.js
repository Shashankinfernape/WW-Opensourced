__d("WAWebDeleteSelectedChatsDropdownItem.react", [
    "fbt",
    "WAWebCmd",
    "WDSIconIcDelete.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(4);
        const { chats, onComplete } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = s._("Delete selected chats");
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = i;
        let c;
        if (t[1] !== chats || t[2] !== onComplete) {
            const d = function() {
                o("WAWebCmd").Cmd.deleteSelectedChats(chats, onComplete);
            };
            const Component = r("WDSMenuItem.react");
            c = <Component Icon={r("WDSIconIcDelete.react")} title={l} onPress={d} destructive testid="multi-select-bar-overflow-menu-item-delete-selected-chats"/>;
            t[1] = chats;
            t[2] = onComplete;
            t[3] = c;
        } else {
            c = t[3];
        }
        return c;
    }
    l.default = c;
}, 226);