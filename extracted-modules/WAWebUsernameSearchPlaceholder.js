__d("WAWebUsernameSearchPlaceholder", [
    "WAWebFbtCommon",
    "WAWebUsernameGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (o("WAWebUsernameGatingUtils").usernameSearchRequiresAtSign()) {
            return r("WAWebFbtCommon")("Search name, number or @username");
        }
        return r("WAWebFbtCommon")("Search name, number or username");
    }
    l.getUsernameSearchPlaceholder = e;
}, 98);