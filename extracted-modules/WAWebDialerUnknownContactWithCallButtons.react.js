__d("WAWebDialerUnknownContactWithCallButtons.react", [
    "WAWebCallButtonsSurface",
    "WAWebFindChatAction",
    "WAWebKeyboardIsKeyActivation",
    "WAWebStopEvent",
    "WAWebUnknownContactSection.react",
    "WAWebUsernameKeyVerificationFlowLazy",
    "WAWebVoipCallButtonsLoadable",
    "WAWebWamEnumCallFromUi",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    function m(e) {
        const t = o("react-compiler-runtime").c(16);
        const { contactInfo, disableHeader, onUnknownContactClick, searchText } = e;
        const m = useState(null);
        const _ = m[0];
        const f = m[1];
        const contactInfo_searchQuery = contactInfo.searchQuery;
        let h;
        if (t[0] !== contactInfo.chat || t[1] !== contactInfo.username || t[2] !== contactInfo.wid || t[3] !== contactInfo_searchQuery) {
            h = function() {
                let e = true;
                const t = (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        if (contactInfo.wid == null) {
                            const t = yield o("WAWebUsernameKeyVerificationFlowLazy").usernameKeyVerificationFlow({
                                username: contactInfo.username
                            });
                            if (t == null) {
                                return;
                            }
                            const n = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "newChatFlow");
                            const r = n.chat;
                            if (e) {
                                f({
                                    chat: r,
                                    forSearchQuery: contactInfo_searchQuery
                                });
                            }
                        } else {
                            const l = contactInfo.chat ?? (yield o("WAWebFindChatAction").findOrCreateLatestChat(contactInfo.wid, "newChatFlow")).chat;
                            if (e) {
                                f({
                                    chat: l,
                                    forSearchQuery: contactInfo_searchQuery
                                });
                            }
                        }
                    });
                    return function() {
                        return t.apply(this, arguments);
                    };
                })();
                t();
                return function() {
                    e = false;
                };
            };
            t[0] = contactInfo.chat;
            t[1] = contactInfo.username;
            t[2] = contactInfo.wid;
            t[3] = contactInfo_searchQuery;
            t[4] = h;
        } else {
            h = t[4];
        }
        let y;
        if (t[5] !== contactInfo || t[6] !== contactInfo_searchQuery) {
            y = [
                contactInfo,
                contactInfo_searchQuery
            ];
            t[5] = contactInfo;
            t[6] = contactInfo_searchQuery;
            t[7] = y;
        } else {
            y = t[7];
        }
        useEffect(h, y);
        const C = _ != null && _.forSearchQuery === contactInfo_searchQuery ? _.chat : null;
        const onKeyPress = p;
        let v;
        if (t[8] !== C) {
            v = C != null ? <div className="x6s0dn4 x78zum5" onClick={o("WAWebStopEvent").stopPropagation} onKeyPress={onKeyPress} role="toolbar">{s.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
                chat: C,
                surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.IconOnly,
                callFromUI: o("WAWebWamEnumCallFromUi").CALL_FROM_UI.DIALER_NON_CONTACT,
                lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED
            })}</div> : null;
            t[8] = C;
            t[9] = v;
        } else {
            v = t[9];
        }
        const extraDetail = v;
        let R;
        if (t[10] !== extraDetail || t[11] !== contactInfo || t[12] !== disableHeader || t[13] !== onUnknownContactClick || t[14] !== searchText) {
            const Component = r("WAWebUnknownContactSection.react");
            R = <Component contactInfo={contactInfo} disableHeader={disableHeader} extraDetail={extraDetail} onUnknownContactClick={onUnknownContactClick} searchText={searchText}/>;
            t[10] = extraDetail;
            t[11] = contactInfo;
            t[12] = disableHeader;
            t[13] = onUnknownContactClick;
            t[14] = searchText;
            t[15] = R;
        } else {
            R = t[15];
        }
        return R;
    }
    function p(e) {
        if (r("WAWebKeyboardIsKeyActivation")(e)) {
            e.stopPropagation();
        }
    }
    l.default = m;
}, 98);