__d("useWAWebReactionEmojiPickerMenu", [
    "fbt",
    "WAWebReactionsPanel.react",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = "x1wwg65c-B";
    const m = "x1xe9l1o-B";
    const p = {
        emojiPickerContainer: {
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            borderTopColor: "x1ekq09l",
            borderInlineEndColor: "xlmuga0",
            borderBottomColor: "x54tcbp",
            borderInlineStartColor: "xlzwp1d",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            boxShadow: "xvktan5",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            width: "x1jpg84f",
            animationName: "x65gd29",
            animationDuration: "x4afe7t",
            animationTimingFunction: "xuqacwm",
            animationFillMode: "x10e4vud",
            transformOrigin: "xyyilfv",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(14);
        const { align, msgId, onClose, onSelection, targetRef, themeXstyle } = t;
        const align_1 = align === undefined ? "start" : align;
        let f;
        if (n[0] !== msgId || n[1] !== onSelection || n[2] !== themeXstyle) {
            const Component = r("WAWebReactionsPanel.react");
            f = msgId != null ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.emojiPickerContainer, themeXstyle), {
                "data-testid": "reaction_emoji_picker",
                role: "group",
                "aria-label": s._("Choose a reaction"),
                onKeyPress: o("WAWebStopEvent").stopPropagation,
                children: <Component msgId={msgId} onSelection={onSelection}/>
            })}/> : null;
            n[0] = msgId;
            n[1] = onSelection;
            n[2] = themeXstyle;
            n[3] = f;
        } else {
            f = n[3];
        }
        const g = f;
        let h;
        if (n[4] !== align_1 || n[5] !== g || n[6] !== onClose || n[7] !== targetRef) {
            h = {
                targetRef,
                menu: g,
                position: "below",
                align: align_1,
                enableUIM: true,
                isContainer: true,
                repositionOnScroll: true,
                onClose
            };
            n[4] = align_1;
            n[5] = g;
            n[6] = onClose;
            n[7] = targetRef;
            n[8] = h;
        } else {
            h = n[8];
        }
        const y = r("useWDSMenu")(h);
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = y;
        let R;
        if (n[9] !== closeMenu || n[10] !== isMenuOpen || n[11] !== menuPortal || n[12] !== openMenu) {
            R = {
                closeMenu,
                isMenuOpen,
                menuPortal,
                openMenu
            };
            n[9] = closeMenu;
            n[10] = isMenuOpen;
            n[11] = menuPortal;
            n[12] = openMenu;
            n[13] = R;
        } else {
            R = n[13];
        }
        return R;
    }
    l.default = _;
}, 226);