__d("WAWebMexGetUsernameJob", [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexGetUsernameJobQuery.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = e !== undefined ? e : e = n("WAWebMexGetUsernameJobQuery.graphql");
            try {
                const a = yield o("WAWebMexClient").fetchQuery(t, {});
                const i = a.xwa2_username_get?.username_info;
                return {
                    username: i?.username,
                    state: i?.state,
                    pin: i?.pin
                };
            } catch (error) {
                if (error instanceof o("WAWebBackendErrors").ServerStatusCodeError && error.statusCode === 404) {
                    return {
                        username: null,
                        state: null,
                        pin: null
                    };
                }
                throw error;
            }
        });
        return u.apply(this, arguments);
    }
    l.mexGetUsernameQueryJob = s;
}, 98);