__d("WAWebQuickReplyComposerButton.react", [
    "fbt",
    "WAWebComposeBoxActions",
    "WAWebTabOrder",
    "WDSIconIcBolt.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    const d = {
        button: {
            marginInlineStart: "xw01apr",
            $$css: true
        }
    };
    function m() {
        const e = o("react-compiler-runtime").c(1);
        const t = p;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSMenuBarItem.react");
            n = <Component buttonSize="medium" buttonType="default" icon={r("WDSIconIcBolt.react")} marginInlineXstyle={d.button} onClick={t} tabOrder={o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER} testid="quick_replies_compose_button" title={s._("Quick replies")}/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function p() {
        o("WAWebComposeBoxActions").ComposeBoxActions.toggleQuickReplies();
    }
    l.default = m;
}, 226);