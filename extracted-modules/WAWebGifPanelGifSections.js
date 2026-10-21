__d("WAWebGifPanelGifSections", [
    "WAWebGifPanelGifCategories"
], function(t, n, r, o, a, i, l) {
    let u;
    const c = {
        FAVORITES: "FAVORITES",
        [(u = r("WAWebGifPanelGifCategories")).TRENDING]: u.TRENDING,
        [u.HAHA]: u.HAHA,
        [u.SAD]: u.SAD,
        [u.LOVE]: u.LOVE,
        [u.REACTIONS]: u.REACTIONS,
        [u.SPORTS]: u.SPORTS,
        [u.TV]: u.TV
    };
    const d = {
        [c.FAVORITES]: c.FAVORITES,
        [c.TRENDING]: c.TRENDING,
        [c.HAHA]: c.HAHA,
        [c.SAD]: c.SAD,
        [c.LOVE]: c.LOVE,
        [c.REACTIONS]: c.REACTIONS,
        [c.SPORTS]: c.SPORTS,
        [c.TV]: c.TV
    };
    const m = [
        d.FAVORITES,
        d.TRENDING,
        d.HAHA,
        d.SAD,
        d.LOVE,
        d.REACTIONS,
        d.SPORTS,
        d.TV
    ];
    l.SECTIONS = c;
    l.ORDERED_TAB_SECTION_IDS = m;
}, 98);