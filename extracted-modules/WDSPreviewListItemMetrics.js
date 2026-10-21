__d("WDSPreviewListItemMetrics", [
    "WDSListItemConfig.stylex",
    "WDSPreviewListItemConfig.stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        comfortable: "medium",
        compact: "small",
        singleLine: "xxSmall"
    };
    const s = {
        comfortable: 48,
        compact: 40,
        singleLine: 24
    };
    const u = 4;
    const c = 4;
    const d = {
        comfortable: 8,
        compact: 4,
        singleLine: 4
    };
    const m = {
        comfortable: o("WDSListItemConfig.stylex").WDSListItemMinAddOnHeight,
        compact: o("WDSListItemConfig.stylex").WDSListItemMinAddOnHeight,
        singleLine: 0
    };
    const p = 4;
    function _({ density, hasParentName = false }) {
        const a = Math.max(s[density] + u * 2, m[density]);
        const i = hasParentName && density === "comfortable";
        const l = o("WDSPreviewListItemConfig.stylex").WDSPreviewListItemTitleLineHeight + (density === "singleLine" ? 0 : o("WDSPreviewListItemConfig.stylex").WDSPreviewListItemSubtitleLineHeight) + (i ? o("WDSPreviewListItemConfig.stylex").WDSPreviewListItemOverlineLineHeight + p * 2 : 0);
        return Math.max(a, l) + d[density] * 2 + c;
    }
    l.WDSPreviewListItemAvatarSize = e;
    l.WDSPreviewListItemAvatarPx = s;
    l.getWDSPreviewListItemRowHeight = _;
}, 98);