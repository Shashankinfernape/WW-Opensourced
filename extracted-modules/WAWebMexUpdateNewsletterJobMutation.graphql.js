__d("WAWebMexUpdateNewsletterJobMutation.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "newsletter_id"
            },
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "updates"
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
                        name: "newsletter_id",
                        variableName: "newsletter_id"
                    },
                    {
                        kind: "Variable",
                        name: "updates",
                        variableName: "updates"
                    }
                ],
                concreteType: "XWA2Newsletter",
                kind: "LinkedField",
                name: "xwa2_newsletter_update",
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
                                name: "creation_time",
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
                name: "WAWebMexUpdateNewsletterJobMutation",
                selections: a,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebMexUpdateNewsletterJobMutation",
                selections: a
            },
            params: {
                id: "24250201037901610",
                metadata: {},
                name: "WAWebMexUpdateNewsletterJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);