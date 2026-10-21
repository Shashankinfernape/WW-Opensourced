__d("WAWebBroadcastMenuDropdown.react", [
    "WAWebConversationMenus",
    "WDSMenu.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "_ref"
    ];
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const n = o("react-compiler-runtime").c(6);
        let a;
        if (n[0] !== t) {
            const i = t._ref;
            const l = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a = l;
            n[0] = t;
            n[1] = a;
        } else {
            a = n[1];
        }
        const a_chat = a.chat;
        let d;
        if (n[2] !== a_chat) {
            d = o("WAWebConversationMenus").broadcastMenu(a_chat);
            n[2] = a_chat;
            n[3] = d;
        } else {
            d = n[3];
        }
        const m = d;
        let p;
        if (n[4] !== m) {
            const Component = r("WDSMenu.react");
            p = <Component>{m}</Component>;
            n[4] = m;
            n[5] = p;
        } else {
            p = n[5];
        }
        return p;
    }
    l.default = c;
}, 98);