__d("WAWebTextMentionMutatorComponent.react", [
    "WAWebABProps",
    "WAWebChatTextMentionMutatorComponent.react",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebGroupMetadataContext",
    "WAWebMiscGatingUtils",
    "WAWebShortNameTextMentionMutatorComponent.react",
    "WAWebWrapperDisplayTypeContext",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useContext = e.useContext;
    function c(e) {
        const n = o("react-compiler-runtime").c(21);
        const a = e_useContext(r("WAWebGroupMetadataContext"));
        const i = e.groupMetadata ?? a;
        const l = e_useContext(r("WAWebWrapperDisplayTypeContext"));
        const c = l === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION && i != null ? "group_mention" : undefined;
        let d;
        if (n[0] !== e.contact || n[1] !== e.lastMessage || n[2] !== e.onClick || n[3] !== e.selectable || n[4] !== e.theme || n[5] !== c) {
            const Component = r("WAWebChatTextMentionMutatorComponent.react");
            d = <Component contact={e.contact} lastMessage={e.lastMessage} onClick={e.onClick} selectable={e.selectable} theme={e.theme} unknownUserLogContext={c}/>;
            n[0] = e.contact;
            n[1] = e.lastMessage;
            n[2] = e.onClick;
            n[3] = e.selectable;
            n[4] = e.theme;
            n[5] = c;
            n[6] = d;
        } else {
            d = n[6];
        }
        let m = d;
        if (o("WAWebMiscGatingUtils").isDropLastNameEnabled() && i) {
            let p;
            if (n[7] !== i || n[8] !== e.contact || n[9] !== e.lastMessage || n[10] !== e.onClick || n[11] !== e.selectable || n[12] !== e.theme || n[13] !== c) {
                const Component = r("WAWebShortNameTextMentionMutatorComponent.react");
                p = <Component contact={e.contact} groupMetadata={i} lastMessage={e.lastMessage} onClick={e.onClick} selectable={e.selectable} theme={e.theme} unknownUserLogContext={c}/>;
                n[7] = i;
                n[8] = e.contact;
                n[9] = e.lastMessage;
                n[10] = e.onClick;
                n[11] = e.selectable;
                n[12] = e.theme;
                n[13] = c;
                n[14] = p;
            } else {
                p = n[14];
            }
            m = p;
        }
        if (l === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION) {
            const _ = o("WAWebABProps").getABPropConfigValue("wa_web_highlight_me_mention");
            let f;
            if (n[15] !== m || n[16] !== e.onClick) {
                const Component = o("WAWebClickable.react").Clickable;
                f = <Component as="span" onClick={e.onClick} tabIndex={_ ? -1 : undefined}>{m}</Component>;
                n[15] = m;
                n[16] = e.onClick;
                n[17] = f;
            } else {
                f = n[17];
            }
            return f;
        }
        if (l === o("WAWebDisplayType").DISPLAY_TYPE.EDITING) {
            let g;
            if (n[18] === Symbol.for("react.memo_cache_sentinel")) {
                g = {
                    className: "x1ph7ams"
                };
                n[18] = g;
            } else {
                g = n[18];
            }
            let h;
            if (n[19] !== m) {
                h = <span {...babelHelpers.extends({}, g, {
                    children: m
                })}/>;
                n[19] = m;
                n[20] = h;
            } else {
                h = n[20];
            }
            return h;
        }
        return m;
    }
    l.default = c;
}, 98);