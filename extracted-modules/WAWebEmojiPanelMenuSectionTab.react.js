__d("WAWebEmojiPanelMenuSectionTab.react", [
    "fbt",
    "WAWebEmojiPanelEmojiSections",
    "WAWebEmojiPanelMenuSectionIcon.react",
    "WAWebPanelsMenuTab.react",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardRefSetter"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    function DComponent(t) {
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
        const l = r("useWAWebForwardRefSetter")(i);
        let u;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            u = s._("Recent");
            n[3] = u;
        } else {
            u = n[3];
        }
        let d;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Recent reactions");
            n[4] = d;
        } else {
            d = n[4];
        }
        let m;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Smileys & People");
            n[5] = m;
        } else {
            m = n[5];
        }
        let p;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Animals & Nature");
            n[6] = p;
        } else {
            p = n[6];
        }
        let _;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Food & Drink");
            n[7] = _;
        } else {
            _ = n[7];
        }
        let f;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Activity");
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Travel & Places");
            n[9] = g;
        } else {
            g = n[9];
        }
        let h;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Objects");
            n[10] = h;
        } else {
            h = n[10];
        }
        let y;
        if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("Symbols");
            n[11] = y;
        } else {
            y = n[11];
        }
        let C;
        if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
            let v;
            C = {
                [(v = o("WAWebEmojiPanelEmojiSections")).SECTIONS.RECENT]: u,
                [v.SECTIONS.RECENT_REACTIONS]: d,
                [v.SECTIONS.SMILEYS_PEOPLE]: m,
                [v.SECTIONS.ANIMALS_NATURE]: p,
                [v.SECTIONS.FOOD_DRINK]: _,
                [v.SECTIONS.ACTIVITY]: f,
                [v.SECTIONS.TRAVEL_PLACES]: g,
                [v.SECTIONS.OBJECTS]: h,
                [v.SECTIONS.SYMBOLS]: y,
                [v.SECTIONS.FLAGS]: s._("Flags")
            };
            n[12] = C;
        } else {
            C = n[12];
        }
        const S = C;
        const a_sectionId = a.sectionId;
        const E = S[a_sectionId];
        let k;
        if (n[13] !== a_sectionId) {
            k = c.jsx(r("WAWebEmojiPanelMenuSectionIcon.react"), {
                sectionId: a_sectionId
            });
            n[13] = a_sectionId;
            n[14] = k;
        } else {
            k = n[14];
        }
        let I;
        if (n[15] !== a.onClick || n[16] !== a.selected || n[17] !== a.showFocusIndicator || n[18] !== a_sectionId || n[19] !== l || n[20] !== k || n[21] !== E) {
            const Component = o("WAWebPanelsMenuTab.react").MenuTab;
            I = <Component onClick={a.onClick} sectionId={a_sectionId} selected={a.selected} showFocusIndicator={a.showFocusIndicator} theme={o("WAWebPanelsMenuTab.react").THEMES.MENU} title={E} onRef={l}>{k}</Component>;
            n[15] = a.onClick;
            n[16] = a.selected;
            n[17] = a.showFocusIndicator;
            n[18] = a_sectionId;
            n[19] = l;
            n[20] = k;
            n[21] = E;
            n[22] = I;
        } else {
            I = n[22];
        }
        return I;
    }
    l.default = DComponent;
}, 226);