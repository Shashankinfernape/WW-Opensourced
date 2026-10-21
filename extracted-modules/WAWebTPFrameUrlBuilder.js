__d("WAWebTPFrameUrlBuilder", [
    "WAWebL10nGetRenderedLocale",
    "WAXWhatsAppWebTPHtmlSandboxControllerRouteBuilder",
    "WAXWhatsAppWebTPPdfSharerControllerRouteBuilder",
    "WAXWhatsAppWebTPPdfThumbnailControllerRouteBuilder",
    "WAXWhatsAppWebTPPdfViewerControllerRouteBuilder",
    "WhatsAppWebTPUrlBuilder",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = r("WhatsAppWebTPUrlBuilder").url;
        if (r("isStringNullOrEmpty")(e)) {
            throw r("err")("Failed to get webtp pdf thumbnail url");
        }
        const t = e + r("WAXWhatsAppWebTPPdfThumbnailControllerRouteBuilder").buildURL({});
        const n = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale();
        return `${t}?locale=${n}`;
    }
    function s() {
        const e = r("WhatsAppWebTPUrlBuilder").url;
        if (r("isStringNullOrEmpty")(e)) {
            throw r("err")("Failed to get webtp pdf viewer url");
        }
        const t = e + r("WAXWhatsAppWebTPPdfViewerControllerRouteBuilder").buildURL({});
        const n = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale();
        return `${t}?locale=${n}`;
    }
    function u() {
        const e = r("WhatsAppWebTPUrlBuilder").url;
        if (r("isStringNullOrEmpty")(e)) {
            throw r("err")("Failed to get webtp pdf sharer url");
        }
        const t = e + r("WAXWhatsAppWebTPPdfSharerControllerRouteBuilder").buildURL({});
        const n = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale();
        return `${t}?locale=${n}`;
    }
    function c() {
        return `${u()}&mode=inline`;
    }
    function d() {
        const e = r("WhatsAppWebTPUrlBuilder").url;
        if (r("isStringNullOrEmpty")(e)) {
            throw r("err")("Failed to get webtp html sandbox url");
        }
        return e + r("WAXWhatsAppWebTPHtmlSandboxControllerRouteBuilder").buildURL({});
    }
    l.getWAWebTPThumbnailUrl = e;
    l.getWAWebTPPdfViewerUrl = s;
    l.getWAWebTPPdfSharerUrl = u;
    l.getWAWebTPPdfInlineSharerUrl = c;
    l.getWAWebTPHtmlSandboxUrl = d;
}, 98);