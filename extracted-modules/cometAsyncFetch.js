__d("cometAsyncFetch", [
    "getCometAsyncFetchResponse"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t = {
        data: {},
        method: "GET"
    }) {
        return r("getCometAsyncFetchResponse")(e, t).then((e)=>{
            if (t?.getFullPayload === true) {
                return e?.getFullResponsePayload();
            }
            return e?.getResponsePayload();
        });
    }
    l.default = e;
}, 98);