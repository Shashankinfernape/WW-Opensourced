__d("WASmaxBotBotListRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = L(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessV2 = p(r, n);
            if (SuccessV2.success) {
                return {
                    name: "BotListResponseSuccessV2",
                    value: SuccessV2.value
                };
            }
            const SuccessV3 = h(r, n);
            if (SuccessV3.success) {
                return {
                    name: "BotListResponseSuccessV3",
                    value: SuccessV3.value
                };
            }
            const l = u(r, n);
            if (l.success) {
                return {
                    name: "BotListResponseError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("BotList", {
                SuccessV2,
                SuccessV3,
                Error: l
            }));
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = v(e, t);
        if (!a.success) {
            return a;
        }
        const i = E(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorBotListErrors: i.value
            }));
        }
        return i;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "theme");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "background");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "primary_text");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(e, "secondary_text");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrStringEnum(e, "mode", C);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").contentString(n.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").contentString(r.value);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").contentString(a.value);
        if (u.success) {
            return o("WAResultOrError").makeResult({
                mode: i.value,
                backgroundElementValue: l.value,
                primaryTextElementValue: s.value,
                secondaryTextElementValue: u.value
            });
        }
        return u;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "bot");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "persona_id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrInt, e, "count");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").mapChildrenWithTag(e, "theme", 0, 2, c);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value,
                personaId: r.value,
                count: a.value,
                theme: i.value
            });
        }
        return i;
    }
    function m(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "section");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "name");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(e, "type", y);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(e, "bot", 0, Infinity, d);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: n.value,
                type: r.value,
                bot: a.value
            });
        }
        return a;
    }
    function p(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "default");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "v", "2");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseJid").attrUserJid(a.value, "jid");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").attrString(a.value, "persona_id");
        if (!s.success) {
            return s;
        }
        const u = S(e, t);
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "section", 1, Infinity, m);
        if (c.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                botV: i.value,
                botDefaultJid: l.value,
                botDefaultPersonaId: s.value
            }, u.value, {
                botSection: c.value
            }));
        }
        return c;
    }
    function _(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "bot");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "persona_id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "card_title");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrInt, e, "count");
        if (i.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value,
                personaId: r.value,
                cardTitle: a.value,
                count: i.value
            });
        }
        return i;
    }
    function f(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "section");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "name");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(e, "type", y);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrStringEnum(e, "display_type", b);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").mapChildrenWithTag(e, "bot", 0, Infinity, _);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: n.value,
                type: r.value,
                displayType: a.value,
                bot: i.value
            });
        }
        return i;
    }
    function g(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "default");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "persona_id");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value,
                personaId: r.value
            });
        }
        return r;
    }
    function h(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "default", g);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "v", "3");
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").attrString(r.value, "bhash");
        if (!l.success) {
            return l;
        }
        const s = S(e, t);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").mapChildrenWithTag(r.value, "section", 0, Infinity, f);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                botV: i.value,
                botBhash: l.value
            }, s.value, {
                botDefault: a.value,
                botSection: u.value
            }));
        }
        return u;
    }
    var y = {
        all: "all",
        category: "category",
        featured: "featured"
    };
    var C = {
        dark: "dark",
        light: "light"
    };
    var b = {
        hidden: "hidden",
        hscroll: "hscroll",
        hscroll_icebreakers: "hscroll_icebreakers",
        hscroll_large: "hscroll_large",
        hscroll_small: "hscroll_small",
        listview: "listview"
    };
    function v(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    function S(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseReference").attrStringFromReference(t, [
            "id"
        ]);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "id", r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseReference").attrStringFromReference(t, [
            "to"
        ]);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "from", i.value);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (s.success) {
            return o("WAResultOrError").makeResult({
                type: s.value
            });
        }
        return s;
    }
    function R({ botJid }) {
        const n = o("WASmaxJsx").smax("bot", {
            jid: o("WAWap").JID(botJid)
        });
        return n;
    }
    function L({ botArgs, botV, botBhash }) {
        const a = $(o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("bot", {
            v: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, botV),
            bhash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, botBhash)
        }, o("WASmaxChildren").REPEATED_CHILD(R, botArgs, 0, Infinity))));
        return a;
    }
    function E(e) {
        const t = T(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: t.value
            });
        }
        const n = I(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorForbidden",
                value: n.value
            });
        }
        const r = k(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: r.value
            });
        }
        const a = D(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAllowed",
                value: a.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorInternalServerError",
            "IQErrorForbidden",
            "IQErrorBadRequest",
            "IQErrorNotAllowed"
        ], [
            t,
            n,
            r,
            a
        ]);
    }
    function k(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "bad-request");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 400);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function I(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "forbidden");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 403);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function T(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "internal-server-error");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 500);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function D(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "not-allowed");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 405);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function x() {
        const e = N(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "bot"
        }));
        return e;
    }
    function $(e) {
        const t = x();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function P() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "get"
        });
        return e;
    }
    function N(e) {
        const t = P();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    l.sendBotListRPC = e;
    l.parseBotListResponseError = u;
    l.parseBotListResponseSuccessV2BotSectionBotTheme = c;
    l.parseBotListResponseSuccessV2BotSectionBot = d;
    l.parseBotListResponseSuccessV2BotSection = m;
    l.parseBotListResponseSuccessV2 = p;
    l.parseBotListResponseSuccessV3BotSectionBot = _;
    l.parseBotListResponseSuccessV3BotSection = f;
    l.parseBotListResponseSuccessV3BotDefault = g;
    l.parseBotListResponseSuccessV3 = h;
    l.ENUM_ALL_CATEGORY_FEATURED = y;
    l.ENUM_DARK_LIGHT = C;
    l.ENUM_HIDDEN_HSCROLL_HSCROLLICEBREAKERS_HSCROLLLARGE_HSCROLLSMALL_LISTVIEW = b;
    l.parseIQErrorResponseMixin = v;
    l.parseIQResultResponseMixin = S;
    l.makeBotListRequestBotBot = R;
    l.makeBotListRequest = L;
    l.parseBotListErrors = E;
    l.parseIQErrorBadRequestMixin = k;
    l.parseIQErrorForbiddenMixin = I;
    l.parseIQErrorInternalServerErrorMixin = T;
    l.parseIQErrorNotAllowedMixin = D;
    l.mergeBotListIQMixin = $;
    l.mergeBaseIQGetRequestMixin = N;
}, 98);