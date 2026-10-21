__d("WAWebHandleAdvForUsyncApi", [
    "WAJids",
    "WALogger",
    "WAWebHandleAdvKeyIndexResultApi",
    "WAWebHandleAdvOmittedResultApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, { deviceList, keyIndex }, r, a, i, l) {
        if (keyIndex == null || keyIndex.signedKeyIndexBytes == null) {
            if (deviceList != null && deviceList.some((e)=>e.id !== o("WAJids").DEFAULT_DEVICE_ID)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[processADVSyncResult] drop: has companion, no keyIndexBytes"
                ])));
                return;
            }
            return o("WAWebHandleAdvOmittedResultApi").handleOmittedResult({
                incomingExpectedTs: keyIndex?.expectedTs,
                incomingTs: keyIndex?.ts,
                lastDeviceJobTs: i,
                localDeviceRecord: a
            });
        }
        const { expectedTs, signedKeyIndexBytes, ts } = keyIndex;
        return o("WAWebHandleAdvKeyIndexResultApi").handleKeyIndexResultSync(t, deviceList, ts, signedKeyIndexBytes, r, a, i, expectedTs, l);
    }
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceResponse, lastDeviceJobTs, localDeviceRecord, localPrimaryIdentity, preDecodedKeyIndexList, userWid }) {
            return s(userWid, deviceResponse, localPrimaryIdentity, localDeviceRecord, lastDeviceJobTs, preDecodedKeyIndexList);
        });
        return c.apply(this, arguments);
    }
    l.handleADVSyncResultSync = s;
    l.handleADVSyncResult = u;
}, 98);