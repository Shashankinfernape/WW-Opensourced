__d("WAWebHandleAdvForMessageApi", [
    "invariant",
    "WAJids",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebCurrentUser",
    "WAWebHandleAdvListResetApi",
    "WAWebHandleAdvNoListResetApi",
    "WAWebSignalCommonUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceWid, incomingAdvAccountType, incomingAdvDeviceIdentity, incomingDeviceIdentity, incomingPrimaryIdentity, lastDeviceJobTs, localPrimaryIdentity, offline = false }) {
            const { keyIndex, rawId, timestamp } = incomingAdvDeviceIdentity;
            if (rawId == null) {
                s(0, 56258);
            }
            if (timestamp == null) {
                s(0, 56257);
            }
            if (keyIndex == null) {
                s(0, 56256);
            }
            const incomingAdvDeviceIdentity_1 = {
                rawId,
                timestamp,
                keyIndex
            };
            const deviceWid_device = deviceWid.device;
            if (!(deviceWid_device != null && deviceWid_device !== o("WAJids").DEFAULT_DEVICE_ID)) {
                s(0, 56259);
            }
            const y = o("WAWebWidFactory").asUserWidOrThrow(deviceWid);
            const C = yield o("WAWebApiDeviceList").getDeviceRecord(y);
            const b = localPrimaryIdentity == null || incomingPrimaryIdentity != null && !o("WAWebSignalCommonUtils").bufferEqual(localPrimaryIdentity, incomingPrimaryIdentity);
            if (o("WAWebCurrentUser").isEmployee()) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleADVDeviceIdentity: isNewPrimaryIdentity-",
                    ""
                ])), b);
            }
            if (!C || C.deleted || C.rawId !== rawId || b) {
                return o("WAWebHandleAdvListResetApi").handleListReset({
                    deviceWid,
                    incomingAdvAccountType,
                    incomingAdvDeviceIdentity: incomingAdvDeviceIdentity_1,
                    incomingDeviceIdentity,
                    lastDeviceJobTs,
                    localDeviceRecord: C,
                    newPrimaryKey: b ? incomingPrimaryIdentity : null,
                    offline
                });
            }
            return o("WAWebHandleAdvNoListResetApi").handleNoListReset(deviceWid, incomingAdvDeviceIdentity_1, incomingDeviceIdentity, C, offline, lastDeviceJobTs, incomingAdvAccountType);
        });
        return c.apply(this, arguments);
    }
    l.handleADVDeviceUpdateForMessage = u;
}, 98);