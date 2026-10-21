__d("useWAWebHandleNewGroupCreated", [
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useCallback = (e || (e = o("react"))).useCallback;
    function u() {
        return c;
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            try {
                t = yield e;
            } catch (e) {
                return;
            }
            if (t != null) {
                o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "handleNewGroupCreated").then(m);
            }
        });
        return d.apply(this, arguments);
    }
    function m({ chat }) {
        return o("WAWebCmd").Cmd.openChatBottom({
            chat,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation
        }).then((e)=>{
            if (e) {
                o("WAWebComposeBoxActions").ComposeBoxActions.focus(chat);
            }
        });
    }
    l.default = u;
}, 98);