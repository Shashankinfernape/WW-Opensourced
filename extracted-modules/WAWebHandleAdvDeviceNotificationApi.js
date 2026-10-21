__d("WAWebHandleAdvDeviceNotificationApi", [
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWebAdvExpectedTsApi",
    "WAWebBizCoexHostedAddVerification",
    "WAWebBizCoexUtils",
    "WAWebDeviceListPk",
    "WAWebHandleAdvDeviceNotificationUtils",
    "WAWebProtobufsAdv.pb"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u({ addDeviceList, keyIndexTs, lastDeviceJobTs, localDeviceRecord, localPrimaryIdentity, signedKeyIndexBytes, wid }) {
        if (!localDeviceRecord || localDeviceRecord.deleted) {
            o("WAWebBizCoexUtils").triggerUsyncForCoexDeviceAdd(addDeviceList, wid);
            return null;
        }
        if (keyIndexTs < localDeviceRecord.timestamp || localPrimaryIdentity == null) {
            return null;
        }
        const d = o("WAWebHandleAdvDeviceNotificationUtils").decodeSignedKeyIndexBytes(localPrimaryIdentity, signedKeyIndexBytes);
        if (!d) {
            return null;
        }
        const d_rawId = d.rawId;
        const incomingTs = o("WALongInt").numberOrThrowIfTooLarge(d.timestamp);
        const d_accountType = d.accountType;
        if (d_accountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleDeviceAddNotification: add to coex cache for ",
                ""
            ])), wid?.toLogString());
            o("WAWebBizCoexHostedAddVerification").addToCoexHostedVerificationCache(wid);
        }
        if (incomingTs !== keyIndexTs) {
            return null;
        }
        let clearRecord = false;
        let g = null;
        const localDeviceRecord_timestamp = localDeviceRecord.timestamp;
        if (localDeviceRecord.rawId !== d_rawId) {
            clearRecord = true;
        } else {
            g = localDeviceRecord.devices;
        }
        if (localDeviceRecord.advAccountType != null && localDeviceRecord.advAccountType !== d_accountType) {
            clearRecord = true;
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Clear record due to mismatch between local ADV account type and incoming ADV account type of ",
                " for ",
                ""
            ])), d_accountType, wid?.toLogString());
        }
        const y = new Set(d.validIndexes);
        const C = d.currentIndex || 0;
        const b = g == null ? [] : g.filter((e)=>e.id !== o("WAJids").DEFAULT_DEVICE_ID && (y.has(e.keyIndex) || e.keyIndex > C));
        addDeviceList.forEach(({ id, keyIndex })=>{
            if (id !== o("WAJids").DEFAULT_DEVICE_ID && keyIndex != null && y.has(keyIndex)) {
                b.push({
                    id,
                    keyIndex
                });
            }
        });
        b.push({
            id: o("WAJids").DEFAULT_DEVICE_ID,
            keyIndex: 0
        });
        const v = {
            id: o("WAWebDeviceListPk").createDeviceListPK(wid),
            rawId: d_rawId,
            timestamp: localDeviceRecord_timestamp,
            validIndexes: Array.from(y),
            devices: b,
            currentIndex: d.currentIndex,
            deleted: false
        };
        const S = o("WAWebAdvExpectedTsApi").computeExpectedTsForDeviceRecord({
            deviceRecord: v,
            incomingTs,
            lastDeviceJobTs
        });
        v.expectedTs = S.expectedTs;
        v.expectedTsLastDeviceJobTs = S.expectedTsLastDeviceJobTs;
        v.expectedTsUpdateTs = S.expectedTsUpdateTs;
        if (d_accountType != null) {
            v.advAccountType = d_accountType;
        }
        return {
            update: v,
            clearRecord
        };
    }
    function c(e, t, n) {
        if (n == null || n.deleted || t < n.timestamp) {
            return null;
        }
        const r = new Map(e.map((e)=>[
                e.id,
                e.keyIndex
            ]));
        const a = n.devices.filter((e)=>{
            if (e.id !== o("WAJids").DEFAULT_DEVICE_ID) {
                const t = r.get(e.id);
                return t == null || t !== e.keyIndex;
            }
            return false;
        });
        a.push({
            id: o("WAJids").DEFAULT_DEVICE_ID,
            keyIndex: 0
        });
        return {
            update: babelHelpers.extends({}, n, {
                devices: a
            }),
            clearRecord: false
        };
    }
    l.handleDeviceAddNotification = u;
    l.handleDeviceRemoveNotification = c;
}, 98);