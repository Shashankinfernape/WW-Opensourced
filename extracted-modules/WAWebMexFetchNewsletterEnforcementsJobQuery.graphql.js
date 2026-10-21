__d("WAWebMexFetchNewsletterEnforcementsJobQuery.graphql", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "locale"
        };
        const t = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "newsletter_id"
        };
        const n = [
            {
                kind: "Variable",
                name: "channel_id",
                variableName: "newsletter_id"
            },
            {
                kind: "Variable",
                name: "locale",
                variableName: "locale"
            }
        ];
        const r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "enforcement_creation_time",
            storageKey: null
        };
        const o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "appeal_creation_time",
            storageKey: null
        };
        const a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "appeal_state",
            storageKey: null
        };
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "enforcement_violation_category",
            storageKey: null
        };
        const l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "enforcement_source",
            storageKey: null
        };
        const s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "enforcement_id",
            storageKey: null
        };
        const u = {
            kind: "RequiredField",
            field: s,
            action: "THROW"
        };
        const c = {
            alias: null,
            args: null,
            concreteType: "XWA2EnforcementAppealReasonOption",
            kind: "LinkedField",
            name: "appeal_reason_options",
            plural: true,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "reason",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "label",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "appeal_form_url",
            storageKey: null
        };
        const m = {
            alias: null,
            args: null,
            concreteType: "XWA2IPViolationReportData",
            kind: "LinkedField",
            name: "ip_violation_report_data",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "report_fbid",
                    storageKey: null
                },
                d,
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "reporter_email",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "reporter_name",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const _ = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        const f = {
            kind: "InlineFragment",
            selections: [
                p,
                _,
                {
                    alias: null,
                    args: null,
                    concreteType: "XWA2Picture",
                    kind: "LinkedField",
                    name: "picture",
                    plural: false,
                    selections: [
                        p,
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "direct_path",
                            storageKey: null
                        }
                    ],
                    storageKey: null
                }
            ],
            type: "XWA2NewsletterAdminProfile",
            abstractKey: null
        };
        const g = {
            alias: null,
            args: null,
            concreteType: "XWA2EnforcementPolicyInformation",
            kind: "LinkedField",
            name: "enforcement_policy_information",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "overview",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "headline",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "subtitle",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "explanation",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "admin_disclaimer",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const h = {
            alias: null,
            args: null,
            concreteType: "XWA2EnforcementExtraData",
            kind: "LinkedField",
            name: "enforcement_extra_data",
            plural: false,
            selections: [
                m
            ],
            storageKey: null
        };
        const y = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "server_msg_id",
                    storageKey: null
                }
            ],
            type: "XWA2ChannelServerMsgData",
            abstractKey: null
        };
        const C = {
            kind: "InlineFragment",
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "server_id",
                    storageKey: null
                }
            ],
            type: "XWA2ChannelStatusData",
            abstractKey: null
        };
        const b = [
            y,
            C
        ];
        const v = {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "enforcement_target_data",
            plural: false,
            selections: b,
            storageKey: null
        };
        const S = {
            alias: null,
            args: null,
            concreteType: "XWA2AppealExtraData",
            kind: "LinkedField",
            name: "appeal_extra_data",
            plural: false,
            selections: [
                d
            ],
            storageKey: null
        };
        const R = {
            alias: null,
            args: null,
            concreteType: "XWA2EnforcingEntityData",
            kind: "LinkedField",
            name: "enforcing_entity_data",
            plural: false,
            selections: [
                _
            ],
            storageKey: null
        };
        const L = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "enforcement_origin_workflow",
            storageKey: null
        };
        const E = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "enforcement_origin_legal_basis",
            storageKey: null
        };
        const k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "country_codes",
            storageKey: null
        };
        const I = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        };
        const T = {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "enforcement_target_data",
            plural: false,
            selections: [
                I,
                y,
                C,
                {
                    kind: "InlineFragment",
                    selections: [
                        p
                    ],
                    type: "XWA2NewsletterAdminProfile",
                    abstractKey: null
                }
            ],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [
                    e,
                    t
                ],
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexFetchNewsletterEnforcementsJobQuery",
                selections: [
                    {
                        alias: null,
                        args: n,
                        concreteType: "XWA2ChannelEnforcementsResponse",
                        kind: "LinkedField",
                        name: "xwa2_channel_enforcements",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2BaseEnforcementData",
                                kind: "LinkedField",
                                name: "admin_profiles",
                                plural: true,
                                selections: [
                                    r,
                                    o,
                                    a,
                                    i,
                                    l,
                                    u,
                                    c,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2EnforcementExtraData",
                                        kind: "LinkedField",
                                        name: "enforcement_extra_data",
                                        plural: false,
                                        selections: [
                                            m,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "enforcement_target_data",
                                                plural: false,
                                                selections: [
                                                    f
                                                ],
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    g
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2BaseEnforcementData",
                                kind: "LinkedField",
                                name: "profile_picture_deletions",
                                plural: true,
                                selections: [
                                    r,
                                    o,
                                    a,
                                    i,
                                    l,
                                    u,
                                    c,
                                    h,
                                    g
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2BaseEnforcementData",
                                kind: "LinkedField",
                                name: "suspensions",
                                plural: true,
                                selections: [
                                    o,
                                    r,
                                    a,
                                    i,
                                    u,
                                    l,
                                    c,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2EnforcementExtraData",
                                        kind: "LinkedField",
                                        name: "enforcement_extra_data",
                                        plural: false,
                                        selections: [
                                            m,
                                            v,
                                            S
                                        ],
                                        storageKey: null
                                    },
                                    g
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2ViolatingMessagesEnforcementData",
                                kind: "LinkedField",
                                name: "violating_messages",
                                plural: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2BaseEnforcementData",
                                        kind: "LinkedField",
                                        name: "base_enforcement_data",
                                        plural: false,
                                        selections: [
                                            r,
                                            o,
                                            a,
                                            u,
                                            i,
                                            l,
                                            c,
                                            h,
                                            g
                                        ],
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "content_data",
                                        plural: false,
                                        selections: b,
                                        storageKey: null
                                    }
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GeosuspendedEnforcementData",
                                kind: "LinkedField",
                                name: "geosuspensions",
                                plural: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2BaseEnforcementData",
                                        kind: "LinkedField",
                                        name: "base_enforcement_data",
                                        plural: false,
                                        selections: [
                                            {
                                                kind: "RequiredField",
                                                field: r,
                                                action: "THROW"
                                            },
                                            o,
                                            a,
                                            u,
                                            i,
                                            l,
                                            c,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWA2EnforcementExtraData",
                                                kind: "LinkedField",
                                                name: "enforcement_extra_data",
                                                plural: false,
                                                selections: [
                                                    m,
                                                    v,
                                                    S,
                                                    R,
                                                    L,
                                                    E
                                                ],
                                                storageKey: null
                                            },
                                            g
                                        ],
                                        storageKey: null
                                    },
                                    k
                                ],
                                storageKey: null
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
                argumentDefinitions: [
                    t,
                    e
                ],
                kind: "Operation",
                name: "WAWebMexFetchNewsletterEnforcementsJobQuery",
                selections: [
                    {
                        alias: null,
                        args: n,
                        concreteType: "XWA2ChannelEnforcementsResponse",
                        kind: "LinkedField",
                        name: "xwa2_channel_enforcements",
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2BaseEnforcementData",
                                kind: "LinkedField",
                                name: "admin_profiles",
                                plural: true,
                                selections: [
                                    r,
                                    o,
                                    a,
                                    i,
                                    l,
                                    s,
                                    c,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2EnforcementExtraData",
                                        kind: "LinkedField",
                                        name: "enforcement_extra_data",
                                        plural: false,
                                        selections: [
                                            m,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "enforcement_target_data",
                                                plural: false,
                                                selections: [
                                                    I,
                                                    f
                                                ],
                                                storageKey: null
                                            }
                                        ],
                                        storageKey: null
                                    },
                                    g
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2BaseEnforcementData",
                                kind: "LinkedField",
                                name: "profile_picture_deletions",
                                plural: true,
                                selections: [
                                    r,
                                    o,
                                    a,
                                    i,
                                    l,
                                    s,
                                    c,
                                    h,
                                    g
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2BaseEnforcementData",
                                kind: "LinkedField",
                                name: "suspensions",
                                plural: true,
                                selections: [
                                    o,
                                    r,
                                    a,
                                    i,
                                    s,
                                    l,
                                    c,
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2EnforcementExtraData",
                                        kind: "LinkedField",
                                        name: "enforcement_extra_data",
                                        plural: false,
                                        selections: [
                                            m,
                                            T,
                                            S
                                        ],
                                        storageKey: null
                                    },
                                    g
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2ViolatingMessagesEnforcementData",
                                kind: "LinkedField",
                                name: "violating_messages",
                                plural: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2BaseEnforcementData",
                                        kind: "LinkedField",
                                        name: "base_enforcement_data",
                                        plural: false,
                                        selections: [
                                            r,
                                            o,
                                            a,
                                            s,
                                            i,
                                            l,
                                            c,
                                            h,
                                            g
                                        ],
                                        storageKey: null
                                    },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "content_data",
                                        plural: false,
                                        selections: [
                                            I,
                                            y,
                                            C
                                        ],
                                        storageKey: null
                                    }
                                ],
                                storageKey: null
                            },
                            {
                                alias: null,
                                args: null,
                                concreteType: "XWA2GeosuspendedEnforcementData",
                                kind: "LinkedField",
                                name: "geosuspensions",
                                plural: true,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "XWA2BaseEnforcementData",
                                        kind: "LinkedField",
                                        name: "base_enforcement_data",
                                        plural: false,
                                        selections: [
                                            r,
                                            o,
                                            a,
                                            s,
                                            i,
                                            l,
                                            c,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "XWA2EnforcementExtraData",
                                                kind: "LinkedField",
                                                name: "enforcement_extra_data",
                                                plural: false,
                                                selections: [
                                                    m,
                                                    T,
                                                    S,
                                                    R,
                                                    L,
                                                    E
                                                ],
                                                storageKey: null
                                            },
                                            g
                                        ],
                                        storageKey: null
                                    },
                                    k
                                ],
                                storageKey: null
                            }
                        ],
                        storageKey: null
                    }
                ]
            },
            params: {
                id: "27835373536068060",
                metadata: {},
                name: "WAWebMexFetchNewsletterEnforcementsJobQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);