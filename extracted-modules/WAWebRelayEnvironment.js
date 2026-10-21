__d("WAWebRelayEnvironment", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCanonicalUtils",
    "WAWebDeviceIdHeader",
    "WAWebGraphQLConstants",
    "WAWebGraphQLPersistedQueries",
    "WAWebGraphQLRemapLocale",
    "WAWebGraphQLServerError",
    "WAWebMiscGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebGraphQLControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield r("JSResourceForInteraction")("relay-runtime").__setRef("WAWebRelayEnvironment").load();
            return {
                Environment: e.Environment,
                RecordSource: e.RecordSource,
                Store: e.Store,
                Network: e.Network,
                fetchQuery: e.fetchQuery,
                readInlineData: e.readInlineData,
                commitMutation: e.commitMutation
            };
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        switch(e){
            case "facebook":
                return o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
            case "whatsapp_www":
                return o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW();
            case "whatsapp_guest":
                return o("WAWebGraphQLConstants").whatsappGraphqlEndpointWWW();
            default:
                return o("WAWebGraphQLConstants").whatsappGraphqlEndpointCatalog();
        }
    }
    function m(e) {
        switch(e){
            case "facebook":
                return "locale";
            case "whatsapp_web":
                return "locale";
            case "whatsapp_www":
                return "locale";
            default:
                return "lang";
        }
    }
    function p({ status: t, statusText: n }) {
        throw new (o("WAWebGraphQLServerError")).GraphQLServerError({
            errors: [
                {
                    code: t,
                    message: n
                }
            ],
            httpStatus: t
        });
    }
    function _(t) {
        try {
            return JSON.parse(t);
        } catch (a) {
            const n = t.split("\r\n");
            if (n[n.length - 1] === "") {
                n.pop();
            }
            if (n.length < 2) {
                throw a;
            }
            try {
                return n.flatMap((e)=>{
                    const t = JSON.parse(e);
                    if (Array.isArray(t)) {
                        return t;
                    }
                    return [
                        t
                    ];
                });
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[gql] Failed to parse a progressive response payload"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("graphql-progressive-response-parse-failed");
                throw a;
            }
        }
    }
    function f(e) {
        if (!Array.isArray(e) && e?.errors != null) {
            throw new (o("WAWebGraphQLServerError")).GraphQLServerError({
                errors: e.errors
            });
        }
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ docId: n, locale: a, localeParameterName: i, variables: l }) {
            const u = r("WAXWhatsAppWebGraphQLControllerRouteBuilder").buildUri({}).toString();
            const c = {
                variables: JSON.stringify(l)
            };
            if (n != null) {
                c.doc_id = n;
            }
            c[i] = a;
            const d = yield o("WAWebXControllerFetchUtils").fetchFromXController(u, {
                method: "POST",
                additionalParams: c
            });
            const m = yield o("WAWebXControllerFetchUtils").extractJsonFromResponse(d);
            if (m == null) {
                throw new (o("WAWebGraphQLServerError")).GraphQLServerError({
                    errors: [
                        {
                            code: 0,
                            message: "Failed to parse GraphQL response"
                        }
                    ]
                });
            }
            const _ = m.payload ?? m;
            if (!d.ok) {
                if (_?.error != null) {
                    throw new (o("WAWebGraphQLServerError")).GraphQLServerError({
                        errors: [
                            _.error
                        ],
                        httpStatus: d.status
                    });
                }
                p(d);
            }
            if (_?.errors != null) {
                const f = new (o("WAWebGraphQLServerError")).GraphQLServerError({
                    errors: _.errors
                });
                const g = _.errors.some((e)=>e.code === o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE);
                if (g && n !== o("WAWebGraphQLPersistedQueries").PersistedQueries.WAWebCanonicalUserValidQuery && !r("gkx")("26256")) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical][gql] unauth err: ",
                        "; loggedIn=",
                        "; endpoint=",
                        ""
                    ])), o("WAWebGraphQLServerError").formatGraphQLServerError(f), o("WAWebCanonicalUtils").isCanonicalPresent(), u).sendLogs("canonical-gql-error", {
                        sampling: 0.1
                    });
                }
                throw f;
            }
            return _;
        });
        return h.apply(this, arguments);
    }
    const y = new Map;
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = e.environmentType ?? "whatsapp_catalog";
            const i = y.get(a);
            if (i != null) {
                let l = false;
                if (e.accessToken != null && e.accessToken !== i.accessToken) {
                    l = true;
                }
                if (e.actorID != null && e.actorID !== i.actorID) {
                    l = true;
                }
                if (!l) {
                    return i.environment;
                }
            }
            const s = yield u();
            const { Environment: c, Network: h, RecordSource: C, Store: b } = s;
            const v = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, a, i) {
                    const c = e.environmentType ?? "whatsapp_catalog";
                    const h = {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    };
                    if (c === "facebook" && o("WAWebMobilePlatforms").isSMB()) {
                        const y = o("WAWebDeviceIdHeader").getDeviceIdHeaderValue();
                        if (y != null) {
                            h["X-WA-Device-ID"] = y;
                        }
                    }
                    const C = o("WAWebGraphQLPersistedQueries").PersistedQueries[t.name] ?? t.id;
                    const b = m(c);
                    const v = yield o("WAWebBackendApi").frontendSendAndReceive("getFullLocale", void 0);
                    const S = o("WAWebGraphQLRemapLocale").graphQLRemapLocale(v.replace("-", "_"), o("WAWebMiscGatingUtils").getGraphqlLocaleRemapping());
                    if (c === "whatsapp_web") {
                        return g({
                            docId: C,
                            locale: S,
                            localeParameterName: b,
                            variables: n
                        });
                    }
                    if (c === "whatsapp_guest" && e?.accessToken == null) {
                        throw new (o("WAWebGraphQLServerError")).GraphQLServerError({
                            errors: [
                                {
                                    code: 0,
                                    message: "Missing WhatsApp guest GraphQL access token"
                                }
                            ]
                        });
                    }
                    const R = babelHelpers.extends({
                        access_token: e?.accessToken ?? o("WAWebGraphQLConstants").WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN,
                        doc_id: C,
                        variables: n
                    }, b === "lang" ? {
                        lang: S
                    } : {
                        locale: S
                    });
                    let L;
                    if (i != null && Object.keys(i).length > 0) {
                        delete h["Content-Type"];
                        const k = new FormData;
                        k.append("access_token", R.access_token);
                        if (R.doc_id != null) {
                            k.append("doc_id", R.doc_id);
                        }
                        k.append("variables", JSON.stringify(R.variables ?? {}));
                        if (R.lang != null) {
                            k.append("lang", R.lang);
                        }
                        if (R.locale != null) {
                            k.append("locale", R.locale);
                        }
                        Object.keys(i).forEach((e)=>{
                            k.append(e, i[e]);
                        });
                        L = k;
                    } else {
                        L = JSON.stringify(R);
                    }
                    const I = yield self.fetch(d(c), {
                        method: "POST",
                        headers: h,
                        body: L
                    });
                    if (!I.ok) {
                        let D;
                        try {
                            D = yield I.json();
                        } catch (e) {
                            p(I);
                        }
                        if (D?.error != null) {
                            throw new (o("WAWebGraphQLServerError")).GraphQLServerError({
                                errors: [
                                    D.error
                                ],
                                httpStatus: I.status
                            });
                        }
                        p(I);
                    }
                    if (c === "facebook" && !r("justknobx")._("1636")) {
                        const x = _((yield I.text()));
                        f(x);
                        return x;
                    }
                    const $ = yield I.json();
                    if ($?.errors != null) {
                        throw new (o("WAWebGraphQLServerError")).GraphQLServerError({
                            errors: $.errors
                        });
                    }
                    return $;
                });
                return function(n, r, o, a) {
                    return t.apply(this, arguments);
                };
            })();
            const S = new c({
                network: h.create(v),
                store: new b(new C),
                options: {
                    actorID: e?.actorID
                }
            });
            y.set(a, {
                environment: S,
                accessToken: e?.accessToken,
                actorID: e?.actorID
            });
            return S;
        });
        return b.apply(this, arguments);
    }
    l.requireRelayRuntime = u;
    l.getEnvironment = C;
}, 98);