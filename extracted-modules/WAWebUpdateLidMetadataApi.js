__d("WAWebUpdateLidMetadataApi", [
    "WAWebApiContact",
    "WAWebBackendApi",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ updates: t }) {
            const n = t.map(({ data: t, lid: n })=>{
                const r = {
                    lid: n
                };
                if (t.shareOwnPn != null) {
                    r.shareOwnPn = t.shareOwnPn;
                }
                if (t.displayNameLID != null) {
                    r.displayNameLID = t.displayNameLID;
                }
                if (t.requestedPnTimestamp != null) {
                    r.requestedPnTimestamp = t.requestedPnTimestamp;
                }
                if (t.username != null) {
                    r.username = t.username;
                }
                return r;
            });
            yield o("WAWebBackendApi").frontendSendAndReceive("bulkUpdateLidContactState", {
                lidContactDataMappings: n
            });
            yield o("WAWebApiContact").updateLidMetadata(t);
        });
        return s.apply(this, arguments);
    }
    l.updateLidMetadata = e;
}, 98);