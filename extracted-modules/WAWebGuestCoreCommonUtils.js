__d("WAWebGuestCoreCommonUtils", [
    "WABase64",
    "WABase64UrlSafe",
    "WAWebBrowserInfo",
    "WAWebGuestCoreDownloadCTAClickAction",
    "WAWebGuestCoreLocalStorage",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return (navigator.userAgent.includes("WhatsApp-AppClip") && typeof window !== "undefined" && window.webkit?.messageHandlers?.WAAppClipHandler?.postMessage !== void 0) === true;
    }
    function s() {
        const t = r("WAWebBrowserInfo")();
        const n = o("WAWebUA").UA.parser.getResult();
        return {
            browserName: e() ? "WhatsApp-AppClip" : t.name,
            browserVersion: n.browser.version,
            osName: t.os,
            osVersion: t.version
        };
    }
    function u(e) {
        return e.get("invite_code") ?? e.get("sc");
    }
    function c(e) {
        return u(e) ?? e.get("ic");
    }
    function d(e) {
        return e.get("sc") != null && e.get("invite_code") == null;
    }
    function m(e) {
        return e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 45 || e === 46 || e === 95 || e === 126;
    }
    function p(e) {
        const t = "0123456789ABCDEF";
        for(var n = e instanceof Uint8Array ? e : new Uint8Array(e), r = "", o = 0; o < n.length; o++){
            const a = n[o];
            if (m(a)) {
                r += String.fromCharCode(a);
            } else {
                r += `%${t[Math.floor(a / 16)]}${t[a % 16]}`;
            }
        }
        return r;
    }
    function _(e, t, n) {
        const r = e.includes("?") ? "&" : "?";
        return `${e}${r}${encodeURIComponent(t)}=${n}`;
    }
    function f(e) {
        return o("WABase64UrlSafe").urlSafeBase64(o("WABase64").encodeB64(e));
    }
    function g(e, t) {
        const n = function() {
            if (document.visibilityState === "visible" && o("WAWebGuestCoreLocalStorage").getGuestExperienceType() !== t) {
                o("WAWebGuestCoreDownloadCTAClickAction").downloadCTAClickAction(e);
            }
        };
        document.addEventListener("visibilitychange", n);
    }
    l.isAppClipWebView = e;
    l.getBrowserAndOsDetails = s;
    l.getInviteCodeFromUrlParams = u;
    l.getPrivateInviteCodeFromUrlParams = c;
    l.isSSIInviteCode = d;
    l.percentEncodeBytes = p;
    l.appendPreEncodedQueryParam = _;
    l.encodeB64UrlSafe = f;
    l.addGuestExperienceVisibilityListener = g;
}, 98);