__d("WAWebKeyManagementUtils", [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = [];
            const n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
            try {
                const r = yield o("WAWebApiDeviceList").getMyDeviceList();
                r.devices.forEach((e)=>{
                    if (e.id !== n.getDeviceId()) {
                        t.push(o("WAWebWidFactory").createDeviceWidFromUserAndDevice(n.user, n.server, e.id));
                    }
                });
            } catch (error) {
                const a = String(error);
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] getPeerDevices: ",
                    ". Key reqs->primary only"
                ])), a).sendLogs(a);
                return [
                    o("WAWebWidFactory").createDeviceWidFromUserAndDevice(n.user, n.server, 0)
                ];
            }
            return t;
        });
        return u.apply(this, arguments);
    }
    l.getPeerDevices = s;
}, 98);