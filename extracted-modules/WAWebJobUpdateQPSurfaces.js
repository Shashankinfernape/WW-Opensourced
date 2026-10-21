__d("WAWebJobUpdateQPSurfaces", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCTWAConstants",
    "WAWebJobLoadQuickPromotions",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        const i = e.qpConfigPacing?.userInfo;
        return {
            impressions: i?.impressionCount ?? 0,
            primaryClicks: i?.primaryClickCount ?? 0,
            secondaryClicks: i?.secondaryClickCount ?? 0,
            dismisses: i?.dismissClickCount ?? 0
        };
    }
    function d({ tracking: l }, t) {
        const s = t.qpConfigPacing?.userInfo;
        const u = c(t);
        const d = l.dismisses - (s?.dismissClickCount ?? 0);
        const m = l.primaryClicks - (s?.primaryClickCount ?? 0);
        const p = l.secondaryClicks - (s?.secondaryClickCount ?? 0);
        const _ = l.impressions - (s?.impressionCount ?? 0);
        if (d > 0) {
            u.dismisses += d;
        }
        if (m > 0) {
            u.primaryClicks += m;
        }
        if (p > 0) {
            u.secondaryClicks += p;
        }
        if (_ > 0) {
            u.impressions += _;
        }
        const { lastDismissTs: f, lastImpressionTs: g, lastPrimaryClickTs: h, lastSecondaryClickTs: y } = l;
        if (g != null) {
            u.lastImpressionTs = g;
        }
        if (h != null) {
            u.lastPrimaryClickTs = h;
        }
        if (y != null) {
            u.lastSecondaryClickTs = y;
        }
        if (f != null) {
            u.lastDismissTs = f;
        }
        return u;
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r, a) {
            if (t.length === 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "updateQPSurfaces: no surfaces"
                ])));
                return (u || (u = n("Promise"))).resolve();
            }
            const i = t.map((e)=>e.id);
            const l = new Set(i);
            if (l.size !== i.length) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateQPSurfaces: found duplicated surface"
                ])));
                return (u || (u = n("Promise"))).resolve();
            }
            const m = new Map;
            t.forEach((e)=>{
                if (o("WAWebCTWAConstants").KNOWN_QP_SURFACES.has(e.id)) {
                    e.promotions.forEach((t)=>{
                        m.set(t.id, {
                            promotion: t,
                            surfaceId: e.id
                        });
                    });
                }
            });
            yield o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateQPSurfaces", function() {
                return o("WAWebModelStorageUtils").getStorage().lock([
                    "quick-promotions"
                ], (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t]) {
                        const o = yield t.anyOf([
                            "surfaceId"
                        ], i);
                        const l = a?.locale;
                        const s = o.map((e)=>{
                            const n = e.id;
                            const o = m.get(n);
                            if (o == null) {
                                return t.remove(n);
                            }
                            const a = d(e, o.promotion);
                            const i = {
                                data: o.promotion,
                                ts: r,
                                tracking: a
                            };
                            if (l != null) {
                                i.locale = l;
                            }
                            m.delete(n);
                            return t.merge(n, i);
                        });
                        yield (u || (u = n("Promise"))).all(s);
                        const p = Array.from(m.values());
                        const _ = p.map(({ promotion: t, surfaceId: n })=>{
                            let o = {
                                id: t.id,
                                surfaceId: n,
                                data: t,
                                ts: r,
                                tracking: c(t)
                            };
                            if (l != null) {
                                o = babelHelpers.extends({}, o, {
                                    locale: l
                                });
                            }
                            return o;
                        });
                        yield t.bulkCreate(_);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })());
            }).waitUntilCompleted();
            yield o("WAWebJobLoadQuickPromotions").loadQuickPromotions("fetch-success");
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            return m(e, t);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WATimeUtils").unixTime();
            return m(e, n, {
                locale: t
            });
        });
        return h.apply(this, arguments);
    }
    l.updateQPSurfacesFromNotification = _;
    l.updateQPSurfacesFromGraphQLFetch = g;
}, 98);