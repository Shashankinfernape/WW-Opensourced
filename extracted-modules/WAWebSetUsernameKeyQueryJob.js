__d("WAWebSetUsernameKeyQueryJob", [
    "WAJobOrchestratorTypes",
    "WAWebBackendApi",
    "WAWebLidAwareContactsDB",
    "WAWebMexSetUsernameKeyJob",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("setUsernameKeyQueryJob", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebMexSetUsernameKeyJob").mexSetUsernameKeyQueryJob(e);
            if (t) {
                if (e != null) {
                    yield s(e);
                } else {
                    yield c();
                }
                return true;
            }
            return false;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(usernameKey) {
            const t = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const a = t.toJid();
            const i = {
                id: a,
                usernameKey: usernameKey ?? undefined
            };
            yield o("WAWebModelStorageUtils").getStorage().lock([
                "contact"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return r("WAWebLidAwareContactsDB").createOrMerge(a, babelHelpers.extends({}, i));
            }));
            yield o("WAWebBackendApi").frontendSendAndReceive("updateUsernameKey", {
                id: a,
                usernameKey
            });
        });
        return u.apply(this, arguments);
    }
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield s(null);
        });
        return d.apply(this, arguments);
    }
    l.setUsernameKeyQueryJob = e;
    l.setUsernameKeyJob = s;
    l.deleteUsernameKeyJob = c;
}, 98);