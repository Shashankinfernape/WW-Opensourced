__d("WAWebMexGetPrivacySettingsQuery.graphql", [], function(t, n, r, o, a, i) {
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
            concreteType: "XWA2PrivacySettingsResponse",
            kind: "LinkedField",
            name: "privacy_settings",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "XWA2PrivacySetting",
                    kind: "LinkedField",
                    name: "settings",
                    plural: true,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "feature",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "setting",
                            storageKey: null
                        }
                    ],
                    storageKey: null
                }
            ],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexGetPrivacySettingsQuery",
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
                name: "WAWebMexGetPrivacySettingsQuery",
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
                id: "25637004609323493",
                metadata: {},
                name: "WAWebMexGetPrivacySettingsQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);