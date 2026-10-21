__d("WASmaxQpSurfacesQPNotificationRPC", [
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = s(e);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("QPNotification", {
                Request: t
            }));
        }
        return {
            parsedRequest: t.value,
            makeQPNotificationResponseAck: function() {
                return T(e);
            }
        };
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "surfaces");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseJid").attrUserJid(e, "from");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "psa");
        if (!a.success) {
            return a;
        }
        const i = k(n.value);
        if (!i.success) {
            return i;
        }
        const l = I(e);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: r.value,
                type: a.value,
                surfacesQPSurfacesMixin: i.value
            }, l.value));
        }
        return l;
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "trigger");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "name");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: n.value
            });
        }
        return n;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "header");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "title");
        if (n.success) {
            return o("WAResultOrError").makeResult({
                title: n.value
            });
        }
        return n;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "light");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function m(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "dark");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function p(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "image");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalChildWithTag(e, "light", d);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(e, "dark", m);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrString(e, "description");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                description: a.value,
                light: n.value,
                dark: r.value
            });
        }
        return a;
    }
    function _(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "primary_action");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "text");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "universal_link");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "deep_link");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                universalLink: r.value,
                deepLink: a.value
            });
        }
        return a;
    }
    function f(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "secondary_action");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "text");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "universal_link");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "deep_link");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                universalLink: r.value,
                deepLink: a.value
            });
        }
        return a;
    }
    function g(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "colors");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "light");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "dark");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "background");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "highlight");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, r.value, "background");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, r.value, "highlight");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                lightBackground: a.value,
                lightHighlight: i.value,
                darkBackground: l.value,
                darkHighlight: s.value
            });
        }
        return s;
    }
    function h(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "attribute");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "key");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "value");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                key: n.value,
                value: r.value
            });
        }
        return r;
    }
    function y(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "content_attributes");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").mapChildrenWithTag(e, "attribute", 0, 50, h);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                attribute: n.value
            });
        }
        return n;
    }
    function C(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "filter_rules");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function b(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "instance_log_data");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytes(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function v(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "promotion_config");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrInt(e, "max_impressions");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrInt(e, "max_primary_clicks");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrInt(e, "max_secondary_clicks");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrInt(e, "max_dismisses");
        if (i.success) {
            return o("WAResultOrError").makeResult({
                maxImpressions: n.value,
                maxPrimaryClicks: r.value,
                maxSecondaryClicks: a.value,
                maxDismisses: i.value
            });
        }
        return i;
    }
    function S(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "user_info");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrInt(e, "impression_count");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrInt(e, "primary_click_count");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrInt(e, "secondary_click_count");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrInt(e, "dismiss_click_count");
        if (i.success) {
            return o("WAResultOrError").makeResult({
                impressionCount: n.value,
                primaryClickCount: r.value,
                secondaryClickCount: a.value,
                dismissClickCount: i.value
            });
        }
        return i;
    }
    function R(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "pacing");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalChildWithTag(e, "promotion_config", v);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(e, "user_info", S);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                promotionConfig: n.value,
                userInfo: r.value
            });
        }
        return r;
    }
    function L(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "promotion");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "title");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "text");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(e, "qp_config");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").flattenedChildWithTag(a.value, "triggers");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optionalChildWithTag(e, "header", c);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optionalChildWithTag(e, "image", p);
        if (!s.success) {
            return s;
        }
        const d = o("WASmaxParseUtils").optionalChildWithTag(e, "primary_action", _);
        if (!d.success) {
            return d;
        }
        const m = o("WASmaxParseUtils").optionalChildWithTag(e, "secondary_action", f);
        if (!m.success) {
            return m;
        }
        const h = o("WASmaxParseUtils").optionalChildWithTag(e, "colors", g);
        if (!h.success) {
            return h;
        }
        const v = o("WASmaxParseUtils").optionalChildWithTag(e, "content_attributes", y);
        if (!v.success) {
            return v;
        }
        const S = o("WASmaxParseUtils").optionalChildWithTag(a.value, "filter_rules", C);
        if (!S.success) {
            return S;
        }
        const L = o("WASmaxParseUtils").optionalChildWithTag(a.value, "instance_log_data", b);
        if (!L.success) {
            return L;
        }
        const E = o("WASmaxParseUtils").optionalChildWithTag(a.value, "pacing", R);
        if (!E.success) {
            return E;
        }
        const k = o("WASmaxParseUtils").attrString(e, "id");
        if (!k.success) {
            return k;
        }
        const I = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "instance_id");
        if (!I.success) {
            return I;
        }
        const T = o("WASmaxParseUtils").contentString(n.value);
        if (!T.success) {
            return T;
        }
        const $ = o("WASmaxParseUtils").contentString(r.value);
        if (!$.success) {
            return $;
        }
        const P = o("WASmaxParseUtils").attrString(a.value, "template_name");
        if (!P.success) {
            return P;
        }
        const N = o("WASmaxParseUtils").attrInt(a.value, "start_time_seconds");
        if (!N.success) {
            return N;
        }
        const M = o("WASmaxParseUtils").attrInt(a.value, "end_time_seconds");
        if (!M.success) {
            return M;
        }
        const w = o("WASmaxParseUtils").attrInt(a.value, "ttl_seconds");
        if (!w.success) {
            return w;
        }
        const A = o("WASmaxParseUtils").attrStringEnum(a.value, "dismissable", x);
        if (!A.success) {
            return A;
        }
        const F = o("WASmaxParseUtils").attrStringEnum(a.value, "force_pass", x);
        if (!F.success) {
            return F;
        }
        const O = o("WASmaxParseUtils").attrInt(a.value, "surface_delay_time_seconds");
        if (!O.success) {
            return O;
        }
        const B = o("WASmaxParseUtils").attrStringEnum(a.value, "deterministic", x);
        if (!B.success) {
            return B;
        }
        const W = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, a.value, "experiment_key");
        if (!W.success) {
            return W;
        }
        const q = o("WASmaxParseUtils").attrStringEnum(a.value, "exposure_holdout", x);
        if (!q.success) {
            return q;
        }
        const U = o("WASmaxParseUtils").attrInt(a.value, "max_impressions");
        if (!U.success) {
            return U;
        }
        const V = o("WASmaxParseUtils").attrInt(a.value, "impression_cooldown");
        if (!V.success) {
            return V;
        }
        const H = o("WASmaxParseUtils").attrInt(a.value, "eligibility_duration_ms");
        if (!H.success) {
            return H;
        }
        const G = o("WASmaxParseUtils").attrInt(a.value, "priority");
        if (!G.success) {
            return G;
        }
        const z = o("WASmaxParseUtils").attrStringEnum(a.value, "log_eligibility_waterfall", x);
        if (!z.success) {
            return z;
        }
        const j = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, a.value, "exposure_strategy", D);
        if (!j.success) {
            return j;
        }
        const K = o("WASmaxParseUtils").mapChildrenWithTag(i.value, "trigger", 1, 50, u);
        if (K.success) {
            return o("WAResultOrError").makeResult({
                id: k.value,
                instanceId: I.value,
                titleElementValue: T.value,
                textElementValue: $.value,
                qpConfigTemplateName: P.value,
                qpConfigStartTimeSeconds: N.value,
                qpConfigEndTimeSeconds: M.value,
                qpConfigTtlSeconds: w.value,
                qpConfigDismissable: A.value,
                qpConfigForcePass: F.value,
                qpConfigSurfaceDelayTimeSeconds: O.value,
                qpConfigDeterministic: B.value,
                qpConfigExperimentKey: W.value,
                qpConfigExposureHoldout: q.value,
                qpConfigMaxImpressions: U.value,
                qpConfigImpressionCooldown: V.value,
                qpConfigEligibilityDurationMs: H.value,
                qpConfigPriority: G.value,
                qpConfigLogEligibilityWaterfall: z.value,
                qpConfigExposureStrategy: j.value,
                header: l.value,
                image: s.value,
                primaryAction: d.value,
                secondaryAction: m.value,
                colors: h.value,
                contentAttributes: v.value,
                qpConfigFilterRules: S.value,
                qpConfigInstanceLogData: L.value,
                qpConfigPacing: E.value,
                qpConfigTriggersTrigger: K.value
            });
        }
        return K;
    }
    function E(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "surface");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "id");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").mapChildrenWithTag(e, "promotion", 0, 100, L);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                id: n.value,
                promotion: r.value
            });
        }
        return r;
    }
    function k(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "surfaces");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").mapChildrenWithTag(e, "surface", 0, 100, E);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                surface: n.value
            });
        }
        return n;
    }
    function I(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, undefined);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStanzaId(e, "id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrIntRange, e, "offline", 0, 1024);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                t: n.value,
                id: r.value,
                offline: a.value
            });
        }
        return a;
    }
    function T(e) {
        const t = P(o("WASmaxJsx").smax("ack", null), e);
        return t;
    }
    var D = {
        client: "client",
        server: "server"
    };
    var x = {
        false: "false",
        true: "true"
    };
    function $(e) {
        const t = o("WASmaxParseReference").attrFromReference(o("WASmaxParseUtils").attrStanzaId, e, [
            "id"
        ]);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(t.error);
        }
        const n = o("WASmaxParseReference").attrFromReference(o("WASmaxParseJid").attrUserJid, e, [
            "from"
        ]);
        if (!n.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(n.error);
        }
        const r = o("WASmaxParseReference").attrFromReference(o("WASmaxParseUtils").attrString, e, [
            "type"
        ]);
        if (!r.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(r.error);
        }
        const a = o("WASmaxJsx").smax("ack", {
            id: o("WAWap").STANZA_ID(t.value),
            to: o("WAWap").USER_JID(n.value),
            class: "notification",
            type: o("WAWap").CUSTOM_STRING(r.value)
        });
        return a;
    }
    function P(e, t) {
        const n = $(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.receiveQPNotificationRPC = e;
    l.parseQPNotificationRequest = s;
    l.parseQPSurfacesSurfacePromotionQpConfigTriggersTrigger = u;
    l.parseQPSurfacesSurfacePromotionHeader = c;
    l.parseQPSurfacesSurfacePromotionImageLight = d;
    l.parseQPSurfacesSurfacePromotionImageDark = m;
    l.parseQPSurfacesSurfacePromotionImage = p;
    l.parseQPSurfacesSurfacePromotionPrimaryAction = _;
    l.parseQPSurfacesSurfacePromotionSecondaryAction = f;
    l.parseQPSurfacesSurfacePromotionColors = g;
    l.parseQPSurfacesSurfacePromotionContentAttributesAttribute = h;
    l.parseQPSurfacesSurfacePromotionContentAttributes = y;
    l.parseQPSurfacesSurfacePromotionQpConfigFilterRules = C;
    l.parseQPSurfacesSurfacePromotionQpConfigInstanceLogData = b;
    l.parseQPSurfacesSurfacePromotionQpConfigPacingPromotionConfig = v;
    l.parseQPSurfacesSurfacePromotionQpConfigPacingUserInfo = S;
    l.parseQPSurfacesSurfacePromotionQpConfigPacing = R;
    l.parseQPSurfacesSurfacePromotion = L;
    l.parseQPSurfacesSurface = E;
    l.parseQPSurfacesMixin = k;
    l.parseServerNotificationMixin = I;
    l.makeQPNotificationResponseAck = T;
    l.ENUM_CLIENT_SERVER = D;
    l.ENUM_FALSE_TRUE = x;
    l.mergeNotificationClientAckMixin = P;
}, 98);