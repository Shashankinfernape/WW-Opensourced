__d("WAWebGroupMenuDropdown.react", [
    "WATimeUtils",
    "WAWebChatThreadLogging",
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
    const s_useEffect = s.useEffect;
    function d(t) {
        const n = o("react-compiler-runtime").c(9);
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
        const s = a;
        const { chat, onSearchChat, onSelectMessages } = s;
        let _;
        let f;
        if (n[2] !== chat.id) {
            _ = function() {
                o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                    {
                        activityType: "chatOverflowClicks",
                        ts: o("WATimeUtils").unixTime(),
                        chatId: chat.id
                    }
                ]);
            };
            f = [
                chat.id
            ];
            n[2] = chat.id;
            n[3] = _;
            n[4] = f;
        } else {
            _ = n[3];
            f = n[4];
        }
        s_useEffect(_, f);
        let g;
        if (n[5] !== chat || n[6] !== onSearchChat || n[7] !== onSelectMessages) {
            const Component = o("WAWebConversationMenus").GroupMenu;
            const h = <Component chat={chat} onSearchChat={onSearchChat} onSelect={onSelectMessages}/>;
            const Component_1 = r("WDSMenu.react");
            g = <Component_1>{h}</Component_1>;
            n[5] = chat;
            n[6] = onSearchChat;
            n[7] = onSelectMessages;
            n[8] = g;
        } else {
            g = n[8];
        }
        return g;
    }
    l.default = d;
}, 98);