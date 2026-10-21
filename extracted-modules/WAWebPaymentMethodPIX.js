__d("WAWebPaymentMethodPIX", [
    "WALogger",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsValidators"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d() {
        return {
            counts: new Map,
            samples: new Map
        };
    }
    function m(e, t, n) {
        e.counts.set(t, (e.counts.get(t) ?? 0) + 1);
        if (n != null) {
            let o = e.samples.get(t);
            if (o == null) {
                o = [];
                e.samples.set(t, o);
            }
            if (o.length < 3) {
                o.push(n);
            }
        }
    }
    function p(e, t) {
        return e.metadata.filter((e)=>e.key === t)?.at(0)?.value;
    }
    function _(e) {
        const t = e?.pix;
        return t != null && o("WAWebUserPrefsValidators").isStringFieldValid(t.display_name) && o("WAWebUserPrefsValidators").isStringFieldValid(t.credentialId) && o("WAWebUserPrefsValidators").isStringFieldValid(t.key) && o("WAWebUserPrefsValidators").isStringFieldValid(t.key_type) && o("WAWebUserPrefsTypes").PixKeyType.cast(t.key_type) != null && o("WAWebUserPrefsValidators").isStringFieldValid(t.country);
    }
    function f(e) {
        if (_(e)) {
            return e?.pix;
        }
        return null;
    }
    function g(e, t, n) {
        const i = p(e, "pix_key");
        if (i == null) {
            m(n, "pix_key_null");
            return false;
        }
        const l = p(e, "pix_key_type");
        if (l == null) {
            m(n, "pix_key_type_null");
            return false;
        }
        const key_type = o("WAWebUserPrefsTypes").PixKeyType.cast(l.toUpperCase());
        if (key_type == null) {
            m(n, "pix_key_type_invalid", l);
            return false;
        }
        const display_name = p(e, "pix_display_name");
        if (display_name == null) {
            m(n, "pix_display_name_null");
            return false;
        }
        const c = f(t.existingMethods);
        const d = c?.time_added ?? Date.now();
        const _ = c?.time_last_used ?? null;
        t.out.pix = {
            credentialId: e.credentialId,
            key: i,
            key_type,
            display_name,
            country: e.country,
            time_added: d,
            time_last_used: _
        };
        return true;
    }
    function h(t) {
        const l = t.counts.get("pix_key_null") ?? 0;
        if (l > 0) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_key values are null"
            ])), l).sendLogs("monitor-errors");
        }
        const d = t.counts.get("pix_key_type_null") ?? 0;
        if (d > 0) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_key_type values are null"
            ])), d).sendLogs("monitor-errors");
        }
        const m = t.counts.get("pix_key_type_invalid") ?? 0;
        if (m > 0) {
            const _ = t.samples.get("pix_key_type_invalid") ?? [];
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_key_type values are invalid: ",
                ""
            ])), m, _).sendLogs("monitor-errors");
        }
        const f = t.counts.get("pix_display_name_null") ?? 0;
        if (f > 0) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " pix_display_name values are null"
            ])), f).sendLogs("monitor-errors");
        }
    }
    l.newPaymentMethodTypeErrors = d;
    l.recordError = m;
    l.findMetadataValue = p;
    l.isStoredPIXValid = _;
    l.getValidStoredPix = f;
    l.extractAndStorePix = g;
    l.flushPixErrors = h;
}, 98);