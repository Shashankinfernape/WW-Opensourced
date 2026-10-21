__d("isSocialPlugin", [
    "CSSCore",
    "ExecutionEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s() {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            return !!document.body && o("CSSCore").hasClass(document.body, "plugin");
        }
        return false;
    }
    l.default = s;
}, 98);