__d("WASmaxOutSpamBizReportMixin", [
    "WASmaxJsx",
    "WASmaxMixins",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    function e({ bizApiReportKnownAccount, bizApiReportMessageReport }) {
        const r = o("WASmaxJsx").smax("spam_list", null, o("WASmaxJsx").smax("biz_api_report", {
            known_account: o("WAWap").CUSTOM_STRING(bizApiReportKnownAccount),
            message_report: o("WAWap").CUSTOM_STRING(bizApiReportMessageReport)
        }));
        return r;
    }
    function s(t, n) {
        const r = e(n);
        return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBizReportMixin = s;
}, 98);