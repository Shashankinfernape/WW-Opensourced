__d("WAWebVoipAigcGating", [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebVoipNackHandlers",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = 10;
    const m = 20;
    function p(e) {
        const a = o("WAWebABProps").getABPropConfigValue("aigc_version") ?? 0;
        if (a >= e) {
            return null;
        }
        const i = o("WAWebABProps").getABPropConfigValue("ai_group_call_max_version_by_country") ?? 0;
        if (i < e) {
            return s._("Calls with Meta AI are not available in your country.");
        }
        const l = o("WAWebABProps").getABPropConfigValue("ai_group_call_max_version_by_platform") ?? 0;
        if (l < e) {
            return s._("Calls with Meta AI are not supported on this device. Please join on your primary mobile phone.");
        }
        return s._("Update WhatsApp to the latest version to keep using calls with Meta AI.");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(t, n) {
        if (!t) {
            return false;
        }
        const r = n ? m : d;
        const a = p(r);
        if (a == null) {
            return false;
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[AIGC] blocked isVideo=",
            " required=",
            ""
        ])), n, r);
        o("WAWebVoipNackHandlers").showErrorDialog(a);
        return true;
    }
    l.showAigcUnsupportedDialogIfNeeded = _;
}, 226);