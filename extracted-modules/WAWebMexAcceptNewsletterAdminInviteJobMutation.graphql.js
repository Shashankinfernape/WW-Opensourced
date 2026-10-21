__d("WAWebMexAcceptNewsletterAdminInviteJobMutation.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "newsletter_id"
            }
        ];
        const args = [
            {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id"
            }
        ];
        const n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexAcceptNewsletterAdminInviteJobMutation",
                selections: [
                    {
                        alias: null,
                        args,
                        concreteType: "XWA2NewsletterMutationResponse",
                        kind: "LinkedField",
                        name: "xwa2_newsletter_admin_invite_accept",
                        plural: false,
                        selections: [
                            n
                        ],
                        storageKey: null
                    }
                ],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebMexAcceptNewsletterAdminInviteJobMutation",
                selections: [
                    {
                        alias: null,
                        args,
                        concreteType: "XWA2NewsletterMutationResponse",
                        kind: "LinkedField",
                        name: "xwa2_newsletter_admin_invite_accept",
                        plural: false,
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
                        storageKey: null
                    }
                ]
            },
            params: {
                id: "9580828702035549",
                metadata: {},
                name: "WAWebMexAcceptNewsletterAdminInviteJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);