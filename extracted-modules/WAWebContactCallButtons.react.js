__d("WAWebContactCallButtons.react", [
    "WAWebCallButtonsSurface",
    "WAWebChatCollection",
    "WAWebFlexBox.react",
    "WAWebVoipCallButtonsLoadable",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_contact = e.contact;
        let r;
        if (t[0] !== e_contact.id) {
            r = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e_contact.id);
            t[0] = e_contact.id;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        if (a == null || !o("WAWebVoipGatingUtils").isCallingEnabled()) {
            return null;
        }
        let i;
        if (t[2] !== a) {
            const Component = o("WAWebFlexBox.react").FlexRow;
            i = <Component>{s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
                chat: a,
                surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
                callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CALL_LOG_SEARCH,
                lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
            })}</Component>;
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    l.default = u;
}, 98);