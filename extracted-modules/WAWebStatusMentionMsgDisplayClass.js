__d("WAWebStatusMentionMsgDisplayClass", [
    "WAWebStatusGatingUtils"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        if (o("WAWebStatusGatingUtils").isStatusMentionMessageEnabled()) {
            return null;
        }
        return "messageChat messagePlaceholder";
    }
    l.default = e;
}, 98);