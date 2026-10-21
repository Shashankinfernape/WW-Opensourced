__d("WAWebGetExpressionsPanelOffset", [
    "WAWebDropdown.react",
    "WAWebL10N"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
        const n = r("WAWebL10N").isRTL();
        const { height, width } = t;
        const l = n ? e.x + e.width : e.x;
        const s = n ? l - e.width / 2 + o("WAWebDropdown.react").EMOJI_PICKER_WIDTH / 2 - 6 : l + e.width / 2 - o("WAWebDropdown.react").EMOJI_PICKER_WIDTH / 2 + 6;
        const vertical = height - e.y + 20;
        return {
            horizontal: n ? Math.abs(s - width) : s,
            vertical
        };
    }
    l.getExpressionsPanelOffset = e;
}, 98);