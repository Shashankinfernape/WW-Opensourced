__d("WAWebDeviceSwitchAction", [
    "WAWebDeviceSwitchingPopupLoadable",
    "WAWebModalManager",
    "WAWebNotificationBackend",
    "WAWebUserPrefsMeUser",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(otpCode) {
        const wid = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        const n = {
            wid,
            otpCode
        };
        o("WAWebNotificationBackend").showDeviceSwitchNotification(n);
        o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebDeviceSwitchingPopupLoadable").DeviceSwitchingPopupLoadable, {
            otpCode
        }));
    }
    l.handleOpenDeviceSwitchCode = u;
}, 98);