__d("WAWebWidFormat", [
    "fbt",
    "WAJids",
    "WAMemoizeCache",
    "WATypeUtils",
    "WAWebL10N",
    "WAWebPhoneUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWid",
    "gkx"
], function(t, n, r, o, a, i, l, s) {
    const e = o("WAMemoizeCache").memoizeWithArgs(function(e) {
        if (e === "Server") {
            return e;
        }
        return o("WAWebPhoneUtils").formatPhone(e);
    }, function(e) {
        return e;
    });
    function u(t) {
        if (r("WAWebL10N").isRTL()) {
            return r("WAWebL10N").isolateLTR(e(t));
        }
        return e(t);
    }
    function c() {
        return s._("Unknown number").toString();
    }
    function d() {
        return s._("Unknown user").toString();
    }
    function m() {
        if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            return d();
        }
        return c();
    }
    function p(e) {
        if (e instanceof r("WAWebWid")) {
            if (e.isLid()) {
                if (r("gkx")("26258")) {
                    return m();
                }
                return e.toString();
            }
            return u(e.user);
        }
        if (o("WATypeUtils").isString(e)) {
            if (e.endsWith(o("WAJids").LID_DOMAIN)) {
                if (r("gkx")("26258")) {
                    return m();
                }
                return e;
            }
            return u(e.split("@")[0]);
        }
        return "";
    }
    l.getUnknownUserOrNumber = m;
    l.widToFormattedUser = p;
}, 226);