__d("WAWebSyncdKeyCallbacksApi", [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebKeyManagementSendKeyRequestApi",
    "WAWebKeyManagementSendKeyShareApi",
    "WAWebSyncDeviceAdvDeviceListJob",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let t = yield o("WAWebApiDeviceList").getMaybeMyDeviceList();
            if (t == null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] own device list missing; refreshing before fingerprint"
                ])));
                yield o("WAWebSyncDeviceAdvDeviceListJob").syncMyDeviceListJob();
                t = yield o("WAWebApiDeviceList").getMyDeviceList();
            }
            const n = t;
            const { currentIndex, devices, rawId } = n;
            if (currentIndex == null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] missing current idx for own device, len=",
                    ""
                ])), devices?.length);
                throw r("err")("syncd: missing current index for own device");
            }
            return {
                currentIndex,
                deviceIndexes: devices.map((e)=>e.keyIndex),
                rawId
            };
        });
        return c.apply(this, arguments);
    }
    const d = function(keys) {
        return o("WAWebKeyManagementSendKeyShareApi").sendAppStateSyncKeyShare({
            type: "key_rotation",
            keys
        });
    };
    l.getDeviceFingerprint = u;
    l.sendSyncdKeyRequest = o("WAWebKeyManagementSendKeyRequestApi").sendAppStateSyncKeyRequest;
    l.sendSyncdKeyRotation = d;
}, 98);