__d("WAWebCatalogEventLogger", [
    "WAWebGraphqlCatalogRequestWamEvent",
    "WAWebWamEnumGraphqlCatalogEndpoint",
    "WAWebWamEnumGraphqlRequestResult"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = new (o("WAWebGraphqlCatalogRequestWamEvent")).GraphqlCatalogRequestWamEvent({
            graphqlCatalogEndpoint: e
        });
        return {
            success: function() {
                t.set({
                    graphqlErrorCode: -1,
                    graphqlRequestResult: o("WAWebWamEnumGraphqlRequestResult").GRAPHQL_REQUEST_RESULT.SUCCESS
                });
                t.commit();
            },
            failure: function([e]) {
                t.set({
                    graphqlErrorCode: e.code,
                    graphqlRequestResult: o("WAWebWamEnumGraphqlRequestResult").GRAPHQL_REQUEST_RESULT.FAILURE
                });
                t.commit();
            }
        };
    }
    l.GRAPHQL_CATALOG_ENDPOINT = o("WAWebWamEnumGraphqlCatalogEndpoint").GRAPHQL_CATALOG_ENDPOINT;
    l.createCatalogEventLogger = e;
}, 98);