__d("WAWebMexGetWoasAgeSignalQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }
        ];
        const t = [
            {
                kind: "Variable",
                name: "input",
                variableName: "input"
            }
        ];
        const n = {
            alias: null,
            args: [
                {
                    kind: "Literal",
                    name: "assets",
                    value: [
                        "WOAS"
                    ]
                }
            ],
            concreteType: "XWA2AgeCollection",
            kind: "LinkedField",
            name: "age_collection_info",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "XWA2AgeCollectionAsset",
                    kind: "LinkedField",
                    name: "assets",
                    plural: true,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "value",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "ttl_sec",
                            storageKey: null
                        }
                    ],
                    storageKey: null
                }
            ],
            storageKey: 'age_collection_info(assets:["WOAS"])'
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexGetWoasAgeSignalQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_fetch_wa_users",
                        plural: true,
                        selections: [
                            {
                                kind: "InlineFragment",
                                selections: [
                                    n
                                ],
                                type: "XWA2User",
                                abstractKey: null
                            }
                        ],
                        storageKey: null
                    }
                ],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebMexGetWoasAgeSignalQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_fetch_wa_users",
                        plural: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "__typename",
                                storageKey: null
                            },
                            {
                                kind: "InlineFragment",
                                selections: [
                                    n,
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "id",
                                        storageKey: null
                                    }
                                ],
                                type: "XWA2User",
                                abstractKey: null
                            }
                        ],
                        storageKey: null
                    }
                ]
            },
            params: {
                id: "38845990424986108",
                metadata: {},
                name: "WAWebMexGetWoasAgeSignalQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);