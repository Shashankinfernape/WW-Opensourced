__d("WAWebDeviceCapabilitiesSync", [
    "WAWebDeviceCapabilitiesSyncBase",
    "WAWebSyncdConst",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.DeviceCapabilities;
        };
        t_prototype.getJidIndex = function() {
            return o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().toString({
                legacy: true
            });
        };
        return t;
    })(r("WAWebDeviceCapabilitiesSyncBase"));
    const s = new e;
    l.default = s;
}, 98);