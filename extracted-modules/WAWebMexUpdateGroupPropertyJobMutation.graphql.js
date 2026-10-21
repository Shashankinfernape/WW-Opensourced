__d("WAWebMexUpdateGroupPropertyJobMutation.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "group_id"
            },
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "update"
            }
        ];
        const t = [
            {
                alias: null,
                args: [
                    {
                        kind: "Variable",
                        name: "group_id",
                        variableName: "group_id"
                    },
                    {
                        kind: "Variable",
                        name: "update",
                        variableName: "update"
                    }
                ],
                concreteType: "XWA2GroupUpdateResponse",
                kind: "LinkedField",
                name: "xwa2_group_update_property",
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
                        kind: "ScalarField",
                        name: "state",
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
                name: "WAWebMexUpdateGroupPropertyJobMutation",
                selections: t,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebMexUpdateGroupPropertyJobMutation",
                selections: t
            },
            params: {
                id: "9418211574894172",
                metadata: {},
                name: "WAWebMexUpdateGroupPropertyJobMutation",
                operationKind: "mutation",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);