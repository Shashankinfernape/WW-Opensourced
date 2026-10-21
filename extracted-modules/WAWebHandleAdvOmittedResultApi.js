__d("WAWebHandleAdvOmittedResultApi", [
    "WAJids",
    "WAWebAdvExpectedTsApi",
    "WAWebProtobufsAdv.pb"
], function(t, n, r, o, a, i, l) {
    function e({ incomingExpectedTs, incomingTs, lastDeviceJobTs, localDeviceRecord }) {
        if (!localDeviceRecord || localDeviceRecord.deleted || incomingTs != null && incomingTs < localDeviceRecord.timestamp) {
            return null;
        }
        const i = babelHelpers.extends({}, localDeviceRecord);
        if (incomingTs != null) {
            i.timestamp = incomingTs;
            if (o("WAWebAdvExpectedTsApi").shouldClearExpectedTs(incomingTs, incomingExpectedTs, localDeviceRecord, lastDeviceJobTs)) {
                i.expectedTs = undefined;
                i.expectedTsLastDeviceJobTs = undefined;
                i.expectedTsUpdateTs = undefined;
            }
        }
        i.devices = [
            {
                id: o("WAJids").DEFAULT_DEVICE_ID,
                keyIndex: 0
            }
        ];
        if (localDeviceRecord.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
            i.advAccountType = o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE;
        }
        return {
            update: i,
            clearRecord: false,
            fromHandleOmittedResult: true
        };
    }
    l.handleOmittedResult = e;
}, 98);