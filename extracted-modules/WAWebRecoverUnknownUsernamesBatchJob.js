__d("WAWebRecoverUnknownUsernamesBatchJob", [
    "WALogger",
    "WAWebMexUsersGetUsername",
    "WAWebSetUsernameJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let t;
            try {
                t = yield o("WAWebMexUsersGetUsername").getMexUsersUsername(e);
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebRecoverUnknownUsernamesBatchJob: username lookup threw"
                ]))).sendLogs("username-mex-query-failed").catching(r("getErrorSafe")(error));
                return e.map(()=>({
                        errored: true
                    }));
            }
            if (t == null) {
                m(e.length);
                return e.map(()=>({
                        errored: true
                    }));
            }
            const n = t;
            const a = [];
            const i = [];
            let l = 0;
            const c = e.map((e, t)=>{
                const r = n[t];
                if (r == null || r.error === true) {
                    l++;
                    return {
                        errored: true
                    };
                }
                i.push(t);
                a.push(r.username != null ? {
                    userId: e,
                    username: r.username
                } : {
                    userId: e,
                    deleteUsername: true
                });
                return {
                    errored: false
                };
            });
            if (l > 0) {
                m(l);
            }
            if (a.length > 0) {
                try {
                    yield o("WAWebSetUsernameJob").setUsernamesJob(a);
                } catch (error) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WAWebRecoverUnknownUsernamesBatchJob: username write failed"
                    ]))).sendLogs("unknown-user-recovery-username-write-failed").catching(r("getErrorSafe")(error));
                    for (const d of i){
                        c[d] = {
                            errored: true
                        };
                    }
                }
            }
            return c;
        });
        return d.apply(this, arguments);
    }
    function m(t) {
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "WAWebRecoverUnknownUsernamesBatchJob: ",
            " username lookup(s) failed"
        ])), t).sendLogs("username-mex-query-failed");
    }
    l.recoverUsernamesForLids = c;
}, 98);