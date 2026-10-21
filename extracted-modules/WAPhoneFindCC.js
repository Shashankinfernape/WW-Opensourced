__d("WAPhoneFindCC", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = /^(1|2[07]|3[0-469]|4[013-9]|5[1-8]|6[0-6]|7|8[1246]|9[0-58])/;
    function l(e) {
        return s(e);
    }
    function s(t) {
        const n = t.match(e);
        if (n) {
            return n[0];
        }
        if (t.length >= 3) {
            return t.substring(0, 3);
        }
        return t;
    }
    function u(e) {
        const t = e.match(/\d+/g);
        if (t != null) {
            return t.join("");
        }
        return "";
    }
    i.phoneCC = l;
    i.findCC = s;
    i.extractDigits = u;
}, 66);