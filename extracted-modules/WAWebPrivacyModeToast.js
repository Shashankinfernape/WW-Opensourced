__d("WAWebPrivacyModeToast", [
    "WAWebPrivacyModeSettingsFBT",
    "WAWebToast.react",
    "WAWebToastManager",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = 3000;
    function c(e, t) {
        const n = e ? o("WAWebPrivacyModeSettingsFBT").privacyModeToastEnabled() : o("WAWebPrivacyModeSettingsFBT").privacyModeToastDisabled();
        o("WAWebToastManager").ToastManager.open(s.jsx(o("WAWebToast.react").Toast, {
            msg: n,
            duration: u,
            action: t != null ? {
                actionText: o("WAWebPrivacyModeSettingsFBT").privacyModeToastUndo(),
                onAction: t
            } : undefined
        }));
    }
    l.showPrivacyModeToast = c;
}, 98);