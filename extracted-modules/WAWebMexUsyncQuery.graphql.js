__d("WAWebMexUsyncQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "include_about_status"
        };
        const t = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "include_country_code"
        };
        const n = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "include_orgs"
        };
        const r = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "include_username"
        };
        const o = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        };
        const a = [
            {
                kind: "Variable",
                name: "input",
                variableName: "input"
            }
        ];
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "jid",
            storageKey: null
        };
        const l = {
            condition: "include_country_code",
            kind: "Condition",
            passingValue: true,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "country_code",
                    storageKey: null
                }
            ]
        };
        const s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        };
        const u = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "status",
                    storageKey: null
                }
            ],
            type: "XWA2ResponseStatus",
            abstractKey: null
        };
        const c = {
            condition: "include_orgs",
            kind: "Condition",
            passingValue: true,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "orgs_info",
                    plural: false,
                    selections: [
                        s,
                        {
                            kind: "InlineFragment",
                            selections: [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "XWA2Org",
                                    kind: "LinkedField",
                                    name: "orgs",
                                    plural: true,
                                    selections: [
                                        {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "org_id",
                                            storageKey: null
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "display_name",
                                            storageKey: null
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "member_tag",
                                            storageKey: null
                                        },
                                        {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "role",
                                            storageKey: null
                                        }
                                    ],
                                    storageKey: null
                                }
                            ],
                            type: "XWA2Orgs",
                            abstractKey: null
                        },
                        u
                    ],
                    storageKey: null
                }
            ]
        };
        const d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "timestamp",
            storageKey: null
        };
        const m = {
            condition: "include_username",
            kind: "Condition",
            passingValue: true,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "username_info",
                    plural: false,
                    selections: [
                        s,
                        {
                            kind: "InlineFragment",
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
                                d,
                                {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "pin",
                                    storageKey: null
                                }
                            ],
                            type: "XWA2Username",
                            abstractKey: null
                        },
                        u
                    ],
                    storageKey: null
                }
            ]
        };
        const p = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null
                },
                d
            ],
            type: "XWA2AboutStatus",
            abstractKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [
                    e,
                    t,
                    n,
                    r,
                    o
                ],
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexUsyncQuery",
                selections: [
                    {
                        alias: null,
                        args: a,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_fetch_wa_users",
                        plural: true,
                        selections: [
                            i,
                            l,
                            c,
                            m,
                            {
                                condition: "include_about_status",
                                kind: "Condition",
                                passingValue: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "about_status_info",
                                        plural: false,
                                        selections: [
                                            p,
                                            u
                                        ],
                                        storageKey: null
                                    }
                                ]
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
                argumentDefinitions: [
                    o,
                    r,
                    e,
                    t,
                    n
                ],
                kind: "Operation",
                name: "WAWebMexUsyncQuery",
                selections: [
                    {
                        alias: null,
                        args: a,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_fetch_wa_users",
                        plural: true,
                        selections: [
                            s,
                            i,
                            l,
                            c,
                            m,
                            {
                                condition: "include_about_status",
                                kind: "Condition",
                                passingValue: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "about_status_info",
                                        plural: false,
                                        selections: [
                                            s,
                                            p,
                                            u
                                        ],
                                        storageKey: null
                                    }
                                ]
                            },
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
                id: "28496738596651319",
                metadata: {},
                name: "WAWebMexUsyncQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);