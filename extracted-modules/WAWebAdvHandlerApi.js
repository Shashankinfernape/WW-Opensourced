__d("WAWebAdvHandlerApi", [
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebAppTracker",
    "WAWebCryptoCurve25519",
    "WAWebDeviceListPk",
    "WAWebHandleAdvForMessageApi",
    "WAWebHandleAdvForUsyncApi",
    "WAWebIdentityUpdateDeviceTableApi",
    "WAWebLastADVCheckTimeApi",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = o("TaskScheduler").taskScheduler("device-sync", {
        concurrency: 1
    }, o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy());
    function d(e, t, n, r, o, a, i) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(deviceWid, incomingAdvDeviceIdentity, localPrimaryIdentity, incomingPrimaryIdentity, incomingDeviceIdentity, i = false, incomingAdvAccountType) {
            const s = yield o("WAWebLastADVCheckTimeApi").getLastADVDeviceInfoCheckTime();
            return o("WAWebHandleAdvForMessageApi").handleADVDeviceUpdateForMessage({
                deviceWid,
                incomingAdvAccountType,
                incomingAdvDeviceIdentity,
                incomingDeviceIdentity,
                incomingPrimaryIdentity,
                lastDeviceJobTs: s,
                localPrimaryIdentity,
                offline: i
            });
        });
        return m.apply(this, arguments);
    }
    function p(t) {
        if (t.length === 0) {
            return (u || (u = n("Promise"))).resolve();
        }
        const r = self.performance.now();
        o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.ADVProcessing);
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "handleADVDeviceSyncResult: ",
            " updates"
        ])), t.length);
        return _(t).finally(()=>{
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleADVDeviceSyncResult: ",
                " updates, took: ",
                "ms"
            ])), t.length, Math.round(self.performance.now() - r));
            o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.ADVProcessing);
        });
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>e.wid);
            const r = e.filter((e)=>e.devices.keyIndex?.signedKeyIndexBytes);
            const a = yield o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkLoadIdentityKey(r.map((e)=>o("WAWebSignalCommonUtils").createSignalAddress(e.wid).toString()));
            const i = new Map;
            r.forEach((e, t)=>{
                const n = a[t];
                if (n != null) {
                    i.set(o("WAWebDeviceListPk").createDeviceListPK(e.wid), n);
                }
            });
            const l = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(t);
            const s = [];
            const deviceUpdateResult = [];
            let shouldAddHostedSystemMsgIfApplicable = false;
            const p = [];
            const _ = (n, r)=>{
                if (r != null) {
                    const t = e[n];
                    const a = l[n];
                    if (r.identityUpdatePromise) {
                        p.push(r.identityUpdatePromise);
                    }
                    if (r.clearRecord) {
                        s.push({
                            wid: t.wid,
                            currentList: a?.devices || [],
                            currentAdvAccountType: a?.advAccountType,
                            incomingAdvAccountType: r.update?.advAccountType
                        });
                        deviceUpdateResult.push({
                            wid: t.wid,
                            currentRecord: {
                                id: o("WAWebDeviceListPk").createDeviceListPK(t.wid),
                                deleted: true
                            },
                            update: r.update
                        });
                    } else {
                        if (r?.fromHandleOmittedResult === true) {
                            if (a?.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED && r?.update?.advAccountType === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE) {
                                shouldAddHostedSystemMsgIfApplicable = true;
                            }
                        }
                        deviceUpdateResult.push({
                            wid: t.wid,
                            currentRecord: a,
                            update: r.update
                        });
                    }
                }
            };
            for (const [g, h] of e.entries()){
                const y = i.get(o("WAWebDeviceListPk").createDeviceListPK(h.wid));
                const C = y != null ? o("WAWebCryptoCurve25519").toCurveKeyPubKey(o("WAWebSignalCommonUtils").strToBuffer(y)) : null;
                _(g, o("WAWebHandleAdvForUsyncApi").handleADVSyncResultSync(h.wid, h.devices, C, l[g]));
                yield c.yield();
            }
            if (p.length > 0) {
                yield (u || (u = n("Promise"))).all(p);
            }
            yield (u || (u = n("Promise"))).all(s.map(({ currentAdvAccountType, currentList, incomingAdvAccountType, wid })=>o("WAWebIdentityUpdateDeviceTableApi").clearDeviceRecord(wid, currentList, false, currentAdvAccountType, incomingAdvAccountType)));
            yield o("WAWebIdentityUpdateDeviceTableApi").bulkApplyDeviceUpdate({
                deviceUpdateResult,
                offline: false,
                shouldAddHostedSystemMsgIfApplicable
            });
        });
        return f.apply(this, arguments);
    }
    l.handleADVDeviceUpdateForMessage = d;
    l.handleADVDeviceSyncResult = p;
}, 98);