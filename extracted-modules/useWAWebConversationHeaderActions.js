__d("useWAWebConversationHeaderActions", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatSearchDrawerLoadable",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebHeaderInfoPanelActions",
    "WAWebKeyboardTabUtils",
    "WAWebStateUtils",
    "WAWebWamEnumProfileEntryPoint",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(17);
        const { chat, headerRef, threadId, uim } = e;
        const l = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid");
        let u;
        if (t[0] !== l) {
            u = function(t) {
                const e = l.existsDrawer();
                if (e) {
                    if (t != null) {
                        t.preventDefault();
                    }
                }
            };
            t[0] = l;
            t[1] = u;
        } else {
            u = t[1];
        }
        const preventMenuWhileMidDrawerOpen = u;
        let d;
        if (t[2] !== chat || t[3] !== l || t[4] !== threadId || t[5] !== uim) {
            d = function(t) {
                t?.preventDefault();
                const e = l.existsDrawer();
                if (!e) {
                    o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                        descriptorType: "chat_search",
                        chat: o("WAWebStateUtils").unproxy(chat),
                        threadId
                    } : s.jsx(o("WAWebChatSearchDrawerLoadable").ChatSearchDrawerLoadable, {
                        chat: o("WAWebStateUtils").unproxy(chat),
                        threadId
                    }, `chat-search-${chat.id.toString()}`), {
                        transition: "slide-left",
                        uim,
                        focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                    });
                }
            };
            t[2] = chat;
            t[3] = l;
            t[4] = threadId;
            t[5] = uim;
            t[6] = d;
        } else {
            d = t[6];
        }
        const openChatSearch = d;
        let p;
        if (t[7] !== chat || t[8] !== threadId || t[9] !== uim) {
            p = function() {
                o("WAWebHeaderInfoPanelActions").openInfoPanel({
                    chat,
                    profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_HEADER,
                    threadId,
                    uim
                });
            };
            t[7] = chat;
            t[8] = threadId;
            t[9] = uim;
            t[10] = p;
        } else {
            p = t[10];
        }
        const openProfileDetails = p;
        let f;
        if (t[11] !== headerRef) {
            f = function(t) {
                t(headerRef.current?.getBoundingClientRect());
            };
            t[11] = headerRef;
            t[12] = f;
        } else {
            f = t[12];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "get_conversation_header_offset", f);
        let h;
        if (t[13] !== openChatSearch || t[14] !== openProfileDetails || t[15] !== preventMenuWhileMidDrawerOpen) {
            h = {
                openChatSearch,
                openProfileDetails,
                preventMenuWhileMidDrawerOpen
            };
            t[13] = openChatSearch;
            t[14] = openProfileDetails;
            t[15] = preventMenuWhileMidDrawerOpen;
            t[16] = h;
        } else {
            h = t[16];
        }
        return h;
    }
    l.default = u;
}, 98);