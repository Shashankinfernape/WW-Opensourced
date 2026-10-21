__d("react-strict-dom", [
    "ReactStrictDomWeb"
], function(t, n, r, o, a, i) {
    "use strict";
    Object.keys(importNamespace("ReactStrictDomWeb")).forEach((e)=>{
        if (!(e === "default" || e === "__esModule")) {
            i[e] = importNamespace("ReactStrictDomWeb")[e];
        }
    });
}, null);