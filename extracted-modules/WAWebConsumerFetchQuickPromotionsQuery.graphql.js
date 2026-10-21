__d("WAWebConsumerFetchQuickPromotionsQuery.graphql", [
    "WAWebConsumerFetchQuickPromotionsQuery_facebookRelayOperation"
], function(t, n, r, o, a, i) {
    "use strict";
    const e = (()=>{
        const e = [
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "nux_ids"
            },
            {
                defaultValue: null,
                kind: "LocalArgument",
                name: "trigger_context"
            }
        ];
        const t = [
            {
                kind: "Literal",
                name: "include_holdouts",
                value: true
            },
            {
                kind: "Literal",
                name: "supports_client_side_filters",
                value: true
            },
            {
                kind: "Variable",
                name: "surface_nux_ids",
                variableName: "nux_ids"
            },
            {
                kind: "Variable",
                name: "trigger_context",
                variableName: "trigger_context"
            }
        ];
        const r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "surface_nux_id",
            storageKey: null
        };
        const o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "client_ttl_seconds",
            storageKey: null
        };
        const a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "priority",
            storageKey: null
        };
        const i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_holdout",
            storageKey: null
        };
        const l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "log_eligibility_waterfall",
            storageKey: null
        };
        const s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "start",
            storageKey: null
        };
        const u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null
        };
        const c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "promotion_id",
            storageKey: null
        };
        const d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_server_force_pass",
            storageKey: null
        };
        const m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ab_prop_name",
            storageKey: null
        };
        const p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "max_impressions",
            storageKey: null
        };
        const _ = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "surface_delay_in_seconds",
            storageKey: null
        };
        const f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_logging_data",
            storageKey: null
        };
        const g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "client_side_dry_run",
            storageKey: null
        };
        const h = [
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null
            }
        ];
        const y = [
            {
                kind: "InlineDataFragmentSpread",
                name: "WAWebConsumerFetchQuickPromotionsQuery_QPText",
                selections: h,
                args: null,
                argumentDefinitions: []
            }
        ];
        const C = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: false,
            selections: y,
            storageKey: null
        };
        const b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "limit",
            storageKey: null
        };
        const v = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        };
        const S = [
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "jpeg_thumbnail",
                storageKey: null
            }
        ];
        const R = {
            alias: null,
            args: null,
            concreteType: "WAQPMediaDetails",
            kind: "LinkedField",
            name: "wa_light_mode_media_details",
            plural: false,
            selections: S,
            storageKey: null
        };
        const L = {
            alias: null,
            args: null,
            concreteType: "WAQPMediaDetails",
            kind: "LinkedField",
            name: "wa_dark_mode_media_details",
            plural: false,
            selections: S,
            storageKey: null
        };
        const E = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "accessibility_text_for_image",
            storageKey: null
        };
        const k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_dismissible",
            storageKey: null
        };
        const I = {
            alias: null,
            args: null,
            concreteType: "QPContentAttributeDescriptor",
            kind: "LinkedField",
            name: "content_attributes",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    concreteType: "WhatsappQPColors",
                    kind: "LinkedField",
                    name: "wa_banner_background_color",
                    plural: false,
                    selections: [
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "light_mode_highlight_color",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "dark_mode_highlight_color",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "light_mode_background_color",
                            storageKey: null
                        },
                        {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "dark_mode_background_color",
                            storageKey: null
                        }
                    ],
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "wa_primary_cta_alternative_url",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "wa_eligible_duration_after_impression_in_seconds",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const T = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null
        };
        const D = {
            alias: null,
            args: null,
            concreteType: "WAQPContentAttribute",
            kind: "LinkedField",
            name: "wa_qp_content_attributes_do_not_use",
            plural: true,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                },
                T
            ],
            storageKey: null
        };
        const x = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "clause_type",
            storageKey: null
        };
        const $ = [
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "filter_name",
                storageKey: null
            },
            {
                alias: null,
                args: null,
                concreteType: "QPFilterParameter",
                kind: "LinkedField",
                name: "parameters",
                plural: true,
                selections: [
                    {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "key",
                        storageKey: null
                    },
                    T
                ],
                storageKey: null
            },
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "passes_if_client_not_supported",
                storageKey: null
            },
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "filter_result",
                storageKey: null
            }
        ];
        const P = {
            kind: "InlineDataFragmentSpread",
            name: "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilterClause",
            selections: [
                x,
                {
                    alias: null,
                    args: null,
                    concreteType: "QuickPromotionFlattenedFilter",
                    kind: "LinkedField",
                    name: "filters",
                    plural: true,
                    selections: [
                        {
                            kind: "InlineDataFragmentSpread",
                            name: "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilter",
                            selections: $,
                            args: null,
                            argumentDefinitions: []
                        }
                    ],
                    storageKey: null
                }
            ],
            args: null,
            argumentDefinitions: []
        };
        const N = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        };
        const M = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: false,
            selections: h,
            storageKey: null
        };
        const w = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const A = {
            alias: null,
            args: null,
            concreteType: "QuickPromotionFlattenedFilter",
            kind: "LinkedField",
            name: "filters",
            plural: true,
            selections: $,
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebConsumerFetchQuickPromotionsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "QuickPromotionMultiverseBatchFetchSurface",
                        kind: "LinkedField",
                        name: "quick_promotion_multiverse_batch_fetch_root",
                        plural: true,
                        selections: [
                            r,
                            {
                                alias: null,
                                args: null,
                                concreteType: "QuickPromotionMultiverseSurfaceEligiblePromotionsConnection",
                                kind: "LinkedField",
                                name: "eligible_promotions",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "QuickPromotionMultiverseSurfaceEligiblePromotionsEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: true,
                                        selections: [
                                            {
                                                kind: "RequiredField",
                                                field: o,
                                                action: "LOG"
                                            },
                                            {
                                                kind: "RequiredField",
                                                field: a,
                                                action: "LOG"
                                            },
                                            {
                                                kind: "RequiredField",
                                                field: i,
                                                action: "LOG"
                                            },
                                            {
                                                kind: "RequiredField",
                                                field: l,
                                                action: "LOG"
                                            },
                                            {
                                                kind: "RequiredField",
                                                field: {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "TimeRange",
                                                    kind: "LinkedField",
                                                    name: "time_range",
                                                    plural: false,
                                                    selections: [
                                                        {
                                                            kind: "RequiredField",
                                                            field: s,
                                                            action: "LOG"
                                                        },
                                                        {
                                                            kind: "RequiredField",
                                                            field: u,
                                                            action: "LOG"
                                                        }
                                                    ],
                                                    storageKey: null
                                                },
                                                action: "LOG"
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: false,
                                                selections: [
                                                    {
                                                        kind: "InlineDataFragmentSpread",
                                                        name: "WAWebConsumerFetchQuickPromotionsQuery_QuickPromotion",
                                                        selections: [
                                                            c,
                                                            d,
                                                            m,
                                                            p,
                                                            _,
                                                            f,
                                                            g,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "creatives",
                                                                plural: true,
                                                                selections: [
                                                                    {
                                                                        kind: "InlineDataFragmentSpread",
                                                                        name: "WAWebConsumerFetchQuickPromotionsQuery_QPCreative",
                                                                        selections: [
                                                                            C,
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "TextWithEntities",
                                                                                kind: "LinkedField",
                                                                                name: "content",
                                                                                plural: false,
                                                                                selections: y,
                                                                                storageKey: null
                                                                            },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "primary_action",
                                                                                plural: false,
                                                                                selections: [
                                                                                    {
                                                                                        kind: "InlineDataFragmentSpread",
                                                                                        name: "WAWebConsumerFetchQuickPromotionsQuery_QPAction",
                                                                                        selections: [
                                                                                            C,
                                                                                            b,
                                                                                            v
                                                                                        ],
                                                                                        args: null,
                                                                                        argumentDefinitions: []
                                                                                    }
                                                                                ],
                                                                                storageKey: null
                                                                            },
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: null,
                                                                                kind: "LinkedField",
                                                                                name: "dismiss_action",
                                                                                plural: false,
                                                                                selections: [
                                                                                    b
                                                                                ],
                                                                                storageKey: null
                                                                            },
                                                                            R,
                                                                            L,
                                                                            E,
                                                                            k
                                                                        ],
                                                                        args: null,
                                                                        argumentDefinitions: []
                                                                    }
                                                                ],
                                                                storageKey: null
                                                            },
                                                            I,
                                                            D,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                kind: "LinkedField",
                                                                name: "contextual_filters_for_wa_do_not_use",
                                                                plural: false,
                                                                selections: [
                                                                    P,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                        kind: "LinkedField",
                                                                        name: "clauses",
                                                                        plural: true,
                                                                        selections: [
                                                                            P,
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                kind: "LinkedField",
                                                                                name: "clauses",
                                                                                plural: true,
                                                                                selections: [
                                                                                    P,
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                        kind: "LinkedField",
                                                                                        name: "clauses",
                                                                                        plural: true,
                                                                                        selections: [
                                                                                            P,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                kind: "LinkedField",
                                                                                                name: "clauses",
                                                                                                plural: true,
                                                                                                selections: [
                                                                                                    P,
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "clauses",
                                                                                                        plural: true,
                                                                                                        selections: [
                                                                                                            P,
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "clauses",
                                                                                                                plural: true,
                                                                                                                selections: [
                                                                                                                    P,
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "clauses",
                                                                                                                        plural: true,
                                                                                                                        selections: [
                                                                                                                            P
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
                                                        ],
                                                        args: null,
                                                        argumentDefinitions: []
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
                ],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: e,
                kind: "Operation",
                name: "WAWebConsumerFetchQuickPromotionsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "QuickPromotionMultiverseBatchFetchSurface",
                        kind: "LinkedField",
                        name: "quick_promotion_multiverse_batch_fetch_root",
                        plural: true,
                        selections: [
                            r,
                            {
                                alias: null,
                                args: null,
                                concreteType: "QuickPromotionMultiverseSurfaceEligiblePromotionsConnection",
                                kind: "LinkedField",
                                name: "eligible_promotions",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "QuickPromotionMultiverseSurfaceEligiblePromotionsEdge",
                                        kind: "LinkedField",
                                        name: "edges",
                                        plural: true,
                                        selections: [
                                            o,
                                            a,
                                            i,
                                            l,
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "TimeRange",
                                                kind: "LinkedField",
                                                name: "time_range",
                                                plural: false,
                                                selections: [
                                                    s,
                                                    u
                                                ],
                                                storageKey: null
                                            },
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: false,
                                                selections: [
                                                    N,
                                                    {
                                                        kind: "TypeDiscriminator",
                                                        abstractKey: "__isQuickPromotionInterface"
                                                    },
                                                    c,
                                                    d,
                                                    m,
                                                    p,
                                                    _,
                                                    f,
                                                    g,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "creatives",
                                                        plural: true,
                                                        selections: [
                                                            N,
                                                            {
                                                                kind: "TypeDiscriminator",
                                                                abstractKey: "__isQuickPromotionCreativeInterface"
                                                            },
                                                            M,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "TextWithEntities",
                                                                kind: "LinkedField",
                                                                name: "content",
                                                                plural: false,
                                                                selections: h,
                                                                storageKey: null
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "primary_action",
                                                                plural: false,
                                                                selections: [
                                                                    N,
                                                                    {
                                                                        kind: "TypeDiscriminator",
                                                                        abstractKey: "__isQuickPromotionActionInterface"
                                                                    },
                                                                    M,
                                                                    b,
                                                                    v
                                                                ],
                                                                storageKey: null
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: "LinkedField",
                                                                name: "dismiss_action",
                                                                plural: false,
                                                                selections: [
                                                                    N,
                                                                    b
                                                                ],
                                                                storageKey: null
                                                            },
                                                            R,
                                                            L,
                                                            E,
                                                            k,
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    w
                                                                ],
                                                                type: "Node",
                                                                abstractKey: "__isNode"
                                                            }
                                                        ],
                                                        storageKey: null
                                                    },
                                                    I,
                                                    D,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                        kind: "LinkedField",
                                                        name: "contextual_filters_for_wa_do_not_use",
                                                        plural: false,
                                                        selections: [
                                                            x,
                                                            A,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                kind: "LinkedField",
                                                                name: "clauses",
                                                                plural: true,
                                                                selections: [
                                                                    x,
                                                                    A,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                        kind: "LinkedField",
                                                                        name: "clauses",
                                                                        plural: true,
                                                                        selections: [
                                                                            x,
                                                                            A,
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                kind: "LinkedField",
                                                                                name: "clauses",
                                                                                plural: true,
                                                                                selections: [
                                                                                    x,
                                                                                    A,
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                        kind: "LinkedField",
                                                                                        name: "clauses",
                                                                                        plural: true,
                                                                                        selections: [
                                                                                            x,
                                                                                            A,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                kind: "LinkedField",
                                                                                                name: "clauses",
                                                                                                plural: true,
                                                                                                selections: [
                                                                                                    x,
                                                                                                    A,
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "clauses",
                                                                                                        plural: true,
                                                                                                        selections: [
                                                                                                            x,
                                                                                                            A,
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "clauses",
                                                                                                                plural: true,
                                                                                                                selections: [
                                                                                                                    x,
                                                                                                                    A
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
                                                    },
                                                    w
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
                ]
            },
            params: {
                id: n("WAWebConsumerFetchQuickPromotionsQuery_facebookRelayOperation"),
                metadata: {},
                name: "WAWebConsumerFetchQuickPromotionsQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);