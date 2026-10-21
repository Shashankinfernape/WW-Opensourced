__d("WAWebDeviceInfoBridgeApi", [
    "Promise",
    "WAWebL10N",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = "0.1";
    const u = (()=>{
        function t() {
            this.$1 = null;
        }
        const t_prototype = t.prototype;
        t_prototype.get = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$1 == null) {
                    this.$1 = yield this.getOsRelease();
                }
                return {
                    osVersion: this.$1,
                    osBuild: "0.1",
                    hardware: "desktop",
                    manufacturer: "",
                    device: "Desktop",
                    lg: r("WAWebL10N").getLanguage(),
                    lc: r("WAWebL10N").getRegion() || "",
                    mcc: "000",
                    mnc: "000",
                    sim_mnc: "000",
                    sim_mcc: "000"
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getOsRelease = function() {
            return (e || (e = n("Promise"))).resolve(s);
        };
        return t;
    })();
    const c = new u;
    const d = {
        getDeviceInfo: function() {
            return c.get();
        }
    };
    l.DeviceInfoBridgeApi = d;
}, 98);