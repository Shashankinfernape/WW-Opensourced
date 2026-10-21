__d("WAWebDeviceSwitchingBridgeApi", [
    "WAWebDeviceSwitchAction"
], function(t, n, r, o, a, i, l) {
    const e = {
        showDeviceSwitchOtp: function({ otpCode }) {
            o("WAWebDeviceSwitchAction").handleOpenDeviceSwitchCode(otpCode);
        }
    };
    l.DeviceSwitchingBridgeApi = e;
}, 98);