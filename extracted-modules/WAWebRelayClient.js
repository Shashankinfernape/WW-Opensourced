__d("WAWebRelayClient", [
    "Promise",
    "WAWebGraphQLServerError",
    "WAWebRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    const e = [
        "accessToken",
        "environmentType",
        "eventLogger",
        "getInlineDataReader"
    ];
    const s = [
        "accessToken",
        "environmentType",
        "eventLogger",
        "getInlineDataReader"
    ];
    let u;
    function c(e) {
        throw r("err")("Invariant Violation");
    }
    function d(e, t, n) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r = {}) {
            const a = r;
            const { accessToken: i, environmentType: l, eventLogger: s, getInlineDataReader: u } = a;
            const c = babelHelpers.objectWithoutPropertiesLoose(a, e);
            const d = yield o("WAWebRelayEnvironment").requireRelayRuntime();
            const { fetchQuery: m, readInlineData: p } = d;
            const _ = f(i);
            const { accessTokenString: g, actorID: h } = _;
            try {
                const y = yield o("WAWebRelayEnvironment").getEnvironment({
                    environmentType: l,
                    accessToken: g,
                    actorID: h
                });
                const C = (yield m)(y, t, n, c).toPromise();
                s?.success();
                u?.(p);
                return C;
            } catch (e) {
                if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    if (s != null) {
                        s.failure(e.source.errors);
                    }
                }
                throw e;
            }
        });
        return m.apply(this, arguments);
    }
    function p(e, t, n) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r = {}) {
            const a = r;
            const { accessToken: i, environmentType: l, eventLogger: c, getInlineDataReader: d } = a;
            const m = babelHelpers.objectWithoutPropertiesLoose(a, s);
            const p = yield o("WAWebRelayEnvironment").requireRelayRuntime();
            const { commitMutation: _, readInlineData: g } = p;
            const h = f(i);
            const { accessTokenString: y, actorID: C } = h;
            try {
                const b = yield o("WAWebRelayEnvironment").getEnvironment({
                    environmentType: l,
                    accessToken: y,
                    actorID: C
                });
                return new (u || (u = n("Promise")))(function(n, r) {
                    _(b, babelHelpers.extends({
                        mutation: e,
                        variables: t
                    }, m, {
                        onCompleted: function(t) {
                            c?.success();
                            d?.(g);
                            n(t);
                        },
                        onError: function(t) {
                            r(t);
                        }
                    }));
                });
            } catch (e) {
                if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    if (c != null) {
                        c.failure(e.source.errors);
                    }
                }
                throw e;
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        if (e == null || typeof e === "string") {
            return {
                accessTokenString: e,
                actorID: null
            };
        }
        if (r("isStringNullOrEmpty")(e.actorID)) {
            return {
                accessTokenString: e.token,
                actorID: e.bp_id
            };
        }
        return {
            accessTokenString: e.token,
            actorID: e.actorID
        };
    }
    l.graphql = c;
    l.fetchQuery = d;
    l.commitMutation = p;
}, 98);