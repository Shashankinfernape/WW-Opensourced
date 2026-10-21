__d("WAWebHandleAdvNoListResetApi", [
    "invariant",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebCryptoCurve25519",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e, t, n, r, o, a, i) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { keyIndex, timestamp }, a, i, l = false, u, c) {
            const p = o("WALongInt").numberOrThrowIfTooLarge(timestamp);
            const t_device = t.device;
            if (!(t_device != null && t_device !== o("WAJids").DEFAULT_DEVICE_ID)) {
                s(0, 56259);
            }
            if (i.timestamp >= p && i.validIndexes && !i.validIndexes.includes(keyIndex)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleADVDeviceIdentity:handleNoListReset: incomingTs: ",
                    " localDeviceRecord.timestamp: ",
                    " incomingKeyIndex ",
                    " localDeviceRecord.validIndexes: ",
                    ""
                ])), p, i.timestamp, keyIndex, i.validIndexes);
                throw r("err")("handleADVDeviceIdentity:handleNoListReset: out-of-order timestamp detected");
            }
            const f = new Map(i.devices.map((e)=>[
                    e.id,
                    e.keyIndex
                ]));
            if (!f.has(t_device) || f.get(t_device) !== keyIndex) {
                f.set(t_device, keyIndex);
                const g = Array.from(f.entries(), function([t, n]) {
                    return {
                        id: t,
                        keyIndex: n
                    };
                });
                const h = babelHelpers.extends({}, i, {
                    devices: g,
                    deleted: false
                });
                const y = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord({
                    deviceRecord: h,
                    incomingTs: p,
                    lastDeviceJobTs: u
                });
                h.expectedTs = y.expectedTs;
                h.expectedTsLastDeviceJobTs = y.expectedTsLastDeviceJobTs;
                h.expectedTsUpdateTs = y.expectedTsUpdateTs;
                h.advAccountType = c;
                yield o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
                    deviceUpdateResult: [
                        {
                            wid: o("WAWebWidFactory").asUserWidOrThrow(t),
                            update: h,
                            currentRecord: i
                        }
                    ],
                    offline: l,
                    shouldAddHostedSystemMsgIfApplicable: true
                });
                yield o("WAWebSignalProtocolStore").getSignalProtocolStore().saveIdentity(o("WAWebSignalCommonUtils").createSignalAddress(t).toString(), o("WAWebCryptoCurve25519").toSignalCurvePubKey(a));
            }
        });
        return c.apply(this, arguments);
    }
    l.handleNoListReset = u;
}, 98);