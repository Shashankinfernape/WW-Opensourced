__d("WAWebPDFNCommonUtils", [
    "fbt",
    "$InternalEnum",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "isStringNullOrEmpty",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = "ACCEPTED";
    const c = n("$InternalEnum").Mirrored([
        "Meta",
        "WhatsApp"
    ]);
    const d = n("$InternalEnum").Mirrored([
        "Blocking",
        "NonBlocking"
    ]);
    function m(e) {
        const t = o("WAWebUserDisclosureCollection").UserDisclosureCollection.get(e);
        if (t != null && t.accepted) {
            return true;
        }
        return o("WAWebTos").TosManager.getState(e) === u;
    }
    function p(e, t) {
        const s = e?.privacyDisclosureModal?.bullets;
        if (s != null) {
            s.forEach((e)=>{
                e.text = _(e.text, t);
                if (!r("isStringNullOrEmpty")(e.secondaryText)) {
                    e.secondaryText = _(e.secondaryText, t);
                }
            });
        }
        const u = e?.privacyDisclosureModal?.footer;
        const c = u != null ? _(u, t) : u;
        const d = {
            icon: e?.privacyDisclosureModal?.icon,
            iconSvg: e?.privacyDisclosureModal?.iconSvg,
            iconDescription: e?.privacyDisclosureModal?.iconDescription
        };
        const m = f(e);
        return {
            bulletContent: s,
            footerContent: c,
            okText: m,
            headerContent: d
        };
    }
    function _(t, n) {
        const o = new DOMParser;
        const a = o.parseFromString(t, "text/html");
        const i = n ?? {};
        const l = i.linkXstyle;
        a.querySelectorAll("a").forEach((t)=>{
            t.setAttribute("target", "_blank");
            if (l) {
                t.setAttribute("class", (e || (e = r("stylex")))(l));
            }
        });
        return a.body.innerHTML;
    }
    function f(e) {
        return e?.privacyDisclosureModal?.primaryButton?.label ?? s._("Continue");
    }
    l.PdfnTheme = c;
    l.PdfnNoticeType = d;
    l.hasAcceptedTos = m;
    l.getFormattedPdfnContent = p;
}, 226);