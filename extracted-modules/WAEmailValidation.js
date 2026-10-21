__d("WAEmailValidation", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = new RegExp(/^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, "i");
    const l = 64;
    const s = 255;
    const u = 63;
    function c(t) {
        if (t == null || t === "") {
            return true;
        }
        if (!e.test(t)) {
            return false;
        }
        const n = t.indexOf("@");
        const r = t.slice(n + 1);
        return n <= l && r.length <= s && r.split(".").every((e)=>e.length <= u);
    }
    i.validateEmail = c;
}, 66);