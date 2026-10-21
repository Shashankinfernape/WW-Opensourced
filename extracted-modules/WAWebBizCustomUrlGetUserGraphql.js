__d("WAWebBizCustomUrlGetUserGraphql", [
    "WAWebBizCustomUrlGetUserGraphqlQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            return o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebBizCustomUrlGetUserGraphqlQuery.graphql"), {
                data: {
                    custom_url: {
                        path: t
                    }
                }
            }).then(c).catch((e)=>{
                if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                    return {
                        type: "graphql-error",
                        errorCode: e.source?.errors?.[0]?.code ?? 0,
                        errorText: e.source?.errors?.[0]?.message ?? ""
                    };
                }
                return {
                    type: "graphql-error",
                    errorCode: 0,
                    errorText: "unknown error"
                };
            });
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        if (e?.xwa_custom_url_get_user?.success !== true) {
            const a = e?.xwa_custom_url_get_user?.error_code;
            const i = e?.xwa_custom_url_get_user?.error_text;
            return {
                type: "error",
                errorCode: d(a),
                errorText: i ?? ""
            };
        }
        return {
            type: "success",
            lid: e?.xwa_custom_url_get_user?.lid
        };
    }
    function d(e) {
        switch(e){
            case "CODE_404":
                return 404;
            case "CODE_400":
                return 400;
            case "CODE_403":
                return 403;
            case "CODE_500":
                return 500;
            default:
                return 0;
        }
    }
    l.queryCustomUrlGetUser = s;
}, 98);