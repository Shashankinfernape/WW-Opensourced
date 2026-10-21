__d("WAWebHandleQPSurfacesNotification", [
    "WAWebCTWAConstants",
    "WAWebJobUpdateQPSurfaces",
    "WAWebParseQPSurfacesNotification",
    "WAWebQuickPromotionGating",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebParseQPSurfacesNotification").parseQPSurfacesNotification(e);
            const { makeAck, surfaces, ts } = t;
            const i = makeAck();
            let l;
            if (o("WAWebQuickPromotionGating").qpGraphQLEnabled()) {
                const s = [];
                const u = [];
                const c = o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQL();
                l = surfaces.filter((e)=>{
                    const t = o("WAWebCTWAConstants").KNOWN_QP_SURFACES.get(e.id);
                    if (t == null) {
                        return false;
                    }
                    const n = !c.has(t);
                    return n;
                });
            } else {
                l = surfaces;
            }
            yield o("WAWebJobUpdateQPSurfaces").updateQPSurfacesFromNotification(l, ts);
            return i;
        });
        return s.apply(this, arguments);
    }
    function u(e, t) {}
    l.handleQPSurfacesNotification = e;
}, 98);