__d("WAWebMarkAllChatsAsReadChatlistHeaderDropdownItem.react", [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatMessageSearch",
    "WAWebChatSearchFilters",
    "WAWebConfirmPopup.react",
    "WAWebFrontendChatGetters",
    "WAWebModalManager",
    "WAWebUpdateUnreadChatAction",
    "WDSIconWdsIcChat.react",
    "WDSMenuItem.react",
    "promiseDone",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(2);
        const t = d;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = function(n) {
                n?.stopPropagation();
                const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
                o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
                    surface: "unknown",
                    viewName: "mark-all-read"
                }} title={s._("Mark all chats as read?")} onOK={function() {
                    o("WAWebModalManager").ModalManager.close();
                    t();
                }} onCancel={o("WAWebModalManager").closeModalManager}/>);
            };
            e[0] = n;
        } else {
            n = e[0];
        }
        const a = n;
        let i;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            const l = s._("Mark all as read");
            const Component = r("WDSMenuItem.react");
            i = <Component Icon={r("WDSIconWdsIcChat.react")} title={l} onPress={a} testid="mi-mark-all-as-read"/>;
            e[1] = i;
        } else {
            i = e[1];
        }
        return i;
    }
    function d() {
        const e = o("WAWebChatCollection").ChatCollection.filter(p);
        e.forEach(m);
    }
    function m(e) {
        r("promiseDone")(o("WAWebUpdateUnreadChatAction").markUnread(e, false, false));
    }
    function p(e) {
        if (!o("WAWebFrontendChatGetters").getShouldAppearInList(e)) {
            return false;
        }
        const t = o("WAWebChatMessageSearch").matchFilter(e, {
            kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD
        });
        const e_archive = e.archive;
        return t && !e_archive;
    }
    l.default = c;
}, 226);