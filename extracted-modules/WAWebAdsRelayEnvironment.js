__d("WAWebAdsRelayEnvironment", [
    "JSResourceForInteraction",
    "Promise",
    "WAWebBackendApi",
    "WAWebDeviceIdHeader",
    "WAWebGraphQLConstants",
    "WAWebGraphQLRemapLocale",
    "WAWebMiscGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("relay-runtime").__setRef("WAWebAdsRelayEnvironment").load();
            return {
                Environment: e.Environment,
                RecordSource: e.RecordSource,
                Store: e.Store
            };
        });
        return u.apply(this, arguments);
    }
    let c = null;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (c != null) {
                let a = false;
                if (t.accessToken != null && t.accessToken !== c.accessToken) {
                    a = true;
                }
                if (t.actorID != null && t.actorID !== c.actorID) {
                    a = true;
                }
                if (!a) {
                    return c.environment;
                }
            }
            const i = yield (e || (e = n("Promise"))).all([
                s(),
                r("JSResourceForInteraction")("URI").__setRef("WAWebAdsRelayEnvironment").load(),
                r("JSResourceForInteraction")("createRelayFBNetwork").__setRef("WAWebAdsRelayEnvironment").load(),
                r("JSResourceForInteraction")("createRelayFBNetworkFetch").__setRef("WAWebAdsRelayEnvironment").load(),
                r("JSResourceForInteraction")("createRelayFBSubscribeFunction").__setRef("WAWebAdsRelayEnvironment").load()
            ]);
            const l = i[0];
            const { Environment, RecordSource, Store } = l;
            const p = i[1];
            const _ = i[2];
            const f = i[3];
            const g = i[4];
            const h = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
            const y = yield o("WAWebBackendApi").frontendSendAndReceive("getFullLocale", undefined);
            const C = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(y.replace("-", "_"), o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping());
            const graphURI = new p(`${h}?locale=${C}`);
            const network = _(f({
                graphURI,
                accessToken: t.accessToken,
                actorID: t.actorID,
                getAdditionalHeaders: function() {
                    const e = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
                    if (e != null) {
                        return {
                            "X-WA-Device-ID": e
                        };
                    }
                    return {};
                }
            }), g({
                actorID: t.actorID,
                accessToken: t.accessToken
            }));
            const environment = new Environment({
                network,
                store: new Store(new RecordSource),
                options: {
                    actorID: t?.actorID
                }
            });
            c = {
                environment,
                accessToken: t?.accessToken,
                actorID: t?.actorID
            };
            return environment;
        });
        return m.apply(this, arguments);
    }
    l.getEnvironment = d;
}, 98);