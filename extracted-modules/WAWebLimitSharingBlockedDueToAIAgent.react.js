__d("WAWebLimitSharingBlockedDueToAIAgent.react", [
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebLimitSharingAIGroupBlock",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component title={o("WAWebLimitSharingAIGroupBlock").getLimitSharingBlockedByGroupAgentTitle()} okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager} testid="limit-sharing-blocked-due-to-ai-agent-popup">{o("WAWebLimitSharingAIGroupBlock").getLimitSharingBlockedByGroupAgentText()}</Component>;
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);