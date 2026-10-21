__d("WAWebAttachMenuPopupItemQuickReplies.react", [
    "fbt",
    "WAWebAttachmentMenuLogger",
    "WAWebComposeBoxActions",
    "WDSIconIcBoltFilled.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        icon: {
            color: "x1ev1nr0",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(8);
        const { chat, dismissMenu } = e;
        let i;
        if (t[0] !== chat) {
            i = function() {
                o("WAWebComposeBoxActions").ComposeBoxActions.toggleQuickReplies();
                o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(chat, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.QUICK_REPLY);
            };
            t[0] = chat;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let d;
        if (t[2] !== dismissMenu || t[3] !== l) {
            d = function() {
                l();
                dismissMenu();
            };
            t[2] = dismissMenu;
            t[3] = l;
            t[4] = d;
        } else {
            d = t[4];
        }
        const m = d;
        let p;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Quick replies");
            t[5] = p;
        } else {
            p = t[5];
        }
        let _;
        if (t[6] !== m) {
            const Component = r("WDSMenuItem.react");
            _ = <Component testid="mi-attach-quick-replies" onPress={m} Icon={r("WDSIconIcBoltFilled.react")} iconXstyle={c.icon} title={p}/>;
            t[6] = m;
            t[7] = _;
        } else {
            _ = t[7];
        }
        return _;
    }
    l.default = d;
}, 226);