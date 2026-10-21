__d("WAWebMexFetchSimilarNewslettersJobQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "fetch_status_metadata"
        };
        const t = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        };
        const n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "type",
            storageKey: null
        };
        const o = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }
                ],
                concreteType: "XWA2NewsletterSearchResponse",
                kind: "LinkedField",
                name: "xwa2_newsletters_similar",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWA2Newsletter",
                        kind: "LinkedField",
                        name: "result",
                        plural: true,
                        selections: [
                            n,
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2NewsletterThreadMetadata",
                                kind: "LinkedField",
                                name: "thread_metadata",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2NewsletterName",
                                        kind: "LinkedField",
                                        name: "name",
                                        plural: false,
                                        selections: [
                                            n,
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "text",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "update_time",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: [
                                            {
                                                kind: "Literal",
                                                name: "type",
                                                value: "PREVIEW"
                                            }
                                        ],
                                        concreteType: "XWA2Picture",
                                        kind: "LinkedField",
                                        name: "picture",
                                        plural: false,
                                        selections: [
                                            n,
                                            r,
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "direct_path",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: 'picture(type:"PREVIEW")'
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "verification",
                                        storageKey: null
                                    }
                                ],
                                storageKey: null
                            },
                            {
                                condition: "fetch_status_metadata",
                                kind: "Condition",
                                passingValue: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2NewsletterStatusMetadata",
                                        kind: "LinkedField",
                                        name: "status_metadata",
                                        plural: false,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "last_status_server_id",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    }
                                ]
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2NewsletterState",
                                kind: "LinkedField",
                                name: "state",
                                plural: false,
                                selections: [
                                    r
                                ],
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
                argumentDefinitions: [
                    e,
                    t
                ],
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexFetchSimilarNewslettersJobQuery",
                selections: o,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [
                    t,
                    e
                ],
                kind: "Operation",
                name: "WAWebMexFetchSimilarNewslettersJobQuery",
                selections: o
            },
            params: {
                id: "26217043484590756",
                metadata: {},
                name: "WAWebMexFetchSimilarNewslettersJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);