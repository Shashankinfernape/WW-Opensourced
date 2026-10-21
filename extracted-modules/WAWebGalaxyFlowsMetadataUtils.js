__d("WAWebGalaxyFlowsMetadataUtils", [
    "WATimeUtils",
    "WAWebABProps"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (e.flowMetadata?.data_api_version == null) {
            const n = e.messageTimestamp;
            const r = o("WAWebABProps").getABPropConfigValue("wae_metadata_integrity_timeout_minutes");
            return n != null && o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(n), r * o("WATimeUtils").MINUTE_SECONDS);
        }
        return false;
    }
    l.skipIfStaleMedatadataOrNullDataApiVersion = e;
}, 98);