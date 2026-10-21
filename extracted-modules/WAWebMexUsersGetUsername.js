__d("WAWebMexUsersGetUsername", [
    "WAWebABProps",
    "WAWebApiContactUsernameFields",
    "WAWebMexUsync",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebABProps").getABPropConfigValue("username_antiscraping_send_cached_un") === true ? yield o("WAWebApiContactUsernameFields").bulkGetContactToUsernameInfoMap([].concat(e)) : null;
            const n = e.map((e)=>{
                const client_known_username = o("WAWebUsernameTypes").serializeMaybeUsername(t?.get(e.toJid())?.username);
                return babelHelpers.extends({
                    jid: e.toJid()
                }, client_known_username != null ? {
                    client_known_username
                } : null);
            });
            const r = yield o("WAWebMexUsync").mexUsyncQuery({
                users: n,
                telemetry: {
                    context: "INTERACTIVE"
                },
                fetch: {
                    username: true
                }
            });
            const r_response = r.response;
            if (r_response != null) {
                const i = new Map;
                for (const l of r_response){
                    i.set(l.jid, l.username_info == null ? {
                        error: true,
                        username: null
                    } : {
                        username: o("WAWebUsernameTypes").asMaybeUsername(l.username_info?.username)
                    });
                }
                return e.map((e)=>i.get(e.toJid()) ?? {
                        error: true,
                        username: null
                    });
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = yield e([
                t
            ]);
            return r?.[0] ?? {
                username: null,
                error: true
            };
        });
        return c.apply(this, arguments);
    }
    l.getMexUsersUsername = e;
    l.getMexUserUsername = u;
}, 98);