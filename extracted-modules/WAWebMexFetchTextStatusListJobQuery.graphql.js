__d("WAWebMexFetchTextStatusListJobQuery.graphql", [], function(t, n, r, o, a, i) {
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
                        name: "input",
                        variableName: "input"
                    }
                ],
                concreteType: "XWA2TextStatus",
                kind: "LinkedField",
                name: "xwa2_text_status_list",
                plural: true,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "jid",
                        storageKey: null
                    },
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
                        name: "last_update_time",
                        storageKey: null
                    },
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "ephemeral_duration_sec",
                        storageKey: null
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "XWA2TextStatusEmoji",
                        kind: "LinkedField",
                        name: "emoji",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "content",
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
                name: "WAWebMexFetchTextStatusListJobQuery",
                selections: t,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebMexFetchTextStatusListJobQuery",
                selections: t
            },
            params: {
                id: "24072923595647473",
                metadata: {},
                name: "WAWebMexFetchTextStatusListJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);