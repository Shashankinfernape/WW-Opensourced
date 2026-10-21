__d("WASmaxOutBlocklistsGetBlockListRequest", [
    "WASmaxChildren",
    "WASmaxJsx",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ itemDhash }) {
        const n = o("WASmaxJsx").smax("item", {
            dhash: o("WAWap").CUSTOM_STRING(itemDhash)
        });
        return n;
    }
    function s({ itemArgs }) {
        const r = o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "blocklist",
            type: "get",
            id: o("WAWap").generateId()
        }, o("WASmaxChildren").OPTIONAL_CHILD(e, itemArgs));
        return r;
    }
    l.makeGetBlockListRequestItem = e;
    l.makeGetBlockListRequest = s;
}, 98);