__d("WAWebGifPanelMenuSectionTab.react", [
    "fbt",
    "WAWebGifPanelGifSections",
    "WAWebGifPanelMenuSectionIcon.react",
    "WAWebPanelsDisplayLocation",
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
    function d(t) {
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
            u = s._("Favourites");
            n[3] = u;
        } else {
            u = n[3];
        }
        let d;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            d = s._("Trending");
            n[4] = d;
        } else {
            d = n[4];
        }
        let m;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            m = s._("Haha");
            n[5] = m;
        } else {
            m = n[5];
        }
        let p;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("Sad");
            n[6] = p;
        } else {
            p = n[6];
        }
        let _;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Love");
            n[7] = _;
        } else {
            _ = n[7];
        }
        let f;
        if (n[8] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Reactions");
            n[8] = f;
        } else {
            f = n[8];
        }
        let g;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            g = s._("Sports");
            n[9] = g;
        } else {
            g = n[9];
        }
        let h;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            let C;
            h = {
                [(C = o("WAWebGifPanelGifSections")).SECTIONS.FAVORITES]: u,
                [C.SECTIONS.TRENDING]: d,
                [C.SECTIONS.HAHA]: m,
                [C.SECTIONS.SAD]: p,
                [C.SECTIONS.LOVE]: _,
                [C.SECTIONS.REACTIONS]: f,
                [C.SECTIONS.SPORTS]: g,
                [C.SECTIONS.TV]: s._("TV")
            };
            n[10] = h;
        } else {
            h = n[10];
        }
        const b = h;
        const a_sectionId = a.sectionId;
        const R = b[a_sectionId];
        const L = a.displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel ? o("WAWebGifPanelMenuSectionIcon.react").GifPanelMenuSectionIconTheme.EXPRESSION_PANELS : undefined;
        let E;
        if (n[11] !== a_sectionId || n[12] !== L || n[13] !== R) {
            E = c.jsx(o("WAWebGifPanelMenuSectionIcon.react").GifSectionIcon, {
                sectionId: a_sectionId,
                sectionTitle: R,
                theme: L
            });
            n[11] = a_sectionId;
            n[12] = L;
            n[13] = R;
            n[14] = E;
        } else {
            E = n[14];
        }
        let k;
        if (n[15] !== a.onClick || n[16] !== a.selected || n[17] !== a.showFocusIndicator || n[18] !== a_sectionId || n[19] !== l || n[20] !== E || n[21] !== R) {
            const Component = o("WAWebPanelsMenuTab.react").MenuTab;
            k = <Component onClick={a.onClick} sectionId={a_sectionId} selected={a.selected} showFocusIndicator={a.showFocusIndicator} title={R} theme={o("WAWebPanelsMenuTab.react").THEMES.MENU} onRef={l}>{E}</Component>;
            n[15] = a.onClick;
            n[16] = a.selected;
            n[17] = a.showFocusIndicator;
            n[18] = a_sectionId;
            n[19] = l;
            n[20] = E;
            n[21] = R;
            n[22] = k;
        } else {
            k = n[22];
        }
        return k;
    }
    l.default = d;
}, 226);