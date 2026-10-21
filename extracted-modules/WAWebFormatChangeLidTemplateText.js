__d("WAWebFormatChangeLidTemplateText", [
    "fbt",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l, s) {
    function e({ templateParams }) {
        if (templateParams.length !== 1) {
            return false;
        }
        const n = o("WAWebWidFactory").asUserLidOrThrow(o("WAWebWidFactory").createWidFromWidLike(templateParams[0]));
        return o("WAWebApiContact").getPhoneNumber(n) != null;
    }
    function u(t) {
        const n = o("WAWebContactCollection").ContactCollection.gadd(t.from);
        const r = o("WAWebFrontendContactGetters").getFormattedName(n);
        if (e(t)) {
            return s._("{contactName} changed their phone number to a new number", [
                s._param("contactName", r)
            ]);
        }
        return s._("{contactName} updated their contact info", [
            s._param("contactName", r)
        ]);
    }
    function c(t) {
        if (e(t)) {
            return s._("Message or add the new number");
        }
        return s._("Message");
    }
    l.formatChangeLidLeadTemplateText = u;
    l.formatChangeLidCtaTemplateText = c;
}, 226);