__d("WAWebApiDeviceList", [
    "Promise",
    "WAJids",
    "WALogger",
    "WALruCache",
    "WAWebApiContact",
    "WAWebDeviceListPk",
    "WAWebSchemaDeviceList",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new (o("WALruCache")).LruCache({
        sizeLimit: 5000,
        getSize: function() {
            return 1;
        }
    });
    const d = new (o("WALruCache")).LruCache({
        sizeLimit: 5000,
        getSize: function() {
            return 1;
        }
    });
    const m = new Map;
    function p(e) {
        if (d.has(e)) {
            return (u || (u = n("Promise"))).resolve(d.get(e));
        }
        const t = m.get(e);
        if (t != null) {
            return t;
        }
        var r = o("WAWebSchemaDeviceList").getDeviceListTable().get(e).then((t)=>{
            if (m.get(e) === r) {
                d.put(e, t);
            }
            return t;
        }).finally(()=>{
            if (m.get(e) === r) {
                m.delete(e);
            }
        });
        m.set(e, r);
        return r;
    }
    function _(e) {
        if (!c.has(e)) {
            c.put(e, o("WAWebSchemaDeviceList").getDeviceListTable().get(e));
        }
        return c.get(e) ?? (u || (u = n("Promise"))).resolve(null);
    }
    function f(e) {
        const t = o("WAWebDeviceListPk").createDeviceListPK(e);
        const n = r("gkx")("16550") ? p(t) : _(t);
        o("WAWebApiContact").checkPnToLidMapping([
            e
        ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD);
        return n;
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = Array.from(new Set(e.filter((e)=>!d.has(e) && !m.has(e))));
            if (t.length > 0) {
                const r = o("WAWebSchemaDeviceList").getDeviceListTable().bulkGet(t);
                t.forEach((e, t)=>{
                    var n = r.then((r)=>{
                        const o = r[t];
                        if (m.get(e) === n) {
                            d.put(e, o);
                        }
                        return o;
                    }).finally(()=>{
                        if (m.get(e) === n) {
                            m.delete(e);
                        }
                    });
                    m.set(e, n);
                });
            }
            return (u || (u = n("Promise"))).all(e.map((e)=>{
                if (d.has(e)) {
                    return d.get(e);
                }
                return m.get(e) ?? null;
            }));
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.filter((e)=>!c.has(e));
            if (t.length > 0) {
                const r = yield o("WAWebSchemaDeviceList").getDeviceListTable().bulkGet(t);
                r.forEach((e, r)=>{
                    c.put(t[r], (u || (u = n("Promise"))).resolve(e));
                });
            }
            return (u || (u = n("Promise"))).all(e.map((e)=>c.get(e)));
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map(o("WAWebDeviceListPk").createDeviceListPK);
            const n = r("gkx")("16550") ? yield g(t) : yield y(t);
            if (e.length > 0) {
                o("WAWebApiContact").checkPnToLidMapping(e, o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_API_DEVICE_LIST_BULK_GET_DEVICE_RECORD);
            }
            return n;
        });
        return v.apply(this, arguments);
    }
    function S(e) {
        if (r("gkx")("16550")) {
            m.delete(e.id);
            d.put(e.id, e);
        } else {
            c.put(e.id, (u || (u = n("Promise"))).resolve(e));
        }
    }
    function R(t) {
        if (t.deleted) {
            const n = o("WAWebWidFactory").createUserWidFromDeviceListPk(t.id);
            if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: trying to delete own device list"
                ])));
            }
        }
    }
    function L(e) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebApiContact").checkPnToLidMapping([
                o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)
            ], o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD);
            yield o("WAWebSchemaDeviceList").getDeviceListTable().createOrReplace(e);
            S(e);
            R(e);
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebApiContact").checkPnToLidMapping(e.map((e)=>o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)), o("WAWebApiContact").CheckPnToLidMappingCaller.WAWEB_API_DEVICE_LIST_BULK_CREATE_OR_REPLACE_DEVICE_RECORD);
            yield o("WAWebSchemaDeviceList").getDeviceListTable().bulkCreateOrReplace(e);
            e.forEach((e)=>{
                S(e);
                R(e);
            });
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = false) {
            const n = Array.from((yield b(e)));
            if (t) {
                const r = new Map;
                n.forEach((e)=>{
                    if (e != null) {
                        r.set(e.id, e);
                    }
                });
                const a = new Map;
                e.forEach((e, t)=>{
                    a.set(e.toString(), t);
                });
                const i = e.reduce((acc, item)=>{
                    if (!item.isUser()) {
                        return acc;
                    }
                    const n = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(item));
                    if (n != null) {
                        acc.push(n);
                    }
                    return acc;
                }, []);
                const l = yield b(i);
                l.forEach((e, t)=>{
                    if (!(!e || e.deleted)) {
                        const l = i[t];
                        const s = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(l));
                        if (s != null) {
                            const u = r.get(o("WAWebDeviceListPk").createDeviceListPK(s));
                            if (u) {
                                if (!u.deleted) {
                                    const c = new Set(u.devices.map((e)=>e.id));
                                    e.devices.forEach((e)=>{
                                        if (!c.has(e.id)) {
                                            u.devices.push(e);
                                        }
                                    });
                                }
                            } else {
                                const d = a.get(s.toString());
                                if (d != null) {
                                    n[d] = {
                                        id: o("WAWebDeviceListPk").createDeviceListPK(s),
                                        deleted: e.deleted,
                                        devices: e.devices,
                                        currentIndex: e.currentIndex,
                                        rawId: e.rawId,
                                        timestamp: e.timestamp,
                                        validIndexes: e.validIndexes
                                    };
                                }
                            }
                        }
                    }
                });
            }
            return n.map((e)=>{
                if (e && !e.deleted) {
                    const t = e.devices.map((e)=>({
                            id: e.id,
                            isHosted: e.isHosted
                        }));
                    return {
                        id: e.id,
                        devices: t
                    };
                }
                return null;
            });
        });
        return D.apply(this, arguments);
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t === o("WAJids").DEFAULT_DEVICE_ID) {
                return true;
            }
            const n = yield T([
                e
            ]);
            const r = n[0];
            return !(!r || !r.devices.some((e)=>e.id === t));
        });
        return $.apply(this, arguments);
    }
    function P(e) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield b(e);
            return t.map((e)=>{
                if (e && !e.deleted) {
                    const t = e.devices.map((e)=>({
                            id: e.id,
                            isHosted: e.isHosted
                        }));
                    return {
                        id: e.id,
                        devices: t,
                        timestamp: e.timestamp,
                        expectedTs: e.expectedTs
                    };
                }
                return null;
            });
        });
        return N.apply(this, arguments);
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsMeUser").getMeDeviceOrThrow();
            let t = yield f(e);
            if ((t == null || t.deleted) && e.isLid()) {
                const n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
                if (n != null) {
                    t = yield f(n);
                }
            }
            if (t == null || t.deleted) {
                return null;
            }
            return t;
        });
        return w.apply(this, arguments);
    }
    function A() {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield M();
            if (e == null) {
                throw r("err")("syncd: cannot find my device list");
            }
            return e;
        });
        return F.apply(this, arguments);
    }
    function O() {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = self.performance.now();
            const t = yield o("WAWebSchemaDeviceList").getDeviceListTable().all();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "getAllDeviceLists: got ",
                " devices, took ",
                "ms"
            ])), t.length, Math.round(self.performance.now() - e));
            return t;
        });
        return B.apply(this, arguments);
    }
    l.getDeviceRecord = f;
    l.bulkGetDeviceRecord = b;
    l.createOrReplaceDeviceRecord = L;
    l.bulkCreateOrReplaceDeviceRecord = k;
    l.getDeviceIds = T;
    l.hasDevice = x;
    l.getDeviceInfoForSync = P;
    l.getMaybeMyDeviceList = M;
    l.getMyDeviceList = A;
    l.getAllDeviceLists = O;
}, 98);