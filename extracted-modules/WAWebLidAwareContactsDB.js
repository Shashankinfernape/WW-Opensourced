__d("WAWebLidAwareContactsDB", [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = [
        "contactHash",
        "id",
        "phoneNumber",
        "phoneNumberCreatedAt",
        "pnContactHash"
    ];
    let _;
    function f(e) {
        const n = r("WAWebWid").isStringLid(e) ? null : o("WAWebWidFactory").createWid(e);
        const a = n != null && n.isUserNotPSA() ? o("WAWebApiContact").getCurrentLid(o("WAWebWidFactory").asUserWidOrThrow(n))?.toString() : null;
        if (n == null || a == null) {
            return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().get(e);
        }
        return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().get(a).then((t)=>{
            if (t == null) {
                return null;
            }
            return o("WAWebContactsDbLidMigrationUtils").removeLidOnlyCols(t, e);
        });
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().all(e, t);
            return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().clear(e);
    }
    function C(e, t, n) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            if (e[0] === "contactHash") {
                const i = yield (_ || (_ = n("Promise"))).all([
                    o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().equals(e, t, a),
                    o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().equals([
                        "pnContactHash"
                    ], t, a)
                ]);
                const l = i[0];
                const s = i[1];
                const u = new Map;
                s?.forEach(function(e) {
                    if (r("WAWebWid").isStringLid(e.id)) {
                        const { contactHash: t, id: n, phoneNumber: a, phoneNumberCreatedAt: i, pnContactHash: l } = e;
                        const s = babelHelpers.objectWithoutPropertiesLoose(e, p);
                        const c = o("WAWebApiContact").getPnIfLidIsLatestMapping(o("WAWebWidFactory").createUserLidOrThrow(n));
                        if (c != null) {
                            const d = c.toJid();
                            u.set(d, babelHelpers.extends({}, s, {
                                id: d,
                                contactHash: e.pnContactHash
                            }));
                        }
                    }
                });
                if (u.size === 0) {
                    if (l != null) {
                        l.map((e)=>u.set(e.id, e));
                    }
                }
                return Array.from(u.values());
            }
            const c = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().equals(e, t, a);
            return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(c);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().create(e);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = o("WAWebContactsDbLidMigrationUtils").maybeReplacePhoneNumbersWithLatestLids(e);
            const a = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkGet(r, t);
            const i = [];
            for(let l = 0; l < e.length; l++){
                const s = e[l];
                const u = a[l];
                if (u == null || u.id === s) {
                    i.push(u);
                } else {
                    i.push(o("WAWebContactsDbLidMigrationUtils").removeLidOnlyCols(u, s));
                }
            }
            return (_ || (_ = n("Promise"))).resolve(i);
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.some((e)=>r("WAWebWid").isStringLid(e))) {
                throw r("err")("Expected phone contact keys");
            }
            const n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkGet(e, t);
            if (n.length !== e.length || n.some((t, n)=>t != null && t.id !== e[n])) {
                throw r("err")("Incomplete physical phone contact lookup");
            }
            return n;
        });
        return E.apply(this, arguments);
    }
    function k(e, t, n) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            const a = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(e, t);
            const i = a != null ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().merge(a.id, a, r) : (_ || (_ = n("Promise"))).resolve();
            yield (_ || (_ = n("Promise"))).all([
                o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().merge(e, t, r),
                i
            ]);
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(e, t);
            const a = r != null ? o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().createOrMerge(r.id, r) : (_ || (_ = n("Promise"))).resolve();
            yield (_ || (_ = n("Promise"))).all([
                o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().createOrMerge(e, t),
                a
            ]);
        });
        return D.apply(this, arguments);
    }
    function x(e, t) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a = "n/a") {
            const i = self.performance.now();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "bulkCreateOrMerge [",
                "]: ",
                " changes"
            ])), a, t.length);
            try {
                if (t.length === 0) {
                    return (_ || (_ = n("Promise"))).resolve();
                }
                const l = r("compactMap")(t, function(e) {
                    return o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(r("nullthrows")(e.id), e);
                });
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkCreateOrMerge [",
                    "]: ",
                    " alternate rows"
                ])), a, l.length);
                return yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkCreateOrMerge([].concat(t, l));
            } finally{
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkCreateOrMerge [",
                    "]: ",
                    " changes: ",
                    "ms"
                ])), a, t.length, Math.round(self.performance.now() - i));
            }
        });
        return $.apply(this, arguments);
    }
    function P(e, t) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t = "n/a") {
            const a = self.performance.now();
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "bulkMergeOnly [",
                "]: ",
                " changes"
            ])), t, e.length);
            try {
                if (e.length === 0) {
                    return (_ || (_ = n("Promise"))).resolve();
                }
                const i = r("compactMap")(e, function(e) {
                    return o("WAWebContactsDbLidMigrationUtils").getAlternateRowUpdates(r("nullthrows")(e.id), e);
                });
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkMergeOnly [",
                    "]: ",
                    " alternate rows"
                ])), t, i.length);
                return yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkMergeOnly([].concat(e, i));
            } finally{
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkMergeOnly [",
                    "]: ",
                    " changes: ",
                    "ms"
                ])), t, e.length, Math.round(self.performance.now() - a));
            }
        });
        return N.apply(this, arguments);
    }
    function M(e) {
        return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkRemove(e);
    }
    function w(e) {
        return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().remove(e);
    }
    function A(e, t) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().lessThan(e, t);
            return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
        });
        return F.apply(this, arguments);
    }
    function O(e, t, n) {
        return B.apply(this, arguments);
    }
    function B() {
        B = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().greaterThan(e, t, n);
            return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(r);
        });
        return B.apply(this, arguments);
    }
    function W(e, t) {
        return q.apply(this, arguments);
    }
    function q() {
        q = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().anyOf(e, t);
            return o("WAWebContactsDbLidMigrationUtils").replacePnRowsWithLidData(n);
        });
        return q.apply(this, arguments);
    }
    function U(e) {
        o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().setUpdateListener(e);
    }
    function V() {
        return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().count();
    }
    function H() {
        return G.apply(this, arguments);
    }
    function G() {
        G = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().allPrimaryKeys();
        });
        return G.apply(this, arguments);
    }
    function z(e, t) {
        return j.apply(this, arguments);
    }
    function j() {
        j = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().equalsPrimaryKeys(e, t);
        });
        return j.apply(this, arguments);
    }
    const K = {
        get: f,
        all: g,
        allPrimaryKeys: H,
        clear: y,
        equals: C,
        equalsPrimaryKeys: z,
        create: v,
        bulkGet: S,
        bulkGetPhysicalPhoneRows: L,
        merge: k,
        createOrMerge: T,
        bulkCreateOrMerge: x,
        bulkMergeOnly: P,
        bulkRemove: M,
        remove: w,
        lessThan: A,
        greaterThan: O,
        anyOf: W,
        setUpdateListener: U,
        count: V
    };
    l.default = K;
}, 98);