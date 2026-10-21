__d("WASmaxProfilePictureGetRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInProfilePictureEnums",
    "WASmaxJsx",
    "WASmaxMixins",
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
            const n = y(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const SuccessPictureURL = _(r, n);
            if (SuccessPictureURL.success) {
                return {
                    name: "GetResponseSuccessPictureURL",
                    value: SuccessPictureURL.value
                };
            }
            const SuccessAvatarURLs = d(r, n);
            if (SuccessAvatarURLs.success) {
                return {
                    name: "GetResponseSuccessAvatarURLs",
                    value: SuccessAvatarURLs.value
                };
            }
            const SuccessPictureBlob = p(r, n);
            if (SuccessPictureBlob.success) {
                return {
                    name: "GetResponseSuccessPictureBlob",
                    value: SuccessPictureBlob.value
                };
            }
            const SuccessNoData = m(r, n);
            if (SuccessNoData.success) {
                return {
                    name: "GetResponseSuccessNoData",
                    value: SuccessNoData.value
                };
            }
            const c = u(r, n);
            if (c.success) {
                return {
                    name: "GetResponseError",
                    value: c.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("Get", {
                SuccessPictureURL,
                SuccessAvatarURLs,
                SuccessPictureBlob,
                SuccessNoData,
                Error: c
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
        const a = f(e, t);
        if (!a.success) {
            return a;
        }
        const i = h(r.value);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, a.value, {
                errorProfilePictureGetErrors: i.value
            }));
        }
        return i;
    }
    function c(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "avatar");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "url");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "pose_id");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, e, "hash");
        if (a.success) {
            return o("WAResultOrError").makeResult({
                url: n.value,
                poseId: r.value,
                hash: a.value
            });
        }
        return a;
    }
    function d(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = g(e, t);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").mapChildrenWithTag(e, "avatar", 1, 4, c);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, r.value, {
                avatar: a.value
            }));
        }
        return a;
    }
    function m(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = g(e, t);
        r.success;
        return r;
    }
    function p(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrString(r.value, "id");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrStringEnum(r.value, "type", o("WASmaxInProfilePictureEnums").ENUM_IMAGE_PREVIEW);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, r.value, "has_staging", o("WASmaxInProfilePictureEnums").ENUM_FALSE_TRUE);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").contentBytesRange(r.value, 1, undefined);
        if (!s.success) {
            return s;
        }
        const u = g(e, t);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                pictureId: a.value,
                pictureType: i.value,
                pictureHasStaging: l.value,
                pictureElementValue: s.value
            }, u.value));
        }
        return u;
    }
    function _(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "picture");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").attrString(r.value, "id");
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").attrStringEnum(r.value, "type", o("WASmaxInProfilePictureEnums").ENUM_COVER_IMAGE_PREVIEW);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").attrString(r.value, "url");
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").attrString(r.value, "direct_path");
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrString, r.value, "hash");
        if (!u.success) {
            return u;
        }
        const c = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, r.value, "has_staging", o("WASmaxInProfilePictureEnums").ENUM_FALSE_TRUE);
        if (!c.success) {
            return c;
        }
        const d = g(e, t);
        if (d.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                pictureId: a.value,
                pictureType: i.value,
                pictureUrl: l.value,
                pictureDirectPath: s.value,
                pictureHash: u.value,
                pictureHasStaging: c.value
            }, d.value));
        }
        return d;
    }
    function f(e, t) {
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
    function g(e, t) {
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
    function h(e) {
        const t = v(e);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorBadRequest",
                value: t.value
            });
        }
        const n = E(e);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorNotAuthorized",
                value: n.value
            });
        }
        const r = L(e);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorItemNotFound",
                value: r.value
            });
        }
        const a = k(e);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorRateOverlimit",
                value: a.value
            });
        }
        const i = R(e);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorInternalServerError",
                value: i.value
            });
        }
        const l = S(e);
        if (l.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorFeatureNotImplemented",
                value: l.value
            });
        }
        const s = I(e);
        if (s.success) {
            return o("WAResultOrError").makeResult({
                name: "IQErrorServiceUnavailable",
                value: s.value
            });
        }
        return o("WASmaxParseUtils").errorMixinDisjunction(e, [
            "IQErrorBadRequest",
            "IQErrorNotAuthorized",
            "IQErrorItemNotFound",
            "IQErrorRateOverlimit",
            "IQErrorInternalServerError",
            "IQErrorFeatureNotImplemented",
            "IQErrorServiceUnavailable"
        ], [
            t,
            n,
            r,
            a,
            i,
            l,
            s
        ]);
    }
    function y(e) {
        let t;
        let n;
        const { pictureType, pictureId, pictureQuery, pictureInvite, picturePersonaId, pictureCommonGid, pictureSize, addRequestMixinArgs, tCTokenMixinArgs, avatarMixinArgs } = e;
        const _ = O(M(o("WASmaxJsx").smax("iq", null, o("WASmaxMixins").optionalMerge(P, o("WASmaxMixins").optionalMerge(b, o("WASmaxMixins").optionalMerge(D, o("WASmaxJsx").smax("picture", {
            type: (t = o("WASmaxAttrs")).OPTIONAL((n = o("WAWap")).CUSTOM_STRING, pictureType),
            id: t.OPTIONAL(n.CUSTOM_STRING, pictureId),
            query: t.OPTIONAL(n.CUSTOM_STRING, pictureQuery),
            invite: t.OPTIONAL(n.CUSTOM_STRING, pictureInvite),
            persona_id: t.OPTIONAL(n.CUSTOM_STRING, picturePersonaId),
            common_gid: t.OPTIONAL(n.GROUP_JID, pictureCommonGid),
            size: t.OPTIONAL(n.INT, pictureSize)
        }), addRequestMixinArgs), tCTokenMixinArgs), avatarMixinArgs))), e);
        return _;
    }
    function C({ tctokenT, privacyTokenContentsMixinArgs }) {
        const r = o("WASmaxJsx").smax("smax$any", null, W(o("WASmaxJsx").smax("tctoken", {
            t: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, tctokenT)
        }), privacyTokenContentsMixinArgs));
        return r;
    }
    function b(e, t) {
        const n = C(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
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
    function S(e) {
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
    function R(e) {
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
    function L(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "item-not-found");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 404);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function E(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "error");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrString, e, "text", "not-authorized");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").literal(o("WASmaxParseUtils").attrInt, e, "code", 401);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                text: n.value,
                code: r.value
            });
        }
        return r;
    }
    function k(e) {
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
    function I(e) {
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
    function T({ addRequestCode, addRequestAdmin, addRequestExpiration }) {
        const a = o("WASmaxJsx").smax("picture", null, o("WASmaxJsx").smax("add_request", {
            code: o("WAWap").CUSTOM_STRING(addRequestCode),
            admin: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, addRequestAdmin),
            expiration: o("WAWap").INT(addRequestExpiration)
        }));
        return a;
    }
    function D(e, t) {
        const n = T(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x({ avatarPoseId }) {
        const n = o("WASmaxJsx").smax("avatar", {
            pose_id: o("WAWap").CUSTOM_STRING(avatarPoseId)
        });
        return n;
    }
    function $({ avatarArgs }) {
        const n = o("WASmaxJsx").smax("picture", {
            type: "avatar"
        }, o("WASmaxChildren").REPEATED_CHILD(x, avatarArgs, 0, 4));
        return n;
    }
    function P(e, t) {
        const n = $(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N() {
        const e = A(o("WASmaxJsx").smax("iq", {
            xmlns: "w:profile:picture"
        }));
        return e;
    }
    function M(e) {
        const t = N();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function w() {
        const e = o("WASmaxJsx").smax("iq", {
            id: o("WAWap").generateId(),
            type: "get"
        });
        return e;
    }
    function A(e) {
        const t = w();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function F({ iqTarget }) {
        const n = U(o("WASmaxJsx").smax("iq", {
            target: o("WAWap").JID(iqTarget)
        }));
        return n;
    }
    function O(e, t) {
        const n = F(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B({ anyElementValue }) {
        const n = o("WASmaxJsx").smax("smax$any", null, anyElementValue);
        return n;
    }
    function W(e, t) {
        const n = B(t);
        return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q() {
        const e = o("WASmaxJsx").smax("iq", {
            to: o("WAWap").S_WHATSAPP_NET
        });
        return e;
    }
    function U(e) {
        const t = q();
        return o("WASmaxMixins").mergeStanzas(e, t);
    }
    l.sendGetRPC = e;
    l.parseGetResponseError = u;
    l.parseGetResponseSuccessAvatarURLsAvatar = c;
    l.parseGetResponseSuccessAvatarURLs = d;
    l.parseGetResponseSuccessNoData = m;
    l.parseGetResponseSuccessPictureBlob = p;
    l.parseGetResponseSuccessPictureURL = _;
    l.parseIQErrorResponseMixin = f;
    l.parseIQResultResponseMixin = g;
    l.parseProfilePictureGetErrors = h;
    l.makeGetRequest = y;
    l.mergeTCTokenMixin = b;
    l.parseIQErrorBadRequestMixin = v;
    l.parseIQErrorFeatureNotImplementedMixin = S;
    l.parseIQErrorInternalServerErrorMixin = R;
    l.parseIQErrorItemNotFoundMixin = L;
    l.parseIQErrorNotAuthorizedMixin = E;
    l.parseIQErrorRateOverlimitMixin = k;
    l.parseIQErrorServiceUnavailableMixin = I;
    l.mergeAddRequestMixin = D;
    l.makeAvatarAvatar = x;
    l.mergeAvatarMixin = P;
    l.mergeBaseGetIQMixin = M;
    l.mergeBaseIQGetRequestMixin = A;
    l.mergeGetIQMixin = O;
    l.mergePrivacyTokenContentsMixin = W;
    l.mergeServerDomainIQMixin = U;
}, 98);