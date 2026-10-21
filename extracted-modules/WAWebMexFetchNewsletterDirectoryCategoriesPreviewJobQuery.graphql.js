__d("WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery.graphql", [], function(t, n, r, o, a, i) {
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
        const r = [
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
        ];
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
                concreteType: "XWA2NewsletterDirectoryCategoryPreviewResponse",
                kind: "LinkedField",
                name: "xwa2_newsletters_directory_category_preview",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWA2NewsletterDirectoryCategoryPreview",
                        kind: "LinkedField",
                        name: "result",
                        plural: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "category",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "category_title",
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2Newsletter",
                                kind: "LinkedField",
                                name: "newsletters",
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
                                                kind: "ScalarField",
                                                name: "creation_time",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "invite",
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "handle",
                                                storageKey: null
                                            },
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
                                                concreteType: "XWA2NewsletterName",
                                                kind: "LinkedField",
                                                name: "name",
                                                plural: false,
                                                selections: r,
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWA2NewsletterDescription",
                                                kind: "LinkedField",
                                                name: "description",
                                                plural: false,
                                                selections: r,
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
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "direct_path",
                                                        storageKey: null
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "type",
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
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "last_status_sent_time",
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
                name: "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery",
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
                name: "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery",
                selections: o
            },
            params: {
                id: "35266481849605779",
                metadata: {},
                name: "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);