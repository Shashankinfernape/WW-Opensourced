__d("WAWebFetchBotProfilesGQLQuery.graphql", [
    "WAWebFetchBotProfilesGQLQuery_facebookRelayOperation"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "ids"
            }
        ];
        const t = [
            {
                kind: "Variable",
                name: "persona_ids",
                variableName: "ids"
            }
        ];
        const r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "jid",
            storageKey: null
        };
        const a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_meta_created",
            storageKey: null
        };
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        const l = {
            alias: "creator",
            args: null,
            concreteType: "XFBGenAIUGCDiscoveryCreator",
            kind: "LinkedField",
            name: "creator_for_discovery",
            plural: false,
            selections: [
                i,
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "profile_uri",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const s = [
            {
                kind: "Literal",
                name: "is_ai_home",
                value: false
            }
        ];
        const u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "description",
            storageKey: null
        };
        const c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "icebreaker_prompt_list",
            storageKey: null
        };
        const d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "posing_as_professional",
            storageKey: null
        };
        const m = {
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
                name: "WAWebFetchBotProfilesGQLQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xfb_fetch_genai_personas",
                        plural: true,
                        selections: [
                            r,
                            o,
                            a,
                            l,
                            {
                                alias: null,
                                args: s,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "latest_published_version_for_viewer",
                                plural: false,
                                selections: [
                                    i,
                                    u,
                                    c,
                                    d
                                ],
                                storageKey: "latest_published_version_for_viewer(is_ai_home:false)"
                            }
                        ],
                        storageKey: null
                    }
                ],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebFetchBotProfilesGQLQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xfb_fetch_genai_personas",
                        plural: true,
                        selections: [
                            m,
                            r,
                            o,
                            a,
                            l,
                            {
                                alias: null,
                                args: s,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "latest_published_version_for_viewer",
                                plural: false,
                                selections: [
                                    m,
                                    i,
                                    u,
                                    c,
                                    d,
                                    r
                                ],
                                storageKey: "latest_published_version_for_viewer(is_ai_home:false)"
                            }
                        ],
                        storageKey: null
                    }
                ]
            },
            params: {
                id: n("WAWebFetchBotProfilesGQLQuery_facebookRelayOperation"),
                metadata: {},
                name: "WAWebFetchBotProfilesGQLQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);