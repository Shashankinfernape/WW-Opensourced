__d("WAWebAdvSyncDeviceListApi", [
    "Promise",
    "WALogger",
    "WAWebAdvHandlerApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebDeviceListPk",
    "WAWebGetIdentityKeysJob",
    "WAWebIdentityFunction",
    "WAWebPhashUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = new Map;
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ context, phash, wids }) {
            if (phash != null) {
                const i = yield o("WAWebApiDeviceList").getDeviceIds(wids);
                const l = i.map((e)=>{
                    if (e == null) {
                        return [];
                    }
                    return e.devices.map((t)=>o("WAWebWidFactory").createDeviceWidFromDeviceListPk(e.id, t.id, t.isHosted));
                });
                const s = l.flatMap(o("WAWebIdentityFunction").identityFunction);
                const u = yield o("WAWebPhashUtils").phashV2(s);
                if (phash === u) {
                    return;
                }
            }
            const m = new Set;
            const p = [];
            wids.forEach((e)=>{
                const t = d.get(o("WAWebDeviceListPk").createDeviceListPK(e));
                if (t) {
                    m.add(t);
                } else {
                    p.push(e);
                }
            });
            if (p.length === 0) {
                yield (c || (c = n("Promise"))).all(Array.from(m));
                return;
            }
            const f = _(p, context);
            p.map((e)=>{
                d.set(o("WAWebDeviceListPk").createDeviceListPK(e), f);
            });
            yield (c || (c = n("Promise"))).all([
                f
            ].concat(Array.from(m)));
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            try {
                const a = yield o("WAWebApiDeviceList").getDeviceInfoForSync(t);
                const i = a.map((e)=>{
                    if (e == null) {
                        return [];
                    }
                    return e.devices.map((t)=>o("WAWebWidFactory").createDeviceWidFromDeviceListPk(e.id, t.id, t.isHosted));
                });
                const l = yield (c || (c = n("Promise"))).all(i.map((e)=>{
                    if (e.length === 0) {
                        return "";
                    }
                    return o("WAWebPhashUtils").phashV2(e);
                }));
                const s = t.map((e, t)=>({
                        id: e,
                        hash: l[t],
                        ts: a[t]?.timestamp,
                        expectedTs: a[t]?.expectedTs
                    }));
                return b(s, r);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to sync device list with error: ",
                    ""
                ])), error);
            } finally{
                t.map((e)=>{
                    d.delete(o("WAWebDeviceListPk").createDeviceListPK(e));
                });
            }
        });
        return f.apply(this, arguments);
    }
    function g() {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            yield m({
                wids: o("WAWebUserPrefsMeUser").getMeDeviceWids(),
                context: null,
                phash: null
            });
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(wids) {
            yield m({
                wids,
                context: null,
                phash: null
            });
            return o("WAWebApiDeviceList").getDeviceIds(wids);
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.length !== 0) {
                const n = e.map((e)=>e.id);
                const a = o("WAWebContactSyncUtils").getDeviceSyncBackfillPnWids(n);
                o("WAWebApiContact").checkPnToLidMapping(n, o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_ADV_SYNC_DEVICE_LIST_SEND_DEVICE_SYNC_REQUEST);
                const i = new (o("WAWebUsync")).USyncQuery().withContext(t || "interactive").withDeviceProtocol();
                e.forEach((e)=>{
                    if (e.id.user !== "0") {
                        i.withUser(new (o("WAWebUsyncUser")).USyncUser().withId(e.id).withDeviceHash(String(e.hash)).withTs(e.ts).withExpectedTs(e.expectedTs));
                    }
                });
                const l = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
                    syncType: o("WAWebContactSyncLogger").getSyncTypeString(t || "interactive", "query"),
                    requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.DEVICE_REQUEST,
                    requestedCount: e.length,
                    protocols: i.protocols
                });
                const c = yield o("WAWebContactSyncLogger").contactSyncLogger.executeWithLogging(l, function() {
                    return i.execute();
                }, o("WAWebContactSyncErrorCodes").DEVICE_SYNC);
                const d = c.error.all;
                if (d) {
                    o("WAWebContactSyncLogger").contactSyncLogger.logFailure(l, d.errorCode, c, o("WAWebContactSyncErrorCodes").DEVICE_SYNC);
                    throw r("err")(`syncDeviceList: error ${d.errorCode}: ${d.errorText}`);
                }
                if (c.error.devices) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncDeviceList: error ",
                        ": ",
                        ""
                    ])), c.error.devices.errorCode, c.error.devices.errorText);
                }
                let m = c.list.filter((e)=>!("errorCode" in e.devices));
                m = m.map((e)=>({
                        wid: e.id,
                        devices: e.devices
                    }));
                m = o("WAWebContactSyncUtils").backfillMissingDeviceSyncEntries(a, m);
                const p = m.filter((e)=>e.devices.keyIndex?.signedKeyIndexBytes).map((e)=>e.wid);
                const _ = c.list.length - p.length;
                const f = p.map((e)=>e.toString()).join(",");
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncDeviceList] skip ",
                    "/",
                    " users=",
                    ""
                ])), _, c.list.length, f);
                yield o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(p);
                o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, c, o("WAWebContactSyncLogger").createUpdateCounterWith({
                    deviceChange: m.length
                }));
                return o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(m);
            }
        });
        return v.apply(this, arguments);
    }
    l.syncDeviceList = m;
    l.syncMyDeviceList = g;
    l.syncAndGetDeviceList = y;
}, 98);