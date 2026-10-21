__d("WAWebIsBloksOnlyMessage", [
    "WAWebHsmGatingUtils",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    function e({ bloksWidget, footerText, interactiveHeader, text }) {
        if (bloksWidget == null || !o("WAWebHsmGatingUtils").isBloksWidgetEnabled()) {
            return false;
        }
        const l = interactiveHeader != null && (interactiveHeader.mediaType != null || interactiveHeader.title != null || interactiveHeader.subtitle != null);
        if (l || footerText != null) {
            return false;
        }
        const s = !r("isStringNullOrEmpty")(text) && text !== bloksWidget.fallback;
        return !s;
    }
    l.default = e;
}, 98);