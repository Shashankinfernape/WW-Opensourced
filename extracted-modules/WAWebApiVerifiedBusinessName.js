__d("WAWebApiVerifiedBusinessName", [
    "invariant",
    "$InternalEnum",
    "Promise",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebSchemaVerifiedBusinessName",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u() {
        return o("WAWebSchemaVerifiedBusinessName").getVerifiedBusinessNameTable().all();
    }
    const c = n("$InternalEnum").Mirrored([
        "Replace",
        "Merge"
    ]);
    function d(e) {
        return o("WAWebSchemaVerifiedBusinessName").getVerifiedBusinessNameTable().get(k(e));
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!e.isLid()) {
                s(0, 86986);
            }
            const t = yield d(e);
            if (t == null) {
                const n = o("WAWebLidMigrationUtils").toPn(e);
                if (n != null) {
                    const r = yield d(n);
                    if (r != null) {
                        return babelHelpers.extends({}, r, {
                            id: k(e)
                        });
                    }
                }
            }
            return t;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebLidMigrationUtils").toLid(e);
            if (t != null) {
                const n = yield d(t);
                if (n != null) {
                    return babelHelpers.extends({}, n, {
                        id: k(e)
                    });
                }
            }
            return d(e);
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.isUser()) {
                if (e.isLid()) {
                    return m(e);
                }
                return _(e);
            }
            return null;
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map(b);
            const n = yield o("WAWebSchemaVerifiedBusinessName").getVerifiedBusinessNameTable().bulkGet(Array.from(new Set(t.flat())));
            const r = new Map;
            for (const a of n){
                if (a != null) {
                    r.set(a.id, a);
                }
            }
            return e.map((e, n)=>{
                const o = t[n].map((e)=>r.get(e)).find(Boolean);
                if (o == null) {
                    return null;
                }
                return babelHelpers.extends({}, o, {
                    id: k(e)
                });
            });
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        if (e.isUser()) {
            return [
                o("WAWebLidMigrationUtils").toLid(e),
                o("WAWebLidMigrationUtils").toPn(e)
            ].filter(Boolean).map(k);
        }
        return [];
    }
    function v(e, t, n) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n = c.Replace) {
            const r = o("WAWebSchemaVerifiedBusinessName").getVerifiedBusinessNameTable();
            const a = k(e);
            const i = babelHelpers.extends({}, t, {
                id: a
            });
            if (n === c.Replace) {
                yield r.createOrReplace(i);
            } else {
                yield r.createOrMerge(a, i);
            }
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield d(e);
            if (t?.privacyMode == null) {
                return null;
            }
            return E(t.privacyMode);
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        const t = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(e.actualActors);
        const n = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(e.hostStorage);
        if (t == null || n == null) {
            return null;
        }
        return {
            actualActors: t,
            hostStorage: n,
            privacyModeTs: e.privacyModeTs
        };
    }
    function k(e) {
        if (e.isLid()) {
            return e.toString();
        }
        return e.user;
    }
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a = c.Replace) {
            const i = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t);
            return (e || (e = n("Promise"))).all(i.map((e)=>v(e, r, a)));
        });
        return T.apply(this, arguments);
    }
    l.getAllVerifiedNames = u;
    l.VerifiedBusinessNameUpdateType = c;
    l.getVerifiedBusinessNameRecord = d;
    l.getVerifiedBusinessNameRecordLidAware = g;
    l.bulkGetVerifiedBusinessNameRecordsLidAware = y;
    l.createOrUpdateVerifiedBusinessName = v;
    l.getPrivacyMode = R;
    l.convertPrivacyModeFromStorageType = E;
    l.widToId = k;
    l.createOrUpdateVerifiedBusinessNameLidAware = I;
}, 98);