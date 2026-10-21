__d("WASmaxBizLinkingGetLinkedAccountsRPC", [
    "WAComms",
    "WAResultOrError",
    "WASmaxInBizLinkingHackBaseIQErrorResponseMixin",
    "WASmaxInBizLinkingHackBaseIQResultResponseMixin",
    "WASmaxInBizLinkingIQErrorInternalServerErrorMixin",
    "WASmaxJsx",
    "WASmaxOutBizLinkingHackBaseIQGetRequestMixin",
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
            const n = S(e);
            const r = yield o("WAComms").sendSmaxStanza(n, t);
            const a = f(r, n);
            if (a.success) {
                return {
                    name: "GetLinkedAccountsResponseSuccess",
                    value: a.value
                };
            }
            const Forbidden = c(r, n);
            if (Forbidden.success) {
                return {
                    name: "GetLinkedAccountsResponseForbidden",
                    value: Forbidden.value
                };
            }
            const l = u(r, n);
            if (l.success) {
                return {
                    name: "GetLinkedAccountsResponseError",
                    value: l.value
                };
            }
            throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("GetLinkedAccounts", {
                Success: a,
                Forbidden,
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
        const a = o("WASmaxInBizLinkingIQErrorInternalServerErrorMixin").parseIQErrorInternalServerErrorMixin(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInBizLinkingHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorInternalServerErrorMixin: a.value
            }, i.value));
        }
        return i;
    }
    function c(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
        if (!r.success) {
            return r;
        }
        const a = b(r.value);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxInBizLinkingHackBaseIQErrorResponseMixin").parseHackBaseIQErrorResponseMixin(e, t);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                errorIQErrorForbiddenMixin: a.value
            }, i.value));
        }
        return i;
    }
    function d(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "fb_page");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "whatsapp_as_page_button");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(n.value, "state", $);
        if (!r.success) {
            return r;
        }
        const a = k(e);
        if (!a.success) {
            return a;
        }
        const i = h(e);
        const l = y(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({
            whatsappAsPageButtonState: r.value
        }, a.value, {
            hasProfilePictureMixin: i.success ? i.value : null,
            hasShowOnProfileMixin: l.success ? l.value : null
        }));
    }
    function m(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "fb_biz");
        if (!t.success) {
            return t;
        }
        const n = L(e);
        n.success;
        return n;
    }
    function p(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ig_professional");
        if (!t.success) {
            return t;
        }
        const n = C(e);
        if (!n.success) {
            return n;
        }
        const r = h(e);
        const a = I(e);
        const i = y(e);
        return o("WAResultOrError").makeResult(babelHelpers.extends({}, n.value, {
            hasProfilePictureMixin: r.success ? r.value : null,
            hasDisplayNameMixin: a.success ? a.value : null,
            hasShowOnProfileMixin: i.success ? i.value : null
        }));
    }
    function _(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "whatsapp_ad_identity");
        if (!t.success) {
            return t;
        }
        const n = v(e);
        n.success;
        return n;
    }
    function f(e, t) {
        const n = o("WASmaxParseUtils").assertTag(e, "iq");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").flattenedChildWithTag(e, "linked_accounts");
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "fb_page", d);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optionalChildWithTag(r.value, "fb_biz", m);
        if (!i.success) {
            return i;
        }
        const l = o("WASmaxParseUtils").optionalChildWithTag(r.value, "ig_professional", p);
        if (!l.success) {
            return l;
        }
        const s = o("WASmaxParseUtils").optionalChildWithTag(r.value, "whatsapp_ad_identity", _);
        if (!s.success) {
            return s;
        }
        const u = o("WASmaxInBizLinkingHackBaseIQResultResponseMixin").parseHackBaseIQResultResponseMixin(e, t);
        if (u.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({}, u.value, {
                linkedAccountsFbPage: a.value,
                linkedAccountsFbBiz: i.value,
                linkedAccountsIgProfessional: l.value,
                linkedAccountsWhatsappAdIdentity: s.value
            }));
        }
        return u;
    }
    function g(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "bytes");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentBytesRange(e, 0, undefined);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                elementValue: n.value
            });
        }
        return n;
    }
    function h(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "profile_picture");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(t.value, "url");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").optionalChildWithTag(t.value, "bytes", g);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").contentString(n.value);
        if (a.success) {
            return o("WAResultOrError").makeResult({
                profilePictureUrlElementValue: a.value,
                profilePictureBytes: r.value
            });
        }
        return a;
    }
    function y(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "show_on_profile");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentStringEnum(t.value, x);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                showOnProfileElementValue: n.value
            });
        }
        return n;
    }
    function C(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "ig_professional");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").flattenedChildWithTag(e, "ig_handle");
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").contentString(n.value);
        if (r.success) {
            return o("WAResultOrError").makeResult({
                igHandleElementValue: r.value
            });
        }
        return r;
    }
    function b(e) {
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
    function v(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "whatsapp_ad_identity");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrString(e, "id");
        if (!n.success) {
            return n;
        }
        const r = T(e);
        if (r.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                id: n.value
            }, r.value));
        }
        return r;
    }
    function S(e) {
        const t = o("WASmaxOutBizLinkingHackBaseIQGetRequestMixin").mergeHackBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            xmlns: "fb:thrift_iq",
            smax_id: o("WAWap").INT(42)
        }, o("WASmaxJsx").smax("linked_accounts", null)), e);
        return t;
    }
    function R(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "catalog");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(e, "state", D);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "id");
        if (r.success) {
            return o("WAResultOrError").makeResult({
                state: n.value,
                id: r.value
            });
        }
        return r;
    }
    function L(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "fb_biz");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalChildWithTag(e, "catalog", R);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "id");
        if (!r.success) {
            return r;
        }
        const a = I(e);
        if (a.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                id: r.value
            }, a.value, {
                catalog: n.value
            }));
        }
        return a;
    }
    function E(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "profile_sync");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(e, "state", D);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                state: n.value
            });
        }
        return n;
    }
    function k(e) {
        const t = o("WASmaxParseUtils").assertTag(e, "fb_page");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").optionalChildWithTag(e, "profile_sync", E);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrString(e, "id");
        if (!r.success) {
            return r;
        }
        const a = I(e);
        if (!a.success) {
            return a;
        }
        const i = T(e);
        if (i.success) {
            return o("WAResultOrError").makeResult(babelHelpers.extends({
                id: r.value
            }, a.value, i.value, {
                profileSync: n.value
            }));
        }
        return i;
    }
    function I(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "display_name");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").contentString(t.value);
        if (n.success) {
            return o("WAResultOrError").makeResult({
                displayNameElementValue: n.value
            });
        }
        return n;
    }
    function T(e) {
        const t = o("WASmaxParseUtils").flattenedChildWithTag(e, "ad_status");
        if (!t.success) {
            return t;
        }
        const n = o("WASmaxParseUtils").attrStringEnum(t.value, "has_created_ad", x);
        if (!n.success) {
            return n;
        }
        const r = o("WASmaxParseUtils").attrStringEnum(t.value, "has_active_ctwa_ad", x);
        if (!r.success) {
            return r;
        }
        const a = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, t.value, "has_ads_eligible_for_recreation", x);
        if (!a.success) {
            return a;
        }
        const i = o("WASmaxParseUtils").optional(o("WASmaxParseUtils").attrStringEnum, t.value, "has_active_ctwa_ad_l28", x);
        if (i.success) {
            return o("WAResultOrError").makeResult({
                adStatusHasCreatedAd: n.value,
                adStatusHasActiveCtwaAd: r.value,
                adStatusHasAdsEligibleForRecreation: a.value,
                adStatusHasActiveCtwaAdL28: i.value
            });
        }
        return i;
    }
    var D = {
        disable: "disable",
        import: "import"
    };
    var x = {
        false: "false",
        true: "true"
    };
    var $ = {
        off: "off",
        on: "on"
    };
    l.sendGetLinkedAccountsRPC = e;
    l.parseGetLinkedAccountsResponseError = u;
    l.parseGetLinkedAccountsResponseForbidden = c;
    l.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbPage = d;
    l.parseGetLinkedAccountsResponseSuccessLinkedAccountsFbBiz = m;
    l.parseGetLinkedAccountsResponseSuccessLinkedAccountsIgProfessional = p;
    l.parseGetLinkedAccountsResponseSuccessLinkedAccountsWhatsappAdIdentity = _;
    l.parseGetLinkedAccountsResponseSuccess = f;
    l.parseHasProfilePictureProfilePictureBytes = g;
    l.parseHasProfilePictureMixin = h;
    l.parseHasShowOnProfileMixin = y;
    l.parseIGProfessionalResponseBaseMixin = C;
    l.parseIQErrorForbiddenMixin = b;
    l.parseWhatsAppAdIdentityResponseMixin = v;
    l.makeGetLinkedAccountsRequest = S;
    l.parseFBBizResponseCatalog = R;
    l.parseFBBizResponseMixin = L;
    l.parseFBPageResponseBaseProfileSync = E;
    l.parseFBPageResponseBaseMixin = k;
    l.parseHasDisplayNameMixin = I;
    l.parseAdStatusMixin = T;
    l.ENUM_DISABLE_IMPORT = D;
    l.ENUM_FALSE_TRUE = x;
    l.ENUM_OFF_ON = $;
}, 98);