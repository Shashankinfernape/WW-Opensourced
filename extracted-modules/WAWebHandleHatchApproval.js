__d("WAWebHandleHatchApproval", [
    "WALogger",
    "WAWebHatchApprovalManager"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c({ approvalId: n, record: a, resolvedDecision: i }) {
        if (i != null) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: received terminal record approvalId=",
                " decision=",
                ""
            ])), n, i);
            r("WAWebHatchApprovalManager").settleApproval(n);
            return;
        }
        if (a != null) {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-approval: received pending request approvalId=",
                ""
            ])), n);
            r("WAWebHatchApprovalManager").upsertApproval(a);
        }
    }
    function d(e) {
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-approval: record removed approvalId=",
            ""
        ])), e.approvalId).sendLogs("hatch-approval-record-removed");
        r("WAWebHatchApprovalManager").settleApproval(e.approvalId);
    }
    l.handleHatchApprovalRecord = c;
    l.handleRemovedHatchApprovalRecord = d;
}, 98);