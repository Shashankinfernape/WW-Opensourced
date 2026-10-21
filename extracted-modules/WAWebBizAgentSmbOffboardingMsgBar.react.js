__d("WAWebBizAgentSmbOffboardingMsgBar.react", [
    "fbt",
    "WAWebAuthAgentSmbJourneyLogger",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_parentCompanyName = e.parentCompanyName;
        o("WAWebAuthAgentSmbJourneyLogger").useLogAgentBlockedComposerViewOnMount("agent_degraded", true);
        const r = e_parentCompanyName !== "";
        let a;
        if (t[0] !== r || t[1] !== e_parentCompanyName) {
            a = <span data-testid="agent-smb-offboarding-msgbar">{r ? s._("You can't send messages until you reconnect to {companyName}", [
                s._param("companyName", e_parentCompanyName)
            ]) : s._("You can't send messages until you reconnect to your company")}</span>;
            t[0] = r;
            t[1] = e_parentCompanyName;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    l.default = c;
}, 226);