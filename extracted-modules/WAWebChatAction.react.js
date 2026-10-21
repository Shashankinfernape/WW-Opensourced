__d("WAWebChatAction.react", [
    "WAWebCommandGetters",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardShortcut.react",
    "WAWebUnstyledButton.react",
    "react",
    "useWAWebActiveSelection",
    "useWAWebCommandValues",
    "useWAWebSearchQuery"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        paddingInlineStart30: {
            paddingInlineStart: "x162tt16",
            $$css: true
        },
        paddingInlineEnd30: {
            paddingInlineEnd: "x5zjp28",
            $$css: true
        },
        paddingInlineEnd10: {
            paddingInlineEnd: "x2vl965",
            $$css: true
        }
    };
    const c = {
        button: {
            width: "xh8yej3",
            backgroundColor: "x1280gxy",
            $$css: true
        },
        hover: {
            ":hover_backgroundColor": "x17gydlx",
            $$css: true
        },
        active: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        container: {
            height: "xdiz9cm",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            $$css: true
        },
        text: {
            fontSize: "x1f6kntn",
            $$css: true
        },
        label: {
            textAlign: "x1yc453h",
            $$css: true
        }
    };
    function d(e) {
        const t = o("useWAWebCommandValues").useCommandValues(e.action.id, [
            o("WAWebCommandGetters").getId,
            o("WAWebCommandGetters").getName,
            o("WAWebCommandGetters").getLabel
        ]);
        const n = t[0];
        const a = t[1];
        const i = t[2];
        const { onClick, searchQuery } = e;
        const m = r("useWAWebActiveSelection")(e.active, n);
        const p = m[0];
        const _ = m[1];
        const f = function(n) {
            onClick(n, e.action);
        };
        const g = function(t) {
            t.stopPropagation();
            t.preventDefault();
        };
        const h = o("useWAWebSearchQuery").useSearchText(searchQuery);
        const y = o("WAWebFormatConfiguration").Search({
            terms: [
                h
            ]
        });
        const C = {
            enter: f,
            space: f
        };
        const Component = r("WAWebFlexItem.react");
        const Component_1 = o("WAWebFlex.react").FlexRow;
        const Component_2 = r("WAWebUnstyledButton.react");
        const Component_3 = o("WAWebKeyboardHotKeys.react").HotKeys;
        return <Component_3 ref={p} onFocus={g} handlers={C}><Component_2 xstyle={[
            c.button,
            _ && c.active,
            !_ && c.hover,
            u.paddingInlineStart30
        ]} onClick={f}><Component_1 ref={p} xstyle={[
            c.container,
            u.paddingInlineEnd30
        ]} align="center" justify="all"><Component xstyle={[
            c.label,
            u.paddingInlineEnd10
        ]}>{s.jsx(o("WAWebEmojiText.react").EmojiText, {
            multiline: true,
            text: i,
            formatters: y,
            xstyle: c.text
        })}</Component><div>{s.jsx(o("WAWebKeyboardShortcut.react").KeyboardShortcut, {
            action: a,
            addModifiers: true
        })}</div></Component_1></Component_2></Component_3>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);