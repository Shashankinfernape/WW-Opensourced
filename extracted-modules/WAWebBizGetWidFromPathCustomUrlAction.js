__d("WAWebBizGetWidFromPathCustomUrlAction", [
    "WALogger",
    "WAWebBizCustomUrlGetUserGraphql",
    "WAWebBizGetCustomUrlUserGraphql",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (r("justknobx")._("707")) {
                const a = yield o("WAWebBizCustomUrlGetUserGraphql").queryCustomUrlGetUser(t);
                if (a.type !== "success") {
                    if (a.errorCode !== 404) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[custom-url] Error fetching user by custom url v2 ",
                            " ",
                            ""
                        ])), a.errorCode, a.errorText).sendLogs("get-user-by-custom-url-v2-graphql-error");
                    }
                    return null;
                }
                if (a.lid != null) {
                    return o("WAWebWidFactory").createUserWidOrThrow(a.lid);
                }
                return null;
            }
            const i = yield o("WAWebBizGetCustomUrlUserGraphql").queryCustomUrlUser(t);
            if (i.type === "error") {
                if (i.errorCode !== 404) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[custom-url] Error fetching user by custom url ",
                        " ",
                        ""
                    ])), i.errorCode, i.errorText).sendLogs("get-user-by-custom-url-graphql-error");
                }
                return null;
            }
            const l = i.user?.jid;
            if (l != null) {
                return o("WAWebWidFactory").createUserWidOrThrow(l);
            }
            return null;
        });
        return c.apply(this, arguments);
    }
    l.getWidfromPath = u;
}, 98);