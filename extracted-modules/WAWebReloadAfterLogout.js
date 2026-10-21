__d("WAWebReloadAfterLogout", [
    "WALogger",
    "WAWebLogoutReason",
    "WAWebLogoutReasonConstants"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = [
        "post_logout",
        "logout_reason",
        "logout_message_header",
        "logout_message_subtext"
    ];
    function u(t = false, n, r) {
        const i = new URLSearchParams(window.location.search ?? "");
        for (const l of s){
            i.delete(l);
        }
        i.set("post_logout", "1");
        if (n) {
            const u = o("WAWebLogoutReason").getErrorCodeFromLogoutReason(n);
            if (u) {
                i.set("logout_reason", u);
            }
            if (n === o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked && r != null) {
                const { logoutMessageHeader, logoutMessageSubtext } = r;
                if (logoutMessageHeader != null) {
                    i.set("logout_message_header", logoutMessageHeader);
                }
                if (logoutMessageSubtext != null) {
                    i.set("logout_message_subtext", logoutMessageSubtext);
                }
            }
        }
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[reload] reloadAfterLogout errorDuringStorageClear=",
            ""
        ])), t);
        window.location.href = `${window.location.pathname}?${i.toString()}`;
    }
    l.POST_LOGOUT_URL_MARKERS = s;
    l.reloadAfterLogout = u;
}, 98);