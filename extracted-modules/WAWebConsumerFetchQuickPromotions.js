__d("WAWebConsumerFetchQuickPromotions", [
    "Promise",
    "WABase64",
    "WACustomError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebBuildConstants",
    "WAWebCTWAConstants",
    "WAWebCanonicalUtils",
    "WAWebCommonCTWAQplHelpers",
    "WAWebConsumerFetchQuickPromotionsQuery.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPAction.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPCreative.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPText.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilter.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QPWAFilterClause.graphql",
    "WAWebConsumerFetchQuickPromotionsQuery_QuickPromotion.graphql",
    "WAWebFetchQuickPromotionsCore",
    "WAWebJobUpdateQPSurfaces",
    "WAWebL10NCountryCodes",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQplFlowWrapper",
    "WAWebQuickPromotionGating",
    "WAWebRelayClient",
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
    const D = e !== void 0 ? e : e = n("WAWebConsumerFetchQuickPromotionsQuery.graphql");
    const x = s !== void 0 ? s : s = n("WAWebConsumerFetchQuickPromotionsQuery_QuickPromotion.graphql");
    const $ = u !== void 0 ? u : u = n("WAWebConsumerFetchQuickPromotionsQuery_QPCreative.graphql");
    const P = c !== void 0 ? c : c = n("WAWebConsumerFetchQuickPromotionsQuery_QPAction.graphql");
    const N = d !== void 0 ? d : d = n("WAWebConsumerFetchQuickPromotionsQuery_QPText.graphql");
    const M = m !== void 0 ? m : m = n("WAWebConsumerFetchQuickPromotionsQuery_QPWAFilterClause.graphql");
    const w = p !== void 0 ? p : p = n("WAWebConsumerFetchQuickPromotionsQuery_QPWAFilter.graphql");
    function A(e) {
        o("WAWebCommonCTWAQplHelpers").qplAnnotateGraphQLError({
            error: e,
            event: L,
            errorAnnotationName: "fetch_consumer_promotions_error",
            errorMessageAnnotationName: "fetch_consumer_promotions_error_message"
        });
    }
    function F() {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return (R || (R = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        if (o("WAWebCanonicalUtils").isCanonicalPresent()) {
            return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("fetchConsumerQuickPromotions", function() {
                return o("WAWebBackendApi").frontendSendAndReceive("getUserLocale").then((e)=>O(e));
            }).waitUntilCompleted();
        }
        return (R || (R = n("Promise"))).resolve({
            type: "error"
        });
    }
    function O(e) {
        return r("WAWebNetworkStatus").waitIfOffline().then(()=>o("WAPromiseTimeout").promiseTimeout(B(e), o("WAWebCTWAConstants").QP_FETCH_TIMEOUT_MS * (k + 1)).then((t)=>{
                if (t.type === "success") {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchConsumerQuickPromotions: success"
                    ])));
                    return o("WAWebJobUpdateQPSurfaces").updateQPSurfacesFromGraphQLFetch(t.quickPromotions, e).then(()=>{
                        o("WAWebQplFlowWrapper").QPL.markerEnd(L, 2);
                        return t;
                    }).catch((e)=>{
                        if (e instanceof Error) {
                            o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchConsumerQuickPromotions: failed while saving to the DB"
                            ]))).catching(e);
                        } else {
                            o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchConsumerQuickPromotions: failed while saving to the DB"
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
                    'fetchConsumerQuickPromotions: failed as "',
                    '"'
                ])), t.type);
                return t;
            }).catch((e)=>{
                if (e instanceof o("WACustomError").TimeoutError) {
                    o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_end");
                    o("WAWebQplFlowWrapper").QPL.markerEnd(L, 105);
                    o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                        'fetchConsumerQuickPromotions: failed as "timeout"'
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
        return W(e).then((e)=>{
            if (e.type === "success") {
                o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_end");
                return e;
            }
            o("WAWebQplFlowWrapper").QPL.markerPoint(L, "fetch_promotions_end");
            o("WAWebQplFlowWrapper").QPL.markerEnd(L, 3);
            return e;
        });
    }
    function W(e) {
        let t = k;
        const n = function(r) {
            return q(e).then((e)=>{
                if (e.type === "success") {
                    r(e);
                } else {
                    const n = t > 0;
                    t--;
                    if (!n) {
                        r(e);
                    }
                }
            }).catch((e)=>{
                const n = t > 0;
                t--;
                if (!n) {
                    throw e;
                }
            });
        };
        const r = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "fetchConsumerQuickPromotions",
            timer: {
                algo: {
                    type: "exponential",
                    first: I
                },
                max: T
            },
            code: n
        });
        r.start();
        return r.promise();
    }
    function q(e) {
        const r = Array.from(o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQLConsumer());
        if (r.length === 0) {
            return (R || (R = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        const a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()?.user;
        if (a == null) {
            return (R || (R = n("Promise"))).resolve({
                type: "error"
            });
        }
        const i = o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(a);
        let l;
        return o("WAWebRelayClient").fetchQuery(D, {
            nux_ids: r,
            trigger_context: {
                wa_smb_trigger_context: {
                    is_from_wa_smb: false,
                    app_version: o("WAWebBuildConstants").VERSION_BASE,
                    country: i,
                    locale: e
                }
            }
        }, {
            environmentType: "whatsapp_web",
            getInlineDataReader: function(t) {
                l = t;
            }
        }).then((e)=>{
            if (e == null) {
                return E;
            }
            const t = e.quick_promotion_multiverse_batch_fetch_root;
            const n = new Map;
            const a = [];
            r.forEach((e)=>{
                const t = o("WAWebFetchQuickPromotionsCore").getSurfaceIdByNuxId(e);
                if (t == null) {
                    if (a.length < 3) {
                        a.push(e);
                    }
                    return;
                }
                n.set(e, {
                    id: t,
                    promotions: []
                });
            });
            if (a.length > 0) {
                o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[fetchConsumerQuickPromotions] nuxIds not in map: ",
                    " => ",
                    ""
                ])), a.length, a).sendLogs("consumer-quick-promotions-graphql-missing-surface");
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
                    const s = t.edges;
                    s.forEach((e)=>{
                        if (e != null) {
                            const { client_ttl_seconds: t, is_holdout: n, log_eligibility_waterfall: r, node: i, priority: s, time_range: u } = e;
                            if (i != null) {
                                const c = l(x, i);
                                const { ab_prop_name: d, client_side_dry_run: m, content_attributes: p, contextual_filters_for_wa_do_not_use: _, creatives: f, encrypted_logging_data: g, is_server_force_pass: h, max_impressions: y, promotion_id: C, surface_delay_in_seconds: S, wa_qp_content_attributes_do_not_use: R } = c;
                                if (!(C == null || h == null || p == null || S == null)) {
                                    const { wa_banner_background_color: L, wa_eligible_duration_after_impression_in_seconds: E, wa_primary_cta_alternative_url: k } = p;
                                    if (E != null) {
                                        const I = f.map((e)=>l($, e));
                                        const T = I[0];
                                        let D;
                                        let M;
                                        let w;
                                        let A;
                                        let F;
                                        let O;
                                        let B;
                                        if (T != null) {
                                            const { accessibility_text_for_image: W, content: q, dismiss_action: V, primary_action: H, title: G, wa_dark_mode_media_details: z, wa_light_mode_media_details: j } = T;
                                            if (G == null || q == null) {
                                                return;
                                            }
                                            A = l(N, G).text;
                                            F = l(N, q).text;
                                            if (H != null) {
                                                const K = l(P, H);
                                                const { limit: Q, title: X, url: Y } = K;
                                                M = Q;
                                                if (X != null) {
                                                    const J = l(N, X);
                                                    if (J.text != null) {
                                                        D = {
                                                            text: J?.text,
                                                            deepLink: Y,
                                                            universalLink: k
                                                        };
                                                    }
                                                }
                                            }
                                            w = V?.limit;
                                            O = T.is_dismissible;
                                            if (W != null) {
                                                let Z;
                                                try {
                                                    if (j?.jpeg_thumbnail != null) {
                                                        Z = {
                                                            elementValue: new Uint8Array(o("WABase64").decodeB64(j.jpeg_thumbnail))
                                                        };
                                                    }
                                                } catch (e) {
                                                    o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                                                        "[fetchConsumerQuickPromotions] b64 decode failed: light mode"
                                                    ])));
                                                }
                                                let ee;
                                                try {
                                                    if (z?.jpeg_thumbnail != null) {
                                                        ee = {
                                                            elementValue: new Uint8Array(o("WABase64").decodeB64(z.jpeg_thumbnail))
                                                        };
                                                    }
                                                } catch (e) {
                                                    o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                                                        "[fetchConsumerQuickPromotions] b64 decode failed: dark mode"
                                                    ])));
                                                }
                                                B = {
                                                    description: W,
                                                    light: Z,
                                                    dark: ee
                                                };
                                            }
                                        }
                                        if (!(A == null || F == null || O == null)) {
                                            const te = L != null ? {
                                                lightHighlight: L.light_mode_highlight_color,
                                                lightBackground: L.light_mode_background_color,
                                                darkHighlight: L.dark_mode_highlight_color,
                                                darkBackground: L.dark_mode_background_color
                                            } : void 0;
                                            const ne = R.reduce((e, { name: n, value: r })=>{
                                                if (!(n == null || r == null)) {
                                                    e.push({
                                                        key: n,
                                                        value: r
                                                    });
                                                }
                                                return e;
                                            }, []);
                                            const re = y != null || M != null || w != null ? {
                                                promotionConfig: {
                                                    maxImpressions: y ?? -1,
                                                    maxDismisses: w ?? 0,
                                                    maxPrimaryClicks: M ?? 0,
                                                    maxSecondaryClicks: 0
                                                },
                                                userInfo: void 0
                                            } : void 0;
                                            const oe = _ != null ? U(_, l) : void 0;
                                            const ae = g != null ? {
                                                elementValue: o("WAWebWebp").stringToUint8(g)
                                            } : void 0;
                                            const ie = {
                                                id: C,
                                                qpConfigPriority: s,
                                                qpConfigDismissable: O ? "true" : "false",
                                                qpConfigEligibilityDurationMs: E * 1000,
                                                qpConfigEndTimeSeconds: u.end,
                                                qpConfigExperimentKey: d,
                                                qpConfigExposureHoldout: n ? "true" : "false",
                                                qpConfigForcePass: h ? "true" : "false",
                                                qpConfigLogEligibilityWaterfall: r ? "true" : "false",
                                                qpConfigStartTimeSeconds: u.start,
                                                qpConfigSurfaceDelayTimeSeconds: S,
                                                qpConfigTtlSeconds: t,
                                                qpConfigClientSideDryRun: m === true ? "true" : "false",
                                                titleElementValue: A,
                                                textElementValue: F,
                                                colors: te,
                                                contentAttributes: {
                                                    attribute: ne
                                                },
                                                image: B,
                                                primaryAction: D,
                                                qpConfigPacing: re,
                                                qpConfigFilterRules: oe,
                                                header: void 0,
                                                instanceId: void 0,
                                                qpConfigDeterministic: "true",
                                                qpConfigImpressionCooldown: -1,
                                                qpConfigInstanceLogData: ae,
                                                qpConfigMaxImpressions: y ?? -1,
                                                qpConfigTemplateName: "whatsapp_banner",
                                                qpConfigTriggersTrigger: [],
                                                secondaryAction: void 0,
                                                qpConfigExposureStrategy: void 0
                                            };
                                            a.promotions.push(ie);
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
                    "[fetchConsumerQuickPromotions] ",
                    " unexpected nuxIds => ",
                    ""
                ])), i.length, i);
            }
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
    l.fetchConsumerQuickPromotions = F;
}, 98);