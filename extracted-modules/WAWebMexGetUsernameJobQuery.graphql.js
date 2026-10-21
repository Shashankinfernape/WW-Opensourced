__d("WAWebMexGetUsernameJobQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                alias: null,
                args: null,
                concreteType: "XWA2UsernameGetResponse",
                kind: "LinkedField",
                name: "xwa2_username_get",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWA2Username",
                        kind: "LinkedField",
                        name: "username_info",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "username",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "state",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "pin",
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ],
                storageKey: null
            }
        ];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexGetUsernameJobQuery",
                selections: e,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "WAWebMexGetUsernameJobQuery",
                selections: e
            },
            params: {
                id: "25347099718279209",
                metadata: {},
                name: "WAWebMexGetUsernameJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);