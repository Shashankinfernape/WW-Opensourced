__d("WAWebHandleAdvDeviceNotificationForUsyncApi", [
    "invariant",
    "WAWebHandleAdvDeviceNotificationApi"
], function(t, n, r, o, a, i, l, s) {
    function e({ deviceNotification, lastDeviceJobTs, localDeviceRecord, localPrimaryIdentity, type, userWid }) {
        const { deviceList, keyIndex } = deviceNotification;
        if (deviceList == null) {
            s(0, 75739, type);
        }
        if (keyIndex == null) {
            s(0, 75740, type);
        }
        const { signedKeyIndexBytes, ts: keyIndexTs } = keyIndex;
        if (type === "add") {
            if (signedKeyIndexBytes == null) {
                s(0, 75741, type);
            }
            return o("WAWebHandleAdvDeviceNotificationApi").handleDeviceAddNotification({
                addDeviceList: deviceList,
                keyIndexTs,
                lastDeviceJobTs,
                localDeviceRecord,
                localPrimaryIdentity,
                signedKeyIndexBytes,
                wid: userWid
            });
        }
        if (type === "remove") {
            return o("WAWebHandleAdvDeviceNotificationApi").handleDeviceRemoveNotification(deviceList, keyIndex.ts, localDeviceRecord);
        }
    }
    l.handleDeviceNotification = e;
}, 98);