__d("WAWebMexUpdateGroupPropertyJob", [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUpdateGroupPropertyJobMutation.graphql",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e !== undefined ? e : e = n("WAWebMexUpdateGroupPropertyJobMutation.graphql");
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(group_id, update) {
            const r = {
                group_id,
                update
            };
            const a = yield o("WAWebMexClient").fetchQuery(s, r);
            const i = a.xwa2_group_update_property ?? {};
            const i_state = i.state;
            if (i_state !== "ACTIVE") {
                if (i_state != null) {
                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(405, `MexFatalExtensionError: group property update failed. group is in ${i_state} state`);
                }
            }
        });
        return c.apply(this, arguments);
    }
    l.mexUpdateGroupPropertyJob = u;
}, 98);