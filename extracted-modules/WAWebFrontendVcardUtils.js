__d("WAWebFrontendVcardUtils", [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        if (r("isStringNullOrEmpty")(e)) {
            return "";
        }
        return e.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,");
    }
    function u(e) {
        let t;
        let n;
        if (o("WAWebUserPrefsMeUser").isMeAccount(e.id)) {
            t = o("WAWebContactGetters").getName(e) || o("WAWebFrontendContactGetters").getDisplayName(e);
        } else {
            const a = o("WAWebFrontendContactGetters").getFormattedName(e).split(o("WAWebFrontendContactGetters").getFormattedShortName(e)).filter(Boolean);
            n = a.length ? a[0].trim() : undefined;
            t = r("isStringNullOrEmpty")(n) ? o("WAWebFrontendContactGetters").getFormattedName(e) : o("WAWebFrontendContactGetters").getFormattedShortName(e);
        }
        return `${s(n)};${s(t)};;;`;
    }
    function c(t, n) {
        let d;
        if (o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
            d = o("WAWebContactGetters").getName(t) || o("WAWebFrontendContactGetters").getDisplayName(t);
        } else {
            d = o("WAWebFrontendContactGetters").getDisplayName(t);
        }
        const m = s(d);
        const p = o("WAWebFrontendContactGetters").getUsername(t);
        const _ = o("WAWebContactGetters").getId(t);
        const f = n?.includePhoneNumber ?? true;
        const g = n?.includeUsername ?? true;
        let h = [];
        if (f) {
            const y = _.isRegularUserPn() ? _ : o("WAWebApiContact").getPhoneNumber(o("WAWebWidFactory").asUserLidOrThrow(_));
            if (y) {
                h = [
                    `TEL;type=CELL;waid=${String(r("WAWebWid").user(y))}:${o("WAWebWidFormat").widToFormattedUser(y)}`
                ];
            }
        }
        if (h.length === 0 && g && o("WAWebUsernameTypes").isPresentUsername(p)) {
            const C = _.isLid() ? _ : o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(_));
            if (C) {
                h = [
                    `X-WA-LID:${String(r("WAWebWid").user(C))}`
                ];
            }
        }
        if (h.length === 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "vcardFromContactModel: no phone number or username"
            ]))).sendLogs("vcard-no-phone-number-or-username", {
                sampling: 0.01
            });
        }
        const b = t.businessProfile?.automatedType;
        const v = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `N:${u(t)}`,
            `FN:${m}`
        ].concat(h, [
            t.isBusiness ? `X-WA-BIZ-NAME:${m}` : null,
            r("isStringNullOrEmpty")(t.businessProfile?.description) ? null : `X-WA-BIZ-DESCRIPTION:${s(t.businessProfile.description)}`,
            b ? `X-WA-BIZ-AUTOMATED-TYPE:${s(String(b))}` : null,
            "END:VCARD"
        ]).filter(Boolean);
        return {
            displayName: m,
            vcard: v.join("\n"),
            isMultiVcard: false
        };
    }
    l.vcardFromContactModel = c;
}, 98);