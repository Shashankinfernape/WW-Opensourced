__d("WAWebSetUsernameJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseQueue",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebBackendApi",
    "WAWebMexSetUsernameJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (o("WAPromiseQueue")).PromiseQueue;
    function u(e, t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("setUsernameQueryJob", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = yield o("WAWebMexSetUsernameJob").mexSetUsernameQueryJob({
                input: e,
                reserved: o("WAWebUserPrefsUsername").getUsernameState() === "RESERVED",
                session_id: t,
                source: "USER_INPUT"
            });
            if (n) {
                const r = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
                yield p([
                    e != null ? {
                        userId: r,
                        username: o("WAWebUsernameTypes").asUsername(e)
                    } : {
                        userId: r,
                        deleteUsername: true
                    }
                ]);
                return true;
            }
            return false;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function c({ userId: t, username: n, usernameCountryCode: r }) {
        if (t == null) {
            return null;
        }
        if (n != null && r != null) {
            return {
                userId: t,
                username: o("WAWebUsernameTypes").asUsername(n),
                usernameCountryCode: r
            };
        }
        if (n != null) {
            return {
                userId: t,
                username: o("WAWebUsernameTypes").asUsername(n)
            };
        }
        if (r != null) {
            return {
                userId: t,
                usernameCountryCode: r
            };
        }
        return null;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = [];
            const r = new Map;
            const a = t.map(({ userId: t })=>t);
            const i = yield o("WAWebApiContactUsernameFields").bulkGetContactToUsernameInfoMap(a);
            let l = 0;
            const s = [];
            for (const u of t){
                const { userId: c, username: d, usernameCountryCode: m } = u;
                const p = i.get(c.toJid());
                const _ = !c.isLid() || o("WAWebApiContact").getPhoneNumber(c) != null;
                const f = d != null && (p?.username !== d || p?.usernameSoftDeleted === true) || u.deleteUsername === true && (_ && p?.username != null || !_ && p?.username !== d);
                const g = m != null && p?.usernameCountryCode !== m;
                const h = f || g;
                const y = !!(_ || p?.username != null);
                const C = {
                    usernameChanged: !!f,
                    countryCodeChanged: !!g,
                    wasPreviouslyKnown: y,
                    isPhoneNumberKnown: !!_
                };
                if (f) {
                    C.oldUsername = p?.username ?? void 0;
                }
                r.set(c.toString(), C);
                if (h) {
                    l++;
                    if (s.length < 3) {
                        s.push(c.toLogString());
                    }
                    const v = c.toJid();
                    const S = {
                        id: v
                    };
                    if (d != null) {
                        S.username = d;
                    } else {
                        if (u.deleteUsername === true) {
                            if (_) {
                                S.username = void 0;
                            } else {
                                S.usernameSoftDeleted = true;
                            }
                            if (u.displayNameLID != null) {
                                S.displayNameLID = u.displayNameLID;
                            }
                        }
                    }
                    if (m != null) {
                        S.usernameCountryCode = m;
                    }
                    n.push(S);
                }
            }
            if (l > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[username] updated ",
                    " usernames in db + collection => ",
                    ""
                ])), l, s);
            }
            if (n.length !== 0) {
                yield o("WAWebApiContactUsernameFields").bulkUpdateUsernamesInDb(n);
                yield o("WAWebBackendApi").frontendSendAndReceive("bulkUpdateUsernames", {
                    usernameUpdates: n
                });
            }
            return r;
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return s.enqueue(function() {
                return d(e);
            });
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return p(e.map(({ displayNameLID: t, userId: n })=>({
                    userId: n,
                    displayNameLID: t,
                    deleteUsername: true
                })));
        });
        return g.apply(this, arguments);
    }
    l.setUsernameQueryJob = u;
    l.maybeCreateSetUsernameInfoJobArg = c;
    l.setUsernamesJob = p;
    l.deleteUsernamesJob = f;
}, 98);