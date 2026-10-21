__d("WAWebUsernameTypes", [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebUsernameConstants",
    "WAWebUsernameValidationUtils",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = n("$InternalEnum")({
        PNH_CTWA: "ctwa",
        GENERAL: "general"
    });
    function d(e) {
        const t = p();
        if (t == null) {
            return _(e);
        }
        return t.test(e);
    }
    function m(e) {
        if (!d(e)) {
            throw r("err")("[username][key] Cannot convert key string to UsernameKey");
        }
        return e;
    }
    function p() {
        const t = o("WAWebABProps").getABPropConfigValue("username_key_regex");
        if (t === "") {
            return null;
        }
        try {
            return new RegExp(`^(?:${t})\$`);
        } catch (t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[username][key] could not compile username_key_regex: ",
                ""
            ])), t).sendLogs("username-key-regex-invalid", {
                sampling: 0.01
            });
            return null;
        }
    }
    function _(e) {
        return e.length >= o("WAWebABProps").getABPropConfigValue("username_key_min_length") && e.length <= o("WAWebABProps").getABPropConfigValue("username_key_max_length");
    }
    function f(e) {
        return o("WAWebUsernameValidationUtils").validateUsernameLocally(e).isValid;
    }
    function g(e) {
        return e != null && e !== "";
    }
    function h(e) {
        return y(e);
    }
    function y(e) {
        if (e.startsWith("@")) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[username] received username with @ prefix"
            ]))).sendLogs("username-with-at-prefix", {
                sampling: 0.01
            });
            return e.slice(1);
        }
        return e;
    }
    function C(e) {
        if (e == null) {
            return e;
        }
        if (e === "") {
            return null;
        }
        return h(e);
    }
    function b(e) {
        return `@${e}`;
    }
    function v(e) {
        return e;
    }
    function S(e) {
        return e ?? e;
    }
    l.LidOriginType = c;
    l.USERNAME_KEY_LENGTH = (u = o("WAWebUsernameConstants")).USERNAME_KEY_LENGTH;
    l.USERNAME_MAX_LENGTH = u.USERNAME_MAX_LENGTH;
    l.USERNAME_MIN_LENGTH = u.USERNAME_MIN_LENGTH;
    l.UsernameValidationErrorType = u.UsernameValidationErrorType;
    l.isUsernameKey = d;
    l.asUsernameKey = m;
    l.isUsernameKeyLengthAllowed = _;
    l.isUsername = f;
    l.isPresentUsername = g;
    l.asUsername = h;
    l.asMaybeUsername = C;
    l.displayUsername = b;
    l.serializeUsername = v;
    l.serializeMaybeUsername = S;
}, 98);