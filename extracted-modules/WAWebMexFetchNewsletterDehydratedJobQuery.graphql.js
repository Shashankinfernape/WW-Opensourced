__d("WAWebMexFetchNewsletterDehydratedJobQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "fetch_pinned_messages"
        };
        const t = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "fetch_wamo_sub"
        };
        const n = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        };
        const r = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }
                ],
                concreteType: "XWA2Newsletter",
                kind: "LinkedField",
                name: "xwa2_newsletter",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
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
                                kind: "ScalarField",
                                name: "subscribers_count",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "verification",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2NewsletterThreadSettings",
                                kind: "LinkedField",
                                name: "settings",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2NewsletterReactionCodesSetting",
                                        kind: "LinkedField",
                                        name: "reaction_codes",
                                        plural: false,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "value",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    }
                                ],
                                storageKey: null
                            },
                            {
                                condition: "fetch_wamo_sub",
                                kind: "Condition",
                                passingValue: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2NewsletterWamoSubMetadata",
                                        kind: "LinkedField",
                                        name: "wamo_sub",
                                        plural: false,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "plan_id",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    }
                                ]
                            },
                            {
                                condition: "fetch_pinned_messages",
                                kind: "Condition",
                                passingValue: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2NewsletterPinnedMessage",
                                        kind: "LinkedField",
                                        name: "pinned_messages",
                                        plural: true,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "message_id",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "expiry_ts",
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    }
                                ]
                            }
                        ],
                        storageKey: null
                    },
                    {
                        condition: "fetch_wamo_sub",
                        kind: "Condition",
                        passingValue: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2NewsletterViewerMetadata",
                                kind: "LinkedField",
                                name: "viewer_metadata",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "wamo_sub_status",
                                        storageKey: null
                                    }
                                ],
                                storageKey: null
                            }
                        ]
                    }
                ],
                storageKey: null
            }
        ];
        return {
            fragment: {
                argumentDefinitions: [
                    e,
                    t,
                    n
                ],
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexFetchNewsletterDehydratedJobQuery",
                selections: r,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [
                    n,
                    t,
                    e
                ],
                kind: "Operation",
                name: "WAWebMexFetchNewsletterDehydratedJobQuery",
                selections: r
            },
            params: {
                id: "26944199458535748",
                metadata: {},
                name: "WAWebMexFetchNewsletterDehydratedJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);