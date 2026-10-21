__d("WAWebSelectAllMenuBarItem.react", [
    "fbt",
    "WDSIconIcCheckBox.react",
    "WDSIconIcCheckBoxOutlineBlank.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(7);
        const { isAllSelected, onClick, ref } = e;
        const l = isAllSelected === undefined ? false : isAllSelected;
        let c;
        if (t[0] !== l) {
            c = l ? s._("Deselect all") : s._("Select all");
            t[0] = l;
            t[1] = c;
        } else {
            c = t[1];
        }
        const d = c;
        const m = r(l ? "WDSIconIcCheckBoxOutlineBlank.react" : "WDSIconIcCheckBox.react");
        let p;
        if (t[2] !== m || t[3] !== onClick || t[4] !== ref || t[5] !== d) {
            const Component = r("WDSMenuBarItem.react");
            p = <Component ref={ref} testid="menu-bar-select-all" icon={m} title={d} onClick={onClick}/>;
            t[2] = m;
            t[3] = onClick;
            t[4] = ref;
            t[5] = d;
            t[6] = p;
        } else {
            p = t[6];
        }
        return p;
    }
    l.default = c;
}, 226);