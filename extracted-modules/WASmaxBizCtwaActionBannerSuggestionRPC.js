__d("WASmaxBizCtwaActionBannerSuggestionRPC", [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = p(e);
        if (!t.success) {
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("BannerSuggestion", {
                Request: t
            }));
        }
        return {
            parsedRequest: t.value
        };
    }
    function s(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "action");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "deep_link");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "local_link");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "local_android_link");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                deepLink: n.value,
                localLink: r.value,
                localAndroidLink: a.value
            });
        }
        return a;
    }
    function u(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "localised_heading");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "localisation_metadata");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "value");
        if (!r.success) {
            return r;
        }
        const a = h(n.value);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                value: r.value,
                localisationMetadataLocalisationMetadataMixin: a.value
            });
        }
        return a;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "localised_body");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "localisation_metadata");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "value");
        if (!r.success) {
            return r;
        }
        const a = h(n.value);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                value: r.value,
                localisationMetadataLocalisationMetadataMixin: a.value
            });
        }
        return a;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "localised_highlight");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "localisation_metadata");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "value");
        if (!r.success) {
            return r;
        }
        const a = h(n.value);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                value: r.value,
                localisationMetadataLocalisationMetadataMixin: a.value
            });
        }
        return a;
    }
    function m(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "banner");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "config");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "content");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "heading");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "body");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "highlight");
        if (!l.success) {
            return l;
        }
        const m = o("WASmaxParseUtils").optionalChildWithTag(e, "action", s);
        if (!m.success) {
            return m;
        }
        const p = o("WASmaxParseUtils").optionalChildWithTag(r.value, "localised_heading", u);
        if (!p.success) {
            return p;
        }
        const g = o("WASmaxParseUtils").optionalChildWithTag(r.value, "localised_body", c);
        if (!g.success) {
            return g;
        }
        const h = o("WASmaxParseUtils").optionalChildWithTag(r.value, "localised_highlight", d);
        if (!h.success) {
            return h;
        }
        const y = o("WASmaxParseUtils").attrIntRange(n.value, "expires_at", 1, undefined);
        if (!y.success) {
            return y;
        }
        const b = o("WASmaxParseUtils").attrStringEnum(n.value, "display", f);
        if (!b.success) {
            return b;
        }
        const v = o("WASmaxParseUtils").attrStringEnum(n.value, "revoked", _);
        if (!v.success) {
            return v;
        }
        const S = o("WASmaxParseUtils").attrString(r.value, "locale");
        if (!S.success) {
            return S;
        }
        const R = o("WASmaxParseUtils").contentString(a.value);
        if (!R.success) {
            return R;
        }
        const L = o("WASmaxParseUtils").contentString(i.value);
        if (!L.success) {
            return L;
        }
        const E = o("WASmaxParseUtils").contentString(l.value);
        if (!E.success) {
            return E;
        }
        const k = C(e);
        if (k.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                configExpiresAt: y.value,
                configDisplay: b.value,
                configRevoked: v.value,
                contentLocale: S.value,
                contentHeadingElementValue: R.value,
                contentBodyElementValue: L.value,
                contentHighlightElementValue: E.value
            }, k.value, {
                action: m.value,
                contentLocalisedHeading: p.value,
                contentLocalisedBody: g.value,
                contentLocalisedHighlight: h.value
            }));
        }
        return k;
    }
    function p(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "notification");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ctwa_suggestion");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(n.value, "banner", m);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseJid").literalJid(o("WASmaxParseJid").attrDomainJid, e, "from", "s.whatsapp.net");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "business");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").attrString(n.value, "target_entity_id");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, n.value, "notification_log_id");
        if (!s.success) {
            return s;
        }
        const u = b(e);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                from: a.value,
                type: i.value,
                ctwaSuggestionTargetEntityId: l.value,
                ctwaSuggestionNotificationLogId: s.value
            }, u.value, {
                ctwaSuggestionBanner: r.value
            }));
        }
        return u;
    }
    var _ = {
        false: "false",
        true: "true"
    };
    var f = {
        info: "info",
        warning: "warning"
    };
    function g(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "parameter");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "name");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "value");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: n.value,
                value: r.value
            });
        }
        return r;
    }
    function h(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "localisation_metadata");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "uid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "translation_project");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(e, "parameter", 0, 20, g);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                uid: n.value,
                translationProject: r.value,
                parameter: a.value
            });
        }
        return a;
    }
    function y(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "native_action");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "platform");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "min_app_version");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrString(e, "local_link");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "universal_link");
        if (i.success) {
            return o("WAResultOrError").makeResult({
                platform: n.value,
                minAppVersion: r.value,
                localLink: a.value,
                universalLink: i.value
            });
        }
        return i;
    }
    function C(e) {
        const t = o("WASmaxParseUtils").mapChildrenWithTag(e, "native_action", 0, 50, y);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                nativeAction: t.value
            });
        }
        return t;
    }
    function b(e) {
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
    l.receiveBannerSuggestionRPC = e;
    l.parseBannerSuggestionRequestCtwaSuggestionBannerAction = s;
    l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHeading = u;
    l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedBody = c;
    l.parseBannerSuggestionRequestCtwaSuggestionBannerContentLocalisedHighlight = d;
    l.parseBannerSuggestionRequestCtwaSuggestionBanner = m;
    l.parseBannerSuggestionRequest = p;
    l.ENUM_FALSE_TRUE = _;
    l.ENUM_INFO_WARNING = f;
    l.parseLocalisationMetadataParameter = g;
    l.parseLocalisationMetadataMixin = h;
    l.parseNativeActionsMixinNativeAction = y;
    l.parseNativeActionsMixinMixin = C;
    l.parseServerNotificationMixin = b;
}, 98);