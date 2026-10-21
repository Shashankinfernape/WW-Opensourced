__d("WAWebConversationMsgsMenuV2.react", [
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebContactMenuDropdown.react",
    "WAWebConversationMenus",
    "WAWebConversationMsgsUtils",
    "WDSMenu.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useMemo, useRef } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(32);
        const { chat, onCancelSelect, onMenuReady, onSelect, scrollContainerRef, selectable } = e;
        const pRef = useRef(null);
        let _;
        let f;
        if (t[0] !== scrollContainerRef) {
            _ = function() {
                pRef.current = scrollContainerRef;
                return function() {
                    if (o("WAWebABProps").getABPropConfigValue("web_detached_dom_unmount_cleanup")) {
                        pRef.current = null;
                    }
                };
            };
            f = [
                scrollContainerRef
            ];
            t[0] = scrollContainerRef;
            t[1] = _;
            t[2] = f;
        } else {
            _ = t[1];
            f = t[2];
        }
        useEffect(_, f);
        let g;
        e: {
            let h;
            if (t[3] !== chat) {
                h = function() {
                    o("WAWebCmd").Cmd.chatSearch(chat);
                };
                t[3] = chat;
                t[4] = h;
            } else {
                h = t[4];
            }
            const onSearchChat = h;
            if (o("WAWebConversationMsgsUtils").isSimplifiedChatConversationMenuEnabled(chat)) {
                let C;
                if (t[5] !== chat || t[6] !== onCancelSelect || t[7] !== onSelect || t[8] !== selectable) {
                    C = o("WAWebConversationMenus").hybridMenu({
                        chat,
                        onCancelSelect,
                        onSelect,
                        selectable
                    });
                    t[5] = chat;
                    t[6] = onCancelSelect;
                    t[7] = onSelect;
                    t[8] = selectable;
                    t[9] = C;
                } else {
                    C = t[9];
                }
                const b = C;
                let v;
                if (t[10] !== b) {
                    const Component = r("WDSMenu.react");
                    v = <Component>{b}</Component>;
                    t[10] = b;
                    t[11] = v;
                } else {
                    v = t[11];
                }
                g = v;
                break e;
            } else if (o("WAWebChatGetters").getIsUser(chat)) {
                let S;
                if (t[12] !== chat || t[13] !== onSearchChat || t[14] !== onSelect || t[15] !== scrollContainerRef) {
                    const Component = r("WAWebContactMenuDropdown.react");
                    S = <Component chat={chat} onSelectMessages={onSelect} enableChatThreadLogging={false} onSearchChat={onSearchChat} container={scrollContainerRef}/>;
                    t[12] = chat;
                    t[13] = onSearchChat;
                    t[14] = onSelect;
                    t[15] = scrollContainerRef;
                    t[16] = S;
                } else {
                    S = t[16];
                }
                g = S;
                break e;
            } else if (o("WAWebChatGetters").getIsGroup(chat)) {
                let R;
                if (t[17] !== chat || t[18] !== onSearchChat || t[19] !== onSelect || t[20] !== scrollContainerRef) {
                    const Component = o("WAWebConversationMenus").GroupMenu;
                    const L = <Component chat={chat} container={scrollContainerRef} onSelect={onSelect} onSearchChat={onSearchChat}/>;
                    const Component_1 = r("WDSMenu.react");
                    R = <Component_1>{L}</Component_1>;
                    t[17] = chat;
                    t[18] = onSearchChat;
                    t[19] = onSelect;
                    t[20] = scrollContainerRef;
                    t[21] = R;
                } else {
                    R = t[21];
                }
                g = R;
                break e;
            } else if (o("WAWebChatGetters").getIsBroadcast(chat)) {
                let E;
                if (t[22] !== chat) {
                    E = o("WAWebConversationMenus").broadcastMenu(chat);
                    t[22] = chat;
                    t[23] = E;
                } else {
                    E = t[23];
                }
                const k = E;
                let I;
                if (t[24] !== k) {
                    const Component = r("WDSMenu.react");
                    I = <Component>{k}</Component>;
                    t[24] = k;
                    t[25] = I;
                } else {
                    I = t[25];
                }
                g = I;
                break e;
            }
            g = null;
        }
        const T = g;
        let D;
        if (t[26] !== T) {
            D = {
                targetRef: pRef,
                menu: T,
                contextMenuArea: true,
                enableUIM: false
            };
            t[26] = T;
            t[27] = D;
        } else {
            D = t[27];
        }
        const x = r("useWDSMenu")(D);
        const { menuPortal, openMenu } = x;
        let N;
        let M;
        if (t[28] !== onMenuReady || t[29] !== openMenu) {
            N = function() {
                onMenuReady(openMenu);
            };
            M = [
                openMenu,
                onMenuReady
            ];
            t[28] = onMenuReady;
            t[29] = openMenu;
            t[30] = N;
            t[31] = M;
        } else {
            N = t[30];
            M = t[31];
        }
        useEffect(N, M);
        return menuPortal;
    }
    l.ConversationMsgsMenuV2 = p;
}, 98);