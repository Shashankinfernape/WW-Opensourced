__d("WAWebFormatHeaderFooter", [
    "WAWebFormatConfiguration"
], function(t, n, r, o, a, i, l) {
    function e(links, t) {
        return {
            formatters: o("WAWebFormatConfiguration").HeaderAndFooter({
                links,
                selectable: true,
                trusted: t
            }),
            selectable: true
        };
    }
    l.enableHeaderAndFooterFormatting = e;
}, 98);