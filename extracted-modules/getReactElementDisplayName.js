__d("getReactElementDisplayName", [
    "getReactComponentDisplayName",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        if (e == null) {
            return "#empty";
        }
        if (typeof e === "string" || typeof e === "number" || typeof e === "boolean") {
            return "#text";
        }
        if (typeof e !== "object" || !("type" in e)) {
            return "ReactComponent";
        }
        const e_type = e.type;
        if (e_type == null) {
            return "ReactComponent";
        }
        if (typeof e_type === "string") {
            return e_type;
        }
        return r("getReactComponentDisplayName")(e_type);
    }
    l.default = u;
}, 98);