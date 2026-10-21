__d("createKeyCommand", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = [
        "alt",
        "command",
        "shift"
    ];
    function l(t) {
        return e.filter((e)=>t?.[e] === true).concat(t?.key).join(" ");
    }
    i.default = l;
}, 66);