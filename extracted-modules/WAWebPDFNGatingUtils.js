__d("WAWebPDFNGatingUtils", [
    "WATimeUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebPDFNCommonUtils",
    "WAWebTos",
    "WAWebWamoPDFNGatingUtils",
    "gkx"
], function(t, n, r, o, a, i, l) {
    function e() {
        if (r("gkx")("26256")) {
            return true;
        }
        return o("WAWebWamoPDFNGatingUtils").hasAcceptedAnyNewsletterTos();
    }
    function s() {
        return o("WAWebPDFNCommonUtils").hasAcceptedTos(o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos());
    }
    function u() {
        return o("WAWebPDFNCommonUtils").hasAcceptedTos(o("WAWebNewsletterGatingUtils").getNewsletterProducerTos());
    }
    function c() {
        return o("WAWebPDFNCommonUtils").hasAcceptedTos(o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos());
    }
    function d() {
        if (e() || o("WAWebWamoPDFNGatingUtils").isWamoTosValid()) {
            return parseInt(o("WAWebNewsletterGatingUtils").getNewsletterProducerNux(), 10);
        }
        return parseInt(o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(), 10);
    }
    function m() {
        return o("WAWebWamoPDFNGatingUtils").getNewsletterConsumerNuxOrTos();
    }
    function p() {
        if (r("gkx")("26256")) {
            return true;
        }
        return o("WAWebWamoPDFNGatingUtils").hasAckedNewsletterConsumerNuxOrTos();
    }
    function _(t) {
        if (!e()) {
            return false;
        }
        const n = f(o("WATimeUtils").castToUnixTime(t - 1));
        return n < t;
    }
    function f(e) {
        const t = [];
        if (s()) {
            t.push(o("WAWebTos").TosManager.getLastAcceptedTime(o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos()) ?? e);
        }
        if (u()) {
            t.push(o("WAWebTos").TosManager.getLastAcceptedTime(o("WAWebNewsletterGatingUtils").getNewsletterProducerTos()) ?? e);
        }
        if (c()) {
            t.push(o("WAWebTos").TosManager.getLastAcceptedTime(o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos()) ?? e);
        }
        const i = Math.max(...t.concat([
            e
        ]));
        return o("WATimeUtils").castToUnixTime(i);
    }
    l.hasAcceptedNewsletterTos = e;
    l.hasAcceptedNewsletterAdminInviteTos = c;
    l.getNewsletterProducerDisclosureId = d;
    l.getNewsletterNuxOrTos = m;
    l.hasAckedNewsletterNuxOrTos = p;
    l.hasAcceptedNewsletterTosBefore = _;
}, 98);