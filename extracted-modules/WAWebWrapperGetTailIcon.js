__d("WAWebWrapperGetTailIcon", [
    "WAWebL10N",
    "WAWebWrapperTailIcon.react"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = r("WAWebL10N").isRTL();
        if (e) {
            if (t) {
                return o("WAWebWrapperTailIcon.react").MessageTailInIcon;
            }
            return o("WAWebWrapperTailIcon.react").MessageTailOutIcon;
        }
        if (t) {
            return o("WAWebWrapperTailIcon.react").MessageTailOutIcon;
        }
        return o("WAWebWrapperTailIcon.react").MessageTailInIcon;
    }
    l.getTailIcon = e;
}, 98);