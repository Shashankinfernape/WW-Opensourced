__d("WAWebMexUsersGetCountryCode", [
    "WALogger",
    "WAWebAsISOCountryCode",
    "WAWebMexUsync",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield o("WAWebMexUsync").mexUsyncQuery({
                users: t.map((e)=>({
                        jid: e.toJid()
                    })),
                telemetry: {
                    context: "INTERACTIVE"
                },
                fetch: {
                    country_code: true
                }
            });
            const r = n.response;
            if (r != null) {
                let a = 0;
                const i = r.map((e)=>{
                    if (e.country_code == null) {
                        a++;
                        return {
                            error: true
                        };
                    }
                    return {
                        usernameCountryCode: e.country_code
                    };
                });
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "server missing ",
                        " user's country code"
                    ])), a).sendLogs("missing-username-country-code-mex", {
                        sampling: 0.01
                    });
                }
                return i;
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield s([
                e
            ]);
            const n = t?.[0];
            if (n == null || n.error === true) {
                return null;
            }
            const r = n.usernameCountryCode;
            if (r != null) {
                return o("WAWebAsISOCountryCode").asISOCountryCode(r);
            }
        });
        return d.apply(this, arguments);
    }
    l.getMexUserCountryCode = c;
}, 98);