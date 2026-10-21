__d("WAWebGroupAgentConflictPopup.react", [
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebGroupAgentConflictAddResult",
    "WAWebModalManager",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u({ agentWids }) {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        return <Component okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager} testid="group_agent_conflict_popup">{o("WAWebGroupAgentConflictAddResult").formatAgentConflictRefusal(agentWids)}</Component>;
    }
    u.displayName = `${u.name} [from ${i.id}]`;
    l.default = u;
}, 98);