__d("isClickIDBlocklistSVUrlPrefix", [
    "ClickIDURLPrefixBlocklistSVConfig"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = e.toString();
        return r("ClickIDURLPrefixBlocklistSVConfig").block_list_url_prefix.some((e)=>t.startsWith(e));
    }
    l.default = e;
}, 98);