__d("stylex-inject", [
    "CometStyleXSheet",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e = false;
    function s({ ltr, priority, rtl = null }) {
        if (!e && r("gkx")("20935") && ltr.indexOf("@keyframes") === -1) {
            e = true;
        }
        o("CometStyleXSheet").rootStyleSheet.insert(ltr, priority, rtl);
    }
    l.default = s;
}, 98);