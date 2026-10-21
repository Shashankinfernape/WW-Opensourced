__d("WAWebEmbeddedChatContext", [
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { createContext, useContext } = s;
    const DContext = createContext(false);
    function m() {
        return useContext(DContext);
    }
    l.WAWebEmbeddedChatContext = DContext;
    l.useIsEmbeddedChat = m;
}, 98);