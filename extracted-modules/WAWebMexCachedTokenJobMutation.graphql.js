__d("WAWebMexCachedTokenJobMutation.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const argumentDefinitions = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }
        ];
        const t = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }
                ],
                concreteType: "XWA2EntTradeCanonicalNonceForAccessTokensResponse",
                kind: "LinkedField",
                name: "xwa2_ent_trade_canonical_nonce_for_access_tokens",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWA2TRSAWithAESArgs",
                        kind: "LinkedField",
                        name: "encrypted_access_tokens",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "key",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "data",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "tag",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "nonce",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "algorithm",
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
                argumentDefinitions,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexCachedTokenJobMutation",
                selections: t,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions,
                kind: "Operation",
                name: "WAWebMexCachedTokenJobMutation",
                selections: t
            },
            params: {
                id: "27013462064904056",
                metadata: {},
                name: "WAWebMexCachedTokenJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);