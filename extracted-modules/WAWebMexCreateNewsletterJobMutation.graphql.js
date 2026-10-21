__d("WAWebMexCreateNewsletterJobMutation.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }
        ];
        const t = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "type",
            storageKey: null
        };
        const r = [
            t,
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
            t,
            n,
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "direct_path",
                storageKey: null
            }
        ];
        const a = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "newsletter_input",
                        variableName: "input"
                    }
                ],
                concreteType: "XWA2Newsletter",
                kind: "LinkedField",
                name: "xwa2_newsletter_create",
                plural: false,
                selections: [
                    t,
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWA2NewsletterState",
                        kind: "LinkedField",
                        name: "state",
                        plural: false,
                        selections: [
                            n
                        ],
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
                                        value: "IMAGE"
                                    }
                                ],
                                concreteType: "XWA2Picture",
                                kind: "LinkedField",
                                name: "picture",
                                plural: false,
                                selections: o,
                                storageKey: 'picture(type:"IMAGE")'
                            },
                            {
                                alias: "preview",
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
                                selections: o,
                                storageKey: 'picture(type:"PREVIEW")'
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
                                name: "verification",
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
                                kind: "ScalarField",
                                name: "creation_time",
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    },
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
                                concreteType: "XWA2NewsletterUserSetting",
                                kind: "LinkedField",
                                name: "settings",
                                plural: true,
                                selections: [
                                    n,
                                    {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "value",
                                        storageKey: null
                                    }
                                ],
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
                storageKey: null
            }
        ];
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexCreateNewsletterJobMutation",
                selections: a,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebMexCreateNewsletterJobMutation",
                selections: a
            },
            params: {
                id: "25149874324715067",
                metadata: {},
                name: "WAWebMexCreateNewsletterJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);