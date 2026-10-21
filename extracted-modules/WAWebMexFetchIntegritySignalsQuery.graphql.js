__d("WAWebMexFetchIntegritySignalsQuery.graphql", [], function(t, n, r, o, a, i) {
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
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        };
        const r = {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "integrity_signals_info",
            plural: false,
            selections: [
                n,
                {
                    kind: "InlineFragment",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_suspicious_start_chat",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_new_account",
                            storageKey: null
                        }
                    ],
                    type: "XWA2IntegritySignals",
                    abstractKey: null
                }
            ],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexFetchIntegritySignalsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_fetch_wa_users",
                        plural: true,
                        selections: [
                            r
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
                name: "WAWebMexFetchIntegritySignalsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_fetch_wa_users",
                        plural: true,
                        selections: [
                            n,
                            r,
                            {
                                kind: "InlineFragment",
                                selections: [
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
                id: "26438847999065394",
                metadata: {},
                name: "WAWebMexFetchIntegritySignalsQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);