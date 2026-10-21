__d("WAWebEmojiPanelSearchResultsAnnouncement.react", [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebPanelsDisplayLocation",
    "react",
    "react-compiler-runtime",
    "sumBy"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    function d(e) {
        const t = o("react-compiler-runtime").c(8);
        const { data, displayLocation } = e;
        let i;
        if (t[0] !== data) {
            i = r("sumBy")(data, m);
            t[0] = data;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = i;
        let c;
        if (displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions) {
            let d;
            if (t[2] !== l) {
                d = l === 0 ? s._("No reactions found") : s._("_j{\"*\":\"{number_of_reactions} reactions found\",\"_1\":\"1 reaction found\"}", [
                    s._plural(l, "number_of_reactions")
                ]);
                t[2] = l;
                t[3] = d;
            } else {
                d = t[3];
            }
            c = d;
        } else {
            let p;
            if (t[4] !== l) {
                p = l === 0 ? s._("No emoji found") : s._("_j{\"*\":\"{number_of_results} results found\",\"_1\":\"1 result found\"}", [
                    s._plural(l, "number_of_results")
                ]);
                t[4] = l;
                t[5] = p;
            } else {
                p = t[5];
            }
            c = p;
        }
        let _;
        if (t[6] !== c) {
            _ = u.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
                text: c
            });
            t[6] = c;
            t[7] = _;
        } else {
            _ = t[7];
        }
        return _;
    }
    function m(e) {
        return e.emojis.length;
    }
    l.default = d;
}, 226);