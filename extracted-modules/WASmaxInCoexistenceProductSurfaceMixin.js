__d("WASmaxInCoexistenceProductSurfaceMixin", [
    "WAResultOrError",
    "WASmaxInCoexistenceEnums",
    "WASmaxParseUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("WASmaxParseUtils").attrStringEnum(e, "product_surface", o("WASmaxInCoexistenceEnums").ENUM_AIFROMMETA_AUTOMATION_BUSINESSPLATFORM);
        if (t.success) {
            return o("WAResultOrError").makeResult({
                productSurface: t.value
            });
        }
        return t;
    }
    l.parseProductSurfaceMixin = e;
}, 98);