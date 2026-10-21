__d("WAWebAdvDeviceUpdateNotificationApi", [
    "Promise",
    "WAWebApiDeviceList",
    "WAWebCryptoCurve25519",
    "WAWebHandleAdvDeviceNotificationForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    function s({ devices, type, wid }) {
        if (type == null) {
            return (e || (e = n("Promise"))).reject(r("err")("handleADVDeviceNotification: notification without type"));
        }
        return u({
            devices,
            type,
            wid
        });
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ devices, type, wid }) {
            let localPrimaryIdentity = null;
            if (type === "add") {
                const i = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().loadIdentityKey(o("WAWebSignalCommonUtils").createSignalAddress(wid).toString());
                localPrimaryIdentity = i != null ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(o("WAWebSignalCommonUtils").strToBuffer(i)) : null;
            }
            const l = yield o("WAWebApiDeviceList").getDeviceRecord(wid);
            const lastDeviceJobTs = yield o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime();
            const u = o("WAWebHandleAdvDeviceNotificationForUsyncApi").handleDeviceNotification({
                deviceNotification: devices,
                lastDeviceJobTs,
                localDeviceRecord: l,
                localPrimaryIdentity,
                type,
                userWid: wid
            });
            if (u) {
                if (u.clearRecord) {
                    yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(wid, l?.devices || [], false, l?.advAccountType, u?.update?.advAccountType);
                }
                return o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
                    deviceUpdateResult: [
                        {
                            wid,
                            update: u.update,
                            currentRecord: l
                        }
                    ]
                });
            }
        });
        return c.apply(this, arguments);
    }
    l.handleADVDeviceNotification = s;
}, 98);