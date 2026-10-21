__d("WAWebFetchQuickPromotions", [
    "Promise",
    "WABase64",
    "WACustomError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAPromiseTimeout",
    "WAWebAuthAgentFeatureControlGateKeeper",
    "WAWebBackendApi",
    "WAWebBuildConstants",
    "WAWebCTWAConstants",
    "WAWebCommonCTWAQplHelpers",
    "WAWebFetchAdAccountToken",
    "WAWebFetchQuickPromotionsCore",
    "WAWebFetchQuickPromotionsQuery.graphql",
    "WAWebFetchQuickPromotionsQuery_QPAction.graphql",
    "WAWebFetchQuickPromotionsQuery_QPCreative.graphql",
    "WAWebFetchQuickPromotionsQuery_QPText.graphql",
    "WAWebFetchQuickPromotionsQuery_QPWAFilter.graphql",
    "WAWebFetchQuickPromotionsQuery_QPWAFilterClause.graphql",
    "WAWebFetchQuickPromotionsQuery_QuickPromotion.graphql",
    "WAWebJobUpdateQPSurfaces",
    "WAWebL10NCountryCodes",
    "WAWebNetworkStatus",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQplFlowWrapper",
    "WAWebQuickPromotionGating",
    "WAWebRelayClient",
    "WAWebSmbQpCallHealthLogger",
    "WAWebUserPrefsMeUser",
    "WAWebWebp",
    "qpl"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    const L = r("qpl")._(1029379849, "2322");
    const E = {
        type: "error"
    };
    const k = 1;
    const I = 1000;
    const T = 3000;
    const D = e !== void 0 ? e : e = n("WAWebFetchQuickPromotionsQuery.graphql");
    const x = s !== void 0 ? s : s = n("WAWebFetchQuickPromotionsQuery_QuickPromotion.graphql");
    const $ = u !== void 0 ? u : u = n("WAWebFetchQuickPromotionsQuery_QPCreative.graphql");
    const P = c !== void 0 ? c : c = n("WAWebFetchQuickPromotionsQuery_QPAction.graphql");
    const N = d !== void 0 ? d : d = n("WAWebFetchQuickPromotionsQuery_QPText.graphql");
    const M = m !== void 0 ? m : m = n("WAWebFetchQuickPromotionsQuery_QPWAFilterClause.graphql");
    const w = p !== void 0 ? p : p = n("WAWebFetchQuickPromotionsQuery_QPWAFilter.graphql");
    function A(e) {
        o("WAWebCommonCTWAQplHelpers").qplAnnotateGraphQLError({
            error: e,
            event: L,
            errorAnnotationName: "fetch_promotions_error",
            errorMessageAnnotationName: "fetch_promotions_error_message"
        });
    }
    function F() {
        if (o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("QP_BANNERS")) {
            return (R || (R = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        if (o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB()) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("fetchQuickPromotions", function() {
                return o("WAWebBackendApi").frontendSendAndReceive("getUserLocale").then((e)=>O(e));
            }).waitUntilCompleted();
        }
        return (R || (R = n("Promise"))).resolve({
            type: "not-enabled"
        });
    }
    function O(e) {
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAPromiseTimeout").promiseTimeout(B(e), H()).then((t)=>{
                if (t.type === "success") {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchQuickPromotions: success"
                    ])));
                    return o("WAWebJobUpdateQPSurfaces").updateQPSurfacesFromGraphQLFetch(t.quickPromotions, e).then(()=>{
                        o("WAWebQplFlowWrapper").QPL.markerEnd(L, 2);
                        return t;
                    }).catch((e)=>{
                        if (e instanceof Error) {
                            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchQuickPromotions: failed while saving to the DB"
                            ]))).catching(e);
                        } else {
                            o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchQuickPromotions: failed while saving to the DB"
                            ])));
                        }
                        A(e);
                        o("WAWebQplFlowWrapper").QPL.markerEnd(L, 3);
                        return {
                            type: "error"
                        };
                    });
                }
                t.type;
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    'fetchQuickPromotions: failed as "',
                    '"'
                ])), t.type);
                return t;
            }).catch((e)=>{
                if (e instanceof o("WACustomError").TimeoutError) {
                    o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_end");
                    o("WAWebQplFlowWrapper").QPL.markerEnd(L, 105);
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        'fetchQuickPromotions: failed as "timeout"'
                    ])));
                    return {
                        type: "timeout"
                    };
                }
                throw e;
            }));
    }
    function B(e) {
        o("WAWebQplFlowWrapper").QPL.markerStart(L);
        o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_start");
        return o("WAWebFetchAdAccountToken").fetchToken().then((t)=>{
            if (t.type === "success") {
                return W(t.token, e).then((e)=>{
                    if (e.type === "success") {
                        o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_end");
                        return e;
                    }
                    o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_end");
                    o("WAWebQplFlowWrapper").QPL.markerEnd(L, 3);
                    if (e.type === "auth-failure") {
                        o("WAWebFetchAdAccountToken").markTokenAsInvalid();
                    } else {
                        e.type;
                    }
                    return e;
                });
            }
            t.type;
            return t;
        });
    }
    function W(e, t) {
        let n = k;
        const r = function(o) {
            return q(e, t).then((e)=>{
                if (e.type === "success") {
                    o(e);
                } else {
                    const t = n > 0;
                    n--;
                    if (!t) {
                        o(e);
                    }
                }
            }).catch((e)=>{
                const t = n > 0;
                n--;
                if (!t) {
                    throw e;
                }
            });
        };
        const a = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "fetchQuickPromotions",
            timer: {
                algo: {
                    type: "exponential",
                    first: I
                },
                max: T
            },
            code: r
        });
        a.start();
        return a.promise();
    }
    function q(e, t) {
        const a = Array.from(o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQLSMB());
        if (a.length === 0) {
            return (R || (R = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        const i = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        if (i == null) {
            return (R || (R = n("Promise"))).resolve({
                type: "error"
            });
        }
        const l = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(i);
        let s;
        return o("WAWebRelayClient").fetchQuery(D, {
            nux_ids: a,
            trigger_context: {
                wa_smb_trigger_context: {
                    is_from_wa_smb: true,
                    app_version: o("WAWebBuildConstants").VERSION_BASE,
                    country: l,
                    locale: t
                }
            }
        }, {
            environmentType: "facebook",
            accessToken: e,
            getInlineDataReader: function(t) {
                s = t;
            }
        }).then((e)=>{
            if (e == null) {
                o("WAWebSmbQpCallHealthLogger").logSmbQpCallHealth("exception", "null response");
                return E;
            }
            const t = e.quick_promotion_batch_fetch_root;
            const n = new Map;
            const r = [];
            a.forEach((e)=>{
                const t = o("WAWebFetchQuickPromotionsCore").getSurfaceIdByNuxId(e);
                if (t == null) {
                    if (r.length < 3) {
                        r.push(e);
                    }
                    return;
                }
                n.set(e, {
                    id: t,
                    promotions: []
                });
            });
            if (r.length > 0) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchQuickPromotions] nuxIds not in map: ",
                    " => ",
                    ""
                ])), r.length, r).sendLogs("quick-promotions-graphql-missing-surface");
            }
            const i = [];
            t.forEach(({ eligible_promotions: t, surface_nux_id: r })=>{
                if (!(r == null || t == null)) {
                    const a = n.get(r);
                    if (a == null) {
                        if (i.length < 3) {
                            i.push(r);
                        }
                        return;
                    }
                    const l = t.edges;
                    l.forEach((e)=>{
                        if (e != null) {
                            const { client_ttl_seconds: t, is_holdout: n, log_eligibility_waterfall: r, node: i, priority: l, time_range: u } = e;
                            if (i != null) {
                                const c = s(x, i);
                                const { ab_prop_name: d, client_side_dry_run: m, content_attributes: p, contextual_filters_for_wa_do_not_use: _, creatives: f, encrypted_logging_data: g, is_server_force_pass: h, promotion_id: y, surface_delay_in_seconds: C, user_interaction_info: S, wa_qp_content_attributes_do_not_use: R } = c;
                                if (!(y == null || h == null || p == null || C == null)) {
                                    const { wa_banner_background_color: L, wa_eligible_duration_after_impression_in_seconds: E, wa_primary_cta_alternative_url: k } = p;
                                    if (E != null) {
                                        const I = f.map((e)=>s($, e));
                                        const T = I[0];
                                        let D;
                                        let M;
                                        let w;
                                        let A;
                                        let F;
                                        if (T != null) {
                                            const { accessibility_text_for_image: O, content: B, primary_action: W, title: q, wa_dark_mode_media_details: V, wa_light_mode_media_details: H } = T;
                                            if (q == null || B == null) {
                                                return;
                                            }
                                            M = s(N, q).text;
                                            w = s(N, B).text;
                                            if (W != null) {
                                                const G = s(P, W);
                                                const { title: z, url: j } = G;
                                                if (z != null) {
                                                    const K = s(N, z);
                                                    if (K.text != null) {
                                                        D = {
                                                            text: K?.text,
                                                            deepLink: j,
                                                            universalLink: k
                                                        };
                                                    }
                                                }
                                            }
                                            A = T.is_dismissible;
                                            {
                                                let Q;
                                                try {
                                                    if (H?.jpeg_thumbnail != null) {
                                                        Q = {
                                                            elementValue: new Uint8Array(o("WABase64").decodeB64(H.jpeg_thumbnail))
                                                        };
                                                    }
                                                } catch (e) {
                                                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                                        "[fetchQuickPromotions] b64 decode failed: light mode"
                                                    ])));
                                                }
                                                let X;
                                                try {
                                                    if (V?.jpeg_thumbnail != null) {
                                                        X = {
                                                            elementValue: new Uint8Array(o("WABase64").decodeB64(V.jpeg_thumbnail))
                                                        };
                                                    }
                                                } catch (e) {
                                                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                                        "[fetchQuickPromotions] b64 decode failed: dark mode"
                                                    ])));
                                                }
                                                if (Q != null || X != null) {
                                                    F = {
                                                        description: O ?? "",
                                                        light: Q,
                                                        dark: X
                                                    };
                                                }
                                            }
                                        }
                                        if (!(M == null || w == null || A == null)) {
                                            const Y = L != null ? {
                                                lightHighlight: L.light_mode_highlight_color,
                                                lightBackground: L.light_mode_background_color,
                                                darkHighlight: L.dark_mode_highlight_color,
                                                darkBackground: L.dark_mode_background_color
                                            } : void 0;
                                            const J = R.reduce((e, { name: n, value: r })=>{
                                                if (!(n == null || r == null)) {
                                                    e.push({
                                                        key: n,
                                                        value: r
                                                    });
                                                }
                                                return e;
                                            }, []);
                                            let Z;
                                            if (S != null) {
                                                const { dismiss_click_count_for_user: ee, dismiss_max_instances: te, impression_count_for_user: ne, impression_max_instances: re, primary_click_count_for_user: oe, primary_click_max_instances: ae, secondary_click_count_for_user: ie } = S;
                                                if (ne == null || oe == null || ie == null || ee == null || re == null || ae == null || te == null) {
                                                    return;
                                                }
                                                Z = {
                                                    promotionConfig: {
                                                        maxImpressions: re,
                                                        maxDismisses: te,
                                                        maxPrimaryClicks: ae,
                                                        maxSecondaryClicks: 0
                                                    },
                                                    userInfo: {
                                                        impressionCount: ne,
                                                        primaryClickCount: oe,
                                                        secondaryClickCount: ie,
                                                        dismissClickCount: ee
                                                    }
                                                };
                                            }
                                            const le = _ != null ? U(_, s) : void 0;
                                            const se = g != null ? {
                                                elementValue: o("WAWebWebp").stringToUint8(g)
                                            } : void 0;
                                            const ue = {
                                                id: y,
                                                qpConfigPriority: l,
                                                qpConfigDismissable: A ? "true" : "false",
                                                qpConfigEligibilityDurationMs: E * 1000,
                                                qpConfigEndTimeSeconds: u.end,
                                                qpConfigExperimentKey: d,
                                                qpConfigExposureHoldout: n ? "true" : "false",
                                                qpConfigForcePass: h ? "true" : "false",
                                                qpConfigLogEligibilityWaterfall: r ? "true" : "false",
                                                qpConfigStartTimeSeconds: u.start,
                                                qpConfigSurfaceDelayTimeSeconds: C,
                                                qpConfigTtlSeconds: t,
                                                qpConfigClientSideDryRun: m === true ? "true" : "false",
                                                titleElementValue: M,
                                                textElementValue: w,
                                                colors: Y,
                                                contentAttributes: {
                                                    attribute: J
                                                },
                                                image: F,
                                                primaryAction: D,
                                                qpConfigPacing: Z,
                                                qpConfigFilterRules: le,
                                                header: void 0,
                                                instanceId: void 0,
                                                qpConfigDeterministic: "true",
                                                qpConfigImpressionCooldown: -1,
                                                qpConfigInstanceLogData: se,
                                                qpConfigMaxImpressions: -1,
                                                qpConfigTemplateName: "whatsapp_banner",
                                                qpConfigTriggersTrigger: [],
                                                secondaryAction: void 0,
                                                qpConfigExposureStrategy: void 0
                                            };
                                            a.promotions.push(ue);
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            });
            if (i.length > 0) {
                o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchQuickPromotions: received ",
                    " unexpected nux IDs => ",
                    ""
                ])), i.length, i);
            }
            o("WAWebSmbQpCallHealthLogger").logSmbQpCallHealth("success");
            return {
                type: "success",
                quickPromotions: Array.from(n.values(), function({ id: t, promotions: n }) {
                    return {
                        id: t,
                        promotions: [].concat(n)
                    };
                })
            };
        }).catch((e)=>{
            A(e);
            o("WAWebSmbQpCallHealthLogger").logSmbQpCallHealth("exception", e instanceof Error ? e.message : String(e));
            if (e instanceof Error && o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)) {
                return {
                    type: "auth-failure"
                };
            }
            return E;
        });
    }
    function U(e, t) {
        const n = t(M, e);
        const { clause_type: r, filters: a } = n;
        return o("WAWebFetchQuickPromotionsCore").parseFilterClause({
            clause_type: r,
            filters: a
        }, e.clauses, function(e) {
            return U(e, t);
        }, function(e) {
            return V(e, t);
        });
    }
    function V(e, t) {
        const n = t(w, e);
        const { filter_name: r, filter_result: a, parameters: i, passes_if_client_not_supported: l } = n;
        return o("WAWebFetchQuickPromotionsCore").parseFilter({
            filter_name: r,
            filter_result: a,
            parameters: i.map(({ key: t, value: n })=>({
                    key: t,
                    value: n
                })),
            passes_if_client_not_supported: l
        });
    }
    function H() {
        return o("WAWebFetchAdAccountToken").getMaximumAdAccountFetchTimeoutSeconds() * 1000 + o("WAWebCTWAConstants").QP_FETCH_TIMEOUT_MS * (k + 1);
    }
    l.fetchQuickPromotions = F;
}, 98);