__d("WAWebMexFetchGroupInfoJobAcp2Query.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "id"
        };
        const t = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "include_username"
        };
        const n = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "participants_phash"
        };
        const r = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "query_context"
        };
        const o = [
            {
                fields: [
                    {
                        kind: "Variable",
                        name: "group_id",
                        variableName: "id"
                    },
                    {
                        kind: "Variable",
                        name: "participants_phash",
                        variableName: "participants_phash"
                    },
                    {
                        kind: "Variable",
                        name: "query_context",
                        variableName: "query_context"
                    }
                ],
                kind: "ObjectValue",
                name: "group_input"
            }
        ];
        const a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creation_time",
            storageKey: null
        };
        const l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "lid",
            storageKey: null
        };
        const s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "pn",
            storageKey: null
        };
        const u = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null
                }
            ],
            type: "XWA2Username",
            abstractKey: null
        };
        const c = {
            condition: "include_username",
            kind: "Condition",
            passingValue: true,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "username_info",
                    plural: false,
                    selections: [
                        u
                    ],
                    storageKey: null
                }
            ]
        };
        const d = {
            alias: null,
            args: null,
            concreteType: "XWA2User",
            kind: "LinkedField",
            name: "creator",
            plural: false,
            selections: [
                a,
                l,
                s,
                c
            ],
            storageKey: null
        };
        const m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "state",
            storageKey: null
        };
        const p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null
        };
        const _ = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "display_name",
            storageKey: null
        };
        const f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "role",
            storageKey: null
        };
        const g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "join_time",
            storageKey: null
        };
        const h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "group_history_sent",
            storageKey: null
        };
        const y = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "participants_phash_match",
            storageKey: null
        };
        const C = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "total_participants_count",
            storageKey: null
        };
        const b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "missing_participant_identification",
            storageKey: null
        };
        const v = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "appeal_status",
            storageKey: null
        };
        const S = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "appeal_update_time",
            storageKey: null
        };
        const R = {
            alias: null,
            args: null,
            concreteType: "XWA2GroupLimitSharingSetting",
            kind: "LinkedField",
            name: "limit_sharing",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "limit_sharing_enabled",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "limit_companion_sharing_enabled",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const L = {
            alias: null,
            args: null,
            concreteType: "XWA2GroupLIDMigrationState",
            kind: "LinkedField",
            name: "lid_migration_state",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "addressing_mode",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const E = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "XWA2CommunityProperties",
                    kind: "LinkedField",
                    name: "properties",
                    plural: false,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "allow_non_admin_sub_group_creation",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "closed_by_membership_approval_mode",
                            storageKey: null
                        },
                        v,
                        S,
                        R,
                        L
                    ],
                    storageKey: null
                }
            ],
            type: "XWA2CommunityGroup",
            abstractKey: null
        };
        const k = {
            alias: null,
            args: null,
            concreteType: "XWA2GroupEphemeralSetting",
            kind: "LinkedField",
            name: "ephemeral",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "expiration_time_in_sec",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const I = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "locked",
            storageKey: null
        };
        const T = {
            alias: null,
            args: null,
            concreteType: "XWA2GroupGrowthLocked",
            kind: "LinkedField",
            name: "growth_locked2",
            plural: false,
            selections: [
                I
            ],
            storageKey: null
        };
        const D = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "member_add_mode",
            storageKey: null
        };
        const x = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "parent_group_jid",
            storageKey: null
        };
        const $ = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "group_safety_check",
            storageKey: null
        };
        const P = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "XWA2CommunityDefaultSubGroupProperties",
                    kind: "LinkedField",
                    name: "properties",
                    plural: false,
                    selections: [
                        k,
                        T,
                        L,
                        D,
                        x,
                        $,
                        v,
                        S,
                        R
                    ],
                    storageKey: null
                }
            ],
            type: "XWA2CommunityDefaultSubGroup",
            abstractKey: null
        };
        const N = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "allow_admin_reports",
            storageKey: null
        };
        const M = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "announcement",
            storageKey: null
        };
        const w = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "member_link_mode",
            storageKey: null
        };
        const A = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "member_share_group_history_mode",
            storageKey: null
        };
        const F = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "membership_approval_mode_enabled",
            storageKey: null
        };
        const O = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "membership_approval_request",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    concreteType: "XWA2CommunitySubGroupProperties",
                    kind: "LinkedField",
                    name: "properties",
                    plural: false,
                    selections: [
                        N,
                        M,
                        k,
                        T,
                        L,
                        I,
                        D,
                        w,
                        A,
                        F,
                        x,
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "general_chat",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "auto_add_disabled",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "hidden_group",
                            storageKey: null
                        },
                        $,
                        v,
                        S,
                        R
                    ],
                    storageKey: null
                }
            ],
            type: "XWA2CommunitySubGroup",
            abstractKey: null
        };
        const B = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "XWA2GroupRegularGroupProperties",
                    kind: "LinkedField",
                    name: "properties",
                    plural: false,
                    selections: [
                        N,
                        M,
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "capi",
                            storageKey: null
                        },
                        k,
                        T,
                        L,
                        I,
                        D,
                        w,
                        A,
                        F,
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "support",
                            storageKey: null
                        },
                        $,
                        v,
                        S,
                        R
                    ],
                    storageKey: null
                }
            ],
            type: "XWA2GroupRegularGroup",
            abstractKey: null
        };
        const W = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        };
        const q = {
            condition: "include_username",
            kind: "Condition",
            passingValue: true,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "username_info",
                    plural: false,
                    selections: [
                        W,
                        u
                    ],
                    storageKey: null
                }
            ]
        };
        const U = {
            alias: null,
            args: null,
            concreteType: "XWA2User",
            kind: "LinkedField",
            name: "creator",
            plural: false,
            selections: [
                a,
                l,
                s,
                q
            ],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [
                    e,
                    t,
                    n,
                    r
                ],
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexFetchGroupInfoJobAcp2Query",
                selections: [
                    {
                        alias: null,
                        args: o,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_group_query_by_id",
                        plural: false,
                        selections: [
                            a,
                            i,
                            d,
                            m,
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GroupSubject",
                                kind: "LinkedField",
                                name: "subject",
                                plural: false,
                                selections: [
                                    d,
                                    i,
                                    p
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GroupDescription",
                                kind: "LinkedField",
                                name: "description",
                                plural: false,
                                selections: [
                                    a,
                                    i,
                                    d,
                                    p
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GroupParticipantsConnection",
                                kind: "LinkedField",
                                name: "participants",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2GroupParticipantEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: true,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWA2User",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: false,
                                                selections: [
                                                    a,
                                                    l,
                                                    s,
                                                    _,
                                                    c
                                                ],
                                                storageKey: null
                                            },
                                            f,
                                            g,
                                            h
                                        ],
                                        storageKey: null
                                    },
                                    y
                                ],
                                storageKey: null
                            },
                            C,
                            b,
                            E,
                            P,
                            O,
                            B
                        ],
                        storageKey: null
                    }
                ],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [
                    e,
                    r,
                    t,
                    n
                ],
                kind: "Operation",
                name: "WAWebMexFetchGroupInfoJobAcp2Query",
                selections: [
                    {
                        alias: null,
                        args: o,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "xwa2_group_query_by_id",
                        plural: false,
                        selections: [
                            W,
                            a,
                            i,
                            U,
                            m,
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GroupSubject",
                                kind: "LinkedField",
                                name: "subject",
                                plural: false,
                                selections: [
                                    U,
                                    i,
                                    p
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GroupDescription",
                                kind: "LinkedField",
                                name: "description",
                                plural: false,
                                selections: [
                                    a,
                                    i,
                                    U,
                                    p
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GroupParticipantsConnection",
                                kind: "LinkedField",
                                name: "participants",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2GroupParticipantEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: true,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWA2User",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: false,
                                                selections: [
                                                    a,
                                                    l,
                                                    s,
                                                    _,
                                                    q
                                                ],
                                                storageKey: null
                                            },
                                            f,
                                            g,
                                            h
                                        ],
                                        storageKey: null
                                    },
                                    y
                                ],
                                storageKey: null
                            },
                            C,
                            b,
                            E,
                            P,
                            O,
                            B
                        ],
                        storageKey: null
                    }
                ]
            },
            params: {
                id: "38735621546085739",
                metadata: {},
                name: "WAWebMexFetchGroupInfoJobAcp2Query",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);