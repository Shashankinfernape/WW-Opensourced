__d("WAWebMexCreateNewsletterAdminInviteJobMutation.graphql", [], function(t, n, r, o, a, i) {
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
        const t = [
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
            name: "invite_expiration_time",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexCreateNewsletterAdminInviteJobMutation",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "XWA2NewsletterAdminInviteCreateResponse",
                        kind: "LinkedField",
                        name: "xwa2_newsletter_admin_invite_create",
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
                name: "WAWebMexCreateNewsletterAdminInviteJobMutation",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "XWA2NewsletterAdminInviteCreateResponse",
                        kind: "LinkedField",
                        name: "xwa2_newsletter_admin_invite_create",
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
                id: "9387141988078609",
                metadata: {},
                name: "WAWebMexCreateNewsletterAdminInviteJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);