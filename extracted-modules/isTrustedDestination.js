__d("isTrustedDestination", [
    "LinkshimHandlerConfig",
    "isBarcelonaURI",
    "isEnterpriseURI",
    "isFacebookURI",
    "isInstagramURI",
    "isInternalFBURI",
    "isInternalMetaURI",
    "isMetaAIURI",
    "isMetaDotComURI",
    "isOculusDotComURI",
    "isRoomsURI",
    "isSecureOculusDotComURI",
    "isTrustedCMSContentURI",
    "isWhatsAppURI",
    "isWorkplaceDotComURI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return /(^|\.)oculus\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function s() {
        return /(^|\.)workplace\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function u() {
        return /(^|\.)\.workrooms\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function c() {
        return /(^|\.)accountscenter\.meta\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function d() {
        return /(^|\.)(facebook|meta)enterprise\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function m() {
        return /(^|\.)www\.meta\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function p() {
        return /(^|\.)about\.meta\.com$|^about(\..+)?\.facebook\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function _() {
        return /(^|\.)internalfb\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function f() {
        return /(^|\.)messenger\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function g() {
        return /(^|\.)threads\.(com|net)$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function h() {
        return /(^|\.)instagram\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function y() {
        return /(^|\.)whatsapp\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function C() {
        return /(^|\.)meta\.com$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function b() {
        return /(^|\.)meta\.ai$/.test(r("LinkshimHandlerConfig").current_domain);
    }
    function v(e) {
        return /(^|\.)familycenter.*\.messenger\.com$/.test(e.getDomain());
    }
    function S(e) {
        return r("isFacebookURI")(e);
    }
    function R(e) {
        return r("isWorkplaceDotComURI")(e);
    }
    function L(t) {
        if (r("LinkshimHandlerConfig").is_mobile_device === true && r("isRoomsURI")(t)) {
            return true;
        }
        if (s()) {
            return R(t) || r("isMetaDotComURI")(t);
        }
        if (u()) {
            return r("isMetaDotComURI")(t);
        }
        if (_()) {
            return r("isInternalFBURI")(t) || r("isInternalMetaURI")(t) || S(t);
        }
        if (e()) {
            return r("isOculusDotComURI")(t) || r("isSecureOculusDotComURI")(t) || r("isMetaDotComURI")(t);
        }
        if (g()) {
            return r("isBarcelonaURI")(t) || r("isInstagramURI")(t) || r("isMetaAIURI")(t);
        }
        if (h()) {
            return r("isBarcelonaURI")(t) || r("isInstagramURI")(t);
        }
        if (y()) {
            return r("isWhatsAppURI")(t);
        }
        if (c()) {
            return S(t) || r("isInstagramURI")(t);
        }
        if (d()) {
            return r("isEnterpriseURI")(t);
        }
        if (m() || p()) {
            return r("isTrustedCMSContentURI")(t);
        }
        if (C()) {
            return r("isMetaDotComURI")(t);
        }
        if (b()) {
            return r("isMetaAIURI")(t) || r("isInternalFBURI")(t) || R(t) || r("isMetaDotComURI")(t) || r("isInstagramURI")(t) || S(t) || r("isWhatsAppURI")(t) || r("isBarcelonaURI")(t) || r("isOculusDotComURI")(t) || r("isSecureOculusDotComURI")(t);
        }
        if (f() && v(t)) {
            return true;
        }
        return S(t);
    }
    l.default = L;
}, 98);