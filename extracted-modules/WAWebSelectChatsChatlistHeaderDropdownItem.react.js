__d("WAWebSelectChatsChatlistHeaderDropdownItem.react", [
    "fbt",
    "WDSIconIcCheckBox.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const { chatListCollapsed, isMultiSelectMode, startMultiSelect } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = s._("Select chats");
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = l;
        let d;
        if (t[1] !== startMultiSelect) {
            const Component = r("WDSMenuItem.react");
            d = <Component Icon={r("WDSIconIcCheckBox.react")} title={c} onPress={startMultiSelect} testid="mi-select-chats"/>;
            t[1] = startMultiSelect;
            t[2] = d;
        } else {
            d = t[2];
        }
        if (!chatListCollapsed && !isMultiSelectMode) {
            return d;
        }
        return null;
    }
    l.default = c;
}, 226);