__d("maybeDisableAnimations", [
    "cx",
    "shouldDisableAnimations"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
        if (r("shouldDisableAnimations")()) {
            document.documentElement?.classList.add("_8ykn");
        }
    }
    l.default = e;
}, 98);