__d("WAWebDeviceCapabilitiesV2Sync", [
    "WAWebABProps",
    "WAWebDeviceCapabilitiesSyncBase",
    "WAWebSyncdConst",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.DeviceCapabilitiesV2;
        };
        t_prototype.getJidIndex = function() {
            return o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().toString();
        };
        t_prototype.getValueField = function() {
            return "deviceCapabilitiesV2";
        };
        t_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                if (o("WAWebABProps").getABPropConfigValue("device_capabilities_v2_sync_enabled")) {
                    return e.prototype.applyMutations.call(this, t);
                }
                return t.map(()=>({
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    }));
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return t;
    })(r("WAWebDeviceCapabilitiesSyncBase"));
    const s = new e;
    l.default = s;
}, 98);