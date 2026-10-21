__d("WASmaxPrivacyGetContactBlacklistRPC", [
    "WAComms",
    "WAJids",
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
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
            const n = R(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessLID = f(r, n);
            if (SuccessLID.success) {
                return {
                    name: "GetContactBlacklistResponseSuccessLID",
                    value: SuccessLID.value
                };
            }
            const i = m(r, n);
            if (i.success) {
                return {
                    name: "GetContactBlacklistResponseSuccess",
                    value: i.value
                };
            }
            const l = u(r, n);
            if (l.success) {
                return {
                    name: "GetContactBlacklistResponseError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetContactBlacklist", {
                SuccessLID,
                Success: i,
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
        const a = I(e, t);
        if (!a.success) {
            return a;
        }
        const i = g(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorGetPrivacyListError: i.value
            }));
        }
        return i;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "user");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseJid").attrUserJid(e, "jid");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrLidUserJid, e, "lid");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                jid: n.value,
                lid: r.value
            });
        }
        return r;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "list");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "dhash");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").mapChildrenWithTag(e, "user", 0, 64000, c);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                dhash: n.value,
                user: r.value
            });
        }
        return r;
    }
    function m(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "list", d);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalLiteral(o("WASmaxParseUtils").attrString, r.value, "addressing_mode", "pn");
        if (!i.success) {
            return i;
        }
        const l = T(e, t);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                privacyAddressingMode: i.value
            }, l.value, {
                privacyList: a.value
            }));
        }
        return l;
    }
    function p(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "user");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrLidUserJid, e, "jid");
        if (!n.success) {
            return n;
        }
        const r = S(e);
        return o("WAResultOrError").makeResult({
            jid: n.value,
            privacyContactListIdentifierMixin: r.success ? r.value : null
        });
    }
    function _(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "list");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "dhash");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").mapChildrenWithTag(e, "user", 0, 64000, p);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                dhash: n.value,
                user: r.value
            });
        }
        return r;
    }
    function f(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "list", _);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, r.value, "addressing_mode", "lid");
        if (!i.success) {
            return i;
        }
        const l = T(e, t);
        if (l.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                privacyAddressingMode: i.value
            }, l.value, {
                privacyList: a.value
            }));
        }
        return l;
    }
    function g(e) {
        const t = h(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = y(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: n.value
            });
        }
        const r = v(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: r.value
            });
        }
        const a = b(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        const i = C(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: i.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorFeatureNotImplemented",
            "IQErrorServiceUnavailable",
            "IQErrorRateOverlimit",
            "IQErrorInternalServerError"
        ], [
            t,
            n,
            r,
            a,
            i
        ]);
    }
    function h(e) {
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
    function y(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "feature-not-implemented");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 501);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function C(e) {
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
    function b(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "rate-overlimit");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 429);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function v(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "service-unavailable");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 503);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function S(e) {
        const t = k(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                contactListIds: t.value
            });
        }
        return t;
    }
    function R({ getContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroupArgs }) {
        const n = E(o("WASmaxJsx").smax("iq", null, w(o("WASmaxJsx").smax("privacy", null), getContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroupArgs)));
        return n;
    }
    function L() {
        const e = M(o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET,
            xmlns: "privacy"
        }));
        return e;
    }
    function E(e) {
        const t = L();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function k(e) {
        const t = P(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "Username",
                value: t.value
            });
        }
        const n = $(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "PnJid",
                value: n.value
            });
        }
        const r = D(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "EmptyContactListIdentifier",
                value: r.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "Username",
            "PnJid",
            "EmptyContactListIdentifier"
        ], [
            t,
            n,
            r
        ]);
    }
    function I(e, t) {
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
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrJidEnum, e, "from", x);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "error");
        if (l.success) {
            return o("WAResultOrError").makeResult({
                from: i.value,
                type: l.value
            });
        }
        return l;
    }
    function T(e, t) {
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
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrJidEnum, e, "from", x);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "type", "result");
        if (l.success) {
            return o("WAResultOrError").makeResult({
                from: i.value,
                type: l.value
            });
        }
        return l;
    }
    function D(e) {
        return o("WASmaxParseUtils").voidSuccess;
    }
    var x = {
        validators: [
            o("WAJids").validateDomainJid,
            o("WAJids").validateUserJid
        ],
        typeName: "DomainJid|UserJid"
    };
    function $(e) {
        const t = o("WASmaxParseJid").attrUserJid(e, "pn_jid");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                pnJid: t.value
            });
        }
        return t;
    }
    function P(e) {
        const t = o("WASmaxParseUtils").attrString(e, "username");
        if (t.success) {
            return o("WAResultOrError").makeResult({
                username: t.value
            });
        }
        return t;
    }
    function N() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "get"
        });
        return e;
    }
    function M(e) {
        const t = N();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function w(e, t) {
        if (t.getContactBlacklistGetContactBlacklistLID) {
            return B(e, t.getContactBlacklistGetContactBlacklistLID);
        }
        if (t.getContactBlacklistGetContactBlacklistPN) {
            return F(e, t.getContactBlacklistGetContactBlacklistPN);
        }
        throw new (o("WASmaxMixinGroupExhaustiveError")).SmaxMixinGroupExhaustiveError;
    }
    function A({ categoryNamesForContactBlacklistMixinArgs }) {
        const n = o("WASmaxJsx").smax("privacy", null, q(o("WASmaxJsx").smax("list", {
            value: "contact_blacklist"
        }), categoryNamesForContactBlacklistMixinArgs));
        return n;
    }
    function F(e, t) {
        const n = A(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function O({ categoryNamesForContactBlacklistMixinArgs }) {
        const n = o("WASmaxJsx").smax("privacy", {
            addressing_mode: "lid"
        }, q(o("WASmaxJsx").smax("list", {
            value: "contact_blacklist"
        }), categoryNamesForContactBlacklistMixinArgs));
        return n;
    }
    function B(e, t) {
        const n = O(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W({ anyName }) {
        const n = o("WASmaxJsx").smax("smax$any", {
            name: o("WAWap").CUSTOM_STRING(anyName)
        });
        return n;
    }
    function q(e, t) {
        const n = W(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    l.sendGetContactBlacklistRPC = e;
    l.parseGetContactBlacklistResponseError = u;
    l.parseGetContactBlacklistResponseSuccessPrivacyListUser = c;
    l.parseGetContactBlacklistResponseSuccessPrivacyList = d;
    l.parseGetContactBlacklistResponseSuccess = m;
    l.parseGetContactBlacklistResponseSuccessLIDPrivacyListUser = p;
    l.parseGetContactBlacklistResponseSuccessLIDPrivacyList = _;
    l.parseGetContactBlacklistResponseSuccessLID = f;
    l.parseGetPrivacyListError = g;
    l.parseIQErrorBadRequestMixin = h;
    l.parseIQErrorFeatureNotImplementedMixin = y;
    l.parseIQErrorInternalServerErrorMixin = C;
    l.parseIQErrorRateOverlimitMixin = b;
    l.parseIQErrorServiceUnavailableMixin = v;
    l.parsePrivacyContactListIdentifierMixin = S;
    l.makeGetContactBlacklistRequest = R;
    l.mergeGetIQMixin = E;
    l.parseContactListIds = k;
    l.parseDeprecatedIQErrorResponseOptionalFromMixin = I;
    l.parseDeprecatedIQResultResponseOptionalFromMixin = T;
    l.parseEmptyContactListIdentifierMixin = D;
    l.DOMAINJID_USERJID = x;
    l.parsePnJidMixin = $;
    l.parseUsernameMixin = P;
    l.mergeBaseIQGetRequestMixin = M;
    l.mergeGetContactBlacklistGetContactBlacklistLIDOrGetContactBlacklistPNMixinGroup = w;
    l.mergeGetContactBlacklistGetContactBlacklistPNMixin = F;
    l.mergeGetContactBlacklistGetContactBlacklistLIDMixin = B;
    l.mergeCategoryNamesForContactBlacklistMixin = q;
}, 98);