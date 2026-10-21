__d("WAWebMexUsernameAccountSyncNotificationHandler", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebGetUsernameQueryJob",
    "WAWebSetUsernameJob",
    "WAWebSetUsernameKeyQueryJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t != null) {
                if (o("WAWebUsernameTypes").isUsernameKey(t)) {
                    yield o("WAWebSetUsernameKeyQueryJob").setUsernameKeyJob(t);
                } else {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][username-sync] invalid key"
                    ]))).sendLogs("username-account-sync-invalid-key");
                }
            } else {
                yield o("WAWebSetUsernameKeyQueryJob").deleteUsernameKeyJob();
            }
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][username-sync] received"
            ])));
            const t_xwa2_notify_wa_user = t.xwa2_notify_wa_user;
            const r_lid_jid = t_xwa2_notify_wa_user.lid_jid;
            if (r_lid_jid == null) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username-sync] lid null"
                ])));
                return;
            }
            const i = o("WAWebWidFactory").createUserWidOrThrow(r_lid_jid);
            if (!i.equals(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow())) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][username-sync] wrong LID for self"
                ])));
                return;
            }
            const r_username_info = t_xwa2_notify_wa_user.username_info;
            if (r_username_info == null) {
                yield o("WAWebGetUsernameQueryJob").getUsernameJob();
                return;
            }
            const { pin, state, username } = r_username_info;
            yield (d || (d = n("Promise"))).all([
                o("WAWebSetUsernameJob").setUsernamesJob([
                    username == null ? {
                        userId: i,
                        deleteUsername: true
                    } : {
                        userId: i,
                        username: o("WAWebUsernameTypes").asUsername(username)
                    }
                ]),
                m(pin)
            ]);
            o("WAWebUserPrefsUsername").setUsernameState(state);
            o("WAWebBackendApi").frontendFireAndForget("setUsernameStateUpdated", {
                usernameState: state
            });
        });
        return f.apply(this, arguments);
    }
    l.mexHandleUsernameAccountSync = _;
}, 98);