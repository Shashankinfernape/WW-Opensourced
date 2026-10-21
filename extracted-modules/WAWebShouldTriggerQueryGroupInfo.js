__d("WAWebShouldTriggerQueryGroupInfo", [
    "WAWebIsAddressingModeMismatch",
    "WAWebSchemaGroupMetadata",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ action: t, disableForCAGs: n, groupWid: r }) {
            const a = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(r.toString());
            if (a == null) {
                return false;
            }
            const i = a?.defaultSubgroup === true;
            if (i && n) {
                return false;
            }
            return o("WAWebIsAddressingModeMismatch").isAddressingModeMismatch(a, t);
        });
        return s.apply(this, arguments);
    }
    l.shouldTriggerQueryGroupInfo = e;
}, 98);