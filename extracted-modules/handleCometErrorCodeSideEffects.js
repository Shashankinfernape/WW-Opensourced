__d("handleCometErrorCodeSideEffects", [
    "errorCode",
    "fbt",
    "CometErrorCodeExtraHandlers",
    "CometErrorOverlay",
    "CometExceptionDialog.react",
    "ServerHTML.react",
    "cr:9610",
    "handleCABRedirect",
    "handleCheckpointRedirect",
    "handleErrorCodeBasicSideEffects",
    "react"
], function(t, n, r, o, a, i, l, s, u) {
    "use strict";
    let e;
    const c = e || (e = o("react"));
    const d = new Set;
    function m(errorSummary) {
        return typeof errorSummary === "object" && errorSummary != null && Object.prototype.hasOwnProperty.call(errorSummary, "__html");
    }
    function p(errorCode, t, n, debugInfo = null) {
        let i = n;
        let errorSummary = t;
        i = c.jsx(r("ServerHTML.react"), {
            blob: i
        });
        if (m(errorSummary)) {
            errorSummary = u._("Something went wrong.");
        }
        o("CometErrorOverlay").injectComponent(function(t) {
            const Component = r("CometExceptionDialog.react");
            return <Component debugInfo={debugInfo} errorCode={errorCode} errorDescription={i} errorSummary={errorSummary} onClose={function() {
                d.delete(errorCode);
                t();
            }} testid={undefined}/>;
        });
    }
    function _(e, t, a, i = null, l = true, s = null) {
        if (!(n("cr:9610") != null && n("cr:9610")(e))) {
            if (!r("handleErrorCodeBasicSideEffects")(e)) {
                if (e === 1357053 && i != null) {
                    r("handleCheckpointRedirect")(i);
                } else if (e === 1357057 && i != null) {
                    r("handleCABRedirect")(i);
                } else if (!d.has(e)) {
                    o("CometErrorCodeExtraHandlers").executeHandlers(e);
                    d.add(e);
                    if (l) {
                        p(e, t, a, s);
                    }
                }
            }
        }
    }
    l.default = _;
}, 226);