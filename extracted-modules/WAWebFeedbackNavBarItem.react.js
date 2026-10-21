__d("WAWebFeedbackNavBarItem.react", [
    "fbt",
    "WAWebABProps",
    "WAWebFeedbackModalUtils",
    "WAWebWamEnumBugReportEntryPointName",
    "WDSIconIcBugReport.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(1);
        if (!o("WAWebABProps").getABPropConfigValue("public_bug_reporting_sidebar")) {
            return null;
        }
        const t = d;
        let n;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            const a = s._("Send feedback");
            const Component = r("WDSMenuBarItem.react");
            n = <Component icon={r("WDSIconIcBugReport.react")} title={a} testid="navbar-item-feedback" isActive={false} onClick={t} delayTooltipMs={0} tabOrder={-1} tooltipPosition="end"/>;
            e[0] = n;
        } else {
            n = e[0];
        }
        return n;
    }
    function d() {
        o("WAWebFeedbackModalUtils").openFeedbackModal(o("WAWebWamEnumBugReportEntryPointName").BUG_REPORT_ENTRY_POINT_NAME.BUG_REPORT_ENTRY_POINT_SIDEBAR_BUGNUB);
    }
    l.FeedbackNavBarItem = c;
}, 226);