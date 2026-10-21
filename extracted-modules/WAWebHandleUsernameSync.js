__d("WAWebHandleUsernameSync", [
    "WALogger",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebSetUsernameJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const username = t.error.username;
            if (username) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleUsernameUsync: error ",
                    ": ",
                    ""
                ])), username.errorCode, username.errorText);
                return;
            }
            const t_list = t.list;
            const a = t_list.flatMap((e)=>{
                if (e.contact?.type === "out") {
                    return [];
                }
                if (e.id == null) {
                    return [];
                }
                if ("username" in e) {
                    if (e.username == null || e.username === "") {
                        if (o("WAWebUserPrefsMeUser").isMeAccount(e.id)) {
                            return [];
                        }
                        return [
                            {
                                userId: e.id,
                                deleteUsername: true
                            }
                        ];
                    }
                    return [
                        {
                            userId: e.id,
                            username: e.username
                        }
                    ];
                }
                return [];
            });
            if (a.length !== 0) {
                const i = yield o("WAWebSetUsernameJob").setUsernamesJob(a);
                yield o("WAWebInsertUsernameChangeSystemMsg").maybeInsertUsernameChangeSystemMsgs(a, i, "handleUsernameSync");
            }
        });
        return u.apply(this, arguments);
    }
    l.handleUsernameSync = s;
}, 98);