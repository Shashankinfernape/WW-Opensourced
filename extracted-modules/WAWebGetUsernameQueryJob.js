__d("WAWebGetUsernameQueryJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebMexGetUsernameJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSetUsernameJob",
    "WAWebSetUsernameKeyQueryJob",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getUsernameQueryJob", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = (yield o("WAWebMexGetUsernameJob").mexGetUsernameQueryJob()) ?? {};
            const { pin, state, username } = n;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getUsernameQueryJob] user=",
                " state=",
                " key=",
                ""
            ])), username, state, pin);
            o("WAWebUserPrefsUsername").setUsernameState(state);
            o("WAWebBackendApi").frontendFireAndForget("setUsernameStateUpdated", {
                usernameState: state
            });
            let l;
            if (pin != null) {
                if (o("WAWebUsernameTypes").isUsernameKey(pin)) {
                    l = pin;
                } else {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "getUsernameJob: invalid username key received from MEX"
                    ]))).sendLogs("getUsernameJob-invalid-username-key");
                }
            }
            const u = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            yield o("WAWebSetUsernameJob").setUsernamesJob([
                username != null ? {
                    userId: u,
                    username: o("WAWebUsernameTypes").asUsername(username)
                } : {
                    userId: u,
                    deleteUsername: true
                }
            ]);
            if (l != null) {
                yield o("WAWebSetUsernameKeyQueryJob").setUsernameKeyJob(l);
            } else {
                yield o("WAWebSetUsernameKeyQueryJob").deleteUsernameKeyJob();
            }
            return username;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getUsernameJob = u;
}, 98);