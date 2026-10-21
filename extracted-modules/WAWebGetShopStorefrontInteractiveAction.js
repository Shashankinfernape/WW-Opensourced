__d("WAWebGetShopStorefrontInteractiveAction", [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebShowMessageActionFallbackErrorAction"
], function(t, n, r, o, a, i, l, s) {
    function e({ id }) {
        return {
            label: s._("View shop"),
            onClick: function() {
                if (id == null) {
                    return void r("WAWebShowMessageActionFallbackErrorAction")();
                }
                o("WAWebExternalLink.react").openExternalLink(`https://facebook.com/${id}/shop/`);
            }
        };
    }
    l.default = e;
}, 226);