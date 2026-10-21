__d("WAWebGetMetricHistorySyncPayloadType", [
    "WAWebWamEnumMdBootstrapHistoryPayloadType"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        switch(e){
            case 0:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.INITIAL;
            case 1:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.STATUS_V3;
            case 2:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.FULL_HISTORY;
            case 3:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.RECENT_HISTORY;
            case 4:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.PUSHNAME;
            case 5:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.NON_BLOCKING_DATA;
            case 6:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.ON_DEMAND;
            default:
                return o("WAWebWamEnumMdBootstrapHistoryPayloadType").MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE.PUSHNAME;
        }
    }
    l.getMetricHistorySyncPayloadType = e;
}, 98);