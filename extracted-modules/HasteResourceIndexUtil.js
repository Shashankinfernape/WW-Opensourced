__d("HasteResourceIndexUtil", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    const e = 0;
    function u(e) {
        if (e.substr(0, 1) !== ":") {
            s(0, 88579, e);
        }
        return e.substr(1).split(",").map((e)=>parseInt(e, 10));
    }
    l.UNKNOWN_RESOURCE_INDEX = e;
    l.parseResourceIndexes = u;
}, 98);