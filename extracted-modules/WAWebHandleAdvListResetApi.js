__d("WAWebHandleAdvListResetApi", [
    "invariant",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAdvExpectedTsApi",
    "WAWebCryptoCurve25519",
    "WAWebDeviceListPk",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ deviceWid, incomingAdvAccountType, incomingAdvDeviceIdentity, incomingDeviceIdentity, lastDeviceJobTs, localDeviceRecord, newPrimaryKey, offline = false }) {
            const { keyIndex, rawId, timestamp } = incomingAdvDeviceIdentity;
            const y = o("WALongInt").numberOrThrowIfTooLarge(timestamp);
            const deviceWid_device = deviceWid.device;
            if (!(deviceWid_device != null && deviceWid_device !== o("WAJids").DEFAULT_DEVICE_ID)) {
                s(0, 56259);
            }
            const b = o("WAWebWidFactory").asUserWidOrThrow(deviceWid);
            let v = 0;
            v = localDeviceRecord?.timestamp ?? o("WATimeUtils").pastUnixTime((o("WAWebABProps").getABPropConfigValue("num_days_key_index_list_expiration") - 1) * o("WATimeUtils").DAY_SECONDS);
            if (localDeviceRecord != null && !localDeviceRecord.deleted) {
                if (localDeviceRecord.timestamp > y) {
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "handleADVDeviceIdentity:handleListReset: incomingTs: ",
                        " localDeviceRecord.timestamp: ",
                        ""
                    ])), y, localDeviceRecord.timestamp);
                    throw r("err")("handleADVDeviceIdentity:handleListReset: out-of-order timestamp detected");
                }
                yield o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(b, localDeviceRecord.devices, offline);
            }
            if (newPrimaryKey) {
                yield o("WAWebSignalProtocolStore").getSignalProtocolStore().saveIdentity(o("WAWebSignalCommonUtils").createSignalAddress(b).toString(), o("WAWebCryptoCurve25519").toSignalCurvePubKey(newPrimaryKey));
            }
            const S = {
                id: o("WAWebDeviceListPk").createDeviceListPK(deviceWid),
                rawId,
                timestamp: v,
                devices: [
                    {
                        id: deviceWid_device,
                        keyIndex
                    },
                    {
                        id: o("WAJids").DEFAULT_DEVICE_ID,
                        keyIndex: 0
                    }
                ],
                validIndexes: null,
                currentIndex: null,
                deleted: false
            };
            const R = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord({
                deviceRecord: S,
                incomingTs: y,
                lastDeviceJobTs
            });
            S.expectedTs = R.expectedTs;
            S.expectedTsLastDeviceJobTs = R.expectedTsLastDeviceJobTs;
            S.expectedTsUpdateTs = R.expectedTsUpdateTs;
            if (incomingAdvAccountType != null) {
                S.advAccountType = incomingAdvAccountType;
            }
            yield o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
                deviceUpdateResult: [
                    {
                        wid: b,
                        update: S,
                        currentRecord: null
                    }
                ],
                offline
            });
            yield o("WAWebSignalProtocolStore").getSignalProtocolStore().saveIdentity(o("WAWebSignalCommonUtils").createSignalAddress(deviceWid).toString(), o("WAWebCryptoCurve25519").toSignalCurvePubKey(incomingDeviceIdentity));
        });
        return c.apply(this, arguments);
    }
    l.handleListReset = u;
}, 98);