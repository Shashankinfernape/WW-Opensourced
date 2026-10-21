__d("WAWebMexRevokeNewsletterAdminInviteJobMutation.graphql", [], function(t, n, r, o, a, i) {
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
                name: "user_id"
            }
        ];
        const args = [
            {
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id"
            },
            {
                kind: "Variable",
                name: "user_id",
                variableName: "user_id"
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
                name: "WAWebMexRevokeNewsletterAdminInviteJobMutation",
                selections: [
                    {
                        alias: null,
                        args,
                        concreteType: "XWA2NewsletterMutationResponse",
                        kind: "LinkedField",
                        name: "xwa2_newsletter_admin_invite_revoke",
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
                name: "WAWebMexRevokeNewsletterAdminInviteJobMutation",
                selections: [
                    {
                        alias: null,
                        args,
                        concreteType: "XWA2NewsletterMutationResponse",
                        kind: "LinkedField",
                        name: "xwa2_newsletter_admin_invite_revoke",
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
                id: "9656078347839416",
                metadata: {},
                name: "WAWebMexRevokeNewsletterAdminInviteJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);