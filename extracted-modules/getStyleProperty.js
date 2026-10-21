__d("getStyleProperty", [
    "camelize",
    "hyphenate"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e == null) {
            return "";
        }
        return String(e);
    }
    function s(t, n) {
        let o;
        if (window.getComputedStyle && (o = window.getComputedStyle(t, null), o)) {
            return e(o.getPropertyValue(r("hyphenate")(n)));
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            o = document.defaultView.getComputedStyle(t, null);
            if (o) {
                return e(o.getPropertyValue(r("hyphenate")(n)));
            }
            if (n === "display") {
                return "none";
            }
        }
        if (t.currentStyle) {
            return e(n === "float" ? t.currentStyle.cssFloat || t.currentStyle.styleFloat : t.currentStyle[r("camelize")(n)]);
        }
        return e(t.style && t.style[r("camelize")(n)]);
    }
    l.default = s;
}, 98);