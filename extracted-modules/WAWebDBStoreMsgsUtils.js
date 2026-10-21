__d("WAWebDBStoreMsgsUtils", [], function(t, n, r, o, a, i) {
    const e = 1000000000;
    function l(t, n = false) {
        return t.all({
            reverse: !n,
            limit: 1,
            index: [
                "rowId"
            ],
            returnKeyType: "keys"
        }).then((t)=>{
            if (t.length === 0) {
                return e;
            }
            return t[0];
        });
    }
    i.INLINE_MESSAGE_STARTING_INDEX = e;
    i.getLastRowId = l;
}, 66);