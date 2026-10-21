__d("WAWebNewsletterSuspendedMessageBar.react", [
    "WAWebButton.react",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebNewsletterDeleteDrawer.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useCallback = e.useCallback;
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_chat = e.chat;
        let a;
        if (t[0] !== e_chat) {
            a = function() {
                const Component = r("WAWebNewsletterDeleteDrawer.react");
                o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component chat={e_chat} onCancel={o("WAWebDrawerManager").closeDrawerRight}/>);
            };
            t[0] = e_chat;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = a;
        let l;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            l = o("WAWebCommonNewsletterStrings").getDeleteChannelText();
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== i) {
            const Component = o("WAWebButton.react").WAWebButtonSecondaryDestructive;
            const c = <Component onClick={i} testid="suspended-channel-delete-btn">{l}</Component>;
            const Component_1 = o("WAWebFlex.react").FlexColumn;
            u = <Component_1 align="center">{c}</Component_1>;
            t[3] = i;
            t[4] = u;
        } else {
            u = t[4];
        }
        return u;
    }
    l.default = c;
}, 98);