__d("WAWebFetchQuickPromotionsCore", [
    "WAWebCTWAConstants",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "compactMap",
    "err"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        switch(e){
            case "AND_TYPE":
                return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.AND;
            case "OR_TYPE":
                return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.OR;
            case "NOR_TYPE":
                return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$ClauseType.NOR;
            default:
                throw r("err")("Unexpected future filter clause type");
        }
    }
    function s(e) {
        switch(e){
            case "PASS":
                return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterResult.TRUE;
            case "FAIL":
                return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterResult.FALSE;
            case "UNKNOWN":
                return o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterResult.UNKNOWN;
            default:
                throw r("err")("Unexpected future filter result");
        }
    }
    function u({ clause_type: i, filters: l }, n, o, a) {
        if (i != null) {
            const s = n != null ? r("compactMap")(n, o) : [];
            const u = r("compactMap")(l, a);
            return {
                clauseType: e(i),
                clauses: s,
                filters: u
            };
        }
    }
    function c({ filter_name: t, filter_result: n, parameters: r, passes_if_client_not_supported: a }) {
        if (t != null) {
            const i = r.reduce((e, { key: n, value: r })=>{
                if (!(n == null || r == null)) {
                    e.push({
                        key: n,
                        value: r
                    });
                }
                return e;
            }, []);
            return {
                filterName: t,
                parameters: i,
                clientNotSupportedConfig: a === true ? o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterClientNotSupportedConfig.PASS_BY_DEFAULT : o("WAWebProtobufsQuickPromotionSurfaces.pb").QP$FilterClientNotSupportedConfig.FAIL_BY_DEFAULT,
                filterResult: n != null ? s(n) : void 0
            };
        }
    }
    function d(e) {
        for (const [n, r] of o("WAWebCTWAConstants").KNOWN_QP_SURFACES.entries()){
            if (r === e) {
                return n;
            }
        }
    }
    l.parseFilterClause = u;
    l.parseFilter = c;
    l.getSurfaceIdByNuxId = d;
}, 98);