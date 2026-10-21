__d("WAWebFetchQuickPromotionsQuery.graphql", [
    "WAWebFetchQuickPromotionsQuery_facebookRelayOperation"
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
            name: "surface_delay_in_seconds",
            storageKey: null
        };
        const _ = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_logging_data",
            storageKey: null
        };
        const f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "client_side_dry_run",
            storageKey: null
        };
        const g = [
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null
            }
        ];
        const h = [
            {
                kind: "InlineDataFragmentSpread",
                name: "WAWebFetchQuickPromotionsQuery_QPText",
                selections: g,
                args: null,
                argumentDefinitions: []
            }
        ];
        const y = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: false,
            selections: h,
            storageKey: null
        };
        const C = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        };
        const b = [
            {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "jpeg_thumbnail",
                storageKey: null
            }
        ];
        const v = {
            alias: null,
            args: null,
            concreteType: "WAQPMediaDetails",
            kind: "LinkedField",
            name: "wa_light_mode_media_details",
            plural: false,
            selections: b,
            storageKey: null
        };
        const S = {
            alias: null,
            args: null,
            concreteType: "WAQPMediaDetails",
            kind: "LinkedField",
            name: "wa_dark_mode_media_details",
            plural: false,
            selections: b,
            storageKey: null
        };
        const R = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "accessibility_text_for_image",
            storageKey: null
        };
        const L = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_dismissible",
            storageKey: null
        };
        const E = {
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
        const k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null
        };
        const I = {
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
                k
            ],
            storageKey: null
        };
        const T = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "clause_type",
            storageKey: null
        };
        const D = [
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
                    k
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
        const x = {
            kind: "InlineDataFragmentSpread",
            name: "WAWebFetchQuickPromotionsQuery_QPWAFilterClause",
            selections: [
                T,
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
                            name: "WAWebFetchQuickPromotionsQuery_QPWAFilter",
                            selections: D,
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
        const $ = {
            alias: null,
            args: null,
            concreteType: "QPUserInteractionInfo",
            kind: "LinkedField",
            name: "user_interaction_info",
            plural: false,
            selections: [
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "impression_max_instances",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "impression_count_for_user",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "dismiss_max_instances",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "dismiss_click_count_for_user",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "primary_click_max_instances",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "primary_click_count_for_user",
                    storageKey: null
                },
                {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "secondary_click_count_for_user",
                    storageKey: null
                }
            ],
            storageKey: null
        };
        const P = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: false,
            selections: g,
            storageKey: null
        };
        const N = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        const M = {
            alias: null,
            args: null,
            concreteType: "QuickPromotionFlattenedFilter",
            kind: "LinkedField",
            name: "filters",
            plural: true,
            selections: D,
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: e,
                kind: "Fragment",
                metadata: null,
                name: "WAWebFetchQuickPromotionsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "QuickPromotionBatchFetchSurface",
                        kind: "LinkedField",
                        name: "quick_promotion_batch_fetch_root",
                        plural: true,
                        selections: [
                            r,
                            {
                                alias: null,
                                args: null,
                                concreteType: "QuickPromotionSurfaceEligiblePromotionsConnection",
                                kind: "LinkedField",
                                name: "eligible_promotions",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "QuickPromotionSurfaceEligiblePromotionsEdge",
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
                                                concreteType: "QuickPromotion",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: false,
                                                selections: [
                                                    {
                                                        kind: "InlineDataFragmentSpread",
                                                        name: "WAWebFetchQuickPromotionsQuery_QuickPromotion",
                                                        selections: [
                                                            c,
                                                            d,
                                                            m,
                                                            p,
                                                            _,
                                                            f,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "QuickPromotionCreative",
                                                                kind: "LinkedField",
                                                                name: "creatives",
                                                                plural: true,
                                                                selections: [
                                                                    {
                                                                        kind: "InlineDataFragmentSpread",
                                                                        name: "WAWebFetchQuickPromotionsQuery_QPCreative",
                                                                        selections: [
                                                                            y,
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
                                                                                concreteType: "QuickPromotionAction",
                                                                                kind: "LinkedField",
                                                                                name: "primary_action",
                                                                                plural: false,
                                                                                selections: [
                                                                                    {
                                                                                        kind: "InlineDataFragmentSpread",
                                                                                        name: "WAWebFetchQuickPromotionsQuery_QPAction",
                                                                                        selections: [
                                                                                            y,
                                                                                            C
                                                                                        ],
                                                                                        args: null,
                                                                                        argumentDefinitions: []
                                                                                    }
                                                                                ],
                                                                                storageKey: null
                                                                            },
                                                                            v,
                                                                            S,
                                                                            R,
                                                                            L
                                                                        ],
                                                                        args: null,
                                                                        argumentDefinitions: []
                                                                    }
                                                                ],
                                                                storageKey: null
                                                            },
                                                            E,
                                                            I,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                kind: "LinkedField",
                                                                name: "contextual_filters_for_wa_do_not_use",
                                                                plural: false,
                                                                selections: [
                                                                    x,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                        kind: "LinkedField",
                                                                        name: "clauses",
                                                                        plural: true,
                                                                        selections: [
                                                                            x,
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                kind: "LinkedField",
                                                                                name: "clauses",
                                                                                plural: true,
                                                                                selections: [
                                                                                    x,
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                        kind: "LinkedField",
                                                                                        name: "clauses",
                                                                                        plural: true,
                                                                                        selections: [
                                                                                            x,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                kind: "LinkedField",
                                                                                                name: "clauses",
                                                                                                plural: true,
                                                                                                selections: [
                                                                                                    x,
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "clauses",
                                                                                                        plural: true,
                                                                                                        selections: [
                                                                                                            x,
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "clauses",
                                                                                                                plural: true,
                                                                                                                selections: [
                                                                                                                    x,
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "clauses",
                                                                                                                        plural: true,
                                                                                                                        selections: [
                                                                                                                            x
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
                                                            $
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
                name: "WAWebFetchQuickPromotionsQuery",
                selections: [
                    {
                        alias: null,
                        args: t,
                        concreteType: "QuickPromotionBatchFetchSurface",
                        kind: "LinkedField",
                        name: "quick_promotion_batch_fetch_root",
                        plural: true,
                        selections: [
                            r,
                            {
                                alias: null,
                                args: null,
                                concreteType: "QuickPromotionSurfaceEligiblePromotionsConnection",
                                kind: "LinkedField",
                                name: "eligible_promotions",
                                plural: false,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "QuickPromotionSurfaceEligiblePromotionsEdge",
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
                                                concreteType: "QuickPromotion",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: false,
                                                selections: [
                                                    c,
                                                    d,
                                                    m,
                                                    p,
                                                    _,
                                                    f,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "QuickPromotionCreative",
                                                        kind: "LinkedField",
                                                        name: "creatives",
                                                        plural: true,
                                                        selections: [
                                                            P,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "TextWithEntities",
                                                                kind: "LinkedField",
                                                                name: "content",
                                                                plural: false,
                                                                selections: g,
                                                                storageKey: null
                                                            },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "QuickPromotionAction",
                                                                kind: "LinkedField",
                                                                name: "primary_action",
                                                                plural: false,
                                                                selections: [
                                                                    P,
                                                                    C
                                                                ],
                                                                storageKey: null
                                                            },
                                                            v,
                                                            S,
                                                            R,
                                                            L,
                                                            N
                                                        ],
                                                        storageKey: null
                                                    },
                                                    E,
                                                    I,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                        kind: "LinkedField",
                                                        name: "contextual_filters_for_wa_do_not_use",
                                                        plural: false,
                                                        selections: [
                                                            T,
                                                            M,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                kind: "LinkedField",
                                                                name: "clauses",
                                                                plural: true,
                                                                selections: [
                                                                    T,
                                                                    M,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                        kind: "LinkedField",
                                                                        name: "clauses",
                                                                        plural: true,
                                                                        selections: [
                                                                            T,
                                                                            M,
                                                                            {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                kind: "LinkedField",
                                                                                name: "clauses",
                                                                                plural: true,
                                                                                selections: [
                                                                                    T,
                                                                                    M,
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                        kind: "LinkedField",
                                                                                        name: "clauses",
                                                                                        plural: true,
                                                                                        selections: [
                                                                                            T,
                                                                                            M,
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                kind: "LinkedField",
                                                                                                name: "clauses",
                                                                                                plural: true,
                                                                                                selections: [
                                                                                                    T,
                                                                                                    M,
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "clauses",
                                                                                                        plural: true,
                                                                                                        selections: [
                                                                                                            T,
                                                                                                            M,
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "QuickPromotionFlattenedFilterClause",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "clauses",
                                                                                                                plural: true,
                                                                                                                selections: [
                                                                                                                    T,
                                                                                                                    M
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
                                                    $,
                                                    N
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
                id: n("WAWebFetchQuickPromotionsQuery_facebookRelayOperation"),
                metadata: {},
                name: "WAWebFetchQuickPromotionsQuery",
                operationKind: "query",
                text: null
            }
        };
    })();
    a.exports = e;
}, null);