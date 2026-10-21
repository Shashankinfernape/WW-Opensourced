__d("joinClasses", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e) {
        let t = e || "";
        for(let n = arguments.length <= 1 ? 0 : arguments.length - 1, r = 0; r < n; r++){
            const o = r + 1 < 1 || arguments.length <= r + 1 ? undefined : arguments[r + 1];
            if (o != null && o !== "") {
                t = (t ? `${t} ` : "") + o;
            }
        }
        return t;
    }
    i.default = e;
}, 66);