__d("WAWebManageE2ESessionsJob", [
    "Promise",
    "WAJids",
    "WALogger",
    "WAResolvable",
    "WAWebAeaRollout",
    "WAWebAppTracker",
    "WAWebBackendErrors",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchPrekeysJob",
    "WAWebManagePhoneNumberMappingJob",
    "WAWebProcessKeyBundle",
    "WAWebReleaseToEventLoop",
    "WAWebRunInBatches",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.filter(k);
            const r = yield (h || (h = n("Promise"))).all([
                o("WAWebSignal").Session.hasSignalSessions(e, o("WAWebSessionScope").SessionScope.DEFAULT),
                o("WAWebSignal").Session.hasSignalSessions(t, o("WAWebSessionScope").SessionScope.PQ)
            ]);
            const a = r[0];
            const i = r[1];
            return {
                default: e.filter((e, t)=>a[t] === true),
                pq: t.filter((e, t)=>i[t] === true)
            };
        });
        return C.apply(this, arguments);
    }
    const b = 406;
    const v = new Map;
    const S = {
        SESSION_CHECK: 50
    };
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ aeaOptions: r, identityChanged: i = false, options: l, sessionScope: y, wids: C }) {
            if (l?.skipOfflineDeliveryWait !== true) {
                yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            }
            o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions: ",
                " wids: ",
                ""
            ])), C.length, C.map((e)=>e.toString()).join());
            try {
                yield o("WAWebManagePhoneNumberMappingJob").ensurePhoneNumberToLidMapping(C);
            } catch (e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: ensurePhoneNumberToLidMapping failed: ",
                    ""
                ])), C.length, e).sendLogs("ensureE2ESessions", {
                    sampling: 0.01
                });
            }
            const R = new (o("WAResolvable")).Resolvable;
            const L = [];
            const E = [];
            const k = [];
            let T = 0;
            let x = 0;
            let $ = 0;
            let P = [];
            const N = [];
            try {
                C.forEach((e)=>{
                    if (!e.isUserNotPSA()) {
                        T++;
                        return;
                    }
                    const n = o("WAWebSignalCommonUtils").createSignalAddress(e, y);
                    const a = r?.isSendTimeFetch === true && o("WAWebAeaRollout").isAeaEnforcementEnabled();
                    const i = a ? `${n}:send` : n;
                    const l = v.get(n) ?? v.get(i);
                    if (l) {
                        L.push(l);
                    } else {
                        k.push(e);
                        E.push(i);
                        v.set(i, R.promise);
                    }
                });
                if (T > 0) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: ",
                        " skipped (non-user)"
                    ])), C.length, T);
                }
                if (k.length > 0) {
                    const M = [];
                    yield o("WAWebRunInBatches").runInBatches(k, (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                            const t = yield I(e, y);
                            M.push(...t);
                        });
                        return function(t) {
                            return e.apply(this, arguments);
                        };
                    })(), {
                        batchSize: S.SESSION_CHECK
                    });
                    k.forEach((e, t)=>{
                        if (!M[t]) {
                            N.push(e);
                        }
                    });
                    if (N.length > 0) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "ensureE2ESessions: ",
                            " wids: fetch prekeys for ",
                            " wids"
                        ])), C.length, N.length);
                        const w = yield o("WAWebFetchPrekeysJob").fetchPrekeys(N, i);
                        const { errors: A, prekeyBundles: F } = w;
                        o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "ensureE2ESessions: ",
                            " wids: prekeys ",
                            ": got ",
                            ", err ",
                            ""
                        ])), C.length, N.length, F.length, A.length);
                        const O = yield D(F, y, r);
                        $ += O.depletedPrekeyCount;
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "ensureE2ESessions: ",
                            " wids: ",
                            "/",
                            " E2E sessions +"
                        ])), C.length, O.processedPrekeyCount, C.length);
                        if (A.length > 0) {
                            throw A[0];
                        }
                        x = N.length;
                    }
                }
                R.resolve();
            } catch (e) {
                if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === b && N.every((e)=>e.device != null && e.device !== o("WAJids").DEFAULT_DEVICE_ID)) {
                    o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: failed with 406 error code for companion devices: ",
                        ""
                    ])), C.length, N.map((e)=>e.toString()).join());
                    P = N;
                    R.resolve();
                } else {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "ensureE2ESessions: ",
                        " wids: request failed: ",
                        ""
                    ])), C.length, e);
                    R.resolve(e);
                    o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing);
                    throw e;
                }
            } finally{
                E.forEach((e)=>{
                    v.delete(e);
                });
            }
            try {
                const B = (yield (h || (h = n("Promise"))).all(L)).find(Boolean);
                if (B) {
                    throw B;
                }
            } catch (e) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "ensureE2ESessions: ",
                    " wids: deduped requests failed: ",
                    ""
                ])), C.length, e);
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing);
                throw e;
            } finally{
                o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.PreKeyProcessing);
            }
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "ensureE2ESessions: ",
                " wids: ",
                " existing, ",
                " req, ",
                " deduped"
            ])), C.length, k.length - x, x, L.length);
            return {
                missedPrekeyCount: x,
                depletedPrekeyCount: $,
                deletedDevices: P
            };
        });
        return L.apply(this, arguments);
    }
    function E(e, t) {
        if (t !== o("WAWebSessionScope").SessionScope.PQ) {
            return t;
        }
        if (e.kyberKey != null && k(e.wid)) {
            return o("WAWebSessionScope").SessionScope.PQ;
        }
        return o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function k(e) {
        return o("WAWebSignalCommonUtils").createSignalAddress(e, o("WAWebSessionScope").SessionScope.DEFAULT) !== o("WAWebSignalCommonUtils").createSignalAddress(e, o("WAWebSessionScope").SessionScope.PQ);
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t !== o("WAWebSessionScope").SessionScope.PQ) {
                return o("WAWebSignal").Session.hasSignalSessions(e, t);
            }
            const n = yield y(e);
            const { default: r, pq: a } = n;
            const i = new Set([].concat(r, a));
            return e.map((e)=>i.has(e));
        });
        return T.apply(this, arguments);
    }
    function D(e, t, n) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            let r = 0;
            let a = 0;
            for (const i of e){
                const u = E(i, t);
                const c = yield o("WAWebProcessKeyBundle").processKeyBundles([
                    i
                ], u, n);
                r += c.depletedPrekeyCount ?? 0;
                a += c.processedPrekeyCount ?? 0;
                yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
            }
            return {
                depletedPrekeyCount: r,
                processedPrekeyCount: a
            };
        });
        return x.apply(this, arguments);
    }
    l.getSignalSessionWids = y;
    l.ensureE2ESessions = R;
    l.getPrekeyBundleSessionScope = E;
}, 98);