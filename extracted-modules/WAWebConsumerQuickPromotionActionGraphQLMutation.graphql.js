__d("WAWebConsumerQuickPromotionActionGraphQLMutation.graphql", [], function(t, n, r, o, a, i) {
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
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "data",
                        variableName: "input"
                    }
                ],
                concreteType: "WaConsumerQuickPromotionLogEventResponsePayload",
                kind: "LinkedField",
                name: "wa_consumer_quick_promotion_log_event",
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "client_mutation_id",
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
                name: "WAWebConsumerQuickPromotionActionGraphQLMutation",
                selections: t,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebConsumerQuickPromotionActionGraphQLMutation",
                selections: t
            },
            params: {
                id: "25690382143972563",
                metadata: {},
                name: "WAWebConsumerQuickPromotionActionGraphQLMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);