__d("WAWebNewChatMenuBarItem.react", [
    "fbt",
    "WAWebActions",
    "WAWebMobilePlatforms",
    "WAWebNewChatButtonGatingUtils",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconWdsIcNewChat.react",
    "WDSIconWdsIcNewChatFilled.react",
    "WDSMenuBarItem.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        let n;
        if (t[0] !== e) {
            n = u.jsx(r("WDSIconWdsIcNewChat.react"), babelHelpers.extends({}, e, {
                testid: "new-chat-outline"
            }));
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        return n;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(20);
        const { disabled, onNewChat } = e;
        const i = o("WAWebNewChatButtonGatingUtils").getNewChatButtonVariant();
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebMobilePlatforms").isIOSPrimary();
            t[0] = l;
        } else {
            l = t[0];
        }
        const d = l;
        let m;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            m = o("WAWebMobilePlatforms").isAndroidPrimary();
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = m;
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("New chat");
            t[2] = _;
        } else {
            _ = t[2];
        }
        const f = _;
        switch(i){
            case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.FILLED_ICON_BUTTON:
                {
                    let g;
                    if (t[3] !== disabled || t[4] !== onNewChat) {
                        const Component = r("WDSButton.react");
                        g = <Component key="btn-new-chat" testid="menu-bar-chat" Icon={r("WDSIconWdsIcNewChatFilled.react")} aria-label={f} onPress={onNewChat} variant="filled" type="default" size="medium" disabled={disabled}/>;
                        t[3] = disabled;
                        t[4] = onNewChat;
                        t[5] = g;
                    } else {
                        g = t[5];
                    }
                    const h = g;
                    let y;
                    if (t[6] !== h || t[7] !== disabled) {
                        const Component = r("WDSTooltip.react");
                        y = disabled ? h : <Component label={f} shortcut={o("WAWebActions").Action.OPEN_NEW_CHAT}>{h}</Component>;
                        t[6] = h;
                        t[7] = disabled;
                        t[8] = y;
                    } else {
                        y = t[8];
                    }
                    return y;
                }
            case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.FILLED_TEXT_BUTTON:
                {
                    let C;
                    let b;
                    if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
                        C = s._("New chat");
                        b = s._("New chat");
                        t[9] = C;
                        t[10] = b;
                    } else {
                        C = t[9];
                        b = t[10];
                    }
                    const v = disabled ? undefined : o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER;
                    let S;
                    if (t[11] !== disabled || t[12] !== onNewChat || t[13] !== v) {
                        const Component = r("WDSMenuBarItem.react");
                        S = <Component key="btn-new-chat" testid="menu-bar-chat" icon={r("WDSIconWdsIcNewChatFilled.react")} onClick={onNewChat} title={C} label={b} buttonVariant="filled" tabOrder={v} disabled={disabled} keyboardShortcutAction={o("WAWebActions").Action.OPEN_NEW_CHAT}/>;
                        t[11] = disabled;
                        t[12] = onNewChat;
                        t[13] = v;
                        t[14] = S;
                    } else {
                        S = t[14];
                    }
                    return S;
                }
            case o("WAWebNewChatButtonGatingUtils").NewChatButtonVariant.CONTROL:
                {
                    let R;
                    if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
                        R = (()=>{
                            const e = true;
                            if (d) {
                                return r("WDSIconIcAdd.react");
                            }
                            if (p) {
                                return r("WDSIconWdsIcNewChatFilled.react");
                            }
                            return c;
                        })();
                        t[15] = R;
                    } else {
                        R = t[15];
                    }
                    const L = R;
                    const buttonVariant = d || p ? "filled" : "borderless";
                    const k = disabled ? undefined : o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER;
                    let I;
                    if (t[16] !== disabled || t[17] !== onNewChat || t[18] !== k) {
                        const Component = r("WDSMenuBarItem.react");
                        I = <Component key="btn-new-chat" testid="menu-bar-chat" icon={L} onClick={onNewChat} title={f} buttonVariant={buttonVariant} tabOrder={k} disabled={disabled} keyboardShortcutAction={o("WAWebActions").Action.OPEN_NEW_CHAT}/>;
                        t[16] = disabled;
                        t[17] = onNewChat;
                        t[18] = k;
                        t[19] = I;
                    } else {
                        I = t[19];
                    }
                    return I;
                }
        }
    }
    l.default = d;
}, 226);