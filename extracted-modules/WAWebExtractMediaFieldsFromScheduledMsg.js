__d("WAWebExtractMediaFieldsFromScheduledMsg", [
    "WAWebExtractImageFieldsFromScheduledMsg",
    "WAWebExtractVideoFieldsFromScheduledMsg"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebExtractImageFieldsFromScheduledMsg").extractImageFieldsFromScheduledMsg(e) ?? o("WAWebExtractVideoFieldsFromScheduledMsg").extractVideoFieldsFromScheduledMsg(e);
    }
    l.extractMediaFieldsFromScheduledMsg = e;
}, 98);