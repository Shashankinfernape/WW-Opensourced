__d("WAWebGifPanelMenuSectionIcon.react", [
    "$InternalEnum",
    "WAWebGifPanelGifSections",
    "WDSIconIcFavorite.react",
    "WDSIconIcGrade.react",
    "WDSIconIcMonitor.react",
    "WDSIconIcSentimentExcited.react",
    "WDSIconIcSentimentSad.react",
    "WDSIconIcSportsBasketball.react",
    "WDSIconIcThumbUp.react",
    "WDSIconIcTrendingUp.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = n("$InternalEnum").Mirrored([
        "EXPRESSION_PANELS"
    ]);
    function c(e) {
        const t = o("react-compiler-runtime").c(6);
        const { sectionId, sectionTitle, theme } = e;
        if (theme === u.EXPRESSION_PANELS) {
            let l;
            if (t[0] !== sectionId) {
                l = <D1 sectionId={sectionId}/>;
                t[0] = sectionId;
                t[1] = l;
            } else {
                l = t[1];
            }
            return l;
        }
        if (sectionId && sectionId === o("WAWebGifPanelGifSections").SECTIONS.FAVORITES) {
            let c;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                c = s.jsx(r("WDSIconIcGrade.react"), {});
                t[2] = c;
            } else {
                c = t[2];
            }
            return c;
        }
        let m;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            m = {
                className: "x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"
            };
            t[3] = m;
        } else {
            m = t[3];
        }
        let p;
        if (t[4] !== sectionTitle) {
            p = <span {...babelHelpers.extends({}, m, {
                children: sectionTitle
            })}/>;
            t[4] = sectionTitle;
            t[5] = p;
        } else {
            p = t[5];
        }
        return p;
    }
    function D1(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_sectionId = e.sectionId;
        switch(e_sectionId){
            case o("WAWebGifPanelGifSections").SECTIONS.TRENDING:
                {
                    let a;
                    if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                        a = s.jsx(r("WDSIconIcTrendingUp.react"), {});
                        t[0] = a;
                    } else {
                        a = t[0];
                    }
                    return a;
                }
            case o("WAWebGifPanelGifSections").SECTIONS.HAHA:
                {
                    let i;
                    if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                        i = s.jsx(r("WDSIconIcSentimentExcited.react"), {});
                        t[1] = i;
                    } else {
                        i = t[1];
                    }
                    return i;
                }
            case o("WAWebGifPanelGifSections").SECTIONS.SAD:
                {
                    let l;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        l = s.jsx(r("WDSIconIcSentimentSad.react"), {});
                        t[2] = l;
                    } else {
                        l = t[2];
                    }
                    return l;
                }
            case o("WAWebGifPanelGifSections").SECTIONS.LOVE:
                {
                    let u;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        u = s.jsx(r("WDSIconIcFavorite.react"), {});
                        t[3] = u;
                    } else {
                        u = t[3];
                    }
                    return u;
                }
            case o("WAWebGifPanelGifSections").SECTIONS.REACTIONS:
                {
                    let c;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        c = s.jsx(r("WDSIconIcThumbUp.react"), {});
                        t[4] = c;
                    } else {
                        c = t[4];
                    }
                    return c;
                }
            case o("WAWebGifPanelGifSections").SECTIONS.SPORTS:
                {
                    let d;
                    if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                        d = s.jsx(r("WDSIconIcSportsBasketball.react"), {});
                        t[5] = d;
                    } else {
                        d = t[5];
                    }
                    return d;
                }
            case o("WAWebGifPanelGifSections").SECTIONS.TV:
                {
                    let m;
                    if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
                        m = s.jsx(r("WDSIconIcMonitor.react"), {});
                        t[6] = m;
                    } else {
                        m = t[6];
                    }
                    return m;
                }
        }
        let p;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            p = s.jsx(r("WDSIconIcGrade.react"), {});
            t[7] = p;
        } else {
            p = t[7];
        }
        return p;
    }
    l.GifPanelMenuSectionIconTheme = u;
    l.GifSectionIcon = c;
}, 98);