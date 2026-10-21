__d("WAWebConsumerMultiSelectBar.react", [
    "fbt",
    "WAWebConsumerMultiSelectBarOverflowMenu.react",
    "WAWebTabOrder",
    "WDSIconIcClose.react",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebEventCounterValue",
    "useWAWebSourceSnapshot"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = {
        paddingBlock6: {
            paddingTop: "x1yrsyyn",
            paddingBottom: "x10b6aqq",
            $$css: true
        }
    };
    const p = {
        multiControls: {
            insetInlineStart: "x1o0tod",
            zIndex: "x1yg4o9v",
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            width: "xh8yej3",
            height: "xy063j7",
            position: "x1n2onr6",
            bottom: "xgxk9ee",
            backgroundColor: "x1h3rtpe",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xx42vgk",
            borderInlineEndColor: "xbogo7e",
            borderBottomColor: "x120ee7l",
            borderInlineStartColor: "x1vb5itz",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(23);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { onCancel, selectedModels } = l;
        const g = r("useWAWebSourceSnapshot")(selectedModels, "all", f);
        const unreadChatCount = r("useWAWebEventCounterValue")(selectedModels, "unread_chat");
        const unmutedChatCount = r("useWAWebEventCounterValue")(selectedModels, "unmuted_chat");
        let C;
        if (n[3] !== onCancel || n[4] !== selectedModels || n[5] !== unmutedChatCount || n[6] !== unreadChatCount) {
            const Component = r("WAWebConsumerMultiSelectBarOverflowMenu.react");
            C = <Component selectedModels={selectedModels} onComplete={onCancel} unreadChatCount={unreadChatCount} unmutedChatCount={unmutedChatCount}/>;
            n[3] = onCancel;
            n[4] = selectedModels;
            n[5] = unmutedChatCount;
            n[6] = unreadChatCount;
            n[7] = C;
        } else {
            C = n[7];
        }
        const b = C;
        let v;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            v = (u || (u = r("stylex"))).props(p.multiControls, m.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingStart16, o("WDSPaddings.stylex").wdsPaddings.paddingEnd20);
            n[8] = v;
        } else {
            v = n[8];
        }
        let S;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            S = s._("Cancel selection");
            n[9] = S;
        } else {
            S = n[9];
        }
        let R;
        if (n[10] !== onCancel) {
            const Component = r("WDSMenuBarItem.react");
            R = <Component testid="multi-select-bar-cancel-selection" tabOrder={o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER} icon={r("WDSIconIcClose.react")} title={S} onClick={onCancel}/>;
            n[10] = onCancel;
            n[11] = R;
        } else {
            R = n[11];
        }
        let L;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x1iyjqo2 xs83m0k xdl72j9 x1sa5p1d x1hm9lzh x6ikm8r x10wlt62 xlahmqy xlyipyv xuxw1ft"
            };
            n[12] = L;
        } else {
            L = n[12];
        }
        let E;
        if (n[13] !== g) {
            E = <div {...babelHelpers.extends({}, L, {
                "data-testid": "multi-select-bar-selected-count",
                children: s._("_j{\"*\":\"{number_of_selected_items} selected\",\"_1\":\"1 selected\"}", [
                    s._plural(g, "number_of_selected_items")
                ])
            })}/>;
            n[13] = g;
            n[14] = E;
        } else {
            E = n[14];
        }
        let k;
        if (n[15] !== g || n[16] !== b) {
            k = g > 0 && d.jsx(r("WDSMenuBarItem.react"), {
                icon: r("WDSIconIcMoreVert.react"),
                title: s._("Menu"),
                wdsMenuToRender: b,
                testid: "multi-select-bar-overflow-menu",
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
            });
            n[15] = g;
            n[16] = b;
            n[17] = k;
        } else {
            k = n[17];
        }
        let I;
        if (n[18] !== i || n[19] !== R || n[20] !== E || n[21] !== k) {
            I = <div {...babelHelpers.extends({
                ref: i
            }, v, {
                "data-testid": "multi-select-bar",
                children: [
                    R,
                    E,
                    k
                ]
            })}/>;
            n[18] = i;
            n[19] = R;
            n[20] = E;
            n[21] = k;
            n[22] = I;
        } else {
            I = n[22];
        }
        return I;
    }
    function f(e) {
        return e.getSelected().length;
    }
    l.default = _;
}, 226);