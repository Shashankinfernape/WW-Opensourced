__d("WAWebManageAiHandoffButton.react", [
    "fbt",
    "WAWebBizAiHandoffSettingsDrawerLoadable.react",
    "WAWebDrawerManager",
    "WAWebKeyboardTabUtils",
    "WAWebTabOrder",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumEntryPoint",
    "WDSFontTokenStyles",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        button: {
            cursor: "x1ypdohk",
            $$css: true
        },
        manageText: {
            color: "xk4n5i7",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function m() {
        const t = o("react-compiler-runtime").c(4);
        const n = p;
        let a;
        let i;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            const u = s._("Manage AI handoff");
            l = {
                className: "x78zum5 x6s0dn4 xl56j7k xdd8jsf x1phvje8 xcldk2z"
            };
            a = r("WAWebUnstyledButton.react");
            i = u.toString();
            t[0] = a;
            t[1] = i;
            t[2] = l;
        } else {
            a = t[0];
            i = t[1];
            l = t[2];
        }
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = <div {...babelHelpers.extends({}, l, {
                children: c.jsx(a, {
                    "aria-label": i,
                    dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
                    onClick: n,
                    testid: "manage-ai-handoff-button",
                    xstyle: d.button,
                    children: <span {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.manageText), {
                        children: s._("Manage AI handoff")
                    })}/>
                })
            })}/>;
            t[3] = m;
        } else {
            m = t[3];
        }
        return m;
    }
    function p() {
        const Component = o("WAWebBizAiHandoffSettingsDrawerLoadable.react").WAWebBizAiHandoffSettingsDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(<Component entryPoint={o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST} onBack={o("WAWebDrawerManager").closeDrawerLeft}/>, {
            focusOnUnMount: true,
            focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
        });
    }
    l.default = m;
}, 226);