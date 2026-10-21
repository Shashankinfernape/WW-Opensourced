__d("WAWebClearSelectedChatsDropdownItem.react", [
    "fbt",
    "WAWebChatModel",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(9);
        const { onComplete, selectedModels } = e;
        let i;
        if (t[0] !== selectedModels) {
            const l = selectedModels.getSelected();
            i = l.reduce(d, []);
            t[0] = selectedModels;
            t[1] = i;
        } else {
            i = t[1];
        }
        const c = i;
        let m;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Clear selected chats");
            t[2] = m;
        } else {
            m = t[2];
        }
        const p = m;
        let _;
        if (t[3] !== c || t[4] !== onComplete) {
            _ = function() {
                o("WAWebCmd").Cmd.clearSelectedChats(c, onComplete);
            };
            t[3] = c;
            t[4] = onComplete;
            t[5] = _;
        } else {
            _ = t[5];
        }
        const f = _;
        let g;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            g = u.jsx(r("WAWebDropdownItemSeparator.react"), {});
            t[6] = g;
        } else {
            g = t[6];
        }
        let h;
        if (t[7] !== f) {
            const Component = r("WDSMenuItem.react");
            h = <>{g}<Component Icon={r("WDSIconIcDoNotDisturbOn.react")} title={p} onPress={f} destructive testid="multi-select-bar-overflow-menu-item-clear-selected-chats"/></>;
            t[7] = f;
            t[8] = h;
        } else {
            h = t[8];
        }
        return h;
    }
    function d(e, t) {
        if (t instanceof o("WAWebChatModel").Chat) {
            e.push(t);
        }
        return e;
    }
    l.default = c;
}, 226);