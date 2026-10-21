__d("WAWebTPPdfViewerGatingUtils", [
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMimeTypes",
    "WAWebUA",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return !r("WAWebEnvironment").isWindows || o("WAWebABProps").getABPropConfigValue("wa_win_pdf_rendering_enabled");
    }
    function s() {
        return e() && r("justknobx")._("2389");
    }
    function u() {
        return e() && r("justknobx")._("3867");
    }
    function c(e) {
        return o("WAWebMimeTypes").isPdfDocument(e) && u();
    }
    function d() {
        if (r("WAWebEnvironment").isWindows) {
            return o("WAWebABProps").getABPropConfigValue("wa_win_webtp_pdf_viewer_preload_enabled");
        }
        return true;
    }
    function m() {
        return e() && r("justknobx")._("1130");
    }
    function p(t) {
        return e() && r("justknobx")._("1130") && (t == null || o("WAWebMimeTypes").isPdfDocument(t));
    }
    function _() {
        return e() && r("justknobx")._("1228");
    }
    const f = 137;
    function g() {
        const e = o("WAWebUA").UA.isChrome;
        const t = o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE;
        if (!e && !t) {
            return null;
        }
        return parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10);
    }
    function h() {
        const e = g();
        if (e != null && e >= f) {
            return "supported";
        }
        if (e != null && e < f) {
            return "upgrade_browser";
        }
        return "unsupported";
    }
    function y() {
        return e() && o("WAWebABProps").getABPropConfigValue("wa_webtp_use_pdf_annotations");
    }
    function C() {
        return o("WAWebABProps").getABPropConfigValue("wa_webtp_use_async_pdf_send");
    }
    function b() {
        return r("justknobx")._("2723");
    }
    function v() {
        return e();
    }
    function S() {
        if (!v() || h() !== "supported") {
            return "control";
        }
        return ((e)=>{
            switch(e){
                case 1:
                    return "open_in_acrobat";
                case 2:
                    return "edit_in_acrobat";
                case 3:
                    return "edit_text_in_acrobat";
                default:
                    return "control";
            }
        })(o("WAWebABProps").getABPropConfigValue("wa_webtp_skip_sharer_confirmation_variant"));
    }
    l.isWebTPThumbnailRendererEnabled = s;
    l.isWebTPPdfViewerEnabled = u;
    l.isWebTPPdfViewerEnabledForMimeType = c;
    l.isWebTPPdfViewerPreloadEnabled = d;
    l.isWebTP3PSharingEnabled = m;
    l.isWebTPPdfEditAndShareEnabled = p;
    l.isWebTP3PExtensionSharingEnabled = _;
    l.getWebTPBrowserCompatibility = h;
    l.isWebTPPdfAnnotationsEnabled = y;
    l.isAsyncPdfSendEnabled = C;
    l.isPdfPreviewBeforeSendEnabled = b;
    l.isWebTPSharerSavePreferenceEnabled = v;
    l.getWebTPSkipSharerConfirmationVariant = S;
}, 98);