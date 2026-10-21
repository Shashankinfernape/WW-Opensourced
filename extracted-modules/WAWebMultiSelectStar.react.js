__d("WAWebMultiSelectStar.react", [
    "fbt",
    "WAArrayUtils",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMsgActionCapability",
    "WAWebMultiSelectUtils",
    "WAWebTabOrder",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSIconIcGrade.react",
    "WDSIconWdsIcGradeSlash.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebForceUpdate",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        btnMargin: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        }
    };
    function d(e) {
        "use no forget";
        const { onCancel, onStar, selectedMessages, theme, toastPosition } = e;
        const d = selectedMessages.getSelected();
        const d_length = d.length;
        const f = d.every((e)=>e.star);
        const g = d.every((e)=>o("WAWebMsgActionCapability").canStarMsg(e));
        const h = o("WAArrayUtils").groupBy(d, function(e) {
            return o("WAWebFrontendMsgGetters").getChat(e);
        });
        const y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
        o("useWAWebListener").useListeners(d.map((e)=>({
                source: e,
                eventOrEvents: "change:star",
                callback: y
            })));
        const C = function() {
            h.forEach((e, t)=>{
                o("WAWebCmd").Cmd.sendUnstarMsgs(t, e, null, toastPosition);
            });
            onCancel();
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(d, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
            onStar?.();
        };
        const b = function() {
            h.forEach((e, t)=>{
                o("WAWebCmd").Cmd.sendStarMsgs(t, e, null, toastPosition);
            });
            onCancel();
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(d, o("WAWebWamEnumMessageContextMenuOptionType").MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR);
            onStar?.();
        };
        let v;
        let S;
        let R;
        if (d_length && f) {
            v = C;
            S = p;
            R = s._("_j{\"*\":\"Unstar messages\",\"_1\":\"Unstar message\"}", [
                s._plural(d_length)
            ]);
        } else {
            v = b;
            S = m;
            R = s._("_j{\"*\":\"Star\"}", [
                s._plural(d_length)
            ]);
        }
        const L = !d_length || !g;
        const Component = r("WDSMenuBarItem.react");
        const E = <Component icon={S} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR} disabled={L} title={R} onClick={v} marginInlineXstyle={c.btnMargin}/>;
        if (theme === "mediaHub") {
            const Component = r("WDSMenuBarItem.react");
            return <Component icon={S} tabOrder={o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR} disabled={L} title={R} onClick={v} marginInlineXstyle={c.btnMargin}/>;
        }
        return E;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "star_message_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = u.jsx(r("WDSIconIcGrade.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    function p(e) {
        const n = o("react-compiler-runtime").c(3);
        const a = e.testid ?? "unstar_message_icon";
        let i;
        if (n[0] !== e || n[1] !== a) {
            i = u.jsx(r("WDSIconWdsIcGradeSlash.react"), babelHelpers.extends({}, e, {
                testid: a
            }));
            n[0] = e;
            n[1] = a;
            n[2] = i;
        } else {
            i = n[2];
        }
        return i;
    }
    l.default = d;
}, 226);