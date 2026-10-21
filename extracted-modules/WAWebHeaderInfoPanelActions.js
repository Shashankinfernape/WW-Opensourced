__d("WAWebHeaderInfoPanelActions", [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGetters",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebInfoFlowLoadable",
    "WAWebKeyboardTabUtils",
    "WAWebMessageLogQplEvents",
    "WAWebStateUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ chat, profileEntryPoint, threadId, uim }) {
        const u = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("mid")?.existsDrawer() ?? false;
        if (!u) {
            if (chat.contact.isBusiness) {
                o("WAWebMessageLogQplEvents").qplStartProfileView("Header");
            }
            if (o("WAWebChatGetters").getIsUser(chat) || o("WAWebChatGetters").getIsBroadcast(chat) || o("WAWebChatGetters").getIsGroup(chat) || o("WAWebChatGetters").getIsNewsletter(chat)) {
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
                    descriptorType: "info_flow",
                    chat: o("WAWebStateUtils").unproxy(chat),
                    profileEntryPoint,
                    sourceGroupChatOrNewsletter: o("WAWebChatGetters").getIsGroup(chat) ? chat : undefined,
                    threadId
                } : s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: o("WAWebStateUtils").unproxy(chat),
                    profileEntryPoint,
                    sourceGroupChatOrNewsletter: o("WAWebChatGetters").getIsGroup(chat) ? chat : undefined,
                    threadId
                }, `info-${chat.id.toString()}`), {
                    transition: "slide-left",
                    uim,
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
            }
        }
    }
    function c() {
        const n = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right")?.existsDrawer() ?? false;
        if (n) {
            o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
        }
    }
    l.openInfoPanel = u;
    l.closeInfoPanel = c;
}, 98);